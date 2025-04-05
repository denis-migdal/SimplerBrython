const LIST = [
	require("./symbol").default,
	require("./struct/tuple").default,
	require("./struct/list").default,
	require("./struct/dict").default,
	require("./key/return").default,
	require("./key/pass").default,
	require("./key/raise").default,
	require("./key/import").default,
	require("./key/import_alias").default,
	require("./key/continue").default,
	require("./key/break").default,
	require("./key/assert").default,
	require("./op/unary").default,
	require("./op/cmp").default,
	require("./op/bool").default,
	require("./op/bin").default,
	require("./op/attr").default,
	require("./op/brackets").default,
	require("./op/assign_aug").default,
	require("./op/assign_init").default,
	require("./op/assign_attr").default,
	require("./op/assign").default,
	require("./lit/str").default,
	require("./lit/int").default,
	require("./lit/float").default,
	require("./lit/fstring").default,
	require("./lit/fstring_fval").default,
	require("./lit/true").default,
	require("./lit/false").default,
	require("./lit/none").default,
	require("./fct/def").default,
	require("./fct/def_meth").default,
	require("./fct/def_args").default,
	require("./fct/call").default,
	require("./fct/call_keyword").default,
	require("./ctrl/while").default,
	require("./ctrl/tryblock").default,
	require("./ctrl/tryblock_catch").default,
	require("./ctrl/ternary").default,
	require("./ctrl/ifblock").default,
	require("./ctrl/for_range").default,
	require("./ctrl/for").default,
	require("./classdef").default,
	require("./body").default,
	require("./2bigint").default,
	require("./2number").default,
];

import ILIST from './index';
ILIST.push(...LIST);
export default ILIST;

let _id2name: string[] = [];
if( __DEBUG__ ) _id2name = [
	"SYMBOL",
	"STRUCT_TUPLE",
	"STRUCT_LIST",
	"STRUCT_DICT",
	"KEY_RETURN",
	"KEY_PASS",
	"KEY_RAISE",
	"KEY_IMPORT",
	"KEY_IMPORT_ALIAS",
	"KEY_CONTINUE",
	"KEY_BREAK",
	"KEY_ASSERT",
	"OP_UNARY",
	"OP_CMP",
	"OP_BOOL",
	"OP_BIN",
	"OP_ATTR",
	"OP_BRACKETS",
	"OP_ASSIGN_AUG",
	"OP_ASSIGN_INIT",
	"OP_ASSIGN_ATTR",
	"OP_ASSIGN",
	"LIT_STR",
	"LIT_INT",
	"LIT_FLOAT",
	"LIT_FSTRING",
	"LIT_FSTRING_FVAL",
	"LIT_TRUE",
	"LIT_FALSE",
	"LIT_NONE",
	"FCT_DEF",
	"FCT_DEF_METH",
	"FCT_DEF_ARGS",
	"FCT_CALL",
	"FCT_CALL_KEYWORD",
	"CTRL_WHILE",
	"CTRL_TRYBLOCK",
	"CTRL_TRYBLOCK_CATCH",
	"CTRL_TERNARY",
	"CTRL_IFBLOCK",
	"CTRL_FOR_RANGE",
	"CTRL_FOR",
	"CLASSDEF",
	"BODY",
	"2BIGINT",
	"2NUMBER",
]
export const id2name = _id2name;
