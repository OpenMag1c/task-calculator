/*! For license information please see 1.bundle.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{70:function(n,t,e){var r=e(71),o=e(72),i=e(73);n.exports=function(n,t){return r(n)||o(n,t)||i()}},71:function(n,t){n.exports=function(n){if(Array.isArray(n))return n}},72:function(n,t){n.exports=function(n,t){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}}},73:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},74:function(n,t,e){var r=e(75),o=e(76),i=e(77);n.exports=function(n){return r(n)||o(n)||i()}},75:function(n,t){n.exports=function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}},76:function(n,t){n.exports=function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}},77:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},79:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(16),u=e.n(i),a=e(2);function c(){var n=u()(["\n    height: 60%;\n    width: 100%;\n  "]);return c=function(){return n},n}function s(){var n=u()(["\n    padding: 0;\n  "]);return s=function(){return n},n}var l=a.d.div.withConfig({displayName:"components__Home",componentId:"t1fcg3-0"})(["width:100%;height:100%;display:flex;align-items:flex-start;flex-wrap:wrap;padding:10px 0 10px 10px;",";"],(function(n){return n.theme.below.xs(s())})),f=a.d.div.withConfig({displayName:"components__ControlPanel",componentId:"t1fcg3-1"})(["width:80%;height:100%;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;",";"],(function(n){return n.theme.below.xs(c())}));a.d.h3.withConfig({displayName:"components__Heading",componentId:"t1fcg3-2"})([""]);function m(){var n=u()(["\n    font-size: ","px;\n  "]);return m=function(){return n},n}var h=a.d.span.withConfig({displayName:"components__StyledInput",componentId:"sc-17khll6-0"})(["min-height:50px;height:10%;width:100%;color:",";font-size:","px;background-color:transparent;text-align:right;outline:none;border:none;",";"],(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes[7]}),(function(n){return n.theme.below.xs(m(),(function(n){return n.theme.fontSizes[6]}))})),p=function(n){var t=n.text;return o.a.createElement(h,null,t)},d=a.d.div.withConfig({displayName:"components__Panel",componentId:"sc-100uy2m-0"})(["width:100%;flex:1;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;border-top:1px solid ",";"],(function(n){return n.theme.colors.black}));function g(){var n=u()(["\n    height: 7rem;\n    width: 7rem;\n    margin: 0.5rem 1.5rem;\n    font-size: ","px;\n  "]);return g=function(){return n},n}function y(){var n=u()(["\n    height: 6.5rem;\n    width: 6.5rem;\n    margin: 0.5rem 1.3rem;\n    font-size: ","px;\n  "]);return y=function(){return n},n}function b(){var n=u()(["\n    height: 5rem;\n    width: 5rem;\n    margin: 0 1rem;\n    font-size: ","px;\n  "]);return b=function(){return n},n}function v(){var n=u()(["\n    height: 4.5rem;\n    width: 4.5rem;\n    margin: 0 0.5rem;\n    border-radius: 1rem;\n    font-size: ","px;\n  "]);return v=function(){return n},n}var w=a.d.button.withConfig({displayName:"ControlButton",componentId:"sc-1703iki-0"})(["height:4rem;width:4rem;margin:0.4rem;flex-basis:14%;border:1px solid ",";border-radius:0.5rem;background-color:",";font-size:","px;box-shadow:inset -0.5rem -0.5rem 0.5rem ",";transition:0.2s all;color:",";",";",";",";",";&:hover{cursor:pointer;background-color:",";box-shadow:inset -0.5rem -0.5rem 0.5rem ",";}"],(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.light}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.colors.lightGray}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.above.xs(v(),(function(n){return n.theme.fontSizes[4]}))}),(function(n){return n.theme.above.small(b(),(function(n){return n.theme.fontSizes[5]}))}),(function(n){return n.theme.above.med(y(),(function(n){return n.theme.fontSizes[6]}))}),(function(n){return n.theme.above.large(g(),(function(n){return n.theme.fontSizes[6]}))}),(function(n){return n.theme.colors.lightGray}),(function(n){return n.theme.colors.light})),x=["C","7","8","9","*","-","4","5","6","/","+","1","2","3","=",".","(","0",")","CE"],k=["+","-","*","/"],S=o.a.memo((function(n){var t=n.onPressKey;return o.a.createElement(d,null,x.map((function(n){return o.a.createElement(w,{key:n,type:"button","data-key":n,onClick:t},n)})))}));function C(){var n=u()(["\n    margin-left: 0;\n    height: 40%;\n  "]);return C=function(){return n},n}var E,z=a.d.div.withConfig({displayName:"components__ScrollDiv",componentId:"sc-1iea9iy-0"})(["margin-left:10px;flex:1;height:100%;align-items:center;border-left:1px solid ",";overflow-y:scroll;::-webkit-scrollbar{width:0.5rem;height:1rem;background-color:transparent;}::-webkit-scrollbar-thumb{background-color:",";border-radius:9em;}",";"],(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.below.xs(C())})),_=a.d.h4.withConfig({displayName:"components__Title",componentId:"sc-1iea9iy-1"})(["width:100%;padding:0.5rem;color:",";text-align:center;"],(function(n){return n.theme.colors.black})),I=a.d.button.withConfig({displayName:"components__HistoryButton",componentId:"sc-1iea9iy-2"})(["width:100%;min-height:3rem;outline:none;color:",";border:none;font-size:","px;background-color:transparent;transition:0.2s all;cursor:pointer;&:hover{box-shadow:inset 0 0 0.3rem ",";}"],(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.colors.black})),N=e(7),j=o.a.memo((function(n){var t=n.history,e=n.setExample,r=n.updateHistory;return o.a.createElement(z,null,o.a.createElement(_,null,N.d),t.map((function(n){return o.a.createElement(I,{type:"button",key:n.id,onClick:function(){return function(n){e(n.example)}(n)}},n.example)})),t.length>0&&o.a.createElement(I,{type:"button",onClick:function(){r([])}},N.b))})),A=e(74),O=e.n(A),H=e(70),R=e.n(H),P=e(17),V=e.n(P),J=e(18),K=e.n(J),T=new Uint8Array(16);function F(){if(!E&&!(E="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(T)}var M=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var U=function(n){return"string"==typeof n&&M.test(n)},B=[],D=0;D<256;++D)B.push((D+256).toString(16).substr(1));var G=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(B[n[t+0]]+B[n[t+1]]+B[n[t+2]]+B[n[t+3]]+"-"+B[n[t+4]]+B[n[t+5]]+"-"+B[n[t+6]]+B[n[t+7]]+"-"+B[n[t+8]]+B[n[t+9]]+"-"+B[n[t+10]]+B[n[t+11]]+B[n[t+12]]+B[n[t+13]]+B[n[t+14]]+B[n[t+15]]).toLowerCase();if(!U(e))throw TypeError("Stringified UUID is invalid");return e};var L=function(n,t,e){var r=(n=n||{}).random||(n.rng||F)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){e=e||0;for(var o=0;o<16;++o)t[e+o]=r[o];return t}return G(r)};var Y=function(n,t){var e=Math.pow(10,t);return Math.trunc(Math.round(n*e))/e};function $(n,t){return n+t}function q(n,t){return n-t}function Q(n,t){return n*t}function W(n,t){return n/t}var X=function n(t){V()(this,n),this.execute=t},Z=function(n){switch(n){case"*":return new X(Q);case"/":return new X(W);case"+":return new X($);case"-":return new X(q)}},nn=function(){function n(t,e){V()(this,n),this.numbers=t,this.operations=e,this.commands=[]}return K()(n,[{key:"execute",value:function(n,t){var e=new Z(n);this.numbers[t]=e.execute(this.numbers[t],this.numbers[t+1]),this.numbers.splice(t+1,1),this.operations.splice(t,1),this.commands.push(e)}},{key:"getResult",value:function(){return this.numbers[0].toString()}}]),n}(),tn=function(n){var t=function(n){for(var t=[],e=[],r="",o=0;o<n.length;o++)"-"!==n[o]||isFinite(n[o-1])?k.includes(n[o])?(t.push(n[o]),r&&(e.push(Number(r)),r="")):"("!==n[o]&&")"!==n[o]&&(r+=n[o]):r+=n[o];return e.push(Number(r)),{operations:t,numbers:e}}(n),e=t.numbers,r=t.operations,o=new nn(e,r);return rn(o)},en=function(n){for(var t=1;t<n.length;t++)"("===n[t]&&isFinite(n[t-1])&&(n=n.slice(0,t)+"*"+n.slice(t),t++);return n},rn=function(n){for(var t=n.operations,e=0;e<t.length;)"*"!==t[e]&&"/"!==t[e]?e++:n.execute(t[e],e);for(var r=0;r<t.length;)"+"!==t[r]&&"-"!==t[r]?r++:n.execute(t[r],r);return n.getResult()},on=function(n){n="("+(n=en(n))+")";for(var t=[];"("===n[0]&&")"===n[n.length-1];)for(var e=0;e<n.length;e++)if("("===n[e]&&t.push(e),")"===n[e]){var r=t.pop(),o=tn(n.slice(r+1,e));n=n.slice(0,r)+o+n.slice(e+1);break}return Y(tn(n),3)},un=function(){function n(t){V()(this,n),this.id=L(),this.example=t}return K()(n,[{key:"calculate",value:function(){return on(this.example)}}]),n}(),an=function(n,t){if("CE"===t)return"";if("C"===t)return n.slice(0,-1);var e=n[n.length-1];if(k.includes(t)){if(!e&&"-"!==t&&"+"!==t)return n;if(k.includes(e))return n.slice(0,-1)+t}return"."===e&&"."===t?n:n+t},cn=e(10),sn=function(){var n=Object(r.useState)(""),t=R()(n,2),e=t[0],o=t[1],i=Object(r.useState)((function(){return n=window.localStorage.getItem(cn.a.history),JSON.parse(n)||[];var n})),u=R()(i,2),a=u[0],c=u[1],s=Object(r.useCallback)((function(n){n.persist();var t=n.target.dataset.key;if("="===t){var r=new un(e),i=r.calculate();isFinite(i)?(o(i.toString()),l([].concat(O()(a),[r]))):(alert("Smth is wrong, You've got ".concat(i)),o(""))}else o(an(e,t))}),[e,a]),l=function(n){c(n),function(n){var t=JSON.stringify(n);window.localStorage.setItem(cn.a.history,t)}(n)};return{example:e,setExample:o,history:a,updateHistory:l,onPressKey:s}};t.default=function(){var n=sn(),t=n.example,e=n.setExample,r=n.history,i=n.updateHistory,u=n.onPressKey;return o.a.createElement(l,null,o.a.createElement(f,null,o.a.createElement(p,{text:t}),o.a.createElement(S,{onPressKey:u})),o.a.createElement(j,{history:r,setExample:e,updateHistory:i}))}}}]);