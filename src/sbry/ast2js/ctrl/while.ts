import { w_sns } from "@SBrython/sbry/ast2js/utils";
import { firstChild } from "@SBrython/sbry/dop";

export default function ast2js(node: number) {

    const coffset = firstChild(node);

    w_sns("while(", coffset, "){", coffset+1, "}");
}