import { Context, convert_body, convert_node } from "py2ast";
import { ASTNode } from "structs/ASTNode";

export default function convert(node: any, context: Context) {

    context.local_variables[node.name] = 'class.' + node.name;

    context = new Context("class", context);

    if( node.bases.length > 1)
        throw new Error('Not implemented');

    let children = node.bases.length === 1 ?
          [convert_node(node.bases[0], context), convert_body(node, context)]
        : [convert_body(node, context)];

    return new ASTNode(node, "class.classdef", null, node.name, children);
}

convert.brython_name = "ClassDef";