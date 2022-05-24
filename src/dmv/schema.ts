import { Schema } from "../basic/schema";

const dmvJsonSchema = {
  type: "object",
  properties: {
    slug: { type: "string", nullable: false },
    exportable_id: { type: "integer", nullable: true }
  },
  required: ["slug"],
  additionalProperties: false
};

export class DmvSchema extends Schema {
  constructor() {
    super(dmvJsonSchema);
  }
}
