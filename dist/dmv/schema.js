"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
const schema_1 = require("../basic/schema");
Object.defineProperty(exports, "Schema", { enumerable: true, get: function () { return schema_1.Schema; } });
schema_1.Schema.prototype.validate = function (data) {
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
};
