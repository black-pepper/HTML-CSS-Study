(this["webpackJsonphtml-css-study"]=this["webpackJsonphtml-css-study"]||[]).push([[0],{17:function(e,t,a){e.exports=a(39)},26:function(e,t,a){},28:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(13),c=a.n(n),s=(a(26),a(14)),o=a(2);a(7);var d=e=>{let{tagData:t}=e;return l.a.createElement("div",{className:"card",style:{marginTop:10,minHeight:"150px"}},l.a.createElement("div",{className:"card-body",dangerouslySetInnerHTML:{__html:(()=>{if(null==t.current)return null;let e="";const a=r=>{const l=t.current[r].tag,n=t.current[r].htmlProperty,c=t.current[r].cssProperty;if(e+="<".concat(l),Object.entries(n).forEach(t=>{let[a,r]=t;"content"!=a&&(e+=" ".concat(a,'="').concat(r.value,'"'))}),0!==Object.keys(c).length){if(e+=' style="',Object.entries(c).forEach(t=>{let[a,r]=t;r&&(e+="".concat(a,":").concat(r.value,";"))}),e+='">'.concat(n.content?n.content.value:""),t.current[r]&&t.current[r].children)for(const e of t.current[r].children)a(e);e+="</".concat(l,">")}else{if(e+=">".concat(n.content?n.content.value:""),t.current[r]&&t.current[r].children)for(const e of t.current[r].children)a(e);e+="</".concat(l,">")}};for(const r in t.current)0==t.current[r].depth&&a(r);return e})()}}),l.a.createElement("div",{className:"card-footer text-body-secondary",style:{minHeight:"40px",whiteSpace:"pre"}},(()=>{if(null==t.current)return null;let e="";const a=r=>{const l=t.current[r].tag,n=t.current[r].htmlProperty,c=t.current[r].cssProperty,s=t.current[r].depth;if(s>0&&(e+="  ".repeat(s)),e+="<".concat(l),Object.entries(n).forEach(t=>{let[a,r]=t;"content"!=a&&(e+=" ".concat(a,'="').concat(r.value,'"'))}),0!==Object.keys(c).length){if(e+=' style="',Object.entries(c).forEach(t=>{let[a,r]=t;r&&(e+="".concat(a,":").concat(r.value,";"))}),e+='">\n'.concat(n.content?"  ".repeat(s+1)+n.content.value+"\n":""),t.current[r]&&t.current[r].children)for(const e of t.current[r].children)a(e);s>0&&(e+="  ".repeat(s)),e+="</".concat(l,">\n")}else{if(e+=">\n".concat(n.content?"  ".repeat(s+1)+n.content.value+"\n":""),t.current[r]&&t.current[r].children)for(const e of t.current[r].children)a(e);s>0&&(e+="  ".repeat(s)),e+="</".concat(l,">\n")}};for(const r in t.current)0==t.current[r].depth&&a(r);return e})()))};var i=e=>{let{onTagSelect:t}=e;return l.a.createElement("div",{className:"list-group"},m.map((e,a)=>l.a.createElement("button",{className:"list-group-item list-group-item-action",key:a,onClick:()=>(e=>{t(e)})(e),"data-bs-dismiss":"modal","aria-label":"Close"},e)))};const m=["name","charset"];var u=e=>{let{selectedElement:t,updateHTMLProperties:a,selectedIndex:r}=e;const n=e=>null==r||null==t?null:"htmlProperty"in t&&e in t.htmlProperty?t.htmlProperty[e].value:null;return l.a.createElement("div",{className:"card",style:{height:"280px",marginTop:20}},l.a.createElement("div",{className:"card-header",id:r},l.a.createElement("b",null,"HTML PROPERTY")),l.a.createElement("div",{className:"card-body list-group list-group-flush overflow-auto",style:{padding:0}},l.a.createElement("li",{className:"list-group-item list-group-item-secondary",key:"-1"},l.a.createElement("input",{className:"form-control form-control-sm",disabled:!t,placeholder:"content",onChange:e=>a(r,"content",e.target.value),value:n("content")||""})),(e=>{let t=new Set;if(null==e)return[];switch(e.tag){case"a":t=new Set(["href","target"]);break;default:t=new Set}return e&&e.htmlProperty&&Object.keys(e.htmlProperty).map(e=>"content"===e?null:t.add(e)),Array.from(t)})(t).map((e,c)=>l.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center",key:c},e,":",l.a.createElement("input",{className:"form-control form-control-sm",disabled:!t,style:{marginLeft:10},onChange:t=>a(r,{[e.value]:t.target.value}),value:n(e)||""})))),l.a.createElement("div",{className:"card-footer",style:{padding:0}},l.a.createElement("div",{className:"btn-group",role:"group",style:{width:"100%"}},l.a.createElement("button",{className:"list-group-item btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#addHTMLProperty",style:{width:"100%",padding:10},disabled:null===r},"Add HTML property")),l.a.createElement("div",{className:"modal fade",id:"addHTMLProperty",tabIndex:"-1","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h1",{className:"modal-title fs-5",id:"exampleModalLabel"},"Add HTML Property"),l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),l.a.createElement("div",{className:"modal-body"},l.a.createElement(i,{onTagSelect:e=>{a(r,e,null)}})))))))};a(27);var p=e=>{let{onTagSelect:t}=e;return l.a.createElement("div",{className:"list-group"},g.map((e,a)=>l.a.createElement("button",{className:"list-group-item list-group-item-action",key:a,onClick:()=>(e=>{t(e)})(e),"data-bs-dismiss":"modal","aria-label":"Close"},e)))};const g=["div","section","article","nav","span","p","a","br"];var b=e=>{let{tagData:t,tagList:a,AddTagData:r,removeTagData:n,selectedIndex:c,setSelectedIndex:s}=e;return l.a.createElement("div",{className:"card",style:{height:"280px",marginTop:20}},l.a.createElement("div",{className:"card-header"},l.a.createElement("b",null,"ELEMENT")),l.a.createElement("div",{className:"card-body overflow-auto",style:{padding:0}},l.a.createElement("div",{className:"card-group list-group list-group-flush overflow-auto"},a.map(e=>l.a.createElement("button",{className:"list-group-item list-group-item-action d-flex justify-content-between align-items-center ".concat(c===e?"active":""),key:e,onClick:()=>{s(e)}},"\u2514".repeat(t.current[e].depth)," ",t.current[e].tag,l.a.createElement("div",{type:"button",className:"btn-close","aria-label":"Close",onClick:()=>n(e)}))))),l.a.createElement("div",{className:"card-footer",style:{padding:0}},l.a.createElement("div",{className:"btn-group",role:"group",style:{width:"100%"}},l.a.createElement("button",{className:"list-group-item btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#addTag",style:{width:"100%",padding:10}},"Add Tag"),l.a.createElement("button",{className:"list-group-item btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#addSubTag",style:{width:"100%",padding:10},disabled:null===c},"Add Sub Tag")),l.a.createElement("div",{className:"modal fade",id:"addTag",tabIndex:"-1","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h1",{className:"modal-title fs-5",id:"exampleModalLabel"},"Select Tag"),l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),l.a.createElement("div",{className:"modal-body"},l.a.createElement(p,{onTagSelect:e=>{r(e,-1)}}))))),l.a.createElement("div",{className:"modal fade",id:"addSubTag",tabIndex:"-1","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h1",{className:"modal-title fs-5",id:"exampleModalLabel"},"Select Tag"),l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),l.a.createElement("div",{className:"modal-body"},l.a.createElement(p,{onTagSelect:e=>{r(e,c)}})))))))};var h=e=>{let{onTagSelect:t}=e;return l.a.createElement("div",{className:"list-group"},E.map((e,a)=>l.a.createElement("button",{className:"list-group-item list-group-item-action",key:a,onClick:()=>(e=>{t(e)})(e),"data-bs-dismiss":"modal","aria-label":"Close"},e)))};const E=["position","float","clear","border-radius","box-shadow","transition","flex"];var y=e=>{let{selectedElement:t,updateCSSProperties:a,selectedIndex:r}=e;const n=e=>null==r||null==t?null:"cssProperty"in t&&e in t.cssProperty?t.cssProperty[e].value:null,c=e=>{switch(e){case"color":case"background-color":return"form-control form-control-color";default:return"form-control form-control-sm"}},s=e=>{switch(e){case"color":case"background-color":return"color";default:return null}},o=e=>{switch(e){case"display":return[null,"none","block","inline","inline-block"];case"text-align":return[null,"left","right","center","justify"];default:return null}};return l.a.createElement("div",{className:"card",style:{height:"280px",marginTop:20}},l.a.createElement("div",{className:"card-header"},l.a.createElement("b",null,"CSS PROPERTY")),l.a.createElement("div",{className:"list-group list-group-flush overflow-auto"},(()=>{let e=new Set(f);return t&&t.cssProperty&&Object.keys(t.cssProperty).map(t=>e.add(t)),Array.from(e)})().map((e,d)=>l.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center",key:d,style:{whiteSpace:"nowrap"}},e,":",o(e)?l.a.createElement("select",{className:"form-select form-select-sm",disabled:!t,style:{marginLeft:10},onChange:t=>a(r,e,t.target.value),value:n(e)||""},o(e).map((e,t)=>l.a.createElement("option",{value:e,key:t},e))):l.a.createElement("input",{className:c(e),type:s(e),disabled:!t,style:{marginLeft:10},onChange:t=>a(r,e,t.target.value),value:n(e)||""})))),l.a.createElement("div",{className:"card-footer",style:{padding:0}},l.a.createElement("div",{className:"btn-group",role:"group",style:{width:"100%"}},l.a.createElement("button",{className:"list-group-item btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#addCSSProperty",style:{width:"100%",padding:10},disabled:null===r},"Add CSS property")),l.a.createElement("div",{className:"modal fade",id:"addCSSProperty",tabIndex:"-1","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h1",{className:"modal-title fs-5",id:"exampleModalLabel"},"Add CSS Property"),l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),l.a.createElement("div",{className:"modal-body"},l.a.createElement(h,{onTagSelect:e=>{a(r,e,null)}})))))))};const f=["color","font-size","font-family","margin","padding","border","background-color","text-align","display","width","height"];class v{constructor(e,t,a){this.tag=e,this.htmlProperty={},this.cssProperty={},this.depth=t,this.children=[],this.parent=a}}class N{constructor(e,t){this.value=e,this.added=t}}var S=()=>{let e=Object(r.useRef)({}),t=Object(r.useRef)(0);const[a,n]=Object(r.useState)([]),[c,s]=Object(r.useState)(null),[o,i]=Object(r.useState)(null);Object(r.useEffect)(()=>{},[a,c,o]),Object(r.useEffect)(()=>{const a=JSON.parse(localStorage.getItem("tagData")),r=JSON.parse(localStorage.getItem("endIndex"));a&&(e.current=a,t.current=r,m(null),p(),console.log("use effect \uc2e4\ud589",a))},[]),Object(r.useEffect)(()=>{localStorage.setItem("tagData",JSON.stringify(e.current)),localStorage.setItem("endIndex",JSON.stringify(t.current))},[o]);const m=t=>{null===t?(s(null),i(null)):(s(t),i(e.current[t]))},p=()=>{let t=[];const a=r=>{if(t.push(r),e.current[r]&&e.current[r].children)for(const t of e.current[r].children)a(t)};for(const r in e.current)0==e.current[r].depth&&a(r);n(t)};return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row h-50"},l.a.createElement("div",{className:"col text-end"},l.a.createElement("button",{style:{marginTop:10},type:"button",className:"btn btn-light",onClick:()=>{localStorage.clear(),e.current={},t.current=0,n([]),s(null),i(null)}},"CLEAR"))),l.a.createElement(d,{tagData:e}),l.a.createElement("div",{className:"row h-50"},l.a.createElement("div",{className:"col"},l.a.createElement(u,{selectedElement:o,updateHTMLProperties:(t,a,r)=>{e.current[t].htmlProperty[a]||(e.current[t].htmlProperty[a]=new N(r,0)),e.current[t].htmlProperty[a].value=r,i(JSON.parse(JSON.stringify(e.current[t])))},selectedIndex:c})),l.a.createElement("div",{className:"col"},l.a.createElement(y,{selectedElement:o,updateCSSProperties:(t,a,r)=>{e.current[t].cssProperty[a]||(e.current[t].cssProperty[a]=new N(r,0)),e.current[t].cssProperty[a].value=r,i(JSON.parse(JSON.stringify(e.current[t])))},selectedIndex:c})),l.a.createElement("div",{className:"col"},l.a.createElement(b,{tagData:e,tagList:a,AddTagData:(a,r)=>{-1===r?e.current[t.current++]=new v(a,0,-1):(e.current[r].children.push(t.current),e.current[t.current++]=new v(a,e.current[r].depth+1,r)),p()},removeTagData:t=>{t===c&&(i(null),s(null));const a=t=>{if(e.current[t]&&e.current[t].children)for(const r of e.current[t].children)a(r);delete e.current[t]};-1!==e.current[t].parent&&(e.current[e.current[t].parent].children=e.current[e.current[t].parent].children.filter(e=>e!==t)),a(t),p()},selectedIndex:c,setSelectedIndex:m}))),l.a.createElement("footer",{className:"py-3 mt-auto"}))};a(28);var P=function(){return l.a.createElement(s.a,{basename:"/HTML-CSS-Study"},l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",render:()=>l.a.createElement(S,null)})))};var T=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then(t=>{let{getCLS:a,getFID:r,getFCP:l,getLCP:n,getTTFB:c}=t;a(e),r(e),l(e),n(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null))),T()}},[[17,1,2]]]);
//# sourceMappingURL=main.cdd202a8.chunk.js.map