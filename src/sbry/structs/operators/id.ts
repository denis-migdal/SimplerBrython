import { w_node } from "@SBrython/sbry/ast2js/utils";
import { parentOPPrio, setParentOPPrio } from "@SBrython/sbry/dop";

export function write_id_jsop(node: number, a: number) {

    setParentOPPrio( a, parentOPPrio(node) );

    w_node(a);
}