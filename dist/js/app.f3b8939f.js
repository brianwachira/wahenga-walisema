(function(t){function e(e){for(var o,r,u=e[0],s=e[1],c=e[2],d=0,v=[];d<u.length;d++)r=u[d],a[r]&&v.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2134:function(t,e,n){var o=n("59e7");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("499e").default;a("03153985",o,!0,{})},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a={data:function(){return{addQuote:!1}},created:function(){var t=this;V.$on("addQuote",function(e){t.addQuote=e})}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("transition",{attrs:{"leave-active-class":"animated bounceOut"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.addQuote,expression:"!addQuote"}]},[n("h2",{staticClass:"text-center text-light mt-4"},[t._v(" Light fires in people's hearts")])])])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-center text-light pt-5"},[t._v("Wahenga Walisema")])])}],u=n("2455");function s(t){n("2134")}var c=!1,l=s,d="data-v-93d35330",v=null,f=Object(u["a"])(a,i,r,c,l,d,v),p=f.exports,h={data:function(){return{addQuote:!1,quote:{author:"",content:""},quotePackage:[]}},methods:{quoteAdding:function(){this.addQuote=!0,V.$emit("addQuote",this.addQuote)},displayQuote:function(){""!==this.quote.author&&""!==this.quote.content?(this.quotePackage.unshift({author:this.quote.author,content:this.quote.content}),V.$emit("quote",this.quotePackage),this.quote.author="",this.quote.content="",this.addQuote=!1):alert("No input field should be empty on submission")}}},m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{"enter-active-class":"animated bounceIn delay-2s","leave-active-class":"animated bounceOut"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.addQuote,expression:"!addQuote"}]},[n("button",{staticClass:"btn btn-primary-outline indie mt-5 mx-auto d-block",on:{click:function(e){t.quoteAdding()}}},[t._v("Add a quote")]),n("br")])]),t._v(" "),n("transition",{attrs:{"enter-active-class":"animated bounceIn delay-2s","leave-active-class":"animated fadeOut"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.addQuote,expression:"addQuote"}]},[n("label",{staticClass:" lbl text-white indie mt-3",attrs:{for:"author"}},[t._v("Author")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.quote.author,expression:"quote.author"}],staticClass:"form-control indie w-75  mx-auto d-block",attrs:{type:"text",name:"author",placeholder:"Enter the name of the author",required:""},domProps:{value:t.quote.author},on:{input:function(e){e.target.composing||t.$set(t.quote,"author",e.target.value)}}}),t._v(" "),n("label",{staticClass:"lbl text-white indie mt-3  mx-auto",attrs:{for:"author"}},[t._v("Quote")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote.content,expression:"quote.content"}],staticClass:"form-control indie w-75 mx-auto d-block",attrs:{name:"quote",cols:"30",rows:"4",placeholder:"Enter a quote",required:""},domProps:{value:t.quote.content},on:{input:function(e){e.target.composing||t.$set(t.quote,"content",e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn btn-primary-outline indie mt-5 mx-auto d-block",on:{click:function(e){t.displayQuote()}}},[t._v("submit it!")]),n("br")])])],1)},b=[];function g(t){n("a09d")}var x=!1,w=g,_="data-v-6ba07688",q=null,y=Object(u["a"])(h,m,b,x,w,_,q),Q=y.exports,O={data:function(){return{quote:null}},created:function(){var t=this;V.$on("quote",function(e){t.quote=e})},methods:{removeQuote:function(t){confirm("Do you want to delete this Quote?")&&this.quote.splice(t,1)}}},k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"text-light indie pt-5"},[t.quote?n("div",[n("transition-group",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},t._l(t.quote,function(e,o){return n("li",{key:e,on:{click:function(e){t.removeQuote(o)}}},[t._v(t._s(e.content)),n("br"),t._v(t._s(e.author))])}),0)],1):n("label",[t._v("This section needs some light")])])},j=[];function C(t){n("6dae")}var $=!1,P=C,E="data-v-902b683e",I=null,N=Object(u["a"])(O,k,j,$,P,E,I),S=N.exports,A={name:"app",components:{"head-img":p,"add-quote":Q,"quote-show":S}},M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("head-img"),t._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6  text-center"},[n("add-quote")],1),t._v(" "),n("div",{staticClass:"col-md-6"},[n("quote-show")],1)])])],1)},T=[];function F(t){n("e7be")}var L=!1,J=F,W=null,B=null,D=Object(u["a"])(A,M,T,L,J,W,B),K=D.exports;n.d(e,"serverBus",function(){return V}),o["a"].config.productionTip=!1;var V=new o["a"];new o["a"]({render:function(t){return t(K)}}).$mount("#app")},"59e7":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\nh1[data-v-93d35330]{\n    font-family: 'ZCOOL KuaiLe', cursive;\n}\nh2[data-v-93d35330]{\n    font-family: 'Indie Flower', cursive;\n}\n",""])},"62c5":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\nbutton[data-v-6ba07688]{\n  -webkit-transition-duration: 0.4s;\n          transition-duration: 0.4s;\n  border: 2px solid orange;\n  color: #f8f9fa;\n}\n.indie[data-v-6ba07688]{ \n  font-family: 'Indie Flower', cursive;\n}\nbutton[data-v-6ba07688]:hover{\n    background-color: white;\n    color: black;\n}\nd-inherit[data-v-6ba07688]{\n    display: inherit\n}\n",""])},"6dae":function(t,e,n){var o=n("78f4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("499e").default;a("3837bd9e",o,!0,{})},"78f4":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.indie[data-v-902b683e]{ \n  font-family: 'Indie Flower', cursive;\n  font-weight: bold\n}\nli[data-v-902b683e]{\n    cursor: pointer;\n}\n",""])},"98b9":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'\n#app{\n    background-image : url("http://i.imgur.com/yIeVjcQ.jpg");\n    height: 100%;\n}\n',""])},a09d:function(t,e,n){var o=n("62c5");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("499e").default;a("f2550a1e",o,!0,{})},e7be:function(t,e,n){var o=n("98b9");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("499e").default;a("474b47a6",o,!0,{})}});
//# sourceMappingURL=app.f3b8939f.js.map