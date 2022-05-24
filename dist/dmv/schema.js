"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmvSchema = void 0;
const schema_1 = require("../basic/schema");
const dmvJsonSchema = {
    type: "object",
    properties: {
        slug: { type: "string", nullable: false },
        exportable_id: { type: "integer", nullable: true }
    },
    required: ["slug"],
    additionalProperties: false
};
class DmvSchema extends schema_1.Schema {
    constructor() {
        super(dmvJsonSchema);
    }
}
exports.DmvSchema = DmvSchema;
