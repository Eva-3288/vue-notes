webpackJsonp([4],{"/u8y":function(t,e){},"/wAz":function(t,e){},D18d:function(t,e,n){"use strict";n("/wAz");var i={name:"tab",data:function(){return{}},mounted:function(){console.log(this.back)},props:{back:{type:Boolean,default:!1}},methods:{goBack:function(){this.$router.go(-1)}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header"}},[this.back?e("i",{staticClass:"iconfont icon-fanhui1",on:{click:this.goBack}}):this._e(),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var o=n("VU/8")(i,r,!1,function(t){n("wRQu")},null,null);e.a=o.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r=(n("/wAz"),{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab"}},[n("router-link",{attrs:{to:"/home"}},[n("i",{staticClass:"iconfont icon-shouyeshouye"}),t._v(" "),n("span",[t._v("首页")])]),t._v(" "),n("router-link",{attrs:{to:"/lists"}},[n("i",{staticClass:"iconfont icon-weimingmingwenjianjia_liebiao"}),t._v(" "),n("span",[t._v("列表")])]),t._v(" "),n("router-link",{attrs:{to:"/add"}},[n("i",{staticClass:"iconfont icon-tianjia"}),t._v(" "),n("span",[t._v("添加")])]),t._v(" "),n("router-link",{attrs:{to:"/collect"}},[n("i",{staticClass:"iconfont icon-shoucang1"}),t._v(" "),n("span",[t._v("收藏")])])],1)},staticRenderFns:[]});var o={name:"App",components:{tab:n("VU/8")({name:"tab"},r,!1,function(t){n("yxJj")},null,null).exports}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fadeIn"}},[e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1)],1),this._v(" "),e("transition",{attrs:{name:"fadeIn"}},[this.$route.meta.keepAlive?this._e():e("router-view")],1),this._v(" "),e("tab")],1)},staticRenderFns:[]};var s=n("VU/8")(o,a,!1,function(t){n("l3Xj")},null,null).exports,u=n("/ocq"),c=n("Xxa5"),l=n.n(c),d=n("d7EF"),h=n.n(d),f=n("exGp"),v=n.n(f),p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("div",{staticClass:"lds-default"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])])}]};var m=n("VU/8")(null,p,!1,function(t){n("/u8y")},"data-v-a1b9ce62",null).exports,b=n("D18d"),g=(n("v2ns"),n("7QTg")),y={name:"carrousel",data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"}}}},props:["swiperSlides"],components:{swiper:g.swiper,swiperSlide:g.swiperSlide},mounted:function(){}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperSlides,function(t,n){return e("swiper-slide",{key:n},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"slide"}]})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]};var w=n("VU/8")(y,_,!1,function(t){n("TSYj")},"data-v-4fbdea36",null).exports,k=n("gyMJ"),L={name:"add",data:function(){return{sliders:[],hots:[],loading:!0}},components:{mHeader:b.a,swiper:w,loading:m},created:function(){this.getData()},methods:{getData:function(){var t=this;return v()(l.a.mark(function e(){var n,i,r,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)();case 2:n=e.sent,i=h()(n,2),r=i[0],o=i[1],t.sliders=r,t.hots=o,t.loading=!1;case 9:case"end":return e.stop()}},e,t)}))()}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mHeader",{attrs:{back:!1}},[t._v("首页")]),t._v(" "),n("div",{staticClass:"content"},[t.loading?n("loading"):[n("swiper",{attrs:{swiperSlides:t.sliders}}),t._v(" "),n("div",{staticClass:"hotBox"},[n("h3",[t._v("热门图书")]),t._v(" "),n("ul",{staticClass:"hotBooks"},t._l(t.hots,function(e,i){return n("li",{key:i},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"item.img"}],attrs:{alt:""}}),t._v(" "),n("p",[t._v(t._s(e.name))])])}),0)])]],2)],1)},staticRenderFns:[]};var A=n("VU/8")(L,E,!1,function(t){n("hLkW")},"data-v-9649ec2a",null).exports,x=n("fZjL"),j=n.n(x),z={name:"add",data:function(){return{bookData:{}}},components:{mHeader:b.a},watch:{$route:function(){this.initDetail()}},created:function(){this.initDetail()},computed:{id:function(){return this.$route.params.bookid}},methods:{initDetail:function(){var t=this;return v()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.c)(t.id);case 2:t.bookData=e.sent,j()(t.bookData).length>0||t.$router.push("/lists");case 4:case"end":return e.stop()}},e,t)}))()},update:function(){var t=this;return v()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.b)(t.id,t.bookData);case 2:t.$router.push(" /lists");case 3:case"end":return e.stop()}},e,t)}))()}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("mHeader",{attrs:{back:!0}},[t._v("修改信息")]),t._v(" "),n("ul",{staticClass:"box"},[n("li",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.bookData.img,expression:"bookData.img"}]})]),t._v(" "),n("li",[n("label",{attrs:{for:"name"}},[t._v("图书名称")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bookData.name,expression:"bookData.name"}],attrs:{type:"text",id:"name"},domProps:{value:t.bookData.name},on:{input:function(e){e.target.composing||t.$set(t.bookData,"name",e.target.value)}}})]),t._v(" "),n("li",[n("label",{attrs:{for:"info"}},[t._v("图书信息")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bookData.info,expression:"bookData.info"}],attrs:{type:"text",id:"info"},domProps:{value:t.bookData.info},on:{input:function(e){e.target.composing||t.$set(t.bookData,"info",e.target.value)}}})]),t._v(" "),n("li",[n("label",{attrs:{for:"price"}},[t._v("图书价格")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bookData.price,expression:"bookData.price"}],attrs:{type:"text",id:"price"},domProps:{value:t.bookData.price},on:{input:function(e){e.target.composing||t.$set(t.bookData,"price",e.target.value)}}})]),t._v(" "),n("li",[n("button",{on:{click:t.update}},[t._v("确认修改")])])])],1)},staticRenderFns:[]};var C=n("VU/8")(z,$,!1,function(t){n("xwgX")},"data-v-3b080550",null).exports;i.a.use(u.a);var O=new u.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:A,meta:{keepAlive:!0}},{path:"/lists",component:function(){return n.e(0).then(n.bind(null,"G5mx"))}},{path:"/add",component:function(){return n.e(1).then(n.bind(null,"fGKr"))}},{path:"/collect",component:function(){return n.e(2).then(n.bind(null,"fXwH"))}},{path:"/detail/:bookid",component:C,name:"detail"},{path:"*",redirect:"/home"}]}),T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},I=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),D=function(t){return null==t||"function"!=typeof t&&"object"!==(void 0===t?"undefined":T(t))},H=function(t,e){if(null===t||void 0===t)throw new TypeError("expected first argument to be an object.");if(void 0===e||"undefined"==typeof Symbol)return t;if("function"!=typeof Object.getOwnPropertySymbols)return t;for(var n=Object.prototype.propertyIsEnumerable,i=Object(t),r=arguments.length,o=0;++o<r;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var c=s[u];n.call(a,c)&&(i[c]=a[c])}return i},R=Object.prototype.toString,Q=function(t){var e=void 0===t?"undefined":T(t);return"undefined"===e?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===e||t instanceof String?"string":"number"===e||t instanceof Number?"number":"function"===e||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":"[object RegExp]"===(e=R.call(t))?"regexp":"[object Date]"===e?"date":"[object Arguments]"===e?"arguments":"[object Error]"===e?"error":"[object Promise]"===e?"promise":function(t){return t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}(t)?"buffer":"[object Set]"===e?"set":"[object WeakSet]"===e?"weakset":"[object Map]"===e?"map":"[object WeakMap]"===e?"weakmap":"[object Symbol]"===e?"symbol":"[object Map Iterator]"===e?"mapiterator":"[object Set Iterator]"===e?"setiterator":"[object String Iterator]"===e?"stringiterator":"[object Array Iterator]"===e?"arrayiterator":"[object Int8Array]"===e?"int8array":"[object Uint8Array]"===e?"uint8array":"[object Uint8ClampedArray]"===e?"uint8clampedarray":"[object Int16Array]"===e?"int16array":"[object Uint16Array]"===e?"uint16array":"[object Int32Array]"===e?"int32array":"[object Uint32Array]"===e?"uint32array":"[object Float32Array]"===e?"float32array":"[object Float64Array]"===e?"float64array":"object"};
/*!
 * Vue-Lazyload.js v1.3.3
 * (c) 2019 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */function B(t){t=t||{};var e=arguments.length,n=0;if(1===e)return t;for(;++n<e;){var i=arguments[n];D(t)&&(t=i),N(i)&&W(t,i)}return t}function W(t,e){for(var n in H(t,e),e)if("__proto__"!==n&&V(e,n)){var i=e[n];N(i)?("undefined"===Q(t[n])&&"function"===Q(i)&&(t[n]=i),t[n]=B(t[n]||{},i)):t[n]=i}return t}function N(t){return"object"===Q(t)||"function"===Q(t)}function V(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var F=B,P="undefined"!=typeof window,M=function(){if(P&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)return"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0;return!1}();var U={event:"event",observer:"observer"},q=function(){if(P)return"function"==typeof window.CustomEvent?window.CustomEvent:(t.prototype=window.Event.prototype,t);function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}}();function G(t,e){if(t.length){var n=t.indexOf(e);return n>-1?t.splice(n,1):void 0}}function X(t,e){if("IMG"===t.tagName&&t.getAttribute("data-srcset")){var n=t.getAttribute("data-srcset"),i=[],r=t.parentNode.offsetWidth*e,o=void 0,a=void 0,s=void 0;(n=n.trim().split(",")).map(function(t){t=t.trim(),-1===(o=t.lastIndexOf(" "))?(a=t,s=999998):(a=t.substr(0,o),s=parseInt(t.substr(o+1,t.length-o-2),10)),i.push([s,a])}),i.sort(function(t,e){if(t[0]<e[0])return 1;if(t[0]>e[0])return-1;if(t[0]===e[0]){if(-1!==e[1].indexOf(".webp",e[1].length-5))return 1;if(-1!==t[1].indexOf(".webp",t[1].length-5))return-1}return 0});for(var u="",c=void 0,l=0;l<i.length;l++){u=(c=i[l])[1];var d=i[l+1];if(d&&d[0]<r){u=c[1];break}if(!d){u=c[1];break}}return u}}function J(t,e){for(var n=void 0,i=0,r=t.length;i<r;i++)if(e(t[i])){n=t[i];break}return n}var Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return P&&window.devicePixelRatio||t};var K=function(){if(P){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}}(),Z={on:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];K?t.addEventListener(e,n,{capture:i,passive:!0}):t.addEventListener(e,n,i)},off:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.removeEventListener(e,n,i)}},tt=function(t,e,n){var i=new Image;if(!t||!t.src){var r=new Error("image src is required");return n(r)}i.src=t.src,i.onload=function(){e({naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth,src:i.src})},i.onerror=function(t){n(t)}},et=function(t,e){return"undefined"!=typeof getComputedStyle?getComputedStyle(t,null).getPropertyValue(e):t.style[e]},nt=function(t){return et(t,"overflow")+et(t,"overflow-y")+et(t,"overflow-x")};function it(){}var rt=function(){function t(e){var n=e.max;S(this,t),this.options={max:n||100},this._caches=[]}return I(t,[{key:"has",value:function(t){return this._caches.indexOf(t)>-1}},{key:"add",value:function(t){this.has(t)||(this._caches.push(t),this._caches.length>this.options.max&&this.free())}},{key:"free",value:function(){this._caches.shift()}}]),t}(),ot=function(){function t(e){var n=e.el,i=e.src,r=e.error,o=e.loading,a=e.bindType,s=e.$parent,u=e.options,c=e.elRenderer,l=e.imageCache;S(this,t),this.el=n,this.src=i,this.error=r,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=c,this._imageCache=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return I(t,[{key:"initState",value:function(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(t){this.performanceData[t]=Date.now()}},{key:"update",value:function(t){var e=t.src,n=t.loading,i=t.error,r=this.src;this.src=e,this.loading=n,this.error=i,this.filter(),r!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var t=this;(function(t){if(!(t instanceof Object))return[];if(Object.keys)return Object.keys(t);var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e})(this.options.filter).map(function(e){t.options.filter[e](t,t.options)})}},{key:"renderLoading",value:function(t){var e=this;this.state.loading=!0,tt({src:this.loading},function(n){e.render("loading",!1),e.state.loading=!1,t()},function(){t(),e.state.loading=!1,e.options.silent||console.warn("VueLazyload log: load failed with loading image("+e.loading+")")})}},{key:"load",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void e()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,e()):void this.renderLoading(function(){t.attempt++,t.options.adapter.beforeLoad&&t.options.adapter.beforeLoad(t,t.options),t.record("loadStart"),tt({src:t.src},function(n){t.naturalHeight=n.naturalHeight,t.naturalWidth=n.naturalWidth,t.state.loaded=!0,t.state.error=!1,t.record("loadEnd"),t.render("loaded",!1),t.state.rendered=!0,t._imageCache.add(t.src),e()},function(e){!t.options.silent&&console.error(e),t.state.error=!0,t.state.loaded=!1,t.render("error",!1)})})}},{key:"render",value:function(t,e){this.elRenderer(this,t,e)}},{key:"performance",value:function(){var t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}},{key:"$destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),t}(),at="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",st=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],ut={rootMargin:"0px",threshold:0},ct=function(t){return function(){function e(t){var n,i,r,o,a=t.preLoad,s=t.error,u=t.throttleWait,c=t.preLoadTop,l=t.dispatchEvent,d=t.loading,h=t.attempt,f=t.silent,v=void 0===f||f,p=t.scale,m=t.listenEvents,b=(t.hasbind,t.filter),g=t.adapter,y=t.observer,_=t.observerOptions;S(this,e),this.version="1.3.3",this.mode=U.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:v,dispatchEvent:!!l,throttleWait:u||200,preLoad:a||1.3,preLoadTop:c||0,error:s||at,loading:d||at,attempt:h||3,scale:p||Y(p),ListenEvents:m||st,hasbind:!1,supportWebp:function(){if(!P)return!1;var t=!0,e=document;try{var n=e.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",e.body.appendChild(n),t=!n.offsetWidth,e.body.removeChild(n)}catch(e){t=!1}return t}(),filter:b||{},adapter:g||{},observer:!!y,observerOptions:_||ut},this._initEvent(),this._imageCache=new rt({max:200}),this.lazyLoadHandler=(n=this._lazyLoadHandler.bind(this),i=this.options.throttleWait,r=null,o=0,function(){if(!r){var t=this,e=arguments,a=function(){o=Date.now(),r=!1,n.apply(t,e)};Date.now()-o>=i?a():r=setTimeout(a,i)}}),this.setMode(this.options.observer?U.observer:U.event)}return I(e,[{key:"config",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};F(this.options,t)}},{key:"performance",value:function(){var t=[];return this.ListenerQueue.map(function(e){t.push(e.performance())}),t}},{key:"addLazyBox",value:function(t){this.ListenerQueue.push(t),P&&(this._addListenerTarget(window),this._observer&&this._observer.observe(t.el),t.$el&&t.$el.parentNode&&this._addListenerTarget(t.$el.parentNode))}},{key:"add",value:function(e,n,i){var r=this;if(function(t,e){for(var n=!1,i=0,r=t.length;i<r;i++)if(e(t[i])){n=!0;break}return n}(this.ListenerQueue,function(t){return t.el===e}))return this.update(e,n),t.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),a=o.src,s=o.loading,u=o.error;t.nextTick(function(){a=X(e,r.options.scale)||a,r._observer&&r._observer.observe(e);var o=Object.keys(n.modifiers)[0],c=void 0;o&&(c=(c=i.context.$refs[o])?c.$el||c:document.getElementById(o)),c||(c=function(t){if(P){if(!(t instanceof HTMLElement))return window;for(var e=t;e&&e!==document.body&&e!==document.documentElement&&e.parentNode;){if(/(scroll|auto)/.test(nt(e)))return e;e=e.parentNode}return window}}(e));var l=new ot({bindType:n.arg,$parent:c,el:e,loading:s,error:u,src:a,elRenderer:r._elRenderer.bind(r),options:r.options,imageCache:r._imageCache});r.ListenerQueue.push(l),P&&(r._addListenerTarget(window),r._addListenerTarget(c)),r.lazyLoadHandler(),t.nextTick(function(){return r.lazyLoadHandler()})})}},{key:"update",value:function(e,n,i){var r=this,o=this._valueFormatter(n.value),a=o.src,s=o.loading,u=o.error;a=X(e,this.options.scale)||a;var c=J(this.ListenerQueue,function(t){return t.el===e});c?c.update({src:a,loading:s,error:u}):this.add(e,n,i),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),this.lazyLoadHandler(),t.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(t){if(t){this._observer&&this._observer.unobserve(t);var e=J(this.ListenerQueue,function(e){return e.el===t});e&&(this._removeListenerTarget(e.$parent),this._removeListenerTarget(window),G(this.ListenerQueue,e),e.$destroy())}}},{key:"removeComponent",value:function(t){t&&(G(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(t){var e=this;M||t!==U.observer||(t=U.event),this.mode=t,t===U.event?(this._observer&&(this.ListenerQueue.forEach(function(t){e._observer.unobserve(t.el)}),this._observer=null),this.TargetQueue.forEach(function(t){e._initListen(t.el,!0)})):(this.TargetQueue.forEach(function(t){e._initListen(t.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(t){if(t){var e=J(this.TargetQueue,function(e){return e.el===t});return e?e.childrenCount++:(e={el:t,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===U.event&&this._initListen(e.el,!0),this.TargetQueue.push(e)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(t){var e=this;this.TargetQueue.forEach(function(n,i){n.el===t&&(n.childrenCount--,n.childrenCount||(e._initListen(n.el,!1),e.TargetQueue.splice(i,1),n=null))})}},{key:"_initListen",value:function(t,e){var n=this;this.options.ListenEvents.forEach(function(i){return Z[e?"on":"off"](t,i,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var t=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(e,n){t.Event.listeners[e]||(t.Event.listeners[e]=[]),t.Event.listeners[e].push(n)},this.$once=function(e,n){var i=t;t.$on(e,function t(){i.$off(e,t),n.apply(i,arguments)})},this.$off=function(e,n){if(n)G(t.Event.listeners[e],n);else{if(!t.Event.listeners[e])return;t.Event.listeners[e].length=0}},this.$emit=function(e,n,i){t.Event.listeners[e]&&t.Event.listeners[e].forEach(function(t){return t(n,i)})}}},{key:"_lazyLoadHandler",value:function(){var t=this,e=[];this.ListenerQueue.forEach(function(t,n){t.el&&t.el.parentNode||e.push(t),t.checkInView()&&t.load()}),e.forEach(function(e){G(t.ListenerQueue,e),e.$destroy()})}},{key:"_initIntersectionObserver",value:function(){var t=this;M&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(e){t._observer.observe(e.el)}))}},{key:"_observerHandler",value:function(t,e){var n=this;t.forEach(function(t){t.isIntersecting&&n.ListenerQueue.forEach(function(e){if(e.el===t.target){if(e.state.loaded)return n._observer.unobserve(e.el);e.load()}})})}},{key:"_elRenderer",value:function(t,e,n){if(t.el){var i=t.el,r=t.bindType,o=void 0;switch(e){case"loading":o=t.loading;break;case"error":o=t.error;break;default:o=t.src}if(r?i.style[r]='url("'+o+'")':i.getAttribute("src")!==o&&i.setAttribute("src",o),i.setAttribute("lazy",e),this.$emit(e,t,n),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){var a=new q(e,{detail:t});i.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(t){var e,n=t,i=this.options.loading,r=this.options.error;return null!==(e=t)&&"object"===(void 0===e?"undefined":T(e))&&(t.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+t),n=t.src,i=t.loading||this.options.loading,r=t.error||this.options.error),{src:n,loading:i,error:r}}}]),e}()},lt=function(){function t(e){var n=e.lazy;S(this,t),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return I(t,[{key:"bind",value:function(t,e,n){var i=new ht({el:t,binding:e,vnode:n,lazy:this.lazy});this._queue.push(i)}},{key:"update",value:function(t,e,n){var i=J(this._queue,function(e){return e.el===t});i&&i.update({el:t,binding:e,vnode:n})}},{key:"unbind",value:function(t,e,n){var i=J(this._queue,function(e){return e.el===t});i&&(i.clear(),G(this._queue,i))}}]),t}(),dt={selector:"img"},ht=function(){function t(e){var n=e.el,i=e.binding,r=e.vnode,o=e.lazy;S(this,t),this.el=null,this.vnode=r,this.binding=i,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:i})}return I(t,[{key:"update",value:function(t){var e=this,n=t.el,i=t.binding;this.el=n,this.options=F({},dt,i.value),this.getImgs().forEach(function(t){e.lazy.add(t,F({},e.binding,{value:{src:"dataset"in t?t.dataset.src:t.getAttribute("data-src"),error:("dataset"in t?t.dataset.error:t.getAttribute("data-error"))||e.options.error,loading:("dataset"in t?t.dataset.loading:t.getAttribute("data-loading"))||e.options.loading}}),e.vnode)})}},{key:"getImgs",value:function(){return function(t){for(var e=t.length,n=[],i=0;i<e;i++)n.push(t[i]);return n}(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var t=this;this.getImgs().forEach(function(e){return t.lazy.remove(e)}),this.vnode=null,this.binding=null,this.lazy=null}}]),t}(),ft={install:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new(ct(t))(n),r=new lt({lazy:i}),o="2"===t.version.split(".")[0];t.prototype.$Lazyload=i,n.lazyComponent&&t.component("lazy-component",function(t){return{props:{tag:{type:String,default:"div"}},render:function(t){return!1===this.show?t(this.tag):t(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),P&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)},destroy:function(){return this.$destroy}}}}(i)),n.lazyImage&&t.component("lazy-image",(e=i,{props:{src:[String,Object],tag:{type:String,default:"img"}},render:function(t){return t(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data:function(){return{el:null,options:{src:"",error:"",loading:"",attempt:e.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src:function(){this.init(),e.addLazyBox(this),e.lazyLoadHandler()}},created:function(){this.init(),this.renderSrc=this.options.loading},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{init:function(){var t=e._valueFormatter(this.src),n=t.src,i=t.loading,r=t.error;this.state.loaded=!1,this.options.src=n,this.options.error=r,this.options.loading=i,this.renderSrc=this.options.loading},getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),P&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it;if(this.state.attempt>this.options.attempt-1&&this.state.error)return e.options.silent||console.log("VueLazyload log: "+this.options.src+" tried too more than "+this.options.attempt+" times"),void n();var i=this.options.src;tt({src:i},function(e){var n=e.src;t.renderSrc=n,t.state.loaded=!0},function(e){t.state.attempt++,t.renderSrc=t.options.error,t.state.error=!0})}}})),o?(t.directive("lazy",{bind:i.add.bind(i),update:i.update.bind(i),componentUpdated:i.lazyLoadHandler.bind(i),unbind:i.remove.bind(i)}),t.directive("lazy-container",{bind:r.bind.bind(r),componentUpdated:r.update.bind(r),unbind:r.unbind.bind(r)})):(t.directive("lazy",{bind:i.lazyLoadHandler.bind(i),update:function(t,e){F(this.vm.$refs,this.vm.$els),i.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){i.remove(this.el)}}),t.directive("lazy-container",{update:function(t,e){r.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){r.unbind(this.el)}}))}};i.a.config.productionTip=!1,i.a.use(ft,{preLoad:1.3,error:"https://goss.veer.com/creative/vcg/veer/800water/veer-312575931.jpg",loading:"https://img.zcool.cn/community/01e5ac58e0caeaa801219c77d86d53.gif",attempt:1}),new i.a({el:"#app",router:O,components:{App:s},template:"<App/>"})},TSYj:function(t,e){},gyMJ:function(t,e,n){"use strict";n.d(e,"f",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"b",function(){return s}),n.d(e,"a",function(){return u}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return l});var i=n("mtWM"),r=n.n(i);r.a.defaults.baseURL="http://localhost:3000",r.a.interceptors.response.use(function(t){return t.data});var o=function(t){return r.a.delete("/book?id="+t)},a=function(t){return r.a.get("/book?id="+t)},s=function(t,e){return r.a.put("/book?id="+t,e)},u=function(t){return r.a.post("/book",t)},c=function(){return r.a.all([r.a.get("/sliders"),r.a.get("/hot")])},l=function(t){return r.a.get("/page?offset="+t)}},hLkW:function(t,e){},l3Xj:function(t,e){},v2ns:function(t,e){},wRQu:function(t,e){},xwgX:function(t,e){},yxJj:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.497f41f94960a0c16b78.js.map