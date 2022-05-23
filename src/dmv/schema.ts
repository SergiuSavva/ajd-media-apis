import { Schema } from "../basic/schema";

Schema.prototype.validate = function(data: any): boolean {
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

export { Schema };