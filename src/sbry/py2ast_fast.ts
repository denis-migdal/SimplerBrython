import Types, { TYPEID_NotImplementedType } from "@SBrython/sbry/types/list";
import { AST_BODY, AST_LIT_TRUE, AST_LIT_FALSE, AST_KEY_ASSERT, AST_CTRL_WHILE, AST_KEY_BREAK, AST_KEY_CONTINUE, AST_KEY_PASS, AST_CTRL_IF, AST_DEF_FCT, AST_DEF_ARGS, AST_KEY_RETURN, AST_LIT_FLOAT, AST_LIT_NONE, AST_LIT_STR, AST_LIT_INT, AST_CTRL_ELSE, AST_CTRL_ELIF, AST_STRUCT_LIST, AST_CTRL_FOR, AST_DEF_ARG_POSONLY, AST_DEF_ARG_VARARGS, AST_DEF_ARG_KWONLY, AST_DEF_ARG_KWARGS, AST_CALL, AST_CALL_ARG_KW, AST_DEF_ARG_POS, AST_OP_OP } from "./ast2js/list";
import dop_reset, { addFirstChild, addSibling, ARRAY_TYPE, ASTNODES, CODE_BEG_COL, CODE_BEG_LINE, CODE_END_COL, CODE_END_LINE, createASTNode, firstChild, nextSibling, NODE_ID, NODE_TYPE, PY_CODE, resultType, setFirstChild, setResultType, setSibling, setType, type, TYPE_ID, VALUES } from "./dop"
import { AST } from "./py2ast"
import { Callable, Fct, RETURN_TYPE, WRITE_CALL } from "./types/utils/types";
import { default_call } from "./ast2js/call/";
import { TYPEID_str, TYPEID_float, TYPEID_int, TYPEID_jsint } from "./types/list";
import { OP_ID, OP_OFF_REVERSE, opid2opmethod, opsymbol2opid, pyop_priorities } from "./structs/operators";

const END_OF_SYMBOL = /[^\w]/;
const CHAR_NL    = 10;
const CHAR_SPACE = 32;
const CHAR_QUOTE = 34;
const CHAR_PARENTHESIS_LEFT   = 40;
const CHAR_PARENTHESIS_RIGHT  = 41;
const CHAR_STAR  = 42;
const CHAR_COMMA = 44;
const CHAR_DOT   = 46;
const CHAR_SLASH = 47;
const CHAR_COLON = 58;
const CHAR_DIGIT_0 = 48;
const CHAR_DIGIT_9 = 57;
const CHAR_EQ      = 61;
const CHAR_BRACKET_LEFT   = 91;
const CHAR_BRACKET_RIGHT  = 93;
const CHAR_a              = 97;
const CHAR_z              = 122;

let offset = 0;
let code: string;
let curChar!: number;

function consumeEmptyLines(): boolean {

    while( offset < code.length ) {

        curChar = code.charCodeAt(offset);

        //TODO: if # => consume...

        if(curChar !== CHAR_NL)
            return true;

        if(__DEBUG__) ++CURSOR[0];
        ++offset;
    }

    if(__DEBUG__) CURSOR[1] = offset;

    return false;
}

function nextSymbol(){
    const end = code.slice(offset).search(END_OF_SYMBOL);

    if(__DEBUG__ && code.charCodeAt(offset+end) === CHAR_NL) {
        ++CURSOR[0];
        CURSOR[1] = offset + end + 1;
    }

    return code.slice(offset, offset += end );
}

let CURRENT_PARAM_TYPE!: NODE_TYPE;
let POSONLY_END       !: NODE_ID;

function nextArg(cur: NODE_ID): boolean {

    if( curChar === CHAR_PARENTHESIS_RIGHT )
        return false;

    ++offset; // ( or ,
    consumeSpaces();

    if( curChar === CHAR_SLASH) {

        POSONLY_END = cur;

        ++offset; // /
        consumeSpaces();

        // @ts-ignore
        if( curChar === CHAR_PARENTHESIS_RIGHT )
            return false;

        return nextArg(cur);
    }

    if( curChar === CHAR_STAR) {
        
        curChar = code.charCodeAt(++offset);

        if( curChar === CHAR_STAR) {
            ++offset;
            consumeSpaces();
            CURRENT_PARAM_TYPE = AST_DEF_ARG_KWARGS;
            return true;
        }

        consumeSpaces();

        if( curChar === CHAR_COMMA) {
            CURRENT_PARAM_TYPE = AST_DEF_ARG_KWONLY;
            return nextArg(cur);
        }

        CURRENT_PARAM_TYPE = AST_DEF_ARG_VARARGS
        return true;
    }

    if( CURRENT_PARAM_TYPE === AST_DEF_ARG_VARARGS)
        CURRENT_PARAM_TYPE = AST_DEF_ARG_KWONLY;

    return true;
}

