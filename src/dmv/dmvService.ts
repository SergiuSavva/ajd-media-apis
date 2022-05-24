import { DmvHttpClient } from "./dmvHttpClient";

export class DmvService {
  private httpClient: DmvHttpClient;

  constructor() {
    this.httpClient = new DmvHttpClient();
  }

  public async getDmv(slug: string): Promise<any> {
    const uri = `/api/v1/dmv/${slug}`;
    return this.httpClient.get(uri);
  }
}