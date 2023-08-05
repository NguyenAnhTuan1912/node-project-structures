# Modules Structure 001

Đây là cấu trúc module đầu tiên, các API Handlers được quản lý trong một cùng một module. Cấu trúc này áp dụng `Builder` và hơi có `Singleton` Pattern, tương lai có thể áp dụng thêm nhiều Pattern nữa.

## Structure
### Without graphic
```
.
└── src/
    ├── classes/
    │   ├── MyServer.ts
    │   └── ServerBuilder.ts
    ├── db/
    │   └── index.ts
    ├── modules/
    │   └── post/
    │       ├── createPost.ts
    │       ├── getPost.ts
    │       └── index.ts
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

__NOTE__: sẽ còn được phát triển thêm.
