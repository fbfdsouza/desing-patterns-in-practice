import { IServer } from "../interfaces/IServer";

export class Server implements IServer {
  request = async (): Promise<{ response: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(
          "Returning information from server because it is not cached"
        );
        resolve({ response: "You're awesome" });
      }, 5000);
    });
  };
}
