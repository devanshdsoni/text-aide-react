(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),l=n.n(s),r=(n(9),n(2)),o=n(0);var i=function(e){return Object(o.jsx)("div",{style:{height:"60px",textAlign:"center",position:"fixed",bottom:"8px",right:"8px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible px-3"),role:"alert",children:[Object(o.jsxs)("strong",{children:[e.alert.type.replace(e.alert.type[0],e.alert.type[0].toUpperCase())," "]})," ",": ",e.alert.msg]})})};function h(e){return Object(o.jsx)("nav",{className:"navbar sticky-top navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:Object(o.jsxs)("b",{children:[" ",e.title]})}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link ","aria-current":"page",href:"/",children:"Home"})})}),e.searchBar?Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Search"})]}):"",Object(o.jsxs)("div",{className:"form-check form-switch mx-3",children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(o.jsx)("label",{className:"form-check-label info text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h1",{className:"mb-4",children:e.heading}),Object(o.jsx)("div",{className:"my-2",children:Object(o.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){s(e.target.value)},placeholder:"Enter text here",id:"myBox",rows:"7",style:{backgroundColor:"light"===e.mode?"white":"#071E3D",color:"light"===e.mode?"black":"white",fontSize:"17px"}})}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-info m-2",style:{fontWeight:"500"},onClick:function(){s(c.toUpperCase()),e.showAlert("Converted to Uppercase!","success")},children:"Convert to UPPERCASE"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-info m-2",style:{fontWeight:"500"},onClick:function(){s(c.toLowerCase()),e.showAlert("Converted to Lowercase!","success")},children:"Convert to lowercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-info m-2",style:{fontWeight:"500"},onClick:function(){var t=c.split(/\n/),n=[];t.forEach((function(e){if(0===e.split(/\s+/).filter((function(e){return 0!==e.length})).length)n.push(e);else{var t=[];e.toLowerCase().split(" ").forEach((function(e){0===e.length?t.push(e):t.push(e.replace(e[0],e[0].toUpperCase()))}));var a=t.join(" ");n.push(a)}})),s(n.join("\n")),e.showAlert("Capitalized Each Words!","success")},children:"Capitalized Each Words"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-info m-2",style:{fontWeight:"500"},onClick:function(){var t=c.split(/\n/),n=[];t.forEach((function(e){var t=e.split(/\s+/).filter((function(e){return 0!==e.length}));n.push(t.join(" "))})),s(n.join("\n")),e.showAlert("Extra Space Removed!","success")},children:"Remove Extra Spaces"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-info m-2",style:{fontWeight:"500"},onClick:function(){navigator.clipboard.writeText(c),e.showAlert("Text Copied to Clipboard!","success")},children:"Copy to Clipboard"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-info m-2",style:{fontWeight:"500"},onClick:function(){s(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"})]}),Object(o.jsxs)("div",{className:"container my-2",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h2",{children:"Your Text Summery"}),Object(o.jsxs)("p",{children:["Words :"," ",c.split(/\s+/).filter((function(e){return 0!==e.length})).length," ",Object(o.jsx)("br",{})," Characters : ",c.length," "]}),Object(o.jsx)("h2",{children:"Text Preview"}),Object(o.jsx)("p",{children:c.length>0?c:"Nothing to Preview"})]})]})}h.defaultProps={title:"Your title here",searchBar:!0};var d=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),l=Object(r.a)(s,2),d=l[0],j=l[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),4e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{title:"TextAide",searchBar:!1,mode:n,toggleMode:function(){setTimeout((function(){"light"===n?(c("dark"),document.body.style.backgroundColor="#071E3D",document.body.style.transition="0.2s",u("Dark mode Enabled!","success")):(c("light"),document.body.style.backgroundColor="white",document.body.style.transition="0.2s",u("Light mode Enabled!","success"))}),200)},showAlert:u}),Object(o.jsx)(i,{alert:d}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{heading:"Try TextAide - Word Counter, Character Counter, Manipulate Text",mode:n,showAlert:u})})]})};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.f40000ec.chunk.js.map