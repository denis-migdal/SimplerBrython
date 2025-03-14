import generate from "@SBrython/utils/generate";
import execute  from "@SBrython/utils/execute";
import resetResults from "@SBrython/utils/results";
import { generate_report } from "@SBrython/utils/reports";
import astnode2tree, { NODE } from "@SBrython/utils/print/astnode2tree";

window.onerror = (...args) => {
	console.log(args);
	// msg
	// stack
	// 
}

const  bry_output  = document.querySelector ( '.brython_output')!;
const sbry_output  = document.querySelector('.sbrython_output')!;
const python_input = document.querySelector<HTMLInputElement>('#python')!;

const search = new URLSearchParams( location.search );
const test_name = search.get("test");
const merge     = true; // search.get("merge") === "true" ? true : false;

const exclude_list = await loadExcludeList();

const brython_tests = ['basic test suite', 'numbers'];
const test_suites   = await loadTests(...brython_tests); // cf end of file for available tests

if( test_name !== null)
    startTests(test_name, merge);

// handle GUI...

const python_output = document.querySelector(".python_ouput")!;
const ast_output    = document.querySelector("#ast")!;
const js_output     = document.querySelector("#js")!;


python_input.addEventListener("input",
    () => {
        const code = python_input.value;
        localStorage.setItem('sbrython_code', code);
        oneTimeExec(code);
    });

python_input.addEventListener('keydown', (ev) => {

    if(ev.code === "Tab") {
            ev.preventDefault();
    
            let beg = python_input.selectionStart!;
            let end = python_input.selectionEnd!;
    
            const txt = python_input.value;
            const preText  = txt.slice(0  , beg);
            const postText = txt.slice(end, txt.length);
    
            python_input.value = preText + "    " + postText; // input tab key
            
            const pos = beg+4;
            python_input.setSelectionRange(pos, pos);
        }
    });

if( window.location.search === '') {
    python_input.value = localStorage.getItem('sbrython_code') ?? "";
    oneTimeExec(python_input.value)
}

function oneTimeExec(fullcode: string) {

    const results = resetResults();

    clearResults();

    generate(fullcode, results);

    try {
        execute(results);
    } catch(e) {
        console.warn(e);
    }

    //TODO: AST+code trees...

    sbry_output.classList.add('success');
    
     bry_output.textContent = generate_report(results.nb_tokens, results. bry , results.sbry );
    sbry_output.textContent = generate_report(results.nb_tokens, results.sbry, results. bry);
 
    const ast = astnode2tree();
    try {
    	print_js( results.sbry.code, ast );
    } catch(e) { console.warn(e); }
    try {
        print_python( fullcode, ast );
    } catch(e) { console.warn(e); }
    try {
        print_ast( ast );
    } catch(e) { console.warn(e); }

    /*try {
        print_errors(results, brython_results, sbrython_results);
    } catch(e) { console.warn(e); }*/
}

function clearResults() {

    //python_input.value = "";

    sbry_output.textContent = "";
     bry_output.textContent = "";

    js_output    .textContent = "";
    python_output.textContent = "";
    ast_output   .textContent = "";

    sbry_output.classList.remove("success", "error");
}

// pycode or jscode
function print_code(code: string, _ast: NODE, type: "pycode"|"jscode") {

    const ast = _ast.children;

    const nodes = ast.map( (node: any) => {

        const line = document.createElement("div");

        const lineno = document.createElement('span');
        lineno.textContent = `${ node.pycode.start.line }:`;

        lineno.style.setProperty("vertical-align", "top");
        lineno.style.setProperty("font-weight", "bold");
    
        line.append(lineno);

        //TODO: slice_code_here
        const html = print_code_node(node, code, type);
        html.style.setProperty("display", "inline-block");
        line.append(html);

        //if(node.type !== "functions.def") //TODO...
        //    line.append(";");

        return line;
    });

    return nodes;
}

function print_code_node(node: any, code: string, type: "pycode"|"jscode") {
    
    const html_bloc = document.createElement("span") as HTMLSpanElement & {"$node": any};

    html_bloc.$node = node;
    node.$gui_elems ??= [];
    node.$gui_elems.push( html_bloc );

    let children = node.children.filter( (a: any) => a[type] !== undefined )
                                .sort( (a:any,b:any) => {
        
        if( a[type].start.line === b[type].start.line) {
            return a[type].start.col - b[type].start.col;
        }

        return a[type].start.line - b[type].start.line;
    });

    let subparts = new Array(children.length * 2 + 1);
    let cursor = node[type].start;
    let offset = 0;

    for(let i = 0; i < children.length; ++i) {
        const ctype = children[i][type];
        if( ctype === undefined )
            continue;
        subparts[offset++] = slice_code(code, cursor, ctype.start);
        subparts[offset++] = print_code_node(children[i], code, type);
        cursor = children[i][type].end;
    }
    subparts[offset++] = slice_code(code, cursor, node[type].end);

    html_bloc.append(...subparts);

    return html_bloc;
}

