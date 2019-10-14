// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/tsSupport/valuesHelper","../../../../core/Error","../../OptimizedFeature","../../OptimizedGeometry"],function(e,r,t,n,o,u,a,i){function s(e){for(var r=[];;){var t=e.next(),n=t.value;if(t.done)return r;r.push(n)}}function c(e){var r=[];return e.forEach(function(e){return r.push(e)}),r}function l(e){var r,n,o,u;return t(this,function(t){switch(t.label){case 0:switch(r=e.type){case"Feature":return[3,1];case"FeatureCollection":return[3,3]}return[3,7];case 1:return[4,e];case 2:return t.sent(),[3,7];case 3:n=0,o=e.features,t.label=4;case 4:return n<o.length?(u=o[n],u?[4,u]:[3,6]):[3,7];case 5:t.sent(),t.label=6;case 6:return n++,[3,4];case 7:return[2]}})}function f(e){var r,n,u,a,i,s,c,l,f,p;return t(this,function(t){switch(t.label){case 0:if(!e)return[2,null];switch(r=e.type){case"Point":return[3,1];case"LineString":case"MultiPoint":return[3,3];case"MultiLineString":case"Polygon":return[3,5];case"MultiPolygon":return[3,10]}return[3,17];case 1:return[4,e.coordinates];case 2:return t.sent(),[3,17];case 3:return[5,o(e.coordinates)];case 4:return t.sent(),[3,17];case 5:n=0,u=e.coordinates,t.label=6;case 6:return n<u.length?(a=u[n],[5,o(a)]):[3,9];case 7:t.sent(),t.label=8;case 8:return n++,[3,6];case 9:return[3,17];case 10:i=0,s=e.coordinates,t.label=11;case 11:if(!(i<s.length))return[3,16];c=s[i],l=0,f=c,t.label=12;case 12:return l<f.length?(p=f[l],[5,o(p)]):[3,15];case 13:t.sent(),t.label=14;case 14:return l++,[3,12];case 15:return i++,[3,11];case 16:return[3,17];case 17:return[2]}})}function p(e,r){var n,o,u,s,c,l,f,p,d,y,g;return void 0===r&&(r={}),t(this,function(t){switch(t.label){case 0:n=r.geometryType,o=r.ignoreIds,u=r.nextObjectId,s=void 0===u?1:u,t.label=1;case 1:return c=e.next(),(l=c.value,f=c.done,f)?[2]:(p=l.geometry,d=l.properties,y=l.id,p&&E[p.type]!==n?[3,1]:(g=new a.default(p?m(new i.default,p,r):null,d),g.objectId=o||null==y?s++:y,[4,g]));case 2:return t.sent(),[3,1];case 3:return[2]}})}function d(e){for(;;){var r=e.next(),t=r.value;if(r.done)return!1;if(t.length>2)return!0}}function y(e){return!h(e)}function g(e){return h(e)}function h(e){for(var r=0,t=0;t<e.length;t++){var n=e[t],o=e[(t+1)%e.length];r+=n[0]*o[1]-o[0]*n[1]}return r<=0}function v(e){var r=e[0],t=e[e.length-1];return r[0]===t[0]&&r[1]===t[1]&&r[2]===t[2]||e.push(r),e}function m(e,r,t){switch(r.type){case"LineString":return b(e,r,t);case"MultiLineString":return w(e,r,t);case"MultiPoint":return P(e,r,t);case"MultiPolygon":return S(e,r,t);case"Point":return G(e,r,t);case"Polygon":return M(e,r,t)}}function b(e,r,t){return F(e,r.coordinates,t),e}function w(e,r,t){for(var n=0,o=r.coordinates;n<o.length;n++){F(e,o[n],t)}return e}function P(e,r,t){return F(e,r.coordinates,t),e}function S(e,r,t){for(var n=0,o=r.coordinates;n<o.length;n++){var u=o[n];O(e,u[0],t);for(var a=1;a<u.length;a++)j(e,u[a],t)}return e}function G(e,r,t){return I(e,r.coordinates,t),e}function M(e,r,t){var n=r.coordinates;O(e,n[0],t);for(var o=1;o<n.length;o++)j(e,n[o],t);return e}function O(e,r,t){var n=v(r);y(n)?x(e,n,t):F(e,n,t)}function j(e,r,t){var n=v(r);g(n)?x(e,n,t):F(e,n,t)}function F(e,r,t){for(var n=0,o=r;n<o.length;n++){I(e,o[n],t)}e.lengths.push(r.length)}function x(e,r,t){for(var n=r.length-1;n>=0;n--)I(e,r[n],t);e.lengths.push(r.length)}function I(e,r,t){var n=r[0],o=r[1],u=r[2];e.coords.push(n,o),t.hasZ&&e.coords.push(u||0)}function L(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function N(e){if(!e)throw new u("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new u("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});if(e.crs){var r=e.crs,t=["urn:ogc:def:crs:OGC:1.3:CRS84","EPSG:4326"].map(function(e){return e.toLowerCase()});if("link"===r.type||-1===t.indexOf(r.properties.name.toLowerCase()))throw new u("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:r})}}function T(e,r){void 0===r&&(r={});for(var t=l(e),n=[],o=new Set,u=new Set,a=!1,i=Number.NEGATIVE_INFINITY,s=!1,p=void 0,y=r.geometryType,g=void 0===y?null:y,h=!1;;){var v=t.next(),m=v.value;if(v.done)return{fields:n,geometryType:g,hasZ:a,maxObjectId:Math.max(0,i),objectIdFieldType:p,objectIdOnFeature:s,unknownFields:c(u)};var b=m.geometry,w=m.properties,P=m.id;if(!b||(g||(g=E[b.type]),E[b.type]===g)){if(!a){a=d(f(b))}if(s||(s=null!=P)&&(p=typeof P),s&&"number"===p&&null!=P&&(i=Math.max(i,P)),!h&&w){var S=!0;for(var G in w)if(!o.has(G)){var M=w[G];if(null!=M){var O=L(M);"unknown"!==O?(u.delete(G),o.add(G),n.push({name:G,alias:G,type:O})):u.add(G)}else S=!1,u.add(G)}h=S}}}}function C(e,r){return s(p(l(e),r))}Object.defineProperty(r,"__esModule",{value:!0});var E={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};r.validateGeoJSON=N,r.inferLayerProperties=T,r.createOptimizedFeatures=C});