_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"4IfK":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIsomorphicLayoutEffect=void 0;var a=n("q1tI"),r="undefined"!==typeof window?a.useLayoutEffect:a.useEffect;t.useIsomorphicLayoutEffect=r},H0SL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(r),o=function(){return(o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};function l(e){return function(t){return a.createElement(c,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return a.createElement(t.tag,o({key:n},t.attr),e(t.child))}))}(e.child))}}function c(e){var t=function(t){var n,r=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,l=e.title,c=s(e,["attr","title"]);return a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:n,style:o({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==i?a.createElement(i.Consumer,null,(function(e){return t(e)})):t(r)}},OTAv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useScrollPosition=s;var a=n("q1tI"),r=n("4IfK"),i="undefined"!==typeof window;function o(e){var t=e.element,n=e.useWindow;if(!i)return{x:0,y:0};var a=(t?t.current:document.body).getBoundingClientRect();return n?{x:window.scrollX,y:window.scrollY}:{x:a.left,y:a.top}}function s(e,t,n,s,l){var c=(0,a.useRef)(o({useWindow:s})),u=null,m=function(){var t=o({element:n,useWindow:s});e({prevPos:c.current,currPos:t}),c.current=t,u=null};(0,r.useIsomorphicLayoutEffect)((function(){if(i){var e=function(){l?null===u&&(u=setTimeout(m,l)):m()};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}}),t)}s.defaultProps={deps:[],element:!1,useWindow:!1,wait:null}},YFqc:function(e,t,n){e.exports=n("cTJO")},cMU6:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var a=n("q1tI"),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){r=!0,i=l}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n("lTFH");var c=n("ma3e"),u=n("YFqc"),m=n.n(u),f=r.a.createElement;function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(){var e=function(){var e=!0;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var n=Object(a.useState)(t),r=n[0],i=n[1];return Object(a.useEffect)((function(){if(!e)return!1;function n(){i(t())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),r}().width,t=s(r.a.useState({transition:"all 200ms ease-in"}),2),n=t[0],i=t[1];return Object(l.useScrollPosition)((function(e){var t=e.prevPos,a=e.currPos,r=a.y>t.y,o={backgroundColor:0===a.y?"transparent":"white",visibility:r?"visible":"hidden",transition:"all 200ms ".concat(r?"ease-in":"ease-out"),transform:r?"none":"translate(0, -100%)"};JSON.stringify(o)!==JSON.stringify(n)&&i(o)}),[n]),f(e<=640?v:b,{headerStyle:n})}var v=function(e){var t=e.headerStyle,n=s(r.a.useState("invisible"),2),a=n[0],i=n[1];function o(){i("invisible"===a?"visible":"invisible")}return f(r.a.Fragment,null,f("header",{className:"navbar p-4 flex justify-between items-center w-full fixed sm:px-6",style:p({},t)},f(m.a,{href:"/"},f("a",null,f("img",{className:"w-32",src:"img/logo.png",alt:"logo checkin",loading:"lazy"}))),f("nav",{className:"relative"},f("button",{className:"p-4",onClick:o},f("i",{className:"text-2xl"},f(c.c,null))))),f(h,{modal:a,toggle:o}))},h=function(e){var t=e.modal,n=e.toggle;return f("div",{className:"fixed bg-white z-10 top-0 w-full h-full p-4 flex flex-col items-center ".concat(t)},f("button",{className:"p-4",onClick:n},f("i",{className:"text-2xl"},f(c.c,null))),f(m.a,{href:"/"},f("a",{onClick:n},f("img",{className:"w-56 mt-4 mb-12",src:"img/logo.png",alt:"logo checkin",loading:"lazy"}))),f("nav",{className:"text-2xl font-semibold flex flex-col items-center leading-loose"},f("a",{href:"/#servicos",className:"mr-2 link",onClick:n},"Servi\xe7os"),f("a",{href:"/#sobre",className:"mr-2 link",onClick:n},"Sobre"),f("a",{href:"/#clientes",className:"mr-2 link",onClick:n},"Depoimentos"),f("a",{href:"/#contato",onClick:n,className:"link"},"Contato")))},b=function(e){var t=e.headerStyle;return f("header",{className:"p-4 flex justify-between items-center w-full fixed md:px-12",style:p({},t)},f(m.a,{href:"/"},f("a",null,f("img",{className:"w-32",src:"img/logo.png",alt:"logo checkin",loading:"lazy"}))),f("nav",{className:"text-lg font-semibold"},f("a",{href:"/#servicos",className:"mr-2 link"},"Servi\xe7os"),f("a",{href:"/#sobre",className:"mr-2 link"},"Sobre"),f("a",{href:"/#clientes",className:"mr-2 link"},"Depoimentos"),f("a",{href:"/#contato",className:"link"},"Contato")))},y=r.a.createElement,x={bg:"img/hero/bg.jpg",texto:"O melhor servi\xe7o em",chamada:["Mudan\xe7as Residenciais Exclusivas ou Compartilhadas","Mudan\xe7as e Cargas Rastreadas","Montagens e Desmontagens","I\xe7amento at\xe9 1T","Transporte de Ve\xedculos, Motos e Barcos","Transporte de Animais Dom\xe9sticos","Guarda M\xf3veis","Remanejamento de Ambientes Empresariais","Mudan\xe7as Comerciais"]};function w(){var e=s(r.a.useState(0),2),t=e[0],n=e[1],a=s(r.a.useState(null),2),i=a[0],o=a[1],l=r.a.useRef(),c=r.a.useRef(),u=x.chamada.length;return r.a.useEffect((function(){return l.current=setTimeout((function(){n(t+1>=u?0:t+1)}),3e3),function(){return clearTimeout(l)}})),r.a.useEffect((function(){o("flip"),c.current=setTimeout((function(){o(null)}),500)}),[t]),y("section",{className:"hero section",style:{backgroundImage:"url(".concat(x.bg,")")}},y("h2",{className:"text-center font-semibold text-2xl sm:text-3xl md:text-4xl"},x.texto),y("div",{className:"w-full h-24"},y("h1",{className:"text-center font-bold text-3xl sm:text-4xl md:text-5xl ".concat(i),key:t},x.chamada[t])))}var N=r.a.createElement;function E(e){var t=e.children,n=e.className;return N("h2",{className:"\n      p-1 text-2xl font-semibold \n      md:text-3xl\n      ".concat(n),style:{borderBottom:"2px solid var(--primary)"}},t)}var O=r.a.createElement,j=[{icon:"img/servicos/mudancas_residenciais.png",title:"Mudan\xe7as Residenciais Exclusivas / Compartilhadas",text:"Disponibilizamos de um caminh\xe3o para carregar suas mudan\xe7as da forma mais c\xf4moda para voc\xea"},{icon:"img/servicos/embalagem.png",title:"Mudan\xe7as Comerciais e Remanejamento de Ambientes Empresariais",text:"Embalamos suas mudan\xe7as para maior seguran\xe7a e comodidade"},{icon:"img/servicos/fretamento.png",title:"Mudan\xe7as e Cargas Rastreadas",text:"Entrega para diversos estados, principalmente entre S\xe3o Paulo e Manaus"},{icon:"img/servicos/embalagem.png",title:"Montagens e Desmontagens",text:"Embalamos suas mudan\xe7as para maior seguran\xe7a e comodidade"},{icon:"img/servicos/embalagem.png",title:"I\xe7amentos at\xe9 1T",text:"Embalamos suas mudan\xe7as para maior seguran\xe7a e comodidade"},{icon:"img/servicos/embalagem.png",title:"Transporte de ve\xedculos, Motos e Barcos",text:"Embalamos suas mudan\xe7as para maior seguran\xe7a e comodidade"},{icon:"img/servicos/embalagem.png",title:"Transporte de Animais Dom\xe9sticos",text:"Embalamos suas mudan\xe7as para maior seguran\xe7a e comodidade"},{icon:"img/servicos/moveis.png",title:"Guarda M\xf3veis",text:"Oferecemos Guarda M\xf3veis nas seguintes capitais: Cuiab\xe1 MT, Belo Horizonte MG, S\xe3o Paulo, Manaus AM"},{icon:"img/servicos/balsa.png",title:"Conv\xeanio com Balsas",text:"Entrega para diversos estados, principalmente entre S\xe3o Paulo e Manaus"}];function k(){return O("section",{className:"section sm:px-6 md:px-12 md:py-12",id:"servicos"},O(E,{className:"title"},"Servi\xe7os"),O("div",{className:"grid grid-cols-1 gap-8 py-4 sm:grid-cols-2 md:grid-cols-3"},j.map((function(e,t){return O(P,{icon:e.icon,title:e.title,text:e.text,key:t})}))))}var P=function(e){var t=e.icon,n=e.title,a=e.text;return O("div",{className:"flip-card w-56 h-64"},O("div",{className:"flip-card-inner shadow-sm w-full h-full"},O("div",{className:"card-front flex flex-col justify-center items-center w-full h-full p-4"},O("img",{src:t,className:"mb-4 w-24",alt:n,loading:"lazy"}),O("h2",{className:"text-lg font-semibold sm:text-xl text-center"},n)),O("div",{className:"card-back flex flex-col justify-center items-center w-full h-full p-4 bg-primary"},O("p",{className:"text-center font-semibold text-xl text-white"},a))))},S=r.a.createElement;function C(e){var t=e.slides,n=s(r.a.useState(0),2),a=n[0],i=n[1],o=s(r.a.useState(0),2),l=o[0],u=o[1],m=r.a.useRef();return r.a.useEffect((function(){u(-100*a)}),[a]),S("section",{className:"container overflow-hidden h-full relative flex items-center justify-center"},S("div",{ref:m,className:"flex slide",style:{transform:"translateX(".concat(l,"%)")}},t.map((function(e,t){return S("img",{key:t,className:"w-full flex-shrink-0 bg-gray-200 rounded text-center py-40 object-contain",src:e})}))),S("button",{className:"p-2 absolute left-0 text-white bg-glass h-full",onClick:function(){a>0&&i(a-1)}},S(c.a,null)),S("button",{className:"p-2 absolute right-0 text-white bg-glass h-full",onClick:function(){a<t.length-1&&i(a+1)}},S(c.b,null)))}var M=r.a.createElement,T={bg:"img/sobre/bg.jpg",texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis risus sed arcu interdum, vitae interdum metus volutpat. Donec condimentum ut diam vitae efficitur. Phasellus placerat mollis lacus, consectetur porta neque consectetur lacinia. Proin dolor velit, efficitur vitae tincidunt vel, lacinia ac sem. Morbi pretium dictum purus sit amet ullamcorper. Quisque sit amet tristique lacus. Mauris lectus nibh, efficitur non nisi in, malesuada aliquam mi. Quisque laoreet, odio et dapibus tincidunt, nisl enim malesuada mi, et rutrum ante urna dictum metus.",caminhao:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."],galeria:["img/sobre/caminhao.jpg","img/sobre/aberto.jpg"]};function L(){return M("section",{id:"sobre",className:"section p-4 sm:px-6 md:px-12",style:{backgroundImage:"url(".concat(T.bg,")")}},M(E,{className:"text-white"},"Sobre a Empresa"),M("p",{className:"text-white mt-4 mb-10"},T.texto),M("div",{className:"flex flex-col justify-center text-center md:flex-row"},M("div",{className:"md:w-1/2 h-64 my-4"},M(C,{slides:T.galeria})),M("div",{className:"md:pl-6"},M(E,{className:"text-white inline"},"O Caminh\xe3o"),M("ul",{className:"text-white text-left mt-4 ml-6"},T.caminhao.map((function(e,t){return M("li",{key:t,className:"list-disc"},M("p",null,e))}))))))}var _=r.a.createElement,I=["img/clientes/generic-logo.jpg","img/clientes/generic-logo.jpg","img/clientes/generic-logo.jpg","img/clientes/generic-logo.jpg"];function R(){return _("section",{id:"clientes",className:"p-4 py-10 sm:px-6 md:px-12"},_(E,{className:"inline"},"Empresas Atendidas"),_("div",{className:"flex flex-wrap justify-between items-center py-8"},I.map((function(e,t){return _("img",{src:e,alt:"empresa parceira",key:t,className:"m-2",loading:"lazy"})}))))}var A=r.a.createElement,z={telefone:"+55(66)99719-2537",endereco:"S\xe3o Paulo - SP",CNPJ:"06.811.333/0001-87"};function q(){return A("footer",{id:"contato",className:"bg-gray px-4 pb-4 sm:px-6 md:px-12 md:pt-16"},A("section",{className:"flex flex-col justify-center items-center py-4 md:flex-row md:justify-between"},A("div",{className:"md:w-1/2"},A("img",{src:"img/logo.png",alt:"marca checkin mudan\xe7as",className:"p-4",loading:"lazy"})),A("div",{className:"md:w-1/2"},A("div",{className:"md:pl-4 md:w-3/4"},A(E,{className:"inline"},"Contato"),A("p",{className:"py-4"},"Entre em contato pelo WhatsApp e pe\xe7a seu or\xe7amento gratuitamente. Responderemos o quanto antes!"),A("div",{className:"flex"},A("i",null,A(c.d,null)),A("p",null,z.telefone)),A("p",{className:"my-2"},z.endereco),A("p",null,"CNPJ: ",z.CNPJ)))),A("p",{className:"text-center py-4"},"Checkin Mudan\xe7as . Todos os direitos reservados."))}var D=r.a.createElement,H="https://wa.me/5581999390083?text=Gostaria de uma consultoria gr\xe1tis";function J(){return D("a",{className:"fixed bottom-0 right-0 m-8 bg-secondary text-white py-4 px-8 rounded-full flex items-center z-50",href:H,target:"_blank"},D("i",{className:"mr-3 text-2xl"},D(c.d,null)),D("span",null,"Pedir or\xe7amento no WhatsApp"))}var W=r.a.createElement;function B(){return W("main",{className:"relative"},W(J,null),W(g,null),W(w,null),W(k,null),W(L,null),W(R,null),W(q,null))}},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var i,o=r(n("q1tI")),s=n("elyg"),l=(n("g/15"),n("nOHt")),c=new Map,u=window.IntersectionObserver,m={};var f=function(e,t){var n=i||(u?i=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),c.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function d(e,t,n,a){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),m[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=o.default.useState(),r=a(n,2),i=r[0],c=r[1],p=(0,l.useRouter)(),g=p&&p.pathname||"/",v=o.default.useMemo((function(){var t=(0,s.resolveHref)(g,e.href);return{href:t,as:e.as?(0,s.resolveHref)(g,e.as):t}}),[g,e.href,e.as]),h=v.href,b=v.as;o.default.useEffect((function(){if(t&&u&&i&&i.tagName&&(0,s.isLocalURL)(h)&&!m[h+"%"+b])return f(i,(function(){d(p,h,b)}))}),[t,i,h,b,p]);var y=e.children,x=e.replace,w=e.shallow,N=e.scroll;"string"===typeof y&&(y=o.default.createElement("a",null,y));var E=o.Children.only(y),O={ref:function(e){e&&c(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:i}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,h,b,x,w,N)}};return t&&(O.onMouseEnter=function(e){(0,s.isLocalURL)(h)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),d(p,h,b,{priority:!0}))}),!e.passHref&&("a"!==E.type||"href"in E.props)||(O.href=(0,s.addBasePath)(b)),o.default.cloneElement(E,O)};t.default=p},lTFH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useScrollPosition",{enumerable:!0,get:function(){return a.useScrollPosition}});var a=n("OTAv")}},[["H0SL",0,2,3,1]]]);