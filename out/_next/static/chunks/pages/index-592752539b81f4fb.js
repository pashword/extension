(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,r=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,l=e.unoptimized,s=void 0!==l&&l,p=e.priority,h=void 0!==p&&p,y=e.loading,N=e.lazyRoot,A=void 0===N?null:N,k=e.lazyBoundary,I=e.className,E=e.quality,O=e.width,L=e.height,R=e.style,C=e.objectFit,P=e.objectPosition,q=e.onLoadingComplete,M=e.placeholder,W=void 0===M?"empty":M,D=e.blurDataURL,B=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=u.useContext(g.ImageConfigContext),V=u.useMemo((function(){var e=x||Z||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[Z]),U=B,F=n?"responsive":"intrinsic";"layout"in U&&(U.layout&&(F=U.layout),delete U.layout);var H=S;if("loader"in U){if(U.loader){var T=U.loader;H=function(e){e.config;var t=c(e,["config"]);return T(t)}}delete U.loader}var G="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var J=w(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(D=D||J.blurDataURL,G=J.src,(!F||"fill"!==F)&&(L=L||J.height,O=O||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var X=!h&&("lazy"===y||"undefined"===typeof y);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(s=!0,X=!1);b.has(t)&&(X=!1);V.unoptimized&&(s=!0);var Q,K=r(u.useState(!1),2),Y=K[0],$=K[1],ee=r(m.useIntersection({rootRef:A,rootMargin:k||"200px",disabled:!X}),3),te=ee[0],ne=ee[1],ie=ee[2],re=!X||ne,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:P},ce=z(O),ue=z(L),de=z(E);0;var fe=Object.assign({},R,se),me="blur"!==W||Y?{}:{backgroundSize:C||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===F)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof ce&&"undefined"!==typeof ue){var ge=ue/ce,pe=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===F?(oe.display="block",oe.position="relative",le=!0,ae.paddingTop=pe):"intrinsic"===F?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",le=!0,ae.maxWidth="100%",Q="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ce,"%27%20height=%27").concat(ue,"%27/%3e")):"fixed"===F&&(oe.display="inline-block",oe.position="relative",oe.width=ce,oe.height=ue)}else 0;var he={src:v,srcSet:void 0,sizes:void 0};re&&(he=j({config:V,src:t,unoptimized:s,layout:F,width:ce,quality:de,sizes:n,loader:H}));var xe=t;0;var be,ve="imagesrcset",ye="imagesizes";ve="imageSrcSet",ye="imageSizes";var we=(i(be={},ve,he.srcSet),i(be,ye,he.sizes),i(be,"crossOrigin",U.crossOrigin),be),je=u.default.useLayoutEffect,ze=u.useRef(q),Se=u.useRef(t);u.useEffect((function(){ze.current=q}),[q]),je((function(){Se.current!==t&&(ie(),Se.current=t)}),[ie,t]);var Ne=a({isLazy:X,imgAttributes:he,heightInt:ue,widthInt:ce,qualityInt:de,layout:F,className:I,imgStyle:fe,blurStyle:me,loading:y,config:V,unoptimized:s,placeholder:W,loader:H,srcString:xe,onLoadingCompleteRef:ze,setBlurComplete:$,setIntersection:te,isVisible:re,noscriptSizes:n},U);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:oe},le?u.default.createElement("span",{style:ae},Q?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Q}):null):null,u.default.createElement(_,Object.assign({},Ne))),h?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+he.src+he.srcSet+he.sizes,rel:"preload",as:"image",href:he.srcSet?void 0:he.src},we))):null)};var a=n(6495).Z,l=n(2648).Z,s=n(1598).Z,c=n(7273).Z,u=s(n(7294)),d=l(n(5443)),f=n(9309),m=n(7190),g=n(9977),p=(n(3794),n(2392));function h(e){return"/"===e[0]?e.slice(1):e}var x={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},b=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(h(n))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString()),o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(h(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(h(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function j(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,l=e.quality,s=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(i);l)c.push(parseInt(l[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,o(c));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,s),d=u.widths,f=u.kind,m=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map((function(e,i){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:d[m]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=y.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function N(e,t,n,i,r,o){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var _=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,l=e.imgStyle,s=e.blurStyle,d=e.isLazy,f=e.placeholder,m=e.loading,g=e.srcString,p=e.config,h=e.unoptimized,x=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,y=e.setIntersection,w=e.onLoad,z=e.onError,S=(e.isVisible,e.noscriptSizes),_=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=d?"lazy":m,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},_,t,{decoding:"async","data-nimg":r,className:o,style:a({},l,s),ref:u.useCallback((function(e){y(e),(null==e?void 0:e.complete)&&N(e,g,0,f,b,v)}),[y,g,r,f,b,v]),onLoad:function(e){N(e.currentTarget,g,0,f,b,v),w&&w(e)},onError:function(e){"blur"===f&&v(!0),z&&z(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},_,j({config:p,src:g,unoptimized:h,layout:r,width:n,quality:i,sizes:S,loader:x}),{decoding:"async","data-nimg":r,style:l,className:o,loading:m}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,u=i(r.useState(!1),2),d=u[0],f=u[1],m=i(r.useState(null),2),g=m[0],p=m[1];r.useEffect((function(){if(a){if(c||d)return;if(g&&g.tagName){var e=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=l.get(i)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:r},s.push(n),l.set(n,t),t}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(r);var t=s.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&s.splice(t,1)}}}(g,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var i=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(i)}}}),[g,c,n,t,d]);var h=r.useCallback((function(){f(!1)}),[]);return[p,d,h]};var r=n(7294),o=n(9311),a="function"===typeof IntersectionObserver,l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5075:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(9008),o=n.n(r),a=n(5675),l=n.n(a);t.default=function(){return(0,i.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-center py-2",children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:"flex w-full flex-1 flex-col items-center justify-center px-20 text-center",children:[(0,i.jsxs)("h1",{className:"text-6xl font-bold",children:["Welcome to"," ",(0,i.jsx)("a",{className:"text-blue-600",href:"https://nextjs.org",children:"Next.js!"})]}),(0,i.jsxs)("p",{className:"mt-3 text-2xl",children:["Get started by editing"," ",(0,i.jsx)("code",{className:"rounded-md bg-gray-100 p-3 font-mono text-lg",children:"pages/index.tsx"})]}),(0,i.jsxs)("div",{className:"mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full",children:[(0,i.jsxs)("a",{href:"https://nextjs.org/docs",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,i.jsx)("h3",{className:"text-2xl font-bold",children:"Documentation \u2192"}),(0,i.jsx)("p",{className:"mt-4 text-xl",children:"Find in-depth information about Next.js features and its API."})]}),(0,i.jsxs)("a",{href:"https://nextjs.org/learn",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,i.jsx)("h3",{className:"text-2xl font-bold",children:"Learn \u2192"}),(0,i.jsx)("p",{className:"mt-4 text-xl",children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,i.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,i.jsx)("h3",{className:"text-2xl font-bold",children:"Examples \u2192"}),(0,i.jsx)("p",{className:"mt-4 text-xl",children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,i.jsxs)("a",{href:"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,i.jsx)("h3",{className:"text-2xl font-bold",children:"Deploy \u2192"}),(0,i.jsx)("p",{className:"mt-4 text-xl",children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,i.jsx)("footer",{className:"flex h-24 w-full items-center justify-center border-t",children:(0,i.jsxs)("a",{className:"flex items-center justify-center gap-2",href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,i.jsx)(l(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})]})})]})}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);