import { IServer } from "../interfaces/IServer";

export class ProxyClass implements IServer {
  private cachedResponse: { response: string } | null = null;
  constructor(private server: IServer) {}

  request = async () => {
    if (!!this.cachedResponse) {
      console.log("Returning information from the cache");
      return this.cachedResponse;
    }
    this.cachedResponse = await this.server.request();
    return this.cachedResponse;
  };

  clearCache = () => {
    console.log("Clear Cache");
    this.cachedResponse = null;
  };
}