type pos = {line: number, col: number};

function slice_code(code: string, start_or_pos: pos|{start: pos, end:pos}, end: pos|null = null) {

    let start = start_or_pos;
    if(end === null) {
        ({start, end} = start_or_pos as {start: pos, end:pos});
    }

    let beg_idx = code_idx(code, start as pos);
    let end_idx = code_idx(code,  end!);

    return code.slice( beg_idx, end_idx );
}

function code_idx(code: string, {line, col}: pos) {

    if(line === 1)
        return col;

    let cur = 0;
    let cur_line = 1;
    while( cur < code.length) {
        if( code[cur] === '\n' ) {
            ++cur_line;
            if( line === cur_line ) {
                ++cur;
                break;
            }
        }
        ++cur;
    }

    return cur + col;
}


function print_node(node: any) {
    const html_bloc = document.createElement("div") as {"$node": any} & HTMLDivElement;
    html_bloc.$node = node;
    node.$gui_elems ??= [];
    node.$gui_elems.push( html_bloc );

    html_bloc.textContent = node.type;
    if( node.value != null)
        html_bloc.textContent += `:${node.value}`;
    if( node.result_type !== null) {

        html_bloc.textContent += ` (${node.result_type})`;
        /*
        let name = node.result_type?.__name__;
        if(name === "function") {
            name += ` () -> ${node.result_type.__call__.return_type()?.__name__}`;
        }

        let as_type = "";
        if( node.as !== undefined )
            as_type = ` as ${node.as}`;
        html_bloc.textContent += ` (${name}${as_type})`;*/
    }

	for(let child of node.children) {
        const html_child = print_node(child);
        html_child.style.setProperty("margin-left", "20px");
        html_bloc.append( html_child );
    }

	return html_bloc;
}


let prev_highlighted: null|HTMLElement = null;

function highlight(target: HTMLElement) {

    if( prev_highlighted === target)
        return;
    if( prev_highlighted !== null) {

        for(let gui_elem of (prev_highlighted as any).$gui_elems)
            gui_elem?.classList.remove("highlight");
        prev_highlighted = null;
    }

    const $node = (target as any).$node;
    if( $node === undefined)
        return;

    prev_highlighted = $node;
    for(let gui_elem of $node.$gui_elems)
        gui_elem?.classList.add("highlight");
}

/*
//TODO: print ?
brython_output.addEventListener("mouseover", ev => {
    highlight(ev.target);
})
sbrython_output.addEventListener("mouseover", ev => {
    highlight(ev.target);
})
*/
/*
let brython_result = output.map( e => {
        const div = document.createElement('div')
        div.textContent = `${e[0]}`;
        div.raw = e[0];
        div.stack = e[1]
        return div;
    });
*/

ast_output.addEventListener("mouseover", ev => {
    highlight(ev.target as any);
})
python_output.addEventListener("mouseover", ev => {
    highlight(ev.target as any);
})
js_output.addEventListener("mouseover", ev => {
    highlight(ev.target as any);
})

function print_ast(ast: NODE) {

    const nodes = ast.children.map( (node: any) => {

        const line = document.createElement("div");

        const lineno = document.createElement('span');
        lineno.textContent = `${node.pycode.start.line}:`;

        lineno.style.setProperty("vertical-align", "top");
        lineno.style.setProperty("font-weight", "bold");
    
        line.append(lineno);

        const html = print_node(node);
        html.style.setProperty("display", "inline-block");
        line.append(html);


        return line;
    });

	ast_output.replaceChildren( ...nodes )

}

function print_python(pycode: string, ast: NODE) {
	python_output.replaceChildren( ...print_code(pycode, ast, "pycode") )
}

function print_js(jscode: string, ast: NODE) {
	js_output.replaceChildren( ...print_code(jscode, ast, "jscode") )
}

// ==================================================================

