import { convert_node } from "py2ast";
import { ASTNode } from "structs/ASTNode";

export default function convert(node: any) {

    if( ! ("ops" in node) && node.ops[0].constructor.$name !== "Eq" )
        return false;

    const left  = convert_node(node.left );
    const right = convert_node(node.comparators[0]);

    if(left.result_type === null || right.result_type === null) {
        //TODO: object result_type too...
        throw new Error("Not implemented");
    }

    const astnode = new ASTNode(node, "Operator.==", null,
        [
            left,
            right,
        ]
    );
    
    astnode.result_type = "bool";
    return astnode;
}