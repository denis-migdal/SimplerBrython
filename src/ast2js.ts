import { ASTNode, CodePos } from "structs/ASTNode";

export function ast2js(ast: ASTNode[]) {

	let js = "";
    let cursor = {line: 1, col: 0};
	for(let node of ast) {
		js += astnode2js(node, cursor);
        js +=    newline(node, cursor);
    }

	return js;
}

//TODO: move2core_modules ?
export function body2js(node: ASTNode, cursor: CodePos, idx = 0) {
    
    const start = {...cursor};

    let js = "{";
    const body = node.children[idx];//body: ASTNode[];

    // h4ck due to } else/elif {
    if(node.type === "controlflows.else" || node.type === "controlflows.elif")
        --node.jscode!.start.col;

    for(let i = 0; i < body.children.length; ++i) {
        js += newline(node, cursor, 1);
        js += astnode2js(body.children[i], cursor)
    }

    // h4ck due to } else/elif {
    if(node.type === "controlflows.else" || node.type === "controlflows.elif")
        ++node.jscode!.start.col;

    js += newline(node, cursor);
    js += "}";
    cursor.col += 1;

    body.jscode = {
        start: start,
        end  : {...cursor}
    }

    return js;
}

//TODO: move2core_modules ?
export function args2js(node: ASTNode, cursor: CodePos) {
    
    const start = {...cursor};

    let js = "(";
    cursor.col += 1;

    const args = node.children[0];
    
    for(let i = 0 ; i < args.children.length; ++i) {
        if( i !== 0) {
            js += ",";
            ++cursor.col;
        }

        js += arg2js(args.children[i], cursor);
    }

    js += ")";
    cursor.col += 1;

    args.jscode = {
        start: start,
        end  : {...cursor}
    }

    return js;
}

export function arg2js(node: ASTNode, cursor: CodePos) {
    
    const start = {...cursor};

    let js = node.value;
    cursor.col += js.length;

    node.jscode = {
        start: start,
        end  : {...cursor}
    }

    return js;
}

function update_end(node: ASTNode, js: string) {

    if( node.jscode!.end !== null)
        return;

    const start = node.jscode!.start;

    let line_count    = 0;
    let last_line_idx = 0;

    for(let i = 0; i < js.length; ++i)
        if(js[i] === '\n') {
            ++line_count;
            last_line_idx = i;
        }

    if(line_count === 0) {
        node.jscode!.end = {
            line: start.line,
            col : start.col + js.length
        }
        return;
    }

    node.jscode!.end = {
        line: start.line + line_count,
        col : js.length - last_line_idx
    }
}

export function newline(node: ASTNode, cursor: CodePos, indent_level: number = 0) {

    const indent = indent_level*4 + node.jscode!.start.col;

    ++cursor.line;
    cursor.col = indent;
    return "\n" + "".padStart(indent);
}

export function astnode2js(node: ASTNode, cursor: CodePos) {

    node.jscode = {
        start: {...cursor},
        end  : null as any
    }

    let js = node.toJS!();

    update_end(node, js);

    cursor.line = node.jscode!.end.line;
    cursor.col  = node.jscode!.end.col;
    
    return js;
}