import { DmvHttpClient } from "./dmvHttpClient";

export class DmvService {
  private httpClient: DmvHttpClient;

  constructor() {
    this.httpClient = new DmvHttpClient();
  }

  public getDmv(slug: string) {
    return this.httpClient.getDmv(slug);
  }

  public getDmvList() {
    return this.httpClient.getDmvList();
  }
}
