import AST_CONVERT_0 from "./symbol/astconvert.ts";
import      AST2JS_0 from "./symbol/ast2js.ts";
import AST_CONVERT_1 from "./structs/tuple/astconvert.ts";
import      AST2JS_1 from "./structs/tuple/ast2js.ts";
import AST_CONVERT_2 from "./structs/list/astconvert.ts";
import      AST2JS_2 from "./structs/list/ast2js.ts";
import AST_CONVERT_3 from "./structs/dict/astconvert.ts";
import      AST2JS_3 from "./structs/dict/ast2js.ts";
import AST_CONVERT_4 from "./return/astconvert.ts";
import      AST2JS_4 from "./return/ast2js.ts";
import AST_CONVERT_5 from "./pass/astconvert.ts";
import      AST2JS_5 from "./pass/ast2js.ts";
import AST_CONVERT_6 from "./operators/unary/astconvert.ts";
import      AST2JS_6 from "./operators/unary/ast2js.ts";
import AST_CONVERT_7 from "./operators/compare/astconvert.ts";
import      AST2JS_7 from "./operators/compare/ast2js.ts";
import AST_CONVERT_8 from "./operators/boolean/astconvert.ts";
import      AST2JS_8 from "./operators/boolean/ast2js.ts";
import AST_CONVERT_9 from "./operators/binary/astconvert.ts";
import      AST2JS_9 from "./operators/binary/ast2js.ts";
import     RUNTIME_9 from "./operators/binary/runtime.ts";
import AST_CONVERT_10 from "./operators/attr/astconvert.ts";
import      AST2JS_10 from "./operators/attr/ast2js.ts";
import AST_CONVERT_11 from "./operators/[]/astconvert.ts";
import      AST2JS_11 from "./operators/[]/ast2js.ts";
import AST_CONVERT_12 from "./operators/AssignOp/astconvert.ts";
import      AST2JS_12 from "./operators/AssignOp/ast2js.ts";
import AST_CONVERT_13 from "./operators/=/astconvert.ts";
import      AST2JS_13 from "./operators/=/ast2js.ts";
import AST_CONVERT_14 from "./literals/str/astconvert.ts";
import      AST2JS_14 from "./literals/str/ast2js.ts";
import AST_CONVERT_15 from "./literals/int/astconvert.ts";
import      AST2JS_15 from "./literals/int/ast2js.ts";
import AST_CONVERT_16 from "./literals/float/astconvert.ts";
import      AST2JS_16 from "./literals/float/ast2js.ts";
import AST_CONVERT_17 from "./literals/f-string/astconvert.ts";
import      AST2JS_17 from "./literals/f-string/ast2js.ts";
import AST_CONVERT_18 from "./literals/f-string/FormattedValue/astconvert.ts";
import      AST2JS_18 from "./literals/f-string/FormattedValue/ast2js.ts";
import AST_CONVERT_19 from "./literals/bool/astconvert.ts";
import      AST2JS_19 from "./literals/bool/ast2js.ts";
import AST_CONVERT_20 from "./literals/None/astconvert.ts";
import      AST2JS_20 from "./literals/None/ast2js.ts";
import AST_CONVERT_21 from "./keywords/raise/astconvert.ts";
import      AST2JS_21 from "./keywords/raise/ast2js.ts";
import     RUNTIME_21 from "./keywords/raise/runtime.ts";
import AST_CONVERT_22 from "./keywords/import/astconvert.ts";
import      AST2JS_22 from "./keywords/import/ast2js.ts";
import AST_CONVERT_23 from "./keywords/import/alias/astconvert.ts";
import      AST2JS_23 from "./keywords/import/alias/ast2js.ts";
import AST_CONVERT_24 from "./keywords/assert/astconvert.ts";
import      AST2JS_24 from "./keywords/assert/ast2js.ts";
import     RUNTIME_24 from "./keywords/assert/runtime.ts";
import AST_CONVERT_25 from "./functions/def/astconvert.ts";
import      AST2JS_25 from "./functions/def/ast2js.ts";
import AST_CONVERT_26 from "./functions/call/astconvert.ts";
import      AST2JS_26 from "./functions/call/ast2js.ts";
import AST_CONVERT_27 from "./controlflows/while/astconvert.ts";
import      AST2JS_27 from "./controlflows/while/ast2js.ts";
import AST_CONVERT_28 from "./controlflows/tryblock/astconvert.ts";
import      AST2JS_28 from "./controlflows/tryblock/ast2js.ts";
import     RUNTIME_28 from "./controlflows/tryblock/runtime.ts";
import AST_CONVERT_29 from "./controlflows/tryblock/try/astconvert.ts";
import      AST2JS_29 from "./controlflows/tryblock/try/ast2js.ts";
import AST_CONVERT_30 from "./controlflows/tryblock/catchblock/astconvert.ts";
import      AST2JS_30 from "./controlflows/tryblock/catchblock/ast2js.ts";
import AST_CONVERT_31 from "./controlflows/tryblock/catch/astconvert.ts";
import      AST2JS_31 from "./controlflows/tryblock/catch/ast2js.ts";
import AST_CONVERT_32 from "./controlflows/ifblock/astconvert.ts";
import      AST2JS_32 from "./controlflows/ifblock/ast2js.ts";
import AST_CONVERT_33 from "./controlflows/for/astconvert.ts";
import      AST2JS_33 from "./controlflows/for/ast2js.ts";
import AST_CONVERT_34 from "./comments/astconvert.ts";
import      AST2JS_34 from "./comments/ast2js.ts";
import AST_CONVERT_35 from "./class/classdef/astconvert.ts";
import      AST2JS_35 from "./class/classdef/ast2js.ts";


