/*! For license information please see driven-navbar.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,t){var n={},r={};return Object.defineProperty(n,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))},function(e){r.default=e.default}],execute:function(){e((()=>{var e={143:e=>{"use strict";e.exports=function(e,t,n,r,o,a,i,u){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,u],l=0;(c=new Error(t.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var s in a=Object(arguments[c]))n.call(a,s)&&(u[s]=a[s]);if(t){i=t(a);for(var l=0;l<i.length;l++)r.call(a,i[l])&&(u[i[l]]=a[i[l]])}}return u}},251:(e,t,n)=>{"use strict";n(418);var r=n(954),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:i.current}}t.jsx=s,t.jsxs=s},893:(e,t,n)=>{"use strict";e.exports=n(251)},722:(e,t,n)=>{const r=n(905).R;t.s=function(e){if(e||(e=1),!n.y.meta||!n.y.meta.url)throw console.error("__system_context__",n.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");n.p=r(n.y.meta.url,e)}},905:(e,t,n)=>{t.R=function(e,t){var n=document.createElement("a");n.href=e;for(var r="/"===n.pathname[0]?n.pathname:"/"+n.pathname,o=0,a=r.length;o!==t&&a>=0;)"/"===r[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=r.slice(0,a+1);return n.protocol+"//"+n.host+i};Number.isInteger},954:e=>{"use strict";e.exports=n},493:e=>{"use strict";e.exports=r}},o={};function a(t){var n=o[t];if(void 0!==n)return n.exports;var r=o[t]={exports:{}};return e[t](r,r.exports,a),r.exports}a.y=t,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var i={};return(0,a(722).s)(1),(()=>{"use strict";a.r(i),a.d(i,{bootstrap:()=>ge,mount:()=>be,unmount:()=>Ee});var e=a(954),t=a(493);function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n;if("function"!=typeof(n=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(c(n)));return function(){var e=n(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(c(e)));return e}}var l=null;try{l=require("react").createContext()}catch(n){}var p={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function f(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function m(e,t){return new Promise((function(n,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=y(e,t,(function(){n(this)})),a=s(e,t)(),i=function(e){var t=e.opts,n=e.elementToRender,r=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=t.ReactDOM[o](r);return a.render(n),a}return"hydrate"===o?t.ReactDOM.hydrate(n,r):t.ReactDOM.render(n,r),null}({elementToRender:o,domElement:a,opts:e});e.domElements[t.name]=a,e.renderResults[t.name]=i}))}function d(e,t){return new Promise((function(n){e.unmountFinished=n;var r=e.renderResults[t.name];r&&r.unmount?r.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function h(e,t){return new Promise((function(n){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(n);var r=y(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(r);else{var a=s(e,t)();e.ReactDOM.render(r,a)}}))}function y(e,t,n){var o=e.React.createElement(e.rootComponent,t),a=l?e.React.createElement(l.Provider,{value:t},o):o;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function n(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},n.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},n.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},n}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),e.React.createElement(e.SingleSpaRoot,r(r({},t),{},{mountFinished:n,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}var v=[{name:"Home",href:"/"},{name:"TPeople",href:"/people"},{name:"TPlanets",href:"/planets"}],g=a(143),b=a.n(g);function E(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function w(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function O(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}E.__suppressDeprecationWarning=!0,w.__suppressDeprecationWarning=!0,O.__suppressDeprecationWarning=!0;var R,j,C,S,P,x=function(e,t){return e.substr(0,t.length)===t},_=function(e,t){if(x(e,"/"))return e;var n=e.split("?"),r=n[0],o=n[1],a=t.split("?")[0],i=B(r),u=B(a);if(""===i[0])return M(a,o);if(!x(i[0],".")){var c=u.concat(i).join("/");return M(("/"===a?"":"/")+c,o)}for(var s=u.concat(i),l=[],p=0,f=s.length;p<f;p++){var m=s[p];".."===m?l.pop():"."!==m&&l.push(m)}return M("/"+l.join("/"),o)},D=function(e,t){var n=e.split("?"),r=n[0],o=n[1],a=void 0===o?"":o,i="/"+B(r).map((function(e){var n=U.exec(e);return n?t[n[1]]:e})).join("/"),u=t.location,c=(u=void 0===u?{}:u).search,s=(void 0===c?"":c).split("?")[1]||"";return M(i,a,s)},U=/^:(.+)/,F=function(e){return U.test(e)},T=function(e){return e&&"*"===e[0]},k=function(e,t){return{route:e,score:e.default?0:B(e.path).reduce((function(e,t){return e+=4,function(e){return""===e}(t)?e+=1:F(t)?e+=2:T(t)?e-=5:e+=3,e}),0),index:t}},N=function(e){return e.map(k).sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:e.index-t.index}))},B=function(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")},M=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e+((n=n.filter((function(e){return e&&e.length>0})))&&n.length>0?"?"+n.join("&"):"")},W=["uri","path"],I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A=function(e){var t=e.location,n=t.search,r=t.hash,o=t.href,a=t.origin,i=t.protocol,u=t.host,c=t.hostname,s=t.port,l=e.location.pathname;return!l&&o&&L&&(l=new URL(o).pathname),{pathname:encodeURI(decodeURI(l)),search:n,hash:r,href:o,origin:a,protocol:i,host:u,hostname:c,port:s,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}},L=!("undefined"==typeof window||!window.document||!window.document.createElement),q=(R=L?window:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=e.indexOf("?"),n={pathname:t>-1?e.substr(0,t):e,search:t>-1?e.substr(t):""},r=0,o=[n],a=[null];return{get location(){return o[r]},addEventListener:function(e,t){},removeEventListener:function(e,t){},history:{get entries(){return o},get index(){return r},get state(){return a[r]},pushState:function(e,t,n){var i=n.split("?"),u=i[0],c=i[1],s=void 0===c?"":c;r++,o.push({pathname:u,search:s.length?"?"+s:s}),a.push(e)},replaceState:function(e,t,n){var i=n.split("?"),u=i[0],c=i[1],s=void 0===c?"":c;o[r]={pathname:u,search:s},a[r]=e},go:function(e){var t=r+e;t<0||t>a.length-1||(r=t)}}}}(),j=[],C=A(R),S=!1,P=function(){},{get location(){return C},get transitioning(){return S},_onTransitionComplete:function(){S=!1,P()},listen:function(e){j.push(e);var t=function(){C=A(R),e({location:C,action:"POP"})};return R.addEventListener("popstate",t),function(){R.removeEventListener("popstate",t),j=j.filter((function(t){return t!==e}))}},navigate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.state,r=t.replace,o=void 0!==r&&r;if("number"==typeof e)R.history.go(e);else{n=I({},n,{key:Date.now()+""});try{S||o?R.history.replaceState(n,null,e):R.history.pushState(n,null,e)}catch(t){R.location[o?"replace":"assign"](e)}}C=A(R),S=!0;var a=new Promise((function(e){return P=e}));return j.forEach((function(e){return e({location:C,action:"PUSH"})})),a}}),G=(q.navigate,Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e});function $(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function J(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var V=function(t,n){var r=(0,e.createContext)(n);return r.displayName=t,r},Y=V("Location"),z=function(t){var n=t.children;return e.default.createElement(Y.Consumer,null,(function(t){return t?n(t):e.default.createElement(Q,null,n)}))},Q=function(t){function n(){var e,r;H(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=r=K(this,t.call.apply(t,[this].concat(a))),r.state={context:r.getContext(),refs:{unlisten:null}},K(r,e)}return J(n,t),n.prototype.getContext=function(){var e=this.props.history;return{navigate:e.navigate,location:e.location}},n.prototype.componentDidCatch=function(e,t){if(!le(e))throw e;(0,this.props.history.navigate)(e.uri,{replace:!0})},n.prototype.componentDidUpdate=function(e,t){t.context.location!==this.state.context.location&&this.props.history._onTransitionComplete()},n.prototype.componentDidMount=function(){var e=this,t=this.state.refs,n=this.props.history;n._onTransitionComplete(),t.unlisten=n.listen((function(){Promise.resolve().then((function(){requestAnimationFrame((function(){e.unmounted||e.setState((function(){return{context:e.getContext()}}))}))}))}))},n.prototype.componentWillUnmount=function(){var e=this.state.refs;this.unmounted=!0,e.unlisten()},n.prototype.render=function(){var t=this.state.context,n=this.props.children;return e.default.createElement(Y.Provider,{value:t},"function"==typeof n?n(t):n||null)},n}(e.default.Component);Q.defaultProps={history:q};var X=V("Base",{baseuri:"/",basepath:"/",navigate:q.navigate}),Z=function(t){return e.default.createElement(X.Consumer,null,(function(n){return e.default.createElement(z,null,(function(r){return e.default.createElement(ee,G({},n,r,t))}))}))},ee=function(t){function n(){return H(this,n),K(this,t.apply(this,arguments))}return J(n,t),n.prototype.render=function(){var t=this.props,n=t.location,r=t.navigate,o=t.basepath,a=t.primary,i=t.children,u=(t.baseuri,t.component),c=void 0===u?"div":u,s=$(t,["location","navigate","basepath","primary","children","baseuri","component"]),l=function(e,t){for(var n=void 0,r=void 0,o=t.split("?")[0],a=B(o),i=""===a[0],u=N(e),c=0,s=u.length;c<s;c++){var l=!1,p=u[c].route;if(p.default)r={route:p,params:{},uri:t};else{for(var f=B(p.path),m={},d=Math.max(a.length,f.length),h=0;h<d;h++){var y=f[h],v=a[h];if(T(y)){m[y.slice(1)||"*"]=a.slice(h).map(decodeURIComponent).join("/");break}if(void 0===v){l=!0;break}var g=U.exec(y);if(g&&!i){-1===W.indexOf(g[1])||b()(!1);var E=decodeURIComponent(v);m[g[1]]=E}else if(y!==v){l=!0;break}}if(!l){n={route:p,params:m,uri:"/"+a.slice(0,h).join("/")};break}}}return n||r||null}(e.default.Children.toArray(i).reduce((function(e,t){var n=de(o)(t);return e.concat(n)}),[]),n.pathname);if(l){var p=l.params,f=l.uri,m=l.route,d=l.route.value;o=m.default?o:m.path.replace(/\*$/,"");var h=G({},p,{uri:f,location:n,navigate:function(e,t){return r(_(e,f),t)}}),y=e.default.cloneElement(d,h,d.props.children?e.default.createElement(Z,{location:n,primary:a},d.props.children):void 0),v=a?ne:c,g=a?G({uri:f,location:n,component:c},s):s;return e.default.createElement(X.Provider,{value:{baseuri:f,basepath:o,navigate:h.navigate}},e.default.createElement(v,g,y))}return null},n}(e.default.PureComponent);ee.defaultProps={primary:!0};var te=V("Focus"),ne=function(t){var n=t.uri,r=t.location,o=t.component,a=$(t,["uri","location","component"]);return e.default.createElement(te.Consumer,null,(function(t){return e.default.createElement(ae,G({},a,{component:o,requestFocus:t,uri:n,location:r}))}))},re=!0,oe=0,ae=function(t){function n(){var e,r;H(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=r=K(this,t.call.apply(t,[this].concat(a))),r.state={},r.requestFocus=function(e){!r.state.shouldFocus&&e&&e.focus()},K(r,e)}return J(n,t),n.getDerivedStateFromProps=function(e,t){if(null==t.uri)return G({shouldFocus:!0},e);var n=e.uri!==t.uri,r=t.location.pathname!==e.location.pathname&&e.location.pathname===e.uri;return G({shouldFocus:n||r},e)},n.prototype.componentDidMount=function(){oe++,this.focus()},n.prototype.componentWillUnmount=function(){0==--oe&&(re=!0)},n.prototype.componentDidUpdate=function(e,t){e.location!==this.props.location&&this.state.shouldFocus&&this.focus()},n.prototype.focus=function(){var e=this.props.requestFocus;e?e(this.node):re?re=!1:this.node&&(this.node.contains(document.activeElement)||this.node.focus())},n.prototype.render=function(){var t=this,n=this.props,r=(n.children,n.style),o=(n.requestFocus,n.component),a=void 0===o?"div":o,i=(n.uri,n.location,$(n,["children","style","requestFocus","component","uri","location"]));return e.default.createElement(a,G({style:G({outline:"none"},r),tabIndex:"-1",ref:function(e){return t.node=e}},i),e.default.createElement(te.Provider,{value:this.requestFocus},this.props.children))},n}(e.default.Component);!function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,r=null,o=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?o="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(o="UNSAFE_componentWillUpdate"),null!==n||null!==r||null!==o){var a=e.displayName||e.name,i="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+a+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+(null!==o?"\n  "+o:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=E,t.componentWillReceiveProps=w),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=O;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,r)}}}(ae);var ie=function(){},ue=e.default.forwardRef;void 0===ue&&(ue=function(e){return e});var ce=ue((function(t,n){var r=t.innerRef,o=$(t,["innerRef"]);return e.default.createElement(X.Consumer,null,(function(t){t.basepath;var a=t.baseuri;return e.default.createElement(z,null,(function(t){var i=t.location,u=t.navigate,c=o.to,s=o.state,l=o.replace,p=o.getProps,f=void 0===p?ie:p,m=$(o,["to","state","replace","getProps"]),d=_(c,a),h=encodeURI(d),y=i.pathname===h,v=x(i.pathname,h);return e.default.createElement("a",G({ref:n||r,"aria-current":y?"page":void 0},m,f({isCurrent:y,isPartiallyCurrent:v,href:d,location:i}),{href:d,onClick:function(e){if(m.onClick&&m.onClick(e),he(e)){e.preventDefault();var t=l;if("boolean"!=typeof l&&y){var n=G({},i.state),r=(n.key,$(n,["key"]));o=G({},s),a=r,t=(c=Object.keys(o)).length===Object.keys(a).length&&c.every((function(e){return a.hasOwnProperty(e)&&o[e]===a[e]}))}u(d,{state:s,replace:t})}var o,a,c}}))}))}))}));function se(e){this.uri=e}ce.displayName="Link";var le=function(e){return e instanceof se},pe=function(e){function t(){return H(this,t),K(this,e.apply(this,arguments))}return J(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.navigate,n=e.to,r=(e.from,e.replace),o=void 0===r||r,a=e.state,i=(e.noThrow,e.baseuri),u=$(e,["navigate","to","from","replace","state","noThrow","baseuri"]);Promise.resolve().then((function(){var e=_(n,i);t(D(e,u),{replace:o,state:a})}))},t.prototype.render=function(){var e=this.props,t=(e.navigate,e.to),n=(e.from,e.replace,e.state,e.noThrow),r=e.baseuri,o=$(e,["navigate","to","from","replace","state","noThrow","baseuri"]),a=_(t,r);return n||function(e){throw new se(e)}(D(a,o)),null},t}(e.default.Component),fe=function(t){return e.default.createElement(X.Consumer,null,(function(n){var r=n.baseuri;return e.default.createElement(z,null,(function(n){return e.default.createElement(pe,G({},n,{baseuri:r},t))}))}))},me=function(e){return e.replace(/(^\/+|\/+$)/g,"")},de=function t(n){return function(r){if(!r)return null;if(r.type===e.default.Fragment&&r.props.children)return e.default.Children.map(r.props.children,t(n));var o,a,i;if(r.props.path||r.props.default||r.type===fe||b()(!1),r.type!==fe||r.props.from&&r.props.to||b()(!1),r.type===fe&&(o=r.props.from,a=r.props.to,i=function(e){return F(e)},B(o).filter(i).sort().join("/")!==B(a).filter(i).sort().join("/"))&&b()(!1),r.props.default)return{value:r,default:!0};var u=r.type===fe?r.props.from:r.props.path,c="/"===u?n:me(n)+"/"+me(u);return{value:r,default:r.props.default,path:r.props.children?me(c)+"/*":c}}},he=function(e){return!e.defaultPrevented&&0===e.button&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},ye=a(893),ve=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var t=r(r({},p),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!l&&t.React.createContext&&(l=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var n={bootstrap:f.bind(null,t),mount:m.bind(null,t),unmount:d.bind(null,t)};return t.parcelCanUpdate&&(n.update=h.bind(null,t)),n}({React:e.default,ReactDOM:t.default,rootComponent:function(e){return(0,ye.jsxs)("div",{className:"h-16 flex items-center justify-between px-6 bg-primary text-white",children:[(0,ye.jsx)("div",{className:"flex items-center justify-between",children:v.map((function(e){return(0,ye.jsx)(ce,{className:"p-6",to:e.href,children:e.name},e.href)}))}),(0,ye.jsx)("div",{className:"flex items-center justify-between",children:(0,ye.jsx)("a",{href:"https://github.com/orgs/Test-SPA/repositories",className:"externalLink",children:"Github project"})})]})},errorBoundary:function(e,t,n){return(0,ye.jsx)("div",{className:"h-16 flex items-center justify-between px-6 bg-primary text-white",children:"Error"})}}),ge=ve.bootstrap,be=ve.mount,Ee=ve.unmount})(),i})())}}}));
//# sourceMappingURL=driven-navbar.js.map