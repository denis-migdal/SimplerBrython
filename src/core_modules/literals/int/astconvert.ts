import { Context } from "py2ast";
import { ASTNode } from "structs/ASTNode";
import { SType_int, SType_jsint } from "structs/STypes";

export default function convert(node: any, _context: Context) {

    let value = node.value;

    if(value.__class__?.__qualname__ === "int")
        value = value.value;

    if( typeof value !== "number" && typeof value !== "bigint" )
        return;

    const real_type = typeof value !== "number" ? SType_int : SType_jsint;

    return new ASTNode(node, "literals.int", real_type, value);
}

convert.brython_name = "Constant";