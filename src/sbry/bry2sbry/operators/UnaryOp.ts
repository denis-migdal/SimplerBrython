// @ts-nocheck

import { type Context, convert_node } from "@SBrython/sbry/bry2sbry/utils";
import { AST_OP_UNARY } from "@SBrython/sbry/ast2js/list";
import { addFirstChild, NODE_ID, resultType, setResultType, setType, VALUES } from "@SBrython/sbry/dop";
import { TYPEID_bool, TYPEID_int, TYPEID_NotImplementedType } from "@SBrython/sbry/types/list";
import Types from "@SBrython/sbry/types/list";
import { Fct, RETURN_TYPE } from "@SBrython/sbry/types/utils/types";

export default function convert(dst: NODE_ID, node: any, context: Context) {

    setType(dst, AST_OP_UNARY);
    const coffset = addFirstChild(dst);

    convert_node(coffset, node.operand , context );

    let op = bname2pyname[node.op.constructor.$name as keyof typeof bname2pyname];

    if( __SBRY_MODE__ === "dev" && op === undefined) {
        console.warn("OP", node.op.constructor.$name);
        throw new Error("not implemented");
    }

    VALUES[dst] = op;

    if( op === 'not') { // logical not
        setResultType(dst, TYPEID_bool);
        return;
    }

    let type = TYPEID_NotImplementedType;
    let method = Types[resultType(coffset)][op] as Fct;

    if( method !== undefined )
        type = method[RETURN_TYPE]();

    if( __SBRY_MODE__ === "dev" && type === TYPEID_NotImplementedType) {
        console.warn(Types[resultType(coffset)].__name__);
        throw new Error(`${op} ${Types[resultType(coffset)].__name__} NOT IMPLEMENTED!`);
    }

    setResultType(dst, type);
}