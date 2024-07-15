import { astnode2js } from "ast2js";
import { ASTNode } from "structs/ASTNode";

export default function ast2js(this: ASTNode) {

    let cursor = {...this.jscode!.start};
    const start_col = cursor.col;

    let js = `${ astnode2js(this.children[0], cursor)}(`;

    for(let i = 1; i < this.children.length; ++i) {

        if( i !== 1)
            js += ",";
        
        cursor.col = start_col + js.length;
        js += `${ astnode2js(this.children[i], cursor)}`;
    }

    js += ")";

    return js;
}