if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let t={};const c=e=>n(e,s),d={module:{uri:s},exports:t,require:c};i[s]=Promise.all(o.map((e=>d[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-6b57012e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icons/book.png",revision:"e34c785f34d478d1d5948828fceb1cdb"},{url:"index.html",revision:"71440dd2c5cba49b0498f4650e1932ad"},{url:"manifest.json",revision:"af57b736f8447c36d3439a20d5d60ca5"},{url:"README.md",revision:"00a224ac83f94f3eb5cd0e5a6e8a324a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
