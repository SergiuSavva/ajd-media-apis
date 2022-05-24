"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NubesHttpClient = void 0;
const httpClient_1 = require("../basic/http/httpClient");
class NubesHttpClient extends httpClient_1.HttpClient {
    constructor() {
        super('https://nubes.aljazeer.net');
    }
}
exports.NubesHttpClient = NubesHttpClient;
