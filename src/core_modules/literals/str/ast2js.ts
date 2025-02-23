import { w, wt } from "ast2js";
import { ASTNode } from "structs/ASTNode";

export default function ast2js(this: ASTNode) {
    wt`'${this.value}'`;
}