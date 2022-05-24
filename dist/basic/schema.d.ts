export declare class Schema {
    private _ajv;
    private readonly _schema;
    constructor(schema: any);
    validate(data: any): boolean;
}
