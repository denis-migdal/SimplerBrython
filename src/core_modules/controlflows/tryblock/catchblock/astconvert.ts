import { Context, convert_body, convert_line, convert_node } from "py2ast";
import { ASTNode } from "structs/ASTNode";

export default function convert(node: any, context: Context) {

    return new ASTNode(node, `controlflows.catchblock`, null, null,
        node.handlers.map( (h:any) => convert_node(h, context))
    );
}

convert.brython_name = "Try.catchblock";