function readArg(id: NODE_ID) {

    VALUES[id] = nextSymbol(); // name
    consumeSpaces();

    if( curChar === CHAR_EQ ) { // might be or not, but well...
        ++offset;
        consumeSpaces();
        setFirstChild(id, readExpr()); // default value...
        // no needs for consumeSpace due to readExpr...
    }
}

const KNOWN_SYMBOLS: Record<string, (parent: NODE_ID)=>void> = {
    // possibles in expr:
    "None" :    (id) => setType(id, AST_LIT_NONE),
    "True" :    (id) => setType(id, AST_LIT_TRUE),
    "False":    (id) => setType(id, AST_LIT_FALSE),
    // not possibles in expr:
    "break":    (id) => setType(id, AST_KEY_BREAK),
    "continue": (id) => setType(id, AST_KEY_CONTINUE),
    "pass":     (id) => setType(id, AST_KEY_PASS),
    "return":   (id) => setType(id, AST_KEY_RETURN),
    "assert": (id) => {
        setType(id, AST_KEY_ASSERT);
        ++offset; //TODO: consume white spaces at the start of readExpr (?)
        setFirstChild(id, readExpr() );
        ++offset; // this is a \n
    },
    "for": (id) => {
        // TODO: for range

        setType(id, AST_CTRL_FOR);
        ++offset; //TODO: consume white spaces at the start of readExpr (?)
        VALUES[id] = nextSymbol(); // name
        consumeSpaces();
        offset += 2; // "in"
        consumeSpaces();
        const first = setFirstChild(id, readExpr()); // list
        ++offset; // this is a :

        setSibling(first, readBody()  );
    },
    "while": (id) => {
        setType(id, AST_CTRL_WHILE);
        ++offset; //TODO: consume white spaces at the start of readExpr (?)
        const first = setFirstChild(id, readExpr());
        ++offset; // this is a :

        setSibling(first, readBody()  );
    },
    "if": (id) => {
        setType(id, AST_CTRL_IF);
        ++offset; //TODO: consume white spaces at the start of readExpr (?)
        const first = setFirstChild(id, readExpr());
        ++offset; // this is a :

        setSibling(first, readBody() );
    },
    "elif": (id) => {
        setType(id, AST_CTRL_ELIF);
        ++offset; //TODO: consume white spaces at the start of readExpr (?)
        const first = setFirstChild(id, readExpr());
        ++offset; // this is a :

        setSibling(first, readBody() );
    },
    "else": (id) => {
        setType(id, AST_CTRL_ELSE);
        ++offset; // this is a :

        setFirstChild(id, readBody() );
    },
    //TODO: elif/else
    "def": (id) => {

        setType(id, AST_DEF_FCT);
        ++offset; //TODO: consume white spaces at the start of readExpr (?)

        VALUES[id] = nextSymbol(); // name

        const args = addFirstChild(id);
        setType(args, AST_DEF_ARGS);

        //TODO: if same return + write_call, can be shared (i.e. same type/typeID)
        const SType_fct: Callable = {
            __name__: "function",
            __call__: {
                __name__: "__call__",
                [RETURN_TYPE]: () => {
                    return SType_fct.__call__[RETURN_TYPE]();
                },
                [WRITE_CALL]: default_call,
            }
        }
    
        const STypeID = Types.length as TYPE_ID; // 15 for now...
        Types[STypeID] = SType_fct;

        setResultType(id, STypeID);

        CURRENT_PARAM_TYPE = AST_DEF_ARG_POS;
        POSONLY_END        = 0;

        let cur: NODE_ID = 0;

        if( nextArg(cur) ) {

            readArg( cur = addFirstChild(args) );
            setType(cur, CURRENT_PARAM_TYPE);

            while( nextArg(cur) ) {
                readArg( cur = addSibling(cur) );
                setType(cur, CURRENT_PARAM_TYPE);
            }

            if( POSONLY_END !== 0) {

                let cur = firstChild(args);
                while(cur !== POSONLY_END) {
                    setType(cur, AST_DEF_ARG_POSONLY);
                    cur = nextSibling(cur);
                }
                setType(cur, AST_DEF_ARG_POSONLY); // ?
            }
        }

        offset += 2; // ):

        setSibling(args, readBody() );
    }
}

