import { HttpClient } from "../basic/http/httpClient";


export class DmvHttpClient extends HttpClient {
    constructor() {
        super('https://dmv.aljazeer.net');
    }

    public async getDmv(slug: string): Promise<any> {
        const uri = `/api/v1/dmv/${slug}`;
        return this.get(uri);
    }

    public async getDmvList(): Promise<any> {
        return '{"data":{"dmvCard":{"nid":123,"slug":"AJA-MM-TEST-202020"}}}';
    }
}