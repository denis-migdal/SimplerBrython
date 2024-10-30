import { r } from "ast2js";
import { ASTNode } from "structs/ASTNode";
import { CMPOPS_LIST, genBinaryOps, genCmpOps} from "structs/BinaryOperators";
import { STypeFctSubs, STypeObj } from "structs/SType";
import { addSType, SType_int, SType_jsint, SType_str } from "structs/STypes";

const SType_type_str = addSType('type[str]', {
    __call__: {
        //TODO...
        return_type: () => SType_str,
        substitute_call: (node) => {

            const other = node.children[1];
            const other_type = other.result_type

            //TODO use their __int__ ?
            if( other_type === SType_str )
                return other;

            const method = other.result_type?.__str__ as STypeFctSubs;
            if( method === undefined )
                throw new Error(`${other.result_type.__name__}.__str__ not defined`);
            return method.substitute_call!(other);
        }
    }
});

addSType('str', {

    __class__: SType_type_str,

    ...genCmpOps  (CMPOPS_LIST,
        [SType_str]),
    ...genBinaryOps(SType_str, ["+"], [SType_str]),
    ...genBinaryOps(SType_str, ["*"], [SType_int, SType_jsint],
        {
            convert_other  : {"int": "float"},
            substitute_call: (node: ASTNode, a: ASTNode, b: ASTNode) => {
                
                if( a.result_type !== SType_str )
                    [a,b] = [b,a];

                return r`${a}.repeat(${b})`;
            }
        }),
});