let CURRENT_INDENTATION = 0;
function consumeIndentedLines() {

    let curChar = code.charCodeAt(offset);
    if( curChar !== CHAR_NL ) // indentation already consumed
        return;

    let beg = ++offset;
    while( offset < code.length ) {

        while( (curChar = code.charCodeAt(offset)) === CHAR_SPACE )
            ++offset;

        // we have a non-empty line.
        if(curChar !== CHAR_NL) {
            CURRENT_INDENTATION = offset - beg;
            return;
        }

        // empty line, consume next line.
        if(__DEBUG__) ++CURSOR[0];
        beg = ++offset;
    }

    CURRENT_INDENTATION = 0;
    if(__DEBUG__) CURSOR[1] = offset;
}

function readBody(){

    const id = createASTNode();

    if( __DEBUG__ ) set_py_code_beg(id);

    setType(id, AST_BODY);

    consumeIndentedLines(); // guaranty...
    const indent = CURRENT_INDENTATION;

    // a child is guaranteed.
    let cur = setFirstChild(id, readExpr() );

    consumeIndentedLines(); // + check at the same time ???
    while(CURRENT_INDENTATION === indent) {
        cur = setSibling(cur, readExpr() );
        consumeIndentedLines();
    }

    offset -= CURRENT_INDENTATION + 1;

    if( __DEBUG__ ) set_py_code_end(id);

    return id;
}

function consumeSpaces() {

    curChar = code.charCodeAt(offset);
    while(curChar === CHAR_SPACE)
        curChar = code.charCodeAt(++offset);
}

function readToken() {
    //TODO: known symbol 2 versions...
    let node = createASTNode();

    if( __DEBUG__ ) set_py_code_beg(node);

    if( curChar === CHAR_QUOTE ) { // consume str

        setType(node, AST_LIT_STR);
        setResultType(node, TYPEID_str);

        const beg = offset;
        do {
            curChar = code.charCodeAt(++offset);
        } while( curChar !== CHAR_QUOTE);

        ++offset;

        VALUES[node] = code.slice(beg, offset);

    } else if(curChar >= CHAR_DIGIT_0 && curChar <= CHAR_DIGIT_9 ) { // consume number
       
        const beg = offset;
        do {
            curChar = code.charCodeAt(++offset);
        } while( curChar >= CHAR_DIGIT_0 && curChar <= CHAR_DIGIT_9 );

        let astnode_type = AST_LIT_INT;
        let result_type  = TYPEID_int;

        if( curChar === CHAR_DOT ) {

            astnode_type = AST_LIT_FLOAT;
            result_type  = TYPEID_float;
        
            do {
                curChar = code.charCodeAt(++offset);
            } while( curChar >= CHAR_DIGIT_0 && curChar <= CHAR_DIGIT_9 );
        } else if( offset - beg <= 9 ) { // opti
            result_type = TYPEID_jsint
        }


              setType(node, astnode_type);
        setResultType(node, result_type);
        
        VALUES[node] = code.slice(beg, offset);
    }  else if( curChar === CHAR_BRACKET_LEFT ) {
        // consume list

        setType(node, AST_STRUCT_LIST);

        ++offset;

        consumeSpaces();
        // @ts-ignore
        if(curChar !== CHAR_BRACKET_RIGHT) {

            let cur = setFirstChild(node, readExpr() );

            consumeSpaces();
            // @ts-ignore
            if( curChar === CHAR_COMMA ) {
                ++offset;
                consumeSpaces();
            }

            // @ts-ignore
            while(curChar !== CHAR_BRACKET_RIGHT) {

                cur = setSibling(cur, readExpr() );

                consumeSpaces();
                // @ts-ignore
                if( curChar === CHAR_COMMA ) {
                    ++offset;
                    consumeSpaces();
                }
            }
        }

        ++offset;

    } else {
        const token  = nextSymbol();
        const symbol = KNOWN_SYMBOLS[token];
        if( symbol !== undefined)
            symbol(node);
        else {
            //TODO: get type from context
            //TODO: search in local -> True/False/None in context ?

            if( __DEBUG__ ) set_py_code_end(node);

            consumeSpaces(); // end of py code not exact... (set again later...)

            if( curChar === CHAR_PARENTHESIS_LEFT ) { // CALL

                let cur = node;

                node = createASTNode();
                setType(node, AST_CALL);
                setFirstChild(node, cur);

                if( __DEBUG__ ) set_py_code_beg(node);

                //TODO: get left from context...
                setResultType(cur, 15 as TYPE_ID); // h4ck
                VALUES[cur] = "foo"; // h4ck

                ++offset; // (
                consumeSpaces();

                // @ts-ignore
                while(curChar !== CHAR_PARENTHESIS_RIGHT) {

                    let next;

                    //TODO: requires op refactor...
                    if( curChar > CHAR_DIGIT_9 ) { // we assume kw args

                        // h4ck (requires context...)
                        const name = nextSymbol();
                        consumeSpaces();
                        ++offset;
                        consumeSpaces();

                        next = createASTNode();
                        setType(next, AST_CALL_ARG_KW);
                        VALUES[next] = name;
                        setFirstChild(next, readExpr());
                    } else {
                        next = readExpr();
                    }

                    cur = setSibling(cur, next);
                    // @ts-ignore
                    if( curChar === CHAR_COMMA) {
                        ++offset; // ,
                        consumeSpaces();
                    }
                    // TODO kw arg...
                    // TODO **kwargs + *varargs
                }

                ++offset; // )
            }
        }
    }

    if( __DEBUG__ ) set_py_code_end(node);

    consumeSpaces();
    return node;
}

