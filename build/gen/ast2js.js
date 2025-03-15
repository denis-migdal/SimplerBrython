import {glob} from 'glob';
import save from "../save.js";

async function getModules(path) {

    let files = await glob("**/*.ts", {cwd: path});

    const modules = {};

    for(let i = 0; i < files.length; ++i) {
        const filepath = files[i];

        if(filepath === "list.ts"
            || filepath === "index.ts"
            || filepath === "bases.ts"
            || filepath === "utils.ts"
            || filepath === "ast2js.ts")
            continue;

        const end = filepath.indexOf(".", 0);
        const type_name = filepath.slice(0, end)
                                  .replaceAll('/', '_')
                                  .toUpperCase();

        modules[type_name] = `./${filepath.slice(0,end)}`;
    }

    return modules;
}

import * as TYPES from "../../src/sbry/ast2js/index.js";

function importModules(modules) {

    let result = "export default [\n";

    let keys = Object.keys(TYPES);
    const order = new Array(keys.length);
    for(let i = 0; i < keys.length; ++i)
        order[TYPES[keys[i]]] = keys[i].slice(4);

    for(let i = 0; i < order.length; ++i) {
        const file = modules[order[i]];
        if( file === undefined )
            throw new Error(`${order[i]} not found!`);
        result += `\trequire("${file}").default,\n`;
    }

    result += "]\n";

    result += "\n";
    result += "let _id2name: string[] = [];\n";
    result += "if( __DEBUG__ ) _id2name = [\n";
    for(let i = 0; i < order.length; ++i)
        result += `\t"${order[i]}",\n`;
    result += "]\n";
    result += "export const id2name = _id2name;\n"

    return result;
}

async function generateList(path) {

    const modules = await getModules(path);

    await Promise.all([
        save(`${path}/list.ts` , importModules(modules) ),
    ]);
}

export default async function genAST2JS() {

    await generateList("./src/sbry/ast2js/");
}