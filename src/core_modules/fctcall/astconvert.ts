import { convert_node } from "py2ast";
import { ASTNode } from "structs/ASTNode";

export default function convert(node: any) {

    if( ! ("func" in node) )
        return false;

    // TODO: node.args // fct call argument.
    // TODO: this ?
    return new ASTNode(node, "fctcall", undefined, [
        convert_node(node.func ),
        ...node.args.map( (e:any) => convert_node(e) )
    ]);
}