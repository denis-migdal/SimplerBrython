import { w_str } from "@SBrython/sbry/ast2js/ast2js";
import { VALUES } from "@SBrython/sbry/dop";

export default function ast2js(node: number) {
    w_str(`'${VALUES[node]}'`);
}