const MODULES = {
	"symbol": {
		AST_CONVERT: AST_CONVERT_0,
		     AST2JS:      AST2JS_0
	},
	"structs.tuple": {
		AST_CONVERT: AST_CONVERT_1,
		     AST2JS:      AST2JS_1
	},
	"structs.list": {
		AST_CONVERT: AST_CONVERT_2,
		     AST2JS:      AST2JS_2
	},
	"structs.dict": {
		AST_CONVERT: AST_CONVERT_3,
		     AST2JS:      AST2JS_3
	},
	"return": {
		AST_CONVERT: AST_CONVERT_4,
		     AST2JS:      AST2JS_4
	},
	"pass": {
		AST_CONVERT: AST_CONVERT_5,
		     AST2JS:      AST2JS_5
	},
	"operators.unary": {
		AST_CONVERT: AST_CONVERT_6,
		     AST2JS:      AST2JS_6
	},
	"operators.compare": {
		AST_CONVERT: AST_CONVERT_7,
		     AST2JS:      AST2JS_7
	},
	"operators.boolean": {
		AST_CONVERT: AST_CONVERT_8,
		     AST2JS:      AST2JS_8
	},
	"operators.binary": {
		AST_CONVERT: AST_CONVERT_9,
		     AST2JS:      AST2JS_9
	},
	"operators.attr": {
		AST_CONVERT: AST_CONVERT_10,
		     AST2JS:      AST2JS_10
	},
	"operators.[]": {
		AST_CONVERT: AST_CONVERT_11,
		     AST2JS:      AST2JS_11
	},
	"operators.AssignOp": {
		AST_CONVERT: AST_CONVERT_12,
		     AST2JS:      AST2JS_12
	},
	"operators.=": {
		AST_CONVERT: AST_CONVERT_13,
		     AST2JS:      AST2JS_13
	},
	"literals.str": {
		AST_CONVERT: AST_CONVERT_14,
		     AST2JS:      AST2JS_14
	},
	"literals.int": {
		AST_CONVERT: AST_CONVERT_15,
		     AST2JS:      AST2JS_15
	},
	"literals.float": {
		AST_CONVERT: AST_CONVERT_16,
		     AST2JS:      AST2JS_16
	},
	"literals.f-string": {
		AST_CONVERT: AST_CONVERT_17,
		     AST2JS:      AST2JS_17
	},
	"literals.f-string/FormattedValue": {
		AST_CONVERT: AST_CONVERT_18,
		     AST2JS:      AST2JS_18
	},
	"literals.bool": {
		AST_CONVERT: AST_CONVERT_19,
		     AST2JS:      AST2JS_19
	},
	"literals.None": {
		AST_CONVERT: AST_CONVERT_20,
		     AST2JS:      AST2JS_20
	},
	"keywords.raise": {
		AST_CONVERT: AST_CONVERT_21,
		     AST2JS:      AST2JS_21
	},
	"keywords.import": {
		AST_CONVERT: AST_CONVERT_22,
		     AST2JS:      AST2JS_22
	},
	"keywords.import/alias": {
		AST_CONVERT: AST_CONVERT_23,
		     AST2JS:      AST2JS_23
	},
	"keywords.assert": {
		AST_CONVERT: AST_CONVERT_24,
		     AST2JS:      AST2JS_24
	},
	"functions.def": {
		AST_CONVERT: AST_CONVERT_25,
		     AST2JS:      AST2JS_25
	},
	"functions.call": {
		AST_CONVERT: AST_CONVERT_26,
		     AST2JS:      AST2JS_26
	},
	"controlflows.while": {
		AST_CONVERT: AST_CONVERT_27,
		     AST2JS:      AST2JS_27
	},
	"controlflows.tryblock": {
		AST_CONVERT: AST_CONVERT_28,
		     AST2JS:      AST2JS_28
	},
	"controlflows.tryblock/try": {
		AST_CONVERT: AST_CONVERT_29,
		     AST2JS:      AST2JS_29
	},
	"controlflows.tryblock/catchblock": {
		AST_CONVERT: AST_CONVERT_30,
		     AST2JS:      AST2JS_30
	},
	"controlflows.tryblock/catch": {
		AST_CONVERT: AST_CONVERT_31,
		     AST2JS:      AST2JS_31
	},
	"controlflows.ifblock": {
		AST_CONVERT: AST_CONVERT_32,
		     AST2JS:      AST2JS_32
	},
	"controlflows.for": {
		AST_CONVERT: AST_CONVERT_33,
		     AST2JS:      AST2JS_33
	},
	"comments": {
		AST_CONVERT: AST_CONVERT_34,
		     AST2JS:      AST2JS_34
	},
	"class.classdef": {
		AST_CONVERT: AST_CONVERT_35,
		     AST2JS:      AST2JS_35
	},
}

export default MODULES;


const RUNTIME = {};
Object.assign(RUNTIME, RUNTIME_9);
Object.assign(RUNTIME, RUNTIME_21);
Object.assign(RUNTIME, RUNTIME_24);
Object.assign(RUNTIME, RUNTIME_28);


export const _b_ = RUNTIME;
