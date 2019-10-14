// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/string","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol"],function(t,e,L){var r={};return r.getFillSamples=function(){var t={};return t[L.STYLE_SOLID]=null,t[L.STYLE_CROSS]="M 0 12 L 70 12 zM 10 0 L 10 20 z M 20 0 L 20 20 z M 30 0 L 30 20 z M 40 0 L 40 20 z M 50 0 L 50 20 z M 60 0 L 60 20 z",t[L.STYLE_DIAGONAL_CROSS]="M 0 10 L 10 20 z M 1.5 1.5 L 20 20 z M 10 0 L 30 20 z M 20 0 L 40 20 z M 30 0 L 50 20 z M 40 0 L 60 20 z M 50 0 L 68.5 18.5 z M 60 0 L 70 10 zM 0 10 L 10 0 z M 20 0 L 1.5 18.5 z M 10 20 L 30 0 z M 20 20 L 40 0 z M 30 20 L 50 0 z M 40 20 L 60 0 z M 50 20 L 68.5 1.5 z M 60 20 L 70 10 z",t[L.STYLE_FORWARD_DIAGONAL]="M 0 10 L 10 20 z M 1.5 1.5 L 20 20 z M 10 0 L 30 20 z M 20 0 L 40 20 z M 30 0 L 50 20 z M 40 0 L 60 20 z M 50 0 L 68.5 18.5 z M 60 0 L 70 10 z",t[L.STYLE_BACKWARD_DIAGONAL]="M 0 10 L 10 0 z M 20 0 L 1.5 18.5 z M 10 20 L 30 0 z M 20 20 L 40 0 z M 30 20 L 50 0 z M 40 20 L 60 0 z M 50 20 L 68.5 1.5 z M 60 20 L 70 10 z",t[L.STYLE_NULL]=null,t[L.STYLE_HORIZONTAL]="M 0 12 L 70 12 z",t[L.STYLE_VERTICAL]="M 10 0 L 10 20 z M 20 0 L 20 20 z M 30 0 L 30 20 z M 40 0 L 40 20 z M 50 0 L 50 20 z M 60 0 L 60 20 z",t},r.getBorderSamples=function(){var t={};return t[e.STYLE_SOLID]="M 0 10 L 70 10 z",t[e.STYLE_DASH]="M 0 10 L 10 10 z M 20 10 L 30 10 z M 40 10 L 50 10 z M 60 10 L 70 10 z",t[e.STYLE_DASHDOT]="M 0 10 L 10 10 z M 16 10 L 17 10 z M 23 10 L 33 10 z M 39 10 L 40 10 z M 46 10 L 56 10 z M 62 10 L 63 10 z",t[e.STYLE_DASHDOTDOT]="M 0 10 L 10 10 z M 16 10 L 17 10 z M 23 10 L 24 10 z M 30 10 L 40 10 z M 46 10 L 47 10 z M 53 10 L 54 10 z M 60 10 L 70 10 z",t[e.STYLE_DOT]="M 0 10 L 1 10 z M 10 10 L 11 10 z M 20 10 L 21 10 z M 30 10 L 31 10 z M 40 10 L 41 10 z M 50 10 L 51 10 z M 60 10 L 61 10 z",t},r.getSimpleFillMap=function(){var t={};return t[L.STYLE_SOLID]=null,t[L.STYLE_CROSS]="M 0 10 L 10 10 z M 10 0 L 10 10 z",t[L.STYLE_DIAGONAL_CROSS]="M 0 0 L 10 10 z M 0 10 L 10 0 z",t[L.STYLE_FORWARD_DIAGONAL]="M 0 0 L 10 10 z M 0 -10 L 20 10 z M -10 0 L 10 20 z",t[L.STYLE_BACKWARD_DIAGONAL]="M 0 10 L 10 0 z M 0 20 L 20 0 z M -10 10 L 10 -10 z",t[L.STYLE_NULL]=null,t[L.STYLE_HORIZONTAL]="M 0 10 L 10 10 z",t[L.STYLE_VERTICAL]="M 10 0 L 10 10 z",t},r.getBorderDashArrays=function(){var t={};return t[e.STYLE_SOLID]=null,t[e.STYLE_DASH]="5,3",t[e.STYLE_DASHDOT]="5,3,1,3",t[e.STYLE_DASHDOTDOT]="5,3,1,3,1,3",t[e.STYLE_DOT]="1,3",t},r.createSvgForPictureFillSymbol=function(i,l){l=l||{};var z=l.size||10;i=i||{fillStyle:L.STYLE_SOLID,fillColor:"#FFFFFF",fillAlpha:1};var M=document.createElementNS("http://www.w3.org/2000/svg","svg");M.setAttribute("xmlns","http://www.w3.org/2000/svg"),M.setAttribute("x","0px"),M.setAttribute("y","0px"),M.setAttribute("width",z+"px"),M.setAttribute("height",z+"px"),M.setAttribute("viewBox",t.substitute("0 0 ${size} ${size}",{size:z})),M.setAttribute("enable-background",t.substitute("new 0 0 ${size} ${size}",{size:z}));var s=l.includeBorder&&i.borderStyle!==e.STYLE_NULL;if(i.fillStyle!==L.STYLE_NULL){var S=s?i.borderWidth/2:0,o=s?z-i.borderWidth:z;if(i.fillStyle==L.STYLE_SOLID){var A=document.createElementNS("http://www.w3.org/2000/svg","rect");A.setAttribute("x",S),A.setAttribute("y",S),A.setAttribute("width",o),A.setAttribute("height",o),A.setAttribute("stroke","none"),A.setAttribute("fill",i.fillColor),A.setAttribute("fill-opacity",i.fillAlpha),M.appendChild(A)}else{var u=document.createElementNS("http://www.w3.org/2000/svg","path"),n=l.useDetailedFill?r.getFillSamples():r.getSimpleFillMap();u.setAttribute("d",n[i.fillStyle]),u.setAttribute("fill","none"),u.setAttribute("stroke",i.fillColor),u.setAttribute("stroke-opacity",i.fillAlpha),u.setAttribute("stroke-width",1),u.setAttribute("stroke-linecap","round"),u.setAttribute("vector-effect","non-scaling-stroke"),l.useDetailedFill&&u.setAttribute("transform","scale("+z/20+")"),M.appendChild(u)}}if(s){var A=document.createElementNS("http://www.w3.org/2000/svg","rect");A.setAttribute("x",i.borderWidth/2),A.setAttribute("y",i.borderWidth/2),A.setAttribute("width",z-i.borderWidth),A.setAttribute("height",z-i.borderWidth),A.setAttribute("stroke",i.borderColor),A.setAttribute("stroke-opacity",i.borderAlpha),A.setAttribute("stroke-width",i.borderWidth),A.setAttribute("stroke-dasharray",r.getBorderDashArrays()[i.borderStyle]),A.setAttribute("fill","none"),M.appendChild(A)}return M},r});