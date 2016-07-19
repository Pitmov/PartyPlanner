export declare const KNOWN: {
    Array: string;
    Object: string;
    Null: string;
    Undefined: string;
    Boolean: string;
    Number: string;
    String: string;
    Symbol: string;
    Function: string;
    Iterable: string;
};
export declare function getTypeOf(object: any): string;
export declare const getLabelFor: (object: any) => any;
export declare function getChildrenFor(object: any): any[];
