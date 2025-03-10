import { w } from "@SBrython/ast2js";
import { firstChild, nbChild } from "@SBrython/dop";

export default function ast2js(node: number) {

    w("[");

    const nbChildren = nbChild(node);
    const coffset    = firstChild(node);
    
    if( nbChildren > 0 )
        w(coffset);

    for(let i = 1; i < nbChildren; ++i)
        w(", ", i + coffset);

    w("])");
}