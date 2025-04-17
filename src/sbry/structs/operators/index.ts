export type OP_ID = number;

export const OP_BIT_OR     = 0 as const;
export const OP_BIT_XOR    = 1 as const;
export const OP_BIT_AND    = 2 as const;
export const OP_BIT_LSHIFT = 3 as const;
export const OP_BIT_RSHIFT = 4 as const;
export const OP_BIN_ADD    = 5 as const;
export const OP_BIN_SUB    = 6 as const;
export const OP_BIN_MUL    = 7 as const;
export const OP_BIN_DIV    = 8 as const;
export const OP_BIN_FDIV   = 9 as const;
export const OP_BIN_MOD    = 10 as const;
export const OP_BIN_POW    = 11 as const;
export const OP_CMP_EQ     = 12 as const;
export const OP_CMP_NEQ    = 13 as const;
export const OP_CMP_GT     = 14 as const;
export const OP_CMP_LT     = 15 as const;
export const OP_CMP_GE     = 16 as const;
export const OP_CMP_LE     = 17 as const;
export const OP_UNR_PLUS   = 18 as const;
export const OP_UNR_MINUS  = 19 as const;
export const OP_BIT_NOT    = 20 as const;
export const OP_CMP_IN     = 21 as const;
export const OP_CMP_IS     = 22 as const;
export const OP_CMP_IS_NOT = 23 as const;
export const OP_BOOL_OR    = 24 as const;
export const OP_BOOL_AND   = 25 as const;
export const OP_BOOL_NOT   = 26 as const;
export const OP_CMP_NOT_IN = 27 as const;

// https://www.w3schools.com/python/python_operators.asp
// the higher the more priority
export const pyop_priorities = [
	5,
	6,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	10,
	10,
	11,
	4,
	4,
	4,
	4,
	4,
	4,
	12,
	12,
	12,
	4,
	4,
	4,
	1,
	2,
	3,
	4,
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
// the higher the more priority
export const jsop_priorities = [
	5,
	6,
	7,
	10,
	10,
	11,
	12,
	12,
	12,
	12,
	12,
	13,
	8,
	8,
	9,
	9,
	9,
	9,
	14,
	14,
	14,
	9,
	8,
	8,
	3,
	4,
	14,
	9,
];

export const opid2opmethod  = [
	"__or__",
	"__xor__",
	"__and__",
	"__lshift__",
	"__rshift__",
	"__add__",
	"__sub__",
	"__mul__",
	"__truediv__",
	"__floordir__",
	"__mod__",
	"__pow__",
	"__eq__",
	"__neq__",
	"__gt__",
	"__lt__",
	"__ge__",
	"__le__",
	"__pos__",
	"__neg__",
	"__not__",
	"__contains__",
]

export const opid2ropmethod = [
	"__or__",
	"__xor__",
	"__and__",
	"__lshift__",
	"__rshift__",
	"__add__",
	"__sub__",
	"__mul__",
	"__truediv__",
	"__floordir__",
	"__mod__",
	"__pow__",
	"__eq__",
	"__neq__",
	"__gt__",
	"__lt__",
	"__ge__",
	"__le__",
	"__pos__",
	"__neg__",
	"__not__",
	"__contains__",
]

export const opid2iopmethod = [
	"__or__",
	"__xor__",
	"__and__",
	"__lshift__",
	"__rshift__",
	"__add__",
	"__sub__",
	"__mul__",
	"__truediv__",
	"__floordir__",
	"__mod__",
	"__pow__",
	"__eq__",
	"__neq__",
	"__gt__",
	"__lt__",
	"__ge__",
	"__le__",
	"__pos__",
	"__neg__",
	"__not__",
	"__contains__",
]

export const opid2jsop = [
	"|",
	"^",
	"&",
	"<<",
	">>",
	"+",
	"-",
	"*",
	"/",
	"/",
	"%",
	"**",
	"==",
	"!=",
	">",
	"<",
	">=",
	"<=",
	"+",
	"-",
	"~",
	"in",
	"===",
	"!==",
	"||",
	"&&",
	"!",
	"",
]

export const opsymbol2opid = {
	"|": OP_BIT_OR,
	"^": OP_BIT_XOR,
	"&": OP_BIT_AND,
	"<<": OP_BIT_LSHIFT,
	">>": OP_BIT_RSHIFT,
	"+": OP_BIN_ADD,
	"-": OP_BIN_SUB,
	"*": OP_BIN_MUL,
	"/": OP_BIN_DIV,
	"//": OP_BIN_FDIV,
	"%": OP_BIN_MOD,
	"**": OP_BIN_POW,
	"==": OP_CMP_EQ,
	"!=": OP_CMP_NEQ,
	">": OP_CMP_GT,
	"<": OP_CMP_LT,
	">=": OP_CMP_GE,
	"<=": OP_CMP_LE,
	"": OP_UNR_PLUS,
	"": OP_UNR_MINUS,
	"~": OP_BIT_NOT,
	"in": OP_CMP_IN,
	"is": OP_CMP_IS,
	"is not": OP_CMP_IS_NOT,
	"or": OP_BOOL_OR,
	"and": OP_BOOL_AND,
	"not": OP_BOOL_NOT,
	"not in": OP_CMP_NOT_IN,
};

export const OP_EQ2IS = OP_CMP_IS - OP_CMP_EQ;