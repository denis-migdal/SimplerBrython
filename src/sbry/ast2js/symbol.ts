import { w_str } from "@SBrython/sbry/ast2js/utils";
import { NODE_ID, VALUES } from "@SBrython/sbry/dop";

export default function ast2js(node: NODE_ID) {
    w_str( VALUES[node] );
}