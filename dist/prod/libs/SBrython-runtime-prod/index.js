var t={1053:(t,n,e)=>{e.d(n,{A:()=>r});const r={assert:function(t){if(!t)throw new Error("Assertion failed")}}},2313:(t,n,e)=>{e.d(n,{A:()=>r});class r{}},3014:(t,n,e)=>{e.d(n,{A:()=>o});var r=e(2313);class o extends r.A{}},3103:(t,n,e)=>{e.d(n,{A:()=>o});var r=e(3014);class o extends r.A{}},4830:(t,n,e)=>{e.d(n,{q0:()=>r});const r=0},5219:(t,n,e)=>{e.d(n,{A:()=>o});class r extends Error{python_exception;constructor(t){super(),t._raw_err_=this,this.python_exception=t}}const o={PythonError:r}},5540:(t,n,e)=>{e.d(n,{A:()=>r});const r={float2str:t=>{if(t<=1e-5||t>=1e16){let n=t.toExponential();const e=n.length-2;return"-"!==n[e]&&"+"!==n[e]||(n=n.slice(0,e+1)+"0"+n.slice(e+1)),n}let n=t.toString();return n.includes(".")||(n+=".0"),n}}},6316:(t,n,e)=>{e.d(n,{NW:()=>a,tT:()=>o});const r=Float64Array,o=new Array,s=0,i=5,c=8*i*2100,l=new r(new ArrayBuffer(c,{maxByteLength:c}));function a(t){return l[t*i+s]}},8047:(t,n,e)=>{e.d(n,{Ay:()=>i});var r=e(4830),o=e(6316);function s(t,n){console.warn("Exception",t);const e=function(t,n){const e="Error"===(t=t.split("\n"))[0];return function(t){return t.filter((t=>t.includes("brython_")))}(t).map((t=>{let[s,i,c]=t.split(":");")"===c[c.length-1]&&(c=c.slice(0,-1));let l,a=+i-2,u=+c;if(--u,e){let t=s.indexOf(" ",7);l=s.slice(7,t),"eval"===l&&(l="<module>");const e=(n.getASTFor("sbrython_editor.js").nodes,null);(0,o.NW)(e)===r.q0&&(u+=o.tT[e].length)}else{let t=s.indexOf("@");l=s.slice(0,t),"anonymous"===l&&(l="<module>")}return[l,a,u]}))}(t._raw_err_.stack,n);!function(t,n){t.map((t=>function(t,n){return n.getASTFor("sbrython_editor.js").nodes,t[1],t[2],null}(t,n)))}(e,n);let s=`Traceback (most recent call last):\n  ${e.map(((t,n)=>`File "[file]", line 0, in ${e[n][0]}`)).join("\n  ")}\nException: [msg]`;console.log(s)}const i={debug_print_exception:s,get_py_exception:function(t,n){const e=t instanceof _sb_.PythonError?t.python_exception:new _r_.JSException(t);return s(e,n),e}}},8942:(t,n,e)=>{e.d(n,{A:()=>r});const r={floordiv_float:(t,n)=>Math.floor(t/n),floordiv_int:(t,n)=>{let e=t/n;return e>0||t%n===0n?e:--e},mod_float:(t,n)=>{const e=(t%n+n)%n;return 0===e&&n<0?-0:e},mod_int:(t,n)=>(t%n+n)%n}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var s=n[r]={exports:{}};return t[r](s,s.exports,e),s.exports}e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n);var r={};e(2313).A,e(3103).A,e(3014).A,e(8047).Ay,e(5219).A,e(8942).A,e(5540).A,e(1053).A;var o=r.a6,s=r.jV,i=r.CU;export{o as SBrython,s as _r_,i as _sb_};
//# sourceMappingURL=index.js.map