function isEndOfExpr() {
    return curChar === CHAR_NL
        || curChar === CHAR_COLON
        || curChar === CHAR_COMMA
        || curChar === CHAR_BRACKET_RIGHT
        || curChar === CHAR_PARENTHESIS_RIGHT
}

function readOp() {

    const beg      = offset;
    if( curChar >= CHAR_a && curChar <= CHAR_z) { // and, not, in, etc.

        do {
            curChar = code.charCodeAt(++offset);
        } while( curChar >= CHAR_a && curChar <= CHAR_z );

    } else {
        let   nextChar = code.charCodeAt(offset+1);
        if( nextChar === curChar ) { // **, //, >>, <<, etc.
            ++offset;
            nextChar = code.charCodeAt(offset+1);
        }
        if( nextChar === CHAR_EQ ) // *=, **=, etc.
            ++offset;

        ++offset;
    }

    const op_str = code.slice(beg, offset);
    consumeSpaces();

    return opsymbol2opid[op_str as keyof typeof opsymbol2opid];
}

function readExpr() {

    let value = readToken();

    if( isEndOfExpr() )
        return value;

    let op      = readOp();
    const right = readToken();

    if( isEndOfExpr() )
        return createCallOpNode(createASTNode(), value, op, right);

    type OP_INFO = [NODE_ID, NODE_ID, number, NODE_ID];

    let lop      = [createASTNode(), value, op, 0] as OP_INFO;
    let lop_prio = pyop_priorities[op];

    value = right;

    let rop: OP_INFO;
    let rop_prio;

    const stack: OP_INFO[] = [];

    do {
        
        op = readOp();
        rop_prio = pyop_priorities[op];

        // priority
        if( rop_prio > lop_prio ) { // a+(b+...)

            rop    = [createASTNode(), value, op, 0];
            lop[3] = rop[0];

            stack.push(rop);

        } else { // (a+b)+...

            lop[3] = value;

            createCallOpNode(...lop);
            for(let i = stack.length - 1; i >= 0 ; --i)
                createCallOpNode(...stack[i]);
            stack.length = 0;

            rop   = [createASTNode(), lop[0], op, 0];
            lop   = rop;
        }

        lop_prio = rop_prio;
        value = readToken();

    } while( ! isEndOfExpr() );

    lop[3] = value;
    value = createCallOpNode(...lop)

    for(let i = stack.length - 1; i >= 0 ; --i)
        createCallOpNode(...stack[i]);

    return value;
}

export function py2ast(_code: string, filename: string): AST {
    
    if( _code[_code.length-1] !== '\n')
        _code += '\n'; // avoid EOF issue when parsing...

    code = _code;

    const nodes = ASTNODES;
    dop_reset();
    offset = 0;
    
    const id = createASTNode();
    setType(id, AST_BODY);
    
    if( consumeEmptyLines() ) {

        let cur = setFirstChild(id, readExpr() );

        while( consumeEmptyLines() )
            cur = setSibling(cur, readExpr() );
    }

    return {
        nodes, //TODO: slice
        filename
    }
}

