import { HttpClient } from "../basic/http/httpClient";

export class NubesHttpClient extends HttpClient {
    constructor() {
        super('https://nubes.aljazeer.net');
    }
}