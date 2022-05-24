"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
const ajv_1 = require("ajv");
class Schema {
    constructor(schema) {
        this._ajv = new ajv_1.default();
        this._schema = schema;
    }
    validate(data) {
        return this._ajv.validate(this._schema, data);
    }
}
exports.Schema = Schema;
