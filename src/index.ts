// @ts-ignore
import { DmvService } from "./dmv/dmvService";
import { NubesService } from "./nubes/nubesService";

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


export const APis = {
  dmv: new DmvService(),
  nubes: new NubesService(),

};


APis.dmv.getDmv('test').then(console.log);