!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var s,l,c=function(e){return function(e,t){return a(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},d=function(e){return e==document.activeElement},u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var n,o,i;return n=e,(o=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||d(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;d(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=c(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&t(n.prototype,o),i&&t(n,i),e}(),f=[],v=function(e,t){if(e){if(!f.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};f=[].concat(a(f),[n]),function(e){if(void 0===l){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);l=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+n,"px")}}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},m=function(e){e?(f=f.filter((function(t){return t.targetElement!==e}))).length||(void 0!==l&&(document.body.style.paddingRight=l,l=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0)):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},h="enter",p="entering",y="leave",b="leavng";var g={type:[String,Object,Array],default:""},S={props:{name:{type:String,default:null},value:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:g,overlayClass:g,contentClass:g,styles:g,overlayStyle:g,contentStyle:g,lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(t){var n=e(t);return"boolean"===n||"string"===n||t.nodeType===Node.ELEMENT_NODE}},transition:{type:String,default:"vfm"},overlayTransition:{type:String,default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1}},data:function(){return{modalStackIndex:null,visible:!1,visibility:{modal:!1,overlay:!1},overlayTransitionState:null,modalTransitionState:null,stopEvent:!1,params:{}}},computed:{api:function(){return this[this.$_options.key]},isComponentReadyToBeDestroyed:function(){return(this.hideOverlay||this.overlayTransitionState===y)&&this.modalTransitionState===y},calculateZIndex:function(){return!1===this.zIndex?!!this.zIndexAuto&&+this.zIndexBase+2*(this.modalStackIndex||0):this.zIndex},bindStyle:function(){return i({},!1!==this.calculateZIndex&&{zIndex:this.calculateZIndex})}},watch:{value:function(e){if(this.stopEvent)this.stopEvent=!1;else if(this.mounted(),!e){if(this.emitEvent("before-close",!0))return;this.close()}},lockScroll:"handleLockScroll",hideOverlay:function(e){this.value&&!e&&(this.visibility.overlay=!0)},attach:"mounted",isComponentReadyToBeDestroyed:function(e){e&&(this.visible=!1)}},created:function(){this.api.modals.push(this)},mounted:function(){this.$focusTrap=new u,this.mounted()},beforeDestroy:function(){var e,t=this;this.close(),this.lockScroll&&m(this.$refs.vfmContent),null==this||null===(e=this.$el)||void 0===e||e.remove();var n=this.api.modals.findIndex((function(e){return e===t}));this.api.modals.splice(n,1)},methods:{mounted:function(){var e=this;if(this.value){if(this.emitEvent("before-open",!1))return;var t=this.getAttachElement();if(t||!1===this.attach){!1!==this.attach&&t.appendChild(this.$el);var n=this.api.openedModals.findIndex((function(t){return t===e}));-1!==n&&this.api.openedModals.splice(n,1),this.api.openedModals.push(this),this.modalStackIndex=this.api.openedModals.length-1,this.handleLockScroll(),this.api.openedModals.filter((function(t){return t!==e})).forEach((function(e,n){e.getAttachElement()===t&&(e.modalStackIndex=n,e.visibility.overlay=!1)})),this.visible=!0,this.$nextTick((function(){e.startTransitionEnter()}))}else!1!==t&&console.warn("Unable to locate target ".concat(this.attach))}},close:function(){var e=this,t=this.api.openedModals.findIndex((function(t){return t===e}));if(-1!==t&&this.api.openedModals.splice(t,1),this.api.openedModals.length>0){var n=this.api.openedModals[this.api.openedModals.length-1];(n.focusRetain||n.focusTrap)&&n.$refs.vfmContainer.focus(),!n.hideOverlay&&(n.visibility.overlay=!0)}this.startTransitionLeave()},startTransitionEnter:function(){this.visibility.overlay=!0,this.visibility.modal=!0},startTransitionLeave:function(){this.visibility.overlay=!1,this.visibility.modal=!1},handleLockScroll:function(){this.value&&(this.lockScroll?v(this.$refs.vfmContent,{reserveScrollBarGap:!0}):m(this.$refs.vfmContent))},getAttachElement:function(){return!1!==this.attach&&("string"==typeof this.attach?!!window&&window.document.querySelector(this.attach):this.attach)},beforeOverlayEnter:function(){this.overlayTransitionState=p},afterOverlayEnter:function(){this.overlayTransitionState=h},beforeOverlayLeave:function(){this.overlayTransitionState=b},afterOverlayLeave:function(){this.overlayTransitionState=y},beforeModalEnter:function(){this.modalTransitionState=p},afterModalEnter:function(){this.modalTransitionState=h,(this.focusRetain||this.focusTrap)&&this.$refs.vfmContainer.focus(),this.focusTrap&&this.$focusTrap.enable(this.$refs.vfmContainer),this.$emit("opened",this.createModalEvent({type:"opened"}))},beforeModalLeave:function(){this.modalTransitionState=b,this.$focusTrap.enabled()&&this.$focusTrap.disable()},afterModalLeave:function(){this.modalTransitionState=y,this.modalStackIndex=null,this.lockScroll&&m(this.$refs.vfmContent);var e=!1,t=this.createModalEvent({type:"closed",stop:function(){e=!0}});this.$emit("closed",t),e||(this.params={})},onClickContainer:function(){this.$emit("click-outside",this.createModalEvent({type:"click-outside"})),this.clickToClose&&this.$emit("input",!1)},onEsc:function(e){27===e.keyCode&&this.visible&&this.escToClose&&this.$emit("input",!1)},createModalEvent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({ref:this},e)},emitEvent:function(e,t){var n=!1,o=this.createModalEvent({type:e,stop:function(){n=!0}});return this.$emit(e,o),!!n&&(this.stopEvent=!0,this.$emit("input",t),!0)},toggle:function(e,t){var n="boolean"==typeof e?e:!this.value;n&&2===arguments.length&&(this.params=t),this.$emit("input",n)}}};var E,C=function(e,t,n,o,i,a,r,s,l,c){"boolean"!=typeof r&&(l=s,s=r,r=!1);var d,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=d):t&&(d=r?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),d)if(u.functional){var f=u.render;u.render=function(e,t){return d.call(t),f(e,t)}}else{var v=u.beforeCreate;u.beforeCreate=v?[].concat(v,d):[d]}return n},w="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var k={};var O=C({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ssr||e.visible?n("div",{directives:[{name:"show",rawName:"v-show",value:!e.ssr||e.visible,expression:"!ssr || visible"}],staticClass:"vfm vfm--inset",class:[!1===e.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":e.preventClick}],style:e.bindStyle,on:{keydown:e.onEsc}},[n("transition",{attrs:{name:e.overlayTransition},on:{"before-enter":e.beforeOverlayEnter,"after-enter":e.afterOverlayEnter,"before-leave":e.beforeOverlayLeave,"after-leave":e.afterOverlayLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.hideOverlay&&e.visibility.overlay,expression:"!hideOverlay && visibility.overlay"}],staticClass:"vfm__overlay vfm--overlay vfm--absolute vfm--inset",class:e.overlayClass,style:e.overlayStyle})]),e._v(" "),n("transition",{attrs:{name:e.transition},on:{"before-enter":e.beforeModalEnter,"after-enter":e.afterModalEnter,"before-leave":e.beforeModalLeave,"after-leave":e.afterModalLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visibility.modal,expression:"visibility.modal"}],ref:"vfmContainer",staticClass:"vfm__container vfm--absolute vfm--inset vfm--outline-none",class:e.classes,style:e.styles,attrs:{"aria-expanded":e.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1"},on:{click:function(t){return t.target!==t.currentTarget?null:e.onClickContainer(t)}}},[n("div",{ref:"vfmContent",staticClass:"vfm__content",class:[e.contentClass,{"vfm--prevent-auto":e.preventClick}],style:e.contentStyle},[e._t("default",null,{params:e.params})],2)])])],1):e._e()},staticRenderFns:[]},(function(e){e&&e("data-v-b6b7ac0e_0",{source:".vfm--fixed[data-v-b6b7ac0e]{position:fixed}.vfm--absolute[data-v-b6b7ac0e]{position:absolute}.vfm--inset[data-v-b6b7ac0e]{top:0;right:0;bottom:0;left:0}.vfm--overlay[data-v-b6b7ac0e]{background-color:rgba(0,0,0,.5)}.vfm--prevent-none[data-v-b6b7ac0e]{pointer-events:none}.vfm--prevent-auto[data-v-b6b7ac0e]{pointer-events:auto}.vfm--outline-none[data-v-b6b7ac0e]:focus{outline:0}.vfm-enter-active[data-v-b6b7ac0e],.vfm-leave-active[data-v-b6b7ac0e]{transition:opacity .2s}.vfm-enter[data-v-b6b7ac0e],.vfm-leave-to[data-v-b6b7ac0e]{opacity:0}",map:void 0,media:void 0})}),S,"data-v-b6b7ac0e",false,undefined,!1,(function(e){return function(e,t){return function(e,t){var n=w?t.media||"default":e,o=k[n]||(k[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var i=t.source;if(t.map&&(i+="\n/*# sourceURL="+t.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===E&&(E=document.head||document.getElementsByTagName("head")[0]),E.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(i),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var a=o.ids.size-1,r=document.createTextNode(i),s=o.element.childNodes;s[a]&&o.element.removeChild(s[a]),s.length?o.element.insertBefore(r,s[a]):o.element.appendChild(r)}}}(e,t)}}),void 0,void 0),T=C({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modals-container"},e._l(e.api.dynamicModals,(function(t,o){return n(t.component,e._g(e._b({key:t.id,tag:"component",on:{closed:function(t){return e.slice(o)},"before-open":function(n){return e.beforeOpen(n,t)}},scopedSlots:e._u([e._l(t.slots,(function(t,o){return{key:o,fn:function(){return[n(t.component,e._b({key:o,tag:"component"},"component",t.bind,!1))]},proxy:!0}}))],null,!0),model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"modal.value"}},"component",t.bind,!1),t.on))})),1)},staticRenderFns:[]},undefined,{props:{},computed:{api:function(){return this[this.$_options.key]}},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,t){e.ref.params=t.params}}},undefined,false,undefined,!1,void 0,void 0,void 0);function _(e,t){var n=i({},e);return Object.assign(n.props,{$_options:{type:Object,default:function(){return t}}}),n}function x(t,n){var o=function(t,n){var o,a="_dynamic_modal_",r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return(e++).toString()}}();return function(){return o={show:function(t){for(var o=arguments.length,s=new Array(o>1?o-1:0),l=1;l<o;l++)s[l-1]=arguments[l];switch(e(t)){case"string":this.toggle.apply(this,[t,!0].concat(s));break;case"object":var c={component:n.componentName,bind:{},slots:{},on:{}};t=Object.assign(c,t);var d=r(),u=t.bind.name||a+d;this.dynamicModals.push(i(i({value:!0,id:d},t),{},{component:t.component,slots:t.slots,bind:i(i({},t.bind),{},{name:u}),params:s[0]}))}},hide:function(e){this.toggle(e,!1)},hideAll:function(){for(var e=this.openedModals.length-1;e>=0;e--)this.openedModals[e].$emit("input",!1)},toggle:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];this.get(e).forEach((function(e){return e.toggle.apply(e,n)}))},get:function(e){return this.modals.filter((function(t){return t.name===e}))},dynamicModals:[],openedModals:[],modals:[]},t.observable(o)}}(t,n)();Object.defineProperty(t.prototype,n.key,{get:function(){return o}})}var M={componentName:"VueFinalModal",dynamicContainerName:"ModalsContainer",key:"$vfm"};return function(){return{install:function(e,t){var n=Object.assign({},M,t),o=e.prototype[n.key],i=e.options.components[n.componentName],a=e.options.components[n.dynamicContainerName];i||a?"undefined"!=typeof window&&(o&&console.error("[vue-final-modal] Duplicate registration API key and componentName of VueFinalModal."),i&&console.error("[vue-final-modal] Duplicate registration componentName of VueFinalModal."),a&&console.error("[vue-final-modal] Duplicate registration dynamicContainerName of ModalsContainer.")):(o||x(e,n),function(e,t){e.component(t.componentName,_(O,t))}(e,n),function(e,t){e.component(t.dynamicContainerName,_(T,t))}(e,n))}}}}));
//# sourceMappingURL=VueFinalModal.umd.js.map
