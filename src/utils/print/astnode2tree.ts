import { firstChild, nbChild, resultType, type, VALUES } from "@SBrython/dop";
import { buildPyCode } from "@SBrython/py2ast";

type CodePos = {
    line: number,
    col : number
}

type CodeRange = {
    start: CodePos,
    end  : CodePos
}

export type NODE = {
    type    : string,
    result_type :string,
    value       : any,
    jscode  : CodeRange,
    pycode  : CodeRange,
    children: NODE[];
}

export default function astnode2tree(id = 0): NODE {

    const coffset    = firstChild(id);

    return {
        type: ''+type(id), // TODO convert
        result_type: ''+resultType(id), // TODO convert
        value      : VALUES[id],
        jscode  : buildPyCode(id),
        pycode  : buildPyCode(id),
        children: Array.from({length: nbChild(id)}, (_,i) => astnode2tree(coffset+i) )
    };
}