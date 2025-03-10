import { r } from "@SBrython/ast2js";
import { STypeFctSubs } from "./SType";
import { STYPE_FLOAT, STYPE_INT, STYPE_JSINT} from "./STypes";
import { LITERALS_INT } from "@SBrython/core_modules/lists";
import { firstChild, nbChild, parentOPPrio, resultType, setParentOPPrio, setResultType, type, VALUES } from "@SBrython/dop";
import { Converter, NOCONVERT } from "./Converters";
import { RETURN_TYPE_FCT } from "./ReturnTypeFcts";

// current
    // astname => pyname (bname2pyname)
    // pyname => r.pyname (BinaryOperators) - adds r except eq/ne/(l/g)(t/e)
    // pyname => a.pyname (AssignOperators) - adds "i"
    // jsname => pyname (jsop2pyop)
// astname => IDX => Py name (?) [needs py name as it is on its SType...]
    // AST Type ID = OP_IDX + CSNTE ?
    // reverse/assign/JS_OP_IDX = IDX + CSNTE ?
    // remove jsname => pyname (use CSNTE + reuse lists).

// current
    // a op b js cmp => b op a js cmp (reverse) [with the operator was reversed]
    // js op => priority (JSOperatorsPriority) ! u.- (for unary -)
// use JSOP_IDX => get reversed + priority + jssymb ?

export const bname2pyname = {
    "USub": "__neg__",
    "Not" : "not",

    "Pow" : "__pow__",

    "Mult"    : "__mul__",
    "Div"     : "__truediv__",
    "FloorDiv": "__floordiv__",
    "Mod"     : "__mod__",

    "Add"     : "__add__",
    "Sub"     : "__sub__",

    "Is"      : "is",
    "IsNot"   : "is not",
    "Eq"      : "__eq__",
    "NotEq"   : "__ne__",

    "Gt"      : "__gt__",
    "GtE"     : "__ge__",
    "Lt"      : "__lt__",
    "LtE"     : "__le__",

    "Invert"  : "__not__",

    "BitOr"   : "__or__",
    "BitXor"  : "__xor__",
    "BitAnd"  : "__and__",
    "RShift"  : "__rshift__",
    "LShift"  : "__lshift__",
}

export const BinaryOperators = {
    '__pow__'     : '__rpow__',
    '__mul__'     : '__rmul__',
    '__truediv__' : '__rtruediv__',
    '__floordiv__': '__rfloordiv__',
    '__mod__'     : '__rmod__',

    '__add__'    : '__radd__',
    '__sub__'    : '__rsub__',

    '__eq__'     : '__eq__',
    '__ne__'     : '__ne__',

    '__lt__'     : '__gt__',
    '__gt__'     : '__lt__',
    '__le__'     : '__ge__',
    '__ge__'     : '__le__',

    '__not__'    : '__rnot__',
    '__or__'     : '__ror__',
    '__and__'    : '__rand__',
    '__xor__'    : '__rxor__',
    '__lshift__' : '__rlshift__',
    '__rshift__' : '__rrshift__',
}

// adds i
export const AssignOperators = {
    '__pow__'     : '__ipow__',
    '__mul__'     : '__imul__',
    '__truediv__' : '__itruediv__',
    '__floordiv__': '__ifloordiv__',
    '__mod__'     : '__imod__',

    '__add__'    : '__iadd__',
    '__sub__'    : '__isub__',

    '__or__'     : '__ior__',
    '__and__'    : '__iand__',
    '__xor__'    : '__ixor__',
    '__lshift__' : '__ilshift__',
    '__rshift__' : '__irshift__',
}


export const jsop2pyop = {
    '**': 'pow',
    '*' : 'mul',
    '/' : 'truediv',
    '//': 'floordiv',
    '%' : 'mod',
    
    '+'  : 'add',
    '-'  : 'sub',
    'u.-': 'neg',

    '==' : 'eq',
    '!=' : 'ne',
    '<'  : 'lt',
    '<=' : 'le',
    '>=' : 'ge',
    '>'  : 'gt',

    '~' : 'not',
    '|' : 'or',
    '&' : 'and',
    '^' : 'xor',
    '<<': 'lshift',
    '>>': 'rshift'
};

// TODO: unary op too...

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
// bigger = more priority (0 by default).
export const JSOperators = [
    [],
    ['='], /* et tous les dérivés */ // right to left !
    ['||', '??'],
    ['&&'], //TODO
    ['|'],  //TODO
    ['^'],  //TODO
    ['&'],  //TODO
    ['==', '!=', '===', '!=='],
    ['<', '<=', '>=', '>'],
    ['<<', '>>', '>>>'], //TODO
    ['+', '-'],
    ['*', '/', '%'], // Python also has //
    ['**'],          // right to left !
    ['!', '++', '--', '~', 'u.-'],
];

