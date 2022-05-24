"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmvHttpClient = void 0;
const httpClient_1 = require("../basic/http/httpClient");
class DmvHttpClient extends httpClient_1.HttpClient {
    constructor() {
        super('https://dmv.aljazeer.net');
    }
}
exports.DmvHttpClient = DmvHttpClient;
