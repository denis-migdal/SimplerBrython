import { genCmpOps } from "@SBrython/sbry/structs/operators/compare";
import { TYPE_bool, TYPE_type_bool_ } from "./bases";
import { CMPOPS_LIST } from "@SBrython/sbry/structs/BinaryOperators";
import { RET_IJBF2BOOL } from "@SBrython/sbry/structs/ReturnTypeFcts";

export default Object.assign(TYPE_bool,
    {
        __class__: TYPE_type_bool_,
    },
    genCmpOps(CMPOPS_LIST, RET_IJBF2BOOL),
);