import { LITERALS_INT } from "core_modules/lists";
import { setResultType, setType, VALUES } from "dop";
import { Context } from "py2ast";
import { STYPE_INT, STYPE_JSINT } from "structs/STypes";

export default function convert(dst: number, node: any, _context: Context): false|void {

    let value = node.value;

    if(value.__class__?.__qualname__ === "int")
        value = value.value;

    if( typeof value !== "number" && typeof value !== "bigint" )
        return false;

    const real_type = typeof value !== "number" ? STYPE_INT : STYPE_JSINT;

    setType(dst, LITERALS_INT);
    setResultType(dst, real_type);
    
    VALUES[dst] = value;
}

convert.brython_name = "Constant";