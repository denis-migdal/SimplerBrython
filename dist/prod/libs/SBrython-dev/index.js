var t={615:(t,n,e)=>{e.d(n,{A:()=>o});var r=e(7384);class o extends r.A{}},687:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){(0,o.dv)(t,r.WQ);const s=(0,o.oS)(t,1);(0,_.hW)(s,n.test,e)}},723:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(9567),o=e(8401),_=e(1201),s=e(1077);function l(t,n,e){let l=s.Fw;if(void 0!==n.value){const r=(0,o.oS)(t,1);(0,_.hW)(r,n.value,e),l=(0,o.YZ)(r)}(0,o.dv)(t,r.zg),(0,o.yb)(t,l);const i=s.Nl[(0,o.YZ)(e.parent_node_context)].__call__;void 0===i.return_type&&(i.return_type=()=>l)}},755:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){r.wt`throw new _b_.PythonError(${(0,o.tq)(t)})`}},782:(t,n,e)=>{e.d(n,{Jq:()=>o.Jq,a6:()=>_,jV:()=>r.A});var r=e(6790),o=e(9567);class _{#t={};#n={browser:globalThis};buildModule(t,n){if(n.filename in this.#t)throw new Error(`AST ${n.filename} already registered!`);return this.#t[n.filename]=n,new Function("__SBRYTHON__",`${t}\nreturn __exported__;`)}runJSCode(t,n){this.#n[n.filename]=this.buildModule(t,n)(this)}getModules(){return this.#n}getModule(t){return this.#n[t]}getASTFor(t){return this.#t[t]}get _r_(){return r.A}get _b_(){return o.Jq}}},961:(t,n,e)=>{e.d(n,{A:()=>i});var r=e(9567),o=e(8401),_=e(1201),s=e(2365),l=e(1077);function i(t,n,e){const i=n.ops,c=i.length,u=new Array(c);for(let t=0;t<c;++t){const n=s.uS[i[t].constructor.$name];if(void 0===n)throw new Error(`${i[t].constructor.$name} not implemented!`);u[t]=n}o.tT[t]=u,(0,o.dv)(t,r.sm),(0,o.yb)(t,l.j);const a=n.comparators.length+1,d=(0,o.oS)(t,a);(0,_.hW)(d,n.left,e);for(let t=1;t<a;++t)(0,_.hW)(t+d,n.comparators[t-1],e)}},1077:(t,n,e)=>{e.d(n,{$R:()=>s,Fw:()=>l,G3:()=>d,Js:()=>c,N9:()=>f,Nl:()=>r,db:()=>a,j:()=>u,mc:()=>i,vz:()=>_});const r=new Array,o={};function _(t){let n=o[t];return void 0===n&&(n=o[t]=r.length,r[n]={__name__:t}),n}function s(t,n){const e=_(t);return Object.assign(r[e],n),e}const l=_("NoneType"),i=_("int"),c=_("jsint"),u=_("bool"),a=_("float"),d=_("str"),f=_("NotImplementedType")},1201:(t,n,e)=>{e.d(n,{Vx:()=>u,ZT:()=>d,b2:()=>c,hW:()=>v,nJ:()=>i,ob:()=>A,p1:()=>f,st:()=>a});var r=e(1077),o=e(8401),_=e(6139),s=e(7038),l=e(2830);function i(t,n){const e=4*t;o.Qu[e+o.KY]=n.lineno,o.Qu[e+o.sP]=n.col_offset,o.Qu[e+o.dG]=n.end_lineno,o.Qu[e+o.hp]=n.end_col_offset}function c(t,n){const e=4*t,r=n[0],_=n[n.length-1];o.Qu[e+o.KY]=r.lineno,o.Qu[e+o.sP]=r.col_offset,o.Qu[e+o.dG]=_.end_lineno,o.Qu[e+o.hp]=_.end_col_offset}function u(t,n,e){const r=4*t,_=4*n,s=4*e+2;o.Qu[r+o.KY]=o.Qu[_+o.hN],o.Qu[r+o.sP]=o.Qu[_+o.DJ],o.Qu[r+o.dG]=o.Qu[s+o.hN],o.Qu[r+o.hp]=o.Qu[s+o.DJ]}function a(t,n){const e=new $B.Parser(t,n,"file");return{nodes:d($B._PyPegen.run_parser(e)),filename:n}}function d(t){(0,o.Ay)();const n=(0,o.fo)();return(0,l.A)(n,t.body,new A),c(n,t.body),o.EV}function f(t,n){const e=o.ZI*t,r=o.ZI*n;let _;for(let t=0;t<o.ZI;++t)_=o.EV[e+t],o.EV[e+t]=o.EV[r+t],o.EV[r+t]=_;{const e=4*t,r=4*n;for(let t=0;t<4;++t)_=o.Qu[e+t],o.Qu[e+t]=o.Qu[r+t],o.Qu[r+t]=_}_=o.tT[t],o.tT[t]=o.tT[n],o.tT[n]=_}function v(t,n,e){const r=n.constructor.$name,o=s.A[r];if(void 0===o)throw console.warn("Module not registered:",r),console.warn(`at ${n.lineno}:${n.col_offset}`),console.log(n),new Error(`Unsupported node ${r} at ${n.lineno}:${n.col_offset}`);o(t,n,e),i(t,n)}class A{constructor(t="?",n=w){this.type=t,this.local_symbols={...n.local_symbols}}local_symbols;parent_node_context;type}const h={},b=(0,r.$R)("len",(y=_.y5,{__class__:h,__name__:"len",__call__:{return_type:y,substitute_call:t=>{const n=(0,o.tq)(t)+1;return r.Nl[(0,o.YZ)(n)].__len__.substitute_call(t)}}})),w={type:"?",local_symbols:{int:(0,r.vz)("type[int]"),str:(0,r.vz)("type[str]"),float:(0,r.vz)("type[float]"),len:b}};var y},1283:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){(0,r.w)(o.tT[t])}},1344:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){(0,r.w)((0,o.tq)(t))}},1488:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){const n=(0,o.tq)(t);return 0===n?(0,r.w)("return null"):r.wt`return ${n}`}},1531:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){(0,r.w)("${",(0,o.tq)(t),"}")}},1626:(t,n,e)=>{e.d(n,{A:()=>i});var r=e(1201),o=e(2365),_=e(1077),s=e(9567),l=e(8401);function i(t,n,e){(0,l.dv)(t,s.Ec);const i=(0,l.oS)(t,1);(0,r.hW)(i,n.operand,e);let c=o.uS[n.op.constructor.$name];if(void 0===c)throw console.warn("OP",n.op.constructor.$name),new Error("not implemented");if(l.tT[t]=c,"not"===c)return void(0,l.yb)(t,_.j);let u=_.N9,a=_.Nl[(0,l.YZ)(i)]?.[c];if(void 0!==a&&(u=a.return_type()),u===_.N9)throw new Error(`${c} ${(0,l.YZ)(i)} NOT IMPLEMENTED!`);(0,l.yb)(t,u)}},1688:(t,n,e)=>{e.d(n,{A:()=>o});var r=e(4933);function o(t){(0,r.w)("continue")}},1877:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){(0,r.w)(`${o.tT[t]}`)}},2018:(t,n,e)=>{e.d(n,{A:()=>o});var r=e(615);class o extends r.A{}},2208:(t,n,e)=>{e.d(n,{A:()=>r});const r={floordiv_float:(t,n)=>Math.floor(t/n),floordiv_int:(t,n)=>{let e=t/n;return e>0||t%n===0n?e:--e},mod_float:(t,n)=>{const e=(t%n+n)%n;return 0===e&&n<0?-0:e},mod_int:(t,n)=>(t%n+n)%n}},2263:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){(0,r.w)("[");const n=(0,o.zl)(t),e=(0,o.tq)(t);n>0&&(0,r.w)(e);for(let t=1;t<n;++t)(0,r.w)(", ",t+e);(0,r.w)("])")}},2290:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){(0,o.dv)(t,r.ew);const s=(0,o.oS)(t,1);(0,_.hW)(s,n.value,e),o.tT[t]=n.attr}},2303:(t,n,e)=>{e.d(n,{A:()=>i});var r=e(4933),o=e(8401),_=e(2365),s=e(1077),l=e(8129);function i(t){const n=(0,o.tq)(t),e=(0,o.zl)(t),_=o.tT[t].__call__;let s=_.idx_end_pos;s===Number.POSITIVE_INFINITY&&(s=_.idx_vararg+1),void 0!==_.kwargs&&s===e-1&&++s;for(let t=0;t<e;++t)0!==t&&(0,r.w)(", "),s===t&&(0,r.w)("{"),c(t+n,t===_.idx_vararg&&t===e-1);s<e&&(0,r.w)("} = {}")}function c(t,n){const e=4*t;(0,r.Ay)(e+o.vb);const i=o.tT[t],c=(0,o.NW)(t);if(c===l.tk)n?r.wt`...${i}`:(0,r.wr)((0,_.rx)(t,i,"=","[]"));else if(c===l.fG)(0,r.wr)((0,_.rx)(t,i,"=","{}"));else if(1===(0,o.zl)(t)){let n=(0,o.tq)(t);(0,o.YZ)(n)===s.Js&&(n=(0,_.vi)(n)),(0,r.wr)((0,_.rx)(t,i,"=",n))}else(0,r.w)(i);(0,r.Ay)(e+o.un)}},2365:(t,n,e)=>{e.d(n,{E2:()=>$,HT:()=>g,N0:()=>f,NA:()=>T,Np:()=>b,Pv:()=>u,Q9:()=>m,hm:()=>w,kV:()=>p,rx:()=>y,uS:()=>i,ue:()=>h,vi:()=>v});var r=e(4933),o=e(1077),_=e(9567),s=e(8401),l=e(5246);const i={USub:"__neg__",Not:"not",Pow:"__pow__",Mult:"__mul__",Div:"__truediv__",FloorDiv:"__floordiv__",Mod:"__mod__",Add:"__add__",Sub:"__sub__",Is:"is",IsNot:"is not",Eq:"__eq__",NotEq:"__ne__",Gt:"__gt__",GtE:"__ge__",Lt:"__lt__",LtE:"__le__",Invert:"__not__",BitOr:"__or__",BitXor:"__xor__",BitAnd:"__and__",RShift:"__rshift__",LShift:"__lshift__"},c={__pow__:"__rpow__",__mul__:"__rmul__",__truediv__:"__rtruediv__",__floordiv__:"__rfloordiv__",__mod__:"__rmod__",__add__:"__radd__",__sub__:"__rsub__",__eq__:"__eq__",__ne__:"__ne__",__lt__:"__gt__",__gt__:"__lt__",__le__:"__ge__",__ge__:"__le__",__not__:"__rnot__",__or__:"__ror__",__and__:"__rand__",__xor__:"__rxor__",__lshift__:"__rlshift__",__rshift__:"__rrshift__"},u={__pow__:"__ipow__",__mul__:"__imul__",__truediv__:"__itruediv__",__floordiv__:"__ifloordiv__",__mod__:"__imod__",__add__:"__iadd__",__sub__:"__isub__",__or__:"__ior__",__and__:"__iand__",__xor__:"__ixor__",__lshift__:"__ilshift__",__rshift__:"__irshift__"},a={"**":"pow","*":"mul","/":"truediv","//":"floordiv","%":"mod","+":"add","-":"sub","u.-":"neg","==":"eq","!=":"ne","<":"lt","<=":"le",">=":"ge",">":"gt","~":"not","|":"or","&":"and","^":"xor","<<":"lshift",">>":"rshift"},d=[[],["="],["||","??"],["&&"],["|"],["^"],["&"],["==","!=","===","!=="],["<","<=",">=",">"],["<<",">>",">>>"],["+","-"],["*","/","%"],["**"],["!","++","--","~","u.-"]];function f(t,n=o.db){if((0,s.YZ)(t)!==o.mc)return t;if((0,s.NW)(t)===_.Z3)return n===o.db&&(0,s.yb)(t,o.Js),t;const e=s.tT[t],l=(0,s.tq)(t);if("__mul__"===e||"__rmul__"===e){const e=(0,s.YZ)(l),r=(0,s.YZ)(l+1);if(!(e!==o.mc&&e!==o.Js||r!==o.mc&&r!==o.Js))return(0,s.yb)(t,n),t}return"__neg__"===e&&(0,s.YZ)(l)===o.mc?((0,s.yb)(t,n),t):n===o.db?r.r`Number(${t})`:t}function v(t){return(0,s.YZ)(t)===o.mc?t:(0,s.NW)(t)===_.Z3||"__neg__"===s.tT[t]&&(0,s.YZ)((0,s.tq)(t))===o.Js?((0,s.yb)(t,o.mc),t):r.r`BigInt(${t})`}let A={};for(let t=0;t<d.length;++t){const n=t;for(const e of d[t])A[e]=n}function h(t){return c[t]}function b(t,n){const e=(0,s.tq)(t),o=(0,s.zl)(t),_=A[n],l=A[n];(0,s.O9)(e,_);for(let t=1;t<o;++t)(0,s.O9)(e+t,_+1);let i=r.r`${e}`;for(let t=1;t<o;++t)i=r.r`${i} && ${e+t}`;return l<_&&(i=r.r`(${i})`),i}function w(t,n){return(0,s.O9)(n,(0,s.uk)(t)),r.r`${n}`}function y(t,n,e,o){const _=A[e],l=(0,s.uk)(t);"number"==typeof n&&(0,s.O9)(n,_),"number"==typeof o&&(0,s.O9)(o,_);let i=r.r`${n}${e}${o}`;return l>_&&(i=r.r`(${i})`),i}function g(t,n,e){let o=n;"-"===o&&(o="u.-");const _=A[o],l=(0,s.uk)(t);"number"==typeof e&&(0,s.O9)(e,_);let i=r.r`${n}${e}`;return l>_&&(i=r.r`(${i})`),i}function p(t,n,{convert_self:e=l.Pd,substitute_call:r}={}){let o={};for(let _ of t){const t=a[_];"u.-"===_&&(_="-"),r??=(t,n)=>g(t,_,e(n)),o[`__${t}__`]={return_type:n,substitute_call:r}}return o}function m(t,n,{convert_other:e=l.Pd,convert_self:r=l.Pd,substitute_call:o}={}){let _={};for(let i of t){const t=a[i];"//"===i&&(i="/");let c=(t,n,o)=>y(t,r(n),i,e(o)),u=(t,n,o)=>y(t,e(o),i,r(n));void 0!==o&&(c=(t,n,_)=>o(t,r(n),e(_)),u=(t,n,_)=>o(t,e(_),r(n))),_[`__${t}__`]={return_type:n,substitute_call:c},_[`__r${t}__`]={return_type:n,substitute_call:u},r===l.Pd&&void 0===o&&(_[`__i${t}__`]={return_type:n,substitute_call:(t,n,r)=>{const o=s.tT[r];return"+"===i&&1===o?g(t,"++",n):"-"===i&&1===o?g(t,"--",n):y(t,n,i+"=",e(r))}})}return _}const $=["==","!=",">","<",">=","<="],N={"==":"==","!=":"!=",">":"<","<":">",">=":"<=","<=":">="};function T(t,n,{convert_other:e=l.Pd,convert_self:r=l.Pd,substitute_call:o}={}){let _={};for(const l of t){const t=a[l];let i=(t,n,o,_)=>{let i=l,c=r(n),u=e(o);return _&&([c,u]=[u,c],i=N[i]),"="!==i[0]&&"!"!==i[0]||(0,s.YZ)(n)===(0,s.YZ)(o)&&(i+="="),y(t,c,i,u)};void 0!==o&&(i=(t,n,_,s)=>o(t,r(n),e(_))),_[`__${t}__`]={return_type:n,substitute_call:i}}return _}},2380:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){const n=o.tT[t],e=(0,o.tq)(t),_=e+1;r.wt`for(var ${n} of ${e}){${_}${r.NL}}`}},2663:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){(0,o.dv)(t,r.eu);const s=n.elts.length,l=(0,o.oS)(t,s);for(let t=0;t<s;++t)(0,_.hW)(t+l,n.elts[t],e)}},2665:(t,n,e)=>{e.d(n,{A:()=>i});var r=e(2830),o=e(9567),_=e(8401),s=e(1201),l=e(1077);function i(t,n,e){if(e.local_symbols[n.name]=(0,l.vz)(n.name),e=new s.ob("class",e),n.bases.length>1)throw new Error("Not implemented");(0,_.dv)(t,o.Xc);const i=1+n.bases.length,c=(0,_.oS)(t,i);(0,r.A)(c,n.body,e),(0,s.b2)(c,n.body);for(let t=1;t<i;++t)(0,s.hW)(t+c,n.bases[t-1],e);_.tT[t]=n.name}},2788:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(2830),o=e(9567),_=e(8401),s=e(1201);function l(t,n,e){let l=2,i=n;for(;"orelse"in i&&1===i.orelse.length;){if(!("test"in i.orelse[0])){++l;break}i=i.orelse[0],l+=2}(0,_.dv)(t,o.gz);let c=(0,_.oS)(t,l);for((0,s.hW)(c++,n.test,e),(0,r.A)(c,n.body,e),(0,s.b2)(c,n.body),++c,i=n;"orelse"in i&&1===i.orelse.length;){if(!("test"in i.orelse[0])){(0,s.hW)(c,i.orelse,e);break}i=i.orelse[0],(0,s.hW)(c++,i.test,e),(0,r.A)(c,i.body,e),(0,s.b2)(c,i.body),++c,l+=2}}},2791:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(4933),o=e(8401),_=e(2365),s=e(1077);function l(t){const n=(0,o.tq)(t),e=o.tT[t];if("not"===e)return(0,r.wr)((0,_.HT)(t,"!",(0,_.N0)(n,s.Js)));const l=s.Nl[(0,o.YZ)(n)][e];(0,r.wr)(l.substitute_call(t,n))}},2830:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){(0,o.dv)(t,r.$p);const s=n.length,l=(0,o.oS)(t,s);for(let t=0;t<s;++t){let r=n[t];"Expr"===r.constructor.$name&&(r=r.value),(0,_.hW)(t+l,r,e)}}},2985:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(9567),o=e(8401),_=e(1201),s=e(1077);function l(t,n,e){let l=n.targets;void 0===l&&(l=[n.target]);let i=r.G9;"class"===e.type||"Name"!==l[0].constructor.$name||l[0].id in e.local_symbols||(i=r.fP),(0,o.dv)(t,i);const c=l.length+1,u=(0,o.oS)(t,c);(0,_.hW)(u,n.value,e);let a=(0,o.YZ)(u),d=null;const f=n.annotation?.id;void 0!==f&&(d=(0,s.vz)(f)),null!==d&&d!==a&&console.warn("Wrong result_type"),null===d&&(d=a,a===s.Js&&(d=s.mc)),(0,o.yb)(t,d);for(let t=1;t<c;++t)(0,_.hW)(u+t,l[t-1],e),e.local_symbols[l[t-1].id]=d}},3215:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(4933),o=e(8401),_=e(2365),s=e(1077);function l(t){const n=(0,o.zl)(t),e=(0,o.tq)(t);for(let t=1;t<n;++t)r.wt`${t+e} = `;let l=e;(0,o.YZ)(e)===s.Js&&(0,o.YZ)(t)===s.mc&&(l=(0,_.vi)(e)),(0,r.w)(l)}},3217:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){(0,o.dv)(t,r.eP);const s=n.elts.length,l=(0,o.oS)(t,s);for(let t=0;t<s;++t)(0,_.hW)(t+l,n.elts[t],e)}},3278:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(4933),o=e(8401),_=e(2365);function s(t){(0,r.wr)((0,_.Np)(t,o.tT[t]))}},3334:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(2830),o=e(9567),_=e(8401),s=e(1201);function l(t,n,e){(0,_.dv)(t,o.tO);const l=(0,_.oS)(t,2);(0,s.hW)(l,n.test,e),(0,r.A)(l+1,n.body,e),(0,s.b2)(l+1,n.body)}},3381:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){return r.wt`_b_.assert(${(0,o.tq)(t)})`}},3621:(t,n,e)=>{var r=e(2365),o=e(6139);(0,e(1077).$R)("bool",{...(0,r.NA)(r.E2,o.aI)})},3642:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){(0,r.w)(o.tT[t])}},3699:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){const n=o.tT[t],e=(0,o.tq)(t);r.wt`function ${n}(${e}){${e+1}${r.NL}}`}},3724:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(9567),o=e(8401);function _(t,n,e){(0,o.dv)(t,r.tB)}},3740:(t,n,e)=>{e.d(n,{A:()=>i,J:()=>l});var r=e(4933),o=e(9567),_=e(8401);function s(t){const n=Object.keys(t);if(0===n.length)return[[]];const e=new Array(n.length+1);let r;for(e[0]=`{${n[0]}: `,r=1;r<n.length;++r)e[r]=`, ${n[r]}: `;return e[r]="}",[e,...Object.values(t)]}function l(t){const n=_.tT[t].__call__,e=(0,_.tq)(t),l=(0,_.zl)(t);let i=l;for(let t=1;t<l;++t)if((0,_.NW)(t+e)===o.vC){i=t;break}let c=n.idx_end_pos;c===Number.POSITIVE_INFINITY&&(c=Math.max(n.idx_vararg,i-1));let u=c+1;n.has_kw&&n.idx_end_pos===Number.POSITIVE_INFINITY&&(u=n.idx_vararg+2);let a=new Array(u);const d={},f={};let v=!1;if(n.has_kw&&n.idx_end_pos===Number.POSITIVE_INFINITY){const t=Math.min(i,n.idx_vararg);for(let n=1;n<t;++n)a[n-1]=n+e;const r=n.idx_vararg+1,o=i-r;if(0!==o){let t=new Array(o+1),n=new Array(o+1);t[0]="[",n[0]=t,n[1]=e+r;for(let _=1;_<o;++_)t[_]=", ",n[_+1]=e+r+_;t[o]="]"}}else{const t=Math.min(i,c+1);for(let n=1;n<t;++n)a[n-1]=n+e;const r=n.args_names;for(let n=t;n<i;++n)d[r[n-1]]=n+e;v=t!==i}let A=!1;const h=n.args_pos;for(let t=i;t<l;++t){const n=t+e,r=_.tT[n],o=h[r];o>=0?a[o]=n:(v=!0,-1===o?d[r]=n:(f[r]=n,A=!0))}let b=d;if(A&&!n.has_kw?b=f:A&&(b[n.kwargs]=s(f)),v)a[a.length-1]=s(b);else for(;a.length>0&&void 0===a[a.length-1];)--a.length;return r.r`${e}(${function(t,n=", "){if(0===t.length)return[[""]];const e=new Array(t.length+1);let r;for(e[0]="",r=1;r<t.length;++r)e[r]=n;return e[r]="",[e,...t]}(a)})`}function i(t){(0,r.wr)(_.tT[t].__call__.substitute_call(t))}},3822:(t,n,e)=>{e.d(n,{A:()=>r});const r={float2str:t=>{if(t<=1e-5||t>=1e16){let n=t.toExponential();const e=n.length-2;return"-"!==n[e]&&"+"!==n[e]||(n=n.slice(0,e+1)+"0"+n.slice(e+1)),n}let n=t.toString();return n.includes(".")||(n+=".0"),n}}},3836:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){const n=(0,o.tq)(t);r.wt`${n}[${n+1}]`}},3877:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){(0,r.w)("Object.freeze([");const n=(0,o.zl)(t),e=(0,o.tq)(t);n>0&&(0,r.w)(e);for(let t=1;t<n;++t)(0,r.w)(", ",t+e);(0,r.w)("])")}},4038:(t,n,e)=>{e.d(n,{A:()=>o});var r=e(4933);function o(t){(0,r.w)("break")}},4064:(t,n,e)=>{e.d(n,{Ay:()=>i,XK:()=>s,p$:()=>_});var r=e(9567),o=e(8401);function _(t,n){return n.getASTFor("sbrython_editor.js").nodes,t[1],t[2],null}function s(t,n){const e="Error"===(t=t.split("\n"))[0];return function(t){return t.filter((t=>t.includes("brython_")))}(t).map((t=>{let[_,s,l]=t.split(":");")"===l[l.length-1]&&(l=l.slice(0,-1));let i,c=+s-2,u=+l;if(--u,e){let t=_.indexOf(" ",7);i=_.slice(7,t),"eval"===i&&(i="<module>");const e=(n.getASTFor("sbrython_editor.js").nodes,null);(0,o.NW)(e)===r.PF&&(u+=o.tT[e].length)}else{let t=_.indexOf("@");i=_.slice(0,t),"anonymous"===i&&(i="<module>")}return[i,c,u]}))}function l(t,n){console.warn("Exception",t);const e=s(t._raw_err_.stack,n);!function(t,n){t.map((t=>_(t,n)))}(e,n);let r=`Traceback (most recent call last):\n  ${e.map(((t,n)=>`File "[file]", line 0, in ${e[n][0]}`)).join("\n  ")}\nException: [msg]`;console.log(r)}const i={debug_print_exception:l,get_py_exception:function(t,n){const e=t instanceof _b_.PythonError?t.python_exception:new _r_.JSException(t);return l(e,n),e}}},4065:(t,n,e)=>{e.d(n,{A:()=>o});var r=e(4933);function o(t){(0,r.w)("/* not implemented */")}},4200:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(2830),o=e(9567),_=e(8401),s=e(1201);function l(t,n,e){let l=1;void 0!==n.type&&(l=2),(0,_.dv)(t,o.Ch);const i=(0,_.oS)(t,l);(0,r.A)(i,n.body,e),(0,s.b2)(i,n.body),2===l&&(0,s.hW)(i+1,n.type,e),_.tT[t]=n.name}},4378:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(9567),o=e(8401);function _(t,n,e){(0,o.dv)(t,r.Lh)}},4391:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){(0,o.dv)(t,r.BI);const s=(0,o.oS)(t,2);(0,_.hW)(s,n.value,e),(0,_.hW)(s+1,n.slice,e)}},4668:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(9567),o=e(8401),_=e(1201),s=e(1077);function l(t,n,e){(0,o.dv)(t,r.Iz),(0,o.yb)(t,s.G3);const l=n.values.length,i=(0,o.oS)(t,l);for(let t=0;t<l;++t)console.warn(n.values[t].constructor.$name),(0,_.hW)(t+i,n.values[t],e)}},4932:(t,n,e)=>{e.d(n,{A:()=>i});var r=e(1201),o=e(2365),_=e(1077),s=e(9567),l=e(8401);function i(t,n,e){let i=o.uS[n.op.constructor.$name];if(void 0===i)throw console.warn("OP",n.op.constructor.$name),new Error("not implemented");(0,l.dv)(t,s.s2);const c=(0,l.oS)(t,2);(0,r.hW)(c,n.left,e),(0,r.hW)(c+1,n.right,e);const u=(0,l.YZ)(c),a=(0,l.YZ)(c+1);let d=_.N9,f=_.Nl[u]?.[i];if(void 0!==f&&(d=f.return_type(a)),d===_.N9){if(i=(0,o.ue)(i),f=_.Nl[a]?.[i],void 0!==f&&(d=f.return_type(u)),d===_.N9)throw new Error(`${a} ${i} ${u} NOT IMPLEMENTED!`);(0,r.p1)(c,c+1)}l.tT[t]=i,(0,l.yb)(t,d)}},4933:(t,n,e)=>{e.d(n,{Ay:()=>l,BB:()=>d,BE:()=>f,NL:()=>a,od:()=>w,r:()=>v,w:()=>b,wr:()=>A,wt:()=>h});var r=e(9567),o=e(8401);const _=new o.tb(2);let s;function l(t){o.ej[t+o.hN]=_[o.hN],o.ej[t+o.DJ]=s.length-_[o.DJ]}let i="    ",c=0;const u=["","",i,i+=i,i+=i,i+=i,i+=i,i+=i,i+=i,i+=i,i+=i,i+=i],a={toString:function(){return++_[o.hN],_[o.DJ]=s.length+1,"\n"+u[c]}},d={toString:function(){return u[++c]}},f={toString:function(){return u[--c]}};function v(...t){return t}function A(t){return"string"==typeof t?b(t):h(...t)}function h(t,...n){for(let e=0;e<n.length;++e)s+=t[e],b(n[e]);s+=t[n.length]}function b(...t){for(let n=0;n<t.length;++n){let e=t[n];if(Array.isArray(e)){A(e);continue}if("number"!=typeof e){void 0===e&&(e="undefined"),null===e&&(e="null"),s+=e.toString();continue}const _=4*e;l(_+o.vb),r.qG[(0,o.NW)(e)](e),l(_+o.un)}}function w(t){var n;return n=t.filename,s=`//# sourceURL=${n}\n`,s+="const {_r_, _b_} = __SBRYTHON__;\n",_[o.hN]=3,_[o.DJ]=s.length,b(0),s+="\nconst __exported__ = {};\n",s}},4963:(t,n,e)=>{var r=e(4933),o=e(8401),_=e(2365),s=e(5246),l=e(6139),i=e(1077);(0,i.$R)("jsint",{...(0,_.Q9)(["**","+","-","&","|","^",">>","<<"],l.JE,{convert_self:s.yt,convert_other:s.yt}),...(0,_.Q9)(["*"],l.JE,{substitute_call:(t,n,e)=>(0,o.YZ)(t)===i.db?(0,_.rx)(t,(0,_.N0)(n),"*",(0,_.N0)(e)):(0,_.rx)(t,(0,_.vi)(n),"*",(0,_.vi)(e))}),...(0,_.Q9)(["/"],l.Sv,{convert_other:s.Op}),...(0,_.Q9)(["//"],l.L3,{substitute_call:(t,n,e)=>r.r`_b_.floordiv_float(${n}, ${e})`}),...(0,_.Q9)(["%"],l.L3,{substitute_call:(t,n,e)=>r.r`_b_.mod_int(${n}, ${e})`}),...(0,_.kV)(["u.-"],l.JF,{substitute_call:(t,n)=>(0,o.YZ)(t)===i.mc?(0,_.HT)(t,"-",(0,_.vi)(n)):(0,_.HT)(t,"-",n)}),...(0,_.kV)(["~"],l.y5,{convert_self:s.yt}),...(0,_.NA)(_.E2,l.aI)})},4994:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1077);function s(t,n,e){const s=n.value,l=typeof s;let i;if("object"!==l){if("boolean"===l)return(0,o.dv)(t,r.uR),(0,o.yb)(t,_.j),void(o.tT[t]=s);if("string"===l)return(0,o.dv)(t,r.Vg),(0,o.yb)(t,_.G3),void(o.tT[t]=s)}else{if(i=s.__class__.__qualname__,"float"===i)return(0,o.dv)(t,r.oT),(0,o.yb)(t,_.db),void(o.tT[t]=s.value);if("NoneType"===i)return(0,o.dv)(t,r.ac),void(0,o.yb)(t,_.Fw)}if("int"!==i&&"number"!==l)throw new Error(`Unknown type ${l}:${i}`);(0,o.dv)(t,r.Z3),"int"===i?((0,o.yb)(t,_.mc),o.tT[t]=s.value):((0,o.yb)(t,_.Js),o.tT[t]=s)}},5063:(t,n,e)=>{e(7711),e(4963),e(5112),e(5743),e(3621),e(6938)},5085:(t,n,e)=>{e.d(n,{A:()=>a});var r=e(1201),o=e(1077),_=e(3740),s=e(8129),l=e(9567),i=e(8401),c=e(2830);function u(t,n,e){const _=(0,i.YZ)(t),l=(0,i.oS)(t,2),u=o.Nl[_],a=u.__call__;(e=new r.ob("fct",e)).parent_node_context=t,(0,s.uO)(l,n,u,e),a.generate=void 0,a.return_type=void 0;const d=n.returns?.id;if(void 0!==d){let t=(0,o.vz)(d);a.return_type=()=>t}const f=n.body[n.body.length-1].constructor.$name;if("Return"!==f&&"Raise"!==f){const t={constructor:{$name:"Return"},lineno:n.end_lineno,end_lineno:n.end_lineno,col_offset:n.end_col_offset,end_col_offset:n.end_col_offset};n.body.push(t)}(0,c.A)(l+1,n.body,e),(0,r.b2)(l+1,n.body)}function a(t,n,e){const r={__name__:"function",__call__:{args_names:new Array(n.args.args.length+n.args.posonlyargs.length),args_pos:{},idx_end_pos:-1,idx_vararg:-1,has_kw:!1,generate:u,return_type:()=>(u(t,n,e),r.__call__.return_type()),substitute_call:_.J}},s=o.Nl.length;o.Nl[s]=r,e.local_symbols[n.name]=s,(0,i.dv)(t,l.Iw),(0,i.yb)(t,s),i.tT[t]=n.name}},5112:(t,n,e)=>{var r=e(4933),o=e(8401),_=e(2365),s=e(5246),l=e(6139),i=e(1077);const c=(0,i.$R)("type[int]",{__call__:{return_type:l.y5,substitute_call:t=>{const n=(0,o.tq)(t)+1,e=(0,o.YZ)(n);if(e===i.mc)return n;if(e===i.Js)return(0,_.vi)(n);if(e===i.db)return r.r`BigInt(Math.trunc(${n}))`;if(e===i.G3)return r.r`BigInt(${n})`;const s=i.Nl[e],l=s?.__int__;if(void 0===l)throw new Error(`${s.__name__}.__int__ not defined`);return l.substitute_call(t,n)}}});(0,i.$R)("int",{__class__:c,__str__:{return_type:l.Gc,substitute_call:t=>r.r`${t}.toString()`},__int__:{return_type:l.y5,substitute_call:(t,n)=>(0,_.hm)(t,n)},...(0,_.Q9)(["**","+","-","&","|","^",">>","<<"],l.JE,{convert_other:s.yt}),...(0,_.Q9)(["*"],l.zl,{substitute_call:(t,n,e)=>(0,o.YZ)(t)===i.db?(0,_.rx)(t,(0,_.N0)(n),"*",(0,_.N0)(e)):(0,_.rx)(t,n,"*",e)}),...(0,_.Q9)(["/"],l.Sv,{convert_self:s.Op,convert_other:s.Op}),...(0,_.Q9)(["//"],l.JE,{convert_other:s.yt,substitute_call:(t,n,e)=>r.r`_b_.floordiv_int(${n}, ${e})`}),...(0,_.Q9)(["%"],l.JE,{convert_other:s.yt,substitute_call:(t,n,e)=>r.r`_b_.mod_int(${n}, ${e})`}),...(0,_.kV)(["u.-"],l.y5,{substitute_call:(t,n)=>(0,o.YZ)(t)===i.db?(0,_.HT)(t,"-",(0,_.N0)(n)):(0,_.HT)(t,"-",n)}),...(0,_.kV)(["~"],l.y5),...(0,_.NA)(_.E2,l.aI)})},5143:(t,n,e)=>{e.d(n,{A:()=>i});var r=e(4933),o=e(8401),_=e(2365),s=e(1077);function l(t,n,e,r){let l=!1;const i=(0,o.YZ)(r),c=(0,o.YZ)(n);let u=s.N9,a=s.Nl[c]?.[e];if(void 0!==a&&(u=a.return_type(i)),u===s.N9){if(e=(0,_.ue)(e),a=s.Nl[i]?.[e],void 0!==a&&(u=a.return_type(c)),u===s.N9){if("__eq__"!==e&&"__ne__"!==e)throw new Error(`${c} ${e} ${i} not implemented!`);const o="__eq__"===e?"===":"!==";return(0,_.rx)(t,n,o,r)}l=!0,[n,r]=[r,n]}return a.substitute_call(t,n,r,l)}function i(t){const n=o.tT[t],e=(0,o.tq)(t);for(let o=0;o<n.length;++o){0!==o&&(0,r.w)(" && ");const s=n[o],i=o+e,c=o+1+e;"is"!==s?"is not"!==s?(0,r.wr)(l(t,i,s,c)):(0,r.wr)((0,_.rx)(t,i,"!==",c)):(0,r.wr)((0,_.rx)(t,i,"===",c))}}},5246:(t,n,e)=>{e.d(n,{Op:()=>_,Pd:()=>o,yt:()=>s}),e(8401);var r=e(2365);e(1077);const o=t=>t,_=r.N0,s=r.vi},5743:(t,n,e)=>{var r=e(4933),o=e(9567),_=e(8401),s=e(2365),l=e(5246),i=e(6139),c=e(1077);const u=(0,c.$R)("type[float]",{__call__:{return_type:i.lC,substitute_call:t=>{const n=(0,_.tq)(t)+1,e=(0,_.YZ)(n);if(e===c.mc)return(0,s.N0)(n);if(e===c.db||e===c.mc)return e;if(e===c.G3){const t=_.tT[n];if((0,_.NW)(n)===o.Vg){if("inf"===t||"infinity"===t)return"Number.POSITIVE_INFINITY";if("-inf"===t||"-infinity"===t)return"Number.NEGATIVE_INFINITY"}return r.r`parseFloat(${n})`}const l=c.Nl[e],i=l?.__int__;if(void 0===i)throw new Error(`${l.__name__}.__int__ not defined`);return i.substitute_call(t,n)}}});(0,c.$R)("float",{__class__:u,__str__:{return_type:i.Gc,substitute_call:t=>r.r`_b_.float2str(${t})`},...(0,s.Q9)(["**","*","/","+","-"],i.Sv,{convert_other:l.Op}),...(0,s.Q9)(["//"],i.Sv,{convert_other:l.Op,substitute_call:(t,n,e)=>r.r`_b_.floordiv_float(${n}, ${e})`}),...(0,s.Q9)(["%"],i.Sv,{convert_other:l.Op,substitute_call:(t,n,e)=>r.r`_b_.mod_float(${n}, ${e})`}),...(0,s.kV)(["u.-"],i.lC),...(0,s.NA)(s.E2,i.aI)})},5819:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(4933),o=e(9567),_=e(8401),s=e(1077);function l(t){(0,r.w)("`");const n=(0,_.tq)(t),e=(0,_.zl)(t);for(let t=n;t<e+n;++t)if((0,_.YZ)(t)!==s.G3){if((0,_.NW)(t)!==o.cT)throw new Error("unsupported");(0,r.w)(t)}else{const n=4*t;(0,r.Ay)(n+_.vb),(0,r.w)(_.tT[t]),(0,r.Ay)(n+_.un)}(0,r.w)("`")}},5833:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){(0,o.dv)(t,r.GR);const s=(0,o.oS)(t,2*n.keys.length);for(let t=0;t<n.keys.length;++t)(0,_.hW)(2*t+s,n.keys[t],e),(0,_.hW)(2*t+1+s,n.values[t],e)}},6139:(t,n,e)=>{e.d(n,{Gc:()=>A,JE:()=>l,JF:()=>v,L3:()=>s,Sv:()=>_,aI:()=>o,bu:()=>a,jH:()=>u,lC:()=>d,w_:()=>c,y5:()=>f,zl:()=>i});var r=e(1077);function o(t){return r.mc<=t&&t<=r.db?r.j:r.N9}function _(t){return r.mc<=t&&t<=r.db?r.db:r.N9}function s(t){return t===r.Js?r.Js:r.N9}function l(t){return t===r.mc||t===r.Js?r.mc:r.N9}function i(t){return t===r.mc?r.mc:r.N9}function c(t){return t===r.G3?r.j:r.N9}function u(t){return t===r.G3?r.G3:r.N9}function a(t){return t===r.mc||t===r.Js?r.G3:r.N9}function d(t){return r.db}function f(t){return r.mc}function v(t){return r.Js}function A(t){return r.G3}},6170:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){const n=(0,o.tq)(t);r.wt`while(${n}){${n+1}${r.NL}}}`}},6384:(t,n,e)=>{e.d(n,{A:()=>o});class r extends Error{python_exception;constructor(t){super(),t._raw_err_=this,this.python_exception=t}}const o={PythonError:r}},6570:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){r.wt`'${o.tT[t]}'`}},6575:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){(0,r.w)("{");const n=(0,o.zl)(t),e=(0,o.tq)(t);n>0&&r.wt`${e}: ${e+1}`;for(let t=2;t<n;t+=2)r.wt`, ${t+e}: ${t+1+e}`;(0,r.w)("}")}},6634:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(4933),o=e(8401),_=e(2365),s=e(1077);function l(t){let n=_.Pv[o.tT[t]];const e=(0,o.tq)(t);let l=s.N9,i=s.Nl[(0,o.YZ)(e)]?.[n];if(void 0!==i&&(l=i.return_type((0,o.YZ)(e+1))),l===s.N9)throw new Error(`${(0,o.YZ)(e+1)} ${n}= ${(0,o.YZ)(e)} NOT IMPLEMENTED!`);(0,r.wr)(i.substitute_call(t,e,e+1))}},6647:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(9567),o=e(8401),_=e(1201);const s={And:"&&",Or:"||"};function l(t,n,e){(0,o.dv)(t,r.Fm);const l=n.values.length,i=(0,o.oS)(t,l);for(let t=0;t<l;++t)(0,_.hW)(t+i,n.values[t],e);(0,o.yb)(t,(0,o.YZ)(i)),o.tT[t]=s[n.op.constructor.$name]}},6790:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(7384),o=e(2018),_=e(615);const s={object:r.A,JSException:o.A,Exception:_.A}},6842:(t,n,e)=>{e.d(n,{A:()=>i});var r=e(2830),o=e(9567),_=e(8401),s=e(1201),l=e(4200);function i(t,n,e){const i=n.handlers.length+1;(0,_.dv)(t,o.Em);const c=(0,_.oS)(t,i);(0,r.A)(c,n.body,e),(0,s.b2)(c,n.body);for(let t=1;t<i;++t)(0,l.A)(t+c,n.handlers[t-1],e),(0,s.b2)(t+c,n.handlers[t-1])}},6938:(t,n,e)=>{var r=e(4933),o=e(8401),_=e(2365),s=e(5246),l=e(6139),i=e(1077);const c=(0,i.$R)("type[str]",{__call__:{return_type:l.Gc,substitute_call:t=>{const n=(0,o.tq)(t)+1,e=(0,o.YZ)(n);if(e===i.G3)return n;const r=i.Nl[e]?.__str__;if(void 0===r)throw new Error(`${i.Nl[e].__name__}.__str__ not defined`);return r.substitute_call(n)}}});(0,i.$R)("str",{__class__:c,__len__:{return_type:l.y5,substitute_call:t=>r.r`${(0,o.tq)(t)+1}.length`},...(0,_.NA)(_.E2,l.w_),...(0,_.Q9)(["+"],l.jH),...(0,_.Q9)(["*"],l.bu,{convert_other:s.Op,substitute_call:(t,n,e)=>((0,o.YZ)(n)!==i.G3&&([n,e]=[e,n]),r.r`${n}.repeat(${e})`)})})},7038:(t,n,e)=>{e.d(n,{A:()=>r});const r={Name:e(8365).A,Constant:e(4994).A,ClassDef:e(2665).A,Body:e(2830).A,Tuple:e(2663).A,List:e(3217).A,Dict:e(5833).A,UnaryOp:e(1626).A,Subscript:e(4391).A,Compare:e(961).A,BoolOp:e(6647).A,BinOp:e(4932).A,AugAssign:e(8784).A,Attribute:e(2290).A,Assign:e(2985).A,Return:e(723).A,Raise:e(7349).A,Pass:e(9844).A,Continue:e(3724).A,Break:e(4378).A,Assert:e(687).A,alias:e(8612).A,ImportFrom:e(9559).A,Import:e(9635).A,keyword:e(9097).A,FunctionDef:e(5085).A,Call:e(9500).A,Args:e(8129).Ay,JoinedStr:e(4668).A,FormattedValue:e(9007).A,While:e(3334).A,Try:e(6842).A,IfExp:e(8289).A,If:e(2788).A,For:e(8064).A,ExceptHandler:e(4200).A}},7349:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){(0,o.dv)(t,r.uB);const s=(0,o.oS)(t,1);(0,_.hW)(s,n.exc,e)}},7384:(t,n,e)=>{e.d(n,{A:()=>r});class r{}},7619:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){const n=(0,o.tq)(t);if(1===(0,o.zl)(t))return r.wt`{${n}${r.NL}}`;r.wt`if(${n+1}){${n}${r.NL}}`}},7711:(t,n,e)=>{(0,e(1077).$R)("NoneType",{})},7737:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){const n=o.tT[t];(0,r.w)(n[0]),void 0!==n[1]&&(0,r.w)(": ",n[1])}},7857:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){r.wt`${(0,o.tq)(t)}.${o.tT[t]}`}},7886:(t,n,e)=>{e.d(n,{A:()=>r});const r={assert:function(t){if(!t)throw new Error("Assertion failed")}}},7910:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(4933),o=e(8401),_=e(2365),s=e(1077);function l(t){(0,r.w)("var ");const n=(0,o.zl)(t),e=(0,o.tq)(t);for(let t=1;t<n;++t)r.wt`${t+e} = `;let l=e;(0,o.YZ)(e)===s.Js&&(0,o.YZ)(t)===s.mc&&(l=(0,_.vi)(e)),(0,r.w)(l)}},8064:(t,n,e)=>{e.d(n,{A:()=>i});var r=e(2830),o=e(9567),_=e(8401),s=e(1201),l=e(1077);function i(t,n,e){const i=n.target.id;if(e.local_symbols[i]=0,"Call"===n.iter.constructor.$name&&"range"===n.iter.func.id){(0,_.dv)(t,o.jq);const l=(0,_.oS)(t,2);return(0,s.hW)(l,n.iter,e),(0,r.A)(l+1,n.body,e),(0,s.b2)(l+1,n.body),void(_.tT[t]=i)}e.local_symbols[n.value]=l.mc;const c=n.iter.args;(0,_.dv)(t,o.d8);const u=c.length+1,a=(0,_.oS)(t,u);(0,r.A)(a,n.body,e),(0,s.b2)(a,n.body);for(let t=1;t<u;++t)(0,s.hW)(t+a,c[t-1],e);_.tT[t]=i}},8129:(t,n,e)=>{e.d(n,{Ay:()=>l,fG:()=>c,tk:()=>a,uO:()=>f});var r=e(1201),o=e(9567),_=e(8401),s=e(1077);function l(){}const i=0,c=1,u=2,a=3,d=4;function f(t,n,e,s){const l=e.__call__,f=n.args,A=void 0!==f.vararg,h=void 0!==f.kwarg,b=l.args_pos,w=l.args_names,y=f.posonlyargs.length+f.args.length+ +A+f.kwonlyargs.length+ +h;(0,_.dv)(t,o.wk);const g=(0,_.oS)(t,y),p=n.args.defaults,m=f.posonlyargs,$=f.args;let N=p.length-m.length-$.length;for(let t=0;t<m.length;++t)v(t+g,m[t],p[t-N],i,s),s.local_symbols[m[t].arg]=(0,_.YZ)(t+g);let T=m.length;N-=m.length;for(let t=0;t<$.length;++t)v(T+g,$[t],p[t-N],d,s),w[T++]=$[t].arg;if(l.idx_vararg=T,A)l.idx_end_pos=Number.POSITIVE_INFINITY,v(T+g,f.vararg,void 0,a,s),++T;else{l.idx_end_pos=T;const t=Math.min(p.length,$.length),n=p.length>$.length||y!==T;(t>1||1===t&&n)&&(l.idx_end_pos-=t)}let S=l.idx_end_pos;S===Number.POSITIVE_INFINITY&&(S=l.idx_vararg);for(let t=m.length;t<S;++t)b[_.tT[t+g]]=t;const x=l.idx_vararg-S;for(let t=0;t<x;++t)b[_.tT[t+g]]=-1;const E=f.kwonlyargs,I=f.kw_defaults;l.has_kw=l.idx_vararg!==S||0!==E.length,N=I.length-E.length;for(let t=0;t<E.length;++t)v(T+g,E[t],I[t],u,s),b[E[t].arg]=-1,++T;if(h&&(v(T+g,f.kwarg,void 0,c,s),l.kwargs=f.kwarg.arg,++T),_.tT[t]=e,0!==y)(0,r.Vx)(t,g,g+y-1);else{const e=n.col_offset+4+n.name.length+1,r=4*t;_.Qu[r+_.KY]=_.Qu[r+_.dG]=n.lineno,_.Qu[r+_.sP]=_.Qu[r+_.hp]=e}}function v(t,n,e,o,l){const i=n.arg;let c=n.annotation?.id;if(void 0!==e){const n=(0,_.oS)(t,1);(0,r.hW)(n,e,l),void 0===c&&(c=(0,_.YZ)(n),c===s.Js&&(c=s.mc))}(0,_.dv)(t,o),(0,_.yb)(t,c),_.tT[t]=i,l.local_symbols[i]=c,(0,r.nJ)(t,n)}l.brython_name="arguments"},8289:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){const s=(0,o.oS)(t,3);(0,_.hW)(s,n.test,e),(0,_.hW)(s+1,n.body,e),(0,_.hW)(s+2,n.orelse,e),(0,o.dv)(t,r.dx),(0,o.yb)(t,(0,o.YZ)(s+1))}},8341:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){let n,e=(0,o.tq)(t),_=(0,o.zl)(t);for(r.wt`if(${e++}){${e++}${r.NL}}`,n=2;n<_-1;n+=2)r.wt`else if(${e++}){${e++}${r.NL}}`;n===_-1&&r.wt`else {${e}${r.NL}}`}},8365:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(9567),o=e(8401);function _(t,n,e){let _=0,s=n.id;"self"===s?s="this":s in e.local_symbols&&(_=e.local_symbols[s]),(0,o.dv)(t,r.PF),(0,o.yb)(t,_),o.tT[t]=s}},8401:(t,n,e)=>{e.d(n,{Ay:()=>w,DJ:()=>_,EV:()=>x,KY:()=>i,NW:()=>E,O9:()=>J,Qu:()=>d,YZ:()=>q,ZI:()=>N,dG:()=>u,dv:()=>O,ej:()=>f,fo:()=>b,hN:()=>o,hp:()=>a,oS:()=>h,sP:()=>c,tT:()=>v,tb:()=>r,tq:()=>Y,uk:()=>Z,un:()=>l,vb:()=>s,yb:()=>W,zl:()=>I});const r=Float64Array,o=0,_=1,s=0,l=2,i=s+o,c=s+_,u=l+o,a=l+_,d=new r(8400),f=new r(8400),v=new Array;let A=0;function h(t,n){const e=t*N;x[e+m]=n;const r=x[e+p]=A;return A+=n,r}function b(){return A++}function w(){v.length=0,A=0,S.resize(0),S.resize(T)}const y=0,g=1,p=2,m=3,$=4,N=5,T=8*N*2100,S=new ArrayBuffer(T,{maxByteLength:T}),x=new r(S);function E(t){return x[t*N+y]}function I(t){return x[t*N+m]}function Y(t){return x[t*N+p]}function q(t){return x[t*N+$]}function Z(t){return x[t*N+g]}function O(t,n){return x[t*N+y]=n}function W(t,n){x[t*N+$]=n}function J(t,n){x[t*N+g]=n}},8501:(t,n,e)=>{e.d(n,{A:()=>o});var r=e(4933);function o(t){(0,r.w)("null")}},8612:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(9567),o=e(8401);function _(t,n,e){(0,o.dv)(t,r.Q5),o.tT[t]=[n.name,n.asname]}},8738:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(4933),o=e(8401),_=e(2365);function s(t){const n=o.tT[t],e=(0,o.tq)(t),s=(0,o.zl)(t);let l="0n",i="1n",c=(0,_.vi)(e+1);return s>2&&(l=c,c=(0,_.vi)(e+1)),4===s&&(i=(0,_.vi)(e+2)),r.wt`for(var ${n} = ${l}; ${n} < ${c}; ${n} += ${i}){${e}${r.NL}}`}},8784:(t,n,e)=>{e.d(n,{A:()=>l});var r=e(9567),o=e(8401),_=e(1201),s=e(2365);function l(t,n,e){let l=s.uS[n.op.constructor.$name];if(void 0===l)throw console.warn("OP",n.op.constructor.$name),new Error("not implemented");o.tT[t]=l,(0,o.dv)(t,r.TX);const i=(0,o.oS)(t,2);(0,_.hW)(i,n.target,e),(0,_.hW)(i+1,n.value,e),(0,o.yb)(t,(0,o.YZ)(i))}},8787:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){const n=(0,o.tq)(t),e=(0,o.zl)(t);r.wt`try {${n}${r.NL}}`,r.wt`catch(_raw_err_){${r.BB}${r.NL}`,(0,r.w)("const _err_ = _b_.get_py_exception(_raw_err_, __SBRYTHON__)"),e>1&&(0,r.w)(1+n);for(let t=2;t<e;++t)(0,r.w)(r.NL,"else ",t+n);1!==(0,o.zl)(n+e-1)&&(0,r.w)(r.NL,"else { throw _raw_err_ }"),(0,r.w)(r.BE,r.NL)}},8816:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){const n=(0,o.tq)(t);r.wt`(${n} ? ${n+1} : ${n+2})`}},9007:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){(0,o.dv)(t,r.cT);const s=(0,o.oS)(t,1);(0,_.hW)(s,n.value,e)}},9097:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){(0,o.dv)(t,r.vC);const s=(0,o.oS)(t,1);(0,_.hW)(s,n.value,e),(0,o.yb)(t,(0,o.YZ)(s)),o.tT[t]=n.arg}},9494:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){(0,r.w)(r.BB);const n=(0,o.tq)(t),e=(0,o.zl)(t);for(let t=n;t<e+n;++t)(0,r.w)(r.NL,t);(0,r.w)(r.BE)}},9500:(t,n,e)=>{e.d(n,{A:()=>i});var r=e(9567),o=e(8401),_=e(1201),s=e(1077),l=e(9097);function i(t,n,e){const i=n.func.id,c=e.local_symbols[i];if(void 0===c)throw console.warn(n),console.warn(e.local_symbols),new Error(`Function ${i} not defined`);const u=s.Nl[c],a=u.__call__.return_type();(0,o.dv)(t,r.L_),(0,o.yb)(t,a);let d=(0,o.oS)(t,1+n.args.length+n.keywords.length);(0,_.hW)(d++,n.func,e);for(let t=0;t<n.args.length;++t)(0,_.hW)(d++,n.args[t],e);for(let t=0;t<n.keywords.length;++t)(0,l.A)(d,n.keywords[t],e),(0,_.b2)(d,n.keywords[t]),++d;o.tT[t]=u}},9559:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){(0,o.dv)(t,r.Jr);const s=n.names.length,l=(0,o.oS)(t,s);for(let t=0;t<s;++t)(0,_.hW)(t+l,n.names[t],e);o.tT[t]=n.module}},9567:(t,n,e)=>{e.d(n,{$p:()=>Jt,BI:()=>st,CQ:()=>tt,Ch:()=>It,Ec:()=>nt,Em:()=>Et,Fm:()=>rt,G9:()=>ct,GR:()=>X,Iw:()=>$t,Iz:()=>ft,Jq:()=>Pt,Jr:()=>wt,L_:()=>Nt,Lh:()=>pt,PF:()=>D,Q5:()=>yt,TX:()=>lt,Vg:()=>ut,WQ:()=>mt,Xc:()=>Wt,Z3:()=>at,ac:()=>ht,cT:()=>vt,d8:()=>Zt,dx:()=>Yt,eP:()=>K,eu:()=>H,ew:()=>_t,fP:()=>it,gz:()=>qt,jq:()=>Ot,oT:()=>dt,qG:()=>kt,s2:()=>ot,sm:()=>et,tB:()=>gt,tO:()=>xt,uB:()=>bt,uR:()=>At,vC:()=>Tt,wk:()=>St,zg:()=>U});var r=e(3642),o=e(3877),_=e(2263),s=e(6575),l=e(1488),i=e(4065),c=e(2791),u=e(5143),a=e(3278),d=e(9843),f=e(2208),v=e(7857),A=e(3836),h=e(6634),b=e(7910),w=e(3215),y=e(6570),g=e(9776),p=e(1877),m=e(3822),$=e(5819),N=e(1531),T=e(1283),S=e(8501),x=e(755),E=e(6384),I=e(9900),Y=e(7737),q=e(1688),Z=e(4038),O=e(3381),W=e(7886),J=e(3699),k=e(3740),Q=e(1344),P=e(2303),j=e(6170),z=e(8787),B=e(4064),G=e(7619),L=e(8816),F=e(8341),V=e(8738),R=e(2380),M=e(9712),C=e(9494);const D=0,H=1,K=2,X=3,U=4,tt=5,nt=6,et=7,rt=8,ot=9,_t=10,st=11,lt=12,it=13,ct=14,ut=15,at=16,dt=17,ft=18,vt=19,At=20,ht=21,bt=22,wt=23,yt=24,gt=25,pt=26,mt=27,$t=28,Nt=29,Tt=30,St=31,xt=32,Et=33,It=34,Yt=35,qt=36,Zt=37,Ot=38,Wt=39,Jt=40,kt=[r.A,o.A,_.A,s.A,l.A,i.A,c.A,u.A,a.A,d.A,v.A,A.A,h.A,b.A,w.A,y.A,g.A,p.A,$.A,N.A,T.A,S.A,x.A,I.A,Y.A,q.A,Z.A,O.A,J.A,k.A,Q.A,P.A,j.A,z.A,G.A,L.A,F.A,V.A,R.A,M.A,C.A],Qt={};Object.assign(Qt,f.A),Object.assign(Qt,m.A),Object.assign(Qt,E.A),Object.assign(Qt,W.A),Object.assign(Qt,B.Ay);const Pt=Qt},9635:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(9567),o=e(8401),_=e(1201);function s(t,n,e){(0,o.dv)(t,r.Jr);const s=n.names.length,l=(0,o.oS)(t,s);for(let t=0;t<s;++t)(0,_.hW)(t+l,n.names[t],e);o.tT[t]=n.module}},9712:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){let n="_r_.object";const e=(0,o.tq)(t);2===(0,o.zl)(t)&&(n=e+1),r.wt`class ${o.tT[t]} extends ${n} {${e}${r.NL}}`}},9776:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(4933),o=e(8401),_=e(1077);function s(t){let n=o.tT[t];(0,o.YZ)(t)!==_.mc?("bigint"==typeof n&&(n=Number(n)),(0,r.w)(`${n}`)):(0,r.w)(`${n}n`)}},9843:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(4933),o=e(8401),_=e(1077);function s(t){const n=(0,o.tq)(t),e=_.Nl[(0,o.YZ)(n)][o.tT[t]];(0,r.wr)(e.substitute_call(t,n,n+1))}},9844:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(9567),o=e(8401);function _(t,n,e){(0,o.dv)(t,r.CQ)}},9900:(t,n,e)=>{e.d(n,{A:()=>_});var r=e(4933),o=e(8401);function _(t){(0,r.w)("const {");const n=(0,o.tq)(t),e=(0,o.zl)(t);for(let t=0;t<e;++t)0!==t&&(0,r.w)(", "),(0,r.w)(t+n);(0,r.w)("} = ");const _=o.tT[t];null===_?(0,r.w)("__SBRYTHON__.getModules()"):r.wt`__SBRYTHON__.getModule("${_}")`}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var _=n[r]={exports:{}};return t[r](_,_.exports,e),_.exports}e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n);var r={};e.d(r,{Jq:()=>s.Jq,XK:()=>l.XK,ZT:()=>o.ZT,a6:()=>s.a6,jV:()=>s.jV,od:()=>_.od,p$:()=>l.p$,st:()=>o.st});var o=e(1201),_=e(4933),s=e(782),l=(e(5063),e(4064)),i=r.a6,c=r.Jq,u=r.jV,a=r.od,d=r.ZT,f=r.XK,v=r.st,A=r.p$;export{i as SBrython,c as _b_,u as _r_,a as ast2js,d as convert_ast,f as parse_stack,v as py2ast,A as stackline2astnode};
//# sourceMappingURL=index.js.map