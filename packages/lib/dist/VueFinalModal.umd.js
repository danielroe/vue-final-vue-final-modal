!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal={},e.Vue)}(this,(function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n,o,r,i,a){try{var l=e[i](a),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(o,r)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var f="enter",v="entering",p="leave",m="leavng",y=function(){var e=t.ref(null),n={beforeEnter:function(){e.value=v},afterEnter:function(){e.value=f},beforeLeave:function(){e.value=m},afterLeave:function(){e.value=p}};return{state:e,listeners:n}},h=function(e){return function(e,t){return c(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},b=function(e){return e==document.activeElement},g=function(){function e(){a(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this)}return u(e,[{key:"lastElement",get:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",get:function(){return this.elements[0]||null}},{key:"isEnabled",get:function(){return!!this.root}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||b(this.lastElement)?(this.firstElement.focus(),void e.preventDefault()):void 0;b(this.firstElement)&&(this.lastElement.focus(),e.preventDefault())}}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=h(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}]),e}(),w=null;function x(e){var n=e.props,o=e.vfmContainer,r=e.modalTransitionState;return null==w&&(w=new g),t.watch(r,(function(e){switch(e){case f:(n.focusRetain||n.focusTrap)&&o.value.focus(),n.focusTrap&&w.enable(o.value);break;case m:w.enabled&&w.disable()}})),{focusTrap:w}}var S={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},k=function(e){var t=e.targetTouches?e.targetTouches[0]:e;return{x:t.clientX,y:t.clientY}},z=function(e,t,n){return"number"!=typeof e&&(e=Math.min(t,n)||t),"number"!=typeof n&&(n=Math.max(t,e)),Math.min(Math.max(t,e),n)},E=function(e){return e&&Number(e.replace(/px$/,""))||0},M={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},C=function(e,t,n){t&&t.addEventListener(M[e].pc,n),t&&t.addEventListener(M[e].m,n,{passive:!1})},T=function(e,t,n){t&&t.removeEventListener(M[e].pc,n),t&&t.removeEventListener(M[e].m,n)};function O(e){var n=e.props,r=e.visible,i=e.vfmContainer,a=e.vfmContent,l=e.vfmResize,u=e.modalTransitionState,d=e.onEvent,v=void 0===d?function(){}:d,m=t.ref(!1),y=t.ref(null),h=t.ref({});function b(e){e.stopPropagation();var t,r="resize",l="drag",u=e.target.getAttribute("direction");if(u)t=r;else{if(!function(e,t,n){return""===n||c(t.querySelectorAll(n)).includes(e.target)}(e,a.value,n.dragSelector))return;t=l}y.value="".concat(t,":start"),null==v||v(e);var d,f,p,m,b=k(e),g=i.value.getBoundingClientRect(),w=a.value.getBoundingClientRect(),x="absolute"===window.getComputedStyle(a.value).position,M=E(h.value.top),O=E(h.value.left),B=function(){if(n.fitParent){var e={absolute:function(){return{minTop:0,minLeft:0,maxTop:g.height-w.height,maxLeft:g.width-w.width}},relative:function(){return{minTop:M+g.top-w.top,minLeft:O+g.left-w.left,maxTop:M+g.bottom-w.bottom,maxLeft:O+g.right-w.right}}};return x?e.absolute():e.relative()}return{}}(),V=t===r&&(d=document.body,f="cursor",p=S[u],m=d.style[f],d.style[f]=p,function(){d.style[f]=m}),_=function(e){e.stopPropagation(),y.value="".concat(t,":move"),null==v||v(e);var i,a,d=k(e),f={x:d.x-b.x,y:d.y-b.y};t===r&&(f=function(e,t,r,i,a){var l=function(e){var o,r=t[e.axis];r=n.fitParent?z(e.min,r,e.max):r;var i=z(e.minEdge,e.getEdge(r),e.maxEdge);return r=e.getOffsetAxis(i,a),s(o={},e.edgeName,i),s(o,e.axis,r),o},u=function(e,t,o,a){var l,u=i[t],s=r[e]-i[e],c=(l=t).charAt(0).toUpperCase()+l.slice(1);return{axis:o,edgeName:t,min:a?s:-u,max:a?u:s,minEdge:n["min".concat(c)],maxEdge:n["max".concat(c)],getEdge:function(e){return i[t]-e*(a?1:-1)},getOffsetAxis:function(e,n){var o=i[t]-e;return n?a?o:0:(a?1:-1)*o/2}}},d={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]},f={x:0,y:0};return e.split("").forEach((function(e){var t=u.apply(void 0,c(d[e]));f=o(o({},f),l(t))})),f}(u,f,g,w,x)),x?(i=w.top-g.top+f.y,a=w.left-g.left+f.x):(i=M+f.y,a=O+f.x),t===l&&n.fitParent&&(i=z(B.minTop,i,B.maxTop),a=z(B.minLeft,a,B.maxLeft));var p=o(o(o({position:"relative",top:i+"px",left:a+"px",margin:"unset",touchAction:"none"},x&&{position:"absolute",transform:"unset",width:w.width+"px",height:w.height+"px"}),f.width&&{width:f.width+"px"}),f.height&&{height:f.height+"px"});h.value=o(o({},h.value),p)};C("move",document,_),C("up",document,(function e(n){n.stopPropagation(),t===r&&V&&V(),setTimeout((function(){y.value="".concat(t,":end"),null==v||v(n)})),T("move",document,_),T("up",document,e)}))}function g(){C("down",a.value,b),h.value.touchAction="none"}function w(){T("down",a.value,b)}function x(){m.value=!0,t.nextTick((function(){C("down",l.value,b)}))}function M(){T("down",l.value,b),m.value=!1}return t.watch(u,(function(e){switch(e){case f:n.drag&&g(),n.resize&&x();break;case p:n.keepChangedStyle||(h.value={})}})),t.watch((function(){return n.drag}),(function(e){r.value&&(e?g():w())})),t.watch((function(){return n.resize}),(function(e){r.value&&(e?x():M())})),t.watch((function(){return n.keepChangedStyle}),(function(e){e||(h.value={})})),{resizeVisible:m,state:y,dragResizeStyle:h,removeDragDown:w,removeResizeDown:M}}var B=!1;if("undefined"!=typeof window){var V={get passive(){B=!0}};window.addEventListener("testPassive",null,V),window.removeEventListener("testPassive",null,V)}var _,A,P="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),j=[],L=!1,D=0,N=-1,I=function(e,t){var n=!1;return function(e){for(var t=[];e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,t){return!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0)}(e,t)&&(n=!0)})),n},R=function(e){return j.some((function(){return I(e,-D)}))},H=function(e){var t=e||window.event;return!!R(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},F=function(e,t){if(e){if(!j.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};j=[].concat(c(j),[n]),P?(e.ontouchstart=function(e){1===e.targetTouches.length&&(N=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){D=e.targetTouches[0].clientY-N,!R(e.target)&&(t&&0===t.scrollTop&&D>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&D<0?H(e):e.stopPropagation())}(t,e)},L||(document.addEventListener("touchmove",H,B?{passive:!1}:void 0),L=!0)):function(e){if(void 0===A){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);A=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+n,"px")}}void 0===_&&(_=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},$=function(e){e?(j=j.filter((function(t){return t.targetElement!==e})),P?(e.ontouchstart=null,e.ontouchmove=null,L&&0===j.length&&(document.removeEventListener("touchmove",H,B?{passive:!1}:void 0),L=!1)):j.length||(void 0!==A&&(document.body.style.paddingRight=A,A=void 0),void 0!==_&&(document.body.style.overflow=_,_=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},K=function(){},U={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},displayDirective:{type:String,default:"show",validator:function(e){return-1!==["if","show"].indexOf(e)}},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:function(){return{}}},overlayStyle:{type:[Object,Array],default:function(){return{}}},contentStyle:{type:[Object,Array],default:function(){return{}}},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},nonModal:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var t=r(e);return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:function(){return["t","tr","r","br","b","bl","l","tl"]},validator:function(e){return["t","tr","r","br","b","bl","l","tl"].filter((function(t){return-1!==e.indexOf(t)})).length===e.length}},minWidth:{type:[Number,String],default:0},minHeight:{type:[Number,String],default:0},maxWidth:{type:[Number,String],default:1/0},maxHeight:{type:[Number,String],default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","_before-close","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup:function(e,n){var r=n.emit,i=Symbol("vfm"),a=t.ref(null),l=t.ref(null),u=t.ref(null),s=t.ref(null),d=t.ref(null),v=t.ref(null),m=t.ref(null),h=t.ref(!1),b=t.reactive({modal:!1,overlay:!1}),g=y(),w=g.state,S=g.listeners,k=y(),z=k.state,E=k.listeners,M=t.ref(!1),C=t.ref({}),T=x({props:e,vfmContainer:l,modalTransitionState:z}).focusTrap,B=O({props:e,visible:h,vfmContainer:l,vfmContent:u,vfmResize:s,modalTransitionState:z,onEvent:function(e){r(_.value,e)}}),V=B.resizeVisible,_=B.state,A=B.dragResizeStyle,P=B.removeDragDown,j=B.removeResizeDown,L=t.ref(null),D=K,N=K,I=t.computed((function(){return"string"==typeof e.overlayTransition?{name:e.overlayTransition}:o({},e.overlayTransition)})),R=t.computed((function(){return"string"==typeof e.transition?{name:e.transition}:o({},e.transition)})),H=t.computed((function(){return(e.hideOverlay||w.value===p)&&z.value===p})),U=t.computed((function(){return!1===e.zIndex?!!e.zIndexAuto&&+e.zIndexBase+2*(m.value||0):e.zIndex})),q=t.computed((function(){return o({},!1!==U.value&&{zIndex:U.value})})),W=t.computed((function(){var t=[A.value];return Array.isArray(e.contentStyle)?t.push.apply(t,c(e.contentStyle)):t.push(e.contentStyle),t}));function Y(){return{uid:i,props:e,emit:r,vfmContainer:l,vfmContent:u,vfmResize:s,vfmOverlayTransition:d,vfmTransition:v,getAttachElement:J,modalStackIndex:m,visibility:b,handleLockScroll:Z,toggle:te,params:C}}function G(){if(e.modelValue){if(r("_before-open",Q({type:"_before-open"})),ee("before-open",!1))return void N("show");var t=J();if(t||!1===e.attach){!1!==e.attach&&t.appendChild(a.value);var n=e.api.openedModals.findIndex((function(e){return e.uid===i}));-1!==n&&e.api.openedModals.splice(n,1),e.api.openedModals.push(Y()),m.value=e.api.openedModals.length-1,Z(),e.api.openedModals.filter((function(e){return e.uid!==i})).forEach((function(e,n){e.getAttachElement()===t&&(e.modalStackIndex.value=n,e.visibility.overlay=!1)})),h.value=!0,b.overlay=!0,b.modal=!0}else!1!==t&&console.warn("Unable to locate target ".concat(e.attach))}}function X(){var n=e.api.openedModals.findIndex((function(e){return e.uid===i}));if(-1!==n&&e.api.openedModals.splice(n,1),e.api.openedModals.length>0){var o=e.api.openedModals[e.api.openedModals.length-1];o.props.focusTrap&&t.nextTick((function(){T.enable(o.vfmContainer.value),T.firstElement.focus()})),(o.props.focusRetain||o.props.focusTrap)&&o.vfmContainer.value.focus(),!o.props.hideOverlay&&(o.visibility.overlay=!0)}e.drag&&P(),e.resize&&j(),_.value=null,b.overlay=!1,b.modal=!1}function Z(){e.modelValue&&t.nextTick((function(){e.lockScroll?F(l.value,{reserveScrollBarGap:!0}):$(l.value)}))}function J(){return!1!==e.attach&&("string"==typeof e.attach?!!window&&window.document.querySelector(e.attach):e.attach)}function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o({ref:Y()},e)}function ee(e,n){var o=!1,i=Q({type:e,stop:function(){o=!0}});return r(e,i),!!o&&(M.value=!0,t.nextTick((function(){r("update:modelValue",n)})),!0)}function te(t,n){var o=arguments;return new Promise((function(i,a){D=function(e){i(e),D=K},N=function(e){a(e),N=K};var l="boolean"==typeof t?t:!e.modelValue;l&&2===o.length&&(C.value=n),r("update:modelValue",l)}))}return t.watch((function(){return e.modelValue}),(function(e){if(M.value)M.value=!1;else if(G(),!e){if(r("_before-close",Q({type:"_before-close"})),ee("before-close",!0))return void N("hide");X()}})),t.watch((function(){return e.lockScroll}),Z),t.watch((function(){return e.hideOverlay}),(function(t){e.modelValue&&!t&&(b.overlay=!0)})),t.watch((function(){return e.attach}),G),t.watch(H,(function(e){e&&(h.value=!1,l.value.style.display="none")}),{flush:"post"}),t.watch(z,(function(t){switch(t){case f:r("_opened"),r("opened",Q({type:"opened"})),D("show");break;case p:m.value=null,e.lockScroll&&$(l.value);var n=!1,o=Q({type:"closed",stop:function(){n=!0}});if(r("_closed"),r("closed",o),D("hide"),n)return;C.value={}}})),e.api.modals.push(Y()),t.onMounted((function(){G()})),t.onBeforeUnmount((function(){var t;X(),e.lockScroll&&l.value&&$(l.value),null==a||null===(t=a.value)||void 0===t||t.remove();var n=e.api.modals.findIndex((function(e){return e.uid===i}));e.api.modals.splice(n,1)})),{root:a,vfmContainer:l,vfmContent:u,vfmResize:s,vfmOverlayTransition:d,vfmTransition:v,computedOverlayTransition:I,computedTransition:R,overlayListeners:S,modalListeners:E,visible:h,visibility:b,params:C,resizeVisible:V,calculateZIndex:U,bindStyle:q,bindContentStyle:W,onMousedown:function(e){L.value=null==e?void 0:e.target},onMouseupContainer:function(){L.value===l.value&&"resize:move"!==_.value&&(r("click-outside",Q({type:"click-outside"})),e.clickToClose&&r("update:modelValue",!1))},onEsc:function(){h.value&&e.escToClose&&r("update:modelValue",!1)}}}},q=["aria-expanded"],W={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"},Y=["direction"];!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-72c09f54] {\n  position: fixed;\n}\n.vfm--absolute[data-v-72c09f54] {\n  position: absolute;\n}\n.vfm--inset[data-v-72c09f54] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-72c09f54] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-72c09f54] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-72c09f54] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-72c09f54]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-72c09f54],\n.vfm-leave-active[data-v-72c09f54] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-72c09f54],\n.vfm-leave-to[data-v-72c09f54] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-72c09f54] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-72c09f54] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-72c09f54],\n.vfm--resize-br[data-v-72c09f54],\n.vfm--resize-bl[data-v-72c09f54],\n.vfm--resize-tl[data-v-72c09f54] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-72c09f54] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-72c09f54] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-72c09f54] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-72c09f54] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-72c09f54] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-72c09f54] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-72c09f54] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-72c09f54] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),U.render=function(e,n,o,r,i,a){return"if"!==o.displayDirective||r.visible?t.withDirectives((t.openBlock(),t.createElementBlock("div",{key:0,ref:"root",style:t.normalizeStyle(r.bindStyle),class:t.normalizeClass(["vfm vfm--inset",[!1===o.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":o.nonModal}]]),onKeydown:n[3]||(n[3]=t.withKeys((function(){return r.onEsc&&r.onEsc.apply(r,arguments)}),["esc"]))},[t.createVNode(t.Transition,t.mergeProps(r.computedOverlayTransition,t.toHandlers(r.overlayListeners)),{default:t.withCtx((function(){return[!o.hideOverlay&&r.visibility.overlay?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(["vfm__overlay vfm--overlay vfm--absolute vfm--inset",o.overlayClass]),style:t.normalizeStyle(o.overlayStyle)},null,6)):t.createCommentVNode("v-if",!0)]})),_:1},16),t.createVNode(t.Transition,t.mergeProps(r.computedTransition,t.toHandlers(r.modalListeners)),{default:t.withCtx((function(){return[t.withDirectives(t.createElementVNode("div",{ref:"vfmContainer",class:t.normalizeClass(["vfm__container vfm--absolute vfm--inset vfm--outline-none",o.classes]),style:t.normalizeStyle(o.styles),"aria-expanded":r.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:n[1]||(n[1]=t.withModifiers((function(){return r.onMouseupContainer&&r.onMouseupContainer.apply(r,arguments)}),["self"])),onMousedown:n[2]||(n[2]=t.withModifiers((function(){return r.onMousedown&&r.onMousedown.apply(r,arguments)}),["self"]))},[t.createElementVNode("div",{ref:"vfmContent",class:t.normalizeClass(["vfm__content",[o.contentClass,{"vfm--prevent-auto":o.nonModal}]]),style:t.normalizeStyle(r.bindContentStyle),onMousedown:n[0]||(n[0]=function(e){return r.onMousedown(null)})},[t.renderSlot(e.$slots,"default",{params:r.params,close:function(){return e.$emit("update:modelValue",!1)}}),r.resizeVisible&&r.visibility.modal?(t.openBlock(),t.createElementBlock("div",W,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(o.resizeDirections,(function(e){return t.openBlock(),t.createElementBlock("div",{key:e,direction:e,class:t.normalizeClass(["vfm--resize-".concat(e),"vfm--absolute vfm--prevent-auto"])},null,10,Y)})),128))],512)):t.createCommentVNode("v-if",!0)],38)],46,q),[[t.vShow,r.visibility.modal]])]})),_:3},16)],38)),[[t.vShow,"show"!==o.displayDirective||r.visible]]):t.createCommentVNode("v-if",!0)},U.__scopeId="data-v-72c09f54",U.__file="src/VueFinalModal.vue";var G={methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},closed:function(e,t){this.slice(e),t.closed&&t.closed()},beforeClose:function(e){e.value&&(null==e||e.rejectClose("hide"))},beforeOpen:function(e,t,n){var o,r=this;return(o=function*(){e.ref.params.value=t.params,yield r.$nextTick(),yield r.$nextTick(),t.value||(r.slice(n),null==t||t.reject("show"))},function(){var e=this,t=arguments;return new Promise((function(n,r){var a=o.apply(e,t);function l(e){i(a,n,r,l,u,"next",e)}function u(e){i(a,n,r,l,u,"throw",e)}l(void 0)}))})()},isString:function(e){return"string"==typeof e}}},X={class:"modals-container"},Z=["innerHTML"];G.render=function(e,n,o,r,i,a){return t.openBlock(),t.createElementBlock("div",X,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.api.dynamicModals,(function(e,n){return t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":function(t){return e.value=t}},t.toHandlers(e.on),{on_beforeClose:function(t){return a.beforeClose(e)},on_closed:function(t){return a.closed(n,e)},on_beforeOpen:function(t){return a.beforeOpen(t,e,n)},on_opened:e.opened}),t.createSlots({_:2},[t.renderList(e.slots,(function(e,n){return{name:n,fn:t.withCtx((function(){return[t.createCommentVNode(" eslint-disable vue/no-v-html "),a.isString(e)?(t.openBlock(),t.createElementBlock("div",{key:0,innerHTML:e},null,8,Z)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps({key:1},e.bind,t.toHandlers(e.on||{})),null,16))]}))}}))]),1040,["modelValue","onUpdate:modelValue","on_beforeClose","on_closed","on_beforeOpen","on_opened"])})),128))])},G.__file="src/ModalsContainer.vue";var J=function(){function e(){var n=this;a(this,e);var r=function(e){var r=o(o({},e),{},{props:o({},e.props)});return Object.assign(r.props,{api:{type:Object,default:function(){return n}}}),t.markRaw(r)};this.modals=[],this.openedModals=[],this.VueFinalModal=r(U),this.dynamicModals=t.shallowReactive([]),this.ModalsContainer=r(G)}return u(e,[{key:"show",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];switch(r(e)){case"string":return this.toggle.apply(this,[e,!0].concat(n));case"object":var i=this.useModal(e,n[0]),a=i.show;return a()}}},{key:"hide",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.toggle(t,!1)}},{key:"hideAll",value:function(){return this.hide.apply(this,c(this.openedModals.map((function(e){return e.props.name}))))}},{key:"toggle",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=Array.isArray(e)?this.get.apply(this,c(e)):this.get(e);return Promise.allSettled(r.map((function(e){return e.toggle.apply(e,n)})))}},{key:"get",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.modals.filter((function(e){return t.includes(e.props.name)}))}},{key:"existModal",value:function(e){return-1!==this.dynamicModals.indexOf(e)}},{key:"useModal",value:function(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.reactive(o({value:!1,component:this.VueFinalModal,id:Symbol("useModal"),bind:{},slots:{},on:{},params:r},e)),a=function(){return n.existModal(i)?Promise.resolve("[Vue Final Modal] modal is already opened"):new Promise((function(e,t){i.value=!0,i.reject=t,i.opened=function(){e("show")},n.dynamicModals.push(i)}))},l=function(){return n.existModal(i)?new Promise((function(e,t){i.value=!1,i.rejectClose=t,i.closed=function(){e("hide")}})):Promise.resolve("[Vue Final Modal] modal is already closed")};return{show:a,hide:l,options:i}}}]),e}(),Q=function(){var e=new J;return{$vfm:e,VueFinalModal:e.VueFinalModal,ModalsContainer:e.ModalsContainer,useModal:e.useModal.bind(e)}},ee=Q(),te=ee.$vfm,ne=ee.VueFinalModal,oe=ee.ModalsContainer,re=ee.useModal;e.$vfm=te,e.ModalInstance=J,e.ModalsContainer=oe,e.VueFinalModal=ne,e.createModalInstance=Q,e.useModal=re,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=VueFinalModal.umd.js.map