import { Context, convert_node } from "py2ast";
import { ASTNode } from "structs/ASTNode";
import { name2SType } from "./ast2js";
import { SType_NOT_IMPLEMENTED } from "structs/SType";
import { reversed_operator } from "structs/BinaryOperators";

const bname2pyname = {
    "Pow" : "__pow__",

    "Mult"    : "__mul__",
    "Div"     : "__truediv__",
    "FloorDiv": "__floordiv__",
    "Mod"     : "__mod__",

    "Add"     : "__add__",
    "Sub"     : "__sub__",
}

// __floordiv__ and __truediv__

export default function convert(node: any, context: Context) {

    let left  = convert_node(node.left , context );
    let right = convert_node(node.right, context);

    let op = bname2pyname[node.op.constructor.$name];

    if( op === undefined) {
        console.warn("OP", node.op.constructor.$name);
        throw new Error("not implemented");
    }        


    let type = SType_NOT_IMPLEMENTED;
    let method = name2SType[left.result_type as STypeName]?.[op];

    if( method !== undefined )
        type = method.return_type(right.result_type!);

    // try reversed operator
    if( type === SType_NOT_IMPLEMENTED) {
        op = reversed_operator(op);
        method = name2SType[right.result_type as STypeName][op];
        [left, right] = [right, left];

        type = method.return_type(right.result_type);

        if( type === SType_NOT_IMPLEMENTED)
            throw new Error('NOT IMPLEMENTED!');
    }

    return new ASTNode(node, "operators.binary", type, op,
        [
            left,
            right
        ]
    );
}

convert.brython_name = ["BinOp"];