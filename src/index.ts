// @ts-ignore
export { HttpClient } from "./basic/http/httpClient";

// Controller with validations
export class MainController {


}

export class ControllerFactory {
  static create(name: string): MainController {
    return new MainController();
  }
}

export class MainService {
  static create(name: string): MainController {
    return new MainController();
  }
}

