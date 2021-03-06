"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APis = exports.MainService = exports.ControllerFactory = exports.MainController = exports.HttpClient = void 0;
// @ts-ignore
const dmvService_1 = require("./dmv/dmvService");
const nubesService_1 = require("./nubes/nubesService");
var httpClient_1 = require("./basic/http/httpClient");
Object.defineProperty(exports, "HttpClient", { enumerable: true, get: function () { return httpClient_1.HttpClient; } });
// Controller with validations
class MainController {
}
exports.MainController = MainController;
class ControllerFactory {
    static create(name) {
        return new MainController();
    }
}
exports.ControllerFactory = ControllerFactory;
class MainService {
    static create(name) {
        return new MainController();
    }
}
exports.MainService = MainService;
exports.APis = {
    dmv: new dmvService_1.DmvService(),
    nubes: new nubesService_1.NubesService(),
};
