(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4330)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},u=r(1003),l=r(880),c=r(9246);var f={};function s(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,y=e.replace,v=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),E=w[0],j=w[1],_=i.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);i.default.useEffect((function(){var e=j&&r&&u.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,j,g,r,n]);var x={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:i}))}(e,n,d,p,y,v,m,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof g?g:n&&n.locale,I=n&&n.isLocaleDomain&&u.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);x.href=I||u.addBasePath(u.addLocale(p,C,n&&n.defaultLocale))}return i.default.cloneElement(t,x)};t.default=d},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],h=o(a.useState(t?t.current:null),2),y=h[0],v=h[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:r}))}),[n,y,r,d]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[m,d]};var a=r(7294),i=r(4686),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},4330:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),o=r(1664),a=r(8398),i=function(e){var t=e.children;return(0,n.jsx)("main",{style:{padding:"0 2%",maxWidth:500,width:"100%",margin:"auto",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center"},children:t})},u=function(){return(0,n.jsxs)(i,{children:[(0,n.jsxs)("h1",{style:{fontSize:"3rem",display:"flex",alignItems:"center",gap:24},children:["Weather with blob",(0,n.jsx)("span",{children:(0,n.jsx)("img",{src:(0,a.d)("/images/blob-cookie.png"),alt:"blob cookie",width:50,height:50})})]}),(0,n.jsx)(o.default,{href:"/today",passHref:!0,children:(0,n.jsx)("a",{children:"Che tempo far\xe0 domani?"})})]})}},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);