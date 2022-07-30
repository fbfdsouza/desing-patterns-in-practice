export interface IServer {
  request: () => Promise<{ response: string }>;
}
