(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{380:function(a,t,e){"use strict";e.r(t);var r=e(45),i=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"jsbridge技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsbridge技术"}},[a._v("#")]),a._v(" JSBridge技术")]),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("Hybrid开发中，如何让web页面与native进行交互是我们最常见的问题，而JSBridge就是为了解决这种问题，打通JavaScript与Native的利器。")]),a._v(" "),e("h2",{attrs:{id:"什么是jsbridge技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是jsbridge技术"}},[a._v("#")]),a._v(" 什么是JSBridge技术")]),a._v(" "),e("p",[a._v("JSBridge顾名思义是，是 Native 和 JavaScript 之间的桥梁，它的核心是构建 Native 和 JavaScripte 间双向通信的通道。")]),a._v(" "),e("p",[a._v("他的作用就是可以让JS可以向Native发送消息，调用Native的相关功能（如调用摄像头、定位、通讯录等）或者通知Native当前状态等;")]),a._v(" "),e("p",[a._v("同时Native也可以向JS发送消息进行消息推送或者通知相关的状态等；")]),a._v(" "),e("h2",{attrs:{id:"jsbridge原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsbridge原理"}},[a._v("#")]),a._v(" JSBridge原理")]),a._v(" "),e("h2",{attrs:{id:"javascript-调用-native"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-调用-native"}},[a._v("#")]),a._v(" JavaScript 调用 Native")]),a._v(" "),e("p",[a._v("JavaScript 调用 Native 的方式，主要有两种：注入 API 和 拦截 URL SCHEME。")]),a._v(" "),e("h3",{attrs:{id:"注入-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注入-api"}},[a._v("#")]),a._v(" 注入 API")]),a._v(" "),e("p",[a._v("通过WebView提供的接口，向JavaScript的window中注入对象或方法,让JavaScript调用时相当于执行相应的Native逻辑，达到JavaScript调用Native的效果。")]),a._v(" "),e("ul",[e("li",[a._v("Android - 使用addJavascriptInterface()方法")]),a._v(" "),e("li",[a._v("IOS UIWebView - 使用JavaScriptCore进行JS和OC的交互。")]),a._v(" "),e("li",[a._v("IOS WKWebView - 使用WKUserContentController进行JS和OC的交互。")])]),a._v(" "),e("h3",{attrs:{id:"拦截-url-scheme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拦截-url-scheme"}},[a._v("#")]),a._v(" 拦截 URL Scheme")]),a._v(" "),e("p",[a._v("Web 端通过某种方式（例如 iframe.src）发送 URL Scheme 请求，之后 Native 拦截到请求并根据 URL Scheme（包括所带的参数）进行相关操作。")]),a._v(" "),e("ul",[e("li",[a._v("Android - 使用shouldOverrideUrlLoading()方法")]),a._v(" "),e("li",[a._v("IOS UIWebView - 在UIWebView内发起的所有网络请求，都可以通过delegate函数在Native层得到通知。这样,我们可以在webview中捕获url scheme的触发(原理是利用 shouldStartLoadWithRequest)")])]),a._v(" "),e("h3",{attrs:{id:"改写浏览器原有对象-alert-console-prompt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#改写浏览器原有对象-alert-console-prompt"}},[a._v("#")]),a._v(" 改写浏览器原有对象：alert/console/prompt")]),a._v(" "),e("p",[a._v("使用prompt,console.log,alert方式，这三个方法对js里是属性原生的，在android webview这一层是可以重写这三个方法的。")]),a._v(" "),e("h2",{attrs:{id:"native-调用-javascript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#native-调用-javascript"}},[a._v("#")]),a._v(" Native 调用 JavaScript")]),a._v(" "),e("p",[a._v("相比于 JavaScript 调用 Native， Native 调用 JavaScript 较为简单，直接执行拼接好的 JavaScript 代码即可。")]),a._v(" "),e("p",[a._v("从外部调用 JavaScript 中的方法，因此 JavaScript 的方法必须在全局的 window 上。")]),a._v(" "),e("ul",[e("li",[a._v("android - webView.loadUrl() / webView.evaluateJavascript()")]),a._v(" "),e("li",[a._v("IOS UIWebView - shouldStartLoadWithRequest")]),a._v(" "),e("li",[a._v("IOS WKWebView")])])])}),[],!1,null,null,null);t.default=i.exports}}]);