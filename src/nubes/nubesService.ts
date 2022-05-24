import { NubesHttpClient } from "./nubesHttpClient";

export class NubesService {
  private httpClient: NubesHttpClient;

  constructor() {
    this.httpClient = new NubesHttpClient();
  }

  public async getExportable(id: bigint): Promise<any> {
    const uri = `/api/v1/nubes/exportable/${id}`;
    return this.httpClient.get(uri);
  }
}