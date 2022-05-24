import { HttpClient } from "../basic/http/httpClient";


export class DmvHttpClient extends HttpClient {
    constructor() {
        super('https://dmv.aljazeer.net');
    }
}