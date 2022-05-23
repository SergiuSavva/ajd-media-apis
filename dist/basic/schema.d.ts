declare class Field {
    name: string;
    type: string;
    constructor(name: string, type: string);
}
declare class Schema {
    name: string;
    fields: Field[];
    constructor(name: string, fields: Field[]);
    validate(data: any): boolean;
}
export { Field, Schema };
