import Ajv, { JSONSchemaType } from "ajv";

export class Schema {
  private _ajv: Ajv;
  private readonly _schema: JSONSchemaType<any>;

  constructor(schema) {
    this._ajv = new Ajv();
    this._schema = schema;
  }

  public validate(data: any): boolean {
    return this._ajv.validate(this._schema, data);
  }
}