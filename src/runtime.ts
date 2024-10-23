import { AST } from "py2ast";

import {default as _r_} from "./core_runtime/lists";
import {_b_} from "./core_modules/lists";

export {_b_, _r_};

// classe ?


export class SBrython {

    #registered_AST: Record<string, AST> = {};
    #exported: Record<string, Record<string, any>> = {
        browser: globalThis
    };

    //TODO: runAST() ?
    //TODO: runPythonCode() ?

    //TODO: somehow, remove AST arg ???
    buildModule(jscode: string, ast: AST) {
        if(ast.filename in this.#registered_AST)
            throw new Error(`AST ${ast.filename} already registered!`);

        //TODO: filename 2 modulename.
        this.#registered_AST[ast.filename] = ast;

        //console.log(jscode);
        return new Function("__SBRYTHON__", `${jscode}\nreturn __exported__;`);
    }

    runJSCode(jscode: string, ast: AST) {
        this.#exported[ast.filename] = this.buildModule(jscode, ast)(this);
    }

    getModules() {
        return this.#exported;
    }
    getModule(name: string) {
        return this.#exported[name];
    }

    getASTFor(filename: string) {
        return this.#registered_AST[filename]; //TODO modulename?
    }

    get _r_() {
        return _r_;
    }
    get _b_() {
        return _b_;
    }
}

