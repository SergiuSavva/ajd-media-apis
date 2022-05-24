import { HttpClient } from "../basic/http/httpClient";
export declare class DmvHttpClient extends HttpClient {
    constructor();
    getDmv(slug: string): Promise<any>;
    getDmvList(): Promise<any>;
}