/*
https://docs.python.org/3/library/functions.html#callable

-> classes
bool()
float()
int()
str()
bytearray() [Uint8Array] (RW)
bytes()     [?]          (RO) <- no types in JS...
                              <- Uint8Array with flag ? freeze() [JS unsafe]
            b"e\xFF" instead of [101,101], etc. (32 <= byt <= 126)
type()
list()      [Array]
tuple()     [Object.frozen(Array)]

set()       // relies on hash()... => set[literals]
                            => set() / <- JS set.
                       => bytes/bytearray/etc.
                            => inherit Set()
                                => Internal keys() set [recompute hash when add/remove]
                                  or
                                => internally stored as Map(hash, value) (?)
frozenset()            => extends set to replace modifiers.

dict()
                        dict[str] as Object.create(null) + (and pure JSObj as dict[str] )
                        => inherit Map()
                            => Set(hash) / Map(hash, key) / Map(key, hash) ???
                                // get/set.
                            => Map(key, value)

object()
complex()
memoryview()            => ArrayBuffer ?

-> print
ascii()
bin()
hex()
oct()
repr()
hash()

-> maths
abs()
divmod()
pow()
round()

-> lists
all()
any()
filter()
map()
max()
min()
sum()
len()
enumerate()
reversed()
slice()
sorted()
zip()

-> iter
range()
aiter()
iter()
anext()
next()

-> str
ord()
chr()
format()
print()
f""

callable()
classmethod()
staticmethod()
property()
super()
isinstance()
issubclass()
delattr()
getattr()
hasattr()
setattr()
dir()

eval()
exec()
compile()
breakpoint()

globals()
locals()
vars()
__import__()

id()
    -> on-demand weakref ?

help()
input()
open()

*/

/*
unary
- pos (unary +)

- bool
- float
- int
- str
- repr

- abs
- ceil
- floor
- round
- trunc

binary
- pow/rpow
- divmod/rdivmod

class
- class
- new
- init
- init_subclass

- subclasshook // __isinstancecheck__ 

- dir
- delattr
- setattr
- getattribute

- doc
- format
- getnewargs
- hash
- index (?)
- sizeof
*/

export function Int2Number(a: number, target = STYPE_FLOAT) {

    if( resultType(a) !== STYPE_INT) // already a number
        return a;

    if( type(a) === LITERALS_INT) {
        // if bigint can't safely convert to JSINT.
        if( target === STYPE_FLOAT )
            setResultType(a, STYPE_JSINT);
        return a;
    }

    const a_value = VALUES[a];

    const coffset = firstChild(a);

    if( a_value === '__mul__' || a_value === '__rmul__' ) {
        const ltype = resultType(coffset);
        const rtype = resultType(coffset+1);
        if(    (ltype === STYPE_INT || ltype === STYPE_JSINT)
            && (rtype === STYPE_INT || rtype === STYPE_JSINT)
        ) {
            setResultType(a, target);
            return a;
        }
    }
    if( a_value === '__neg__' && resultType(coffset) === STYPE_INT) {
        setResultType(a, target);
        return a;
    }
    if( target === STYPE_FLOAT )
        return r`Number(${a})`;

    // int -> jsint cast is facultative...
    return a;
}

export function Number2Int(a: number) {

    if( resultType(a) === STYPE_INT)
        return a;

    if( type(a) === LITERALS_INT) {
        setResultType(a, STYPE_INT); // force bigint convertion
        return a;
    }
    if( VALUES[a] === '__neg__' && resultType(firstChild(a)) === STYPE_JSINT) {
        setResultType(a, STYPE_INT);
        return a;
    }

    return r`BigInt(${a})`;
}

let JSOperatorsPriority: Record<string, number> = {};
for(let i = 0; i < JSOperators.length; ++i) {

    const priority = i;
    for(const op of JSOperators[i])
        JSOperatorsPriority[op] = priority;

}

export function reversed_operator<T extends keyof typeof BinaryOperators>(op: T) {
    return BinaryOperators[op];
}

const LEFT  = 1;
const RIGHT = 2;

export function multi_jsop(node: number, op: string ) {

    const first      = firstChild(node);
    const nbChildren = nbChild(node); 

    const prio   = JSOperatorsPriority[op];
    const p_prio = JSOperatorsPriority[op];

    setParentOPPrio(first, prio);

    for(let i = 1; i < nbChildren; ++i)
        setParentOPPrio( first + i, prio + 1 );

    let result = r`${first}`;
    for(let i = 1; i < nbChildren; ++i)
        result = r`${result} && ${first + i}`; //TODO: better...

    if( p_prio < prio )
        result = r`(${result})`;

    return result;
}

// null operation, the node has the same priority as his father.
// 2*int(1+1) => 2*(1+1)
export function id_jsop(node: number, a: number) { // TODO remove arg ?

    setParentOPPrio( a, parentOPPrio(node) );

    return r`${a}`;
}

export function binary_jsop(node: number, a: number|any, op: string, b: number|any) {

    const   prio = JSOperatorsPriority[op];
    const p_prio = parentOPPrio(node);

    if(typeof a === "number")
        setParentOPPrio(a, prio);

    if(typeof b === "number")
        setParentOPPrio(b, prio);

    let cmp = r`${a}${op}${b}`;
    // if father has more prio, add parenthesis.
    if( p_prio > prio )
        cmp = r`(${cmp})`;

    return cmp;
}


