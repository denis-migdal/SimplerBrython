//TODO
const fs = require('fs');
const glob = require("glob");

const encoder = new TextEncoder();

function getModules(path) {

	let files = glob.sync("**/{astconvert,ast2js}.ts", {cwd: path});

	const modules = {};

	for(let i = 0; i < files.length; ++i) {
		const filepath = files[i];
		const pos = filepath.lastIndexOf("/");

		const dir  = filepath.slice(0, pos).replace("/", ".");
		const file = filepath.slice(pos+1).slice(0,-3);

		modules[dir] ??= {};
		modules[dir][file] = `./${filepath}`;
	}

	return modules;
}

function importModules(modules) {

	let result = "";

	let module_id = 0;
	for(let module_name in modules) {

		const module = modules[module_name];

		//TODO if not found...
		result += `import AST_CONVERT_${module_id} from "${module.astconvert}";\n`;
		result += `import      AST2JS_${module_id} from "${module.ast2js}";\n`;
		++module_id;
	}

	result += "\n\n";

	result += "const MODULES = {\n";
	module_id = 0;
	for(let module_name in modules) {

		result +=
`	"${module_name}": {
		AST_CONVERT: AST_CONVERT_${module_id},
		     AST2JS:      AST2JS_${module_id}
	},\n`;
		++module_id;
	}
	result += "}\n\n";

	result += "export default MODULES;\n";

	return result;
}

function save(dirpath, content) {
	const path = `${dirpath}/lists.ts`;

	const file_exists = fs.existsSync(path);
	const file = fs.openSync(path, file_exists ? "r+" : "w");

	const file_content = file_exists ? fs.readFileSync(file, "utf8") : null;
	if( file_content !== content) {
		if(file_exists)
			fs.ftruncateSync(file);
		fs.writeSync(file, encoder.encode(content), {position: 0}); // ftruncate doesn't reset position...
	}
	fs.closeSync(file);
}

function generateList(path) {

	save(path, importModules( getModules(path) ));
}

module.exports = function() {

	console.time("Building core modules list");

	generateList("./src/core_modules/");

	console.timeEnd("Building core modules list");
}