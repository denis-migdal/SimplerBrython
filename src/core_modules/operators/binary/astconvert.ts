import { Context, convert_node } from "py2ast";
import { ASTNode } from "structs/ASTNode";
import { SType_NOT_IMPLEMENTED } from "structs/SType";
import { bname2pyname, reversed_operator } from "structs/BinaryOperators";
import { name2SType } from "structs/STypes";

export default function convert(node: any, context: Context) {

    let left  = convert_node(node.left , context );
    let right = convert_node(node.right, context);

    let op = bname2pyname[node.op.constructor.$name];

    if( op === undefined) {
        console.warn("OP", node.op.constructor.$name);
        throw new Error("not implemented");
    }        


    let type = SType_NOT_IMPLEMENTED;
    let method = name2SType(left.result_type as STypeName)?.[op];

    if( method !== undefined )
        type = method.return_type(right.result_type!);

    // try reversed operator
    if( type === SType_NOT_IMPLEMENTED) {
        op     = reversed_operator(op);
        method = name2SType(right.result_type as STypeName)?.[op];
        if( method !== undefined)
            type   = method.return_type(left.result_type);

        if( type === SType_NOT_IMPLEMENTED)
            throw new Error(`${right.result_type} ${op} ${left.result_type} NOT IMPLEMENTED!`);

        [left, right] = [right, left];
    }

    return new ASTNode(node, "operators.binary", type, op,
        [
            left,
            right
        ]
    );
}

convert.brython_name = ["BinOp"];