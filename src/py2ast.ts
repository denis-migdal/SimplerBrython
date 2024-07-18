// Brython must be imported before.
declare var $B: any;

import {ASTNode} from "./structs/ASTNode";

import CORE_MODULES from "./core_modules/lists";


const modules: Record<string, (typeof CORE_MODULES)[keyof typeof CORE_MODULES][]> = {}

for(let module_name in CORE_MODULES) {

    const module = CORE_MODULES[module_name as keyof typeof CORE_MODULES];

    let names = ["null"];
    if( "brython_name" in module.AST_CONVERT) {

        if( Array.isArray(module.AST_CONVERT.brython_name) ) {
            names = module.AST_CONVERT.brython_name;
        } else {
            names = [module.AST_CONVERT.brython_name]
        }
    }

    for(let name of names)
        (modules[name] ??= []).push(module);
}


export function py2ast(code: string) {

    const parser = new $B.Parser(code, "filename", 'file');
	const _ast = $B._PyPegen.run_parser(parser);
    //console.log("AST", _ast);

	return convert_ast(_ast);   
}

export function convert_node(brython_node: any, context: Context): ASTNode {

    let name = brython_node.sbrython_type ?? brython_node.constructor.$name;

    if( !(name in modules) ) {
        console.log( brython_node )
        console.warn("Module not registered", name);
        name = "null"
    }

    for(let module of modules[name]) {
        const result = module.AST_CONVERT(brython_node, context);
        if(result !== undefined) {
            result.toJS = module.AST2JS;
            return result;
        }
    }

    /*
    for(let module_name in CORE_MODULES) {
        const module = CORE_MODULES[module_name as keyof typeof CORE_MODULES];
        let result = module.AST_CONVERT(brython_node, context);
        if(result !== undefined) {
            result.toJS = module.AST2JS;
            return result;
        }
    }
    */

    console.error(brython_node);
    throw new Error("Unsupported node");
}

//TODO: move2core_modules ?
export function convert_body(node: any, context: Context) {

    const lines = node.body.map( (m:any) => convert_line(m, context) );
    const last = node.body[node.body.length-1];

    const virt_node = {
        lineno    : node.body[0].lineno,
        col_offset: node.body[0].col_offset,

        end_lineno    : last.end_lineno,
        end_col_offset: last.end_col_offset
    }

    return new ASTNode(virt_node, "body", null, null, lines);
}

export function convert_line(line: any, context: Context): ASTNode {

    //TODO: line ASTNode ???

    let node = line;
    if( "value" in line && ! ("targets" in line) && ! ("target" in line) )
        node = line.value;

    return convert_node( node, context );
}

export type Context = {
    local_variables: Record<string, string|null>
}

export function convert_ast(ast: any): ASTNode[] {

    const context = {
        local_variables: Object.create(null)
    }

    const result = new Array(ast.body.length);
    for(let i = 0; i < ast.body.length; ++i) {
        //TODO: detect comments
        result[i] = convert_line(ast.body[i], context);
    }

    //TODO: detect comments...

    return result;
}