import { DmvService } from "./dmv/dmvService";
import { NubesService } from "./nubes/nubesService";
export { HttpClient } from "./basic/http/httpClient";
export declare class MainController {
}
export declare class ControllerFactory {
    static create(name: string): MainController;
}
export declare class MainService {
    static create(name: string): MainController;
}
export declare const APis: {
    dmv: DmvService;
    nubes: NubesService;
};
