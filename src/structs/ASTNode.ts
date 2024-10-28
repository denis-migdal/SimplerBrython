import { STypeObj } from "./SType";

export type CodePos = {
    line: number,
    col : number
}

export type CodeRange = {
    start: CodePos,
    end  : CodePos
}

interface IASTNode  {

	type    : string;
	value   : any;
	children: ASTNode[];
	result_type: STypeObj|null;

    pycode: CodeRange;
    jscode?: CodeRange;

	toJS?: (this: ASTNode, cursor: CodePos) => string;
}

export class ASTNode implements IASTNode {

	type    : string;
	value   : any;
	children: ASTNode[] = [];
	result_type: STypeObj|null = null;

    pycode: CodeRange;
    jscode?: CodeRange;

	toJS?: (this: ASTNode, cursor: CodePos) => string;

	constructor(brython_node: any, type: string, result_type: STypeObj|null, _value: any = null, children: ASTNode[] = []) {

		this.type   = type;
		this.result_type = result_type;
		this.value  = _value;
		this.children = children!;
		this.pycode = {
			start: {
				line: brython_node.lineno,
				col: brython_node.col_offset
			},
			end: {
				line: brython_node.end_lineno,
				col: brython_node.end_col_offset
			}
		}
	}
}