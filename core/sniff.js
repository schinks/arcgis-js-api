// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/window","dojo/sniff","../kernel"],function(r,e,i){if(e("host-node"))return e;var t,n=e("ff"),a=e("ie"),o=void 0===a&&e("trident")>=7,d=e("webkit"),s=e("opera"),m=e("chrome"),f=e("safari"),c=r.global,x=navigator.userAgent;if(t=x.match(/(iPhone|iPad|CPU)\s+OS\s+(\d+\_\d+)/i),t&&e.add("esri-iphone",parseFloat(t[2].replace("_","."))),t=x.match(/Android\s+(\d+\.\d+)/i),t&&e.add("esri-android",parseFloat(t[1])),t=x.match(/Fennec\/(\d+\.\d+)/i),t&&e.add("esri-fennec",parseFloat(t[1])),x.indexOf("BlackBerry")>=0&&x.indexOf("WebKit")>=0&&e.add("esri-blackberry",1),e.add("esri-touch",e("esri-iphone")||e("esri-android")||e("esri-blackberry")||e("esri-fennec")>=6||(n||d)&&document.createTouch?!0:!1),t=x.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i),t&&e.add("esri-mobile",t),e.add("esri-pointer",navigator.pointerEnabled||navigator.msPointerEnabled),i._getDOMAccessor=function(r){var e="";return n?e="Moz":d?e="Webkit":a?e="ms":s&&(e="O"),e+r.charAt(0).toUpperCase()+r.substr(1)},e.add("esri-phonegap",!!c.cordova),e.add("esri-cors",e("esri-phonegap")||"XMLHttpRequest"in c&&"withCredentials"in new XMLHttpRequest),e("host-webworker"))return e;e.add("esri-file-upload",c.FormData&&c.FileList?!0:!1),e.add("esri-workers",c.Worker?!0:!1),e.add("esri-transforms",o||a>=9||n>=3.5||m>=4||f>=3.1||s>=10.5||e("esri-iphone")>=3.2||e("esri-android")>=2.1),e.add("esri-transitions",o||a>=10||n>=4||m>=4||f>=3.1||s>=10.5||e("esri-iphone")>=3.2||e("esri-android")>=2.1),e.add("esri-transforms3d",o||n>=10||m>=12||f>=4||e("esri-iphone")>=3.2||e("esri-android")>=3),e.add("esri-url-encodes-apostrophe",function(){var r=c.document.createElement("a");return r.href="?'",r.href.indexOf("?%27")>-1}),e("esri-android")<3&&(e.add("esri-transforms",!1,!1,!0),e.add("esri-transitions",!1,!1,!0),e.add("esri-transforms3d",!1,!1,!0)),i._css=function(r){var i=e("esri-transforms3d");void 0!==r&&null!==r?i=r:i&&(m||f&&!e("esri-iphone"))&&(i=!1);var t=i?"translate3d(":"translate(",o=i?m?",-1px)":",0px)":")",c=i?"scale3d(":"scale(",x=i?",1)":")",u=i?"rotate3d(0,0,1,":"rotate(",l=i?"matrix3d(":"matrix(",p=i?",0,0,":",",b=i?",0,0,0,0,1,0,":",",h=i?",0,1)":")";return{names:{transition:d&&"-webkit-transition"||n&&"MozTransition"||s&&"OTransition"||a&&"msTransition"||"transition",transform:d&&"-webkit-transform"||n&&"MozTransform"||s&&"OTransform"||a&&"msTransform"||"transform",transformName:d&&"-webkit-transform"||n&&"-moz-transform"||s&&"-o-transform"||a&&"-ms-transform"||"transform",origin:d&&"-webkit-transform-origin"||n&&"MozTransformOrigin"||s&&"OTransformOrigin"||a&&"msTransformOrigin"||"transformOrigin",endEvent:d&&"webkitTransitionEnd"||n&&"transitionend"||s&&"oTransitionEnd"||a&&"MSTransitionEnd"||"transitionend"},translate:function(r,e){return t+r+"px,"+e+"px"+o},scale:function(r){return c+r+","+r+x},rotate:function(r){return u+r+"deg)"},matrix:function(r){return r.m?(r=r.m,l+r[0].toFixed(10)+","+r[1].toFixed(10)+p+r[2].toFixed(10)+","+r[3].toFixed(10)+b+r[4].toFixed(10)+(n?"px,":",")+r[5].toFixed(10)+(n?"px":"")+h):l+r.xx.toFixed(10)+","+r.yx.toFixed(10)+p+r.xy.toFixed(10)+","+r.yy.toFixed(10)+b+r.dx.toFixed(10)+(n?"px,":",")+r.dy.toFixed(10)+(n?"px":"")+h},matrix3d:function(r){return r=r.m,"matrix3d("+r[0].toFixed(10)+","+r[1].toFixed(10)+",0,0,"+r[2].toFixed(10)+","+r[3].toFixed(10)+",0,0,0,0,1,0,"+r[4].toFixed(10)+","+r[5].toFixed(10)+",0,1)"},getScaleFromMatrix:function(r){if(!r)return 1;r=r.toLowerCase();var e=r.indexOf("matrix3d")>-1?"matrix3d(":"matrix(";return Number(r.substring(e.length,r.indexOf(",")))}}};var u=function(){var r,e=function(r){for(var e=["webgl","experimental-webgl","webkit-3d","moz-webgl"],i=null,t=0;t<e.length;++t){try{i=r.getContext(e[t])}catch(n){}if(i)break}return i};try{if(!c.WebGLRenderingContext)throw 0;r=document.createElement("canvas")}catch(i){return!1}var t=e(r);if(!t)return!1;var n=t.getParameter(t.VERSION);if(!n)return!1;var a=n.match(/^WebGL\s+([\d.]*)/);return a&&parseFloat(a[1])>.91};return e.add("esri-webgl",u),e});