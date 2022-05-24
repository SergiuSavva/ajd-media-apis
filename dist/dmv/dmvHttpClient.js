"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmvHttpClient = void 0;
const httpClient_1 = require("../basic/http/httpClient");
class DmvHttpClient extends httpClient_1.HttpClient {
    constructor() {
        super('https://dmv.aljazeer.net');
    }
    getDmv(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = `/api/v1/dmv/${slug}`;
            return this.get(uri);
        });
    }
    getDmvList() {
        return __awaiter(this, void 0, void 0, function* () {
            return '{"data":{"dmvCard":{"nid":123,"slug":"AJA-MM-TEST-202020"}}}';
        });
    }
}
exports.DmvHttpClient = DmvHttpClient;
