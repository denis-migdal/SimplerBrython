import { w_str } from "@SBrython/ast2js";
import { VALUES } from "@SBrython/dop";

export default function ast2js(node: number) {

    // force str write (else might assume this is an AST node ID)...
    w_str(`${VALUES[node]}`);
}