import { w_sns } from "@SBrython/sbry/ast2js/utils";
import { firstChild, NODE_ID } from "@SBrython/sbry/dop";

export default function ast2js(node: NODE_ID) {
    w_sns("throw new _sb_.PythonError(", firstChild(node), ")");
}