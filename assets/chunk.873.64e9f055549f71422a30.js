"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[873],{873:(e,t,n)=>{function r(e,t){void 0===t&&(t=!1)
var n=e.getBoundingClientRect()
return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function o(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function i(e){var t=o(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof o(e).Element||e instanceof Element}function s(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function c(e){return"undefined"!=typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}function u(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function p(e){return r(f(e)).left+i(e).scrollLeft}function l(e){return o(e).getComputedStyle(e)}function d(e){var t=l(e),n=t.overflow,r=t.overflowX,o=t.overflowY
return/auto|scroll|overlay|hidden/.test(n+o+r)}function m(e,t,n){void 0===n&&(n=!1)
var a,c,l=s(t),m=s(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1
return 1!==n||1!==r}(t),v=f(t),h=r(e,m),g={scrollLeft:0,scrollTop:0},b={x:0,y:0}
return(l||!l&&!n)&&(("body"!==u(t)||d(v))&&(g=(a=t)!==o(a)&&s(a)?{scrollLeft:(c=a).scrollLeft,scrollTop:c.scrollTop}:i(a)),s(t)?((b=r(t,!0)).x+=t.clientLeft,b.y+=t.clientTop):v&&(b.x=p(v))),{x:h.left+g.scrollLeft-b.x,y:h.top+g.scrollTop-b.y,width:h.width,height:h.height}}function v(e){var t=r(e),n=e.offsetWidth,o=e.offsetHeight
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function h(e){return"html"===u(e)?e:e.assignedSlot||e.parentNode||(c(e)?e.host:null)||f(e)}function g(e){return["html","body","#document"].indexOf(u(e))>=0?e.ownerDocument.body:s(e)&&d(e)?e:g(h(e))}function b(e,t){var n
void 0===t&&(t=[])
var r=g(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),a=o(r),s=i?[a].concat(a.visualViewport||[],d(r)?r:[]):r,c=t.concat(s)
return i?c:c.concat(b(h(s)))}function y(e){return["table","td","th"].indexOf(u(e))>=0}function w(e){return s(e)&&"fixed"!==l(e).position?e.offsetParent:null}function O(e){for(var t=o(e),n=w(e);n&&y(n)&&"static"===l(n).position;)n=w(n)
return n&&("html"===u(n)||"body"===u(n)&&"static"===l(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox")
if(-1!==navigator.userAgent.indexOf("Trident")&&s(e)&&"fixed"===l(e).position)return null
for(var n=h(e);s(n)&&["html","body"].indexOf(u(n))<0;){var r=l(n)
if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n
n=n.parentNode}return null}(e)||t}n.r(t),n.d(t,{animateFill:()=>st,createSingleton:()=>ot,default:()=>vt,delegate:()=>at,followCursor:()=>pt,hideAll:()=>nt,inlinePositioning:()=>lt,roundArrow:()=>pe,sticky:()=>dt})
var x="top",E="bottom",C="right",T="left",A="auto",D=[x,E,C,T],j="start",L="end",k="viewport",P="popper",M=D.reduce((function(e,t){return e.concat([t+"-"+j,t+"-"+L])}),[]),R=[].concat(D,[A]).reduce((function(e,t){return e.concat([t,t+"-"+j,t+"-"+L])}),[]),B=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]
function H(e){var t=new Map,n=new Set,r=[]
function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e)
r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var S={placement:"bottom",modifiers:[],strategy:"absolute"}
function V(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var W={passive:!0}
const I={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,c=void 0===s||s,u=o(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return a&&f.forEach((function(e){e.addEventListener("scroll",n.update,W)})),c&&u.addEventListener("resize",n.update,W),function(){a&&f.forEach((function(e){e.removeEventListener("scroll",n.update,W)})),c&&u.removeEventListener("resize",n.update,W)}},data:{}}
function N(e){return e.split("-")[0]}function _(e){return e.split("-")[1]}function U(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function q(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?N(o):null,a=o?_(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2
switch(i){case x:t={x:s,y:n.y-r.height}
break
case E:t={x:s,y:n.y+n.height}
break
case C:t={x:n.x+n.width,y:c}
break
case T:t={x:n.x-r.width,y:c}
break
default:t={x:n.x,y:n.y}}var u=i?U(i):null
if(null!=u){var f="y"===u?"height":"width"
switch(a){case j:t[u]=t[u]-(n[f]/2-r[f]/2)
break
case L:t[u]=t[u]+(n[f]/2-r[f]/2)}}return t}const F={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name
t.modifiersData[n]=q({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}}
var X=Math.max,Y=Math.min,z=Math.round,$={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function J(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,c=e.position,u=e.gpuAcceleration,p=e.adaptive,d=e.roundOffsets,m=!0===d?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1
return{x:z(z(t*r)/r)||0,y:z(z(n*r)/r)||0}}(s):"function"==typeof d?d(s):s,v=m.x,h=void 0===v?0:v,g=m.y,b=void 0===g?0:g,y=s.hasOwnProperty("x"),w=s.hasOwnProperty("y"),A=T,D=x,j=window
if(p){var k=O(n),P="clientHeight",M="clientWidth"
k===o(n)&&"static"!==l(k=f(n)).position&&"absolute"===c&&(P="scrollHeight",M="scrollWidth"),k=k,i!==x&&(i!==T&&i!==C||a!==L)||(D=E,b-=k[P]-r.height,b*=u?1:-1),i!==T&&(i!==x&&i!==E||a!==L)||(A=C,h-=k[M]-r.width,h*=u?1:-1)}var R,B=Object.assign({position:c},p&&$)
return u?Object.assign({},B,((R={})[D]=w?"0":"",R[A]=y?"0":"",R.transform=(j.devicePixelRatio||1)<=1?"translate("+h+"px, "+b+"px)":"translate3d("+h+"px, "+b+"px, 0)",R)):Object.assign({},B,((t={})[D]=w?b+"px":"",t[A]=y?h+"px":"",t.transform="",t))}const G={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e]
s(o)&&u(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e]
!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{})
s(r)&&u(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]}
var K={left:"right",right:"left",bottom:"top",top:"bottom"}
function Q(e){return e.replace(/left|right|bottom|top/g,(function(e){return K[e]}))}var Z={start:"end",end:"start"}
function ee(e){return e.replace(/start|end/g,(function(e){return Z[e]}))}function te(e,t){var n=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(n&&c(n)){var r=t
do{if(r&&e.isSameNode(r))return!0
r=r.parentNode||r.host}while(r)}return!1}function ne(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function re(e,t){return t===k?ne(function(e){var t=o(e),n=f(e),r=t.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,c=0
return r&&(i=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,c=r.offsetTop)),{width:i,height:a,x:s+p(e),y:c}}(e)):s(t)?function(e){var t=r(e)
return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ne(function(e){var t,n=f(e),r=i(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=X(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=X(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-r.scrollLeft+p(e),u=-r.scrollTop
return"rtl"===l(o||n).direction&&(c+=X(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:c,y:u}}(f(e)))}function oe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ie(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ae(e,t){void 0===t&&(t={})
var n=t,o=n.placement,i=void 0===o?e.placement:o,c=n.boundary,p=void 0===c?"clippingParents":c,d=n.rootBoundary,m=void 0===d?k:d,v=n.elementContext,g=void 0===v?P:v,y=n.altBoundary,w=void 0!==y&&y,T=n.padding,A=void 0===T?0:T,j=oe("number"!=typeof A?A:ie(A,D)),L=g===P?"reference":P,M=e.rects.popper,R=e.elements[w?L:g],B=function(e,t,n){var r="clippingParents"===t?function(e){var t=b(h(e)),n=["absolute","fixed"].indexOf(l(e).position)>=0&&s(e)?O(e):e
return a(n)?t.filter((function(e){return a(e)&&te(e,n)&&"body"!==u(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],c=o.reduce((function(t,n){var r=re(e,n)
return t.top=X(r.top,t.top),t.right=Y(r.right,t.right),t.bottom=Y(r.bottom,t.bottom),t.left=X(r.left,t.left),t}),re(e,i))
return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}(a(R)?R:R.contextElement||f(e.elements.popper),p,m),H=r(e.elements.reference),S=q({reference:H,element:M,strategy:"absolute",placement:i}),V=ne(Object.assign({},M,S)),W=g===P?V:H,I={top:B.top-W.top+j.top,bottom:W.bottom-B.bottom+j.bottom,left:B.left-W.left+j.left,right:W.right-B.right+j.right},N=e.modifiersData.offset
if(g===P&&N){var _=N[i]
Object.keys(I).forEach((function(e){var t=[C,E].indexOf(e)>=0?1:-1,n=[x,E].indexOf(e)>=0?"y":"x"
I[e]+=_[n]*t}))}return I}function se(e,t,n){return X(e,Y(t,n))}function ce(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ue(e){return[x,C,E,T].some((function(t){return e[t]>=0}))}var fe=function(e){void 0===e&&(e={})
var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?S:o
return function(e,t,n){void 0===n&&(n=i)
var o,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},S,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],f=!1,p={state:c,setOptions:function(n){var o="function"==typeof n?n(c.options):n
l(),c.options=Object.assign({},i,c.options,o),c.scrollParents={reference:a(e)?b(e):e.contextElement?b(e.contextElement):[],popper:b(t)}
var s,f,d=function(e){var t=H(e)
return B.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(r,c.options.modifiers),f=s.reduce((function(e,t){var n=e[t.name]
return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(f).map((function(e){return f[e]}))))
return c.orderedModifiers=d.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect
if("function"==typeof o){var i=o({state:c,name:t,instance:p,options:r})
u.push(i||function(){})}})),p.update()},forceUpdate:function(){if(!f){var e=c.elements,t=e.reference,n=e.popper
if(V(t,n)){c.rects={reference:m(t,O(n),"fixed"===c.options.strategy),popper:v(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}))
for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,u=o.name
"function"==typeof i&&(c=i({state:c,options:s,name:u,instance:p})||c)}else c.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){l(),f=!0}}
if(!V(e,t))return p
function l(){u.forEach((function(e){return e()})),u=[]}return p.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}({defaultModifiers:[I,F,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:N(t.placement),variation:_(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,J(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,J(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},G,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=R.reduce((function(e,n){return e[n]=function(e,t,n){var r=N(e),o=[T,x].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1]
return a=a||0,s=(s||0)*o,[T,C].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name
if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,f=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,v=n.allowedAutoPlacements,h=t.options.placement,g=N(h),b=c||(g!==h&&m?function(e){if(N(e)===A)return[]
var t=Q(e)
return[ee(e),t,ee(t)]}(h):[Q(h)]),y=[h].concat(b).reduce((function(e,n){return e.concat(N(n)===A?function(e,t){void 0===t&&(t={})
var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?R:c,f=_(r),p=f?s?M:M.filter((function(e){return _(e)===f})):D,l=p.filter((function(e){return u.indexOf(e)>=0}))
0===l.length&&(l=p)
var d=l.reduce((function(t,n){return t[n]=ae(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[N(n)],t}),{})
return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:f,rootBoundary:p,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,O=t.rects.popper,L=new Map,k=!0,P=y[0],B=0;B<y.length;B++){var H=y[B],S=N(H),V=_(H)===j,W=[x,E].indexOf(S)>=0,I=W?"width":"height",U=ae(t,{placement:H,boundary:f,rootBoundary:p,altBoundary:l,padding:u}),q=W?V?C:T:V?E:x
w[I]>O[I]&&(q=Q(q))
var F=Q(q),X=[]
if(i&&X.push(U[S]<=0),s&&X.push(U[q]<=0,U[F]<=0),X.every((function(e){return e}))){P=H,k=!1
break}L.set(H,X)}if(k)for(var Y=function(e){var t=y.find((function(t){var n=L.get(t)
if(n)return n.slice(0,e).every((function(e){return e}))}))
if(t)return P=t,"break"},z=m?3:1;z>0&&"break"!==Y(z);z--);t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,f=n.altBoundary,p=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,g=ae(t,{boundary:c,rootBoundary:u,padding:p,altBoundary:f}),b=N(t.placement),y=_(t.placement),w=!y,A=U(b),D="x"===A?"y":"x",L=t.modifiersData.popperOffsets,k=t.rects.reference,P=t.rects.popper,M="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,R={x:0,y:0}
if(L){if(i||s){var B="y"===A?x:T,H="y"===A?E:C,S="y"===A?"height":"width",V=L[A],W=L[A]+g[B],I=L[A]-g[H],q=d?-P[S]/2:0,F=y===j?k[S]:P[S],z=y===j?-P[S]:-k[S],$=t.elements.arrow,J=d&&$?v($):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=G[B],Q=G[H],Z=se(0,k[S],J[S]),ee=w?k[S]/2-q-Z-K-M:F-Z-K-M,te=w?-k[S]/2+q+Z+Q+M:z+Z+Q+M,ne=t.elements.arrow&&O(t.elements.arrow),re=ne?"y"===A?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][A]:0,ie=L[A]+ee-oe-re,ce=L[A]+te-oe
if(i){var ue=se(d?Y(W,ie):W,V,d?X(I,ce):I)
L[A]=ue,R[A]=ue-V}if(s){var fe="x"===A?x:T,pe="x"===A?E:C,le=L[D],de=le+g[fe],me=le-g[pe],ve=se(d?Y(de,ie):de,le,d?X(me,ce):me)
L[D]=ve,R[D]=ve-le}}t.modifiersData[r]=R}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=N(n.placement),c=U(s),u=[T,C].indexOf(s)>=0?"height":"width"
if(i&&a){var f=function(e,t){return oe("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ie(e,D))}(o.padding,n),p=v(i),l="y"===c?x:T,d="y"===c?E:C,m=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],h=a[c]-n.rects.reference[c],g=O(i),b=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,y=m/2-h/2,w=f[l],A=b-p[u]-f[d],j=b/2-p[u]/2+y,L=se(w,j,A),k=c
n.modifiersData[r]=((t={})[k]=L,t.centerOffset=L-j,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n
null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&te(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ae(t,{elementContext:"reference"}),s=ae(t,{altBoundary:!0}),c=ce(a,r),u=ce(s,o,i),f=ue(c),p=ue(u)
t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}}]}),pe='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',le="tippy-content",de="tippy-backdrop",me="tippy-arrow",ve="tippy-svg-arrow",he={passive:!0,capture:!0},ge=function(){return document.body}
function be(e,t,n){if(Array.isArray(e)){var r=e[t]
return null==r?Array.isArray(n)?n[t]:n:r}return e}function ye(e,t){var n={}.toString.call(e)
return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function we(e,t){return"function"==typeof e?e.apply(void 0,t):e}function Oe(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)}
var n}function xe(e,t){var n=Object.assign({},e)
return t.forEach((function(e){delete n[e]})),n}function Ee(e){return[].concat(e)}function Ce(e,t){-1===e.indexOf(t)&&e.push(t)}function Te(e){return e.split("-")[0]}function Ae(e){return[].slice.call(e)}function De(e){return Object.keys(e).reduce((function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})}function je(){return document.createElement("div")}function Le(e){return["Element","Fragment"].some((function(t){return ye(e,t)}))}function ke(e){return ye(e,"MouseEvent")}function Pe(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Me(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Re(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function Be(e){var t,n=Ee(e)[0]
return(null==n||null==(t=n.ownerDocument)?void 0:t.body)?n.ownerDocument:document}function He(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}function Se(e,t){for(var n=t;n;){var r
if(e.contains(n))return!0
n=null==(r=null==n.getRootNode?void 0:n.getRootNode())?void 0:r.host}return!1}var Ve={isTouch:!1},We=0
function Ie(){Ve.isTouch||(Ve.isTouch=!0,window.performance&&document.addEventListener("mousemove",Ne))}function Ne(){var e=performance.now()
e-We<20&&(Ve.isTouch=!1,document.removeEventListener("mousemove",Ne)),We=e}function _e(){var e=document.activeElement
if(Pe(e)){var t=e._tippy
e.blur&&!t.state.isVisible&&e.blur()}}var Ue=!("undefined"==typeof window||"undefined"==typeof document||!window.msCrypto),qe=Object.assign({appendTo:ge,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),Fe=Object.keys(qe)
function Xe(e){var t=(e.plugins||[]).reduce((function(t,n){var r,o=n.name,i=n.defaultValue
return o&&(t[o]=void 0!==e[o]?e[o]:null!=(r=qe[o])?r:i),t}),{})
return Object.assign({},e,{},t)}function Ye(e,t){var n=Object.assign({},t,{content:we(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(Xe(Object.assign({},qe,{plugins:t}))):Fe).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim()
if(!r)return t
if("content"===n)t[n]=r
else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t}),{})}(e,t.plugins))
return n.aria=Object.assign({},qe.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function ze(e,t){e.innerHTML=t}function $e(e){var t=je()
return!0===e?t.className=me:(t.className=ve,Le(e)?t.appendChild(e):ze(t,e)),t}function Je(e,t){Le(t.content)?(ze(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?ze(e,t.content):e.textContent=t.content)}function Ge(e){var t=e.firstElementChild,n=Ae(t.children)
return{box:t,content:n.find((function(e){return e.classList.contains(le)})),arrow:n.find((function(e){return e.classList.contains(me)||e.classList.contains(ve)})),backdrop:n.find((function(e){return e.classList.contains(de)}))}}function Ke(e){var t=je(),n=je()
n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1")
var r=je()
function o(n,r){var o=Ge(t),i=o.box,a=o.content,s=o.arrow
r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||Je(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild($e(r.arrow))):i.appendChild($e(r.arrow)):s&&i.removeChild(s)}return r.className=le,r.setAttribute("data-state","hidden"),Je(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}Ke.$$tippy=!0
var Qe=1,Ze=[],et=[]
function tt(e,t){void 0===t&&(t={})
var n=qe.plugins.concat(t.plugins||[])
document.addEventListener("touchstart",Ie,he),window.addEventListener("blur",_e)
var r,o=Object.assign({},t,{plugins:n}),i=(r=e,Le(r)?[r]:function(e){return ye(e,"NodeList")}(r)?Ae(r):Array.isArray(r)?r:Ae(document.querySelectorAll(r))).reduce((function(e,t){var n=t&&function(e,t){var n,r,o,i,a,s,c,u,f=Ye(e,Object.assign({},qe,{},Xe(De(t)))),p=!1,l=!1,d=!1,m=!1,v=[],h=Oe(z,f.interactiveDebounce),g=Qe++,b=(u=f.plugins).filter((function(e,t){return u.indexOf(e)===t})),y={id:g,reference:e,popper:je(),popperInstance:null,props:f,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:b,clearDelayTimeouts:function(){clearTimeout(n),clearTimeout(r),cancelAnimationFrame(o)},setProps:function(t){if(!y.state.isDestroyed){R("onBeforeUpdate",[y,t]),X()
var n=y.props,r=Ye(e,Object.assign({},n,{},De(t),{ignoreAttributes:!0}))
y.props=r,F(),n.interactiveDebounce!==r.interactiveDebounce&&(S(),h=Oe(z,r.interactiveDebounce)),n.triggerTarget&&!r.triggerTarget?Ee(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded"),H(),M(),x&&x(n,r),y.popperInstance&&(K(),Z().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)}))),R("onAfterUpdate",[y,t])}},setContent:function(e){y.setProps({content:e})},show:function(){var e=y.state.isVisible,t=y.state.isDestroyed,n=!y.state.isEnabled,r=Ve.isTouch&&!y.props.touch,o=be(y.props.duration,0,qe.duration)
if(!(e||t||n||r||j().hasAttribute("disabled")||(R("onShow",[y],!1),!1===y.props.onShow(y)))){if(y.state.isVisible=!0,D()&&(O.style.visibility="visible"),M(),N(),y.state.isMounted||(O.style.transition="none"),D()){var i=k()
Me([i.box,i.content],0)}var a,c,u
s=function(){var e
if(y.state.isVisible&&!m){if(m=!0,O.offsetHeight,O.style.transition=y.props.moveTransition,D()&&y.props.animation){var t=k(),n=t.box,r=t.content
Me([n,r],o),Re([n,r],"visible")}B(),H(),Ce(et,y),null==(e=y.popperInstance)||e.forceUpdate(),y.state.isMounted=!0,R("onMount",[y]),y.props.animation&&D()&&function(e,t){U(e,(function(){y.state.isShown=!0,R("onShown",[y])}))}(o)}},c=y.props.appendTo,u=j(),(a=y.props.interactive&&c===ge||"parent"===c?u.parentNode:we(c,[u])).contains(O)||a.appendChild(O),K()}},hide:function(){var e=!y.state.isVisible,t=y.state.isDestroyed,n=!y.state.isEnabled,r=be(y.props.duration,1,qe.duration)
if(!(e||t||n)&&(R("onHide",[y],!1),!1!==y.props.onHide(y))){if(y.state.isVisible=!1,y.state.isShown=!1,m=!1,p=!1,D()&&(O.style.visibility="hidden"),S(),_(),M(),D()){var o=k(),i=o.box,a=o.content
y.props.animation&&(Me([i,a],r),Re([i,a],"hidden"))}B(),H(),y.props.animation?D()&&function(e,t){U(e,(function(){!y.state.isVisible&&O.parentNode&&O.parentNode.contains(O)&&t()}))}(r,y.unmount):y.unmount()}},hideWithInteractivity:function(e){L().addEventListener("mousemove",h),Ce(Ze,h),h(e)},enable:function(){y.state.isEnabled=!0},disable:function(){y.hide(),y.state.isEnabled=!1},unmount:function(){y.state.isVisible&&y.hide(),y.state.isMounted&&(Q(),Z().forEach((function(e){e._tippy.unmount()})),O.parentNode&&O.parentNode.removeChild(O),et=et.filter((function(e){return e!==y})),y.state.isMounted=!1,R("onHidden",[y]))},destroy:function(){y.state.isDestroyed||(y.clearDelayTimeouts(),y.unmount(),X(),delete e._tippy,y.state.isDestroyed=!0,R("onDestroy",[y]))}}
if(!f.render)return y
var w=f.render(y),O=w.popper,x=w.onUpdate
O.setAttribute("data-tippy-root",""),O.id="tippy-"+y.id,y.popper=O,e._tippy=y,O._tippy=y
var E=b.map((function(e){return e.fn(y)})),C=e.hasAttribute("aria-expanded")
return F(),H(),M(),R("onCreate",[y]),f.showOnCreate&&ee(),O.addEventListener("mouseenter",(function(){y.props.interactive&&y.state.isVisible&&y.clearDelayTimeouts()})),O.addEventListener("mouseleave",(function(){y.props.interactive&&y.props.trigger.indexOf("mouseenter")>=0&&L().addEventListener("mousemove",h)})),y
function T(){var e=y.props.touch
return Array.isArray(e)?e:[e,0]}function A(){return"hold"===T()[0]}function D(){var e
return!!(null==(e=y.props.render)?void 0:e.$$tippy)}function j(){return c||e}function L(){var e=j().parentNode
return e?Be(e):document}function k(){return Ge(O)}function P(e){return y.state.isMounted&&!y.state.isVisible||Ve.isTouch||i&&"focus"===i.type?0:be(y.props.delay,e?0:1,qe.delay)}function M(){O.style.pointerEvents=y.props.interactive&&y.state.isVisible?"":"none",O.style.zIndex=""+y.props.zIndex}function R(e,t,n){var r
void 0===n&&(n=!0),E.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n&&(r=y.props)[e].apply(r,t)}function B(){var t=y.props.aria
if(t.content){var n="aria-"+t.content,r=O.id
Ee(y.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n)
if(y.state.isVisible)e.setAttribute(n,t?t+" "+r:r)
else{var o=t&&t.replace(r,"").trim()
o?e.setAttribute(n,o):e.removeAttribute(n)}}))}}function H(){!C&&y.props.aria.expanded&&Ee(y.props.triggerTarget||e).forEach((function(e){y.props.interactive?e.setAttribute("aria-expanded",y.state.isVisible&&e===j()?"true":"false"):e.removeAttribute("aria-expanded")}))}function S(){L().removeEventListener("mousemove",h),Ze=Ze.filter((function(e){return e!==h}))}function V(e){if(!Ve.isTouch||!d&&"mousedown"!==e.type){var t=e.composedPath&&e.composedPath()[0]||e.target
if(!y.props.interactive||!Se(O,t)){if(Se(j(),t)){if(Ve.isTouch)return
if(y.state.isVisible&&y.props.trigger.indexOf("click")>=0)return}else R("onClickOutside",[y,e])
!0===y.props.hideOnClick&&(y.clearDelayTimeouts(),y.hide(),l=!0,setTimeout((function(){l=!1})),y.state.isMounted||_())}}}function W(){d=!0}function I(){d=!1}function N(){var e=L()
e.addEventListener("mousedown",V,!0),e.addEventListener("touchend",V,he),e.addEventListener("touchstart",I,he),e.addEventListener("touchmove",W,he)}function _(){var e=L()
e.removeEventListener("mousedown",V,!0),e.removeEventListener("touchend",V,he),e.removeEventListener("touchstart",I,he),e.removeEventListener("touchmove",W,he)}function U(e,t){var n=k().box
function r(e){e.target===n&&(He(n,"remove",r),t())}if(0===e)return t()
He(n,"remove",a),He(n,"add",r),a=r}function q(t,n,r){void 0===r&&(r=!1),Ee(y.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),v.push({node:e,eventType:t,handler:n,options:r})}))}function F(){var e
A()&&(q("touchstart",Y,{passive:!0}),q("touchend",$,{passive:!0})),(e=y.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(q(e,Y),e){case"mouseenter":q("mouseleave",$)
break
case"focus":q(Ue?"focusout":"blur",J)
break
case"focusin":q("focusout",J)}}))}function X(){v.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options
t.removeEventListener(n,r,o)})),v=[]}function Y(e){var t,n=!1
if(y.state.isEnabled&&!G(e)&&!l){var r="focus"===(null==(t=i)?void 0:t.type)
i=e,c=e.currentTarget,H(),!y.state.isVisible&&ke(e)&&Ze.forEach((function(t){return t(e)})),"click"===e.type&&(y.props.trigger.indexOf("mouseenter")<0||p)&&!1!==y.props.hideOnClick&&y.state.isVisible?n=!0:ee(e),"click"===e.type&&(p=!n),n&&!r&&te(e)}}function z(e){var t=e.target,n=j().contains(t)||O.contains(t)
if("mousemove"!==e.type||!n){var r=Z().concat(O).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state
return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:f}:null})).filter(Boolean);(function(e,t){var n=t.clientX,r=t.clientY
return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props.interactiveBorder,a=Te(o.placement),s=o.modifiersData.offset
if(!s)return!0
var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,f="right"===a?s.left.x:0,p="left"===a?s.right.x:0,l=t.top-r+c>i,d=r-t.bottom-u>i,m=t.left-n+f>i,v=n-t.right-p>i
return l||d||m||v}))})(r,e)&&(S(),te(e))}}function $(e){G(e)||y.props.trigger.indexOf("click")>=0&&p||(y.props.interactive?y.hideWithInteractivity(e):te(e))}function J(e){y.props.trigger.indexOf("focusin")<0&&e.target!==j()||y.props.interactive&&e.relatedTarget&&O.contains(e.relatedTarget)||te(e)}function G(e){return!!Ve.isTouch&&A()!==e.type.indexOf("touch")>=0}function K(){Q()
var t=y.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,c=D()?Ge(O).arrow:null,u=i?{getBoundingClientRect:i,contextElement:i.contextElement||j()}:e,f=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state
if(D()){var n=k().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}]
D()&&c&&f.push({name:"arrow",options:{element:c,padding:3}}),f.push.apply(f,(null==n?void 0:n.modifiers)||[]),y.popperInstance=fe(u,O,Object.assign({},n,{placement:r,onFirstUpdate:s,modifiers:f}))}function Q(){y.popperInstance&&(y.popperInstance.destroy(),y.popperInstance=null)}function Z(){return Ae(O.querySelectorAll("[data-tippy-root]"))}function ee(e){y.clearDelayTimeouts(),e&&R("onTrigger",[y,e]),N()
var t=P(!0),r=T(),o=r[0],i=r[1]
Ve.isTouch&&"hold"===o&&i&&(t=i),t?n=setTimeout((function(){y.show()}),t):y.show()}function te(e){if(y.clearDelayTimeouts(),R("onUntrigger",[y,e]),y.state.isVisible){if(!(y.props.trigger.indexOf("mouseenter")>=0&&y.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&p)){var t=P(!1)
t?r=setTimeout((function(){y.state.isVisible&&y.hide()}),t):o=requestAnimationFrame((function(){y.hide()}))}}else _()}}(t,o)
return n&&e.push(n),e}),[])
return Le(e)?i[0]:i}tt.defaultProps=qe,tt.setDefaultProps=function(e){Object.keys(e).forEach((function(t){qe[t]=e[t]}))},tt.currentInput=Ve
var nt=function(e){var t=void 0===e?{}:e,n=t.exclude,r=t.duration
et.forEach((function(e){var t=!1
if(n&&(t=Pe(n)?e.reference===n:e.popper===n.popper),!t){var o=e.props.duration
e.setProps({duration:r}),e.hide(),e.state.isDestroyed||e.setProps({duration:o})}}))},rt=Object.assign({},G,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}}),ot=function(e,t){var n
void 0===t&&(t={})
var r,o=e,i=[],a=t.overrides,s=[],c=!1
function u(){i=o.map((function(e){return e.reference}))}function f(e){o.forEach((function(t){e?t.enable():t.disable()}))}function p(e){return o.map((function(t){var n=t.setProps
return t.setProps=function(o){n(o),t.reference===r&&e.setProps(o)},function(){t.setProps=n}}))}function l(e,t){var n=i.indexOf(t)
if(t!==r){r=t
var s=(a||[]).concat("content").reduce((function(e,t){return e[t]=o[n].props[t],e}),{})
e.setProps(Object.assign({},s,{getReferenceClientRect:"function"==typeof s.getReferenceClientRect?s.getReferenceClientRect:function(){return t.getBoundingClientRect()}}))}}f(!1),u()
var d={fn:function(){return{onDestroy:function(){f(!0)},onHidden:function(){r=null},onClickOutside:function(e){e.props.showOnCreate&&!c&&(c=!0,r=null)},onShow:function(e){e.props.showOnCreate&&!c&&(c=!0,l(e,i[0]))},onTrigger:function(e,t){l(e,t.currentTarget)}}}},m=tt(je(),Object.assign({},xe(t,["overrides"]),{plugins:[d].concat(t.plugins||[]),triggerTarget:i,popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat((null==(n=t.popperOptions)?void 0:n.modifiers)||[],[rt])})})),v=m.show
m.show=function(e){if(v(),!r&&null==e)return l(m,i[0])
if(!r||null!=e){if("number"==typeof e)return i[e]&&l(m,i[e])
if(o.indexOf(e)>=0){var t=e.reference
return l(m,t)}return i.indexOf(e)>=0?l(m,e):void 0}},m.showNext=function(){var e=i[0]
if(!r)return m.show(0)
var t=i.indexOf(r)
m.show(i[t+1]||e)},m.showPrevious=function(){var e=i[i.length-1]
if(!r)return m.show(e)
var t=i.indexOf(r),n=i[t-1]||e
m.show(n)}
var h=m.setProps
return m.setProps=function(e){a=e.overrides||a,h(e)},m.setInstances=function(e){f(!0),s.forEach((function(e){return e()})),o=e,f(!1),u(),s=p(m),m.setProps({triggerTarget:i})},s=p(m),m},it={mouseover:"mouseenter",focusin:"focus",click:"click"}
function at(e,t){var n=[],r=[],o=!1,i=t.target,a=xe(t,["target"]),s=Object.assign({},a,{trigger:"manual",touch:!1}),c=Object.assign({},qe,{},a,{showOnCreate:!0}),u=tt(e,s)
function f(e){if(e.target&&!o){var n=e.target.closest(i)
if(n){var a=n.getAttribute("data-tippy-trigger")||t.trigger||qe.trigger
if(!n._tippy&&!("touchstart"===e.type&&"boolean"==typeof c.touch||"touchstart"!==e.type&&a.indexOf(it[e.type])<0)){var s=tt(n,c)
s&&(r=r.concat(s))}}}}function p(e,t,r,o){void 0===o&&(o=!1),e.addEventListener(t,r,o),n.push({node:e,eventType:t,handler:r,options:o})}return Ee(u).forEach((function(e){var t=e.destroy,i=e.enable,a=e.disable
e.destroy=function(e){void 0===e&&(e=!0),e&&r.forEach((function(e){e.destroy()})),r=[],n.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options
t.removeEventListener(n,r,o)})),n=[],t()},e.enable=function(){i(),r.forEach((function(e){return e.enable()})),o=!1},e.disable=function(){a(),r.forEach((function(e){return e.disable()})),o=!0},function(e){var t=e.reference
p(t,"touchstart",f,he),p(t,"mouseover",f),p(t,"focusin",f),p(t,"click",f)}(e)})),u}var st={name:"animateFill",defaultValue:!1,fn:function(e){var t
if(!(null==(t=e.props.render)?void 0:t.$$tippy))return{}
var n=Ge(e.popper),r=n.box,o=n.content,i=e.props.animateFill?function(){var e=je()
return e.className=de,Re([e],"hidden"),e}():null
return{onCreate:function(){i&&(r.insertBefore(i,r.firstElementChild),r.setAttribute("data-animatefill",""),r.style.overflow="hidden",e.setProps({arrow:!1,animation:"shift-away"}))},onMount:function(){if(i){var e=r.style.transitionDuration,t=Number(e.replace("ms",""))
o.style.transitionDelay=Math.round(t/10)+"ms",i.style.transitionDuration=e,Re([i],"visible")}},onShow:function(){i&&(i.style.transitionDuration="0ms")},onHide:function(){i&&Re([i],"hidden")}}}},ct={clientX:0,clientY:0},ut=[]
function ft(e){var t=e.clientX,n=e.clientY
ct={clientX:t,clientY:n}}var pt={name:"followCursor",defaultValue:!1,fn:function(e){var t=e.reference,n=Be(e.props.triggerTarget||t),r=!1,o=!1,i=!0,a=e.props
function s(){return"initial"===e.props.followCursor&&e.state.isVisible}function c(){n.addEventListener("mousemove",p)}function u(){n.removeEventListener("mousemove",p)}function f(){r=!0,e.setProps({getReferenceClientRect:null}),r=!1}function p(n){var r=!n.target||t.contains(n.target),o=e.props.followCursor,i=n.clientX,a=n.clientY,s=t.getBoundingClientRect(),c=i-s.left,u=a-s.top
!r&&e.props.interactive||e.setProps({getReferenceClientRect:function(){var e=t.getBoundingClientRect(),n=i,r=a
"initial"===o&&(n=e.left+c,r=e.top+u)
var s="horizontal"===o?e.top:r,f="vertical"===o?e.right:n,p="horizontal"===o?e.bottom:r,l="vertical"===o?e.left:n
return{width:f-l,height:p-s,top:s,right:f,bottom:p,left:l}}})}function l(){e.props.followCursor&&(ut.push({instance:e,doc:n}),function(e){e.addEventListener("mousemove",ft)}(n))}function d(){0===(ut=ut.filter((function(t){return t.instance!==e}))).filter((function(e){return e.doc===n})).length&&function(e){e.removeEventListener("mousemove",ft)}(n)}return{onCreate:l,onDestroy:d,onBeforeUpdate:function(){a=e.props},onAfterUpdate:function(t,n){var i=n.followCursor
r||void 0!==i&&a.followCursor!==i&&(d(),i?(l(),!e.state.isMounted||o||s()||c()):(u(),f()))},onMount:function(){e.props.followCursor&&!o&&(i&&(p(ct),i=!1),s()||c())},onTrigger:function(e,t){ke(t)&&(ct={clientX:t.clientX,clientY:t.clientY}),o="focus"===t.type},onHidden:function(){e.props.followCursor&&(f(),u(),i=!0)}}}},lt={name:"inlinePositioning",defaultValue:!1,fn:function(e){var t,n=e.reference,r=-1,o=!1,i=[],a={name:"tippyInlinePositioning",enabled:!0,phase:"afterWrite",fn:function(o){var a=o.state
e.props.inlinePositioning&&(-1!==i.indexOf(a.placement)&&(i=[]),t!==a.placement&&-1===i.indexOf(a.placement)&&(i.push(a.placement),e.setProps({getReferenceClientRect:function(){return function(e){return function(e,t,n,r){if(n.length<2||null===e)return t
if(2===n.length&&r>=0&&n[0].left>n[1].right)return n[r]||t
switch(e){case"top":case"bottom":var o=n[0],i=n[n.length-1],a="top"===e,s=o.top,c=i.bottom,u=a?o.left:i.left,f=a?o.right:i.right
return{top:s,bottom:c,left:u,right:f,width:f-u,height:c-s}
case"left":case"right":var p=Math.min.apply(Math,n.map((function(e){return e.left}))),l=Math.max.apply(Math,n.map((function(e){return e.right}))),d=n.filter((function(t){return"left"===e?t.left===p:t.right===l})),m=d[0].top,v=d[d.length-1].bottom
return{top:m,bottom:v,left:p,right:l,width:l-p,height:v-m}
default:return t}}(Te(e),n.getBoundingClientRect(),Ae(n.getClientRects()),r)}(a.placement)}})),t=a.placement)}}
function s(){var t
o||(t=function(e,t){var n
return{popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat(((null==(n=e.popperOptions)?void 0:n.modifiers)||[]).filter((function(e){return e.name!==t.name})),[t])})}}(e.props,a),o=!0,e.setProps(t),o=!1)}return{onCreate:s,onAfterUpdate:s,onTrigger:function(t,n){if(ke(n)){var o=Ae(e.reference.getClientRects()),i=o.find((function(e){return e.left-2<=n.clientX&&e.right+2>=n.clientX&&e.top-2<=n.clientY&&e.bottom+2>=n.clientY})),a=o.indexOf(i)
r=a>-1?a:r}},onHidden:function(){r=-1}}}},dt={name:"sticky",defaultValue:!1,fn:function(e){var t=e.reference,n=e.popper
function r(t){return!0===e.props.sticky||e.props.sticky===t}var o=null,i=null
function a(){var s=r("reference")?(e.popperInstance?e.popperInstance.state.elements.reference:t).getBoundingClientRect():null,c=r("popper")?n.getBoundingClientRect():null;(s&&mt(o,s)||c&&mt(i,c))&&e.popperInstance&&e.popperInstance.update(),o=s,i=c,e.state.isMounted&&requestAnimationFrame(a)}return{onMount:function(){e.props.sticky&&a()}}}}
function mt(e,t){return!e||!t||e.top!==t.top||e.right!==t.right||e.bottom!==t.bottom||e.left!==t.left}tt.setDefaultProps({render:Ke})
const vt=tt}}])
