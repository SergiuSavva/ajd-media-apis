class Field {
  constructor(public name: string, public type: string) {
  }
}

class Schema {
  constructor(public name: string, public fields: Field[]) {
  }

  public validate(data: any): boolean {
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

export { Field, Schema };