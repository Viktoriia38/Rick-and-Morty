"use strict";(self.webpackChunkRick_and_Morty=self.webpackChunkRick_and_Morty||[]).push([[687],{2687:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(2791),a=r(9434),i="NOT_FOUND";var c=function(e,t){return e===t};function u(e,t){var r="object"===typeof t?t:{equalityCheck:t},n=r.equalityCheck,a=void 0===n?c:n,u=r.maxSize,o=void 0===u?1:u,s=r.resultEqualityCheck,l=function(e){return function(t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var n=t.length,a=0;a<n;a++)if(!e(t[a],r[a]))return!1;return!0}}(a),f=1===o?function(e){var t;return{get:function(r){return t&&e(t.key,r)?t.value:i},put:function(e,r){t={key:e,value:r}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(e,t){var r=[];function n(e){var n=r.findIndex((function(r){return t(e,r.key)}));if(n>-1){var a=r[n];return n>0&&(r.splice(n,1),r.unshift(a)),a.value}return i}return{get:n,put:function(t,a){n(t)===i&&(r.unshift({key:t,value:a}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(o,l);function m(){var t=f.get(arguments);if(t===i){if(t=e.apply(null,arguments),s){var r=f.getEntries(),n=r.find((function(e){return s(e.value,t)}));n&&(t=n.value)}f.put(arguments,t)}return t}return m.clearCache=function(){return f.clear()},m}function o(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var r=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function s(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var i,c=0,u={memoizeOptions:void 0},s=n.pop();if("object"===typeof s&&(u=s,s=n.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=u,f=l.memoizeOptions,m=void 0===f?r:f,p=Array.isArray(m)?m:[m],h=o(n),v=e.apply(void 0,[function(){return c++,s.apply(null,arguments)}].concat(p)),d=e((function(){for(var e=[],t=h.length,r=0;r<t;r++)e.push(h[r].apply(null,arguments));return i=v.apply(null,e)}));return Object.assign(d,{resultFunc:s,memoizedResultFunc:v,dependencies:h,lastResult:function(){return i},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),d};return a}var l=s(u),f=function(e){return e.characters.filter},m=l([function(e){return e.characters.characters.listCharacters},f],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().trim().includes(t.toLowerCase())}))}));var p=r.p+"static/media/searchIcon.77cfd6eef4ae63307cd8f1813909ed96.svg",h="Filter_searchForm__o0JyC",v="Filter_searchQueryInput__CZ69F",d="Filter_searchQueryLabel__b4M32",_="Filter_filterSearchIcon__GYHln",g=r(184);var y=function(e){var t=e.onChange,r=(0,a.v9)(f);return(0,g.jsxs)("form",{className:h,children:[(0,g.jsx)("img",{src:p,className:_,alt:"Search Icon"}),(0,g.jsx)("label",{className:d,htmlFor:"",children:(0,g.jsx)("input",{onChange:t,className:v,type:"text",value:r,placeholder:"Filter by name..."})})]})},x=r(7689),j=r(1087),C={list:"CharacterItems_list__Cl0m3",item:"CharacterItems_item__yttN1",itemImage:"CharacterItems_itemImage__RpWF3",itemDescription:"CharacterItems_itemDescription__Mt0xO",itemName:"CharacterItems_itemName__9MlEM",itemSpecie:"CharacterItems_itemSpecie__atkGb"};function N(){var e=(0,a.v9)(m),t=(0,x.TH)();return(0,g.jsx)("ul",{className:C.list,children:e&&e.slice(0,8).map((function(e){return(0,g.jsx)("li",{children:(0,g.jsxs)(j.rU,{className:C.item,state:{from:t},to:"/".concat(e.id),id:e.created,children:[(0,g.jsx)("div",{className:C.itemMask,children:(0,g.jsx)("img",{className:C.itemImage,src:e.image,alt:""})}),(0,g.jsxs)("div",{className:C.itemDescription,children:[(0,g.jsx)("h2",{className:C.itemName,children:e.name.slice(0,17)}),(0,g.jsx)("p",{className:C.itemSpecie,children:e.species})]})]})},e.id)}))})}var b=r(629),k=r(3390);var I=r.p+"static/media/icon.cc4a7d1826c4c03d11cfbf42cc844bae.svg",w="HomePage_homePage__54cac",F="HomePage_homePageLayout__RgJLA",E="HomePage_homePageLogo__0Kfbe";var S=function(){var e=(0,a.v9)(f),t=(0,a.I0)();return(0,n.useEffect)((function(){t((0,b.w)())}),[t]),(0,g.jsxs)("div",{className:w,children:[(0,g.jsx)("div",{className:F,children:(0,g.jsx)("img",{src:I,className:E,alt:"Homepage Logo"})}),(0,g.jsx)(y,{onChange:function(e){var r=e.target.value;t((0,k.v)(r))},value:e}),(0,g.jsx)(N,{})]})}}}]);
//# sourceMappingURL=687.bdb5f2c2.chunk.js.map