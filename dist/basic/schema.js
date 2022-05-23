"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = exports.Field = void 0;
class Field {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
exports.Field = Field;
class Schema {
    constructor(name, fields) {
        this.name = name;
        this.fields = fields;
    }
    validate(data) {
        for (let field of this.fields) {
            if (!data.hasOwnProperty(field.name)) {
                return false;
            }
            // check if data is of type field.type
            // if not, return false
            if (typeof data[field.name] !== field.type) {
                return false;
            }
        }
        return true;
    }
}
exports.Schema = Schema;
