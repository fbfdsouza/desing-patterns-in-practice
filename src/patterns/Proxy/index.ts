import { ProxyClass } from "./classes/ProxyServer";
import { Server } from "./classes/Server";

/*Proxy Desing Pattern 
    It implements the same interface the Main class does, instead of calling directly the common
    interface method it does a treatment that could be for caching, security, loggin reasons.

    ProxyClass class has an instance of Server class, both implement the method request from the IServer interface.
    but the request method from the Server class is not directly called before proxy's one is run.
*/

export default () => {
  const server = new Server();
  const proxy = new ProxyClass(server);

  (async () => {
    console.log(await (await proxy.request()).response);
    console.log(await (await proxy.request()).response);
    proxy.clearCache();
    console.log(await (await proxy.request()).response);
    console.log(await (await proxy.request()).response);
  })();
};
