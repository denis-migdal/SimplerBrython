import Body from "@SBrython/sbry/bry2sbry/Body";
import { AST_CTRL_IFBLOCK } from "@SBrython/sbry/ast2js/";
import { addChild, setType } from "@SBrython/sbry/dop";
import { Context, convert_node, set_py_code_from_list } from "@SBrython/sbry/bry2sbry/utils";

export default function convert(dst: number, node: any, context: Context) {

    let childCount = 2;

    let cur = node;
    while( "orelse" in cur && cur.orelse.length === 1 ) {

        if( ! ("test" in cur.orelse[0]) ) { // final else
            ++childCount;
            break;
        }
        cur = cur.orelse[0];
        childCount += 2;
    }

    setType(dst, AST_CTRL_IFBLOCK);
    let coffset = addChild(dst, childCount);

    // if
    convert_node(coffset++, node.test, context);

    Body(coffset, node.body, context);
    if(__DEBUG__) set_py_code_from_list(coffset, node.body);
    ++coffset;

    // else if
    cur = node;
    while( "orelse" in cur && cur.orelse.length === 1 ) {

        // cur.orelse[0] is the body
        if( ! ("test" in cur.orelse[0]) ) { // final else
            convert_node(coffset, cur.orelse, context)
            break;
        }

        cur = cur.orelse[0];

        convert_node(coffset++, cur.test, context);

        Body(coffset, cur.body, context);
        if(__DEBUG__) set_py_code_from_list(coffset, cur.body);
        ++coffset;

        childCount += 2;
    }
}