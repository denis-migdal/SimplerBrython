import { w_sns } from "@SBrython/sbry/ast2js/utils";
import { firstChild, NODE_ID } from "@SBrython/sbry/dop";

export default function ast2js(node: NODE_ID) {

    return w_sns("_sb_.assert(", firstChild(node), ")");
}