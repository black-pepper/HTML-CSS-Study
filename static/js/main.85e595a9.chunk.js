(this["webpackJsonphtml-css-study"]=this["webpackJsonphtml-css-study"]||[]).push([[0],{17:function(e,t,a){e.exports=a(39)},26:function(e,t,a){},28:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(13),c=a.n(n),s=(a(26),a(14)),o=a(2);a(7);var d=e=>{let{tagData:t}=e;const a=()=>{if(null==t.current)return null;let e="";const a=l=>{const r=t.current[l].tag,n=t.current[l].htmlProperty,c=t.current[l].cssProperty;if(e+="<".concat(r),Object.entries(n).forEach(t=>{let[a,l]=t;"content"!=a&&(e+=" ".concat(a,'="').concat(l.value,'"'))}),0!==Object.keys(c).length){if(e+=' style="',Object.entries(c).forEach(t=>{let[a,l]=t;l&&(e+="".concat(a,":").concat(l.value,";"))}),e+='">'.concat(n.content?n.content.value:""),t.current[l]&&t.current[l].children)for(const e of t.current[l].children)a(e);e+="</".concat(r,">")}else{if(e+=">".concat(n.content?n.content.value:""),t.current[l]&&t.current[l].children)for(const e of t.current[l].children)a(e);e+="</".concat(r,">")}};for(const l in t.current)0==t.current[l].depth&&a(l);return e};return r.a.createElement("div",{className:"card",style:{marginTop:20,minHeight:"150px"}},r.a.createElement("div",{className:"card-body",dangerouslySetInnerHTML:{__html:a()}}),r.a.createElement("div",{className:"card-footer text-body-secondary",style:{minHeight:"40px"}},a()))};var m=e=>{let{onTagSelect:t}=e;return r.a.createElement("div",{className:"list-group"},i.map((e,a)=>r.a.createElement("button",{className:"list-group-item list-group-item-action",key:a,onClick:()=>(e=>{t(e)})(e),"data-bs-dismiss":"modal","aria-label":"Close"},e)))};const i=["name","charset"];var u=e=>{let{selectedElement:t,updateHTMLProperties:a,selectedIndex:l}=e;const n=e=>null==l||null==t?null:"htmlProperty"in t&&e in t.htmlProperty?t.htmlProperty[e].value:null;return r.a.createElement("div",{className:"card",style:{height:"280px",marginTop:20}},r.a.createElement("div",{className:"card-header",id:l},r.a.createElement("b",null,"HTML PROPERTY")),r.a.createElement("div",{className:"card-body list-group list-group-flush overflow-auto",style:{padding:0}},r.a.createElement("li",{className:"list-group-item list-group-item-secondary",key:"-1"},r.a.createElement("input",{className:"form-control form-control-sm",disabled:!t,placeholder:"content",onChange:e=>a(l,"content",e.target.value),value:n("content")||""})),(e=>{let t=new Set;if(null==e)return[];switch(e.tag){case"a":t=new Set(["href","target"]);break;default:t=new Set}return e&&e.htmlProperty&&Object.keys(e.htmlProperty).map(e=>"content"===e?null:t.add(e)),Array.from(t)})(t).map((e,c)=>r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center",key:c},e,":",r.a.createElement("input",{className:"form-control form-control-sm",disabled:!t,style:{marginLeft:10},onChange:t=>a(l,{[e.value]:t.target.value}),value:n(e)||""})))),r.a.createElement("div",{className:"card-footer",style:{padding:0}},r.a.createElement("div",{className:"btn-group",role:"group",style:{width:"100%"}},r.a.createElement("button",{className:"list-group-item btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#addHTMLProperty",style:{width:"100%",padding:10},disabled:null===l},"Add HTML property")),r.a.createElement("div",{className:"modal fade",id:"addHTMLProperty",tabIndex:"-1","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h1",{className:"modal-title fs-5",id:"exampleModalLabel"},"Add HTML Property"),r.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),r.a.createElement("div",{className:"modal-body"},r.a.createElement(m,{onTagSelect:e=>{a(l,e,null)}})))))))};a(27);var p=e=>{let{onTagSelect:t}=e;return r.a.createElement("div",{className:"list-group"},g.map((e,a)=>r.a.createElement("button",{className:"list-group-item list-group-item-action",key:a,onClick:()=>(e=>{t(e)})(e),"data-bs-dismiss":"modal","aria-label":"Close"},e)))};const g=["div","section","article","nav","span","p","a","br"];var b=e=>{let{tagData:t,tagList:a,AddTagData:l,removeTagData:n,selectedIndex:c,setSelectedIndex:s}=e;return r.a.createElement("div",{className:"card",style:{height:"280px",marginTop:20}},r.a.createElement("div",{className:"card-header"},r.a.createElement("b",null,"ELEMENT")),r.a.createElement("div",{className:"card-body overflow-auto",style:{padding:0}},r.a.createElement("div",{className:"card-group list-group list-group-flush overflow-auto"},a.map(e=>r.a.createElement("button",{className:"list-group-item list-group-item-action d-flex justify-content-between align-items-center ".concat(c===e?"active":""),key:e,onClick:()=>{s(e)}},"\u2514".repeat(t.current[e].depth)," ",t.current[e].tag,r.a.createElement("div",{type:"button",className:"btn-close","aria-label":"Close",onClick:()=>n(e)}))))),r.a.createElement("div",{className:"card-footer",style:{padding:0}},r.a.createElement("div",{className:"btn-group",role:"group",style:{width:"100%"}},r.a.createElement("button",{className:"list-group-item btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#addTag",style:{width:"100%",padding:10}},"Add Tag"),r.a.createElement("button",{className:"list-group-item btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#addSubTag",style:{width:"100%",padding:10},disabled:null===c},"Add Sub Tag")),r.a.createElement("div",{className:"modal fade",id:"addTag",tabIndex:"-1","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h1",{className:"modal-title fs-5",id:"exampleModalLabel"},"Select Tag"),r.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),r.a.createElement("div",{className:"modal-body"},r.a.createElement(p,{onTagSelect:e=>{l(e,-1)}}))))),r.a.createElement("div",{className:"modal fade",id:"addSubTag",tabIndex:"-1","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h1",{className:"modal-title fs-5",id:"exampleModalLabel"},"Select Tag"),r.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),r.a.createElement("div",{className:"modal-body"},r.a.createElement(p,{onTagSelect:e=>{l(e,c)}})))))))};var E=e=>{let{onTagSelect:t}=e;return r.a.createElement("div",{className:"list-group"},y.map((e,a)=>r.a.createElement("button",{className:"list-group-item list-group-item-action",key:a,onClick:()=>(e=>{t(e)})(e),"data-bs-dismiss":"modal","aria-label":"Close"},e)))};const y=["position","float","clear","border-radius","box-shadow","transition","flex"];var h=e=>{let{selectedElement:t,updateCSSProperties:a,selectedIndex:l}=e;const n=e=>null==l||null==t?null:"cssProperty"in t&&e in t.cssProperty?t.cssProperty[e].value:null,c=e=>{switch(e){case"color":case"background-color":return"form-control form-control-color";default:return"form-control form-control-sm"}},s=e=>{switch(e){case"color":case"background-color":return"color";default:return null}},o=e=>{switch(e){case"display":return[null,"none","block","inline","inline-block"];case"text-align":return[null,"left","right","center","justify"];default:return null}};return r.a.createElement("div",{className:"card",style:{height:"280px",marginTop:20}},r.a.createElement("div",{className:"card-header"},r.a.createElement("b",null,"CSS PROPERTY")),r.a.createElement("div",{className:"list-group list-group-flush overflow-auto"},(()=>{let e=new Set(v);return t&&t.cssProperty&&Object.keys(t.cssProperty).map(t=>e.add(t)),Array.from(e)})().map((e,d)=>r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center",key:d,style:{whiteSpace:"nowrap"}},e,":",o(e)?r.a.createElement("select",{className:"form-select form-select-sm",disabled:!t,style:{marginLeft:10},onChange:t=>a(l,e,t.target.value),value:n(e)||""},o(e).map((e,t)=>r.a.createElement("option",{value:e,key:t},e))):r.a.createElement("input",{className:c(e),type:s(e),disabled:!t,style:{marginLeft:10},onChange:t=>a(l,e,t.target.value),value:n(e)||""})))),r.a.createElement("div",{className:"card-footer",style:{padding:0}},r.a.createElement("div",{className:"btn-group",role:"group",style:{width:"100%"}},r.a.createElement("button",{className:"list-group-item btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#addCSSProperty",style:{width:"100%",padding:10},disabled:null===l},"Add CSS property")),r.a.createElement("div",{className:"modal fade",id:"addCSSProperty",tabIndex:"-1","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h1",{className:"modal-title fs-5",id:"exampleModalLabel"},"Add CSS Property"),r.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),r.a.createElement("div",{className:"modal-body"},r.a.createElement(E,{onTagSelect:e=>{a(l,e,null),console.log(t)}})))))))};const v=["color","font-size","font-family","margin","padding","border","background-color","text-align","display","width","height"];class f{constructor(e,t){this.tag=e,this.htmlProperty={},this.cssProperty={},this.depth=t,this.children=[]}}class N{constructor(e,t){this.value=e,this.added=t}}var S=()=>{let e=Object(l.useRef)({}),t=Object(l.useRef)(0);const[a,n]=Object(l.useState)([]),[c,s]=Object(l.useState)(null),[o,m]=Object(l.useState)(null);Object(l.useEffect)(()=>{},[a,c,o]);const i=()=>{let t=[];const a=l=>{if(t.push(l),e.current[l]&&e.current[l].children)for(const t of e.current[l].children)a(t)};for(const l in e.current)0==e.current[l].depth&&a(l);n(t)};return r.a.createElement("div",{className:"container"},r.a.createElement(d,{tagData:e}),r.a.createElement("div",{className:"row h-50"},r.a.createElement("div",{className:"col"},r.a.createElement(u,{selectedElement:o,updateHTMLProperties:(t,a,l)=>{e.current[t].htmlProperty[a]||(e.current[t].htmlProperty[a]=new N(l,0)),e.current[t].htmlProperty[a].value=l,m(JSON.parse(JSON.stringify(e.current[t])))},selectedIndex:c})),r.a.createElement("div",{className:"col"},r.a.createElement(h,{selectedElement:o,updateCSSProperties:(t,a,l)=>{e.current[t].cssProperty[a]||(e.current[t].cssProperty[a]=new N(l,0)),e.current[t].cssProperty[a].value=l,m(JSON.parse(JSON.stringify(e.current[t])))},selectedIndex:c})),r.a.createElement("div",{className:"col"},r.a.createElement(b,{tagData:e,tagList:a,AddTagData:(a,l)=>{-1===l?e.current[t.current++]=new f(a,0):(e.current[l].children.push(t.current),e.current[t.current++]=new f(a,e.current[l].depth+1)),i()},removeTagData:t=>{t===c&&(m(null),s(null));const a=t=>{if(e.current[t]&&e.current[t].children)for(const l of e.current[t].children)a(l);delete e.current[t]};a(t),i()},selectedIndex:c,setSelectedIndex:t=>{s(t),m(e.current[t])}}))),r.a.createElement("footer",{className:"py-3 mt-auto"}))};a(28);var T=function(){return r.a.createElement(s.a,{basename:"/HTML-CSS-Study"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",render:()=>r.a.createElement(S,null)})))};var P=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then(t=>{let{getCLS:a,getFID:l,getFCP:r,getLCP:n,getTTFB:c}=t;a(e),l(e),r(e),n(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null))),P()}},[[17,1,2]]]);
//# sourceMappingURL=main.85e595a9.chunk.js.map