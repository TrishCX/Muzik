import { RequestExtender } from "../Extenders";

export class Request extends RequestExtender {
  public async get(url: string) {
    const auth = await this.authorization();
    const response = await this.fetch({
      url,
      auth,
      method: "GET",
    });
    return response;
  }
}
