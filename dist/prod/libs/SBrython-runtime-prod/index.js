var e={469:(e,t,r)=>{r.d(t,{CU:()=>o.A,a6:()=>s,jV:()=>n.A});var n=r(818),o=r(6603);class s{#e={};#t={browser:globalThis};buildModule(e,t){if(t.filename in this.#e)throw new Error(`AST ${t.filename} already registered!`);return this.#e[t.filename]=t,new Function("__SB__",`${e}\nreturn __exported__;`)}runJSCode(e,t){this.#t[t.filename]=this.buildModule(e,t)(this)}getModules(){return this.#t}getModule(e){return this.#t[e]}getASTFor(e){return this.#e[e]}get _r_(){return n.A}get _sb_(){return o.A}}},818:(e,t,r)=>{r.d(t,{A:()=>n});const n={object:r(2313).A,JSException:r(3103).A,Exception:r(3014).A}},1053:(e,t,r)=>{r.d(t,{A:()=>n});const n={assert:function(e){if(!e)throw new Error("Assertion failed")}}},2313:(e,t,r)=>{r.d(t,{A:()=>n});class n{}},3014:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(2313);class o extends n.A{}},3103:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(3014);class o extends n.A{}},4830:(e,t,r)=>{r.d(t,{q0:()=>n});const n=0},5219:(e,t,r)=>{r.d(t,{A:()=>o});class n extends Error{python_exception;constructor(e){super(),e._raw_err_=this,this.python_exception=e}}const o={PythonError:n}},5540:(e,t,r)=>{r.d(t,{A:()=>n});const n={float2str:e=>{if(e<=1e-5||e>=1e16){let t=e.toExponential();const r=t.length-2;return"-"!==t[r]&&"+"!==t[r]||(t=t.slice(0,r+1)+"0"+t.slice(r+1)),t}let t=e.toString();return t.includes(".")||(t+=".0"),t}}},6316:(e,t,r)=>{r.d(t,{NW:()=>a,tT:()=>o});const n=Float64Array,o=new Array,s=0,i=5,l=8*i*2100,c=new n(new ArrayBuffer(l,{maxByteLength:l}));function a(e){return c[e*i+s]}},6603:(e,t,r)=>{r.d(t,{A:()=>n});const n={...r(8047).Ay,...r(5219).A,...r(8942).A,...r(5540).A,...r(1053).A}},8047:(e,t,r)=>{r.d(t,{Ay:()=>i});var n=r(4830),o=r(6316);function s(e,t){console.warn("Exception",e);const r=function(e,t){const r="Error"===(e=e.split("\n"))[0];return function(e){return e.filter((e=>e.includes("brython_")))}(e).map((e=>{let[s,i,l]=e.split(":");")"===l[l.length-1]&&(l=l.slice(0,-1));let c,a=+i-2,d=+l;if(--d,r){let e=s.indexOf(" ",7);c=s.slice(7,e),"eval"===c&&(c="<module>");const r=(t.getASTFor("sbrython_editor.js").nodes,null);(0,o.NW)(r)===n.q0&&(d+=o.tT[r].length)}else{let e=s.indexOf("@");c=s.slice(0,e),"anonymous"===c&&(c="<module>")}return[c,a,d]}))}(e._raw_err_.stack,t);!function(e,t){e.map((e=>function(e,t){return t.getASTFor("sbrython_editor.js").nodes,e[1],e[2],null}(e,t)))}(r,t);let s=`Traceback (most recent call last):\n  ${r.map(((e,t)=>`File "[file]", line 0, in ${r[t][0]}`)).join("\n  ")}\nException: [msg]`;console.log(s)}const i={debug_print_exception:s,get_py_exception:function(e,t){const r=e instanceof _sb_.PythonError?e.python_exception:new _r_.JSException(e);return s(r,t),r}}},8942:(e,t,r)=>{r.d(t,{A:()=>n});const n={floordiv_float:(e,t)=>Math.floor(e/t),floordiv_int:(e,t)=>{let r=e/t;return r>0||e%t===0n?r:--r},mod_float:(e,t)=>{const r=(e%t+t)%t;return 0===r&&t<0?-0:r},mod_int:(e,t)=>(e%t+t)%t}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};r.d(n,{CU:()=>o.CU,a6:()=>o.a6,jV:()=>o.jV});var o=r(469),s=n.a6,i=n.jV,l=n.CU;export{s as SBrython,i as _r_,l as _sb_};
//# sourceMappingURL=index.js.map