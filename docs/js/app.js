(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)c=i[l],o[c]&&d.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e),a=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-crypto-dashboard/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0734":function(e){e.exports=[{symbol:"BTCUSDT",base:"BTC",quote:"USDT",name:"Bitcoin"},{symbol:"ETHUSDT",base:"ETH",quote:"USDT",name:"Ethereum"},{symbol:"XRPUSDT",base:"XRP",quote:"USDT",name:"XRP"},{symbol:"ETHBTC",base:"ETH",quote:"BTC",name:"Ethereum"},{symbol:"MDABTC",base:"MDA",quote:"BTC",name:"Moeda"},{symbol:"EOSBTC",base:"EOS",quote:"BTC",name:"EOS"},{symbol:"MDAETH",base:"MDA",quote:"ETH",name:"Moeda"},{symbol:"TRXETH",base:"TRX",quote:"ETH",name:"Tronix"}]},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("LayoutPage")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-container"},[n("header",{staticClass:"page-header bg-primary"},["infoview"===e.currentPage?n("button",{staticClass:"back-btn",on:{click:function(t){e.$router.push({path:"/"})}}},[n("i",{staticClass:"fa fa-angle-left fa-2x"})]):e._e(),n("span",{staticClass:"page-title"},[e._v("VUE CRYPTO DASHBOARD")])]),n("div",{staticClass:"page-container"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",{attrs:{include:"dashboard"}},[n("router-view")],1)],1)],1)])},i=[],u=(n("7f7f"),{name:"LayoutPage",data:function(){return{currentPage:"dashboard"}},watch:{$route:{deep:!0,handler:function(e){this.currentPage=e.name}}}}),s=u,l=n("2877"),f=Object(l["a"])(s,c,i,!1,null,null,null),d=f.exports,p={components:{LayoutPage:d}},b=p,m=Object(l["a"])(b,o,a,!1,null,null,null),v=m.exports,h=n("8c4f");r["a"].use(h["a"]);var y=new h["a"]({base:"/vue-crypto-dashboard/",mode:"history",routes:[{path:"/",name:"dashboard",component:function(){return n.e("chunk-73561540").then(n.bind(null,"7277"))}},{path:"/view/:symbol",name:"infoview",component:function(){return n.e("chunk-6f3e5ba8").then(n.bind(null,"686e"))},props:!0}]});y.beforeEach(function(e,t,n){console.log("BASE /vue-crypto-dashboard/"),n()});var g=y,T=n("c0d6"),E=n("9483");Object(E["a"])("".concat("/vue-crypto-dashboard/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d5a0"),n("a89b");var w={bind:function(e,t,n){e.clickOutsideEvent=function(r){e==r.target||e.contains(r.target)||n.context[t.expression](r)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}};r["a"].config.productionTip=!1,r["a"].directive("click-outside",w),new r["a"]({router:g,store:T["a"],render:function(e){return e(v)}}).$mount("#app")},a89b:function(e,t,n){},c0d6:function(e,t,n){"use strict";n("20d6"),n("7514");var r=n("2b0e"),o=n("2f62"),a=n("0734");r["a"].use(o["a"]),t["a"]=new o["a"].Store({strict:!0,state:{currencies:localStorage.hasOwnProperty("vue-crypto-currencies-new")?JSON.parse(localStorage.getItem("vue-crypto-currencies-new")):a,tickers:{},chartData:[]},getters:{getSymbolById:function(e){return function(t){return e.currencies.find(function(e){return e.symbol===t})}},getTickerById:function(e){return function(t){return e.tickers[t]}}},mutations:{UPDATE_TICKER:function(e,t){var n=e.tickers[t.symbol];t.pchg=n?t.price>n.price?1:-1:1,r["a"].set(e.tickers,t.symbol,t)},ADD_COIN_PAIR:function(e,t){e.tickers[t.symbol]||(e.currencies.push(t),localStorage.setItem("vue-crypto-currencies-new",JSON.stringify(e.currencies))),r["a"].set(e.tickers,t.symbol,{pchg:1})},REMOVE_COIN_PAIR:function(e,t){r["a"].delete(e.tickers,t),e.currencies.splice(e.currencies.findIndex(function(e){return e.symbol===t}),1),localStorage.setItem("vue-crypto-currencies-new",JSON.stringify(e.currencies))}}})},d5a0:function(e,t,n){}});
//# sourceMappingURL=app.js.map