function startTests(test_name: string, merge: boolean) {

    const results = resetResults();

    let tests: string[] = [test_name];
    if( test_name === "brython" )
        tests = brython_tests;

    let fullcode = "";

    // build merged code
    let id = -1;
    for(let i = 0; i < tests.length; ++i) {

        const subtests = test_suites[tests[i]];

        for(let j = 0; j < subtests.length; ++j) {

            ++id;

            if( subtests[j] === "")
                continue;
       
            if( id === 5) { // || id > 121) {
                //console.warn("ignored", id);
                continue;
            }
            
            const indented_code = subtests[j].split('\n').map(e => `\t${e}`).join('\n');
            fullcode += `def _${id}():\n${indented_code + "return None"}\n_${id}()\n`;
        }

    }

    /* 
        let error = false;
        let lastResults;
        window.clearResults();
    */

    console.warn("here", generate);
    generate(fullcode, results);

    execute(results);
    
    //TODO
    
    /* if(error) {
        window.updateFromResults(lastResults);

        const python_input = document.querySelector('#python');
        python_input.value = lastResults.sbrython.pycode;

        return;
    }*/

    python_input.value = "";
    
    sbry_output.classList.add('success');
    
     bry_output.textContent = generate_report(results.nb_tokens, results. bry , results.sbry );
    sbry_output.textContent = generate_report(results.nb_tokens, results.sbry, results. bry);
    
}


async function loadExcludeList() {
    const exclude_list = await (await fetch('/assets/exclude_list.txt')).text();
    return Object.fromEntries( exclude_list.split('#').slice(0).map(e => {

        let lines = e.split('\n');
        let name = lines[0].slice(1);

        let exclude = lines.slice(1).filter(e => e[0] !== '/' && e.length !== 0).map( x => {
            const e = x.split('-');
            if( e.length === 1) {
                if( e[0] === '*')
                    return e[0];
                return parseInt(e[0]);
            }
            return [parseInt(e[0]), parseInt(e[1])]
        });

        return [name, exclude];
    }) );
}

async function loadTests(...names: string[]) {

    const tests: Record<string, string[]> = {};

    for(let i = 0; i < names.length; ++i)
        tests[names[i]] = await loadSubTests(names[i]);

    return tests;
}

async function loadSubTests(test_name: string, exclude = exclude_list) {

    const code = await (await fetch(`/assets/unittests/${test_name}.py`)).text();

    return code.split('#').slice(1).map( t => {

        let   lines = t.split('\n');
        const name  = lines[0].trim();

        lines = filter(lines.slice(1), exclude[`${test_name}.${name}`]);

        let nbEmptyLines = 0;
        for(let i = 1; i < lines.length; ++i)
            if(lines[i].trim() === '')
                ++nbEmptyLines;
    
        let code_len = lines.length - 1 - nbEmptyLines;
    
        let nbExcluded = 0;
        for(let i = 1; i < lines.length; ++i)
            nbExcluded += +(lines[i][0] === '#');
    
        //total          += code_len;
        //excluded_count += nbExcluded;
    
        if(code_len === nbExcluded)
            return "";

        return lines.join('\n') + '\n';
    });
}

function filter(lines: string[], list: (number|"*"|number[])[]) {

    list ??= [];
    
    let result = lines.map( (l, idx) => {
        idx = idx + 1 + 2;
        let excluded = list.find( (v) => {
            if( v === '*')
                return true;
            if( idx === v)
                return true;
            if( Array.isArray(v) && v[0] - 2 <= idx && v[1] - 2 >= idx)
                return true;
            return false;
        }) !== undefined;
        
        if( excluded )
            return `# ${l}`;
        return l;
    });

    return result;
}

// 'classes' => after some basic types/operators...

// lists
// dicts
// sets
// exceptions
// strings

// string methods
// f-string
// generators
// imports

// print
// iterators
// files open_read
// bytes
// decorators
// descriptors
// exec_eval
// pattern matching
// string format

// reflected_methods
// special methods
// memoryview
// javascript objects


/* 
function print_errors({success, sbrython, lines_equals}, brython_result, sbrython_result) {

    const sb = sbrython.engine;

    for(let i = 0; i < lines_equals.length; ++i) {

        // stack trace.
        if( i < sbrython_result.length ) {
            const stackline = parse_stack(sbrython_result[i].stack, sb)[0];
            const node = stackline2astnode(stackline, sb);
            node.$gui_elems.push( sbrython_result[i], brython_result[i] );
            sbrython_result[i].$node = node;

            if( i < brython_result.length )
                brython_result[i].$node = node;
        }

        const line_class = lines_equals[i] ? "success" : "error";

        if( i < sbrython_result.length )
            sbrython_result[i].classList.add(line_class);

        if( i <  brython_result.length )
             brython_result[i].classList.add(line_class);
    }

    sbrython_output.classList.add(success ? "success" : "error");
}

*/

/*
sb._sb_.assert = (cond) => { if( ! cond ) {

console.warn("Assertion failed");

const stack = new Error().stack;

const stackline = parse_stack(stack, sb)[0];
const node = stackline2astnode(stackline, sb);

output.push([`[Assertion failed as line ${node.pycode.start.line}]`, stack]);
} };
*/