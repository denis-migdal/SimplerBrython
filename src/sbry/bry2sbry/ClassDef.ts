import Body from "@SBrython/sbry/bry2sbry/Body";
import { AST_CLASSDEF } from "@SBrython/sbry/ast2js/";
import { addChild, firstChild, resultType, setType, VALUES } from "@SBrython/sbry/dop";
import { Context, convert_node, set_py_code_from_list } from "@SBrython/sbry/bry2sbry/utils";
import { addType } from "@SBrython/sbry/types/utils/addType";
import { method_wrapper } from "../types/utils/methods";
import { w_sns, w_str } from "../ast2js/utils";
import { TYPE_type } from "../types/bases";
import Types from "../types";

function weak_assign(target: Record<string, any>, src: Record<string, any>) {
    for(let key in src)
        if( ! (key in target) )
            target[key] = src[key];
}

export default function convert(dst: number, node: any, context: Context) {

    const instance_TypeID = addType({});

    const typeID = addType({
        __name__ : node.name,
        __class__: TYPE_type,
        __call__: method_wrapper(() => instance_TypeID, (call) => {
            //TODO: should not be here...
            w_sns("new ", firstChild(call), "(");
            //TODO: args...
            w_str(")");
        })
    });

    const klass_type = Types[instance_TypeID];
    const inst_type  = Types[typeID];

    inst_type.__class__ = klass_type;

    context.local_symbols[node.name] = typeID;
    context = context.createClassContext(typeID);

    setType(dst , AST_CLASSDEF);
    const nbChildren = 1 + node.bases.length;
    const coffset    = addChild(dst, nbChildren);

    Body(coffset, node.body, context);
    if(__DEBUG__) set_py_code_from_list(coffset, node.body);

    for(let i = 1; i < nbChildren ; ++i){
        convert_node(i+coffset, node.bases[i-1], context);
        const stypeID = resultType(i+coffset);

        // could be optimized...
        weak_assign(klass_type, Types[stypeID]);
        weak_assign(inst_type , Types[stypeID-1]);
    }

    VALUES[dst] = node.name;
}