function createCallOpNode(call: NODE_ID, left: NODE_ID, op: OP_ID, right: NODE_ID) {

    setType(call, AST_CALL);

    if( __DEBUG__ ) {
        copy_py_code_beg(left , call);
        copy_py_code_end(right, call);
    }

    const opnode = createASTNode();
    setType(opnode, AST_OP_OP);
    setFirstChild(call, opnode);

    if( __DEBUG__ ) {
        // I guess ?
        const dst_off = 4*(opnode as number);
        const src_beg = 4*(left  as number);
        const src_end = 4*(right as number);

        PY_CODE[ dst_off + CODE_BEG_LINE ] = PY_CODE[ src_beg + CODE_END_LINE ];
        PY_CODE[ dst_off + CODE_BEG_COL  ] = PY_CODE[ src_beg + CODE_END_COL  ];
        PY_CODE[ dst_off + CODE_END_LINE ] = PY_CODE[ src_end + CODE_BEG_LINE ];
        PY_CODE[ dst_off + CODE_END_COL  ] = PY_CODE[ src_end + CODE_BEG_COL  ];
    }

    let pyop_name = opid2opmethod[op];

    if( __DEBUG__ && pyop_name === undefined)
        throw new Error(`Unknown operator ${op}!`);

    const ltype = resultType(left);
    const rtype = resultType(right);

    let method   = Types[ltype].__class__![pyop_name] as Fct;
    let ret_type = TYPEID_NotImplementedType;

    if( method !== undefined )
        ret_type = method[RETURN_TYPE](rtype); //TODO: change...
    
    if( ret_type === TYPEID_NotImplementedType) {
        
        op  += OP_OFF_REVERSE;
        pyop_name = opid2opmethod[op];
        
        // we NEED to invert l&r.
        let _ = left;
        left  = right;
        right = _;

        method = Types[rtype].__class__![pyop_name] as Fct;

        if( __DEBUG__ && method === undefined)
            throw new Error(`${Types[rtype].__class__?.__name__} ${pyop_name} ${Types[ltype].__class__?.__name__} NOT IMPLEMENTED!`);

        ret_type = method[RETURN_TYPE](ltype!);

        if( __DEBUG__ && ret_type === TYPEID_NotImplementedType)
            throw new Error(`${Types[rtype].__class__?.__name__} ${pyop_name} ${Types[ltype].__class__?.__name__} NOT IMPLEMENTED!`);
    }

    VALUES[call] = method;
    setResultType(call, ret_type)

    setSibling(opnode, left );
    setSibling(left  , right);

    return call;
}

// py code

const CURSOR = __DEBUG__ ? new ARRAY_TYPE(2) : null as unknown as InstanceType<typeof ARRAY_TYPE>;

export function set_py_code_beg(id: NODE_ID) {

    const off = 4*(id as number);
    PY_CODE[ off + CODE_BEG_LINE ] = CURSOR[0] + 1;
    PY_CODE[ off + CODE_BEG_COL  ] = offset - CURSOR[1];
}

export function set_py_code_end(id: NODE_ID) {

    const off = 4*(id as number);
    PY_CODE[ off + CODE_END_LINE ] = CURSOR[0] + 1;
    PY_CODE[ off + CODE_END_COL  ] = offset - CURSOR[1];
}

export function copy_py_code_beg(src: NODE_ID, dst: NODE_ID) {

    const src_off = 4*(src as number);
    const dst_off = 4*(dst as number);

    PY_CODE[ dst_off + CODE_BEG_LINE ] = PY_CODE[ src_off + CODE_BEG_LINE ];
    PY_CODE[ dst_off + CODE_BEG_COL  ] = PY_CODE[ src_off + CODE_BEG_COL  ];
}

export function copy_py_code_end(src: NODE_ID, dst: NODE_ID) {

    const src_off = 4*(src as number);
    const dst_off = 4*(dst as number);

    PY_CODE[ dst_off + CODE_END_LINE ] = PY_CODE[ src_off + CODE_END_LINE ];
    PY_CODE[ dst_off + CODE_END_COL  ] = PY_CODE[ src_off + CODE_END_COL  ];
}