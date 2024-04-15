import { MyServer } from "./classes/MyServer";
import { ServerBuilder } from "./classes/ServerBuilder";

// Import settings
import { AppSettings } from "./settings";

// Import databases
import { Databases } from "./databases";
// Import Services
import { Services } from "./services";
// Import Modules
import { ExampleModule } from "./modules/example.module";

// Run app
(async function() {
  const serverSettings = {
    port: AppSettings.PORT
  };

  const myServer = new MyServer(serverSettings);
  const builder = new ServerBuilder(myServer);

  const db = new Databases();
  const sv = new Services();

  const example = new ExampleModule(db, sv);

  // Build databases
  builder.buildDatabases(db);

  // Build modules
  builder.buildModules([example]);

  if(!builder.canStartup())
    throw new Error("Server can be started up now. Please make sure databases are connected, modules and middlewares are set up");

  await myServer.startup(function(port) { console.log(`You server run at PORT::${port}`); });
})();