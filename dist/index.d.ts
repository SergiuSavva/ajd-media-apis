export { HttpClient } from "./basic/http/httpClient";
export declare class MainController {
}
export declare class ControllerFactory {
    static create(name: string): MainController;
}
export declare class MainService {
    static create(name: string): MainController;
}