export function unary_jsop(node: number, op: string, a: number|any) {

    let rop = op;
    if( rop === '-')
        rop = 'u.-';

    // unary JS Op prio list (?)
    const prio   = JSOperatorsPriority[rop];
    const p_prio = parentOPPrio(node);

    if(typeof a === "number")
        setParentOPPrio(a, prio);

    let cmp = r`${op}${a}`;
    // if father has more prio, add parenthesis.
    if( p_prio > prio )
        cmp = r`(${cmp})`;

    return cmp;
}



type GenUnaryOps_Opts = {
    convert_self    ?: Converter,
    substitute_call ?: (node: number, a: number) => any
};


export function genUnaryOps(ops        : (keyof typeof jsop2pyop)[],
                            return_type: RETURN_TYPE_FCT,
                            {
                                convert_self = NOCONVERT,
                                substitute_call
                            }: GenUnaryOps_Opts = {}
                        ) {

    let result: Record<string, STypeFctSubs> = {};

    for(let op of ops) {

        const pyop = jsop2pyop[op];
        if( op === 'u.-')
            op = '-';

        substitute_call ??= (node: number, self: number) => {
            return unary_jsop(node, op, convert_self(self) );
        };

        result[`__${pyop}__`] = {
            return_type,
            substitute_call
        };
    }
    
    return result;
}

type GenBinaryOps_Opts = {
    convert_other   ?: Converter,
    convert_self    ?: Converter,
    substitute_call ?: (node: number, self: number|any, other: number|any) => any
};

export function genBinaryOps(ops: (keyof typeof jsop2pyop)[],
                            return_type: RETURN_TYPE_FCT, 
                         {
                            convert_other   = NOCONVERT,
                            convert_self    = NOCONVERT,
                            substitute_call,
                         }: GenBinaryOps_Opts = {}) {

    let result: Record<string, STypeFctSubs> = {};

    for(let op of ops) {

        const pyop = jsop2pyop[op];
        if( op === '//')
            op = '/';

        let cs  = (node: number, self: number, other: number) => {
            return binary_jsop(node, convert_self(self), op, convert_other(other) );
        }

        let rcs = (node: number, self: number, other: number) => {
            return binary_jsop(node, convert_other(other), op, convert_self(self) );
        }

        if( substitute_call !== undefined ) {

            cs  = (node: number, self: number, o: number) => {
                return substitute_call(node, convert_self(self), convert_other(o) );
            };
        
            // same_order ? fct : 
            rcs = (node: number, self: number, o: number) => {
                return substitute_call(node, convert_other(o), convert_self(self) );
            };
        }

        result[`__${pyop}__`] = {
            return_type,
            substitute_call: cs,
        };
        result[`__r${pyop}__`] = {
            return_type,
            substitute_call: rcs,
        };
        if( convert_self === NOCONVERT && substitute_call === undefined)
            result[`__i${pyop}__`] = {
                return_type,
                substitute_call: (node: number, self: number, other: number) => {
                    
                    const other_value = VALUES[other];

                    if( op === '+' && other_value === 1)
                        return unary_jsop(node, '++', self);
                    if( op === '-' && other_value === 1)
                        return unary_jsop(node, '--', self);
                    
                    return binary_jsop(node, self, op+'=', convert_other(other) );
                },
            };
    }
    
    return result;
}

export const CMPOPS_LIST = ['==', '!=', '>', '<', '>=', '<='] as const;

const reverse = {
    "==": "==",
    "!=": "!=",
    ">": "<",
    "<": ">",
    ">=": "<=",
    "<=": ">=",
} as const;

export function genCmpOps(  ops        : readonly (keyof typeof reverse)[],
                            return_type: RETURN_TYPE_FCT,
                            {
                                convert_other   = NOCONVERT,
                                convert_self    = NOCONVERT,
                                substitute_call,
                             }: GenBinaryOps_Opts = {} ) {

    let result: Record<string, STypeFctSubs> = {};

    for(const op of ops) {

        const pyop = jsop2pyop[op];

        let cs  = (node: number, self: number, other: number, reversed: boolean) => {

            let cop = op;

            let a = convert_self(self);
            let b = convert_other(other);
            if( reversed ) {
                [a,b] = [b,a];
                cop = reverse[cop];
            }

            if( cop[0] === '=' || cop[0] === '!' ) {
                if( resultType(self) === resultType(other) )
                    cop = cop + '=';
            }

            return binary_jsop(node, a, cop, b);
        }

        if( substitute_call !== undefined ) {

            cs  = (node: number, self: number, o: number, _: boolean) => {
                return substitute_call(node, convert_self(self), convert_other(o) ); //TODO...
            };
        }

        result[`__${pyop}__`] = {
            return_type,
            substitute_call: cs,
        };
    }
    
    return result;
}