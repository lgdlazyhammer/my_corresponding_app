/**
 * React v0.14.3
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.React=e()}}(function(){return function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var s="function"==typeof require&&require;if(!u&&s)return s(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";var r=e(35),o=e(45),a=e(61),i=e(23),u=e(104),s={};i(s,a),i(s,{findDOMNode:u("findDOMNode","ReactDOM","react-dom",r,r.findDOMNode),render:u("render","ReactDOM","react-dom",r,r.render),unmountComponentAtNode:u("unmountComponentAtNode","ReactDOM","react-dom",r,r.unmountComponentAtNode),renderToString:u("renderToString","ReactDOMServer","react-dom/server",o,o.renderToString),renderToStaticMarkup:u("renderToStaticMarkup","ReactDOMServer","react-dom/server",o,o.renderToStaticMarkup)}),s.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r,s.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o,t.exports=s},{104:104,23:23,35:35,45:45,61:61}],2:[function(e,t,n){"use strict";var r=e(63),o=e(106),a=e(136),i={componentDidMount:function(){this.props.autoFocus&&a(o(this))}},u={Mixin:i,focusDOMComponent:function(){a(r.getNode(this._rootNodeID))}};t.exports=u},{106:106,136:136,63:63}],3:[function(e,t,n){"use strict";function r(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function o(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function a(e){switch(e){case w.topCompositionStart:return R.compositionStart;case w.topCompositionEnd:return R.compositionEnd;case w.topCompositionUpdate:return R.compositionUpdate}}function i(e,t){return e===w.topKeyDown&&t.keyCode===_}function u(e,t){switch(e){case w.topKeyUp:return-1!==b.indexOf(t.keyCode);case w.topKeyDown:return t.keyCode!==_;case w.topKeyPress:case w.topMouseDown:case w.topBlur:return!0;default:return!1}}function s(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function l(e,t,n,r,o){var l,c;if(E?l=a(e):S?u(e,r)&&(l=R.compositionEnd):i(e,r)&&(l=R.compositionStart),!l)return null;M&&(S||l!==R.compositionStart?l===R.compositionEnd&&S&&(c=S.getData()):S=m.getPooled(t));var p=g.getPooled(l,n,r,o);if(c)p.data=c;else{var d=s(r);null!==d&&(p.data=d)}return h.accumulateTwoPhaseDispatches(p),p}function c(e,t){switch(e){case w.topCompositionEnd:return s(t);case w.topKeyPress:var n=t.which;return n!==N?null:(I=!0,P);case w.topTextInput:var r=t.data;return r===P&&I?null:r;default:return null}}function p(e,t){if(S){if(e===w.topCompositionEnd||u(e,t)){var n=S.getData();return m.release(S),S=null,n}return null}switch(e){case w.topPaste:return null;case w.topKeyPress:return t.which&&!o(t)?String.fromCharCode(t.which):null;case w.topCompositionEnd:return M?null:t.data;default:return null}}function d(e,t,n,r,o){var a;if(a=D?c(e,r):p(e,r),!a)return null;var i=y.getPooled(R.beforeInput,n,r,o);return i.data=a,h.accumulateTwoPhaseDispatches(i),i}var f=e(15),h=e(19),v=e(128),m=e(20),g=e(88),y=e(92),C=e(146),b=[9,13,27,32],_=229,E=v.canUseDOM&&"CompositionEvent"in window,x=null;v.canUseDOM&&"documentMode"in document&&(x=document.documentMode);var D=v.canUseDOM&&"TextEvent"in window&&!x&&!r(),M=v.canUseDOM&&(!E||x&&x>8&&11>=x),N=32,P=String.fromCharCode(N),w=f.topLevelTypes,R={beforeInput:{phasedRegistrationNames:{bubbled:C({onBeforeInput:null}),captured:C({onBeforeInputCapture:null})},dependencies:[w.topCompositionEnd,w.topKeyPress,w.topTextInput,w.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:C({onCompositionEnd:null}),captured:C({onCompositionEndCapture:null})},dependencies:[w.topBlur,w.topCompositionEnd,w.topKeyDown,w.topKeyPress,w.topKeyUp,w.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:C({onCompositionStart:null}),captured:C({onCompositionStartCapture:null})},dependencies:[w.topBlur,w.topCompositionStart,w.topKeyDown,w.topKeyPress,w.topKeyUp,w.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:C({onCompositionUpdate:null}),captured:C({onCompositionUpdateCapture:null})},dependencies:[w.topBlur,w.topCompositionUpdate,w.topKeyDown,w.topKeyPress,w.topKeyUp,w.topMouseDown]}},I=!1,S=null,T={eventTypes:R,extractEvents:function(e,t,n,r,o){return[l(e,t,n,r,o),d(e,t,n,r,o)]}};t.exports=T},{128:128,146:146,15:15,19:19,20:20,88:88,92:92}],4:[function(e,t,n){"use strict";function r(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var o={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},a=["Webkit","ms","Moz","O"];Object.keys(o).forEach(function(e){a.forEach(function(t){o[r(t,e)]=o[e]})});var i={background:{backgroundAttachment:!0,backgroundColor:!0,backgroundImage:!0,backgroundPositionX:!0,backgroundPositionY:!0,backgroundRepeat:!0},backgroundPosition:{backgroundPositionX:!0,backgroundPositionY:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0},outline:{outlineWidth:!0,outlineStyle:!0,outlineColor:!0}},u={isUnitlessNumber:o,shorthandPropertyExpansions:i};t.exports=u},{}],5:[function(e,t,n){"use strict";var r=e(4),o=e(128),a=e(69),i=(e(130),e(103)),u=e(141),s=e(148),l=(e(151),s(function(e){return u(e)})),c=!1,p="cssFloat";if(o.canUseDOM){var d=document.createElement("div").style;try{d.font=""}catch(f){c=!0}void 0===document.documentElement.style.cssFloat&&(p="styleFloat")}var h={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=l(n)+":",t+=i(n,r)+";")}return t||null},setValueForStyles:function(e,t){var n=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=i(o,t[o]);if("float"===o&&(o=p),a)n[o]=a;else{var u=c&&r.shorthandPropertyExpansions[o];if(u)for(var s in u)n[s]="";else n[o]=""}}}};a.measureMethods(h,"CSSPropertyOperations",{setValueForStyles:"setValueForStyles"}),t.exports=h},{103:103,128:128,130:130,141:141,148:148,151:151,4:4,69:69}],6:[function(e,t,n){"use strict";function r(){this._callbacks=null,this._contexts=null}var o=e(24),a=e(23),i=e(142);a(r.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){e.length!==t.length?i(!1):void 0,this._callbacks=null,this._contexts=null;for(var n=0;n<e.length;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{142:142,23:23,24:24}],7:[function(e,t,n){"use strict";function r(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"select"===t||"input"===t&&"file"===e.type}function o(e){var t=x.getPooled(R.change,S,e,D(e));b.accumulateTwoPhaseDispatches(t),E.batchedUpdates(a,t)}function a(e){C.enqueueEvents(e),C.processEventQueue(!1)}function i(e,t){I=e,S=t,I.attachEvent("onchange",o)}function u(){I&&(I.detachEvent("onchange",o),I=null,S=null)}function s(e,t,n){return e===w.topChange?n:void 0}function l(e,t,n){e===w.topFocus?(u(),i(t,n)):e===w.topBlur&&u()}function c(e,t){I=e,S=t,T=e.value,k=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(I,"value",L),I.attachEvent("onpropertychange",d)}function p(){I&&(delete I.value,I.detachEvent("onpropertychange",d),I=null,S=null,T=null,k=null)}function d(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==T&&(T=t,o(e))}}function f(e,t,n){return e===w.topInput?n:void 0}function h(e,t,n){e===w.topFocus?(p(),c(t,n)):e===w.topBlur&&p()}function v(e,t,n){return e!==w.topSelectionChange&&e!==w.topKeyUp&&e!==w.topKeyDown||!I||I.value===T?void 0:(T=I.value,S)}function m(e){return e.nodeName&&"input"===e.nodeName.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}function g(e,t,n){return e===w.topClick?n:void 0}var y=e(15),C=e(16),b=e(19),_=e(128),E=e(81),x=e(90),D=e(112),M=e(117),N=e(118),P=e(146),w=y.topLevelTypes,R={change:{phasedRegistrationNames:{bubbled:P({onChange:null}),captured:P({onChangeCapture:null})},dependencies:[w.topBlur,w.topChange,w.topClick,w.topFocus,w.topInput,w.topKeyDown,w.topKeyUp,w.topSelectionChange]}},I=null,S=null,T=null,k=null,O=!1;_.canUseDOM&&(O=M("change")&&(!("documentMode"in document)||document.documentMode>8));var A=!1;_.canUseDOM&&(A=M("input")&&(!("documentMode"in document)||document.documentMode>9));var L={get:function(){return k.get.call(this)},set:function(e){T=""+e,k.set.call(this,e)}},U={eventTypes:R,extractEvents:function(e,t,n,o,a){var i,u;if(r(t)?O?i=s:u=l:N(t)?A?i=f:(i=v,u=h):m(t)&&(i=g),i){var c=i(e,t,n);if(c){var p=x.getPooled(R.change,c,o,a);return p.type="change",b.accumulateTwoPhaseDispatches(p),p}}u&&u(e,t,n)}};t.exports=U},{112:112,117:117,118:118,128:128,146:146,15:15,16:16,19:19,81:81,90:90}],8:[function(e,t,n){"use strict";var r=0,o={createReactRootIndex:function(){return r++}};t.exports=o},{}],9:[function(e,t,n){"use strict";function r(e,t,n){var r=n>=e.childNodes.length?null:e.childNodes.item(n);e.insertBefore(t,r)}var o=e(12),a=e(65),i=e(69),u=e(122),s=e(123),l=e(142),c={dangerouslyReplaceNodeWithMarkup:o.dangerouslyReplaceNodeWithMarkup,updateTextContent:s,processUpdates:function(e,t){for(var n,i=null,c=null,p=0;p<e.length;p++)if(n=e[p],n.type===a.MOVE_EXISTING||n.type===a.REMOVE_NODE){var d=n.fromIndex,f=n.parentNode.childNodes[d],h=n.parentID;f?void 0:l(!1),i=i||{},i[h]=i[h]||[],i[h][d]=f,c=c||[],c.push(f)}var v;if(v=t.length&&"string"==typeof t[0]?o.dangerouslyRenderMarkup(t):t,c)for(var m=0;m<c.length;m++)c[m].parentNode.removeChild(c[m]);for(var g=0;g<e.length;g++)switch(n=e[g],n.type){case a.INSERT_MARKUP:r(n.parentNode,v[n.markupIndex],n.toIndex);break;case a.MOVE_EXISTING:r(n.parentNode,i[n.parentID][n.fromIndex],n.toIndex);break;case a.SET_MARKUP:u(n.parentNode,n.content);break;case a.TEXT_CONTENT:s(n.parentNode,n.content);break;case a.REMOVE_NODE:}}};i.measureMethods(c,"DOMChildrenOperations",{updateTextContent:"updateTextContent"}),t.exports=c},{12:12,122:122,123:123,142:142,65:65,69:69}],10:[function(e,t,n){"use strict";function r(e,t){return(e&t)===t}var o=e(142),a={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=a,n=e.Properties||{},i=e.DOMAttributeNamespaces||{},s=e.DOMAttributeNames||{},l=e.DOMPropertyNames||{},c=e.DOMMutationMethods||{};e.isCustomAttribute&&u._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var p in n){u.properties.hasOwnProperty(p)?o(!1):void 0;var d=p.toLowerCase(),f=n[p],h={attributeName:d,attributeNamespace:null,propertyName:p,mutationMethod:null,mustUseAttribute:r(f,t.MUST_USE_ATTRIBUTE),mustUseProperty:r(f,t.MUST_USE_PROPERTY),hasSideEffects:r(f,t.HAS_SIDE_EFFECTS),hasBooleanValue:r(f,t.HAS_BOOLEAN_VALUE),hasNumericValue:r(f,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:r(f,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:r(f,t.HAS_OVERLOADED_BOOLEAN_VALUE)};if(h.mustUseAttribute&&h.mustUseProperty?o(!1):void 0,!h.mustUseProperty&&h.hasSideEffects?o(!1):void 0,h.hasBooleanValue+h.hasNumericValue+h.hasOverloadedBooleanValue<=1?void 0:o(!1),s.hasOwnProperty(p)){var v=s[p];h.attributeName=v}i.hasOwnProperty(p)&&(h.attributeNamespace=i[p]),l.hasOwnProperty(p)&&(h.propertyName=l[p]),c.hasOwnProperty(p)&&(h.mutationMethod=c[p]),u.properties[p]=h}}},i={},u={ID_ATTRIBUTE_NAME:"data-reactid",properties:{},getPossibleStandardName:null,_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<u._isCustomAttributeFunctions.length;t++){var n=u._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=i[e];return r||(i[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:a};t.exports=u},{142:142}],11:[function(e,t,n){"use strict";function r(e){return c.hasOwnProperty(e)?!0:l.hasOwnProperty(e)?!1:s.test(e)?(c[e]=!0,!0):(l[e]=!0,!1)}function o(e,t){return null==t||e.hasBooleanValue&&!t||e.hasNumericValue&&isNaN(t)||e.hasPositiveNumericValue&&1>t||e.hasOverloadedBooleanValue&&t===!1}var a=e(10),i=e(69),u=e(120),s=(e(151),/^[a-zA-Z_][\w\.\-]*$/),l={},c={},p={createMarkupForID:function(e){return a.ID_ATTRIBUTE_NAME+"="+u(e)},setAttributeForID:function(e,t){e.setAttribute(a.ID_ATTRIBUTE_NAME,t)},createMarkupForProperty:function(e,t){var n=a.properties.hasOwnProperty(e)?a.properties[e]:null;if(n){if(o(n,t))return"";var r=n.attributeName;return n.hasBooleanValue||n.hasOverloadedBooleanValue&&t===!0?r+'=""':r+"="+u(t)}return a.isCustomAttribute(e)?null==t?"":e+"="+u(t):null},createMarkupForCustomAttribute:function(e,t){return r(e)&&null!=t?e+"="+u(t):""},setValueForProperty:function(e,t,n){var r=a.properties.hasOwnProperty(t)?a.properties[t]:null;if(r){var i=r.mutationMethod;if(i)i(e,n);else if(o(r,n))this.deleteValueForProperty(e,t);else if(r.mustUseAttribute){var u=r.attributeName,s=r.attributeNamespace;s?e.setAttributeNS(s,u,""+n):r.hasBooleanValue||r.hasOverloadedBooleanValue&&n===!0?e.setAttribute(u,""):e.setAttribute(u,""+n)}else{var l=r.propertyName;r.hasSideEffects&&""+e[l]==""+n||(e[l]=n)}}else a.isCustomAttribute(t)&&p.setValueForAttribute(e,t,n)},setValueForAttribute:function(e,t,n){r(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))},deleteValueForProperty:function(e,t){var n=a.properties.hasOwnProperty(t)?a.properties[t]:null;if(n){var r=n.mutationMethod;if(r)r(e,void 0);else if(n.mustUseAttribute)e.removeAttribute(n.attributeName);else{var o=n.propertyName,i=a.getDefaultValueForProperty(e.nodeName,o);n.hasSideEffects&&""+e[o]===i||(e[o]=i)}}else a.isCustomAttribute(t)&&e.removeAttribute(t)}};i.measureMethods(p,"DOMPropertyOperations",{setValueForProperty:"setValueForProperty",setValueForAttribute:"setValueForAttribute",deleteValueForProperty:"deleteValueForProperty"}),t.exports=p},{10:10,120:120,151:151,69:69}],12:[function(e,t,n){"use strict";function r(e){return e.substring(1,e.indexOf(" "))}var o=e(128),a=e(133),i=e(134),u=e(138),s=e(142),l=/^(<[^ \/>]+)/,c="data-danger-index",p={dangerouslyRenderMarkup:function(e){o.canUseDOM?void 0:s(!1);for(var t,n={},p=0;p<e.length;p++)e[p]?void 0:s(!1),t=r(e[p]),t=u(t)?t:"*",n[t]=n[t]||[],n[t][p]=e[p];var d=[],f=0;for(t in n)if(n.hasOwnProperty(t)){var h,v=n[t];for(h in v)if(v.hasOwnProperty(h)){var m=v[h];v[h]=m.replace(l,"$1 "+c+'="'+h+'" ')}for(var g=a(v.join(""),i),y=0;y<g.length;++y){var C=g[y];C.hasAttribute&&C.hasAttribute(c)&&(h=+C.getAttribute(c),C.removeAttribute(c),d.hasOwnProperty(h)?s(!1):void 0,d[h]=C,f+=1)}}return f!==d.length?s(!1):void 0,d.length!==e.length?s(!1):void 0,d},dangerouslyReplaceNodeWithMarkup:function(e,t){o.canUseDOM?void 0:s(!1),t?void 0:s(!1),"html"===e.tagName.toLowerCase()?s(!1):void 0;var n;n="string"==typeof t?a(t,i)[0]:t,e.parentNode.replaceChild(n,e)}};t.exports=p},{128:128,133:133,134:134,138:138,142:142}],13:[function(e,t,n){"use strict";var r=e(146),o=[r({ResponderEventPlugin:null}),r({SimpleEventPlugin:null}),r({TapEventPlugin:null}),r({EnterLeaveEventPlugin:null}),r({ChangeEventPlugin:null}),r({SelectEventPlugin:null}),r({BeforeInputEventPlugin:null})];t.exports=o},{146:146}],14:[function(e,t,n){"use strict";var r=e(15),o=e(19),a=e(94),i=e(63),u=e(146),s=r.topLevelTypes,l=i.getFirstReactDOM,c={mouseEnter:{registrationName:u({onMouseEnter:null}),dependencies:[s.topMouseOut,s.topMouseOver]},mouseLeave:{registrationName:u({onMouseLeave:null}),dependencies:[s.topMouseOut,s.topMouseOver]}},p=[null,null],d={eventTypes:c,extractEvents:function(e,t,n,r,u){if(e===s.topMouseOver&&(r.relatedTarget||r.fromElement))return null;if(e!==s.topMouseOut&&e!==s.topMouseOver)return null;var d;if(t.window===t)d=t;else{var f=t.ownerDocument;d=f?f.defaultView||f.parentWindow:window}var h,v,m="",g="";if(e===s.topMouseOut?(h=t,m=n,v=l(r.relatedTarget||r.toElement),v?g=i.getID(v):v=d,v=v||d):(h=d,v=t,g=n),h===v)return null;var y=a.getPooled(c.mouseLeave,m,r,u);y.type="mouseleave",y.target=h,y.relatedTarget=v;var C=a.getPooled(c.mouseEnter,g,r,u);return C.type="mouseenter",C.target=v,C.relatedTarget=h,o.accumulateEnterLeaveDispatches(y,C,m,g),p[0]=y,p[1]=C,p}};t.exports=d},{146:146,15:15,19:19,63:63,94:94}],15:[function(e,t,n){"use strict";var r=e(145),o=r({bubbled:null,captured:null}),a=r({topAbort:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topVolumeChange:null,topWaiting:null,topWheel:null}),i={topLevelTypes:a,PropagationPhases:o};t.exports=i},{145:145}],16:[function(e,t,n){"use strict";var r=e(17),o=e(18),a=e(54),i=e(100),u=e(108),s=e(142),l=(e(151),{}),c=null,p=function(e,t){e&&(o.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e))},d=function(e){return p(e,!0)},f=function(e){return p(e,!1)},h=null,v={injection:{injectMount:o.injection.injectMount,injectInstanceHandle:function(e){h=e},getInstanceHandle:function(){return h},injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},eventNameDispatchConfigs:r.eventNameDispatchConfigs,registrationNameModules:r.registrationNameModules,putListener:function(e,t,n){"function"!=typeof n?s(!1):void 0;var o=l[t]||(l[t]={});o[e]=n;var a=r.registrationNameModules[t];a&&a.didPutListener&&a.didPutListener(e,t,n)},getListener:function(e,t){var n=l[t];return n&&n[e]},deleteListener:function(e,t){var n=r.registrationNameModules[t];n&&n.willDeleteListener&&n.willDeleteListener(e,t);var o=l[t];o&&delete o[e]},deleteAllListeners:function(e){for(var t in l)if(l[t][e]){var n=r.registrationNameModules[t];n&&n.willDeleteListener&&n.willDeleteListener(e,t),delete l[t][e]}},extractEvents:function(e,t,n,o,a){for(var u,s=r.plugins,l=0;l<s.length;l++){var c=s[l];if(c){var p=c.extractEvents(e,t,n,o,a);p&&(u=i(u,p))}}return u},enqueueEvents:function(e){e&&(c=i(c,e))},processEventQueue:function(e){var t=c;c=null,e?u(t,d):u(t,f),c?s(!1):void 0,a.rethrowCaughtError()},__purge:function(){l={}},__getListenerBank:function(){return l}};t.exports=v},{100:100,108:108,142:142,151:151,17:17,18:18,54:54}],17:[function(e,t,n){"use strict";function r(){if(u)for(var e in s){var t=s[e],n=u.indexOf(e);if(n>-1?void 0:i(!1),!l.plugins[n]){t.extractEvents?void 0:i(!1),l.plugins[n]=t;var r=t.eventTypes;for(var a in r)o(r[a],t,a)?void 0:i(!1)}}}function o(e,t,n){l.eventNameDispatchConfigs.hasOwnProperty(n)?i(!1):void 0,l.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var o in r)if(r.hasOwnProperty(o)){var u=r[o];a(u,t,n)}return!0}return e.registrationName?(a(e.registrationName,t,n),!0):!1}function a(e,t,n){l.registrationNameModules[e]?i(!1):void 0,l.registrationNameModules[e]=t,l.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var i=e(142),u=null,s={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){u?i(!1):void 0,u=Array.prototype.slice.call(e),r()},injectEventPluginsByName:function(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];s.hasOwnProperty(n)&&s[n]===o||(s[n]?i(!1):void 0,s[n]=o,t=!0)}t&&r()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return l.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=l.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){u=null;for(var e in s)s.hasOwnProperty(e)&&delete s[e];l.plugins.length=0;var t=l.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=l.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=l},{142:142}],18:[function(e,t,n){"use strict";function r(e){return e===m.topMouseUp||e===m.topTouchEnd||e===m.topTouchCancel}function o(e){return e===m.topMouseMove||e===m.topTouchMove}function a(e){return e===m.topMouseDown||e===m.topTouchStart}function i(e,t,n,r){var o=e.type||"unknown-event";e.currentTarget=v.Mount.getNode(r),t?f.invokeGuardedCallbackWithCatch(o,n,e,r):f.invokeGuardedCallback(o,n,e,r),e.currentTarget=null}function u(e,t){var n=e._dispatchListeners,r=e._dispatchIDs;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)i(e,t,n[o],r[o]);else n&&i(e,t,n,r);e._dispatchListeners=null,e._dispatchIDs=null}function s(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function l(e){var t=s(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function c(e){var t=e._dispatchListeners,n=e._dispatchIDs;Array.isArray(t)?h(!1):void 0;var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function p(e){return!!e._dispatchListeners}var d=e(15),f=e(54),h=e(142),v=(e(151),{Mount:null,injectMount:function(e){v.Mount=e}}),m=d.topLevelTypes,g={isEndish:r,isMoveish:o,isStartish:a,executeDirectDispatch:c,executeDispatchesInOrder:u,executeDispatchesInOrderStopAtTrue:l,hasDispatches:p,getNode:function(e){return v.Mount.getNode(e)},getID:function(e){return v.Mount.getID(e)},injection:v};t.exports=g},{142:142,15:15,151:151,54:54}],19:[function(e,t,n){"use strict";function r(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return y(e,r)}function o(e,t,n){var o=t?g.bubbled:g.captured,a=r(e,n,o);a&&(n._dispatchListeners=v(n._dispatchListeners,a),n._dispatchIDs=v(n._dispatchIDs,e))}function a(e){e&&e.dispatchConfig.phasedRegistrationNames&&h.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,o,e)}function i(e){e&&e.dispatchConfig.phasedRegistrationNames&&h.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(e.dispatchMarker,o,e)}function u(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=y(e,r);o&&(n._dispatchListeners=v(n._dispatchListeners,o),n._dispatchIDs=v(n._dispatchIDs,e))}}function s(e){e&&e.dispatchConfig.registrationName&&u(e.dispatchMarker,null,e)}function l(e){m(e,a)}function c(e){m(e,i)}function p(e,t,n,r){h.injection.getInstanceHandle().traverseEnterLeave(n,r,u,e,t)}function d(e){m(e,s)}var f=e(15),h=e(16),v=(e(151),e(100)),m=e(108),g=f.PropagationPhases,y=h.getListener,C={accumulateTwoPhaseDispatches:l,accumulateTwoPhaseDispatchesSkipTarget:c,accumulateDirectDispatches:d,accumulateEnterLeaveDispatches:p};t.exports=C},{100:100,108:108,15:15,151:151,16:16}],20:[function(e,t,n){"use strict";function r(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var o=e(24),a=e(23),i=e(115);a(r.prototype,{destructor:function(){this._root=null,this._startText=null,this._fallbackText=null},getText:function(){return"value"in this._root?this._root.value:this._root[i()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),a=o.length;for(e=0;r>e&&n[e]===o[e];e++);var i=r-e;for(t=1;i>=t&&n[r-t]===o[a-t];t++);var u=t>1?1-t:void 0;return this._fallbackText=o.slice(e,u),this._fallbackText}}),o.addPoolingTo(r),t.exports=r},{115:115,23:23,24:24}],21:[function(e,t,n){"use strict";var r,o=e(10),a=e(128),i=o.injection.MUST_USE_ATTRIBUTE,u=o.injection.MUST_USE_PROPERTY,s=o.injection.HAS_BOOLEAN_VALUE,l=o.injection.HAS_SIDE_EFFECTS,c=o.injection.HAS_NUMERIC_VALUE,p=o.injection.HAS_POSITIVE_NUMERIC_VALUE,d=o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(a.canUseDOM){var f=document.implementation;r=f&&f.hasFeature&&f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var h={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:i|s,allowTransparency:i,alt:null,async:s,autoComplete:null,autoPlay:s,capture:i|s,cellPadding:null,cellSpacing:null,charSet:i,challenge:i,checked:u|s,classID:i,className:r?i:u,cols:i|p,colSpan:null,content:null,contentEditable:null,contextMenu:i,controls:u|s,coords:null,crossOrigin:null,data:null,dateTime:i,"default":s,defer:s,dir:null,disabled:i|s,download:d,draggable:null,encType:null,form:i,formAction:i,formEncType:i,formMethod:i,formNoValidate:s,formTarget:i,frameBorder:i,headers:null,height:i,hidden:i|s,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:u,inputMode:i,integrity:null,is:i,keyParams:i,keyType:i,kind:null,label:null,lang:null,list:i,loop:u|s,low:null,manifest:i,marginHeight:null,marginWidth:null,max:null,maxLength:i,media:i,mediaGroup:null,method:null,min:null,minLength:i,multiple:u|s,muted:u|s,name:null,nonce:i,noValidate:s,open:s,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:u|s,rel:null,required:s,reversed:s,role:i,rows:i|p,rowSpan:null,sandbox:null,scope:null,scoped:s,scrolling:null,seamless:i|s,selected:u|s,shape:null,size:i|p,sizes:i,span:p,spellCheck:null,src:null,srcDoc:u,srcLang:null,srcSet:i,start:c,step:null,style:null,summary:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:u|l,width:i,wmode:i,wrap:null,about:i,datatype:i,inlist:i,prefix:i,property:i,resource:i,"typeof":i,vocab:i,autoCapitalize:null,autoCorrect:null,autoSave:null,color:null,itemProp:i,itemScope:i|s,itemType:i,itemID:i,itemRef:i,results:null,security:i,unselectable:i},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",autoSave:"autosave",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=h},{10:10,128:128}],22:[function(e,t,n){"use strict";function r(e){null!=e.checkedLink&&null!=e.valueLink?l(!1):void 0}function o(e){r(e),null!=e.value||null!=e.onChange?l(!1):void 0}function a(e){r(e),null!=e.checked||null!=e.onChange?l(!1):void 0}function i(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""}var u=e(72),s=e(71),l=e(142),c=(e(151),{button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0}),p={value:function(e,t,n){return!e[t]||c[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:u.func},d={},f={checkPropTypes:function(e,t,n){for(var r in p){if(p.hasOwnProperty(r))var o=p[r](t,r,e,s.prop);o instanceof Error&&!(o.message in d)&&(d[o.message]=!0,i(n))}},getValue:function(e){return e.valueLink?(o(e),e.valueLink.value):e.value},getChecked:function(e){return e.checkedLink?(a(e),e.checkedLink.value):e.checked},executeOnChange:function(e,t){return e.valueLink?(o(e),e.valueLink.requestChange(t.target.value)):e.checkedLink?(a(e),e.checkedLink.requestChange(t.target.checked)):e.onChange?e.onChange.call(void 0,t):void 0}};t.exports=f},{142:142,151:151,71:71,72:72}],23:[function(e,t,n){"use strict";function r(e,t){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var n=Object(e),r=Object.prototype.hasOwnProperty,o=1;o<arguments.length;o++){var a=arguments[o];if(null!=a){var i=Object(a);for(var u in i)r.call(i,u)&&(n[u]=i[u])}}return n}t.exports=r},{}],24:[function(e,t,n){"use strict";var r=e(142),o=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},a=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},i=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},u=function(e,t,n,r){var o=this;if(o.instancePool.length){var a=o.instancePool.pop();return o.call(a,e,t,n,r),a}return new o(e,t,n,r)},s=function(e,t,n,r,o){var a=this;if(a.instancePool.length){var i=a.instancePool.pop();return a.call(i,e,t,n,r,o),i}return new a(e,t,n,r,o)},l=function(e){var t=this;e instanceof t?void 0:r(!1),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},c=10,p=o,d=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||p,n.poolSize||(n.poolSize=c),n.release=l,n},f={addPoolingTo:d,oneArgumentPooler:o,twoArgumentPooler:a,threeArgumentPooler:i,fourArgumentPooler:u,fiveArgumentPooler:s};t.exports=f},{142:142}],25:[function(e,t,n){"use strict";var r=(e(60),e(106)),o=(e(151),"_getDOMNodeDidWarn"),a={getDOMNode:function(){return this.constructor[o]=!0,r(this)}};t.exports=a},{106:106,151:151,60:60}],26:[function(e,t,n){"use strict";function r(e){return Object.prototype.hasOwnProperty.call(e,m)||(e[m]=h++,d[e[m]]={}),d[e[m]]}var o=e(15),a=e(16),i=e(17),u=e(55),s=e(69),l=e(99),c=e(23),p=e(117),d={},f=!1,h=0,v={topAbort:"abort",topBlur:"blur",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",
topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},m="_reactListenersID"+String(Math.random()).slice(2),g=c({},u,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(g.handleTopLevel),g.ReactEventListener=e}},setEnabled:function(e){g.ReactEventListener&&g.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!g.ReactEventListener||!g.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var n=t,a=r(n),u=i.registrationNameDependencies[e],s=o.topLevelTypes,l=0;l<u.length;l++){var c=u[l];a.hasOwnProperty(c)&&a[c]||(c===s.topWheel?p("wheel")?g.ReactEventListener.trapBubbledEvent(s.topWheel,"wheel",n):p("mousewheel")?g.ReactEventListener.trapBubbledEvent(s.topWheel,"mousewheel",n):g.ReactEventListener.trapBubbledEvent(s.topWheel,"DOMMouseScroll",n):c===s.topScroll?p("scroll",!0)?g.ReactEventListener.trapCapturedEvent(s.topScroll,"scroll",n):g.ReactEventListener.trapBubbledEvent(s.topScroll,"scroll",g.ReactEventListener.WINDOW_HANDLE):c===s.topFocus||c===s.topBlur?(p("focus",!0)?(g.ReactEventListener.trapCapturedEvent(s.topFocus,"focus",n),g.ReactEventListener.trapCapturedEvent(s.topBlur,"blur",n)):p("focusin")&&(g.ReactEventListener.trapBubbledEvent(s.topFocus,"focusin",n),g.ReactEventListener.trapBubbledEvent(s.topBlur,"focusout",n)),a[s.topBlur]=!0,a[s.topFocus]=!0):v.hasOwnProperty(c)&&g.ReactEventListener.trapBubbledEvent(c,v[c],n),a[c]=!0)}},trapBubbledEvent:function(e,t,n){return g.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return g.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!f){var e=l.refreshScrollValues;g.ReactEventListener.monitorScrollValue(e),f=!0}},eventNameDispatchConfigs:a.eventNameDispatchConfigs,registrationNameModules:a.registrationNameModules,putListener:a.putListener,getListener:a.getListener,deleteListener:a.deleteListener,deleteAllListeners:a.deleteAllListeners});s.measureMethods(g,"ReactBrowserEventEmitter",{putListener:"putListener",deleteListener:"deleteListener"}),t.exports=g},{117:117,15:15,16:16,17:17,23:23,55:55,69:69,99:99}],27:[function(e,t,n){"use strict";function r(e,t,n){var r=void 0===e[n];null!=t&&r&&(e[n]=a(t,null))}var o=e(74),a=e(116),i=e(124),u=e(125),s=(e(151),{instantiateChildren:function(e,t,n){if(null==e)return null;var o={};return u(e,r,o),o},updateChildren:function(e,t,n,r){if(!t&&!e)return null;var u;for(u in t)if(t.hasOwnProperty(u)){var s=e&&e[u],l=s&&s._currentElement,c=t[u];if(null!=s&&i(l,c))o.receiveComponent(s,c,n,r),t[u]=s;else{s&&o.unmountComponent(s,u);var p=a(c,null);t[u]=p}}for(u in e)!e.hasOwnProperty(u)||t&&t.hasOwnProperty(u)||o.unmountComponent(e[u]);return t},unmountChildren:function(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];o.unmountComponent(n)}}});t.exports=s},{116:116,124:124,125:125,151:151,74:74}],28:[function(e,t,n){"use strict";function r(e){return(""+e).replace(b,"//")}function o(e,t){this.func=e,this.context=t,this.count=0}function a(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function i(e,t,n){if(null==e)return e;var r=o.getPooled(t,n);g(e,a,r),o.release(r)}function u(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function s(e,t,n){var o=e.result,a=e.keyPrefix,i=e.func,u=e.context,s=i.call(u,t,e.count++);Array.isArray(s)?l(s,o,n,m.thatReturnsArgument):null!=s&&(v.isValidElement(s)&&(s=v.cloneAndReplaceKey(s,a+(s!==t?r(s.key||"")+"/":"")+n)),o.push(s))}function l(e,t,n,o,a){var i="";null!=n&&(i=r(n)+"/");var l=u.getPooled(t,i,o,a);g(e,s,l),u.release(l)}function c(e,t,n){if(null==e)return e;var r=[];return l(e,r,null,t,n),r}function p(e,t,n){return null}function d(e,t){return g(e,p,null)}function f(e){var t=[];return l(e,t,null,m.thatReturnsArgument),t}var h=e(24),v=e(50),m=e(134),g=e(125),y=h.twoArgumentPooler,C=h.fourArgumentPooler,b=/\/(?!\/)/g;o.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},h.addPoolingTo(o,y),u.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},h.addPoolingTo(u,C);var _={forEach:i,map:c,mapIntoWithKeyPrefixInternal:l,count:d,toArray:f};t.exports=_},{125:125,134:134,24:24,50:50}],29:[function(e,t,n){"use strict";function r(e,t){var n=E.hasOwnProperty(t)?E[t]:null;D.hasOwnProperty(t)&&(n!==b.OVERRIDE_BASE?m(!1):void 0),e.hasOwnProperty(t)&&(n!==b.DEFINE_MANY&&n!==b.DEFINE_MANY_MERGED?m(!1):void 0)}function o(e,t){if(t){"function"==typeof t?m(!1):void 0,d.isValidElement(t)?m(!1):void 0;var n=e.prototype;t.hasOwnProperty(C)&&x.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==C){var a=t[o];if(r(n,o),x.hasOwnProperty(o))x[o](e,a);else{var i=E.hasOwnProperty(o),l=n.hasOwnProperty(o),c="function"==typeof a,p=c&&!i&&!l&&t.autobind!==!1;if(p)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[o]=a,n[o]=a;else if(l){var f=E[o];!i||f!==b.DEFINE_MANY_MERGED&&f!==b.DEFINE_MANY?m(!1):void 0,f===b.DEFINE_MANY_MERGED?n[o]=u(n[o],a):f===b.DEFINE_MANY&&(n[o]=s(n[o],a))}else n[o]=a}}}}function a(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in x;o?m(!1):void 0;var a=n in e;a?m(!1):void 0,e[n]=r}}}function i(e,t){e&&t&&"object"==typeof e&&"object"==typeof t?void 0:m(!1);for(var n in t)t.hasOwnProperty(n)&&(void 0!==e[n]?m(!1):void 0,e[n]=t[n]);return e}function u(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return i(o,n),i(o,r),o}}function s(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e,t){var n=t.bind(e);return n}function c(e){for(var t in e.__reactAutoBindMap)if(e.__reactAutoBindMap.hasOwnProperty(t)){var n=e.__reactAutoBindMap[t];e[t]=l(e,n)}}var p=e(30),d=e(50),f=(e(71),e(70),e(67)),h=e(23),v=e(135),m=e(142),g=e(145),y=e(146),C=(e(151),y({mixins:null})),b=g({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),_=[],E={mixins:b.DEFINE_MANY,statics:b.DEFINE_MANY,propTypes:b.DEFINE_MANY,contextTypes:b.DEFINE_MANY,childContextTypes:b.DEFINE_MANY,getDefaultProps:b.DEFINE_MANY_MERGED,getInitialState:b.DEFINE_MANY_MERGED,getChildContext:b.DEFINE_MANY_MERGED,render:b.DEFINE_ONCE,componentWillMount:b.DEFINE_MANY,componentDidMount:b.DEFINE_MANY,componentWillReceiveProps:b.DEFINE_MANY,shouldComponentUpdate:b.DEFINE_ONCE,componentWillUpdate:b.DEFINE_MANY,componentDidUpdate:b.DEFINE_MANY,componentWillUnmount:b.DEFINE_MANY,updateComponent:b.OVERRIDE_BASE},x={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=h({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=h({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=u(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=h({},e.propTypes,t)},statics:function(e,t){a(e,t)},autobind:function(){}},D={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e),t&&this.updater.enqueueCallback(this,t)},isMounted:function(){return this.updater.isMounted(this)},setProps:function(e,t){this.updater.enqueueSetProps(this,e),t&&this.updater.enqueueCallback(this,t)},replaceProps:function(e,t){this.updater.enqueueReplaceProps(this,e),t&&this.updater.enqueueCallback(this,t)}},M=function(){};h(M.prototype,p.prototype,D);var N={createClass:function(e){var t=function(e,t,n){this.__reactAutoBindMap&&c(this),this.props=e,this.context=t,this.refs=v,this.updater=n||f,this.state=null;var r=this.getInitialState?this.getInitialState():null;"object"!=typeof r||Array.isArray(r)?m(!1):void 0,this.state=r};t.prototype=new M,t.prototype.constructor=t,_.forEach(o.bind(null,t)),o(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),t.prototype.render?void 0:m(!1);for(var n in E)t.prototype[n]||(t.prototype[n]=null);return t},injection:{injectMixin:function(e){_.push(e)}}};t.exports=N},{135:135,142:142,145:145,146:146,151:151,23:23,30:30,50:50,67:67,70:70,71:71}],30:[function(e,t,n){"use strict";function r(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||o}var o=e(67),a=(e(102),e(135)),i=e(142);e(151);r.prototype.isReactComponent={},r.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e?i(!1):void 0,this.updater.enqueueSetState(this,e),t&&this.updater.enqueueCallback(this,t)},r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e)};t.exports=r},{102:102,135:135,142:142,151:151,67:67}],31:[function(e,t,n){"use strict";var r=e(40),o=e(63),a={processChildrenUpdates:r.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:r.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function(e){o.purgeID(e)}};t.exports=a},{40:40,63:63}],32:[function(e,t,n){"use strict";var r=e(142),o=!1,a={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){o?r(!1):void 0,a.unmountIDFromEnvironment=e.unmountIDFromEnvironment,a.replaceNodeWithMarkupByID=e.replaceNodeWithMarkupByID,a.processChildrenUpdates=e.processChildrenUpdates,o=!0}}};t.exports=a},{142:142}],33:[function(e,t,n){"use strict";function r(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}function o(e){}var a=e(32),i=e(34),u=e(50),s=e(60),l=e(69),c=e(71),p=(e(70),e(74)),d=e(80),f=e(23),h=e(135),v=e(142),m=e(124);e(151);o.prototype.render=function(){var e=s.get(this)._currentElement.type;return e(this.props,this.context,this.updater)};var g=1,y={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._topLevelWrapper=null,this._pendingCallbacks=null},mountComponent:function(e,t,n){this._context=n,this._mountOrder=g++,this._rootNodeID=e;var r,a,i=this._processProps(this._currentElement.props),l=this._processContext(n),c=this._currentElement.type,f="prototype"in c;f&&(r=new c(i,l,d)),(!f||null===r||r===!1||u.isValidElement(r))&&(a=r,r=new o(c)),r.props=i,r.context=l,r.refs=h,r.updater=d,this._instance=r,s.set(r,this);var m=r.state;void 0===m&&(r.state=m=null),"object"!=typeof m||Array.isArray(m)?v(!1):void 0,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,r.componentWillMount&&(r.componentWillMount(),this._pendingStateQueue&&(r.state=this._processPendingState(r.props,r.context))),void 0===a&&(a=this._renderValidatedComponent()),this._renderedComponent=this._instantiateReactComponent(a);var y=p.mountComponent(this._renderedComponent,e,t,this._processChildContext(n));return r.componentDidMount&&t.getReactMountReady().enqueue(r.componentDidMount,r),y},unmountComponent:function(){var e=this._instance;e.componentWillUnmount&&e.componentWillUnmount(),p.unmountComponent(this._renderedComponent),this._renderedComponent=null,this._instance=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=null,this._topLevelWrapper=null,s.remove(e)},_maskContext:function(e){var t=null,n=this._currentElement.type,r=n.contextTypes;if(!r)return h;t={};for(var o in r)t[o]=e[o];return t},_processContext:function(e){var t=this._maskContext(e);return t},_processChildContext:function(e){var t=this._currentElement.type,n=this._instance,r=n.getChildContext&&n.getChildContext();if(r){"object"!=typeof t.childContextTypes?v(!1):void 0;for(var o in r)o in t.childContextTypes?void 0:v(!1);return f({},e,r)}return e},_processProps:function(e){return e},_checkPropTypes:function(e,t,n){var o=this.getName();for(var a in e)if(e.hasOwnProperty(a)){var i;try{"function"!=typeof e[a]?v(!1):void 0,i=e[a](t,a,o,n)}catch(u){i=u}i instanceof Error&&(r(this),n===c.prop)}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement&&p.receiveComponent(this,this._pendingElement||this._currentElement,e,this._context),(null!==this._pendingStateQueue||this._pendingForceUpdate)&&this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context)},updateComponent:function(e,t,n,r,o){var a,i=this._instance,u=this._context===o?i.context:this._processContext(o);t===n?a=n.props:(a=this._processProps(n.props),i.componentWillReceiveProps&&i.componentWillReceiveProps(a,u));var s=this._processPendingState(a,u),l=this._pendingForceUpdate||!i.shouldComponentUpdate||i.shouldComponentUpdate(a,s,u);l?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,a,s,u,e,o)):(this._currentElement=n,this._context=o,i.props=a,i.state=s,i.context=u)},_processPendingState:function(e,t){var n=this._instance,r=this._pendingStateQueue,o=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!r)return n.state;if(o&&1===r.length)return r[0];for(var a=f({},o?r[0]:n.state),i=o?1:0;i<r.length;i++){var u=r[i];f(a,"function"==typeof u?u.call(n,a,e,t):u)}return a},_performComponentUpdate:function(e,t,n,r,o,a){var i,u,s,l=this._instance,c=Boolean(l.componentDidUpdate);c&&(i=l.props,u=l.state,s=l.context),l.componentWillUpdate&&l.componentWillUpdate(t,n,r),this._currentElement=e,this._context=a,l.props=t,l.state=n,l.context=r,this._updateRenderedComponent(o,a),c&&o.getReactMountReady().enqueue(l.componentDidUpdate.bind(l,i,u,s),l)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._renderValidatedComponent();if(m(r,o))p.receiveComponent(n,o,e,this._processChildContext(t));else{var a=this._rootNodeID,i=n._rootNodeID;p.unmountComponent(n),this._renderedComponent=this._instantiateReactComponent(o);var u=p.mountComponent(this._renderedComponent,a,e,this._processChildContext(t));this._replaceNodeWithMarkupByID(i,u)}},_replaceNodeWithMarkupByID:function(e,t){a.replaceNodeWithMarkupByID(e,t)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return t},_renderValidatedComponent:function(){var e;i.current=this;try{e=this._renderValidatedComponentWithoutOwnerOrContext()}finally{i.current=null}return null===e||e===!1||u.isValidElement(e)?void 0:v(!1),e},attachRef:function(e,t){var n=this.getPublicInstance();null==n?v(!1):void 0;var r=t.getPublicInstance(),o=n.refs===h?n.refs={}:n.refs;o[e]=r},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){var e=this._instance;return e instanceof o?null:e},_instantiateReactComponent:null};l.measureMethods(y,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var C={Mixin:y};t.exports=C},{124:124,135:135,142:142,151:151,23:23,32:32,34:34,50:50,60:60,69:69,70:70,71:71,74:74,80:80}],34:[function(e,t,n){"use strict";var r={current:null};t.exports=r},{}],35:[function(e,t,n){"use strict";var r=e(34),o=e(46),a=e(49),i=e(59),u=e(63),s=e(69),l=e(74),c=e(81),p=e(82),d=e(106),f=e(121);e(151);a.inject();var h=s.measure("React","render",u.render),v={findDOMNode:d,render:h,unmountComponentAtNode:u.unmountComponentAtNode,version:p,unstable_batchedUpdates:c.batchedUpdates,unstable_renderSubtreeIntoContainer:f};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:r,InstanceHandles:i,Mount:u,Reconciler:l,TextComponent:o});t.exports=v},{106:106,121:121,151:151,34:34,46:46,49:49,59:59,63:63,69:69,74:74,81:81,82:82}],36:[function(e,t,n){"use strict";var r={onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0},o={getNativeProps:function(e,t,n){if(!t.disabled)return t;var o={};for(var a in t)t.hasOwnProperty(a)&&!r[a]&&(o[a]=t[a]);return o}};t.exports=o},{}],37:[function(e,t,n){"use strict";function r(){return this}function o(){var e=this._reactInternalComponent;return!!e}function a(){}function i(e,t){var n=this._reactInternalComponent;n&&(T.enqueueSetPropsInternal(n,e),t&&T.enqueueCallbackInternal(n,t))}function u(e,t){var n=this._reactInternalComponent;n&&(T.enqueueReplacePropsInternal(n,e),t&&T.enqueueCallbackInternal(n,t))}function s(e,t){t&&(null!=t.dangerouslySetInnerHTML&&(null!=t.children?L(!1):void 0,"object"==typeof t.dangerouslySetInnerHTML&&Y in t.dangerouslySetInnerHTML?void 0:L(!1)),null!=t.style&&"object"!=typeof t.style?L(!1):void 0)}function l(e,t,n,r){var o=R.findReactContainerForID(e);if(o){var a=o.nodeType===z?o.ownerDocument:o;j(t,a)}r.getReactMountReady().enqueue(c,{id:e,registrationName:t,listener:n})}function c(){var e=this;E.putListener(e.id,e.registrationName,e.listener)}function p(){var e=this;e._rootNodeID?void 0:L(!1);var t=R.getNode(e._rootNodeID);switch(t?void 0:L(!1),e._tag){case"iframe":e._wrapperState.listeners=[E.trapBubbledEvent(_.topLevelTypes.topLoad,"load",t)];break;case"video":case"audio":e._wrapperState.listeners=[];for(var n in G)G.hasOwnProperty(n)&&e._wrapperState.listeners.push(E.trapBubbledEvent(_.topLevelTypes[n],G[n],t));break;case"img":e._wrapperState.listeners=[E.trapBubbledEvent(_.topLevelTypes.topError,"error",t),E.trapBubbledEvent(_.topLevelTypes.topLoad,"load",t)];break;case"form":e._wrapperState.listeners=[E.trapBubbledEvent(_.topLevelTypes.topReset,"reset",t),E.trapBubbledEvent(_.topLevelTypes.topSubmit,"submit",t)]}}function d(){M.mountReadyWrapper(this)}function f(){P.postUpdateWrapper(this)}function h(e){J.call(Z,e)||($.test(e)?void 0:L(!1),Z[e]=!0)}function v(e,t){return e.indexOf("-")>=0||null!=t.is}function m(e){h(e),this._tag=e.toLowerCase(),this._renderedChildren=null,this._previousStyle=null,this._previousStyleCopy=null,this._rootNodeID=null,this._wrapperState=null,this._topLevelWrapper=null,this._nodeWithLegacyProperties=null}var g=e(2),y=e(5),C=e(10),b=e(11),_=e(15),E=e(26),x=e(31),D=e(36),M=e(41),N=e(42),P=e(43),w=e(47),R=e(63),I=e(64),S=e(69),T=e(80),k=e(23),O=e(102),A=e(105),L=e(142),U=(e(117),e(146)),F=e(122),B=e(123),V=(e(149),e(126),e(151),E.deleteListener),j=E.listenTo,W=E.registrationNameModules,K={string:!0,number:!0},H=U({children:null}),q=U({style:null}),Y=U({__html:null}),z=1,G={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},X={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Q={listing:!0,pre:!0,textarea:!0},$=(k({menuitem:!0},X),/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),Z={},J={}.hasOwnProperty;m.displayName="ReactDOMComponent",m.Mixin={construct:function(e){this._currentElement=e},mountComponent:function(e,t,n){this._rootNodeID=e;var r=this._currentElement.props;switch(this._tag){case"iframe":case"img":case"form":case"video":case"audio":this._wrapperState={listeners:null},t.getReactMountReady().enqueue(p,this);break;case"button":r=D.getNativeProps(this,r,n);break;case"input":M.mountWrapper(this,r,n),r=M.getNativeProps(this,r,n);break;case"option":N.mountWrapper(this,r,n),r=N.getNativeProps(this,r,n);break;case"select":P.mountWrapper(this,r,n),r=P.getNativeProps(this,r,n),n=P.processChildContext(this,r,n);break;case"textarea":w.mountWrapper(this,r,n),r=w.getNativeProps(this,r,n)}s(this,r);var o;if(t.useCreateElement){var a=n[R.ownerDocumentContextKey],i=a.createElement(this._currentElement.type);b.setAttributeForID(i,this._rootNodeID),R.getID(i),this._updateDOMProperties({},r,t,i),this._createInitialChildren(t,r,n,i),o=i}else{var u=this._createOpenTagMarkupAndPutListeners(t,r),l=this._createContentMarkup(t,r,n);o=!l&&X[this._tag]?u+"/>":u+">"+l+"</"+this._currentElement.type+">"}switch(this._tag){case"input":t.getReactMountReady().enqueue(d,this);case"button":case"select":case"textarea":r.autoFocus&&t.getReactMountReady().enqueue(g.focusDOMComponent,this)}return o},_createOpenTagMarkupAndPutListeners:function(e,t){var n="<"+this._currentElement.type;for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];if(null!=o)if(W.hasOwnProperty(r))o&&l(this._rootNodeID,r,o,e);else{r===q&&(o&&(o=this._previousStyleCopy=k({},t.style)),o=y.createMarkupForStyles(o));var a=null;null!=this._tag&&v(this._tag,t)?r!==H&&(a=b.createMarkupForCustomAttribute(r,o)):a=b.createMarkupForProperty(r,o),a&&(n+=" "+a)}}if(e.renderToStaticMarkup)return n;var i=b.createMarkupForID(this._rootNodeID);return n+" "+i},_createContentMarkup:function(e,t,n){var r="",o=t.dangerouslySetInnerHTML;if(null!=o)null!=o.__html&&(r=o.__html);else{var a=K[typeof t.children]?t.children:null,i=null!=a?null:t.children;if(null!=a)r=A(a);else if(null!=i){var u=this.mountChildren(i,e,n);r=u.join("")}}return Q[this._tag]&&"\n"===r.charAt(0)?"\n"+r:r},_createInitialChildren:function(e,t,n,r){var o=t.dangerouslySetInnerHTML;if(null!=o)null!=o.__html&&F(r,o.__html);else{var a=K[typeof t.children]?t.children:null,i=null!=a?null:t.children;if(null!=a)B(r,a);else if(null!=i)for(var u=this.mountChildren(i,e,n),s=0;s<u.length;s++)r.appendChild(u[s])}},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,n,r){var o=t.props,a=this._currentElement.props;switch(this._tag){case"button":o=D.getNativeProps(this,o),a=D.getNativeProps(this,a);break;case"input":M.updateWrapper(this),o=M.getNativeProps(this,o),a=M.getNativeProps(this,a);break;case"option":o=N.getNativeProps(this,o),a=N.getNativeProps(this,a);break;case"select":o=P.getNativeProps(this,o),a=P.getNativeProps(this,a);break;case"textarea":w.updateWrapper(this),o=w.getNativeProps(this,o),a=w.getNativeProps(this,a)}s(this,a),this._updateDOMProperties(o,a,e,null),this._updateDOMChildren(o,a,e,r),!O&&this._nodeWithLegacyProperties&&(this._nodeWithLegacyProperties.props=a),"select"===this._tag&&e.getReactMountReady().enqueue(f,this)},_updateDOMProperties:function(e,t,n,r){var o,a,i;for(o in e)if(!t.hasOwnProperty(o)&&e.hasOwnProperty(o))if(o===q){var u=this._previousStyleCopy;for(a in u)u.hasOwnProperty(a)&&(i=i||{},i[a]="");this._previousStyleCopy=null}else W.hasOwnProperty(o)?e[o]&&V(this._rootNodeID,o):(C.properties[o]||C.isCustomAttribute(o))&&(r||(r=R.getNode(this._rootNodeID)),b.deleteValueForProperty(r,o));for(o in t){var s=t[o],c=o===q?this._previousStyleCopy:e[o];if(t.hasOwnProperty(o)&&s!==c)if(o===q)if(s?s=this._previousStyleCopy=k({},s):this._previousStyleCopy=null,c){for(a in c)!c.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(i=i||{},i[a]="");for(a in s)s.hasOwnProperty(a)&&c[a]!==s[a]&&(i=i||{},i[a]=s[a])}else i=s;else W.hasOwnProperty(o)?s?l(this._rootNodeID,o,s,n):c&&V(this._rootNodeID,o):v(this._tag,t)?(r||(r=R.getNode(this._rootNodeID)),o===H&&(s=null),b.setValueForAttribute(r,o,s)):(C.properties[o]||C.isCustomAttribute(o))&&(r||(r=R.getNode(this._rootNodeID)),null!=s?b.setValueForProperty(r,o,s):b.deleteValueForProperty(r,o))}i&&(r||(r=R.getNode(this._rootNodeID)),y.setValueForStyles(r,i))},_updateDOMChildren:function(e,t,n,r){var o=K[typeof e.children]?e.children:null,a=K[typeof t.children]?t.children:null,i=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,u=t.dangerouslySetInnerHTML&&t.dangerouslySetInnerHTML.__html,s=null!=o?null:e.children,l=null!=a?null:t.children,c=null!=o||null!=i,p=null!=a||null!=u;null!=s&&null==l?this.updateChildren(null,n,r):c&&!p&&this.updateTextContent(""),null!=a?o!==a&&this.updateTextContent(""+a):null!=u?i!==u&&this.updateMarkup(""+u):null!=l&&this.updateChildren(l,n,r)},unmountComponent:function(){switch(this._tag){case"iframe":case"img":case"form":case"video":case"audio":var e=this._wrapperState.listeners;if(e)for(var t=0;t<e.length;t++)e[t].remove();break;case"input":M.unmountWrapper(this);break;case"html":case"head":case"body":L(!1)}if(this.unmountChildren(),E.deleteAllListeners(this._rootNodeID),x.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null,this._wrapperState=null,this._nodeWithLegacyProperties){var n=this._nodeWithLegacyProperties;n._reactInternalComponent=null,this._nodeWithLegacyProperties=null}},getPublicInstance:function(){if(!this._nodeWithLegacyProperties){var e=R.getNode(this._rootNodeID);e._reactInternalComponent=this,e.getDOMNode=r,e.isMounted=o,e.setState=a,e.replaceState=a,e.forceUpdate=a,e.setProps=i,e.replaceProps=u,e.props=this._currentElement.props,this._nodeWithLegacyProperties=e}return this._nodeWithLegacyProperties}},S.measureMethods(m,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),k(m.prototype,m.Mixin,I.Mixin),t.exports=m},{10:10,102:102,105:105,11:11,117:117,122:122,123:123,126:126,142:142,146:146,149:149,15:15,151:151,2:2,23:23,26:26,31:31,36:36,41:41,42:42,43:43,47:47,5:5,63:63,64:64,69:69,80:80}],38:[function(e,t,n){"use strict";function r(e){return o.createFactory(e)}var o=e(50),a=(e(51),e(147)),i=a({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hgroup:"hgroup",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",image:"image",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},r);t.exports=i},{147:147,50:50,51:51}],39:[function(e,t,n){"use strict";var r={useCreateElement:!1};t.exports=r},{}],40:[function(e,t,n){"use strict";var r=e(9),o=e(11),a=e(63),i=e(69),u=e(142),s={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},l={updatePropertyByID:function(e,t,n){var r=a.getNode(e);s.hasOwnProperty(t)?u(!1):void 0,null!=n?o.setValueForProperty(r,t,n):o.deleteValueForProperty(r,t)},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=a.getNode(e);r.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=a.getNode(e[n].parentID);r.processUpdates(e,t)}};i.measureMethods(l,"ReactDOMIDOperations",{dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),t.exports=l},{11:11,142:142,63:63,69:69,9:9}],41:[function(e,t,n){"use strict";function r(){this._rootNodeID&&d.updateWrapper(this)}function o(e){var t=this._currentElement.props,n=i.executeOnChange(t,e);s.asap(r,this);var o=t.name;if("radio"===t.type&&null!=o){for(var a=u.getNode(this._rootNodeID),l=a;l.parentNode;)l=l.parentNode;for(var d=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),f=0;f<d.length;f++){var h=d[f];if(h!==a&&h.form===a.form){var v=u.getID(h);v?void 0:c(!1);var m=p[v];m?void 0:c(!1),s.asap(r,m)}}}return n}var a=e(40),i=e(22),u=e(63),s=e(81),l=e(23),c=e(142),p={},d={getNativeProps:function(e,t,n){var r=i.getValue(t),o=i.getChecked(t),a=l({},t,{defaultChecked:void 0,defaultValue:void 0,value:null!=r?r:e._wrapperState.initialValue,checked:null!=o?o:e._wrapperState.initialChecked,onChange:e._wrapperState.onChange});return a},mountWrapper:function(e,t){var n=t.defaultValue;e._wrapperState={initialChecked:t.defaultChecked||!1,initialValue:null!=n?n:null,onChange:o.bind(e)}},mountReadyWrapper:function(e){p[e._rootNodeID]=e},unmountWrapper:function(e){delete p[e._rootNodeID]},updateWrapper:function(e){var t=e._currentElement.props,n=t.checked;null!=n&&a.updatePropertyByID(e._rootNodeID,"checked",n||!1);var r=i.getValue(t);null!=r&&a.updatePropertyByID(e._rootNodeID,"value",""+r)}};t.exports=d},{142:142,22:22,23:23,40:40,63:63,81:81}],42:[function(e,t,n){"use strict";var r=e(28),o=e(43),a=e(23),i=(e(151),o.valueContextKey),u={mountWrapper:function(e,t,n){var r=n[i],o=null;if(null!=r)if(o=!1,Array.isArray(r)){for(var a=0;a<r.length;a++)if(""+r[a]==""+t.value){o=!0;break}}else o=""+r==""+t.value;e._wrapperState={selected:o}},getNativeProps:function(e,t,n){var o=a({selected:void 0,children:void 0},t);null!=e._wrapperState.selected&&(o.selected=e._wrapperState.selected);var i="";return r.forEach(t.children,function(e){null!=e&&("string"==typeof e||"number"==typeof e)&&(i+=e)}),o.children=i,o}};t.exports=u},{151:151,23:23,28:28,43:43}],43:[function(e,t,n){"use strict";function r(){if(this._rootNodeID&&this._wrapperState.pendingUpdate){this._wrapperState.pendingUpdate=!1;var e=this._currentElement.props,t=i.getValue(e);null!=t&&o(this,e,t)}}function o(e,t,n){var r,o,a=u.getNode(e._rootNodeID).options;if(t){for(r={},o=0;o<n.length;o++)r[""+n[o]]=!0;for(o=0;o<a.length;o++){var i=r.hasOwnProperty(a[o].value);a[o].selected!==i&&(a[o].selected=i)}}else{for(r=""+n,o=0;o<a.length;o++)if(a[o].value===r)return void(a[o].selected=!0);a.length&&(a[0].selected=!0)}}function a(e){var t=this._currentElement.props,n=i.executeOnChange(t,e);return this._wrapperState.pendingUpdate=!0,s.asap(r,this),n}var i=e(22),u=e(63),s=e(81),l=e(23),c=(e(151),"__ReactDOMSelect_value$"+Math.random().toString(36).slice(2)),p={valueContextKey:c,getNativeProps:function(e,t,n){return l({},t,{onChange:e._wrapperState.onChange,value:void 0})},mountWrapper:function(e,t){var n=i.getValue(t);e._wrapperState={pendingUpdate:!1,initialValue:null!=n?n:t.defaultValue,onChange:a.bind(e),wasMultiple:Boolean(t.multiple)}},processChildContext:function(e,t,n){var r=l({},n);return r[c]=e._wrapperState.initialValue,
r},postUpdateWrapper:function(e){var t=e._currentElement.props;e._wrapperState.initialValue=void 0;var n=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=Boolean(t.multiple);var r=i.getValue(t);null!=r?(e._wrapperState.pendingUpdate=!1,o(e,Boolean(t.multiple),r)):n!==Boolean(t.multiple)&&(null!=t.defaultValue?o(e,Boolean(t.multiple),t.defaultValue):o(e,Boolean(t.multiple),t.multiple?[]:""))}};t.exports=p},{151:151,22:22,23:23,63:63,81:81}],44:[function(e,t,n){"use strict";function r(e,t,n,r){return e===n&&t===r}function o(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var a=o.text.length,i=a+r;return{start:a,end:i}}function a(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,o=t.anchorOffset,a=t.focusNode,i=t.focusOffset,u=t.getRangeAt(0);try{u.startContainer.nodeType,u.endContainer.nodeType}catch(s){return null}var l=r(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),c=l?0:u.toString().length,p=u.cloneRange();p.selectNodeContents(e),p.setEnd(u.startContainer,u.startOffset);var d=r(p.startContainer,p.startOffset,p.endContainer,p.endOffset),f=d?0:p.toString().length,h=f+c,v=document.createRange();v.setStart(n,o),v.setEnd(a,i);var m=v.collapsed;return{start:m?h:f,end:m?f:h}}function i(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function u(e,t){if(window.getSelection){var n=window.getSelection(),r=e[c()].length,o=Math.min(t.start,r),a="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>a){var i=a;a=o,o=i}var u=l(e,o),s=l(e,a);if(u&&s){var p=document.createRange();p.setStart(u.node,u.offset),n.removeAllRanges(),o>a?(n.addRange(p),n.extend(s.node,s.offset)):(p.setEnd(s.node,s.offset),n.addRange(p))}}}var s=e(128),l=e(114),c=e(115),p=s.canUseDOM&&"selection"in document&&!("getSelection"in window),d={getOffsets:p?o:a,setOffsets:p?i:u};t.exports=d},{114:114,115:115,128:128}],45:[function(e,t,n){"use strict";var r=e(49),o=e(78),a=e(82);r.inject();var i={renderToString:o.renderToString,renderToStaticMarkup:o.renderToStaticMarkup,version:a};t.exports=i},{49:49,78:78,82:82}],46:[function(e,t,n){"use strict";var r=e(9),o=e(11),a=e(31),i=e(63),u=e(23),s=e(105),l=e(123),c=(e(126),function(e){});u(c.prototype,{construct:function(e){this._currentElement=e,this._stringText=""+e,this._rootNodeID=null,this._mountIndex=0},mountComponent:function(e,t,n){if(this._rootNodeID=e,t.useCreateElement){var r=n[i.ownerDocumentContextKey],a=r.createElement("span");return o.setAttributeForID(a,e),i.getID(a),l(a,this._stringText),a}var u=s(this._stringText);return t.renderToStaticMarkup?u:"<span "+o.createMarkupForID(e)+">"+u+"</span>"},receiveComponent:function(e,t){if(e!==this._currentElement){this._currentElement=e;var n=""+e;if(n!==this._stringText){this._stringText=n;var o=i.getNode(this._rootNodeID);r.updateTextContent(o,n)}}},unmountComponent:function(){a.unmountIDFromEnvironment(this._rootNodeID)}}),t.exports=c},{105:105,11:11,123:123,126:126,23:23,31:31,63:63,9:9}],47:[function(e,t,n){"use strict";function r(){this._rootNodeID&&c.updateWrapper(this)}function o(e){var t=this._currentElement.props,n=a.executeOnChange(t,e);return u.asap(r,this),n}var a=e(22),i=e(40),u=e(81),s=e(23),l=e(142),c=(e(151),{getNativeProps:function(e,t,n){null!=t.dangerouslySetInnerHTML?l(!1):void 0;var r=s({},t,{defaultValue:void 0,value:void 0,children:e._wrapperState.initialValue,onChange:e._wrapperState.onChange});return r},mountWrapper:function(e,t){var n=t.defaultValue,r=t.children;null!=r&&(null!=n?l(!1):void 0,Array.isArray(r)&&(r.length<=1?void 0:l(!1),r=r[0]),n=""+r),null==n&&(n="");var i=a.getValue(t);e._wrapperState={initialValue:""+(null!=i?i:n),onChange:o.bind(e)}},updateWrapper:function(e){var t=e._currentElement.props,n=a.getValue(t);null!=n&&i.updatePropertyByID(e._rootNodeID,"value",""+n)}});t.exports=c},{142:142,151:151,22:22,23:23,40:40,81:81}],48:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction()}var o=e(81),a=e(98),i=e(23),u=e(134),s={initialize:u,close:function(){d.isBatchingUpdates=!1}},l={initialize:u,close:o.flushBatchedUpdates.bind(o)},c=[l,s];i(r.prototype,a.Mixin,{getTransactionWrappers:function(){return c}});var p=new r,d={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o,a){var i=d.isBatchingUpdates;d.isBatchingUpdates=!0,i?e(t,n,r,o,a):p.perform(e,null,t,n,r,o,a)}};t.exports=d},{134:134,23:23,81:81,98:98}],49:[function(e,t,n){"use strict";function r(){M||(M=!0,g.EventEmitter.injectReactEventListener(m),g.EventPluginHub.injectEventPluginOrder(u),g.EventPluginHub.injectInstanceHandle(y),g.EventPluginHub.injectMount(C),g.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:x,EnterLeaveEventPlugin:s,ChangeEventPlugin:a,SelectEventPlugin:_,BeforeInputEventPlugin:o}),g.NativeComponent.injectGenericComponentClass(h),g.NativeComponent.injectTextComponentClass(v),g.Class.injectMixin(p),g.DOMProperty.injectDOMPropertyConfig(c),g.DOMProperty.injectDOMPropertyConfig(D),g.EmptyComponent.injectEmptyComponent("noscript"),g.Updates.injectReconcileTransaction(b),g.Updates.injectBatchingStrategy(f),g.RootIndex.injectCreateReactRootIndex(l.canUseDOM?i.createReactRootIndex:E.createReactRootIndex),g.Component.injectEnvironment(d))}var o=e(3),a=e(7),i=e(8),u=e(13),s=e(14),l=e(128),c=e(21),p=e(25),d=e(31),f=e(48),h=e(37),v=e(46),m=e(56),g=e(57),y=e(59),C=e(63),b=e(73),_=e(84),E=e(85),x=e(86),D=e(83),M=!1;t.exports={inject:r}},{128:128,13:13,14:14,21:21,25:25,3:3,31:31,37:37,46:46,48:48,56:56,57:57,59:59,63:63,7:7,73:73,8:8,83:83,84:84,85:85,86:86}],50:[function(e,t,n){"use strict";var r=e(34),o=e(23),a=(e(102),"function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103),i={key:!0,ref:!0,__self:!0,__source:!0},u=function(e,t,n,r,o,i,u){var s={$$typeof:a,type:e,key:t,ref:n,props:u,_owner:i};return s};u.createElement=function(e,t,n){var o,a={},s=null,l=null,c=null,p=null;if(null!=t){l=void 0===t.ref?null:t.ref,s=void 0===t.key?null:""+t.key,c=void 0===t.__self?null:t.__self,p=void 0===t.__source?null:t.__source;for(o in t)t.hasOwnProperty(o)&&!i.hasOwnProperty(o)&&(a[o]=t[o])}var d=arguments.length-2;if(1===d)a.children=n;else if(d>1){for(var f=Array(d),h=0;d>h;h++)f[h]=arguments[h+2];a.children=f}if(e&&e.defaultProps){var v=e.defaultProps;for(o in v)"undefined"==typeof a[o]&&(a[o]=v[o])}return u(e,s,l,c,p,r.current,a)},u.createFactory=function(e){var t=u.createElement.bind(null,e);return t.type=e,t},u.cloneAndReplaceKey=function(e,t){var n=u(e.type,t,e.ref,e._self,e._source,e._owner,e.props);return n},u.cloneAndReplaceProps=function(e,t){var n=u(e.type,e.key,e.ref,e._self,e._source,e._owner,t);return n},u.cloneElement=function(e,t,n){var a,s=o({},e.props),l=e.key,c=e.ref,p=e._self,d=e._source,f=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,f=r.current),void 0!==t.key&&(l=""+t.key);for(a in t)t.hasOwnProperty(a)&&!i.hasOwnProperty(a)&&(s[a]=t[a])}var h=arguments.length-2;if(1===h)s.children=n;else if(h>1){for(var v=Array(h),m=0;h>m;m++)v[m]=arguments[m+2];s.children=v}return u(e.type,l,c,p,d,f,s)},u.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.exports=u},{102:102,23:23,34:34}],51:[function(e,t,n){"use strict";function r(){if(p.current){var e=p.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function o(e,t){e._store&&!e._store.validated&&null==e.key&&(e._store.validated=!0,a("uniqueKey",e,t))}function a(e,t,n){var o=r();if(!o){var a="string"==typeof n?n:n.displayName||n.name;a&&(o=" Check the top-level render call using <"+a+">.")}var i=h[e]||(h[e]={});if(i[o])return null;i[o]=!0;var u={parentOrOwner:o,url:" See https://fb.me/react-warning-keys for more information.",childOwner:null};return t&&t._owner&&t._owner!==p.current&&(u.childOwner=" It was passed a child from "+t._owner.getName()+"."),u}function i(e,t){if("object"==typeof e)if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];l.isValidElement(r)&&o(r,t)}else if(l.isValidElement(e))e._store&&(e._store.validated=!0);else if(e){var a=d(e);if(a&&a!==e.entries)for(var i,u=a.call(e);!(i=u.next()).done;)l.isValidElement(i.value)&&o(i.value,t)}}function u(e,t,n,o){for(var a in t)if(t.hasOwnProperty(a)){var i;try{"function"!=typeof t[a]?f(!1):void 0,i=t[a](n,a,e,o)}catch(u){i=u}i instanceof Error&&!(i.message in v)&&(v[i.message]=!0,r())}}function s(e){var t=e.type;if("function"==typeof t){var n=t.displayName||t.name;t.propTypes&&u(n,t.propTypes,e.props,c.prop),"function"==typeof t.getDefaultProps}}var l=e(50),c=e(71),p=(e(70),e(34)),d=(e(102),e(113)),f=e(142),h=(e(151),{}),v={},m={createElement:function(e,t,n){var r="string"==typeof e||"function"==typeof e,o=l.createElement.apply(this,arguments);if(null==o)return o;if(r)for(var a=2;a<arguments.length;a++)i(arguments[a],e);return s(o),o},createFactory:function(e){var t=m.createElement.bind(null,e);return t.type=e,t},cloneElement:function(e,t,n){for(var r=l.cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)i(arguments[o],r.type);return s(r),r}};t.exports=m},{102:102,113:113,142:142,151:151,34:34,50:50,70:70,71:71}],52:[function(e,t,n){"use strict";var r,o=e(50),a=e(53),i=e(74),u=e(23),s={injectEmptyComponent:function(e){r=o.createElement(e)}},l=function(e){this._currentElement=null,this._rootNodeID=null,this._renderedComponent=e(r)};u(l.prototype,{construct:function(e){},mountComponent:function(e,t,n){return a.registerNullComponentID(e),this._rootNodeID=e,i.mountComponent(this._renderedComponent,e,t,n)},receiveComponent:function(){},unmountComponent:function(e,t,n){i.unmountComponent(this._renderedComponent),a.deregisterNullComponentID(this._rootNodeID),this._rootNodeID=null,this._renderedComponent=null}}),l.injection=s,t.exports=l},{23:23,50:50,53:53,74:74}],53:[function(e,t,n){"use strict";function r(e){return!!i[e]}function o(e){i[e]=!0}function a(e){delete i[e]}var i={},u={isNullComponentID:r,registerNullComponentID:o,deregisterNullComponentID:a};t.exports=u},{}],54:[function(e,t,n){"use strict";function r(e,t,n,r){try{return t(n,r)}catch(a){return void(null===o&&(o=a))}}var o=null,a={invokeGuardedCallback:r,invokeGuardedCallbackWithCatch:r,rethrowCaughtError:function(){if(o){var e=o;throw o=null,e}}};t.exports=a},{}],55:[function(e,t,n){"use strict";function r(e){o.enqueueEvents(e),o.processEventQueue(!1)}var o=e(16),a={handleTopLevel:function(e,t,n,a,i){var u=o.extractEvents(e,t,n,a,i);r(u)}};t.exports=a},{16:16}],56:[function(e,t,n){"use strict";function r(e){var t=d.getID(e),n=p.getReactRootIDFromNodeID(t),r=d.findReactContainerForID(n),o=d.getFirstReactDOM(r);return o}function o(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function a(e){i(e)}function i(e){for(var t=d.getFirstReactDOM(v(e.nativeEvent))||window,n=t;n;)e.ancestors.push(n),n=r(n);for(var o=0;o<e.ancestors.length;o++){t=e.ancestors[o];var a=d.getID(t)||"";g._handleTopLevel(e.topLevelType,t,a,e.nativeEvent,v(e.nativeEvent))}}function u(e){var t=m(window);e(t)}var s=e(127),l=e(128),c=e(24),p=e(59),d=e(63),f=e(81),h=e(23),v=e(112),m=e(139);h(o.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),c.addPoolingTo(o,c.twoArgumentPooler);var g={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:l.canUseDOM?window:null,setHandleTopLevel:function(e){g._handleTopLevel=e},setEnabled:function(e){g._enabled=!!e},isEnabled:function(){return g._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?s.listen(r,t,g.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?s.capture(r,t,g.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=u.bind(null,e);s.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(g._enabled){var n=o.getPooled(e,t);try{f.batchedUpdates(a,n)}finally{o.release(n)}}}};t.exports=g},{112:112,127:127,128:128,139:139,23:23,24:24,59:59,63:63,81:81}],57:[function(e,t,n){"use strict";var r=e(10),o=e(16),a=e(32),i=e(29),u=e(52),s=e(26),l=e(66),c=e(69),p=e(76),d=e(81),f={Component:a.injection,Class:i.injection,DOMProperty:r.injection,EmptyComponent:u.injection,EventPluginHub:o.injection,EventEmitter:s.injection,NativeComponent:l.injection,Perf:c.injection,RootIndex:p.injection,Updates:d.injection};t.exports=f},{10:10,16:16,26:26,29:29,32:32,52:52,66:66,69:69,76:76,81:81}],58:[function(e,t,n){"use strict";function r(e){return a(document.documentElement,e)}var o=e(44),a=e(131),i=e(136),u=e(137),s={hasSelectionCapabilities:function(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)},getSelectionInformation:function(){var e=u();return{focusedElem:e,selectionRange:s.hasSelectionCapabilities(e)?s.getSelection(e):null}},restoreSelection:function(e){var t=u(),n=e.focusedElem,o=e.selectionRange;t!==n&&r(n)&&(s.hasSelectionCapabilities(n)&&s.setSelection(n,o),i(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end;if("undefined"==typeof r&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){var a=e.createTextRange();a.collapse(!0),a.moveStart("character",n),a.moveEnd("character",r-n),a.select()}else o.setOffsets(e,t)}};t.exports=s},{131:131,136:136,137:137,44:44}],59:[function(e,t,n){"use strict";function r(e){return f+e.toString(36)}function o(e,t){return e.charAt(t)===f||t===e.length}function a(e){return""===e||e.charAt(0)===f&&e.charAt(e.length-1)!==f}function i(e,t){return 0===t.indexOf(e)&&o(t,e.length)}function u(e){return e?e.substr(0,e.lastIndexOf(f)):""}function s(e,t){if(a(e)&&a(t)?void 0:d(!1),i(e,t)?void 0:d(!1),e===t)return e;var n,r=e.length+h;for(n=r;n<t.length&&!o(t,n);n++);return t.substr(0,n)}function l(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var r=0,i=0;n>=i;i++)if(o(e,i)&&o(t,i))r=i;else if(e.charAt(i)!==t.charAt(i))break;var u=e.substr(0,r);return a(u)?void 0:d(!1),u}function c(e,t,n,r,o,a){e=e||"",t=t||"",e===t?d(!1):void 0;var l=i(t,e);l||i(e,t)?void 0:d(!1);for(var c=0,p=l?u:s,f=e;;f=p(f,t)){var h;if(o&&f===e||a&&f===t||(h=n(f,l,r)),h===!1||f===t)break;c++<v?void 0:d(!1)}}var p=e(76),d=e(142),f=".",h=f.length,v=1e4,m={createReactRootID:function(){return r(p.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===f&&e.length>1){var t=e.indexOf(f,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var a=l(e,t);a!==e&&c(e,a,n,r,!1,!0),a!==t&&c(a,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(c("",e,t,n,!0,!1),c(e,"",t,n,!1,!0))},traverseTwoPhaseSkipTarget:function(e,t,n){e&&(c("",e,t,n,!0,!0),c(e,"",t,n,!0,!0))},traverseAncestors:function(e,t,n){c("",e,t,n,!0,!1)},getFirstCommonAncestorID:l,_getNextDescendantID:s,isAncestorIDOf:i,SEPARATOR:f};t.exports=m},{142:142,76:76}],60:[function(e,t,n){"use strict";var r={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=r},{}],61:[function(e,t,n){"use strict";var r=e(28),o=e(30),a=e(29),i=e(38),u=e(50),s=(e(51),e(72)),l=e(82),c=e(23),p=e(119),d=u.createElement,f=u.createFactory,h=u.cloneElement,v={Children:{map:r.map,forEach:r.forEach,count:r.count,toArray:r.toArray,only:p},Component:o,createElement:d,cloneElement:h,isValidElement:u.isValidElement,PropTypes:s,createClass:a.createClass,createFactory:f,createMixin:function(e){return e},DOM:i,version:l,__spread:c};t.exports=v},{119:119,23:23,28:28,29:29,30:30,38:38,50:50,51:51,72:72,82:82}],62:[function(e,t,n){"use strict";var r=e(101),o=/\/?>/,a={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=r(e);return e.replace(o," "+a.CHECKSUM_ATTR_NAME+'="'+t+'"$&')},canReuseMarkup:function(e,t){var n=t.getAttribute(a.CHECKSUM_ATTR_NAME);n=n&&parseInt(n,10);var o=r(e);return o===n}};t.exports=a},{101:101}],63:[function(e,t,n){"use strict";function r(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function o(e){return e?e.nodeType===W?e.documentElement:e.firstChild:null}function a(e){var t=o(e);return t&&Q.getID(t)}function i(e){var t=u(e);if(t)if(V.hasOwnProperty(t)){var n=V[t];n!==e&&(p(n,t)?L(!1):void 0,V[t]=e)}else V[t]=e;return t}function u(e){return e&&e.getAttribute&&e.getAttribute(B)||""}function s(e,t){var n=u(e);n!==t&&delete V[n],e.setAttribute(B,t),V[t]=e}function l(e){return V.hasOwnProperty(e)&&p(V[e],e)||(V[e]=Q.findReactNodeByID(e)),V[e]}function c(e){var t=N.get(e)._rootNodeID;return D.isNullComponentID(t)?null:(V.hasOwnProperty(t)&&p(V[t],t)||(V[t]=Q.findReactNodeByID(t)),V[t])}function p(e,t){if(e){u(e)!==t?L(!1):void 0;var n=Q.findReactContainerForID(t);if(n&&O(n,e))return!0}return!1}function d(e){delete V[e]}function f(e){var t=V[e];return t&&p(t,e)?void(G=t):!1}function h(e){G=null,M.traverseAncestors(e,f);var t=G;return G=null,t}function v(e,t,n,r,o,a){E.useCreateElement&&(a=T({},a),n.nodeType===W?a[H]=n:a[H]=n.ownerDocument);var i=R.mountComponent(e,t,r,a);e._renderedComponent._topLevelWrapper=e,Q._mountImageIntoNode(i,n,o,r)}function m(e,t,n,r,o){var a=S.ReactReconcileTransaction.getPooled(r);a.perform(v,null,e,t,n,a,r,o),S.ReactReconcileTransaction.release(a)}function g(e,t){for(R.unmountComponent(e),t.nodeType===W&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)}function y(e){var t=a(e);return t?t!==M.getReactRootIDFromNodeID(t):!1}function C(e){for(;e&&e.parentNode!==e;e=e.parentNode)if(1===e.nodeType){var t=u(e);if(t){var n,r=M.getReactRootIDFromNodeID(t),o=e;do if(n=u(o),o=o.parentNode,null==o)return null;while(n!==r);if(o===Y[r])return e}}return null}var b=e(10),_=e(26),E=(e(34),e(39)),x=e(50),D=e(53),M=e(59),N=e(60),P=e(62),w=e(69),R=e(74),I=e(80),S=e(81),T=e(23),k=e(135),O=e(131),A=e(116),L=e(142),U=e(122),F=e(124),B=(e(126),e(151),b.ID_ATTRIBUTE_NAME),V={},j=1,W=9,K=11,H="__ReactMount_ownerDocument$"+Math.random().toString(36).slice(2),q={},Y={},z=[],G=null,X=function(){};X.prototype.isReactComponent={},X.prototype.render=function(){return this.props};var Q={TopLevelWrapper:X,_instancesByReactRootID:q,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){return Q.scrollMonitor(n,function(){I.enqueueElementInternal(e,t),r&&I.enqueueCallbackInternal(e,r)}),e},_registerComponent:function(e,t){!t||t.nodeType!==j&&t.nodeType!==W&&t.nodeType!==K?L(!1):void 0,_.ensureScrollValueMonitoring();var n=Q.registerContainer(t);return q[n]=e,n},_renderNewRootComponent:function(e,t,n,r){var o=A(e,null),a=Q._registerComponent(o,t);return S.batchedUpdates(m,o,a,t,n,r),o},renderSubtreeIntoContainer:function(e,t,n,r){return null==e||null==e._reactInternalInstance?L(!1):void 0,Q._renderSubtreeIntoContainer(e,t,n,r)},_renderSubtreeIntoContainer:function(e,t,n,r){x.isValidElement(t)?void 0:L(!1);var i=new x(X,null,null,null,null,null,t),s=q[a(n)];if(s){var l=s._currentElement,c=l.props;if(F(c,t)){var p=s._renderedComponent.getPublicInstance(),d=r&&function(){r.call(p)};return Q._updateRootComponent(s,i,n,d),p}Q.unmountComponentAtNode(n)}var f=o(n),h=f&&!!u(f),v=y(n),m=h&&!s&&!v,g=Q._renderNewRootComponent(i,n,m,null!=e?e._reactInternalInstance._processChildContext(e._reactInternalInstance._context):k)._renderedComponent.getPublicInstance();return r&&r.call(g),g},render:function(e,t,n){return Q._renderSubtreeIntoContainer(null,e,t,n)},registerContainer:function(e){var t=a(e);return t&&(t=M.getReactRootIDFromNodeID(t)),t||(t=M.createReactRootID()),Y[t]=e,t},unmountComponentAtNode:function(e){!e||e.nodeType!==j&&e.nodeType!==W&&e.nodeType!==K?L(!1):void 0;var t=a(e),n=q[t];if(!n){var r=(y(e),u(e));return r&&r===M.getReactRootIDFromNodeID(r),!1}return S.batchedUpdates(g,n,e),delete q[t],delete Y[t],!0},findReactContainerForID:function(e){var t=M.getReactRootIDFromNodeID(e),n=Y[t];return n},findReactNodeByID:function(e){var t=Q.findReactContainerForID(e);return Q.findComponentRoot(t,e)},getFirstReactDOM:function(e){return C(e)},findComponentRoot:function(e,t){var n=z,r=0,o=h(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var a,i=n[r++];i;){var u=Q.getID(i);u?t===u?a=i:M.isAncestorIDOf(u,t)&&(n.length=r=0,n.push(i.firstChild)):n.push(i.firstChild),i=i.nextSibling}if(a)return n.length=0,a}n.length=0,L(!1)},_mountImageIntoNode:function(e,t,n,a){if(!t||t.nodeType!==j&&t.nodeType!==W&&t.nodeType!==K?L(!1):void 0,n){var i=o(t);if(P.canReuseMarkup(e,i))return;var u=i.getAttribute(P.CHECKSUM_ATTR_NAME);i.removeAttribute(P.CHECKSUM_ATTR_NAME);var s=i.outerHTML;i.setAttribute(P.CHECKSUM_ATTR_NAME,u);var l=e,c=r(l,s);" (client) "+l.substring(c-20,c+20)+"\n (server) "+s.substring(c-20,c+20),t.nodeType===W?L(!1):void 0}if(t.nodeType===W?L(!1):void 0,a.useCreateElement){for(;t.lastChild;)t.removeChild(t.lastChild);t.appendChild(e)}else U(t,e)},ownerDocumentContextKey:H,getReactRootID:a,getID:i,setID:s,getNode:l,getNodeFromInstance:c,isValid:p,purgeID:d};w.measureMethods(Q,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),t.exports=Q},{10:10,116:116,122:122,124:124,126:126,131:131,135:135,142:142,151:151,23:23,26:26,34:34,39:39,50:50,53:53,59:59,60:60,62:62,69:69,74:74,80:80,81:81}],64:[function(e,t,n){"use strict";function r(e,t,n){m.push({parentID:e,parentNode:null,type:p.INSERT_MARKUP,markupIndex:g.push(t)-1,content:null,fromIndex:null,toIndex:n})}function o(e,t,n){m.push({parentID:e,parentNode:null,type:p.MOVE_EXISTING,markupIndex:null,content:null,fromIndex:t,toIndex:n})}function a(e,t){m.push({parentID:e,parentNode:null,type:p.REMOVE_NODE,markupIndex:null,content:null,fromIndex:t,toIndex:null})}function i(e,t){m.push({parentID:e,parentNode:null,type:p.SET_MARKUP,markupIndex:null,content:t,fromIndex:null,toIndex:null})}function u(e,t){m.push({parentID:e,parentNode:null,type:p.TEXT_CONTENT,markupIndex:null,content:t,fromIndex:null,toIndex:null})}function s(){m.length&&(c.processChildrenUpdates(m,g),l())}function l(){m.length=0,g.length=0}var c=e(32),p=e(65),d=(e(34),e(74)),f=e(27),h=e(107),v=0,m=[],g=[],y={Mixin:{_reconcilerInstantiateChildren:function(e,t,n){return f.instantiateChildren(e,t,n)},_reconcilerUpdateChildren:function(e,t,n,r){var o;return o=h(t),f.updateChildren(e,o,n,r)},mountChildren:function(e,t,n){var r=this._reconcilerInstantiateChildren(e,t,n);this._renderedChildren=r;var o=[],a=0;for(var i in r)if(r.hasOwnProperty(i)){var u=r[i],s=this._rootNodeID+i,l=d.mountComponent(u,s,t,n);u._mountIndex=a++,o.push(l)}return o},updateTextContent:function(e){v++;var t=!0;try{var n=this._renderedChildren;f.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChild(n[r]);this.setTextContent(e),t=!1}finally{v--,v||(t?l():s())}},updateMarkup:function(e){v++;var t=!0;try{var n=this._renderedChildren;f.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setMarkup(e),t=!1}finally{v--,v||(t?l():s())}},updateChildren:function(e,t,n){v++;var r=!0;try{this._updateChildren(e,t,n),r=!1}finally{v--,v||(r?l():s())}},_updateChildren:function(e,t,n){var r=this._renderedChildren,o=this._reconcilerUpdateChildren(r,e,t,n);if(this._renderedChildren=o,o||r){var a,i=0,u=0;for(a in o)if(o.hasOwnProperty(a)){var s=r&&r[a],l=o[a];s===l?(this.moveChild(s,u,i),i=Math.max(s._mountIndex,i),s._mountIndex=u):(s&&(i=Math.max(s._mountIndex,i),this._unmountChild(s)),this._mountChildByNameAtIndex(l,a,u,t,n)),u++}for(a in r)!r.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||this._unmountChild(r[a])}},unmountChildren:function(){var e=this._renderedChildren;f.unmountChildren(e),this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&o(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){r(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){a(this._rootNodeID,e._mountIndex)},setTextContent:function(e){u(this._rootNodeID,e)},setMarkup:function(e){i(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r,o){var a=this._rootNodeID+t,i=d.mountComponent(e,a,r,o);e._mountIndex=n,this.createChild(e,i)},_unmountChild:function(e){this.removeChild(e),e._mountIndex=null}}};t.exports=y},{107:107,27:27,32:32,34:34,65:65,74:74}],65:[function(e,t,n){"use strict";var r=e(145),o=r({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,SET_MARKUP:null,TEXT_CONTENT:null});t.exports=o},{145:145}],66:[function(e,t,n){"use strict";function r(e){if("function"==typeof e.type)return e.type;var t=e.type,n=p[t];return null==n&&(p[t]=n=l(t)),n}function o(e){return c?void 0:s(!1),new c(e.type,e.props)}function a(e){return new d(e)}function i(e){return e instanceof d}var u=e(23),s=e(142),l=null,c=null,p={},d=null,f={injectGenericComponentClass:function(e){c=e},injectTextComponentClass:function(e){d=e},injectComponentClasses:function(e){u(p,e)}},h={getComponentClassForElement:r,createInternalComponent:o,createInstanceForText:a,isTextComponent:i,injection:f};t.exports=h},{142:142,23:23}],67:[function(e,t,n){"use strict";function r(e,t){}var o=(e(151),{isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){r(e,"forceUpdate")},enqueueReplaceState:function(e,t){r(e,"replaceState")},enqueueSetState:function(e,t){r(e,"setState")},enqueueSetProps:function(e,t){r(e,"setProps")},enqueueReplaceProps:function(e,t){r(e,"replaceProps")}});t.exports=o},{151:151}],68:[function(e,t,n){"use strict";var r=e(142),o={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){o.isValidOwner(n)?void 0:r(!1),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){o.isValidOwner(n)?void 0:r(!1),n.getPublicInstance().refs[t]===e.getPublicInstance()&&n.detachRef(t)}};t.exports=o},{142:142}],69:[function(e,t,n){"use strict";function r(e,t,n){return n}var o={enableMeasure:!1,storedMeasure:r,measureMethods:function(e,t,n){},measure:function(e,t,n){return n},injection:{injectMeasure:function(e){o.storedMeasure=e}}};t.exports=o},{}],70:[function(e,t,n){"use strict";var r={};t.exports=r},{}],71:[function(e,t,n){"use strict";var r=e(145),o=r({prop:null,context:null,childContext:null});t.exports=o},{145:145}],72:[function(e,t,n){"use strict";function r(e){function t(t,n,r,o,a,i){if(o=o||E,i=i||r,null==n[r]){var u=C[a];return t?new Error("Required "+u+" `"+i+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,a,i)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o,a){var i=t[n],u=v(i);if(u!==e){var s=C[o],l=m(i);return new Error("Invalid "+s+" `"+a+"` of type "+("`"+l+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return r(t)}function a(){return r(b.thatReturns(null))}function i(e){function t(t,n,r,o,a){var i=t[n];if(!Array.isArray(i)){var u=C[o],s=v(i);return new Error("Invalid "+u+" `"+a+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an array."))}for(var l=0;l<i.length;l++){var c=e(i,l,r,o,a+"["+l+"]");if(c instanceof Error)return c}return null}return r(t)}function u(){function e(e,t,n,r,o){if(!y.isValidElement(e[t])){var a=C[r];return new Error("Invalid "+a+" `"+o+"` supplied to "+("`"+n+"`, expected a single ReactElement."))}return null}return r(e)}function s(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=C[o],u=e.name||E,s=g(t[n]);return new Error("Invalid "+i+" `"+a+"` of type "+("`"+s+"` supplied to `"+r+"`, expected ")+("instance of `"+u+"`."))}return null}return r(t)}function l(e){function t(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(i===e[u])return null;var s=C[o],l=JSON.stringify(e);return new Error("Invalid "+s+" `"+a+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+l+"."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOf, expected an instance of array.")})}function c(e){function t(t,n,r,o,a){var i=t[n],u=v(i);if("object"!==u){var s=C[o];return new Error("Invalid "+s+" `"+a+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an object."))}for(var l in i)if(i.hasOwnProperty(l)){var c=e(i,l,r,o,a+"."+l);if(c instanceof Error)return c}return null}return r(t)}function p(e){function t(t,n,r,o,a){for(var i=0;i<e.length;i++){var u=e[i];if(null==u(t,n,r,o,a))return null}var s=C[o];return new Error("Invalid "+s+" `"+a+"` supplied to "+("`"+r+"`."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")})}function d(){function e(e,t,n,r,o){if(!h(e[t])){var a=C[r];return new Error("Invalid "+a+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function f(e){function t(t,n,r,o,a){var i=t[n],u=v(i);if("object"!==u){var s=C[o];return new Error("Invalid "+s+" `"+a+"` of type `"+u+"` "+("supplied to `"+r+"`, expected `object`."))}for(var l in e){var c=e[l];if(c){var p=c(i,l,r,o,a+"."+l);if(p)return p}}return null}return r(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||y.isValidElement(e))return!0;var t=_(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!h(n.value))return!1}else for(;!(n=r.next()).done;){var o=n.value;if(o&&!h(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function m(e){var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function g(e){return e.constructor&&e.constructor.name?e.constructor.name:"<<anonymous>>"}var y=e(50),C=e(70),b=e(134),_=e(113),E="<<anonymous>>",x={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:a(),arrayOf:i,element:u(),instanceOf:s,node:d(),objectOf:c,oneOf:l,oneOfType:p,shape:f};t.exports=x},{113:113,134:134,50:50,70:70}],73:[function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=o.getPooled(null),this.useCreateElement=!e&&u.useCreateElement}var o=e(6),a=e(24),i=e(26),u=e(39),s=e(58),l=e(98),c=e(23),p={initialize:s.getSelectionInformation,close:s.restoreSelection},d={initialize:function(){var e=i.isEnabled();return i.setEnabled(!1),e},close:function(e){i.setEnabled(e)}},f={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},h=[p,d,f],v={getTransactionWrappers:function(){return h},getReactMountReady:function(){return this.reactMountReady},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null}};c(r.prototype,l.Mixin,v),a.addPoolingTo(r),t.exports=r},{23:23,24:24,26:26,39:39,58:58,6:6,98:98}],74:[function(e,t,n){"use strict";function r(){o.attachRefs(this,this._currentElement)}var o=e(75),a={mountComponent:function(e,t,n,o){var a=e.mountComponent(t,n,o);return e._currentElement&&null!=e._currentElement.ref&&n.getReactMountReady().enqueue(r,e),a},unmountComponent:function(e){o.detachRefs(e,e._currentElement),e.unmountComponent()},receiveComponent:function(e,t,n,a){var i=e._currentElement;if(t!==i||a!==e._context){var u=o.shouldUpdateRefs(i,t);u&&o.detachRefs(e,i),e.receiveComponent(t,n,a),u&&e._currentElement&&null!=e._currentElement.ref&&n.getReactMountReady().enqueue(r,e);
}},performUpdateIfNecessary:function(e,t){e.performUpdateIfNecessary(t)}};t.exports=a},{75:75}],75:[function(e,t,n){"use strict";function r(e,t,n){"function"==typeof e?e(t.getPublicInstance()):a.addComponentAsRefTo(t,e,n)}function o(e,t,n){"function"==typeof e?e(null):a.removeComponentAsRefFrom(t,e,n)}var a=e(68),i={};i.attachRefs=function(e,t){if(null!==t&&t!==!1){var n=t.ref;null!=n&&r(n,e,t._owner)}},i.shouldUpdateRefs=function(e,t){var n=null===e||e===!1,r=null===t||t===!1;return n||r||t._owner!==e._owner||t.ref!==e.ref},i.detachRefs=function(e,t){if(null!==t&&t!==!1){var n=t.ref;null!=n&&o(n,e,t._owner)}},t.exports=i},{68:68}],76:[function(e,t,n){"use strict";var r={injectCreateReactRootIndex:function(e){o.createReactRootIndex=e}},o={createReactRootIndex:null,injection:r};t.exports=o},{}],77:[function(e,t,n){"use strict";var r={isBatchingUpdates:!1,batchedUpdates:function(e){}};t.exports=r},{}],78:[function(e,t,n){"use strict";function r(e){i.isValidElement(e)?void 0:h(!1);var t;try{p.injection.injectBatchingStrategy(l);var n=u.createReactRootID();return t=c.getPooled(!1),t.perform(function(){var r=f(e,null),o=r.mountComponent(n,t,d);return s.addChecksumToMarkup(o)},null)}finally{c.release(t),p.injection.injectBatchingStrategy(a)}}function o(e){i.isValidElement(e)?void 0:h(!1);var t;try{p.injection.injectBatchingStrategy(l);var n=u.createReactRootID();return t=c.getPooled(!0),t.perform(function(){var r=f(e,null);return r.mountComponent(n,t,d)},null)}finally{c.release(t),p.injection.injectBatchingStrategy(a)}}var a=e(48),i=e(50),u=e(59),s=e(62),l=e(77),c=e(79),p=e(81),d=e(135),f=e(116),h=e(142);t.exports={renderToString:r,renderToStaticMarkup:o}},{116:116,135:135,142:142,48:48,50:50,59:59,62:62,77:77,79:79,81:81}],79:[function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=a.getPooled(null),this.useCreateElement=!1}var o=e(24),a=e(6),i=e(98),u=e(23),s=e(134),l={initialize:function(){this.reactMountReady.reset()},close:s},c=[l],p={getTransactionWrappers:function(){return c},getReactMountReady:function(){return this.reactMountReady},destructor:function(){a.release(this.reactMountReady),this.reactMountReady=null}};u(r.prototype,i.Mixin,p),o.addPoolingTo(r),t.exports=r},{134:134,23:23,24:24,6:6,98:98}],80:[function(e,t,n){"use strict";function r(e){u.enqueueUpdate(e)}function o(e,t){var n=i.get(e);return n?n:null}var a=(e(34),e(50)),i=e(60),u=e(81),s=e(23),l=e(142),c=(e(151),{isMounted:function(e){var t=i.get(e);return t?!!t._renderedComponent:!1},enqueueCallback:function(e,t){"function"!=typeof t?l(!1):void 0;var n=o(e);return n?(n._pendingCallbacks?n._pendingCallbacks.push(t):n._pendingCallbacks=[t],void r(n)):null},enqueueCallbackInternal:function(e,t){"function"!=typeof t?l(!1):void 0,e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],r(e)},enqueueForceUpdate:function(e){var t=o(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,r(t))},enqueueReplaceState:function(e,t){var n=o(e,"replaceState");n&&(n._pendingStateQueue=[t],n._pendingReplaceState=!0,r(n))},enqueueSetState:function(e,t){var n=o(e,"setState");if(n){var a=n._pendingStateQueue||(n._pendingStateQueue=[]);a.push(t),r(n)}},enqueueSetProps:function(e,t){var n=o(e,"setProps");n&&c.enqueueSetPropsInternal(n,t)},enqueueSetPropsInternal:function(e,t){var n=e._topLevelWrapper;n?void 0:l(!1);var o=n._pendingElement||n._currentElement,i=o.props,u=s({},i.props,t);n._pendingElement=a.cloneAndReplaceProps(o,a.cloneAndReplaceProps(i,u)),r(n)},enqueueReplaceProps:function(e,t){var n=o(e,"replaceProps");n&&c.enqueueReplacePropsInternal(n,t)},enqueueReplacePropsInternal:function(e,t){var n=e._topLevelWrapper;n?void 0:l(!1);var o=n._pendingElement||n._currentElement,i=o.props;n._pendingElement=a.cloneAndReplaceProps(o,a.cloneAndReplaceProps(i,t)),r(n)},enqueueElementInternal:function(e,t){e._pendingElement=t,r(e)}});t.exports=c},{142:142,151:151,23:23,34:34,50:50,60:60,81:81}],81:[function(e,t,n){"use strict";function r(){N.ReactReconcileTransaction&&b?void 0:m(!1)}function o(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=c.getPooled(),this.reconcileTransaction=N.ReactReconcileTransaction.getPooled(!1)}function a(e,t,n,o,a,i){r(),b.batchedUpdates(e,t,n,o,a,i)}function i(e,t){return e._mountOrder-t._mountOrder}function u(e){var t=e.dirtyComponentsLength;t!==g.length?m(!1):void 0,g.sort(i);for(var n=0;t>n;n++){var r=g[n],o=r._pendingCallbacks;if(r._pendingCallbacks=null,f.performUpdateIfNecessary(r,e.reconcileTransaction),o)for(var a=0;a<o.length;a++)e.callbackQueue.enqueue(o[a],r.getPublicInstance())}}function s(e){return r(),b.isBatchingUpdates?void g.push(e):void b.batchedUpdates(s,e)}function l(e,t){b.isBatchingUpdates?void 0:m(!1),y.enqueue(e,t),C=!0}var c=e(6),p=e(24),d=e(69),f=e(74),h=e(98),v=e(23),m=e(142),g=[],y=c.getPooled(),C=!1,b=null,_={initialize:function(){this.dirtyComponentsLength=g.length},close:function(){this.dirtyComponentsLength!==g.length?(g.splice(0,this.dirtyComponentsLength),D()):g.length=0}},E={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},x=[_,E];v(o.prototype,h.Mixin,{getTransactionWrappers:function(){return x},destructor:function(){this.dirtyComponentsLength=null,c.release(this.callbackQueue),this.callbackQueue=null,N.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return h.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),p.addPoolingTo(o);var D=function(){for(;g.length||C;){if(g.length){var e=o.getPooled();e.perform(u,null,e),o.release(e)}if(C){C=!1;var t=y;y=c.getPooled(),t.notifyAll(),c.release(t)}}};D=d.measure("ReactUpdates","flushBatchedUpdates",D);var M={injectReconcileTransaction:function(e){e?void 0:m(!1),N.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){e?void 0:m(!1),"function"!=typeof e.batchedUpdates?m(!1):void 0,"boolean"!=typeof e.isBatchingUpdates?m(!1):void 0,b=e}},N={ReactReconcileTransaction:null,batchedUpdates:a,enqueueUpdate:s,flushBatchedUpdates:D,injection:M,asap:l};t.exports=N},{142:142,23:23,24:24,6:6,69:69,74:74,98:98}],82:[function(e,t,n){"use strict";t.exports="0.14.3"},{}],83:[function(e,t,n){"use strict";var r=e(10),o=r.injection.MUST_USE_ATTRIBUTE,a={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},i={Properties:{clipPath:o,cx:o,cy:o,d:o,dx:o,dy:o,fill:o,fillOpacity:o,fontFamily:o,fontSize:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,markerEnd:o,markerMid:o,markerStart:o,offset:o,opacity:o,patternContentUnits:o,patternUnits:o,points:o,preserveAspectRatio:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeDasharray:o,strokeLinecap:o,strokeOpacity:o,strokeWidth:o,textAnchor:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,xlinkActuate:o,xlinkArcrole:o,xlinkHref:o,xlinkRole:o,xlinkShow:o,xlinkTitle:o,xlinkType:o,xmlBase:o,xmlLang:o,xmlSpace:o,y1:o,y2:o,y:o},DOMAttributeNamespaces:{xlinkActuate:a.xlink,xlinkArcrole:a.xlink,xlinkHref:a.xlink,xlinkRole:a.xlink,xlinkShow:a.xlink,xlinkTitle:a.xlink,xlinkType:a.xlink,xmlBase:a.xml,xmlLang:a.xml,xmlSpace:a.xml},DOMAttributeNames:{clipPath:"clip-path",fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlLang:"xml:lang",xmlSpace:"xml:space"}};t.exports=i},{10:10}],84:[function(e,t,n){"use strict";function r(e){if("selectionStart"in e&&s.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function o(e,t){if(b||null==g||g!==c())return null;var n=r(g);if(!C||!f(C,n)){C=n;var o=l.getPooled(m.select,y,e,t);return o.type="select",o.target=g,i.accumulateTwoPhaseDispatches(o),o}return null}var a=e(15),i=e(19),u=e(128),s=e(58),l=e(90),c=e(137),p=e(118),d=e(146),f=e(149),h=a.topLevelTypes,v=u.canUseDOM&&"documentMode"in document&&document.documentMode<=11,m={select:{phasedRegistrationNames:{bubbled:d({onSelect:null}),captured:d({onSelectCapture:null})},dependencies:[h.topBlur,h.topContextMenu,h.topFocus,h.topKeyDown,h.topMouseDown,h.topMouseUp,h.topSelectionChange]}},g=null,y=null,C=null,b=!1,_=!1,E=d({onSelect:null}),x={eventTypes:m,extractEvents:function(e,t,n,r,a){if(!_)return null;switch(e){case h.topFocus:(p(t)||"true"===t.contentEditable)&&(g=t,y=n,C=null);break;case h.topBlur:g=null,y=null,C=null;break;case h.topMouseDown:b=!0;break;case h.topContextMenu:case h.topMouseUp:return b=!1,o(r,a);case h.topSelectionChange:if(v)break;case h.topKeyDown:case h.topKeyUp:return o(r,a)}return null},didPutListener:function(e,t,n){t===E&&(_=!0)}};t.exports=x},{118:118,128:128,137:137,146:146,149:149,15:15,19:19,58:58,90:90}],85:[function(e,t,n){"use strict";var r=Math.pow(2,53),o={createReactRootIndex:function(){return Math.ceil(Math.random()*r)}};t.exports=o},{}],86:[function(e,t,n){"use strict";var r=e(15),o=e(127),a=e(19),i=e(63),u=e(87),s=e(90),l=e(91),c=e(93),p=e(94),d=e(89),f=e(95),h=e(96),v=e(97),m=e(134),g=e(109),y=e(142),C=e(146),b=r.topLevelTypes,_={abort:{phasedRegistrationNames:{bubbled:C({onAbort:!0}),captured:C({onAbortCapture:!0})}},blur:{phasedRegistrationNames:{bubbled:C({onBlur:!0}),captured:C({onBlurCapture:!0})}},canPlay:{phasedRegistrationNames:{bubbled:C({onCanPlay:!0}),captured:C({onCanPlayCapture:!0})}},canPlayThrough:{phasedRegistrationNames:{bubbled:C({onCanPlayThrough:!0}),captured:C({onCanPlayThroughCapture:!0})}},click:{phasedRegistrationNames:{bubbled:C({onClick:!0}),captured:C({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:C({onContextMenu:!0}),captured:C({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:C({onCopy:!0}),captured:C({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:C({onCut:!0}),captured:C({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:C({onDoubleClick:!0}),captured:C({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:C({onDrag:!0}),captured:C({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:C({onDragEnd:!0}),captured:C({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:C({onDragEnter:!0}),captured:C({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:C({onDragExit:!0}),captured:C({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:C({onDragLeave:!0}),captured:C({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:C({onDragOver:!0}),captured:C({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:C({onDragStart:!0}),captured:C({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:C({onDrop:!0}),captured:C({onDropCapture:!0})}},durationChange:{phasedRegistrationNames:{bubbled:C({onDurationChange:!0}),captured:C({onDurationChangeCapture:!0})}},emptied:{phasedRegistrationNames:{bubbled:C({onEmptied:!0}),captured:C({onEmptiedCapture:!0})}},encrypted:{phasedRegistrationNames:{bubbled:C({onEncrypted:!0}),captured:C({onEncryptedCapture:!0})}},ended:{phasedRegistrationNames:{bubbled:C({onEnded:!0}),captured:C({onEndedCapture:!0})}},error:{phasedRegistrationNames:{bubbled:C({onError:!0}),captured:C({onErrorCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:C({onFocus:!0}),captured:C({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:C({onInput:!0}),captured:C({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:C({onKeyDown:!0}),captured:C({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:C({onKeyPress:!0}),captured:C({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:C({onKeyUp:!0}),captured:C({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:C({onLoad:!0}),captured:C({onLoadCapture:!0})}},loadedData:{phasedRegistrationNames:{bubbled:C({onLoadedData:!0}),captured:C({onLoadedDataCapture:!0})}},loadedMetadata:{phasedRegistrationNames:{bubbled:C({onLoadedMetadata:!0}),captured:C({onLoadedMetadataCapture:!0})}},loadStart:{phasedRegistrationNames:{bubbled:C({onLoadStart:!0}),captured:C({onLoadStartCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:C({onMouseDown:!0}),captured:C({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:C({onMouseMove:!0}),captured:C({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:C({onMouseOut:!0}),captured:C({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:C({onMouseOver:!0}),captured:C({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:C({onMouseUp:!0}),captured:C({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:C({onPaste:!0}),captured:C({onPasteCapture:!0})}},pause:{phasedRegistrationNames:{bubbled:C({onPause:!0}),captured:C({onPauseCapture:!0})}},play:{phasedRegistrationNames:{bubbled:C({onPlay:!0}),captured:C({onPlayCapture:!0})}},playing:{phasedRegistrationNames:{bubbled:C({onPlaying:!0}),captured:C({onPlayingCapture:!0})}},progress:{phasedRegistrationNames:{bubbled:C({onProgress:!0}),captured:C({onProgressCapture:!0})}},rateChange:{phasedRegistrationNames:{bubbled:C({onRateChange:!0}),captured:C({onRateChangeCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:C({onReset:!0}),captured:C({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:C({onScroll:!0}),captured:C({onScrollCapture:!0})}},seeked:{phasedRegistrationNames:{bubbled:C({onSeeked:!0}),captured:C({onSeekedCapture:!0})}},seeking:{phasedRegistrationNames:{bubbled:C({onSeeking:!0}),captured:C({onSeekingCapture:!0})}},stalled:{phasedRegistrationNames:{bubbled:C({onStalled:!0}),captured:C({onStalledCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:C({onSubmit:!0}),captured:C({onSubmitCapture:!0})}},suspend:{phasedRegistrationNames:{bubbled:C({onSuspend:!0}),captured:C({onSuspendCapture:!0})}},timeUpdate:{phasedRegistrationNames:{bubbled:C({onTimeUpdate:!0}),captured:C({onTimeUpdateCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:C({onTouchCancel:!0}),captured:C({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:C({onTouchEnd:!0}),captured:C({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:C({onTouchMove:!0}),captured:C({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:C({onTouchStart:!0}),captured:C({onTouchStartCapture:!0})}},volumeChange:{phasedRegistrationNames:{bubbled:C({onVolumeChange:!0}),captured:C({onVolumeChangeCapture:!0})}},waiting:{phasedRegistrationNames:{bubbled:C({onWaiting:!0}),captured:C({onWaitingCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:C({onWheel:!0}),captured:C({onWheelCapture:!0})}}},E={topAbort:_.abort,topBlur:_.blur,topCanPlay:_.canPlay,topCanPlayThrough:_.canPlayThrough,topClick:_.click,topContextMenu:_.contextMenu,topCopy:_.copy,topCut:_.cut,topDoubleClick:_.doubleClick,topDrag:_.drag,topDragEnd:_.dragEnd,topDragEnter:_.dragEnter,topDragExit:_.dragExit,topDragLeave:_.dragLeave,topDragOver:_.dragOver,topDragStart:_.dragStart,topDrop:_.drop,topDurationChange:_.durationChange,topEmptied:_.emptied,topEncrypted:_.encrypted,topEnded:_.ended,topError:_.error,topFocus:_.focus,topInput:_.input,topKeyDown:_.keyDown,topKeyPress:_.keyPress,topKeyUp:_.keyUp,topLoad:_.load,topLoadedData:_.loadedData,topLoadedMetadata:_.loadedMetadata,topLoadStart:_.loadStart,topMouseDown:_.mouseDown,topMouseMove:_.mouseMove,topMouseOut:_.mouseOut,topMouseOver:_.mouseOver,topMouseUp:_.mouseUp,topPaste:_.paste,topPause:_.pause,topPlay:_.play,topPlaying:_.playing,topProgress:_.progress,topRateChange:_.rateChange,topReset:_.reset,topScroll:_.scroll,topSeeked:_.seeked,topSeeking:_.seeking,topStalled:_.stalled,topSubmit:_.submit,topSuspend:_.suspend,topTimeUpdate:_.timeUpdate,topTouchCancel:_.touchCancel,topTouchEnd:_.touchEnd,topTouchMove:_.touchMove,topTouchStart:_.touchStart,topVolumeChange:_.volumeChange,topWaiting:_.waiting,topWheel:_.wheel};for(var x in E)E[x].dependencies=[x];var D=C({onClick:null}),M={},N={eventTypes:_,extractEvents:function(e,t,n,r,o){var i=E[e];if(!i)return null;var m;switch(e){case b.topAbort:case b.topCanPlay:case b.topCanPlayThrough:case b.topDurationChange:case b.topEmptied:case b.topEncrypted:case b.topEnded:case b.topError:case b.topInput:case b.topLoad:case b.topLoadedData:case b.topLoadedMetadata:case b.topLoadStart:case b.topPause:case b.topPlay:case b.topPlaying:case b.topProgress:case b.topRateChange:case b.topReset:case b.topSeeked:case b.topSeeking:case b.topStalled:case b.topSubmit:case b.topSuspend:case b.topTimeUpdate:case b.topVolumeChange:case b.topWaiting:m=s;break;case b.topKeyPress:if(0===g(r))return null;case b.topKeyDown:case b.topKeyUp:m=c;break;case b.topBlur:case b.topFocus:m=l;break;case b.topClick:if(2===r.button)return null;case b.topContextMenu:case b.topDoubleClick:case b.topMouseDown:case b.topMouseMove:case b.topMouseOut:case b.topMouseOver:case b.topMouseUp:m=p;break;case b.topDrag:case b.topDragEnd:case b.topDragEnter:case b.topDragExit:case b.topDragLeave:case b.topDragOver:case b.topDragStart:case b.topDrop:m=d;break;case b.topTouchCancel:case b.topTouchEnd:case b.topTouchMove:case b.topTouchStart:m=f;break;case b.topScroll:m=h;break;case b.topWheel:m=v;break;case b.topCopy:case b.topCut:case b.topPaste:m=u}m?void 0:y(!1);var C=m.getPooled(i,n,r,o);return a.accumulateTwoPhaseDispatches(C),C},didPutListener:function(e,t,n){if(t===D){var r=i.getNode(e);M[e]||(M[e]=o.listen(r,"click",m))}},willDeleteListener:function(e,t){t===D&&(M[e].remove(),delete M[e])}};t.exports=N},{109:109,127:127,134:134,142:142,146:146,15:15,19:19,63:63,87:87,89:89,90:90,91:91,93:93,94:94,95:95,96:96,97:97}],87:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(90),a={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};o.augmentClass(r,a),t.exports=r},{90:90}],88:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(90),a={data:null};o.augmentClass(r,a),t.exports=r},{90:90}],89:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(94),a={dataTransfer:null};o.augmentClass(r,a),t.exports=r},{94:94}],90:[function(e,t,n){"use strict";function r(e,t,n,r){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n,this.target=r,this.currentTarget=r;var o=this.constructor.Interface;for(var a in o)if(o.hasOwnProperty(a)){var u=o[a];u?this[a]=u(n):this[a]=n[a]}var s=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;s?this.isDefaultPrevented=i.thatReturnsTrue:this.isDefaultPrevented=i.thatReturnsFalse,this.isPropagationStopped=i.thatReturnsFalse}var o=e(24),a=e(23),i=e(134),u=(e(151),{type:null,currentTarget:i.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null});a(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=i.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=i.thatReturnsTrue)},persist:function(){this.isPersistent=i.thatReturnsTrue},isPersistent:i.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),r.Interface=u,r.augmentClass=function(e,t){var n=this,r=Object.create(n.prototype);a(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=a({},n.Interface,t),e.augmentClass=n.augmentClass,o.addPoolingTo(e,o.fourArgumentPooler)},o.addPoolingTo(r,o.fourArgumentPooler),t.exports=r},{134:134,151:151,23:23,24:24}],91:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(96),a={relatedTarget:null};o.augmentClass(r,a),t.exports=r},{96:96}],92:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(90),a={data:null};o.augmentClass(r,a),t.exports=r},{90:90}],93:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(96),a=e(109),i=e(110),u=e(111),s={key:i,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:u,charCode:function(e){return"keypress"===e.type?a(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?a(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};o.augmentClass(r,s),t.exports=r},{109:109,110:110,111:111,96:96}],94:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(96),a=e(99),i=e(111),u={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:i,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+a.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+a.currentScrollTop}};o.augmentClass(r,u),t.exports=r},{111:111,96:96,99:99}],95:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(96),a=e(111),i={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:a};o.augmentClass(r,i),t.exports=r},{111:111,96:96}],96:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(90),a=e(112),i={view:function(e){if(e.view)return e.view;var t=a(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};o.augmentClass(r,i),t.exports=r},{112:112,90:90}],97:[function(e,t,n){"use strict";function r(e,t,n,r){o.call(this,e,t,n,r)}var o=e(94),a={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};o.augmentClass(r,a),t.exports=r},{94:94}],98:[function(e,t,n){"use strict";var r=e(142),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,n,o,a,i,u,s){this.isInTransaction()?r(!1):void 0;var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,n,o,a,i,u,s),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=a.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===a.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(o){}}}},closeAll:function(e){this.isInTransaction()?void 0:r(!1);for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o,i=t[n],u=this.wrapperInitData[n];try{o=!0,u!==a.OBSERVED_ERROR&&i.close&&i.close.call(this,u),o=!1}finally{if(o)try{this.closeAll(n+1)}catch(s){}}}this.wrapperInitData.length=0}},a={Mixin:o,OBSERVED_ERROR:{}};t.exports=a},{142:142}],99:[function(e,t,n){"use strict";var r={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){r.currentScrollLeft=e.x,r.currentScrollTop=e.y}};t.exports=r},{}],100:[function(e,t,n){"use strict";function r(e,t){if(null==t?o(!1):void 0,null==e)return t;var n=Array.isArray(e),r=Array.isArray(t);return n&&r?(e.push.apply(e,t),e):n?(e.push(t),e):r?[e].concat(t):[e,t]}var o=e(142);t.exports=r},{142:142}],101:[function(e,t,n){"use strict";function r(e){for(var t=1,n=0,r=0,a=e.length,i=-4&a;i>r;){for(;r<Math.min(r+4096,i);r+=4)n+=(t+=e.charCodeAt(r))+(t+=e.charCodeAt(r+1))+(t+=e.charCodeAt(r+2))+(t+=e.charCodeAt(r+3));t%=o,n%=o}for(;a>r;r++)n+=t+=e.charCodeAt(r);return t%=o,n%=o,t|n<<16}var o=65521;t.exports=r},{}],102:[function(e,t,n){"use strict";var r=!1;t.exports=r},{}],103:[function(e,t,n){"use strict";function r(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||a.hasOwnProperty(e)&&a[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var o=e(4),a=o.isUnitlessNumber;t.exports=r},{4:4}],104:[function(e,t,n){"use strict";function r(e,t,n,r,o){return o}e(23),e(151);t.exports=r},{151:151,23:23}],105:[function(e,t,n){"use strict";function r(e){return a[e]}function o(e){return(""+e).replace(i,r)}var a={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},i=/[&><"']/g;t.exports=o},{}],106:[function(e,t,n){"use strict";function r(e){return null==e?null:1===e.nodeType?e:o.has(e)?a.getNodeFromInstance(e):(null!=e.render&&"function"==typeof e.render?i(!1):void 0,void i(!1))}var o=(e(34),e(60)),a=e(63),i=e(142);e(151);t.exports=r},{142:142,151:151,34:34,60:60,63:63}],107:[function(e,t,n){"use strict";function r(e,t,n){var r=e,o=void 0===r[n];o&&null!=t&&(r[n]=t)}function o(e){if(null==e)return e;var t={};return a(e,r,t),t}var a=e(125);e(151);t.exports=o},{125:125,151:151}],108:[function(e,t,n){"use strict";var r=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=r},{}],109:[function(e,t,n){"use strict";function r(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=r},{}],110:[function(e,t,n){"use strict";function r(e){if(e.key){var t=a[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=o(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?i[e.keyCode]||"Unidentified":""}var o=e(109),a={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=r},{109:109}],111:[function(e,t,n){"use strict";function r(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=a[e];return r?!!n[r]:!1}function o(e){return r}var a={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=o},{}],112:[function(e,t,n){"use strict";function r(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=r},{}],113:[function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[a]);return"function"==typeof t?t:void 0}var o="function"==typeof Symbol&&Symbol.iterator,a="@@iterator";t.exports=r},{}],114:[function(e,t,n){"use strict";function r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function a(e,t){for(var n=r(e),a=0,i=0;n;){if(3===n.nodeType){if(i=a+n.textContent.length,t>=a&&i>=t)return{node:n,offset:t-a};a=i}n=r(o(n))}}t.exports=a},{}],115:[function(e,t,n){"use strict";function r(){return!a&&o.canUseDOM&&(a="textContent"in document.documentElement?"textContent":"innerText"),a}var o=e(128),a=null;t.exports=r},{128:128}],116:[function(e,t,n){"use strict";function r(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function o(e){var t;if(null===e||e===!1)t=new i(o);else if("object"==typeof e){var n=e;!n||"function"!=typeof n.type&&"string"!=typeof n.type?l(!1):void 0,t="string"==typeof n.type?u.createInternalComponent(n):r(n.type)?new n.type(n):new c}else"string"==typeof e||"number"==typeof e?t=u.createInstanceForText(e):l(!1);return t.construct(e),t._mountIndex=0,t._mountImage=null,t}var a=e(33),i=e(52),u=e(66),s=e(23),l=e(142),c=(e(151),function(){});s(c.prototype,a.Mixin,{_instantiateReactComponent:o}),t.exports=o},{142:142,151:151,23:23,33:33,52:52,66:66}],117:[function(e,t,n){"use strict";function r(e,t){if(!a.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var i=document.createElement("div");i.setAttribute(n,"return;"),r="function"==typeof i[n]}return!r&&o&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var o,a=e(128);a.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=r},{128:128}],118:[function(e,t,n){"use strict";function r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&o[e.type]||"textarea"===t)}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=r},{}],119:[function(e,t,n){"use strict";function r(e){return o.isValidElement(e)?void 0:a(!1),e}var o=e(50),a=e(142);t.exports=r},{142:142,50:50}],120:[function(e,t,n){"use strict";function r(e){return'"'+o(e)+'"'}var o=e(105);t.exports=r},{105:105}],121:[function(e,t,n){"use strict";var r=e(63);t.exports=r.renderSubtreeIntoContainer},{63:63}],122:[function(e,t,n){"use strict";var r=e(128),o=/^[ \r\n\t\f]/,a=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,i=function(e,t){e.innerHTML=t};if("undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction&&(i=function(e,t){MSApp.execUnsafeLocalFunction(function(){e.innerHTML=t})}),r.canUseDOM){var u=document.createElement("div");u.innerHTML=" ",""===u.innerHTML&&(i=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),o.test(t)||"<"===t[0]&&a.test(t)){e.innerHTML=String.fromCharCode(65279)+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=i},{128:128}],123:[function(e,t,n){"use strict";var r=e(128),o=e(105),a=e(122),i=function(e,t){e.textContent=t};r.canUseDOM&&("textContent"in document.documentElement||(i=function(e,t){a(e,o(t))})),t.exports=i},{105:105,122:122,128:128}],124:[function(e,t,n){"use strict";function r(e,t){var n=null===e||e===!1,r=null===t||t===!1;if(n||r)return n===r;var o=typeof e,a=typeof t;return"string"===o||"number"===o?"string"===a||"number"===a:"object"===a&&e.type===t.type&&e.key===t.key}t.exports=r},{}],125:[function(e,t,n){"use strict";function r(e){return v[e]}function o(e,t){return e&&null!=e.key?i(e.key):t.toString(36)}function a(e){return(""+e).replace(m,r)}function i(e){return"$"+a(e)}function u(e,t,n,r){var a=typeof e;if(("undefined"===a||"boolean"===a)&&(e=null),null===e||"string"===a||"number"===a||l.isValidElement(e))return n(r,e,""===t?f+o(e,0):t),1;var s,c,v=0,m=""===t?f:t+h;if(Array.isArray(e))for(var g=0;g<e.length;g++)s=e[g],
c=m+o(s,g),v+=u(s,c,n,r);else{var y=p(e);if(y){var C,b=y.call(e);if(y!==e.entries)for(var _=0;!(C=b.next()).done;)s=C.value,c=m+o(s,_++),v+=u(s,c,n,r);else for(;!(C=b.next()).done;){var E=C.value;E&&(s=E[1],c=m+i(E[0])+h+o(s,0),v+=u(s,c,n,r))}}else"object"===a&&(String(e),d(!1))}return v}function s(e,t,n){return null==e?0:u(e,"",t,n)}var l=(e(34),e(50)),c=e(59),p=e(113),d=e(142),f=(e(151),c.SEPARATOR),h=":",v={"=":"=0",".":"=1",":":"=2"},m=/[=.:]/g;t.exports=s},{113:113,142:142,151:151,34:34,50:50,59:59}],126:[function(e,t,n){"use strict";var r=(e(23),e(134)),o=(e(151),r);t.exports=o},{134:134,151:151,23:23}],127:[function(e,t,n){"use strict";var r=e(134),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:r}},registerDefault:function(){}};t.exports=o},{134:134}],128:[function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};t.exports=o},{}],129:[function(e,t,n){"use strict";function r(e){return e.replace(o,function(e,t){return t.toUpperCase()})}var o=/-(.)/g;t.exports=r},{}],130:[function(e,t,n){"use strict";function r(e){return o(e.replace(a,"ms-"))}var o=e(129),a=/^-ms-/;t.exports=r},{129:129}],131:[function(e,t,n){"use strict";function r(e,t){var n=!0;e:for(;n;){var r=e,a=t;if(n=!1,r&&a){if(r===a)return!0;if(o(r))return!1;if(o(a)){e=r,t=a.parentNode,n=!0;continue e}return r.contains?r.contains(a):r.compareDocumentPosition?!!(16&r.compareDocumentPosition(a)):!1}return!1}}var o=e(144);t.exports=r},{144:144}],132:[function(e,t,n){"use strict";function r(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function o(e){return r(e)?Array.isArray(e)?e.slice():a(e):[e]}var a=e(150);t.exports=o},{150:150}],133:[function(e,t,n){"use strict";function r(e){var t=e.match(c);return t&&t[1].toLowerCase()}function o(e,t){var n=l;l?void 0:s(!1);var o=r(e),a=o&&u(o);if(a){n.innerHTML=a[1]+e+a[2];for(var c=a[0];c--;)n=n.lastChild}else n.innerHTML=e;var p=n.getElementsByTagName("script");p.length&&(t?void 0:s(!1),i(p).forEach(t));for(var d=i(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return d}var a=e(128),i=e(132),u=e(138),s=e(142),l=a.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;t.exports=o},{128:128,132:132,138:138,142:142}],134:[function(e,t,n){"use strict";function r(e){return function(){return e}}function o(){}o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},t.exports=o},{}],135:[function(e,t,n){"use strict";var r={};t.exports=r},{}],136:[function(e,t,n){"use strict";function r(e){try{e.focus()}catch(t){}}t.exports=r},{}],137:[function(e,t,n){"use strict";function r(){if("undefined"==typeof document)return null;try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=r},{}],138:[function(e,t,n){"use strict";function r(e){return i?void 0:a(!1),d.hasOwnProperty(e)||(e="*"),u.hasOwnProperty(e)||("*"===e?i.innerHTML="<link />":i.innerHTML="<"+e+"></"+e+">",u[e]=!i.firstChild),u[e]?d[e]:null}var o=e(128),a=e(142),i=o.canUseDOM?document.createElement("div"):null,u={},s=[1,'<select multiple="true">',"</select>"],l=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],p=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],d={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:l,colgroup:l,tbody:l,tfoot:l,thead:l,td:c,th:c},f=["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"];f.forEach(function(e){d[e]=p,u[e]=!0}),t.exports=r},{128:128,142:142}],139:[function(e,t,n){"use strict";function r(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=r},{}],140:[function(e,t,n){"use strict";function r(e){return e.replace(o,"-$1").toLowerCase()}var o=/([A-Z])/g;t.exports=r},{}],141:[function(e,t,n){"use strict";function r(e){return o(e).replace(a,"-ms-")}var o=e(140),a=/^ms-/;t.exports=r},{140:140}],142:[function(e,t,n){"use strict";var r=function(e,t,n,r,o,a,i,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,i,u],c=0;s=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw s.framesToPop=1,s}};t.exports=r},{}],143:[function(e,t,n){"use strict";function r(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=r},{}],144:[function(e,t,n){"use strict";function r(e){return o(e)&&3==e.nodeType}var o=e(143);t.exports=r},{143:143}],145:[function(e,t,n){"use strict";var r=e(142),o=function(e){var t,n={};e instanceof Object&&!Array.isArray(e)?void 0:r(!1);for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};t.exports=o},{142:142}],146:[function(e,t,n){"use strict";var r=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=r},{}],147:[function(e,t,n){"use strict";function r(e,t,n){if(!e)return null;var r={};for(var a in e)o.call(e,a)&&(r[a]=t.call(n,e[a],a,e));return r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],148:[function(e,t,n){"use strict";function r(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=r},{}],149:[function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var a=o.bind(t),i=0;i<n.length;i++)if(!a(n[i])||e[n[i]]!==t[n[i]])return!1;return!0}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],150:[function(e,t,n){"use strict";function r(e){var t=e.length;if(Array.isArray(e)||"object"!=typeof e&&"function"!=typeof e?o(!1):void 0,"number"!=typeof t?o(!1):void 0,0===t||t-1 in e?void 0:o(!1),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var r=Array(t),a=0;t>a;a++)r[a]=e[a];return r}var o=e(142);t.exports=r},{142:142}],151:[function(e,t,n){"use strict";var r=e(134),o=r;t.exports=o},{134:134}]},{},[1])(1)});;/**
 * ReactDOM v0.14.3
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e(require("react"));else if("function"==typeof define&&define.amd)define(["react"],e);else{var f;f="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,f.ReactDOM=e(f.React)}}(function(e){return e.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED});;//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Hc.apply(null,arguments)}function b(a){Hc=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Ca(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!(isNaN(a._d.getTime())||!(b.overflow<0)||b.empty||b.invalidMonth||b.invalidWeekday||b.nullInput||b.invalidFormat||b.userInvalidated),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=j(b)),"undefined"!=typeof b._locale&&(a._locale=b._locale),Jc.length>0)for(c in Jc)d=Jc[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function n(b){m(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),Kc===!1&&(Kc=!0,a.updateOffset(this),Kc=!1)}function o(a){return a instanceof n||null!=a&&null!=a._isAMomentObject}function p(a){return 0>a?Math.ceil(a):Math.floor(a)}function q(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=p(b)),c}function r(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&q(a[d])!==q(b[d]))&&g++;return g+f}function s(){}function t(a){return a?a.toLowerCase().replace("_","-"):a}function u(a){for(var b,c,d,e,f=0;f<a.length;){for(e=t(a[f]).split("-"),b=e.length,c=t(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=v(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&r(e,c,!0)>=b-1)break;b--}f++}return null}function v(a){var b=null;if(!Lc[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Ic._abbr,require("./locale/"+a),w(b)}catch(c){}return Lc[a]}function w(a,b){var c;return a&&(c="undefined"==typeof b?y(a):x(a,b),c&&(Ic=c)),Ic._abbr}function x(a,b){return null!==b?(b.abbr=a,Lc[a]=Lc[a]||new s,Lc[a].set(b),w(a),Lc[a]):(delete Lc[a],null)}function y(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Ic;if(!c(a)){if(b=v(a))return b;a=[a]}return u(a)}function z(a,b){var c=a.toLowerCase();Mc[c]=Mc[c+"s"]=Mc[b]=a}function A(a){return"string"==typeof a?Mc[a]||Mc[a.toLowerCase()]:void 0}function B(a){var b,c,d={};for(c in a)f(a,c)&&(b=A(c),b&&(d[b]=a[c]));return d}function C(b,c){return function(d){return null!=d?(E(this,b,d),a.updateOffset(this,c),this):D(this,b)}}function D(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function E(a,b,c){return a._d["set"+(a._isUTC?"UTC":"")+b](c)}function F(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=A(a),"function"==typeof this[a])return this[a](b);return this}function G(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function H(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Qc[a]=e),b&&(Qc[b[0]]=function(){return G(e.apply(this,arguments),b[1],b[2])}),c&&(Qc[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function I(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function J(a){var b,c,d=a.match(Nc);for(b=0,c=d.length;c>b;b++)Qc[d[b]]?d[b]=Qc[d[b]]:d[b]=I(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function K(a,b){return a.isValid()?(b=L(b,a.localeData()),Pc[b]=Pc[b]||J(b),Pc[b](a)):a.localeData().invalidDate()}function L(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Oc.lastIndex=0;d>=0&&Oc.test(a);)a=a.replace(Oc,c),Oc.lastIndex=0,d-=1;return a}function M(a){return"function"==typeof a&&"[object Function]"===Object.prototype.toString.call(a)}function N(a,b,c){dd[a]=M(b)?b:function(a){return a&&c?c:b}}function O(a,b){return f(dd,a)?dd[a](b._strict,b._locale):new RegExp(P(a))}function P(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=q(a)}),c=0;c<a.length;c++)ed[a[c]]=d}function R(a,b){Q(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function S(a,b,c){null!=b&&f(ed,a)&&ed[a](b,c._a,c,a)}function T(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function U(a){return this._months[a.month()]}function V(a){return this._monthsShort[a.month()]}function W(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function X(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),T(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function Y(b){return null!=b?(X(this,b),a.updateOffset(this,!0),this):D(this,"Month")}function Z(){return T(this.year(),this.month())}function $(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[gd]<0||c[gd]>11?gd:c[hd]<1||c[hd]>T(c[fd],c[gd])?hd:c[id]<0||c[id]>24||24===c[id]&&(0!==c[jd]||0!==c[kd]||0!==c[ld])?id:c[jd]<0||c[jd]>59?jd:c[kd]<0||c[kd]>59?kd:c[ld]<0||c[ld]>999?ld:-1,j(a)._overflowDayOfYear&&(fd>b||b>hd)&&(b=hd),j(a).overflow=b),a}function _(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function aa(a,b){var c=!0;return g(function(){return c&&(_(a+"\n"+(new Error).stack),c=!1),b.apply(this,arguments)},b)}function ba(a,b){od[a]||(_(b),od[a]=!0)}function ca(a){var b,c,d=a._i,e=pd.exec(d);if(e){for(j(a).iso=!0,b=0,c=qd.length;c>b;b++)if(qd[b][1].exec(d)){a._f=qd[b][0];break}for(b=0,c=rd.length;c>b;b++)if(rd[b][1].exec(d)){a._f+=(e[6]||" ")+rd[b][0];break}d.match(ad)&&(a._f+="Z"),va(a)}else a._isValid=!1}function da(b){var c=sd.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(ca(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ea(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fa(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function ga(a){return ha(a)?366:365}function ha(a){return a%4===0&&a%100!==0||a%400===0}function ia(){return ha(this.year())}function ja(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=Da(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ka(a){return ja(a,this._week.dow,this._week.doy).week}function la(){return this._week.dow}function ma(){return this._week.doy}function na(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function oa(a){var b=ja(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function pa(a,b,c,d,e){var f,g=6+e-d,h=fa(a,0,1+g),i=h.getUTCDay();return e>i&&(i+=7),c=null!=c?1*c:e,f=1+g+7*(b-1)-i+c,{year:f>0?a:a-1,dayOfYear:f>0?f:ga(a-1)+f}}function qa(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function ra(a,b,c){return null!=a?a:null!=b?b:c}function sa(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function ta(a){var b,c,d,e,f=[];if(!a._d){for(d=sa(a),a._w&&null==a._a[hd]&&null==a._a[gd]&&ua(a),a._dayOfYear&&(e=ra(a._a[fd],d[fd]),a._dayOfYear>ga(e)&&(j(a)._overflowDayOfYear=!0),c=fa(e,0,a._dayOfYear),a._a[gd]=c.getUTCMonth(),a._a[hd]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[id]&&0===a._a[jd]&&0===a._a[kd]&&0===a._a[ld]&&(a._nextDay=!0,a._a[id]=0),a._d=(a._useUTC?fa:ea).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[id]=24)}}function ua(a){var b,c,d,e,f,g,h;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=ra(b.GG,a._a[fd],ja(Da(),1,4).year),d=ra(b.W,1),e=ra(b.E,1)):(f=a._locale._week.dow,g=a._locale._week.doy,c=ra(b.gg,a._a[fd],ja(Da(),f,g).year),d=ra(b.w,1),null!=b.d?(e=b.d,f>e&&++d):e=null!=b.e?b.e+f:f),h=pa(c,d,e,g,f),a._a[fd]=h.year,a._dayOfYear=h.dayOfYear}function va(b){if(b._f===a.ISO_8601)return void ca(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=L(b._f,b._locale).match(Nc)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(O(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),Qc[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),S(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[id]<=12&&b._a[id]>0&&(j(b).bigHour=void 0),b._a[id]=wa(b._locale,b._a[id],b._meridiem),ta(b),$(b)}function wa(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function xa(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=m({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],va(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function ya(a){if(!a._d){var b=B(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],ta(a)}}function za(a){var b=new n($(Aa(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Aa(a){var b=a._i,e=a._f;return a._locale=a._locale||y(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),o(b)?new n($(b)):(c(e)?xa(a):e?va(a):d(b)?a._d=b:Ba(a),a))}function Ba(b){var f=b._i;void 0===f?b._d=new Date:d(f)?b._d=new Date(+f):"string"==typeof f?da(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),ta(b)):"object"==typeof f?ya(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Ca(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,za(f)}function Da(a,b,c,d){return Ca(a,b,c,d,!1)}function Ea(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Da();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Fa(){var a=[].slice.call(arguments,0);return Ea("isBefore",a)}function Ga(){var a=[].slice.call(arguments,0);return Ea("isAfter",a)}function Ha(a){var b=B(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=y(),this._bubble()}function Ia(a){return a instanceof Ha}function Ja(a,b){H(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+G(~~(a/60),2)+b+G(~~a%60,2)})}function Ka(a){var b=(a||"").match(ad)||[],c=b[b.length-1]||[],d=(c+"").match(xd)||["-",0,0],e=+(60*d[1])+q(d[2]);return"+"===d[0]?e:-e}function La(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(o(b)||d(b)?+b:+Da(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Da(b).local()}function Ma(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Na(b,c){var d,e=this._offset||0;return null!=b?("string"==typeof b&&(b=Ka(b)),Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ma(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?bb(this,Ya(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ma(this)}function Oa(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Pa(a){return this.utcOffset(0,a)}function Qa(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ma(this),"m")),this}function Ra(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ka(this._i)),this}function Sa(a){return a=a?Da(a).utcOffset():0,(this.utcOffset()-a)%60===0}function Ta(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ua(){if("undefined"!=typeof this._isDSTShifted)return this._isDSTShifted;var a={};if(m(a,this),a=Aa(a),a._a){var b=a._isUTC?h(a._a):Da(a._a);this._isDSTShifted=this.isValid()&&r(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Va(){return!this._isUTC}function Wa(){return this._isUTC}function Xa(){return this._isUTC&&0===this._offset}function Ya(a,b){var c,d,e,g=a,h=null;return Ia(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=yd.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:q(h[hd])*c,h:q(h[id])*c,m:q(h[jd])*c,s:q(h[kd])*c,ms:q(h[ld])*c}):(h=zd.exec(a))?(c="-"===h[1]?-1:1,g={y:Za(h[2],c),M:Za(h[3],c),d:Za(h[4],c),h:Za(h[5],c),m:Za(h[6],c),s:Za(h[7],c),w:Za(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=_a(Da(g.from),Da(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ha(g),Ia(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function Za(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function $a(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function _a(a,b){var c;return b=La(b,a),a.isBefore(b)?c=$a(a,b):(c=$a(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function ab(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(ba(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ya(c,d),bb(this,e,a),this}}function bb(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&E(b,"Date",D(b,"Date")+g*d),h&&X(b,D(b,"Month")+h*d),e&&a.updateOffset(b,g||h)}function cb(a,b){var c=a||Da(),d=La(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse";return this.format(b&&b[f]||this.localeData().calendar(f,this,Da(c)))}function db(){return new n(this)}function eb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this>+a):(c=o(a)?+a:+Da(a),c<+this.clone().startOf(b))}function fb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+a>+this):(c=o(a)?+a:+Da(a),+this.clone().endOf(b)<c)}function gb(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function hb(a,b){var c;return b=A(b||"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this===+a):(c=+Da(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))}function ib(a,b,c){var d,e,f=La(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=A(b),"year"===b||"month"===b||"quarter"===b?(e=jb(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:p(e)}function jb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function kb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function lb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():K(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):K(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function mb(b){var c=K(this,b||a.defaultFormat);return this.localeData().postformat(c)}function nb(a,b){return this.isValid()?Ya({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ob(a){return this.from(Da(),a)}function pb(a,b){return this.isValid()?Ya({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function qb(a){return this.to(Da(),a)}function rb(a){var b;return void 0===a?this._locale._abbr:(b=y(a),null!=b&&(this._locale=b),this)}function sb(){return this._locale}function tb(a){switch(a=A(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function ub(a){return a=A(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function vb(){return+this._d-6e4*(this._offset||0)}function wb(){return Math.floor(+this/1e3)}function xb(){return this._offset?new Date(+this):this._d}function yb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function zb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Ab(){return k(this)}function Bb(){return g({},j(this))}function Cb(){return j(this).overflow}function Db(a,b){H(0,[a,a.length],0,b)}function Eb(a,b,c){return ja(Da([a,11,31+b-c]),b,c).week}function Fb(a){var b=ja(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")}function Gb(a){var b=ja(this,1,4).year;return null==a?b:this.add(a-b,"y")}function Hb(){return Eb(this.year(),1,4)}function Ib(){var a=this.localeData()._week;return Eb(this.year(),a.dow,a.doy)}function Jb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Kb(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Lb(a){return this._weekdays[a.day()]}function Mb(a){return this._weekdaysShort[a.day()]}function Nb(a){return this._weekdaysMin[a.day()]}function Ob(a){var b,c,d;for(this._weekdaysParse=this._weekdaysParse||[],b=0;7>b;b++)if(this._weekdaysParse[b]||(c=Da([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b}function Pb(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Kb(a,this.localeData()),this.add(a-b,"d")):b}function Qb(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Rb(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)}function Sb(a,b){H(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Tb(a,b){return b._meridiemParse}function Ub(a){return"p"===(a+"").toLowerCase().charAt(0)}function Vb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wb(a,b){b[ld]=q(1e3*("0."+a))}function Xb(){return this._isUTC?"UTC":""}function Yb(){return this._isUTC?"Coordinated Universal Time":""}function Zb(a){return Da(1e3*a)}function $b(){return Da.apply(null,arguments).parseZone()}function _b(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.call(b,c):d}function ac(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function bc(){return this._invalidDate}function cc(a){return this._ordinal.replace("%d",a)}function dc(a){return a}function ec(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)}function fc(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)}function gc(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function hc(a,b,c,d){var e=y(),f=h().set(d,b);return e[c](f,a)}function ic(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return hc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=hc(a,f,c,e);return g}function jc(a,b){return ic(a,b,"months",12,"month")}function kc(a,b){return ic(a,b,"monthsShort",12,"month")}function lc(a,b){return ic(a,b,"weekdays",7,"day")}function mc(a,b){return ic(a,b,"weekdaysShort",7,"day")}function nc(a,b){return ic(a,b,"weekdaysMin",7,"day")}function oc(){var a=this._data;return this._milliseconds=Wd(this._milliseconds),this._days=Wd(this._days),this._months=Wd(this._months),a.milliseconds=Wd(a.milliseconds),a.seconds=Wd(a.seconds),a.minutes=Wd(a.minutes),a.hours=Wd(a.hours),a.months=Wd(a.months),a.years=Wd(a.years),this}function pc(a,b,c,d){var e=Ya(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function qc(a,b){return pc(this,a,b,1)}function rc(a,b){return pc(this,a,b,-1)}function sc(a){return 0>a?Math.floor(a):Math.ceil(a)}function tc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*sc(vc(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=p(f/1e3),i.seconds=a%60,b=p(a/60),i.minutes=b%60,c=p(b/60),i.hours=c%24,g+=p(c/24),e=p(uc(g)),h+=e,g-=sc(vc(e)),d=p(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function uc(a){return 4800*a/146097}function vc(a){return 146097*a/4800}function wc(a){var b,c,d=this._milliseconds;if(a=A(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+uc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(vc(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function xc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*q(this._months/12)}function yc(a){return function(){return this.as(a)}}function zc(a){return a=A(a),this[a+"s"]()}function Ac(a){return function(){return this._data[a]}}function Bc(){return p(this.days()/7)}function Cc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Dc(a,b,c){var d=Ya(a).abs(),e=ke(d.as("s")),f=ke(d.as("m")),g=ke(d.as("h")),h=ke(d.as("d")),i=ke(d.as("M")),j=ke(d.as("y")),k=e<le.s&&["s",e]||1===f&&["m"]||f<le.m&&["mm",f]||1===g&&["h"]||g<le.h&&["hh",g]||1===h&&["d"]||h<le.d&&["dd",h]||1===i&&["M"]||i<le.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,Cc.apply(null,k)}function Ec(a,b){return void 0===le[a]?!1:void 0===b?le[a]:(le[a]=b,!0)}function Fc(a){var b=this.localeData(),c=Dc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Gc(){var a,b,c,d=me(this._milliseconds)/1e3,e=me(this._days),f=me(this._months);a=p(d/60),b=p(a/60),d%=60,a%=60,c=p(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var Hc,Ic,Jc=a.momentProperties=[],Kc=!1,Lc={},Mc={},Nc=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Oc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pc={},Qc={},Rc=/\d/,Sc=/\d\d/,Tc=/\d{3}/,Uc=/\d{4}/,Vc=/[+-]?\d{6}/,Wc=/\d\d?/,Xc=/\d{1,3}/,Yc=/\d{1,4}/,Zc=/[+-]?\d{1,6}/,$c=/\d+/,_c=/[+-]?\d+/,ad=/Z|[+-]\d\d:?\d\d/gi,bd=/[+-]?\d+(\.\d{1,3})?/,cd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,dd={},ed={},fd=0,gd=1,hd=2,id=3,jd=4,kd=5,ld=6;H("M",["MM",2],"Mo",function(){return this.month()+1}),H("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),H("MMMM",0,0,function(a){return this.localeData().months(this,a)}),z("month","M"),N("M",Wc),N("MM",Wc,Sc),N("MMM",cd),N("MMMM",cd),Q(["M","MM"],function(a,b){b[gd]=q(a)-1}),Q(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[gd]=e:j(c).invalidMonth=a});var md="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),nd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),od={};a.suppressDeprecationWarnings=!1;var pd=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],rd=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],sd=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=aa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),H(0,["YY",2],0,function(){return this.year()%100}),H(0,["YYYY",4],0,"year"),H(0,["YYYYY",5],0,"year"),H(0,["YYYYYY",6,!0],0,"year"),z("year","y"),N("Y",_c),N("YY",Wc,Sc),N("YYYY",Yc,Uc),N("YYYYY",Zc,Vc),N("YYYYYY",Zc,Vc),Q(["YYYYY","YYYYYY"],fd),Q("YYYY",function(b,c){c[fd]=2===b.length?a.parseTwoDigitYear(b):q(b)}),Q("YY",function(b,c){c[fd]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return q(a)+(q(a)>68?1900:2e3)};var td=C("FullYear",!1);H("w",["ww",2],"wo","week"),H("W",["WW",2],"Wo","isoWeek"),z("week","w"),z("isoWeek","W"),N("w",Wc),N("ww",Wc,Sc),N("W",Wc),N("WW",Wc,Sc),R(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=q(a)});var ud={dow:0,doy:6};H("DDD",["DDDD",3],"DDDo","dayOfYear"),z("dayOfYear","DDD"),N("DDD",Xc),N("DDDD",Tc),Q(["DDD","DDDD"],function(a,b,c){c._dayOfYear=q(a)}),a.ISO_8601=function(){};var vd=aa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return this>a?this:a}),wd=aa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return a>this?this:a});Ja("Z",":"),Ja("ZZ",""),N("Z",ad),N("ZZ",ad),Q(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ka(a)});var xd=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var yd=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,zd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Ya.fn=Ha.prototype;var Ad=ab(1,"add"),Bd=ab(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var Cd=aa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});H(0,["gg",2],0,function(){return this.weekYear()%100}),H(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Db("gggg","weekYear"),Db("ggggg","weekYear"),Db("GGGG","isoWeekYear"),Db("GGGGG","isoWeekYear"),z("weekYear","gg"),z("isoWeekYear","GG"),N("G",_c),N("g",_c),N("GG",Wc,Sc),N("gg",Wc,Sc),N("GGGG",Yc,Uc),N("gggg",Yc,Uc),N("GGGGG",Zc,Vc),N("ggggg",Zc,Vc),R(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=q(a)}),R(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),H("Q",0,0,"quarter"),z("quarter","Q"),N("Q",Rc),Q("Q",function(a,b){b[gd]=3*(q(a)-1)}),H("D",["DD",2],"Do","date"),z("date","D"),N("D",Wc),N("DD",Wc,Sc),N("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),Q(["D","DD"],hd),Q("Do",function(a,b){b[hd]=q(a.match(Wc)[0],10)});var Dd=C("Date",!0);H("d",0,"do","day"),H("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),H("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),H("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),H("e",0,0,"weekday"),H("E",0,0,"isoWeekday"),z("day","d"),z("weekday","e"),z("isoWeekday","E"),N("d",Wc),N("e",Wc),N("E",Wc),N("dd",cd),N("ddd",cd),N("dddd",cd),R(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:j(c).invalidWeekday=a}),R(["d","e","E"],function(a,b,c,d){b[d]=q(a)});var Ed="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Fd="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Gd="Su_Mo_Tu_We_Th_Fr_Sa".split("_");H("H",["HH",2],0,"hour"),H("h",["hh",2],0,function(){return this.hours()%12||12}),Sb("a",!0),Sb("A",!1),z("hour","h"),N("a",Tb),N("A",Tb),N("H",Wc),N("h",Wc),N("HH",Wc,Sc),N("hh",Wc,Sc),Q(["H","HH"],id),Q(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),Q(["h","hh"],function(a,b,c){b[id]=q(a),j(c).bigHour=!0});var Hd=/[ap]\.?m?\.?/i,Id=C("Hours",!0);H("m",["mm",2],0,"minute"),z("minute","m"),N("m",Wc),N("mm",Wc,Sc),Q(["m","mm"],jd);var Jd=C("Minutes",!1);H("s",["ss",2],0,"second"),z("second","s"),N("s",Wc),N("ss",Wc,Sc),Q(["s","ss"],kd);var Kd=C("Seconds",!1);H("S",0,0,function(){return~~(this.millisecond()/100)}),H(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),H(0,["SSS",3],0,"millisecond"),H(0,["SSSS",4],0,function(){return 10*this.millisecond()}),H(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),H(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),H(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),H(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),H(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),z("millisecond","ms"),N("S",Xc,Rc),N("SS",Xc,Sc),N("SSS",Xc,Tc);var Ld;for(Ld="SSSS";Ld.length<=9;Ld+="S")N(Ld,$c);for(Ld="S";Ld.length<=9;Ld+="S")Q(Ld,Wb);var Md=C("Milliseconds",!1);H("z",0,0,"zoneAbbr"),H("zz",0,0,"zoneName");var Nd=n.prototype;Nd.add=Ad,Nd.calendar=cb,Nd.clone=db,Nd.diff=ib,Nd.endOf=ub,Nd.format=mb,Nd.from=nb,Nd.fromNow=ob,Nd.to=pb,Nd.toNow=qb,Nd.get=F,Nd.invalidAt=Cb,Nd.isAfter=eb,Nd.isBefore=fb,Nd.isBetween=gb,Nd.isSame=hb,Nd.isValid=Ab,Nd.lang=Cd,Nd.locale=rb,Nd.localeData=sb,Nd.max=wd,Nd.min=vd,Nd.parsingFlags=Bb,Nd.set=F,Nd.startOf=tb,Nd.subtract=Bd,Nd.toArray=yb,Nd.toObject=zb,Nd.toDate=xb,Nd.toISOString=lb,Nd.toJSON=lb,Nd.toString=kb,Nd.unix=wb,Nd.valueOf=vb,Nd.year=td,Nd.isLeapYear=ia,Nd.weekYear=Fb,Nd.isoWeekYear=Gb,Nd.quarter=Nd.quarters=Jb,Nd.month=Y,Nd.daysInMonth=Z,Nd.week=Nd.weeks=na,Nd.isoWeek=Nd.isoWeeks=oa,Nd.weeksInYear=Ib,Nd.isoWeeksInYear=Hb,Nd.date=Dd,Nd.day=Nd.days=Pb,Nd.weekday=Qb,Nd.isoWeekday=Rb,Nd.dayOfYear=qa,Nd.hour=Nd.hours=Id,Nd.minute=Nd.minutes=Jd,Nd.second=Nd.seconds=Kd,
Nd.millisecond=Nd.milliseconds=Md,Nd.utcOffset=Na,Nd.utc=Pa,Nd.local=Qa,Nd.parseZone=Ra,Nd.hasAlignedHourOffset=Sa,Nd.isDST=Ta,Nd.isDSTShifted=Ua,Nd.isLocal=Va,Nd.isUtcOffset=Wa,Nd.isUtc=Xa,Nd.isUTC=Xa,Nd.zoneAbbr=Xb,Nd.zoneName=Yb,Nd.dates=aa("dates accessor is deprecated. Use date instead.",Dd),Nd.months=aa("months accessor is deprecated. Use month instead",Y),Nd.years=aa("years accessor is deprecated. Use year instead",td),Nd.zone=aa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Oa);var Od=Nd,Pd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Qd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Rd="Invalid date",Sd="%d",Td=/\d{1,2}/,Ud={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Vd=s.prototype;Vd._calendar=Pd,Vd.calendar=_b,Vd._longDateFormat=Qd,Vd.longDateFormat=ac,Vd._invalidDate=Rd,Vd.invalidDate=bc,Vd._ordinal=Sd,Vd.ordinal=cc,Vd._ordinalParse=Td,Vd.preparse=dc,Vd.postformat=dc,Vd._relativeTime=Ud,Vd.relativeTime=ec,Vd.pastFuture=fc,Vd.set=gc,Vd.months=U,Vd._months=md,Vd.monthsShort=V,Vd._monthsShort=nd,Vd.monthsParse=W,Vd.week=ka,Vd._week=ud,Vd.firstDayOfYear=ma,Vd.firstDayOfWeek=la,Vd.weekdays=Lb,Vd._weekdays=Ed,Vd.weekdaysMin=Nb,Vd._weekdaysMin=Gd,Vd.weekdaysShort=Mb,Vd._weekdaysShort=Fd,Vd.weekdaysParse=Ob,Vd.isPM=Ub,Vd._meridiemParse=Hd,Vd.meridiem=Vb,w("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===q(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=aa("moment.lang is deprecated. Use moment.locale instead.",w),a.langData=aa("moment.langData is deprecated. Use moment.localeData instead.",y);var Wd=Math.abs,Xd=yc("ms"),Yd=yc("s"),Zd=yc("m"),$d=yc("h"),_d=yc("d"),ae=yc("w"),be=yc("M"),ce=yc("y"),de=Ac("milliseconds"),ee=Ac("seconds"),fe=Ac("minutes"),ge=Ac("hours"),he=Ac("days"),ie=Ac("months"),je=Ac("years"),ke=Math.round,le={s:45,m:45,h:22,d:26,M:11},me=Math.abs,ne=Ha.prototype;ne.abs=oc,ne.add=qc,ne.subtract=rc,ne.as=wc,ne.asMilliseconds=Xd,ne.asSeconds=Yd,ne.asMinutes=Zd,ne.asHours=$d,ne.asDays=_d,ne.asWeeks=ae,ne.asMonths=be,ne.asYears=ce,ne.valueOf=xc,ne._bubble=tc,ne.get=zc,ne.milliseconds=de,ne.seconds=ee,ne.minutes=fe,ne.hours=ge,ne.days=he,ne.weeks=Bc,ne.months=ie,ne.years=je,ne.humanize=Fc,ne.toISOString=Gc,ne.toString=Gc,ne.toJSON=Gc,ne.locale=rb,ne.localeData=sb,ne.toIsoString=aa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Gc),ne.lang=Cd,H("X",0,0,"unix"),H("x",0,0,"valueOf"),N("x",_c),N("X",bd),Q("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),Q("x",function(a,b,c){c._d=new Date(q(a))}),a.version="2.10.6",b(Da),a.fn=Od,a.min=Fa,a.max=Ga,a.utc=h,a.unix=Zb,a.months=jc,a.isDate=d,a.locale=w,a.invalid=l,a.duration=Ya,a.isMoment=o,a.weekdays=lc,a.parseZone=$b,a.localeData=y,a.isDuration=Ia,a.monthsShort=kc,a.weekdaysMin=nc,a.defineLocale=x,a.weekdaysShort=mc,a.normalizeUnits=A,a.relativeTimeThreshold=Ec;var oe=a;return oe});;/* Copyright (c) Microsoft Open Technologies, Inc. All rights reserved. See License.txt in the project root for license information.*/
(function(a){function b(a){return a&&a.Object===Object?a:null}function c(a){for(var b=[],c=0,d=a.length;d>c;c++)b.push(a[c]);return b}function d(a){return function(){try{return a.apply(this,arguments)}catch(b){return Ya.e=b,Ya}}}function e(a){throw a}function f(a,b){if($a&&b.stack&&"object"==typeof a&&null!==a&&a.stack&&-1===a.stack.indexOf(cb)){for(var c=[],d=b;d;d=d.source)d.stack&&c.unshift(d.stack);c.unshift(a.stack);var e=c.join("\n"+cb+"\n");a.stack=g(e)}}function g(a){for(var b=a.split("\n"),c=[],d=0,e=b.length;e>d;d++){var f=b[d];h(f)||i(f)||!f||c.push(f)}return c.join("\n")}function h(a){var b=k(a);if(!b)return!1;var c=b[0],d=b[1];return c===ab&&d>=bb&&Dg>=d}function i(a){return-1!==a.indexOf("(module.js:")||-1!==a.indexOf("(node.js:")}function j(){if($a)try{throw new Error}catch(a){var b=a.stack.split("\n"),c=b[0].indexOf("@")>0?b[1]:b[2],d=k(c);if(!d)return;return ab=d[0],d[1]}}function k(a){var b=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);if(b)return[b[1],Number(b[2])];var c=/at ([^ ]+):(\d+):(?:\d+)$/.exec(a);if(c)return[c[1],Number(c[2])];var d=/.*@(.+):(\d+)$/.exec(a);return d?[d[1],Number(d[2])]:void 0}function l(b,c,d,e,f,g){var h=Rb(b),i=h.length,j=Rb(c),k=j.length;if(i!==k&&!e)return!1;for(var l,m=i;m--;)if(l=h[m],!(e?l in c:Ob.call(c,l)))return!1;for(var n=e;++m<i;){l=h[m];var o,p=b[l],q=c[l];if(!(o===a?d(p,q,e,f,g):o))return!1;n||(n="constructor"===l)}if(!n){var r=b.constructor,s=c.constructor;if(r!==s&&"constructor"in b&&"constructor"in c&&!("function"==typeof r&&r instanceof r&&"function"==typeof s&&s instanceof s))return!1}return!0}function m(a,b,c){switch(c){case rb:case sb:return+a===+b;case tb:return a.name===b.name&&a.message===b.message;case wb:return a!==+a?b!==+b:a===+b;case yb:case Ab:return a===b+""}return!1}function n(a){return!!a&&"object"==typeof a}function o(a){return"number"==typeof a&&a>-1&&a%1===0&&Qb>=a}function p(a){return n(a)&&o(a.length)&&!!Mb[Pb.call(a)]}function q(a,b){for(var c=-1,d=a.length;++c<d;)if(b(a[c],c,a))return!0;return!1}function r(b,c,d,e,f,g){var h=-1,i=b.length,j=c.length;if(i!==j&&!(e&&j>i))return!1;for(;++h<i;){var k,l=b[h],m=c[h];if(k!==a){if(k)continue;return!1}if(e){if(!q(c,function(a){return l===a||d(l,a,e,f,g)}))return!1}else if(l!==m&&!d(l,m,e,f,g))return!1}return!0}function s(a,b,c,d,e,f){var g=Tb(a),h=Tb(b),i=qb,j=qb;g||(i=Pb.call(a),i===pb?i=xb:i!==xb&&(g=p(a))),h||(j=Pb.call(b),j===pb&&(j=xb));var k=i===xb&&!Sb(a),n=j===xb&&!Sb(b),o=i===j;if(o&&!g&&!k)return m(a,b,i);if(!d){var q=k&&Ob.call(a,"__wrapped__"),s=n&&Ob.call(b,"__wrapped__");if(q||s)return c(q?a.value():a,s?b.value():b,d,e,f)}if(!o)return!1;e||(e=[]),f||(f=[]);for(var t=e.length;t--;)if(e[t]===a)return f[t]===b;e.push(a),f.push(b);var u=(g?r:l)(a,b,c,d,e,f);return e.pop(),f.pop(),u}function t(a,b,c,d,e){return a===b?!0:null==a||null==b||!aa(a)&&!n(b)?a!==a&&b!==b:s(a,b,t,c,d,e)}function u(a,b){for(var c=new Array(a),d=0;a>d;d++)c[d]=b();return c}function v(a,b){this.id=a,this.value=b}function w(a,b){this.scheduler=a,this.disposable=b,this.isDisposed=!1}function x(a,b){b.isDisposed||(b.isDisposed=!0,b.disposable.dispose())}function y(a){this._s=a,this.isDisposed=!1}function z(a){this._s=a}function A(a){this._s=a,this._l=a.length,this._i=0}function B(a){this._a=a}function C(a){this._a=a,this._l=G(a),this._i=0}function D(a){return"number"==typeof a&&Oa.isFinite(a)}function E(b){var c,d=b[jb];if(!d&&"string"==typeof b)return c=new z(b),c[jb]();if(!d&&b.length!==a)return c=new B(b),c[jb]();if(!d)throw new TypeError("Object is not iterable");return b[jb]()}function F(a){var b=+a;return 0===b?b:isNaN(b)?b:0>b?-1:1}function G(a){var b=+a.length;return isNaN(b)?0:0!==b&&D(b)?(b=F(b)*Math.floor(Math.abs(b)),0>=b?0:b>kd?kd:b):b}function H(a,b){return oc(a)||(a=vc),new md(b,a)}function I(a,b){this.observer=a,this.parent=b}function J(a,b){return a.amb(b)}function K(){return!1}function L(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return b}function K(){return!1}function L(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return b}function K(){return!1}function M(){return[]}function K(){return!1}function M(){return[]}function L(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return b}function N(a){return function(b){return a.subscribe(b)}}function O(a){return a.toArray()}function P(a){return a.length>0}function Q(a,b,c){var d=nb(b,c,3);return a.map(function(b,c){var e=d(b,c,a);return Wa(e)&&(e=cd(e)),(mb(e)||lb(e))&&(e=ld(e)),e}).concatAll()}function R(a,b,c){for(var d=0,e=a.length;e>d;d++)if(c(a[d],b))return d;return-1}function S(a){this.comparer=a,this.set=[]}function T(b,c){return function(d){for(var e=d,f=0;c>f;f++){var g=e[b[f]];if("undefined"==typeof g)return a;e=g}return e}}function U(a){if(0===a.length)throw new db;return a[0]}function V(a,b,c,d){var e=nb(b,c,3);return new ug(function(b){return a.subscribe(new df(b,a,e,d))},a)}function W(a){return a?Rc.isObservable(a)?a:Wa(a)?Rc.fromPromise(a):_(a)||$(a)?nf.call(this,a):Xa(a)?Z.call(this,a):mb(a)||lb(a)?X.call(this,a):aa(a)?Y.call(this,a):a:a}function X(a){return Rc.from(a).concatMap(function(a){return Rc.isObservable(a)||aa(a)?W.call(null,a):Pa.Observable.just(a)}).toArray()}function Y(b){function c(b,c){d[c]=a,f.push(b.map(function(a){d[c]=a}))}for(var d=new b.constructor,e=Object.keys(b),f=[],g=0,h=e.length;h>g;g++){var i=e[g],j=W.call(this,b[i]);j&&Rc.isObservable(j)?c(j,i):d[i]=b[i]}return Rc.forkJoin.apply(Rc,f).map(function(){return d})}function Z(a){var b=this;return new ug(function(c){a.call(b,function(){var a=arguments[0],b=arguments[1];if(a)return c.onError(a);if(arguments.length>2){for(var d=[],e=1,f=arguments.length;f>e;e++)d.push(arguments[e]);b=d}c.onNext(b),c.onCompleted()})})}function $(a){return Xa(a.next)&&Xa(a["throw"])}function _(a){var b=a.constructor;return b?"GeneratorFunction"===b.name||"GeneratorFunction"===b.displayName?!0:$(b.prototype):!1}function aa(a){return Object==a.constructor}function ba(a,b,c,d){var e=new zg;return d.push(ca(e,b,c)),a.apply(b,d),e.asObservable()}function ca(a,b,c){return function(){for(var d=arguments.length,e=new Array(d),f=0;d>f;f++)e[f]=arguments[f];if(Xa(c)){if(e=Za(c).apply(b,e),e===Ya)return a.onError(e.e);a.onNext(e)}else e.length<=1?a.onNext(e[0]):a.onNext(e);a.onCompleted()}}function da(a,b,c,d){var e=new zg;return d.push(ea(e,b,c)),a.apply(b,d),e.asObservable()}function ea(a,b,c){return function(){var d=arguments[0];if(d)return a.onError(d);for(var e=arguments.length,f=[],g=1;e>g;g++)f[g-1]=arguments[g];if(Xa(c)){var f=Za(c).apply(b,f);if(f===Ya)return a.onError(f.e);a.onNext(f)}else f.length<=1?a.onNext(f[0]):a.onNext(f);a.onCompleted()}}function fa(a){return Oa.StaticNodeList?a instanceof Oa.StaticNodeList||a instanceof Oa.NodeList:"[object NodeList]"===Object.prototype.toString.call(a)}function ga(a,b,c){this._e=a,this._n=b,this._fn=c,this._e.addEventListener(this._n,this._fn,!1),this.isDisposed=!1}function ha(a,b,c){var d=new $b,e=Object.prototype.toString.call(a);if(fa(a)||"[object HTMLCollection]"===e)for(var f=0,g=a.length;g>f;f++)d.add(ha(a.item(f),b,c));else a&&d.add(new ga(a,b,c));return d}function ia(a,b,c){return new ug(function(d){function e(a,b){if(j[b]=a,g[b]=!0,h||(h=g.every(Ra))){if(f)return d.onError(f);var e=Za(c).apply(null,j);if(e===Ya)return d.onError(e.e);d.onNext(e)}i&&j[1]&&d.onCompleted()}var f,g=[!1,!1],h=!1,i=!1,j=new Array(2);return new ic(a.subscribe(function(a){e(a,0)},function(a){j[1]?d.onError(a):f=a},function(){i=!0,j[1]&&d.onCompleted()}),b.subscribe(function(a){e(a,1)},function(a){d.onError(a)},function(){i=!0,e(!0,1)}))},a)}function O(a){return a.toArray()}function ja(a,b){return a.groupJoin(this,b,id,function(a,b){return b})}function ka(a){var b=this;return new ug(function(c){var d=new yg,e=new $b,f=new kc(e);return c.onNext(Xb(d,f)),e.add(b.subscribe(function(a){d.onNext(a)},function(a){d.onError(a),c.onError(a)},function(){d.onCompleted(),c.onCompleted()})),Wa(a)&&(a=cd(a)),e.add(a.subscribe(function(a){d.onCompleted(),d=new yg,c.onNext(Xb(d,f))},function(a){d.onError(a),c.onError(a)},function(){d.onCompleted(),c.onCompleted()})),f},b)}function la(a){var b=this;return new ug(function(c){function d(){var b;try{b=a()}catch(f){return void c.onError(f)}Wa(b)&&(b=cd(b));var i=new gc;e.setDisposable(i),i.setDisposable(b.take(1).subscribe(Qa,function(a){h.onError(a),c.onError(a)},function(){h.onCompleted(),h=new yg,c.onNext(Xb(h,g)),d()}))}var e=new hc,f=new $b(e),g=new kc(f),h=new yg;return c.onNext(Xb(h,g)),f.add(b.subscribe(function(a){h.onNext(a)},function(a){h.onError(a),c.onError(a)},function(){h.onCompleted(),c.onCompleted()})),d(),g},b)}function ma(a,b){return new Ef(a,b)}function L(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return b}function na(a){this.patterns=a}function oa(a,b){this.expression=a,this.selector=b}function pa(a){return function(b){a.onError(b)}}function qa(a,b){return function(){var c=Za(a.selector).apply(a,arguments);return c===Ya?b.onError(c.e):void b.onNext(c)}}function ra(a,b,c){var d=a.get(b);if(!d){var e=new Mf(b,c);return a.set(b,e),e}return d}function sa(a,b,c){this.joinObserverArray=a,this.onNext=b,this.onCompleted=c,this.joinObservers=new Lf;for(var d=0,e=this.joinObserverArray.length;e>d;d++){var f=this.joinObserverArray[d];this.joinObservers.set(f,f)}}function ta(a,b){return new Nf(a,b)}function ua(a,b,c){return new ug(function(d){var e=a,f=nc(b);return c.scheduleRecursiveFuture(0,e,function(a,b){if(f>0){var g=c.now();e=new Date(e.getTime()+f),e.getTime()<=g&&(e=new Date(g+f))}d.onNext(a),b(a+1,new Date(e))})})}function va(a,b,c){return a===b?new ug(function(a){return c.schedulePeriodic(0,b,function(b){return a.onNext(b),b+1})}):fd(function(){return ua(new Date(c.now()+a),b,c)})}function wa(a,b,c){return new ug(function(d){var e,f=!1,g=new hc,h=null,i=[],j=!1;return e=a.materialize().timestamp(c).subscribe(function(a){var e,k;"E"===a.value.kind?(i=[],i.push(a),h=a.value.error,k=!j):(i.push({value:a.value,timestamp:a.timestamp+b}),k=!f,f=!0),k&&(null!==h?d.onError(h):(e=new gc,g.setDisposable(e),e.setDisposable(c.scheduleRecursiveFuture(null,b,function(a,b){var e,g,k,l;if(null===h){j=!0;do k=null,i.length>0&&i[0].timestamp-c.now()<=0&&(k=i.shift().value),null!==k&&k.accept(d);while(null!==k);l=!1,g=0,i.length>0?(l=!0,g=Math.max(0,i[0].timestamp-c.now())):f=!1,e=h,j=!1,null!==e?d.onError(e):l&&b(null,g)}}))))}),new ic(e,g)},a)}function xa(a,b,c){return fd(function(){return wa(a,b-c.now(),c)})}function ya(a,b,c){var d,e;return Xa(b)?e=b:(d=b,e=c),new ug(function(b){function c(){i.setDisposable(a.subscribe(function(a){var c=Za(e)(a);if(c===Ya)return b.onError(c.e);var d=new gc;g.add(d),d.setDisposable(c.subscribe(function(){b.onNext(a),g.remove(d),f()},function(a){b.onError(a)},function(){b.onNext(a),g.remove(d),f()}))},function(a){b.onError(a)},function(){h=!0,i.dispose(),f()}))}function f(){h&&0===g.length&&b.onCompleted()}var g=new $b,h=!1,i=new hc;return d?i.setDisposable(d.subscribe(c,function(a){b.onError(a)},c)):c(),new ic(i,g)},this)}function za(a,b){return new ug(function(c){var d,e=!1,f=new hc,g=0,h=a.subscribe(function(a){var h=Za(b)(a);if(h===Ya)return c.onError(h.e);Wa(h)&&(h=cd(h)),e=!0,d=a,g++;var i=g,j=new gc;f.setDisposable(j),j.setDisposable(h.subscribe(function(){e&&g===i&&c.onNext(d),e=!1,j.dispose()},function(a){c.onError(a)},function(){e&&g===i&&c.onNext(d),e=!1,j.dispose()}))},function(a){f.dispose(),c.onError(a),e=!1,g++},function(){f.dispose(),e&&c.onNext(d),c.onCompleted(),e=!1,g++});return new ic(h,f)},a)}function O(a){return a.toArray()}function O(a){return a.toArray()}function Aa(a,b,c,d){return Xa(b)&&(d=c,c=b,b=rd()),Rc.isObservable(d)||(d=xd(new Yf)),new ug(function(e){function f(a){function b(){return l=c===k}var c=k,f=new gc;i.setDisposable(f),f.setDisposable(a.subscribe(function(){b()&&h.setDisposable(d.subscribe(e)),f.dispose()},function(a){b()&&e.onError(a)},function(){b()&&h.setDisposable(d.subscribe(e))}))}function g(){var a=!l;return a&&k++,a}var h=new hc,i=new hc,j=new gc;h.setDisposable(j);var k=0,l=!1;return f(b),j.setDisposable(a.subscribe(function(a){if(g()){e.onNext(a);var b=Za(c)(a);if(b===Ya)return e.onError(b.e);f(Wa(b)?cd(b):b)}},function(a){g()&&e.onError(a)},function(){g()&&e.onCompleted()})),new ic(h,i)},a)}function Ba(a,b,c,d){return oc(c)&&(d=c,c=xd(new Yf)),c instanceof Error&&(c=xd(c)),oc(d)||(d=Ac),Rc.isObservable(c)||(c=xd(new Yf)),new ug(function(e){function f(){var a=g;k.setDisposable(d.scheduleFuture(null,b,function(){j=g===a,j&&(Wa(c)&&(c=cd(c)),i.setDisposable(c.subscribe(e)))}))}var g=0,h=new gc,i=new hc,j=!1,k=new hc;return i.setDisposable(h),f(),h.setDisposable(a.subscribe(function(a){j||(g++,e.onNext(a),f())},function(a){j||(g++,e.onError(a))},function(){j||(g++,e.onCompleted())})),new ic(i,k)},a)}function Ca(a){return{"@@transducer/init":function(){return a},"@@transducer/step":function(a,b){return a.onNext(b)},"@@transducer/result":function(a){return a.onCompleted()}}}function Da(a){this.predicate=a}function Ea(a){this.predicate=a}function Fa(a,b){var c=this;this.scheduler=a,this.messages=b,this.subscriptions=[],this.observers=[];for(var d=0,e=this.messages.length;e>d;d++){var f=this.messages[d],g=f.value;!function(b){a.scheduleAbsolute(null,f.time,function(){for(var a=c.observers.slice(0),d=0,e=a.length;e>d;d++)b.accept(a[d]);return cc})}(g)}}var Ga={"function":!0,object:!0},Ha=Ga[typeof exports]&&exports&&!exports.nodeType?exports:null,Ia=Ga[typeof module]&&module&&!module.nodeType?module:null,Ja=b(Ha&&Ia&&"object"==typeof global&&global),Ka=b(Ga[typeof self]&&self),La=b(Ga[typeof window]&&window),Ma=Ia&&Ia.exports===Ha?Ha:null,Na=b(Ga[typeof this]&&this),Oa=Ja||La!==(Na&&Na.window)&&La||Ka||Na||Function("return this")(),Pa={internals:{},config:{Promise:Oa.Promise},helpers:{}},Qa=Pa.helpers.noop=function(){},Ra=Pa.helpers.identity=function(a){return a},Sa=Pa.helpers.defaultNow=Date.now,Ta=Pa.helpers.defaultComparer=function(a,b){return Ub(a,b)},Ua=Pa.helpers.defaultSubComparer=function(a,b){return a>b?1:b>a?-1:0},Va=(Pa.helpers.defaultKeySerializer=function(a){return a.toString()},Pa.helpers.defaultError=function(a){throw a}),Wa=Pa.helpers.isPromise=function(a){return!!a&&"function"!=typeof a.subscribe&&"function"==typeof a.then},Xa=Pa.helpers.isFunction=function(){var a=function(a){return"function"==typeof a||!1};return a(/x/)&&(a=function(a){return"function"==typeof a&&"[object Function]"==toString.call(a)}),a}(),Ya={e:{}},Za=Pa.internals.tryCatch=function(a){if(!Xa(a))throw new TypeError("fn must be a function");return d(a)};Pa.config.longStackSupport=!1;var $a=!1,_a=Za(function(){throw new Error})();$a=!!_a.e&&!!_a.e.stack;var ab,bb=j(),cb="From previous event:",db=Pa.EmptyError=function(){this.message="Sequence contains no elements.",Error.call(this)};db.prototype=Object.create(Error.prototype),db.prototype.name="EmptyError";var eb=Pa.ObjectDisposedError=function(){this.message="Object has been disposed",Error.call(this)};eb.prototype=Object.create(Error.prototype),eb.prototype.name="ObjectDisposedError";var fb=Pa.ArgumentOutOfRangeError=function(){this.message="Argument out of range",Error.call(this)};fb.prototype=Object.create(Error.prototype),fb.prototype.name="ArgumentOutOfRangeError";var gb=Pa.NotSupportedError=function(a){this.message=a||"This operation is not supported",Error.call(this)};gb.prototype=Object.create(Error.prototype),gb.prototype.name="NotSupportedError";var hb=Pa.NotImplementedError=function(a){this.message=a||"This operation is not implemented",Error.call(this)};hb.prototype=Object.create(Error.prototype),hb.prototype.name="NotImplementedError";var ib=Pa.helpers.notImplemented=function(){throw new hb},jb=(Pa.helpers.notSupported=function(){throw new gb},"function"==typeof Symbol&&Symbol.iterator||"_es6shim_iterator_");Oa.Set&&"function"==typeof(new Oa.Set)["@@iterator"]&&(jb="@@iterator");var kb=Pa.doneEnumerator={done:!0,value:a},lb=Pa.helpers.isIterable=function(b){return b&&b[jb]!==a},mb=Pa.helpers.isArrayLike=function(b){return b&&b.length!==a};Pa.helpers.iterator=jb;var nb=Pa.internals.bindCallback=function(a,b,c){if("undefined"==typeof b)return a;switch(c){case 0:return function(){return a.call(b)};case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}},ob=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],pb=(ob.length,"[object Arguments]"),qb="[object Array]",rb="[object Boolean]",sb="[object Date]",tb="[object Error]",ub="[object Function]",vb="[object Map]",wb="[object Number]",xb="[object Object]",yb="[object RegExp]",zb="[object Set]",Ab="[object String]",Bb="[object WeakMap]",Cb="[object ArrayBuffer]",Db="[object Float32Array]",Eb="[object Float64Array]",Fb="[object Int8Array]",Gb="[object Int16Array]",Hb="[object Int32Array]",Ib="[object Uint8Array]",Jb="[object Uint8ClampedArray]",Kb="[object Uint16Array]",Lb="[object Uint32Array]",Mb={};Mb[Db]=Mb[Eb]=Mb[Fb]=Mb[Gb]=Mb[Hb]=Mb[Ib]=Mb[Jb]=Mb[Kb]=Mb[Lb]=!0,Mb[pb]=Mb[qb]=Mb[Cb]=Mb[rb]=Mb[sb]=Mb[tb]=Mb[ub]=Mb[vb]=Mb[wb]=Mb[xb]=Mb[yb]=Mb[zb]=Mb[Ab]=Mb[Bb]=!1;var Nb=Object.prototype,Ob=Nb.hasOwnProperty,Pb=Nb.toString,Qb=Math.pow(2,53)-1,Rb=Object.keys||function(){var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=c.length;return function(e){if("object"!=typeof e&&("function"!=typeof e||null===e))throw new TypeError("Object.keys called on non-object");var f,g,h=[];for(f in e)a.call(e,f)&&h.push(f);if(b)for(g=0;d>g;g++)a.call(e,c[g])&&h.push(c[g]);return h}}(),aa=Pa.internals.isObject=function(a){var b=typeof a;return!!a&&("object"===b||"function"===b)},Sb=function(){try{Object({toString:0}+"")}catch(a){return function(){return!1}}return function(a){return"function"!=typeof a.toString&&"string"==typeof(a+"")}}(),Tb=Array.isArray||function(a){return n(a)&&o(a.length)&&Pb.call(a)===qb},Ub=Pa.internals.isEqual=function(a,b){return t(a,b)},Vb=({}.hasOwnProperty,Array.prototype.slice,Pa.internals.inherits=function(a,b){function c(){this.constructor=a}c.prototype=b.prototype,a.prototype=new c}),Wb=Pa.internals.addProperties=function(a){for(var b=[],c=1,d=arguments.length;d>c;c++)b.push(arguments[c]);for(var e=0,f=b.length;f>e;e++){var g=b[e];for(var h in g)a[h]=g[h]}},Xb=Pa.internals.addRef=function(a,b){return new ug(function(c){return new ic(b.getDisposable(),a.subscribe(c))})};v.prototype.compareTo=function(a){var b=this.value.compareTo(a.value);return 0===b&&(b=this.id-a.id),b};var Yb=Pa.internals.PriorityQueue=function(a){this.items=new Array(a),this.length=0},Zb=Yb.prototype;Zb.isHigherPriority=function(a,b){return this.items[a].compareTo(this.items[b])<0},Zb.percolate=function(a){if(!(a>=this.length||0>a)){var b=a-1>>1;if(!(0>b||b===a)&&this.isHigherPriority(a,b)){var c=this.items[a];this.items[a]=this.items[b],this.items[b]=c,this.percolate(b)}}},Zb.heapify=function(a){if(+a||(a=0),!(a>=this.length||0>a)){var b=2*a+1,c=2*a+2,d=a;if(b<this.length&&this.isHigherPriority(b,d)&&(d=b),c<this.length&&this.isHigherPriority(c,d)&&(d=c),d!==a){var e=this.items[a];this.items[a]=this.items[d],this.items[d]=e,this.heapify(d)}}},Zb.peek=function(){return this.items[0].value},Zb.removeAt=function(b){this.items[b]=this.items[--this.length],this.items[this.length]=a,this.heapify()},Zb.dequeue=function(){var a=this.peek();return this.removeAt(0),a},Zb.enqueue=function(a){var b=this.length++;this.items[b]=new v(Yb.count++,a),this.percolate(b)},Zb.remove=function(a){for(var b=0;b<this.length;b++)if(this.items[b].value===a)return this.removeAt(b),!0;return!1},Yb.count=0;var $b=Pa.CompositeDisposable=function(){var a,b,c=[];if(Array.isArray(arguments[0]))c=arguments[0];else for(b=arguments.length,c=new Array(b),a=0;b>a;a++)c[a]=arguments[a];this.disposables=c,this.isDisposed=!1,this.length=c.length},_b=$b.prototype;_b.add=function(a){this.isDisposed?a.dispose():(this.disposables.push(a),this.length++)},_b.remove=function(a){var b=!1;if(!this.isDisposed){var c=this.disposables.indexOf(a);-1!==c&&(b=!0,this.disposables.splice(c,1),this.length--,a.dispose())}return b},_b.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;for(var a=this.disposables.length,b=new Array(a),c=0;a>c;c++)b[c]=this.disposables[c];for(this.disposables=[],this.length=0,c=0;a>c;c++)b[c].dispose()}};var ac=Pa.Disposable=function(a){this.isDisposed=!1,this.action=a||Qa};ac.prototype.dispose=function(){this.isDisposed||(this.action(),this.isDisposed=!0)};var bc=ac.create=function(a){return new ac(a)},cc=ac.empty={dispose:Qa},dc=ac.isDisposable=function(a){return a&&Xa(a.dispose)},ec=ac.checkDisposed=function(a){if(a.isDisposed)throw new eb},fc=ac._fixup=function(a){return dc(a)?a:cc},gc=Pa.SingleAssignmentDisposable=function(){this.isDisposed=!1,this.current=null};gc.prototype.getDisposable=function(){return this.current},gc.prototype.setDisposable=function(a){if(this.current)throw new Error("Disposable has already been assigned");var b=this.isDisposed;!b&&(this.current=a),b&&a&&a.dispose()},gc.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var a=this.current;this.current=null,a&&a.dispose()}};var hc=Pa.SerialDisposable=function(){this.isDisposed=!1,this.current=null};hc.prototype.getDisposable=function(){return this.current},hc.prototype.setDisposable=function(a){var b=this.isDisposed;if(!b){var c=this.current;this.current=a}c&&c.dispose(),b&&a&&a.dispose()},hc.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var a=this.current;this.current=null}a&&a.dispose()};var ic=Pa.BinaryDisposable=function(a,b){this._first=a,this._second=b,this.isDisposed=!1};ic.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var a=this._first;this._first=null,a&&a.dispose();var b=this._second;this._second=null,b&&b.dispose()}};var jc=Pa.NAryDisposable=function(a){this._disposables=a,this.isDisposed=!1};jc.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;for(var a=0,b=this._disposables.length;b>a;a++)this._disposables[a].dispose();this._disposables.length=0}};var kc=Pa.RefCountDisposable=function(){function a(a){this.disposable=a,this.disposable.count++,this.isInnerDisposed=!1}function b(a){this.underlyingDisposable=a,this.isDisposed=!1,this.isPrimaryDisposed=!1,this.count=0}return a.prototype.dispose=function(){this.disposable.isDisposed||this.isInnerDisposed||(this.isInnerDisposed=!0,this.disposable.count--,0===this.disposable.count&&this.disposable.isPrimaryDisposed&&(this.disposable.isDisposed=!0,this.disposable.underlyingDisposable.dispose()))},b.prototype.dispose=function(){this.isDisposed||this.isPrimaryDisposed||(this.isPrimaryDisposed=!0,0===this.count&&(this.isDisposed=!0,this.underlyingDisposable.dispose()))},b.prototype.getDisposable=function(){return this.isDisposed?cc:new a(this)},b}();w.prototype.dispose=function(){this.scheduler.schedule(this,x)};var lc=Pa.internals.ScheduledItem=function(a,b,c,d,e){this.scheduler=a,this.state=b,this.action=c,this.dueTime=d,this.comparer=e||Ua,this.disposable=new gc};lc.prototype.invoke=function(){this.disposable.setDisposable(this.invokeCore())},lc.prototype.compareTo=function(a){return this.comparer(this.dueTime,a.dueTime)},lc.prototype.isCancelled=function(){return this.disposable.isDisposed},lc.prototype.invokeCore=function(){return fc(this.action(this.scheduler,this.state))};var mc=Pa.Scheduler=function(){function a(){}a.isScheduler=function(b){return b instanceof a};var b=a.prototype;return b.schedule=function(a,b){throw new hb},b.scheduleFuture=function(b,c,d){var e=c;return e instanceof Date&&(e-=this.now()),e=a.normalize(e),0===e?this.schedule(b,d):this._scheduleFuture(b,e,d)},b._scheduleFuture=function(a,b,c){throw new hb},a.now=Sa,a.prototype.now=Sa,a.normalize=function(a){return 0>a&&(a=0),a},a}(),nc=mc.normalize,oc=mc.isScheduler;!function(a){function b(a,b){function c(b){function d(a,b){return g?f.remove(i):h=!0,e(b,c),cc}var g=!1,h=!1,i=a.schedule(b,d);h||(f.add(i),g=!0)}var d=b[0],e=b[1],f=new $b;return e(d,c),f}function c(a,b){function c(b,d){function g(a,b){return h?f.remove(j):i=!0,e(b,c),cc}var h=!1,i=!1,j=a.scheduleFuture(b,d,g);i||(f.add(j),h=!0)}var d=b[0],e=b[1],f=new $b;return e(d,c),f}a.scheduleRecursive=function(a,c){return this.schedule([a,c],b)},a.scheduleRecursiveFuture=function(a,b,d){return this.scheduleFuture([a,d],b,c)}}(mc.prototype),function(a){a.schedulePeriodic=function(a,b,c){if("undefined"==typeof Oa.setInterval)throw new gb;b=nc(b);var d=a,e=Oa.setInterval(function(){d=c(d)},b);return bc(function(){Oa.clearInterval(e)})}}(mc.prototype),function(a){a.catchError=a["catch"]=function(a){return new Bc(this,a)}}(mc.prototype);var pc,qc,rc=Pa.internals.SchedulePeriodicRecursive=function(){function a(a){return function(b,c){c(0,a._period);var d=Za(a._action)(a._state);d===Ya&&(a._cancel.dispose(),e(d.e)),a._state=d}}function b(a,b,c,d){this._scheduler=a,this._state=b,this._period=c,this._action=d}return b.prototype.start=function(){var b=new gc;return this._cancel=b,b.setDisposable(this._scheduler.scheduleRecursiveFuture(0,this._period,a(this))),b},b}(),sc=function(a){function b(){a.call(this)}return Vb(b,a),b.prototype.schedule=function(a,b){return fc(b(this,a))},b}(mc),tc=mc.immediate=new sc,uc=function(a){function b(){for(;d.length>0;){var a=d.dequeue();!a.isCancelled()&&a.invoke()}}function c(){a.call(this)}var d;return Vb(c,a),c.prototype.schedule=function(a,c){var f=new lc(this,a,c,this.now());if(d)d.enqueue(f);else{d=new Yb(4),d.enqueue(f);var g=Za(b)();d=null,g===Ya&&e(g.e)}return f.disposable},c.prototype.scheduleRequired=function(){return!d},c}(mc),vc=mc.currentThread=new uc,wc=function(){var a,b=Qa;if(Oa.setTimeout)a=Oa.setTimeout,b=Oa.clearTimeout;else{if(!Oa.WScript)throw new gb;a=function(a,b){Oa.WScript.Sleep(b),a()}}return{setTimeout:a,clearTimeout:b}}(),xc=wc.setTimeout,yc=wc.clearTimeout;!function(){function a(b){if(f)xc(function(){a(b)},0);else{var c=d[b];if(c){f=!0;var g=Za(c)();qc(b),f=!1,g===Ya&&e(g.e)}}}function b(){if(!Oa.postMessage||Oa.importScripts)return!1;var a=!1,b=Oa.onmessage;return Oa.onmessage=function(){a=!0},Oa.postMessage("","*"),Oa.onmessage=b,a}var c=1,d={},f=!1;qc=function(a){delete d[a]};var g=new RegExp("^"+String(toString).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),h="function"==typeof(h=Ja&&Ma&&Ja.setImmediate)&&!g.test(h)&&h;if(Xa(h))pc=function(b){var e=c++;return d[e]=b,h(function(){a(e)}),e};else if("undefined"!=typeof process&&"[object process]"==={}.toString.call(process))pc=function(b){var e=c++;return d[e]=b,process.nextTick(function(){a(e)}),e};else if(b()){var i="ms.rx.schedule"+Math.random(),j=function(b){"string"==typeof b.data&&b.data.substring(0,i.length)===i&&a(b.data.substring(i.length))};Oa.addEventListener("message",j,!1),pc=function(a){var b=c++;return d[b]=a,Oa.postMessage(i+currentId,"*"),b}}else if(Oa.MessageChannel){var k=new Oa.MessageChannel;k.port1.onmessage=function(b){a(b.data)},pc=function(a){var b=c++;return d[b]=a,k.port2.postMessage(b),b}}else pc="document"in Oa&&"onreadystatechange"in Oa.document.createElement("script")?function(b){var e=Oa.document.createElement("script"),f=c++;return d[f]=b,e.onreadystatechange=function(){a(f),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},Oa.document.documentElement.appendChild(e),f}:function(b){var e=c++;return d[e]=b,xc(function(){a(e)},0),e}}();var zc=function(a){function b(){a.call(this)}function c(a,b,c,d){return function(){a.setDisposable(ac._fixup(b(c,d)))}}function d(a){this._id=a,this.isDisposed=!1}function e(a){this._id=a,this.isDisposed=!1}return Vb(b,a),d.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,qc(this._id))},e.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,yc(this._id))},b.prototype.schedule=function(a,b){var e=new gc,f=pc(c(e,b,this,a));return new ic(e,new d(f))},b.prototype._scheduleFuture=function(a,b,d){if(0===b)return this.schedule(a,d);var f=new gc,g=xc(c(f,d,this,a),b);return new ic(f,new e(g))},b}(mc),Ac=mc["default"]=mc.async=new zc,Bc=function(a){function b(b,c){this._scheduler=b,this._handler=c,this._recursiveOriginal=null,this._recursiveWrapper=null,a.call(this)}return Vb(b,a),b.prototype.schedule=function(a,b){return this._scheduler.schedule(a,this._wrap(b))},b.prototype._scheduleFuture=function(a,b,c){return this._scheduler.schedule(a,b,this._wrap(c))},b.prototype.now=function(){return this._scheduler.now()},b.prototype._clone=function(a){return new b(a,this._handler)},b.prototype._wrap=function(a){var b=this;return function(c,d){var f=Za(a)(b._getRecursiveWrapper(c),d);return f===Ya?(b._handler(f.e)||e(f.e),cc):fc(f)}},b.prototype._getRecursiveWrapper=function(a){if(this._recursiveOriginal!==a){this._recursiveOriginal=a;var b=this._clone(a);b._recursiveOriginal=a,b._recursiveWrapper=b,this._recursiveWrapper=b}return this._recursiveWrapper},b.prototype.schedulePeriodic=function(a,b,c){var d=this,f=!1,g=new gc;return g.setDisposable(this._scheduler.schedulePeriodic(a,b,function(a){if(f)return null;var b=Za(c)(a);return b===Ya?(f=!0,d._handler(b.e)||e(b.e),g.dispose(),null):b})),g},b}(mc),Cc=Pa.Notification=function(){function a(){}return a.prototype._accept=function(a,b,c){throw new hb},a.prototype._acceptObserver=function(a,b,c){throw new hb},a.prototype.accept=function(a,b,c){return a&&"object"==typeof a?this._acceptObserver(a):this._accept(a,b,c)},a.prototype.toObservable=function(a){var b=this;return oc(a)||(a=tc),new ug(function(c){return a.schedule(b,function(a,b){b._acceptObserver(c),"N"===b.kind&&c.onCompleted()})})},a}(),Dc=function(a){function b(a){this.value=a,this.kind="N"}return Vb(b,a),b.prototype._accept=function(a){return a(this.value)},b.prototype._acceptObserver=function(a){return a.onNext(this.value)},b.prototype.toString=function(){return"OnNext("+this.value+")"},b}(Cc),Ec=function(a){function b(a){this.error=a,this.kind="E"}return Vb(b,a),b.prototype._accept=function(a,b){return b(this.error)},b.prototype._acceptObserver=function(a){return a.onError(this.error)},b.prototype.toString=function(){return"OnError("+this.error+")"},b}(Cc),Fc=function(a){function b(){this.kind="C"}return Vb(b,a),b.prototype._accept=function(a,b,c){return c()},b.prototype._acceptObserver=function(a){return a.onCompleted()},b.prototype.toString=function(){return"OnCompleted()"},b}(Cc),Gc=Cc.createOnNext=function(a){return new Dc(a)},Hc=Cc.createOnError=function(a){return new Ec(a)},Ic=Cc.createOnCompleted=function(){return new Fc},Jc=Pa.Observer=function(){};Jc.prototype.toNotifier=function(){var a=this;return function(b){return b.accept(a)}},Jc.prototype.asObserver=function(){var a=this;return new Nc(function(b){a.onNext(b)},function(b){a.onError(b)},function(){a.onCompleted()})},Jc.prototype.checked=function(){return new Oc(this)};var Kc=Jc.create=function(a,b,c){return a||(a=Qa),b||(b=Va),c||(c=Qa),new Nc(a,b,c)};Jc.fromNotifier=function(a,b){var c=nb(a,b,1);return new Nc(function(a){return c(Gc(a))},function(a){return c(Hc(a))},function(){return c(Ic())})},Jc.prototype.notifyOn=function(a){return new Qc(a,this)},Jc.prototype.makeSafe=function(a){return new AnonymousSafeObserver(this._onNext,this._onError,this._onCompleted,a)};var Lc,Mc=Pa.internals.AbstractObserver=function(a){function b(){this.isStopped=!1}return Vb(b,a),b.prototype.next=ib,b.prototype.error=ib,b.prototype.completed=ib,b.prototype.onNext=function(a){!this.isStopped&&this.next(a)},b.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.error(a))},b.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.completed())},b.prototype.dispose=function(){this.isStopped=!0},b.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.error(a),
!0)},b}(Jc),Nc=Pa.AnonymousObserver=function(a){function b(b,c,d){a.call(this),this._onNext=b,this._onError=c,this._onCompleted=d}return Vb(b,a),b.prototype.next=function(a){this._onNext(a)},b.prototype.error=function(a){this._onError(a)},b.prototype.completed=function(){this._onCompleted()},b}(Mc),Oc=function(a){function b(b){a.call(this),this._observer=b,this._state=0}Vb(b,a);var c=b.prototype;return c.onNext=function(a){this.checkAccess();var b=Za(this._observer.onNext).call(this._observer,a);this._state=0,b===Ya&&e(b.e)},c.onError=function(a){this.checkAccess();var b=Za(this._observer.onError).call(this._observer,a);this._state=2,b===Ya&&e(b.e)},c.onCompleted=function(){this.checkAccess();var a=Za(this._observer.onCompleted).call(this._observer);this._state=2,a===Ya&&e(a.e)},c.checkAccess=function(){if(1===this._state)throw new Error("Re-entrancy detected");if(2===this._state)throw new Error("Observer completed");0===this._state&&(this._state=1)},b}(Jc),Pc=Pa.internals.ScheduledObserver=function(a){function b(b,c){a.call(this),this.scheduler=b,this.observer=c,this.isAcquired=!1,this.hasFaulted=!1,this.queue=[],this.disposable=new hc}function c(a,b){return function(){a.onNext(b)}}function d(a,b){return function(){a.onError(b)}}function f(a){return function(){a.onCompleted()}}function g(a,b){var c;if(!(a.queue.length>0))return void(a.isAcquired=!1);c=a.queue.shift();var d=Za(c)();return d===Ya?(a.queue=[],a.hasFaulted=!0,e(d.e)):void b(a)}return Vb(b,a),b.prototype.next=function(a){this.queue.push(c(this.observer,a))},b.prototype.error=function(a){this.queue.push(d(this.observer,a))},b.prototype.completed=function(){this.queue.push(f(this.observer))},b.prototype.ensureActive=function(){var a=!1;!this.hasFaulted&&this.queue.length>0&&(a=!this.isAcquired,this.isAcquired=!0),a&&this.disposable.setDisposable(this.scheduler.scheduleRecursive(this,g))},b.prototype.dispose=function(){a.prototype.dispose.call(this),this.disposable.dispose()},b}(Mc),Qc=function(a){function b(b,c,d){a.call(this,b,c),this._cancel=d}return Vb(b,a),b.prototype.next=function(b){a.prototype.next.call(this,b),this.ensureActive()},b.prototype.error=function(b){a.prototype.error.call(this,b),this.ensureActive()},b.prototype.completed=function(){a.prototype.completed.call(this),this.ensureActive()},b.prototype.dispose=function(){a.prototype.dispose.call(this),this._cancel&&this._cancel.dispose(),this._cancel=null},b}(Pc),Rc=Pa.Observable=function(){function a(a,b){return function(c){var d=c.onError;return c.onError=function(b){f(b,a),d.call(c,b)},b.call(a,c)}}function b(){if(Pa.config.longStackSupport&&$a){var b=this._subscribe,c=Za(e)(new Error).e;this.stack=c.stack.substring(c.stack.indexOf("\n")+1),this._subscribe=a(this,b)}}return Lc=b.prototype,b.isObservable=function(a){return a&&Xa(a.subscribe)},Lc.subscribe=Lc.forEach=function(a,b,c){return this._subscribe("object"==typeof a?a:Kc(a,b,c))},Lc.subscribeOnNext=function(a,b){return this._subscribe(Kc("undefined"!=typeof b?function(c){a.call(b,c)}:a))},Lc.subscribeOnError=function(a,b){return this._subscribe(Kc(null,"undefined"!=typeof b?function(c){a.call(b,c)}:a))},Lc.subscribeOnCompleted=function(a,b){return this._subscribe(Kc(null,null,"undefined"!=typeof b?function(){a.call(b)}:a))},b}(),Sc=Pa.ObservableBase=function(a){function b(a){return a&&Xa(a.dispose)?a:Xa(a)?bc(a):cc}function c(a,c){var d=c[0],f=c[1],g=Za(f.subscribeCore).call(f,d);g!==Ya||d.fail(Ya.e)||e(Ya.e),d.setDisposable(b(g))}function d(){a.call(this)}return Vb(d,a),d.prototype._subscribe=function(a){var b=new vg(a),d=[b,this];return vc.scheduleRequired()?vc.schedule(d,c):c(null,d),b},d.prototype.subscribeCore=ib,d}(Rc),Tc=Pa.FlatMapObservable=function(a){function b(b,c,d,e){this.resultSelector=Xa(d)?d:null,this.selector=nb(Xa(c)?c:function(){return c},e,3),this.source=b,a.call(this)}function c(a,b,c,d){this.i=0,this.selector=b,this.resultSelector=c,this.source=d,this.o=a,Mc.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new c(a,this.selector,this.resultSelector,this))},Vb(c,Mc),c.prototype._wrapResult=function(a,b,c){return this.resultSelector?a.map(function(a,d){return this.resultSelector(b,a,c,d)},this):a},c.prototype.next=function(a){var b=this.i++,c=Za(this.selector)(a,b,this.source);return c===Ya?this.o.onError(c.e):(Wa(c)&&(c=cd(c)),(mb(c)||lb(c))&&(c=Rc.from(c)),void this.o.onNext(this._wrapResult(c,a,b)))},c.prototype.error=function(a){this.o.onError(a)},c.prototype.completed=function(){this.o.onCompleted()},b}(Sc),Uc=Pa.internals.Enumerable=function(){};y.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this._s.isDisposed=!0)};var Vc=function(a){function b(b){this.sources=b,a.call(this)}function c(a,b){if(!a.isDisposed){var c=Za(a.e.next).call(a.e);if(c===Ya)return a.o.onError(c.e);if(c.done)return a.o.onCompleted();var e=c.value;Wa(e)&&(e=cd(e));var f=new gc;a.subscription.setDisposable(f),f.setDisposable(e.subscribe(new d(a,b)))}}function d(a,b){this._state=a,this._recurse=b,Mc.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new hc,d={isDisposed:!1,o:a,subscription:b,e:this.sources[jb]()},e=vc.scheduleRecursive(d,c);return new jc([b,e,new y(d)])},Vb(d,Mc),d.prototype.next=function(a){this._state.o.onNext(a)},d.prototype.error=function(a){this._state.o.onError(a)},d.prototype.completed=function(){this._recurse(this._state)},b}(Sc);Uc.prototype.concat=function(){return new Vc(this)};var Wc=function(a){function b(b){this.sources=b,a.call(this)}function c(a,b){if(!a.isDisposed){var c=Za(a.e.next).call(a.e);if(c===Ya)return a.o.onError(c.e);if(c.done)return null!==a.lastError?a.o.onError(a.lastError):a.o.onCompleted();var e=c.value;Wa(e)&&(e=cd(e));var f=new gc;a.subscription.setDisposable(f),f.setDisposable(e.subscribe(new d(a,b)))}}function d(a,b){this._state=a,this._recurse=b,Mc.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new hc,d={isDisposed:!1,e:this.sources[jb](),subscription:b,lastError:null,o:a},e=vc.scheduleRecursive(d,c);return new jc([b,e,new y(d)])},Vb(d,Mc),d.prototype.next=function(a){this._state.o.onNext(a)},d.prototype.error=function(a){this._state.lastError=a,this._recurse(this._state)},d.prototype.completed=function(){this._state.o.onCompleted()},b}(Sc);Uc.prototype.catchError=function(){return new Wc(this)},Uc.prototype.catchErrorWhen=function(a){var b=this;return new ug(function(c){var d,e=new yg,f=new yg,g=a(e),h=g.subscribe(f),i=b[jb](),j={isDisposed:!1},k=new hc,l=vc.scheduleRecursive(null,function(a,b){if(!j.isDisposed){var g=Za(i.next).call(i);if(g===Ya)return c.onError(g.e);if(g.done)return void(d?c.onError(d):c.onCompleted());var h=g.value;Wa(h)&&(h=cd(h));var l=new gc,m=new gc;k.setDisposable(new ic(m,l)),l.setDisposable(h.subscribe(function(a){c.onNext(a)},function(a){m.setDisposable(f.subscribe(b,function(a){c.onError(a)},function(){c.onCompleted()})),e.onNext(a)},function(){c.onCompleted()}))}});return new jc([h,k,l,new y(j)])})};var Xc=function(a){function b(a,b){this.v=a,this.c=null==b?-1:b}function c(a){this.v=a.v,this.l=a.c}return Vb(b,a),b.prototype[jb]=function(){return new c(this)},c.prototype.next=function(){return 0===this.l?kb:(this.l>0&&this.l--,{done:!1,value:this.v})},b}(Uc),Yc=Uc.repeat=function(a,b){return new Xc(a,b)},Zc=function(a){function b(a,b,c){this.s=a,this.fn=b?nb(b,c,3):null}function c(a){this.i=-1,this.s=a.s,this.l=this.s.length,this.fn=a.fn}return Vb(b,a),b.prototype[jb]=function(){return new c(this)},c.prototype.next=function(){return++this.i<this.l?{done:!1,value:this.fn?this.fn(this.s[this.i],this.i,this.s):this.s[this.i]}:kb},b}(Uc),$c=Uc.of=function(a,b,c){return new Zc(a,b,c)},_c=function(a){function b(b,c){this.source=b,this._s=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Qc(this._s,a))},b}(Sc);Lc.observeOn=function(a){return new _c(this,a)};var ad=function(a){function b(b,c){this.source=b,this._s=c,a.call(this)}function c(a,b){var c=b[0],d=b[1],e=b[2];d.setDisposable(new w(a,c.subscribe(e)))}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new gc,d=new hc;return d.setDisposable(b),b.setDisposable(this._s.schedule([this.source,d,a],c)),d},b}(Sc);Lc.subscribeOn=function(a){return new ad(this,a)};var bd=function(a){function b(b,c){this._p=b,this._s=c,a.call(this)}function c(a,b){var c=b[0],d=b[1];c.onNext(d),c.onCompleted()}function d(a,b){var c=b[0],d=b[1];c.onError(d)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new gc,e=this;return this._p.then(function(d){b.setDisposable(e._s.schedule([a,d],c))},function(c){b.setDisposable(e._s.schedule([a,c],d))}),b},b}(Sc),cd=Rc.fromPromise=function(a,b){return b||(b=Ac),new bd(a,b)};Lc.toPromise=function(a){if(a||(a=Pa.config.Promise),!a)throw new gb("Promise type not provided nor in Rx.config.Promise");var b=this;return new a(function(a,c){var d;b.subscribe(function(a){d=a},c,function(){a(d)})})};var dd=function(a){function b(b){this.source=b,a.call(this)}function c(a){this.o=a,this.a=[],Mc.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new c(a))},Vb(c,Mc),c.prototype.next=function(a){this.a.push(a)},c.prototype.error=function(a){this.o.onError(a)},c.prototype.completed=function(){this.o.onNext(this.a),this.o.onCompleted()},b}(Sc);Lc.toArray=function(){return new dd(this)},Rc.create=function(a,b){return new ug(a,b)};var ed=function(a){function b(b){this._f=b,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=Za(this._f)();return b===Ya?xd(b.e).subscribe(a):(Wa(b)&&(b=cd(b)),b.subscribe(a))},b}(Sc),fd=Rc.defer=function(a){return new ed(a)},gd=function(a){function b(b){this.scheduler=b,a.call(this)}function c(a,b){this.observer=a,this.scheduler=b}function d(a,b){return b.onCompleted(),cc}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new c(a,this.scheduler);return b.run()},c.prototype.run=function(){var a=this.observer;return this.scheduler===tc?d(null,a):this.scheduler.schedule(a,d)},b}(Sc),hd=new gd(tc),id=Rc.empty=function(a){return oc(a)||(a=tc),a===tc?hd:new gd(a)},jd=function(a){function b(b,c,d){this._iterable=b,this._fn=c,this._scheduler=d,a.call(this)}function c(a,b,c){return function(d,e){var f=Za(b.next).call(b);if(f===Ya)return a.onError(f.e);if(f.done)return a.onCompleted();var g=f.value;return Xa(c)&&(g=Za(c)(g,d),g===Ya)?a.onError(g.e):(a.onNext(g),void e(d+1))}}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=Object(this._iterable),d=E(b);return this._scheduler.scheduleRecursive(0,c(a,d,this._fn))},b}(Sc),kd=Math.pow(2,53)-1;z.prototype[jb]=function(){return new A(this._s)},A.prototype[jb]=function(){return this},A.prototype.next=function(){return this._i<this._l?{done:!1,value:this._s.charAt(this._i++)}:kb},B.prototype[jb]=function(){return new C(this._a)},C.prototype[jb]=function(){return this},C.prototype.next=function(){return this._i<this._l?{done:!1,value:this._a[this._i++]}:kb};var ld=Rc.from=function(a,b,c,d){if(null==a)throw new Error("iterable cannot be null.");if(b&&!Xa(b))throw new Error("mapFn when provided must be a function");if(b)var e=nb(b,c,2);return oc(d)||(d=vc),new jd(a,e,d)},md=function(a){function b(b,c){this._args=b,this._scheduler=c,a.call(this)}function c(a,b){var c=b.length;return function(d,e){c>d?(a.onNext(b[d]),e(d+1)):a.onCompleted()}}return Vb(b,a),b.prototype.subscribeCore=function(a){return this._scheduler.scheduleRecursive(0,c(a,this._args))},b}(Sc),nd=Rc.fromArray=function(a,b){return oc(b)||(b=vc),new md(a,b)},od=function(a){function b(b,c,d,e,f){this._initialState=b,this._cndFn=c,this._itrFn=d,this._resFn=e,this._s=f,a.call(this)}function c(a,b){if(a.first)a.first=!1;else if(a.newState=Za(a.self._itrFn)(a.newState),a.newState===Ya)return a.o.onError(a.newState.e);var c=Za(a.self._cndFn)(a.newState);if(c===Ya)return a.o.onError(c.e);if(c){var d=Za(a.self._resFn)(a.newState);if(d===Ya)return a.o.onError(d.e);a.o.onNext(d),b(a)}else a.o.onCompleted()}return Vb(b,a),b.prototype.subscribeCore=function(a){var b={o:a,self:this,first:!0,newState:this._initialState};return this._s.scheduleRecursive(b,c)},b}(Sc);Rc.generate=function(a,b,c,d,e){return oc(e)||(e=vc),new od(a,b,c,d,e)},Rc.of=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return new md(b,vc)},Rc.ofWithScheduler=function(a){for(var b=arguments.length,c=new Array(b-1),d=1;b>d;d++)c[d-1]=arguments[d];return new md(c,a)},Rc.ofArrayChanges=function(a){if(!Array.isArray(a))throw new TypeError("Array.observe only accepts arrays.");if("function"!=typeof Array.observe&&"function"!=typeof Array.unobserve)throw new TypeError("Array.observe is not supported on your platform");return new ug(function(b){function c(a){for(var c=0,d=a.length;d>c;c++)b.onNext(a[c])}return Array.observe(a,c),function(){Array.unobserve(a,c)}})},Rc.ofObjectChanges=function(a){if(null==a)throw new TypeError("object must not be null or undefined.");if("function"!=typeof Object.observe&&"function"!=typeof Object.unobserve)throw new TypeError("Object.observe is not supported on your platform");return new ug(function(b){function c(a){for(var c=0,d=a.length;d>c;c++)b.onNext(a[c])}return Object.observe(a,c),function(){Object.unobserve(a,c)}})};var pd=function(a){function b(){a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return cc},b}(Sc),qd=new pd,rd=Rc.never=function(){return qd},sd=function(a){function b(b,c){this._o=b,this._keys=Object.keys(b),this._scheduler=c,a.call(this)}function c(a,b,c){return function(d,e){if(d<c.length){var f=c[d];a.onNext([f,b[f]]),e(d+1)}else a.onCompleted()}}return Vb(b,a),b.prototype.subscribeCore=function(a){return this._scheduler.scheduleRecursive(0,c(a,this._o,this._keys))},b}(Sc);Rc.pairs=function(a,b){return b||(b=vc),new sd(a,b)};var td=function(a){function b(b,c,d){this.start=b,this.rangeCount=c,this.scheduler=d,a.call(this)}function c(a,b,c){return function(d,e){b>d?(c.onNext(a+d),e(d+1)):c.onCompleted()}}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.scheduler.scheduleRecursive(0,c(this.start,this.rangeCount,a))},b}(Sc);Rc.range=function(a,b,c){return oc(c)||(c=vc),new td(a,b,c)};var ud=function(a){function b(b,c,d){this.value=b,this.repeatCount=null==c?-1:c,this.scheduler=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new I(a,this);return b.run()},b}(Sc);I.prototype.run=function(){function a(a,d){return(-1===a||a>0)&&(b.onNext(c),a>0&&a--),0===a?b.onCompleted():void d(a)}var b=this.observer,c=this.parent.value;return this.parent.scheduler.scheduleRecursive(this.parent.repeatCount,a)},Rc.repeat=function(a,b,c){return oc(c)||(c=vc),new ud(a,b,c)};var vd=function(a){function b(b,c){this._value=b,this._scheduler=c,a.call(this)}function c(a,b){var c=b[0],d=b[1];return d.onNext(c),d.onCompleted(),cc}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=[this._value,a];return this._scheduler===tc?c(null,b):this._scheduler.schedule(b,c)},b}(Sc),wd=(Rc["return"]=Rc.just=function(a,b){return oc(b)||(b=tc),new vd(a,b)},function(a){function b(b,c){this._error=b,this._scheduler=c,a.call(this)}function c(a,b){var c=b[0],d=b[1];return d.onError(c),cc}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=[this._error,a];return this._scheduler===tc?c(null,b):this._scheduler.schedule(b,c)},b}(Sc)),xd=Rc["throw"]=function(a,b){return oc(b)||(b=tc),new wd(a,b)},yd=function(a){function b(b,c){this._resFn=b,this._obsFn=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=cc,c=Za(this._resFn)();if(c===Ya)return new ic(xd(c.e).subscribe(a),b);c&&(b=c);var d=Za(this._obsFn)(c);return d===Ya?new ic(xd(d.e).subscribe(a),b):new ic(d.subscribe(a),b)},b}(Sc);Rc.using=function(a,b){return new yd(a,b)},Lc.amb=function(a){var b=this;return new ug(function(c){function d(){f||(f=g,j.dispose())}function e(){f||(f=h,i.dispose())}var f,g="L",h="R",i=new gc,j=new gc;Wa(a)&&(a=cd(a));var k=Kc(function(a){d(),f===g&&c.onNext(a)},function(a){d(),f===g&&c.onError(a)},function(){d(),f===g&&c.onCompleted()}),l=Kc(function(a){e(),f===h&&c.onNext(a)},function(a){e(),f===h&&c.onError(a)},function(){e(),f===h&&c.onCompleted()});return i.setDisposable(b.subscribe(k)),j.setDisposable(a.subscribe(l)),new ic(i,j)})},Rc.amb=function(){var a,b=rd();if(Array.isArray(arguments[0]))a=arguments[0];else{var c=arguments.length;a=new Array(a);for(var d=0;c>d;d++)a[d]=arguments[d]}for(var d=0,c=a.length;c>d;d++)b=J(b,a[d]);return b};var zd=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new gc,c=new hc;return c.setDisposable(b),b.setDisposable(this.source.subscribe(new Ad(a,c,this._fn))),c},b}(Sc),Ad=function(a){function b(b,c,d){this._o=b,this._s=c,this._fn=d,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._o.onNext(a)},b.prototype.completed=function(){return this._o.onCompleted()},b.prototype.error=function(a){var b=Za(this._fn)(a);if(b===Ya)return this._o.onError(b.e);Wa(b)&&(b=cd(b));var c=new gc;this._s.setDisposable(c),c.setDisposable(b.subscribe(this._o))},b}(Mc);Lc["catch"]=function(a){return Xa(a)?new zd(this,a):Bd([this,a])};var Bd=Rc["catch"]=function(){var a;if(Array.isArray(arguments[0]))a=arguments[0];else{var b=arguments.length;a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}return $c(a).catchError()};Lc.combineLatest=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return Array.isArray(b[0])?b[0].unshift(this):b.unshift(this),Ed.apply(this,b)};var Cd=function(a){function b(b,c){this._params=b,this._cb=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){for(var b=this._params.length,c=new Array(b),d={hasValue:u(b,K),hasValueAll:!1,isDone:u(b,K),values:new Array(b)},e=0;b>e;e++){var f=this._params[e],g=new gc;c[e]=g,Wa(f)&&(f=cd(f)),g.setDisposable(f.subscribe(new Dd(a,e,this._cb,d)))}return new jc(c)},b}(Sc),Dd=function(a){function b(b,c,d,e){this._o=b,this._i=c,this._cb=d,this._state=e,a.call(this)}function c(a){return function(b,c){return c!==a}}return Vb(b,a),b.prototype.next=function(a){if(this._state.values[this._i]=a,this._state.hasValue[this._i]=!0,this._state.hasValueAll||(this._state.hasValueAll=this._state.hasValue.every(Ra))){var b=Za(this._cb).apply(null,this._state.values);if(b===Ya)return this._o.onError(b.e);this._o.onNext(b)}else this._state.isDone.filter(c(this._i)).every(Ra)&&this._o.onCompleted()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._state.isDone[this._i]=!0,this._state.isDone.every(Ra)&&this._o.onCompleted()},b}(Mc),Ed=Rc.combineLatest=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=Xa(b[a-1])?b.pop():L;return Array.isArray(b[0])&&(b=b[0]),new Cd(b,d)};Lc.concat=function(){for(var a=[],b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);return a.unshift(this),Hd.apply(null,a)};var Fd=function(a){function b(b,c){this._s=b,this._fn=c,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._s.o.onNext(a)},b.prototype.error=function(a){this._s.o.onError(a)},b.prototype.completed=function(){this._s.i++,this._fn(this._s)},b}(Mc),Gd=function(a){function b(b){this._sources=b,a.call(this)}function c(a,b){if(!a.disposable.isDisposed){if(a.i===a.sources.length)return a.o.onCompleted();var c=a.sources[a.i];Wa(c)&&(c=cd(c));var d=new gc;a.subscription.setDisposable(d),d.setDisposable(c.subscribe(new Fd(a,b)))}}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new hc,d=bc(Qa),e={o:a,i:0,subscription:b,disposable:d,sources:this._sources},f=tc.scheduleRecursive(e,c);return new jc([b,d,f])},b}(Sc),Hd=Rc.concat=function(){var a;if(Array.isArray(arguments[0]))a=arguments[0];else{a=new Array(arguments.length);for(var b=0,c=arguments.length;c>b;b++)a[b]=arguments[b]}return new Gd(a)};Lc.concatAll=function(){return this.merge(1)};var Id=function(a){function b(b,c){this.source=b,this.maxConcurrent=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new $b;return b.add(this.source.subscribe(new Jd(a,this.maxConcurrent,b))),b},b}(Sc),Jd=function(a){function b(b,c,d){this.o=b,this.max=c,this.g=d,this.done=!1,this.q=[],this.activeCount=0,a.call(this)}function c(b,c){this.parent=b,this.sad=c,a.call(this)}return Vb(b,a),b.prototype.handleSubscribe=function(a){var b=new gc;this.g.add(b),Wa(a)&&(a=cd(a)),b.setDisposable(a.subscribe(new c(this,b)))},b.prototype.next=function(a){this.activeCount<this.max?(this.activeCount++,this.handleSubscribe(a)):this.q.push(a)},b.prototype.error=function(a){this.o.onError(a)},b.prototype.completed=function(){this.done=!0,0===this.activeCount&&this.o.onCompleted()},Vb(c,a),c.prototype.next=function(a){this.parent.o.onNext(a)},c.prototype.error=function(a){this.parent.o.onError(a)},c.prototype.completed=function(){this.parent.g.remove(this.sad),this.parent.q.length>0?this.parent.handleSubscribe(this.parent.q.shift()):(this.parent.activeCount--,this.parent.done&&0===this.parent.activeCount&&this.parent.o.onCompleted())},b}(Mc);Lc.merge=function(a){return"number"!=typeof a?Kd(this,a):new Id(this,a)};var Kd=Rc.merge=function(){var a,b,c=[],d=arguments.length;if(arguments[0])if(oc(arguments[0]))for(a=arguments[0],b=1;d>b;b++)c.push(arguments[b]);else for(a=tc,b=0;d>b;b++)c.push(arguments[b]);else for(a=tc,b=1;d>b;b++)c.push(arguments[b]);return Array.isArray(c[0])&&(c=c[0]),H(a,c).mergeAll()},Ld=function(a){function b(b){this.source=b,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new $b,c=new gc;return b.add(c),c.setDisposable(this.source.subscribe(new Md(a,b))),b},b}(Sc),Md=function(a){function b(b,c){this.o=b,this.g=c,this.done=!1,a.call(this)}function c(b,c){this.parent=b,this.sad=c,a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=new gc;this.g.add(b),Wa(a)&&(a=cd(a)),b.setDisposable(a.subscribe(new c(this,b)))},b.prototype.error=function(a){this.o.onError(a)},b.prototype.completed=function(){this.done=!0,1===this.g.length&&this.o.onCompleted()},Vb(c,a),c.prototype.next=function(a){this.parent.o.onNext(a)},c.prototype.error=function(a){this.parent.o.onError(a)},c.prototype.completed=function(){this.parent.g.remove(this.sad),this.parent.done&&1===this.parent.g.length&&this.parent.o.onCompleted()},b}(Mc);Lc.mergeAll=function(){return new Ld(this)};var Nd=Pa.CompositeError=function(a){this.innerErrors=a,this.message="This contains multiple errors. Check the innerErrors",Error.call(this)};Nd.prototype=Object.create(Error.prototype),Nd.prototype.name="CompositeError";var Od=function(a){function b(b){this.source=b,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new $b,c=new gc,d={isStopped:!1,errors:[],o:a};return b.add(c),c.setDisposable(this.source.subscribe(new Pd(b,d))),b},b}(Sc),Pd=function(a){function b(b,c){this._group=b,this._state=c,a.call(this)}function c(a,b){0===b.length?a.onCompleted():1===b.length?a.onError(b[0]):a.onError(new Nd(b))}function d(b,c,d){this._inner=b,this._group=c,this._state=d,a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=new gc;this._group.add(b),Wa(a)&&(a=cd(a)),b.setDisposable(a.subscribe(new d(b,this._group,this._state)))},b.prototype.error=function(a){this._state.errors.push(a),this._state.isStopped=!0,1===this._group.length&&c(this._state.o,this._state.errors)},b.prototype.completed=function(){this._state.isStopped=!0,1===this._group.length&&c(this._state.o,this._state.errors)},Vb(d,a),d.prototype.next=function(a){this._state.o.onNext(a)},d.prototype.error=function(a){this._state.errors.push(a),this._group.remove(this._inner),this._state.isStopped&&1===this._group.length&&c(this._state.o,this._state.errors)},d.prototype.completed=function(){this._group.remove(this._inner),this._state.isStopped&&1===this._group.length&&c(this._state.o,this._state.errors)},b}(Mc);Rc.mergeDelayError=function(){var a;if(Array.isArray(arguments[0]))a=arguments[0];else{var b=arguments.length;a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}var d=H(null,a);return new Od(d)},Lc.onErrorResumeNext=function(a){if(!a)throw new Error("Second observable is required");return Sd([this,a])};var Qd=function(a){function b(b){this.sources=b,a.call(this)}function c(a,b){if(a.pos<a.sources.length){var c=a.sources[a.pos++];Wa(c)&&(c=cd(c));var d=new gc;a.subscription.setDisposable(d),d.setDisposable(c.subscribe(new Rd(a,b)))}else a.o.onCompleted()}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new hc,d={pos:0,subscription:b,o:a,sources:this.sources},e=tc.scheduleRecursive(d,c);return new ic(b,e)},b}(Sc),Rd=function(a){function b(b,c){this._state=b,this._recurse=c,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._state.o.onNext(a)},b.prototype.error=function(){this._recurse(this._state)},b.prototype.completed=function(){this._recurse(this._state)},b}(Mc),Sd=Rc.onErrorResumeNext=function(){var a=[];if(Array.isArray(arguments[0]))a=arguments[0];else{var b=arguments.length;a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}return new Qd(a)},Td=function(a){function b(b,c){this._s=b,this._o=Wa(c)?cd(c):c,this._open=!1,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new gc;b.setDisposable(this._s.subscribe(new Ud(a,this))),Wa(this._o)&&(this._o=cd(this._o));var c=new gc;return c.setDisposable(this._o.subscribe(new Vd(a,this,c))),new ic(b,c)},b}(Sc),Ud=function(a){function b(b,c){this._o=b,this._p=c,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._p._open&&this._o.onNext(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.onCompleted=function(){this._p._open&&this._o.onCompleted()},b}(Mc),Vd=function(a){function b(b,c,d){this._o=b,this._p=c,this._r=d,a.call(this)}return Vb(b,a),b.prototype.next=function(){this._p._open=!0,this._r.dispose()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.onCompleted=function(){this._r.dispose()},b}(Mc);Lc.skipUntil=function(a){return new Td(this,a)};var Wd=function(a){function b(b){this.source=b,a.call(this)}function c(a,b){this.o=a,this.inner=b,this.stopped=!1,this.latest=0,this.hasLatest=!1,Mc.call(this)}function d(a,b){this.parent=a,this.id=b,Mc.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new hc,d=this.source.subscribe(new c(a,b));return new ic(d,b)},Vb(c,Mc),c.prototype.next=function(a){var b=new gc,c=++this.latest;this.hasLatest=!0,this.inner.setDisposable(b),Wa(a)&&(a=cd(a)),b.setDisposable(a.subscribe(new d(this,c)))},c.prototype.error=function(a){this.o.onError(a)},c.prototype.completed=function(){this.stopped=!0,!this.hasLatest&&this.o.onCompleted()},Vb(d,Mc),d.prototype.next=function(a){this.parent.latest===this.id&&this.parent.o.onNext(a)},d.prototype.error=function(a){this.parent.latest===this.id&&this.parent.o.onError(a)},d.prototype.completed=function(){this.parent.latest===this.id&&(this.parent.hasLatest=!1,this.parent.stopped&&this.parent.o.onCompleted())},b}(Sc);Lc["switch"]=Lc.switchLatest=function(){return new Wd(this)};var Xd=function(a){function b(b,c){this.source=b,this.other=Wa(c)?cd(c):c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return new ic(this.source.subscribe(a),this.other.subscribe(new Yd(a)))},b}(Sc),Yd=function(a){function b(b){this._o=b,a.call(this)}return Vb(b,a),b.prototype.next=function(){this._o.onCompleted()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.onCompleted=Qa,b}(Mc);Lc.takeUntil=function(a){return new Xd(this,a)};var Zd=function(a){function b(b,c,d){this._s=b,this._ss=c,this._cb=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){for(var b=this._ss.length,c={hasValue:u(b,K),hasValueAll:!1,values:new Array(b)},d=this._ss.length,e=new Array(d+1),f=0;d>f;f++){var g=this._ss[f],h=new gc;Wa(g)&&(g=cd(g)),h.setDisposable(g.subscribe(new $d(a,f,c))),e[f]=h}var i=new gc;return i.setDisposable(this._s.subscribe(new _d(a,this._cb,c))),e[d]=i,new jc(e)},b}(Sc),$d=function(a){function b(b,c,d){this._o=b,this._i=c,this._state=d,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._state.values[this._i]=a,this._state.hasValue[this._i]=!0,this._state.hasValueAll=this._state.hasValue.every(Ra)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=Qa,b}(Mc),_d=function(a){function b(b,c,d){this._o=b,this._cb=c,this._state=d,a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=[a].concat(this._state.values);if(this._state.hasValueAll){var c=Za(this._cb).apply(null,b);return c===Ya?this._o.onError(c.e):void this._o.onNext(c)}},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Lc.withLatestFrom=function(){if(0===arguments.length)throw new Error("invalid arguments");for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=Xa(b[a-1])?b.pop():L;return Array.isArray(b[0])&&(b=b[0]),new Zd(this,b,d)};var ae=function(a){function b(b,c){this._s=b,this._cb=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){for(var b=this._s.length,c=new Array(b),d=u(b,K),e=u(b,M),f=0;b>f;f++){var g=this._s[f],h=new gc;c[f]=h,Wa(g)&&(g=cd(g)),h.setDisposable(g.subscribe(new be(a,f,this,e,d)))}return new jc(c)},b}(Sc),be=function(a){function b(b,c,d,e,f){this._o=b,this._i=c,this._p=d,this._q=e,this._d=f,a.call(this)}function c(a){return a.length>0}function d(a){return a.shift()}function e(a){return function(b,c){return c!==a}}return Vb(b,a),b.prototype.next=function(a){if(this._q[this._i].push(a),this._q.every(c)){var b=this._q.map(d),f=Za(this._p._cb).apply(null,b);if(f===Ya)return this._o.onError(f.e);this._o.onNext(f)}else this._d.filter(e(this._i)).every(Ra)&&this._o.onCompleted()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._d[this._i]=!0,this._d.every(Ra)&&this._o.onCompleted()},b}(Mc);Lc.zip=function(){if(0===arguments.length)throw new Error("invalid arguments");for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=Xa(b[a-1])?b.pop():L;Array.isArray(b[0])&&(b=b[0]);var e=this;return b.unshift(e),new ae(b,d)},Rc.zip=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];Array.isArray(b[0])&&(b=Xa(b[1])?b[0].concat(b[1]):b[0]);var d=b.shift();return d.zip.apply(d,b)};var ce=function(a){function b(b,c){this.sources=b,this._cb=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){for(var b=this.sources,c=b.length,d=new Array(c),e={q:u(c,M),done:u(c,K),cb:this._cb,o:a},f=0;c>f;f++)!function(a){var c=b[a],f=new gc;(mb(c)||lb(c))&&(c=ld(c)),d[a]=f,f.setDisposable(c.subscribe(new de(e,a)))}(f);return new jc(d)},b}(Sc),de=function(a){function b(b,c){this._s=b,this._i=c,a.call(this)}function c(a){return a.length>0}function d(a){return a.shift()}function e(a){return function(b,c){return c!==a}}return Vb(b,a),b.prototype.next=function(a){if(this._s.q[this._i].push(a),this._s.q.every(c)){var b=this._s.q.map(d),f=Za(this._s.cb).apply(null,b);if(f===Ya)return this._s.o.onError(f.e);this._s.o.onNext(f)}else this._s.done.filter(e(this._i)).every(Ra)&&this._s.o.onCompleted()},b.prototype.error=function(a){this._s.o.onError(a)},b.prototype.completed=function(){this._s.done[this._i]=!0,this._s.done.every(Ra)&&this._s.o.onCompleted()},b}(Mc);Lc.zipIterable=function(){if(0===arguments.length)throw new Error("invalid arguments");for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=Xa(b[a-1])?b.pop():L,e=this;return b.unshift(e),new ce(b,d)},Lc.asObservable=function(){return new ug(N(this),this)},Lc.bufferWithCount=function(a,b){return"number"!=typeof b&&(b=a),this.windowWithCount(a,b).flatMap(O).filter(P)};var ee=function(a){function b(b){this.source=b,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new fe(a))},b}(Sc),fe=function(a){function b(b){this._o=b,a.call(this)}return Vb(b,a),b.prototype.next=function(a){a.accept(this._o)},b.prototype.error=function(a){
this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Lc.dematerialize=function(){return new ee(this)};var ge=function(a){function b(b,c,d){this.source=b,this.keyFn=c,this.comparer=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new he(a,this.keyFn,this.comparer))},b}(Sc),he=function(a){function b(b,c,d){this.o=b,this.keyFn=c,this.comparer=d,this.hasCurrentKey=!1,this.currentKey=null,a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b,c=a;return Xa(this.keyFn)&&(c=Za(this.keyFn)(a),c===Ya)?this.o.onError(c.e):this.hasCurrentKey&&(b=Za(this.comparer)(this.currentKey,c),b===Ya)?this.o.onError(b.e):void(this.hasCurrentKey&&b||(this.hasCurrentKey=!0,this.currentKey=c,this.o.onNext(a)))},b.prototype.error=function(a){this.o.onError(a)},b.prototype.completed=function(){this.o.onCompleted()},b}(Mc);Lc.distinctUntilChanged=function(a,b){return b||(b=Ta),new ge(this,a,b)};var ie=function(a){function b(b,c,d,e){this.source=b,this._oN=c,this._oE=d,this._oC=e,a.call(this)}function c(a,b){this.o=a,this.t=!b._oN||Xa(b._oN)?Kc(b._oN||Qa,b._oE||Qa,b._oC||Qa):b._oN,this.isStopped=!1,Mc.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new c(a,this))},Vb(c,Mc),c.prototype.next=function(a){var b=Za(this.t.onNext).call(this.t,a);b===Ya&&this.o.onError(b.e),this.o.onNext(a)},c.prototype.error=function(a){var b=Za(this.t.onError).call(this.t,a);return b===Ya?this.o.onError(b.e):void this.o.onError(a)},c.prototype.completed=function(){var a=Za(this.t.onCompleted).call(this.t);return a===Ya?this.o.onError(a.e):void this.o.onCompleted()},b}(Sc);Lc["do"]=Lc.tap=Lc.doAction=function(a,b,c){return new ie(this,a,b,c)},Lc.doOnNext=Lc.tapOnNext=function(a,b){return this.tap("undefined"!=typeof b?function(c){a.call(b,c)}:a)},Lc.doOnError=Lc.tapOnError=function(a,b){return this.tap(Qa,"undefined"!=typeof b?function(c){a.call(b,c)}:a)},Lc.doOnCompleted=Lc.tapOnCompleted=function(a,b){return this.tap(Qa,null,"undefined"!=typeof b?function(){a.call(b)}:a)};var je=function(a){function b(b,c,d){this.source=b,this._fn=nb(c,d,0),a.call(this)}function c(a,b){this.isDisposed=!1,this._s=a,this._fn=b}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=Za(this.source.subscribe).call(this.source,a);return b===Ya&&(this._fn(),e(b.e)),new c(b,this._fn)},c.prototype.dispose=function(){if(!this.isDisposed){var a=Za(this._s.dispose).call(this._s);this._fn(),a===Ya&&e(a.e)}},b}(Sc);Lc["finally"]=function(a,b){return new je(this,a,b)};var ke=function(a){function b(b){this.source=b,a.call(this)}function c(a){this.o=a,this.isStopped=!1}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new c(a))},c.prototype.onNext=Qa,c.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.o.onError(a))},c.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.o.onCompleted())},c.prototype.dispose=function(){this.isStopped=!0},c.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.observer.onError(a),!0)},b}(Sc);Lc.ignoreElements=function(){return new ke(this)};var le=function(a){function b(b,c){this.source=b,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new me(a))},b}(Sc),me=function(a){function b(b){this._o=b,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._o.onNext(Gc(a))},b.prototype.error=function(a){this._o.onNext(Hc(a)),this._o.onCompleted()},b.prototype.completed=function(){this._o.onNext(Ic()),this._o.onCompleted()},b}(Mc);Lc.materialize=function(){return new le(this)},Lc.repeat=function(a){return Yc(this,a).concat()},Lc.retry=function(a){return Yc(this,a).catchError()},Lc.retryWhen=function(a){return Yc(this).catchErrorWhen(a)};var ne=function(a){function b(b,c,d,e){this.source=b,this.accumulator=c,this.hasSeed=d,this.seed=e,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new oe(a,this))},b}(Sc),oe=function(a){function b(b,c){this._o=b,this._p=c,this._fn=c.accumulator,this._hs=c.hasSeed,this._s=c.seed,this._ha=!1,this._a=null,this._hv=!1,this._i=0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){return!this._hv&&(this._hv=!0),this._ha?this._a=Za(this._fn)(this._a,a,this._i,this._p):(this._a=this._hs?Za(this._fn)(this._s,a,this._i,this._p):a,this._ha=!0),this._a===Ya?this._o.onError(this._a.e):(this._o.onNext(this._a),void this._i++)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){!this._hv&&this._hs&&this._o.onNext(this._s),this._o.onCompleted()},b}(Mc);Lc.scan=function(){var a,b=!1,c=arguments[0];return 2===arguments.length&&(b=!0,a=arguments[1]),new ne(this,c,b,a)};var pe=function(a){function b(b,c){this.source=b,this._c=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new qe(a,this._c))},b}(Sc),qe=function(a){function b(b,c){this._o=b,this._c=c,this._q=[],a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._q.push(a),this._q.length>this._c&&this._o.onNext(this._q.shift())},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Lc.skipLast=function(a){if(0>a)throw new fb;return new pe(this,a)},Lc.startWith=function(){var a,b=0;arguments.length&&oc(arguments[0])?(a=arguments[0],b=1):a=tc;for(var c=[],d=b,e=arguments.length;e>d;d++)c.push(arguments[d]);return $c([nd(c,a),this]).concat()};var re=function(a){function b(b,c){this._o=b,this._c=c,this._q=[],a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._q.push(a),this._q.length>this._c&&this._q.shift()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){for(;this._q.length>0;)this._o.onNext(this._q.shift());this._o.onCompleted()},b}(Mc);Lc.takeLast=function(a){if(0>a)throw new fb;var b=this;return new ug(function(c){return b.subscribe(new re(c,a))},b)};var se=function(a){function b(b,c){this._o=b,this._c=c,this._q=[],a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._q.push(a),this._q.length>this._c&&this._q.shift()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(this._q),this._o.onCompleted()},b}(Mc);Lc.takeLastBuffer=function(a){if(0>a)throw new fb;var b=this;return new ug(function(c){return b.subscribe(new se(c,a))},b)},Lc.windowWithCount=function(a,b){var c=this;if(+a||(a=0),Math.abs(a)===1/0&&(a=0),0>=a)throw new fb;if(null==b&&(b=a),+b||(b=0),Math.abs(b)===1/0&&(b=0),0>=b)throw new fb;return new ug(function(d){function e(){var a=new yg;i.push(a),d.onNext(Xb(a,g))}var f=new gc,g=new kc(f),h=0,i=[];return e(),f.setDisposable(c.subscribe(function(c){for(var d=0,f=i.length;f>d;d++)i[d].onNext(c);var g=h-a+1;g>=0&&g%b===0&&i.shift().onCompleted(),++h%b===0&&e()},function(a){for(;i.length>0;)i.shift().onError(a);d.onError(a)},function(){for(;i.length>0;)i.shift().onCompleted();d.onCompleted()})),g},c)},Lc.selectConcat=Lc.concatMap=function(a,b,c){return Xa(a)&&Xa(b)?this.concatMap(function(c,d){var e=a(c,d);return Wa(e)&&(e=cd(e)),(mb(e)||lb(e))&&(e=ld(e)),e.map(function(a,e){return b(c,a,d,e)})}):Xa(a)?Q(this,a,c):Q(this,function(){return a})},Lc.concatMapObserver=Lc.selectConcatObserver=function(a,b,c,d){var e=this,f=nb(a,d,2),g=nb(b,d,1),h=nb(c,d,0);return new ug(function(a){var b=0;return e.subscribe(function(c){var d;try{d=f(c,b++)}catch(e){return void a.onError(e)}Wa(d)&&(d=cd(d)),a.onNext(d)},function(b){var c;try{c=g(b)}catch(d){return void a.onError(d)}Wa(c)&&(c=cd(c)),a.onNext(c),a.onCompleted()},function(){var b;try{b=h()}catch(c){return void a.onError(c)}Wa(b)&&(b=cd(b)),a.onNext(b),a.onCompleted()})},this).concatAll()};var te=function(a){function b(b,c){this._o=b,this._d=c,this._f=!1,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._f=!0,this._o.onNext(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){!this._f&&this._o.onNext(this._d),this._o.onCompleted()},b}(Mc);Lc.defaultIfEmpty=function(b){var c=this;return b===a&&(b=null),new ug(function(a){return c.subscribe(new te(a,b))},c)},S.prototype.push=function(a){var b=-1===R(this.set,a,this.comparer);return b&&this.set.push(a),b};var ue=function(a){function b(b,c,d){this.source=b,this._keyFn=c,this._cmpFn=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new ve(a,this._keyFn,this._cmpFn))},b}(Sc),ve=function(a){function b(b,c,d){this._o=b,this._keyFn=c,this._h=new S(d),a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=a;return Xa(this._keyFn)&&(b=Za(this._keyFn)(a),b===Ya)?this._o.onError(b.e):void(this._h.push(b)&&this._o.onNext(a))},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Lc.distinct=function(a,b){return b||(b=Ta),new ue(this,a,b)},Lc.groupBy=function(a,b){return this.groupByUntil(a,b,rd)},Lc.groupByUntil=function(b,c,d){var e=this;return new ug(function(f){var g=new Lf,h=new $b,i=new kc(h),j=function(a){return function(b){b.onError(a)}};return h.add(e.subscribe(function(e){var k=Za(b)(e);if(k===Ya)return g.forEach(j(k.e)),f.onError(k.e);var l=!1,m=g.get(k);if(m===a&&(m=new yg,g.set(k,m),l=!0),l){var n=new xg(k,m,i),o=new xg(k,m),p=Za(d)(o);if(p===Ya)return g.forEach(j(p.e)),f.onError(p.e);f.onNext(n);var q=new gc;h.add(q),q.setDisposable(p.take(1).subscribe(Qa,function(a){g.forEach(j(a)),f.onError(a)},function(){g["delete"](k)&&m.onCompleted(),h.remove(q)}))}var r=e;return Xa(c)&&(r=Za(c)(e),r===Ya)?(g.forEach(j(r.e)),f.onError(r.e)):void m.onNext(r)},function(a){g.forEach(j(a)),f.onError(a)},function(){g.forEach(function(a){a.onCompleted()}),f.onCompleted()})),i},e)};var we=function(a){function b(b,c,d){this.source=b,this.selector=nb(c,d,3),a.call(this)}function c(a,b){return function(c,d,e){return a.call(this,b.selector(c,d,e),d,e)}}function d(a,b,c){this.o=a,this.selector=b,this.source=c,this.i=0,Mc.call(this)}return Vb(b,a),b.prototype.internalMap=function(a,d){return new b(this.source,c(a,this),d)},b.prototype.subscribeCore=function(a){return this.source.subscribe(new d(a,this.selector,this))},Vb(d,Mc),d.prototype.next=function(a){var b=Za(this.selector)(a,this.i++,this.source);return b===Ya?this.o.onError(b.e):void this.o.onNext(b)},d.prototype.error=function(a){this.o.onError(a)},d.prototype.completed=function(){this.o.onCompleted()},b}(Sc);Lc.map=Lc.select=function(a,b){var c="function"==typeof a?a:function(){return a};return this instanceof we?this.internalMap(c,b):new we(this,c,b)},Lc.pluck=function(){var a=arguments.length,b=new Array(a);if(0===a)throw new Error("List of properties cannot be empty.");for(var c=0;a>c;c++)b[c]=arguments[c];return this.map(T(b,a))},Lc.flatMap=Lc.selectMany=function(a,b,c){return new Tc(this,a,b,c).mergeAll()},Lc.flatMapObserver=Lc.selectManyObserver=function(a,b,c,d){var e=this;return new ug(function(f){var g=0;return e.subscribe(function(b){var c;try{c=a.call(d,b,g++)}catch(e){return void f.onError(e)}Wa(c)&&(c=cd(c)),f.onNext(c)},function(a){var c;try{c=b.call(d,a)}catch(e){return void f.onError(e)}Wa(c)&&(c=cd(c)),f.onNext(c),f.onCompleted()},function(){var a;try{a=c.call(d)}catch(b){return void f.onError(b)}Wa(a)&&(a=cd(a)),f.onNext(a),f.onCompleted()})},e).mergeAll()},Pa.Observable.prototype.flatMapLatest=function(a,b,c){return new Tc(this,a,b,c).switchLatest()};var xe=function(a){function b(b,c){this.source=b,this._count=c,a.call(this)}function c(a,b){this._o=a,this._r=b,Mc.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new c(a,this._count))},Vb(c,Mc),c.prototype.next=function(a){this._r<=0?this._o.onNext(a):this._r--},c.prototype.error=function(a){this._o.onError(a)},c.prototype.completed=function(){this._o.onCompleted()},b}(Sc);Lc.skip=function(a){if(0>a)throw new fb;return new xe(this,a)};var ye=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new ze(a,this))},b}(Sc),ze=function(a){function b(b,c){this._o=b,this._p=c,this._i=0,this._r=!1,a.call(this)}return Vb(b,a),b.prototype.next=function(a){if(!this._r){var b=Za(this._p._fn)(a,this._i++,this._p);if(b===Ya)return this._o.onError(b.e);this._r=!b}this._r&&this._o.onNext(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Lc.skipWhile=function(a,b){var c=nb(a,b,3);return new ye(this,c)};var Ae=function(a){function b(b,c){this.source=b,this._count=c,a.call(this)}function c(a,b){this._o=a,this._c=b,this._r=b,Mc.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new c(a,this._count))},Vb(c,Mc),c.prototype.next=function(a){this._r-->0&&(this._o.onNext(a),this._r<=0&&this._o.onCompleted())},c.prototype.error=function(a){this._o.onError(a)},c.prototype.completed=function(){this._o.onCompleted()},b}(Sc);Lc.take=function(a,b){if(0>a)throw new fb;return 0===a?id(b):new Ae(this,a)};var Be=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Ce(a,this))},b}(Sc),Ce=function(a){function b(b,c){this._o=b,this._p=c,this._i=0,this._r=!0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){return this._r&&(this._r=Za(this._p._fn)(a,this._i++,this._p),this._r===Ya)?this._o.onError(this._r.e):void(this._r?this._o.onNext(a):this._o.onCompleted())},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Lc.takeWhile=function(a,b){var c=nb(a,b,3);return new Be(this,c)};var De=function(a){function b(b,c,d){this.source=b,this.predicate=nb(c,d,3),a.call(this)}function c(a,b){return function(c,d,e){return b.predicate(c,d,e)&&a.call(this,c,d,e)}}function d(a,b,c){this.o=a,this.predicate=b,this.source=c,this.i=0,Mc.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new d(a,this.predicate,this))},b.prototype.internalFilter=function(a,d){return new b(this.source,c(a,this),d)},Vb(d,Mc),d.prototype.next=function(a){var b=Za(this.predicate)(a,this.i++,this.source);return b===Ya?this.o.onError(b.e):void(b&&this.o.onNext(a))},d.prototype.error=function(a){this.o.onError(a)},d.prototype.completed=function(){this.o.onCompleted()},b}(Sc);Lc.filter=Lc.where=function(a,b){return this instanceof De?this.internalFilter(a,b):new De(this,a,b)};var Ee=function(a){function b(b,c,d){this.source=b,this._k=c,this._c=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Fe(a,this._k,this._c))},b}(Sc),Fe=function(a){function b(b,c,d){this._o=b,this._k=c,this._c=d,this._v=null,this._hv=!1,this._l=[],a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=Za(this._k)(a);if(b===Ya)return this._o.onError(b.e);var c=0;if(this._hv){if(c=Za(this._c)(b,this._v),c===Ya)return this._o.onError(c.e)}else this._hv=!0,this._v=b;c>0&&(this._v=b,this._l=[]),c>=0&&this._l.push(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(this._l),this._o.onCompleted()},b}(Mc),Ge=function(a){function b(b,c,d,e){this.source=b,this.accumulator=c,this.hasSeed=d,this.seed=e,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new He(a,this))},b}(Sc),He=function(a){function b(b,c){this._o=b,this._p=c,this._fn=c.accumulator,this._hs=c.hasSeed,this._s=c.seed,this._ha=!1,this._a=null,this._hv=!1,this._i=0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){return!this._hv&&(this._hv=!0),this._ha?this._a=Za(this._fn)(this._a,a,this._i,this._p):(this._a=this._hs?Za(this._fn)(this._s,a,this._i,this._p):a,this._ha=!0),this._a===Ya?this._o.onError(this._a.e):void this._i++},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._hv&&this._o.onNext(this._a),!this._hv&&this._hs&&this._o.onNext(this._s),!this._hv&&!this._hs&&this._o.onError(new db),this._o.onCompleted()},b}(Mc);Lc.reduce=function(){var a,b=!1,c=arguments[0];return 2===arguments.length&&(b=!0,a=arguments[1]),new Ge(this,c,b,a)};var Ie=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Je(a,this._fn,this.source))},b}(Sc),Je=function(a){function b(b,c,d){this._o=b,this._fn=c,this._s=d,this._i=0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=Za(this._fn)(a,this._i++,this._s);return b===Ya?this._o.onError(b.e):void(Boolean(b)&&(this._o.onNext(!0),this._o.onCompleted()))},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(!1),this._o.onCompleted()},b}(Mc);Lc.some=function(a,b){var c=nb(a,b,3);return new Ie(this,c)};var Ke=function(a){function b(b){this.source=b,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Le(a))},b}(Sc),Le=function(a){function b(b){this._o=b,a.call(this)}return Vb(b,a),b.prototype.next=function(){this._o.onNext(!1),this._o.onCompleted()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(!0),this._o.onCompleted()},b}(Mc);Lc.isEmpty=function(){return new Ke(this)};var Me=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Ne(a,this._fn,this.source))},b}(Sc),Ne=function(a){function b(b,c,d){this._o=b,this._fn=c,this._s=d,this._i=0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=Za(this._fn)(a,this._i++,this._s);return b===Ya?this._o.onError(b.e):void(Boolean(b)||(this._o.onNext(!1),this._o.onCompleted()))},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(!0),this._o.onCompleted()},b}(Mc);Lc.every=function(a,b){var c=nb(a,b,3);return new Me(this,c)};var Oe=function(a){function b(b,c,d){var e=+d||0;Math.abs(e)===1/0&&(e=0),this.source=b,this._elem=c,this._n=e,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this._n<0?(a.onNext(!1),a.onCompleted(),cc):this.source.subscribe(new Pe(a,this._elem,this._n))},b}(Sc),Pe=function(a){function b(b,c,d){this._o=b,this._elem=c,this._n=d,this._i=0,a.call(this)}function c(a,b){return 0===a&&0===b||a===b||isNaN(a)&&isNaN(b)}return Vb(b,a),b.prototype.next=function(a){this._i++>=this._n&&c(a,this._elem)&&(this._o.onNext(!0),this._o.onCompleted())},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(!1),this._o.onCompleted()},b}(Mc);Lc.includes=function(a,b){return new Oe(this,a,b)};var Qe=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Re(a,this._fn,this.source))},b}(Sc),Re=function(a){function b(b,c,d){this._o=b,this._fn=c,this._s=d,this._i=0,this._c=0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){if(this._fn){var b=Za(this._fn)(a,this._i++,this._s);if(b===Ya)return this._o.onError(b.e);Boolean(b)&&this._c++}else this._c++},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(this._c),this._o.onCompleted()},b}(Mc);Lc.count=function(a,b){var c=nb(a,b,3);return new Qe(this,c)};var Se=function(a){function b(b,c,d){this.source=b,this._e=c,this._n=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this._n<0?(a.onNext(-1),a.onCompleted(),cc):this.source.subscribe(new Te(a,this._e,this._n))},b}(Sc),Te=function(a){function b(b,c,d){this._o=b,this._e=c,this._n=d,this._i=0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._i>=this._n&&a===this._e&&(this._o.onNext(this._i),this._o.onCompleted()),this._i++},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(-1),this._o.onCompleted()},b}(Mc);Lc.indexOf=function(a,b){var c=+b||0;return Math.abs(c)===1/0&&(c=0),new Se(this,a,c)};var Ue=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Ve(a,this._fn,this.source))},b}(Sc),Ve=function(a){function b(b,c,d){this._o=b,this._fn=c,this._s=d,this._i=0,this._c=0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){if(this._fn){var b=Za(this._fn)(a,this._i++,this._s);if(b===Ya)return this._o.onError(b.e);this._c+=b}else this._c+=a},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(this._c),this._o.onCompleted()},b}(Mc);Lc.sum=function(a,b){var c=nb(a,b,3);return new Ue(this,c)},Lc.minBy=function(a,b){return b||(b=Ua),new Ee(this,a,function(a,c){return-1*b(a,c)})},Lc.min=function(a){return this.minBy(Ra,a).map(U)},Lc.maxBy=function(a,b){return b||(b=Ua),new Ee(this,a,b)},Lc.max=function(a){return this.maxBy(Ra,a).map(U)};var We=function(a){function b(b,c){this.source=b,this._fn=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Xe(a,this._fn,this.source))},b}(Sc),Xe=function(a){function b(b,c,d){this._o=b,this._fn=c,this._s=d,this._c=0,this._t=0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){if(this._fn){var b=Za(this._fn)(a,this._c++,this._s);if(b===Ya)return this._o.onError(b.e);this._t+=b}else this._c++,this._t+=a},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){return 0===this._c?this._o.onError(new db):(this._o.onNext(this._t/this._c),void this._o.onCompleted())},b}(Mc);Lc.average=function(a,b){var c,d=this;return Xa(a)&&(c=nb(a,b,3)),new We(d,c)},Lc.sequenceEqual=function(a,b){var c=this;return b||(b=Ta),new ug(function(d){var e=!1,f=!1,g=[],h=[],i=c.subscribe(function(a){if(h.length>0){var c=h.shift(),e=Za(b)(c,a);if(e===Ya)return d.onError(e.e);e||(d.onNext(!1),d.onCompleted())}else f?(d.onNext(!1),d.onCompleted()):g.push(a)},function(a){d.onError(a)},function(){e=!0,0===g.length&&(h.length>0?(d.onNext(!1),d.onCompleted()):f&&(d.onNext(!0),d.onCompleted()))});(mb(a)||lb(a))&&(a=ld(a)),Wa(a)&&(a=cd(a));var j=a.subscribe(function(a){if(g.length>0){var c=g.shift(),f=Za(b)(c,a);if(f===Ya)return d.onError(f.e);f||(d.onNext(!1),d.onCompleted())}else e?(d.onNext(!1),d.onCompleted()):h.push(a)},function(a){d.onError(a)},function(){f=!0,0===h.length&&(g.length>0?(d.onNext(!1),d.onCompleted()):e&&(d.onNext(!0),d.onCompleted()))});return new ic(i,j)},c)};var Ye=function(a){function b(b,c,d){this.source=b,this._i=c,this._d=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Ze(a,this._i,this._d))},b}(Sc),Ze=function(b){function c(a,c,d){this._o=a,this._i=c,this._d=d,b.call(this)}return Vb(c,b),c.prototype.next=function(a){0===this._i--&&(this._o.onNext(a),this._o.onCompleted())},c.prototype.error=function(a){this._o.onError(a)},c.prototype.completed=function(){this._d===a?this._o.onError(new fb):(this._o.onNext(this._d),this._o.onCompleted())},c}(Mc);Lc.elementAt=function(a,b){if(0>a)throw new fb;return new Ye(this,a,b)};var $e=function(b){function c(a,c,d){this._o=a,this._obj=c,this._s=d,this._i=0,this._hv=!1,this._v=null,b.call(this)}return Vb(c,b),c.prototype.next=function(a){var b=!1;if(this._obj.predicate){var c=Za(this._obj.predicate)(a,this._i++,this._s);if(c===Ya)return this._o.onError(c.e);Boolean(c)&&(b=!0)}else this._obj.predicate||(b=!0);if(b){if(this._hv)return this._o.onError(new Error("Sequence contains more than one matching element"));this._hv=!0,this._v=a}},c.prototype.error=function(a){this._o.onError(a)},c.prototype.completed=function(){this._hv?(this._o.onNext(this._v),this._o.onCompleted()):this._obj.defaultValue===a?this._o.onError(new db):(this._o.onNext(this._obj.defaultValue),this._o.onCompleted())},c}(Mc);Lc.single=function(a,b){var c={},d=this;if(c="object"==typeof arguments[0]?arguments[0]:{predicate:arguments[0],thisArg:arguments[1],defaultValue:arguments[2]},Xa(c.predicate)){var e=c.predicate;c.predicate=nb(e,c.thisArg,3)}return new ug(function(a){return d.subscribe(new $e(a,c,d))},d)};var _e=function(a){function b(b,c){this.source=b,this._obj=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new af(a,this._obj,this.source))},b}(Sc),af=function(b){function c(a,c,d){this._o=a,this._obj=c,this._s=d,this._i=0,b.call(this)}return Vb(c,b),c.prototype.next=function(a){if(this._obj.predicate){var b=Za(this._obj.predicate)(a,this._i++,this._s);if(b===Ya)return this._o.onError(b.e);Boolean(b)&&(this._o.onNext(a),this._o.onCompleted())}else this._obj.predicate||(this._o.onNext(a),this._o.onCompleted())},c.prototype.error=function(a){this._o.onError(a)},c.prototype.completed=function(){this._obj.defaultValue===a?this._o.onError(new db):(this._o.onNext(this._obj.defaultValue),this._o.onCompleted())},c}(Mc);Lc.first=function(){var a={};if(a="object"==typeof arguments[0]?arguments[0]:{predicate:arguments[0],thisArg:arguments[1],defaultValue:arguments[2]},Xa(a.predicate)){var b=a.predicate;a.predicate=nb(b,a.thisArg,3)}return new _e(this,a)};var bf=function(a){function b(b,c){this.source=b,this._obj=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new cf(a,this._obj,this.source))},b}(Sc),cf=function(b){function c(a,c,d){this._o=a,this._obj=c,this._s=d,this._i=0,this._hv=!1,this._v=null,b.call(this)}return Vb(c,b),c.prototype.next=function(a){var b=!1;if(this._obj.predicate){var c=Za(this._obj.predicate)(a,this._i++,this._s);if(c===Ya)return this._o.onError(c.e);Boolean(c)&&(b=!0)}else this._obj.predicate||(b=!0);b&&(this._hv=!0,this._v=a)},c.prototype.error=function(a){this._o.onError(a)},c.prototype.completed=function(){this._hv?(this._o.onNext(this._v),this._o.onCompleted()):this._obj.defaultValue===a?this._o.onError(new db):(this._o.onNext(this._obj.defaultValue),this._o.onCompleted())},c}(Mc);Lc.last=function(){var a={};if(a="object"==typeof arguments[0]?arguments[0]:{predicate:arguments[0],thisArg:arguments[1],defaultValue:arguments[2]},Xa(a.predicate)){var b=a.predicate;a.predicate=nb(b,a.thisArg,3)}return new bf(this,a)};var df=function(a){function b(b,c,d,e){this._o=b,this._s=c,this._cb=d,this._y=e,this._i=0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=Za(this._cb)(a,this._i,this._s);return b===Ya?this._o.onError(b.e):void(b?(this._o.onNext(this._y?this._i:a),this._o.onCompleted()):this._i++)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._y&&this._o.onNext(-1),this._o.onCompleted()},b}(Mc);Lc.find=function(a,b){return V(this,a,b,!1)},Lc.findIndex=function(a,b){return V(this,a,b,!0)};var ef=function(a){function b(b){this.source=b,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new ff(a))},b}(Sc),ff=function(a){function b(b){this._o=b,this._s=new Oa.Set,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._s.add(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(this._s),this._o.onCompleted()},b}(Mc);Lc.toSet=function(){if("undefined"==typeof Oa.Set)throw new TypeError;return new ef(this)};var gf=function(a){function b(b,c,d){this.source=b,this._k=c,this._e=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new hf(a,this._k,this._e))},b}(Sc),hf=function(a){function b(b,c,d){this._o=b,this._k=c,this._e=d,this._m=new Oa.Map,a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=Za(this._k)(a);if(b===Ya)return this._o.onError(b.e);var c=a;return this._e&&(c=Za(this._e)(a),c===Ya)?this._o.onError(c.e):void this._m.set(b,c)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onNext(this._m),this._o.onCompleted()},b}(Mc);Lc.toMap=function(a,b){if("undefined"==typeof Oa.Map)throw new TypeError;return new gf(this,a,b)};var jf=function(a){function b(b,c,d){this.source=b,this._b=c,this._e=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new kf(a,this._b,this._e))},b}(Sc),kf=function(a){function b(b,c,d){this._o=b,this._b=c,this._e=d,this._i=0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._i>=this._b&&(this._e===this._i?this._o.onCompleted():this._o.onNext(a)),this._i++},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Lc.slice=function(a,b){var c=a||0;if(0>c)throw new Pa.ArgumentOutOfRangeError;if("number"==typeof b&&c>b)throw new Pa.ArgumentOutOfRangeError;return new jf(this,c,b)};var lf=function(a){function b(b,c,d){this.source=b,this._e=c,this._n=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this._n<0?(a.onNext(-1),a.onCompleted(),cc):this.source.subscribe(new mf(a,this._e,this._n))},b}(Sc),mf=function(a){function b(b,c,d){this._o=b,this._e=c,this._n=d,this._v=0,this._hv=!1,this._i=0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._i>=this._n&&a===this._e&&(this._hv=!0,this._v=this._i),this._i++},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._hv?this._o.onNext(this._v):this._o.onNext(-1),this._o.onCompleted()},b}(Mc);Lc.lastIndexOf=function(a,b){var c=+b||0;return Math.abs(c)===1/0&&(c=0),new lf(this,a,c)},Rc.wrap=function(a){function b(){return Rc.spawn.call(this,a.apply(this,arguments))}return b.__generatorFunction__=a,b};var nf=Rc.spawn=function(){for(var a=arguments[0],b=this,c=[],d=1,e=arguments.length;e>d;d++)c.push(arguments[d]);return new ug(function(d){function e(b){var c=Za(a.next).call(a,b);return c===Ya?d.onError(c.e):void g(c)}function f(b){var c=Za(a.next).call(a,b);return c===Ya?d.onError(c.e):void g(c)}function g(a){if(a.done)return d.onNext(a.value),void d.onCompleted();var c=W.call(b,a.value),g=null,i=!1;Rc.isObservable(c)?h.add(c.subscribe(function(a){i=!0,g=a},f,function(){i&&e(g)})):f(new TypeError("type not supported"))}var h=new $b;return Xa(a)&&(a=a.apply(b,c)),a&&Xa(a.next)?(e(),h):(d.onNext(a),d.onCompleted())})};Rc.start=function(a,b,c){return of(a,b,c)()};var of=Rc.toAsync=function(a,b,c){return oc(c)||(c=Ac),function(){var d=arguments,e=new zg;return c.schedule(null,function(){var c;try{c=a.apply(b,d)}catch(f){return void e.onError(f)}e.onNext(c),e.onCompleted()}),e.asObservable()}};Rc.fromCallback=function(a,b,c){return function(){"undefined"==typeof b&&(b=this);for(var d=arguments.length,e=new Array(d),f=0;d>f;f++)e[f]=arguments[f];return ba(a,b,c,e)}},Rc.fromNodeCallback=function(a,b,c){return function(){"undefined"==typeof b&&(b=this);for(var d=arguments.length,e=new Array(d),f=0;d>f;f++)e[f]=arguments[f];return da(a,b,c,e)}},ga.prototype.dispose=function(){this.isDisposed||(this._e.removeEventListener(this._n,this._fn,!1),this.isDisposed=!0)},Pa.config.useNativeEvents=!1;var pf=function(a){function b(b,c,d){this._el=b,this._n=c,this._fn=d,a.call(this)}function c(a,b){return function(){var c=arguments[0];return Xa(b)&&(c=Za(b).apply(null,arguments),c===Ya)?a.onError(c.e):void a.onNext(c)}}return Vb(b,a),b.prototype.subscribeCore=function(a){return ha(this._el,this._n,c(a,this._fn))},b}(Sc);Rc.fromEvent=function(a,b,c){return a.addListener?rf(function(c){a.addListener(b,c)},function(c){a.removeListener(b,c)},c):Pa.config.useNativeEvents||"function"!=typeof a.on||"function"!=typeof a.off?new pf(a,b,c).publish().refCount():rf(function(c){a.on(b,c)},function(c){a.off(b,c)},c)};var qf=function(a){function b(b,c,d){this._add=b,this._del=c,this._fn=d,a.call(this)}function c(a,b){return function(){var c=arguments[0];return Xa(b)&&(c=Za(b).apply(null,arguments),c===Ya)?a.onError(c.e):void a.onNext(c)}}function d(a,b,c){this._del=a,this._fn=b,this._ret=c,this.isDisposed=!1}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=c(a,this._fn),e=this._add(b);
return new d(this._del,b,e)},d.prototype.dispose=function(){this.isDisposed||Xa(this._del)&&this._del(this._fn,this._ret)},b}(Sc),rf=Rc.fromEventPattern=function(a,b,c){return new qf(a,b,c).publish().refCount()};Rc.startAsync=function(a){var b=Za(a)();return b===Ya?xd(b.e):cd(b)};var sf=function(a){function b(b,c){this.source=b,this.controller=new yg,c&&c.subscribe?this.pauser=this.controller.merge(c):this.pauser=this.controller,a.call(this)}return Vb(b,a),b.prototype._subscribe=function(a){var b=this.source.publish(),c=b.subscribe(a),d=cc,e=this.pauser.distinctUntilChanged().subscribe(function(a){a?d=b.connect():(d.dispose(),d=cc)});return new jc([c,d,e])},b.prototype.pause=function(){this.controller.onNext(!1)},b.prototype.resume=function(){this.controller.onNext(!0)},b}(Rc);Lc.pausable=function(a){return new sf(this,a)};var tf=function(b){function c(a,c){this.source=a,this.controller=new yg,c&&c.subscribe?this.pauser=this.controller.merge(c):this.pauser=this.controller,b.call(this)}return Vb(c,b),c.prototype._subscribe=function(b){function c(){for(;e.length>0;)b.onNext(e.shift())}var d,e=[],f=ia(this.source,this.pauser.startWith(!1).distinctUntilChanged(),function(a,b){return{data:a,shouldFire:b}}).subscribe(function(f){d!==a&&f.shouldFire!==d?(d=f.shouldFire,f.shouldFire&&c()):(d=f.shouldFire,f.shouldFire?b.onNext(f.data):e.push(f.data))},function(a){c(),b.onError(a)},function(){c(),b.onCompleted()});return f},c.prototype.pause=function(){this.controller.onNext(!1)},c.prototype.resume=function(){this.controller.onNext(!0)},c}(Rc);Lc.pausableBuffered=function(a){return new tf(this,a)};var uf=function(a){function b(b,c,d){a.call(this),this.subject=new vf(c,d),this.source=b.multicast(this.subject).refCount()}return Vb(b,a),b.prototype._subscribe=function(a){return this.source.subscribe(a)},b.prototype.request=function(a){return this.subject.request(null==a?-1:a)},b}(Rc),vf=function(a){function b(b,c){null==b&&(b=!0),a.call(this),this.subject=new yg,this.enableQueue=b,this.queue=b?[]:null,this.requestedCount=0,this.requestedDisposable=null,this.error=null,this.hasFailed=!1,this.hasCompleted=!1,this.scheduler=c||vc}return Vb(b,a),Wb(b.prototype,Jc,{_subscribe:function(a){return this.subject.subscribe(a)},onCompleted:function(){this.hasCompleted=!0,this.enableQueue&&0!==this.queue.length?this.queue.push(Cc.createOnCompleted()):(this.subject.onCompleted(),this.disposeCurrentRequest())},onError:function(a){this.hasFailed=!0,this.error=a,this.enableQueue&&0!==this.queue.length?this.queue.push(Cc.createOnError(a)):(this.subject.onError(a),this.disposeCurrentRequest())},onNext:function(a){this.requestedCount<=0?this.enableQueue&&this.queue.push(Cc.createOnNext(a)):(0===this.requestedCount--&&this.disposeCurrentRequest(),this.subject.onNext(a))},_processRequest:function(a){if(this.enableQueue)for(;this.queue.length>0&&(a>0||"N"!==this.queue[0].kind);){var b=this.queue.shift();b.accept(this.subject),"N"===b.kind?a--:(this.disposeCurrentRequest(),this.queue=[])}return a},request:function(a){this.disposeCurrentRequest();var b=this;return this.requestedDisposable=this.scheduler.schedule(a,function(a,c){var d=b._processRequest(c),e=b.hasCompleted||b.hasFailed;return!e&&d>0?(b.requestedCount=d,bc(function(){b.requestedCount=0})):void 0}),this.requestedDisposable},disposeCurrentRequest:function(){this.requestedDisposable&&(this.requestedDisposable.dispose(),this.requestedDisposable=null)}}),b}(Rc);Lc.controlled=function(a,b){return a&&oc(a)&&(b=a,a=!0),null==a&&(a=!0),new uf(this,a,b)};var wf=function(a){function b(b){a.call(this),this.source=b}function c(a,b){b.source.request(1)}Vb(b,a),b.prototype._subscribe=function(a){return this.subscription=this.source.subscribe(new d(a,this,this.subscription)),new ic(this.subscription,Ac.schedule(this,c))};var d=function(a){function c(b,c,d){a.call(this),this.observer=b,this.observable=c,this.cancel=d,this.scheduleDisposable=null}function d(a,b){b.observable.source.request(1)}return Vb(c,a),c.prototype.completed=function(){this.observer.onCompleted(),this.dispose()},c.prototype.error=function(a){this.observer.onError(a),this.dispose()},c.prototype.next=function(a){this.observer.onNext(a),this.scheduleDisposable=Ac.schedule(this,d)},b.dispose=function(){this.observer=null,this.cancel&&(this.cancel.dispose(),this.cancel=null),this.scheduleDisposable&&(this.scheduleDisposable.dispose(),this.scheduleDisposable=null),a.prototype.dispose.call(this)},c}(Mc);return b}(Rc);uf.prototype.stopAndWait=function(){return new wf(this)};var xf=function(a){function b(b,c){a.call(this),this.source=b,this.windowSize=c}function c(a,b){b.source.request(b.windowSize)}Vb(b,a),b.prototype._subscribe=function(a){return this.subscription=this.source.subscribe(new d(a,this,this.subscription)),new ic(this.subscription,Ac.schedule(this,c))};var d=function(a){function b(b,c,d){this.observer=b,this.observable=c,this.cancel=d,this.received=0,this.scheduleDisposable=null,a.call(this)}function c(a,b){b.observable.source.request(b.observable.windowSize)}return Vb(b,a),b.prototype.completed=function(){this.observer.onCompleted(),this.dispose()},b.prototype.error=function(a){this.observer.onError(a),this.dispose()},b.prototype.next=function(a){this.observer.onNext(a),this.received=++this.received%this.observable.windowSize,0===this.received&&(this.scheduleDisposable=Ac.schedule(this,c))},b.prototype.dispose=function(){this.observer=null,this.cancel&&(this.cancel.dispose(),this.cancel=null),this.scheduleDisposable&&(this.scheduleDisposable.dispose(),this.scheduleDisposable=null),a.prototype.dispose.call(this)},b}(Mc);return b}(Rc);uf.prototype.windowed=function(a){return new xf(this,a)},Lc.pipe=function(a){function b(){c.resume()}var c=this.pausableBuffered();return a.addListener("drain",b),c.subscribe(function(b){!a.write(String(b))&&c.pause()},function(b){a.emit("error",b)},function(){!a._isStdio&&a.end(),a.removeListener("drain",b)}),c.resume(),a};var yf=function(a){function b(b,c,d){this.source=b,this._fn1=c,this._fn2=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=this.source.multicast(this._fn1());return new ic(this._fn2(b).subscribe(a),b.connect())},b}(Sc);Lc.multicast=function(a,b){return Xa(a)?new yf(this,a,b):new Bf(this,a)},Lc.publish=function(a){return a&&Xa(a)?this.multicast(function(){return new yg},a):this.multicast(new yg)},Lc.share=function(){return this.publish().refCount()},Lc.publishLast=function(a){return a&&Xa(a)?this.multicast(function(){return new zg},a):this.multicast(new zg)},Lc.publishValue=function(a,b){return 2===arguments.length?this.multicast(function(){return new Ag(b)},a):this.multicast(new Ag(a))},Lc.shareValue=function(a){return this.publishValue(a).refCount()},Lc.replay=function(a,b,c,d){return a&&Xa(a)?this.multicast(function(){return new Bg(b,c,d)},a):this.multicast(new Bg(b,c,d))},Lc.shareReplay=function(a,b,c){return this.replay(null,a,b,c).refCount()};var zf=function(a,b){this._s=a,this._o=b};zf.prototype.dispose=function(){if(!this._s.isDisposed&&null!==this._o){var a=this._s.observers.indexOf(this._o);this._s.observers.splice(a,1),this._o=null}};var Af=function(a){function b(b){this.source=b,this._count=0,this._connectableSubscription=null,a.call(this)}function c(a,b){this._p=a,this._s=b,this.isDisposed=!1}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=this.source.subscribe(a);return 1===++this._count&&(this._connectableSubscription=this.source.connect()),new c(this,b)},c.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this._s.dispose(),0===--this._p._count&&this._p._connectableSubscription.dispose())},b}(Sc),Bf=Pa.ConnectableObservable=function(a){function b(b,c){this.source=b,this._connection=null,this._source=b.asObservable(),this._subject=c,a.call(this)}function c(a,b){this._p=a,this._s=b}return Vb(b,a),c.prototype.dispose=function(){this._s&&(this._s.dispose(),this._s=null,this._p._connection=null)},b.prototype.connect=function(){if(!this._connection){var a=this._source.subscribe(this._subject);this._connection=new c(this,a)}return this._connection},b.prototype._subscribe=function(a){return this._subject.subscribe(a)},b.prototype.refCount=function(){return new Af(this)},b}(Rc);Lc.singleInstance=function(){function a(){return d||(d=!0,b=c["finally"](function(){d=!1}).publish().refCount()),b}var b,c=this,d=!1;return new ug(function(b){return a().subscribe(b)})},Lc.join=function(a,b,c,d){var e=this;return new ug(function(f){var g=new $b,h=!1,i=!1,j=0,k=0,l=new Lf,m=new Lf,n=function(a){f.onError(a)};return g.add(e.subscribe(function(a){var c=j++,e=new gc;l.set(c,a),g.add(e);var i=Za(b)(a);return i===Ya?f.onError(i.e):(e.setDisposable(i.take(1).subscribe(Qa,n,function(){l["delete"](c)&&0===l.size&&h&&f.onCompleted(),g.remove(e)})),void m.forEach(function(b){var c=Za(d)(a,b);return c===Ya?f.onError(c.e):void f.onNext(c)}))},n,function(){h=!0,(i||0===l.size)&&f.onCompleted()})),g.add(a.subscribe(function(a){var b=k++,e=new gc;m.set(b,a),g.add(e);var h=Za(c)(a);return h===Ya?f.onError(h.e):(e.setDisposable(h.take(1).subscribe(Qa,n,function(){m["delete"](b)&&0===m.size&&i&&f.onCompleted(),g.remove(e)})),void l.forEach(function(b){var c=Za(d)(b,a);return c===Ya?f.onError(c.e):void f.onNext(c)}))},n,function(){i=!0,(h||0===m.size)&&f.onCompleted()})),g},e)},Lc.groupJoin=function(a,b,c,d){var e=this;return new ug(function(f){function g(a){}var h=new $b,i=new kc(h),j=new Lf,k=new Lf,l=0,m=0,g=function(a){return function(b){b.onError(a)}};return h.add(e.subscribe(function(a){var c=new yg,e=l++;j.set(e,c);var m=Za(d)(a,Xb(c,i));if(m===Ya)return j.forEach(g(m.e)),f.onError(m.e);f.onNext(m),k.forEach(function(a){c.onNext(a)});var n=new gc;h.add(n);var o=Za(b)(a);return o===Ya?(j.forEach(g(o.e)),f.onError(o.e)):void n.setDisposable(o.take(1).subscribe(Qa,function(a){j.forEach(g(a)),f.onError(a)},function(){j["delete"](e)&&c.onCompleted(),h.remove(n)}))},function(a){j.forEach(g(a)),f.onError(a)},function(){f.onCompleted()})),h.add(a.subscribe(function(a){var b=m++;k.set(b,a);var d=new gc;h.add(d);var e=Za(c)(a);return e===Ya?(j.forEach(g(e.e)),f.onError(e.e)):(d.setDisposable(e.take(1).subscribe(Qa,function(a){j.forEach(g(a)),f.onError(a)},function(){k["delete"](b),h.remove(d)})),void j.forEach(function(b){b.onNext(a)}))},function(a){j.forEach(g(a)),f.onError(a)})),i},e)},Lc.buffer=function(){return this.window.apply(this,arguments).flatMap(O)},Lc.window=function(a,b){return 1===arguments.length&&"function"!=typeof arguments[0]?ka.call(this,a):"function"==typeof a?la.call(this,a):ja.call(this,a,b)};var Cf=function(a){function b(b){this.source=b,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Df(a))},b}(Sc),Df=function(a){function b(b){this._o=b,this._p=null,this._hp=!1,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._hp?this._o.onNext([this._p,a]):this._hp=!0,this._p=a},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Lc.pairwise=function(){return new Cf(this)},Lc.partition=function(a,b){var c=nb(a,b,3);return[this.filter(a,b),this.filter(function(a,b,d){return!c(a,b,d)})]};var Ef=function(a){function b(a,b){this.c=a,this.s=b}return Vb(b,a),b.prototype[jb]=function(){var a=this;return{next:function(){return a.c()?{done:!1,value:a.s}:{done:!0,value:void 0}}}},b}(Uc);Lc.letBind=Lc.let=function(a){return a(this)},Rc["if"]=function(a,b,c){return fd(function(){return c||(c=id()),Wa(b)&&(b=cd(b)),Wa(c)&&(c=cd(c)),"function"==typeof c.now&&(c=id(c)),a()?b:c})},Rc["for"]=Rc.forIn=function(a,b,c){return $c(a,b,c).concat()};var Ff=Rc["while"]=Rc.whileDo=function(a,b){return Wa(b)&&(b=cd(b)),ma(a,b).concat()};Lc.doWhile=function(a){return Hd([this,Ff(a,this)])},Rc["case"]=function(a,b,c){return fd(function(){Wa(c)&&(c=cd(c)),c||(c=id()),oc(c)&&(c=id(c));var d=b[a()];return Wa(d)&&(d=cd(d)),d||c})};var Gf=function(a){function b(b,c,d){this.source=b,this._fn=c,this._scheduler=d,a.call(this)}function c(a,b){var c,d=a[0],e=a[1];if(!(d.q.length>0))return void(d.isAcquired=!1);c=d.q.shift();var f=new gc;d.d.add(f),f.setDisposable(c.subscribe(new Hf(d,e,f))),b([d,e])}return Vb(b,a),b.prototype._ensureActive=function(a){var b=!1;a.q.length>0&&(b=!a.isAcquired,a.isAcquired=!0),b&&a.m.setDisposable(this._scheduler.scheduleRecursive([a,this],c))},b.prototype.subscribeCore=function(a){var b=new hc,c=new $b(b),d={q:[],m:b,d:c,activeCount:0,isAcquired:!1,o:a};return d.q.push(this.source),d.activeCount++,this._ensureActive(d),c},b}(Sc),Hf=function(a){function b(b,c,d){this._s=b,this._p=c,this._m1=d,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._s.o.onNext(a);var b=Za(this._p._fn)(a);return b===Ya?this._s.o.onError(b.e):(this._s.q.push(b),this._s.activeCount++,void this._p._ensureActive(this._s))},b.prototype.error=function(a){this._s.o.onError(a)},b.prototype.completed=function(){this._s.d.remove(this._m1),this._s.activeCount--,0===this._s.activeCount&&this._s.o.onCompleted()},b}(Mc);Lc.expand=function(a,b){return oc(b)||(b=vc),new Gf(this,a,b)};var If=function(a){function b(b,c){this._sources=b,this._cb=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){if(0===this._sources.length)return a.onCompleted(),cc;for(var b=this._sources.length,c={finished:!1,hasResults:new Array(b),hasCompleted:new Array(b),results:new Array(b)},d=new $b,e=0,f=this._sources.length;f>e;e++){var g=this._sources[e];Wa(g)&&(g=cd(g)),d.add(g.subscribe(new Jf(a,c,e,this._cb,d)))}return d},b}(Sc),Jf=function(a){function b(b,c,d,e,f){this._o=b,this._s=c,this._i=d,this._cb=e,this._subs=f,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._s.finished||(this._s.hasResults[this._i]=!0,this._s.results[this._i]=a)},b.prototype.error=function(a){this._s.finished=!0,this._o.onError(a),this._subs.dispose()},b.prototype.completed=function(){if(!this._s.finished){if(!this._s.hasResults[this._i])return this._o.onCompleted();this._s.hasCompleted[this._i]=!0;for(var a=0;a<this._s.results.length;a++)if(!this._s.hasCompleted[a])return;this._s.finished=!0;var b=Za(this._cb).apply(null,this._s.results);if(b===Ya)return this._o.onError(b.e);this._o.onNext(b),this._o.onCompleted()}},b}(Mc);Rc.forkJoin=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];var d=Xa(b[a-1])?b.pop():L;return Array.isArray(b[0])&&(b=b[0]),new If(b,d)},Lc.forkJoin=function(){for(var a=arguments.length,b=new Array(a),c=0;a>c;c++)b[c]=arguments[c];return Array.isArray(b[0])?b[0].unshift(this):b.unshift(this),Rc.forkJoin.apply(null,b)},Lc.manySelect=Lc.extend=function(a,b){oc(b)||(b=Pa.Scheduler.immediate);var c=this;return fd(function(){var d;return c.map(function(a){var b=new Kf(a);return d&&d.onNext(a),d=b,b}).tap(Qa,function(a){d&&d.onError(a)},function(){d&&d.onCompleted()}).observeOn(b).map(a)},c)};var Kf=function(a){function b(b){a.call(this),this.head=b,this.tail=new zg}return Vb(b,a),Wb(b.prototype,Jc,{_subscribe:function(a){var b=new $b;return b.add(vc.schedule(this,function(c,d){a.onNext(d.head),b.add(d.tail.mergeAll().subscribe(a))})),b},onCompleted:function(){this.onNext(Rc.empty())},onError:function(a){this.onNext(Rc["throw"](a))},onNext:function(a){this.tail.onNext(a),this.tail.onCompleted()}}),b}(Rc),Lf=Oa.Map||function(){function b(){this.size=0,this._values=[],this._keys=[]}return b.prototype["delete"]=function(a){var b=this._keys.indexOf(a);return-1===b?!1:(this._values.splice(b,1),this._keys.splice(b,1),this.size--,!0)},b.prototype.get=function(b){var c=this._keys.indexOf(b);return-1===c?a:this._values[c]},b.prototype.set=function(a,b){var c=this._keys.indexOf(a);return-1===c?(this._keys.push(a),this._values.push(b),this.size++):this._values[c]=b,this},b.prototype.forEach=function(a,b){for(var c=0;c<this.size;c++)a.call(b,this._values[c],this._keys[c])},b}();na.prototype.and=function(a){return new na(this.patterns.concat(a))},na.prototype.thenDo=function(a){return new oa(this,a)},oa.prototype.activate=function(a,b,c){for(var d=[],e=pa(b),f=0,g=this.expression.patterns.length;g>f;f++)d.push(ra(a,this.expression.patterns[f],e));var h=new sa(d,qa(this,b),function(){for(var a=0,b=d.length;b>a;a++)d[a].removeActivePlan(h);c(h)});for(f=0,g=d.length;g>f;f++)d[f].addActivePlan(h);return h},sa.prototype.dequeue=function(){this.joinObservers.forEach(function(a){a.queue.shift()})},sa.prototype.match=function(){var a,b,c=!0;for(a=0,b=this.joinObserverArray.length;b>a;a++)if(0===this.joinObserverArray[a].queue.length){c=!1;break}if(c){var d=[],e=!1;for(a=0,b=this.joinObserverArray.length;b>a;a++)d.push(this.joinObserverArray[a].queue[0]),"C"===this.joinObserverArray[a].queue[0].kind&&(e=!0);if(e)this.onCompleted();else{this.dequeue();var f=[];for(a=0,b=d.length;a<d.length;a++)f.push(d[a].value);this.onNext.apply(this,f)}}};var Mf=function(a){function b(b,c){a.call(this),this.source=b,this.onError=c,this.queue=[],this.activePlans=[],this.subscription=new gc,this.isDisposed=!1}Vb(b,a);var c=b.prototype;return c.next=function(a){if(!this.isDisposed){if("E"===a.kind)return this.onError(a.error);this.queue.push(a);for(var b=this.activePlans.slice(0),c=0,d=b.length;d>c;c++)b[c].match()}},c.error=Qa,c.completed=Qa,c.addActivePlan=function(a){this.activePlans.push(a)},c.subscribe=function(){this.subscription.setDisposable(this.source.materialize().subscribe(this))},c.removeActivePlan=function(a){this.activePlans.splice(this.activePlans.indexOf(a),1),0===this.activePlans.length&&this.dispose()},c.dispose=function(){a.prototype.dispose.call(this),this.isDisposed||(this.isDisposed=!0,this.subscription.dispose())},b}(Mc);Lc.and=function(a){return new na([this,a])},Lc.thenDo=function(a){return new na([this]).thenDo(a)},Rc.when=function(){var a,b=arguments.length;if(Array.isArray(arguments[0]))a=arguments[0];else{a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}return new ug(function(b){var c=[],d=new Lf,e=Kc(function(a){b.onNext(a)},function(a){d.forEach(function(b){b.onError(a)}),b.onError(a)},function(a){b.onCompleted()});try{for(var f=0,g=a.length;g>f;f++)c.push(a[f].activate(d,e,function(a){var d=c.indexOf(a);c.splice(d,1),0===c.length&&b.onCompleted()}))}catch(h){xd(h).subscribe(b)}var i=new $b;return d.forEach(function(a){a.subscribe(),i.add(a)}),i})};var Nf=function(a){function b(b,c){this._dt=b,this._s=c,a.call(this)}function c(a,b){b.onNext(0),b.onCompleted()}return Vb(b,a),b.prototype.subscribeCore=function(a){return this._s.scheduleFuture(a,this._dt,c)},b}(Sc),Of=Rc.interval=function(a,b){return va(a,a,oc(b)?b:Ac)};Rc.timer=function(b,c,d){var e;return oc(d)||(d=Ac),null!=c&&"number"==typeof c?e=c:oc(c)&&(d=c),(b instanceof Date||"number"==typeof b)&&e===a?ta(b,d):b instanceof Date&&e!==a?ua(b.getTime(),c,d):va(b,e,d)};Lc.delay=function(){var a=arguments[0];if("number"==typeof a||a instanceof Date){var b=a,c=arguments[1];return oc(c)||(c=Ac),b instanceof Date?xa(this,b,c):wa(this,b,c)}if(Rc.isObservable(a)||Xa(a))return ya(this,a,arguments[1]);throw new Error("Invalid arguments")};var Pf=function(a){function b(b,c,d){oc(d)||(d=Ac),this.source=b,this._dt=c,this._s=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new hc;return new ic(this.source.subscribe(new Qf(a,this._dt,this._s,b)),b)},b}(Sc),Qf=function(a){function b(b,c,d,e){this._o=b,this._d=c,this._scheduler=d,this._c=e,this._v=null,this._hv=!1,this._id=0,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._hv=!0,this._v=a;var b=++this._id,c=new gc;this._c.setDisposable(c),c.setDisposable(this._scheduler.scheduleFuture(this,this._d,function(c,d){d._hv&&d._id===b&&d._o.onNext(a),d._hv=!1}))},b.prototype.error=function(a){this._c.dispose(),this._o.onError(a),this._hv=!1,this._id++},b.prototype.completed=function(){this._c.dispose(),this._hv&&this._o.onNext(this._v),this._o.onCompleted(),this._hv=!1,this._id++},b}(Mc);Lc.debounce=function(){if(Xa(arguments[0]))return za(this,arguments[0]);if("number"==typeof arguments[0])return new Pf(this,arguments[0],arguments[1]);throw new Error("Invalid arguments")},Lc.windowWithTime=function(a,b,c){var d,e=this;return null==b&&(d=a),oc(c)||(c=Ac),"number"==typeof b?d=b:oc(b)&&(d=a,c=b),new ug(function(b){function f(){var a=new gc,e=!1,g=!1;l.setDisposable(a),j===i?(e=!0,g=!0):i>j?e=!0:g=!0;var n=e?j:i,o=n-m;m=n,e&&(j+=d),g&&(i+=d),a.setDisposable(c.scheduleFuture(null,o,function(){if(g){var a=new yg;k.push(a),b.onNext(Xb(a,h))}e&&k.shift().onCompleted(),f()}))}var g,h,i=d,j=a,k=[],l=new hc,m=0;return g=new $b(l),h=new kc(g),k.push(new yg),b.onNext(Xb(k[0],h)),f(),g.add(e.subscribe(function(a){for(var b=0,c=k.length;c>b;b++)k[b].onNext(a)},function(a){for(var c=0,d=k.length;d>c;c++)k[c].onError(a);b.onError(a)},function(){for(var a=0,c=k.length;c>a;a++)k[a].onCompleted();b.onCompleted()})),h},e)},Lc.windowWithTimeOrCount=function(a,b,c){var d=this;return oc(c)||(c=Ac),new ug(function(e){function f(b){var d=new gc;g.setDisposable(d),d.setDisposable(c.scheduleFuture(null,a,function(){if(b===k){j=0;var a=++k;l.onCompleted(),l=new yg,e.onNext(Xb(l,i)),f(a)}}))}var g=new hc,h=new $b(g),i=new kc(h),j=0,k=0,l=new yg;return e.onNext(Xb(l,i)),f(0),h.add(d.subscribe(function(a){var c=0,d=!1;l.onNext(a),++j===b&&(d=!0,j=0,c=++k,l.onCompleted(),l=new yg,e.onNext(Xb(l,i))),d&&f(c)},function(a){l.onError(a),e.onError(a)},function(){l.onCompleted(),e.onCompleted()})),i},d)},Lc.bufferWithTime=function(a,b,c){return this.windowWithTime(a,b,c).flatMap(O)},Lc.bufferWithTimeOrCount=function(a,b,c){return this.windowWithTimeOrCount(a,b,c).flatMap(O)};var Rf=function(a){function b(b,c){this.source=b,this._s=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Sf(a,this._s))},b}(Sc),Sf=function(a){function b(b,c){this._o=b,this._s=c,this._l=c.now(),a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=this._s.now(),c=b-this._l;this._l=b,this._o.onNext({value:a,interval:c})},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Lc.timeInterval=function(a){return oc(a)||(a=Ac),new Rf(this,a)};var Tf=function(a){function b(b,c){this.source=b,this._s=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new Uf(a,this._s))},b}(Sc),Uf=function(a){function b(b,c){this._o=b,this._s=c,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._o.onNext({value:a,timestamp:this._s.now()})},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Lc.timestamp=function(a){return oc(a)||(a=Ac),new Tf(this,a)};var Vf=function(a){function b(b,c){this.source=b,this._sampler=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b={o:a,atEnd:!1,value:null,hasValue:!1,sourceSubscription:new gc};return b.sourceSubscription.setDisposable(this.source.subscribe(new Xf(b))),new ic(b.sourceSubscription,this._sampler.subscribe(new Wf(b)))},b}(Sc),Wf=function(a){function b(b){this._s=b,a.call(this)}return Vb(b,a),b.prototype._handleMessage=function(){this._s.hasValue&&(this._s.hasValue=!1,this._s.o.onNext(this._s.value)),this._s.atEnd&&this._s.o.onCompleted()},b.prototype.next=function(){this._handleMessage()},b.prototype.error=function(a){this._s.onError(a)},b.prototype.completed=function(){this._handleMessage()},b}(Mc),Xf=function(a){function b(b){this._s=b,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._s.hasValue=!0,this._s.value=a},b.prototype.error=function(a){this._s.o.onError(a)},b.prototype.completed=function(){this._s.atEnd=!0,this._s.sourceSubscription.dispose()},b}(Mc);Lc.sample=function(a,b){return oc(b)||(b=Ac),"number"==typeof a?new Vf(this,Of(a,b)):new Vf(this,a)};var Yf=Pa.TimeoutError=function(a){this.message=a||"Timeout has occurred",this.name="TimeoutError",Error.call(this)};Yf.prototype=Object.create(Error.prototype),Lc.timeout=function(){var a=arguments[0];if(a instanceof Date||"number"==typeof a)return Ba(this,a,arguments[1],arguments[2]);if(Rc.isObservable(a)||Xa(a))return Aa(this,a,arguments[1],arguments[2]);throw new Error("Invalid arguments")};var Zf=function(a){function b(b,c,d,e,f,g){this._state=b,this._cndFn=c,this._itrFn=d,this._resFn=e,this._timeFn=f,this._s=g,a.call(this)}function c(a,b){if(a.hasResult&&a.o.onNext(a.newState),a.first)a.first=!1;else if(a.newState=Za(a.self._itrFn)(a.newState),a.newState===Ya)return a.o.onError(a.newState.e);if(a.hasResult=Za(a.self._cndFn)(a.newState),a.hasResult===Ya)return a.o.onError(a.hasResult.e);if(a.hasResult){var c=Za(a.self._resFn)(a.newState);if(c===Ya)return a.o.onError(c.e);var d=Za(a.self._timeFn)(a.newState);if(d===Ya)return a.o.onError(d.e);b(a,d)}else a.o.onCompleted()}return Vb(b,a),b.prototype.subscribeCore=function(a){var b={o:a,self:this,newState:this._state,first:!0,hasValue:!1};return this._s.scheduleRecursiveFuture(b,new Date(this._s.now()),c)},b}(Sc);Rc.generateWithAbsoluteTime=function(a,b,c,d,e,f){return oc(f)||(f=Ac),new Zf(a,b,c,d,e,f)};var $f=function(a){function b(b,c,d,e,f,g){this._state=b,this._cndFn=c,this._itrFn=d,this._resFn=e,this._timeFn=f,this._s=g,a.call(this)}function c(a,b){if(a.hasResult&&a.o.onNext(a.newState),a.first)a.first=!1;else if(a.newState=Za(a.self._itrFn)(a.newState),a.newState===Ya)return a.o.onError(a.newState.e);if(a.hasResult=Za(a.self._cndFn)(a.newState),a.hasResult===Ya)return a.o.onError(a.hasResult.e);if(a.hasResult){var c=Za(a.self._resFn)(a.newState);if(c===Ya)return a.o.onError(c.e);var d=Za(a.self._timeFn)(a.newState);if(d===Ya)return a.o.onError(d.e);b(a,d)}else a.o.onCompleted()}return Vb(b,a),b.prototype.subscribeCore=function(a){var b={o:a,self:this,newState:this._state,first:!0,hasValue:!1};return this._s.scheduleRecursiveFuture(b,0,c)},b}(Sc);Rc.generateWithRelativeTime=function(a,b,c,d,e,f){return oc(f)||(f=Ac),new $f(a,b,c,d,e,f)};var _f=function(a){function b(b,c,d){this.source=b,this._dt=c,this._s=d,a.call(this)}function c(a,b){var c=b[0],d=b[1],e=b[2];e.setDisposable(c.subscribe(d))}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new hc;return b.setDisposable(this._s.scheduleFuture([this.source,a,b],this._dt,c)),b},b}(Sc);Lc.delaySubscription=function(a,b){return oc(b)||(b=Ac),new _f(this,a,b)};var ag=function(a){function b(b,c,d){this.source=b,this._d=c,this._s=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new bg(a,this))},b}(Sc),bg=function(a){function b(b,c){this._o=b,this._s=c._s,this._d=c._d,this._q=[],a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=this._s.now();for(this._q.push({interval:b,value:a});this._q.length>0&&b-this._q[0].interval>=this._d;)this._o.onNext(this._q.shift().value)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){for(var a=this._s.now();this._q.length>0&&a-this._q[0].interval>=this._d;)this._o.onNext(this._q.shift().value);this._o.onCompleted()},b}(Mc);Lc.skipLastWithTime=function(a,b){return oc(b)||(b=Ac),new ag(this,a,b)};var cg=function(a){function b(b,c,d){this.source=b,this._d=c,this._s=d,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new dg(a,this._d,this._s))},b}(Sc),dg=function(a){function b(b,c,d){this._o=b,this._d=c,this._s=d,this._q=[],a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=this._s.now();for(this._q.push({interval:b,value:a});this._q.length>0&&b-this._q[0].interval>=this._d;)this._q.shift()},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){for(var a=this._s.now();this._q.length>0;){var b=this._q.shift();a-b.interval<=this._d&&this._o.onNext(b.value)}this._o.onCompleted()},b}(Mc);Lc.takeLastWithTime=function(a,b){return oc(b)||(b=Ac),new cg(this,a,b)},Lc.takeLastBufferWithTime=function(a,b){var c=this;return oc(b)||(b=Ac),new ug(function(d){var e=[];return c.subscribe(function(c){var d=b.now();for(e.push({interval:d,value:c});e.length>0&&d-e[0].interval>=a;)e.shift()},function(a){d.onError(a)},function(){for(var c=b.now(),f=[];e.length>0;){var g=e.shift();c-g.interval<=a&&f.push(g.value)}d.onNext(f),d.onCompleted()})},c)};var eg=function(a){function b(b,c,d){this.source=b,this._d=c,this._s=d,a.call(this)}function c(a,b){b.onCompleted()}return Vb(b,a),b.prototype.subscribeCore=function(a){return new ic(this._s.scheduleFuture(a,this._d,c),this.source.subscribe(a))},b}(Sc);Lc.takeWithTime=function(a,b){return oc(b)||(b=Ac),new eg(this,a,b)};var fg=function(a){function b(b,c,d){this.source=b,this._d=c,this._s=d,this._open=!1,a.call(this)}function c(a,b){b._open=!0}return Vb(b,a),b.prototype.subscribeCore=function(a){return new ic(this._s.scheduleFuture(this,this._d,c),this.source.subscribe(new gg(a,this)))},b}(Sc),gg=function(a){function b(b,c){this._o=b,this._p=c,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._p._open&&this._o.onNext(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Lc.skipWithTime=function(a,b){return oc(b)||(b=Ac),new fg(this,a,b)};var hg=function(a){function b(b,c,d){this.source=b,this._st=c,this._s=d,a.call(this)}function c(a,b){b._open=!0}return Vb(b,a),b.prototype.subscribeCore=function(a){return this._open=!1,new ic(this._s.scheduleFuture(this,this._st,c),this.source.subscribe(new ig(a,this)))},b}(Sc),ig=function(a){function b(b,c){this._o=b,this._p=c,a.call(this)}return Vb(b,a),b.prototype.next=function(a){this._p._open&&this._o.onNext(a)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._o.onCompleted()},b}(Mc);Lc.skipUntilWithTime=function(a,b){return oc(b)||(b=Ac),new hg(this,a,b)},Lc.takeUntilWithTime=function(a,b){oc(b)||(b=Ac);var c=this;return new ug(function(d){return new ic(b.scheduleFuture(d,a,function(a,b){b.onCompleted()}),c.subscribe(d))},c)},Lc.throttle=function(a,b){oc(b)||(b=Ac);var c=+a||0;if(0>=c)throw new RangeError("windowDuration cannot be less or equal zero.");var d=this;return new ug(function(a){var e=0;return d.subscribe(function(d){var f=b.now();(0===e||f-e>=c)&&(e=f,a.onNext(d))},function(b){a.onError(b)},function(){a.onCompleted()})},d)};var jg=function(a){function b(b,c){this._o=b,this._xform=c,a.call(this)}return Vb(b,a),b.prototype.next=function(a){var b=Za(this._xform["@@transducer/step"]).call(this._xform,this._o,a);b===Ya&&this._o.onError(b.e)},b.prototype.error=function(a){this._o.onError(a)},b.prototype.completed=function(){this._xform["@@transducer/result"](this._o)},b}(Mc);Lc.transduce=function(a){var b=this;return new ug(function(c){var d=a(Ca(c));return b.subscribe(new jg(c,d))},b)};var kg=function(a){function b(b){this.source=b,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){var b=new gc,c=new $b,d={hasCurrent:!1,isStopped:!1,o:a,g:c};return c.add(b),b.setDisposable(this.source.subscribe(new lg(d))),c},b}(Sc),lg=function(a){function b(b){this._s=b,a.call(this)}function c(b,c){this._s=b,this._i=c,a.call(this)}return Vb(b,a),b.prototype.next=function(a){if(!this._s.hasCurrent){this._s.hasCurrent=!0,Wa(a)&&(a=cd(a));var b=new gc;this._s.g.add(b),b.setDisposable(a.subscribe(new c(this._s,b)))}},b.prototype.error=function(a){this._s.o.onError(a)},b.prototype.completed=function(){this._s.isStopped=!0,!this._s.hasCurrent&&1===this._s.g.length&&this._s.o.onCompleted()},Vb(c,a),c.prototype.next=function(a){this._s.o.onNext(a)},c.prototype.error=function(a){this._s.o.onError(a)},c.prototype.completed=function(){this._s.g.remove(this._i),this._s.hasCurrent=!1,this._s.isStopped&&1===this._s.g.length&&this._s.o.onCompleted()},b}(Mc);Lc.switchFirst=function(){return new kg(this)},Lc.flatMapFirst=Lc.selectManyFirst=function(a,b,c){return new Tc(this,a,b,c).switchFirst()},Pa.Observable.prototype.flatMapWithMaxConcurrent=function(a,b,c,d){return new Tc(this,b,c,d).merge(a)};var mg=Pa.VirtualTimeScheduler=function(a){function b(b,c){this.clock=b,this.comparer=c,this.isEnabled=!1,this.queue=new Yb(1024),a.call(this);
}Vb(b,a);var c=b.prototype;return c.now=function(){return this.toAbsoluteTime(this.clock)},c.schedule=function(a,b){return this.scheduleAbsolute(a,this.clock,b)},c.scheduleFuture=function(a,b,c){var d=b instanceof Date?this.toRelativeTime(b-this.now()):this.toRelativeTime(b);return this.scheduleRelative(a,d,c)},c.add=ib,c.toAbsoluteTime=ib,c.toRelativeTime=ib,c.schedulePeriodic=function(a,b,c){var d=new rc(this,a,b,c);return d.start()},c.scheduleRelative=function(a,b,c){var d=this.add(this.clock,b);return this.scheduleAbsolute(a,d,c)},c.start=function(){if(!this.isEnabled){this.isEnabled=!0;do{var a=this.getNext();null!==a?(this.comparer(a.dueTime,this.clock)>0&&(this.clock=a.dueTime),a.invoke()):this.isEnabled=!1}while(this.isEnabled)}},c.stop=function(){this.isEnabled=!1},c.advanceTo=function(a){var b=this.comparer(this.clock,a);if(this.comparer(this.clock,a)>0)throw new fb;if(0!==b&&!this.isEnabled){this.isEnabled=!0;do{var c=this.getNext();null!==c&&this.comparer(c.dueTime,a)<=0?(this.comparer(c.dueTime,this.clock)>0&&(this.clock=c.dueTime),c.invoke()):this.isEnabled=!1}while(this.isEnabled);this.clock=a}},c.advanceBy=function(a){var b=this.add(this.clock,a),c=this.comparer(this.clock,b);if(c>0)throw new fb;0!==c&&this.advanceTo(b)},c.sleep=function(a){var b=this.add(this.clock,a);if(this.comparer(this.clock,b)>=0)throw new fb;this.clock=b},c.getNext=function(){for(;this.queue.length>0;){var a=this.queue.peek();if(!a.isCancelled())return a;this.queue.dequeue()}return null},c.scheduleAbsolute=function(a,b,c){function d(a,b){return e.queue.remove(f),c(a,b)}var e=this,f=new lc(this,a,d,b,this.comparer);return this.queue.enqueue(f),f.disposable},b}(mc);Pa.HistoricalScheduler=function(a){function b(b,c){var d=null==b?0:b,e=c||Ua;a.call(this,d,e)}Vb(b,a);var c=b.prototype;return c.add=function(a,b){return a+b},c.toAbsoluteTime=function(a){return new Date(a).getTime()},c.toRelativeTime=function(a){return a},b}(Pa.VirtualTimeScheduler),Da.prototype.equals=function(a){return a===this?!0:null==a?!1:"N"!==a.kind?!1:this.predicate(a.value)},Ea.prototype.equals=function(a){return a===this?!0:null==a?!1:"E"!==a.kind?!1:this.predicate(a.error)};var ng=Pa.ReactiveTest={created:100,subscribed:200,disposed:1e3,onNext:function(a,b){return"function"==typeof b?new og(a,new Da(b)):new og(a,Cc.createOnNext(b))},onError:function(a,b){return"function"==typeof b?new og(a,new Ea(b)):new og(a,Cc.createOnError(b))},onCompleted:function(a){return new og(a,Cc.createOnCompleted())},subscribe:function(a,b){return new pg(a,b)}},og=Pa.Recorded=function(a,b,c){this.time=a,this.value=b,this.comparer=c||Ta};og.prototype.equals=function(a){return this.time===a.time&&this.comparer(this.value,a.value)},og.prototype.toString=function(){return this.value.toString()+"@"+this.time};var pg=Pa.Subscription=function(a,b){this.subscribe=a,this.unsubscribe=b||Number.MAX_VALUE};pg.prototype.equals=function(a){return this.subscribe===a.subscribe&&this.unsubscribe===a.unsubscribe},pg.prototype.toString=function(){return"("+this.subscribe+", "+(this.unsubscribe===Number.MAX_VALUE?"Infinite":this.unsubscribe)+")"};var qg=Pa.MockDisposable=function(a){this.scheduler=a,this.disposes=[],this.disposes.push(this.scheduler.clock)};qg.prototype.dispose=function(){this.disposes.push(this.scheduler.clock)};var rg=function(a){function b(b){a.call(this),this.scheduler=b,this.messages=[]}Vb(b,a);var c=b.prototype;return c.onNext=function(a){this.messages.push(new og(this.scheduler.clock,Cc.createOnNext(a)))},c.onError=function(a){this.messages.push(new og(this.scheduler.clock,Cc.createOnError(a)))},c.onCompleted=function(){this.messages.push(new og(this.scheduler.clock,Cc.createOnCompleted()))},b}(Jc);Fa.prototype.then=function(b,c){var d=this;this.subscriptions.push(new pg(this.scheduler.clock));var e,f=this.subscriptions.length-1,g=Pa.Observer.create(function(c){var h=b(c);if(h&&"function"==typeof h.then)e=h;else{var i=d.scheduler.clock;e=new Fa(d.scheduler,[Pa.ReactiveTest.onNext(i,a),Pa.ReactiveTest.onCompleted(i)])}var j=d.observers.indexOf(g);d.observers.splice(j,1),d.subscriptions[f]=new pg(d.subscriptions[f].subscribe,d.scheduler.clock)},function(a){c(a);var b=d.observers.indexOf(g);d.observers.splice(b,1),d.subscriptions[f]=new pg(d.subscriptions[f].subscribe,d.scheduler.clock)});return this.observers.push(g),e||new Fa(this.scheduler,this.messages)};var sg=function(a){function b(b,c){a.call(this);var d,e,f=this;this.scheduler=b,this.messages=c,this.subscriptions=[],this.observers=[];for(var g=0,h=this.messages.length;h>g;g++)d=this.messages[g],e=d.value,function(a){b.scheduleAbsolute(null,d.time,function(){for(var b=f.observers.slice(0),c=0,d=b.length;d>c;c++)a.accept(b[c]);return cc})}(e)}return Vb(b,a),b.prototype._subscribe=function(a){var b=this;this.observers.push(a),this.subscriptions.push(new pg(this.scheduler.clock));var c=this.subscriptions.length-1;return bc(function(){var d=b.observers.indexOf(a);b.observers.splice(d,1),b.subscriptions[c]=new pg(b.subscriptions[c].subscribe,b.scheduler.clock)})},b}(Rc),tg=function(a){function b(b,c){a.call(this),this.scheduler=b,this.messages=c,this.subscriptions=[]}return Vb(b,a),b.prototype._subscribe=function(a){var b,c,d=this;this.subscriptions.push(new pg(this.scheduler.clock));for(var e=this.subscriptions.length-1,f=new $b,g=0,h=this.messages.length;h>g;g++)b=this.messages[g],c=b.value,function(c){f.add(d.scheduler.scheduleRelative(null,b.time,function(){return c.accept(a),cc}))}(c);return bc(function(){d.subscriptions[e]=new pg(d.subscriptions[e].subscribe,d.scheduler.clock),f.dispose()})},b}(Rc);Pa.TestScheduler=function(a){function b(a,b){return a>b?1:b>a?-1:0}function c(){a.call(this,0,b)}return Vb(c,a),c.prototype.scheduleAbsolute=function(b,c,d){return c<=this.clock&&(c=this.clock+1),a.prototype.scheduleAbsolute.call(this,b,c,d)},c.prototype.add=function(a,b){return a+b},c.prototype.toAbsoluteTime=function(a){return new Date(a).getTime()},c.prototype.toRelativeTime=function(a){return a},c.prototype.startScheduler=function(a,b){b||(b={}),null==b.created&&(b.created=ng.created),null==b.subscribed&&(b.subscribed=ng.subscribed),null==b.disposed&&(b.disposed=ng.disposed);var c,d,e=this.createObserver();return this.scheduleAbsolute(null,b.created,function(){return c=a(),cc}),this.scheduleAbsolute(null,b.subscribed,function(){return d=c.subscribe(e),cc}),this.scheduleAbsolute(null,b.disposed,function(){return d.dispose(),cc}),this.start(),e},c.prototype.createHotObservable=function(){var a,b=arguments.length;if(Array.isArray(arguments[0]))a=arguments[0];else{a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}return new sg(this,a)},c.prototype.createColdObservable=function(){var a,b=arguments.length;if(Array.isArray(arguments[0]))a=arguments[0];else{a=new Array(b);for(var c=0;b>c;c++)a[c]=arguments[c]}return new tg(this,a)},c.prototype.createResolvedPromise=function(a,b){return new Fa(this,[Pa.ReactiveTest.onNext(a,b),Pa.ReactiveTest.onCompleted(a)])},c.prototype.createRejectedPromise=function(a,b){return new Fa(this,[Pa.ReactiveTest.onError(a,b)])},c.prototype.createObserver=function(){return new rg(this)},c}(mg);var ug=Pa.AnonymousObservable=function(a){function b(a){return a&&Xa(a.dispose)?a:Xa(a)?bc(a):cc}function c(a,c){var d=c[0],f=c[1],g=Za(f.__subscribe).call(f,d);g!==Ya||d.fail(Ya.e)||e(Ya.e),d.setDisposable(b(g))}function d(b,c){this.source=c,this.__subscribe=b,a.call(this)}return Vb(d,a),d.prototype._subscribe=function(a){var b=new vg(a),d=[b,this];return vc.scheduleRequired()?vc.schedule(d,c):c(null,d),b},d}(Rc),vg=function(a){function b(b){a.call(this),this.observer=b,this.m=new gc}Vb(b,a);var c=b.prototype;return c.next=function(a){var b=Za(this.observer.onNext).call(this.observer,a);b===Ya&&(this.dispose(),e(b.e))},c.error=function(a){var b=Za(this.observer.onError).call(this.observer,a);this.dispose(),b===Ya&&e(b.e)},c.completed=function(){var a=Za(this.observer.onCompleted).call(this.observer);this.dispose(),a===Ya&&e(a.e)},c.setDisposable=function(a){this.m.setDisposable(a)},c.getDisposable=function(){return this.m.getDisposable()},c.dispose=function(){a.prototype.dispose.call(this),this.m.dispose()},b}(Mc),wg=function(a){function b(b,c){this._m=b,this._u=c,a.call(this)}return Vb(b,a),b.prototype.subscribeCore=function(a){return new ic(this._m.getDisposable(),this._u.subscribe(a))},b}(Sc),xg=function(a){function b(b,c,d){a.call(this),this.key=b,this.underlyingObservable=d?new wg(d,c):c}return Vb(b,a),b.prototype._subscribe=function(a){return this.underlyingObservable.subscribe(a)},b}(Rc),yg=Pa.Subject=function(a){function b(){a.call(this),this.isDisposed=!1,this.isStopped=!1,this.observers=[],this.hasError=!1}return Vb(b,a),Wb(b.prototype,Jc.prototype,{_subscribe:function(a){return ec(this),this.isStopped?this.hasError?(a.onError(this.error),cc):(a.onCompleted(),cc):(this.observers.push(a),new zf(this,a))},hasObservers:function(){return this.observers.length>0},onCompleted:function(){if(ec(this),!this.isStopped){this.isStopped=!0;for(var a=0,b=c(this.observers),d=b.length;d>a;a++)b[a].onCompleted();this.observers.length=0}},onError:function(a){if(ec(this),!this.isStopped){this.isStopped=!0,this.error=a,this.hasError=!0;for(var b=0,d=c(this.observers),e=d.length;e>b;b++)d[b].onError(a);this.observers.length=0}},onNext:function(a){if(ec(this),!this.isStopped)for(var b=0,d=c(this.observers),e=d.length;e>b;b++)d[b].onNext(a)},dispose:function(){this.isDisposed=!0,this.observers=null}}),b.create=function(a,b){return new Cg(a,b)},b}(Rc),zg=Pa.AsyncSubject=function(a){function b(){a.call(this),this.isDisposed=!1,this.isStopped=!1,this.hasValue=!1,this.observers=[],this.hasError=!1}return Vb(b,a),Wb(b.prototype,Jc.prototype,{_subscribe:function(a){return ec(this),this.isStopped?(this.hasError?a.onError(this.error):this.hasValue?(a.onNext(this.value),a.onCompleted()):a.onCompleted(),cc):(this.observers.push(a),new zf(this,a))},hasObservers:function(){return ec(this),this.observers.length>0},onCompleted:function(){var a,b;if(ec(this),!this.isStopped){this.isStopped=!0;var d=c(this.observers),b=d.length;if(this.hasValue)for(a=0;b>a;a++){var e=d[a];e.onNext(this.value),e.onCompleted()}else for(a=0;b>a;a++)d[a].onCompleted();this.observers.length=0}},onError:function(a){if(ec(this),!this.isStopped){this.isStopped=!0,this.hasError=!0,this.error=a;for(var b=0,d=c(this.observers),e=d.length;e>b;b++)d[b].onError(a);this.observers.length=0}},onNext:function(a){ec(this),this.isStopped||(this.value=a,this.hasValue=!0)},dispose:function(){this.isDisposed=!0,this.observers=null,this.error=null,this.value=null}}),b}(Rc),Ag=Pa.BehaviorSubject=function(a){function b(b){a.call(this),this.value=b,this.observers=[],this.isDisposed=!1,this.isStopped=!1,this.hasError=!1}return Vb(b,a),Wb(b.prototype,Jc.prototype,{_subscribe:function(a){return ec(this),this.isStopped?(this.hasError?a.onError(this.error):a.onCompleted(),cc):(this.observers.push(a),a.onNext(this.value),new zf(this,a))},getValue:function(){return ec(this),this.hasError&&e(this.error),this.value},hasObservers:function(){return this.observers.length>0},onCompleted:function(){if(ec(this),!this.isStopped){this.isStopped=!0;for(var a=0,b=c(this.observers),d=b.length;d>a;a++)b[a].onCompleted();this.observers.length=0}},onError:function(a){if(ec(this),!this.isStopped){this.isStopped=!0,this.hasError=!0,this.error=a;for(var b=0,d=c(this.observers),e=d.length;e>b;b++)d[b].onError(a);this.observers.length=0}},onNext:function(a){if(ec(this),!this.isStopped){this.value=a;for(var b=0,d=c(this.observers),e=d.length;e>b;b++)d[b].onNext(a)}},dispose:function(){this.isDisposed=!0,this.observers=null,this.value=null,this.error=null}}),b}(Rc),Bg=Pa.ReplaySubject=function(a){function b(a,b){return bc(function(){b.dispose(),!a.isDisposed&&a.observers.splice(a.observers.indexOf(b),1)})}function d(b,c,d){this.bufferSize=null==b?e:b,this.windowSize=null==c?e:c,this.scheduler=d||vc,this.q=[],this.observers=[],this.isStopped=!1,this.isDisposed=!1,this.hasError=!1,this.error=null,a.call(this)}var e=Math.pow(2,53)-1;return Vb(d,a),Wb(d.prototype,Jc.prototype,{_subscribe:function(a){ec(this);var c=new Pc(this.scheduler,a),d=b(this,c);this._trim(this.scheduler.now()),this.observers.push(c);for(var e=0,f=this.q.length;f>e;e++)c.onNext(this.q[e].value);return this.hasError?c.onError(this.error):this.isStopped&&c.onCompleted(),c.ensureActive(),d},hasObservers:function(){return this.observers.length>0},_trim:function(a){for(;this.q.length>this.bufferSize;)this.q.shift();for(;this.q.length>0&&a-this.q[0].interval>this.windowSize;)this.q.shift()},onNext:function(a){if(ec(this),!this.isStopped){var b=this.scheduler.now();this.q.push({interval:b,value:a}),this._trim(b);for(var d=0,e=c(this.observers),f=e.length;f>d;d++){var g=e[d];g.onNext(a),g.ensureActive()}}},onError:function(a){if(ec(this),!this.isStopped){this.isStopped=!0,this.error=a,this.hasError=!0;var b=this.scheduler.now();this._trim(b);for(var d=0,e=c(this.observers),f=e.length;f>d;d++){var g=e[d];g.onError(a),g.ensureActive()}this.observers.length=0}},onCompleted:function(){if(ec(this),!this.isStopped){this.isStopped=!0;var a=this.scheduler.now();this._trim(a);for(var b=0,d=c(this.observers),e=d.length;e>b;b++){var f=d[b];f.onCompleted(),f.ensureActive()}this.observers.length=0}},dispose:function(){this.isDisposed=!0,this.observers=null}}),d}(Rc),Cg=Pa.AnonymousSubject=function(a){function b(b,c){this.observer=b,this.observable=c,a.call(this)}return Vb(b,a),Wb(b.prototype,Jc.prototype,{_subscribe:function(a){return this.observable.subscribe(a)},onCompleted:function(){this.observer.onCompleted()},onError:function(a){this.observer.onError(a)},onNext:function(a){this.observer.onNext(a)}}),b}(Rc);Pa.Pauser=function(a){function b(){a.call(this)}return Vb(b,a),b.prototype.pause=function(){this.onNext(!1)},b.prototype.resume=function(){this.onNext(!0)},b}(yg),"function"==typeof define&&"object"==typeof define.amd&&define.amd?(Oa.Rx=Pa,define(function(){return Pa})):Ha&&Ia?Ma?(Ia.exports=Pa).Rx=Pa:Ha.Rx=Pa:Oa.Rx=Pa;var Dg=j()}).call(this);
//# sourceMappingURL=rx.all.map;// Autodesk.Viewing.Extensions.Markups.Core.Util
(function(){

    var coreNamespace = AutodeskNamespace('Autodesk.Viewing.Extensions.Markups.Core');
    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');

    var Utils = {
        updateDropDownOptions: function(element, items){
//            if (!(element instanceof HTMLSelectElement)) return;

            //clear out the previous options
            element.innerHTML = '';
            element.style.position = 'absolute';

            var docFrag = document.createDocumentFragment();
            items.map(function(item){
                var markup = '' +
                    '<li>' +
                    '<input>' +
                    '</li>';

                docFrag.appendChild(markup);
            });
            element.appendChild(docFrag);
        },
        toList: function (listLikeStructure) {
            return [].slice.apply(listLikeStructure);
        },
        toTitleCase: function (str) {
            return str.charAt(0).toUpperCase() + str.substring(1);
        },
        getMarkupType: function(annotation){
            switch(annotation.type) {
                case coreNamespace.MARKUP_TYPE_ARROW:
                    return "arrow";
                case coreNamespace.MARKUP_TYPE_TEXT:
                    return "text";
                case coreNamespace.MARKUP_TYPE_RECTANGLE:
                    return "rectangle";
                case coreNamespace.MARKUP_TYPE_CIRCLE:
                    return "circle";
                case coreNamespace.MARKUP_TYPE_CLOUD:
                    return "cloud";
                case coreNamespace.MARKUP_TYPE_FREEHAND:
                    return "freehand";
            }
        },
        matchesSelector: function(domElem, selector) {
            if (domElem.matches) return domElem.matches(selector); //Un-prefixed
            if (domElem.msMatchesSelector) return domElem.msMatchesSelector(selector);  //IE
            if (domElem.mozMatchesSelector) return domElem.mozMatchesSelector(selector); //Firefox (Gecko)
            if (domElem.webkitMatchesSelector) return domElem.webkitMatchesSelector(selector); // Opera, Safari, Chrome
            return false;
        }
    };

    namespace.Utils = Utils;
})();

// Autodesk.BIM360.Markups.ColorPicker
(function(){
    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');
    var utilsNamespace = AutodeskNamespace('Autodesk.Viewing.Extensions.Markups.Core.Utils');

    var Utils = namespace.Utils,
        toList = Utils.toList;

    var clearButtonGroup = function (groupingElement) {
        var buttons = groupingElement.querySelectorAll('.active');
        toList(buttons).map(function(btn){
            btn.classList.remove('active');
        });
    };

    function ColorPicker(element) {
        this.root = element;

        this.render();
        this.handleUIEvents();
        this.selectedColor = null;

        Object.defineProperty(this, 'value', {
            get : function() {
                return this.selectedColor;
            },
            set : function(val){
                if (this.selectedColor === val) return;

                this.selectedColor = val;

                clearButtonGroup(this.root);
                //set the active class on the element of the color selected
                var element = this.root.querySelector('[data-value="' + val + '"]');
                element.classList.add('active');
            }
        });

        window.colorPicker = this;
    }

    var proto = ColorPicker.prototype;

    proto.render = function () {
        var componentHTML = '' +
            '<ul class="color-picker-pallete">' +
            '</ul>';
        this.root.innerHTML = componentHTML;
    };

    proto.on = function (eventName, selector, callback) {
        this.root.addEventListener(eventName, function(event){
            var target = event.target;
            if (Utils.matchesSelector(target, selector)) callback(event);
        });
    };

    proto.handleUIEvents = function () {
        this.on('click', '.color-picker-item', function(event){
            var target = event.target;
            this.value = target.getAttribute('data-value');

            this.root.dispatchEvent(new CustomEvent('change', {
                bubbles: true,
                detail: {
                    source: this
                }
            }));
        }.bind(this));
    };

    proto.setOptions = function (colorsList) {
        var colors = colorsList;
        var items = colors.map(function(color){
            var selected = color.value === this.selectedColor;
            var markup = '' +
                '<li>' +
                    '<div ' +
                        'class="color-picker-item ' + (selected ? 'active' : '') + '" ' +
                        'style="background-color: ' + color.value + '" ' +
                        'data-value="' + color.value + '"></div>' +
                '</li>';
            return markup;
        }.bind(this));

        var ul = this.root.querySelector('ul');
        ul.innerHTML = items.join('');
    };

    namespace.ColorPicker = ColorPicker;
})();

// Autodesk.BIM360.Markups.DropDown
(function(){

    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');

    var Utils = namespace.Utils,
        toList = Utils.toList;

    var clearButtonGroup = function (groupingElement) {
        var buttons = groupingElement.querySelectorAll('.active');
        toList(buttons).map(function(btn){
            btn.classList.remove('active');
        });
    };

    function DropDown(element) {
        this.root = element;
        this.render();
        this.handleUIEvents();

        Object.defineProperty(this, 'value', {
            get : function() {
                return this.root.value;
            },
            set : function(val){
                this.root.value = val;

                clearButtonGroup(this.root);
                //set the active class on the element of the color selected
                var element = this.root.querySelector('[data-value="' + val + '"]');
                if (element)
                element.parentElement.classList.add('active');
            }
        });
    }

    var proto = DropDown.prototype;

    proto.on = function (eventName, selector, callback) {
        this.root.addEventListener(eventName, function(event){
            var target = event.target;
            if (Utils.matchesSelector(target, selector)) callback(event);
        });
    };

    proto.handleUIEvents = function () {
        var hidePopup = false;
        var popup = this.root.querySelector('.markup-dropdown');

        var self = this;
        var collapseDropdown = function(event) {
            window.removeEventListener('mouseup', collapseDropdown);

            if (event.target.classList.contains("dropdown-pop-btn"))
                return;

            if (popup.style.display != 'none') {
                popup.style.display = 'none';
                hidePopup = false;

                var target = event.target;
                if (event.target.classList.contains('drop-down-item')) {
                    self.value = target.getAttribute('data-value');
                    popup.style.display = 'none';

                    self.root.dispatchEvent(new CustomEvent('change', {
                        bubbles: true,
                        detail: {
                            source: this
                        }
                    }));
                }
            }
        }

        this.on('mouseup', 'button', function(event){
            if (hidePopup) {
                hidePopup = false;
                return;
            }

            if (popup.style.display == 'none')
                popup.style.display = 'block';
            else
                popup.style.display = 'none';

            window.addEventListener('mouseup', collapseDropdown);

            // stop other elements mouse-up responding
            event.stopPropagation();

        }.bind(this));
    };

    proto.render = function () {
        var componentHTML = '' +
            '<ul class="markup-dropdown-options">' +
            '</ul>';
        var element = document.createElement('div');
        element.className = "markup-dropdown";
        element.innerHTML = componentHTML;

        this.root.appendChild(element);
        this.popup = element;
        element.style.display = 'none';
    };

    proto.setOptions = function (options) {
        var items = options.map(function(item){
            var markup = '' +
                '<li ' +
                    'class="drop-down-li"' +
                    '>' +
                    '<div ' +
                        'class="drop-down-item ' + item.title + '"' +
                        'data-value="'+ item.value + '">' +
                        '<div class="drop-down-selector">' +
                        '</div>' +
                    '</div>' +
                '</li>';
            return markup;
        }.bind(this));

        var ul = this.root.querySelector('ul');
        ul.innerHTML = items.join('');
    };

    namespace.DropDown = DropDown;
})();

// Autodesk.BIM360.Markups.ToggleButton
(function(){

    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');

    function ToggleButton(element) {
        this.root = element;
        Object.defineProperty(this, 'value', {
            get : function() {
                return this.root.value;
            },
            set : function(val){
                this.root.value = val;
            }
        });
    }

    var proto = ToggleButton.prototype;

    proto.setOptions = function (options) {
        //nothing to do
        //it's either true or false, on or off
    };

    namespace.ToggleButton = ToggleButton;
})();

// Autodesk.BIM360.Markups.StyleControlFactory
(function(){

    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');
    var namespaceUtil = AutodeskNamespace('Autodesk.Viewing.Extensions.Markups.Core.Utils');

    var ColorPicker = namespace.ColorPicker,
        DropDown    = namespace.DropDown,
        ToggleButton = namespace.ToggleButton;

    namespace.StyleControlFactory = {
        create: function(element){
            var style = element.getAttribute('data-markup-style');
            var styleControl;
            //NOTE: this check will have to get more
            //      specific if more custom style inputs are needed

            if (element.attributes['control-style'] == 'colorpicker') {
//                (element instanceof HTMLDivElement) {
                styleControl = new ColorPicker(element);
            } else if (element.getAttribute('control-style') == 'dropdown') {
                styleControl = new DropDown(element);
            } else if (element instanceof HTMLButtonElement) {
                styleControl = new ToggleButton(element);
            }
            return styleControl;
        }
    };
})();

// Autodesk.Viewing.UI.DockingPanel
(function(){

    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');
    var coreNamespace = AutodeskNamespace('Autodesk.Viewing.Extensions.Markups.Core');
    var utilsNamespace = AutodeskNamespace('Autodesk.Viewing.Extensions.Markups.Core.Utils');

    var Utils = namespace.Utils,
        toList = Utils.toList,
        toTitleCase = Utils.toTitleCase,
        getMarkupType = Utils.getMarkupType;


    var StyleControlFactory = namespace.StyleControlFactory;

    var getStyleValues = function(style, viewer, markupsCore) {

        function getDefaultWidth() {
            var width = 0;
            var data = viewer.model.getData();
            // Use clientToMarkups method in leaflet viewer
            // since utilsNamespace.clientToWorld doesn't work on that viewer
            if(data.is2d) {
                var a = markupsCore.clientToMarkups(0, 0);
                var b = markupsCore.clientToMarkups(1, 0);
                width = Math.abs(b.x - a.x);
            }
            else {
                var a = utilsNamespace.clientToWorld(0, 0, 0, viewer);
                var b = utilsNamespace.clientToWorld(1, 0, 0, viewer);
                width = a.distanceTo(b);
            }

            return width;
        }

        function getFontSizes(smallWidth) {
            return {
                values: [
                    {name: 'normal', value: smallWidth * 25}
                ],
                default: 0
            };
        }

        function getWidths(smallWidth) {
            return {
                values: [
                    {name:'thin', value: smallWidth  * 2},
                    {name:'normal', value: smallWidth * 4},
                    {name:'thick', value: smallWidth * 10},
                    {name: 'big', value: smallWidth * 15},
                    {name: 'large', value: smallWidth * 25}],
                default: 1
            };
        }

        var smallWidth = getDefaultWidth();
        var values = utilsNamespace.cloneStyle(style);
        for(var attribute in values) {
            switch(attribute) {
                case 'stroke-width':
                    values[attribute] = getWidths(smallWidth);
                    break;

                // we'll need below in the future
                case 'font-size':
                    values[attribute] = getFontSizes(smallWidth);
                    break;
//
//                case 'font-weight':
//                    break;
//
//                case 'stroke-color':
//                case 'fill-color':
//                    break;

                default:
                    break;
            }
        }

        return values;
    };

    var convertToStyleValue = function (value) {
        var output = value;
        //only strings need conversion
        if (typeof value === 'string') {
            var potentialNumber = new Number(value);
            var isNumber = !isNaN(potentialNumber);
            if (isNumber) {
                //its a number, return the primitive value
                //not the object wrapper
                output = potentialNumber.valueOf();
            } else {
                //not a number, could it be a boolean?
                if (value === 'true' || value === 'false') {
                    output = (value === 'true');
                }
            }
        }
        return output;
    };



    function MarkupsTool(viewer, markupsCore, markupApp) {
        Autodesk.Viewing.UI.DockingPanel.call(this, viewer.container, 'viewer_markup_toolbar', '', null);

        this.viewer = viewer;
        this.markupsCore = markupsCore;
        this.app = markupApp;

        this.container.dockTop = true;
        this.styles = {};

        this.render();
        this.handlePanelEvents();
        this.handleUIEvents();
        this.handleCoreEvents();
        this.navigationControls = this.createNavigationControl();

        // add resize & history event listener
        if (this.viewer)
            this.onResizeBinded = this.onViewerResize.bind(this);
            this.viewer.addEventListener(
                Autodesk.Viewing.VIEWER_RESIZE_EVENT, this.onResizeBinded);

        if(this.markupsCore.actionManager) {
            this.onHistoryBinded = this.historyChanged.bind(this);
            this.markupsCore.actionManager.addEventListener(
                coreNamespace.EVENT_HISTORY_CHANGED, this.onHistoryBinded);
        }
    }

    MarkupsTool.prototype = Object.create(Autodesk.Viewing.UI.DockingPanel.prototype);
    Autodesk.Viewing.Extensions.ViewerPanelMixin.call(MarkupsTool.prototype);

    var proto = MarkupsTool.prototype;

    proto.historyChanged = function(e){
        if(e.data.action === "cancel") {
            this.updateFinishStatus();
        }
    }

    // Return necessary initial parameters (width...) of each part of the toolbar.
    var getInitToolbarParameters = function() {
        if (!this.initToolsParams) {
            var actionsPanel = document.querySelector('div.' + 'panel-actions');
            actionsPanel.initWidth = actionsPanel.getBoundingClientRect().width;

            var toolsPanel = document.querySelector('div.' + 'edit-tools');
            toolsPanel.initWidth = toolsPanel.getBoundingClientRect().width;

            var initWidth = actionsPanel.initWidth + toolsPanel.initWidth + 10;

            this.initToolsParams = {
                initWidth: initWidth,
                actionPanel: actionsPanel,
                toolsPanel: toolsPanel
            };
        }

        return this.initToolsParams;
    }

    proto.toolbarResize = function(toolbar, viewerWidth) {
        if(toolbar) {
            if (!viewerWidth) {
                viewerWidth = this.viewer.container.getBoundingClientRect().width;
            }

            var fullwidth = toolbar.container.getBoundingClientRect().width;
            var toolbarContainer = toolbar.container;
            var initToolbarParams = getInitToolbarParameters();
            var actionsPanel = initToolbarParams.actionPanel;

            // Move the actions panel in a new line when the markup toolbar
            // is longer than the viewer.
            if (fullwidth >= viewerWidth || (viewerWidth < initToolbarParams.initWidth)) {
                actionsPanel.style.position = 'absolute';
                actionsPanel.style.top = '50px';
                actionsPanel.style.left = 'calc(50% - ' + actionsPanel.initWidth/2 + 'px)';
                actionsPanel.style.marginLeft = '0';

                // Re-calculate the toolbar left distance based on the first line bar.
                toolbarContainer.style.left = 'calc(50% - ' + initToolbarParams.toolsPanel.initWidth/2 + 'px)';
            }
            else
            {
                // Move the actions panel back, and because the markup toolbar will
                // be back to normal, re-calculate the left
                // distance by the normal toolbar length.
                actionsPanel.style.position = '';
                actionsPanel.style.top = '0';
                actionsPanel.style.left = '0';
                actionsPanel.style.marginLeft = '10px';

                // Re-calculate the toolbar left distance based on the whole toolbar
                // because they're all in the same line.
                toolbarContainer.style.left = 'calc(50% - ' + initToolbarParams.initWidth/2 + 'px)';
            }

            toolbarContainer.style.width = "";
        }
    }

    proto.onViewerResize = function(e) {
        if(this.container) {
            var visible = this.container.style.display !== "none";
            if(visible) {
                this.toolbarResize(this, e.width);
            }
        }
    }

    proto.getNames = function () {
        return ['markups-panel'];
    };

    proto.getName = function () {
        return this.getNames()[0];
    };

    proto.render = function () {
        var componentHTML = '' +
            '<div class="markups-panel-content">' +
                '<div class="edit-tools">' +
                    '<div class="markup-tools" data-button-group>' +
                        '<div class="markup-buttons">' +
                            '<div style="display: inline;">' +
                                // markup drawing tools
                                '<div>' +
                                    '<button class="bimviewericon-markup-rectangle" id="markup-rectangle-button" data-annotation-type="rectangle"' +
                                        'tooltip="' + Autodesk.Viewing.i18n.translate("Rectangle") + '">' +
                                    '<button class="bimviewericon-markup-circle" id="markup-circle-button" data-annotation-type="circle"' +
                                        'tooltip="' + Autodesk.Viewing.i18n.translate("Oval") + '">' +
                                    '<button class="bimviewericon-markup-arrow" id="markup-arrow-button" data-annotation-type="arrow"' +
                                        'tooltip="' + Autodesk.Viewing.i18n.translate("Arrow") + '">' +
                                    '<button class="bimviewericon-markup-cloud" id="markup-cloud-button" data-annotation-type="cloud"' +
                                        'tooltip="' + Autodesk.Viewing.i18n.translate("Cloud") + '">' +
                                    '<button class="bimviewericon-markup-freehand" id="markup-freehand-button" data-annotation-type="freehand"' +
                                        'tooltip="' + Autodesk.Viewing.i18n.translate("Freehand") + '">' +
                                '</div>' +
                                '<div class="vertical-seperator">&nbsp;</div>' +

                                //text
                                '<div>' +
                                    '<button class="bimviewericon-markup-text" id="markup-label-button" data-annotation-type="text" ' +
                                    'tooltip="' +  Autodesk.Viewing.i18n.translate("Text") + '">' +
                                '</div>' +
                                '<div class="vertical-seperator">&nbsp;</div>' +

                                // markup properties: linethickness, color...
                                '<div data-markup-style="stroke-width" control-style="dropdown">' +
                                    '<button id="markup-line-thickness-button" class="bimviewericon-line-thickness dropdown-pop-btn" ' +
                                        'tooltip="' + Autodesk.Viewing.i18n.translate("Thickness") + '">' +
                                    '<button id="markup-dropdown-arrow" class="bimviewericon-Dropdown_arrow dropdown-pop-btn arrow">' +
                                '</div>' +

                                // delete
                                '<div class="vertical-seperator">&nbsp;</div>' +
                                '<button class="bimviewericon-Delete" data-panel-action="delete" disabled="true"' +
                                    'tooltip="' + Autodesk.Viewing.i18n.translate("No markup selected") +'">' +
                                '</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="panel-actions">' +
                    '<div class="action-buttons">' +
                        '<button class="bimviewericon-markup-cancel" data-panel-action="clear">' +
                        '<button class="bimviewericon-markup-done" data-panel-action="finish"' +
                            'tooltip="' + Autodesk.Viewing.i18n.translate("No markup selected") +'">' +
                    '</div>' +
                '</div>' +
            '</div>';
        this.createScrollContainer({});
        this.scrollContainer.innerHTML = componentHTML;

        //get all the style inputs and create a style controller for each one
        this.styleControls = {};
        var styleElements = this.scrollContainer.querySelectorAll('[data-markup-style]');
        toList(styleElements).map(function(element){
            var style = element.getAttribute('data-markup-style');
            this.styleControls[style] = StyleControlFactory.create(element);
        }.bind(this));
    };

    proto.setStyle = function(activeStyle, value) {
        this.styles[activeStyle] = value;
    }

    var clearButtonGroup = function (groupingElements) {
        var containers = [];
        if (groupingElements instanceof HTMLElement)
            containers = [groupingElements]
        else
            containers = toList(groupingElements);

        containers.map(function(c){
            var buttons = c.querySelectorAll('button.active');
            toList(buttons).map(function(btn){
                btn.classList.remove('active');
            });
        });
    };

    proto.getAnnotationButton = function (type) {
        var selector = '[data-annotation-type="' + type + '"]';
        return this.container.querySelector(selector);
    };

    proto.selectDefaultAnnotation = function () {
        var def = this.getAnnotationButton('freehand');
        this.switchEditMode('freehand');
        this.selectAnnotationButton(def);
    };

    function _restoreLMVToolbar(viewer) {
        if (!viewer) {
            return;
        }

        // Unhide toolbars which is required by design
        var viewerContainer = viewer.toolbar.container;
        var viewerContainerChildrenCount = viewerContainer.children.length;
        for(var i = 0; i < viewerContainerChildrenCount; ++i) {
            viewerContainer.children[i].style.display = "";
        }
    };

    proto.engageEditMode = function(enabled) {
        var markupsCore = this.markupsCore;
        if (enabled) {

            // This mainly aims to make sure 2d selection get cleared,
            // and all markup display style are back to normal.
            this.app.clearMarkupSelection();

            this.restoredNavTool = this.viewer.getActiveNavigationTool();

            this.duringViewMode = markupsCore.duringViewMode;
            markupsCore.enterEditMode();

            if (this.duringViewMode)
                utilsNamespace.hideLmvUi(this.viewer);

            // Now enter edit mode may choose navigation button.
            // But, it shouldn't, so deselect here.
            this.selectNavigationButton();
            // Then select the default annotation.
            this.selectDefaultAnnotation();
        } else {
            markupsCore.leaveEditMode();
            if (!this.duringViewMode) {
                markupsCore.hide();
            }
            else {
                _restoreLMVToolbar(this.viewer);
            }
            this.viewer.setActiveNavigationTool(this.restoredNavTool);
        }
    };

    proto.engageViewMode = function(enabled) {
        if (enabled) {

            _restoreLMVToolbar(this.viewer);
            this.selectNavigationButton("pan");
        } else {

        }
    }

    proto.handlePanelEvents = function () {
        this.addVisibilityListener(this.engageEditMode.bind(this));
    };

    proto.selectAnnotationButton = function (element, options) {
        var annotationType = element.getAttribute('data-annotation-type');
        // clear the button group this button belongs to
        clearButtonGroup(this.container.querySelectorAll('.viewer-actions, .markup-buttons'));
        element.classList.add('active');
        // save current draw button
        this.annotationButton = element;
        activateApplicableControls.bind(this)(options);
    };

    proto.deselectAnnotationButton = function (element) {
        if (element) {
            element.classList.remove('active');
        }
    }

    proto.destroyUI = function() {
        if (!this.navigationControls) {
            return;
        }

        var navGroup = this.navigationControls;

        var idx = navGroup._controls.length - 1;
        while (idx >= 0) {
            navGroup.removeControl(navGroup._controls[idx]);
            idx--;
        }

        // Remove navGroup from toolbar
        if (this.viewer.getToolbar) {
            var toolbar = this.viewer.getToolbar(false);
            toolbar && toolbar.removeControl(navGroup);
        }

        this.navigationControls = null;

        if (this.viewer && this.onResizeBinded) {
            this.viewer.container.removeEventListener(
                Autodesk.Viewing.VIEWER_RESIZE_EVENT, this.onResizeBinded);
            this.onResizeBinded = null;
        }

        if(this.markupsCore.actionManager && this.onHistoryBinded) {
            this.markupsCore.actionManager.removeEventListener(
                coreNamespace.EVENT_HISTORY_CHANGED, this.onHistoryBinded);
            this.onHistoryBinded = null;
        }
    }

    var displayStyleInput = function (element) {
        if (Utils.matchesSelector(element.parentElement, 'label')) {
            element.parentElement.style.display = 'inline-block';
        } else {
            element.style.display = 'inline-block';
        }
    };

    var hideStyleInput = function (element) {
        if (Utils.matchesSelector(element.parentElement, 'label')) {
            //when the control is inside a label, hide
            //the label instead
            element.parentElement.style.display = 'none';
        } else {
            element.style.display = 'none';
        }
    };

    proto.getStyleInputs = function () {
        //get all the style controls
        var controls = this.container.querySelectorAll('[data-markup-style]');
        return toList(controls);
    };

    proto.hideStyleInputs = function () {
        this.getStyleInputs().map(hideStyleInput);
    };


    var activateApplicableControls = function () {
        var currentStyles = null;
        if (this.markupsCore.editMode.selectedMarkup) {
            // current style should be the style of the selected markup.
            currentStyles = this.markupsCore.editMode.selectedMarkup.style;
        }
        else {
            // If no selection, get the current style cached in markups core.
            currentStyles = this.markupsCore.getStyle();
        }

        var defaultValues = getStyleValues(currentStyles, this.viewer, this.markupsCore);

        //display only the controls that apply to this given edit mode
        for(var activeStyle in defaultValues){
            var styleSettings = defaultValues[activeStyle];
            var styleElement = this.container.querySelector('[data-markup-style="' + activeStyle + '"]');
            var styleControl;


            // Will remove this when we're done with the font-size style control.
            if(activeStyle == 'font-size'){
                var updatedStyle = {};
                updatedStyle[activeStyle] = convertToStyleValue(styleSettings.values[styleSettings['default']].value);
                this.markupsCore.setStyle(updatedStyle);
            }
            else{
                //when a style control for the given style isn't found
                //ignore it and just move on
                if (!styleElement) {
                    continue;
                }

                //get the style control associated with this style
                //and update its option
                styleControl = this.styleControls[activeStyle];

                var currentStyle = null;
                styleSettings.values = styleSettings.values.map(function (v) {
                    if (v.value == currentStyles[activeStyle]) {
                        currentStyle = v.value;
                    }

                    return {
                        title: v.name,
                        value: v.value,
                        //the drop down list needs to these additional attributes
                        attrs: {
                            value: v.value,
                            style: 'font-family: "' + v.value + '"'
                        }
                    };
                });

                styleControl.setOptions(styleSettings.values);
                displayStyleInput(styleElement);

                styleControl.value = currentStyle || styleSettings.values[styleSettings['default']].value;
                if (!currentStyle) {
                    // set the default value to markup core.
                    var updatedStyle = {};
                    updatedStyle[activeStyle] = convertToStyleValue(styleSettings.values[styleSettings['default']].value);
                    this.markupsCore.setStyle(updatedStyle);
                }
            }
        }
    };

    proto.setViewerTool = function(toolName){
        this.viewer.setActiveNavigationTool(toolName);
        this.markupsCore.allowNavigation(!!toolName);
    };

    proto.updateFinishStatus = function() {
        var finishedBtn = this.container.querySelector('[data-panel-action="finish"]');
        if (this.markupsCore.markups.length > 0) {
            finishedBtn.disabled = false;
            finishedBtn.attributes['tooltip'].value = "";
        }
        else {
            finishedBtn.disabled = true;
            finishedBtn.attributes['tooltip'].value = Autodesk.Viewing.i18n.translate("No object added");
        }
    };

    proto.switchEditMode = function (type) {
        var self = this;
        var updateFinishStatus = function(){
            self.updateFinishStatus();
        }

        var updateActivateApplicableControls = function() {
            activateApplicableControls.bind(self)(null);
        }

        // remove the old edit mode's event, and add the new one later
        if (this.markupsCore.editMode) {
            this.markupsCore.editMode.removeEventListener(coreNamespace.EVENT_EDITMODE_CREATION_END, updateFinishStatus);
        }

        var className = 'EditMode' + toTitleCase(type);
        var editMode = new Autodesk.Viewing.Extensions.Markups.Core[className](this.markupsCore);
        this.markupsCore.changeEditMode(editMode);
        if (editMode) {
            editMode.addEventListener(coreNamespace.EVENT_EDITMODE_CREATION_END, updateFinishStatus);

            // To make sure we have same styles for all markup tools
            this.markupsCore.setStyle(this.styles);
        }
    };

    proto.handleUIEvents = function () {
        var self = this;

        var selectAnnotation = function (event) {
            //figure out what annotation type was selected
            var target = event.target;
            var annotationType = target.getAttribute('data-annotation-type');

            //disable any tool that may be selected
            self.setViewerTool(null);
            //switch to the new mode
            self.switchEditMode(annotationType);
            //reflect the change in edit mode on the panel
            self.selectAnnotationButton(target);
            //disable navigation bar
            self.selectNavigationButton();
        };

        var selectFontStyle = function (event) {
            var target = event.target;
            var parent = target.parentElement;

            target.classList.toggle('active');
            target.value = target.classList.contains('active');
            //trigger a change event
            target.dispatchEvent(new Event('change', { bubbles: true }));
        };

        //helper function to facilate the use of event delegation
        var on = function (eventName, selector, callback) {
            self.container.addEventListener(eventName, function(event){
                var target = event.target;
                if (Utils.matchesSelector(target, selector)) callback(event);
            });
        };

        on('click', '[data-annotation-type]', selectAnnotation);
        on('click', 'button[data-markup-style]', selectFontStyle);
        on('click', '[data-panel-action="finish"]', function(){

            self.app && self.app.saveMarkup();
            self.setVisible(false);
        });

        on('click', '[data-viewer-tool]', function(event){
            var target = event.target;
            //clear the button group this button belongs to
            clearButtonGroup(self.container.querySelectorAll('.viewer-actions, .markup-buttons'));

            //toggle the active state of the toolButton clicked
            target.classList.toggle('active');

            //figure out what tool was clicked
            var actionType = target.getAttribute('data-viewer-tool');
            self.setViewerTool(actionType);
        });

        on('click', '[data-panel-action="clear"]', function(event){
            self.markupsCore.clear();
            self.setVisible(false);
        });

        on('click', '[data-panel-action="delete"]', function(event){
            self.tryDeleteMarkup();
        });

        var applySelectedFontFamily = function(event){
            var target = event.target;
            var selection = target.options[target.selectedIndex].value;
            target.style.fontFamily = selection;
        };

        var applyStyleChangeToMarkup = function(event){

            var target = event.target;
            var style = target.getAttribute('data-markup-style');
            var value = (event.detail && event.detail.source.value) || target.value;
            var updatedStyle = {};
            updatedStyle[style] = convertToStyleValue(value);
            this.markupsCore.setStyle(updatedStyle);
            this.styles[style] = convertToStyleValue(value);
        }.bind(this);

        //listen for change events on the elements/controls
        //that control the markup style
        on('change', '[data-markup-style]', applyStyleChangeToMarkup);

    };

    proto.setNavtoolbarVisible = function(show) {
        if (!this.navigationControls) {
            return;
        }

        this.navigationControls.setVisible(show);
        if (show)
            this.navigationControls.container.style.display = '';
        else
            this.navigationControls.container.style.display = 'none';

    };

    proto.setVisible = function (show){

        var visible = this.container.style.display !== "none";
        if(visible === show)
            return;

        Autodesk.Viewing.UI.DockingPanel.prototype.setVisible.call(this, show);
        this.setNavtoolbarVisible(show);

        if (show) {
            this.updateFinishStatus();
            this.toolbarResize(this);
        }
    };

    proto.createNavigationControl = function() {

        if (this.navigationControls) {
            return this.navigationControls;
        }

        var toolbar;
        if (this.viewer.getToolbar) {
            toolbar = this.viewer.getToolbar(true);
        }

        if (!toolbar) {
            return undefined;
        }

        var navigationControls = new Autodesk.Viewing.UI.ControlGroup('annotations-toolbar-controls');
        // create markup navigation controls and set it to hide first.
        navigationControls.setVisible(false);
        var idx = toolbar.indexOf(toolbar.getControl(Autodesk.Viewing.TOOLBAR.NAVTOOLSID));
        toolbar.addControl(navigationControls, {index: idx+1});

        var self = this;
        var onButtonClick = function(event) {
            var button = event.buttonInstance;
            var state = button.getState();

            // Unselect all other buttons.
            var buttons = navigationControls._controls;
            for(var i = 0; i < buttons.length; ++i) {
                if (buttons[i] !== button) {
                    buttons[i].setState(Autodesk.Viewing.UI.Button.State.INACTIVE);
                }
            }
            // Update button state.
            switch(state) {
                case Autodesk.Viewing.UI.Button.State.INACTIVE:
                    self.selectNavigationButton(button.tool);
                    self.markupsCore.allowNavigation(true);
                    // deselect draw button
                    self.deselectAnnotationButton(self.annotationButton);
                    break;

                case Autodesk.Viewing.UI.Button.State.ACTIVE:
                    self.selectNavigationButton();
                    self.markupsCore.allowNavigation(false);
                    // set back draw button
                    self.selectAnnotationButton(self.annotationButton);
                    break;
            }
        };

        // Add pan button
        var panButton = new Autodesk.Viewing.UI.Button('annotations-toolbar-panTool');
        panButton.setToolTip(Autodesk.Viewing.i18n.translate("Pan"));
        panButton.setIcon('adsk-icon-pan');
        panButton.tool = 'pan';
        panButton.onClick = function(event) {event.buttonInstance = panButton; onButtonClick(event);};
        navigationControls.addControl(panButton);

        // Add zoom button
        var zoomButton = new Autodesk.Viewing.UI.Button('annotations-toolbar-zoomTool');
        zoomButton.setToolTip(Autodesk.Viewing.i18n.translate("Zoom"));
        zoomButton.setIcon('adsk-icon-zoom');

        // ??? the tool name for viewer 2d (leaflet) and viewer 3d is different.
        // ??? this is annoying, should uniformm the name later.
        if (this.viewer.impl instanceof Autodesk.Viewing.Private.Viewer2DImpl)
            zoomButton.tool = 'zoom';
        else
            zoomButton.tool = 'dolly';

        zoomButton.onClick = function(event) {event.buttonInstance = zoomButton; onButtonClick(event);};
        navigationControls.addControl(zoomButton);

        return navigationControls;
    };

    proto.selectNavigationButton = function(toolId) {

        if (!this.navigationControls) {
            return;
        }

        var buttons = this.navigationControls._controls;
        var buttonsCount = buttons.length;

        for(var i = 0; i < buttonsCount; ++i) {
            var button = buttons[i];

            if (button.tool === toolId) {
                button.setState(Autodesk.Viewing.UI.Button.State.ACTIVE);
            } else {
                button.setState(Autodesk.Viewing.UI.Button.State.INACTIVE);
            }
        }
        this.viewer.setActiveNavigationTool(toolId);
    };

    proto.tryDeleteMarkup = function(){
        var markup = this.markupsCore.getSelection();
        if(markup){
            this.markupsCore.deleteMarkup(markup);
            this.updateFinishStatus();
        }
    };

    proto.getContentSize = function() {
        return {
            height: this.container.querySelector('.markups-panel-content').offsetHeight + 55,
            width: this.container.querySelector('.markups-panel-content').offsetWidth
        };
    };

    proto.disableDeleteButton = function (isDisable) {
        var deleteBtn = this.container.querySelector('[data-panel-action="delete"]');
        deleteBtn.disabled = isDisable;
        if (isDisable) {
            deleteBtn.attributes['tooltip'].value = Autodesk.Viewing.i18n.translate("No markup selected");
        } else {
            deleteBtn.attributes['tooltip'].value = Autodesk.Viewing.i18n.translate("Delete");
        }
    };

    proto.handleCoreEvents = function () {
        this.markupsCore.addEventListener(coreNamespace.EVENT_MARKUP_SELECTED, function(event){
            var target = event.target;
            var markupType = getMarkupType(target);
            var markupButton = this.getAnnotationButton(markupType);
            this.selectAnnotationButton(markupButton);
            this.disableDeleteButton(false);
        }.bind(this));

        var self = this;
        this.markupsCore.addEventListener(coreNamespace.EVENT_MARKUP_DESELECT, function (event){
            self.disableDeleteButton(true);
            activateApplicableControls.bind(self)(null);
        });
    };

    namespace.MarkupsTool = MarkupsTool;
})();
;// Markup Panel implementation.

(function() {
	'use strict';

	var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');

	var MarkupPanel = function(markupApp) {
		this.markupApp = markupApp;

	};

	var proto = MarkupPanel.prototype;
	proto.constructor = MarkupPanel;

	var _renderPanel = function(mountNode, markupList, options) {
		return ReactDOM.render(React.createElement(namespace.markupPanelComp, {
				markups: markupList,
                options: options
			}), mountNode);
	}

	proto.initialize = function(parentContainer) {
		// The parent container to hold markup panel
		if (typeof parentContainer === "string") {
			this.parentContainer = document.getElementById(parentContainer);
		}
		else {
			this.parentContainer = parentContainer;
		}

        this.options = {
            currentVersion: this.markupApp.options.documentVersion,
            filter: this.markupApp.getFilter(),
            onClickCallback: this.getMarkupSelectHandler(),
            onCloseCallback: this.closeMarkupHandler(),
            onCanCloseCallback: this.getCanMarkupCloseHandler(),
            selectedId: this.markupApp.selectedId
        };

		try {

			// Render internal markup panel dom tree to the container
			this.panelDOM = _renderPanel(this.parentContainer, this.markupApp.markupList, this.options);


			// Create the observer first.
			var observer = Rx.Observer.create(function() {
				// On next data coming through.
				//
				// ??? Reset props on every markup changes (new/update)
				// ??? First, let's see how react performs without any inspecting
				// ??? Then, if there are performance problem, we need to consider
				// ??? make markup list immutable, and mix PureRenderMix
				// ??? So, can give react better hint when to update component.

				// This call is deprecated
				// this.panelDOM.setProps({markups: this.markupApp.markupList});
				// Re-render
				this.panelDOM = _renderPanel(this.parentContainer, this.markupApp.markupList, this.options);

			}.bind(this), function() {
				// On error happened.

			}, function() {
				// On complete.
				Autodesk.BIM360.Util.stdOut("Markup Panel Data Stream End.");
			});

			// Prepare the data stream
			// There are a few sources of the data stream,
			// and the followings are currently most cared about.
			//
			this.resetStream = new Rx.Subject();
			this.saveStream = new Rx.Subject();
			this.postStream = new Rx.Subject();
			this.requestStream = new Rx.Subject();
			this.attachmentStream = new Rx.Subject();
			this.updateStream = new Rx.Subject();

			// Combine the stream together.
			this.dataStreamSub = this.resetStream
									.merge(this.saveStream)
									.merge(this.postStream)
									.merge(this.requestStream)
									.merge(this.attachmentStream)
									.merge(this.updateStream)
									.subscribe(observer);

			// Request markups associated with the document right after
			// markup get initialized.
			this.requestMarkups();

			return true;
		}
		catch (e) {
			// If can't render the panel DOM, then bail out as failure.
			console.error("Faile to initialize markup panel.");
			console.error("error: " + e.message);
			this.panelDOM = undefined;
			this.parentContainer = undefined;

			return false;
		}

	};

	proto.terminate = function() {
		if (this.panelDOM) {

			// Dispose data first
			this.dataStreamSub.dispose();

			// And unmount it
			ReactDOM.unmountComponentAtNode(this.parentContainer);

			// Remove panel dom
			this.panelDOM = null;
		}

	};

    proto.getMarkupSelectHandler = function() {

    	var markupApp = this.markupApp;
        this._selectHandler = function(markup) {
        	markupApp && markupApp.selectMarkupAndView(markup);
        };

        return this._selectHandler;
    }

    proto.closeMarkupHandler = function() {
        var markupApp = this.markupApp;
        this._closeMarkupHandler = function(markup) {
            markupApp && markupApp.closeMarkup(markup);
        }

        return this._closeMarkupHandler;
    }

    proto.getCanMarkupCloseHandler = function() {
    	var markupApp = this.markupApp;
    	this._canCloseMarkup = function(markup) {
    		return markupApp && markupApp.canCloseMarkup(markup);
    	}

    	return this._canCloseMarkup;
    }

	proto.requestMarkups = function() {

		// Request markups already associated with current document
		// and populate to the panel.
		if (this.markupApp && this.panelDOM) {
			this.maxPageLimit = this.markupApp.serviceOp.getMaxPageLimit();
			this.offset = 0;

			// TODO: Turn this to an observable sequence later.
			// 		 Then can scroll to lazy loading instead of loading them all.
			(function __request(pageLimit, offset) {

				this.markupApp.requestMarkups(pageLimit, offset)
							  .then(function(result) {

							  	if (result) {
								  	this.nextReq = result.nextReq;
								  	if (this.nextReq) {
								  		this.offset = offset + this.maxPageLimit;
								  		__request.call(this, pageLimit, this.offset);
								  	}
								}

							  }.bind(this));

			}.bind(this))(this.maxPageLimit, this.offset);

		}

	}

    proto.forceUpdate = function() {
        this.panelDOM && this.panelDOM.forceUpdate();
    }

	proto.onReset = function(app) {

		// Reset requesting parameters.
		this.offset = 0;
		this.nextReq = null;
        this.options.currentVersion = this.markupApp.options.documentVersion;

		// Markup Application is just reset, then panel should reset.
		this.resetStream.onNext();

	}

	proto.onSaveMarkup = function(app, markupAppObj, error) {
		if (markupAppObj) {
			this.saveStream.onNext();
		}
	};

	proto.onPostMarkup = function(app, markupAppObj, error) {
		if (markupAppObj) {
			this.postStream.onNext();
		}
	};

	proto.onRequestMarkups = function(app, markupAppObjList, error) {
		if (markupAppObjList &&
			markupAppObjList.length > 0) {
			this.requestStream.onNext();

			// After requesting markups, then start to download its attachments.
			markupAppObjList.forEach(function(markupAppObj) {
				var markup = markupAppObj['markupObj'];

				// only try to load attchment if it is not already embedded into
	           	// markup object
	           	if (markup['tags'] && !namespace.isTrueValue(markup['tags']['resourceEmbed']))
	           	    this.markupApp.getAttachment(markupAppObj);

			}.bind(this));
		}

	};

	proto.onGetAttachment = function(app, markupAndAttachType, error) {
		// Only emit on thumbanil attchment.
		if (markupAndAttachType &&
			markupAndAttachType.attachmentType === namespace.MARKUP_RESOUCE_TYPE_SCAPTURE) {
			this.attachmentStream.onNext();
		}
	};

	proto.onMarkupUpdate = function(app, markupAppObj, error) {
		if (markupAppObj) {
			this.updateStream.onNext();
		}
	};

	proto.onSelectionChanged = function(app, selectedId) {
		this.options.selectedId = selectedId;
		this.updateStream.onNext();
	}

    proto.onCloseMarkup = function(app) {
        this.updateStream.onNext();
    }

	namespace.MarkupPanel = MarkupPanel;
})();;/**
 * Created by tracyli on 12/3/15.
 */

(function() {
    'use strict';
    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');
    var R = React.DOM;

    // TODO: basic componnet structure is in, and filling in styles.

    // Thumbnails
    var markupThumbnail = React.createClass({

        render: function () {
            if (this.props.thumbnail) {
                return R.div({className: 'markup-thumbnail',
                    style: {backgroundImage: 'url(' + this.props.thumbnail + ')'}
                });
            }
            else {
                return R.div({
                    className: 'markup-thumbnail no-thumbnail'
                });
            }
        }
    })

    // Status
    var markupStatus = React.createClass({

        // TODO: once supporting close, should make this as a dropdown menu.
        //
        getDropdown: function() {
            var statusParentElem = ReactDOM.findDOMNode(this);
            return statusParentElem.getElementsByClassName('markup-status-dropdown')[0];
        },

        onclick: function(event) {
            var dropdown = this.getDropdown();
            var status = this.state.status;
            if (status == namespace.MARKUP_STATUS_CLOSED ||
                status == namespace.MARKUP_STATUS_CREATED ||
                status == namespace.MARKUP_STATUS_SAVE_FAILED ||
                status == 'closing') {
                event.stopPropagation();
                return;
            }

            dropdown.style.display = dropdown.style.display == 'block' ? 'none' : 'block';
            event.stopPropagation();
        },

        onStatusChange: function(event) {
            this.getDropdown().style.display = 'none';
            this.props.onCloseCallback && this.props.onCloseCallback();

            event.stopPropagation();
        },

        onDropdownLoseFocus: function(event) {
            this.getDropdown().style.display = 'none';
        },

        componentWillReceiveProps: function(nextProps) {
            if (nextProps.status) {
                this.setState(
                    {
                        status: nextProps.status
                    });
            }
        },

        getInitialState: function () {
            return {status: this.props.status};
        },

        render: function () {
            var key = this.props.key;
            if (this.state.status == namespace.MARKUP_STATUS_CLOSED) {
               return R.div({ className: 'markup-status closed',
                              onClick: this.onclick}, [
                    R.label({key: key + 'markup-status-closed'}, Autodesk.Viewing.i18n.translate("CLOSED")) // "CLOSED" status
                ]);
            }
            else if (this.state.status == 'closing') {
                // close animation. It will shown during the closing operation, which
                // may take some seconds...
                return  R.div({ key: key + 'markup-status-closing',
                                className: 'markup-status closing',
                                onClick: this.onclick}, [
                        R.svg({
                            key: key + 'markup-status-animation',
                            className: 'inprogress-animation',
                            x: '0px',
                            y: '0px',
                            width: '13px',
                            height: '3px',
                            viewBox: '0 0 13 3'}, [
                            R.svg({key: key + 'markup-status-animation-1', className: 's1', x: '0px', y: '0px', width: '3px', height: '3px'}, [
                                R.circle({key: key + 'markup-status-animation-1-circle', fill: "#ffffff",  cx: "1.5",  cy: "1.5", r: "1.5"})]),
                            R.svg({key: key + 'markup-status-animation-2', className: 's2', x: '5px', y: '0px', width: '3px', height: '3px'}, [
                                R.circle({key: key + 'markup-status-animation-2-circle', fill: "#ffffff", cx: "1.5",  cy: "1.5", r: "1.5"})]),
                            R.svg({key: key + 'markup-status-animation-3', className: 's3', x: '10px', y: '0px', width: '3px', height: '3px'}, [
                                R.circle({key: key + 'markup-status-animation-3-circle', fill: "#ffffff", cx: "1.5",  cy: "1.5", r: "1.5"})])
                        ]
                    )
                ]);
            }
            else {
                // OPEN, and with a dropdown arrow will
                // popup a list containing the 'close' button.
                // Only show the drop down if user has the permission to close

                if (this.props.onCloseCallback) {
                    return R.div({className: 'markup-status closable' + ' ' + this.state.status, tabIndex: 0, onBlur: this.onDropdownLoseFocus}, [
                        R.div( {key: key + 'markup-status', className: 'markup-status-label', onClick: this.onclick}, [
                            R.label({key: key + 'markup-status-label-1'}, Autodesk.Viewing.i18n.translate("OPEN")), // 'OPEN" status
                            R.label({key: key + 'markup-status-label1-2', className: 'bimviewericon-Dropdown_arrow'})
                        ]),
                        R.div({
                            key: key + 'markup-status-dropdown',
                            className: 'markup-status-dropdown' + ' ' + this.state.status}, [
                            R.label({
                                key: key + 'markup-status-dropdown-close',
                                className: 'close',
                                onMouseDown: this.onStatusChange}, Autodesk.Viewing.i18n.translate("Close"))
                        ])
                    ]);
                }
                else {
                    return R.div({className: 'markup-status closed-disabled'}, [
                        R.div( {key: key + 'markup-status', className: 'markup-status-label'}, [
                            R.label({key: key + 'markup-status-label-1'}, Autodesk.Viewing.i18n.translate("OPEN"))
                        ])
                    ]);
                }
            }
        }
    })

    // Description
    var markupDescription = React.createClass({

        DecorateTextInLines: function (text) {
            var parentDiv = ReactDOM.findDOMNode(this);
            var line1Div = parentDiv.getElementsByClassName('des-line1')[0];
            var line1Label = line1Div.getElementsByTagName('label')[0];
            var line2Label = parentDiv.getElementsByClassName('des-line2')[0];

            // Remove the char of description one by one until the
            // text container doesn't overflow anymore.
            while (line1Label.offsetHeight > line1Div.offsetHeight) {
                var text = line1Label.textContent;
                line1Label.textContent = text.substring(0, text.length - 1);
            }

            // Display the remaining text at the second line.
            line2Label.textContent = this.props.description.substring(line1Label.textContent.length);
        },

        componentDidMount: function() {
            if (this.props.description.length > 0) {
                // Display the description in two lines,
                // and display '...' if text overflow in the second line.
                this.DecorateTextInLines(this.props.description);
            }
        },

        componentDidUpdate: function() {
            if (this.props.description.length > 0) {
                // Display the description in two lines,
                // and display '...' if text overflow in the second line.
                this.DecorateTextInLines(this.props.description);
            }
        },

        render: function () {
            // The multiline text ellipsis hasn't been supported by now,
            // so using two labels to display the description, and set the
            // second line with 'ellipsis' if text overflow.
            var key = this.props.key;
            return R.div({className: 'markup-description'},
                [
                    R.div({className: 'des-line1', key: key + '-des-line1-div'},
                    [
                        R.label({key: key + '-des-line1-label'}, this.props.description)
                    ]),
                    R.label({className: 'des-line2', key: key + '-des-line2'})
                ]);
        }

    })

    var markupUserInfo = React.createClass({

        // TODO: now use a hardcode red color for all users.
        //
        render: function() {
            var key = this.props.key;

            if (this.props.createdBy) {
                 return R.div({className: 'markup-user-info'}, [
                        R.label({key: key + '-color', className: 'markup-user-color-indicator'}),
                        R.label({key: key + '-user', className: 'markup-user'}, this.props.createdBy)
                    ]);
            }
            else {
                return R.div({className: 'markup-user-info no-user'}, [
                        R.label({key: key + '-user', className: 'markup-user'})
                    ]);
            }
        }
    })

    var markupCreateDate = React.createClass({
        render: function() {
            var key = this.props.key;

            if (this.props.createdDate) {
                return R.label({key: key + '-date-succeed', className: 'markup-modified-date'}, this.props.createdDate);
            }
            else if (this.props.savingStatus == namespace.MARKUP_STATUS_SAVE_FAILED) {
                return R.div({key: key + '-date-failed', className: 'markup-modified-date no-date'}, [
                    R.label({key: key + '-date-failed-icon', className: 'bimviewericon-list_fail'}),
                R.label({key: key + '-date-failed-text', className: 'save-failed'}, Autodesk.Viewing.i18n.translate("Failed to save"))
            ]);
            }
            else {
                return R.svg({key: key + '-date-processing',
                        className: 'markup-modified-date no-date creating',
                        x: '0px',
                        y: '0px',
                        width: '10px',
                        height: '10px',
                        viewBox: '0 0 10 10'
                    }, [R.path(
                        {
                            key: key + '-date-processing-1',
                            fill: "#4675A8",
                            d: 'M5,0.1C2.3,0.1,0.1,2.3,0.1,5S2.3,9.9,5,9.9S9.9,7.7,9.9,5S7.7,0.1,5,0.1z M5,9C2.8,9,1,7.2,1,5c0-2.2,1.8-4,4-4s4,1.8,4,4C9,7.2,7.2,9,5,9z'
                        }),
                        R.path(
                            {
                                key: key + '-date-processing-2',
                                fill: '#FFFFFF',
                                d: 'M6,1.3C7.3,1.7,8.3,2.7,8.7,4h1.2C9.5,2,8,0.5,6,0.1V1.3z'
                            }
                        )
                    ]
                )
            }
        }

    })
    // general infomation: version and modified date
    var markupGeneralInfo = React.createClass({

        render: function () {
            if (this.props.isCurrentVersion) {
                var versionLabel = 'v' + this.props.startedVersion + ' (' + Autodesk.Viewing.i18n.translate("current") + ')';
                var vclass = 'markup-started-version current';
            }
            else {
                var versionLabel = 'v' + this.props.startedVersion + ' (' + Autodesk.Viewing.i18n.translate("not current") + ')';
                var vclass = 'markup-started-version';
            }

            var key = this.props.key;
            return R.div({className: 'markup-details'}, [
                R.label({key: key + '-version', className: vclass}, versionLabel),
                React.createElement(markupCreateDate, {key: key + '-date',
                    createdDate: namespace.formateDateTime(this.props.createdDate),
                    savingStatus: this.props.savingStatus})
            ]);
        }

    })

    // Markup card contains all the markup information:
    // Thumbnail, status, description, and some details
    var markupCard = React.createClass({

        // On click implementation of markup card.
        onClick: function(event) {
            var onClickCallback = this.props.options.onClickCallback;
            if (onClickCallback) {
                onClickCallback(this.props.markup);
            }
        },

        onClose: function() {
            if (this.props.options.onCloseCallback) {
                this.props.options.onCloseCallback(this.props.markup);
            }
        },

        getInitialState: function () {
            return {selected: false};
        },

        componentWillReceiveProps: function(nextProps) {
            this.setState(
                {
                    selected: nextProps.options.selectedId != -1 &&
                              nextProps.options.selectedId == nextProps.markup.id
                });
        },

        render: function () {

            var attachments = this.props.markup.attachment;
            var markupObj = this.props.markup.markupObj;
            var currentVersion = this.props.options ?
                                 this.props.options.currentVersion :
                                 -1;

            // Get user name, if it is already specified in the markup application object,
            // then get it directly (this happens on creating process when already know it)
            //
            // otherwise, need to fire another request to get user's display name
            // from the oxgen id. (this happens on requesting process when only have user oxgen id).
            //
            var createdBy = this.props.markup.userName;
            var savingStatus = this.props.markup.status;

            var id = this.props.markup.id;
            var className = 'markup-card';
            if (this.props.options.selectedId === id) {
                // This one should have selected class
                className += ' markup-card-select';
                id += '_selected';
            }

            // get status
            var status = this.props.markup.status;
            if (status != namespace.MARKUP_STATUS_CLOSED &&
                markupObj.close_version > 0 && !markupObj.closed_at) {
                // This is a bit hack that close version has value,
                // but closed_at is null which means close markup request
                // is ongoing.
                status = 'closing';
            }

            var onCloseCallback = this.onClose;
            if (this.props.options.onCanCloseCallback &&
                !this.props.options.onCanCloseCallback(this.props.markup)) {
                onCloseCallback = null;
            }

            return R.div({key: id,
                    className: this.state.selected ? 'markup-card selected' : 'markup-card',
                    onClick: this.onClick},[
                    React.createElement( markupThumbnail, {
                        key: 'card-thumbnail-' + id,
                        thumbnail: attachments && attachments[1] ? attachments[1].data : null}),

                    R.div({ key: 'card-info-' + id, className: 'markup-info' }, [

                        // Create markup status
                        React.createElement( markupStatus, {
                            key: 'card-info-status-' + id,
                            status: status,
                            onCloseCallback: onCloseCallback}),

                        // Create markup user info
                        React.createElement( markupUserInfo, {
                            key: 'card-info-user-' + id,
                            createdBy: createdBy }),

                        // Create markup description
                        React.createElement( markupDescription, {
                            key: 'card-info-description-' + id,
                            description: markupObj.description }),

                        // Create markup general info
                        React.createElement(markupGeneralInfo, {
                            key: 'card-info-general-' + id,
                            createdDate: markupObj.created_at,
                            startedVersion: markupObj.starting_version,
                            isCurrentVersion: markupObj.starting_version == currentVersion,
                            savingStatus: savingStatus
                        })
                    ])
                ]
            )
        }
    })

    var markupCardLiWrapper = React.createClass({

        render: function() {
            return R.li( {}, React.createElement(markupCard, this.props ));
        }

    });

    // Markup list
    namespace.markupList = React.createClass({

        render: function () {
            var self = this;
            return R.ul({className: 'markup-list'},
                this.props.markups.filter(self.props.options.filter).map( function (markup) {

                    return React.createElement(markupCardLiWrapper, {
                        key: markup.id,
                        markup: markup,
                        options: this.props.options });

                }.bind(this))
            );
        }

    })

    // Markup panel component
    namespace.markupPanelComp = React.createClass({

        render: function() {
            if (this.props.markups.length > 0) {
                return React.createElement(namespace.markupList, this.props);
            }
            else {

                // The workflow should be,
                // 1. display a loading marker to tell user that markups are loading.
                // 2. if no markups on the document yet, then display "no markups."
                //    if some markups returned, then construct the list.
                //    if failed, display error message.
                //
                // TODO: so before UX deisgn is ready for the workflows, let's do thing here.
                // return R.label({className: 'markup-no-markups'}, namespace.Constants.MARKUP_LIST.NO_MARKUPS);
                //
                return R.label({className: 'markup-no-markups'}, '');
            }
        }

    });
})();;
(function(){

    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');

    namespace.MARKUP_UI_EXT_NAME = 'Autodesk.BIM360.MarkupsUI';
    namespace.MARKUP_CORE_EXT_NAME = 'Autodesk.Viewing.MarkupsCore';

    var Button = Autodesk.Viewing.UI.Button,
        ACTIVE = Button.State.ACTIVE,
        INACTIVE = Button.State.INACTIVE,
        DISABLED = Button.State.DISABLED;

    function createMarkupButton () {
        var btn = new Button( "toolbar-markupTool");
        btn.setToolTip(Autodesk.Viewing.i18n.translate("Add new markup"));
        btn.setIcon("bimviewericon-markup_entry_viewer");
        btn.onClick = function () {
            var state = btn.getState();
            btn.setState(state === INACTIVE ? ACTIVE : INACTIVE);
        };
        return btn;
    }

    function createmarkupVisBtn () {
        var btn = new Button( "toolbar-markupVis");
        btn.setToolTip(Autodesk.Viewing.i18n.translate("Show all markups"));
        btn.setIcon("bimviewericon-markup_normal");
        btn.onClick = function () {
            var state = btn.getState();
            if (state === DISABLED)
                return;

            btn.setState(state === INACTIVE ? ACTIVE : INACTIVE);
        };
        return btn;
    }

    function MarkupsUi(viewer, options) {
        Autodesk.Viewing.Extension.call(this, viewer, options);
    }

    MarkupsUi.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
    MarkupsUi.prototype.constructor = MarkupsUi;
    var proto = MarkupsUi.prototype;

    proto.loadMarkupCoreExtension = function () {
        var coreExt = this.viewer.getExtension(namespace.MARKUP_CORE_EXT_NAME);
        if (coreExt) {
            this.markupsCore = coreExt;
            return true;
        }
        console.warn("Failed to load extension: " + namespace.MARKUP_CORE_EXT_NAME);
        return false;
    };

    function handleKeyDown(e) {
        //if backspace key is for text delete, return
        if (document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement) return;
        // cancel the browser default action for backspace key
        if (e.keyCode === 8)
        {
            e.preventDefault();
        }
    }

    proto.load = function () {
        // TODO: Even if the toolController is missing, the viewer may create it later and
        // notify consumers (like us) through an event
        if (!this.viewer.toolController) {
            return false;
        }

        this.HOTKEYS_DELETE_MARKUP_ID = "Autodesk.Viewing.Hotkeys.DeleteMarkup";
        var self = this;
        var hotkeys = [
            {
                keycodes: [Autodesk.Viewing.theHotkeyManager.KEYCODES.DELETE],
                onPress: function () {self.markupTool.tryDeleteMarkup();}
            },
            {
                keycodes: [Autodesk.Viewing.theHotkeyManager.KEYCODES.BACKSPACE],
                onPress: function () {self.markupTool.tryDeleteMarkup();}
            }
        ];
        Autodesk.Viewing.theHotkeyManager.pushHotkeys(this.HOTKEYS_DELETE_MARKUP_ID, hotkeys);
        // For cancel the backspace key browser default action
        window.addEventListener('keydown', handleKeyDown);

        var extensionLoaded = this.loadMarkupCoreExtension();
        if (extensionLoaded) this.createUI();
        return extensionLoaded;
    };

    proto.unload = function() {
        this.destroyUI();
        window.removeEventListener("keydown", handleKeyDown);
        Autodesk.Viewing.theHotkeyManager.popHotkeys(this.HOTKEYS_DELETE_MARKUP_ID);

        this.markupsCore = null;

        return true;
    };

    proto.createUI = function () {
        var self = this;
        var viewer = this.viewer;

        // Only add markup tool button if viewer is in GUI mode.
        if (viewer.getToolbar) {
            var toolbar = viewer.getToolbar(true);
            var modelTools = toolbar.getControl(Autodesk.Viewing.TOOLBAR.MODELTOOLSID);

            if(!modelTools) {
                // insert model tool below navgation tool
                var navigationBar = toolbar.getControl(Autodesk.Viewing.TOOLBAR.NAVTOOLSID);
                var toolbarOptions = {};
                toolbarOptions.index = toolbar.indexOf(navigationBar) + 1;
                this.modelTools = new avu.ControlGroup( Autodesk.Viewing.TOOLBAR.MODELTOOLSID);
                toolbar.addControl(this.modelTools, toolbarOptions);
                modelTools = this.modelTools;
            }

            // Add markup tool button to toolbar
            this.markupToolButton = createMarkupButton();
            modelTools.addControl(this.markupToolButton, {index:0});
        }
        else {
            // No GUI, so no UI.
            return false;
        }

        this.markupTool = new namespace.MarkupsTool(viewer, this.markupsCore, this.options.context);
        viewer.addPanel(this.markupTool);

        if (this.markupTool.app) {
            this.markupTool.app.addViewerChangeEventListeners();
        }

        this.markupTool.addVisibilityListener(function(show){
            this.markupToolButton.setState(show ? ACTIVE : INACTIVE);

           if (!show && this.markupVisBtn &&
                this.markupVisBtn.getState() == ACTIVE) {
               // At the moment of exiting edit mode, then enter to view mode
               // right away.
               this.updateMarkupVisButton(ACTIVE);
           }

        }.bind(this));

        this.onMarkupButtonStateChange = function(e) {
            this.markupTool.setVisible(e.state === ACTIVE);
        }.bind(this);
        this.markupToolButton.addEventListener(Button.Event.STATE_CHANGED, this.onMarkupButtonStateChange);

        // ??? temp fix the resize issue here.
        // ??? Should handle this event on markup core,
        // ??? but now we can't change markup core.

        this.onViewerResize = function(e) {

            // ??? The problem here is that for lmv viewer,
            // ??? when viewer get resized, the camera won't get updated yet
            // ??? which cause markup svg view box calculation wrong.
            // ??? So have to explicitly notify camera being changed.
            if (this.viewer &&
                this.viewer.impl instanceof Autodesk.Viewing.Private.Viewer3DImpl) {
                this.viewer.impl.syncCamera();
            }

            this.markupsCore && this.markupsCore.onViewerResizeBinded(e);
        }.bind(this);
        this.viewer.addEventListener(Autodesk.Viewing.VIEWER_RESIZE_EVENT, this.onViewerResize);

        return true;
    };

    proto.destroyUI = function() {
        var viewer = this.viewer;

        if (viewer.getToolbar) {
            var toolbar = viewer.getToolbar(false);
            if (toolbar) {
                var modelTools = toolbar.getControl(Autodesk.Viewing.TOOLBAR.MODELTOOLSID);

                if (modelTools) {
                    if (this.markupToolButton) {
                        modelTools.removeControl(this.markupToolButton.getId());
                        this.markupToolButton.removeEventListener(Button.Event.STATE_CHANGED, this.onMarkupButtonStateChange);
                        this.markupToolButton = null;
                    }
                    if (this.markupVisBtn) {
                        modelTools.removeControl(this.markupVisBtn.getId());
                        this.markupVisBtn.removeEventListener(Button.Event.STATE_CHANGED, this.onMarkupVisBtnStateChange);
                        this.markupVisBtn = null;

                        this.markupTool.app.removeObserver(this.markupVisBtnOb);
                    }
                }
                if (this.modelTools) {
                    toolbar.removeControl(this.modelTools);
                    this.modelTools = null;
                }
            }

            if(this.markupTool) {
                this.markupTool.app && this.markupTool.app.removeViewerChangeEventListeners();

                if (viewer.removePanel) {
                    viewer.removePanel(this.markupTool);
                }

                this.markupTool.destroyUI();
                this.markupTool = null;
            }
        }

        // ??? temp fix the resize issue here.
        viewer.removeEventListener(Autodesk.Viewing.VIEWER_RESIZE_EVENT, this.onViewerResize);
    }

    proto.updateMarkupVisButton = function(state) {
        if (this.markupVisBtn) {
            this.markupVisBtn.setState(state);
            this.markupTool.app.showAllMarkups(state == ACTIVE);
        }
    }

    proto.addMarkupVisButton = function() {
        if (this.markupVisBtn || !this.viewer.getToolbar)
            return;

        var toolbar = this.viewer.getToolbar(false);
        if (!toolbar) {
            return;
        }

        var modelTools = toolbar.getControl(Autodesk.Viewing.TOOLBAR.MODELTOOLSID);
        if (!modelTools) {
            return;
        }

        // Create the button first.
        this.markupVisBtn = createmarkupVisBtn();
        this.onMarkupVisBtnStateChange = function(e) {
            var showAll = e.state === ACTIVE;
            this.markupTool.app.showAllMarkups(showAll);

            if (e.state == DISABLED) {
                this.markupVisBtn.setToolTip(Autodesk.Viewing.i18n.translate("No markup in current doc"));
            }
            // Toggle the vis button
            else if (showAll) {
                // Set tooltip and Icon.
                this.markupVisBtn.setToolTip(Autodesk.Viewing.i18n.translate("Hide all markups"));
                this.markupVisBtn.setIcon("bimviewericon-markup_normal")

            }
            else {
                // Set tooltip and Icon
                this.markupVisBtn.setToolTip(Autodesk.Viewing.i18n.translate("Show all markups"));
                this.markupVisBtn.setIcon("bimviewericon-markup_hide");
            }

        }.bind(this);

        // Add button to the toolbar
        this.markupVisBtn.addEventListener(Button.Event.STATE_CHANGED, this.onMarkupVisBtnStateChange);
        var idx = modelTools.indexOf(this.markupToolButton) + 1;
        modelTools.addControl(this.markupVisBtn, {index: idx});

        // Add an observer
        this.markupVisBtnOb = new _markupVisBtnObserver(this);
        this.options.context.addObserver(this.markupVisBtnOb);
        // Then set initial state
        if (this.markupTool && this.markupTool.app.markupList.length == 0) {
            this.updateMarkupVisButton(DISABLED);
        }
        else {
            this.updateMarkupVisButton(ACTIVE);
        }

    }

    // A markup observer to update markup vis button state
    _markupVisBtnObserver = function(markupExt) {

        this.onSaveMarkup = function(app, markupAppObj, error) {
            // As long as any markup is created, then switch to display markups.
            if (markupAppObj) {

                if (markupExt.markupVisBtn.getState() == ACTIVE)
                    app.loadMarkup(markupAppObj);

                if (markupExt.markupVisBtn.getState() == DISABLED)
                    markupExt.updateMarkupVisButton(ACTIVE);
            }

        };

        this.onRequestMarkups = function(app, markupAppObjList, error) {
            if (markupAppObjList &&
                markupAppObjList.length > 0) {
                // At this moment, a bunch of markups have been requested.
                // Then, start view markups mode.
                markupExt.updateMarkupVisButton(ACTIVE);
            }
        };

        this.onGetAttachment = function(app, markupAndAttachType, error) {
            if (markupAndAttachType &&
                markupAndAttachType.attachmentType === namespace.MARKUP_RESOUCE_TYPE_SVG) {
                // Then load this markup, in theory this will incrementally display
                // markups retrieved from service.
                app.loadMarkup(markupAndAttachType.markup);
            }
        };
    }

    Autodesk.Viewing.theExtensionManager.registerExtension(namespace.MARKUP_UI_EXT_NAME, MarkupsUi);
    namespace.MarkupsUi = MarkupsUi;

})();;(function() {
    'use strict';

    /*
     * Markup Service implementation based on comment.js
    */
    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');

    // Switch to issue service endpoint once it is ready.
    var ENV_TABLE = {
        Local : {
            ISSUE_SERVICE : 'https://developer-dev.api.autodesk.com/issues-dev/v1/',
            OBJECT_STORAGE: 'https://developer-dev.api.autodesk.com/oss/v2/'
        },
        // This is for debugging only !!!
        Development: {
            ISSUE_SERVICE : 'http://dev.issues.autodesk.com/api/v1/',
            OBJECT_STORAGE: 'https://developer-dev.api.autodesk.com/oss/v2/'
        },
        AutodeskDevelopment : {
            ISSUE_SERVICE : 'https://developer-dev.api.autodesk.com/issues-dev/v1/',
            OBJECT_STORAGE: 'https://developer-dev.api.autodesk.com/oss/v2/'
        },
        AutodeskStaging : {
            ISSUE_SERVICE : 'https://developer-stg.api.autodesk.com/issues-stg/v1/',
            OBJECT_STORAGE: 'https://developer-stg.api.autodesk.com/oss/v2/'
        },
        AutodeskProduction : {
            ISSUE_SERVICE : 'https://developer.api.autodesk.com/issues/v1/',
            OBJECT_STORAGE: 'https://developer.api.autodesk.com/oss/v2/'
        }
    };

    var ISSUES_TYPE = {
      issue: {
        value: "issues",
        endpoint: "/issues"
      },

      markup: {
        value: "markups",
        endpoint: "/markups"
      }
    }

    /**
     * An implementation of markup service to post/list markups.
     * @constructor
     */
    function MarkupService(options) {
        options = options || {};
        this.options = options;

        this.fakeRequest = null;

        // Environment
        if (options.env) {
            this.env = options.env;
        } else {
            this.env = "AutodeskDevelopment";
        }
        if (options.fakeServer) {
            this.fakeRequest = new namespace.FakeRequest(options);
        }

        // Which type to use: markups or issues
        var type = 'markup';
        if (typeof options.issueType === 'string') {
          type = options.issueType.toLowerCase();
        }
        this.issueType = ISSUES_TYPE[type];

        // End Points
        var config = ENV_TABLE[this.env];
        this.ISSUE_SERVICE_URL = config['ISSUE_SERVICE'];
        this.OBJECT_STORAGE_SERVICE_URL = config['OBJECT_STORAGE'];

        // Set resource
        this.setResource(options);

        // Additinoal properties related to issue service JSON API call.
        // ??? consider to leverage an existing JSON API JS client
        // ??? to manage all calls, but right now do straightforward RESTful handling.
        this.maxPageLimit = 100;  // Now, issue service can return 100 items at once.
        if (options.maxPageLimit &&
            options.maxPageLimit > 0 &&
            options.maxPageLimit < this.maxPageLimit) {
          this.maxPageLimit = options.maxPageLimit;
        }

        // Record all ongoing request, then can cancel them if no longer needed.
        this.xhrGetReq = [];
    }

    var proto = MarkupService.prototype;

    /**
     * This is a dummy check that the must have value is set
     * so that service is ready to call
    */
    proto.checkValidation = function() {
        // Always valid if it is a fake service.
        if (this.fakeRequest) {
            this.valid = true;
        }
        else {
            this.valid = !!this.options.oauth2token &&
                         !!this.issueProject &&
                         !!this.issueType;
        }

        return this.valid;
    }

    /**
     *
     * @param {String} path -
     */
    proto.setResource = function(options) {
        this.issueProject = options.issueProject;
        this.documentUrn = options.documentUrn;
    };

    /**
     *
     *
     * @param {Array} [additionalHeaders] - Additional headers with items {name:String, value:String}
     * @returns {Promise}
     */
    proto.requestMarkups = function (pageLimit, offset, additionalHeaders) {
        if (!this.checkValidation())
            return Promise.reject("Service is unavailable.");

        if (!pageLimit)
          pageLimit = this.maxPageLimit;
        if (!offset)
          offset = 0;

        var self = this;
        return new Promise(function(resolve, reject){

            // Add page limit and offset query parameters for JSON API usage.
            var url = [self.ISSUE_SERVICE_URL, "containers/", self.issueProject, self.issueType.endpoint].join("");
            url = [url, "?page[limit]=" + pageLimit + "&page[offset]=" + offset].join("");

            if (self.documentUrn) {
                // If specify document urn, then request issues filtered by this urn.
                // otherwise, retrieve all issues for this project.
                var doc = encodeURIComponent(self.documentUrn);
                url = [url, "&filter[target_urn]=", doc].join("");
            }

            // Sort the results by its created time in descent order
            // TODO: as the request goes more complex, need to consider to
            // refactor this to use a JSON API library to better manage
            // different request paramters.
            url = [url, "&sort=-created_at"].join("");

            var callbacks = getAjaxCallback(function() {
                self._removeXhr(xhr);
                resolve.apply(null, arguments);
            }, function() {
                self._removeXhr(xhr);
                reject.apply(null, arguments);
            });

            var xhr = createRequest(self, 'GET', url, 'application/vnd.api+json', callbacks, "requestMarkups");
            injectHeaders(xhr, additionalHeaders);
            xhr.send();

            self._addXhr(xhr);
        });
    };

    /**
     *
     *
     * @param {Object}
     * @param {Array} [additionalHeaders] - Additional headers with items {name:String, value:String}
     * @returns {Promise}
     */
    proto.postMarkups = function (markupObj, additionalHeaders) {
        if (!this.checkValidation())
            return Promise.reject("Service is unavailable.");

        var self = this;
        return new Promise(function(resolve, reject){
            var url = [self.ISSUE_SERVICE_URL, 'containers/', self.issueProject, self.issueType.endpoint].join('');
            var callbacks = getAjaxCallback(resolve, reject);
            var xhr = createRequest(self, 'POST', url, 'application/vnd.api+json', callbacks, "postMarkups");

            injectHeaders(xhr, additionalHeaders);

            var body = {
                "data": {
                    "type": self.issueType.value,
                    "attributes":markupObj
                }
            }

            xhr.send(JSON.stringify(body));
        });
    };

    proto.closeMarkup = function (markupId, close_version, additionalHeaders) {
        if (!this.checkValidation())
            return Promise.reject("Service is unavailable.");
        var self = this;
        return new Promise(function(resolve, reject){
            var url = [self.ISSUE_SERVICE_URL, 'containers/', self.issueProject, self.issueType.endpoint, '/', markupId].join('');
            var callbacks = getAjaxCallback(resolve, reject);
            var xhr = createRequest(self, 'PATCH', url, 'application/vnd.api+json', callbacks, "closeMarkup");

            injectHeaders(xhr, additionalHeaders);

            var body = {
                "data": {
                    "type": self.issueType.value,
                    "id": markupId,
                    "attributes": {
                        //"status": "closed",
                        "close_version": close_version
                    }
                }
            }

            xhr.send(JSON.stringify(body));
        });
    };

    proto.fetchLocationForNewOssAttachment = function( additionalHeaders,  callbacks) {
        if (!this.checkValidation())
            return Promise.reject("Service is unavailable.");

        var url = [this.ISSUE_SERVICE_URL, "containers/", this.issueProject, "/oss_objects"].join("");
        var xhr = createRequest(this, 'POST', url, 'application/vnd.api+json', callbacks, "fetchLocationForNewOssAttachment");
        injectHeaders(xhr,additionalHeaders);

        var body = {
            "data": {
                "type": "oss_objects"
            }
        }

        xhr.send(JSON.stringify(body));
    };

    proto.getAttachment = function(urn, isBinaryData, additionalHeaders) {
        if (!this.checkValidation())
            return Promise.reject("Service is unavailable.");

        var self = this;
        return new Promise(function(resolve, reject){
            var dataParts = self.extractOssBucketAndId(urn);
            var url = [self.OBJECT_STORAGE_SERVICE_URL, 'buckets/', dataParts[0], '/objects/', dataParts[1]].join("");

            var callbacks = getAjaxCallback(function() {
                self._removeXhr(xhr);
                resolve.apply(null, arguments);
            }, function() {
                self._removeXhr(xhr);
                reject.apply(null, arguments);
            },
            isBinaryData);

            var xhr = createRequest(self, 'GET', url, null, callbacks, "getAttachment");
            injectHeaders(xhr, additionalHeaders);
            if (isBinaryData) {
                xhr.responseType = 'arraybuffer';
            }
            xhr.send();
            self._addXhr(xhr);
        });
    };

    proto.postAttachment = function(objectKey, fileData, bucketId, additionalHeaders, callbacks) {
        if (!this.checkValidation())
            return Promise.reject("Service is unavailable.");

        var url = [this.OBJECT_STORAGE_SERVICE_URL, 'buckets/', bucketId, '/objects/', objectKey].join("");
        var xhr = createRequest(this, 'PUT', url, 'text/plain', callbacks, "postAttachment");
        injectHeaders(xhr, additionalHeaders);
        xhr.send(fileData);
    };

    /**
     * Extracts the bucket id and the attachment id from an OSS URN.
     * @param {String} ossUrn
     * @returns {Array} With values: [ <bucket_id>, <attachment_id> ]
     */
    proto.extractOssBucketAndId = function(ossUrn) {
        var dataParts = ossUrn.split('/'); // Returns 2 array with 2 elements [ <stuff + bucket_id>, <attachment_id> ]
        var bucketId = dataParts[0];            // Something like 'urn:adsk.objects:os.object:issues'
        var tmpArray = bucketId.split(':');     // We need to get 'issues' at the end.
        dataParts[0] = tmpArray[tmpArray.length-1];
        return dataParts;
    };

    proto.cancelAllGet = function() {

        // Start cancel all pending xhr calls.
        var count = this.xhrGetReq.length;
        for (var i=count-1; i>=0; i--) {
            this.xhrGetReq[i] && this.xhrGetReq[i].abort();
        }

        this.xhrGetReq = [];
    }

    proto._removeXhr = function(xhr) {
        var idx = this.xhrGetReq.indexOf(xhr);
        idx > -1 && this.xhrGetReq.splice(idx, 1);
    }

    proto._addXhr = function(xhr) {
        this.xhrGetReq.push(xhr);
    }

    // Below are "private" functions

    /**
     * Returns an object compatible with our AJAX callbacks mechanism.
     * Internal usage only.
     *
     * @param {Function} resolve
     * @param {Function} reject
     * @param {Boolean} [isBinaryData] Whether the response is to be binary or not (defaults to not-binary)
     * @returns {{onLoad: Function, onError: Function, onTimeout: Function}}
     */
    function getAjaxCallback(resolve, reject, isBinaryData) {
        return {
            onLoad: function(event) {
                if (event.currentTarget.status == 201 ||
                    event.currentTarget.status == 200) {
                    resolve(isBinaryData ? event.currentTarget.response
                        : event.currentTarget.responseText);
                } else {
                    reject();
                }
            },
            onError: function() {
                reject();
            },
            onTimeout: function() {
                reject();
            },
            onAbort: function() {
                reject();
            }
        }
    }

    /**
     * Creates a request object to communicate with the issues endpoint.
     * May create a fake request for debug purposes if specified in options.
     * Returned value is ready to initiate async operation through it's send() method
     * (it hasn't been called yet)
     *
     * @param {MarkupService} instance
     * @param {String} operation - POST, GET, DELETE
     * @param {String} url - REST endpoint
     * @param {String} contentType - Content type header
     * @param {Object} callbacks - {onLoad:Function, onError:Function, onTimeout:Function}
     * @param {String} [callerFunction] - Name of the operation being performed
     * @returns {XMLHttpRequest}
     */
    function createRequest(instance, operation, url, contentType, callbacks, callerFunction) {

        if (instance.fakeRequest) {
            return instance.fakeRequest.createRequest(operation, url, callbacks, callerFunction);
        }

        var xhr = new XMLHttpRequest();
        xhr.open(operation, url, true);
        if(contentType) {
            xhr.setRequestHeader("Content-Type", contentType);
        }
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        // This is just for testing the non-apigee issue service endpoint,
        // which request different authorization header.
        // TODO:  remove this once issue service is fully functional.
        if (instance.env == "Development") {
            xhr.setRequestHeader("X-Ads-Token-Data", '{"access_token":{"userid":"5NQFLYNGREGP"}}');
        }
        else {
            xhr.setRequestHeader("Authorization", "Bearer " + instance.options.oauth2token);
        }

        xhr.onload = callbacks.onLoad;
        xhr.onerror = callbacks.onError;
        xhr.ontimeout = callbacks.onTimeout;
        xhr.onabort = callbacks.onAbort;

        return xhr;
    }

    /**
     * Injects additional RequestHeaders before dispatching the async op to the issue endpoint.
     *
     * @param {XMLHttpRequest} xhr
     * @param {Array} additionalHeaders - Additional headers with items {name:String, value:String}
     */
    function injectHeaders(xhr, additionalHeaders) {
        additionalHeaders && additionalHeaders.forEach(function(headerInfo) {
            xhr.setRequestHeader(headerInfo['name'], headerInfo['value']);
        });
    }

    // Export //
    namespace.MarkupService = MarkupService;
})();

(function(){
    /**
     * Fakerequest referenced from comment.js
     */
    "use strict";

    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');

    /**
     * Helper class that serves as a debug-proxy for async operations.
     * Useful when in development mode and having trouble accessing endpoints.
     *
     * @param {Object} options
     * @param {Number} [options.fakeSeverDelay] - Forced delay on async callbacks (in milliseconds)
     * @param {String} [options.displayName] - User name posting a comment
     * @param {String} [options.oxygenId] - User's oxygenId when posting a comment
     * @constructor
     */
    function FakeRequest(options) {

        this.options = options || {};
        this.FAKE_SERVER_DELAY = this.options.fakeSeverDelay || 200;
        this.FAKE_NEXT_ID = 11;
    }

    var proto = FakeRequest.prototype;

    proto.createRequest = function(operation, url, callbacks, callerFunction) {

        var self = this;
        var fakeRequest = {
            notifyCallback: function(fakeServerResponse) {
                if (self.FAKE_SERVER_DELAY) {
                    // Fake server response delay
                    setTimeout(function(){
                            callbacks.onLoad( fakeServerResponse );
                        },
                        self.FAKE_SERVER_DELAY);
                }
                else {
                    // invoke callback right away
                    callbacks.onLoad( fakeServerResponse );
                }
            },

            replyPostMarkups: function(args) {
                var responseObject = {
                  "data": {
                    "id": "00000000-0000-0000-0000-000000000002",
                    "type": "issues",
                    "links": {
                      "self": "http://dev.issues.autodesk.com/api/v1/issues/00000000-0000-0000-0000-000000000002"
                    },
                    "attributes": {
                      "close_version": null,
                      "closable": true,
                      "closed_at": null,
                      "closed_by": null,
                      "created_at": "2015-01-01T00:00:00.000Z",
                      "created_by": "5NQFLYNGREGP",
                      "description": "Some description",
                      "markup_metadata": {
                        sheetGUID: "13db0f25-4446-4c98-a73f-861f3192ad47"
                      },
                      "resource_urns": {
                        "svg": "urn:adsk.some.svg"
                      },
                      "starting_version": 1,
                      "tags": {
                        "team": "Team 1"
                      },
                      "target_urn": "urn:adsk.some.document.urn"
                    },
                    "relationships": {
                      "container": {
                        "links": {
                          "self": "http://dev.issues.autodesk.com/api/v1/issues/00000000-0000-0000-0000-000000000002/relationships/container",
                          "related": "http://dev.issues.autodesk.com/api/v1/issues/00000000-0000-0000-0000-000000000002/container"
                        }
                      }
                    }
                  }
                };
                this.notifyCallback( { currentTarget: {status: 200, responseText: JSON.stringify(responseObject)} } );
            },

            replyRequestMarkups: function() {
                var responseObject = {
                  "data": [
                    {
                      "id": "00000000-0000-0000-0000-000000000003",
                      "type": "issues",
                      "links": {
                        "self": "http://dev.issues.autodesk.com/api/v1/issues/00000000-0000-0000-0000-000000000003"
                      },
                      "attributes": {
                        "close_version": null,
                        "closable": false,
                        "closed_at": null,
                        "closed_by": null,
                        "created_at": "2015-01-01T00:00:00.000Z",
                        "created_by": "oxygen_id_50",
                        "description": "Issue Description 50",
                        "markup_metadata": {
                          sheetGUID: "13db0f25-4446-4c98-a73f-861f3192ad47"
                        },
                        "resource_urns": null,
                        "starting_version": 1,
                        "tags": {},
                        "target_urn": "urn:adsk.some.doc.1"
                      },
                      "relationships": {
                        "container": {
                          "links": {
                            "self": "http://dev.issues.autodesk.com/api/v1/issues/00000000-0000-0000-0000-000000000003/relationships/container",
                            "related": "http://dev.issues.autodesk.com/api/v1/issues/00000000-0000-0000-0000-000000000003/container"
                          }
                        }
                      }
                    }
                  ],
                  "links": {
                    "first": "http://dev.issues.autodesk.com/api/v1/containers/00000000-0000-0000-0000-000000000001/issues?filter%5Btarget_urn%5D=urn%3Aadsk.some.doc.1&page%5Blimit%5D=10&page%5Boffset%5D=0",
                    "last": "http://dev.issues.autodesk.com/api/v1/containers/00000000-0000-0000-0000-000000000001/issues?filter%5Btarget_urn%5D=urn%3Aadsk.some.doc.1&page%5Blimit%5D=10&page%5Boffset%5D=0"
                  }
                };
                this.notifyCallback( { currentTarget: {status: 200, responseText: JSON.stringify(responseObject)} } );
            },

            replyCloseMarkup: function(args) {
                var closeRequestBody = JSON.parse(args);
                var responseObject = {
                    "data": {
                        "id": closeRequestBody.data.id,
                        "type": "issues",
                        "links": {
                            "self": "http://dev.issues.autodesk.com/api/v1/issues/00000000-0000-0000-0000-000000000003"
                        },
                        "attributes": {
                            "close_version": closeRequestBody.data.attributes.close_version,
                            "closable": false,
                            "closed_at": "2016-01-01T00:00:00.000Z",
                            "closed_by": "oxygen_id_50",
                            "created_at": "2015-01-01T00:00:00.000Z",
                            "created_by": "oxygen_id_50",
                            "description": "Issue Description 50",
                            "markup_metadata": {
                                sheetGUID: "13db0f25-4446-4c98-a73f-861f3192ad47"
                            },
                            "resource_urns": null,
                            "starting_version": 1,
                            "tags": {},
                            "target_urn": "urn:adsk.some.doc.1"
                        },
                        "relationships": {
                            "container": {
                                "links": {
                                    "self": "http://dev.issues.autodesk.com/api/v1/issues/00000000-0000-0000-0000-000000000003/relationships/container",
                                    "related": "http://dev.issues.autodesk.com/api/v1/issues/00000000-0000-0000-0000-000000000003/container"
                                }
                            }
                        }
                    }
                };
                this.notifyCallback( { currentTarget: {status: 200, responseText: JSON.stringify(responseObject)} } );
            },

            replyFetchLocationForNewOssAttachment: function() {
                var responseObject = {
                    "data": {
                        "id": "00000000-0000-0000-0000-000000000001",
                        "type": "oss_objects",
                        "links": {
                            "self": "http://dev.issues.autodesk.com/api/v1/oss-objects/00000000-0000-0000-0000-000000000001"
                        },
                        "attributes": {
                            "urn": "urn:adsk.objects:os.object:issues-dev/00000000-0000-0000-0000-000000000001",
                            "bucket_key": "issues-dev"
                        }
                    }
                }
                this.notifyCallback( { currentTarget: {status: 200, responseText: JSON.stringify(responseObject)} } );
            },

            send: function(args) {

                switch(operation) {
                    case 'GET':

                        switch(callerFunction) {
                            case "requestMarkups":
                                this.replyRequestMarkups();
                                break;
                            default:
                                this.notifyCallback( { currentTarget: {status: 200, responseText: "[]"} } );
                                break;
                        }

                        break;
                    case 'POST':

                        switch(callerFunction) {
                            case "fetchLocationForNewOssAttachment":
                                this.replyFetchLocationForNewOssAttachment();
                                break;
                            default:
                                this.replyPostMarkups(args);
                                break;
                        }
                        break;

                    case 'DELETE':
                        this.notifyCallback( { currentTarget: {status: 200, responseText: "{}"} } );
                        break;
                    case 'PUT':
                        try {
                            JSON.parse(args);
                            this.notifyCallback( { currentTarget: {status: 200, responseText: args} } );
                        }
                        catch(error) {
                            // send attachmentData
                            var attachmentResponse = {
                                objects:[{id: "test", key: "test", 'content-type': "image/png", location: "http://www.autodesk.com"}]
                            };

                            this.notifyCallback( { currentTarget: {status: 200, responseText: JSON.stringify(attachmentResponse)} } );
                        }
                        break;
                    case 'PATCH':
                        switch (callerFunction) {
                            case "closeMarkup":
                                this.replyCloseMarkup(args);
                                break;
                            default:
                                this.notifyCallback( { currentTarget: {status: 200, responseText: "[]"} } );
                                break;
                        }
                }
            },
            setRequestHeader: function (){}
        };
        return fakeRequest;
    };

    namespace.FakeRequest = FakeRequest;
})();


(function() {
    'use strict';

    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');

    var ServiceOperator = function() {
        this.opImpl = null;

        this.initialize = function(options, impl) {
            this.opImpl = impl;
            this.opImpl && this.opImpl.setUp(options);
        }

        this.terminate = function() {
            this.opImpl && this.opImpl.tearDown();
            this.opImpl = null;
        }

        this.requestMarkups = function(pageLimit, offset) {
            return this.opImpl.requestMarkups(pageLimit, offset);
        }

        this.postMarkup = function(markupObj, markupAttachmentList) {
            return this.opImpl.postMarkup(markupObj, markupAttachmentList);
        }

        this.getAttachment = function(ossPathUrn, ossDataType) {
            return this.opImpl.getAttachment(ossPathUrn, ossDataType);
        }

        this.getMaxPageLimit = function() {
            return this.opImpl.getMaxPageLimit();
        }

        this.cancelAllGet = function() {
            return this.opImpl.cancelAllGet();
        }

        this.closeMarkup = function(markupId, close_version) {
            return this.opImpl.closeMarkup(markupId, close_version);
        }
    }

    namespace.ServiceOperator = ServiceOperator;

})();

(function() {
    'use strict';

    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');

    var ServiceOperatorImpl = function() {

        this.acmNamespace = {'name': 'x-ads-acm-namespace', 'value': ''};

        // ??? now we reuse one service per implementation to do all request.
        // ??? it might cause potential issue that the whole post request not done
        // ??? yet, but setup get called again with new options to the service,
        // ??? which might cause the ongoing post request not consistent.
        // ??? but, considering the environment markup is being used, it unlikely happen.
        // ??? An alternative fix may be to instantiate a new service for each
        // ??? request, so there are no impact cross different request.
        // ??? But, let's see how thing get works so far, and decide what is next step.
        this.setUp = function(options) {
            this.service = new namespace.MarkupService(options);
            this.acmNamespace['value'] = options.acmNamespace;
            this.embedResourceIfNeeded = options.embedResourceIfNeeded;
        }

        this.tearDown = function() {
            // Cancel all pending xhr as it is no longer needed.
            this.service.cancelAllGet();
        }

        this.getMaxPageLimit = function() {
            return this.service.maxPageLimit;
        }

        this.requestMarkups = function(pageLimit, offset) {

            // This only returns the markups metadata and not include attachemnt.
            // Attachments for these markups need to request separately.
            return this.service.requestMarkups(pageLimit, offset).then(function(result) {
                // Parse the results, may consider to use a JSON API client toolkit ?

                try {
                    var issueObj = JSON.parse(result);
                    var markupObjs = issueObj['data'];
                    markupObjs = markupObjs.map(function(d) {
                        return d;
                    });

                    var nextReq = issueObj['links']['next'];

                    return Promise.resolve({value: markupObjs, nextReq: nextReq});
                }
                catch (e) {
                    return Promise.reject(e);
                }

            }, function() {
                // Fail to request markups.
                return Promise.reject();

            });
        }

        this.getAttachment = function(ossPathUrn, ossDataType) {
            // OSS data type is to determine whether the attachment is binary or not.
            var xhrHeaders = [];
            xhrHeaders.push(this.acmNamespace);
            var isBinaryData = (ossDataType === namespace.ATTACHMENT_DATA_TYPE_BINARY);

            return this.service.getAttachment(ossPathUrn, isBinaryData, xhrHeaders);
        }

        this.postMarkup = function(markupObj, markupAttachmentList) {
            // Post markup steps,
            // 1. Fetch OSS bucket location.
            // 2. Upload attachment to the OSS bucket.
            // 3. Post markup object.

            var self = this;
            var _fetchOSSBucketForAttachment = function(attachment) {

                return new Promise(function(resolve, reject) {

                    self.service.fetchLocationForNewOssAttachment([], {
                        onLoad: function(event) {
                            var xhr = event.currentTarget;
                            if (xhr.status == 201 || xhr.status == 200) {
                                // interprete  response and pare oss bucket and key
                                // Then fill in attachment.ossPath
                                var bucketData = JSON.parse(xhr.responseText);
                                attachment.ossPath = bucketData.data.attributes.urn;

                                resolve();
                            }
                            else {
                                reject();
                            }
                        },
                        onError: function() {
                            reject();
                        },
                        onTimeout: function() {
                            reject();
                        }
                    });
                });

            };

            var _fetchOSSBucketForAttachments = function() {
                if (markupAttachmentList.length == 0) {
                    return Promise.resolve();
                }

                // This is an array of promise
                var pa = markupAttachmentList.map(function(attachment) {
                    return _fetchOSSBucketForAttachment(attachment);
                });

                return Promise.all(pa);
            };

            var _uploadAttachment = function(attachment) {

                return new Promise(function(resolve, reject) {
                    // At this point, oss bucket and key should all be fetched.
                    var bucketData = self.service.extractOssBucketAndId(attachment.ossPath);
                    var bucketId = bucketData[0],
                        bucketKey = bucketData[1];

                    var xhrHeaders = [];
                    xhrHeaders.push(self.acmNamespace);

                    self.service.postAttachment(bucketKey, attachment.data, bucketId, xhrHeaders, {
                        onLoad: function(event) {
                            // Upload attachment successfully.
                            var xhr = event.currentTarget;
                            if (xhr.status == 200 || xhr.status == 201) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        },
                        onError: function() {
                            reject();
                        },
                        onTimeout: function() {
                            reject();
                        }
                    });
                });

            };

            var _uploadAttachments = function() {
                if (markupAttachmentList.length == 0) {
                    return Promise.resolve();
                }

                var pa = markupAttachmentList.map(function(attachment) {
                    return _uploadAttachment(attachment);
                });

                return Promise.all(pa);
            };

            var _postMarkup = function() {

                markupAttachmentList.forEach(function (attachment) {

                    markupObj['resource_urns'][attachment.type] = attachment.ossPath;
                });

                return self.service.postMarkups(markupObj, []);
            };

            var _postMarkupWithAttchments = function() {
                // So, do all attchments in markup object.
                markupAttachmentList.forEach(function (attchment) {

                  markupObj['resource_urns'][attchment.type] = attchment.data;

                });

                // Then specify this is a markup embeding attchment resource
                markupObj['tags']['resourceEmbed'] = true;

                return self.service.postMarkups(markupObj, []);
            };

            return _fetchOSSBucketForAttachments().then(function() {
                // Fetch OSS successfully.
                return _uploadAttachments();

            }, function() {
                // Fetch OSS failed
                return Promise.reject();

            }).then(function() {
                // Upload attachments successfully.

                return _postMarkup().then(function(result) {

                    // parse the result and only get the markup data.
                    try {
                        result = JSON.parse(result);
                        var markupObj = result['data'];

                        return Promise.resolve(markupObj);
                    }
                    catch (e) {
                        return Promise.reject(e);
                    }

                });

            }).catch(function(e) {
                // If there are any failure on uploading a attachment,
                // let's try to do a handling by saving the SVG data
                // as the body a markup object to issue service directly.
                // This is a workaround just to make the workflow complete first.
                // As at this moment of writing this comment, issue service
                // still have problem of letting us put data to the OSS bucket
                // allocated from it.
                // So, have a flag to determine whether need a special handling here,

                if (!self.embedResourceIfNeeded) {
                    return Promise.reject();
                }

                return _postMarkupWithAttchments().then(function(result) {

                    // parse the result and only get the markup data.
                    try {
                        result = JSON.parse(result);
                        var markupObj = result['data'];

                        return Promise.resolve(markupObj);
                    }
                    catch (e) {
                        return Promise.reject(e);
                    }

                });
            });

        };

        this.closeMarkup = function(markupId, close_version) {
            return this.service.closeMarkup(markupId, close_version).then(function(result) {
                // Parse the results
                try {
                    var issueObj = JSON.parse(result);
                    var markupObj = issueObj['data']['attributes'];

                    return Promise.resolve(markupObj);
                }
                catch (e) {
                    return Promise.reject(e);
                }

            }, function() {
                // Fail to close markups.
                return Promise.reject();

            });
        }

    }

    namespace.ServiceOperatorImpl = ServiceOperatorImpl;
})();;(function() {
	'use strict';

	var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');
	namespace.MARKUP_LAYER_PRE = "layer_";
	namespace.ATTACHMENT_DATA_TYPE_BINARY = 'binary';
	namespace.ATTACHMENT_DATA_TYPE_TEXT = 'text';
	namespace.MARKUP_RESOUCE_TYPE_SVG = 'svg';
	namespace.MARKUP_RESOUCE_TYPE_SCAPTURE = 'screencapture';

	// TODO: there are some confusion here that markup metadata from
	// issue service get a status, which can be either open or closed.
	// (not make correct yet)
	// we also have a 'status' which more like a result recorder after
	// each service operation.
	// Need to clear up once issue service can return the correct status.
	//
    namespace.MARKUP_STATUS_SAVE_FAILED = 'save_failed';
    namespace.MARKUP_STATUS_SAVE_SUCCEED = 'save_success';
    namespace.MARKUP_STATUS_CREATED = 'created';
    namespace.MARKUP_STATUS_OPEN = 'open';
	namespace.MARKUP_STATUS_CLOSED = 'closed';

	var MarkupApp = function() {
		this.markupObservers = [];

		// this will maintain all in-memory markups in an array.
		this.markupList = [];
		// This is to record the in-memory markup object being created
		// in current session of application.
		this.markupCounter = 0;

		// Make an instance of markup service implementation per markupApp.
		// And this will stay with markup app until it get GC collected.
		this.markupSopImpl = new namespace.ServiceOperatorImpl();
		this.serviceOp = new namespace.ServiceOperator();

		// Make the panel
		this.markupPanel = new namespace.MarkupPanel(this);
	}

	var proto = MarkupApp.prototype;

	proto.constructor = MarkupApp;

	/**
	 * Initialize Markup APP
	 * @param  {Viewer} viewer  the LMV viewer instance can either be a viewer2d or viewer3d
	 * @param  {Object} options
	 *         {
	 *         	documentUrn: the document URN for doing/viewing markups
	 *         	sheetGUID: the current sheet guid
	 *         	documentVersion: the current document version
	 *         	issueProject: the issue project to post/request markups
	 *         	collectionUrn: represents the collection for markups to be added to
	 *         	acmNamespace: this is the namespace for issue project
	 *         	userId: current user id
	 *         	userName: current user name
	 *         	isAdmin: true or false
	 *         	panelContainer: the container for markup panel
	 *         	getUserProfileCallback: this is a callback function to get users profile by given oxgen id
	 *         							and the signature should follow,
	 *         							function(oxgenId, function(userProfil) {} )
	 *         	closeConfirmCallback: this is a callback function to get confirmation when closing a markup,
	 *         						  the signature should follow,
	 *         						  function(oxgenId, function(closeOrNot) {})
	 *			features: {
	 *				select2d: true
	 *			} // without explicitly pass true, sub-features will be disabled by default.
	 *
	 *         	markupUIExt: the string value of markup UI extension,
	 						 by default on web client, it will use namespace.MARKUP_UI_EXT_NAME.
	 						 on mobile client, it can be substituted by a different UI.
	 *         	markupSop: the object of markup service operation implementation.
	 					   by default on web client, it is ServiceOperatorImpl (check this in markupservice.js)
	 					   on mobile client, it needs to be substitued by a mobile specific implementation.
	 *         }
	 */
	proto.initialize = function(viewer, options) {

		this._reset(viewer, options);

		// Initialize markup panel.
        if (options.panelContainer) {
            if (this.markupPanel.initialize(options.panelContainer)) {
                this.addObserver(this.markupPanel);
            }
        }

		// Add an internal observer for debugging.
		if (typeof _internalMarkupObserver === 'function') {
			this.addObserver(new _internalMarkupObserver());
		}

		if (!this.markupUI || !this.markupCore) {
			// Markup init failure.
			return null;
		}

		this._defineFilters();
		this.notify("Initialize");

		return this;
	};

	/**
	 * [terminate description]
	 * @return {[type]} [description]
	 */
	proto.terminate = function() {
		this.markupPanel.terminate();

		this.clear();

		this.markupUI = null;
		this.markupCore = null;

		this.markupObservers = [];
		this.viewer = null;
		this.markupCounter = 0;

		this.notify("Terminate");
	};

	/**
	 * [reset description]
	 * @param  {[type]} viewer  [description]
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	proto._reset = function(viewer, options) {

		this.clear();

		this.viewer = viewer;
		this.options = options || {};

		// Initialize markup core.
		// TODO: core now provide an option of by pass ortho camera,
		// but perspective camera doesn't work well on thumbnail capture,
		// will come back later.
		viewer.loadExtension(namespace.MARKUP_CORE_EXT_NAME, {markupBypassOrthoCam: false});
		this.markupCore = viewer.getExtension(namespace.MARKUP_CORE_EXT_NAME);

		// Initialize markup UI
		var markupExt = options.markupUIExt ? options.markupUIExt : namespace.MARKUP_UI_EXT_NAME;
		viewer.loadExtension(markupExt, {context: this});
		this.markupUI = viewer.getExtension(markupExt);

		// Initialize markup service operator with its implementation,
		// the implementation's life cycle is managed by client of markup app.
		// for web implementation, it is maintained just inside of markup app.
		var impl = options.markupSop ? options.markupSop : this.markupSopImpl;
		this.serviceOp.initialize(options, impl);

	};
	proto.reset = function(viewer, options) {
		this._reset(viewer, options);
		this.notify("Reset");
	}

	proto._handleError = function (type, originError) {
		// package the error to avoid return a undefined error
		var error = {
			type: type,
			originError: originError
		}
		return error;
	}

	proto.notify = function(event) {
		var args = [this];

        for (var i=1; i<arguments.length; ++i) {
            args.push(arguments[i]);
        }

        this.markupObservers.forEach(function(observer) {
            var method = "on" + event;
            try {
                if (method in observer) {
                    observer[method].apply(observer, args);
                }
            }
            catch (err) {
                Autodesk.BIM360.Util.stdOut("Observe Failed on " + event);
                Autodesk.BIM360.Util.stdOut('  error: ' + err.message);
                console.error('  stack:\n' + err.stack);
            }
        });
	}

	/**
	 * [clear this is to clear all markups either ongoing requeired or currently rendered]
	 */
	proto.clear = function() {

		// First terminate any pending requesting on markups.
		if (this.serviceOp)
			this.serviceOp.terminate();

		// Clear markups in core
		if (this.markupCore) {
			this.showAllMarkups(false);
			this.markupCore.clear();
		}

		// Clear markuplist
		this.markupList = [];
		this.selectedId = undefined;
		// Need to update the panel also.
		this.notify("MarkupUpdate", this.markupList);
	}

	proto.addObserver = function(ob) {
		this.markupObservers.push(ob);
	}

	proto.removeObserver = function(ob) {
        var idx = this.markupObservers.indexOf(ob);
        idx > -1 && this.markupObservers.splice(idx, 1);
	}

	proto._createEmptyMarkupAppObj = function(status) {
		var markupAppObj = {};
        markupAppObj['markupObj'] = null;
        markupAppObj['attachment'] = [];
        markupAppObj['status'] = status ? status : namespace.MARKUP_STATUS_CREATED;
        markupAppObj.id = this.markupCounter++;

        return markupAppObj;
	}

	proto._defineFilters = function() {

		// This is to define a dictionary of filters that are used for
		// filtering markups before displaying them either in list or viewer.
		this.filters = {
			sheetFilter: function(markupAppObj) {
				var metadata = markupAppObj.markupObj['markup_metadata'];
				if (!metadata) {
					return false;
				}

				if (this.options.sheetGUID &&
					metadata.sheetGUID) {
					// if options contains sheet guid, also the markup data
					// contains sheet guid then filter on that,
					// For old markup data that don't have sheet GUID,
					// do not apply filter.
					return this.options.sheetGUID == metadata.sheetGUID;
				}
				else {
					// Otherwise, no filter at all and return true.
					return true;
				}

			}.bind(this),

			versionFilter: function(markupAppObj) {
				var start_version = markupAppObj.markupObj['starting_version'];
				var close_version = markupAppObj.markupObj['close_version'];

				if (this.options.documentVersion) {
					// The markups have starting version and close version,
					// the requirement is to only display markups whose
					// starting/close version containers current version.
					if (close_version) {
						return this.options.documentVersion >= start_version &&
						   this.options.documentVersion <= close_version;
					}
					else {
						return this.options.documentVersion >= start_version;
					}
				}
				else {
					return true;
				}
			}

			// Add more when it is needed.
		};
	}

	proto.currentFilterType = function() {
		// TODO: add more filters and make it configurable.
		// Also can consider applying the filter to issue service and get filtered result directly.
		//
		// Only have version filter now.
		if (this.options.documentVersion) {
			return ["versionFilter"];
		}
		else {
			return [];
		}

	}

	proto.getFilter = function() {

		this._filterBinded = function(markupAppObj) {

			var self = this;

			var tp = self.currentFilterType();
			var filterFunc = [];
			tp.forEach(function(t) {

				if (self.filters[t]) {
					filterFunc.push(self.filters[t]);
				}

			});

			if (filterFunc.length == 0) {
				// no filter applied, then return true;
				return true;
			}
			else {
				return filterFunc.every(function(func) {
					return func.call(self, markupAppObj);
				});
			}

		}.bind(this);

		return this._filterBinded;
	}

	/**
	 * [getUserProfile This is to get user profiles by oxgen id used by markups.]
	 * @param  {[type]} markups [description]
	 * @return {[type]}         [description]
	 */
	proto.getUserProfile = function(markupAppObjs) {

		// No inputs.
		if (!markupAppObjs || markupAppObjs.length == 0)
			return;

		// get User profile needs client to provide the callback function.
		//
		if (!this.options.getUserProfileCallback) {
			return;
		}

		var callback = this.options.getUserProfileCallback;

		var self = this;
		try {
			markupAppObjs.forEach( function(markupAppObj) {
				var oxgenId = markupAppObj['markupObj']['created_by'];

				if (oxgenId && !markupAppObj['userName']) {

					callback(oxgenId, function(userInfo) {
						// Now only take user name out of the profile
						//
						if (userInfo && userInfo.name) {
							markupAppObj['userName'] = userInfo.name;
							self.notify("MarkupUpdate", markupAppObj);
						}

					});

				}
			});
		}
		catch (e) {
			self.notify("MarkupUpdate", null, self._handleError("MarkupUpdate", e));
		}

	}

	/**
	 * [requestMarkups request markup from the regestered service]
	 * @param  {[number]} pageLimit [the count for one page]
	 * @param  {[number]} offset    [offset to start request]
	 * @return {[Promise]}          [a list of markups]
	 */
	proto.requestMarkups = function(pageLimit, offset) {
		var self = this;
        return this.serviceOp.requestMarkups(pageLimit, offset).then(function(result) {

        	var markupData = result.value;
        	var nextReq = result.nextReq;

            var ml = [];
            var needUserProfile = [];

            // Save markups objects to application as a list.
            markupData.forEach(function(data) {

				var markup = data['attributes'];
            	// In case of some bad markup data, do a pre-process to filter
            	// out any objects that don't have markup_metadata。
            	if (!markup["markup_metadata"]) {
            		// No markup metadata, got a bad one.
            		return;
            	}

            	// Create in-memory markup app objects first.
            	var markupAppObj = self._createEmptyMarkupAppObj(namespace.MARKUP_STATUS_OPEN);
            	markupAppObj['markupObj'] = markup;
				markupAppObj['guid'] = data.id;
				if (markup['close_version'] > 0) {
					markupAppObj.status = namespace.MARKUP_STATUS_CLOSED;
				}

				var tags = markup['tags'];

            	// If the resources are embedded to markup object, then can retrieve it
				// right away.
            	var resourceEmbed = false;
            	if (tags) {
	            	resourceEmbed = namespace.isTrueValue(tags['resourceEmbed']);
            	}

            	var resources = markup['resource_urns'];
            	if (resources) {

	            	if (resources[namespace.MARKUP_RESOUCE_TYPE_SVG]) {
				        var markupSvgData = {
				            type: namespace.MARKUP_RESOUCE_TYPE_SVG,
				            data: null,
				            id: null,
				            ossPath: null
				        }

				        if (!resourceEmbed) {
				        	markupSvgData.ossPath = resources[namespace.MARKUP_RESOUCE_TYPE_SVG];
				        }
				        else {
				        	markupSvgData.data = resources[namespace.MARKUP_RESOUCE_TYPE_SVG];
				        }

			            markupAppObj['attachment'].push(markupSvgData);
	            	}

	            	if (resources[namespace.MARKUP_RESOUCE_TYPE_SCAPTURE]) {
			            var markupScreenCapture = {
				            type: namespace.MARKUP_RESOUCE_TYPE_SCAPTURE,
				            data: null,
				            id: null,
				            ossPath: null
				        };

				        if (!resourceEmbed) {
				        	markupScreenCapture.ossPath = resources[namespace.MARKUP_RESOUCE_TYPE_SCAPTURE];
				        }
				        else {
				        	markupScreenCapture.data = resources[namespace.MARKUP_RESOUCE_TYPE_SCAPTURE];
				        }

			            markupAppObj['attachment'].push(markupScreenCapture);
	            	}

            	}

            	// Request user names afterwards.
            	needUserProfile.push(markupAppObj);

            	ml.push(markupAppObj);
            });

            // Concat new markups object to the existing list.
            self.markupList = self.markupList.concat(ml);

            // Get user profile if needed.
            self.getUserProfile(needUserProfile);

            self.notify("RequestMarkups", ml);

            return Promise.resolve({markupAppObjs: ml, nextReq: nextReq});
        }).catch(function(e) {
        	// Request markups failed.
        	self.notify("RequestMarkups", null, self._handleError("RequestMarkups", e));
        });
	};

	// The implementation of closing a markup, this should be only called inside
	// of closeMarkup interface.
	proto._doCloseMarkup = function(markupAppObj) {
		var self = this;

		// the markup closed verison is current document version
		// set close version to the markup meta data directly, and
		// server will set close_at
		markupAppObj.markupObj.close_version = this.options.documentVersion;

		// This is going to notify that markup is closing.
		this.notify("CloseMarkup", markupAppObj);

        return this.serviceOp.closeMarkup(markupAppObj.guid, this.options.documentVersion)
        .then(function(markupObj) {

			markupAppObj.markupObj = markupObj;
			markupAppObj.status = namespace.MARKUP_STATUS_CLOSED;
			self.notify("CloseMarkup", markupAppObj);

			return Promise.resolve(markupAppObj);

		}).catch(function(e) {
			// Fail to close the markup, so reset close_version
			markupAppObj.markupObj.close_version = null;
			self.notify("CloseMarkup", markupAppObj, self._handleError("CloseMarkup", e));

		});
	};

	/**
	 * [canCloseMarkup check whether the given markup can be closed]
	 * @param  {[type]} markupAppObj
	 * @return {[type]}
	 */
	proto.canCloseMarkup = function(markupAppObj) {

		if (!this.options.userId) {
			// No userId, won't allow to close a markup at all.
			return false;
		}

		// Rule number 1, admin can close any markups.
		if (this.options.isAdmin) {
			return true;
		}

		// Rule number 2, creator can also close it
		if (this.options.userId === markupAppObj.markupObj.created_by) {
			return true;
		}

		return false;
	};

	/**
	 * [closeMarkup close a markup]
	 * @param  {[Object]} markupAppObj [the in-memory markup object]
	 * @return {[Promise]}
	 */
	proto.closeMarkup = function(markupAppObj) {

		if (!markupAppObj || this.options.documentVersion <= 0) {
			return Promise.resolve(null);
		}

		// If the markup already closed, return directly.
		if (markupAppObj.status == namespace.MARKUP_STATUS_CLOSED) {
			return Promise.resolve(markupAppObj);
		}

		var self = this;

		// If confirm needed
		if (this.options.closeConfirmCallback) {

			return new Promise(function(resolve, reject) {

				self.options.closeConfirmCallback(self.options.userId, function(confirm) {
					resolve(confirm);
				});

			})
			.then(function(confirm) {

				if (confirm === true) {
					return self._doCloseMarkup(markupAppObj)
				}
				else {
					return Promise.resolve(null);
				}

			});

		}
		else {
			return this._doCloseMarkup(markupAppObj);
		}

	}

	proto.getAttachment = function(markupAppObj) {
		if (!markupAppObj || !markupAppObj['attachment']) {
			return Promise.resolve();
		}

		// TODO: only get attachment if it is needed.
		// this need a refactor later.
		var ffunc = this.getFilter();
    	if (!ffunc.call(this, markupAppObj)) {
    		return;
    	}

		var self = this;
		var pa = markupAppObj['attachment'].map(function(attachmentObj) {

			var attachType = attachmentObj.type;

			// If data already there, then it is either a embed resource
			// or it is already downloaded.
			if (attachmentObj.data) {
				var result = {markup: markupAppObj, attachmentType: attachType};
	            self.notify("GetAttachment", result);

	            return Promise.resolve(result);
			}

			// The thumbnail is in base64 format so not a binary.
			var ossDataType = namespace.ATTACHMENT_DATA_TYPE_TEXT;
			var ossPath = attachmentObj.ossPath;
	        return self.serviceOp.getAttachment(ossPath, ossDataType).then(function(attachment) {

	        	attachmentObj['data'] = attachment;
	        	var result = {markup: markupAppObj, attachmentType: attachType};
	            self.notify("GetAttachment", result);

	            return Promise.resolve(result);
	        }).catch(function(e) {
	        	self.notify("GetAttachment", null, self._handleError("GetAttachment", e));
	        });

		});

		return Promise.all(pa);
	};

	// The internal show/hide implementation,
	// this is mainly to separate the UI calling on itself if
	// there is on markup ui subscribed.
	proto._show = function() {
		this.markupCore.show();

		if (this.markupUI && this.markupUI.markupTool) {
			this.markupUI.markupTool.engageViewMode(true);
		}
	};
	proto._hide = function() {
		this.markupCore.hide();

		if (this.markupUI && this.markupUI.markupTool) {
			this.markupUI.markupTool.engageViewMode(false);
		}
	};

	/**
	 * [showAllMarkups description]
	 * @param  {[type]} enabled [description]
	 * @return {[type]}         [description]
	 */
	proto.showAllMarkups = function(enabled) {
		if (!this.markupCore) {
			return false;
		}

		// Ok, let's add some constrains before show all markups
		// if already in view mode, then bail out earlier.
		//
		if ( enabled == this.markupCore.duringViewMode )
			return;

		if (enabled) {
			// This will also quit edit mode.
			this._show();

			var self = this;
			this.markupList.forEach(function(markup) {
				self.loadMarkup(markup);

				if (self.selectedId != undefined) {
					if (markup.id === self.selectedId){
						_setSelectedMarupStyle(self.markupCore, markup);
					}
					else {
						_setUnselectedMarupStyle(self.markupCore, markup);
					}
				}
			});

		}
		else {
			this._hide();
		}
	};

	/**
	 * [loadMarkup description]
	 * @param  {[type]} markup [description]
	 * @return {[type]}        [description]
	 */
    proto.loadMarkup = function(markup) {
    	// Apply filter right before trying to load it
    	var ffunc = this.getFilter();
    	if (!ffunc.call(this, markup)) {
    		return;
    	}

        var markupData = markup['attachment'];

        // The first attachment is the svg data.
        // check its availability before use it.
        if (markupData &&
        	markupData[0] &&
        	markupData[0].data) {

            this.markupCore.loadMarkups(markupData[0].data, namespace.MARKUP_LAYER_PRE + markup.id);

        }
    };

    proto.unloadMarkup = function(markup) {

    	this.markupCore.unloadMarkups(namespace.MARKUP_LAYER_PRE + markup.id);

    };

    proto.showMarkup = function(markup) {

    	this.markupCore.showMarkups(namespace.MARKUP_LAYER_PRE + markup.id);

    };

    proto.hideMarkup = function(markup) {

    	this.markupCore.hideMarkups(namespace.MARKUP_LAYER_PRE+markup.id);

    }

    proto.amendViewportIfNeeded = function(markupAppObj) {
    	var model = this.viewer.model;
    	var globalOffset =  model ? model.getData().globalOffset : null;
        var markupData = markupAppObj.markupObj.markup_metadata;

    	if (globalOffset) {
            if (!markupAppObj['amendedMarkupData']) {
                var clonedMarkupData = JSON.parse(JSON.stringify(markupData));

                var viewport = clonedMarkupData['viewport'];

                var invGlobalOffset = { x: -globalOffset.x, y: -globalOffset.y, z: -globalOffset.z };
                namespace.applyOffsetToCamera(viewport, invGlobalOffset);

                // We save the original viewport in case it is needed again.
                markupAppObj['amendedMarkupData'] = clonedMarkupData;
            }

            return markupAppObj['amendedMarkupData'];
    	}

        return markupData;
    }

	/**
	 * [restoreMarkupViewState description]
	 * @param  {[type]} markupAppObj [description]
	 * @return {[type]}              [description]
	 */
    proto.restoreMarkupViewState = function(markupAppObj) {
    	if (this.viewer && markupAppObj) {
    		var amendedData = this.amendViewportIfNeeded(markupAppObj);

    		markupAppObj.markupObj &&
    		this.viewer.restoreState(amendedData, null, true);
    	}
    }

	var _setMarkupAttribute = function(core, markup, attributeKey, attributeValue) {
		var svgLayerNode = core.svgLayersMap[namespace.MARKUP_LAYER_PRE + markup.id];
		svgLayerNode && svgLayerNode.setAttribute(attributeKey, attributeValue);
	}

	var _setUnselectedMarupStyle = function(core, markup) {
		_setMarkupAttribute(core, markup, "stroke-opacity", "0.1");
		_setMarkupAttribute(core, markup, "fill-opacity", "0.1");
	}

	var _setSelectedMarupStyle = function(core, markup) {
		_setMarkupAttribute(core, markup, "stroke-opacity", "1");
		_setMarkupAttribute(core, markup, "fill-opacity", "1");
	}

	/**
	 * [reload all markups]
	 * @return {[type]}             [description]
	 */
	proto.reloadAllMarkups = function() {
		var self = this;
		this.markupList.forEach(function(markup) {
			self.unloadMarkup(markup);
			self.loadMarkup(markup);
		});
	}

	/**
	 * [clear markup selection]
	 * @return {[type]}             [description]
	 */
	proto.clearMarkupSelection = function() {
		var id = this.selectedId;

		if (id !== undefined) {
			this.selectedId = undefined;
			this.notify("SelectionChanged", this.selectedId);

			// Only reload markups if currently is 2d mode, which
			// need to reset markup styles.
			if (this.viewer.model && this.viewer.model.is2d()) {
				this.reloadAllMarkups();
			}
		}
	}

	// A simple way of check sub-features supported by markupApp.
	proto.isFeatureEnabled = function(flag) {
		if (this.options.features) {
			return this.options.features[flag] === true;
		}
		return undefined;
	}

    proto.selectMarkupAndView = function(markupAppObj) {
    	if (!this.viewer || !markupAppObj) {
    		return;
    	}

		// Implementation for 2D
		this._selectMarkupOn2D = function() {

			// Use feature flag to determine whether need to support 2d markup selection
			if (!this.isFeatureEnabled("select2d")) {
				return;
			}

			var self = this;
			// If currently in edit mode, exit.
			if (this.markupCore.duringEditMode) {
				this.markupUI && this.markupUI.markupTool &&
				this.markupUI.markupTool.setVisible(false);
			}
			if (this.selectedId === markupAppObj.id) {
				// This is to deselect the selected markup,
				// and unload it.
				this.selectedId = undefined;
				this.reloadAllMarkups();
			}
			else {
				this.markupList.forEach(function(markup) {
					if (markup.id === markupAppObj.id){
						// This is to select the markup
						// First restore view state
						//
						// ??? Disable view restore for 2d model for now
						// ??? two reasons,
						// ??? 1. viewer will throw error on the 2d model without any layers.
						// ??? 2. the view is not right for leaflet viewer on mobile device.
						// ???
						// ??? Besides, the better behavior would be center the selected markup.
						// ???
						// self.restoreMarkupViewState(markup);
						_setSelectedMarupStyle(self.markupCore, markup);
					}
					else{
						_setUnselectedMarupStyle(self.markupCore, markup);
					}
				});
				this.selectedId = markupAppObj.id;
			}
		}

    	// Impelmentation for 3D
    	this._selectMarkupOn3D = function() {
    		// If currently in edit mode, exit.
    		if (this.markupCore.duringEditMode) {
    			this.markupUI && this.markupUI.markupTool &&
    			this.markupUI.markupTool.setVisible(false);
    		}

    		if (this.selectedId === markupAppObj.id) {
    			// This is to deselect the selected markup,
    			// and unload it.
    			this.selectedId = undefined;

    			this._hide();
    		}
    		else {

    			// This is to select the markup
	    		// First restore view state
	    		this.restoreMarkupViewState(markupAppObj);

	    		// Enter into view mode
	    		this._show()
    			this.markupCore.unloadMarkupsAllLayers();

	    		// Load only the given markup
	    		this.loadMarkup(markupAppObj);

	    		this.selectedId = markupAppObj.id;
    		}

    	}

    	// Now, we assume the markup is associated to current document,
    	// but in case later we want to support display the whole projects
    	// markups in one list, we need to identify whether this markup is
    	// on the document that is being viewed.
    	if (markupAppObj.markupObj.target_urn == this.options.documentUrn) {
    		// This means the markup is on this document.
    		var model = this.viewer.model;

    		if (model) {
    			model.is2d() ? this._selectMarkupOn2D() : this._selectMarkupOn3D();

    			// Then, should notify that selection changed that markup list
    			// can update its style.
    			// TODO: this will update the whole list, but react should know which one
    			// need to be re-rendered.
    			this.notify("SelectionChanged", this.selectedId);

    			return;
    		}
    	}
    	else {
    		// TODO: at this moment, if user is allowed to select a markup on
    		// a document which is not currently viewed, then we should
    		// swtich to the document first then load markups.
    		return;
    	}

    	Autodesk.BIM360.Util.stdOut("selectMarkupAndView failed: " + markupAppObj.id);
    }

	/**
	 * This will save markup already drawn.
	 * @return
	 */
	proto.saveMarkup = function() {
		if (this.markupCore.markups.length <= 0) {
			// nothing can be saved if no markups at all.
			return Promise.resolve([]);
		}

		// It may be still in markup text editing activity,
		// so need to end it before starting to save.
		if (this.markupCore.editMode &&
			this.markupCore.editMode.type == 2) {
			// This is going to accept and exit text editing mode,
			// and mark it as inactive.
			this.markupCore.editMode.notifyAllowNavigation(true);
		}

		// Save markup require generate screen capture and
		// generate svg data,

        // 1. generate an in-memory markup object, and pass in the user name as creator.
        var markupAppObj = this._createEmptyMarkupAppObj(namespace.MARKUP_STATUS_CREATED);
        markupAppObj['userName'] = this.options.userName;

    	// 2. Generate markup object
    	var markupObj = this.generateMarkupObj();
        markupAppObj['markupObj'] = markupObj;
        // 3. Get markup svg data
        var markupSvgData = {
            type: namespace.MARKUP_RESOUCE_TYPE_SVG,
            data: this.markupCore.generateData(),
            id: null,
            ossPath: null
        }
        markupAppObj['attachment'].push(markupSvgData);

        // Insert new created markup to the front.
        this.markupList.splice(0, 0, markupAppObj);

        // 4. Get markup screen capture
        // ??? for leaflet viewer, this will take time and it is an anyc operation.
        // ??? as it may request images from server again.
        // ???
        var p = this.generateScreenCapture(true);
        var self = this;
        return p.then(function(thumbnail) {

        	// Get thumbnail data
	        var markupScreenCapture = {
	            type: namespace.MARKUP_RESOUCE_TYPE_SCAPTURE,
	            data: thumbnail.imageData,
	            id: null,
	            ossPath: null
	        };
            markupAppObj['attachment'].push(markupScreenCapture);

            // Clear markups once its done.
        	self.markupCore && self.markupCore.clear();

        	// this is the time can send an event that
        	// one markup is generated.
        	self.notify("SaveMarkup", markupAppObj);

            // select the newly generated markup in 3D model and view
            // it in the canvas.
			if (self.viewer && self.viewer.model && !self.viewer.model.is2d()) {
				self.selectMarkupAndView(markupAppObj);
			}

        	// Post the markup to service.
        	return self.serviceOp.postMarkup(markupObj, markupAppObj['attachment']);

        }).then(function(data) {

        	// Post markup success, then
            // update the in-memory markupObj with returned value.
            markupAppObj['markupObj'] = data.attributes;
            markupAppObj['guid'] = data.id;
            markupAppObj['status'] = namespace.MARKUP_STATUS_SAVE_SUCCEED;
            self.notify("PostMarkup", markupAppObj);

            return Promise.resolve(markupAppObj);

        }).catch(function(e) {

        	// Post markup failed, then remove the svg data.
        	self.unloadMarkup(markupAppObj);
        	markupAppObj['attachment'][0] = null;
            markupAppObj['status'] = namespace.MARKUP_STATUS_SAVE_FAILED;

        	Autodesk.BIM360.Util.stdOut( JSON.stringify(e) );
        	self.notify("PostMarkup", markupAppObj, self._handleError("PostMarkup", e));

        });

	};

	/**
	 * [generateMarkupDesc description]
	 * @return {[type]} [description]
	 */
	proto.generateMarkupDesc = function() {
        var description = [];

        this.markupCore.markups.forEach(function(markup) {
            if (markup.type == 2) {
            	//'2' is markupText
                description.push(markup.currentText);
            }
        });

        return description.join('.\n');
	}

	/**
	 * [generateMarkupObj description]
	 * @return {[type]} [description]
	 */
	proto.generateMarkupObj = function() {
		var markupObj = {};

		markupObj['target_urn'] = this.options.documentUrn;
		markupObj['starting_version'] = this.options.documentVersion;
		markupObj['resource_urns'] = {};

		markupObj['markup_metadata'] = this.generateMarkupMetadata();
		markupObj['description'] = this.generateMarkupDesc();
		// Place holder for tags if any...
		markupObj['tags'] = {};

		// Add colleciton urn in if specified.
		if (this.options.collectionUrn) {
			markupObj['collection_urn'] = this.options.collectionUrn;
		}

		// Add user name as a tag to markup object,
		// it is a tricky way of quickly getting user's display name
		// when retrieving from server.
		if (this.options.userName) {
			markupObj['tags']['userName'] = this.options.userName;
		}

		return markupObj;
	}

	/**
	 * [generateMarkupMetadata description]
	 * @return {[type]} [description]
	 */
	proto.generateMarkupMetadata = function() {

        var VIEWER_STATE_FILTER_GET = {
            seedURN: true,
            objectSet: true,
            viewport: true,
            renderOptions: false,
            cutplanes: true
        };

		var state = JSON.parse(JSON.stringify(this.viewer.getState()));
		var model = this.viewer.model;
        var globalOffset = model ? model.getData().globalOffset : null;
        if (globalOffset) {
            namespace.applyOffsetToCamera(state.viewport, globalOffset);
        }

        state.sheetGUID = this.options['sheetGUID'];


        return state;
	}

	/**
	 * generate screen capture
	 * @param  {[type]} inclMarkups [description]
	 * @param  {[type]} inclMarkers [description]
	 * @return {[type]}             [description]
	 */
	proto.generateScreenCapture = function(inclMarkups, inclMarkers) {
		var self = this;
        return new Promise(function(resolve, reject){

			namespace.ScreenCapture(self.viewer,
				inclMarkers ? null : null, // no markers support so far
				inclMarkups ? self.markupCore : null,
				true, // capture thumbnail base on markups bound.
				function(base64String, imageWidth, imageHeight) {
	                var result = {
	                    imageData: base64String,
	                    imageWidth: imageWidth,
	                    imageHeight: imageHeight
	                };
	                resolve(result);
	            }
	        );

        });
	}

	/////////////////////////////////////////////////////
	/**
	 * [_onViewerToolClick the callback injected into each toolbar button]
	 */
	proto._onViewerToolClick = function() {
		if (!this.viewer.model) {
			return;
		}

		// This is only needed for 3D model
		if (!this.viewer.model.is2d()) {

			if (this.markupCore.duringViewMode) {
				this._hide();

				if (this.selectedId !== undefined) {
					this.selectedId = undefined;
					this.notify("SelectionChanged", this.selectedId);
				}

			}
		}

	}

	/**
	 * [addViewerChangeEventListeners
	 * 		this is to inject event listeners for toolbar buttons,
	 *   	so can exit markup viewing mode when any toolbar buttons clicked.
	 *
	 *
	 *   	TODO: this methods are copied from A360 for quick hack,
	 *   		  as watching tool changed event doesn't work as expect,
	 *   	   	  so have to force inject.
	 *   	   	  But one different is that we exit viewing mode on click
	 *   	   	  any nav or model tool, including pan and zoom.
	 *   	   	  Because the original functions from A360 will cause problem
	 *   	   	  if click pan or zoom twice.
	 *
	 * ]
	 */
	proto.addViewerChangeEventListeners = function(){
		var viewer = this.viewer;
		if(viewer && viewer.toolbar) {
			if (!this._onViewerToolClickBinded) {
				this._onViewerToolClickBinded = this._onViewerToolClick.bind(this);
			}

			var self = this;
	        viewer.toolbar._controls.forEach(function(controlGroup){
	        	if (!controlGroup) {
	        		return;
	        	}

        	  	if(controlGroup._id === "modelTools"){
                    controlGroup._controls.forEach(function(control){
                        if(control.subMenu){
                            control.subMenu._controls.forEach(function(subMenuCtrl){
                                subMenuCtrl.addEventListener('click', self._onViewerToolClickBinded);
                            });
                            control.addEventListener('click', self._onViewerToolClickBinded);
                        }else {
                            control.addEventListener('click', self._onViewerToolClickBinded);
                        }
                    });
                }
                else if(controlGroup._id === "navTools"){
	            	controlGroup._controls.forEach(function(control){

	                    if(control.subMenu){
	                        control.subMenu._controls.forEach(function(subMenuCtrl){
	                            subMenuCtrl.addEventListener('click', self._onViewerToolClickBinded);
	                        });
	                        control.addEventListener('click', self._onViewerToolClickBinded);
	                    }
	                    else {
	                        control.addEventListener('click', self._onViewerToolClickBinded);
	                    }

	                });
	            }
	        });
		}

    };

    /**
     * [removeViewerChangeEventListeners
     * 		remove those event listeners being added to toolbar button
     * 		TODO: if toolbar buttons get removed before calling this function
     * 			  those events listener won't get removed explicitly.
     * 		   	  but luckily, as long as those button won't get referenced
     * 		      the JS GC will clean those event listeners also.
     * ]
     */
    proto.removeViewerChangeEventListeners = function(){
    	var viewer = this.viewer;
        if(viewer && viewer.toolbar){
        	var self = this;
            viewer.toolbar._controls.forEach(function(controlGroup){
                if (!controlGroup) {
                	return;
                }
                if(controlGroup._id === "modelTools"){
                	 controlGroup._controls.forEach(function(control){
                        if(control.subMenu){
                            control.subMenu._controls.forEach(function(subMenuCtrl){
                                subMenuCtrl.removeEventListener('click', self._onViewerToolClickBinded);
                            });
                            control.removeEventListener('click', self._onViewerToolClickBinded);
                        }else {
                            control.removeEventListener('click', self._onViewerToolClickBinded);
                        }
                    });
                }
                else if(controlGroup._id === "navTools"){
                    controlGroup._controls.forEach(function(control){

                        if(control.subMenu) {
                            control.subMenu._controls.forEach(function(subMenuCtrl) {
                                subMenuCtrl.removeEventListener('click', self._onViewerToolClickBinded);
                            });
                            control.removeEventListener('click', self._onViewerToolClickBinded);
                        }
                        else {
                            control.removeEventListener('click', self._onViewerToolClickBinded);
                        }
                    });
                }
            });
            this._onViewerToolClickBinded = null;
        };

    };
	/////////////////////////////////////////////////////

	namespace.MarkupApp = MarkupApp;

	/*******************************************************************/
	// For debugging purpose, customized consol output if not defined in
	// Autodesk bim360 util yet.
	var util = AutodeskNamespace('Autodesk.BIM360.Util');
	util.ENABLE_DEBUG = util.ENABLE_DEBUG !== undefined ? util.ENABLE_DEBUG : false;
	util.stdOut = util.stdOut || function() {
        if (util.ENABLE_DEBUG) {
            console.log.apply(console, arguments);
        }
	};

	function _internalMarkupObserver() {

		this.onInitialize = function(app) {
			util.stdOut("Markup APP initialized.");
		};

		this.onTerminate = function(app) {
			util.stdOut("Markup APP terminated.");
		};

		this.onReset = function(app) {
			util.stdOut("Markup APP reset.");
		};

		this.onSaveMarkup = function(app, markupAppObj, error) {
			if (markupAppObj) {
				util.stdOut("Markup is created: ");
				util.stdOut(markupAppObj);
			}
			else {
				util.stdOut("Markup failed to create: " + JSON.stringify(error));
			}
		};

		this.onPostMarkup = function(app, markupAppObj, error) {
			if (markupAppObj) {
				util.stdOut("Markup is posted: ");
				util.stdOut(markupAppObj);
			}
			else {
				util.stdOut("Markup failed to post: " + JSON.stringify(error));
			}
		};

		this.onRequestMarkups = function(app, markupAppObjList, error) {
			if (markupAppObjList) {
				util.stdOut("Markup is requested: ");
				util.stdOut(markupAppObjList);
			}
			else {
				util.stdOut("Markup failed to request: " + JSON.stringify(error));
			}
		}

		this.onGetAttachment = function(app, markupAndAttachType, error) {
			if (markupAndAttachType) {
				util.stdOut("Markup get attachment: ");
				util.stdOut(markupAndAttachType.attachmentType);
				util.stdOut(markupAndAttachType.markup);
			}
			else {
				util.stdOut("Markup failed to get attachment: " + JSON.stringify(error));
			}
		};

		this.onSelectionChanged = function(app, selectedId) {
			util.stdOut("Markup selected: " + selectedId);
		}
	}
})();
;
(function() {
    /**
     * Image Capture Utils from comments.js
     */

    // IMPORTANT: Screen Capture can only be perform "one-at-a-time" //

    var CAPTURE_STATE_NONE = 0,
        CAPTURE_STATE_START = 1,
        CAPTURE_STATE_LMV = 2,
        CAPTURE_STATE_MARKERS = 3,
        CAPTURE_STATE_ANNOTATIONS = 4,
        CAPTURE_STATE_DONE = 5;


    var mCanvas, mContext,      // Our own canvas used to generate the Image Capture PNG
        mViewer,
        mMarkersExt, mMarkupCoreExt,     // References to LMV instance and ViewerAnnotations extension
        mViewerScreenshot,      // Helper Image instance
        mCaptureState = CAPTURE_STATE_NONE,
        mCaptureMarkupOnly,     // apture screen shot base on markup bounding box, the shape of output image will always be square.
        mUserCallback;          // User provided function to notify when Captured Image is ready for consumption.

    // Define namespace.
    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');

    function extendBoundingBox(box1, box2) {
        if(box2.min.x < box1.min.x) {
            box1.min.x = box2.min.x;
        }
        if (box2.max.x > box1.max.x) {
            box1.max.x = box2.max.x
        }

        if(box2.min.y < box1.min.y) {
            box1.min.y = box2.min.y;
        }
        if(box2.max.y > box1.max.y) {
            box1.max.y = box2.max.y;
        }
        return box1;
    }

    /**
     * Compute screen capture area
     *
     */
    namespace.ComputeScreenCaptureArea = function(viewer, markupCoreExt) {
        var markups = markupCoreExt.markups;
        if(markups.length === 0) {
            return;
        }

        var markupsBox = null, tmpBox = null;
        markups.forEach( function(markup){
            var tmpMin = {}, tmpMax = {};
            var tmpClientSize = {}, tmpPos = {};
            tmpPos = markup.getClientPosition();
            tmpClientSize = markup.getClientSize();
            tmpMin.x = tmpPos.x - tmpClientSize.x/2;
            tmpMin.y = tmpPos.y - tmpClientSize.y/2;
            tmpMax.x = tmpPos.x + tmpClientSize.x/2;
            tmpMax.y = tmpPos.y + tmpClientSize.y/2;
            if (!markupsBox) {
                markupsBox = {};
                markupsBox.min = tmpMin;
                markupsBox.max = tmpMax;
            }
            else {
                tmpBox = {}
                tmpBox.min = tmpMin;
                tmpBox.max = tmpMax;
                markupsBox = extendBoundingBox(markupsBox, tmpBox);
            }
        });

        var clientSize = {};
        clientSize.x = markupsBox.max.x - markupsBox.min.x;
        clientSize.y = markupsBox.max.y - markupsBox.min.y;

        var clientPos = {};
        clientPos.x = (markupsBox.max.x + markupsBox.min.x)/2;
        clientPos.y = (markupsBox.max.y + markupsBox.min.y)/2;

        // zoom in client area with 40%
        clientSize.x = clientSize.x * 1.4;
        clientSize.y = clientSize.y * 1.4;

        var size = {};
        var min = {};
        //
        if(clientSize.x > clientSize.y) {
            size.x = clientSize.x;
            size.y = clientSize.x;
        }
        else {
            size.x = clientSize.y;
            size.y = clientSize.y;
        }
        // thumbnail size should not smaller than 100px
        if(size.x < 100) {
            size.x = 100;
            size.y = 100;
        }
        // if client area larger than canvas area,
        // set client area as canvas area.
        if(size.x > viewer.container.clientWidth && size.y > viewer.container.clientHeight) {
            size.x = viewer.container.clientWidth;
            size.y = viewer.container.clientHeight;
            min.x = 0;
            min.y = 0;
            return {min: min, size:size}
        }
        else if(size.x > viewer.container.clientWidth) {
            size.x = viewer.container.clientWidth;
            if (clientSize.x > clientSize.y) {
                size.y = size.x;
            }
        }
        else if(size.y > viewer.container.clientHeight) {
            size.y = viewer.container.clientHeight;
            if (clientSize.y > clientSize.x) {
                size.x = size.y;
            }
        }

        // if markup on the edge of the screen
        // move min point to suitable position.
        min.x = clientPos.x - size.x/2;
        min.y = clientPos.y - size.y/2;
        if(min.x < 0)
            min.x = 0;
        if(min.y < 0)
            min.y = 0;

        var max = {};
        max.x = clientPos.x + size.x/2;
        max.y = clientPos.y + size.y/2;
        if (max.x > viewer.container.clientWidth) {
            var det = max.x - viewer.container.clientWidth;
            min.x -= det;
        }

        if (max.y > viewer.container.clientHeight) {
            var det = max.y - viewer.container.clientHeight;
            min.y -= det;
        }
        return {min: min, size:size}
    }

    /**
     * Captures an image of the viewer and all markups over it.
     *
     * @param {Object} viewer - LMV viewer instance
     * @param {Object} markersExt - Markers Extension. Can be null to not include markers graphics.
     * @param {Object} markupCoreExt - Markup Core Extension. Can be null to not include markup graphics.
     * @param {boolean} captureMarkupOnly - Capture screen shot base on markup bounding box, the shape of output image will always be square.
     * @param {Function} callback - Has the screenCapture base64 encoded image string as its parameter.
     */
    namespace.ScreenCapture = function(viewer, markersExt, markupCoreExt, captureMarkupOnly, callback) {

        if (!viewer || mCaptureState !== CAPTURE_STATE_NONE) {
            callback();
            return;
        }

        mViewer = viewer;
        mMarkersExt = markersExt;
        mMarkupCoreExt = markupCoreExt;
        mUserCallback = callback;
        mCaptureMarkupOnly = captureMarkupOnly;

        mCaptureState = CAPTURE_STATE_START;
        mCanvas = document.createElement("canvas");
        mContext = mCanvas.getContext('2d');

        var viewerBounds = viewer.container.getBoundingClientRect();
        mCanvas.width = (viewerBounds.right - viewerBounds.left);
        mCanvas.height = (viewerBounds.bottom - viewerBounds.top);

        mViewerScreenshot = new Image();
        mViewerScreenshot.onload = onCheckNextCaptureState;
        var self = this;

        viewer.getScreenShot(0, 0, function(blobUrl) {
            mViewerScreenshot.src = blobUrl;
        });
    };

    namespace.applyOffsetToCamera = function(viewport, offset) {

        if(!viewport || !offset) {
            return;
        }

        if ('eye' in viewport) {
            viewport['eye'][0] =  (Number(viewport['eye'][0]) + offset.x).toString();
            viewport['eye'][1] =  (Number(viewport['eye'][1]) + offset.y).toString();
            viewport['eye'][2] =  (Number(viewport['eye'][2]) + offset.z).toString();
        }

        if ('target' in viewport) {
            viewport['target'][0] = (Number(viewport['target'][0]) + offset.x).toString();
            viewport['target'][1] = (Number(viewport['target'][1]) + offset.y).toString();
            viewport['target'][2] = (Number(viewport['target'][2]) + offset.z).toString();
        }

        if ('pivotPoint' in viewport) {
            viewport['pivotPoint'][0] =  (Number(viewport['pivotPoint'][0]) + offset.x).toString();
            viewport['pivotPoint'][1] =  (Number(viewport['pivotPoint'][1]) + offset.y).toString();
            viewport['pivotPoint'][2] =  (Number(viewport['pivotPoint'][2]) + offset.z).toString();
        }
    };

    //////////////////////
    // Helper functions //
    //////////////////////

    function onCheckNextCaptureState() {
        mCaptureState++;
        switch (mCaptureState) {

            case CAPTURE_STATE_LMV:
                captureStateLmv();
                break;

            case CAPTURE_STATE_MARKERS:
                captureStateMarkers();
                break;

            case CAPTURE_STATE_ANNOTATIONS:
                captureStateAnnotations();
                break;

            case CAPTURE_STATE_DONE:
                finalizeProcess();
                break;
        }
    }

    function clearCaptureProcess() {
        mCaptureState = CAPTURE_STATE_NONE;
        mViewer = mCanvas = mContext = null;
        mUserCallback = null;
    }

    function finalizeProcess() {
        var callback = mUserCallback;
        var output = mCanvas.toDataURL("image/png");

        // get markups area in screen.
        if (mCaptureMarkupOnly)
            var bound = namespace.ComputeScreenCaptureArea(mViewer, mMarkupCoreExt);

        // if captureMarkupOnly isn't true,
        // or cannot get the markup area, capture the whole screen area.
        if (!mCaptureMarkupOnly || !bound) {
            var outputW = mCanvas.width;
            var outputH = mCanvas.height;
            // Notify caller
            clearCaptureProcess();
            callback(output, outputW, outputH);
            return;
        }

        var min = bound.min;
        var size = bound.size;

        // Crop image base on markups's bound.
        var tmpCanvas = document.createElement("canvas");
        var ctx = tmpCanvas.getContext('2d');
        tmpCanvas.width = size.x;
        tmpCanvas.height = size.y;
        var img = new Image();
        img.src = output;
        // draw image on canvas
        img.onload = function() {
            ctx.drawImage(img, min.x, min.y, size.x, size.y, 0, 0, size.x, size.y);
            var output = tmpCanvas.toDataURL("image/png");
            // Notify caller
            clearCaptureProcess();
            callback(output, size.x, size.y);
        };
    }

    function captureStateLmv() {
        mContext.drawImage(mViewerScreenshot, 0, 0, mCanvas.width, mCanvas.height);
        onCheckNextCaptureState();
    }

    function captureStateMarkers() {
        if (mMarkersExt) {
            drawMarkersCanvas(onCheckNextCaptureState);
        } else {
            onCheckNextCaptureState();
        }
    }

    function captureStateAnnotations() {

        if (mMarkupCoreExt) {
            drawMarkupsToCanvas(onCheckNextCaptureState);
        } else {
            onCheckNextCaptureState();
        }
    }

    function drawMarkersCanvas(onStepComplete) {
        var drawCanvasImage = function (event) {
            var loadedImg = event.target;
            mContext.drawImage(loadedImg, 0, 0);

            onStepComplete && onStepComplete();
        };
        var source = new Image();
        source.onload = drawCanvasImage;
        source.src = mMarkersExt.markerLines.toDataURL("image/png");
    }

    function drawMarkupsToCanvas(onStepComplete) {

        // Get all the annotations.
        mMarkupCoreExt.renderToCanvas(mContext);
        onStepComplete();
    }

    namespace.formateDateTime = function(date_time) {
        if (!date_time) {
            return '';
        }

        var theDateMoment = new moment(date_time);
        var today = new Date();

        function isToday() {
           return theDateMoment.isSame(today, 'day');
        };

        function isYesterday() {
            var yesterday = new Date();
            yesterday.setDate(today.getDate() - 1);
            return theDateMoment.isSame(yesterday, 'day');
        };

        function isWithinTheWeek() {
            var withinAWeek = new Date();
            withinAWeek.setDate(today.getDate() - 7);

            return theDateMoment.isAfter(withinAWeek) || // the date is after one week ago, or
                   (theDateMoment.isSame(withinAWeek, 'year') &&  // same year,
                    theDateMoment.isSame(withinAWeek, 'month') && // same month,
                    theDateMoment.isBetween(withinAWeek, today, 'day')); // and the day is between the day before 7 days and today.
        }

        function isSameYear() {
            return theDateMoment.isSame(today, 'year');
        }

        if (isToday()) {              // 'Today 08:01 am'
           return Autodesk.Viewing.i18n.translate("Today") + ' ' + theDateMoment.format('hh:mm a');
        }
        else if (isYesterday()) {     // 'Yesterday 08:01 am'
            return Autodesk.Viewing.i18n.translate("Yesterday") + ' ' + theDateMoment.format('hh:mm a');
        }
        else if (isWithinTheWeek()) { // 'Mon Jun.01 08:01 am'
            return theDateMoment.format('ddd hh:mm a');
        }
        else if (isSameYear()) {      // 'Jun.01 08:01 am'
            return theDateMoment.format('MMM.DD hh:mm a');
        }
        else {                         // 'Jun.01 2014'
            return theDateMoment.format('MMM.DD YYYY');

        }
    };

    namespace.isTrueValue = function(value) {
        return value === "true" || value === true || value === 1
    };
// End closure
})();
;
(function(){

    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');

    namespace.MARKUP_MOBILE_EXT_NAME = 'Autodesk.BIM360.MobileMarkupsUI';
    namespace.MARKUP_CORE_EXT_NAME = 'Autodesk.Viewing.MarkupsCore';


    var Button = Autodesk.Viewing.UI.Button,
        ACTIVE = Button.State.ACTIVE,
        INACTIVE = Button.State.INACTIVE,
        DISABLED = Button.State.DISABLED;

    var StateButton = function() {
        var state = INACTIVE;
        this.setState = function(s) {
            state = s;
        };

        this.getState = function() {
            return state;
        }
    }




    function MobileMarkupsUi(viewer, options) {
        Autodesk.Viewing.Extension.call(this, viewer, options);
    }

    MobileMarkupsUi.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
    MobileMarkupsUi.prototype.constructor = MobileMarkupsUi;
    var proto = MobileMarkupsUi.prototype;

    proto.loadMarkupCoreExtension = function () {
        var coreExt = this.viewer.getExtension(namespace.MARKUP_CORE_EXT_NAME);
        if (coreExt) {
            this.markupsCore = coreExt;
            return true;
        }
        console.warn("Failed to load extension: " + namespace.MARKUP_CORE_EXT_NAME);
        return false;
    };

    proto.load = function () {
        this.markupApp = this.options.context;
        var extensionLoaded = this.loadMarkupCoreExtension();
        if (extensionLoaded) this.createUI();
        return extensionLoaded;
    };

    proto.unload = function() {
        this.markupsCore = null;
        return true;
    };

    proto.createUI = function () {
        var self = this;
        var viewer = this.viewer;

        this.onViewerResize = function(e) {

            // ??? The problem here is that for lmv viewer,
            // ??? when viewer get resized, the camera won't get updated yet
            // ??? which cause markup svg view box calculation wrong.
            // ??? So have to explicitly notify camera being changed.
            if (this.viewer &&
                this.viewer.impl instanceof Autodesk.Viewing.Private.Viewer3DImpl) {
                this.viewer.impl.syncCamera();
            }

            this.markupsCore && this.markupsCore.onViewerResizeBinded(e);
        }.bind(this);
        this.viewer.addEventListener(Autodesk.Viewing.VIEWER_RESIZE_EVENT, this.onViewerResize);
        this.addMarkupVisButton();
        return true;
    };

    proto.destroyUI = function() {
        this.markupApp = null;
        // ??? temp fix the resize issue here.
        viewer.removeEventListener(Autodesk.Viewing.VIEWER_RESIZE_EVENT, this.onViewerResize);
    }

    proto.updateMarkupVisButton = function(state) {
        if (this.markupVisBtn) {
            this.markupVisBtn.setState(state);
            this.markupApp.showAllMarkups(state == ACTIVE);
        }
    }

    proto.addMarkupVisButton = function() {
        // Add an observer
        this.markupVisBtn = new StateButton();
        this.markupVisBtnOb = new _mobileMarkupVisBtnObserver(this);
        this.options.context.addObserver(this.markupVisBtnOb);
        // Then set initial state
        if (this.markupApp && this.markupApp.markupList.length == 0) {
            this.updateMarkupVisButton(DISABLED);
        }
        else {
            this.updateMarkupVisButton(ACTIVE);
        }
    }


    proto.switchEditMode = function(type) {
    };

    // A markup observer to update markup vis button state
    var _mobileMarkupVisBtnObserver = function(markupExt) {

        this.onSaveMarkup = function(app, markupAppObj, error) {
            // As long as any markup is created, then switch to display markups.
            if (markupAppObj) {
                // TODO get markup button status from native
                // if (markupExt.markupVisBtn.getState() == ACTIVE)
                //     app.loadMarkup(markupAppObj);

                // if (markupExt.markupVisBtn.getState() == DISABLED)
                //     markupExt.updateMarkupVisButton(ACTIVE);
            }
        };

        this.onRequestMarkups = function(app, markupAppObjList, error) {
            if (markupAppObjList &&
                markupAppObjList.length > 0) {
                    markupAppObjList.forEach(function(markupAppObj) {
                        var markup = markupAppObj['markupObj'];

                        // only try to load attchment if it is not already embedded into
                        // markup object
                        // filter svg attachment
                        if (markup['tags'] && !namespace.isTrueValue(markup['tags']['resourceEmbed'])) {
                            markupAppObj['attachment'] = markupAppObj['attachment'].filter(function(attachmentObj) {
                                return attachmentObj.type === namespace.MARKUP_RESOUCE_TYPE_SVG
                            })
                        }
                        app.getAttachment(markupAppObj);

                    }.bind(this));
                // At this moment, a bunch of markups have been requested.
                // Then, start view markups mode.
                // TODO call native to update satus
                if(!app.options.is3D) {
                    markupExt.updateMarkupVisButton(ACTIVE);
                }
            }
        };

        this.onGetAttachment = function(app, markupAndAttachType, error) {
            if (markupAndAttachType &&
                markupAndAttachType.attachmentType === namespace.MARKUP_RESOUCE_TYPE_SVG) {
                // Then load this markup, in theory this will incrementally display
                // markups retrieved from service.
                if(!app.options.is3D)
                {
                    app.loadMarkup(markupAndAttachType.markup);
                    this.sendMessage(app, 'onLoadedMarkup', markupAndAttachType.markup.guid)
                }
            }
        };

        this.onSelectionChanged = function(app, selectedId) {
            // This fix ALEX-4922, force set the flag to ture when display 3D markup
            // TODO: a360 team have fixed in core. Maybe need to remove after integration.

            if (selectedId) {
                if (app.options.is3D) {
                    app.viewer.navigation.setIs2D(true);
                }
            }
            else {
                if (app.options.is3D) {
                    app.viewer.navigation.setIs2D(false);
                }
            }
            // notify native client
            var markup = null;
            var guid = null;
            for(var i = 0; i < app.markupList.length; i++ ) {
                item = app.markupList[i];
                if(item.id === selectedId){
                    markup = item;
                    break;
                }
            }

            if (markup) {
                guid = markup.guid
            }
            var data = {'selected' : markup !== null,  'guid': guid}
            this.sendMessage(app, 'onSelectedMarkup', JSON.stringify(data))
        };

        this.sendMessage = function(app, messageName, data) {
            if(app.options.bridge) {
                app.options.bridge.callHandler(messageName, data, null);
            }
        };
    }

    Autodesk.Viewing.theExtensionManager.registerExtension(namespace.MARKUP_MOBILE_EXT_NAME, MobileMarkupsUi);
    namespace.MobileMarkupsUi = MobileMarkupsUi;

})();;
(function() {
    'use strict';

    var namespace = AutodeskNamespace('Autodesk.BIM360.Markups');

    var ServiceOperatorMobileImpl = function() {

        // ??? mobile implement, only send request to native(object c code).
        this.setUp = function(options) {
            this.service = new namespace.MarkupService(options);
            this.embedResourceIfNeeded = options.embedResourceIfNeeded;
            this.bridge = options.bridge;
        }

        this.tearDown = function() {
            // Cancel all pending xhr as it is no longer needed.
            this.service.cancelAllGet();
        }

        this.getMaxPageLimit = function() {
            return this.service.maxPageLimit;
        }

        this._sendRequestMarkups = function(pageLimit, offset){
            return new Promise(function(resolve, reject) {
                this.bridge.callHandler('requestMarkups',
                    {'page_limit':pageLimit, 'offset':offset},
                    function(markups) {
                        resolve(markups);
                    });
            }.bind(this));
        }

        this.requestMarkups = function(pageLimit, offset) {
            // This only returns the markups metadata and not include attachemnt.
            // Attachments for these markups need to request separately.
            return this._sendRequestMarkups(pageLimit, offset).then(function(result) {
                // Parse the results, may consider to use a JSON API client toolkit ?

                try {
                    var issueObj = JSON.parse(result);
                    var markupObjs = issueObj['data'];
                    markupObjs = markupObjs.map(function(d) {
                        return d;
                    });

                    return Promise.resolve({value: markupObjs, nextReq: null});
                }
                catch (e) {
                    return Promise.reject(e);
                }

                }, function() {
                    // Fail to request markups.
                    return Promise.reject();

            });
        }

        this._sendRequestAttachment = function(ossPathUrn, isBinaryData) {
            var requestParameter = {'pathUrn':ossPathUrn, 'isBinaryData':isBinaryData}
            return new Promise(function(resolve, reject) {
                this.bridge.callHandler('requestAttachment',
                    JSON.stringify(requestParameter),
                    function(attachment) {
                        if(attachment.length > 10){
                            resolve(attachment);
                        }
                    });
            }.bind(this));
        }

        this.getAttachment = function(ossPathUrn, ossDataType) {
            // OSS data type is to determine whether the attachment is binary or not.
            var isBinaryData = (ossDataType === namespace.ATTACHMENT_DATA_TYPE_BINARY);

            return this._sendRequestAttachment(ossPathUrn, isBinaryData).then(function(result) {
                return Promise.resolve(result);
            });
        }

        this.postMarkup = function(markupObj, markupAttachmentList) {
            // Post markup steps,
            // TODO post markup to native, native will post to server

        };

    }

    namespace.ServiceOperatorMobileImpl = ServiceOperatorMobileImpl;
})();
