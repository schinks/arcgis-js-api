// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/compilerUtils","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../camera/constraintUtils","../Constraints","./InteractiveController","../utils/navigationUtils","../utils/navigationUtils","../utils/viewUtils","../../support/cameraUtils","../../support/cameraUtilsInternal","../../support/earthUtils","../../support/geometryUtils","../../support/mathUtils","../../support/stack","../../webgl-engine/lib/Camera","../../../navigation/gamepadAndKeyboardUtils"],function(t,e,a,i,r,n,o,s,l,c,p,d,m,v,h,u,f,y,g,w,C,b,T){function S(t){t.zoom=0,t.ascend=0,t.pan.enabled=!1,n.mat4.identity(t.pan.matrix),t.rotate.enabled=!1,n.mat4.identity(t.rotate.matrix)}Object.defineProperty(e,"__esModule",{value:!0});var x=function(t){function e(e,a,i){var r=t.call(this)||this;return r.view=e,r.gamepadDevice=a,r.disableMovements=i,r.transformation={translation:[0,0,0],heading:0,tilt:0},r.keysButtonState=[0,0,0,0,0,0,0,0,0,0],r.tmpCamera=new b,r.constraintOptions={selection:15,interactionType:0,interactionStartCamera:new b,interactionFactor:0,interactionDirection:null,tiltMode:1},r}return a(e,t),e.prototype.handleEventGamepad=function(t){var e=T.extractTransformation(t,this.view.navigation.gamepad,this.transformation);if("end"===t.action||T.isZeroTransformation(e))return void this.finishController()},e.prototype.activateDirection=function(t){this.keysButtonState[t]=1,T.extractTransformationKeyboard(this.keysButtonState,this.transformation)},e.prototype.deactivateDirection=function(t){this.keysButtonState[t]=0;var e=T.extractTransformationKeyboard(this.keysButtonState,this.transformation);T.isZeroTransformation(e)&&this.finishController()},e.prototype.onControllerStart=function(e){this.filteredSurfaceElevation=this.view.pointsOfInterest.cameraOnSurface.location.z,this.headingStart=this.view.camera.heading,t.prototype.onControllerStart.call(this,e)},e.prototype.updateFilteredSurfaceElevation=function(t){var e=this.view.pointsOfInterest.cameraOnSurface.location.z;this.filteredSurfaceElevation+=1*(e-this.filteredSurfaceElevation)*t},e.prototype.stepController=function(e,a){this.updateStartHeading(),this.updateFilteredSurfaceElevation(e),this.currentCamera.copyViewFrom(a),this.updateCameraCenter(),this.constraintOptions.interactionStartCamera.copyFrom(this.currentCamera),this.calculateControlTransformation(e,this.currentCamera,G),this.applyDisabledMovementTypes(G),this.applyPan(G.pan),this.applyRotate(G.rotate),this.applyZoom(G.zoom),this.applyAscend(G.ascend),this.constraintOptions.interactionType=0,this.constraintOptions.selection=8,c.applyAll(this.view,this.currentCamera,this.constraintOptions),t.prototype.stepController.call(this,e,a)},e.prototype.updateStartHeading=function(){0!==this.transformation.heading&&(this.headingStart=this.view.camera.heading)},e.prototype.applyRotate=function(t){if(t.enabled){var e=this.currentCamera,a=e.center,i=e.up,r=e.eye;s.vec3.subtract(a,a,r),s.vec3.transformMat4(a,a,t.matrix),s.vec3.add(a,a,r),s.vec3.transformMat4(i,i,t.matrix),e.markViewDirty(),this.constraintOptions.interactionType=3,this.constraintOptions.selection=7,c.applyAll(this.view,e,this.constraintOptions)}},e.prototype.applyPan=function(t,e){if(void 0===e&&(e=this.currentCamera),t.enabled){var a=e.center,i=e.eye,r=e.up;s.vec3.transformMat4(i,i,t.matrix),s.vec3.transformMat4(a,a,t.matrix);this.view.state.isGlobal&&s.vec3.transformMat4(r,r,t.matrix),e.markViewDirty(),this.constraintOptions.interactionType=4,this.constraintOptions.selection=15,c.applyAll(this.view,e,this.constraintOptions)}},e.prototype.applyZoom=function(t){if(t){var e=this.currentCamera,a=e.eye,i=e.viewForward;s.vec3.add(a,a,s.vec3.scale(C.sv3d.get(),i,t)),this.currentCamera.markViewDirty(),s.vec3.copy(R,i),s.vec3.negate(R,R),this.constraintOptions.interactionDirection=R,this.constraintOptions.interactionType=1,this.constraintOptions.selection=7,c.applyAll(this.view,this.currentCamera,this.constraintOptions),this.constraintOptions.interactionDirection=null}},e.prototype.applyAscend=function(t){if(t){var e=this.currentCamera,a=e.center,i=e.eye,r=this.view.renderCoordsHelper,n=r.worldUpAtPosition(i,C.sv3d.get());this.constraintOptions.interactionDirection=s.vec3.copy(R,n);if(this.view.state.isGlobal){var o=s.vec3.length(i),l=(o+t)/o;s.vec3.scale(i,i,l),s.vec3.scale(a,a,l)}else{var p=s.vec3.scale(C.sv3d.get(),n,t);s.vec3.add(i,i,p),s.vec3.add(a,a,p)}this.currentCamera.markViewDirty(),this.updateCameraCenter(),this.constraintOptions.interactionType=5,this.constraintOptions.selection=8,c.applyAll(this.view,this.currentCamera,this.constraintOptions)&&this.updateCameraCenter(),this.constraintOptions.selection=7,c.applyAll(this.view,this.currentCamera,this.constraintOptions),this.constraintOptions.interactionDirection=null}},e.prototype.calculateControlTransformation=function(t,e,a){S(a);var i=this.computeVelocities(t);this.view.state.isLocal?this.calculateControlTransformationLocal(i,e,a):this.calculateControlTransformationGlobal(i,e,a)},e.prototype.updateCameraCenter=function(){var t=this.currentCamera,e=t.ray,a=t.center,i=this.view.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude;this.view.renderCoordsHelper.intersectManifoldClosestSilhouette(e,i,a),this.currentCamera.markViewDirty()},e.prototype.calculateControlTransformationLocal=function(t,e,a){var o=e.viewRight,l=e.viewForward,c=this.transformation,d=this.view.navigation.gamepad,m=s.vec3.set(C.sv3d.get(),l[0],l[1],0);s.vec3.normalize(m,m);var v=c.translation[0]*t.pan;if(0!==v){var u=s.vec3.scale(C.sv3d.get(),o,v);n.mat4.translate(a.pan.matrix,a.pan.matrix,u),a.pan.enabled=!0}switch(d.mode){case"pan":var f=-c.translation[1]*t.pan;if(0!==f){var y=s.vec3.scale(C.sv3d.get(),m,f);n.mat4.translate(a.pan.matrix,a.pan.matrix,y),a.pan.enabled=!0}break;case"zoom":a.zoom=-c.translation[1]*t.zoom;break;default:i.neverReached(d.mode)}var g=c.translation[2]*t.ascend;a.ascend=g;var w=-c.heading*t.rotate;0!==w&&(n.mat4.rotate(a.rotate.matrix,a.rotate.matrix,w,this.view.renderCoordsHelper.worldUpAtPosition(e.eye,C.sv3d.get())),a.rotate.enabled=!0);var b=c.tilt*t.rotate,T=h.viewAngle(this.view.renderCoordsHelper,e.center,e.eye),S=r.clamp(T+b,p.TiltDefault.min,p.TiltDefault.max)-T;S&&(n.mat4.rotate(a.rotate.matrix,a.rotate.matrix,S,o),a.rotate.enabled=!0)},e.prototype.calculateControlTransformationGlobal=function(t,e,a){var i=e.eye,r=e.viewRight,o=this.transformation,l=this.view.navigation.gamepad,c=s.vec3.cross(C.sv3d.get(),r,i);s.vec3.normalize(c,c),s.vec3.negate(c,c),m.panMotionToRotationMatrix(this.beginCamera,e,o,t,this.view.camera.heading,this.headingStart,this.view.camera.tilt,a,l),this.tmpCamera.copyFrom(this.currentCamera),this.applyPan(G.pan,this.tmpCamera);var p=this.view.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude,d=o.translation[2]*t.ascend;a.ascend=d;var v=-o.heading*t.rotate;0!==v&&(n.mat4.rotate(a.rotate.matrix,a.rotate.matrix,v,this.tmpCamera.eye),a.rotate.enabled=!0);var h=o.tilt*t.rotate,u=this.clampTiltDeltaGlobalToValidRange(h,e.ray,p);0!==u&&(n.mat4.rotate(a.rotate.matrix,a.rotate.matrix,u,this.tmpCamera.viewRight),a.rotate.enabled=!0)},e.prototype.clampTiltDeltaGlobalToValidRange=function(t,e,a){var i=v.onSurfaceTiltToEyeTiltGlobal(p.TiltDefault.min,e.origin,a),n=0,o=0,l=C.sv3d.get();if(this.view.renderCoordsHelper.intersectManifold(e,a,l)){var c=h.viewAngle(this.view.renderCoordsHelper,l,e.origin);n=v.onSurfaceTiltToEyeTiltGlobal(c,e.origin,a),o=v.onSurfaceTiltToEyeTiltGlobal(p.TiltDefault.max,e.origin,a)}else{g.sphere.closestPointOnSilhouette(g.sphere.wrap(a+y.earthRadius),e,l);var c=w.acos(-s.vec3.dot(e.direction,s.vec3.normalize(l,l)));n=v.offSurfaceTiltToEyeTiltGlobal(c,e.origin,a),o=v.offSurfaceTiltToEyeTiltGlobal(p.TiltDefault.max,e.origin,a)}return r.clamp(n+t,i,o)-n},e.prototype.getPointAbsoluteSurfaceElevation=function(t,e,a){var i=this.view.renderCoordsHelper,r=i.getAltitude(t),n=Math.abs(r-e),o=e+n;return s.vec3.copy(a,t),i.setAltitude(o,a),o},e.prototype.clampedDistanceToSurface=function(t,e){var a=this.view.renderCoordsHelper,i=this.view.state.camera,r=u.headingTiltToDirectionUp(this.view,e,0,O,H).direction,n=a.intersectManifoldClosestSilhouette(g.ray.wrap(e,r),t,C.sv3d.get()),o=s.vec3.distance(e,n),l=a.intersectManifoldClosestSilhouette(g.ray.wrap(e,w.directionFromTo(C.sv3d.get(),e,i.center)),t,C.sv3d.get()),c=s.vec3.distance(e,l);return Math.min(o,c)},e.prototype.computeHeadingRotateRadius=function(t){var e=this.view,a=e.renderCoordsHelper,i=e.state,r=i.camera,n=i.isGlobal,o=a.intersectManifoldClosestSilhouette(r.ray,this.filteredSurfaceElevation,C.sv3d.get());if(n){var l=s.vec3.subtract(C.sv3d.get(),t,o),c=s.vec3.length(l);s.vec3.scale(l,l,1/c);var p=s.vec3.normalize(C.sv3d.get(),t),d=w.acos(s.vec3.dot(p,l));return c*Math.sin(Math.min(D,d))}var m=s.vec3.copy(C.sv3d.get(),t);return a.setAltitude(this.filteredSurfaceElevation,m),s.vec3.distance(o,m)},e.prototype.minimumAscendVelocity=function(){return this.view.state.constraints.collision.enabled?0:z},e.prototype.computeVelocities=function(t){var e=this.filteredSurfaceElevation,a=e+y.earthRadius,i=this.view.state,n=i.camera,o=i.isGlobal,s=C.sv3d.get(),l=this.getPointAbsoluteSurfaceElevation(n.eye,e,s),c=this.clampedDistanceToSurface(e,s),p=n.width/2,d=A*n.width,m=A*n.width,v=c*Math.tan(.5*n.fovX)/p,h=v/a,u=v/this.computeHeadingRotateRadius(s),f=o?h:v,g=f*d*t,w=l-e;return{pan:g,ascend:Math.max(this.minimumAscendVelocity()*t,Math.pow(2,d*t/p)*w-w),zoom:Math.pow(2,d*t/p)*c-c,rotate:r.clamp(u*m,E,U)*t}},e.prototype.applyDisabledMovementTypes=function(t){void 0===this.disableMovements||void 0!==this.disableMovements.mode&&this.view.state.mode!==this.disableMovements.mode||(t.zoom=this.disableMovements.zoom?0:t.zoom,t.ascend=this.disableMovements.ascend?0:t.ascend,t.pan.enabled=!this.disableMovements.pan,this.disableMovements.pan&&n.mat4.identity(t.pan.matrix),t.rotate.enabled=!this.disableMovements.rotate,this.disableMovements.rotate&&n.mat4.identity(t.rotate.matrix))},e.activatesFor=function(t,e){var a=T.extractTransformation(e,t.navigation.gamepad,M);return!("end"===e.action||T.isZeroTransformation(a))},e}(d.InteractiveController);e.GamepadKeyboardController=x;var M={translation:[0,0,0],heading:0,tilt:0},O=80,D=w.deg2rad(O),A=.75,z=5,E=w.deg2rad(30),U=w.deg2rad(80),G={zoom:0,ascend:0,pan:{enabled:!1,matrix:o.mat4f64.create()},rotate:{enabled:!1,matrix:o.mat4f64.create()}},R=l.vec3f64.create(),H=f.createDirectionUp()});