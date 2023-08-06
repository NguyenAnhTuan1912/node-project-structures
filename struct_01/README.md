# Modules Structure 001

Đây là cấu trúc module đầu tiên, các API Handlers được quản lý trong một cùng một module. Cấu trúc này áp dụng `Builder` và hơi có `Singleton` Pattern, tương lai có thể áp dụng thêm nhiều Pattern nữa.

## Structure
Cấu trúc của dự án này sẽ bao gồm các folder gồm file `index.ts` để làm file export tổng theo cấu trúc module. Tuy nhiên thì cốt lõi của tính module là ở `modules`, nơi sẽ thực hiện các nhiệm vụ chính trong app, các modules này chứa các handlers và các handlers này sẽ phụ thuộc vào một số configurations khác trong app để thực hiện các hành động đó.

Được xây dựng theo hướng khai báo trước -> tạo sau. Cho nên các `templates` đóng vai trò khá quan trọng trong project, nó làm gọn code, quản lý nhiều object hơn và đảm bảo được hướng xây dựng của cấu trúc (xem thêm trong templates/router_manager và templates/handler)

__Chú thích__:
- `classes`: folder này chứa một số class global, thường thì là những classes gây ảnh hưởng lên toàn app.
  - `MyServer`: tạo ra một object dùng để quản lý server, có một số thuộc tính, xem thêm trong file để biết thêm chi tiết.
  - `ServerBuilder`: tạo ra một object dùng để build server.
- `db`: folder này dùng để chứa các configs của MongoDB. Với mỗi folder sẽ là một DB.
- `templates`: folder này chứa các function dùng để tạo ra một số object khác trong app, nó dùng cho global.
  - `router_manager`: tạo ra một router manager, manager này nhận vào các handlers để set-up API cho sau này.
  - `handler`: tạo ra một function dùng để xử lý các request từ client và response về cho client. Giúp tiết kiệm thời gian cho việc tạo handler api.
- `modules`: folder này chứa các module để thực hiện yêu cầu từ client, cái này không cần phải giải thích thêm.
- `services`: là các service từ bên ngoài, có thể kể đến như là google, cloudinary.
- `types`: chứa type trong project.
- `utils`: các hàm helpers.
- `index.ts`: file này dùng để set-up, config server và chạy!!!

### Without graphic
```
.
└── src/
    ├── classes/
    │   ├── MyServer.ts
    │   └── ServerBuilder.ts
    ├── db/
    │   ├── temp_a/
    │   │   └── index.ts
    │   └── temp_b/
    │       └── index.ts
    ├── templates/
    │   ├── router_manager/
    │   │   └── index.ts
    │   └── handler/
    │       └── index.ts
    ├── modules/
    │   └── post/
    │       ├── handlers/
    │       │   ├── createPost.ts
    │       │   └── getPost.ts
    │       └── index.ts
    ├── services/
    │   ├── cloudinary/
    │   │   └── index.ts
    │   └── google/
    │       └── index.ts
    ├── types/
    │   └── index.ts
    ├── utils/
    │   └── index.ts
    ├── types/
    │   └── index.ts
    └── index.ts
```

### With graphic
![image](https://github.com/NguyenAnhTuan1912/node-project-structures/assets/86825061/19f1785a-3a2a-4408-a509-916748e2b7ce)

__Giải thích__: Module dựa vào `Utils` (hầu hết chỗ nào cũng phụ thuộc bởi vì nó là các helper functions) và `DB Manager` (db) để hoạt động, tuy nhiên thì tụi này cũng sẽ dễ dàng được tháo bỏ ra, hiện tại thì vai trò của `DB Manager` là lấy dữ liệu lên cho các handlers trong module xử lý và trả về dữ liệu.

Tuy nhiên thì trong tương lai thì phần này sẽ trở nên độc lập hơn nữa, có nghĩa là `DB Manager` chỉ còn đóng vai trò là quản lý và cấu hình thôi (giống với `MyServer` và `ServerBuilder`) dẫn đến việc là vai trò của nó sẽ trừu tượng hơn, còn về cấu trúc của data, các hành vi lên data như thế nào thì các module này sẽ đóng vai trò chính.

## Pros and Cons
Vẫn đang trong quá trình phát triển và tìm hiểu cấu trúc này, cho nên là vẫn chưa nhận thấy nhiều điểm tiện/bất tiện.
### Props
- Dễ quản lý hơn.
- Độ sâu của source thấp.
- Dễ mở rộng, bảo trì.

### Cons
Chưa tìm thấy.

__NOTE__: sẽ còn được phát triển thêm. Và nên nhớ đây chỉ là template thôi, còn tuỳ thuộc vào dự án mà config thêm.