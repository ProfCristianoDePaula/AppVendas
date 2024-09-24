import{g as getAssetPath}from"./index-b72adede.js";var CACHED_MAP;var getIconMap=function(){if(typeof window==="undefined"){return new Map}else{if(!CACHED_MAP){var t=window;t.Ionicons=t.Ionicons||{};CACHED_MAP=t.Ionicons.map=t.Ionicons.map||new Map}return CACHED_MAP}};var addIcons=function(t){Object.keys(t).forEach((function(e){addToIconMap(e,t[e]);var r=e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g,"$1-$2").toLowerCase();if(e!==r){addToIconMap(r,t[e])}}))};var addToIconMap=function(t,e){var r=getIconMap();var n=r.get(t);if(n===undefined){r.set(t,e)}else if(n!==e){console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(t,'". Ensure that multiple icons are not mapped to the same icon name.'))}};var getUrl=function(t){var e=getSrc(t.src);if(e){return e}e=getName(t.name,t.icon,t.mode,t.ios,t.md);if(e){return getNamedUrl(e,t)}if(t.icon){e=getSrc(t.icon);if(e){return e}e=getSrc(t.icon[t.mode]);if(e){return e}}return null};var getNamedUrl=function(t,e){var r=getIconMap().get(t);if(r){return r}try{return getAssetPath("svg/".concat(t,".svg"))}catch(r){console.warn('[Ionicons Warning]: Could not load icon with name "'.concat(t,'". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.'),e)}};var getName=function(t,e,r,n,i){r=(r&&toLower(r))==="ios"?"ios":"md";if(n&&r==="ios"){t=toLower(n)}else if(i&&r==="md"){t=toLower(i)}else{if(!t&&e&&!isSrc(e)){t=e}if(isStr(t)){t=toLower(t)}}if(!isStr(t)||t.trim()===""){return null}var o=t.replace(/[a-z]|-|\d/gi,"");if(o!==""){return null}return t};var getSrc=function(t){if(isStr(t)){t=t.trim();if(isSrc(t)){return t}}return null};var isSrc=function(t){return t.length>0&&/(\/|\.)/.test(t)};var isStr=function(t){return typeof t==="string"};var toLower=function(t){return t.toLowerCase()};var inheritAttributes=function(t,e){if(e===void 0){e=[]}var r={};e.forEach((function(e){if(t.hasAttribute(e)){var n=t.getAttribute(e);if(n!==null){r[e]=t.getAttribute(e)}t.removeAttribute(e)}}));return r};var isRTL=function(t){if(t){if(t.dir!==""){return t.dir.toLowerCase()==="rtl"}}return(document===null||document===void 0?void 0:document.dir.toLowerCase())==="rtl"};export{addIcons as a,inheritAttributes as b,getName as c,isRTL as d,getUrl as g,isStr as i};