/*

  OpenLayers.js -- OpenLayers Map Viewer Library

  Copyright 2005-2010 OpenLayers Contributors, released under the Clear BSD
  license. Please see http://svn.openlayers.org/trunk/openlayers/license.txt
  for the full text of the license.

  Includes compressed code under the following licenses:

  (For uncompressed versions of the code used please see the
  OpenLayers SVN repository: <http://openlayers.org/>)

*/

/* Contains portions of Prototype.js:
 *
 * Prototype JavaScript framework, version 1.4.0
 *  (c) 2005 Sam Stephenson <sam@conio.net>
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://prototype.conio.net/
 *
 *--------------------------------------------------------------------------*/

/**  
*  
*  Contains portions of Rico <http://openrico.org/>
* 
*  Copyright 2005 Sabre Airline Solutions  
*  
*  Licensed under the Apache License, Version 2.0 (the "License"); you
*  may not use this file except in compliance with the License. You
*  may obtain a copy of the License at
*  
*         http://www.apache.org/licenses/LICENSE-2.0  
*  
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
*  implied. See the License for the specific language governing
*  permissions and limitations under the License. 
*
**/

/**
 * Contains XMLHttpRequest.js <http://code.google.com/p/xmlhttprequest/>
 * Copyright 2007 Sergey Ilinsky (http://www.ilinsky.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * Contains portions of Gears <http://code.google.com/apis/gears/>
 *
 * Copyright 2007, Google Inc.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice,
 *     this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *  3. Neither the name of Google Inc. nor the names of its contributors may be
 *     used to endorse or promote products derived from this software without
 *     specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Sets up google.gears.*, which is *the only* supported way to access Gears.
 *
 * Circumvent this file at your own risk!
 *
 * In the future, Gears may automatically define google.gears.* without this
 * file. Gears may use these objects to transparently fix bugs and compatibility
 * issues. Applications that use the code below will continue to work seamlessly
 * when that happens.
 */

/**
 * OpenLayers.Util.pagePosition is based on Yahoo's getXY method, which is
 * Copyright (c) 2006, Yahoo! Inc.
 * All rights reserved.
 * 
 * Redistribution and use of this software in source and binary forms, with or
 * without modification, are permitted provided that the following conditions
 * are met:
 * 
 * * Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 * 
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 * 
 * * Neither the name of Yahoo! Inc. nor the names of its contributors may be
 *   used to endorse or promote products derived from this software without
 *   specific prior written permission of Yahoo! Inc.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */var OpenLayers={VERSION_NUMBER:"$Revision: 10862 $",singleFile:true,_getScriptLocation:(function(){var r=new RegExp("(^|(.*?\\/))(OpenLayers\.js)(\\?|$)"),s=document.getElementsByTagName('script'),src,m,l="";for(var i=0,len=s.length;i<len;i++){src=s[i].getAttribute('src');if(src){var m=src.match(r);if(m){l=m[1];break;}}}
return(function(){return l;});})()};(function(){var singleFile=(typeof OpenLayers=="object"&&OpenLayers.singleFile);var scriptName=(!singleFile)?"lib/OpenLayers.js":"OpenLayers.js";window.OpenLayers={_getScriptLocation:(function(){var r=new RegExp("(^|(.*?\\/))("+scriptName+")(\\?|$)"),s=document.getElementsByTagName('script'),src,m,l="";for(var i=0,len=s.length;i<len;i++){src=s[i].getAttribute('src');if(src){var m=src.match(r);if(m){l=m[1];break;}}}
return(function(){return l;});})()};if(!singleFile){var jsfiles=new Array("OpenLayers/Util.js","OpenLayers/BaseTypes.js","OpenLayers/BaseTypes/Class.js","OpenLayers/BaseTypes/Bounds.js","OpenLayers/BaseTypes/Element.js","OpenLayers/BaseTypes/LonLat.js","OpenLayers/BaseTypes/Pixel.js","OpenLayers/BaseTypes/Size.js","OpenLayers/Console.js","OpenLayers/Tween.js","Rico/Corner.js","Rico/Color.js","OpenLayers/Ajax.js","OpenLayers/Events.js","OpenLayers/Request.js","OpenLayers/Request/XMLHttpRequest.js","OpenLayers/Projection.js","OpenLayers/Map.js","OpenLayers/Layer.js","OpenLayers/Icon.js","OpenLayers/Marker.js","OpenLayers/Marker/Box.js","OpenLayers/Popup.js","OpenLayers/Tile.js","OpenLayers/Tile/Image.js","OpenLayers/Tile/Image/IFrame.js","OpenLayers/Tile/WFS.js","OpenLayers/Layer/Image.js","OpenLayers/Layer/SphericalMercator.js","OpenLayers/Layer/EventPane.js","OpenLayers/Layer/FixedZoomLevels.js","OpenLayers/Layer/Google.js","OpenLayers/Layer/Google/v3.js","OpenLayers/Layer/VirtualEarth.js","OpenLayers/Layer/Yahoo.js","OpenLayers/Layer/HTTPRequest.js","OpenLayers/Layer/Grid.js","OpenLayers/Layer/MapGuide.js","OpenLayers/Layer/MapServer.js","OpenLayers/Layer/MapServer/Untiled.js","OpenLayers/Layer/KaMap.js","OpenLayers/Layer/KaMapCache.js","OpenLayers/Layer/MultiMap.js","OpenLayers/Layer/Markers.js","OpenLayers/Layer/Text.js","OpenLayers/Layer/WorldWind.js","OpenLayers/Layer/ArcGIS93Rest.js","OpenLayers/Layer/WMS.js","OpenLayers/Layer/WMS/Untiled.js","OpenLayers/Layer/WMS/Post.js","OpenLayers/Layer/WMTS.js","OpenLayers/Layer/ArcIMS.js","OpenLayers/Layer/GeoRSS.js","OpenLayers/Layer/Boxes.js","OpenLayers/Layer/XYZ.js","OpenLayers/Layer/TMS.js","OpenLayers/Layer/TileCache.js","OpenLayers/Layer/Zoomify.js","OpenLayers/Popup/Anchored.js","OpenLayers/Popup/AnchoredBubble.js","OpenLayers/Popup/Framed.js","OpenLayers/Popup/FramedCloud.js","OpenLayers/Feature.js","OpenLayers/Feature/Vector.js","OpenLayers/Feature/WFS.js","OpenLayers/Handler.js","OpenLayers/Handler/Click.js","OpenLayers/Handler/Hover.js","OpenLayers/Handler/Point.js","OpenLayers/Handler/Path.js","OpenLayers/Handler/Polygon.js","OpenLayers/Handler/Feature.js","OpenLayers/Handler/Drag.js","OpenLayers/Handler/RegularPolygon.js","OpenLayers/Handler/Box.js","OpenLayers/Handler/MouseWheel.js","OpenLayers/Handler/Keyboard.js","OpenLayers/Control.js","OpenLayers/Control/Attribution.js","OpenLayers/Control/Button.js","OpenLayers/Control/ZoomBox.js","OpenLayers/Control/ZoomToMaxExtent.js","OpenLayers/Control/DragPan.js","OpenLayers/Control/Navigation.js","OpenLayers/Control/MouseDefaults.js","OpenLayers/Control/MousePosition.js","OpenLayers/Control/OverviewMap.js","OpenLayers/Control/KeyboardDefaults.js","OpenLayers/Control/PanZoom.js","OpenLayers/Control/PanZoomBar.js","OpenLayers/Control/ArgParser.js","OpenLayers/Control/Permalink.js","OpenLayers/Control/Scale.js","OpenLayers/Control/ScaleLine.js","OpenLayers/Control/Snapping.js","OpenLayers/Control/Split.js","OpenLayers/Control/LayerSwitcher.js","OpenLayers/Control/DrawFeature.js","OpenLayers/Control/DragFeature.js","OpenLayers/Control/ModifyFeature.js","OpenLayers/Control/Panel.js","OpenLayers/Control/SelectFeature.js","OpenLayers/Control/NavigationHistory.js","OpenLayers/Control/Measure.js","OpenLayers/Control/WMSGetFeatureInfo.js","OpenLayers/Control/WMTSGetFeatureInfo.js","OpenLayers/Control/Graticule.js","OpenLayers/Control/TransformFeature.js","OpenLayers/Control/SLDSelect.js","OpenLayers/Geometry.js","OpenLayers/Geometry/Rectangle.js","OpenLayers/Geometry/Collection.js","OpenLayers/Geometry/Point.js","OpenLayers/Geometry/MultiPoint.js","OpenLayers/Geometry/Curve.js","OpenLayers/Geometry/LineString.js","OpenLayers/Geometry/LinearRing.js","OpenLayers/Geometry/Polygon.js","OpenLayers/Geometry/MultiLineString.js","OpenLayers/Geometry/MultiPolygon.js","OpenLayers/Geometry/Surface.js","OpenLayers/Renderer.js","OpenLayers/Renderer/Elements.js","OpenLayers/Renderer/SVG.js","OpenLayers/Renderer/Canvas.js","OpenLayers/Renderer/VML.js","OpenLayers/Layer/Vector.js","OpenLayers/Layer/Vector/RootContainer.js","OpenLayers/Strategy.js","OpenLayers/Strategy/Filter.js","OpenLayers/Strategy/Fixed.js","OpenLayers/Strategy/Cluster.js","OpenLayers/Strategy/Paging.js","OpenLayers/Strategy/BBOX.js","OpenLayers/Strategy/Save.js","OpenLayers/Strategy/Refresh.js","OpenLayers/Filter.js","OpenLayers/Filter/FeatureId.js","OpenLayers/Filter/Logical.js","OpenLayers/Filter/Comparison.js","OpenLayers/Filter/Spatial.js","OpenLayers/Protocol.js","OpenLayers/Protocol/HTTP.js","OpenLayers/Protocol/SQL.js","OpenLayers/Protocol/SQL/Gears.js","OpenLayers/Protocol/WFS.js","OpenLayers/Protocol/WFS/v1.js","OpenLayers/Protocol/WFS/v1_0_0.js","OpenLayers/Protocol/WFS/v1_1_0.js","OpenLayers/Protocol/SOS.js","OpenLayers/Protocol/SOS/v1_0_0.js","OpenLayers/Layer/PointTrack.js","OpenLayers/Layer/GML.js","OpenLayers/Style.js","OpenLayers/Style2.js","OpenLayers/StyleMap.js","OpenLayers/Rule.js","OpenLayers/Format.js","OpenLayers/Format/XML.js","OpenLayers/Format/Context.js","OpenLayers/Format/ArcXML.js","OpenLayers/Format/ArcXML/Features.js","OpenLayers/Format/GML.js","OpenLayers/Format/GML/Base.js","OpenLayers/Format/GML/v2.js","OpenLayers/Format/GML/v3.js","OpenLayers/Format/Atom.js","OpenLayers/Format/KML.js","OpenLayers/Format/GeoRSS.js","OpenLayers/Format/WFS.js","OpenLayers/Format/WFSCapabilities.js","OpenLayers/Format/WFSCapabilities/v1.js","OpenLayers/Format/WFSCapabilities/v1_0_0.js","OpenLayers/Format/WFSCapabilities/v1_1_0.js","OpenLayers/Format/WFSDescribeFeatureType.js","OpenLayers/Format/WMSDescribeLayer.js","OpenLayers/Format/WMSDescribeLayer/v1_1.js","OpenLayers/Format/WKT.js","OpenLayers/Format/OSM.js","OpenLayers/Format/GPX.js","OpenLayers/Format/Filter.js","OpenLayers/Format/Filter/v1.js","OpenLayers/Format/Filter/v1_0_0.js","OpenLayers/Format/Filter/v1_1_0.js","OpenLayers/Format/SLD.js","OpenLayers/Format/SLD/v1.js","OpenLayers/Format/SLD/v1_0_0.js","OpenLayers/Format/OWSCommon/v1.js","OpenLayers/Format/OWSCommon/v1_0_0.js","OpenLayers/Format/OWSCommon/v1_1_0.js","OpenLayers/Format/CSWGetDomain.js","OpenLayers/Format/CSWGetDomain/v2_0_2.js","OpenLayers/Format/CSWGetRecords.js","OpenLayers/Format/CSWGetRecords/v2_0_2.js","OpenLayers/Format/WFST.js","OpenLayers/Format/WFST/v1.js","OpenLayers/Format/WFST/v1_0_0.js","OpenLayers/Format/WFST/v1_1_0.js","OpenLayers/Format/Text.js","OpenLayers/Format/JSON.js","OpenLayers/Format/GeoJSON.js","OpenLayers/Format/WMC.js","OpenLayers/Format/WMC/v1.js","OpenLayers/Format/WMC/v1_0_0.js","OpenLayers/Format/WMC/v1_1_0.js","OpenLayers/Format/WMSCapabilities.js","OpenLayers/Format/WMSCapabilities/v1.js","OpenLayers/Format/WMSCapabilities/v1_1.js","OpenLayers/Format/WMSCapabilities/v1_1_0.js","OpenLayers/Format/WMSCapabilities/v1_1_1.js","OpenLayers/Format/WMSCapabilities/v1_3.js","OpenLayers/Format/WMSCapabilities/v1_3_0.js","OpenLayers/Format/WMSGetFeatureInfo.js","OpenLayers/Format/SOSCapabilities.js","OpenLayers/Format/SOSCapabilities/v1_0_0.js","OpenLayers/Format/SOSGetObservation.js","OpenLayers/Format/SOSGetFeatureOfInterest.js","OpenLayers/Format/OWSContext.js","OpenLayers/Format/OWSContext/v0_3_1.js","OpenLayers/Format/WMTSCapabilities.js","OpenLayers/Format/WMTSCapabilities/v1_0_0.js","OpenLayers/Layer/WFS.js","OpenLayers/Control/GetFeature.js","OpenLayers/Control/MouseToolbar.js","OpenLayers/Control/NavToolbar.js","OpenLayers/Control/PanPanel.js","OpenLayers/Control/Pan.js","OpenLayers/Control/ZoomIn.js","OpenLayers/Control/ZoomOut.js","OpenLayers/Control/ZoomPanel.js","OpenLayers/Control/EditingToolbar.js","OpenLayers/Symbolizer.js","OpenLayers/Symbolizer/Point.js","OpenLayers/Symbolizer/Line.js","OpenLayers/Symbolizer/Polygon.js","OpenLayers/Symbolizer/Text.js","OpenLayers/Symbolizer/Raster.js","OpenLayers/Lang.js","OpenLayers/Lang/en.js");var agent=navigator.userAgent;var docWrite=(agent.match("MSIE")||agent.match("Safari"));if(docWrite){var allScriptTags=new Array(jsfiles.length);}
var host=OpenLayers._getScriptLocation()+"lib/";for(var i=0,len=jsfiles.length;i<len;i++){if(docWrite){allScriptTags[i]="<script src='"+host+jsfiles[i]+"'></script>";}else{var s=document.createElement("script");s.src=host+jsfiles[i];var h=document.getElementsByTagName("head").length?document.getElementsByTagName("head")[0]:document.body;h.appendChild(s);}}
if(docWrite){document.write(allScriptTags.join(""));}}})();OpenLayers.VERSION_NUMBER="$Revision: 10862 $";OpenLayers.String={startsWith:function(str,sub){return(str.indexOf(sub)==0);},contains:function(str,sub){return(str.indexOf(sub)!=-1);},trim:function(str){return str.replace(/^\s\s*/,'').replace(/\s\s*$/,'');},camelize:function(str){var oStringList=str.split('-');var camelizedString=oStringList[0];for(var i=1,len=oStringList.length;i<len;i++){var s=oStringList[i];camelizedString+=s.charAt(0).toUpperCase()+s.substring(1);}
return camelizedString;},format:function(template,context,args){if(!context){context=window;}
var replacer=function(str,match){var replacement;var subs=match.split(/\.+/);for(var i=0;i<subs.length;i++){if(i==0){replacement=context;}
replacement=replacement[subs[i]];}
if(typeof replacement=="function"){replacement=args?replacement.apply(null,args):replacement();}
if(typeof replacement=='undefined'){return'undefined';}else{return replacement;}};return template.replace(OpenLayers.String.tokenRegEx,replacer);},tokenRegEx:/\$\{([\w.]+?)\}/g,numberRegEx:/^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,isNumeric:function(value){return OpenLayers.String.numberRegEx.test(value);},numericIf:function(value){return OpenLayers.String.isNumeric(value)?parseFloat(value):value;}};if(!String.prototype.startsWith){String.prototype.startsWith=function(sStart){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.startsWith'}));return OpenLayers.String.startsWith(this,sStart);};}
if(!String.prototype.contains){String.prototype.contains=function(str){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.contains'}));return OpenLayers.String.contains(this,str);};}
if(!String.prototype.trim){String.prototype.trim=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.trim'}));return OpenLayers.String.trim(this);};}
if(!String.prototype.camelize){String.prototype.camelize=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.camelize'}));return OpenLayers.String.camelize(this);};}
OpenLayers.Number={decimalSeparator:".",thousandsSeparator:",",limitSigDigs:function(num,sig){var fig=0;if(sig>0){fig=parseFloat(num.toPrecision(sig));}
return fig;},format:function(num,dec,tsep,dsep){dec=(typeof dec!="undefined")?dec:0;tsep=(typeof tsep!="undefined")?tsep:OpenLayers.Number.thousandsSeparator;dsep=(typeof dsep!="undefined")?dsep:OpenLayers.Number.decimalSeparator;if(dec!=null){num=parseFloat(num.toFixed(dec));}
var parts=num.toString().split(".");if(parts.length==1&&dec==null){dec=0;}
var integer=parts[0];if(tsep){var thousands=/(-?[0-9]+)([0-9]{3})/;while(thousands.test(integer)){integer=integer.replace(thousands,"$1"+tsep+"$2");}}
var str;if(dec==0){str=integer;}else{var rem=parts.length>1?parts[1]:"0";if(dec!=null){rem=rem+new Array(dec-rem.length+1).join("0");}
str=integer+dsep+rem;}
return str;}};if(!Number.prototype.limitSigDigs){Number.prototype.limitSigDigs=function(sig){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Number.limitSigDigs'}));return OpenLayers.Number.limitSigDigs(this,sig);};}
OpenLayers.Function={bind:function(func,object){var args=Array.prototype.slice.apply(arguments,[2]);return function(){var newArgs=args.concat(Array.prototype.slice.apply(arguments,[0]));return func.apply(object,newArgs);};},bindAsEventListener:function(func,object){return function(event){return func.call(object,event||window.event);};},False:function(){return false;},True:function(){return true;}};if(!Function.prototype.bind){Function.prototype.bind=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Function.bind'}));Array.prototype.unshift.apply(arguments,[this]);return OpenLayers.Function.bind.apply(null,arguments);};}
if(!Function.prototype.bindAsEventListener){Function.prototype.bindAsEventListener=function(object){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Function.bindAsEventListener'}));return OpenLayers.Function.bindAsEventListener(this,object);};}
OpenLayers.Array={filter:function(array,callback,caller){var selected=[];if(Array.prototype.filter){selected=array.filter(callback,caller);}else{var len=array.length;if(typeof callback!="function"){throw new TypeError();}
for(var i=0;i<len;i++){if(i in array){var val=array[i];if(callback.call(caller,val,i,array)){selected.push(val);}}}}
return selected;}};OpenLayers.Date={toISOString:(function(){if("toISOString"in Date.prototype){return function(date){return date.toISOString();};}else{function pad(num,len){var str=num+"";while(str.length<len){str="0"+str;}
return str;}
return function(date){var str;if(isNaN(date.getTime())){str="Invalid Date";}else{str=date.getUTCFullYear()+"-"+
pad(date.getUTCMonth()+1,2)+"-"+
pad(date.getUTCDate(),2)+"T"+
pad(date.getUTCHours(),2)+":"+
pad(date.getUTCMinutes(),2)+":"+
pad(date.getUTCSeconds(),2)+"."+
pad(date.getUTCMilliseconds(),3)+"Z";}
return str;};}})(),parse:function(str){var date;var elapsed=Date.parse(str);if(!isNaN(elapsed)){date=new Date(elapsed);}else{var match=str.match(/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{1,2}):(\d{2}):(\d{2}(?:\.\d+)?)(Z|(?:[+-]\d{1,2}(?::(\d{2}))?)))?$/);if(match&&(match[1]||match[7])){var year=parseInt(match[1],10)||0;var month=(parseInt(match[2],10)-1)||0;var day=parseInt(match[3],10)||1;date=new Date(Date.UTC(year,month,day));var type=match[7];if(type){var hours=parseInt(match[4],10);var minutes=parseInt(match[5],10);var secFrac=parseFloat(match[6]);var seconds=secFrac|0;var milliseconds=Math.round(1000*(secFrac-seconds));date.setUTCHours(hours,minutes,seconds,milliseconds);if(type!=="Z"){var hoursOffset=parseInt(type,10);var minutesOffset=parseInt(match[8])||0;var offset=-1000*(60*(hoursOffset*60)+minutesOffset*60);date=new Date(date.getTime()+offset);}}}else{date=new Date("invalid");}}
return date;}};OpenLayers.Class=function(){var len=arguments.length;var P=arguments[0];var F=arguments[len-1];var C=typeof F.initialize=="function"?F.initialize:function(){P.apply(this,arguments);};if(len>1){var newArgs=[C,P].concat(Array.prototype.slice.call(arguments).slice(1,len-1),F);OpenLayers.inherit.apply(null,newArgs);}else{C.prototype=F;}
return C;};OpenLayers.Class.isPrototype=function(){};OpenLayers.Class.create=function(){return function(){if(arguments&&arguments[0]!=OpenLayers.Class.isPrototype){this.initialize.apply(this,arguments);}};};OpenLayers.Class.inherit=function(P){var C=function(){P.call(this);};var newArgs=[C].concat(Array.prototype.slice.call(arguments));OpenLayers.inherit.apply(null,newArgs);return C.prototype;};OpenLayers.inherit=function(C,P){var F=function(){};F.prototype=P.prototype;C.prototype=new F;var i,l,o;for(i=2,l=arguments.length;i<l;i++){o=arguments[i];if(typeof o==="function"){o=o.prototype;}
OpenLayers.Util.extend(C.prototype,o);}};OpenLayers.Util={};OpenLayers.Util.getElement=function(){var elements=[];for(var i=0,len=arguments.length;i<len;i++){var element=arguments[i];if(typeof element=='string'){element=document.getElementById(element);}
if(arguments.length==1){return element;}
elements.push(element);}
return elements;};OpenLayers.Util.isElement=function(o){return!!(o&&o.nodeType===1);};if(typeof window.$==="undefined"){window.$=OpenLayers.Util.getElement;}
OpenLayers.Util.extend=function(destination,source){destination=destination||{};if(source){for(var property in source){var value=source[property];if(value!==undefined){destination[property]=value;}}
var sourceIsEvt=typeof window.Event=="function"&&source instanceof window.Event;if(!sourceIsEvt&&source.hasOwnProperty&&source.hasOwnProperty('toString')){destination.toString=source.toString;}}
return destination;};OpenLayers.Util.removeItem=function(array,item){for(var i=array.length-1;i>=0;i--){if(array[i]==item){array.splice(i,1);}}
return array;};OpenLayers.Util.clearArray=function(array){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'array = []'}));array.length=0;};OpenLayers.Util.indexOf=function(array,obj){if(typeof array.indexOf=="function"){return array.indexOf(obj);}else{for(var i=0,len=array.length;i<len;i++){if(array[i]==obj){return i;}}
return-1;}};OpenLayers.Util.modifyDOMElement=function(element,id,px,sz,position,border,overflow,opacity){if(id){element.id=id;}
if(px){element.style.left=px.x+"px";element.style.top=px.y+"px";}
if(sz){element.style.width=sz.w+"px";element.style.height=sz.h+"px";}
if(position){element.style.position=position;}
if(border){element.style.border=border;}
if(overflow){element.style.overflow=overflow;}
if(parseFloat(opacity)>=0.0&&parseFloat(opacity)<1.0){element.style.filter='alpha(opacity='+(opacity*100)+')';element.style.opacity=opacity;}else if(parseFloat(opacity)==1.0){element.style.filter='';element.style.opacity='';}};OpenLayers.Util.createDiv=function(id,px,sz,imgURL,position,border,overflow,opacity){var dom=document.createElement('div');if(imgURL){dom.style.backgroundImage='url('+imgURL+')';}
if(!id){id=OpenLayers.Util.createUniqueID("OpenLayersDiv");}
if(!position){position="absolute";}
OpenLayers.Util.modifyDOMElement(dom,id,px,sz,position,border,overflow,opacity);return dom;};OpenLayers.Util.createImage=function(id,px,sz,imgURL,position,border,opacity,delayDisplay){var image=document.createElement("img");if(!id){id=OpenLayers.Util.createUniqueID("OpenLayersDiv");}
if(!position){position="relative";}
OpenLayers.Util.modifyDOMElement(image,id,px,sz,position,border,null,opacity);if(delayDisplay){image.style.display="none";OpenLayers.Event.observe(image,"load",OpenLayers.Function.bind(OpenLayers.Util.onImageLoad,image));OpenLayers.Event.observe(image,"error",OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError,image));}
image.style.alt=id;image.galleryImg="no";if(imgURL){image.src=imgURL;}
return image;};OpenLayers.Util.setOpacity=function(element,opacity){OpenLayers.Util.modifyDOMElement(element,null,null,null,null,null,null,opacity);};OpenLayers.Util.onImageLoad=function(){if(!this.viewRequestID||(this.map&&this.viewRequestID==this.map.viewRequestID)){this.style.display="";}
OpenLayers.Element.removeClass(this,"olImageLoadError");};OpenLayers.IMAGE_RELOAD_ATTEMPTS=0;OpenLayers.Util.onImageLoadError=function(){this._attempts=(this._attempts)?(this._attempts+1):1;if(this._attempts<=OpenLayers.IMAGE_RELOAD_ATTEMPTS){var urls=this.urls;if(urls&&urls instanceof Array&&urls.length>1){var src=this.src.toString();var current_url,k;for(k=0;current_url=urls[k];k++){if(src.indexOf(current_url)!=-1){break;}}
var guess=Math.floor(urls.length*Math.random());var new_url=urls[guess];k=0;while(new_url==current_url&&k++<4){guess=Math.floor(urls.length*Math.random());new_url=urls[guess];}
this.src=src.replace(current_url,new_url);}else{this.src=this.src;}}else{OpenLayers.Element.addClass(this,"olImageLoadError");}
this.style.display="";};OpenLayers.Util.alphaHackNeeded=null;OpenLayers.Util.alphaHack=function(){if(OpenLayers.Util.alphaHackNeeded==null){var arVersion=navigator.appVersion.split("MSIE");var version=parseFloat(arVersion[1]);var filter=false;try{filter=!!(document.body.filters);}catch(e){}
OpenLayers.Util.alphaHackNeeded=(filter&&(version>=5.5)&&(version<7));}
return OpenLayers.Util.alphaHackNeeded;};OpenLayers.Util.modifyAlphaImageDiv=function(div,id,px,sz,imgURL,position,border,sizing,opacity){OpenLayers.Util.modifyDOMElement(div,id,px,sz,position,null,null,opacity);var img=div.childNodes[0];if(imgURL){img.src=imgURL;}
OpenLayers.Util.modifyDOMElement(img,div.id+"_innerImage",null,sz,"relative",border);if(OpenLayers.Util.alphaHack()){if(div.style.display!="none"){div.style.display="inline-block";}
if(sizing==null){sizing="scale";}
div.style.filter="progid:DXImageTransform.Microsoft"+".AlphaImageLoader(src='"+img.src+"', "+"sizingMethod='"+sizing+"')";if(parseFloat(div.style.opacity)>=0.0&&parseFloat(div.style.opacity)<1.0){div.style.filter+=" alpha(opacity="+div.style.opacity*100+")";}
img.style.filter="alpha(opacity=0)";}};OpenLayers.Util.createAlphaImageDiv=function(id,px,sz,imgURL,position,border,sizing,opacity,delayDisplay){var div=OpenLayers.Util.createDiv();var img=OpenLayers.Util.createImage(null,null,null,null,null,null,null,false);div.appendChild(img);if(delayDisplay){img.style.display="none";OpenLayers.Event.observe(img,"load",OpenLayers.Function.bind(OpenLayers.Util.onImageLoad,div));OpenLayers.Event.observe(img,"error",OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError,div));}
OpenLayers.Util.modifyAlphaImageDiv(div,id,px,sz,imgURL,position,border,sizing,opacity);return div;};OpenLayers.Util.upperCaseObject=function(object){var uObject={};for(var key in object){uObject[key.toUpperCase()]=object[key];}
return uObject;};OpenLayers.Util.applyDefaults=function(to,from){to=to||{};var fromIsEvt=typeof window.Event=="function"&&from instanceof window.Event;for(var key in from){if(to[key]===undefined||(!fromIsEvt&&from.hasOwnProperty&&from.hasOwnProperty(key)&&!to.hasOwnProperty(key))){to[key]=from[key];}}
if(!fromIsEvt&&from&&from.hasOwnProperty&&from.hasOwnProperty('toString')&&!to.hasOwnProperty('toString')){to.toString=from.toString;}
return to;};OpenLayers.Util.getParameterString=function(params){var paramsArray=[];for(var key in params){var value=params[key];if((value!=null)&&(typeof value!='function')){var encodedValue;if(typeof value=='object'&&value.constructor==Array){var encodedItemArray=[];var item;for(var itemIndex=0,len=value.length;itemIndex<len;itemIndex++){item=value[itemIndex];encodedItemArray.push(encodeURIComponent((item===null||item===undefined)?"":item));}
encodedValue=encodedItemArray.join(",");}
else{encodedValue=encodeURIComponent(value);}
paramsArray.push(encodeURIComponent(key)+"="+encodedValue);}}
return paramsArray.join("&");};OpenLayers.Util.urlAppend=function(url,paramStr){var newUrl=url;if(paramStr){var parts=(url+" ").split(/[?&]/);newUrl+=(parts.pop()===" "?paramStr:parts.length?"&"+paramStr:"?"+paramStr);}
return newUrl;};OpenLayers.ImgPath='';OpenLayers.Util.getImagesLocation=function(){return OpenLayers.ImgPath||(OpenLayers._getScriptLocation()+"img/");};OpenLayers.Util.Try=function(){var returnValue=null;for(var i=0,len=arguments.length;i<len;i++){var lambda=arguments[i];try{returnValue=lambda();break;}catch(e){}}
return returnValue;};OpenLayers.Util.getNodes=function(p,tagName){var nodes=OpenLayers.Util.Try(function(){return OpenLayers.Util._getNodes(p.documentElement.childNodes,tagName);},function(){return OpenLayers.Util._getNodes(p.childNodes,tagName);});return nodes;};OpenLayers.Util._getNodes=function(nodes,tagName){var retArray=[];for(var i=0,len=nodes.length;i<len;i++){if(nodes[i].nodeName==tagName){retArray.push(nodes[i]);}}
return retArray;};OpenLayers.Util.getTagText=function(parent,item,index){var result=OpenLayers.Util.getNodes(parent,item);if(result&&(result.length>0))
{if(!index){index=0;}
if(result[index].childNodes.length>1){return result.childNodes[1].nodeValue;}
else if(result[index].childNodes.length==1){return result[index].firstChild.nodeValue;}}else{return"";}};OpenLayers.Util.getXmlNodeValue=function(node){var val=null;OpenLayers.Util.Try(function(){val=node.text;if(!val){val=node.textContent;}
if(!val){val=node.firstChild.nodeValue;}},function(){val=node.textContent;});return val;};OpenLayers.Util.mouseLeft=function(evt,div){var target=(evt.relatedTarget)?evt.relatedTarget:evt.toElement;while(target!=div&&target!=null){target=target.parentNode;}
return(target!=div);};OpenLayers.Util.DEFAULT_PRECISION=14;OpenLayers.Util.toFloat=function(number,precision){if(precision==null){precision=OpenLayers.Util.DEFAULT_PRECISION;}
var number;if(precision==0){number=parseFloat(number);}else{number=parseFloat(parseFloat(number).toPrecision(precision));}
return number;};OpenLayers.Util.rad=function(x){return x*Math.PI/180;};OpenLayers.Util.deg=function(x){return x*180/Math.PI;};OpenLayers.Util.VincentyConstants={a:6378137,b:6356752.3142,f:1/298.257223563};OpenLayers.Util.distVincenty=function(p1,p2){var ct=OpenLayers.Util.VincentyConstants;var a=ct.a,b=ct.b,f=ct.f;var L=OpenLayers.Util.rad(p2.lon-p1.lon);var U1=Math.atan((1-f)*Math.tan(OpenLayers.Util.rad(p1.lat)));var U2=Math.atan((1-f)*Math.tan(OpenLayers.Util.rad(p2.lat)));var sinU1=Math.sin(U1),cosU1=Math.cos(U1);var sinU2=Math.sin(U2),cosU2=Math.cos(U2);var lambda=L,lambdaP=2*Math.PI;var iterLimit=20;while(Math.abs(lambda-lambdaP)>1e-12&&--iterLimit>0){var sinLambda=Math.sin(lambda),cosLambda=Math.cos(lambda);var sinSigma=Math.sqrt((cosU2*sinLambda)*(cosU2*sinLambda)+
(cosU1*sinU2-sinU1*cosU2*cosLambda)*(cosU1*sinU2-sinU1*cosU2*cosLambda));if(sinSigma==0){return 0;}
var cosSigma=sinU1*sinU2+cosU1*cosU2*cosLambda;var sigma=Math.atan2(sinSigma,cosSigma);var alpha=Math.asin(cosU1*cosU2*sinLambda/sinSigma);var cosSqAlpha=Math.cos(alpha)*Math.cos(alpha);var cos2SigmaM=cosSigma-2*sinU1*sinU2/cosSqAlpha;var C=f/16*cosSqAlpha*(4+f*(4-3*cosSqAlpha));lambdaP=lambda;lambda=L+(1-C)*f*Math.sin(alpha)*(sigma+C*sinSigma*(cos2SigmaM+C*cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)));}
if(iterLimit==0){return NaN;}
var uSq=cosSqAlpha*(a*a-b*b)/(b*b);var A=1+uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));var B=uSq/1024*(256+uSq*(-128+uSq*(74-47*uSq)));var deltaSigma=B*sinSigma*(cos2SigmaM+B/4*(cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)-
B/6*cos2SigmaM*(-3+4*sinSigma*sinSigma)*(-3+4*cos2SigmaM*cos2SigmaM)));var s=b*A*(sigma-deltaSigma);var d=s.toFixed(3)/1000;return d;};OpenLayers.Util.destinationVincenty=function(lonlat,brng,dist){var u=OpenLayers.Util;var ct=u.VincentyConstants;var a=ct.a,b=ct.b,f=ct.f;var lon1=lonlat.lon;var lat1=lonlat.lat;var s=dist;var alpha1=u.rad(brng);var sinAlpha1=Math.sin(alpha1);var cosAlpha1=Math.cos(alpha1);var tanU1=(1-f)*Math.tan(u.rad(lat1));var cosU1=1/Math.sqrt((1+tanU1*tanU1)),sinU1=tanU1*cosU1;var sigma1=Math.atan2(tanU1,cosAlpha1);var sinAlpha=cosU1*sinAlpha1;var cosSqAlpha=1-sinAlpha*sinAlpha;var uSq=cosSqAlpha*(a*a-b*b)/(b*b);var A=1+uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));var B=uSq/1024*(256+uSq*(-128+uSq*(74-47*uSq)));var sigma=s/(b*A),sigmaP=2*Math.PI;while(Math.abs(sigma-sigmaP)>1e-12){var cos2SigmaM=Math.cos(2*sigma1+sigma);var sinSigma=Math.sin(sigma);var cosSigma=Math.cos(sigma);var deltaSigma=B*sinSigma*(cos2SigmaM+B/4*(cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)-
B/6*cos2SigmaM*(-3+4*sinSigma*sinSigma)*(-3+4*cos2SigmaM*cos2SigmaM)));sigmaP=sigma;sigma=s/(b*A)+deltaSigma;}
var tmp=sinU1*sinSigma-cosU1*cosSigma*cosAlpha1;var lat2=Math.atan2(sinU1*cosSigma+cosU1*sinSigma*cosAlpha1,(1-f)*Math.sqrt(sinAlpha*sinAlpha+tmp*tmp));var lambda=Math.atan2(sinSigma*sinAlpha1,cosU1*cosSigma-sinU1*sinSigma*cosAlpha1);var C=f/16*cosSqAlpha*(4+f*(4-3*cosSqAlpha));var L=lambda-(1-C)*f*sinAlpha*(sigma+C*sinSigma*(cos2SigmaM+C*cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)));var revAz=Math.atan2(sinAlpha,-tmp);return new OpenLayers.LonLat(lon1+u.deg(L),u.deg(lat2));};OpenLayers.Util.getParameters=function(url){url=url||window.location.href;var paramsString="";if(OpenLayers.String.contains(url,'?')){var start=url.indexOf('?')+1;var end=OpenLayers.String.contains(url,"#")?url.indexOf('#'):url.length;paramsString=url.substring(start,end);}
var parameters={};var pairs=paramsString.split(/[&;]/);for(var i=0,len=pairs.length;i<len;++i){var keyValue=pairs[i].split('=');if(keyValue[0]){var key=keyValue[0];try{key=decodeURIComponent(key);}catch(err){key=unescape(key);}
var value=(keyValue[1]||'').replace(/\+/g," ");try{value=decodeURIComponent(value);}catch(err){value=unescape(value);}
value=value.split(",")
if(value.length==1){value=value[0];}
parameters[key]=value;}}
return parameters;};OpenLayers.Util.getArgs=function(url){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Util.getParameters'}));return OpenLayers.Util.getParameters(url);};OpenLayers.Util.lastSeqID=0;OpenLayers.Util.createUniqueID=function(prefix){if(prefix==null){prefix="id_";}
OpenLayers.Util.lastSeqID+=1;return prefix+OpenLayers.Util.lastSeqID;};OpenLayers.INCHES_PER_UNIT={'inches':1.0,'ft':12.0,'mi':63360.0,'m':39.3701,'km':39370.1,'dd':4374754,'yd':36};OpenLayers.INCHES_PER_UNIT["in"]=OpenLayers.INCHES_PER_UNIT.inches;OpenLayers.INCHES_PER_UNIT["degrees"]=OpenLayers.INCHES_PER_UNIT.dd;OpenLayers.INCHES_PER_UNIT["nmi"]=1852*OpenLayers.INCHES_PER_UNIT.m;OpenLayers.METERS_PER_INCH=0.02540005080010160020;OpenLayers.Util.extend(OpenLayers.INCHES_PER_UNIT,{"Inch":OpenLayers.INCHES_PER_UNIT.inches,"Meter":1.0/OpenLayers.METERS_PER_INCH,"Foot":0.30480060960121920243/OpenLayers.METERS_PER_INCH,"IFoot":0.30480000000000000000/OpenLayers.METERS_PER_INCH,"ClarkeFoot":0.3047972651151/OpenLayers.METERS_PER_INCH,"SearsFoot":0.30479947153867624624/OpenLayers.METERS_PER_INCH,"GoldCoastFoot":0.30479971018150881758/OpenLayers.METERS_PER_INCH,"IInch":0.02540000000000000000/OpenLayers.METERS_PER_INCH,"MicroInch":0.00002540000000000000/OpenLayers.METERS_PER_INCH,"Mil":0.00000002540000000000/OpenLayers.METERS_PER_INCH,"Centimeter":0.01000000000000000000/OpenLayers.METERS_PER_INCH,"Kilometer":1000.00000000000000000000/OpenLayers.METERS_PER_INCH,"Yard":0.91440182880365760731/OpenLayers.METERS_PER_INCH,"SearsYard":0.914398414616029/OpenLayers.METERS_PER_INCH,"IndianYard":0.91439853074444079983/OpenLayers.METERS_PER_INCH,"IndianYd37":0.91439523/OpenLayers.METERS_PER_INCH,"IndianYd62":0.9143988/OpenLayers.METERS_PER_INCH,"IndianYd75":0.9143985/OpenLayers.METERS_PER_INCH,"IndianFoot":0.30479951/OpenLayers.METERS_PER_INCH,"IndianFt37":0.30479841/OpenLayers.METERS_PER_INCH,"IndianFt62":0.3047996/OpenLayers.METERS_PER_INCH,"IndianFt75":0.3047995/OpenLayers.METERS_PER_INCH,"Mile":1609.34721869443738887477/OpenLayers.METERS_PER_INCH,"IYard":0.91440000000000000000/OpenLayers.METERS_PER_INCH,"IMile":1609.34400000000000000000/OpenLayers.METERS_PER_INCH,"NautM":1852.00000000000000000000/OpenLayers.METERS_PER_INCH,"Lat-66":110943.316488932731/OpenLayers.METERS_PER_INCH,"Lat-83":110946.25736872234125/OpenLayers.METERS_PER_INCH,"Decimeter":0.10000000000000000000/OpenLayers.METERS_PER_INCH,"Millimeter":0.00100000000000000000/OpenLayers.METERS_PER_INCH,"Dekameter":10.00000000000000000000/OpenLayers.METERS_PER_INCH,"Decameter":10.00000000000000000000/OpenLayers.METERS_PER_INCH,"Hectometer":100.00000000000000000000/OpenLayers.METERS_PER_INCH,"GermanMeter":1.0000135965/OpenLayers.METERS_PER_INCH,"CaGrid":0.999738/OpenLayers.METERS_PER_INCH,"ClarkeChain":20.1166194976/OpenLayers.METERS_PER_INCH,"GunterChain":20.11684023368047/OpenLayers.METERS_PER_INCH,"BenoitChain":20.116782494375872/OpenLayers.METERS_PER_INCH,"SearsChain":20.11676512155/OpenLayers.METERS_PER_INCH,"ClarkeLink":0.201166194976/OpenLayers.METERS_PER_INCH,"GunterLink":0.2011684023368047/OpenLayers.METERS_PER_INCH,"BenoitLink":0.20116782494375872/OpenLayers.METERS_PER_INCH,"SearsLink":0.2011676512155/OpenLayers.METERS_PER_INCH,"Rod":5.02921005842012/OpenLayers.METERS_PER_INCH,"IntnlChain":20.1168/OpenLayers.METERS_PER_INCH,"IntnlLink":0.201168/OpenLayers.METERS_PER_INCH,"Perch":5.02921005842012/OpenLayers.METERS_PER_INCH,"Pole":5.02921005842012/OpenLayers.METERS_PER_INCH,"Furlong":201.1684023368046/OpenLayers.METERS_PER_INCH,"Rood":3.778266898/OpenLayers.METERS_PER_INCH,"CapeFoot":0.3047972615/OpenLayers.METERS_PER_INCH,"Brealey":375.00000000000000000000/OpenLayers.METERS_PER_INCH,"ModAmFt":0.304812252984505969011938/OpenLayers.METERS_PER_INCH,"Fathom":1.8288/OpenLayers.METERS_PER_INCH,"NautM-UK":1853.184/OpenLayers.METERS_PER_INCH,"50kilometers":50000.0/OpenLayers.METERS_PER_INCH,"150kilometers":150000.0/OpenLayers.METERS_PER_INCH});OpenLayers.Util.extend(OpenLayers.INCHES_PER_UNIT,{"mm":OpenLayers.INCHES_PER_UNIT["Meter"]/1000.0,"cm":OpenLayers.INCHES_PER_UNIT["Meter"]/100.0,"dm":OpenLayers.INCHES_PER_UNIT["Meter"]*100.0,"km":OpenLayers.INCHES_PER_UNIT["Meter"]*1000.0,"kmi":OpenLayers.INCHES_PER_UNIT["nmi"],"fath":OpenLayers.INCHES_PER_UNIT["Fathom"],"ch":OpenLayers.INCHES_PER_UNIT["IntnlChain"],"link":OpenLayers.INCHES_PER_UNIT["IntnlLink"],"us-in":OpenLayers.INCHES_PER_UNIT["inches"],"us-ft":OpenLayers.INCHES_PER_UNIT["Foot"],"us-yd":OpenLayers.INCHES_PER_UNIT["Yard"],"us-ch":OpenLayers.INCHES_PER_UNIT["GunterChain"],"us-mi":OpenLayers.INCHES_PER_UNIT["Mile"],"ind-yd":OpenLayers.INCHES_PER_UNIT["IndianYd37"],"ind-ft":OpenLayers.INCHES_PER_UNIT["IndianFt37"],"ind-ch":20.11669506/OpenLayers.METERS_PER_INCH});OpenLayers.DOTS_PER_INCH=72;OpenLayers.Util.normalizeScale=function(scale){var normScale=(scale>1.0)?(1.0/scale):scale;return normScale;};OpenLayers.Util.getResolutionFromScale=function(scale,units){var resolution;if(scale){if(units==null){units="degrees";}
var normScale=OpenLayers.Util.normalizeScale(scale);resolution=1/(normScale*OpenLayers.INCHES_PER_UNIT[units]*OpenLayers.DOTS_PER_INCH);}
return resolution;};OpenLayers.Util.getScaleFromResolution=function(resolution,units){if(units==null){units="degrees";}
var scale=resolution*OpenLayers.INCHES_PER_UNIT[units]*OpenLayers.DOTS_PER_INCH;return scale;};OpenLayers.Util.safeStopPropagation=function(evt){OpenLayers.Event.stop(evt,true);};OpenLayers.Util.pagePosition=function(forElement){var pos=[0,0];var viewportElement=OpenLayers.Util.getViewportElement();if(!forElement||forElement==window||forElement==viewportElement){return pos;}
var BUGGY_GECKO_BOX_OBJECT=OpenLayers.IS_GECKO&&document.getBoxObjectFor&&OpenLayers.Element.getStyle(forElement,'position')=='absolute'&&(forElement.style.top==''||forElement.style.left=='');var parent=null;var box;if(forElement.getBoundingClientRect){box=forElement.getBoundingClientRect();var scrollTop=viewportElement.scrollTop;var scrollLeft=viewportElement.scrollLeft;pos[0]=box.left+scrollLeft;pos[1]=box.top+scrollTop;}else if(document.getBoxObjectFor&&!BUGGY_GECKO_BOX_OBJECT){box=document.getBoxObjectFor(forElement);var vpBox=document.getBoxObjectFor(viewportElement);pos[0]=box.screenX-vpBox.screenX;pos[1]=box.screenY-vpBox.screenY;}else{pos[0]=forElement.offsetLeft;pos[1]=forElement.offsetTop;parent=forElement.offsetParent;if(parent!=forElement){while(parent){pos[0]+=parent.offsetLeft;pos[1]+=parent.offsetTop;parent=parent.offsetParent;}}
var browser=OpenLayers.BROWSER_NAME;if(browser=="opera"||(browser=="safari"&&OpenLayers.Element.getStyle(forElement,'position')=='absolute')){pos[1]-=document.body.offsetTop;}
parent=forElement.offsetParent;while(parent&&parent!=document.body){pos[0]-=parent.scrollLeft;if(browser!="opera"||parent.tagName!='TR'){pos[1]-=parent.scrollTop;}
parent=parent.offsetParent;}}
return pos;};OpenLayers.Util.getViewportElement=function(){var viewportElement=arguments.callee.viewportElement;if(viewportElement==undefined){viewportElement=(OpenLayers.BROWSER_NAME=="msie"&&document.compatMode!='CSS1Compat')?document.body:document.documentElement;arguments.callee.viewportElement=viewportElement;}
return viewportElement;};OpenLayers.Util.isEquivalentUrl=function(url1,url2,options){options=options||{};OpenLayers.Util.applyDefaults(options,{ignoreCase:true,ignorePort80:true,ignoreHash:true});var urlObj1=OpenLayers.Util.createUrlObject(url1,options);var urlObj2=OpenLayers.Util.createUrlObject(url2,options);for(var key in urlObj1){if(key!=="args"){if(urlObj1[key]!=urlObj2[key]){return false;}}}
for(var key in urlObj1.args){if(urlObj1.args[key]!=urlObj2.args[key]){return false;}
delete urlObj2.args[key];}
for(var key in urlObj2.args){return false;}
return true;};OpenLayers.Util.createUrlObject=function(url,options){options=options||{};if(!(/^\w+:\/\//).test(url)){var loc=window.location;var port=loc.port?":"+loc.port:"";var fullUrl=loc.protocol+"//"+loc.host.split(":").shift()+port;if(url.indexOf("/")===0){url=fullUrl+url;}else{var parts=loc.pathname.split("/");parts.pop();url=fullUrl+parts.join("/")+"/"+url;}}
if(options.ignoreCase){url=url.toLowerCase();}
var a=document.createElement('a');a.href=url;var urlObject={};urlObject.host=a.host.split(":").shift();urlObject.protocol=a.protocol;if(options.ignorePort80){urlObject.port=(a.port=="80"||a.port=="0")?"":a.port;}else{urlObject.port=(a.port==""||a.port=="0")?"80":a.port;}
urlObject.hash=(options.ignoreHash||a.hash==="#")?"":a.hash;var queryString=a.search;if(!queryString){var qMark=url.indexOf("?");queryString=(qMark!=-1)?url.substr(qMark):"";}
urlObject.args=OpenLayers.Util.getParameters(queryString);urlObject.pathname=(a.pathname.charAt(0)=="/")?a.pathname:"/"+a.pathname;return urlObject;};OpenLayers.Util.removeTail=function(url){var head=null;var qMark=url.indexOf("?");var hashMark=url.indexOf("#");if(qMark==-1){head=(hashMark!=-1)?url.substr(0,hashMark):url;}else{head=(hashMark!=-1)?url.substr(0,Math.min(qMark,hashMark)):url.substr(0,qMark);}
return head;};OpenLayers.IS_GECKO=(function(){return navigator.userAgent.toLowerCase().indexOf("gecko")!=-1;})();OpenLayers.BROWSER_NAME=(function(){var name="";var ua=navigator.userAgent.toLowerCase();if(ua.indexOf("opera")!=-1){name="opera";}else if(ua.indexOf("msie")!=-1){name="msie";}else if(ua.indexOf("safari")!=-1){name="safari";}else if(ua.indexOf("mozilla")!=-1){if(ua.indexOf("firefox")!=-1){name="firefox";}else{name="mozilla";}}
return name;})();OpenLayers.Util.getBrowserName=function(){return OpenLayers.BROWSER_NAME;};OpenLayers.Util.getRenderedDimensions=function(contentHTML,size,options){var w,h;var container=document.createElement("div");container.style.visibility="hidden";var containerElement=(options&&options.containerElement)?options.containerElement:document.body;if(size){if(size.w){w=size.w;container.style.width=w+"px";}else if(size.h){h=size.h;container.style.height=h+"px";}}
if(options&&options.displayClass){container.className=options.displayClass;}
var content=document.createElement("div");content.innerHTML=contentHTML;content.style.overflow="visible";if(content.childNodes){for(var i=0,l=content.childNodes.length;i<l;i++){if(!content.childNodes[i].style)continue;content.childNodes[i].style.overflow="visible";}}
container.appendChild(content);containerElement.appendChild(container);var parentHasPositionAbsolute=false;var parent=container.parentNode;while(parent&&parent.tagName.toLowerCase()!="body"){var parentPosition=OpenLayers.Element.getStyle(parent,"position");if(parentPosition=="absolute"){parentHasPositionAbsolute=true;break;}else if(parentPosition&&parentPosition!="static"){break;}
parent=parent.parentNode;}
if(!parentHasPositionAbsolute){container.style.position="absolute";}
if(!w){w=parseInt(content.scrollWidth);container.style.width=w+"px";}
if(!h){h=parseInt(content.scrollHeight);}
container.removeChild(content);containerElement.removeChild(container);return new OpenLayers.Size(w,h);};OpenLayers.Util.getScrollbarWidth=function(){var scrollbarWidth=OpenLayers.Util._scrollbarWidth;if(scrollbarWidth==null){var scr=null;var inn=null;var wNoScroll=0;var wScroll=0;scr=document.createElement('div');scr.style.position='absolute';scr.style.top='-1000px';scr.style.left='-1000px';scr.style.width='100px';scr.style.height='50px';scr.style.overflow='hidden';inn=document.createElement('div');inn.style.width='100%';inn.style.height='200px';scr.appendChild(inn);document.body.appendChild(scr);wNoScroll=inn.offsetWidth;scr.style.overflow='scroll';wScroll=inn.offsetWidth;document.body.removeChild(document.body.lastChild);OpenLayers.Util._scrollbarWidth=(wNoScroll-wScroll);scrollbarWidth=OpenLayers.Util._scrollbarWidth;}
return scrollbarWidth;};OpenLayers.Util.getFormattedLonLat=function(coordinate,axis,dmsOption){if(!dmsOption){dmsOption='dms';}
var abscoordinate=Math.abs(coordinate)
var coordinatedegrees=Math.floor(abscoordinate);var coordinateminutes=(abscoordinate-coordinatedegrees)/(1/60);var tempcoordinateminutes=coordinateminutes;coordinateminutes=Math.floor(coordinateminutes);var coordinateseconds=(tempcoordinateminutes-coordinateminutes)/(1/60);coordinateseconds=Math.round(coordinateseconds*10);coordinateseconds/=10;if(coordinatedegrees<10){coordinatedegrees="0"+coordinatedegrees;}
var str=coordinatedegrees+"\u00B0";if(dmsOption.indexOf('dm')>=0){if(coordinateminutes<10){coordinateminutes="0"+coordinateminutes;}
str+=coordinateminutes+"'";if(dmsOption.indexOf('dms')>=0){if(coordinateseconds<10){coordinateseconds="0"+coordinateseconds;}
str+=coordinateseconds+'"';}}
if(axis=="lon"){str+=coordinate<0?OpenLayers.i18n("W"):OpenLayers.i18n("E");}else{str+=coordinate<0?OpenLayers.i18n("S"):OpenLayers.i18n("N");}
return str;};OpenLayers.Rico=new Object();OpenLayers.Rico.Corner={round:function(e,options){e=OpenLayers.Util.getElement(e);this._setOptions(options);var color=this.options.color;if(this.options.color=="fromElement"){color=this._background(e);}
var bgColor=this.options.bgColor;if(this.options.bgColor=="fromParent"){bgColor=this._background(e.offsetParent);}
this._roundCornersImpl(e,color,bgColor);},changeColor:function(theDiv,newColor){theDiv.style.backgroundColor=newColor;var spanElements=theDiv.parentNode.getElementsByTagName("span");for(var currIdx=0;currIdx<spanElements.length;currIdx++){spanElements[currIdx].style.backgroundColor=newColor;}},changeOpacity:function(theDiv,newOpacity){var mozillaOpacity=newOpacity;var ieOpacity='alpha(opacity='+newOpacity*100+')';theDiv.style.opacity=mozillaOpacity;theDiv.style.filter=ieOpacity;var spanElements=theDiv.parentNode.getElementsByTagName("span");for(var currIdx=0;currIdx<spanElements.length;currIdx++){spanElements[currIdx].style.opacity=mozillaOpacity;spanElements[currIdx].style.filter=ieOpacity;}},reRound:function(theDiv,options){var topRico=theDiv.parentNode.childNodes[0];var bottomRico=theDiv.parentNode.childNodes[2];theDiv.parentNode.removeChild(topRico);theDiv.parentNode.removeChild(bottomRico);this.round(theDiv.parentNode,options);},_roundCornersImpl:function(e,color,bgColor){if(this.options.border){this._renderBorder(e,bgColor);}
if(this._isTopRounded()){this._roundTopCorners(e,color,bgColor);}
if(this._isBottomRounded()){this._roundBottomCorners(e,color,bgColor);}},_renderBorder:function(el,bgColor){var borderValue="1px solid "+this._borderColor(bgColor);var borderL="border-left: "+borderValue;var borderR="border-right: "+borderValue;var style="style='"+borderL+";"+borderR+"'";el.innerHTML="<div "+style+">"+el.innerHTML+"</div>";},_roundTopCorners:function(el,color,bgColor){var corner=this._createCorner(bgColor);for(var i=0;i<this.options.numSlices;i++){corner.appendChild(this._createCornerSlice(color,bgColor,i,"top"));}
el.style.paddingTop=0;el.insertBefore(corner,el.firstChild);},_roundBottomCorners:function(el,color,bgColor){var corner=this._createCorner(bgColor);for(var i=(this.options.numSlices-1);i>=0;i--){corner.appendChild(this._createCornerSlice(color,bgColor,i,"bottom"));}
el.style.paddingBottom=0;el.appendChild(corner);},_createCorner:function(bgColor){var corner=document.createElement("div");corner.style.backgroundColor=(this._isTransparent()?"transparent":bgColor);return corner;},_createCornerSlice:function(color,bgColor,n,position){var slice=document.createElement("span");var inStyle=slice.style;inStyle.backgroundColor=color;inStyle.display="block";inStyle.height="1px";inStyle.overflow="hidden";inStyle.fontSize="1px";var borderColor=this._borderColor(color,bgColor);if(this.options.border&&n==0){inStyle.borderTopStyle="solid";inStyle.borderTopWidth="1px";inStyle.borderLeftWidth="0px";inStyle.borderRightWidth="0px";inStyle.borderBottomWidth="0px";inStyle.height="0px";inStyle.borderColor=borderColor;}
else if(borderColor){inStyle.borderColor=borderColor;inStyle.borderStyle="solid";inStyle.borderWidth="0px 1px";}
if(!this.options.compact&&(n==(this.options.numSlices-1))){inStyle.height="2px";}
this._setMargin(slice,n,position);this._setBorder(slice,n,position);return slice;},_setOptions:function(options){this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false};OpenLayers.Util.extend(this.options,options||{});this.options.numSlices=this.options.compact?2:4;if(this._isTransparent()){this.options.blend=false;}},_whichSideTop:function(){if(this._hasString(this.options.corners,"all","top")){return"";}
if(this.options.corners.indexOf("tl")>=0&&this.options.corners.indexOf("tr")>=0){return"";}
if(this.options.corners.indexOf("tl")>=0){return"left";}else if(this.options.corners.indexOf("tr")>=0){return"right";}
return"";},_whichSideBottom:function(){if(this._hasString(this.options.corners,"all","bottom")){return"";}
if(this.options.corners.indexOf("bl")>=0&&this.options.corners.indexOf("br")>=0){return"";}
if(this.options.corners.indexOf("bl")>=0){return"left";}else if(this.options.corners.indexOf("br")>=0){return"right";}
return"";},_borderColor:function(color,bgColor){if(color=="transparent"){return bgColor;}else if(this.options.border){return this.options.border;}else if(this.options.blend){return this._blend(bgColor,color);}else{return"";}},_setMargin:function(el,n,corners){var marginSize=this._marginSize(n);var whichSide=corners=="top"?this._whichSideTop():this._whichSideBottom();if(whichSide=="left"){el.style.marginLeft=marginSize+"px";el.style.marginRight="0px";}
else if(whichSide=="right"){el.style.marginRight=marginSize+"px";el.style.marginLeft="0px";}
else{el.style.marginLeft=marginSize+"px";el.style.marginRight=marginSize+"px";}},_setBorder:function(el,n,corners){var borderSize=this._borderSize(n);var whichSide=corners=="top"?this._whichSideTop():this._whichSideBottom();if(whichSide=="left"){el.style.borderLeftWidth=borderSize+"px";el.style.borderRightWidth="0px";}
else if(whichSide=="right"){el.style.borderRightWidth=borderSize+"px";el.style.borderLeftWidth="0px";}
else{el.style.borderLeftWidth=borderSize+"px";el.style.borderRightWidth=borderSize+"px";}
if(this.options.border!=false){el.style.borderLeftWidth=borderSize+"px";el.style.borderRightWidth=borderSize+"px";}},_marginSize:function(n){if(this._isTransparent()){return 0;}
var marginSizes=[5,3,2,1];var blendedMarginSizes=[3,2,1,0];var compactMarginSizes=[2,1];var smBlendedMarginSizes=[1,0];if(this.options.compact&&this.options.blend){return smBlendedMarginSizes[n];}else if(this.options.compact){return compactMarginSizes[n];}else if(this.options.blend){return blendedMarginSizes[n];}else{return marginSizes[n];}},_borderSize:function(n){var transparentBorderSizes=[5,3,2,1];var blendedBorderSizes=[2,1,1,1];var compactBorderSizes=[1,0];var actualBorderSizes=[0,2,0,0];if(this.options.compact&&(this.options.blend||this._isTransparent())){return 1;}else if(this.options.compact){return compactBorderSizes[n];}else if(this.options.blend){return blendedBorderSizes[n];}else if(this.options.border){return actualBorderSizes[n];}else if(this._isTransparent()){return transparentBorderSizes[n];}
return 0;},_hasString:function(str){for(var i=1;i<arguments.length;i++)if(str.indexOf(arguments[i])>=0){return true;}return false;},_blend:function(c1,c2){var cc1=OpenLayers.Rico.Color.createFromHex(c1);cc1.blend(OpenLayers.Rico.Color.createFromHex(c2));return cc1;},_background:function(el){try{return OpenLayers.Rico.Color.createColorFromBackground(el).asHex();}catch(err){return"#ffffff";}},_isTransparent:function(){return this.options.color=="transparent";},_isTopRounded:function(){return this._hasString(this.options.corners,"all","top","tl","tr");},_isBottomRounded:function(){return this._hasString(this.options.corners,"all","bottom","bl","br");},_hasSingleTextChild:function(el){return el.childNodes.length==1&&el.childNodes[0].nodeType==3;}};OpenLayers.Element={visible:function(element){return OpenLayers.Util.getElement(element).style.display!='none';},toggle:function(){for(var i=0,len=arguments.length;i<len;i++){var element=OpenLayers.Util.getElement(arguments[i]);var display=OpenLayers.Element.visible(element)?'hide':'show';OpenLayers.Element[display](element);}},hide:function(){for(var i=0,len=arguments.length;i<len;i++){var element=OpenLayers.Util.getElement(arguments[i]);if(element){element.style.display='none';}}},show:function(){for(var i=0,len=arguments.length;i<len;i++){var element=OpenLayers.Util.getElement(arguments[i]);if(element){element.style.display='';}}},remove:function(element){element=OpenLayers.Util.getElement(element);element.parentNode.removeChild(element);},getHeight:function(element){element=OpenLayers.Util.getElement(element);return element.offsetHeight;},getDimensions:function(element){element=OpenLayers.Util.getElement(element);if(OpenLayers.Element.getStyle(element,'display')!='none'){return{width:element.offsetWidth,height:element.offsetHeight};}
var els=element.style;var originalVisibility=els.visibility;var originalPosition=els.position;var originalDisplay=els.display;els.visibility='hidden';els.position='absolute';els.display='';var originalWidth=element.clientWidth;var originalHeight=element.clientHeight;els.display=originalDisplay;els.position=originalPosition;els.visibility=originalVisibility;return{width:originalWidth,height:originalHeight};},hasClass:function(element,name){var names=element.className;return(!!names&&new RegExp("(^|\\s)"+name+"(\\s|$)").test(names));},addClass:function(element,name){if(!OpenLayers.Element.hasClass(element,name)){element.className+=(element.className?" ":"")+name;}
return element;},removeClass:function(element,name){var names=element.className;if(names){element.className=OpenLayers.String.trim(names.replace(new RegExp("(^|\\s+)"+name+"(\\s+|$)")," "));}
return element;},toggleClass:function(element,name){if(OpenLayers.Element.hasClass(element,name)){OpenLayers.Element.removeClass(element,name);}else{OpenLayers.Element.addClass(element,name);}
return element;},getStyle:function(element,style){element=OpenLayers.Util.getElement(element);var value=null;if(element&&element.style){value=element.style[OpenLayers.String.camelize(style)];if(!value){if(document.defaultView&&document.defaultView.getComputedStyle){var css=document.defaultView.getComputedStyle(element,null);value=css?css.getPropertyValue(style):null;}else if(element.currentStyle){value=element.currentStyle[OpenLayers.String.camelize(style)];}}
var positions=['left','top','right','bottom'];if(window.opera&&(OpenLayers.Util.indexOf(positions,style)!=-1)&&(OpenLayers.Element.getStyle(element,'position')=='static')){value='auto';}}
return value=='auto'?null:value;}};OpenLayers.Size=OpenLayers.Class({w:0.0,h:0.0,initialize:function(w,h){this.w=parseFloat(w);this.h=parseFloat(h);},toString:function(){return("w="+this.w+",h="+this.h);},clone:function(){return new OpenLayers.Size(this.w,this.h);},equals:function(sz){var equals=false;if(sz!=null){equals=((this.w==sz.w&&this.h==sz.h)||(isNaN(this.w)&&isNaN(this.h)&&isNaN(sz.w)&&isNaN(sz.h)));}
return equals;},CLASS_NAME:"OpenLayers.Size"});OpenLayers.Console={log:function(){},debug:function(){},info:function(){},warn:function(){},error:function(){},userError:function(error){alert(error);},assert:function(){},dir:function(){},dirxml:function(){},trace:function(){},group:function(){},groupEnd:function(){},time:function(){},timeEnd:function(){},profile:function(){},profileEnd:function(){},count:function(){},CLASS_NAME:"OpenLayers.Console"};(function(){var scripts=document.getElementsByTagName("script");for(var i=0,len=scripts.length;i<len;++i){if(scripts[i].src.indexOf("firebug.js")!=-1){if(console){OpenLayers.Util.extend(OpenLayers.Console,console);break;}}}})();OpenLayers.Icon=OpenLayers.Class({url:null,size:null,offset:null,calculateOffset:null,imageDiv:null,px:null,initialize:function(url,size,offset,calculateOffset){this.url=url;this.size=(size)?size:new OpenLayers.Size(20,20);this.offset=offset?offset:new OpenLayers.Pixel(-(this.size.w/2),-(this.size.h/2));this.calculateOffset=calculateOffset;var id=OpenLayers.Util.createUniqueID("OL_Icon_");this.imageDiv=OpenLayers.Util.createAlphaImageDiv(id);},destroy:function(){this.erase();OpenLayers.Event.stopObservingElement(this.imageDiv.firstChild);this.imageDiv.innerHTML="";this.imageDiv=null;},clone:function(){return new OpenLayers.Icon(this.url,this.size,this.offset,this.calculateOffset);},setSize:function(size){if(size!=null){this.size=size;}
this.draw();},setUrl:function(url){if(url!=null){this.url=url;}
this.draw();},draw:function(px){OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,this.size,this.url,"absolute");this.moveTo(px);return this.imageDiv;},erase:function(){if(this.imageDiv!=null&&this.imageDiv.parentNode!=null){OpenLayers.Element.remove(this.imageDiv);}},setOpacity:function(opacity){OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,null,null,null,null,null,opacity);},moveTo:function(px){if(px!=null){this.px=px;}
if(this.imageDiv!=null){if(this.px==null){this.display(false);}else{if(this.calculateOffset){this.offset=this.calculateOffset(this.size);}
var offsetPx=this.px.offset(this.offset);OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,offsetPx);}}},display:function(display){this.imageDiv.style.display=(display)?"":"none";},isDrawn:function(){var isDrawn=(this.imageDiv&&this.imageDiv.parentNode&&(this.imageDiv.parentNode.nodeType!=11));return isDrawn;},CLASS_NAME:"OpenLayers.Icon"});OpenLayers.Popup=OpenLayers.Class({events:null,id:"",lonlat:null,div:null,contentSize:null,size:null,contentHTML:null,backgroundColor:"",opacity:"",border:"",contentDiv:null,groupDiv:null,closeDiv:null,autoSize:false,minSize:null,maxSize:null,displayClass:"olPopup",contentDisplayClass:"olPopupContent",padding:0,disableFirefoxOverflowHack:false,fixPadding:function(){if(typeof this.padding=="number"){this.padding=new OpenLayers.Bounds(this.padding,this.padding,this.padding,this.padding);}},panMapIfOutOfView:false,keepInMap:false,closeOnMove:false,map:null,initialize:function(id,lonlat,contentSize,contentHTML,closeBox,closeBoxCallback){if(id==null){id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");}
this.id=id;this.lonlat=lonlat;this.contentSize=(contentSize!=null)?contentSize:new OpenLayers.Size(OpenLayers.Popup.WIDTH,OpenLayers.Popup.HEIGHT);if(contentHTML!=null){this.contentHTML=contentHTML;}
this.backgroundColor=OpenLayers.Popup.COLOR;this.opacity=OpenLayers.Popup.OPACITY;this.border=OpenLayers.Popup.BORDER;this.div=OpenLayers.Util.createDiv(this.id,null,null,null,null,null,"hidden");this.div.className=this.displayClass;var groupDivId=this.id+"_GroupDiv";this.groupDiv=OpenLayers.Util.createDiv(groupDivId,null,null,null,"relative",null,"hidden");var id=this.div.id+"_contentDiv";this.contentDiv=OpenLayers.Util.createDiv(id,null,this.contentSize.clone(),null,"relative");this.contentDiv.className=this.contentDisplayClass;this.groupDiv.appendChild(this.contentDiv);this.div.appendChild(this.groupDiv);if(closeBox){this.addCloseBox(closeBoxCallback);}
this.registerEvents();},destroy:function(){this.id=null;this.lonlat=null;this.size=null;this.contentHTML=null;this.backgroundColor=null;this.opacity=null;this.border=null;if(this.closeOnMove&&this.map){this.map.events.unregister("movestart",this,this.hide);}
this.events.destroy();this.events=null;if(this.closeDiv){OpenLayers.Event.stopObservingElement(this.closeDiv);this.groupDiv.removeChild(this.closeDiv);}
this.closeDiv=null;this.div.removeChild(this.groupDiv);this.groupDiv=null;if(this.map!=null){this.map.removePopup(this);}
this.map=null;this.div=null;this.autoSize=null;this.minSize=null;this.maxSize=null;this.padding=null;this.panMapIfOutOfView=null;},draw:function(px){if(px==null){if((this.lonlat!=null)&&(this.map!=null)){px=this.map.getLayerPxFromLonLat(this.lonlat);}}
if(this.closeOnMove){this.map.events.register("movestart",this,this.hide);}
if(!this.disableFirefoxOverflowHack&&OpenLayers.BROWSER_NAME=='firefox'){this.map.events.register("movestart",this,function(){var style=document.defaultView.getComputedStyle(this.contentDiv,null);var currentOverflow=style.getPropertyValue("overflow");if(currentOverflow!="hidden"){this.contentDiv._oldOverflow=currentOverflow;this.contentDiv.style.overflow="hidden";}});this.map.events.register("moveend",this,function(){var oldOverflow=this.contentDiv._oldOverflow;if(oldOverflow){this.contentDiv.style.overflow=oldOverflow;this.contentDiv._oldOverflow=null;}});}
this.moveTo(px);if(!this.autoSize&&!this.size){this.setSize(this.contentSize);}
this.setBackgroundColor();this.setOpacity();this.setBorder();this.setContentHTML();if(this.panMapIfOutOfView){this.panIntoView();}
return this.div;},updatePosition:function(){if((this.lonlat)&&(this.map)){var px=this.map.getLayerPxFromLonLat(this.lonlat);if(px){this.moveTo(px);}}},moveTo:function(px){if((px!=null)&&(this.div!=null)){this.div.style.left=px.x+"px";this.div.style.top=px.y+"px";}},visible:function(){return OpenLayers.Element.visible(this.div);},toggle:function(){if(this.visible()){this.hide();}else{this.show();}},show:function(){OpenLayers.Element.show(this.div);if(this.panMapIfOutOfView){this.panIntoView();}},hide:function(){OpenLayers.Element.hide(this.div);},setSize:function(contentSize){this.size=contentSize.clone();var contentDivPadding=this.getContentDivPadding();var wPadding=contentDivPadding.left+contentDivPadding.right;var hPadding=contentDivPadding.top+contentDivPadding.bottom;this.fixPadding();wPadding+=this.padding.left+this.padding.right;hPadding+=this.padding.top+this.padding.bottom;if(this.closeDiv){var closeDivWidth=parseInt(this.closeDiv.style.width);wPadding+=closeDivWidth+contentDivPadding.right;}
this.size.w+=wPadding;this.size.h+=hPadding;if(OpenLayers.BROWSER_NAME=="msie"){this.contentSize.w+=contentDivPadding.left+contentDivPadding.right;this.contentSize.h+=contentDivPadding.bottom+contentDivPadding.top;}
if(this.div!=null){this.div.style.width=this.size.w+"px";this.div.style.height=this.size.h+"px";}
if(this.contentDiv!=null){this.contentDiv.style.width=contentSize.w+"px";this.contentDiv.style.height=contentSize.h+"px";}},updateSize:function(){var preparedHTML="<div class='"+this.contentDisplayClass+"'>"+
this.contentDiv.innerHTML+"</div>";var containerElement=(this.map)?this.map.layerContainerDiv:document.body;var realSize=OpenLayers.Util.getRenderedDimensions(preparedHTML,null,{displayClass:this.displayClass,containerElement:containerElement});var safeSize=this.getSafeContentSize(realSize);var newSize=null;if(safeSize.equals(realSize)){newSize=realSize;}else{var fixedSize=new OpenLayers.Size();fixedSize.w=(safeSize.w<realSize.w)?safeSize.w:null;fixedSize.h=(safeSize.h<realSize.h)?safeSize.h:null;if(fixedSize.w&&fixedSize.h){newSize=safeSize;}else{var clippedSize=OpenLayers.Util.getRenderedDimensions(preparedHTML,fixedSize,{displayClass:this.contentDisplayClass,containerElement:containerElement});var currentOverflow=OpenLayers.Element.getStyle(this.contentDiv,"overflow");if((currentOverflow!="hidden")&&(clippedSize.equals(safeSize))){var scrollBar=OpenLayers.Util.getScrollbarWidth();if(fixedSize.w){clippedSize.h+=scrollBar;}else{clippedSize.w+=scrollBar;}}
newSize=this.getSafeContentSize(clippedSize);}}
this.setSize(newSize);},setBackgroundColor:function(color){if(color!=undefined){this.backgroundColor=color;}
if(this.div!=null){this.div.style.backgroundColor=this.backgroundColor;}},setOpacity:function(opacity){if(opacity!=undefined){this.opacity=opacity;}
if(this.div!=null){this.div.style.opacity=this.opacity;this.div.style.filter='alpha(opacity='+this.opacity*100+')';}},setBorder:function(border){if(border!=undefined){this.border=border;}
if(this.div!=null){this.div.style.border=this.border;}},setContentHTML:function(contentHTML){if(contentHTML!=null){this.contentHTML=contentHTML;}
if((this.contentDiv!=null)&&(this.contentHTML!=null)&&(this.contentHTML!=this.contentDiv.innerHTML)){this.contentDiv.innerHTML=this.contentHTML;if(this.autoSize){this.registerImageListeners();this.updateSize();}}},registerImageListeners:function(){var onImgLoad=function(){this.popup.updateSize();if(this.popup.visible()&&this.popup.panMapIfOutOfView){this.popup.panIntoView();}
OpenLayers.Event.stopObserving(this.img,"load",this.img._onImageLoad);};var images=this.contentDiv.getElementsByTagName("img");for(var i=0,len=images.length;i<len;i++){var img=images[i];if(img.width==0||img.height==0){var context={'popup':this,'img':img};img._onImgLoad=OpenLayers.Function.bind(onImgLoad,context);OpenLayers.Event.observe(img,'load',img._onImgLoad);}}},getSafeContentSize:function(size){var safeContentSize=size.clone();var contentDivPadding=this.getContentDivPadding();var wPadding=contentDivPadding.left+contentDivPadding.right;var hPadding=contentDivPadding.top+contentDivPadding.bottom;this.fixPadding();wPadding+=this.padding.left+this.padding.right;hPadding+=this.padding.top+this.padding.bottom;if(this.closeDiv){var closeDivWidth=parseInt(this.closeDiv.style.width);wPadding+=closeDivWidth+contentDivPadding.right;}
if(this.minSize){safeContentSize.w=Math.max(safeContentSize.w,(this.minSize.w-wPadding));safeContentSize.h=Math.max(safeContentSize.h,(this.minSize.h-hPadding));}
if(this.maxSize){safeContentSize.w=Math.min(safeContentSize.w,(this.maxSize.w-wPadding));safeContentSize.h=Math.min(safeContentSize.h,(this.maxSize.h-hPadding));}
if(this.map&&this.map.size){var extraX=0,extraY=0;if(this.keepInMap&&!this.panMapIfOutOfView){var px=this.map.getPixelFromLonLat(this.lonlat);switch(this.relativePosition){case"tr":extraX=px.x;extraY=this.map.size.h-px.y;break;case"tl":extraX=this.map.size.w-px.x;extraY=this.map.size.h-px.y;break;case"bl":extraX=this.map.size.w-px.x;extraY=px.y;break;case"br":extraX=px.x;extraY=px.y;break;default:extraX=px.x;extraY=this.map.size.h-px.y;break;}}
var maxY=this.map.size.h-
this.map.paddingForPopups.top-
this.map.paddingForPopups.bottom-
hPadding-extraY;var maxX=this.map.size.w-
this.map.paddingForPopups.left-
this.map.paddingForPopups.right-
wPadding-extraX;safeContentSize.w=Math.min(safeContentSize.w,maxX);safeContentSize.h=Math.min(safeContentSize.h,maxY);}
return safeContentSize;},getContentDivPadding:function(){var contentDivPadding=this._contentDivPadding;if(!contentDivPadding){if(this.div.parentNode==null){this.div.style.display="none";document.body.appendChild(this.div);}
contentDivPadding=new OpenLayers.Bounds(OpenLayers.Element.getStyle(this.contentDiv,"padding-left"),OpenLayers.Element.getStyle(this.contentDiv,"padding-bottom"),OpenLayers.Element.getStyle(this.contentDiv,"padding-right"),OpenLayers.Element.getStyle(this.contentDiv,"padding-top"));this._contentDivPadding=contentDivPadding;if(this.div.parentNode==document.body){document.body.removeChild(this.div);this.div.style.display="";}}
return contentDivPadding;},addCloseBox:function(callback){this.closeDiv=OpenLayers.Util.createDiv(this.id+"_close",null,new OpenLayers.Size(17,17));this.closeDiv.className="olPopupCloseBox";var contentDivPadding=this.getContentDivPadding();this.closeDiv.style.right=contentDivPadding.right+"px";this.closeDiv.style.top=contentDivPadding.top+"px";this.groupDiv.appendChild(this.closeDiv);var closePopup=callback||function(e){this.hide();OpenLayers.Event.stop(e);};OpenLayers.Event.observe(this.closeDiv,"click",OpenLayers.Function.bindAsEventListener(closePopup,this));},panIntoView:function(){var mapSize=this.map.getSize();var origTL=this.map.getViewPortPxFromLayerPx(new OpenLayers.Pixel(parseInt(this.div.style.left),parseInt(this.div.style.top)));var newTL=origTL.clone();if(origTL.x<this.map.paddingForPopups.left){newTL.x=this.map.paddingForPopups.left;}else
if((origTL.x+this.size.w)>(mapSize.w-this.map.paddingForPopups.right)){newTL.x=mapSize.w-this.map.paddingForPopups.right-this.size.w;}
if(origTL.y<this.map.paddingForPopups.top){newTL.y=this.map.paddingForPopups.top;}else
if((origTL.y+this.size.h)>(mapSize.h-this.map.paddingForPopups.bottom)){newTL.y=mapSize.h-this.map.paddingForPopups.bottom-this.size.h;}
var dx=origTL.x-newTL.x;var dy=origTL.y-newTL.y;this.map.pan(dx,dy);},registerEvents:function(){this.events=new OpenLayers.Events(this,this.div,null,true);this.events.on({"mousedown":this.onmousedown,"mousemove":this.onmousemove,"mouseup":this.onmouseup,"click":this.onclick,"mouseout":this.onmouseout,"dblclick":this.ondblclick,scope:this});},onmousedown:function(evt){this.mousedown=true;OpenLayers.Event.stop(evt,true);},onmousemove:function(evt){if(this.mousedown){OpenLayers.Event.stop(evt,true);}},onmouseup:function(evt){if(this.mousedown){this.mousedown=false;OpenLayers.Event.stop(evt,true);}},onclick:function(evt){OpenLayers.Event.stop(evt,true);},onmouseout:function(evt){this.mousedown=false;},ondblclick:function(evt){OpenLayers.Event.stop(evt,true);},CLASS_NAME:"OpenLayers.Popup"});OpenLayers.Popup.WIDTH=200;OpenLayers.Popup.HEIGHT=200;OpenLayers.Popup.COLOR="white";OpenLayers.Popup.OPACITY=1;OpenLayers.Popup.BORDER="0px";OpenLayers.Renderer=OpenLayers.Class({container:null,root:null,extent:null,locked:false,size:null,resolution:null,map:null,initialize:function(containerID,options){this.container=OpenLayers.Util.getElement(containerID);},destroy:function(){this.container=null;this.extent=null;this.size=null;this.resolution=null;this.map=null;},supported:function(){return false;},setExtent:function(extent,resolutionChanged){this.extent=extent.clone();if(resolutionChanged){this.resolution=null;}},setSize:function(size){this.size=size.clone();this.resolution=null;},getResolution:function(){this.resolution=this.resolution||this.map.getResolution();return this.resolution;},drawFeature:function(feature,style){if(style==null){style=feature.style;}
if(feature.geometry){var bounds=feature.geometry.getBounds();if(bounds){if(!bounds.intersectsBounds(this.extent)){style={display:"none"};}
var rendered=this.drawGeometry(feature.geometry,style,feature.id);if(style.display!="none"&&style.label&&rendered!==false){var location=feature.geometry.getCentroid();if(style.labelXOffset||style.labelYOffset){xOffset=isNaN(style.labelXOffset)?0:style.labelXOffset;yOffset=isNaN(style.labelYOffset)?0:style.labelYOffset;var res=this.getResolution();location.move(xOffset*res,yOffset*res);}
this.drawText(feature.id,style,location);}else{this.removeText(feature.id);}
return rendered;}}},drawGeometry:function(geometry,style,featureId){},drawText:function(featureId,style,location){},removeText:function(featureId){},clear:function(){},getFeatureIdFromEvent:function(evt){},eraseFeatures:function(features){if(!(features instanceof Array)){features=[features];}
for(var i=0,len=features.length;i<len;++i){var feature=features[i];this.eraseGeometry(feature.geometry,feature.id);this.removeText(feature.id);}},eraseGeometry:function(geometry,featureId){},moveRoot:function(renderer){},getRenderLayerId:function(){return this.container.id;},applyDefaultSymbolizer:function(symbolizer){var result=OpenLayers.Util.extend({},OpenLayers.Renderer.defaultSymbolizer);if(symbolizer.stroke===false){delete result.strokeWidth;delete result.strokeColor;}
if(symbolizer.fill===false){delete result.fillColor;}
OpenLayers.Util.extend(result,symbolizer);return result;},CLASS_NAME:"OpenLayers.Renderer"});OpenLayers.Renderer.defaultSymbolizer={fillColor:"#000000",strokeColor:"#000000",strokeWidth:2,fillOpacity:1,strokeOpacity:1,pointRadius:0};OpenLayers.Symbolizer=OpenLayers.Class({zIndex:0,initialize:function(config){OpenLayers.Util.extend(this,config);},clone:function(){var Type=eval(this.CLASS_NAME);return new Type(OpenLayers.Util.extend({},this));},CLASS_NAME:"OpenLayers.Symbolizer"});OpenLayers.Bounds=OpenLayers.Class({left:null,bottom:null,right:null,top:null,centerLonLat:null,initialize:function(left,bottom,right,top){if(left!=null){this.left=OpenLayers.Util.toFloat(left);}
if(bottom!=null){this.bottom=OpenLayers.Util.toFloat(bottom);}
if(right!=null){this.right=OpenLayers.Util.toFloat(right);}
if(top!=null){this.top=OpenLayers.Util.toFloat(top);}},clone:function(){return new OpenLayers.Bounds(this.left,this.bottom,this.right,this.top);},equals:function(bounds){var equals=false;if(bounds!=null){equals=((this.left==bounds.left)&&(this.right==bounds.right)&&(this.top==bounds.top)&&(this.bottom==bounds.bottom));}
return equals;},toString:function(){return("left-bottom=("+this.left+","+this.bottom+")"
+" right-top=("+this.right+","+this.top+")");},toArray:function(reverseAxisOrder){if(reverseAxisOrder===true){return[this.bottom,this.left,this.top,this.right];}else{return[this.left,this.bottom,this.right,this.top];}},toBBOX:function(decimal,reverseAxisOrder){if(decimal==null){decimal=6;}
var mult=Math.pow(10,decimal);var xmin=Math.round(this.left*mult)/mult;var ymin=Math.round(this.bottom*mult)/mult;var xmax=Math.round(this.right*mult)/mult;var ymax=Math.round(this.top*mult)/mult;if(reverseAxisOrder===true){return ymin+","+xmin+","+ymax+","+xmax;}else{return xmin+","+ymin+","+xmax+","+ymax;}},toGeometry:function(){return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(this.left,this.bottom),new OpenLayers.Geometry.Point(this.right,this.bottom),new OpenLayers.Geometry.Point(this.right,this.top),new OpenLayers.Geometry.Point(this.left,this.top)])]);},getWidth:function(){return(this.right-this.left);},getHeight:function(){return(this.top-this.bottom);},getSize:function(){return new OpenLayers.Size(this.getWidth(),this.getHeight());},getCenterPixel:function(){return new OpenLayers.Pixel((this.left+this.right)/2,(this.bottom+this.top)/2);},getCenterLonLat:function(){if(!this.centerLonLat){this.centerLonLat=new OpenLayers.LonLat((this.left+this.right)/2,(this.bottom+this.top)/2);}
return this.centerLonLat;},scale:function(ratio,origin){if(origin==null){origin=this.getCenterLonLat();}
var origx,origy;if(origin.CLASS_NAME=="OpenLayers.LonLat"){origx=origin.lon;origy=origin.lat;}else{origx=origin.x;origy=origin.y;}
var left=(this.left-origx)*ratio+origx;var bottom=(this.bottom-origy)*ratio+origy;var right=(this.right-origx)*ratio+origx;var top=(this.top-origy)*ratio+origy;return new OpenLayers.Bounds(left,bottom,right,top);},add:function(x,y){if((x==null)||(y==null)){var msg=OpenLayers.i18n("boundsAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.Bounds(this.left+x,this.bottom+y,this.right+x,this.top+y);},extend:function(object){var bounds=null;if(object){switch(object.CLASS_NAME){case"OpenLayers.LonLat":bounds=new OpenLayers.Bounds(object.lon,object.lat,object.lon,object.lat);break;case"OpenLayers.Geometry.Point":bounds=new OpenLayers.Bounds(object.x,object.y,object.x,object.y);break;case"OpenLayers.Bounds":bounds=object;break;}
if(bounds){this.centerLonLat=null;if((this.left==null)||(bounds.left<this.left)){this.left=bounds.left;}
if((this.bottom==null)||(bounds.bottom<this.bottom)){this.bottom=bounds.bottom;}
if((this.right==null)||(bounds.right>this.right)){this.right=bounds.right;}
if((this.top==null)||(bounds.top>this.top)){this.top=bounds.top;}}}},containsLonLat:function(ll,inclusive){return this.contains(ll.lon,ll.lat,inclusive);},containsPixel:function(px,inclusive){return this.contains(px.x,px.y,inclusive);},contains:function(x,y,inclusive){if(inclusive==null){inclusive=true;}
if(x==null||y==null){return false;}
x=OpenLayers.Util.toFloat(x);y=OpenLayers.Util.toFloat(y);var contains=false;if(inclusive){contains=((x>=this.left)&&(x<=this.right)&&(y>=this.bottom)&&(y<=this.top));}else{contains=((x>this.left)&&(x<this.right)&&(y>this.bottom)&&(y<this.top));}
return contains;},intersectsBounds:function(bounds,inclusive){if(inclusive==null){inclusive=true;}
var intersects=false;var mightTouch=(this.left==bounds.right||this.right==bounds.left||this.top==bounds.bottom||this.bottom==bounds.top);if(inclusive||!mightTouch){var inBottom=(((bounds.bottom>=this.bottom)&&(bounds.bottom<=this.top))||((this.bottom>=bounds.bottom)&&(this.bottom<=bounds.top)));var inTop=(((bounds.top>=this.bottom)&&(bounds.top<=this.top))||((this.top>bounds.bottom)&&(this.top<bounds.top)));var inLeft=(((bounds.left>=this.left)&&(bounds.left<=this.right))||((this.left>=bounds.left)&&(this.left<=bounds.right)));var inRight=(((bounds.right>=this.left)&&(bounds.right<=this.right))||((this.right>=bounds.left)&&(this.right<=bounds.right)));intersects=((inBottom||inTop)&&(inLeft||inRight));}
return intersects;},containsBounds:function(bounds,partial,inclusive){if(partial==null){partial=false;}
if(inclusive==null){inclusive=true;}
var bottomLeft=this.contains(bounds.left,bounds.bottom,inclusive);var bottomRight=this.contains(bounds.right,bounds.bottom,inclusive);var topLeft=this.contains(bounds.left,bounds.top,inclusive);var topRight=this.contains(bounds.right,bounds.top,inclusive);return(partial)?(bottomLeft||bottomRight||topLeft||topRight):(bottomLeft&&bottomRight&&topLeft&&topRight);},determineQuadrant:function(lonlat){var quadrant="";var center=this.getCenterLonLat();quadrant+=(lonlat.lat<center.lat)?"b":"t";quadrant+=(lonlat.lon<center.lon)?"l":"r";return quadrant;},transform:function(source,dest){this.centerLonLat=null;var ll=OpenLayers.Projection.transform({'x':this.left,'y':this.bottom},source,dest);var lr=OpenLayers.Projection.transform({'x':this.right,'y':this.bottom},source,dest);var ul=OpenLayers.Projection.transform({'x':this.left,'y':this.top},source,dest);var ur=OpenLayers.Projection.transform({'x':this.right,'y':this.top},source,dest);this.left=Math.min(ll.x,ul.x);this.bottom=Math.min(ll.y,lr.y);this.right=Math.max(lr.x,ur.x);this.top=Math.max(ul.y,ur.y);return this;},wrapDateLine:function(maxExtent,options){options=options||{};var leftTolerance=options.leftTolerance||0;var rightTolerance=options.rightTolerance||0;var newBounds=this.clone();if(maxExtent){while(newBounds.left<maxExtent.left&&(newBounds.right-rightTolerance)<=maxExtent.left){newBounds=newBounds.add(maxExtent.getWidth(),0);}
while((newBounds.left+leftTolerance)>=maxExtent.right&&newBounds.right>maxExtent.right){newBounds=newBounds.add(-maxExtent.getWidth(),0);}}
return newBounds;},CLASS_NAME:"OpenLayers.Bounds"});OpenLayers.Bounds.fromString=function(str){var bounds=str.split(",");return OpenLayers.Bounds.fromArray(bounds);};OpenLayers.Bounds.fromArray=function(bbox){return new OpenLayers.Bounds(parseFloat(bbox[0]),parseFloat(bbox[1]),parseFloat(bbox[2]),parseFloat(bbox[3]));};OpenLayers.Bounds.fromSize=function(size){return new OpenLayers.Bounds(0,size.h,size.w,0);};OpenLayers.Bounds.oppositeQuadrant=function(quadrant){var opp="";opp+=(quadrant.charAt(0)=='t')?'b':'t';opp+=(quadrant.charAt(1)=='l')?'r':'l';return opp;};OpenLayers.LonLat=OpenLayers.Class({lon:0.0,lat:0.0,initialize:function(lon,lat){this.lon=OpenLayers.Util.toFloat(lon);this.lat=OpenLayers.Util.toFloat(lat);},toString:function(){return("lon="+this.lon+",lat="+this.lat);},toShortString:function(){return(this.lon+", "+this.lat);},clone:function(){return new OpenLayers.LonLat(this.lon,this.lat);},add:function(lon,lat){if((lon==null)||(lat==null)){var msg=OpenLayers.i18n("lonlatAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.LonLat(this.lon+OpenLayers.Util.toFloat(lon),this.lat+OpenLayers.Util.toFloat(lat));},equals:function(ll){var equals=false;if(ll!=null){equals=((this.lon==ll.lon&&this.lat==ll.lat)||(isNaN(this.lon)&&isNaN(this.lat)&&isNaN(ll.lon)&&isNaN(ll.lat)));}
return equals;},transform:function(source,dest){var point=OpenLayers.Projection.transform({'x':this.lon,'y':this.lat},source,dest);this.lon=point.x;this.lat=point.y;return this;},wrapDateLine:function(maxExtent){var newLonLat=this.clone();if(maxExtent){while(newLonLat.lon<maxExtent.left){newLonLat.lon+=maxExtent.getWidth();}
while(newLonLat.lon>maxExtent.right){newLonLat.lon-=maxExtent.getWidth();}}
return newLonLat;},CLASS_NAME:"OpenLayers.LonLat"});OpenLayers.LonLat.fromString=function(str){var pair=str.split(",");return new OpenLayers.LonLat(pair[0],pair[1]);};OpenLayers.Pixel=OpenLayers.Class({x:0.0,y:0.0,initialize:function(x,y){this.x=parseFloat(x);this.y=parseFloat(y);},toString:function(){return("x="+this.x+",y="+this.y);},clone:function(){return new OpenLayers.Pixel(this.x,this.y);},equals:function(px){var equals=false;if(px!=null){equals=((this.x==px.x&&this.y==px.y)||(isNaN(this.x)&&isNaN(this.y)&&isNaN(px.x)&&isNaN(px.y)));}
return equals;},add:function(x,y){if((x==null)||(y==null)){var msg=OpenLayers.i18n("pixelAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.Pixel(this.x+x,this.y+y);},offset:function(px){var newPx=this.clone();if(px){newPx=this.add(px.x,px.y);}
return newPx;},CLASS_NAME:"OpenLayers.Pixel"});OpenLayers.Control=OpenLayers.Class({id:null,map:null,div:null,type:null,allowSelection:false,displayClass:"",title:"",autoActivate:false,active:null,handler:null,eventListeners:null,events:null,EVENT_TYPES:["activate","deactivate"],initialize:function(options){this.displayClass=this.CLASS_NAME.replace("OpenLayers.","ol").replace(/\./g,"");OpenLayers.Util.extend(this,options);this.events=new OpenLayers.Events(this,null,this.EVENT_TYPES);if(this.eventListeners instanceof Object){this.events.on(this.eventListeners);}
if(this.id==null){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");}},destroy:function(){if(this.events){if(this.eventListeners){this.events.un(this.eventListeners);}
this.events.destroy();this.events=null;}
this.eventListeners=null;if(this.handler){this.handler.destroy();this.handler=null;}
if(this.handlers){for(var key in this.handlers){if(this.handlers.hasOwnProperty(key)&&typeof this.handlers[key].destroy=="function"){this.handlers[key].destroy();}}
this.handlers=null;}
if(this.map){this.map.removeControl(this);this.map=null;}},setMap:function(map){this.map=map;if(this.handler){this.handler.setMap(map);}},draw:function(px){if(this.div==null){this.div=OpenLayers.Util.createDiv(this.id);this.div.className=this.displayClass;if(!this.allowSelection){this.div.className+=" olControlNoSelect";this.div.setAttribute("unselectable","on",0);this.div.onselectstart=OpenLayers.Function.False;}
if(this.title!=""){this.div.title=this.title;}}
if(px!=null){this.position=px.clone();}
this.moveTo(this.position);return this.div;},moveTo:function(px){if((px!=null)&&(this.div!=null)){this.div.style.left=px.x+"px";this.div.style.top=px.y+"px";}},activate:function(){if(this.active){return false;}
if(this.handler){this.handler.activate();}
this.active=true;if(this.map){OpenLayers.Element.addClass(this.map.viewPortDiv,this.displayClass.replace(/ /g,"")+"Active");}
this.events.triggerEvent("activate");return true;},deactivate:function(){if(this.active){if(this.handler){this.handler.deactivate();}
this.active=false;if(this.map){OpenLayers.Element.removeClass(this.map.viewPortDiv,this.displayClass.replace(/ /g,"")+"Active");}
this.events.triggerEvent("deactivate");return true;}
return false;},CLASS_NAME:"OpenLayers.Control"});OpenLayers.Control.TYPE_BUTTON=1;OpenLayers.Control.TYPE_TOGGLE=2;OpenLayers.Control.TYPE_TOOL=3;OpenLayers.Lang={code:null,defaultCode:"en",getCode:function(){if(!OpenLayers.Lang.code){OpenLayers.Lang.setCode();}
return OpenLayers.Lang.code;},setCode:function(code){var lang;if(!code){code=(OpenLayers.BROWSER_NAME=="msie")?navigator.userLanguage:navigator.language;}
var parts=code.split('-');parts[0]=parts[0].toLowerCase();if(typeof OpenLayers.Lang[parts[0]]=="object"){lang=parts[0];}
if(parts[1]){var testLang=parts[0]+'-'+parts[1].toUpperCase();if(typeof OpenLayers.Lang[testLang]=="object"){lang=testLang;}}
if(!lang){OpenLayers.Console.warn('Failed to find OpenLayers.Lang.'+parts.join("-")+' dictionary, falling back to default language');lang=OpenLayers.Lang.defaultCode;}
OpenLayers.Lang.code=lang;},translate:function(key,context){var dictionary=OpenLayers.Lang[OpenLayers.Lang.getCode()];var message=dictionary[key];if(!message){message=key;}
if(context){message=OpenLayers.String.format(message,context);}
return message;}};OpenLayers.i18n=OpenLayers.Lang.translate;OpenLayers.Popup.Anchored=OpenLayers.Class(OpenLayers.Popup,{relativePosition:null,keepInMap:true,anchor:null,initialize:function(id,lonlat,contentSize,contentHTML,anchor,closeBox,closeBoxCallback){var newArguments=[id,lonlat,contentSize,contentHTML,closeBox,closeBoxCallback];OpenLayers.Popup.prototype.initialize.apply(this,newArguments);this.anchor=(anchor!=null)?anchor:{size:new OpenLayers.Size(0,0),offset:new OpenLayers.Pixel(0,0)};},destroy:function(){this.anchor=null;this.relativePosition=null;OpenLayers.Popup.prototype.destroy.apply(this,arguments);},show:function(){this.updatePosition();OpenLayers.Popup.prototype.show.apply(this,arguments);},moveTo:function(px){var oldRelativePosition=this.relativePosition;this.relativePosition=this.calculateRelativePosition(px);var newPx=this.calculateNewPx(px);var newArguments=new Array(newPx);OpenLayers.Popup.prototype.moveTo.apply(this,newArguments);if(this.relativePosition!=oldRelativePosition){this.updateRelativePosition();}},setSize:function(contentSize){OpenLayers.Popup.prototype.setSize.apply(this,arguments);if((this.lonlat)&&(this.map)){var px=this.map.getLayerPxFromLonLat(this.lonlat);this.moveTo(px);}},calculateRelativePosition:function(px){var lonlat=this.map.getLonLatFromLayerPx(px);var extent=this.map.getExtent();var quadrant=extent.determineQuadrant(lonlat);return OpenLayers.Bounds.oppositeQuadrant(quadrant);},updateRelativePosition:function(){},calculateNewPx:function(px){var newPx=px.offset(this.anchor.offset);var size=this.size||this.contentSize;var top=(this.relativePosition.charAt(0)=='t');newPx.y+=(top)?-(size.h+this.anchor.size.h):this.anchor.size.h;var left=(this.relativePosition.charAt(1)=='l');newPx.x+=(left)?-(size.w+this.anchor.size.w):this.anchor.size.w;return newPx;},CLASS_NAME:"OpenLayers.Popup.Anchored"});OpenLayers.Renderer.Canvas=OpenLayers.Class(OpenLayers.Renderer,{canvas:null,features:null,initialize:function(containerID){OpenLayers.Renderer.prototype.initialize.apply(this,arguments);this.root=document.createElement("canvas");this.container.appendChild(this.root);this.canvas=this.root.getContext("2d");this.features={};},eraseGeometry:function(geometry,featureId){this.eraseFeatures(this.features[featureId][0]);},supported:function(){var canvas=document.createElement("canvas");return!!canvas.getContext;},setSize:function(size){this.size=size.clone();this.root.style.width=size.w+"px";this.root.style.height=size.h+"px";this.root.width=size.w;this.root.height=size.h;this.resolution=null;},drawFeature:function(feature,style){style=style||feature.style;style=this.applyDefaultSymbolizer(style);this.features[feature.id]=[feature,style];this.redraw();},drawGeometry:function(geometry,style){var className=geometry.CLASS_NAME;if((className=="OpenLayers.Geometry.Collection")||(className=="OpenLayers.Geometry.MultiPoint")||(className=="OpenLayers.Geometry.MultiLineString")||(className=="OpenLayers.Geometry.MultiPolygon")){for(var i=0;i<geometry.components.length;i++){this.drawGeometry(geometry.components[i],style);}
return;}
switch(geometry.CLASS_NAME){case"OpenLayers.Geometry.Point":this.drawPoint(geometry,style);break;case"OpenLayers.Geometry.LineString":this.drawLineString(geometry,style);break;case"OpenLayers.Geometry.LinearRing":this.drawLinearRing(geometry,style);break;case"OpenLayers.Geometry.Polygon":this.drawPolygon(geometry,style);break;default:break;}},drawExternalGraphic:function(pt,style){var img=new Image();if(style.graphicTitle){img.title=style.graphicTitle;}
var width=style.graphicWidth||style.graphicHeight;var height=style.graphicHeight||style.graphicWidth;width=width?width:style.pointRadius*2;height=height?height:style.pointRadius*2;var xOffset=(style.graphicXOffset!=undefined)?style.graphicXOffset:-(0.5*width);var yOffset=(style.graphicYOffset!=undefined)?style.graphicYOffset:-(0.5*height);var context={img:img,x:(pt[0]+xOffset),y:(pt[1]+yOffset),width:width,height:height,opacity:style.graphicOpacity||style.fillOpacity,canvas:this.canvas};img.onload=OpenLayers.Function.bind(function(){this.canvas.globalAlpha=this.opacity;this.canvas.drawImage(this.img,this.x,this.y,this.width,this.height);},context);img.src=style.externalGraphic;},setCanvasStyle:function(type,style){if(type=="fill"){this.canvas.globalAlpha=style['fillOpacity'];this.canvas.fillStyle=style['fillColor'];}else if(type=="stroke"){this.canvas.globalAlpha=style['strokeOpacity'];this.canvas.strokeStyle=style['strokeColor'];this.canvas.lineWidth=style['strokeWidth'];}else{this.canvas.globalAlpha=0;this.canvas.lineWidth=1;}},drawPoint:function(geometry,style){if(style.graphic!==false){var pt=this.getLocalXY(geometry);if(style.externalGraphic){this.drawExternalGraphic(pt,style);}else{if(style.fill!==false){this.setCanvasStyle("fill",style);this.canvas.beginPath();this.canvas.arc(pt[0],pt[1],style.pointRadius,0,Math.PI*2,true);this.canvas.fill();}
if(style.stroke!==false){this.setCanvasStyle("stroke",style);this.canvas.beginPath();this.canvas.arc(pt[0],pt[1],style.pointRadius,0,Math.PI*2,true);this.canvas.stroke();this.setCanvasStyle("reset");}}}},drawLineString:function(geometry,style){if(style.stroke!==false){this.setCanvasStyle("stroke",style);this.canvas.beginPath();var start=this.getLocalXY(geometry.components[0]);this.canvas.moveTo(start[0],start[1]);for(var i=1;i<geometry.components.length;i++){var pt=this.getLocalXY(geometry.components[i]);this.canvas.lineTo(pt[0],pt[1]);}
this.canvas.stroke();}
this.setCanvasStyle("reset");},drawLinearRing:function(geometry,style){if(style.fill!==false){this.setCanvasStyle("fill",style);this.canvas.beginPath();var start=this.getLocalXY(geometry.components[0]);this.canvas.moveTo(start[0],start[1]);for(var i=1;i<geometry.components.length-1;i++){var pt=this.getLocalXY(geometry.components[i]);this.canvas.lineTo(pt[0],pt[1]);}
this.canvas.fill();}
if(style.stroke!==false){this.setCanvasStyle("stroke",style);this.canvas.beginPath();var start=this.getLocalXY(geometry.components[0]);this.canvas.moveTo(start[0],start[1]);for(var i=1;i<geometry.components.length;i++){var pt=this.getLocalXY(geometry.components[i]);this.canvas.lineTo(pt[0],pt[1]);}
this.canvas.stroke();}
this.setCanvasStyle("reset");},drawPolygon:function(geometry,style){this.drawLinearRing(geometry.components[0],style);for(var i=1;i<geometry.components.length;i++){this.drawLinearRing(geometry.components[i],{fillOpacity:0,strokeWidth:0,strokeOpacity:0,strokeColor:'#000000',fillColor:'#000000'});}},drawText:function(location,style){style=OpenLayers.Util.extend({fontColor:"#000000",labelAlign:"cm"},style);var pt=this.getLocalXY(location);this.setCanvasStyle("reset");this.canvas.fillStyle=style.fontColor;this.canvas.globalAlpha=style.fontOpacity||1.0;var fontStyle=style.fontWeight+" "+style.fontSize+" "+style.fontFamily;if(this.canvas.fillText){var labelAlign=OpenLayers.Renderer.Canvas.LABEL_ALIGN[style.labelAlign[0]]||"center";this.canvas.font=fontStyle;this.canvas.textAlign=labelAlign;this.canvas.fillText(style.label,pt[0],pt[1]);}else if(this.canvas.mozDrawText){this.canvas.mozTextStyle=fontStyle;var len=this.canvas.mozMeasureText(style.label);switch(style.labelAlign[0]){case"l":break;case"r":pt[0]-=len;break;case"c":default:pt[0]-=len/2;}
this.canvas.translate(pt[0],pt[1]);this.canvas.mozDrawText(style.label);this.canvas.translate(-1*pt[0],-1*pt[1]);}
this.setCanvasStyle("reset");},getLocalXY:function(point){var resolution=this.getResolution();var extent=this.extent;var x=(point.x/resolution+(-extent.left/resolution));var y=((extent.top/resolution)-point.y/resolution);return[x,y];},clear:function(){this.canvas.clearRect(0,0,this.root.width,this.root.height);this.features={};},getFeatureIdFromEvent:function(evt){var loc=this.map.getLonLatFromPixel(evt.xy);var resolution=this.getResolution();var bounds=new OpenLayers.Bounds(loc.lon-resolution*5,loc.lat-resolution*5,loc.lon+resolution*5,loc.lat+resolution*5);var geom=bounds.toGeometry();for(var feat in this.features){if(!this.features.hasOwnProperty(feat)){continue;}
if(this.features[feat][0].geometry.intersects(geom)){return feat;}}
return null;},eraseFeatures:function(features){if(!(features instanceof Array)){features=[features];}
for(var i=0;i<features.length;++i){delete this.features[features[i].id];}
this.redraw();},redraw:function(){if(!this.locked){this.canvas.clearRect(0,0,this.root.width,this.root.height);var labelMap=[];var feature,style;for(var id in this.features){if(!this.features.hasOwnProperty(id)){continue;}
feature=this.features[id][0];style=this.features[id][1];if(!feature.geometry){continue;}
this.drawGeometry(feature.geometry,style);if(style.label){labelMap.push([feature,style]);}}
var item;for(var i=0,len=labelMap.length;i<len;++i){item=labelMap[i];this.drawText(item[0].geometry.getCentroid(),item[1]);}}},CLASS_NAME:"OpenLayers.Renderer.Canvas"});OpenLayers.Renderer.Canvas.LABEL_ALIGN={"l":"left","r":"right"};OpenLayers.ElementsIndexer=OpenLayers.Class({maxZIndex:null,order:null,indices:null,compare:null,initialize:function(yOrdering){this.compare=yOrdering?OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER_Y_ORDER:OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER_DRAWING_ORDER;this.order=[];this.indices={};this.maxZIndex=0;},insert:function(newNode){if(this.exists(newNode)){this.remove(newNode);}
var nodeId=newNode.id;this.determineZIndex(newNode);var leftIndex=-1;var rightIndex=this.order.length;var middle;while(rightIndex-leftIndex>1){middle=parseInt((leftIndex+rightIndex)/2);var placement=this.compare(this,newNode,OpenLayers.Util.getElement(this.order[middle]));if(placement>0){leftIndex=middle;}else{rightIndex=middle;}}
this.order.splice(rightIndex,0,nodeId);this.indices[nodeId]=this.getZIndex(newNode);return this.getNextElement(rightIndex);},remove:function(node){var nodeId=node.id;var arrayIndex=OpenLayers.Util.indexOf(this.order,nodeId);if(arrayIndex>=0){this.order.splice(arrayIndex,1);delete this.indices[nodeId];if(this.order.length>0){var lastId=this.order[this.order.length-1];this.maxZIndex=this.indices[lastId];}else{this.maxZIndex=0;}}},clear:function(){this.order=[];this.indices={};this.maxZIndex=0;},exists:function(node){return(this.indices[node.id]!=null);},getZIndex:function(node){return node._style.graphicZIndex;},determineZIndex:function(node){var zIndex=node._style.graphicZIndex;if(zIndex==null){zIndex=this.maxZIndex;node._style.graphicZIndex=zIndex;}else if(zIndex>this.maxZIndex){this.maxZIndex=zIndex;}},getNextElement:function(index){var nextIndex=index+1;if(nextIndex<this.order.length){var nextElement=OpenLayers.Util.getElement(this.order[nextIndex]);if(nextElement==undefined){nextElement=this.getNextElement(nextIndex);}
return nextElement;}else{return null;}},CLASS_NAME:"OpenLayers.ElementsIndexer"});OpenLayers.ElementsIndexer.IndexingMethods={Z_ORDER:function(indexer,newNode,nextNode){var newZIndex=indexer.getZIndex(newNode);var returnVal=0;if(nextNode){var nextZIndex=indexer.getZIndex(nextNode);returnVal=newZIndex-nextZIndex;}
return returnVal;},Z_ORDER_DRAWING_ORDER:function(indexer,newNode,nextNode){var returnVal=OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER(indexer,newNode,nextNode);if(nextNode&&returnVal==0){returnVal=1;}
return returnVal;},Z_ORDER_Y_ORDER:function(indexer,newNode,nextNode){var returnVal=OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER(indexer,newNode,nextNode);if(nextNode&&returnVal===0){var result=nextNode._boundsBottom-newNode._boundsBottom;returnVal=(result===0)?1:result;}
return returnVal;}};OpenLayers.Renderer.Elements=OpenLayers.Class(OpenLayers.Renderer,{rendererRoot:null,root:null,vectorRoot:null,textRoot:null,xmlns:null,indexer:null,BACKGROUND_ID_SUFFIX:"_background",LABEL_ID_SUFFIX:"_label",initialize:function(containerID,options){OpenLayers.Renderer.prototype.initialize.apply(this,arguments);this.rendererRoot=this.createRenderRoot();this.root=this.createRoot("_root");this.vectorRoot=this.createRoot("_vroot");this.textRoot=this.createRoot("_troot");this.root.appendChild(this.vectorRoot);this.root.appendChild(this.textRoot);this.rendererRoot.appendChild(this.root);this.container.appendChild(this.rendererRoot);if(options&&(options.zIndexing||options.yOrdering)){this.indexer=new OpenLayers.ElementsIndexer(options.yOrdering);}},destroy:function(){this.clear();this.rendererRoot=null;this.root=null;this.xmlns=null;OpenLayers.Renderer.prototype.destroy.apply(this,arguments);},clear:function(){var child;var root=this.vectorRoot;if(root){while(child=root.firstChild){root.removeChild(child);}}
root=this.textRoot;if(root){while(child=root.firstChild){root.removeChild(child);}}
if(this.indexer){this.indexer.clear();}},getNodeType:function(geometry,style){},drawGeometry:function(geometry,style,featureId){var className=geometry.CLASS_NAME;var rendered=true;if((className=="OpenLayers.Geometry.Collection")||(className=="OpenLayers.Geometry.MultiPoint")||(className=="OpenLayers.Geometry.MultiLineString")||(className=="OpenLayers.Geometry.MultiPolygon")){for(var i=0,len=geometry.components.length;i<len;i++){rendered=this.drawGeometry(geometry.components[i],style,featureId)&&rendered;}
return rendered;};rendered=false;var removeBackground=false;if(style.display!="none"){if(style.backgroundGraphic){this.redrawBackgroundNode(geometry.id,geometry,style,featureId);}else{removeBackground=true;}
rendered=this.redrawNode(geometry.id,geometry,style,featureId);}
if(rendered==false){var node=document.getElementById(geometry.id);if(node){if(node._style.backgroundGraphic){removeBackground=true;}
node.parentNode.removeChild(node);}}
if(removeBackground){var node=document.getElementById(geometry.id+this.BACKGROUND_ID_SUFFIX);if(node){node.parentNode.removeChild(node);}}
return rendered;},redrawNode:function(id,geometry,style,featureId){style=this.applyDefaultSymbolizer(style);var node=this.nodeFactory(id,this.getNodeType(geometry,style));node._featureId=featureId;node._boundsBottom=geometry.getBounds().bottom;node._geometryClass=geometry.CLASS_NAME;node._style=style;var drawResult=this.drawGeometryNode(node,geometry,style);if(drawResult===false){return false;}
node=drawResult.node;if(this.indexer){var insert=this.indexer.insert(node);if(insert){this.vectorRoot.insertBefore(node,insert);}else{this.vectorRoot.appendChild(node);}}else{if(node.parentNode!==this.vectorRoot){this.vectorRoot.appendChild(node);}}
this.postDraw(node);return drawResult.complete;},redrawBackgroundNode:function(id,geometry,style,featureId){var backgroundStyle=OpenLayers.Util.extend({},style);backgroundStyle.externalGraphic=backgroundStyle.backgroundGraphic;backgroundStyle.graphicXOffset=backgroundStyle.backgroundXOffset;backgroundStyle.graphicYOffset=backgroundStyle.backgroundYOffset;backgroundStyle.graphicZIndex=backgroundStyle.backgroundGraphicZIndex;backgroundStyle.graphicWidth=backgroundStyle.backgroundWidth||backgroundStyle.graphicWidth;backgroundStyle.graphicHeight=backgroundStyle.backgroundHeight||backgroundStyle.graphicHeight;backgroundStyle.backgroundGraphic=null;backgroundStyle.backgroundXOffset=null;backgroundStyle.backgroundYOffset=null;backgroundStyle.backgroundGraphicZIndex=null;return this.redrawNode(id+this.BACKGROUND_ID_SUFFIX,geometry,backgroundStyle,null);},drawGeometryNode:function(node,geometry,style){style=style||node._style;var options={'isFilled':style.fill===undefined?true:style.fill,'isStroked':style.stroke===undefined?!!style.strokeWidth:style.stroke};var drawn;switch(geometry.CLASS_NAME){case"OpenLayers.Geometry.Point":if(style.graphic===false){options.isFilled=false;options.isStroked=false;}
drawn=this.drawPoint(node,geometry);break;case"OpenLayers.Geometry.LineString":options.isFilled=false;drawn=this.drawLineString(node,geometry);break;case"OpenLayers.Geometry.LinearRing":drawn=this.drawLinearRing(node,geometry);break;case"OpenLayers.Geometry.Polygon":drawn=this.drawPolygon(node,geometry);break;case"OpenLayers.Geometry.Surface":drawn=this.drawSurface(node,geometry);break;case"OpenLayers.Geometry.Rectangle":drawn=this.drawRectangle(node,geometry);break;default:break;}
node._options=options;if(drawn!=false){return{node:this.setStyle(node,style,options,geometry),complete:drawn};}else{return false;}},postDraw:function(node){},drawPoint:function(node,geometry){},drawLineString:function(node,geometry){},drawLinearRing:function(node,geometry){},drawPolygon:function(node,geometry){},drawRectangle:function(node,geometry){},drawCircle:function(node,geometry){},drawSurface:function(node,geometry){},removeText:function(featureId){var label=document.getElementById(featureId+this.LABEL_ID_SUFFIX);if(label){this.textRoot.removeChild(label);}},getFeatureIdFromEvent:function(evt){var target=evt.target;var useElement=target&&target.correspondingUseElement;var node=useElement?useElement:(target||evt.srcElement);var featureId=node._featureId;return featureId;},eraseGeometry:function(geometry,featureId){if((geometry.CLASS_NAME=="OpenLayers.Geometry.MultiPoint")||(geometry.CLASS_NAME=="OpenLayers.Geometry.MultiLineString")||(geometry.CLASS_NAME=="OpenLayers.Geometry.MultiPolygon")||(geometry.CLASS_NAME=="OpenLayers.Geometry.Collection")){for(var i=0,len=geometry.components.length;i<len;i++){this.eraseGeometry(geometry.components[i],featureId);}}else{var element=OpenLayers.Util.getElement(geometry.id);if(element&&element.parentNode){if(element.geometry){element.geometry.destroy();element.geometry=null;}
element.parentNode.removeChild(element);if(this.indexer){this.indexer.remove(element);}
if(element._style.backgroundGraphic){var backgroundId=geometry.id+this.BACKGROUND_ID_SUFFIX;var bElem=OpenLayers.Util.getElement(backgroundId);if(bElem&&bElem.parentNode){bElem.parentNode.removeChild(bElem);}}}}},nodeFactory:function(id,type){var node=OpenLayers.Util.getElement(id);if(node){if(!this.nodeTypeCompare(node,type)){node.parentNode.removeChild(node);node=this.nodeFactory(id,type);}}else{node=this.createNode(type,id);}
return node;},nodeTypeCompare:function(node,type){},createNode:function(type,id){},moveRoot:function(renderer){var root=this.root;if(renderer.root.parentNode==this.rendererRoot){root=renderer.root;}
root.parentNode.removeChild(root);renderer.rendererRoot.appendChild(root);},getRenderLayerId:function(){return this.root.parentNode.parentNode.id;},isComplexSymbol:function(graphicName){return(graphicName!="circle")&&!!graphicName;},CLASS_NAME:"OpenLayers.Renderer.Elements"});OpenLayers.Renderer.symbol={"star":[350,75,379,161,469,161,397,215,423,301,350,250,277,301,303,215,231,161,321,161,350,75],"cross":[4,0,6,0,6,4,10,4,10,6,6,6,6,10,4,10,4,6,0,6,0,4,4,4,4,0],"x":[0,0,25,0,50,35,75,0,100,0,65,50,100,100,75,100,50,65,25,100,0,100,35,50,0,0],"square":[0,0,0,1,1,1,1,0,0,0],"triangle":[0,10,10,10,5,0,0,10]};OpenLayers.Symbolizer.Line=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(config){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Symbolizer.Line"});OpenLayers.Symbolizer.Point=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(config){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Symbolizer.Point"});OpenLayers.Symbolizer.Polygon=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(config){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Symbolizer.Polygon"});OpenLayers.Symbolizer.Raster=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(config){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Symbolizer.Raster"});OpenLayers.Symbolizer.Text=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(config){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Symbolizer.Text"});OpenLayers.Tween=OpenLayers.Class({INTERVAL:10,easing:null,begin:null,finish:null,duration:null,callbacks:null,time:null,interval:null,playing:false,initialize:function(easing){this.easing=(easing)?easing:OpenLayers.Easing.Expo.easeOut;},start:function(begin,finish,duration,options){this.playing=true;this.begin=begin;this.finish=finish;this.duration=duration;this.callbacks=options.callbacks;this.time=0;if(this.interval){window.clearInterval(this.interval);this.interval=null;}
if(this.callbacks&&this.callbacks.start){this.callbacks.start.call(this,this.begin);}
this.interval=window.setInterval(OpenLayers.Function.bind(this.play,this),this.INTERVAL);},stop:function(){if(!this.playing){return;}
if(this.callbacks&&this.callbacks.done){this.callbacks.done.call(this,this.finish);}
window.clearInterval(this.interval);this.interval=null;this.playing=false;},play:function(){var value={};for(var i in this.begin){var b=this.begin[i];var f=this.finish[i];if(b==null||f==null||isNaN(b)||isNaN(f)){OpenLayers.Console.error('invalid value for Tween');}
var c=f-b;value[i]=this.easing.apply(this,[this.time,b,c,this.duration]);}
this.time++;if(this.callbacks&&this.callbacks.eachStep){this.callbacks.eachStep.call(this,value);}
if(this.time>this.duration){this.stop();}},CLASS_NAME:"OpenLayers.Tween"});OpenLayers.Easing={CLASS_NAME:"OpenLayers.Easing"};OpenLayers.Easing.Linear={easeIn:function(t,b,c,d){return c*t/d+b;},easeOut:function(t,b,c,d){return c*t/d+b;},easeInOut:function(t,b,c,d){return c*t/d+b;},CLASS_NAME:"OpenLayers.Easing.Linear"};OpenLayers.Easing.Expo={easeIn:function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOut:function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOut:function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},CLASS_NAME:"OpenLayers.Easing.Expo"};OpenLayers.Easing.Quad={easeIn:function(t,b,c,d){return c*(t/=d)*t+b;},easeOut:function(t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},CLASS_NAME:"OpenLayers.Easing.Quad"};OpenLayers.Control.ArgParser=OpenLayers.Class(OpenLayers.Control,{center:null,zoom:null,layers:null,displayProjection:null,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,arguments);},setMap:function(map){OpenLayers.Control.prototype.setMap.apply(this,arguments);for(var i=0,len=this.map.controls.length;i<len;i++){var control=this.map.controls[i];if((control!=this)&&(control.CLASS_NAME=="OpenLayers.Control.ArgParser")){if(control.displayProjection!=this.displayProjection){this.displayProjection=control.displayProjection;}
break;}}
if(i==this.map.controls.length){var args=OpenLayers.Util.getParameters();if(args.layers){this.layers=args.layers;this.map.events.register('addlayer',this,this.configureLayers);this.configureLayers();}
if(args.lat&&args.lon){this.center=new OpenLayers.LonLat(parseFloat(args.lon),parseFloat(args.lat));if(args.zoom){this.zoom=parseInt(args.zoom);}
this.map.events.register('changebaselayer',this,this.setCenter);this.setCenter();}}},setCenter:function(){if(this.map.baseLayer){this.map.events.unregister('changebaselayer',this,this.setCenter);if(this.displayProjection){this.center.transform(this.displayProjection,this.map.getProjectionObject());}
this.map.setCenter(this.center,this.zoom);}},configureLayers:function(){if(this.layers.length==this.map.layers.length){this.map.events.unregister('addlayer',this,this.configureLayers);for(var i=0,len=this.layers.length;i<len;i++){var layer=this.map.layers[i];var c=this.layers.charAt(i);if(c=="B"){this.map.setBaseLayer(layer);}else if((c=="T")||(c=="F")){layer.setVisibility(c=="T");}}}},CLASS_NAME:"OpenLayers.Control.ArgParser"});OpenLayers.Control.Attribution=OpenLayers.Class(OpenLayers.Control,{separator:", ",initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){this.map.events.un({"removelayer":this.updateAttribution,"addlayer":this.updateAttribution,"changelayer":this.updateAttribution,"changebaselayer":this.updateAttribution,scope:this});OpenLayers.Control.prototype.destroy.apply(this,arguments);},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);this.map.events.on({'changebaselayer':this.updateAttribution,'changelayer':this.updateAttribution,'addlayer':this.updateAttribution,'removelayer':this.updateAttribution,scope:this});this.updateAttribution();return this.div;},updateAttribution:function(){var attributions=[];if(this.map&&this.map.layers){for(var i=0,len=this.map.layers.length;i<len;i++){var layer=this.map.layers[i];if(layer.attribution&&layer.getVisibility()){if(OpenLayers.Util.indexOf(attributions,layer.attribution)===-1){attributions.push(layer.attribution);}}}
this.div.innerHTML=attributions.join(this.separator);}},CLASS_NAME:"OpenLayers.Control.Attribution"});OpenLayers.Control.Button=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){},CLASS_NAME:"OpenLayers.Control.Button"});OpenLayers.Control.LayerSwitcher=OpenLayers.Class(OpenLayers.Control,{roundedCorner:true,roundedCornerColor:"darkblue",layerStates:null,layersDiv:null,baseLayersDiv:null,baseLayers:null,dataLbl:null,dataLayersDiv:null,dataLayers:null,minimizeDiv:null,maximizeDiv:null,ascending:true,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,arguments);this.layerStates=[];},destroy:function(){OpenLayers.Event.stopObservingElement(this.div);OpenLayers.Event.stopObservingElement(this.minimizeDiv);OpenLayers.Event.stopObservingElement(this.maximizeDiv);this.clearLayersArray("base");this.clearLayersArray("data");this.map.events.un({"addlayer":this.redraw,"changelayer":this.redraw,"removelayer":this.redraw,"changebaselayer":this.redraw,scope:this});OpenLayers.Control.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Control.prototype.setMap.apply(this,arguments);this.map.events.on({"addlayer":this.redraw,"changelayer":this.redraw,"removelayer":this.redraw,"changebaselayer":this.redraw,scope:this});},draw:function(){OpenLayers.Control.prototype.draw.apply(this);this.loadContents();if(!this.outsideViewport){this.minimizeControl();}
this.redraw();return this.div;},clearLayersArray:function(layersType){var layers=this[layersType+"Layers"];if(layers){for(var i=0,len=layers.length;i<len;i++){var layer=layers[i];OpenLayers.Event.stopObservingElement(layer.inputElem);OpenLayers.Event.stopObservingElement(layer.labelSpan);}}
this[layersType+"LayersDiv"].innerHTML="";this[layersType+"Layers"]=[];},checkRedraw:function(){var redraw=false;if(!this.layerStates.length||(this.map.layers.length!=this.layerStates.length)){redraw=true;}else{for(var i=0,len=this.layerStates.length;i<len;i++){var layerState=this.layerStates[i];var layer=this.map.layers[i];if((layerState.name!=layer.name)||(layerState.inRange!=layer.inRange)||(layerState.id!=layer.id)||(layerState.visibility!=layer.visibility)){redraw=true;break;}}}
return redraw;},redraw:function(){if(!this.checkRedraw()){return this.div;}
this.clearLayersArray("base");this.clearLayersArray("data");var containsOverlays=false;var containsBaseLayers=false;var len=this.map.layers.length;this.layerStates=new Array(len);for(var i=0;i<len;i++){var layer=this.map.layers[i];this.layerStates[i]={'name':layer.name,'visibility':layer.visibility,'inRange':layer.inRange,'id':layer.id};}
var layers=this.map.layers.slice();if(!this.ascending){layers.reverse();}
for(var i=0,len=layers.length;i<len;i++){var layer=layers[i];var baseLayer=layer.isBaseLayer;if(layer.displayInLayerSwitcher){if(baseLayer){containsBaseLayers=true;}else{containsOverlays=true;}
var checked=(baseLayer)?(layer==this.map.baseLayer):layer.getVisibility();var inputElem=document.createElement("input");inputElem.id=this.id+"_input_"+layer.name;inputElem.name=(baseLayer)?this.id+"_baseLayers":layer.name;inputElem.type=(baseLayer)?"radio":"checkbox";inputElem.value=layer.name;inputElem.checked=checked;inputElem.defaultChecked=checked;if(!baseLayer&&!layer.inRange){inputElem.disabled=true;}
var context={'inputElem':inputElem,'layer':layer,'layerSwitcher':this};OpenLayers.Event.observe(inputElem,"mouseup",OpenLayers.Function.bindAsEventListener(this.onInputClick,context));var labelSpan=document.createElement("span");OpenLayers.Element.addClass(labelSpan,"labelSpan")
if(!baseLayer&&!layer.inRange){labelSpan.style.color="gray";}
labelSpan.innerHTML=layer.name;labelSpan.style.verticalAlign=(baseLayer)?"bottom":"baseline";OpenLayers.Event.observe(labelSpan,"click",OpenLayers.Function.bindAsEventListener(this.onInputClick,context));var br=document.createElement("br");var groupArray=(baseLayer)?this.baseLayers:this.dataLayers;groupArray.push({'layer':layer,'inputElem':inputElem,'labelSpan':labelSpan});var groupDiv=(baseLayer)?this.baseLayersDiv:this.dataLayersDiv;groupDiv.appendChild(inputElem);groupDiv.appendChild(labelSpan);groupDiv.appendChild(br);}}
this.dataLbl.style.display=(containsOverlays)?"":"none";this.baseLbl.style.display=(containsBaseLayers)?"":"none";return this.div;},onInputClick:function(e){if(!this.inputElem.disabled){if(this.inputElem.type=="radio"){this.inputElem.checked=true;this.layer.map.setBaseLayer(this.layer);}else{this.inputElem.checked=!this.inputElem.checked;this.layerSwitcher.updateMap();}}
OpenLayers.Event.stop(e);},onLayerClick:function(e){this.updateMap();},updateMap:function(){for(var i=0,len=this.baseLayers.length;i<len;i++){var layerEntry=this.baseLayers[i];if(layerEntry.inputElem.checked){this.map.setBaseLayer(layerEntry.layer,false);}}
for(var i=0,len=this.dataLayers.length;i<len;i++){var layerEntry=this.dataLayers[i];layerEntry.layer.setVisibility(layerEntry.inputElem.checked);}},maximizeControl:function(e){this.div.style.width="";this.div.style.height="";this.showControls(false);if(e!=null){OpenLayers.Event.stop(e);}},minimizeControl:function(e){this.div.style.width="0px";this.div.style.height="0px";this.showControls(true);if(e!=null){OpenLayers.Event.stop(e);}},showControls:function(minimize){this.maximizeDiv.style.display=minimize?"":"none";this.minimizeDiv.style.display=minimize?"none":"";this.layersDiv.style.display=minimize?"none":"";},loadContents:function(){OpenLayers.Event.observe(this.div,"mouseup",OpenLayers.Function.bindAsEventListener(this.mouseUp,this));OpenLayers.Event.observe(this.div,"click",this.ignoreEvent);OpenLayers.Event.observe(this.div,"mousedown",OpenLayers.Function.bindAsEventListener(this.mouseDown,this));OpenLayers.Event.observe(this.div,"dblclick",this.ignoreEvent);this.layersDiv=document.createElement("div");this.layersDiv.id=this.id+"_layersDiv";OpenLayers.Element.addClass(this.layersDiv,"layersDiv");this.baseLbl=document.createElement("div");this.baseLbl.innerHTML=OpenLayers.i18n("baseLayer");OpenLayers.Element.addClass(this.baseLbl,"baseLbl");this.baseLayersDiv=document.createElement("div");OpenLayers.Element.addClass(this.baseLayersDiv,"baseLayersDiv");this.dataLbl=document.createElement("div");this.dataLbl.innerHTML=OpenLayers.i18n("overlays");OpenLayers.Element.addClass(this.dataLbl,"dataLbl");this.dataLayersDiv=document.createElement("div");OpenLayers.Element.addClass(this.dataLayersDiv,"dataLayersDiv");if(this.ascending){this.layersDiv.appendChild(this.baseLbl);this.layersDiv.appendChild(this.baseLayersDiv);this.layersDiv.appendChild(this.dataLbl);this.layersDiv.appendChild(this.dataLayersDiv);}else{this.layersDiv.appendChild(this.dataLbl);this.layersDiv.appendChild(this.dataLayersDiv);this.layersDiv.appendChild(this.baseLbl);this.layersDiv.appendChild(this.baseLayersDiv);}
this.div.appendChild(this.layersDiv);if(this.roundedCorner){OpenLayers.Rico.Corner.round(this.div,{corners:"tl bl",bgColor:"transparent",color:this.roundedCornerColor,blend:false});OpenLayers.Rico.Corner.changeOpacity(this.layersDiv,0.75);}
var imgLocation=OpenLayers.Util.getImagesLocation();var sz=new OpenLayers.Size(18,18);var img=imgLocation+'layer-switcher-maximize.png';this.maximizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MaximizeDiv",null,sz,img,"absolute");OpenLayers.Element.addClass(this.maximizeDiv,"maximizeDiv");this.maximizeDiv.style.display="none";OpenLayers.Event.observe(this.maximizeDiv,"click",OpenLayers.Function.bindAsEventListener(this.maximizeControl,this));this.div.appendChild(this.maximizeDiv);var img=imgLocation+'layer-switcher-minimize.png';var sz=new OpenLayers.Size(18,18);this.minimizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MinimizeDiv",null,sz,img,"absolute");OpenLayers.Element.addClass(this.minimizeDiv,"minimizeDiv");this.minimizeDiv.style.display="none";OpenLayers.Event.observe(this.minimizeDiv,"click",OpenLayers.Function.bindAsEventListener(this.minimizeControl,this));this.div.appendChild(this.minimizeDiv);},ignoreEvent:function(evt){OpenLayers.Event.stop(evt);},mouseDown:function(evt){this.isMouseDown=true;this.ignoreEvent(evt);},mouseUp:function(evt){if(this.isMouseDown){this.isMouseDown=false;this.ignoreEvent(evt);}},CLASS_NAME:"OpenLayers.Control.LayerSwitcher"});OpenLayers.Control.Pan=OpenLayers.Class(OpenLayers.Control,{slideFactor:50,direction:null,type:OpenLayers.Control.TYPE_BUTTON,initialize:function(direction,options){this.direction=direction;this.CLASS_NAME+=this.direction;OpenLayers.Control.prototype.initialize.apply(this,[options]);},trigger:function(){switch(this.direction){case OpenLayers.Control.Pan.NORTH:this.map.pan(0,-this.slideFactor);break;case OpenLayers.Control.Pan.SOUTH:this.map.pan(0,this.slideFactor);break;case OpenLayers.Control.Pan.WEST:this.map.pan(-this.slideFactor,0);break;case OpenLayers.Control.Pan.EAST:this.map.pan(this.slideFactor,0);break;}},CLASS_NAME:"OpenLayers.Control.Pan"});OpenLayers.Control.Pan.NORTH="North";OpenLayers.Control.Pan.SOUTH="South";OpenLayers.Control.Pan.EAST="East";OpenLayers.Control.Pan.WEST="West";OpenLayers.Control.PanZoom=OpenLayers.Class(OpenLayers.Control,{slideFactor:50,slideRatio:null,buttons:null,position:null,initialize:function(options){this.position=new OpenLayers.Pixel(OpenLayers.Control.PanZoom.X,OpenLayers.Control.PanZoom.Y);OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){OpenLayers.Control.prototype.destroy.apply(this,arguments);this.removeButtons();this.buttons=null;this.position=null;},draw:function(px){OpenLayers.Control.prototype.draw.apply(this,arguments);px=this.position;this.buttons=[];var sz=new OpenLayers.Size(18,18);var centered=new OpenLayers.Pixel(px.x+sz.w/2,px.y);this._addButton("panup","north-mini.png",centered,sz);px.y=centered.y+sz.h;this._addButton("panleft","west-mini.png",px,sz);this._addButton("panright","east-mini.png",px.add(sz.w,0),sz);this._addButton("pandown","south-mini.png",centered.add(0,sz.h*2),sz);this._addButton("zoomin","zoom-plus-mini.png",centered.add(0,sz.h*3+5),sz);this._addButton("zoomworld","zoom-world-mini.png",centered.add(0,sz.h*4+5),sz);this._addButton("zoomout","zoom-minus-mini.png",centered.add(0,sz.h*5+5),sz);return this.div;},_addButton:function(id,img,xy,sz){var imgLocation=OpenLayers.Util.getImagesLocation()+img;var btn=OpenLayers.Util.createAlphaImageDiv(this.id+"_"+id,xy,sz,imgLocation,"absolute");this.div.appendChild(btn);OpenLayers.Event.observe(btn,"mousedown",OpenLayers.Function.bindAsEventListener(this.buttonDown,btn));OpenLayers.Event.observe(btn,"dblclick",OpenLayers.Function.bindAsEventListener(this.doubleClick,btn));OpenLayers.Event.observe(btn,"click",OpenLayers.Function.bindAsEventListener(this.doubleClick,btn));btn.action=id;btn.map=this.map;if(!this.slideRatio){var slideFactorPixels=this.slideFactor;var getSlideFactor=function(){return slideFactorPixels;};}else{var slideRatio=this.slideRatio;var getSlideFactor=function(dim){return this.map.getSize()[dim]*slideRatio;};}
btn.getSlideFactor=getSlideFactor;this.buttons.push(btn);return btn;},_removeButton:function(btn){OpenLayers.Event.stopObservingElement(btn);btn.map=null;btn.getSlideFactor=null;this.div.removeChild(btn);OpenLayers.Util.removeItem(this.buttons,btn);},removeButtons:function(){for(var i=this.buttons.length-1;i>=0;--i){this._removeButton(this.buttons[i]);}},doubleClick:function(evt){OpenLayers.Event.stop(evt);return false;},buttonDown:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
switch(this.action){case"panup":this.map.pan(0,-this.getSlideFactor("h"));break;case"pandown":this.map.pan(0,this.getSlideFactor("h"));break;case"panleft":this.map.pan(-this.getSlideFactor("w"),0);break;case"panright":this.map.pan(this.getSlideFactor("w"),0);break;case"zoomin":this.map.zoomIn();break;case"zoomout":this.map.zoomOut();break;case"zoomworld":this.map.zoomToMaxExtent();break;}
OpenLayers.Event.stop(evt);},CLASS_NAME:"OpenLayers.Control.PanZoom"});OpenLayers.Control.PanZoom.X=4;OpenLayers.Control.PanZoom.Y=4;OpenLayers.Control.Panel=OpenLayers.Class(OpenLayers.Control,{controls:null,autoActivate:true,defaultControl:null,saveState:false,activeState:null,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.controls=[];this.activeState={};},destroy:function(){OpenLayers.Control.prototype.destroy.apply(this,arguments);for(var i=this.controls.length-1;i>=0;i--){if(this.controls[i].events){this.controls[i].events.un({"activate":this.redraw,"deactivate":this.redraw,scope:this});}
OpenLayers.Event.stopObservingElement(this.controls[i].panel_div);this.controls[i].panel_div=null;}
this.activeState=null;},activate:function(){if(OpenLayers.Control.prototype.activate.apply(this,arguments)){var control;for(var i=0,len=this.controls.length;i<len;i++){control=this.controls[i];if(control===this.defaultControl||(this.saveState&&this.activeState[control.id])){control.activate();}}
if(this.saveState===true){this.defaultControl=null;}
this.redraw();return true;}else{return false;}},deactivate:function(){if(OpenLayers.Control.prototype.deactivate.apply(this,arguments)){var control;for(var i=0,len=this.controls.length;i<len;i++){control=this.controls[i];this.activeState[control.id]=control.deactivate();}
this.redraw();return true;}else{return false;}},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);this.addControlsToMap(this.controls);return this.div;},redraw:function(){for(var l=this.div.childNodes.length,i=l-1;i>=0;i--){this.div.removeChild(this.div.childNodes[i]);}
this.div.innerHTML="";if(this.active){for(var i=0,len=this.controls.length;i<len;i++){var element=this.controls[i].panel_div;if(this.controls[i].active){element.className=this.controls[i].displayClass+"ItemActive";}else{element.className=this.controls[i].displayClass+"ItemInactive";}
this.div.appendChild(element);}}},activateControl:function(control){if(!this.active){return false;}
if(control.type==OpenLayers.Control.TYPE_BUTTON){control.trigger();this.redraw();return;}
if(control.type==OpenLayers.Control.TYPE_TOGGLE){if(control.active){control.deactivate();}else{control.activate();}
return;}
var c;for(var i=0,len=this.controls.length;i<len;i++){c=this.controls[i];if(c!=control&&(c.type===OpenLayers.Control.TYPE_TOOL||c.type==null)){c.deactivate();}}
control.activate();},addControls:function(controls){if(!(controls instanceof Array)){controls=[controls];}
this.controls=this.controls.concat(controls);for(var i=0,len=controls.length;i<len;i++){var element=document.createElement("div");controls[i].panel_div=element;if(controls[i].title!=""){controls[i].panel_div.title=controls[i].title;}
OpenLayers.Event.observe(controls[i].panel_div,"click",OpenLayers.Function.bind(this.onClick,this,controls[i]));OpenLayers.Event.observe(controls[i].panel_div,"dblclick",OpenLayers.Function.bind(this.onDoubleClick,this,controls[i]));OpenLayers.Event.observe(controls[i].panel_div,"mousedown",OpenLayers.Function.bindAsEventListener(OpenLayers.Event.stop));}
if(this.map){this.addControlsToMap(controls);this.redraw();}},addControlsToMap:function(controls){var control;for(var i=0,len=controls.length;i<len;i++){control=controls[i];if(control.autoActivate===true){control.autoActivate=false;this.map.addControl(control);control.autoActivate=true;}else{this.map.addControl(control);control.deactivate();}
control.events.on({"activate":this.redraw,"deactivate":this.redraw,scope:this});}},onClick:function(ctrl,evt){OpenLayers.Event.stop(evt?evt:window.event);this.activateControl(ctrl);},onDoubleClick:function(ctrl,evt){OpenLayers.Event.stop(evt?evt:window.event);},getControlsBy:function(property,match){var test=(typeof match.test=="function");var found=OpenLayers.Array.filter(this.controls,function(item){return item[property]==match||(test&&match.test(item[property]));});return found;},getControlsByName:function(match){return this.getControlsBy("name",match);},getControlsByClass:function(match){return this.getControlsBy("CLASS_NAME",match);},CLASS_NAME:"OpenLayers.Control.Panel"});OpenLayers.Control.ScaleLine=OpenLayers.Class(OpenLayers.Control,{maxWidth:100,topOutUnits:"km",topInUnits:"m",bottomOutUnits:"mi",bottomInUnits:"ft",eTop:null,eBottom:null,geodesic:false,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,[options]);},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);if(!this.eTop){this.eTop=document.createElement("div");this.eTop.className=this.displayClass+"Top";var theLen=this.topInUnits.length;this.div.appendChild(this.eTop);if((this.topOutUnits=="")||(this.topInUnits=="")){this.eTop.style.visibility="hidden";}else{this.eTop.style.visibility="visible";}
this.eBottom=document.createElement("div");this.eBottom.className=this.displayClass+"Bottom";this.div.appendChild(this.eBottom);if((this.bottomOutUnits=="")||(this.bottomInUnits=="")){this.eBottom.style.visibility="hidden";}else{this.eBottom.style.visibility="visible";}}
this.map.events.register('moveend',this,this.update);this.update();return this.div;},getBarLen:function(maxLen){var digits=parseInt(Math.log(maxLen)/Math.log(10));var pow10=Math.pow(10,digits);var firstChar=parseInt(maxLen/pow10);var barLen;if(firstChar>5){barLen=5;}else if(firstChar>2){barLen=2;}else{barLen=1;}
return barLen*pow10;},update:function(){var res=this.map.getResolution();if(!res){return;}
var curMapUnits=this.map.getUnits();var inches=OpenLayers.INCHES_PER_UNIT;var maxSizeData=this.maxWidth*res*inches[curMapUnits];var geodesicRatio=1;if(this.geodesic===true){var maxSizeGeodesic=(this.map.getGeodesicPixelSize().w||0.000001)*this.maxWidth;var maxSizeKilometers=maxSizeData/inches["km"];geodesicRatio=maxSizeGeodesic/maxSizeKilometers;maxSizeData*=geodesicRatio;}
var topUnits;var bottomUnits;if(maxSizeData>100000){topUnits=this.topOutUnits;bottomUnits=this.bottomOutUnits;}else{topUnits=this.topInUnits;bottomUnits=this.bottomInUnits;}
var topMax=maxSizeData/inches[topUnits];var bottomMax=maxSizeData/inches[bottomUnits];var topRounded=this.getBarLen(topMax);var bottomRounded=this.getBarLen(bottomMax);topMax=topRounded/inches[curMapUnits]*inches[topUnits];bottomMax=bottomRounded/inches[curMapUnits]*inches[bottomUnits];var topPx=topMax/res/geodesicRatio;var bottomPx=bottomMax/res/geodesicRatio;if(this.eBottom.style.visibility=="visible"){this.eBottom.style.width=Math.round(bottomPx)+"px";this.eBottom.innerHTML=bottomRounded+" "+bottomUnits;}
if(this.eTop.style.visibility=="visible"){this.eTop.style.width=Math.round(topPx)+"px";this.eTop.innerHTML=topRounded+" "+topUnits;}},CLASS_NAME:"OpenLayers.Control.ScaleLine"});OpenLayers.Control.ZoomIn=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){this.map.zoomIn();},CLASS_NAME:"OpenLayers.Control.ZoomIn"});OpenLayers.Control.ZoomOut=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){this.map.zoomOut();},CLASS_NAME:"OpenLayers.Control.ZoomOut"});OpenLayers.Control.ZoomToMaxExtent=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){if(this.map){this.map.zoomToMaxExtent();}},CLASS_NAME:"OpenLayers.Control.ZoomToMaxExtent"});OpenLayers.Event={observers:false,KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,element:function(event){return event.target||event.srcElement;},isLeftClick:function(event){return(((event.which)&&(event.which==1))||((event.button)&&(event.button==1)));},isRightClick:function(event){return(((event.which)&&(event.which==3))||((event.button)&&(event.button==2)));},stop:function(event,allowDefault){if(!allowDefault){if(event.preventDefault){event.preventDefault();}else{event.returnValue=false;}}
if(event.stopPropagation){event.stopPropagation();}else{event.cancelBubble=true;}},findElement:function(event,tagName){var element=OpenLayers.Event.element(event);while(element.parentNode&&(!element.tagName||(element.tagName.toUpperCase()!=tagName.toUpperCase()))){element=element.parentNode;}
return element;},observe:function(elementParam,name,observer,useCapture){var element=OpenLayers.Util.getElement(elementParam);useCapture=useCapture||false;if(name=='keypress'&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||element.attachEvent)){name='keydown';}
if(!this.observers){this.observers={};}
if(!element._eventCacheID){var idPrefix="eventCacheID_";if(element.id){idPrefix=element.id+"_"+idPrefix;}
element._eventCacheID=OpenLayers.Util.createUniqueID(idPrefix);}
var cacheID=element._eventCacheID;if(!this.observers[cacheID]){this.observers[cacheID]=[];}
this.observers[cacheID].push({'element':element,'name':name,'observer':observer,'useCapture':useCapture});if(element.addEventListener){element.addEventListener(name,observer,useCapture);}else if(element.attachEvent){element.attachEvent('on'+name,observer);}},stopObservingElement:function(elementParam){var element=OpenLayers.Util.getElement(elementParam);var cacheID=element._eventCacheID;this._removeElementObservers(OpenLayers.Event.observers[cacheID]);},_removeElementObservers:function(elementObservers){if(elementObservers){for(var i=elementObservers.length-1;i>=0;i--){var entry=elementObservers[i];var args=new Array(entry.element,entry.name,entry.observer,entry.useCapture);var removed=OpenLayers.Event.stopObserving.apply(this,args);}}},stopObserving:function(elementParam,name,observer,useCapture){useCapture=useCapture||false;var element=OpenLayers.Util.getElement(elementParam);var cacheID=element._eventCacheID;if(name=='keypress'){if(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||element.detachEvent){name='keydown';}}
var foundEntry=false;var elementObservers=OpenLayers.Event.observers[cacheID];if(elementObservers){var i=0;while(!foundEntry&&i<elementObservers.length){var cacheEntry=elementObservers[i];if((cacheEntry.name==name)&&(cacheEntry.observer==observer)&&(cacheEntry.useCapture==useCapture)){elementObservers.splice(i,1);if(elementObservers.length==0){delete OpenLayers.Event.observers[cacheID];}
foundEntry=true;break;}
i++;}}
if(foundEntry){if(element.removeEventListener){element.removeEventListener(name,observer,useCapture);}else if(element&&element.detachEvent){element.detachEvent('on'+name,observer);}}
return foundEntry;},unloadCache:function(){if(OpenLayers.Event&&OpenLayers.Event.observers){for(var cacheID in OpenLayers.Event.observers){var elementObservers=OpenLayers.Event.observers[cacheID];OpenLayers.Event._removeElementObservers.apply(this,[elementObservers]);}
OpenLayers.Event.observers=false;}},CLASS_NAME:"OpenLayers.Event"};OpenLayers.Event.observe(window,'unload',OpenLayers.Event.unloadCache,false);if(window.Event){OpenLayers.Util.applyDefaults(window.Event,OpenLayers.Event);}else{var Event=OpenLayers.Event;}
OpenLayers.Events=OpenLayers.Class({BROWSER_EVENTS:["mouseover","mouseout","mousedown","mouseup","mousemove","click","dblclick","rightclick","dblrightclick","resize","focus","blur"],listeners:null,object:null,element:null,eventTypes:null,eventHandler:null,fallThrough:null,includeXY:false,clearMouseListener:null,initialize:function(object,element,eventTypes,fallThrough,options){OpenLayers.Util.extend(this,options);this.object=object;this.fallThrough=fallThrough;this.listeners={};this.eventHandler=OpenLayers.Function.bindAsEventListener(this.handleBrowserEvent,this);this.clearMouseListener=OpenLayers.Function.bind(this.clearMouseCache,this);this.eventTypes=[];if(eventTypes!=null){for(var i=0,len=eventTypes.length;i<len;i++){this.addEventType(eventTypes[i]);}}
if(element!=null){this.attachToElement(element);}},destroy:function(){if(this.element){OpenLayers.Event.stopObservingElement(this.element);if(this.element.hasScrollEvent){OpenLayers.Event.stopObserving(window,"scroll",this.clearMouseListener);}}
this.element=null;this.listeners=null;this.object=null;this.eventTypes=null;this.fallThrough=null;this.eventHandler=null;},addEventType:function(eventName){if(!this.listeners[eventName]){this.eventTypes.push(eventName);this.listeners[eventName]=[];}},attachToElement:function(element){if(this.element){OpenLayers.Event.stopObservingElement(this.element);}
this.element=element;for(var i=0,len=this.BROWSER_EVENTS.length;i<len;i++){var eventType=this.BROWSER_EVENTS[i];this.addEventType(eventType);OpenLayers.Event.observe(element,eventType,this.eventHandler);}
OpenLayers.Event.observe(element,"dragstart",OpenLayers.Event.stop);},on:function(object){for(var type in object){if(type!="scope"){this.register(type,object.scope,object[type]);}}},register:function(type,obj,func){if((func!=null)&&(OpenLayers.Util.indexOf(this.eventTypes,type)!=-1)){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];listeners.push({obj:obj,func:func});}},registerPriority:function(type,obj,func){if(func!=null){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];if(listeners!=null){listeners.unshift({obj:obj,func:func});}}},un:function(object){for(var type in object){if(type!="scope"){this.unregister(type,object.scope,object[type]);}}},unregister:function(type,obj,func){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];if(listeners!=null){for(var i=0,len=listeners.length;i<len;i++){if(listeners[i].obj==obj&&listeners[i].func==func){listeners.splice(i,1);break;}}}},remove:function(type){if(this.listeners[type]!=null){this.listeners[type]=[];}},triggerEvent:function(type,evt){var listeners=this.listeners[type];if(!listeners||listeners.length==0){return;}
if(evt==null){evt={};}
evt.object=this.object;evt.element=this.element;if(!evt.type){evt.type=type;}
var listeners=listeners.slice(),continueChain;for(var i=0,len=listeners.length;i<len;i++){var callback=listeners[i];continueChain=callback.func.apply(callback.obj,[evt]);if((continueChain!=undefined)&&(continueChain==false)){break;}}
if(!this.fallThrough){OpenLayers.Event.stop(evt,true);}
return continueChain;},handleBrowserEvent:function(evt){var type=evt.type,listeners=this.listeners[type];if(!listeners||listeners.length==0){return;}
if(this.includeXY){evt.xy=this.getMousePosition(evt);}
this.triggerEvent(type,evt);},clearMouseCache:function(){this.element.scrolls=null;this.element.lefttop=null;this.element.offsets=null;},getMousePosition:function(evt){if(!this.includeXY){this.clearMouseCache();}else if(!this.element.hasScrollEvent){OpenLayers.Event.observe(window,"scroll",this.clearMouseListener);this.element.hasScrollEvent=true;}
if(!this.element.scrolls){var viewportElement=OpenLayers.Util.getViewportElement();this.element.scrolls=[viewportElement.scrollLeft,viewportElement.scrollTop];}
if(!this.element.lefttop){this.element.lefttop=[(document.documentElement.clientLeft||0),(document.documentElement.clientTop||0)];}
if(!this.element.offsets){this.element.offsets=OpenLayers.Util.pagePosition(this.element);}
return new OpenLayers.Pixel((evt.clientX+this.element.scrolls[0])-this.element.offsets[0]
-this.element.lefttop[0],(evt.clientY+this.element.scrolls[1])-this.element.offsets[1]
-this.element.lefttop[1]);},CLASS_NAME:"OpenLayers.Events"});OpenLayers.Format=OpenLayers.Class({options:null,externalProjection:null,internalProjection:null,data:null,keepData:false,initialize:function(options){OpenLayers.Util.extend(this,options);this.options=options;},destroy:function(){},read:function(data){OpenLayers.Console.userError(OpenLayers.i18n("readNotImplemented"));},write:function(object){OpenLayers.Console.userError(OpenLayers.i18n("writeNotImplemented"));},CLASS_NAME:"OpenLayers.Format"});OpenLayers.Lang.en={'unhandledRequest':"Unhandled request return ${statusText}",'permalink':"Permalink",'overlays':"Overlays",'baseLayer':"Base Layer",'sameProjection':"The overview map only works when it is in the same projection as the main map",'readNotImplemented':"Read not implemented.",'writeNotImplemented':"Write not implemented.",'noFID':"Can't update a feature for which there is no FID.",'errorLoadingGML':"Error in loading GML file ${url}",'browserNotSupported':"Your browser does not support vector rendering. Currently supported renderers are:\n${renderers}",'componentShouldBe':"addFeatures : component should be an ${geomType}",'getFeatureError':"getFeatureFromEvent called on layer with no renderer. This usually means you "+"destroyed a layer, but not some handler which is associated with it.",'minZoomLevelError':"The minZoomLevel property is only intended for use "+"with the FixedZoomLevels-descendent layers. That this "+"wfs layer checks for minZoomLevel is a relic of the"+"past. We cannot, however, remove it without possibly "+"breaking OL based applications that may depend on it."+" Therefore we are deprecating it -- the minZoomLevel "+"check below will be removed at 3.0. Please instead "+"use min/max resolution setting as described here: "+"http://trac.openlayers.org/wiki/SettingZoomLevels",'commitSuccess':"WFS Transaction: SUCCESS ${response}",'commitFailed':"WFS Transaction: FAILED ${response}",'googleWarning':"The Google Layer was unable to load correctly.<br><br>"+"To get rid of this message, select a new BaseLayer "+"in the layer switcher in the upper-right corner.<br><br>"+"Most likely, this is because the Google Maps library "+"script was either not included, or does not contain the "+"correct API key for your site.<br><br>"+"Developers: For help getting this working correctly, "+"<a href='http://trac.openlayers.org/wiki/Google' "+"target='_blank'>click here</a>",'getLayerWarning':"The ${layerType} Layer was unable to load correctly.<br><br>"+"To get rid of this message, select a new BaseLayer "+"in the layer switcher in the upper-right corner.<br><br>"+"Most likely, this is because the ${layerLib} library "+"script was not correctly included.<br><br>"+"Developers: For help getting this working correctly, "+"<a href='http://trac.openlayers.org/wiki/${layerLib}' "+"target='_blank'>click here</a>",'scale':"Scale = 1 : ${scaleDenom}",'W':'W','E':'E','N':'N','S':'S','graticule':'Graticule','layerAlreadyAdded':"You tried to add the layer: ${layerName} to the map, but it has already been added",'reprojectDeprecated':"You are using the 'reproject' option "+"on the ${layerName} layer. This option is deprecated: "+"its use was designed to support displaying data over commercial "+"basemaps, but that functionality should now be achieved by using "+"Spherical Mercator support. More information is available from "+"http://trac.openlayers.org/wiki/SphericalMercator.",'methodDeprecated':"This method has been deprecated and will be removed in 3.0. "+"Please use ${newMethod} instead.",'boundsAddError':"You must pass both x and y values to the add function.",'lonlatAddError':"You must pass both lon and lat values to the add function.",'pixelAddError':"You must pass both x and y values to the add function.",'unsupportedGeometryType':"Unsupported geometry type: ${geomType}",'pagePositionFailed':"OpenLayers.Util.pagePosition failed: element with id ${elemId} may be misplaced.",'filterEvaluateNotImplemented':"evaluate is not implemented for this filter type.",'end':''};OpenLayers.Popup.AnchoredBubble=OpenLayers.Class(OpenLayers.Popup.Anchored,{rounded:false,initialize:function(id,lonlat,contentSize,contentHTML,anchor,closeBox,closeBoxCallback){this.padding=new OpenLayers.Bounds(0,OpenLayers.Popup.AnchoredBubble.CORNER_SIZE,0,OpenLayers.Popup.AnchoredBubble.CORNER_SIZE);OpenLayers.Popup.Anchored.prototype.initialize.apply(this,arguments);},draw:function(px){OpenLayers.Popup.Anchored.prototype.draw.apply(this,arguments);this.setContentHTML();this.setBackgroundColor();this.setOpacity();return this.div;},updateRelativePosition:function(){this.setRicoCorners();},setSize:function(contentSize){OpenLayers.Popup.Anchored.prototype.setSize.apply(this,arguments);this.setRicoCorners();},setBackgroundColor:function(color){if(color!=undefined){this.backgroundColor=color;}
if(this.div!=null){if(this.contentDiv!=null){this.div.style.background="transparent";OpenLayers.Rico.Corner.changeColor(this.groupDiv,this.backgroundColor);}}},setOpacity:function(opacity){OpenLayers.Popup.Anchored.prototype.setOpacity.call(this,opacity);if(this.div!=null){if(this.groupDiv!=null){OpenLayers.Rico.Corner.changeOpacity(this.groupDiv,this.opacity);}}},setBorder:function(border){this.border=0;},setRicoCorners:function(){var corners=this.getCornersToRound(this.relativePosition);var options={corners:corners,color:this.backgroundColor,bgColor:"transparent",blend:false};if(!this.rounded){OpenLayers.Rico.Corner.round(this.div,options);this.rounded=true;}else{OpenLayers.Rico.Corner.reRound(this.groupDiv,options);this.setBackgroundColor();this.setOpacity();}},getCornersToRound:function(){var corners=['tl','tr','bl','br'];var corner=OpenLayers.Bounds.oppositeQuadrant(this.relativePosition);OpenLayers.Util.removeItem(corners,corner);return corners.join(" ");},CLASS_NAME:"OpenLayers.Popup.AnchoredBubble"});OpenLayers.Popup.AnchoredBubble.CORNER_SIZE=5;OpenLayers.Projection=OpenLayers.Class({proj:null,projCode:null,titleRegEx:/\+title=[^\+]*/,initialize:function(projCode,options){OpenLayers.Util.extend(this,options);this.projCode=projCode;if(window.Proj4js){this.proj=new Proj4js.Proj(projCode);}},getCode:function(){return this.proj?this.proj.srsCode:this.projCode;},getUnits:function(){return this.proj?this.proj.units:null;},toString:function(){return this.getCode();},equals:function(projection){var p=projection,equals=false;if(p){if(window.Proj4js&&this.proj.defData&&p.proj.defData){equals=this.proj.defData.replace(this.titleRegEx,"")==p.proj.defData.replace(this.titleRegEx,"");}else if(p.getCode){var source=this.getCode(),target=p.getCode();equals=source==target||!!OpenLayers.Projection.transforms[source]&&OpenLayers.Projection.transforms[source][target]===OpenLayers.Projection.nullTransform;}}
return equals;},destroy:function(){delete this.proj;delete this.projCode;},CLASS_NAME:"OpenLayers.Projection"});OpenLayers.Projection.transforms={};OpenLayers.Projection.addTransform=function(from,to,method){if(!OpenLayers.Projection.transforms[from]){OpenLayers.Projection.transforms[from]={};}
OpenLayers.Projection.transforms[from][to]=method;};OpenLayers.Projection.transform=function(point,source,dest){if(source.proj&&dest.proj){point=Proj4js.transform(source.proj,dest.proj,point);}else if(source&&dest&&OpenLayers.Projection.transforms[source.getCode()]&&OpenLayers.Projection.transforms[source.getCode()][dest.getCode()]){OpenLayers.Projection.transforms[source.getCode()][dest.getCode()](point);}
return point;};OpenLayers.Projection.nullTransform=function(point){return point;};OpenLayers.Renderer.SVG=OpenLayers.Class(OpenLayers.Renderer.Elements,{xmlns:"http://www.w3.org/2000/svg",xlinkns:"http://www.w3.org/1999/xlink",MAX_PIXEL:15000,translationParameters:null,symbolMetrics:null,supportUse:null,initialize:function(containerID){if(!this.supported()){return;}
OpenLayers.Renderer.Elements.prototype.initialize.apply(this,arguments);this.translationParameters={x:0,y:0};this.supportUse=(navigator.userAgent.toLowerCase().indexOf("applewebkit/5")==-1);this.symbolMetrics={};},destroy:function(){OpenLayers.Renderer.Elements.prototype.destroy.apply(this,arguments);},supported:function(){var svgFeature="http://www.w3.org/TR/SVG11/feature#";return(document.implementation&&(document.implementation.hasFeature("org.w3c.svg","1.0")||document.implementation.hasFeature(svgFeature+"SVG","1.1")||document.implementation.hasFeature(svgFeature+"BasicStructure","1.1")));},inValidRange:function(x,y,xyOnly){var left=x+(xyOnly?0:this.translationParameters.x);var top=y+(xyOnly?0:this.translationParameters.y);return(left>=-this.MAX_PIXEL&&left<=this.MAX_PIXEL&&top>=-this.MAX_PIXEL&&top<=this.MAX_PIXEL);},setExtent:function(extent,resolutionChanged){OpenLayers.Renderer.Elements.prototype.setExtent.apply(this,arguments);var resolution=this.getResolution();var left=-extent.left/resolution;var top=extent.top/resolution;if(resolutionChanged){this.left=left;this.top=top;var extentString="0 0 "+this.size.w+" "+this.size.h;this.rendererRoot.setAttributeNS(null,"viewBox",extentString);this.translate(0,0);return true;}else{var inRange=this.translate(left-this.left,top-this.top);if(!inRange){this.setExtent(extent,true);}
return inRange;}},translate:function(x,y){if(!this.inValidRange(x,y,true)){return false;}else{var transformString="";if(x||y){transformString="translate("+x+","+y+")";}
this.root.setAttributeNS(null,"transform",transformString);this.translationParameters={x:x,y:y};return true;}},setSize:function(size){OpenLayers.Renderer.prototype.setSize.apply(this,arguments);this.rendererRoot.setAttributeNS(null,"width",this.size.w);this.rendererRoot.setAttributeNS(null,"height",this.size.h);},getNodeType:function(geometry,style){var nodeType=null;switch(geometry.CLASS_NAME){case"OpenLayers.Geometry.Point":if(style.externalGraphic){nodeType="image";}else if(this.isComplexSymbol(style.graphicName)){nodeType=this.supportUse===false?"svg":"use";}else{nodeType="circle";}
break;case"OpenLayers.Geometry.Rectangle":nodeType="rect";break;case"OpenLayers.Geometry.LineString":nodeType="polyline";break;case"OpenLayers.Geometry.LinearRing":nodeType="polygon";break;case"OpenLayers.Geometry.Polygon":case"OpenLayers.Geometry.Curve":case"OpenLayers.Geometry.Surface":nodeType="path";break;default:break;}
return nodeType;},setStyle:function(node,style,options){style=style||node._style;options=options||node._options;var r=parseFloat(node.getAttributeNS(null,"r"));var widthFactor=1;var pos;if(node._geometryClass=="OpenLayers.Geometry.Point"&&r){node.style.visibility="";if(style.graphic===false){node.style.visibility="hidden";}else if(style.externalGraphic){pos=this.getPosition(node);if(style.graphicTitle){node.setAttributeNS(null,"title",style.graphicTitle);}
if(style.graphicWidth&&style.graphicHeight){node.setAttributeNS(null,"preserveAspectRatio","none");}
var width=style.graphicWidth||style.graphicHeight;var height=style.graphicHeight||style.graphicWidth;width=width?width:style.pointRadius*2;height=height?height:style.pointRadius*2;var xOffset=(style.graphicXOffset!=undefined)?style.graphicXOffset:-(0.5*width);var yOffset=(style.graphicYOffset!=undefined)?style.graphicYOffset:-(0.5*height);var opacity=style.graphicOpacity||style.fillOpacity;node.setAttributeNS(null,"x",(pos.x+xOffset).toFixed());node.setAttributeNS(null,"y",(pos.y+yOffset).toFixed());node.setAttributeNS(null,"width",width);node.setAttributeNS(null,"height",height);node.setAttributeNS(this.xlinkns,"href",style.externalGraphic);node.setAttributeNS(null,"style","opacity: "+opacity);}else if(this.isComplexSymbol(style.graphicName)){var offset=style.pointRadius*3;var size=offset*2;var id=this.importSymbol(style.graphicName);pos=this.getPosition(node);widthFactor=this.symbolMetrics[id][0]*3/size;var parent=node.parentNode;var nextSibling=node.nextSibling;if(parent){parent.removeChild(node);}
if(this.supportUse===false){var src=document.getElementById(id);node.firstChild&&node.removeChild(node.firstChild);node.appendChild(src.firstChild.cloneNode(true));node.setAttributeNS(null,"viewBox",src.getAttributeNS(null,"viewBox"));}else{node.setAttributeNS(this.xlinkns,"href","#"+id);}
node.setAttributeNS(null,"width",size);node.setAttributeNS(null,"height",size);node.setAttributeNS(null,"x",pos.x-offset);node.setAttributeNS(null,"y",pos.y-offset);if(nextSibling){parent.insertBefore(node,nextSibling);}else if(parent){parent.appendChild(node);}}else{node.setAttributeNS(null,"r",style.pointRadius);}
var rotation=style.rotation;if((rotation!==undefined||node._rotation!==undefined)&&pos){node._rotation=rotation;rotation|=0;if(node.nodeName!=="svg"){node.setAttributeNS(null,"transform","rotate("+rotation+" "+pos.x+" "+
pos.y+")");}else{var metrics=this.symbolMetrics[id];node.firstChild.setAttributeNS(null,"transform","rotate("+style.rotation+" "+metrics[1]+" "+metrics[2]+")");}}}
if(options.isFilled){node.setAttributeNS(null,"fill",style.fillColor);node.setAttributeNS(null,"fill-opacity",style.fillOpacity);}else{node.setAttributeNS(null,"fill","none");}
if(options.isStroked){node.setAttributeNS(null,"stroke",style.strokeColor);node.setAttributeNS(null,"stroke-opacity",style.strokeOpacity);node.setAttributeNS(null,"stroke-width",style.strokeWidth*widthFactor);node.setAttributeNS(null,"stroke-linecap",style.strokeLinecap||"round");node.setAttributeNS(null,"stroke-linejoin","round");style.strokeDashstyle&&node.setAttributeNS(null,"stroke-dasharray",this.dashStyle(style,widthFactor));}else{node.setAttributeNS(null,"stroke","none");}
if(style.pointerEvents){node.setAttributeNS(null,"pointer-events",style.pointerEvents);}
if(style.cursor!=null){node.setAttributeNS(null,"cursor",style.cursor);}
return node;},dashStyle:function(style,widthFactor){var w=style.strokeWidth*widthFactor;var str=style.strokeDashstyle;switch(str){case'solid':return'none';case'dot':return[1,4*w].join();case'dash':return[4*w,4*w].join();case'dashdot':return[4*w,4*w,1,4*w].join();case'longdash':return[8*w,4*w].join();case'longdashdot':return[8*w,4*w,1,4*w].join();default:return OpenLayers.String.trim(str).replace(/\s+/g,",");}},createNode:function(type,id){var node=document.createElementNS(this.xmlns,type);if(id){node.setAttributeNS(null,"id",id);}
return node;},nodeTypeCompare:function(node,type){return(type==node.nodeName);},createRenderRoot:function(){return this.nodeFactory(this.container.id+"_svgRoot","svg");},createRoot:function(suffix){return this.nodeFactory(this.container.id+suffix,"g");},createDefs:function(){var defs=this.nodeFactory(this.container.id+"_defs","defs");this.rendererRoot.appendChild(defs);return defs;},drawPoint:function(node,geometry){return this.drawCircle(node,geometry,1);},drawCircle:function(node,geometry,radius){var resolution=this.getResolution();var x=(geometry.x/resolution+this.left);var y=(this.top-geometry.y/resolution);if(this.inValidRange(x,y)){node.setAttributeNS(null,"cx",x);node.setAttributeNS(null,"cy",y);node.setAttributeNS(null,"r",radius);return node;}else{return false;}},drawLineString:function(node,geometry){var componentsResult=this.getComponentsString(geometry.components);if(componentsResult.path){node.setAttributeNS(null,"points",componentsResult.path);return(componentsResult.complete?node:null);}else{return false;}},drawLinearRing:function(node,geometry){var componentsResult=this.getComponentsString(geometry.components);if(componentsResult.path){node.setAttributeNS(null,"points",componentsResult.path);return(componentsResult.complete?node:null);}else{return false;}},drawPolygon:function(node,geometry){var d="";var draw=true;var complete=true;var linearRingResult,path;for(var j=0,len=geometry.components.length;j<len;j++){d+=" M";linearRingResult=this.getComponentsString(geometry.components[j].components," ");path=linearRingResult.path;if(path){d+=" "+path;complete=linearRingResult.complete&&complete;}else{draw=false;}}
d+=" z";if(draw){node.setAttributeNS(null,"d",d);node.setAttributeNS(null,"fill-rule","evenodd");return complete?node:null;}else{return false;}},drawRectangle:function(node,geometry){var resolution=this.getResolution();var x=(geometry.x/resolution+this.left);var y=(this.top-geometry.y/resolution);if(this.inValidRange(x,y)){node.setAttributeNS(null,"x",x);node.setAttributeNS(null,"y",y);node.setAttributeNS(null,"width",geometry.width/resolution);node.setAttributeNS(null,"height",geometry.height/resolution);return node;}else{return false;}},drawSurface:function(node,geometry){var d=null;var draw=true;for(var i=0,len=geometry.components.length;i<len;i++){if((i%3)==0&&(i/3)==0){var component=this.getShortString(geometry.components[i]);if(!component){draw=false;}
d="M "+component;}else if((i%3)==1){var component=this.getShortString(geometry.components[i]);if(!component){draw=false;}
d+=" C "+component;}else{var component=this.getShortString(geometry.components[i]);if(!component){draw=false;}
d+=" "+component;}}
d+=" Z";if(draw){node.setAttributeNS(null,"d",d);return node;}else{return false;}},drawText:function(featureId,style,location){var resolution=this.getResolution();var x=(location.x/resolution+this.left);var y=(location.y/resolution-this.top);var label=this.nodeFactory(featureId+this.LABEL_ID_SUFFIX,"text");var tspan=this.nodeFactory(featureId+this.LABEL_ID_SUFFIX+"_tspan","tspan");label.setAttributeNS(null,"x",x);label.setAttributeNS(null,"y",-y);if(style.fontColor){label.setAttributeNS(null,"fill",style.fontColor);}
if(style.fontOpacity){label.setAttributeNS(null,"opacity",style.fontOpacity);}
if(style.fontFamily){label.setAttributeNS(null,"font-family",style.fontFamily);}
if(style.fontSize){label.setAttributeNS(null,"font-size",style.fontSize);}
if(style.fontWeight){label.setAttributeNS(null,"font-weight",style.fontWeight);}
if(style.labelSelect===true){label.setAttributeNS(null,"pointer-events","visible");label._featureId=featureId;tspan._featureId=featureId;tspan._geometry=location;tspan._geometryClass=location.CLASS_NAME;}else{label.setAttributeNS(null,"pointer-events","none");}
var align=style.labelAlign||"cm";label.setAttributeNS(null,"text-anchor",OpenLayers.Renderer.SVG.LABEL_ALIGN[align[0]]||"middle");if(OpenLayers.IS_GECKO===true){label.setAttributeNS(null,"dominant-baseline",OpenLayers.Renderer.SVG.LABEL_ALIGN[align[1]]||"central");}else{tspan.setAttributeNS(null,"baseline-shift",OpenLayers.Renderer.SVG.LABEL_VSHIFT[align[1]]||"-35%");}
tspan.textContent=style.label;if(!label.parentNode){label.appendChild(tspan);this.textRoot.appendChild(label);}},getComponentsString:function(components,separator){var renderCmp=[];var complete=true;var len=components.length;var strings=[];var str,component;for(var i=0;i<len;i++){component=components[i];renderCmp.push(component);str=this.getShortString(component);if(str){strings.push(str);}else{if(i>0){if(this.getShortString(components[i-1])){strings.push(this.clipLine(components[i],components[i-1]));}}
if(i<len-1){if(this.getShortString(components[i+1])){strings.push(this.clipLine(components[i],components[i+1]));}}
complete=false;}}
return{path:strings.join(separator||","),complete:complete};},clipLine:function(badComponent,goodComponent){if(goodComponent.equals(badComponent)){return"";}
var resolution=this.getResolution();var maxX=this.MAX_PIXEL-this.translationParameters.x;var maxY=this.MAX_PIXEL-this.translationParameters.y;var x1=goodComponent.x/resolution+this.left;var y1=this.top-goodComponent.y/resolution;var x2=badComponent.x/resolution+this.left;var y2=this.top-badComponent.y/resolution;var k;if(x2<-maxX||x2>maxX){k=(y2-y1)/(x2-x1);x2=x2<0?-maxX:maxX;y2=y1+(x2-x1)*k;}
if(y2<-maxY||y2>maxY){k=(x2-x1)/(y2-y1);y2=y2<0?-maxY:maxY;x2=x1+(y2-y1)*k;}
return x2+","+y2;},getShortString:function(point){var resolution=this.getResolution();var x=(point.x/resolution+this.left);var y=(this.top-point.y/resolution);if(this.inValidRange(x,y)){return x+","+y;}else{return false;}},getPosition:function(node){return({x:parseFloat(node.getAttributeNS(null,"cx")),y:parseFloat(node.getAttributeNS(null,"cy"))});},importSymbol:function(graphicName){if(!this.defs){this.defs=this.createDefs();}
var id=this.container.id+"-"+graphicName;if(document.getElementById(id)!=null){return id;}
var symbol=OpenLayers.Renderer.symbol[graphicName];if(!symbol){throw new Error(graphicName+' is not a valid symbol name');}
var symbolNode=this.nodeFactory(id,"symbol");var node=this.nodeFactory(null,"polygon");symbolNode.appendChild(node);var symbolExtent=new OpenLayers.Bounds(Number.MAX_VALUE,Number.MAX_VALUE,0,0);var points=[];var x,y;for(var i=0;i<symbol.length;i=i+2){x=symbol[i];y=symbol[i+1];symbolExtent.left=Math.min(symbolExtent.left,x);symbolExtent.bottom=Math.min(symbolExtent.bottom,y);symbolExtent.right=Math.max(symbolExtent.right,x);symbolExtent.top=Math.max(symbolExtent.top,y);points.push(x,",",y);}
node.setAttributeNS(null,"points",points.join(" "));var width=symbolExtent.getWidth();var height=symbolExtent.getHeight();var viewBox=[symbolExtent.left-width,symbolExtent.bottom-height,width*3,height*3];symbolNode.setAttributeNS(null,"viewBox",viewBox.join(" "));this.symbolMetrics[id]=[Math.max(width,height),symbolExtent.getCenterLonLat().lon,symbolExtent.getCenterLonLat().lat];this.defs.appendChild(symbolNode);return symbolNode.id;},getFeatureIdFromEvent:function(evt){var featureId=OpenLayers.Renderer.Elements.prototype.getFeatureIdFromEvent.apply(this,arguments);if(this.supportUse===false&&!featureId){var target=evt.target;featureId=target.parentNode&&target!=this.rendererRoot&&target.parentNode._featureId;}
return featureId;},CLASS_NAME:"OpenLayers.Renderer.SVG"});OpenLayers.Renderer.SVG.LABEL_ALIGN={"l":"start","r":"end","b":"bottom","t":"hanging"};OpenLayers.Renderer.SVG.LABEL_VSHIFT={"t":"-70%","b":"0"};OpenLayers.Renderer.VML=OpenLayers.Class(OpenLayers.Renderer.Elements,{xmlns:"urn:schemas-microsoft-com:vml",symbolCache:{},offset:null,initialize:function(containerID){if(!this.supported()){return;}
if(!document.namespaces.olv){document.namespaces.add("olv",this.xmlns);var style=document.createStyleSheet();var shapes=['shape','rect','oval','fill','stroke','imagedata','group','textbox'];for(var i=0,len=shapes.length;i<len;i++){style.addRule('olv\\:'+shapes[i],"behavior: url(#default#VML); "+"position: absolute; display: inline-block;");}}
OpenLayers.Renderer.Elements.prototype.initialize.apply(this,arguments);},destroy:function(){OpenLayers.Renderer.Elements.prototype.destroy.apply(this,arguments);},supported:function(){return!!(document.namespaces);},setExtent:function(extent,resolutionChanged){OpenLayers.Renderer.Elements.prototype.setExtent.apply(this,arguments);var resolution=this.getResolution();var left=(extent.left/resolution)|0;var top=(extent.top/resolution-this.size.h)|0;if(resolutionChanged||!this.offset){this.offset={x:left,y:top};left=0;top=0;}else{left=left-this.offset.x;top=top-this.offset.y;}
var org=left+" "+top;this.root.coordorigin=org;var roots=[this.root,this.vectorRoot,this.textRoot];var root;for(var i=0,len=roots.length;i<len;++i){root=roots[i];var size=this.size.w+" "+this.size.h;root.coordsize=size;}
this.root.style.flip="y";return true;},setSize:function(size){OpenLayers.Renderer.prototype.setSize.apply(this,arguments);var roots=[this.rendererRoot,this.root,this.vectorRoot,this.textRoot];var w=this.size.w+"px";var h=this.size.h+"px";var root;for(var i=0,len=roots.length;i<len;++i){root=roots[i];root.style.width=w;root.style.height=h;}},getNodeType:function(geometry,style){var nodeType=null;switch(geometry.CLASS_NAME){case"OpenLayers.Geometry.Point":if(style.externalGraphic){nodeType="olv:rect";}else if(this.isComplexSymbol(style.graphicName)){nodeType="olv:shape";}else{nodeType="olv:oval";}
break;case"OpenLayers.Geometry.Rectangle":nodeType="olv:rect";break;case"OpenLayers.Geometry.LineString":case"OpenLayers.Geometry.LinearRing":case"OpenLayers.Geometry.Polygon":case"OpenLayers.Geometry.Curve":case"OpenLayers.Geometry.Surface":nodeType="olv:shape";break;default:break;}
return nodeType;},setStyle:function(node,style,options,geometry){style=style||node._style;options=options||node._options;var fillColor=style.fillColor;if(node._geometryClass==="OpenLayers.Geometry.Point"){if(style.externalGraphic){if(style.graphicTitle){node.title=style.graphicTitle;}
var width=style.graphicWidth||style.graphicHeight;var height=style.graphicHeight||style.graphicWidth;width=width?width:style.pointRadius*2;height=height?height:style.pointRadius*2;var resolution=this.getResolution();var xOffset=(style.graphicXOffset!=undefined)?style.graphicXOffset:-(0.5*width);var yOffset=(style.graphicYOffset!=undefined)?style.graphicYOffset:-(0.5*height);node.style.left=(((geometry.x/resolution-this.offset.x)+xOffset)|0)+"px";node.style.top=(((geometry.y/resolution-this.offset.y)-(yOffset+height))|0)+"px";node.style.width=width+"px";node.style.height=height+"px";node.style.flip="y";fillColor="none";options.isStroked=false;}else if(this.isComplexSymbol(style.graphicName)){var cache=this.importSymbol(style.graphicName);node.path=cache.path;node.coordorigin=cache.left+","+cache.bottom;var size=cache.size;node.coordsize=size+","+size;this.drawCircle(node,geometry,style.pointRadius);node.style.flip="y";}else{this.drawCircle(node,geometry,style.pointRadius);}}
if(options.isFilled){node.fillcolor=fillColor;}else{node.filled="false";}
var fills=node.getElementsByTagName("fill");var fill=(fills.length==0)?null:fills[0];if(!options.isFilled){if(fill){node.removeChild(fill);}}else{if(!fill){fill=this.createNode('olv:fill',node.id+"_fill");}
fill.opacity=style.fillOpacity;if(node._geometryClass==="OpenLayers.Geometry.Point"&&style.externalGraphic){if(style.graphicOpacity){fill.opacity=style.graphicOpacity;}
fill.src=style.externalGraphic;fill.type="frame";if(!(style.graphicWidth&&style.graphicHeight)){fill.aspect="atmost";}}
if(fill.parentNode!=node){node.appendChild(fill);}}
var rotation=style.rotation;if((rotation!==undefined||node._rotation!==undefined)){node._rotation=rotation;if(style.externalGraphic){this.graphicRotate(node,xOffset,yOffset,style);fill.opacity=0;}else if(node._geometryClass==="OpenLayers.Geometry.Point"){node.style.rotation=rotation||0;}}
var strokes=node.getElementsByTagName("stroke");var stroke=(strokes.length==0)?null:strokes[0];if(!options.isStroked){node.stroked=false;if(stroke){stroke.on=false;}}else{if(!stroke){stroke=this.createNode('olv:stroke',node.id+"_stroke");node.appendChild(stroke);}
stroke.on=true;stroke.color=style.strokeColor;stroke.weight=style.strokeWidth+"px";stroke.opacity=style.strokeOpacity;stroke.endcap=style.strokeLinecap=='butt'?'flat':(style.strokeLinecap||'round');if(style.strokeDashstyle){stroke.dashstyle=this.dashStyle(style);}}
if(style.cursor!="inherit"&&style.cursor!=null){node.style.cursor=style.cursor;}
return node;},graphicRotate:function(node,xOffset,yOffset,style){var style=style||node._style;var rotation=style.rotation||0;var aspectRatio,size;if(!(style.graphicWidth&&style.graphicHeight)){var img=new Image();img.onreadystatechange=OpenLayers.Function.bind(function(){if(img.readyState=="complete"||img.readyState=="interactive"){aspectRatio=img.width/img.height;size=Math.max(style.pointRadius*2,style.graphicWidth||0,style.graphicHeight||0);xOffset=xOffset*aspectRatio;style.graphicWidth=size*aspectRatio;style.graphicHeight=size;this.graphicRotate(node,xOffset,yOffset,style);}},this);img.src=style.externalGraphic;return;}else{size=Math.max(style.graphicWidth,style.graphicHeight);aspectRatio=style.graphicWidth/style.graphicHeight;}
var width=Math.round(style.graphicWidth||size*aspectRatio);var height=Math.round(style.graphicHeight||size);node.style.width=width+"px";node.style.height=height+"px";var image=document.getElementById(node.id+"_image");if(!image){image=this.createNode("olv:imagedata",node.id+"_image");node.appendChild(image);}
image.style.width=width+"px";image.style.height=height+"px";image.src=style.externalGraphic;image.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader("+"src='', sizingMethod='scale')";var rot=rotation*Math.PI/180;var sintheta=Math.sin(rot);var costheta=Math.cos(rot);var filter="progid:DXImageTransform.Microsoft.Matrix(M11="+costheta+",M12="+(-sintheta)+",M21="+sintheta+",M22="+costheta+",SizingMethod='auto expand')\n";var opacity=style.graphicOpacity||style.fillOpacity;if(opacity&&opacity!=1){filter+="progid:DXImageTransform.Microsoft.BasicImage(opacity="+
opacity+")\n";}
node.style.filter=filter;var centerPoint=new OpenLayers.Geometry.Point(-xOffset,-yOffset);var imgBox=new OpenLayers.Bounds(0,0,width,height).toGeometry();imgBox.rotate(style.rotation,centerPoint);var imgBounds=imgBox.getBounds();node.style.left=Math.round(parseInt(node.style.left)+imgBounds.left)+"px";node.style.top=Math.round(parseInt(node.style.top)-imgBounds.bottom)+"px";},postDraw:function(node){node.style.visibility="visible";var fillColor=node._style.fillColor;var strokeColor=node._style.strokeColor;if(fillColor=="none"&&node.fillcolor!=fillColor){node.fillcolor=fillColor;}
if(strokeColor=="none"&&node.strokecolor!=strokeColor){node.strokecolor=strokeColor;}},setNodeDimension:function(node,geometry){var bbox=geometry.getBounds();if(bbox){var resolution=this.getResolution();var scaledBox=new OpenLayers.Bounds((bbox.left/resolution-this.offset.x)|0,(bbox.bottom/resolution-this.offset.y)|0,(bbox.right/resolution-this.offset.x)|0,(bbox.top/resolution-this.offset.y)|0);node.style.left=scaledBox.left+"px";node.style.top=scaledBox.top+"px";node.style.width=scaledBox.getWidth()+"px";node.style.height=scaledBox.getHeight()+"px";node.coordorigin=scaledBox.left+" "+scaledBox.top;node.coordsize=scaledBox.getWidth()+" "+scaledBox.getHeight();}},dashStyle:function(style){var dash=style.strokeDashstyle;switch(dash){case'solid':case'dot':case'dash':case'dashdot':case'longdash':case'longdashdot':return dash;default:var parts=dash.split(/[ ,]/);if(parts.length==2){if(1*parts[0]>=2*parts[1]){return"longdash";}
return(parts[0]==1||parts[1]==1)?"dot":"dash";}else if(parts.length==4){return(1*parts[0]>=2*parts[1])?"longdashdot":"dashdot";}
return"solid";}},createNode:function(type,id){var node=document.createElement(type);if(id){node.id=id;}
node.unselectable='on';node.onselectstart=OpenLayers.Function.False;return node;},nodeTypeCompare:function(node,type){var subType=type;var splitIndex=subType.indexOf(":");if(splitIndex!=-1){subType=subType.substr(splitIndex+1);}
var nodeName=node.nodeName;splitIndex=nodeName.indexOf(":");if(splitIndex!=-1){nodeName=nodeName.substr(splitIndex+1);}
return(subType==nodeName);},createRenderRoot:function(){return this.nodeFactory(this.container.id+"_vmlRoot","div");},createRoot:function(suffix){return this.nodeFactory(this.container.id+suffix,"olv:group");},drawPoint:function(node,geometry){return this.drawCircle(node,geometry,1);},drawCircle:function(node,geometry,radius){if(!isNaN(geometry.x)&&!isNaN(geometry.y)){var resolution=this.getResolution();node.style.left=(((geometry.x/resolution-this.offset.x)|0)-radius)+"px";node.style.top=(((geometry.y/resolution-this.offset.y)|0)-radius)+"px";var diameter=radius*2;node.style.width=diameter+"px";node.style.height=diameter+"px";return node;}
return false;},drawLineString:function(node,geometry){return this.drawLine(node,geometry,false);},drawLinearRing:function(node,geometry){return this.drawLine(node,geometry,true);},drawLine:function(node,geometry,closeLine){this.setNodeDimension(node,geometry);var resolution=this.getResolution();var numComponents=geometry.components.length;var parts=new Array(numComponents);var comp,x,y;for(var i=0;i<numComponents;i++){comp=geometry.components[i];x=(comp.x/resolution-this.offset.x)|0;y=(comp.y/resolution-this.offset.y)|0;parts[i]=" "+x+","+y+" l ";}
var end=(closeLine)?" x e":" e";node.path="m"+parts.join("")+end;return node;},drawPolygon:function(node,geometry){this.setNodeDimension(node,geometry);var resolution=this.getResolution();var path=[];var j,jj,points,area,first,second,i,ii,comp,pathComp,x,y;for(j=0,jj=geometry.components.length;j<jj;j++){path.push("m");points=geometry.components[j].components;area=(j===0);first=null;second=null;for(i=0,ii=points.length;i<ii;i++){comp=points[i];x=(comp.x/resolution-this.offset.x)|0;y=(comp.y/resolution-this.offset.y)|0;pathComp=" "+x+","+y;path.push(pathComp)
if(i==0){path.push(" l");}
if(!area){if(!first){first=pathComp;}else if(first!=pathComp){if(!second){second=pathComp;}else if(second!=pathComp){area=true;}}}}
path.push(area?" x ":" ");}
path.push("e");node.path=path.join("");return node;},drawRectangle:function(node,geometry){var resolution=this.getResolution();node.style.left=((geometry.x/resolution-this.offset.x)|0)+"px";node.style.top=((geometry.y/resolution-this.offset.y)|0)+"px";node.style.width=((geometry.width/resolution)|0)+"px";node.style.height=((geometry.height/resolution)|0)+"px";return node;},drawText:function(featureId,style,location){var label=this.nodeFactory(featureId+this.LABEL_ID_SUFFIX,"olv:rect");var textbox=this.nodeFactory(featureId+this.LABEL_ID_SUFFIX+"_textbox","olv:textbox");var resolution=this.getResolution();label.style.left=((location.x/resolution-this.offset.x)|0)+"px";label.style.top=((location.y/resolution-this.offset.y)|0)+"px";label.style.flip="y";textbox.innerText=style.label;if(style.fontColor){textbox.style.color=style.fontColor;}
if(style.fontOpacity){textbox.style.filter='alpha(opacity='+(style.fontOpacity*100)+')';}
if(style.fontFamily){textbox.style.fontFamily=style.fontFamily;}
if(style.fontSize){textbox.style.fontSize=style.fontSize;}
if(style.fontWeight){textbox.style.fontWeight=style.fontWeight;}
if(style.labelSelect===true){label._featureId=featureId;textbox._featureId=featureId;textbox._geometry=location;textbox._geometryClass=location.CLASS_NAME;}
textbox.style.whiteSpace="nowrap";textbox.inset="1px,0px,0px,0px";if(!label.parentNode){label.appendChild(textbox);this.textRoot.appendChild(label);}
var align=style.labelAlign||"cm";if(align.length==1){align+="m";}
var xshift=textbox.clientWidth*(OpenLayers.Renderer.VML.LABEL_SHIFT[align.substr(0,1)]);var yshift=textbox.clientHeight*(OpenLayers.Renderer.VML.LABEL_SHIFT[align.substr(1,1)]);label.style.left=parseInt(label.style.left)-xshift-1+"px";label.style.top=parseInt(label.style.top)+yshift+"px";},drawSurface:function(node,geometry){this.setNodeDimension(node,geometry);var resolution=this.getResolution();var path=[];var comp,x,y;for(var i=0,len=geometry.components.length;i<len;i++){comp=geometry.components[i];x=(comp.x/resolution-this.offset.x)|0;y=(comp.y/resolution-this.offset.y)|0;if((i%3)==0&&(i/3)==0){path.push("m");}else if((i%3)==1){path.push(" c");}
path.push(" "+x+","+y);}
path.push(" x e");node.path=path.join("");return node;},moveRoot:function(renderer){var layer=this.map.getLayer(renderer.container.id);if(layer instanceof OpenLayers.Layer.Vector.RootContainer){layer=this.map.getLayer(this.container.id);}
layer&&layer.renderer.clear();OpenLayers.Renderer.Elements.prototype.moveRoot.apply(this,arguments);layer&&layer.redraw();},importSymbol:function(graphicName){var id=this.container.id+"-"+graphicName;var cache=this.symbolCache[id];if(cache){return cache;}
var symbol=OpenLayers.Renderer.symbol[graphicName];if(!symbol){throw new Error(graphicName+' is not a valid symbol name');}
var symbolExtent=new OpenLayers.Bounds(Number.MAX_VALUE,Number.MAX_VALUE,0,0);var pathitems=["m"];for(var i=0;i<symbol.length;i=i+2){var x=symbol[i];var y=symbol[i+1];symbolExtent.left=Math.min(symbolExtent.left,x);symbolExtent.bottom=Math.min(symbolExtent.bottom,y);symbolExtent.right=Math.max(symbolExtent.right,x);symbolExtent.top=Math.max(symbolExtent.top,y);pathitems.push(x);pathitems.push(y);if(i==0){pathitems.push("l");}}
pathitems.push("x e");var path=pathitems.join(" ");var diff=(symbolExtent.getWidth()-symbolExtent.getHeight())/2;if(diff>0){symbolExtent.bottom=symbolExtent.bottom-diff;symbolExtent.top=symbolExtent.top+diff;}else{symbolExtent.left=symbolExtent.left+diff;symbolExtent.right=symbolExtent.right-diff;}
cache={path:path,size:symbolExtent.getWidth(),left:symbolExtent.left,bottom:symbolExtent.bottom};this.symbolCache[id]=cache;return cache;},CLASS_NAME:"OpenLayers.Renderer.VML"});OpenLayers.Renderer.VML.LABEL_SHIFT={"l":0,"c":.5,"r":1,"t":0,"m":.5,"b":1};OpenLayers.Tile=OpenLayers.Class({EVENT_TYPES:["loadstart","loadend","reload","unload"],events:null,id:null,layer:null,url:null,bounds:null,size:null,position:null,isLoading:false,initialize:function(layer,position,bounds,url,size,options){this.layer=layer;this.position=position.clone();this.bounds=bounds.clone();this.url=url;this.size=size.clone();this.id=OpenLayers.Util.createUniqueID("Tile_");this.events=new OpenLayers.Events(this,null,this.EVENT_TYPES);OpenLayers.Util.extend(this,options);},unload:function(){if(this.isLoading){this.isLoading=false;this.events.triggerEvent("unload");}},destroy:function(){this.layer=null;this.bounds=null;this.size=null;this.position=null;this.events.destroy();this.events=null;},clone:function(obj){if(obj==null){obj=new OpenLayers.Tile(this.layer,this.position,this.bounds,this.url,this.size);}
OpenLayers.Util.applyDefaults(obj,this);return obj;},draw:function(){var maxExtent=this.layer.maxExtent;var withinMaxExtent=(maxExtent&&this.bounds.intersectsBounds(maxExtent,false));this.shouldDraw=(withinMaxExtent||this.layer.displayOutsideMaxExtent);this.clear();return this.shouldDraw;},moveTo:function(bounds,position,redraw){if(redraw==null){redraw=true;}
this.bounds=bounds.clone();this.position=position.clone();if(redraw){this.draw();}},clear:function(){},getBoundsFromBaseLayer:function(position){var msg=OpenLayers.i18n('reprojectDeprecated',{'layerName':this.layer.name});OpenLayers.Console.warn(msg);var topLeft=this.layer.map.getLonLatFromLayerPx(position);var bottomRightPx=position.clone();bottomRightPx.x+=this.size.w;bottomRightPx.y+=this.size.h;var bottomRight=this.layer.map.getLonLatFromLayerPx(bottomRightPx);if(topLeft.lon>bottomRight.lon){if(topLeft.lon<0){topLeft.lon=-180-(topLeft.lon+180);}else{bottomRight.lon=180+bottomRight.lon+180;}}
var bounds=new OpenLayers.Bounds(topLeft.lon,bottomRight.lat,bottomRight.lon,topLeft.lat);return bounds;},showTile:function(){if(this.shouldDraw){this.show();}},show:function(){},hide:function(){},CLASS_NAME:"OpenLayers.Tile"});OpenLayers.Control.PanZoomBar=OpenLayers.Class(OpenLayers.Control.PanZoom,{zoomStopWidth:18,zoomStopHeight:11,slider:null,sliderEvents:null,zoombarDiv:null,divEvents:null,zoomWorldIcon:false,forceFixedZoomLevel:false,mouseDragStart:null,zoomStart:null,initialize:function(){OpenLayers.Control.PanZoom.prototype.initialize.apply(this,arguments);},destroy:function(){this._removeZoomBar();this.map.events.un({"changebaselayer":this.redraw,scope:this});OpenLayers.Control.PanZoom.prototype.destroy.apply(this,arguments);delete this.mouseDragStart;delete this.zoomStart;},setMap:function(map){OpenLayers.Control.PanZoom.prototype.setMap.apply(this,arguments);this.map.events.register("changebaselayer",this,this.redraw);},redraw:function(){if(this.div!=null){this.removeButtons();this._removeZoomBar();}
this.draw();},draw:function(px){OpenLayers.Control.prototype.draw.apply(this,arguments);px=this.position.clone();this.buttons=[];var sz=new OpenLayers.Size(18,18);var centered=new OpenLayers.Pixel(px.x+sz.w/2,px.y);var wposition=sz.w;if(this.zoomWorldIcon){centered=new OpenLayers.Pixel(px.x+sz.w,px.y);}
this._addButton("panup","north-mini.png",centered,sz);px.y=centered.y+sz.h;this._addButton("panleft","west-mini.png",px,sz);if(this.zoomWorldIcon){this._addButton("zoomworld","zoom-world-mini.png",px.add(sz.w,0),sz);wposition*=2;}
this._addButton("panright","east-mini.png",px.add(wposition,0),sz);this._addButton("pandown","south-mini.png",centered.add(0,sz.h*2),sz);this._addButton("zoomin","zoom-plus-mini.png",centered.add(0,sz.h*3+5),sz);centered=this._addZoomBar(centered.add(0,sz.h*4+5));this._addButton("zoomout","zoom-minus-mini.png",centered,sz);return this.div;},_addZoomBar:function(centered){var imgLocation=OpenLayers.Util.getImagesLocation();var id=this.id+"_"+this.map.id;var zoomsToEnd=this.map.getNumZoomLevels()-1-this.map.getZoom();var slider=OpenLayers.Util.createAlphaImageDiv(id,centered.add(-1,zoomsToEnd*this.zoomStopHeight),new OpenLayers.Size(20,9),imgLocation+"slider.png","absolute");this.slider=slider;this.sliderEvents=new OpenLayers.Events(this,slider,null,true,{includeXY:true});this.sliderEvents.on({"mousedown":this.zoomBarDown,"mousemove":this.zoomBarDrag,"mouseup":this.zoomBarUp,"dblclick":this.doubleClick,"click":this.doubleClick});var sz=new OpenLayers.Size();sz.h=this.zoomStopHeight*this.map.getNumZoomLevels();sz.w=this.zoomStopWidth;var div=null;if(OpenLayers.Util.alphaHack()){var id=this.id+"_"+this.map.id;div=OpenLayers.Util.createAlphaImageDiv(id,centered,new OpenLayers.Size(sz.w,this.zoomStopHeight),imgLocation+"zoombar.png","absolute",null,"crop");div.style.height=sz.h+"px";}else{div=OpenLayers.Util.createDiv('OpenLayers_Control_PanZoomBar_Zoombar'+this.map.id,centered,sz,imgLocation+"zoombar.png");}
this.zoombarDiv=div;this.divEvents=new OpenLayers.Events(this,div,null,true,{includeXY:true});this.divEvents.on({"mousedown":this.divClick,"mousemove":this.passEventToSlider,"dblclick":this.doubleClick,"click":this.doubleClick});this.div.appendChild(div);this.startTop=parseInt(div.style.top);this.div.appendChild(slider);this.map.events.register("zoomend",this,this.moveZoomBar);centered=centered.add(0,this.zoomStopHeight*this.map.getNumZoomLevels());return centered;},_removeZoomBar:function(){this.sliderEvents.un({"mousedown":this.zoomBarDown,"mousemove":this.zoomBarDrag,"mouseup":this.zoomBarUp,"dblclick":this.doubleClick,"click":this.doubleClick});this.sliderEvents.destroy();this.divEvents.un({"mousedown":this.divClick,"mousemove":this.passEventToSlider,"dblclick":this.doubleClick,"click":this.doubleClick});this.divEvents.destroy();this.div.removeChild(this.zoombarDiv);this.zoombarDiv=null;this.div.removeChild(this.slider);this.slider=null;this.map.events.unregister("zoomend",this,this.moveZoomBar);},passEventToSlider:function(evt){this.sliderEvents.handleBrowserEvent(evt);},divClick:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
var levels=evt.xy.y/this.zoomStopHeight;if(this.forceFixedZoomLevel||!this.map.fractionalZoom){levels=Math.floor(levels);}
var zoom=(this.map.getNumZoomLevels()-1)-levels;zoom=Math.min(Math.max(zoom,0),this.map.getNumZoomLevels()-1);this.map.zoomTo(zoom);OpenLayers.Event.stop(evt);},zoomBarDown:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
this.map.events.on({"mousemove":this.passEventToSlider,"mouseup":this.passEventToSlider,scope:this});this.mouseDragStart=evt.xy.clone();this.zoomStart=evt.xy.clone();this.div.style.cursor="move";this.zoombarDiv.offsets=null;OpenLayers.Event.stop(evt);},zoomBarDrag:function(evt){if(this.mouseDragStart!=null){var deltaY=this.mouseDragStart.y-evt.xy.y;var offsets=OpenLayers.Util.pagePosition(this.zoombarDiv);if((evt.clientY-offsets[1])>0&&(evt.clientY-offsets[1])<parseInt(this.zoombarDiv.style.height)-2){var newTop=parseInt(this.slider.style.top)-deltaY;this.slider.style.top=newTop+"px";this.mouseDragStart=evt.xy.clone();}
OpenLayers.Event.stop(evt);}},zoomBarUp:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
if(this.mouseDragStart){this.div.style.cursor="";this.map.events.un({"mouseup":this.passEventToSlider,"mousemove":this.passEventToSlider,scope:this});var deltaY=this.zoomStart.y-evt.xy.y;var zoomLevel=this.map.zoom;if(!this.forceFixedZoomLevel&&this.map.fractionalZoom){zoomLevel+=deltaY/this.zoomStopHeight;zoomLevel=Math.min(Math.max(zoomLevel,0),this.map.getNumZoomLevels()-1);}else{zoomLevel+=Math.round(deltaY/this.zoomStopHeight);}
this.map.zoomTo(zoomLevel);this.mouseDragStart=null;this.zoomStart=null;OpenLayers.Event.stop(evt);}},moveZoomBar:function(){var newTop=((this.map.getNumZoomLevels()-1)-this.map.getZoom())*this.zoomStopHeight+this.startTop+1;this.slider.style.top=newTop+"px";},CLASS_NAME:"OpenLayers.Control.PanZoomBar"});OpenLayers.Control.Permalink=OpenLayers.Class(OpenLayers.Control,{argParserClass:OpenLayers.Control.ArgParser,element:null,base:'',displayProjection:null,initialize:function(element,base,options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.element=OpenLayers.Util.getElement(element);this.base=base||document.location.href;},destroy:function(){if(this.element.parentNode==this.div){this.div.removeChild(this.element);}
this.element=null;this.map.events.unregister('moveend',this,this.updateLink);OpenLayers.Control.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Control.prototype.setMap.apply(this,arguments);for(var i=0,len=this.map.controls.length;i<len;i++){var control=this.map.controls[i];if(control.CLASS_NAME==this.argParserClass.CLASS_NAME){if(control.displayProjection!=this.displayProjection){this.displayProjection=control.displayProjection;}
break;}}
if(i==this.map.controls.length){this.map.addControl(new this.argParserClass({'displayProjection':this.displayProjection}));}},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);if(!this.element){this.element=document.createElement("a");this.element.innerHTML=OpenLayers.i18n("permalink");this.element.href="";this.div.appendChild(this.element);}
this.map.events.on({'moveend':this.updateLink,'changelayer':this.updateLink,'changebaselayer':this.updateLink,scope:this});this.updateLink();return this.div;},updateLink:function(){var href=this.base;if(href.indexOf('?')!=-1){href=href.substring(0,href.indexOf('?'));}
href+='?'+OpenLayers.Util.getParameterString(this.createParams());this.element.href=href;},createParams:function(center,zoom,layers){center=center||this.map.getCenter();var params=OpenLayers.Util.getParameters(this.base);if(center){params.zoom=zoom||this.map.getZoom();var lat=center.lat;var lon=center.lon;if(this.displayProjection){var mapPosition=OpenLayers.Projection.transform({x:lon,y:lat},this.map.getProjectionObject(),this.displayProjection);lon=mapPosition.x;lat=mapPosition.y;}
params.lat=Math.round(lat*100000)/100000;params.lon=Math.round(lon*100000)/100000;layers=layers||this.map.layers;params.layers='';for(var i=0,len=layers.length;i<len;i++){var layer=layers[i];if(layer.isBaseLayer){params.layers+=(layer==this.map.baseLayer)?"B":"0";}else{params.layers+=(layer.getVisibility())?"T":"F";}}}
return params;},CLASS_NAME:"OpenLayers.Control.Permalink"});OpenLayers.Control.ZoomPanel=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(options){OpenLayers.Control.Panel.prototype.initialize.apply(this,[options]);this.addControls([new OpenLayers.Control.ZoomIn(),new OpenLayers.Control.ZoomToMaxExtent(),new OpenLayers.Control.ZoomOut()]);},CLASS_NAME:"OpenLayers.Control.ZoomPanel"});OpenLayers.Format.JSON=OpenLayers.Class(OpenLayers.Format,{indent:"    ",space:" ",newline:"\n",level:0,pretty:false,initialize:function(options){OpenLayers.Format.prototype.initialize.apply(this,[options]);},read:function(json,filter){try{if(/^[\],:{}\s]*$/.test(json.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){var object=eval('('+json+')');if(typeof filter==='function'){function walk(k,v){if(v&&typeof v==='object'){for(var i in v){if(v.hasOwnProperty(i)){v[i]=walk(i,v[i]);}}}
return filter(k,v);}
object=walk('',object);}
if(this.keepData){this.data=object;}
return object;}}catch(e){}
return null;},write:function(value,pretty){this.pretty=!!pretty;var json=null;var type=typeof value;if(this.serialize[type]){try{json=this.serialize[type].apply(this,[value]);}catch(err){OpenLayers.Console.error("Trouble serializing: "+err);}}
return json;},writeIndent:function(){var pieces=[];if(this.pretty){for(var i=0;i<this.level;++i){pieces.push(this.indent);}}
return pieces.join('');},writeNewline:function(){return(this.pretty)?this.newline:'';},writeSpace:function(){return(this.pretty)?this.space:'';},serialize:{'object':function(object){if(object==null){return"null";}
if(object.constructor==Date){return this.serialize.date.apply(this,[object]);}
if(object.constructor==Array){return this.serialize.array.apply(this,[object]);}
var pieces=['{'];this.level+=1;var key,keyJSON,valueJSON;var addComma=false;for(key in object){if(object.hasOwnProperty(key)){keyJSON=OpenLayers.Format.JSON.prototype.write.apply(this,[key,this.pretty]);valueJSON=OpenLayers.Format.JSON.prototype.write.apply(this,[object[key],this.pretty]);if(keyJSON!=null&&valueJSON!=null){if(addComma){pieces.push(',');}
pieces.push(this.writeNewline(),this.writeIndent(),keyJSON,':',this.writeSpace(),valueJSON);addComma=true;}}}
this.level-=1;pieces.push(this.writeNewline(),this.writeIndent(),'}');return pieces.join('');},'array':function(array){var json;var pieces=['['];this.level+=1;for(var i=0,len=array.length;i<len;++i){json=OpenLayers.Format.JSON.prototype.write.apply(this,[array[i],this.pretty]);if(json!=null){if(i>0){pieces.push(',');}
pieces.push(this.writeNewline(),this.writeIndent(),json);}}
this.level-=1;pieces.push(this.writeNewline(),this.writeIndent(),']');return pieces.join('');},'string':function(string){var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};if(/["\\\x00-\x1f]/.test(string)){return'"'+string.replace(/([\x00-\x1f\\"])/g,function(a,b){var c=m[b];if(c){return c;}
c=b.charCodeAt();return'\\u00'+
Math.floor(c/16).toString(16)+
(c%16).toString(16);})+'"';}
return'"'+string+'"';},'number':function(number){return isFinite(number)?String(number):"null";},'boolean':function(bool){return String(bool);},'date':function(date){function format(number){return(number<10)?'0'+number:number;}
return'"'+date.getFullYear()+'-'+
format(date.getMonth()+1)+'-'+
format(date.getDate())+'T'+
format(date.getHours())+':'+
format(date.getMinutes())+':'+
format(date.getSeconds())+'"';}},CLASS_NAME:"OpenLayers.Format.JSON"});OpenLayers.Format.XML=OpenLayers.Class(OpenLayers.Format,{namespaces:null,namespaceAlias:null,defaultPrefix:null,readers:{},writers:{},xmldom:null,initialize:function(options){if(window.ActiveXObject){this.xmldom=new ActiveXObject("Microsoft.XMLDOM");}
OpenLayers.Format.prototype.initialize.apply(this,[options]);this.namespaces=OpenLayers.Util.extend({},this.namespaces);this.namespaceAlias={};for(var alias in this.namespaces){this.namespaceAlias[this.namespaces[alias]]=alias;}},destroy:function(){this.xmldom=null;OpenLayers.Format.prototype.destroy.apply(this,arguments);},setNamespace:function(alias,uri){this.namespaces[alias]=uri;this.namespaceAlias[uri]=alias;},read:function(text){var index=text.indexOf('<');if(index>0){text=text.substring(index);}
var node=OpenLayers.Util.Try(OpenLayers.Function.bind((function(){var xmldom;if(window.ActiveXObject&&!this.xmldom){xmldom=new ActiveXObject("Microsoft.XMLDOM");}else{xmldom=this.xmldom;}
xmldom.loadXML(text);return xmldom;}),this),function(){return new DOMParser().parseFromString(text,'text/xml');},function(){var req=new XMLHttpRequest();req.open("GET","data:"+"text/xml"+";charset=utf-8,"+encodeURIComponent(text),false);if(req.overrideMimeType){req.overrideMimeType("text/xml");}
req.send(null);return req.responseXML;});if(this.keepData){this.data=node;}
return node;},write:function(node){var data;if(this.xmldom){data=node.xml;}else{var serializer=new XMLSerializer();if(node.nodeType==1){var doc=document.implementation.createDocument("","",null);if(doc.importNode){node=doc.importNode(node,true);}
doc.appendChild(node);data=serializer.serializeToString(doc);}else{data=serializer.serializeToString(node);}}
return data;},createElementNS:function(uri,name){var element;if(this.xmldom){if(typeof uri=="string"){element=this.xmldom.createNode(1,name,uri);}else{element=this.xmldom.createNode(1,name,"");}}else{element=document.createElementNS(uri,name);}
return element;},createTextNode:function(text){var node;if(typeof text!=="string"){text=String(text);}
if(this.xmldom){node=this.xmldom.createTextNode(text);}else{node=document.createTextNode(text);}
return node;},getElementsByTagNameNS:function(node,uri,name){var elements=[];if(node.getElementsByTagNameNS){elements=node.getElementsByTagNameNS(uri,name);}else{var allNodes=node.getElementsByTagName("*");var potentialNode,fullName;for(var i=0,len=allNodes.length;i<len;++i){potentialNode=allNodes[i];fullName=(potentialNode.prefix)?(potentialNode.prefix+":"+name):name;if((name=="*")||(fullName==potentialNode.nodeName)){if((uri=="*")||(uri==potentialNode.namespaceURI)){elements.push(potentialNode);}}}}
return elements;},getAttributeNodeNS:function(node,uri,name){var attributeNode=null;if(node.getAttributeNodeNS){attributeNode=node.getAttributeNodeNS(uri,name);}else{var attributes=node.attributes;var potentialNode,fullName;for(var i=0,len=attributes.length;i<len;++i){potentialNode=attributes[i];if(potentialNode.namespaceURI==uri){fullName=(potentialNode.prefix)?(potentialNode.prefix+":"+name):name;if(fullName==potentialNode.nodeName){attributeNode=potentialNode;break;}}}}
return attributeNode;},getAttributeNS:function(node,uri,name){var attributeValue="";if(node.getAttributeNS){attributeValue=node.getAttributeNS(uri,name)||"";}else{var attributeNode=this.getAttributeNodeNS(node,uri,name);if(attributeNode){attributeValue=attributeNode.nodeValue;}}
return attributeValue;},getChildValue:function(node,def){var value=def||"";if(node){for(var child=node.firstChild;child;child=child.nextSibling){switch(child.nodeType){case 3:case 4:value+=child.nodeValue;}}}
return value;},concatChildValues:function(node,def){var value="";var child=node.firstChild;var childValue;while(child){childValue=child.nodeValue;if(childValue){value+=childValue;}
child=child.nextSibling;}
if(value==""&&def!=undefined){value=def;}
return value;},isSimpleContent:function(node){var simple=true;for(var child=node.firstChild;child;child=child.nextSibling){if(child.nodeType===1){simple=false;break;}}
return simple;},contentType:function(node){var simple=false,complex=false;var type=OpenLayers.Format.XML.CONTENT_TYPE.EMPTY;for(var child=node.firstChild;child;child=child.nextSibling){switch(child.nodeType){case 1:complex=true;break;case 8:break;default:simple=true;}
if(complex&&simple){break;}}
if(complex&&simple){type=OpenLayers.Format.XML.CONTENT_TYPE.MIXED;}else if(complex){return OpenLayers.Format.XML.CONTENT_TYPE.COMPLEX;}else if(simple){return OpenLayers.Format.XML.CONTENT_TYPE.SIMPLE;}
return type;},hasAttributeNS:function(node,uri,name){var found=false;if(node.hasAttributeNS){found=node.hasAttributeNS(uri,name);}else{found=!!this.getAttributeNodeNS(node,uri,name);}
return found;},setAttributeNS:function(node,uri,name,value){if(node.setAttributeNS){node.setAttributeNS(uri,name,value);}else{if(this.xmldom){if(uri){var attribute=node.ownerDocument.createNode(2,name,uri);attribute.nodeValue=value;node.setAttributeNode(attribute);}else{node.setAttribute(name,value);}}else{throw"setAttributeNS not implemented";}}},createElementNSPlus:function(name,options){options=options||{};var uri=options.uri||this.namespaces[options.prefix];if(!uri){var loc=name.indexOf(":");uri=this.namespaces[name.substring(0,loc)];}
if(!uri){uri=this.namespaces[this.defaultPrefix];}
var node=this.createElementNS(uri,name);if(options.attributes){this.setAttributes(node,options.attributes);}
var value=options.value;if(value!=null){node.appendChild(this.createTextNode(value));}
return node;},setAttributes:function(node,obj){var value,uri;for(var name in obj){if(obj[name]!=null&&obj[name].toString){value=obj[name].toString();uri=this.namespaces[name.substring(0,name.indexOf(":"))]||null;this.setAttributeNS(node,uri,name,value);}}},readNode:function(node,obj){if(!obj){obj={};}
var group=this.readers[node.namespaceURI?this.namespaceAlias[node.namespaceURI]:this.defaultPrefix];if(group){var local=node.localName||node.nodeName.split(":").pop();var reader=group[local]||group["*"];if(reader){reader.apply(this,[node,obj]);}}
return obj;},readChildNodes:function(node,obj){if(!obj){obj={};}
var children=node.childNodes;var child;for(var i=0,len=children.length;i<len;++i){child=children[i];if(child.nodeType==1){this.readNode(child,obj);}}
return obj;},writeNode:function(name,obj,parent){var prefix,local;var split=name.indexOf(":");if(split>0){prefix=name.substring(0,split);local=name.substring(split+1);}else{if(parent){prefix=this.namespaceAlias[parent.namespaceURI];}else{prefix=this.defaultPrefix;}
local=name;}
var child=this.writers[prefix][local].apply(this,[obj]);if(parent){parent.appendChild(child);}
return child;},getChildEl:function(node,name,uri){return node&&this.getThisOrNextEl(node.firstChild,name,uri);},getNextEl:function(node,name,uri){return node&&this.getThisOrNextEl(node.nextSibling,name,uri);},getThisOrNextEl:function(node,name,uri){outer:for(var sibling=node;sibling;sibling=sibling.nextSibling){switch(sibling.nodeType){case 1:if((!name||name===(sibling.localName||sibling.nodeName.split(":").pop()))&&(!uri||uri===sibling.namespaceURI)){break outer;}
sibling=null;break outer;case 3:if(/^\s*$/.test(sibling.nodeValue)){break;}
case 4:case 6:case 12:case 10:case 11:sibling=null;break outer;}}
return sibling||null;},lookupNamespaceURI:function(node,prefix){var uri=null;if(node){if(node.lookupNamespaceURI){uri=node.lookupNamespaceURI(prefix);}else{outer:switch(node.nodeType){case 1:if(node.namespaceURI!==null&&node.prefix===prefix){uri=node.namespaceURI;break outer;}
var len=node.attributes.length;if(len){var attr;for(var i=0;i<len;++i){attr=node.attributes[i];if(attr.prefix==="xmlns"&&attr.name==="xmlns:"+prefix){uri=attr.value||null;break outer;}else if(attr.name==="xmlns"&&prefix===null){uri=attr.value||null;break outer;}}}
uri=this.lookupNamespaceURI(node.parentNode,prefix);break outer;case 2:uri=this.lookupNamespaceURI(node.ownerElement,prefix);break outer;case 9:uri=this.lookupNamespaceURI(node.documentElement,prefix);break outer;case 6:case 12:case 10:case 11:break outer;default:uri=this.lookupNamespaceURI(node.parentNode,prefix);break outer;}}}
return uri;},CLASS_NAME:"OpenLayers.Format.XML"});OpenLayers.Format.XML.CONTENT_TYPE={EMPTY:0,SIMPLE:1,COMPLEX:2,MIXED:3};OpenLayers.Format.XML.lookupNamespaceURI=OpenLayers.Function.bind(OpenLayers.Format.XML.prototype.lookupNamespaceURI,OpenLayers.Format.XML.prototype);OpenLayers.Handler=OpenLayers.Class({id:null,control:null,map:null,keyMask:null,active:false,evt:null,initialize:function(control,callbacks,options){OpenLayers.Util.extend(this,options);this.control=control;this.callbacks=callbacks;var map=this.map||control.map;if(map){this.setMap(map);}
this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},setMap:function(map){this.map=map;},checkModifiers:function(evt){if(this.keyMask==null){return true;}
var keyModifiers=(evt.shiftKey?OpenLayers.Handler.MOD_SHIFT:0)|(evt.ctrlKey?OpenLayers.Handler.MOD_CTRL:0)|(evt.altKey?OpenLayers.Handler.MOD_ALT:0);return(keyModifiers==this.keyMask);},activate:function(){if(this.active){return false;}
var events=OpenLayers.Events.prototype.BROWSER_EVENTS;for(var i=0,len=events.length;i<len;i++){if(this[events[i]]){this.register(events[i],this[events[i]]);}}
this.active=true;return true;},deactivate:function(){if(!this.active){return false;}
var events=OpenLayers.Events.prototype.BROWSER_EVENTS;for(var i=0,len=events.length;i<len;i++){if(this[events[i]]){this.unregister(events[i],this[events[i]]);}}
this.active=false;return true;},callback:function(name,args){if(name&&this.callbacks[name]){this.callbacks[name].apply(this.control,args);}},register:function(name,method){this.map.events.registerPriority(name,this,method);this.map.events.registerPriority(name,this,this.setEvent);},unregister:function(name,method){this.map.events.unregister(name,this,method);this.map.events.unregister(name,this,this.setEvent);},setEvent:function(evt){this.evt=evt;return true;},destroy:function(){this.deactivate();this.control=this.map=null;},CLASS_NAME:"OpenLayers.Handler"});OpenLayers.Handler.MOD_NONE=0;OpenLayers.Handler.MOD_SHIFT=1;OpenLayers.Handler.MOD_CTRL=2;OpenLayers.Handler.MOD_ALT=4;OpenLayers.Map=OpenLayers.Class({Z_INDEX_BASE:{BaseLayer:100,Overlay:325,Feature:725,Popup:750,Control:1000},EVENT_TYPES:["preaddlayer","addlayer","removelayer","changelayer","movestart","move","moveend","zoomend","popupopen","popupclose","addmarker","removemarker","clearmarkers","mouseover","mouseout","mousemove","dragstart","drag","dragend","changebaselayer"],id:null,fractionalZoom:false,events:null,allOverlays:false,div:null,dragging:false,size:null,viewPortDiv:null,layerContainerOrigin:null,layerContainerDiv:null,layers:null,controls:null,popups:null,baseLayer:null,center:null,resolution:null,zoom:0,panRatio:1.5,viewRequestID:0,tileSize:null,projection:"EPSG:4326",units:'degrees',resolutions:null,maxResolution:1.40625,minResolution:null,maxScale:null,minScale:null,maxExtent:null,minExtent:null,restrictedExtent:null,numZoomLevels:16,theme:null,displayProjection:null,fallThrough:true,panTween:null,eventListeners:null,panMethod:OpenLayers.Easing.Expo.easeOut,panDuration:50,paddingForPopups:null,initialize:function(div,options){if(arguments.length===1&&typeof div==="object"){options=div;div=options&&options.div;}
this.tileSize=new OpenLayers.Size(OpenLayers.Map.TILE_WIDTH,OpenLayers.Map.TILE_HEIGHT);this.maxExtent=new OpenLayers.Bounds(-180,-90,180,90);this.paddingForPopups=new OpenLayers.Bounds(15,15,15,15);this.theme=OpenLayers._getScriptLocation()+'theme/default/style.css';OpenLayers.Util.extend(this,options);this.layers=[];this.id=OpenLayers.Util.createUniqueID("OpenLayers.Map_");this.div=OpenLayers.Util.getElement(div);if(!this.div){this.div=document.createElement("div");this.div.style.height="1px";this.div.style.width="1px";}
OpenLayers.Element.addClass(this.div,'olMap');var id=this.id+"_OpenLayers_ViewPort";this.viewPortDiv=OpenLayers.Util.createDiv(id,null,null,null,"relative",null,"hidden");this.viewPortDiv.style.width="100%";this.viewPortDiv.style.height="100%";this.viewPortDiv.className="olMapViewport";this.div.appendChild(this.viewPortDiv);id=this.id+"_OpenLayers_Container";this.layerContainerDiv=OpenLayers.Util.createDiv(id);this.layerContainerDiv.style.zIndex=this.Z_INDEX_BASE['Popup']-1;this.viewPortDiv.appendChild(this.layerContainerDiv);this.events=new OpenLayers.Events(this,this.viewPortDiv,this.EVENT_TYPES,this.fallThrough,{includeXY:true});this.updateSize();if(this.eventListeners instanceof Object){this.events.on(this.eventListeners);}
this.events.register("movestart",this,this.updateSize);if(OpenLayers.String.contains(navigator.appName,"Microsoft")){this.events.register("resize",this,this.updateSize);}else{this.updateSizeDestroy=OpenLayers.Function.bind(this.updateSize,this);OpenLayers.Event.observe(window,'resize',this.updateSizeDestroy);}
if(this.theme){var addNode=true;var nodes=document.getElementsByTagName('link');for(var i=0,len=nodes.length;i<len;++i){if(OpenLayers.Util.isEquivalentUrl(nodes.item(i).href,this.theme)){addNode=false;break;}}
if(addNode){var cssNode=document.createElement('link');cssNode.setAttribute('rel','stylesheet');cssNode.setAttribute('type','text/css');cssNode.setAttribute('href',this.theme);document.getElementsByTagName('head')[0].appendChild(cssNode);}}
if(this.controls==null){if(OpenLayers.Control!=null){this.controls=[new OpenLayers.Control.Navigation(),new OpenLayers.Control.PanZoom(),new OpenLayers.Control.ArgParser(),new OpenLayers.Control.Attribution()];}else{this.controls=[];}}
for(var i=0,len=this.controls.length;i<len;i++){this.addControlToMap(this.controls[i]);}
this.popups=[];this.unloadDestroy=OpenLayers.Function.bind(this.destroy,this);OpenLayers.Event.observe(window,'unload',this.unloadDestroy);if(options&&options.layers){this.addLayers(options.layers);if(options.center){this.setCenter(options.center,options.zoom);}}},render:function(div){this.div=OpenLayers.Util.getElement(div);OpenLayers.Element.addClass(this.div,'olMap');this.viewPortDiv.parentNode.removeChild(this.viewPortDiv);this.div.appendChild(this.viewPortDiv);this.updateSize();},unloadDestroy:null,updateSizeDestroy:null,destroy:function(){if(!this.unloadDestroy){return false;}
if(this.panTween){this.panTween.stop();this.panTween=null;}
OpenLayers.Event.stopObserving(window,'unload',this.unloadDestroy);this.unloadDestroy=null;if(this.updateSizeDestroy){OpenLayers.Event.stopObserving(window,'resize',this.updateSizeDestroy);}else{this.events.unregister("resize",this,this.updateSize);}
this.paddingForPopups=null;if(this.controls!=null){for(var i=this.controls.length-1;i>=0;--i){this.controls[i].destroy();}
this.controls=null;}
if(this.layers!=null){for(var i=this.layers.length-1;i>=0;--i){this.layers[i].destroy(false);}
this.layers=null;}
if(this.viewPortDiv){this.div.removeChild(this.viewPortDiv);}
this.viewPortDiv=null;if(this.eventListeners){this.events.un(this.eventListeners);this.eventListeners=null;}
this.events.destroy();this.events=null;},setOptions:function(options){OpenLayers.Util.extend(this,options);},getTileSize:function(){return this.tileSize;},getBy:function(array,property,match){var test=(typeof match.test=="function");var found=OpenLayers.Array.filter(this[array],function(item){return item[property]==match||(test&&match.test(item[property]));});return found;},getLayersBy:function(property,match){return this.getBy("layers",property,match);},getLayersByName:function(match){return this.getLayersBy("name",match);},getLayersByClass:function(match){return this.getLayersBy("CLASS_NAME",match);},getControlsBy:function(property,match){return this.getBy("controls",property,match);},getControlsByClass:function(match){return this.getControlsBy("CLASS_NAME",match);},getLayer:function(id){var foundLayer=null;for(var i=0,len=this.layers.length;i<len;i++){var layer=this.layers[i];if(layer.id==id){foundLayer=layer;break;}}
return foundLayer;},setLayerZIndex:function(layer,zIdx){layer.setZIndex(this.Z_INDEX_BASE[layer.isBaseLayer?'BaseLayer':'Overlay']
+zIdx*5);},resetLayersZIndex:function(){for(var i=0,len=this.layers.length;i<len;i++){var layer=this.layers[i];this.setLayerZIndex(layer,i);}},addLayer:function(layer){for(var i=0,len=this.layers.length;i<len;i++){if(this.layers[i]==layer){var msg=OpenLayers.i18n('layerAlreadyAdded',{'layerName':layer.name});OpenLayers.Console.warn(msg);return false;}}
if(this.allOverlays){layer.isBaseLayer=false;}
if(this.events.triggerEvent("preaddlayer",{layer:layer})===false){return;}
layer.div.className="olLayerDiv";layer.div.style.overflow="";this.setLayerZIndex(layer,this.layers.length);if(layer.isFixed){this.viewPortDiv.appendChild(layer.div);}else{this.layerContainerDiv.appendChild(layer.div);}
this.layers.push(layer);layer.setMap(this);if(layer.isBaseLayer||(this.allOverlays&&!this.baseLayer)){if(this.baseLayer==null){this.setBaseLayer(layer);}else{layer.setVisibility(false);}}else{layer.redraw();}
this.events.triggerEvent("addlayer",{layer:layer});layer.afterAdd();},addLayers:function(layers){for(var i=0,len=layers.length;i<len;i++){this.addLayer(layers[i]);}},removeLayer:function(layer,setNewBaseLayer){if(setNewBaseLayer==null){setNewBaseLayer=true;}
if(layer.isFixed){this.viewPortDiv.removeChild(layer.div);}else{this.layerContainerDiv.removeChild(layer.div);}
OpenLayers.Util.removeItem(this.layers,layer);layer.removeMap(this);layer.map=null;if(this.baseLayer==layer){this.baseLayer=null;if(setNewBaseLayer){for(var i=0,len=this.layers.length;i<len;i++){var iLayer=this.layers[i];if(iLayer.isBaseLayer||this.allOverlays){this.setBaseLayer(iLayer);break;}}}}
this.resetLayersZIndex();this.events.triggerEvent("removelayer",{layer:layer});},getNumLayers:function(){return this.layers.length;},getLayerIndex:function(layer){return OpenLayers.Util.indexOf(this.layers,layer);},setLayerIndex:function(layer,idx){var base=this.getLayerIndex(layer);if(idx<0){idx=0;}else if(idx>this.layers.length){idx=this.layers.length;}
if(base!=idx){this.layers.splice(base,1);this.layers.splice(idx,0,layer);for(var i=0,len=this.layers.length;i<len;i++){this.setLayerZIndex(this.layers[i],i);}
this.events.triggerEvent("changelayer",{layer:layer,property:"order"});if(this.allOverlays){if(idx===0){this.setBaseLayer(layer);}else if(this.baseLayer!==this.layers[0]){this.setBaseLayer(this.layers[0]);}}}},raiseLayer:function(layer,delta){var idx=this.getLayerIndex(layer)+delta;this.setLayerIndex(layer,idx);},setBaseLayer:function(newBaseLayer){if(newBaseLayer!=this.baseLayer){if(OpenLayers.Util.indexOf(this.layers,newBaseLayer)!=-1){var center=this.getCenter();var newResolution=OpenLayers.Util.getResolutionFromScale(this.getScale(),newBaseLayer.units);if(this.baseLayer!=null&&!this.allOverlays){this.baseLayer.setVisibility(false);}
this.baseLayer=newBaseLayer;this.viewRequestID++;if(!this.allOverlays||this.baseLayer.visibility){this.baseLayer.setVisibility(true);}
if(center!=null){var newZoom=this.getZoomForResolution(newResolution||this.resolution,true);this.setCenter(center,newZoom,false,true);}
this.events.triggerEvent("changebaselayer",{layer:this.baseLayer});}}},addControl:function(control,px){this.controls.push(control);this.addControlToMap(control,px);},addControls:function(controls,pixels){var pxs=(arguments.length===1)?[]:pixels;for(var i=0,len=controls.length;i<len;i++){var ctrl=controls[i];var px=(pxs[i])?pxs[i]:null;this.addControl(ctrl,px);}},addControlToMap:function(control,px){control.outsideViewport=(control.div!=null);if(this.displayProjection&&!control.displayProjection){control.displayProjection=this.displayProjection;}
control.setMap(this);var div=control.draw(px);if(div){if(!control.outsideViewport){div.style.zIndex=this.Z_INDEX_BASE['Control']+
this.controls.length;this.viewPortDiv.appendChild(div);}}
if(control.autoActivate){control.activate();}},getControl:function(id){var returnControl=null;for(var i=0,len=this.controls.length;i<len;i++){var control=this.controls[i];if(control.id==id){returnControl=control;break;}}
return returnControl;},removeControl:function(control){if((control)&&(control==this.getControl(control.id))){if(control.div&&(control.div.parentNode==this.viewPortDiv)){this.viewPortDiv.removeChild(control.div);}
OpenLayers.Util.removeItem(this.controls,control);}},addPopup:function(popup,exclusive){if(exclusive){for(var i=this.popups.length-1;i>=0;--i){this.removePopup(this.popups[i]);}}
popup.map=this;this.popups.push(popup);var popupDiv=popup.draw();if(popupDiv){popupDiv.style.zIndex=this.Z_INDEX_BASE['Popup']+
this.popups.length;this.layerContainerDiv.appendChild(popupDiv);}},removePopup:function(popup){OpenLayers.Util.removeItem(this.popups,popup);if(popup.div){try{this.layerContainerDiv.removeChild(popup.div);}
catch(e){}}
popup.map=null;},getSize:function(){var size=null;if(this.size!=null){size=this.size.clone();}
return size;},updateSize:function(){var newSize=this.getCurrentSize();if(newSize&&!isNaN(newSize.h)&&!isNaN(newSize.w)){this.events.clearMouseCache();var oldSize=this.getSize();if(oldSize==null){this.size=oldSize=newSize;}
if(!newSize.equals(oldSize)){this.size=newSize;for(var i=0,len=this.layers.length;i<len;i++){this.layers[i].onMapResize();}
var center=this.getCenter();if(this.baseLayer!=null&&center!=null){var zoom=this.getZoom();this.zoom=null;this.setCenter(center,zoom);}}}},getCurrentSize:function(){var size=new OpenLayers.Size(this.div.clientWidth,this.div.clientHeight);if(size.w==0&&size.h==0||isNaN(size.w)&&isNaN(size.h)){size.w=this.div.offsetWidth;size.h=this.div.offsetHeight;}
if(size.w==0&&size.h==0||isNaN(size.w)&&isNaN(size.h)){size.w=parseInt(this.div.style.width);size.h=parseInt(this.div.style.height);}
return size;},calculateBounds:function(center,resolution){var extent=null;if(center==null){center=this.getCenter();}
if(resolution==null){resolution=this.getResolution();}
if((center!=null)&&(resolution!=null)){var size=this.getSize();var w_deg=size.w*resolution;var h_deg=size.h*resolution;extent=new OpenLayers.Bounds(center.lon-w_deg/2,center.lat-h_deg/2,center.lon+w_deg/2,center.lat+h_deg/2);}
return extent;},getCenter:function(){var center=null;if(this.center){center=this.center.clone();}
return center;},getZoom:function(){return this.zoom;},pan:function(dx,dy,options){options=OpenLayers.Util.applyDefaults(options,{animate:true,dragging:false});var centerPx=this.getViewPortPxFromLonLat(this.getCenter());var newCenterPx=centerPx.add(dx,dy);if(!options.dragging||!newCenterPx.equals(centerPx)){var newCenterLonLat=this.getLonLatFromViewPortPx(newCenterPx);if(options.animate){this.panTo(newCenterLonLat);}else{this.setCenter(newCenterLonLat,null,options.dragging);}}},panTo:function(lonlat){if(this.panMethod&&this.getExtent().scale(this.panRatio).containsLonLat(lonlat)){if(!this.panTween){this.panTween=new OpenLayers.Tween(this.panMethod);}
var center=this.getCenter();if(lonlat.lon==center.lon&&lonlat.lat==center.lat){return;}
var from={lon:center.lon,lat:center.lat};var to={lon:lonlat.lon,lat:lonlat.lat};this.panTween.start(from,to,this.panDuration,{callbacks:{start:OpenLayers.Function.bind(function(lonlat){this.events.triggerEvent("movestart");},this),eachStep:OpenLayers.Function.bind(function(lonlat){lonlat=new OpenLayers.LonLat(lonlat.lon,lonlat.lat);this.moveTo(lonlat,this.zoom,{'dragging':true,'noEvent':true});},this),done:OpenLayers.Function.bind(function(lonlat){lonlat=new OpenLayers.LonLat(lonlat.lon,lonlat.lat);this.moveTo(lonlat,this.zoom,{'noEvent':true});this.events.triggerEvent("moveend");},this)}});}else{this.setCenter(lonlat);}},setCenter:function(lonlat,zoom,dragging,forceZoomChange){this.moveTo(lonlat,zoom,{'dragging':dragging,'forceZoomChange':forceZoomChange,'caller':'setCenter'});},moveTo:function(lonlat,zoom,options){if(!options){options={};}
if(zoom!=null){zoom=parseFloat(zoom);if(!this.fractionalZoom){zoom=Math.round(zoom);}}
var dragging=options.dragging;var forceZoomChange=options.forceZoomChange;var noEvent=options.noEvent;if(this.panTween&&options.caller=="setCenter"){this.panTween.stop();}
if(!this.center&&!this.isValidLonLat(lonlat)){lonlat=this.maxExtent.getCenterLonLat();}
if(this.restrictedExtent!=null){if(lonlat==null){lonlat=this.getCenter();}
if(zoom==null){zoom=this.getZoom();}
var resolution=this.getResolutionForZoom(zoom);var extent=this.calculateBounds(lonlat,resolution);if(!this.restrictedExtent.containsBounds(extent)){var maxCenter=this.restrictedExtent.getCenterLonLat();if(extent.getWidth()>this.restrictedExtent.getWidth()){lonlat=new OpenLayers.LonLat(maxCenter.lon,lonlat.lat);}else if(extent.left<this.restrictedExtent.left){lonlat=lonlat.add(this.restrictedExtent.left-
extent.left,0);}else if(extent.right>this.restrictedExtent.right){lonlat=lonlat.add(this.restrictedExtent.right-
extent.right,0);}
if(extent.getHeight()>this.restrictedExtent.getHeight()){lonlat=new OpenLayers.LonLat(lonlat.lon,maxCenter.lat);}else if(extent.bottom<this.restrictedExtent.bottom){lonlat=lonlat.add(0,this.restrictedExtent.bottom-
extent.bottom);}
else if(extent.top>this.restrictedExtent.top){lonlat=lonlat.add(0,this.restrictedExtent.top-
extent.top);}}}
var zoomChanged=forceZoomChange||((this.isValidZoomLevel(zoom))&&(zoom!=this.getZoom()));var centerChanged=(this.isValidLonLat(lonlat))&&(!lonlat.equals(this.center));if(zoomChanged||centerChanged||!dragging){if(!this.dragging&&!noEvent){this.events.triggerEvent("movestart");}
if(centerChanged){if((!zoomChanged)&&(this.center)){this.centerLayerContainer(lonlat);}
this.center=lonlat.clone();}
if((zoomChanged)||(this.layerContainerOrigin==null)){this.layerContainerOrigin=this.center.clone();this.layerContainerDiv.style.left="0px";this.layerContainerDiv.style.top="0px";}
if(zoomChanged){this.zoom=zoom;this.resolution=this.getResolutionForZoom(zoom);this.viewRequestID++;}
var bounds=this.getExtent();if(this.baseLayer.visibility){this.baseLayer.moveTo(bounds,zoomChanged,dragging);if(dragging){this.baseLayer.events.triggerEvent("move");}else{this.baseLayer.events.triggerEvent("moveend",{"zoomChanged":zoomChanged});}}
bounds=this.baseLayer.getExtent();for(var i=0,len=this.layers.length;i<len;i++){var layer=this.layers[i];if(layer!==this.baseLayer&&!layer.isBaseLayer){var inRange=layer.calculateInRange();if(layer.inRange!=inRange){layer.inRange=inRange;if(!inRange){layer.display(false);}
this.events.triggerEvent("changelayer",{layer:layer,property:"visibility"});}
if(inRange&&layer.visibility){layer.moveTo(bounds,zoomChanged,dragging);if(dragging){layer.events.triggerEvent("move");}else{layer.events.triggerEvent("moveend",{"zoomChanged":zoomChanged});}}}}
if(zoomChanged){for(var i=0,len=this.popups.length;i<len;i++){this.popups[i].updatePosition();}}
this.events.triggerEvent("move");if(zoomChanged){this.events.triggerEvent("zoomend");}}
if(!dragging&&!noEvent){this.events.triggerEvent("moveend");}
this.dragging=!!dragging;},centerLayerContainer:function(lonlat){var originPx=this.getViewPortPxFromLonLat(this.layerContainerOrigin);var newPx=this.getViewPortPxFromLonLat(lonlat);if((originPx!=null)&&(newPx!=null)){this.layerContainerDiv.style.left=Math.round(originPx.x-newPx.x)+"px";this.layerContainerDiv.style.top=Math.round(originPx.y-newPx.y)+"px";}},isValidZoomLevel:function(zoomLevel){return((zoomLevel!=null)&&(zoomLevel>=0)&&(zoomLevel<this.getNumZoomLevels()));},isValidLonLat:function(lonlat){var valid=false;if(lonlat!=null){var maxExtent=this.getMaxExtent();valid=maxExtent.containsLonLat(lonlat);}
return valid;},getProjection:function(){var projection=this.getProjectionObject();return projection?projection.getCode():null;},getProjectionObject:function(){var projection=null;if(this.baseLayer!=null){projection=this.baseLayer.projection;}
return projection;},getMaxResolution:function(){var maxResolution=null;if(this.baseLayer!=null){maxResolution=this.baseLayer.maxResolution;}
return maxResolution;},getMaxExtent:function(options){var maxExtent=null;if(options&&options.restricted&&this.restrictedExtent){maxExtent=this.restrictedExtent;}else if(this.baseLayer!=null){maxExtent=this.baseLayer.maxExtent;}
return maxExtent;},getNumZoomLevels:function(){var numZoomLevels=null;if(this.baseLayer!=null){numZoomLevels=this.baseLayer.numZoomLevels;}
return numZoomLevels;},getExtent:function(){var extent=null;if(this.baseLayer!=null){extent=this.baseLayer.getExtent();}
return extent;},getResolution:function(){var resolution=null;if(this.baseLayer!=null){resolution=this.baseLayer.getResolution();}else if(this.allOverlays===true&&this.layers.length>0){resolution=this.layers[0].getResolution();}
return resolution;},getUnits:function(){var units=null;if(this.baseLayer!=null){units=this.baseLayer.units;}
return units;},getScale:function(){var scale=null;if(this.baseLayer!=null){var res=this.getResolution();var units=this.baseLayer.units;scale=OpenLayers.Util.getScaleFromResolution(res,units);}
return scale;},getZoomForExtent:function(bounds,closest){var zoom=null;if(this.baseLayer!=null){zoom=this.baseLayer.getZoomForExtent(bounds,closest);}
return zoom;},getResolutionForZoom:function(zoom){var resolution=null;if(this.baseLayer){resolution=this.baseLayer.getResolutionForZoom(zoom);}
return resolution;},getZoomForResolution:function(resolution,closest){var zoom=null;if(this.baseLayer!=null){zoom=this.baseLayer.getZoomForResolution(resolution,closest);}
return zoom;},zoomTo:function(zoom){if(this.isValidZoomLevel(zoom)){this.setCenter(null,zoom);}},zoomIn:function(){this.zoomTo(this.getZoom()+1);},zoomOut:function(){this.zoomTo(this.getZoom()-1);},zoomToExtent:function(bounds,closest){var center=bounds.getCenterLonLat();if(this.baseLayer.wrapDateLine){var maxExtent=this.getMaxExtent();bounds=bounds.clone();while(bounds.right<bounds.left){bounds.right+=maxExtent.getWidth();}
center=bounds.getCenterLonLat().wrapDateLine(maxExtent);}
this.setCenter(center,this.getZoomForExtent(bounds,closest));},zoomToMaxExtent:function(options){var restricted=(options)?options.restricted:true;var maxExtent=this.getMaxExtent({'restricted':restricted});this.zoomToExtent(maxExtent);},zoomToScale:function(scale,closest){var res=OpenLayers.Util.getResolutionFromScale(scale,this.baseLayer.units);var size=this.getSize();var w_deg=size.w*res;var h_deg=size.h*res;var center=this.getCenter();var extent=new OpenLayers.Bounds(center.lon-w_deg/2,center.lat-h_deg/2,center.lon+w_deg/2,center.lat+h_deg/2);this.zoomToExtent(extent,closest);},getLonLatFromViewPortPx:function(viewPortPx){var lonlat=null;if(this.baseLayer!=null){lonlat=this.baseLayer.getLonLatFromViewPortPx(viewPortPx);}
return lonlat;},getViewPortPxFromLonLat:function(lonlat){var px=null;if(this.baseLayer!=null){px=this.baseLayer.getViewPortPxFromLonLat(lonlat);}
return px;},getLonLatFromPixel:function(px){return this.getLonLatFromViewPortPx(px);},getPixelFromLonLat:function(lonlat){var px=this.getViewPortPxFromLonLat(lonlat);px.x=Math.round(px.x);px.y=Math.round(px.y);return px;},getGeodesicPixelSize:function(px){var lonlat=px?this.getLonLatFromPixel(px):(this.getCenter()||new OpenLayers.LonLat(0,0));var res=this.getResolution();var left=lonlat.add(-res/2,0);var right=lonlat.add(res/2,0);var bottom=lonlat.add(0,-res/2);var top=lonlat.add(0,res/2);var dest=new OpenLayers.Projection("EPSG:4326");var source=this.getProjectionObject()||dest;if(!source.equals(dest)){left.transform(source,dest);right.transform(source,dest);bottom.transform(source,dest);top.transform(source,dest);}
return new OpenLayers.Size(OpenLayers.Util.distVincenty(left,right),OpenLayers.Util.distVincenty(bottom,top));},getViewPortPxFromLayerPx:function(layerPx){var viewPortPx=null;if(layerPx!=null){var dX=parseInt(this.layerContainerDiv.style.left);var dY=parseInt(this.layerContainerDiv.style.top);viewPortPx=layerPx.add(dX,dY);}
return viewPortPx;},getLayerPxFromViewPortPx:function(viewPortPx){var layerPx=null;if(viewPortPx!=null){var dX=-parseInt(this.layerContainerDiv.style.left);var dY=-parseInt(this.layerContainerDiv.style.top);layerPx=viewPortPx.add(dX,dY);if(isNaN(layerPx.x)||isNaN(layerPx.y)){layerPx=null;}}
return layerPx;},getLonLatFromLayerPx:function(px){px=this.getViewPortPxFromLayerPx(px);return this.getLonLatFromViewPortPx(px);},getLayerPxFromLonLat:function(lonlat){var px=this.getPixelFromLonLat(lonlat);return this.getLayerPxFromViewPortPx(px);},CLASS_NAME:"OpenLayers.Map"});OpenLayers.Map.TILE_WIDTH=256;OpenLayers.Map.TILE_HEIGHT=256;OpenLayers.Marker=OpenLayers.Class({icon:null,lonlat:null,events:null,map:null,initialize:function(lonlat,icon){this.lonlat=lonlat;var newIcon=(icon)?icon:OpenLayers.Marker.defaultIcon();if(this.icon==null){this.icon=newIcon;}else{this.icon.url=newIcon.url;this.icon.size=newIcon.size;this.icon.offset=newIcon.offset;this.icon.calculateOffset=newIcon.calculateOffset;}
this.events=new OpenLayers.Events(this,this.icon.imageDiv,null);},destroy:function(){this.erase();this.map=null;this.events.destroy();this.events=null;if(this.icon!=null){this.icon.destroy();this.icon=null;}},draw:function(px){return this.icon.draw(px);},erase:function(){if(this.icon!=null){this.icon.erase();}},moveTo:function(px){if((px!=null)&&(this.icon!=null)){this.icon.moveTo(px);}
this.lonlat=this.map.getLonLatFromLayerPx(px);},isDrawn:function(){var isDrawn=(this.icon&&this.icon.isDrawn());return isDrawn;},onScreen:function(){var onScreen=false;if(this.map){var screenBounds=this.map.getExtent();onScreen=screenBounds.containsLonLat(this.lonlat);}
return onScreen;},inflate:function(inflate){if(this.icon){var newSize=new OpenLayers.Size(this.icon.size.w*inflate,this.icon.size.h*inflate);this.icon.setSize(newSize);}},setOpacity:function(opacity){this.icon.setOpacity(opacity);},setUrl:function(url){this.icon.setUrl(url);},display:function(display){this.icon.display(display);},CLASS_NAME:"OpenLayers.Marker"});OpenLayers.Marker.defaultIcon=function(){var url=OpenLayers.Util.getImagesLocation()+"marker.png";var size=new OpenLayers.Size(21,25);var calculateOffset=function(size){return new OpenLayers.Pixel(-(size.w/2),-size.h);};return new OpenLayers.Icon(url,size,null,calculateOffset);};OpenLayers.Request={DEFAULT_CONFIG:{method:"GET",url:window.location.href,async:true,user:undefined,password:undefined,params:null,proxy:OpenLayers.ProxyHost,headers:{},data:null,callback:function(){},success:null,failure:null,scope:null},events:new OpenLayers.Events(this,null,["complete","success","failure"]),issue:function(config){var defaultConfig=OpenLayers.Util.extend(this.DEFAULT_CONFIG,{proxy:OpenLayers.ProxyHost});config=OpenLayers.Util.applyDefaults(config,defaultConfig);var request=new OpenLayers.Request.XMLHttpRequest();var url=config.url;if(config.params){var paramString=OpenLayers.Util.getParameterString(config.params);if(paramString.length>0){var separator=(url.indexOf('?')>-1)?'&':'?';url+=separator+paramString;}}
if(config.proxy&&(url.indexOf("http")==0)){if(typeof config.proxy=="function"){url=config.proxy(url);}else{url=config.proxy+encodeURIComponent(url);}}
request.open(config.method,url,config.async,config.user,config.password);for(var header in config.headers){request.setRequestHeader(header,config.headers[header]);}
var events=this.events;var self=this;request.onreadystatechange=function(){if(request.readyState==OpenLayers.Request.XMLHttpRequest.DONE){var proceed=events.triggerEvent("complete",{request:request,config:config,requestUrl:url});if(proceed!==false){self.runCallbacks({request:request,config:config,requestUrl:url});}}};if(config.async===false){request.send(config.data);}else{window.setTimeout(function(){if(request._aborted!==true){request.send(config.data);}},0);}
return request;},runCallbacks:function(options){var request=options.request;var config=options.config;var complete=(config.scope)?OpenLayers.Function.bind(config.callback,config.scope):config.callback;var success;if(config.success){success=(config.scope)?OpenLayers.Function.bind(config.success,config.scope):config.success;}
var failure;if(config.failure){failure=(config.scope)?OpenLayers.Function.bind(config.failure,config.scope):config.failure;}
complete(request);if(!request.status||(request.status>=200&&request.status<300)){this.events.triggerEvent("success",options);if(success){success(request);}}
if(request.status&&(request.status<200||request.status>=300)){this.events.triggerEvent("failure",options);if(failure){failure(request);}}},GET:function(config){config=OpenLayers.Util.extend(config,{method:"GET"});return OpenLayers.Request.issue(config);},POST:function(config){config=OpenLayers.Util.extend(config,{method:"POST"});config.headers=config.headers?config.headers:{};if(!("CONTENT-TYPE"in OpenLayers.Util.upperCaseObject(config.headers))){config.headers["Content-Type"]="application/xml";}
return OpenLayers.Request.issue(config);},PUT:function(config){config=OpenLayers.Util.extend(config,{method:"PUT"});config.headers=config.headers?config.headers:{};if(!("CONTENT-TYPE"in OpenLayers.Util.upperCaseObject(config.headers))){config.headers["Content-Type"]="application/xml";}
return OpenLayers.Request.issue(config);},DELETE:function(config){config=OpenLayers.Util.extend(config,{method:"DELETE"});return OpenLayers.Request.issue(config);},HEAD:function(config){config=OpenLayers.Util.extend(config,{method:"HEAD"});return OpenLayers.Request.issue(config);},OPTIONS:function(config){config=OpenLayers.Util.extend(config,{method:"OPTIONS"});return OpenLayers.Request.issue(config);}};OpenLayers.Tile.Image=OpenLayers.Class(OpenLayers.Tile,{url:null,imgDiv:null,frame:null,layerAlphaHack:null,isBackBuffer:false,lastRatio:1,isFirstDraw:true,backBufferTile:null,maxGetUrlLength:null,initialize:function(layer,position,bounds,url,size,options){OpenLayers.Tile.prototype.initialize.apply(this,arguments);if(this.maxGetUrlLength!=null){OpenLayers.Util.extend(this,OpenLayers.Tile.Image.IFrame);}
this.url=url;this.frame=document.createElement('div');this.frame.style.overflow='hidden';this.frame.style.position='absolute';this.layerAlphaHack=this.layer.alpha&&OpenLayers.Util.alphaHack();},destroy:function(){if(this.imgDiv!=null){this.removeImgDiv();}
this.imgDiv=null;if((this.frame!=null)&&(this.frame.parentNode==this.layer.div)){this.layer.div.removeChild(this.frame);}
this.frame=null;if(this.backBufferTile){this.backBufferTile.destroy();this.backBufferTile=null;}
this.layer.events.unregister("loadend",this,this.resetBackBuffer);OpenLayers.Tile.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Tile.Image(this.layer,this.position,this.bounds,this.url,this.size);}
obj=OpenLayers.Tile.prototype.clone.apply(this,[obj]);obj.imgDiv=null;return obj;},draw:function(){if(this.layer!=this.layer.map.baseLayer&&this.layer.reproject){this.bounds=this.getBoundsFromBaseLayer(this.position);}
var drawTile=OpenLayers.Tile.prototype.draw.apply(this,arguments);if((OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS,this.layer.transitionEffect)!=-1)||this.layer.singleTile){if(drawTile){if(!this.backBufferTile){this.backBufferTile=this.clone();this.backBufferTile.hide();this.backBufferTile.isBackBuffer=true;this.events.register('loadend',this,this.resetBackBuffer);this.layer.events.register("loadend",this,this.resetBackBuffer);}
this.startTransition();}else{if(this.backBufferTile){this.backBufferTile.clear();}}}else{if(drawTile&&this.isFirstDraw){this.events.register('loadend',this,this.showTile);this.isFirstDraw=false;}}
if(!drawTile){return false;}
if(this.isLoading){this.events.triggerEvent("reload");}else{this.isLoading=true;this.events.triggerEvent("loadstart");}
return this.renderTile();},resetBackBuffer:function(){this.showTile();if(this.backBufferTile&&(this.isFirstDraw||!this.layer.numLoadingTiles)){this.isFirstDraw=false;var maxExtent=this.layer.maxExtent;var withinMaxExtent=(maxExtent&&this.bounds.intersectsBounds(maxExtent,false));if(withinMaxExtent){this.backBufferTile.position=this.position;this.backBufferTile.bounds=this.bounds;this.backBufferTile.size=this.size;this.backBufferTile.imageSize=this.layer.getImageSize(this.bounds)||this.size;this.backBufferTile.imageOffset=this.layer.imageOffset;this.backBufferTile.resolution=this.layer.getResolution();this.backBufferTile.renderTile();}
this.backBufferTile.hide();}},renderTile:function(){if(this.layer.async){this.initImgDiv();this.layer.getURLasync(this.bounds,this,"url",this.positionImage);}else{this.url=this.layer.getURL(this.bounds);this.initImgDiv();this.positionImage();}
return true;},positionImage:function(){if(this.layer===null){return;}
OpenLayers.Util.modifyDOMElement(this.frame,null,this.position,this.size);var imageSize=this.layer.getImageSize(this.bounds);if(this.layerAlphaHack){OpenLayers.Util.modifyAlphaImageDiv(this.imgDiv,null,null,imageSize,this.url);}else{OpenLayers.Util.modifyDOMElement(this.imgDiv,null,null,imageSize);this.imgDiv.src=this.url;}},clear:function(){if(this.imgDiv){this.hide();if(OpenLayers.Tile.Image.useBlankTile){this.imgDiv.src=OpenLayers.Util.getImagesLocation()+"blank.gif";}}},initImgDiv:function(){if(this.imgDiv==null){var offset=this.layer.imageOffset;var size=this.layer.getImageSize(this.bounds);if(this.layerAlphaHack){this.imgDiv=OpenLayers.Util.createAlphaImageDiv(null,offset,size,null,"relative",null,null,null,true);}else{this.imgDiv=OpenLayers.Util.createImage(null,offset,size,null,"relative",null,null,true);}
if(this.layer.url instanceof Array){this.imgDiv.urls=this.layer.url.slice();}
this.imgDiv.className='olTileImage';this.frame.style.zIndex=this.isBackBuffer?0:1;this.frame.appendChild(this.imgDiv);this.layer.div.appendChild(this.frame);if(this.layer.opacity!=null){OpenLayers.Util.modifyDOMElement(this.imgDiv,null,null,null,null,null,null,this.layer.opacity);}
this.imgDiv.map=this.layer.map;var onload=function(){if(this.isLoading){this.isLoading=false;this.events.triggerEvent("loadend");}};if(this.layerAlphaHack){OpenLayers.Event.observe(this.imgDiv.childNodes[0],'load',OpenLayers.Function.bind(onload,this));}else{OpenLayers.Event.observe(this.imgDiv,'load',OpenLayers.Function.bind(onload,this));}
var onerror=function(){if(this.imgDiv._attempts>OpenLayers.IMAGE_RELOAD_ATTEMPTS){onload.call(this);}};OpenLayers.Event.observe(this.imgDiv,"error",OpenLayers.Function.bind(onerror,this));}
this.imgDiv.viewRequestID=this.layer.map.viewRequestID;},removeImgDiv:function(){OpenLayers.Event.stopObservingElement(this.imgDiv);if(this.imgDiv.parentNode==this.frame){this.frame.removeChild(this.imgDiv);this.imgDiv.map=null;}
this.imgDiv.urls=null;var child=this.imgDiv.firstChild;if(child){OpenLayers.Event.stopObservingElement(child);this.imgDiv.removeChild(child);delete child;}else{this.imgDiv.src=OpenLayers.Util.getImagesLocation()+"blank.gif";}},checkImgURL:function(){if(this.layer){var loaded=this.layerAlphaHack?this.imgDiv.firstChild.src:this.imgDiv.src;if(!OpenLayers.Util.isEquivalentUrl(loaded,this.url)){this.hide();}}},startTransition:function(){if(!this.backBufferTile||!this.backBufferTile.imgDiv){return;}
var ratio=1;if(this.backBufferTile.resolution){ratio=this.backBufferTile.resolution/this.layer.getResolution();}
if(ratio!=this.lastRatio){if(this.layer.transitionEffect=='resize'){var upperLeft=new OpenLayers.LonLat(this.backBufferTile.bounds.left,this.backBufferTile.bounds.top);var size=new OpenLayers.Size(this.backBufferTile.size.w*ratio,this.backBufferTile.size.h*ratio);var px=this.layer.map.getLayerPxFromLonLat(upperLeft);OpenLayers.Util.modifyDOMElement(this.backBufferTile.frame,null,px,size);var imageSize=this.backBufferTile.imageSize;imageSize=new OpenLayers.Size(imageSize.w*ratio,imageSize.h*ratio);var imageOffset=this.backBufferTile.imageOffset;if(imageOffset){imageOffset=new OpenLayers.Pixel(imageOffset.x*ratio,imageOffset.y*ratio);}
OpenLayers.Util.modifyDOMElement(this.backBufferTile.imgDiv,null,imageOffset,imageSize);this.backBufferTile.show();}}else{if(this.layer.singleTile){this.backBufferTile.show();}else{this.backBufferTile.hide();}}
this.lastRatio=ratio;},show:function(){this.frame.style.display='';if(OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS,this.layer.transitionEffect)!=-1){if(OpenLayers.IS_GECKO===true){this.frame.scrollLeft=this.frame.scrollLeft;}}},hide:function(){this.frame.style.display='none';},CLASS_NAME:"OpenLayers.Tile.Image"});OpenLayers.Tile.Image.useBlankTile=(OpenLayers.BROWSER_NAME=="safari"||OpenLayers.BROWSER_NAME=="opera");OpenLayers.Feature=OpenLayers.Class({layer:null,id:null,lonlat:null,data:null,marker:null,popupClass:OpenLayers.Popup.AnchoredBubble,popup:null,initialize:function(layer,lonlat,data){this.layer=layer;this.lonlat=lonlat;this.data=(data!=null)?data:{};this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){if((this.layer!=null)&&(this.layer.map!=null)){if(this.popup!=null){this.layer.map.removePopup(this.popup);}}
if(this.layer!=null&&this.marker!=null){this.layer.removeMarker(this.marker);}
this.layer=null;this.id=null;this.lonlat=null;this.data=null;if(this.marker!=null){this.destroyMarker(this.marker);this.marker=null;}
if(this.popup!=null){this.destroyPopup(this.popup);this.popup=null;}},onScreen:function(){var onScreen=false;if((this.layer!=null)&&(this.layer.map!=null)){var screenBounds=this.layer.map.getExtent();onScreen=screenBounds.containsLonLat(this.lonlat);}
return onScreen;},createMarker:function(){if(this.lonlat!=null){this.marker=new OpenLayers.Marker(this.lonlat,this.data.icon);}
return this.marker;},destroyMarker:function(){this.marker.destroy();},createPopup:function(closeBox){if(this.lonlat!=null){var id=this.id+"_popup";var anchor=(this.marker)?this.marker.icon:null;if(!this.popup){this.popup=new this.popupClass(id,this.lonlat,this.data.popupSize,this.data.popupContentHTML,anchor,closeBox);}
if(this.data.overflow!=null){this.popup.contentDiv.style.overflow=this.data.overflow;}
this.popup.feature=this;}
return this.popup;},destroyPopup:function(){if(this.popup){this.popup.feature=null;this.popup.destroy();this.popup=null;}},CLASS_NAME:"OpenLayers.Feature"});OpenLayers.Handler.Click=OpenLayers.Class(OpenLayers.Handler,{delay:300,single:true,'double':false,pixelTolerance:0,stopSingle:false,stopDouble:false,timerId:null,down:null,rightclickTimerId:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);if(this.pixelTolerance!=null){this.mousedown=function(evt){this.down=evt.xy;return true;};}},mousedown:null,mouseup:function(evt){var propagate=true;if(this.checkModifiers(evt)&&this.control.handleRightClicks&&OpenLayers.Event.isRightClick(evt)){propagate=this.rightclick(evt);}
return propagate;},rightclick:function(evt){if(this.passesTolerance(evt)){if(this.rightclickTimerId!=null){this.clearTimer();this.callback('dblrightclick',[evt]);return!this.stopDouble;}else{var clickEvent=this['double']?OpenLayers.Util.extend({},evt):this.callback('rightclick',[evt]);var delayedRightCall=OpenLayers.Function.bind(this.delayedRightCall,this,clickEvent);this.rightclickTimerId=window.setTimeout(delayedRightCall,this.delay);}}
return!this.stopSingle;},delayedRightCall:function(evt){this.rightclickTimerId=null;if(evt){this.callback('rightclick',[evt]);}
return!this.stopSingle;},dblclick:function(evt){if(this.passesTolerance(evt)){if(this["double"]){this.callback('dblclick',[evt]);}
this.clearTimer();}
return!this.stopDouble;},click:function(evt){if(this.passesTolerance(evt)){if(this.timerId!=null){this.clearTimer();}else{var clickEvent=this.single?OpenLayers.Util.extend({},evt):null;this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,clickEvent),this.delay);}}
return!this.stopSingle;},passesTolerance:function(evt){var passes=true;if(this.pixelTolerance!=null&&this.down){var dpx=Math.sqrt(Math.pow(this.down.x-evt.xy.x,2)+
Math.pow(this.down.y-evt.xy.y,2));if(dpx>this.pixelTolerance){passes=false;}}
return passes;},clearTimer:function(){if(this.timerId!=null){window.clearTimeout(this.timerId);this.timerId=null;}
if(this.rightclickTimerId!=null){window.clearTimeout(this.rightclickTimerId);this.rightclickTimerId=null;}},delayedCall:function(evt){this.timerId=null;if(evt){this.callback('click',[evt]);}},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.clearTimer();this.down=null;deactivated=true;}
return deactivated;},CLASS_NAME:"OpenLayers.Handler.Click"});OpenLayers.Handler.Drag=OpenLayers.Class(OpenLayers.Handler,{started:false,stopDown:true,dragging:false,last:null,start:null,oldOnselectstart:null,interval:0,timeoutId:null,documentDrag:false,documentEvents:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);},down:function(evt){},move:function(evt){},up:function(evt){},out:function(evt){},mousedown:function(evt){var propagate=true;this.dragging=false;if(this.checkModifiers(evt)&&OpenLayers.Event.isLeftClick(evt)){this.started=true;this.start=evt.xy;this.last=evt.xy;OpenLayers.Element.addClass(this.map.viewPortDiv,"olDragDown");this.down(evt);this.callback("down",[evt.xy]);OpenLayers.Event.stop(evt);if(!this.oldOnselectstart){this.oldOnselectstart=(document.onselectstart)?document.onselectstart:OpenLayers.Function.True;}
document.onselectstart=OpenLayers.Function.False;propagate=!this.stopDown;}else{this.started=false;this.start=null;this.last=null;}
return propagate;},mousemove:function(evt){if(this.started&&!this.timeoutId&&(evt.xy.x!=this.last.x||evt.xy.y!=this.last.y)){if(this.documentDrag===true&&this.documentEvents){if(evt.element===document){this.adjustXY(evt);this.setEvent(evt);}else{this.destroyDocumentEvents();}}
if(this.interval>0){this.timeoutId=setTimeout(OpenLayers.Function.bind(this.removeTimeout,this),this.interval);}
this.dragging=true;this.move(evt);this.callback("move",[evt.xy]);if(!this.oldOnselectstart){this.oldOnselectstart=document.onselectstart;document.onselectstart=OpenLayers.Function.False;}
this.last=this.evt.xy;}
return true;},removeTimeout:function(){this.timeoutId=null;},mouseup:function(evt){if(this.started){if(this.documentDrag===true&&this.documentEvents){this.adjustXY(evt);this.destroyDocumentEvents();}
var dragged=(this.start!=this.last);this.started=false;this.dragging=false;OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown");this.up(evt);this.callback("up",[evt.xy]);if(dragged){this.callback("done",[evt.xy]);}
document.onselectstart=this.oldOnselectstart;}
return true;},mouseout:function(evt){if(this.started&&OpenLayers.Util.mouseLeft(evt,this.map.div)){if(this.documentDrag===true){this.documentEvents=new OpenLayers.Events(this,document,null,null,{includeXY:true});this.documentEvents.on({mousemove:this.mousemove,mouseup:this.mouseup});OpenLayers.Element.addClass(document.body,"olDragDown");}else{var dragged=(this.start!=this.last);this.started=false;this.dragging=false;OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown");this.out(evt);this.callback("out",[]);if(dragged){this.callback("done",[evt.xy]);}
if(document.onselectstart){document.onselectstart=this.oldOnselectstart;}}}
return true;},click:function(evt){return(this.start==this.last);},activate:function(){var activated=false;if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){this.dragging=false;activated=true;}
return activated;},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.started=false;this.dragging=false;this.start=null;this.last=null;deactivated=true;OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown");}
return deactivated;},adjustXY:function(evt){var pos=OpenLayers.Util.pagePosition(this.map.viewPortDiv);evt.xy.x-=pos[0];evt.xy.y-=pos[1];},destroyDocumentEvents:function(){OpenLayers.Element.removeClass(document.body,"olDragDown");this.documentEvents.destroy();this.documentEvents=null;},CLASS_NAME:"OpenLayers.Handler.Drag"});OpenLayers.Handler.Feature=OpenLayers.Class(OpenLayers.Handler,{EVENTMAP:{'click':{'in':'click','out':'clickout'},'mousemove':{'in':'over','out':'out'},'dblclick':{'in':'dblclick','out':null},'mousedown':{'in':null,'out':null},'mouseup':{'in':null,'out':null}},feature:null,lastFeature:null,down:null,up:null,clickTolerance:4,geometryTypes:null,stopClick:true,stopDown:true,stopUp:false,initialize:function(control,layer,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,[control,callbacks,options]);this.layer=layer;},mousedown:function(evt){this.down=evt.xy;return this.handle(evt)?!this.stopDown:true;},mouseup:function(evt){this.up=evt.xy;return this.handle(evt)?!this.stopUp:true;},click:function(evt){return this.handle(evt)?!this.stopClick:true;},mousemove:function(evt){if(!this.callbacks['over']&&!this.callbacks['out']){return true;}
this.handle(evt);return true;},dblclick:function(evt){return!this.handle(evt);},geometryTypeMatches:function(feature){return this.geometryTypes==null||OpenLayers.Util.indexOf(this.geometryTypes,feature.geometry.CLASS_NAME)>-1;},handle:function(evt){if(this.feature&&!this.feature.layer){this.feature=null;}
var type=evt.type;var handled=false;var previouslyIn=!!(this.feature);var click=(type=="click"||type=="dblclick");this.feature=this.layer.getFeatureFromEvent(evt);if(this.feature&&!this.feature.layer){this.feature=null;}
if(this.lastFeature&&!this.lastFeature.layer){this.lastFeature=null;}
if(this.feature){var inNew=(this.feature!=this.lastFeature);if(this.geometryTypeMatches(this.feature)){if(previouslyIn&&inNew){if(this.lastFeature){this.triggerCallback(type,'out',[this.lastFeature]);}
this.triggerCallback(type,'in',[this.feature]);}else if(!previouslyIn||click){this.triggerCallback(type,'in',[this.feature]);}
this.lastFeature=this.feature;handled=true;}else{if(this.lastFeature&&(previouslyIn&&inNew||click)){this.triggerCallback(type,'out',[this.lastFeature]);}
this.feature=null;}}else{if(this.lastFeature&&(previouslyIn||click)){this.triggerCallback(type,'out',[this.lastFeature]);}}
return handled;},triggerCallback:function(type,mode,args){var key=this.EVENTMAP[type][mode];if(key){if(type=='click'&&this.up&&this.down){var dpx=Math.sqrt(Math.pow(this.up.x-this.down.x,2)+
Math.pow(this.up.y-this.down.y,2));if(dpx<=this.clickTolerance){this.callback(key,args);}}else{this.callback(key,args);}}},activate:function(){var activated=false;if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){this.moveLayerToTop();this.map.events.on({"removelayer":this.handleMapEvents,"changelayer":this.handleMapEvents,scope:this});activated=true;}
return activated;},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.moveLayerBack();this.feature=null;this.lastFeature=null;this.down=null;this.up=null;this.map.events.un({"removelayer":this.handleMapEvents,"changelayer":this.handleMapEvents,scope:this});deactivated=true;}
return deactivated;},handleMapEvents:function(evt){if(!evt.property||evt.property=="order"){this.moveLayerToTop();}},moveLayerToTop:function(){var index=Math.max(this.map.Z_INDEX_BASE['Feature']-1,this.layer.getZIndex())+1;this.layer.setZIndex(index);},moveLayerBack:function(){var index=this.layer.getZIndex()-1;if(index>=this.map.Z_INDEX_BASE['Feature']){this.layer.setZIndex(index);}else{this.map.setLayerZIndex(this.layer,this.map.getLayerIndex(this.layer));}},CLASS_NAME:"OpenLayers.Handler.Feature"});OpenLayers.Handler.Hover=OpenLayers.Class(OpenLayers.Handler,{delay:500,pixelTolerance:null,stopMove:false,px:null,timerId:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);},mousemove:function(evt){if(this.passesTolerance(evt.xy)){this.clearTimer();this.callback('move',[evt]);this.px=evt.xy;evt=OpenLayers.Util.extend({},evt);this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,evt),this.delay);}
return!this.stopMove;},mouseout:function(evt){if(OpenLayers.Util.mouseLeft(evt,this.map.div)){this.clearTimer();this.callback('move',[evt]);}
return true;},passesTolerance:function(px){var passes=true;if(this.pixelTolerance&&this.px){var dpx=Math.sqrt(Math.pow(this.px.x-px.x,2)+
Math.pow(this.px.y-px.y,2));if(dpx<this.pixelTolerance){passes=false;}}
return passes;},clearTimer:function(){if(this.timerId!=null){window.clearTimeout(this.timerId);this.timerId=null;}},delayedCall:function(evt){this.callback('pause',[evt]);},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.clearTimer();deactivated=true;}
return deactivated;},CLASS_NAME:"OpenLayers.Handler.Hover"});OpenLayers.Handler.Keyboard=OpenLayers.Class(OpenLayers.Handler,{KEY_EVENTS:["keydown","keyup"],eventListener:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);this.eventListener=OpenLayers.Function.bindAsEventListener(this.handleKeyEvent,this);},destroy:function(){this.deactivate();this.eventListener=null;OpenLayers.Handler.prototype.destroy.apply(this,arguments);},activate:function(){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){for(var i=0,len=this.KEY_EVENTS.length;i<len;i++){OpenLayers.Event.observe(document,this.KEY_EVENTS[i],this.eventListener);}
return true;}else{return false;}},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){for(var i=0,len=this.KEY_EVENTS.length;i<len;i++){OpenLayers.Event.stopObserving(document,this.KEY_EVENTS[i],this.eventListener);}
deactivated=true;}
return deactivated;},handleKeyEvent:function(evt){if(this.checkModifiers(evt)){this.callback(evt.type,[evt]);}},CLASS_NAME:"OpenLayers.Handler.Keyboard"});OpenLayers.Handler.MouseWheel=OpenLayers.Class(OpenLayers.Handler,{wheelListener:null,mousePosition:null,interval:0,delta:0,cumulative:true,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);this.wheelListener=OpenLayers.Function.bindAsEventListener(this.onWheelEvent,this);},destroy:function(){OpenLayers.Handler.prototype.destroy.apply(this,arguments);this.wheelListener=null;},onWheelEvent:function(e){if(!this.map||!this.checkModifiers(e)){return;}
var overScrollableDiv=false;var overLayerDiv=false;var overMapDiv=false;var elem=OpenLayers.Event.element(e);while((elem!=null)&&!overMapDiv&&!overScrollableDiv){if(!overScrollableDiv){try{if(elem.currentStyle){overflow=elem.currentStyle["overflow"];}else{var style=document.defaultView.getComputedStyle(elem,null);var overflow=style.getPropertyValue("overflow");}
overScrollableDiv=(overflow&&(overflow=="auto")||(overflow=="scroll"));}catch(err){}}
if(!overLayerDiv){for(var i=0,len=this.map.layers.length;i<len;i++){if(elem==this.map.layers[i].div||elem==this.map.layers[i].pane){overLayerDiv=true;break;}}}
overMapDiv=(elem==this.map.div);elem=elem.parentNode;}
if(!overScrollableDiv&&overMapDiv){if(overLayerDiv){var delta=0;if(!e){e=window.event;}
if(e.wheelDelta){delta=e.wheelDelta/120;if(window.opera&&window.opera.version()<9.2){delta=-delta;}}else if(e.detail){delta=-e.detail/3;}
this.delta=this.delta+delta;if(this.interval){window.clearTimeout(this._timeoutId);this._timeoutId=window.setTimeout(OpenLayers.Function.bind(function(){this.wheelZoom(e);},this),this.interval);}else{this.wheelZoom(e);}}
OpenLayers.Event.stop(e);}},wheelZoom:function(e){var delta=this.delta;this.delta=0;if(delta){if(this.mousePosition){e.xy=this.mousePosition;}
if(!e.xy){e.xy=this.map.getPixelFromLonLat(this.map.getCenter());}
if(delta<0){this.callback("down",[e,this.cumulative?delta:-1]);}else{this.callback("up",[e,this.cumulative?delta:1]);}}},mousemove:function(evt){this.mousePosition=evt.xy;},activate:function(evt){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){var wheelListener=this.wheelListener;OpenLayers.Event.observe(window,"DOMMouseScroll",wheelListener);OpenLayers.Event.observe(window,"mousewheel",wheelListener);OpenLayers.Event.observe(document,"mousewheel",wheelListener);return true;}else{return false;}},deactivate:function(evt){if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){var wheelListener=this.wheelListener;OpenLayers.Event.stopObserving(window,"DOMMouseScroll",wheelListener);OpenLayers.Event.stopObserving(window,"mousewheel",wheelListener);OpenLayers.Event.stopObserving(document,"mousewheel",wheelListener);return true;}else{return false;}},CLASS_NAME:"OpenLayers.Handler.MouseWheel"});OpenLayers.Layer=OpenLayers.Class({id:null,name:null,div:null,opacity:null,alwaysInRange:null,EVENT_TYPES:["loadstart","loadend","loadcancel","visibilitychanged","move","moveend"],RESOLUTION_PROPERTIES:['scales','resolutions','maxScale','minScale','maxResolution','minResolution','numZoomLevels','maxZoomLevel'],events:null,map:null,isBaseLayer:false,alpha:false,displayInLayerSwitcher:true,visibility:true,attribution:null,inRange:false,imageSize:null,imageOffset:null,options:null,eventListeners:null,gutter:0,projection:null,units:null,scales:null,resolutions:null,maxExtent:null,minExtent:null,maxResolution:null,minResolution:null,numZoomLevels:null,minScale:null,maxScale:null,displayOutsideMaxExtent:false,wrapDateLine:false,transitionEffect:null,SUPPORTED_TRANSITIONS:['resize'],metadata:{},initialize:function(name,options){this.addOptions(options);this.name=name;if(this.id==null){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");this.div=OpenLayers.Util.createDiv(this.id);this.div.style.width="100%";this.div.style.height="100%";this.div.dir="ltr";this.events=new OpenLayers.Events(this,this.div,this.EVENT_TYPES);if(this.eventListeners instanceof Object){this.events.on(this.eventListeners);}}
if(this.wrapDateLine){this.displayOutsideMaxExtent=true;}},destroy:function(setNewBaseLayer){if(setNewBaseLayer==null){setNewBaseLayer=true;}
if(this.map!=null){this.map.removeLayer(this,setNewBaseLayer);}
this.projection=null;this.map=null;this.name=null;this.div=null;this.options=null;if(this.events){if(this.eventListeners){this.events.un(this.eventListeners);}
this.events.destroy();}
this.eventListeners=null;this.events=null;},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer(this.name,this.getOptions());}
OpenLayers.Util.applyDefaults(obj,this);obj.map=null;return obj;},getOptions:function(){var options={};for(var o in this.options){options[o]=this[o];}
return options;},setName:function(newName){if(newName!=this.name){this.name=newName;if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"name"});}}},addOptions:function(newOptions){if(this.options==null){this.options={};}
OpenLayers.Util.extend(this.options,newOptions);OpenLayers.Util.extend(this,newOptions);if(typeof this.projection=="string"){this.projection=new OpenLayers.Projection(this.projection);}
if(this.projection&&this.projection.getUnits()){this.units=this.projection.getUnits();}
if(this.map){var properties=this.RESOLUTION_PROPERTIES.concat(["projection","units","minExtent","maxExtent"]);for(var o in newOptions){if(newOptions.hasOwnProperty(o)&&OpenLayers.Util.indexOf(properties,o)>=0){this.initResolutions();break;}}}},onMapResize:function(){},redraw:function(){var redrawn=false;if(this.map){this.inRange=this.calculateInRange();var extent=this.getExtent();if(extent&&this.inRange&&this.visibility){var zoomChanged=true;this.moveTo(extent,zoomChanged,false);this.events.triggerEvent("moveend",{"zoomChanged":zoomChanged});redrawn=true;}}
return redrawn;},moveTo:function(bounds,zoomChanged,dragging){var display=this.visibility;if(!this.isBaseLayer){display=display&&this.inRange;}
this.display(display);},setMap:function(map){if(this.map==null){this.map=map;this.maxExtent=this.maxExtent||this.map.maxExtent;this.minExtent=this.minExtent||this.map.minExtent;this.projection=this.projection||this.map.projection;if(typeof this.projection=="string"){this.projection=new OpenLayers.Projection(this.projection);}
this.units=this.projection.getUnits()||this.units||this.map.units;this.initResolutions();if(!this.isBaseLayer){this.inRange=this.calculateInRange();var show=((this.visibility)&&(this.inRange));this.div.style.display=show?"":"none";}
this.setTileSize();}},afterAdd:function(){},removeMap:function(map){},getImageSize:function(bounds){return(this.imageSize||this.tileSize);},setTileSize:function(size){var tileSize=(size)?size:((this.tileSize)?this.tileSize:this.map.getTileSize());this.tileSize=tileSize;if(this.gutter){this.imageOffset=new OpenLayers.Pixel(-this.gutter,-this.gutter);this.imageSize=new OpenLayers.Size(tileSize.w+(2*this.gutter),tileSize.h+(2*this.gutter));}},getVisibility:function(){return this.visibility;},setVisibility:function(visibility){if(visibility!=this.visibility){this.visibility=visibility;this.display(visibility);this.redraw();if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"visibility"});}
this.events.triggerEvent("visibilitychanged");}},display:function(display){if(display!=(this.div.style.display!="none")){this.div.style.display=(display&&this.calculateInRange())?"block":"none";}},calculateInRange:function(){var inRange=false;if(this.alwaysInRange){inRange=true;}else{if(this.map){var resolution=this.map.getResolution();inRange=((resolution>=this.minResolution)&&(resolution<=this.maxResolution));}}
return inRange;},setIsBaseLayer:function(isBaseLayer){if(isBaseLayer!=this.isBaseLayer){this.isBaseLayer=isBaseLayer;if(this.map!=null){this.map.events.triggerEvent("changebaselayer",{layer:this});}}},initResolutions:function(){var i,len;var props={},alwaysInRange=true;for(i=0,len=this.RESOLUTION_PROPERTIES.length;i<len;i++){var p=this.RESOLUTION_PROPERTIES[i];props[p]=this.options[p];if(alwaysInRange&&this.options[p]){alwaysInRange=false;}}
if(this.alwaysInRange==null){this.alwaysInRange=alwaysInRange;}
if(props.resolutions==null){props.resolutions=this.resolutionsFromScales(props.scales);}
if(props.resolutions==null){props.resolutions=this.calculateResolutions(props);}
if(props.resolutions==null){for(i=0,len=this.RESOLUTION_PROPERTIES.length;i<len;i++){var p=this.RESOLUTION_PROPERTIES[i];props[p]=this.options[p]!=null?this.options[p]:this.map[p];}
if(props.resolutions==null){props.resolutions=this.resolutionsFromScales(props.scales);}
if(props.resolutions==null){props.resolutions=this.calculateResolutions(props);}}
var maxResolution;if(this.options.maxResolution&&this.options.maxResolution!=="auto"){maxResolution=this.options.maxResolution;}
if(this.options.minScale){maxResolution=OpenLayers.Util.getResolutionFromScale(this.options.minScale,this.units);}
var minResolution;if(this.options.minResolution&&this.options.minResolution!=="auto"){minResolution=this.options.minResolution;}
if(this.options.maxScale){minResolution=OpenLayers.Util.getResolutionFromScale(this.options.maxScale,this.units);}
if(props.resolutions){props.resolutions.sort(function(a,b){return(b-a);});if(!maxResolution){maxResolution=props.resolutions[0];}
if(!minResolution){var lastIdx=props.resolutions.length-1;minResolution=props.resolutions[lastIdx];}}
this.resolutions=props.resolutions;if(this.resolutions){len=this.resolutions.length;this.scales=new Array(len);for(i=0;i<len;i++){this.scales[i]=OpenLayers.Util.getScaleFromResolution(this.resolutions[i],this.units);}
this.numZoomLevels=len;}
this.minResolution=minResolution;if(minResolution){this.maxScale=OpenLayers.Util.getScaleFromResolution(minResolution,this.units);}
this.maxResolution=maxResolution;if(maxResolution){this.minScale=OpenLayers.Util.getScaleFromResolution(maxResolution,this.units);}},resolutionsFromScales:function(scales){if(scales==null){return;}
var resolutions,i,len;len=scales.length;resolutions=new Array(len);for(i=0;i<len;i++){resolutions[i]=OpenLayers.Util.getResolutionFromScale(scales[i],this.units);}
return resolutions;},calculateResolutions:function(props){var maxResolution=props.maxResolution;if(props.minScale!=null){maxResolution=OpenLayers.Util.getResolutionFromScale(props.minScale,this.units);}else if(maxResolution=="auto"&&this.maxExtent!=null){var viewSize=this.map.getSize();var wRes=this.maxExtent.getWidth()/viewSize.w;var hRes=this.maxExtent.getHeight()/viewSize.h;maxResolution=Math.max(wRes,hRes);}
var minResolution=props.minResolution;if(props.maxScale!=null){minResolution=OpenLayers.Util.getResolutionFromScale(props.maxScale,this.units);}else if(props.minResolution=="auto"&&this.minExtent!=null){var viewSize=this.map.getSize();var wRes=this.minExtent.getWidth()/viewSize.w;var hRes=this.minExtent.getHeight()/viewSize.h;minResolution=Math.max(wRes,hRes);}
var maxZoomLevel=props.maxZoomLevel;var numZoomLevels=props.numZoomLevels;if(typeof minResolution==="number"&&typeof maxResolution==="number"&&numZoomLevels===undefined){var ratio=maxResolution/minResolution;numZoomLevels=Math.floor(Math.log(ratio)/Math.log(2))+1;}else if(numZoomLevels===undefined&&maxZoomLevel!=null){numZoomLevels=maxZoomLevel+1;}
if(typeof numZoomLevels!=="number"||numZoomLevels<=0||(typeof maxResolution!=="number"&&typeof minResolution!=="number")){return;}
var resolutions=new Array(numZoomLevels);var base=2;if(typeof minResolution=="number"&&typeof maxResolution=="number"){base=Math.pow((maxResolution/minResolution),(1/(numZoomLevels-1)));}
var i;if(typeof maxResolution==="number"){for(i=0;i<numZoomLevels;i++){resolutions[i]=maxResolution/Math.pow(base,i);}}else{for(i=0;i<numZoomLevels;i++){resolutions[numZoomLevels-1-i]=minResolution*Math.pow(base,i);}}
return resolutions;},getResolution:function(){var zoom=this.map.getZoom();return this.getResolutionForZoom(zoom);},getExtent:function(){return this.map.calculateBounds();},getZoomForExtent:function(extent,closest){var viewSize=this.map.getSize();var idealResolution=Math.max(extent.getWidth()/viewSize.w,extent.getHeight()/viewSize.h);return this.getZoomForResolution(idealResolution,closest);},getDataExtent:function(){},getResolutionForZoom:function(zoom){zoom=Math.max(0,Math.min(zoom,this.resolutions.length-1));var resolution;if(this.map.fractionalZoom){var low=Math.floor(zoom);var high=Math.ceil(zoom);resolution=this.resolutions[low]-
((zoom-low)*(this.resolutions[low]-this.resolutions[high]));}else{resolution=this.resolutions[Math.round(zoom)];}
return resolution;},getZoomForResolution:function(resolution,closest){var zoom;if(this.map.fractionalZoom){var lowZoom=0;var highZoom=this.resolutions.length-1;var highRes=this.resolutions[lowZoom];var lowRes=this.resolutions[highZoom];var res;for(var i=0,len=this.resolutions.length;i<len;++i){res=this.resolutions[i];if(res>=resolution){highRes=res;lowZoom=i;}
if(res<=resolution){lowRes=res;highZoom=i;break;}}
var dRes=highRes-lowRes;if(dRes>0){zoom=lowZoom+((highRes-resolution)/dRes);}else{zoom=lowZoom;}}else{var diff;var minDiff=Number.POSITIVE_INFINITY;for(var i=0,len=this.resolutions.length;i<len;i++){if(closest){diff=Math.abs(this.resolutions[i]-resolution);if(diff>minDiff){break;}
minDiff=diff;}else{if(this.resolutions[i]<resolution){break;}}}
zoom=Math.max(0,i-1);}
return zoom;},getLonLatFromViewPortPx:function(viewPortPx){var lonlat=null;if(viewPortPx!=null){var size=this.map.getSize();var center=this.map.getCenter();if(center){var res=this.map.getResolution();var delta_x=viewPortPx.x-(size.w/2);var delta_y=viewPortPx.y-(size.h/2);lonlat=new OpenLayers.LonLat(center.lon+delta_x*res,center.lat-delta_y*res);if(this.wrapDateLine){lonlat=lonlat.wrapDateLine(this.maxExtent);}}}
return lonlat;},getViewPortPxFromLonLat:function(lonlat){var px=null;if(lonlat!=null){var resolution=this.map.getResolution();var extent=this.map.getExtent();px=new OpenLayers.Pixel((1/resolution*(lonlat.lon-extent.left)),(1/resolution*(extent.top-lonlat.lat)));}
return px;},setOpacity:function(opacity){if(opacity!=this.opacity){this.opacity=opacity;for(var i=0,len=this.div.childNodes.length;i<len;++i){var element=this.div.childNodes[i].firstChild;OpenLayers.Util.modifyDOMElement(element,null,null,null,null,null,null,opacity);}
if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"opacity"});}}},getZIndex:function(){return this.div.style.zIndex;},setZIndex:function(zIndex){this.div.style.zIndex=zIndex;},adjustBounds:function(bounds){if(this.gutter){var mapGutter=this.gutter*this.map.getResolution();bounds=new OpenLayers.Bounds(bounds.left-mapGutter,bounds.bottom-mapGutter,bounds.right+mapGutter,bounds.top+mapGutter);}
if(this.wrapDateLine){var wrappingOptions={'rightTolerance':this.getResolution()};bounds=bounds.wrapDateLine(this.maxExtent,wrappingOptions);}
return bounds;},CLASS_NAME:"OpenLayers.Layer"});(function(){var oXMLHttpRequest=window.XMLHttpRequest;var bGecko=!!window.controllers,bIE=window.document.all&&!window.opera,bIE7=bIE&&window.navigator.userAgent.match(/MSIE ([\.0-9]+)/)&&RegExp.$1==7;function cXMLHttpRequest(){this._object=oXMLHttpRequest&&!bIE7?new oXMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");this._listeners=[];};if(bGecko&&oXMLHttpRequest.wrapped)
cXMLHttpRequest.wrapped=oXMLHttpRequest.wrapped;cXMLHttpRequest.UNSENT=0;cXMLHttpRequest.OPENED=1;cXMLHttpRequest.HEADERS_RECEIVED=2;cXMLHttpRequest.LOADING=3;cXMLHttpRequest.DONE=4;cXMLHttpRequest.prototype.readyState=cXMLHttpRequest.UNSENT;cXMLHttpRequest.prototype.responseText='';cXMLHttpRequest.prototype.responseXML=null;cXMLHttpRequest.prototype.status=0;cXMLHttpRequest.prototype.statusText='';cXMLHttpRequest.prototype.onreadystatechange=null;cXMLHttpRequest.onreadystatechange=null;cXMLHttpRequest.onopen=null;cXMLHttpRequest.onsend=null;cXMLHttpRequest.onabort=null;cXMLHttpRequest.prototype.open=function(sMethod,sUrl,bAsync,sUser,sPassword){delete this._headers;if(arguments.length<3)
bAsync=true;this._async=bAsync;var oRequest=this,nState=this.readyState,fOnUnload;if(bIE&&bAsync){fOnUnload=function(){if(nState!=cXMLHttpRequest.DONE){fCleanTransport(oRequest);oRequest.abort();}};window.attachEvent("onunload",fOnUnload);}
if(cXMLHttpRequest.onopen)
cXMLHttpRequest.onopen.apply(this,arguments);if(arguments.length>4)
this._object.open(sMethod,sUrl,bAsync,sUser,sPassword);else
if(arguments.length>3)
this._object.open(sMethod,sUrl,bAsync,sUser);else
this._object.open(sMethod,sUrl,bAsync);if(!bGecko&&!bIE){this.readyState=cXMLHttpRequest.OPENED;fReadyStateChange(this);}
this._object.onreadystatechange=function(){if(bGecko&&!bAsync)
return;oRequest.readyState=oRequest._object.readyState;fSynchronizeValues(oRequest);if(oRequest._aborted){oRequest.readyState=cXMLHttpRequest.UNSENT;return;}
if(oRequest.readyState==cXMLHttpRequest.DONE){fCleanTransport(oRequest);if(bIE&&bAsync)
window.detachEvent("onunload",fOnUnload);}
if(nState!=oRequest.readyState)
fReadyStateChange(oRequest);nState=oRequest.readyState;}};cXMLHttpRequest.prototype.send=function(vData){if(cXMLHttpRequest.onsend)
cXMLHttpRequest.onsend.apply(this,arguments);if(vData&&vData.nodeType){vData=window.XMLSerializer?new window.XMLSerializer().serializeToString(vData):vData.xml;if(!this._headers["Content-Type"])
this._object.setRequestHeader("Content-Type","application/xml");}
this._object.send(vData);if(bGecko&&!this._async){this.readyState=cXMLHttpRequest.OPENED;fSynchronizeValues(this);while(this.readyState<cXMLHttpRequest.DONE){this.readyState++;fReadyStateChange(this);if(this._aborted)
return;}}};cXMLHttpRequest.prototype.abort=function(){if(cXMLHttpRequest.onabort)
cXMLHttpRequest.onabort.apply(this,arguments);if(this.readyState>cXMLHttpRequest.UNSENT)
this._aborted=true;this._object.abort();fCleanTransport(this);};cXMLHttpRequest.prototype.getAllResponseHeaders=function(){return this._object.getAllResponseHeaders();};cXMLHttpRequest.prototype.getResponseHeader=function(sName){return this._object.getResponseHeader(sName);};cXMLHttpRequest.prototype.setRequestHeader=function(sName,sValue){if(!this._headers)
this._headers={};this._headers[sName]=sValue;return this._object.setRequestHeader(sName,sValue);};cXMLHttpRequest.prototype.addEventListener=function(sName,fHandler,bUseCapture){for(var nIndex=0,oListener;oListener=this._listeners[nIndex];nIndex++)
if(oListener[0]==sName&&oListener[1]==fHandler&&oListener[2]==bUseCapture)
return;this._listeners.push([sName,fHandler,bUseCapture]);};cXMLHttpRequest.prototype.removeEventListener=function(sName,fHandler,bUseCapture){for(var nIndex=0,oListener;oListener=this._listeners[nIndex];nIndex++)
if(oListener[0]==sName&&oListener[1]==fHandler&&oListener[2]==bUseCapture)
break;if(oListener)
this._listeners.splice(nIndex,1);};cXMLHttpRequest.prototype.dispatchEvent=function(oEvent){var oEventPseudo={'type':oEvent.type,'target':this,'currentTarget':this,'eventPhase':2,'bubbles':oEvent.bubbles,'cancelable':oEvent.cancelable,'timeStamp':oEvent.timeStamp,'stopPropagation':function(){},'preventDefault':function(){},'initEvent':function(){}};if(oEventPseudo.type=="readystatechange"&&this.onreadystatechange)
(this.onreadystatechange.handleEvent||this.onreadystatechange).apply(this,[oEventPseudo]);for(var nIndex=0,oListener;oListener=this._listeners[nIndex];nIndex++)
if(oListener[0]==oEventPseudo.type&&!oListener[2])
(oListener[1].handleEvent||oListener[1]).apply(this,[oEventPseudo]);};cXMLHttpRequest.prototype.toString=function(){return'['+"object"+' '+"XMLHttpRequest"+']';};cXMLHttpRequest.toString=function(){return'['+"XMLHttpRequest"+']';};function fReadyStateChange(oRequest){if(cXMLHttpRequest.onreadystatechange)
cXMLHttpRequest.onreadystatechange.apply(oRequest);oRequest.dispatchEvent({'type':"readystatechange",'bubbles':false,'cancelable':false,'timeStamp':new Date+0});};function fGetDocument(oRequest){var oDocument=oRequest.responseXML,sResponse=oRequest.responseText;if(bIE&&sResponse&&oDocument&&!oDocument.documentElement&&oRequest.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/)){oDocument=new window.ActiveXObject("Microsoft.XMLDOM");oDocument.async=false;oDocument.validateOnParse=false;oDocument.loadXML(sResponse);}
if(oDocument)
if((bIE&&oDocument.parseError!=0)||!oDocument.documentElement||(oDocument.documentElement&&oDocument.documentElement.tagName=="parsererror"))
return null;return oDocument;};function fSynchronizeValues(oRequest){try{oRequest.responseText=oRequest._object.responseText;}catch(e){}
try{oRequest.responseXML=fGetDocument(oRequest._object);}catch(e){}
try{oRequest.status=oRequest._object.status;}catch(e){}
try{oRequest.statusText=oRequest._object.statusText;}catch(e){}};function fCleanTransport(oRequest){oRequest._object.onreadystatechange=new window.Function;};if(!window.Function.prototype.apply){window.Function.prototype.apply=function(oRequest,oArguments){if(!oArguments)
oArguments=[];oRequest.__func=this;oRequest.__func(oArguments[0],oArguments[1],oArguments[2],oArguments[3],oArguments[4]);delete oRequest.__func;};};OpenLayers.Request.XMLHttpRequest=cXMLHttpRequest;})();OpenLayers.Control.DragPan=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,panned:false,interval:25,documentDrag:false,draw:function(){this.handler=new OpenLayers.Handler.Drag(this,{"move":this.panMap,"done":this.panMapDone},{interval:this.interval,documentDrag:this.documentDrag});},panMap:function(xy){this.panned=true;this.map.pan(this.handler.last.x-xy.x,this.handler.last.y-xy.y,{dragging:this.handler.dragging,animate:false});},panMapDone:function(xy){if(this.panned){this.panMap(xy);this.panned=false;}},CLASS_NAME:"OpenLayers.Control.DragPan"});OpenLayers.Control.KeyboardDefaults=OpenLayers.Class(OpenLayers.Control,{autoActivate:true,slideFactor:75,initialize:function(){OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){if(this.handler){this.handler.destroy();}
this.handler=null;OpenLayers.Control.prototype.destroy.apply(this,arguments);},draw:function(){this.handler=new OpenLayers.Handler.Keyboard(this,{"keydown":this.defaultKeyPress});},defaultKeyPress:function(evt){switch(evt.keyCode){case OpenLayers.Event.KEY_LEFT:this.map.pan(-this.slideFactor,0);break;case OpenLayers.Event.KEY_RIGHT:this.map.pan(this.slideFactor,0);break;case OpenLayers.Event.KEY_UP:this.map.pan(0,-this.slideFactor);break;case OpenLayers.Event.KEY_DOWN:this.map.pan(0,this.slideFactor);break;case 33:var size=this.map.getSize();this.map.pan(0,-0.75*size.h);break;case 34:var size=this.map.getSize();this.map.pan(0,0.75*size.h);break;case 35:var size=this.map.getSize();this.map.pan(0.75*size.w,0);break;case 36:var size=this.map.getSize();this.map.pan(-0.75*size.w,0);break;case 43:case 61:case 187:case 107:this.map.zoomIn();break;case 45:case 109:case 189:case 95:this.map.zoomOut();break;}},CLASS_NAME:"OpenLayers.Control.KeyboardDefaults"});OpenLayers.State={UNKNOWN:'Unknown',INSERT:'Insert',UPDATE:'Update',DELETE:'Delete'};OpenLayers.Feature.Vector=OpenLayers.Class(OpenLayers.Feature,{fid:null,geometry:null,attributes:null,bounds:null,state:null,style:null,url:null,renderIntent:"default",initialize:function(geometry,attributes,style){OpenLayers.Feature.prototype.initialize.apply(this,[null,null,attributes]);this.lonlat=null;this.geometry=geometry?geometry:null;this.state=null;this.attributes={};if(attributes){this.attributes=OpenLayers.Util.extend(this.attributes,attributes);}
this.style=style?style:null;},destroy:function(){if(this.layer){this.layer.removeFeatures(this);this.layer=null;}
this.geometry=null;OpenLayers.Feature.prototype.destroy.apply(this,arguments);},clone:function(){return new OpenLayers.Feature.Vector(this.geometry?this.geometry.clone():null,this.attributes,this.style);},onScreen:function(boundsOnly){var onScreen=false;if(this.layer&&this.layer.map){var screenBounds=this.layer.map.getExtent();if(boundsOnly){var featureBounds=this.geometry.getBounds();onScreen=screenBounds.intersectsBounds(featureBounds);}else{var screenPoly=screenBounds.toGeometry();onScreen=screenPoly.intersects(this.geometry);}}
return onScreen;},getVisibility:function(){return!(this.style&&this.style.display=='none'||!this.layer||this.layer&&this.layer.styleMap&&this.layer.styleMap.createSymbolizer(this,this.renderIntent).display=='none'||this.layer&&!this.layer.getVisibility());},createMarker:function(){return null;},destroyMarker:function(){},createPopup:function(){return null;},atPoint:function(lonlat,toleranceLon,toleranceLat){var atPoint=false;if(this.geometry){atPoint=this.geometry.atPoint(lonlat,toleranceLon,toleranceLat);}
return atPoint;},destroyPopup:function(){},move:function(location){if(!this.layer||!this.geometry.move){return;}
var pixel;if(location.CLASS_NAME=="OpenLayers.LonLat"){pixel=this.layer.getViewPortPxFromLonLat(location);}else{pixel=location;}
var lastPixel=this.layer.getViewPortPxFromLonLat(this.geometry.getBounds().getCenterLonLat());var res=this.layer.map.getResolution();this.geometry.move(res*(pixel.x-lastPixel.x),res*(lastPixel.y-pixel.y));this.layer.drawFeature(this);return lastPixel;},toState:function(state){if(state==OpenLayers.State.UPDATE){switch(this.state){case OpenLayers.State.UNKNOWN:case OpenLayers.State.DELETE:this.state=state;break;case OpenLayers.State.UPDATE:case OpenLayers.State.INSERT:break;}}else if(state==OpenLayers.State.INSERT){switch(this.state){case OpenLayers.State.UNKNOWN:break;default:this.state=state;break;}}else if(state==OpenLayers.State.DELETE){switch(this.state){case OpenLayers.State.INSERT:break;case OpenLayers.State.DELETE:break;case OpenLayers.State.UNKNOWN:case OpenLayers.State.UPDATE:this.state=state;break;}}else if(state==OpenLayers.State.UNKNOWN){this.state=state;}},CLASS_NAME:"OpenLayers.Feature.Vector"});OpenLayers.Feature.Vector.style={'default':{fillColor:"#ee9900",fillOpacity:0.4,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"#ee9900",strokeOpacity:1,strokeWidth:1,strokeLinecap:"round",strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"inherit"},'select':{fillColor:"blue",fillOpacity:0.4,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"blue",strokeOpacity:1,strokeWidth:2,strokeLinecap:"round",strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"pointer"},'temporary':{fillColor:"#66cccc",fillOpacity:0.2,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"#66cccc",strokeOpacity:1,strokeLinecap:"round",strokeWidth:2,strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"inherit"},'delete':{display:"none"}};OpenLayers.Handler.Box=OpenLayers.Class(OpenLayers.Handler,{dragHandler:null,boxDivClassName:'olHandlerBoxZoomBox',boxCharacteristics:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);var callbacks={"down":this.startBox,"move":this.moveBox,"out":this.removeBox,"up":this.endBox};this.dragHandler=new OpenLayers.Handler.Drag(this,callbacks,{keyMask:this.keyMask});},destroy:function(){if(this.dragHandler){this.dragHandler.destroy();this.dragHandler=null;}
OpenLayers.Handler.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Handler.prototype.setMap.apply(this,arguments);if(this.dragHandler){this.dragHandler.setMap(map);}},startBox:function(xy){this.zoomBox=OpenLayers.Util.createDiv('zoomBox',this.dragHandler.start);this.zoomBox.className=this.boxDivClassName;this.zoomBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;this.map.viewPortDiv.appendChild(this.zoomBox);OpenLayers.Element.addClass(this.map.viewPortDiv,"olDrawBox");},moveBox:function(xy){var startX=this.dragHandler.start.x;var startY=this.dragHandler.start.y;var deltaX=Math.abs(startX-xy.x);var deltaY=Math.abs(startY-xy.y);this.zoomBox.style.width=Math.max(1,deltaX)+"px";this.zoomBox.style.height=Math.max(1,deltaY)+"px";this.zoomBox.style.left=xy.x<startX?xy.x+"px":startX+"px";this.zoomBox.style.top=xy.y<startY?xy.y+"px":startY+"px";var box=this.getBoxCharacteristics();if(box.newBoxModel){if(xy.x>startX){this.zoomBox.style.width=Math.max(1,deltaX-box.xOffset)+"px";}
if(xy.y>startY){this.zoomBox.style.height=Math.max(1,deltaY-box.yOffset)+"px";}}},endBox:function(end){var result;if(Math.abs(this.dragHandler.start.x-end.x)>5||Math.abs(this.dragHandler.start.y-end.y)>5){var start=this.dragHandler.start;var top=Math.min(start.y,end.y);var bottom=Math.max(start.y,end.y);var left=Math.min(start.x,end.x);var right=Math.max(start.x,end.x);result=new OpenLayers.Bounds(left,bottom,right,top);}else{result=this.dragHandler.start.clone();}
this.removeBox();this.callback("done",[result]);},removeBox:function(){this.map.viewPortDiv.removeChild(this.zoomBox);this.zoomBox=null;this.boxCharacteristics=null;OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDrawBox");},activate:function(){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){this.dragHandler.activate();return true;}else{return false;}},deactivate:function(){if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.dragHandler.deactivate();return true;}else{return false;}},getBoxCharacteristics:function(){if(!this.boxCharacteristics){var xOffset=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-left-width"))+parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-right-width"))+1;var yOffset=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-top-width"))+parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-bottom-width"))+1;var newBoxModel=OpenLayers.BROWSER_NAME=="msie"?document.compatMode!="BackCompat":true;this.boxCharacteristics={xOffset:xOffset,yOffset:yOffset,newBoxModel:newBoxModel};}
return this.boxCharacteristics;},CLASS_NAME:"OpenLayers.Handler.Box"});OpenLayers.Handler.RegularPolygon=OpenLayers.Class(OpenLayers.Handler.Drag,{sides:4,radius:null,snapAngle:null,snapToggle:'shiftKey',layerOptions:null,persist:false,irregular:false,angle:null,fixedRadius:false,feature:null,layer:null,origin:null,initialize:function(control,callbacks,options){if(!(options&&options.layerOptions&&options.layerOptions.styleMap)){this.style=OpenLayers.Util.extend(OpenLayers.Feature.Vector.style['default'],{});}
OpenLayers.Handler.prototype.initialize.apply(this,[control,callbacks,options]);this.options=(options)?options:{};},setOptions:function(newOptions){OpenLayers.Util.extend(this.options,newOptions);OpenLayers.Util.extend(this,newOptions);},activate:function(){var activated=false;if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){var options=OpenLayers.Util.extend({displayInLayerSwitcher:false,calculateInRange:OpenLayers.Function.True},this.layerOptions);this.layer=new OpenLayers.Layer.Vector(this.CLASS_NAME,options);this.map.addLayer(this.layer);activated=true;}
return activated;},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.Drag.prototype.deactivate.apply(this,arguments)){if(this.dragging){this.cancel();}
if(this.layer.map!=null){this.layer.destroy(false);if(this.feature){this.feature.destroy();}}
this.layer=null;this.feature=null;deactivated=true;}
return deactivated;},down:function(evt){this.fixedRadius=!!(this.radius);var maploc=this.map.getLonLatFromPixel(evt.xy);this.origin=new OpenLayers.Geometry.Point(maploc.lon,maploc.lat);if(!this.fixedRadius||this.irregular){this.radius=this.map.getResolution();}
if(this.persist){this.clear();}
this.feature=new OpenLayers.Feature.Vector();this.createGeometry();this.callback("create",[this.origin,this.feature]);this.layer.addFeatures([this.feature],{silent:true});this.layer.drawFeature(this.feature,this.style);},move:function(evt){var maploc=this.map.getLonLatFromPixel(evt.xy);var point=new OpenLayers.Geometry.Point(maploc.lon,maploc.lat);if(this.irregular){var ry=Math.sqrt(2)*Math.abs(point.y-this.origin.y)/2;this.radius=Math.max(this.map.getResolution()/2,ry);}else if(this.fixedRadius){this.origin=point;}else{this.calculateAngle(point,evt);this.radius=Math.max(this.map.getResolution()/2,point.distanceTo(this.origin));}
this.modifyGeometry();if(this.irregular){var dx=point.x-this.origin.x;var dy=point.y-this.origin.y;var ratio;if(dy==0){ratio=dx/(this.radius*Math.sqrt(2));}else{ratio=dx/dy;}
this.feature.geometry.resize(1,this.origin,ratio);this.feature.geometry.move(dx/2,dy/2);}
this.layer.drawFeature(this.feature,this.style);},up:function(evt){this.finalize();if(this.start==this.last){this.callback("done",[evt.xy]);}},out:function(evt){this.finalize();},createGeometry:function(){this.angle=Math.PI*((1/this.sides)-(1/2));if(this.snapAngle){this.angle+=this.snapAngle*(Math.PI/180);}
this.feature.geometry=OpenLayers.Geometry.Polygon.createRegularPolygon(this.origin,this.radius,this.sides,this.snapAngle);},modifyGeometry:function(){var angle,point;var ring=this.feature.geometry.components[0];if(ring.components.length!=(this.sides+1)){this.createGeometry();ring=this.feature.geometry.components[0];}
for(var i=0;i<this.sides;++i){point=ring.components[i];angle=this.angle+(i*2*Math.PI/this.sides);point.x=this.origin.x+(this.radius*Math.cos(angle));point.y=this.origin.y+(this.radius*Math.sin(angle));point.clearBounds();}},calculateAngle:function(point,evt){var alpha=Math.atan2(point.y-this.origin.y,point.x-this.origin.x);if(this.snapAngle&&(this.snapToggle&&!evt[this.snapToggle])){var snapAngleRad=(Math.PI/180)*this.snapAngle;this.angle=Math.round(alpha/snapAngleRad)*snapAngleRad;}else{this.angle=alpha;}},cancel:function(){this.callback("cancel",null);this.finalize();},finalize:function(){this.origin=null;this.radius=this.options.radius;},clear:function(){if(this.layer){this.layer.renderer.clear();this.layer.destroyFeatures();}},callback:function(name,args){if(this.callbacks[name]){this.callbacks[name].apply(this.control,[this.feature.geometry.clone()]);}
if(!this.persist&&(name=="done"||name=="cancel")){this.clear();}},CLASS_NAME:"OpenLayers.Handler.RegularPolygon"});OpenLayers.Layer.HTTPRequest=OpenLayers.Class(OpenLayers.Layer,{URL_HASH_FACTOR:(Math.sqrt(5)-1)/2,url:null,params:null,reproject:false,initialize:function(name,url,params,options){var newArguments=arguments;newArguments=[name,options];OpenLayers.Layer.prototype.initialize.apply(this,newArguments);this.url=url;this.params=OpenLayers.Util.extend({},params);},destroy:function(){this.url=null;this.params=null;OpenLayers.Layer.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.HTTPRequest(this.name,this.url,this.params,this.getOptions());}
obj=OpenLayers.Layer.prototype.clone.apply(this,[obj]);return obj;},setUrl:function(newUrl){this.url=newUrl;},mergeNewParams:function(newParams){this.params=OpenLayers.Util.extend(this.params,newParams);var ret=this.redraw();if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"params"});}
return ret;},redraw:function(force){if(force){return this.mergeNewParams({"_olSalt":Math.random()});}else{return OpenLayers.Layer.prototype.redraw.apply(this,[]);}},selectUrl:function(paramString,urls){var product=1;for(var i=0,len=paramString.length;i<len;i++){product*=paramString.charCodeAt(i)*this.URL_HASH_FACTOR;product-=Math.floor(product);}
return urls[Math.floor(product*urls.length)];},getFullRequestString:function(newParams,altUrl){var url=altUrl||this.url;var allParams=OpenLayers.Util.extend({},this.params);allParams=OpenLayers.Util.extend(allParams,newParams);var paramsString=OpenLayers.Util.getParameterString(allParams);if(url instanceof Array){url=this.selectUrl(paramsString,url);}
var urlParams=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(url));for(var key in allParams){if(key.toUpperCase()in urlParams){delete allParams[key];}}
paramsString=OpenLayers.Util.getParameterString(allParams);return OpenLayers.Util.urlAppend(url,paramsString);},CLASS_NAME:"OpenLayers.Layer.HTTPRequest"});OpenLayers.Layer.SphericalMercator={getExtent:function(){var extent=null;if(this.sphericalMercator){extent=this.map.calculateBounds();}else{extent=OpenLayers.Layer.FixedZoomLevels.prototype.getExtent.apply(this);}
return extent;},getLonLatFromViewPortPx:function(viewPortPx){return OpenLayers.Layer.prototype.getLonLatFromViewPortPx.apply(this,arguments);},getViewPortPxFromLonLat:function(lonlat){return OpenLayers.Layer.prototype.getViewPortPxFromLonLat.apply(this,arguments);},initMercatorParameters:function(){this.RESOLUTIONS=[];var maxResolution=156543.0339;for(var zoom=0;zoom<=this.MAX_ZOOM_LEVEL;++zoom){this.RESOLUTIONS[zoom]=maxResolution/Math.pow(2,zoom);}
this.units="m";this.projection=this.projection||"EPSG:900913";},forwardMercator:function(lon,lat){var x=lon*20037508.34/180;var y=Math.log(Math.tan((90+lat)*Math.PI/360))/(Math.PI/180);y=y*20037508.34/180;return new OpenLayers.LonLat(x,y);},inverseMercator:function(x,y){var lon=(x/20037508.34)*180;var lat=(y/20037508.34)*180;lat=180/Math.PI*(2*Math.atan(Math.exp(lat*Math.PI/180))-Math.PI/2);return new OpenLayers.LonLat(lon,lat);},projectForward:function(point){var lonlat=OpenLayers.Layer.SphericalMercator.forwardMercator(point.x,point.y);point.x=lonlat.lon;point.y=lonlat.lat;return point;},projectInverse:function(point){var lonlat=OpenLayers.Layer.SphericalMercator.inverseMercator(point.x,point.y);point.x=lonlat.lon;point.y=lonlat.lat;return point;}};(function(){var codes=["EPSG:900913","EPSG:3857","EPSG:102113","EPSG:102100"];var add=OpenLayers.Projection.addTransform;var merc=OpenLayers.Layer.SphericalMercator;var same=OpenLayers.Projection.nullTransform;var i,len,code,other,j;for(i=0,len=codes.length;i<len;++i){code=codes[i];add("EPSG:4326",code,merc.projectForward);add(code,"EPSG:4326",merc.projectInverse);for(j=i+1;j<len;++j){other=codes[j];add(code,other,same);add(other,code,same);}}})();OpenLayers.Control.DrawFeature=OpenLayers.Class(OpenLayers.Control,{layer:null,callbacks:null,EVENT_TYPES:["featureadded"],multi:false,featureAdded:function(){},handlerOptions:null,initialize:function(layer,handler,options){this.EVENT_TYPES=OpenLayers.Control.DrawFeature.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES);OpenLayers.Control.prototype.initialize.apply(this,[options]);this.callbacks=OpenLayers.Util.extend({done:this.drawFeature,modify:function(vertex,feature){this.layer.events.triggerEvent("sketchmodified",{vertex:vertex,feature:feature});},create:function(vertex,feature){this.layer.events.triggerEvent("sketchstarted",{vertex:vertex,feature:feature});}},this.callbacks);this.layer=layer;this.handlerOptions=this.handlerOptions||{};if(!("multi"in this.handlerOptions)){this.handlerOptions.multi=this.multi;}
var sketchStyle=this.layer.styleMap&&this.layer.styleMap.styles.temporary;if(sketchStyle){this.handlerOptions.layerOptions=OpenLayers.Util.applyDefaults(this.handlerOptions.layerOptions,{styleMap:new OpenLayers.StyleMap({"default":sketchStyle})});}
this.handler=new handler(this,this.callbacks,this.handlerOptions);},drawFeature:function(geometry){var feature=new OpenLayers.Feature.Vector(geometry);var proceed=this.layer.events.triggerEvent("sketchcomplete",{feature:feature});if(proceed!==false){feature.state=OpenLayers.State.INSERT;this.layer.addFeatures([feature]);this.featureAdded(feature);this.events.triggerEvent("featureadded",{feature:feature});}},CLASS_NAME:"OpenLayers.Control.DrawFeature"});OpenLayers.Control.ZoomBox=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,out:false,alwaysZoom:false,draw:function(){this.handler=new OpenLayers.Handler.Box(this,{done:this.zoomBox},{keyMask:this.keyMask});},zoomBox:function(position){if(position instanceof OpenLayers.Bounds){var bounds;if(!this.out){var minXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.left,position.bottom));var maxXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.right,position.top));bounds=new OpenLayers.Bounds(minXY.lon,minXY.lat,maxXY.lon,maxXY.lat);}else{var pixWidth=Math.abs(position.right-position.left);var pixHeight=Math.abs(position.top-position.bottom);var zoomFactor=Math.min((this.map.size.h/pixHeight),(this.map.size.w/pixWidth));var extent=this.map.getExtent();var center=this.map.getLonLatFromPixel(position.getCenterPixel());var xmin=center.lon-(extent.getWidth()/2)*zoomFactor;var xmax=center.lon+(extent.getWidth()/2)*zoomFactor;var ymin=center.lat-(extent.getHeight()/2)*zoomFactor;var ymax=center.lat+(extent.getHeight()/2)*zoomFactor;bounds=new OpenLayers.Bounds(xmin,ymin,xmax,ymax);}
var lastZoom=this.map.getZoom();this.map.zoomToExtent(bounds);if(lastZoom==this.map.getZoom()&&this.alwaysZoom==true){this.map.zoomTo(lastZoom+(this.out?-1:1));}}else{if(!this.out){this.map.setCenter(this.map.getLonLatFromPixel(position),this.map.getZoom()+1);}else{this.map.setCenter(this.map.getLonLatFromPixel(position),this.map.getZoom()-1);}}},CLASS_NAME:"OpenLayers.Control.ZoomBox"});OpenLayers.Format.WKT=OpenLayers.Class(OpenLayers.Format,{initialize:function(options){this.regExes={'typeStr':/^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,'spaces':/\s+/,'parenComma':/\)\s*,\s*\(/,'doubleParenComma':/\)\s*\)\s*,\s*\(\s*\(/,'trimParens':/^\s*\(?(.*?)\)?\s*$/};OpenLayers.Format.prototype.initialize.apply(this,[options]);},read:function(wkt){var features,type,str;var matches=this.regExes.typeStr.exec(wkt);if(matches){type=matches[1].toLowerCase();str=matches[2];if(this.parse[type]){features=this.parse[type].apply(this,[str]);}
if(this.internalProjection&&this.externalProjection){if(features&&features.CLASS_NAME=="OpenLayers.Feature.Vector"){features.geometry.transform(this.externalProjection,this.internalProjection);}else if(features&&type!="geometrycollection"&&typeof features=="object"){for(var i=0,len=features.length;i<len;i++){var component=features[i];component.geometry.transform(this.externalProjection,this.internalProjection);}}}}
return features;},write:function(features){var collection,geometry,type,data,isCollection;if(features.constructor==Array){collection=features;isCollection=true;}else{collection=[features];isCollection=false;}
var pieces=[];if(isCollection){pieces.push('GEOMETRYCOLLECTION(');}
for(var i=0,len=collection.length;i<len;++i){if(isCollection&&i>0){pieces.push(',');}
geometry=collection[i].geometry;type=geometry.CLASS_NAME.split('.')[2].toLowerCase();if(!this.extract[type]){return null;}
if(this.internalProjection&&this.externalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
data=this.extract[type].apply(this,[geometry]);pieces.push(type.toUpperCase()+'('+data+')');}
if(isCollection){pieces.push(')');}
return pieces.join('');},extract:{'point':function(point){return point.x+' '+point.y;},'multipoint':function(multipoint){var array=[];for(var i=0,len=multipoint.components.length;i<len;++i){array.push('('+
this.extract.point.apply(this,[multipoint.components[i]])+')');}
return array.join(',');},'linestring':function(linestring){var array=[];for(var i=0,len=linestring.components.length;i<len;++i){array.push(this.extract.point.apply(this,[linestring.components[i]]));}
return array.join(',');},'multilinestring':function(multilinestring){var array=[];for(var i=0,len=multilinestring.components.length;i<len;++i){array.push('('+
this.extract.linestring.apply(this,[multilinestring.components[i]])+')');}
return array.join(',');},'polygon':function(polygon){var array=[];for(var i=0,len=polygon.components.length;i<len;++i){array.push('('+
this.extract.linestring.apply(this,[polygon.components[i]])+')');}
return array.join(',');},'multipolygon':function(multipolygon){var array=[];for(var i=0,len=multipolygon.components.length;i<len;++i){array.push('('+
this.extract.polygon.apply(this,[multipolygon.components[i]])+')');}
return array.join(',');}},parse:{'point':function(str){var coords=OpenLayers.String.trim(str).split(this.regExes.spaces);return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(coords[0],coords[1]));},'multipoint':function(str){var point;var points=OpenLayers.String.trim(str).split(this.regExes.parenComma);var components=[];for(var i=0,len=points.length;i<len;++i){point=points[i].replace(this.regExes.trimParens,'$1');components.push(this.parse.point.apply(this,[point]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPoint(components));},'linestring':function(str){var points=OpenLayers.String.trim(str).split(',');var components=[];for(var i=0,len=points.length;i<len;++i){components.push(this.parse.point.apply(this,[points[i]]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString(components));},'multilinestring':function(str){var line;var lines=OpenLayers.String.trim(str).split(this.regExes.parenComma);var components=[];for(var i=0,len=lines.length;i<len;++i){line=lines[i].replace(this.regExes.trimParens,'$1');components.push(this.parse.linestring.apply(this,[line]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiLineString(components));},'polygon':function(str){var ring,linestring,linearring;var rings=OpenLayers.String.trim(str).split(this.regExes.parenComma);var components=[];for(var i=0,len=rings.length;i<len;++i){ring=rings[i].replace(this.regExes.trimParens,'$1');linestring=this.parse.linestring.apply(this,[ring]).geometry;linearring=new OpenLayers.Geometry.LinearRing(linestring.components);components.push(linearring);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon(components));},'multipolygon':function(str){var polygon;var polygons=OpenLayers.String.trim(str).split(this.regExes.doubleParenComma);var components=[];for(var i=0,len=polygons.length;i<len;++i){polygon=polygons[i].replace(this.regExes.trimParens,'$1');components.push(this.parse.polygon.apply(this,[polygon]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPolygon(components));},'geometrycollection':function(str){str=str.replace(/,\s*([A-Za-z])/g,'|$1');var wktArray=OpenLayers.String.trim(str).split('|');var components=[];for(var i=0,len=wktArray.length;i<len;++i){components.push(OpenLayers.Format.WKT.prototype.read.apply(this,[wktArray[i]]));}
return components;}},CLASS_NAME:"OpenLayers.Format.WKT"});OpenLayers.Layer.Grid=OpenLayers.Class(OpenLayers.Layer.HTTPRequest,{tileSize:null,tileOptions:null,grid:null,singleTile:false,ratio:1.5,buffer:2,numLoadingTiles:0,initialize:function(name,url,params,options){OpenLayers.Layer.HTTPRequest.prototype.initialize.apply(this,arguments);this.events.addEventType("tileloaded");this.grid=[];},destroy:function(){this.clearGrid();this.grid=null;this.tileSize=null;OpenLayers.Layer.HTTPRequest.prototype.destroy.apply(this,arguments);},clearGrid:function(){if(this.grid){for(var iRow=0,len=this.grid.length;iRow<len;iRow++){var row=this.grid[iRow];for(var iCol=0,clen=row.length;iCol<clen;iCol++){var tile=row[iCol];this.removeTileMonitoringHooks(tile);tile.destroy();}}
this.grid=[];}},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.Grid(this.name,this.url,this.params,this.getOptions());}
obj=OpenLayers.Layer.HTTPRequest.prototype.clone.apply(this,[obj]);if(this.tileSize!=null){obj.tileSize=this.tileSize.clone();}
obj.grid=[];return obj;},moveTo:function(bounds,zoomChanged,dragging){OpenLayers.Layer.HTTPRequest.prototype.moveTo.apply(this,arguments);bounds=bounds||this.map.getExtent();if(bounds!=null){var forceReTile=!this.grid.length||zoomChanged;var tilesBounds=this.getTilesBounds();if(this.singleTile){if(forceReTile||(!dragging&&!tilesBounds.containsBounds(bounds))){this.initSingleTile(bounds);}}else{if(forceReTile||!tilesBounds.containsBounds(bounds,true)){this.initGriddedTiles(bounds);}else{this.moveGriddedTiles(bounds);}}}},setTileSize:function(size){if(this.singleTile){size=this.map.getSize();size.h=parseInt(size.h*this.ratio);size.w=parseInt(size.w*this.ratio);}
OpenLayers.Layer.HTTPRequest.prototype.setTileSize.apply(this,[size]);},getGridBounds:function(){var msg="The getGridBounds() function is deprecated. It will be "+"removed in 3.0. Please use getTilesBounds() instead.";OpenLayers.Console.warn(msg);return this.getTilesBounds();},getTilesBounds:function(){var bounds=null;if(this.grid.length){var bottom=this.grid.length-1;var bottomLeftTile=this.grid[bottom][0];var right=this.grid[0].length-1;var topRightTile=this.grid[0][right];bounds=new OpenLayers.Bounds(bottomLeftTile.bounds.left,bottomLeftTile.bounds.bottom,topRightTile.bounds.right,topRightTile.bounds.top);}
return bounds;},initSingleTile:function(bounds){var center=bounds.getCenterLonLat();var tileWidth=bounds.getWidth()*this.ratio;var tileHeight=bounds.getHeight()*this.ratio;var tileBounds=new OpenLayers.Bounds(center.lon-(tileWidth/2),center.lat-(tileHeight/2),center.lon+(tileWidth/2),center.lat+(tileHeight/2));var ul=new OpenLayers.LonLat(tileBounds.left,tileBounds.top);var px=this.map.getLayerPxFromLonLat(ul);if(!this.grid.length){this.grid[0]=[];}
var tile=this.grid[0][0];if(!tile){tile=this.addTile(tileBounds,px);this.addTileMonitoringHooks(tile);tile.draw();this.grid[0][0]=tile;}else{tile.moveTo(tileBounds,px);}
this.removeExcessTiles(1,1);},calculateGridLayout:function(bounds,extent,resolution){var tilelon=resolution*this.tileSize.w;var tilelat=resolution*this.tileSize.h;var offsetlon=bounds.left-extent.left;var tilecol=Math.floor(offsetlon/tilelon)-this.buffer;var tilecolremain=offsetlon/tilelon-tilecol;var tileoffsetx=-tilecolremain*this.tileSize.w;var tileoffsetlon=extent.left+tilecol*tilelon;var offsetlat=bounds.top-(extent.bottom+tilelat);var tilerow=Math.ceil(offsetlat/tilelat)+this.buffer;var tilerowremain=tilerow-offsetlat/tilelat;var tileoffsety=-tilerowremain*this.tileSize.h;var tileoffsetlat=extent.bottom+tilerow*tilelat;return{tilelon:tilelon,tilelat:tilelat,tileoffsetlon:tileoffsetlon,tileoffsetlat:tileoffsetlat,tileoffsetx:tileoffsetx,tileoffsety:tileoffsety};},initGriddedTiles:function(bounds){var viewSize=this.map.getSize();var minRows=Math.ceil(viewSize.h/this.tileSize.h)+
Math.max(1,2*this.buffer);var minCols=Math.ceil(viewSize.w/this.tileSize.w)+
Math.max(1,2*this.buffer);var extent=this.getMaxExtent();var resolution=this.map.getResolution();var tileLayout=this.calculateGridLayout(bounds,extent,resolution);var tileoffsetx=Math.round(tileLayout.tileoffsetx);var tileoffsety=Math.round(tileLayout.tileoffsety);var tileoffsetlon=tileLayout.tileoffsetlon;var tileoffsetlat=tileLayout.tileoffsetlat;var tilelon=tileLayout.tilelon;var tilelat=tileLayout.tilelat;this.origin=new OpenLayers.Pixel(tileoffsetx,tileoffsety);var startX=tileoffsetx;var startLon=tileoffsetlon;var rowidx=0;var layerContainerDivLeft=parseInt(this.map.layerContainerDiv.style.left);var layerContainerDivTop=parseInt(this.map.layerContainerDiv.style.top);do{var row=this.grid[rowidx++];if(!row){row=[];this.grid.push(row);}
tileoffsetlon=startLon;tileoffsetx=startX;var colidx=0;do{var tileBounds=new OpenLayers.Bounds(tileoffsetlon,tileoffsetlat,tileoffsetlon+tilelon,tileoffsetlat+tilelat);var x=tileoffsetx;x-=layerContainerDivLeft;var y=tileoffsety;y-=layerContainerDivTop;var px=new OpenLayers.Pixel(x,y);var tile=row[colidx++];if(!tile){tile=this.addTile(tileBounds,px);this.addTileMonitoringHooks(tile);row.push(tile);}else{tile.moveTo(tileBounds,px,false);}
tileoffsetlon+=tilelon;tileoffsetx+=this.tileSize.w;}while((tileoffsetlon<=bounds.right+tilelon*this.buffer)||colidx<minCols);tileoffsetlat-=tilelat;tileoffsety+=this.tileSize.h;}while((tileoffsetlat>=bounds.bottom-tilelat*this.buffer)||rowidx<minRows);this.removeExcessTiles(rowidx,colidx);this.spiralTileLoad();},getMaxExtent:function(){return this.maxExtent;},spiralTileLoad:function(){var tileQueue=[];var directions=["right","down","left","up"];var iRow=0;var iCell=-1;var direction=OpenLayers.Util.indexOf(directions,"right");var directionsTried=0;while(directionsTried<directions.length){var testRow=iRow;var testCell=iCell;switch(directions[direction]){case"right":testCell++;break;case"down":testRow++;break;case"left":testCell--;break;case"up":testRow--;break;}
var tile=null;if((testRow<this.grid.length)&&(testRow>=0)&&(testCell<this.grid[0].length)&&(testCell>=0)){tile=this.grid[testRow][testCell];}
if((tile!=null)&&(!tile.queued)){tileQueue.unshift(tile);tile.queued=true;directionsTried=0;iRow=testRow;iCell=testCell;}else{direction=(direction+1)%4;directionsTried++;}}
for(var i=0,len=tileQueue.length;i<len;i++){var tile=tileQueue[i];tile.draw();tile.queued=false;}},addTile:function(bounds,position){},addTileMonitoringHooks:function(tile){tile.onLoadStart=function(){if(this.numLoadingTiles==0){this.events.triggerEvent("loadstart");}
this.numLoadingTiles++;};tile.events.register("loadstart",this,tile.onLoadStart);tile.onLoadEnd=function(){this.numLoadingTiles--;this.events.triggerEvent("tileloaded");if(this.numLoadingTiles==0){this.events.triggerEvent("loadend");}};tile.events.register("loadend",this,tile.onLoadEnd);tile.events.register("unload",this,tile.onLoadEnd);},removeTileMonitoringHooks:function(tile){tile.unload();tile.events.un({"loadstart":tile.onLoadStart,"loadend":tile.onLoadEnd,"unload":tile.onLoadEnd,scope:this});},moveGriddedTiles:function(bounds){var buffer=this.buffer||1;while(true){var tlLayer=this.grid[0][0].position;var tlViewPort=this.map.getViewPortPxFromLayerPx(tlLayer);if(tlViewPort.x>-this.tileSize.w*(buffer-1)){this.shiftColumn(true);}else if(tlViewPort.x<-this.tileSize.w*buffer){this.shiftColumn(false);}else if(tlViewPort.y>-this.tileSize.h*(buffer-1)){this.shiftRow(true);}else if(tlViewPort.y<-this.tileSize.h*buffer){this.shiftRow(false);}else{break;}};},shiftRow:function(prepend){var modelRowIndex=(prepend)?0:(this.grid.length-1);var grid=this.grid;var modelRow=grid[modelRowIndex];var resolution=this.map.getResolution();var deltaY=(prepend)?-this.tileSize.h:this.tileSize.h;var deltaLat=resolution*-deltaY;var row=(prepend)?grid.pop():grid.shift();for(var i=0,len=modelRow.length;i<len;i++){var modelTile=modelRow[i];var bounds=modelTile.bounds.clone();var position=modelTile.position.clone();bounds.bottom=bounds.bottom+deltaLat;bounds.top=bounds.top+deltaLat;position.y=position.y+deltaY;row[i].moveTo(bounds,position);}
if(prepend){grid.unshift(row);}else{grid.push(row);}},shiftColumn:function(prepend){var deltaX=(prepend)?-this.tileSize.w:this.tileSize.w;var resolution=this.map.getResolution();var deltaLon=resolution*deltaX;for(var i=0,len=this.grid.length;i<len;i++){var row=this.grid[i];var modelTileIndex=(prepend)?0:(row.length-1);var modelTile=row[modelTileIndex];var bounds=modelTile.bounds.clone();var position=modelTile.position.clone();bounds.left=bounds.left+deltaLon;bounds.right=bounds.right+deltaLon;position.x=position.x+deltaX;var tile=prepend?this.grid[i].pop():this.grid[i].shift();tile.moveTo(bounds,position);if(prepend){row.unshift(tile);}else{row.push(tile);}}},removeExcessTiles:function(rows,columns){while(this.grid.length>rows){var row=this.grid.pop();for(var i=0,l=row.length;i<l;i++){var tile=row[i];this.removeTileMonitoringHooks(tile);tile.destroy();}}
while(this.grid[0].length>columns){for(var i=0,l=this.grid.length;i<l;i++){var row=this.grid[i];var tile=row.pop();this.removeTileMonitoringHooks(tile);tile.destroy();}}},onMapResize:function(){if(this.singleTile){this.clearGrid();this.setTileSize();}},getTileBounds:function(viewPortPx){var maxExtent=this.maxExtent;var resolution=this.getResolution();var tileMapWidth=resolution*this.tileSize.w;var tileMapHeight=resolution*this.tileSize.h;var mapPoint=this.getLonLatFromViewPortPx(viewPortPx);var tileLeft=maxExtent.left+(tileMapWidth*Math.floor((mapPoint.lon-
maxExtent.left)/tileMapWidth));var tileBottom=maxExtent.bottom+(tileMapHeight*Math.floor((mapPoint.lat-
maxExtent.bottom)/tileMapHeight));return new OpenLayers.Bounds(tileLeft,tileBottom,tileLeft+tileMapWidth,tileBottom+tileMapHeight);},CLASS_NAME:"OpenLayers.Layer.Grid"});OpenLayers.Style=OpenLayers.Class({id:null,name:null,title:null,description:null,layerName:null,isDefault:false,rules:null,context:null,defaultStyle:null,defaultsPerSymbolizer:false,propertyStyles:null,initialize:function(style,options){OpenLayers.Util.extend(this,options);this.rules=[];if(options&&options.rules){this.addRules(options.rules);}
this.setDefaultStyle(style||OpenLayers.Feature.Vector.style["default"]);this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){for(var i=0,len=this.rules.length;i<len;i++){this.rules[i].destroy();this.rules[i]=null;}
this.rules=null;this.defaultStyle=null;},createSymbolizer:function(feature){var style=this.defaultsPerSymbolizer?{}:this.createLiterals(OpenLayers.Util.extend({},this.defaultStyle),feature);var rules=this.rules;var rule,context;var elseRules=[];var appliedRules=false;for(var i=0,len=rules.length;i<len;i++){rule=rules[i];var applies=rule.evaluate(feature);if(applies){if(rule instanceof OpenLayers.Rule&&rule.elseFilter){elseRules.push(rule);}else{appliedRules=true;this.applySymbolizer(rule,style,feature);}}}
if(appliedRules==false&&elseRules.length>0){appliedRules=true;for(var i=0,len=elseRules.length;i<len;i++){this.applySymbolizer(elseRules[i],style,feature);}}
if(rules.length>0&&appliedRules==false){style.display="none";}
return style;},applySymbolizer:function(rule,style,feature){var symbolizerPrefix=feature.geometry?this.getSymbolizerPrefix(feature.geometry):OpenLayers.Style.SYMBOLIZER_PREFIXES[0];var symbolizer=rule.symbolizer[symbolizerPrefix]||rule.symbolizer;if(this.defaultsPerSymbolizer===true){var defaults=this.defaultStyle;OpenLayers.Util.applyDefaults(symbolizer,{pointRadius:defaults.pointRadius});if(symbolizer.stroke===true||symbolizer.graphic===true){OpenLayers.Util.applyDefaults(symbolizer,{strokeWidth:defaults.strokeWidth,strokeColor:defaults.strokeColor,strokeOpacity:defaults.strokeOpacity,strokeDashstyle:defaults.strokeDashstyle,strokeLinecap:defaults.strokeLinecap});}
if(symbolizer.fill===true||symbolizer.graphic===true){OpenLayers.Util.applyDefaults(symbolizer,{fillColor:defaults.fillColor,fillOpacity:defaults.fillOpacity});}
if(symbolizer.graphic===true){OpenLayers.Util.applyDefaults(symbolizer,{pointRadius:this.defaultStyle.pointRadius,externalGraphic:this.defaultStyle.externalGraphic,graphicName:this.defaultStyle.graphicName,graphicOpacity:this.defaultStyle.graphicOpacity,graphicWidth:this.defaultStyle.graphicWidth,graphicHeight:this.defaultStyle.graphicHeight,graphicXOffset:this.defaultStyle.graphicXOffset,graphicYOffset:this.defaultStyle.graphicYOffset});}}
return this.createLiterals(OpenLayers.Util.extend(style,symbolizer),feature);},createLiterals:function(style,feature){var context=OpenLayers.Util.extend({},feature.attributes||feature.data);OpenLayers.Util.extend(context,this.context);for(var i in this.propertyStyles){style[i]=OpenLayers.Style.createLiteral(style[i],context,feature,i);}
return style;},findPropertyStyles:function(){var propertyStyles={};var style=this.defaultStyle;this.addPropertyStyles(propertyStyles,style);var rules=this.rules;var symbolizer,value;for(var i=0,len=rules.length;i<len;i++){symbolizer=rules[i].symbolizer;for(var key in symbolizer){value=symbolizer[key];if(typeof value=="object"){this.addPropertyStyles(propertyStyles,value);}else{this.addPropertyStyles(propertyStyles,symbolizer);break;}}}
return propertyStyles;},addPropertyStyles:function(propertyStyles,symbolizer){var property;for(var key in symbolizer){property=symbolizer[key];if(typeof property=="string"&&property.match(/\$\{\w+\}/)){propertyStyles[key]=true;}}
return propertyStyles;},addRules:function(rules){Array.prototype.push.apply(this.rules,rules);this.propertyStyles=this.findPropertyStyles();},setDefaultStyle:function(style){this.defaultStyle=style;this.propertyStyles=this.findPropertyStyles();},getSymbolizerPrefix:function(geometry){var prefixes=OpenLayers.Style.SYMBOLIZER_PREFIXES;for(var i=0,len=prefixes.length;i<len;i++){if(geometry.CLASS_NAME.indexOf(prefixes[i])!=-1){return prefixes[i];}}},clone:function(){var options=OpenLayers.Util.extend({},this);if(this.rules){options.rules=[];for(var i=0,len=this.rules.length;i<len;++i){options.rules.push(this.rules[i].clone());}}
options.context=this.context&&OpenLayers.Util.extend({},this.context);var defaultStyle=OpenLayers.Util.extend({},this.defaultStyle);return new OpenLayers.Style(defaultStyle,options);},CLASS_NAME:"OpenLayers.Style"});OpenLayers.Style.createLiteral=function(value,context,feature,property){if(typeof value=="string"&&value.indexOf("${")!=-1){value=OpenLayers.String.format(value,context,[feature,property]);value=(isNaN(value)||!value)?value:parseFloat(value);}
return value;};OpenLayers.Style.SYMBOLIZER_PREFIXES=['Point','Line','Polygon','Text','Raster'];OpenLayers.Control.Navigation=OpenLayers.Class(OpenLayers.Control,{dragPan:null,dragPanOptions:null,documentDrag:false,zoomBox:null,zoomBoxEnabled:true,zoomWheelEnabled:true,mouseWheelOptions:null,handleRightClicks:false,zoomBoxKeyMask:OpenLayers.Handler.MOD_SHIFT,autoActivate:true,initialize:function(options){this.handlers={};OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){this.deactivate();if(this.dragPan){this.dragPan.destroy();}
this.dragPan=null;if(this.zoomBox){this.zoomBox.destroy();}
this.zoomBox=null;OpenLayers.Control.prototype.destroy.apply(this,arguments);},activate:function(){this.dragPan.activate();if(this.zoomWheelEnabled){this.handlers.wheel.activate();}
this.handlers.click.activate();if(this.zoomBoxEnabled){this.zoomBox.activate();}
return OpenLayers.Control.prototype.activate.apply(this,arguments);},deactivate:function(){this.zoomBox.deactivate();this.dragPan.deactivate();this.handlers.click.deactivate();this.handlers.wheel.deactivate();return OpenLayers.Control.prototype.deactivate.apply(this,arguments);},draw:function(){if(this.handleRightClicks){this.map.viewPortDiv.oncontextmenu=OpenLayers.Function.False;}
var clickCallbacks={'dblclick':this.defaultDblClick,'dblrightclick':this.defaultDblRightClick};var clickOptions={'double':true,'stopDouble':true};this.handlers.click=new OpenLayers.Handler.Click(this,clickCallbacks,clickOptions);this.dragPan=new OpenLayers.Control.DragPan(OpenLayers.Util.extend({map:this.map,documentDrag:this.documentDrag},this.dragPanOptions));this.zoomBox=new OpenLayers.Control.ZoomBox({map:this.map,keyMask:this.zoomBoxKeyMask});this.dragPan.draw();this.zoomBox.draw();this.handlers.wheel=new OpenLayers.Handler.MouseWheel(this,{"up":this.wheelUp,"down":this.wheelDown},this.mouseWheelOptions);},defaultDblClick:function(evt){var newCenter=this.map.getLonLatFromViewPortPx(evt.xy);this.map.setCenter(newCenter,this.map.zoom+1);},defaultDblRightClick:function(evt){var newCenter=this.map.getLonLatFromViewPortPx(evt.xy);this.map.setCenter(newCenter,this.map.zoom-1);},wheelChange:function(evt,deltaZ){var currentZoom=this.map.getZoom();var newZoom=this.map.getZoom()+Math.round(deltaZ);newZoom=Math.max(newZoom,0);newZoom=Math.min(newZoom,this.map.getNumZoomLevels());if(newZoom===currentZoom){return;}
var size=this.map.getSize();var deltaX=size.w/2-evt.xy.x;var deltaY=evt.xy.y-size.h/2;var newRes=this.map.baseLayer.getResolutionForZoom(newZoom);var zoomPoint=this.map.getLonLatFromPixel(evt.xy);var newCenter=new OpenLayers.LonLat(zoomPoint.lon+deltaX*newRes,zoomPoint.lat+deltaY*newRes);this.map.setCenter(newCenter,newZoom);},wheelUp:function(evt,delta){this.wheelChange(evt,delta||1);},wheelDown:function(evt,delta){this.wheelChange(evt,delta||-1);},disableZoomBox:function(){this.zoomBoxEnabled=false;this.zoomBox.deactivate();},enableZoomBox:function(){this.zoomBoxEnabled=true;if(this.active){this.zoomBox.activate();}},disableZoomWheel:function(){this.zoomWheelEnabled=false;this.handlers.wheel.deactivate();},enableZoomWheel:function(){this.zoomWheelEnabled=true;if(this.active){this.handlers.wheel.activate();}},CLASS_NAME:"OpenLayers.Control.Navigation"});OpenLayers.Filter=OpenLayers.Class({initialize:function(options){OpenLayers.Util.extend(this,options);},destroy:function(){},evaluate:function(context){return true;},clone:function(){return null;},CLASS_NAME:"OpenLayers.Filter"});OpenLayers.Geometry=OpenLayers.Class({id:null,parent:null,bounds:null,initialize:function(){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){this.id=null;this.bounds=null;},clone:function(){return new OpenLayers.Geometry();},setBounds:function(bounds){if(bounds){this.bounds=bounds.clone();}},clearBounds:function(){this.bounds=null;if(this.parent){this.parent.clearBounds();}},extendBounds:function(newBounds){var bounds=this.getBounds();if(!bounds){this.setBounds(newBounds);}else{this.bounds.extend(newBounds);}},getBounds:function(){if(this.bounds==null){this.calculateBounds();}
return this.bounds;},calculateBounds:function(){},distanceTo:function(geometry,options){},getVertices:function(nodes){},atPoint:function(lonlat,toleranceLon,toleranceLat){var atPoint=false;var bounds=this.getBounds();if((bounds!=null)&&(lonlat!=null)){var dX=(toleranceLon!=null)?toleranceLon:0;var dY=(toleranceLat!=null)?toleranceLat:0;var toleranceBounds=new OpenLayers.Bounds(this.bounds.left-dX,this.bounds.bottom-dY,this.bounds.right+dX,this.bounds.top+dY);atPoint=toleranceBounds.containsLonLat(lonlat);}
return atPoint;},getLength:function(){return 0.0;},getArea:function(){return 0.0;},getCentroid:function(){return null;},toString:function(){return OpenLayers.Format.WKT.prototype.write(new OpenLayers.Feature.Vector(this));},CLASS_NAME:"OpenLayers.Geometry"});OpenLayers.Geometry.fromWKT=function(wkt){var format=arguments.callee.format;if(!format){format=new OpenLayers.Format.WKT();arguments.callee.format=format;}
var geom;var result=format.read(wkt);if(result instanceof OpenLayers.Feature.Vector){geom=result.geometry;}else if(result instanceof Array){var len=result.length;var components=new Array(len);for(var i=0;i<len;++i){components[i]=result[i].geometry;}
geom=new OpenLayers.Geometry.Collection(components);}
return geom;};OpenLayers.Geometry.segmentsIntersect=function(seg1,seg2,options){var point=options&&options.point;var tolerance=options&&options.tolerance;var intersection=false;var x11_21=seg1.x1-seg2.x1;var y11_21=seg1.y1-seg2.y1;var x12_11=seg1.x2-seg1.x1;var y12_11=seg1.y2-seg1.y1;var y22_21=seg2.y2-seg2.y1;var x22_21=seg2.x2-seg2.x1;var d=(y22_21*x12_11)-(x22_21*y12_11);var n1=(x22_21*y11_21)-(y22_21*x11_21);var n2=(x12_11*y11_21)-(y12_11*x11_21);if(d==0){if(n1==0&&n2==0){intersection=true;}}else{var along1=n1/d;var along2=n2/d;if(along1>=0&&along1<=1&&along2>=0&&along2<=1){if(!point){intersection=true;}else{var x=seg1.x1+(along1*x12_11);var y=seg1.y1+(along1*y12_11);intersection=new OpenLayers.Geometry.Point(x,y);}}}
if(tolerance){var dist;if(intersection){if(point){var segs=[seg1,seg2];var seg,x,y;outer:for(var i=0;i<2;++i){seg=segs[i];for(var j=1;j<3;++j){x=seg["x"+j];y=seg["y"+j];dist=Math.sqrt(Math.pow(x-intersection.x,2)+
Math.pow(y-intersection.y,2));if(dist<tolerance){intersection.x=x;intersection.y=y;break outer;}}}}}else{var segs=[seg1,seg2];var source,target,x,y,p,result;outer:for(var i=0;i<2;++i){source=segs[i];target=segs[(i+1)%2];for(var j=1;j<3;++j){p={x:source["x"+j],y:source["y"+j]};result=OpenLayers.Geometry.distanceToSegment(p,target);if(result.distance<tolerance){if(point){intersection=new OpenLayers.Geometry.Point(p.x,p.y);}else{intersection=true;}
break outer;}}}}}
return intersection;};OpenLayers.Geometry.distanceToSegment=function(point,segment){var x0=point.x;var y0=point.y;var x1=segment.x1;var y1=segment.y1;var x2=segment.x2;var y2=segment.y2;var dx=x2-x1;var dy=y2-y1;var along=((dx*(x0-x1))+(dy*(y0-y1)))/(Math.pow(dx,2)+Math.pow(dy,2));var x,y;if(along<=0.0){x=x1;y=y1;}else if(along>=1.0){x=x2;y=y2;}else{x=x1+along*dx;y=y1+along*dy;}
return{distance:Math.sqrt(Math.pow(x-x0,2)+Math.pow(y-y0,2)),x:x,y:y};};OpenLayers.Layer.TMS=OpenLayers.Class(OpenLayers.Layer.Grid,{serviceVersion:"1.0.0",isBaseLayer:true,tileOrigin:null,serverResolutions:null,zoomOffset:0,initialize:function(name,url,options){var newArguments=[];newArguments.push(name,url,{},options);OpenLayers.Layer.Grid.prototype.initialize.apply(this,newArguments);},destroy:function(){OpenLayers.Layer.Grid.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.TMS(this.name,this.url,this.getOptions());}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);return obj;},getURL:function(bounds){bounds=this.adjustBounds(bounds);var res=this.map.getResolution();var x=Math.round((bounds.left-this.tileOrigin.lon)/(res*this.tileSize.w));var y=Math.round((bounds.bottom-this.tileOrigin.lat)/(res*this.tileSize.h));var z=this.serverResolutions!=null?OpenLayers.Util.indexOf(this.serverResolutions,res):this.map.getZoom()+this.zoomOffset;var path=this.serviceVersion+"/"+this.layername+"/"+z+"/"+x+"/"+y+"."+this.type;var url=this.url;if(url instanceof Array){url=this.selectUrl(path,url);}
return url+path;},addTile:function(bounds,position){return new OpenLayers.Tile.Image(this,position,bounds,null,this.tileSize);},setMap:function(map){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments);if(!this.tileOrigin){this.tileOrigin=new OpenLayers.LonLat(this.map.maxExtent.left,this.map.maxExtent.bottom);}},CLASS_NAME:"OpenLayers.Layer.TMS"});OpenLayers.Layer.XYZ=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:true,sphericalMercator:false,zoomOffset:0,initialize:function(name,url,options){if(options&&options.sphericalMercator||this.sphericalMercator){options=OpenLayers.Util.extend({maxExtent:new OpenLayers.Bounds(-128*156543.0339,-128*156543.0339,128*156543.0339,128*156543.0339),maxResolution:156543.0339,numZoomLevels:19,units:"m",projection:"EPSG:900913"},options);}
url=url||this.url;name=name||this.name;var newArguments=[name,url,{},options];OpenLayers.Layer.Grid.prototype.initialize.apply(this,newArguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.XYZ(this.name,this.url,this.getOptions());}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);return obj;},getURL:function(bounds){var res=this.map.getResolution();var x=Math.round((bounds.left-this.maxExtent.left)/(res*this.tileSize.w));var y=Math.round((this.maxExtent.top-bounds.top)/(res*this.tileSize.h));var z=this.map.getZoom()+this.zoomOffset;var url=this.url;var s=''+x+y+z;if(url instanceof Array)
{url=this.selectUrl(s,url);}
var path=OpenLayers.String.format(url,{'x':x,'y':y,'z':z});return path;},addTile:function(bounds,position){return new OpenLayers.Tile.Image(this,position,bounds,null,this.tileSize);},setMap:function(map){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments);if(!this.tileOrigin){this.tileOrigin=new OpenLayers.LonLat(this.maxExtent.left,this.maxExtent.bottom);}},CLASS_NAME:"OpenLayers.Layer.XYZ"});OpenLayers.Layer.OSM=OpenLayers.Class(OpenLayers.Layer.XYZ,{name:"OpenStreetMap",attribution:"Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",sphericalMercator:true,url:'http://tile.openstreetmap.org/${z}/${x}/${y}.png',clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.OSM(this.name,this.url,this.getOptions());}
obj=OpenLayers.Layer.XYZ.prototype.clone.apply(this,[obj]);return obj;},CLASS_NAME:"OpenLayers.Layer.OSM"});OpenLayers.Rule=OpenLayers.Class({id:null,name:null,title:null,description:null,context:null,filter:null,elseFilter:false,symbolizer:null,symbolizers:null,minScaleDenominator:null,maxScaleDenominator:null,initialize:function(options){this.symbolizer={};OpenLayers.Util.extend(this,options);if(this.symbolizers){delete this.symbolizer;}
this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){for(var i in this.symbolizer){this.symbolizer[i]=null;}
this.symbolizer=null;delete this.symbolizers;},evaluate:function(feature){var context=this.getContext(feature);var applies=true;if(this.minScaleDenominator||this.maxScaleDenominator){var scale=feature.layer.map.getScale();}
if(this.minScaleDenominator){applies=scale>=OpenLayers.Style.createLiteral(this.minScaleDenominator,context);}
if(applies&&this.maxScaleDenominator){applies=scale<OpenLayers.Style.createLiteral(this.maxScaleDenominator,context);}
if(applies&&this.filter){if(this.filter.CLASS_NAME=="OpenLayers.Filter.FeatureId"){applies=this.filter.evaluate(feature);}else{applies=this.filter.evaluate(context);}}
return applies;},getContext:function(feature){var context=this.context;if(!context){context=feature.attributes||feature.data;}
if(typeof this.context=="function"){context=this.context(feature);}
return context;},clone:function(){var options=OpenLayers.Util.extend({},this);if(this.symbolizers){var len=this.symbolizers.length;options.symbolizers=new Array(len);for(var i=0;i<len;++i){options.symbolizers[i]=this.symbolizers[i].clone();}}else{options.symbolizer={};var value,type;for(var key in this.symbolizer){value=this.symbolizer[key];type=typeof value;if(type==="object"){options.symbolizer[key]=OpenLayers.Util.extend({},value);}else if(type==="string"){options.symbolizer[key]=value;}}}
options.filter=this.filter&&this.filter.clone();options.context=this.context&&OpenLayers.Util.extend({},this.context);return new OpenLayers.Rule(options);},CLASS_NAME:"OpenLayers.Rule"});OpenLayers.StyleMap=OpenLayers.Class({styles:null,extendDefault:true,initialize:function(style,options){this.styles={"default":new OpenLayers.Style(OpenLayers.Feature.Vector.style["default"]),"select":new OpenLayers.Style(OpenLayers.Feature.Vector.style["select"]),"temporary":new OpenLayers.Style(OpenLayers.Feature.Vector.style["temporary"]),"delete":new OpenLayers.Style(OpenLayers.Feature.Vector.style["delete"])};if(style instanceof OpenLayers.Style){this.styles["default"]=style;this.styles["select"]=style;this.styles["temporary"]=style;this.styles["delete"]=style;}else if(typeof style=="object"){for(var key in style){if(style[key]instanceof OpenLayers.Style){this.styles[key]=style[key];}else if(typeof style[key]=="object"){this.styles[key]=new OpenLayers.Style(style[key]);}else{this.styles["default"]=new OpenLayers.Style(style);this.styles["select"]=new OpenLayers.Style(style);this.styles["temporary"]=new OpenLayers.Style(style);this.styles["delete"]=new OpenLayers.Style(style);break;}}}
OpenLayers.Util.extend(this,options);},destroy:function(){for(var key in this.styles){this.styles[key].destroy();}
this.styles=null;},createSymbolizer:function(feature,intent){if(!feature){feature=new OpenLayers.Feature.Vector();}
if(!this.styles[intent]){intent="default";}
feature.renderIntent=intent;var defaultSymbolizer={};if(this.extendDefault&&intent!="default"){defaultSymbolizer=this.styles["default"].createSymbolizer(feature);}
return OpenLayers.Util.extend(defaultSymbolizer,this.styles[intent].createSymbolizer(feature));},addUniqueValueRules:function(renderIntent,property,symbolizers,context){var rules=[];for(var value in symbolizers){rules.push(new OpenLayers.Rule({symbolizer:symbolizers[value],context:context,filter:new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.EQUAL_TO,property:property,value:value})}));}
this.styles[renderIntent].addRules(rules);},CLASS_NAME:"OpenLayers.StyleMap"});OpenLayers.Filter.Comparison=OpenLayers.Class(OpenLayers.Filter,{type:null,property:null,value:null,matchCase:true,lowerBoundary:null,upperBoundary:null,initialize:function(options){OpenLayers.Filter.prototype.initialize.apply(this,[options]);},evaluate:function(context){if(context instanceof OpenLayers.Feature.Vector){context=context.attributes;}
var result=false;var got=context[this.property];switch(this.type){case OpenLayers.Filter.Comparison.EQUAL_TO:var exp=this.value;if(!this.matchCase&&typeof got=="string"&&typeof exp=="string"){result=(got.toUpperCase()==exp.toUpperCase());}else{result=(got==exp);}
break;case OpenLayers.Filter.Comparison.NOT_EQUAL_TO:var exp=this.value;if(!this.matchCase&&typeof got=="string"&&typeof exp=="string"){result=(got.toUpperCase()!=exp.toUpperCase());}else{result=(got!=exp);}
break;case OpenLayers.Filter.Comparison.LESS_THAN:result=got<this.value;break;case OpenLayers.Filter.Comparison.GREATER_THAN:result=got>this.value;break;case OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO:result=got<=this.value;break;case OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO:result=got>=this.value;break;case OpenLayers.Filter.Comparison.BETWEEN:result=(got>=this.lowerBoundary)&&(got<=this.upperBoundary);break;case OpenLayers.Filter.Comparison.LIKE:var regexp=new RegExp(this.value,"gi");result=regexp.test(got);break;}
return result;},value2regex:function(wildCard,singleChar,escapeChar){if(wildCard=="."){var msg="'.' is an unsupported wildCard character for "+"OpenLayers.Filter.Comparison";OpenLayers.Console.error(msg);return null;}
wildCard=wildCard?wildCard:"*";singleChar=singleChar?singleChar:".";escapeChar=escapeChar?escapeChar:"!";this.value=this.value.replace(new RegExp("\\"+escapeChar+"(.|$)","g"),"\\$1");this.value=this.value.replace(new RegExp("\\"+singleChar,"g"),".");this.value=this.value.replace(new RegExp("\\"+wildCard,"g"),".*");this.value=this.value.replace(new RegExp("\\\\.\\*","g"),"\\"+wildCard);this.value=this.value.replace(new RegExp("\\\\\\.","g"),"\\"+singleChar);return this.value;},regex2value:function(){var value=this.value;value=value.replace(/!/g,"!!");value=value.replace(/(\\)?\\\./g,function($0,$1){return $1?$0:"!.";});value=value.replace(/(\\)?\\\*/g,function($0,$1){return $1?$0:"!*";});value=value.replace(/\\\\/g,"\\");value=value.replace(/\.\*/g,"*");return value;},clone:function(){return OpenLayers.Util.extend(new OpenLayers.Filter.Comparison(),this);},CLASS_NAME:"OpenLayers.Filter.Comparison"});OpenLayers.Filter.Comparison.EQUAL_TO="==";OpenLayers.Filter.Comparison.NOT_EQUAL_TO="!=";OpenLayers.Filter.Comparison.LESS_THAN="<";OpenLayers.Filter.Comparison.GREATER_THAN=">";OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO="<=";OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO=">=";OpenLayers.Filter.Comparison.BETWEEN="..";OpenLayers.Filter.Comparison.LIKE="~";OpenLayers.Geometry.Collection=OpenLayers.Class(OpenLayers.Geometry,{components:null,componentTypes:null,initialize:function(components){OpenLayers.Geometry.prototype.initialize.apply(this,arguments);this.components=[];if(components!=null){this.addComponents(components);}},destroy:function(){this.components.length=0;this.components=null;OpenLayers.Geometry.prototype.destroy.apply(this,arguments);},clone:function(){var geometry=eval("new "+this.CLASS_NAME+"()");for(var i=0,len=this.components.length;i<len;i++){geometry.addComponent(this.components[i].clone());}
OpenLayers.Util.applyDefaults(geometry,this);return geometry;},getComponentsString:function(){var strings=[];for(var i=0,len=this.components.length;i<len;i++){strings.push(this.components[i].toShortString());}
return strings.join(",");},calculateBounds:function(){this.bounds=null;if(this.components&&this.components.length>0){this.setBounds(this.components[0].getBounds());for(var i=1,len=this.components.length;i<len;i++){this.extendBounds(this.components[i].getBounds());}}},addComponents:function(components){if(!(components instanceof Array)){components=[components];}
for(var i=0,len=components.length;i<len;i++){this.addComponent(components[i]);}},addComponent:function(component,index){var added=false;if(component){if(this.componentTypes==null||(OpenLayers.Util.indexOf(this.componentTypes,component.CLASS_NAME)>-1)){if(index!=null&&(index<this.components.length)){var components1=this.components.slice(0,index);var components2=this.components.slice(index,this.components.length);components1.push(component);this.components=components1.concat(components2);}else{this.components.push(component);}
component.parent=this;this.clearBounds();added=true;}}
return added;},removeComponents:function(components){if(!(components instanceof Array)){components=[components];}
for(var i=components.length-1;i>=0;--i){this.removeComponent(components[i]);}},removeComponent:function(component){OpenLayers.Util.removeItem(this.components,component);this.clearBounds();},getLength:function(){var length=0.0;for(var i=0,len=this.components.length;i<len;i++){length+=this.components[i].getLength();}
return length;},getArea:function(){var area=0.0;for(var i=0,len=this.components.length;i<len;i++){area+=this.components[i].getArea();}
return area;},getGeodesicArea:function(projection){var area=0.0;for(var i=0,len=this.components.length;i<len;i++){area+=this.components[i].getGeodesicArea(projection);}
return area;},getCentroid:function(weighted){if(!weighted){return this.components.length&&this.components[0].getCentroid();}
var len=this.components.length;if(!len){return false;}
var areas=[];var centroids=[];var areaSum=0;var minArea=Number.MAX_VALUE;var component;for(var i=0;i<len;++i){component=this.components[i];var area=component.getArea();var centroid=component.getCentroid(true);if(isNaN(area)||isNaN(centroid.x)||isNaN(centroid.y)){continue;}
areas.push(area);areaSum+=area;minArea=(area<minArea&&area>0)?area:minArea;centroids.push(centroid);}
len=areas.length;if(areaSum===0){for(var i=0;i<len;++i){areas[i]=1;}
areaSum=areas.length;}else{for(var i=0;i<len;++i){areas[i]/=minArea;}
areaSum/=minArea;}
var xSum=0,ySum=0,centroid,area;for(var i=0;i<len;++i){centroid=centroids[i];area=areas[i];xSum+=centroid.x*area;ySum+=centroid.y*area;}
return new OpenLayers.Geometry.Point(xSum/areaSum,ySum/areaSum);},getGeodesicLength:function(projection){var length=0.0;for(var i=0,len=this.components.length;i<len;i++){length+=this.components[i].getGeodesicLength(projection);}
return length;},move:function(x,y){for(var i=0,len=this.components.length;i<len;i++){this.components[i].move(x,y);}},rotate:function(angle,origin){for(var i=0,len=this.components.length;i<len;++i){this.components[i].rotate(angle,origin);}},resize:function(scale,origin,ratio){for(var i=0;i<this.components.length;++i){this.components[i].resize(scale,origin,ratio);}
return this;},distanceTo:function(geometry,options){var edge=!(options&&options.edge===false);var details=edge&&options&&options.details;var result,best,distance;var min=Number.POSITIVE_INFINITY;for(var i=0,len=this.components.length;i<len;++i){result=this.components[i].distanceTo(geometry,options);distance=details?result.distance:result;if(distance<min){min=distance;best=result;if(min==0){break;}}}
return best;},equals:function(geometry){var equivalent=true;if(!geometry||!geometry.CLASS_NAME||(this.CLASS_NAME!=geometry.CLASS_NAME)){equivalent=false;}else if(!(geometry.components instanceof Array)||(geometry.components.length!=this.components.length)){equivalent=false;}else{for(var i=0,len=this.components.length;i<len;++i){if(!this.components[i].equals(geometry.components[i])){equivalent=false;break;}}}
return equivalent;},transform:function(source,dest){if(source&&dest){for(var i=0,len=this.components.length;i<len;i++){var component=this.components[i];component.transform(source,dest);}
this.bounds=null;}
return this;},intersects:function(geometry){var intersect=false;for(var i=0,len=this.components.length;i<len;++i){intersect=geometry.intersects(this.components[i]);if(intersect){break;}}
return intersect;},getVertices:function(nodes){var vertices=[];for(var i=0,len=this.components.length;i<len;++i){Array.prototype.push.apply(vertices,this.components[i].getVertices(nodes));}
return vertices;},CLASS_NAME:"OpenLayers.Geometry.Collection"});OpenLayers.Geometry.Point=OpenLayers.Class(OpenLayers.Geometry,{x:null,y:null,initialize:function(x,y){OpenLayers.Geometry.prototype.initialize.apply(this,arguments);this.x=parseFloat(x);this.y=parseFloat(y);},clone:function(obj){if(obj==null){obj=new OpenLayers.Geometry.Point(this.x,this.y);}
OpenLayers.Util.applyDefaults(obj,this);return obj;},calculateBounds:function(){this.bounds=new OpenLayers.Bounds(this.x,this.y,this.x,this.y);},distanceTo:function(geometry,options){var edge=!(options&&options.edge===false);var details=edge&&options&&options.details;var distance,x0,y0,x1,y1,result;if(geometry instanceof OpenLayers.Geometry.Point){x0=this.x;y0=this.y;x1=geometry.x;y1=geometry.y;distance=Math.sqrt(Math.pow(x0-x1,2)+Math.pow(y0-y1,2));result=!details?distance:{x0:x0,y0:y0,x1:x1,y1:y1,distance:distance};}else{result=geometry.distanceTo(this,options);if(details){result={x0:result.x1,y0:result.y1,x1:result.x0,y1:result.y0,distance:result.distance};}}
return result;},equals:function(geom){var equals=false;if(geom!=null){equals=((this.x==geom.x&&this.y==geom.y)||(isNaN(this.x)&&isNaN(this.y)&&isNaN(geom.x)&&isNaN(geom.y)));}
return equals;},toShortString:function(){return(this.x+", "+this.y);},move:function(x,y){this.x=this.x+x;this.y=this.y+y;this.clearBounds();},rotate:function(angle,origin){angle*=Math.PI/180;var radius=this.distanceTo(origin);var theta=angle+Math.atan2(this.y-origin.y,this.x-origin.x);this.x=origin.x+(radius*Math.cos(theta));this.y=origin.y+(radius*Math.sin(theta));this.clearBounds();},getCentroid:function(){return new OpenLayers.Geometry.Point(this.x,this.y);},resize:function(scale,origin,ratio){ratio=(ratio==undefined)?1:ratio;this.x=origin.x+(scale*ratio*(this.x-origin.x));this.y=origin.y+(scale*(this.y-origin.y));this.clearBounds();return this;},intersects:function(geometry){var intersect=false;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){intersect=this.equals(geometry);}else{intersect=geometry.intersects(this);}
return intersect;},transform:function(source,dest){if((source&&dest)){OpenLayers.Projection.transform(this,source,dest);this.bounds=null;}
return this;},getVertices:function(nodes){return[this];},CLASS_NAME:"OpenLayers.Geometry.Point"});OpenLayers.Layer.Vector=OpenLayers.Class(OpenLayers.Layer,{EVENT_TYPES:["beforefeatureadded","beforefeaturesadded","featureadded","featuresadded","beforefeatureremoved","beforefeaturesremoved","featureremoved","featuresremoved","beforefeatureselected","featureselected","featureunselected","beforefeaturemodified","featuremodified","afterfeaturemodified","vertexmodified","sketchstarted","sketchmodified","sketchcomplete","refresh"],isBaseLayer:false,isFixed:false,features:null,filter:null,selectedFeatures:null,unrenderedFeatures:null,reportError:true,style:null,styleMap:null,strategies:null,protocol:null,renderers:['SVG','VML','Canvas'],renderer:null,rendererOptions:null,geometryType:null,drawn:false,initialize:function(name,options){this.EVENT_TYPES=OpenLayers.Layer.Vector.prototype.EVENT_TYPES.concat(OpenLayers.Layer.prototype.EVENT_TYPES);OpenLayers.Layer.prototype.initialize.apply(this,arguments);if(!this.renderer||!this.renderer.supported()){this.assignRenderer();}
if(!this.renderer||!this.renderer.supported()){this.renderer=null;this.displayError();}
if(!this.styleMap){this.styleMap=new OpenLayers.StyleMap();}
this.features=[];this.selectedFeatures=[];this.unrenderedFeatures={};if(this.strategies){for(var i=0,len=this.strategies.length;i<len;i++){this.strategies[i].setLayer(this);}}},destroy:function(){if(this.strategies){var strategy,i,len;for(i=0,len=this.strategies.length;i<len;i++){strategy=this.strategies[i];if(strategy.autoDestroy){strategy.destroy();}}
this.strategies=null;}
if(this.protocol){if(this.protocol.autoDestroy){this.protocol.destroy();}
this.protocol=null;}
this.destroyFeatures();this.features=null;this.selectedFeatures=null;this.unrenderedFeatures=null;if(this.renderer){this.renderer.destroy();}
this.renderer=null;this.geometryType=null;this.drawn=null;OpenLayers.Layer.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.Vector(this.name,this.getOptions());}
obj=OpenLayers.Layer.prototype.clone.apply(this,[obj]);var features=this.features;var len=features.length;var clonedFeatures=new Array(len);for(var i=0;i<len;++i){clonedFeatures[i]=features[i].clone();}
obj.features=clonedFeatures;return obj;},refresh:function(obj){if(this.calculateInRange()&&this.visibility){this.events.triggerEvent("refresh",obj);}},assignRenderer:function(){for(var i=0,len=this.renderers.length;i<len;i++){var rendererClass=this.renderers[i];var renderer=(typeof rendererClass=="function")?rendererClass:OpenLayers.Renderer[rendererClass];if(renderer&&renderer.prototype.supported()){this.renderer=new renderer(this.div,this.rendererOptions);break;}}},displayError:function(){if(this.reportError){OpenLayers.Console.userError(OpenLayers.i18n("browserNotSupported",{'renderers':this.renderers.join("\n")}));}},setMap:function(map){OpenLayers.Layer.prototype.setMap.apply(this,arguments);if(!this.renderer){this.map.removeLayer(this);}else{this.renderer.map=this.map;this.renderer.setSize(this.map.getSize());}},afterAdd:function(){if(this.strategies){var strategy,i,len;for(i=0,len=this.strategies.length;i<len;i++){strategy=this.strategies[i];if(strategy.autoActivate){strategy.activate();}}}},removeMap:function(map){this.drawn=false;if(this.strategies){var strategy,i,len;for(i=0,len=this.strategies.length;i<len;i++){strategy=this.strategies[i];if(strategy.autoActivate){strategy.deactivate();}}}},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize.apply(this,arguments);this.renderer.setSize(this.map.getSize());},moveTo:function(bounds,zoomChanged,dragging){OpenLayers.Layer.prototype.moveTo.apply(this,arguments);var coordSysUnchanged=true;if(!dragging){this.renderer.root.style.visibility="hidden";this.div.style.left=-parseInt(this.map.layerContainerDiv.style.left)+"px";this.div.style.top=-parseInt(this.map.layerContainerDiv.style.top)+"px";var extent=this.map.getExtent();coordSysUnchanged=this.renderer.setExtent(extent,zoomChanged);this.renderer.root.style.visibility="visible";if(OpenLayers.IS_GECKO===true){this.div.scrollLeft=this.div.scrollLeft;}
if(!zoomChanged&&coordSysUnchanged){for(var i in this.unrenderedFeatures){var feature=this.unrenderedFeatures[i];this.drawFeature(feature);}}}
if(!this.drawn||zoomChanged||!coordSysUnchanged){this.drawn=true;var feature;for(var i=0,len=this.features.length;i<len;i++){this.renderer.locked=(i!==(len-1));feature=this.features[i];this.drawFeature(feature);}}},display:function(display){OpenLayers.Layer.prototype.display.apply(this,arguments);var currentDisplay=this.div.style.display;if(currentDisplay!=this.renderer.root.style.display){this.renderer.root.style.display=currentDisplay;}},addFeatures:function(features,options){if(!(features instanceof Array)){features=[features];}
var notify=!options||!options.silent;if(notify){var event={features:features};var ret=this.events.triggerEvent("beforefeaturesadded",event);if(ret===false){return;}
features=event.features;}
var featuresAdded=[];for(var i=0,len=features.length;i<len;i++){if(i!=(features.length-1)){this.renderer.locked=true;}else{this.renderer.locked=false;}
var feature=features[i];if(this.geometryType&&!(feature.geometry instanceof this.geometryType)){var throwStr=OpenLayers.i18n('componentShouldBe',{'geomType':this.geometryType.prototype.CLASS_NAME});throw throwStr;}
feature.layer=this;if(!feature.style&&this.style){feature.style=OpenLayers.Util.extend({},this.style);}
if(notify){if(this.events.triggerEvent("beforefeatureadded",{feature:feature})===false){continue;};this.preFeatureInsert(feature);}
featuresAdded.push(feature);this.features.push(feature);this.drawFeature(feature);if(notify){this.events.triggerEvent("featureadded",{feature:feature});this.onFeatureInsert(feature);}}
if(notify){this.events.triggerEvent("featuresadded",{features:featuresAdded});}},removeFeatures:function(features,options){if(!features||features.length===0){return;}
if(features===this.features){return this.removeAllFeatures(options);}
if(!(features instanceof Array)){features=[features];}
if(features===this.selectedFeatures){features=features.slice();}
var notify=!options||!options.silent;if(notify){this.events.triggerEvent("beforefeaturesremoved",{features:features});}
for(var i=features.length-1;i>=0;i--){if(i!=0&&features[i-1].geometry){this.renderer.locked=true;}else{this.renderer.locked=false;}
var feature=features[i];delete this.unrenderedFeatures[feature.id];if(notify){this.events.triggerEvent("beforefeatureremoved",{feature:feature});}
this.features=OpenLayers.Util.removeItem(this.features,feature);feature.layer=null;if(feature.geometry){this.renderer.eraseFeatures(feature);}
if(OpenLayers.Util.indexOf(this.selectedFeatures,feature)!=-1){OpenLayers.Util.removeItem(this.selectedFeatures,feature);}
if(notify){this.events.triggerEvent("featureremoved",{feature:feature});}}
if(notify){this.events.triggerEvent("featuresremoved",{features:features});}},removeAllFeatures:function(options){var notify=!options||!options.silent;var features=this.features;if(notify){this.events.triggerEvent("beforefeaturesremoved",{features:features});}
var feature;for(var i=features.length-1;i>=0;i--){feature=features[i];if(notify){this.events.triggerEvent("beforefeatureremoved",{feature:feature});}
feature.layer=null;if(notify){this.events.triggerEvent("featureremoved",{feature:feature});}}
this.renderer.clear();this.features=[];this.unrenderedFeatures={};this.selectedFeatures=[];if(notify){this.events.triggerEvent("featuresremoved",{features:features});}},destroyFeatures:function(features,options){var all=(features==undefined);if(all){features=this.features;}
if(features){this.removeFeatures(features,options);for(var i=features.length-1;i>=0;i--){features[i].destroy();}}},drawFeature:function(feature,style){if(!this.drawn){return}
if(typeof style!="object"){if(!style&&feature.state===OpenLayers.State.DELETE){style="delete";}
var renderIntent=style||feature.renderIntent;style=feature.style||this.style;if(!style){style=this.styleMap.createSymbolizer(feature,renderIntent);}}
if(!this.renderer.drawFeature(feature,style)){this.unrenderedFeatures[feature.id]=feature;}else{delete this.unrenderedFeatures[feature.id];};},eraseFeatures:function(features){this.renderer.eraseFeatures(features);},getFeatureFromEvent:function(evt){if(!this.renderer){OpenLayers.Console.error(OpenLayers.i18n("getFeatureError"));return null;}
var featureId=this.renderer.getFeatureIdFromEvent(evt);return this.getFeatureById(featureId);},getFeatureBy:function(property,value){var feature=null;for(var i=0,len=this.features.length;i<len;++i){if(this.features[i][property]==value){feature=this.features[i];break;}}
return feature;},getFeatureById:function(featureId){return this.getFeatureBy('id',featureId);},getFeatureByFid:function(featureFid){return this.getFeatureBy('fid',featureFid);},onFeatureInsert:function(feature){},preFeatureInsert:function(feature){},getDataExtent:function(){var maxExtent=null;var features=this.features;if(features&&(features.length>0)){maxExtent=new OpenLayers.Bounds();var geometry=null;for(var i=0,len=features.length;i<len;i++){geometry=features[i].geometry;if(geometry){maxExtent.extend(geometry.getBounds());}}}
return maxExtent;},CLASS_NAME:"OpenLayers.Layer.Vector"});OpenLayers.Geometry.MultiPoint=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},addPoint:function(point,index){this.addComponent(point,index);},removePoint:function(point){this.removeComponent(point);},CLASS_NAME:"OpenLayers.Geometry.MultiPoint"});OpenLayers.Handler.Point=OpenLayers.Class(OpenLayers.Handler,{point:null,layer:null,multi:false,drawing:false,mouseDown:false,lastDown:null,lastUp:null,persist:false,layerOptions:null,initialize:function(control,callbacks,options){if(!(options&&options.layerOptions&&options.layerOptions.styleMap)){this.style=OpenLayers.Util.extend(OpenLayers.Feature.Vector.style['default'],{});}
OpenLayers.Handler.prototype.initialize.apply(this,arguments);},activate:function(){if(!OpenLayers.Handler.prototype.activate.apply(this,arguments)){return false;}
var options=OpenLayers.Util.extend({displayInLayerSwitcher:false,calculateInRange:OpenLayers.Function.True},this.layerOptions);this.layer=new OpenLayers.Layer.Vector(this.CLASS_NAME,options);this.map.addLayer(this.layer);return true;},createFeature:function(pixel){var lonlat=this.map.getLonLatFromPixel(pixel);this.point=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(lonlat.lon,lonlat.lat));this.callback("create",[this.point.geometry,this.point]);this.point.geometry.clearBounds();this.layer.addFeatures([this.point],{silent:true});},deactivate:function(){if(!OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){return false;}
if(this.drawing){this.cancel();}
this.destroyFeature();if(this.layer.map!=null){this.layer.destroy(false);}
this.layer=null;return true;},destroyFeature:function(){if(this.layer){this.layer.destroyFeatures();}
this.point=null;},finalize:function(cancel){var key=cancel?"cancel":"done";this.drawing=false;this.mouseDown=false;this.lastDown=null;this.lastUp=null;this.callback(key,[this.geometryClone()]);if(cancel||!this.persist){this.destroyFeature();}},cancel:function(){this.finalize(true);},click:function(evt){OpenLayers.Event.stop(evt);return false;},dblclick:function(evt){OpenLayers.Event.stop(evt);return false;},modifyFeature:function(pixel){var lonlat=this.map.getLonLatFromPixel(pixel);this.point.geometry.x=lonlat.lon;this.point.geometry.y=lonlat.lat;this.callback("modify",[this.point.geometry,this.point]);this.point.geometry.clearBounds();this.drawFeature();},drawFeature:function(){this.layer.drawFeature(this.point,this.style);},getGeometry:function(){var geometry=this.point&&this.point.geometry;if(geometry&&this.multi){geometry=new OpenLayers.Geometry.MultiPoint([geometry]);}
return geometry;},geometryClone:function(){var geom=this.getGeometry();return geom&&geom.clone();},mousedown:function(evt){if(!this.checkModifiers(evt)){return true;}
if(this.lastDown&&this.lastDown.equals(evt.xy)){return true;}
this.drawing=true;if(this.lastDown==null){if(this.persist){this.destroyFeature();}
this.createFeature(evt.xy);}else{this.modifyFeature(evt.xy);}
this.lastDown=evt.xy;return false;},mousemove:function(evt){if(this.drawing){this.modifyFeature(evt.xy);}
return true;},mouseup:function(evt){if(this.drawing){this.finalize();return false;}else{return true;}},CLASS_NAME:"OpenLayers.Handler.Point"});OpenLayers.Layer.Vector.RootContainer=OpenLayers.Class(OpenLayers.Layer.Vector,{displayInLayerSwitcher:false,layers:null,initialize:function(name,options){OpenLayers.Layer.Vector.prototype.initialize.apply(this,arguments);},display:function(){},getFeatureFromEvent:function(evt){var layers=this.layers;var feature;for(var i=0;i<layers.length;i++){feature=layers[i].getFeatureFromEvent(evt);if(feature){return feature;}}},setMap:function(map){OpenLayers.Layer.Vector.prototype.setMap.apply(this,arguments);this.collectRoots();map.events.register("changelayer",this,this.handleChangeLayer);},removeMap:function(map){map.events.unregister("changelayer",this,this.handleChangeLayer);this.resetRoots();OpenLayers.Layer.Vector.prototype.removeMap.apply(this,arguments);},collectRoots:function(){var layer;for(var i=0;i<this.map.layers.length;++i){layer=this.map.layers[i];if(OpenLayers.Util.indexOf(this.layers,layer)!=-1){layer.renderer.moveRoot(this.renderer);}}},resetRoots:function(){var layer;for(var i=0;i<this.layers.length;++i){layer=this.layers[i];if(this.renderer&&layer.renderer.getRenderLayerId()==this.id){this.renderer.moveRoot(layer.renderer);}}},handleChangeLayer:function(evt){var layer=evt.layer;if(evt.property=="order"&&OpenLayers.Util.indexOf(this.layers,layer)!=-1){this.resetRoots();this.collectRoots();}},CLASS_NAME:"OpenLayers.Layer.Vector.RootContainer"});OpenLayers.Control.SelectFeature=OpenLayers.Class(OpenLayers.Control,{EVENT_TYPES:["beforefeaturehighlighted","featurehighlighted","featureunhighlighted"],multipleKey:null,toggleKey:null,multiple:false,clickout:true,toggle:false,hover:false,highlightOnly:false,box:false,onBeforeSelect:function(){},onSelect:function(){},onUnselect:function(){},scope:null,geometryTypes:null,layer:null,layers:null,callbacks:null,selectStyle:null,renderIntent:"select",handlers:null,initialize:function(layers,options){this.EVENT_TYPES=OpenLayers.Control.SelectFeature.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES);OpenLayers.Control.prototype.initialize.apply(this,[options]);if(this.scope===null){this.scope=this;}
this.initLayer(layers);var callbacks={click:this.clickFeature,clickout:this.clickoutFeature};if(this.hover){callbacks.over=this.overFeature;callbacks.out=this.outFeature;}
this.callbacks=OpenLayers.Util.extend(callbacks,this.callbacks);this.handlers={feature:new OpenLayers.Handler.Feature(this,this.layer,this.callbacks,{geometryTypes:this.geometryTypes})};if(this.box){this.handlers.box=new OpenLayers.Handler.Box(this,{done:this.selectBox},{boxDivClassName:"olHandlerBoxSelectFeature"});}},initLayer:function(layers){if(layers instanceof Array){this.layers=layers;this.layer=new OpenLayers.Layer.Vector.RootContainer(this.id+"_container",{layers:layers});}else{this.layer=layers;}},destroy:function(){if(this.active&&this.layers){this.map.removeLayer(this.layer);}
OpenLayers.Control.prototype.destroy.apply(this,arguments);if(this.layers){this.layer.destroy();}},activate:function(){if(!this.active){if(this.layers){this.map.addLayer(this.layer);}
this.handlers.feature.activate();if(this.box&&this.handlers.box){this.handlers.box.activate();}}
return OpenLayers.Control.prototype.activate.apply(this,arguments);},deactivate:function(){if(this.active){this.handlers.feature.deactivate();if(this.handlers.box){this.handlers.box.deactivate();}
if(this.layers){this.map.removeLayer(this.layer);}}
return OpenLayers.Control.prototype.deactivate.apply(this,arguments);},unselectAll:function(options){var layers=this.layers||[this.layer];var layer,feature;for(var l=0;l<layers.length;++l){layer=layers[l];for(var i=layer.selectedFeatures.length-1;i>=0;--i){feature=layer.selectedFeatures[i];if(!options||options.except!=feature){this.unselect(feature);}}}},clickFeature:function(feature){if(!this.hover){var selected=(OpenLayers.Util.indexOf(feature.layer.selectedFeatures,feature)>-1);if(selected){if(this.toggleSelect()){this.unselect(feature);}else if(!this.multipleSelect()){this.unselectAll({except:feature});}}else{if(!this.multipleSelect()){this.unselectAll({except:feature});}
this.select(feature);}}},multipleSelect:function(){return this.multiple||(this.handlers.feature.evt&&this.handlers.feature.evt[this.multipleKey]);},toggleSelect:function(){return this.toggle||(this.handlers.feature.evt&&this.handlers.feature.evt[this.toggleKey]);},clickoutFeature:function(feature){if(!this.hover&&this.clickout){this.unselectAll();}},overFeature:function(feature){var layer=feature.layer;if(this.hover){if(this.highlightOnly){this.highlight(feature);}else if(OpenLayers.Util.indexOf(layer.selectedFeatures,feature)==-1){this.select(feature);}}},outFeature:function(feature){if(this.hover){if(this.highlightOnly){if(feature._lastHighlighter==this.id){if(feature._prevHighlighter&&feature._prevHighlighter!=this.id){delete feature._lastHighlighter;var control=this.map.getControl(feature._prevHighlighter);if(control){control.highlight(feature);}}else{this.unhighlight(feature);}}}else{this.unselect(feature);}}},highlight:function(feature){var layer=feature.layer;var cont=this.events.triggerEvent("beforefeaturehighlighted",{feature:feature});if(cont!==false){feature._prevHighlighter=feature._lastHighlighter;feature._lastHighlighter=this.id;var style=this.selectStyle||this.renderIntent;layer.drawFeature(feature,style);this.events.triggerEvent("featurehighlighted",{feature:feature});}},unhighlight:function(feature){var layer=feature.layer;feature._lastHighlighter=feature._prevHighlighter;delete feature._prevHighlighter;layer.drawFeature(feature,feature.style||feature.layer.style||"default");this.events.triggerEvent("featureunhighlighted",{feature:feature});},select:function(feature){var cont=this.onBeforeSelect.call(this.scope,feature);var layer=feature.layer;if(cont!==false){cont=layer.events.triggerEvent("beforefeatureselected",{feature:feature});if(cont!==false){layer.selectedFeatures.push(feature);this.highlight(feature);if(!this.handlers.feature.lastFeature){this.handlers.feature.lastFeature=layer.selectedFeatures[0];}
layer.events.triggerEvent("featureselected",{feature:feature});this.onSelect.call(this.scope,feature);}}},unselect:function(feature){var layer=feature.layer;this.unhighlight(feature);OpenLayers.Util.removeItem(layer.selectedFeatures,feature);layer.events.triggerEvent("featureunselected",{feature:feature});this.onUnselect.call(this.scope,feature);},selectBox:function(position){if(position instanceof OpenLayers.Bounds){var minXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.left,position.bottom));var maxXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.right,position.top));var bounds=new OpenLayers.Bounds(minXY.lon,minXY.lat,maxXY.lon,maxXY.lat);if(!this.multipleSelect()){this.unselectAll();}
var prevMultiple=this.multiple;this.multiple=true;var layers=this.layers||[this.layer];var layer;for(var l=0;l<layers.length;++l){layer=layers[l];for(var i=0,len=layer.features.length;i<len;++i){var feature=layer.features[i];if(!feature.getVisibility()){continue;}
if(this.geometryTypes==null||OpenLayers.Util.indexOf(this.geometryTypes,feature.geometry.CLASS_NAME)>-1){if(bounds.toGeometry().intersects(feature.geometry)){if(OpenLayers.Util.indexOf(layer.selectedFeatures,feature)==-1){this.select(feature);}}}}}
this.multiple=prevMultiple;}},setMap:function(map){this.handlers.feature.setMap(map);if(this.box){this.handlers.box.setMap(map);}
OpenLayers.Control.prototype.setMap.apply(this,arguments);},setLayer:function(layers){var isActive=this.active;this.unselectAll();this.deactivate();if(this.layers){this.layer.destroy();this.layers=null;}
this.initLayer(layers);this.handlers.feature.layer=this.layer;if(isActive){this.activate();}},CLASS_NAME:"OpenLayers.Control.SelectFeature"});OpenLayers.Geometry.Curve=OpenLayers.Class(OpenLayers.Geometry.MultiPoint,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(points){OpenLayers.Geometry.MultiPoint.prototype.initialize.apply(this,arguments);},getLength:function(){var length=0.0;if(this.components&&(this.components.length>1)){for(var i=1,len=this.components.length;i<len;i++){length+=this.components[i-1].distanceTo(this.components[i]);}}
return length;},getGeodesicLength:function(projection){var geom=this;if(projection){var gg=new OpenLayers.Projection("EPSG:4326");if(!gg.equals(projection)){geom=this.clone().transform(projection,gg);}}
var length=0.0;if(geom.components&&(geom.components.length>1)){var p1,p2;for(var i=1,len=geom.components.length;i<len;i++){p1=geom.components[i-1];p2=geom.components[i];length+=OpenLayers.Util.distVincenty({lon:p1.x,lat:p1.y},{lon:p2.x,lat:p2.y});}}
return length*1000;},CLASS_NAME:"OpenLayers.Geometry.Curve"});OpenLayers.Geometry.LineString=OpenLayers.Class(OpenLayers.Geometry.Curve,{initialize:function(points){OpenLayers.Geometry.Curve.prototype.initialize.apply(this,arguments);},removeComponent:function(point){if(this.components&&(this.components.length>2)){OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this,arguments);}},intersects:function(geometry){var intersect=false;var type=geometry.CLASS_NAME;if(type=="OpenLayers.Geometry.LineString"||type=="OpenLayers.Geometry.LinearRing"||type=="OpenLayers.Geometry.Point"){var segs1=this.getSortedSegments();var segs2;if(type=="OpenLayers.Geometry.Point"){segs2=[{x1:geometry.x,y1:geometry.y,x2:geometry.x,y2:geometry.y}];}else{segs2=geometry.getSortedSegments();}
var seg1,seg1x1,seg1x2,seg1y1,seg1y2,seg2,seg2y1,seg2y2;outer:for(var i=0,len=segs1.length;i<len;++i){seg1=segs1[i];seg1x1=seg1.x1;seg1x2=seg1.x2;seg1y1=seg1.y1;seg1y2=seg1.y2;inner:for(var j=0,jlen=segs2.length;j<jlen;++j){seg2=segs2[j];if(seg2.x1>seg1x2){break;}
if(seg2.x2<seg1x1){continue;}
seg2y1=seg2.y1;seg2y2=seg2.y2;if(Math.min(seg2y1,seg2y2)>Math.max(seg1y1,seg1y2)){continue;}
if(Math.max(seg2y1,seg2y2)<Math.min(seg1y1,seg1y2)){continue;}
if(OpenLayers.Geometry.segmentsIntersect(seg1,seg2)){intersect=true;break outer;}}}}else{intersect=geometry.intersects(this);}
return intersect;},getSortedSegments:function(){var numSeg=this.components.length-1;var segments=new Array(numSeg),point1,point2;for(var i=0;i<numSeg;++i){point1=this.components[i];point2=this.components[i+1];if(point1.x<point2.x){segments[i]={x1:point1.x,y1:point1.y,x2:point2.x,y2:point2.y};}else{segments[i]={x1:point2.x,y1:point2.y,x2:point1.x,y2:point1.y};}}
function byX1(seg1,seg2){return seg1.x1-seg2.x1;}
return segments.sort(byX1);},splitWithSegment:function(seg,options){var edge=!(options&&options.edge===false);var tolerance=options&&options.tolerance;var lines=[];var verts=this.getVertices();var points=[];var intersections=[];var split=false;var vert1,vert2,point;var node,vertex,target;var interOptions={point:true,tolerance:tolerance};var result=null;for(var i=0,stop=verts.length-2;i<=stop;++i){vert1=verts[i];points.push(vert1.clone());vert2=verts[i+1];target={x1:vert1.x,y1:vert1.y,x2:vert2.x,y2:vert2.y};point=OpenLayers.Geometry.segmentsIntersect(seg,target,interOptions);if(point instanceof OpenLayers.Geometry.Point){if((point.x===seg.x1&&point.y===seg.y1)||(point.x===seg.x2&&point.y===seg.y2)||point.equals(vert1)||point.equals(vert2)){vertex=true;}else{vertex=false;}
if(vertex||edge){if(!point.equals(intersections[intersections.length-1])){intersections.push(point.clone());}
if(i===0){if(point.equals(vert1)){continue;}}
if(point.equals(vert2)){continue;}
split=true;if(!point.equals(vert1)){points.push(point);}
lines.push(new OpenLayers.Geometry.LineString(points));points=[point.clone()];}}}
if(split){points.push(vert2.clone());lines.push(new OpenLayers.Geometry.LineString(points));}
if(intersections.length>0){var xDir=seg.x1<seg.x2?1:-1;var yDir=seg.y1<seg.y2?1:-1;result={lines:lines,points:intersections.sort(function(p1,p2){return(xDir*p1.x-xDir*p2.x)||(yDir*p1.y-yDir*p2.y);})};}
return result;},split:function(target,options){var results=null;var mutual=options&&options.mutual;var sourceSplit,targetSplit,sourceParts,targetParts;if(target instanceof OpenLayers.Geometry.LineString){var verts=this.getVertices();var vert1,vert2,seg,splits,lines,point;var points=[];sourceParts=[];for(var i=0,stop=verts.length-2;i<=stop;++i){vert1=verts[i];vert2=verts[i+1];seg={x1:vert1.x,y1:vert1.y,x2:vert2.x,y2:vert2.y};targetParts=targetParts||[target];if(mutual){points.push(vert1.clone());}
for(var j=0;j<targetParts.length;++j){splits=targetParts[j].splitWithSegment(seg,options);if(splits){lines=splits.lines;if(lines.length>0){lines.unshift(j,1);Array.prototype.splice.apply(targetParts,lines);j+=lines.length-2;}
if(mutual){for(var k=0,len=splits.points.length;k<len;++k){point=splits.points[k];if(!point.equals(vert1)){points.push(point);sourceParts.push(new OpenLayers.Geometry.LineString(points));if(point.equals(vert2)){points=[];}else{points=[point.clone()];}}}}}}}
if(mutual&&sourceParts.length>0&&points.length>0){points.push(vert2.clone());sourceParts.push(new OpenLayers.Geometry.LineString(points));}}else{results=target.splitWith(this,options);}
if(targetParts&&targetParts.length>1){targetSplit=true;}else{targetParts=[];}
if(sourceParts&&sourceParts.length>1){sourceSplit=true;}else{sourceParts=[];}
if(targetSplit||sourceSplit){if(mutual){results=[sourceParts,targetParts];}else{results=targetParts;}}
return results;},splitWith:function(geometry,options){return geometry.split(this,options);},getVertices:function(nodes){var vertices;if(nodes===true){vertices=[this.components[0],this.components[this.components.length-1]];}else if(nodes===false){vertices=this.components.slice(1,this.components.length-1);}else{vertices=this.components.slice();}
return vertices;},distanceTo:function(geometry,options){var edge=!(options&&options.edge===false);var details=edge&&options&&options.details;var result,best={};var min=Number.POSITIVE_INFINITY;if(geometry instanceof OpenLayers.Geometry.Point){var segs=this.getSortedSegments();var x=geometry.x;var y=geometry.y;var seg;for(var i=0,len=segs.length;i<len;++i){seg=segs[i];result=OpenLayers.Geometry.distanceToSegment(geometry,seg);if(result.distance<min){min=result.distance;best=result;if(min===0){break;}}else{if(seg.x2>x&&((y>seg.y1&&y<seg.y2)||(y<seg.y1&&y>seg.y2))){break;}}}
if(details){best={distance:best.distance,x0:best.x,y0:best.y,x1:x,y1:y};}else{best=best.distance;}}else if(geometry instanceof OpenLayers.Geometry.LineString){var segs0=this.getSortedSegments();var segs1=geometry.getSortedSegments();var seg0,seg1,intersection,x0,y0;var len1=segs1.length;var interOptions={point:true};outer:for(var i=0,len=segs0.length;i<len;++i){seg0=segs0[i];x0=seg0.x1;y0=seg0.y1;for(var j=0;j<len1;++j){seg1=segs1[j];intersection=OpenLayers.Geometry.segmentsIntersect(seg0,seg1,interOptions);if(intersection){min=0;best={distance:0,x0:intersection.x,y0:intersection.y,x1:intersection.x,y1:intersection.y};break outer;}else{result=OpenLayers.Geometry.distanceToSegment({x:x0,y:y0},seg1);if(result.distance<min){min=result.distance;best={distance:min,x0:x0,y0:y0,x1:result.x,y1:result.y};}}}}
if(!details){best=best.distance;}
if(min!==0){if(seg0){result=geometry.distanceTo(new OpenLayers.Geometry.Point(seg0.x2,seg0.y2),options);var dist=details?result.distance:result;if(dist<min){if(details){best={distance:min,x0:result.x1,y0:result.y1,x1:result.x0,y1:result.y0};}else{best=dist;}}}}}else{best=geometry.distanceTo(this,options);if(details){best={distance:best.distance,x0:best.x1,y0:best.y1,x1:best.x0,y1:best.y0};}}
return best;},CLASS_NAME:"OpenLayers.Geometry.LineString"});OpenLayers.Geometry.LinearRing=OpenLayers.Class(OpenLayers.Geometry.LineString,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(points){OpenLayers.Geometry.LineString.prototype.initialize.apply(this,arguments);},addComponent:function(point,index){var added=false;var lastPoint=this.components.pop();if(index!=null||!point.equals(lastPoint)){added=OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,arguments);}
var firstPoint=this.components[0];OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,[firstPoint]);return added;},removeComponent:function(point){if(this.components.length>4){this.components.pop();OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this,arguments);var firstPoint=this.components[0];OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,[firstPoint]);}},move:function(x,y){for(var i=0,len=this.components.length;i<len-1;i++){this.components[i].move(x,y);}},rotate:function(angle,origin){for(var i=0,len=this.components.length;i<len-1;++i){this.components[i].rotate(angle,origin);}},resize:function(scale,origin,ratio){for(var i=0,len=this.components.length;i<len-1;++i){this.components[i].resize(scale,origin,ratio);}
return this;},transform:function(source,dest){if(source&&dest){for(var i=0,len=this.components.length;i<len-1;i++){var component=this.components[i];component.transform(source,dest);}
this.bounds=null;}
return this;},getCentroid:function(){if(this.components&&(this.components.length>2)){var sumX=0.0;var sumY=0.0;for(var i=0;i<this.components.length-1;i++){var b=this.components[i];var c=this.components[i+1];sumX+=(b.x+c.x)*(b.x*c.y-c.x*b.y);sumY+=(b.y+c.y)*(b.x*c.y-c.x*b.y);}
var area=-1*this.getArea();var x=sumX/(6*area);var y=sumY/(6*area);return new OpenLayers.Geometry.Point(x,y);}else{return null;}},getArea:function(){var area=0.0;if(this.components&&(this.components.length>2)){var sum=0.0;for(var i=0,len=this.components.length;i<len-1;i++){var b=this.components[i];var c=this.components[i+1];sum+=(b.x+c.x)*(c.y-b.y);}
area=-sum/2.0;}
return area;},getGeodesicArea:function(projection){var ring=this;if(projection){var gg=new OpenLayers.Projection("EPSG:4326");if(!gg.equals(projection)){ring=this.clone().transform(projection,gg);}}
var area=0.0;var len=ring.components&&ring.components.length;if(len>2){var p1,p2;for(var i=0;i<len-1;i++){p1=ring.components[i];p2=ring.components[i+1];area+=OpenLayers.Util.rad(p2.x-p1.x)*(2+Math.sin(OpenLayers.Util.rad(p1.y))+
Math.sin(OpenLayers.Util.rad(p2.y)));}
area=area*6378137.0*6378137.0/2.0;}
return area;},containsPoint:function(point){var approx=OpenLayers.Number.limitSigDigs;var digs=14;var px=approx(point.x,digs);var py=approx(point.y,digs);function getX(y,x1,y1,x2,y2){return(((x1-x2)*y)+((x2*y1)-(x1*y2)))/(y1-y2);}
var numSeg=this.components.length-1;var start,end,x1,y1,x2,y2,cx,cy;var crosses=0;for(var i=0;i<numSeg;++i){start=this.components[i];x1=approx(start.x,digs);y1=approx(start.y,digs);end=this.components[i+1];x2=approx(end.x,digs);y2=approx(end.y,digs);if(y1==y2){if(py==y1){if(x1<=x2&&(px>=x1&&px<=x2)||x1>=x2&&(px<=x1&&px>=x2)){crosses=-1;break;}}
continue;}
cx=approx(getX(py,x1,y1,x2,y2),digs);if(cx==px){if(y1<y2&&(py>=y1&&py<=y2)||y1>y2&&(py<=y1&&py>=y2)){crosses=-1;break;}}
if(cx<=px){continue;}
if(x1!=x2&&(cx<Math.min(x1,x2)||cx>Math.max(x1,x2))){continue;}
if(y1<y2&&(py>=y1&&py<y2)||y1>y2&&(py<y1&&py>=y2)){++crosses;}}
var contained=(crosses==-1)?1:!!(crosses&1);return contained;},intersects:function(geometry){var intersect=false;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){intersect=this.containsPoint(geometry);}else if(geometry.CLASS_NAME=="OpenLayers.Geometry.LineString"){intersect=geometry.intersects(this);}else if(geometry.CLASS_NAME=="OpenLayers.Geometry.LinearRing"){intersect=OpenLayers.Geometry.LineString.prototype.intersects.apply(this,[geometry]);}else{for(var i=0,len=geometry.components.length;i<len;++i){intersect=geometry.components[i].intersects(this);if(intersect){break;}}}
return intersect;},getVertices:function(nodes){return(nodes===true)?[]:this.components.slice(0,this.components.length-1);},CLASS_NAME:"OpenLayers.Geometry.LinearRing"});OpenLayers.Geometry.MultiLineString=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LineString"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},split:function(geometry,options){var results=null;var mutual=options&&options.mutual;var splits,sourceLine,sourceLines,sourceSplit,targetSplit;var sourceParts=[];var targetParts=[geometry];for(var i=0,len=this.components.length;i<len;++i){sourceLine=this.components[i];sourceSplit=false;for(var j=0;j<targetParts.length;++j){splits=sourceLine.split(targetParts[j],options);if(splits){if(mutual){sourceLines=splits[0];for(var k=0,klen=sourceLines.length;k<klen;++k){if(k===0&&sourceParts.length){sourceParts[sourceParts.length-1].addComponent(sourceLines[k]);}else{sourceParts.push(new OpenLayers.Geometry.MultiLineString([sourceLines[k]]));}}
sourceSplit=true;splits=splits[1];}
if(splits.length){splits.unshift(j,1);Array.prototype.splice.apply(targetParts,splits);break;}}}
if(!sourceSplit){if(sourceParts.length){sourceParts[sourceParts.length-1].addComponent(sourceLine.clone());}else{sourceParts=[new OpenLayers.Geometry.MultiLineString(sourceLine.clone())];}}}
if(sourceParts&&sourceParts.length>1){sourceSplit=true;}else{sourceParts=[];}
if(targetParts&&targetParts.length>1){targetSplit=true;}else{targetParts=[];}
if(sourceSplit||targetSplit){if(mutual){results=[sourceParts,targetParts];}else{results=targetParts;}}
return results;},splitWith:function(geometry,options){var results=null;var mutual=options&&options.mutual;var splits,targetLine,sourceLines,sourceSplit,targetSplit,sourceParts,targetParts;if(geometry instanceof OpenLayers.Geometry.LineString){targetParts=[];sourceParts=[geometry];for(var i=0,len=this.components.length;i<len;++i){targetSplit=false;targetLine=this.components[i];for(var j=0;j<sourceParts.length;++j){splits=sourceParts[j].split(targetLine,options);if(splits){if(mutual){sourceLines=splits[0];if(sourceLines.length){sourceLines.unshift(j,1);Array.prototype.splice.apply(sourceParts,sourceLines);j+=sourceLines.length-2;}
splits=splits[1];if(splits.length===0){splits=[targetLine.clone()];}}
for(var k=0,klen=splits.length;k<klen;++k){if(k===0&&targetParts.length){targetParts[targetParts.length-1].addComponent(splits[k]);}else{targetParts.push(new OpenLayers.Geometry.MultiLineString([splits[k]]));}}
targetSplit=true;}}
if(!targetSplit){if(targetParts.length){targetParts[targetParts.length-1].addComponent(targetLine.clone());}else{targetParts=[new OpenLayers.Geometry.MultiLineString([targetLine.clone()])];}}}}else{results=geometry.split(this);}
if(sourceParts&&sourceParts.length>1){sourceSplit=true;}else{sourceParts=[];}
if(targetParts&&targetParts.length>1){targetSplit=true;}else{targetParts=[];}
if(sourceSplit||targetSplit){if(mutual){results=[sourceParts,targetParts];}else{results=targetParts;}}
return results;},CLASS_NAME:"OpenLayers.Geometry.MultiLineString"});OpenLayers.Geometry.Polygon=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LinearRing"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},getArea:function(){var area=0.0;if(this.components&&(this.components.length>0)){area+=Math.abs(this.components[0].getArea());for(var i=1,len=this.components.length;i<len;i++){area-=Math.abs(this.components[i].getArea());}}
return area;},getGeodesicArea:function(projection){var area=0.0;if(this.components&&(this.components.length>0)){area+=Math.abs(this.components[0].getGeodesicArea(projection));for(var i=1,len=this.components.length;i<len;i++){area-=Math.abs(this.components[i].getGeodesicArea(projection));}}
return area;},containsPoint:function(point){var numRings=this.components.length;var contained=false;if(numRings>0){contained=this.components[0].containsPoint(point);if(contained!==1){if(contained&&numRings>1){var hole;for(var i=1;i<numRings;++i){hole=this.components[i].containsPoint(point);if(hole){if(hole===1){contained=1;}else{contained=false;}
break;}}}}}
return contained;},intersects:function(geometry){var intersect=false;var i,len;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){intersect=this.containsPoint(geometry);}else if(geometry.CLASS_NAME=="OpenLayers.Geometry.LineString"||geometry.CLASS_NAME=="OpenLayers.Geometry.LinearRing"){for(i=0,len=this.components.length;i<len;++i){intersect=geometry.intersects(this.components[i]);if(intersect){break;}}
if(!intersect){for(i=0,len=geometry.components.length;i<len;++i){intersect=this.containsPoint(geometry.components[i]);if(intersect){break;}}}}else{for(i=0,len=geometry.components.length;i<len;++i){intersect=this.intersects(geometry.components[i]);if(intersect){break;}}}
if(!intersect&&geometry.CLASS_NAME=="OpenLayers.Geometry.Polygon"){var ring=this.components[0];for(i=0,len=ring.components.length;i<len;++i){intersect=geometry.containsPoint(ring.components[i]);if(intersect){break;}}}
return intersect;},distanceTo:function(geometry,options){var edge=!(options&&options.edge===false);var result;if(!edge&&this.intersects(geometry)){result=0;}else{result=OpenLayers.Geometry.Collection.prototype.distanceTo.apply(this,[geometry,options]);}
return result;},CLASS_NAME:"OpenLayers.Geometry.Polygon"});OpenLayers.Geometry.Polygon.createRegularPolygon=function(origin,radius,sides,rotation){var angle=Math.PI*((1/sides)-(1/2));if(rotation){angle+=(rotation/180)*Math.PI;}
var rotatedAngle,x,y;var points=[];for(var i=0;i<sides;++i){rotatedAngle=angle+(i*2*Math.PI/sides);x=origin.x+(radius*Math.cos(rotatedAngle));y=origin.y+(radius*Math.sin(rotatedAngle));points.push(new OpenLayers.Geometry.Point(x,y));}
var ring=new OpenLayers.Geometry.LinearRing(points);return new OpenLayers.Geometry.Polygon([ring]);};OpenLayers.Format.KML=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{kml:"http://www.opengis.net/kml/2.2",gx:"http://www.google.com/kml/ext/2.2"},kmlns:"http://earth.google.com/kml/2.0",placemarksDesc:"No description available",foldersName:"OpenLayers export",foldersDesc:"Exported on "+new Date(),extractAttributes:true,extractStyles:false,extractTracks:false,trackAttributes:null,internalns:null,features:null,styles:null,styleBaseUrl:"",fetched:null,maxDepth:0,initialize:function(options){this.regExes={trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g),kmlColor:(/(\w{2})(\w{2})(\w{2})(\w{2})/),kmlIconPalette:(/root:\/\/icons\/palette-(\d+)(\.\w+)/),straightBracket:(/\$\[(.*?)\]/g)};this.externalProjection=new OpenLayers.Projection("EPSG:4326");OpenLayers.Format.XML.prototype.initialize.apply(this,[options]);},read:function(data){this.features=[];this.styles={};this.fetched={};var options={depth:0,styleBaseUrl:this.styleBaseUrl};return this.parseData(data,options);},parseData:function(data,options){if(typeof data=="string"){data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);}
var types=["Link","NetworkLink","Style","StyleMap","Placemark"];for(var i=0,len=types.length;i<len;++i){var type=types[i];var nodes=this.getElementsByTagNameNS(data,"*",type);if(nodes.length==0){continue;}
switch(type.toLowerCase()){case"link":case"networklink":this.parseLinks(nodes,options);break;case"style":if(this.extractStyles){this.parseStyles(nodes,options);}
break;case"stylemap":if(this.extractStyles){this.parseStyleMaps(nodes,options);}
break;case"placemark":this.parseFeatures(nodes,options);break;}}
return this.features;},parseLinks:function(nodes,options){if(options.depth>=this.maxDepth){return false;}
var newOptions=OpenLayers.Util.extend({},options);newOptions.depth++;for(var i=0,len=nodes.length;i<len;i++){var href=this.parseProperty(nodes[i],"*","href");if(href&&!this.fetched[href]){this.fetched[href]=true;var data=this.fetchLink(href);if(data){this.parseData(data,newOptions);}}}},fetchLink:function(href){var request=OpenLayers.Request.GET({url:href,async:false});if(request){return request.responseText;}},parseStyles:function(nodes,options){for(var i=0,len=nodes.length;i<len;i++){var style=this.parseStyle(nodes[i]);if(style){var styleName=(options.styleBaseUrl||"")+"#"+style.id;this.styles[styleName]=style;}}},parseKmlColor:function(kmlColor){var color=null;if(kmlColor){var matches=kmlColor.match(this.regExes.kmlColor);if(matches){color={color:'#'+matches[4]+matches[3]+matches[2],opacity:parseInt(matches[1],16)/255};}}
return color;},parseStyle:function(node){var style={};var types=["LineStyle","PolyStyle","IconStyle","BalloonStyle","LabelStyle"];var type,nodeList,geometry,parser;for(var i=0,len=types.length;i<len;++i){type=types[i];styleTypeNode=this.getElementsByTagNameNS(node,"*",type)[0];if(!styleTypeNode){continue;}
switch(type.toLowerCase()){case"linestyle":var kmlColor=this.parseProperty(styleTypeNode,"*","color");var color=this.parseKmlColor(kmlColor);if(color){style["strokeColor"]=color.color;style["strokeOpacity"]=color.opacity;}
var width=this.parseProperty(styleTypeNode,"*","width");if(width){style["strokeWidth"]=width;}
break;case"polystyle":var kmlColor=this.parseProperty(styleTypeNode,"*","color");var color=this.parseKmlColor(kmlColor);if(color){style["fillOpacity"]=color.opacity;style["fillColor"]=color.color;}
var fill=this.parseProperty(styleTypeNode,"*","fill");if(fill=="0"){style["fillColor"]="none";}
var outline=this.parseProperty(styleTypeNode,"*","outline");if(outline=="0"){style["strokeWidth"]="0";}
break;case"iconstyle":var scale=parseFloat(this.parseProperty(styleTypeNode,"*","scale")||1);var width=32*scale;var height=32*scale;var iconNode=this.getElementsByTagNameNS(styleTypeNode,"*","Icon")[0];if(iconNode){var href=this.parseProperty(iconNode,"*","href");if(href){var w=this.parseProperty(iconNode,"*","w");var h=this.parseProperty(iconNode,"*","h");var google="http://maps.google.com/mapfiles/kml";if(OpenLayers.String.startsWith(href,google)&&!w&&!h){w=64;h=64;scale=scale/2;}
w=w||h;h=h||w;if(w){width=parseInt(w)*scale;}
if(h){height=parseInt(h)*scale;}
var matches=href.match(this.regExes.kmlIconPalette);if(matches){var palette=matches[1];var file_extension=matches[2];var x=this.parseProperty(iconNode,"*","x");var y=this.parseProperty(iconNode,"*","y");var posX=x?x/32:0;var posY=y?(7-y/32):7;var pos=posY*8+posX;href="http://maps.google.com/mapfiles/kml/pal"
+palette+"/icon"+pos+file_extension;}
style["graphicOpacity"]=1;style["externalGraphic"]=href;}}
var hotSpotNode=this.getElementsByTagNameNS(styleTypeNode,"*","hotSpot")[0];if(hotSpotNode){var x=parseFloat(hotSpotNode.getAttribute("x"));var y=parseFloat(hotSpotNode.getAttribute("y"));var xUnits=hotSpotNode.getAttribute("xunits");if(xUnits=="pixels"){style["graphicXOffset"]=-x*scale;}
else if(xUnits=="insetPixels"){style["graphicXOffset"]=-width+(x*scale);}
else if(xUnits=="fraction"){style["graphicXOffset"]=-width*x;}
var yUnits=hotSpotNode.getAttribute("yunits");if(yUnits=="pixels"){style["graphicYOffset"]=-height+(y*scale)+1;}
else if(yUnits=="insetPixels"){style["graphicYOffset"]=-(y*scale)+1;}
else if(yUnits=="fraction"){style["graphicYOffset"]=-height*(1-y)+1;}}
style["graphicWidth"]=width;style["graphicHeight"]=height;break;case"balloonstyle":var balloonStyle=OpenLayers.Util.getXmlNodeValue(styleTypeNode);if(balloonStyle){style["balloonStyle"]=balloonStyle.replace(this.regExes.straightBracket,"${$1}");}
break;case"labelstyle":var kmlColor=this.parseProperty(styleTypeNode,"*","color");var color=this.parseKmlColor(kmlColor);if(color){style["fontColor"]=color.color;style["fontOpacity"]=color.opacity;}
break;default:}}
if(!style["strokeColor"]&&style["fillColor"]){style["strokeColor"]=style["fillColor"];}
var id=node.getAttribute("id");if(id&&style){style.id=id;}
return style;},parseStyleMaps:function(nodes,options){for(var i=0,len=nodes.length;i<len;i++){var node=nodes[i];var pairs=this.getElementsByTagNameNS(node,"*","Pair");var id=node.getAttribute("id");for(var j=0,jlen=pairs.length;j<jlen;j++){var pair=pairs[j];var key=this.parseProperty(pair,"*","key");var styleUrl=this.parseProperty(pair,"*","styleUrl");if(styleUrl&&key=="normal"){this.styles[(options.styleBaseUrl||"")+"#"+id]=this.styles[(options.styleBaseUrl||"")+styleUrl];}
if(styleUrl&&key=="highlight"){}}}},parseFeatures:function(nodes,options){var features=[];for(var i=0,len=nodes.length;i<len;i++){var featureNode=nodes[i];var feature=this.parseFeature.apply(this,[featureNode]);if(feature){if(this.extractStyles&&feature.attributes&&feature.attributes.styleUrl){feature.style=this.getStyle(feature.attributes.styleUrl,options);}
if(this.extractStyles){var inlineStyleNode=this.getElementsByTagNameNS(featureNode,"*","Style")[0];if(inlineStyleNode){var inlineStyle=this.parseStyle(inlineStyleNode);if(inlineStyle){feature.style=OpenLayers.Util.extend(feature.style,inlineStyle);}}}
if(this.extractTracks){var tracks=this.getElementsByTagNameNS(featureNode,this.namespaces.gx,"Track");if(tracks&&tracks.length>0){var track=tracks[0];var container={features:[],feature:feature};this.readNode(track,container);if(container.features.length>0){features.push.apply(features,container.features);}}}else{features.push(feature);}}else{throw"Bad Placemark: "+i;}}
this.features=this.features.concat(features);},readers:{"kml":{"when":function(node,container){container.whens.push(OpenLayers.Date.parse(this.getChildValue(node)));},"_trackPointAttribute":function(node,container){var name=node.nodeName.split(":").pop();container.attributes[name].push(this.getChildValue(node));}},"gx":{"Track":function(node,container){var obj={whens:[],points:[],angles:[]};if(this.trackAttributes){var name;obj.attributes={};for(var i=0,ii=this.trackAttributes.length;i<ii;++i){name=this.trackAttributes[i];obj.attributes[name]=[];if(!(name in this.readers.kml)){this.readers.kml[name]=this.readers.kml._trackPointAttribute;}}}
this.readChildNodes(node,obj);if(obj.whens.length!==obj.points.length){throw new Error("gx:Track with unequal number of when ("+obj.whens.length+") and gx:coord ("+obj.points.length+") elements.");}
var hasAngles=obj.angles.length>0;if(hasAngles&&obj.whens.length!==obj.angles.length){throw new Error("gx:Track with unequal number of when ("+obj.whens.length+") and gx:angles ("+obj.angles.length+") elements.");}
var feature,point,angles;for(var i=0,ii=obj.whens.length;i<ii;++i){feature=container.feature.clone();feature.fid=container.feature.fid||container.feature.id;point=obj.points[i];feature.geometry=point;if("z"in point){feature.attributes.altitude=point.z;}
if(this.internalProjection&&this.externalProjection){feature.geometry.transform(this.externalProjection,this.internalProjection);}
if(this.trackAttributes){for(var j=0,jj=this.trackAttributes.length;j<jj;++j){feature.attributes[name]=obj.attributes[this.trackAttributes[j]][i];}}
feature.attributes.when=obj.whens[i];feature.attributes.trackId=container.feature.id;if(hasAngles){angles=obj.angles[i];feature.attributes.heading=parseFloat(angles[0]);feature.attributes.tilt=parseFloat(angles[1]);feature.attributes.roll=parseFloat(angles[2]);}
container.features.push(feature);}},"coord":function(node,container){var str=this.getChildValue(node);var coords=str.replace(this.regExes.trimSpace,"").split(/\s+/);var point=new OpenLayers.Geometry.Point(coords[0],coords[1]);if(coords.length>2){point.z=parseFloat(coords[2]);}
container.points.push(point);},"angles":function(node,container){var str=this.getChildValue(node);var parts=str.replace(this.regExes.trimSpace,"").split(/\s+/);container.angles.push(parts);}}},parseFeature:function(node){var order=["MultiGeometry","Polygon","LineString","Point"];var type,nodeList,geometry,parser;for(var i=0,len=order.length;i<len;++i){type=order[i];this.internalns=node.namespaceURI?node.namespaceURI:this.kmlns;nodeList=this.getElementsByTagNameNS(node,this.internalns,type);if(nodeList.length>0){var parser=this.parseGeometry[type.toLowerCase()];if(parser){geometry=parser.apply(this,[nodeList[0]]);if(this.internalProjection&&this.externalProjection){geometry.transform(this.externalProjection,this.internalProjection);}}else{OpenLayers.Console.error(OpenLayers.i18n("unsupportedGeometryType",{'geomType':type}));}
break;}}
var attributes;if(this.extractAttributes){attributes=this.parseAttributes(node);}
var feature=new OpenLayers.Feature.Vector(geometry,attributes);var fid=node.getAttribute("id")||node.getAttribute("name");if(fid!=null){feature.fid=fid;}
return feature;},getStyle:function(styleUrl,options){var styleBaseUrl=OpenLayers.Util.removeTail(styleUrl);var newOptions=OpenLayers.Util.extend({},options);newOptions.depth++;newOptions.styleBaseUrl=styleBaseUrl;if(!this.styles[styleUrl]&&!OpenLayers.String.startsWith(styleUrl,"#")&&newOptions.depth<=this.maxDepth&&!this.fetched[styleBaseUrl]){var data=this.fetchLink(styleBaseUrl);if(data){this.parseData(data,newOptions);}}
var style=OpenLayers.Util.extend({},this.styles[styleUrl]);return style;},parseGeometry:{point:function(node){var nodeList=this.getElementsByTagNameNS(node,this.internalns,"coordinates");var coords=[];if(nodeList.length>0){var coordString=nodeList[0].firstChild.nodeValue;coordString=coordString.replace(this.regExes.removeSpace,"");coords=coordString.split(",");}
var point=null;if(coords.length>1){if(coords.length==2){coords[2]=null;}
point=new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}else{throw"Bad coordinate string: "+coordString;}
return point;},linestring:function(node,ring){var nodeList=this.getElementsByTagNameNS(node,this.internalns,"coordinates");var line=null;if(nodeList.length>0){var coordString=this.getChildValue(nodeList[0]);coordString=coordString.replace(this.regExes.trimSpace,"");coordString=coordString.replace(this.regExes.trimComma,",");var pointList=coordString.split(this.regExes.splitSpace);var numPoints=pointList.length;var points=new Array(numPoints);var coords,numCoords;for(var i=0;i<numPoints;++i){coords=pointList[i].split(",");numCoords=coords.length;if(numCoords>1){if(coords.length==2){coords[2]=null;}
points[i]=new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}else{throw"Bad LineString point coordinates: "+
pointList[i];}}
if(numPoints){if(ring){line=new OpenLayers.Geometry.LinearRing(points);}else{line=new OpenLayers.Geometry.LineString(points);}}else{throw"Bad LineString coordinates: "+coordString;}}
return line;},polygon:function(node){var nodeList=this.getElementsByTagNameNS(node,this.internalns,"LinearRing");var numRings=nodeList.length;var components=new Array(numRings);if(numRings>0){var ring;for(var i=0,len=nodeList.length;i<len;++i){ring=this.parseGeometry.linestring.apply(this,[nodeList[i],true]);if(ring){components[i]=ring;}else{throw"Bad LinearRing geometry: "+i;}}}
return new OpenLayers.Geometry.Polygon(components);},multigeometry:function(node){var child,parser;var parts=[];var children=node.childNodes;for(var i=0,len=children.length;i<len;++i){child=children[i];if(child.nodeType==1){var type=(child.prefix)?child.nodeName.split(":")[1]:child.nodeName;var parser=this.parseGeometry[type.toLowerCase()];if(parser){parts.push(parser.apply(this,[child]));}}}
return new OpenLayers.Geometry.Collection(parts);}},parseAttributes:function(node){var attributes={};var edNodes=node.getElementsByTagName("ExtendedData");if(edNodes.length){attributes=this.parseExtendedData(edNodes[0]);}
var child,grandchildren,grandchild;var children=node.childNodes;for(var i=0,len=children.length;i<len;++i){child=children[i];if(child.nodeType==1){grandchildren=child.childNodes;if(grandchildren.length>=1&&grandchildren.length<=3){var grandchild;switch(grandchildren.length){case 1:grandchild=grandchildren[0];break;case 2:var c1=grandchildren[0];var c2=grandchildren[1];grandchild=(c1.nodeType==3||c1.nodeType==4)?c1:c2;break;case 3:default:grandchild=grandchildren[1];break;}
if(grandchild.nodeType==3||grandchild.nodeType==4){var name=(child.prefix)?child.nodeName.split(":")[1]:child.nodeName;var value=OpenLayers.Util.getXmlNodeValue(grandchild);if(value){value=value.replace(this.regExes.trimSpace,"");attributes[name]=value;}}}}}
return attributes;},parseExtendedData:function(node){var attributes={};var i,len,data,key;var dataNodes=node.getElementsByTagName("Data");for(i=0,len=dataNodes.length;i<len;i++){data=dataNodes[i];key=data.getAttribute("name");var ed={};var valueNode=data.getElementsByTagName("value");if(valueNode.length){ed['value']=this.getChildValue(valueNode[0]);}
var nameNode=data.getElementsByTagName("displayName");if(nameNode.length){ed['displayName']=this.getChildValue(nameNode[0]);}
attributes[key]=ed;}
var simpleDataNodes=node.getElementsByTagName("SimpleData");for(i=0,len=simpleDataNodes.length;i<len;i++){var ed={};data=simpleDataNodes[i];key=data.getAttribute("name");ed['value']=this.getChildValue(data);ed['displayName']=key;attributes[key]=ed;}
return attributes;},parseProperty:function(xmlNode,namespace,tagName){var value;var nodeList=this.getElementsByTagNameNS(xmlNode,namespace,tagName);try{value=OpenLayers.Util.getXmlNodeValue(nodeList[0]);}catch(e){value=null;}
return value;},write:function(features){if(!(features instanceof Array)){features=[features];}
var kml=this.createElementNS(this.kmlns,"kml");var folder=this.createFolderXML();for(var i=0,len=features.length;i<len;++i){folder.appendChild(this.createPlacemarkXML(features[i]));}
kml.appendChild(folder);return OpenLayers.Format.XML.prototype.write.apply(this,[kml]);},createFolderXML:function(){var folder=this.createElementNS(this.kmlns,"Folder");if(this.foldersName){var folderName=this.createElementNS(this.kmlns,"name");var folderNameText=this.createTextNode(this.foldersName);folderName.appendChild(folderNameText);folder.appendChild(folderName);}
if(this.foldersDesc){var folderDesc=this.createElementNS(this.kmlns,"description");var folderDescText=this.createTextNode(this.foldersDesc);folderDesc.appendChild(folderDescText);folder.appendChild(folderDesc);}
return folder;},createPlacemarkXML:function(feature){var placemarkName=this.createElementNS(this.kmlns,"name");var name=feature.style&&feature.style.label?feature.style.label:feature.attributes.name||feature.id;placemarkName.appendChild(this.createTextNode(name));var placemarkDesc=this.createElementNS(this.kmlns,"description");var desc=feature.attributes.description||this.placemarksDesc;placemarkDesc.appendChild(this.createTextNode(desc));var placemarkNode=this.createElementNS(this.kmlns,"Placemark");if(feature.fid!=null){placemarkNode.setAttribute("id",feature.fid);}
placemarkNode.appendChild(placemarkName);placemarkNode.appendChild(placemarkDesc);var geometryNode=this.buildGeometryNode(feature.geometry);placemarkNode.appendChild(geometryNode);return placemarkNode;},buildGeometryNode:function(geometry){if(this.internalProjection&&this.externalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
var className=geometry.CLASS_NAME;var type=className.substring(className.lastIndexOf(".")+1);var builder=this.buildGeometry[type.toLowerCase()];var node=null;if(builder){node=builder.apply(this,[geometry]);}
return node;},buildGeometry:{point:function(geometry){var kml=this.createElementNS(this.kmlns,"Point");kml.appendChild(this.buildCoordinatesNode(geometry));return kml;},multipoint:function(geometry){return this.buildGeometry.collection.apply(this,[geometry]);},linestring:function(geometry){var kml=this.createElementNS(this.kmlns,"LineString");kml.appendChild(this.buildCoordinatesNode(geometry));return kml;},multilinestring:function(geometry){return this.buildGeometry.collection.apply(this,[geometry]);},linearring:function(geometry){var kml=this.createElementNS(this.kmlns,"LinearRing");kml.appendChild(this.buildCoordinatesNode(geometry));return kml;},polygon:function(geometry){var kml=this.createElementNS(this.kmlns,"Polygon");var rings=geometry.components;var ringMember,ringGeom,type;for(var i=0,len=rings.length;i<len;++i){type=(i==0)?"outerBoundaryIs":"innerBoundaryIs";ringMember=this.createElementNS(this.kmlns,type);ringGeom=this.buildGeometry.linearring.apply(this,[rings[i]]);ringMember.appendChild(ringGeom);kml.appendChild(ringMember);}
return kml;},multipolygon:function(geometry){return this.buildGeometry.collection.apply(this,[geometry]);},collection:function(geometry){var kml=this.createElementNS(this.kmlns,"MultiGeometry");var child;for(var i=0,len=geometry.components.length;i<len;++i){child=this.buildGeometryNode.apply(this,[geometry.components[i]]);if(child){kml.appendChild(child);}}
return kml;}},buildCoordinatesNode:function(geometry){var coordinatesNode=this.createElementNS(this.kmlns,"coordinates");var path;var points=geometry.components;if(points){var point;var numPoints=points.length;var parts=new Array(numPoints);for(var i=0;i<numPoints;++i){point=points[i];parts[i]=point.x+","+point.y;}
path=parts.join(" ");}else{path=geometry.x+","+geometry.y;}
var txtNode=this.createTextNode(path);coordinatesNode.appendChild(txtNode);return coordinatesNode;},CLASS_NAME:"OpenLayers.Format.KML"});OpenLayers.Geometry.MultiPolygon=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.Polygon"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Geometry.MultiPolygon"});OpenLayers.Format.GeoJSON=OpenLayers.Class(OpenLayers.Format.JSON,{ignoreExtraDims:false,initialize:function(options){OpenLayers.Format.JSON.prototype.initialize.apply(this,[options]);},read:function(json,type,filter){type=(type)?type:"FeatureCollection";var results=null;var obj=null;if(typeof json=="string"){obj=OpenLayers.Format.JSON.prototype.read.apply(this,[json,filter]);}else{obj=json;}
if(!obj){OpenLayers.Console.error("Bad JSON: "+json);}else if(typeof(obj.type)!="string"){OpenLayers.Console.error("Bad GeoJSON - no type: "+json);}else if(this.isValidType(obj,type)){switch(type){case"Geometry":try{results=this.parseGeometry(obj);}catch(err){OpenLayers.Console.error(err);}
break;case"Feature":try{results=this.parseFeature(obj);results.type="Feature";}catch(err){OpenLayers.Console.error(err);}
break;case"FeatureCollection":results=[];switch(obj.type){case"Feature":try{results.push(this.parseFeature(obj));}catch(err){results=null;OpenLayers.Console.error(err);}
break;case"FeatureCollection":for(var i=0,len=obj.features.length;i<len;++i){try{results.push(this.parseFeature(obj.features[i]));}catch(err){results=null;OpenLayers.Console.error(err);}}
break;default:try{var geom=this.parseGeometry(obj);results.push(new OpenLayers.Feature.Vector(geom));}catch(err){results=null;OpenLayers.Console.error(err);}}
break;}}
return results;},isValidType:function(obj,type){var valid=false;switch(type){case"Geometry":if(OpenLayers.Util.indexOf(["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","Box","GeometryCollection"],obj.type)==-1){OpenLayers.Console.error("Unsupported geometry type: "+
obj.type);}else{valid=true;}
break;case"FeatureCollection":valid=true;break;default:if(obj.type==type){valid=true;}else{OpenLayers.Console.error("Cannot convert types from "+
obj.type+" to "+type);}}
return valid;},parseFeature:function(obj){var feature,geometry,attributes,bbox;attributes=(obj.properties)?obj.properties:{};bbox=(obj.geometry&&obj.geometry.bbox)||obj.bbox;try{geometry=this.parseGeometry(obj.geometry);}catch(err){throw err;}
feature=new OpenLayers.Feature.Vector(geometry,attributes);if(bbox){feature.bounds=OpenLayers.Bounds.fromArray(bbox);}
if(obj.id){feature.fid=obj.id;}
return feature;},parseGeometry:function(obj){if(obj==null){return null;}
var geometry,collection=false;if(obj.type=="GeometryCollection"){if(!(obj.geometries instanceof Array)){throw"GeometryCollection must have geometries array: "+obj;}
var numGeom=obj.geometries.length;var components=new Array(numGeom);for(var i=0;i<numGeom;++i){components[i]=this.parseGeometry.apply(this,[obj.geometries[i]]);}
geometry=new OpenLayers.Geometry.Collection(components);collection=true;}else{if(!(obj.coordinates instanceof Array)){throw"Geometry must have coordinates array: "+obj;}
if(!this.parseCoords[obj.type.toLowerCase()]){throw"Unsupported geometry type: "+obj.type;}
try{geometry=this.parseCoords[obj.type.toLowerCase()].apply(this,[obj.coordinates]);}catch(err){throw err;}}
if(this.internalProjection&&this.externalProjection&&!collection){geometry.transform(this.externalProjection,this.internalProjection);}
return geometry;},parseCoords:{"point":function(array){if(this.ignoreExtraDims==false&&array.length!=2){throw"Only 2D points are supported: "+array;}
return new OpenLayers.Geometry.Point(array[0],array[1]);},"multipoint":function(array){var points=[];var p=null;for(var i=0,len=array.length;i<len;++i){try{p=this.parseCoords["point"].apply(this,[array[i]]);}catch(err){throw err;}
points.push(p);}
return new OpenLayers.Geometry.MultiPoint(points);},"linestring":function(array){var points=[];var p=null;for(var i=0,len=array.length;i<len;++i){try{p=this.parseCoords["point"].apply(this,[array[i]]);}catch(err){throw err;}
points.push(p);}
return new OpenLayers.Geometry.LineString(points);},"multilinestring":function(array){var lines=[];var l=null;for(var i=0,len=array.length;i<len;++i){try{l=this.parseCoords["linestring"].apply(this,[array[i]]);}catch(err){throw err;}
lines.push(l);}
return new OpenLayers.Geometry.MultiLineString(lines);},"polygon":function(array){var rings=[];var r,l;for(var i=0,len=array.length;i<len;++i){try{l=this.parseCoords["linestring"].apply(this,[array[i]]);}catch(err){throw err;}
r=new OpenLayers.Geometry.LinearRing(l.components);rings.push(r);}
return new OpenLayers.Geometry.Polygon(rings);},"multipolygon":function(array){var polys=[];var p=null;for(var i=0,len=array.length;i<len;++i){try{p=this.parseCoords["polygon"].apply(this,[array[i]]);}catch(err){throw err;}
polys.push(p);}
return new OpenLayers.Geometry.MultiPolygon(polys);},"box":function(array){if(array.length!=2){throw"GeoJSON box coordinates must have 2 elements";}
return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(array[0][0],array[0][1]),new OpenLayers.Geometry.Point(array[1][0],array[0][1]),new OpenLayers.Geometry.Point(array[1][0],array[1][1]),new OpenLayers.Geometry.Point(array[0][0],array[1][1]),new OpenLayers.Geometry.Point(array[0][0],array[0][1])])]);}},write:function(obj,pretty){var geojson={"type":null};if(obj instanceof Array){geojson.type="FeatureCollection";var numFeatures=obj.length;geojson.features=new Array(numFeatures);for(var i=0;i<numFeatures;++i){var element=obj[i];if(!element instanceof OpenLayers.Feature.Vector){var msg="FeatureCollection only supports collections "+"of features: "+element;throw msg;}
geojson.features[i]=this.extract.feature.apply(this,[element]);}}else if(obj.CLASS_NAME.indexOf("OpenLayers.Geometry")==0){geojson=this.extract.geometry.apply(this,[obj]);}else if(obj instanceof OpenLayers.Feature.Vector){geojson=this.extract.feature.apply(this,[obj]);if(obj.layer&&obj.layer.projection){geojson.crs=this.createCRSObject(obj);}}
return OpenLayers.Format.JSON.prototype.write.apply(this,[geojson,pretty]);},createCRSObject:function(object){var proj=object.layer.projection.toString();var crs={};if(proj.match(/epsg:/i)){var code=parseInt(proj.substring(proj.indexOf(":")+1));if(code==4326){crs={"type":"OGC","properties":{"urn":"urn:ogc:def:crs:OGC:1.3:CRS84"}};}else{crs={"type":"EPSG","properties":{"code":code}};}}
return crs;},extract:{'feature':function(feature){var geom=this.extract.geometry.apply(this,[feature.geometry]);return{"type":"Feature","id":feature.fid==null?feature.id:feature.fid,"properties":feature.attributes,"geometry":geom};},'geometry':function(geometry){if(geometry==null){return null;}
if(this.internalProjection&&this.externalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
var geometryType=geometry.CLASS_NAME.split('.')[2];var data=this.extract[geometryType.toLowerCase()].apply(this,[geometry]);var json;if(geometryType=="Collection"){json={"type":"GeometryCollection","geometries":data};}else{json={"type":geometryType,"coordinates":data};}
return json;},'point':function(point){return[point.x,point.y];},'multipoint':function(multipoint){var array=[];for(var i=0,len=multipoint.components.length;i<len;++i){array.push(this.extract.point.apply(this,[multipoint.components[i]]));}
return array;},'linestring':function(linestring){var array=[];for(var i=0,len=linestring.components.length;i<len;++i){array.push(this.extract.point.apply(this,[linestring.components[i]]));}
return array;},'multilinestring':function(multilinestring){var array=[];for(var i=0,len=multilinestring.components.length;i<len;++i){array.push(this.extract.linestring.apply(this,[multilinestring.components[i]]));}
return array;},'polygon':function(polygon){var array=[];for(var i=0,len=polygon.components.length;i<len;++i){array.push(this.extract.linestring.apply(this,[polygon.components[i]]));}
return array;},'multipolygon':function(multipolygon){var array=[];for(var i=0,len=multipolygon.components.length;i<len;++i){array.push(this.extract.polygon.apply(this,[multipolygon.components[i]]));}
return array;},'collection':function(collection){var len=collection.components.length;var array=new Array(len);for(var i=0;i<len;++i){array[i]=this.extract.geometry.apply(this,[collection.components[i]]);}
return array;}},CLASS_NAME:"OpenLayers.Format.GeoJSON"});/*
 * jQuery JSONP Core Plugin 2.1.4 (2010-11-17)
 * 
 * http://code.google.com/p/jquery-jsonp/
 *
 * Copyright (c) 2010 Julian Aubourg
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
( function( $ , setTimeout ) {
	
	// ###################### UTILITIES ##
	
	// Noop
	function noop() {
	}
	
	// Generic callback
	function genericCallback( data ) {
		lastValue = [ data ];
	}

	// Add script to document
	function appendScript( node ) {
		head.insertBefore( node , head.firstChild );
	}
	
	// Call if defined
	function callIfDefined( method , object , parameters ) {
		return method && method.apply( object.context || object , parameters );
	}
	
	// Give joining character given url
	function qMarkOrAmp( url ) {
		return /\?/ .test( url ) ? "&" : "?";
	}
	
	var // String constants (for better minification)
		STR_ASYNC = "async",
		STR_CHARSET = "charset",
		STR_EMPTY = "",
		STR_ERROR = "error",
		STR_JQUERY_JSONP = "_jqjsp",
		STR_ON = "on",
		STR_ONCLICK = STR_ON + "click",
		STR_ONERROR = STR_ON + STR_ERROR,
		STR_ONLOAD = STR_ON + "load",
		STR_ONREADYSTATECHANGE = STR_ON + "readystatechange",
		STR_REMOVE_CHILD = "removeChild",
		STR_SCRIPT_TAG = "<script/>",
		STR_SUCCESS = "success",
		STR_TIMEOUT = "timeout",
		
		// Shortcut to jQuery.browser
		browser = $.browser,
		
		// Head element (for faster use)
		head = $( "head" )[ 0 ] || document.documentElement,
		// Page cache
		pageCache = {},
		// Counter
		count = 0,
		// Last returned value
		lastValue,
		
		// ###################### DEFAULT OPTIONS ##
		xOptionsDefaults = {
			//beforeSend: undefined,
			//cache: false,
			callback: STR_JQUERY_JSONP,
			//callbackParameter: undefined,
			//charset: undefined,
			//complete: undefined,
			//context: undefined,
			//data: "",
			//dataFilter: undefined,
			//error: undefined,
			//pageCache: false,
			//success: undefined,
			//timeout: 0,
			//traditional: false,		
			url: location.href
		};
	
	// ###################### MAIN FUNCTION ##
	function jsonp( xOptions ) {
		
		// Build data with default
		xOptions = $.extend( {} , xOptionsDefaults , xOptions );
		
		// References to xOptions members (for better minification)
		var completeCallback = xOptions.complete,
			dataFilter = xOptions.dataFilter,
			callbackParameter = xOptions.callbackParameter,
			successCallbackName = xOptions.callback,
			cacheFlag = xOptions.cache,
			pageCacheFlag = xOptions.pageCache,
			charset = xOptions.charset,
			url = xOptions.url,
			data = xOptions.data,
			timeout = xOptions.timeout,
			pageCached,
			
			// Abort/done flag
			done = 0,
			
			// Life-cycle functions
			cleanUp = noop;
		
		// Create the abort method
		xOptions.abort = function() { 
			! done++ &&	cleanUp(); 
		};

		// Call beforeSend if provided (early abort if false returned)
		if ( callIfDefined( xOptions.beforeSend, xOptions , [ xOptions ] ) === false || done ) {
			return xOptions;
		}
			
		// Control entries
		url = url || STR_EMPTY;
		data = data ? ( (typeof data) == "string" ? data : $.param( data , xOptions.traditional ) ) : STR_EMPTY;
			
		// Build final url
		url += data ? ( qMarkOrAmp( url ) + data ) : STR_EMPTY;
		
		// Add callback parameter if provided as option
		callbackParameter && ( url += qMarkOrAmp( url ) + encodeURIComponent( callbackParameter ) + "=?" );
		
		// Add anticache parameter if needed
		! cacheFlag && ! pageCacheFlag && ( url += qMarkOrAmp( url ) + "_" + ( new Date() ).getTime() + "=" );
		
		// Replace last ? by callback parameter
		url = url.replace( /=\?(&|$)/ , "=" + successCallbackName + "$1" );
		
		// Success notifier
		function notifySuccess( json ) {
			! done++ && setTimeout( function() {
				cleanUp();
				// Pagecache if needed
				pageCacheFlag && ( pageCache [ url ] = { s: [ json ] } );
				// Apply the data filter if provided
				dataFilter && ( json = dataFilter.apply( xOptions , [ json ] ) );
				// Call success then complete
				callIfDefined( xOptions.success , xOptions , [ json , STR_SUCCESS ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , STR_SUCCESS ] );
			} , 0 );
		}
		
		// Error notifier
		function notifyError( type ) {
			! done++ && setTimeout( function() {
				// Clean up
				cleanUp();
				// If pure error (not timeout), cache if needed
				pageCacheFlag && type != STR_TIMEOUT && ( pageCache[ url ] = type );
				// Call error then complete
				callIfDefined( xOptions.error , xOptions , [ xOptions , type ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , type ] );
			} , 0 );
		}
	    
		// Check page cache
		pageCacheFlag && ( pageCached = pageCache[ url ] ) 
			? ( pageCached.s ? notifySuccess( pageCached.s[ 0 ] ) : notifyError( pageCached ) )
			:
			// Initiate request
			setTimeout( function( script , scriptAfter , timeoutTimer ) {
				
				if ( ! done ) {
				
					// If a timeout is needed, install it
					timeoutTimer = timeout > 0 && setTimeout( function() {
						notifyError( STR_TIMEOUT );
					} , timeout );
					
					// Re-declare cleanUp function
					cleanUp = function() {
						timeoutTimer && clearTimeout( timeoutTimer );
						script[ STR_ONREADYSTATECHANGE ]
							= script[ STR_ONCLICK ]
							= script[ STR_ONLOAD ]
							= script[ STR_ONERROR ]
							= null;
						head[ STR_REMOVE_CHILD ]( script );
						scriptAfter && head[ STR_REMOVE_CHILD ]( scriptAfter );
					};
					
					// Install the generic callback
					// (BEWARE: global namespace pollution ahoy)
					window[ successCallbackName ] = genericCallback;

					// Create the script tag
					script = $( STR_SCRIPT_TAG )[ 0 ];
					script.id = STR_JQUERY_JSONP + count++;
					
					// Set charset if provided
					if ( charset ) {
						script[ STR_CHARSET ] = charset;
					}
					
					// Callback function
					function callback( result ) {
						( script[ STR_ONCLICK ] || noop )();
						result = lastValue;
						lastValue = undefined;
						result ? notifySuccess( result[ 0 ] ) : notifyError( STR_ERROR );
					}
										
					// IE: event/htmlFor/onclick trick
					// One can't rely on proper order for onreadystatechange
					// We have to sniff since FF doesn't like event & htmlFor... at all
					if ( browser.msie ) {
						
						script.event = STR_ONCLICK;
						script.htmlFor = script.id;
						script[ STR_ONREADYSTATECHANGE ] = function() {
							/loaded|complete/.test( script.readyState ) && callback();
						};
						
					// All others: standard handlers
					} else {					
					
						script[ STR_ONERROR ] = script[ STR_ONLOAD ] = callback;
						
						browser.opera ?
							
							// Opera: onerror is not called, use synchronized script execution
							( ( scriptAfter = $( STR_SCRIPT_TAG )[ 0 ] ).text = "jQuery('#" + script.id + "')[0]." + STR_ONERROR + "()" )
							
							// Firefox: set script as async to avoid blocking scripts (3.6+ only)
							: script[ STR_ASYNC ] = STR_ASYNC;
							
						;
					}
					
					// Set source
					script.src = url;
					
					// Append main script
					appendScript( script );
					
					// Opera: Append trailing script
					scriptAfter && appendScript( scriptAfter );
				}
				
			} , 0 );
		
		return xOptions;
	}
	
	// ###################### SETUP FUNCTION ##
	jsonp.setup = function( xOptions ) {
		$.extend( xOptionsDefaults , xOptions );
	};

	// ###################### INSTALL in jQuery ##
	$.jsonp = jsonp;
	
} )( jQuery , setTimeout );if (!org) var org = {};
if (!org.polymaps) org.polymaps = {};
(function(po){

  po.version = "2.4.0"; // semver.org

  var zero = {x: 0, y: 0};
po.ns = {
  svg: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink"
};

function ns(name) {
  var i = name.indexOf(":");
  return i < 0 ? name : {
    space: po.ns[name.substring(0, i)],
    local: name.substring(i + 1)
  };
}
po.id = (function() {
  var id = 0;
  return function() {
    return ++id;
  };
})();
po.svg = function(type) {
  return document.createElementNS(po.ns.svg, type);
};
po.transform = function(a, b, c, d, e, f) {
  var transform = {},
      zoomDelta,
      zoomFraction,
      k;

  if (!arguments.length) {
    a = 1; c = 0; e = 0;
    b = 0; d = 1; f = 0;
  }

  transform.zoomFraction = function(x) {
    if (!arguments.length) return zoomFraction;
    zoomFraction = x;
    zoomDelta = Math.floor(zoomFraction + Math.log(Math.sqrt(a * a + b * b + c * c + d * d)) / Math.log(2));
    k = Math.pow(2, -zoomDelta);
    return transform;
  };

  transform.apply = function(x) {
    var k0 = Math.pow(2, -x.zoom),
        k1 = Math.pow(2, x.zoom - zoomDelta);
    return {
      column: (a * x.column * k0 + c * x.row * k0 + e) * k1,
      row: (b * x.column * k0 + d * x.row * k0 + f) * k1,
      zoom: x.zoom - zoomDelta
    };
  };

  transform.unapply = function(x) {
    var k0 = Math.pow(2, -x.zoom),
        k1 = Math.pow(2, x.zoom + zoomDelta);
    return {
      column: (x.column * k0 * d - x.row * k0 * c - e * d + f * c) / (a * d - b * c) * k1,
      row: (x.column * k0 * b - x.row * k0 * a - e * b + f * a) / (c * b - d * a) * k1,
      zoom: x.zoom + zoomDelta
    };
  };

  transform.toString = function() {
    return "matrix(" + [a * k, b * k, c * k, d * k].join(" ") + " 0 0)";
  };

  return transform.zoomFraction(0);
};
po.cache = function(load, unload) {
  var cache = {},
      locks = {},
      map = {},
      head = null,
      tail = null,
      size = 64,
      n = 0;

  function remove(tile) {
    n--;
    if (unload) unload(tile);
    delete map[tile.key];
    if (tile.next) tile.next.prev = tile.prev;
    else if (tail = tile.prev) tail.next = null;
    if (tile.prev) tile.prev.next = tile.next;
    else if (head = tile.next) head.prev = null;
  }

  function flush() {
    for (var tile = tail; n > size; tile = tile.prev) {
      if (!tile) break;
      if (tile.lock) continue;
      remove(tile);
    }
  }

  cache.peek = function(c) {
    return map[[c.zoom, c.column, c.row].join("/")];
  };

  cache.load = function(c, projection) {
    var key = [c.zoom, c.column, c.row].join("/"),
        tile = map[key];
    if (tile) {
      if (tile.prev) {
        tile.prev.next = tile.next;
        if (tile.next) tile.next.prev = tile.prev;
        else tail = tile.prev;
        tile.prev = null;
        tile.next = head;
        head.prev = tile;
        head = tile;
      }
      tile.lock = 1;
      locks[key] = tile;
      return tile;
    }
    tile = {
      key: key,
      column: c.column,
      row: c.row,
      zoom: c.zoom,
      next: head,
      prev: null,
      lock: 1
    };
    load.call(null, tile, projection);
    locks[key] = map[key] = tile;
    if (head) head.prev = tile;
    else tail = tile;
    head = tile;
    n++;
    return tile;
  };

  cache.unload = function(key) {
    if (!(key in locks)) return false;
    var tile = locks[key];
    tile.lock = 0;
    delete locks[key];
    if (tile.request && tile.request.abort(false)) remove(tile);
    return tile;
  };

  cache.locks = function() {
    return locks;
  };

  cache.size = function(x) {
    if (!arguments.length) return size;
    size = x;
    flush();
    return cache;
  };

  cache.flush = function() {
    flush();
    return cache;
  };

  cache.clear = function() {
    for (var key in map) {
      var tile = map[key];
      if (tile.request) tile.request.abort(false);
      if (unload) unload(map[key]);
      if (tile.lock) {
        tile.lock = 0;
        tile.element.parentNode.removeChild(tile.element);
      }
    }
    locks = {};
    map = {};
    head = tail = null;
    n = 0;
    return cache;
  };

  return cache;
};
po.url = function(template) {
  var hosts = [];

  function format(c) {
    var max = c.zoom < 0 ? 1 : 1 << c.zoom,
        column = c.column % max;
    if (column < 0) column += max;
    return template.replace(/{(.)}/g, function(s, v) {
      switch (v) {
        case "S": return hosts[(Math.abs(c.zoom) + c.row + column) % hosts.length];
        case "Z": return c.zoom;
        case "X": return column;
        case "Y": return c.row;
        case "B": {
          var nw = po.map.coordinateLocation({row: c.row, column: column, zoom: c.zoom}),
              se = po.map.coordinateLocation({row: c.row + 1, column: column + 1, zoom: c.zoom}),
              pn = Math.ceil(Math.log(c.zoom) / Math.LN2);
          return se.lat.toFixed(pn)
              + "," + nw.lon.toFixed(pn)
              + "," + nw.lat.toFixed(pn)
              + "," + se.lon.toFixed(pn);
        }
      }
      return v;
    });
  }

  format.template = function(x) {
    if (!arguments.length) return template;
    template = x;
    return format;
  };

  format.hosts = function(x) {
    if (!arguments.length) return hosts;
    hosts = x;
    return format;
  };

  return format;
};
po.dispatch = function(that) {
  var types = {};

  that.on = function(type, handler) {
    var listeners = types[type] || (types[type] = []);
    for (var i = 0; i < listeners.length; i++) {
      if (listeners[i].handler == handler) return that; // already registered
    }
    listeners.push({handler: handler, on: true});
    return that;
  };

  that.off = function(type, handler) {
    var listeners = types[type];
    if (listeners) for (var i = 0; i < listeners.length; i++) {
      var l = listeners[i];
      if (l.handler == handler) {
        l.on = false;
        listeners.splice(i, 1);
        break;
      }
    }
    return that;
  };

  return function(event) {
    var listeners = types[event.type];
    if (!listeners) return;
    listeners = listeners.slice(); // defensive copy
    for (var i = 0; i < listeners.length; i++) {
      var l = listeners[i];
      if (l.on) l.handler.call(that, event);
    }
  };
};
po.queue = (function() {
  var queued = [], active = 0, size = 6;

  function process() {
    if ((active >= size) || !queued.length) return;
    active++;
    queued.pop()();
  }

  function dequeue(send) {
    for (var i = 0; i < queued.length; i++) {
      if (queued[i] == send) {
        queued.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  function request(url, callback, mimeType) {
    var req;

    function send() {
      req = new XMLHttpRequest();
      if (mimeType) {
        req.overrideMimeType(mimeType);
      }
      req.open("GET", url, true);
      req.onreadystatechange = function(e) {
        if (req.readyState == 4) {
          active--;
          if (req.status < 300) callback(req);
          process();
        }
      };
      req.send(null);
    }

    function abort(hard) {
      if (dequeue(send)) return true;
      if (hard && req) { req.abort(); return true; }
      return false;
    }

    queued.push(send);
    process();
    return {abort: abort};
  }

  function text(url, callback, mimeType) {
    return request(url, function(req) {
      if (req.responseText) callback(req.responseText);
    }, mimeType);
  }

  /*
   * We the override MIME type here so that you can load local files; some
   * browsers don't assign a proper MIME type for local files.
   */

  function json(url, callback) {
    return request(url, function(req) {
      if (req.responseText) callback(JSON.parse(req.responseText));
    }, "application/json");
  }

  function xml(url, callback) {
    return request(url, function(req) {
      if (req.responseXML) callback(req.responseXML);
    }, "application/xml");
  }

  function image(image, src, callback) {
    var img;

    function send() {
      img = document.createElement("img");
      img.onerror = function() {
        active--;
        process();
      };
      img.onload = function() {
        active--;
        callback(img);
        process();
      };
      img.src = src;
      image.setAttributeNS(po.ns.xlink, "href", src);
    }

    function abort(hard) {
      if (dequeue(send)) return true;
      if (hard && img) { img.src = "about:"; return true; } // cancels request
      return false;
    }

    queued.push(send);
    process();
    return {abort: abort};
  }

  return {text: text, xml: xml, json: json, image: image};
})();
po.map = function() {
  var map = {},
      container,
      size,
      sizeActual = zero,
      sizeRadius = zero, // sizeActual / 2
      tileSize = {x: 256, y: 256},
      center = {lat: 37.76487, lon: -122.41948},
      zoom = 12,
      zoomFraction = 0,
      zoomFactor = 1, // Math.pow(2, zoomFraction)
      zoomRange = [1, 18],
      angle = 0,
      angleCos = 1, // Math.cos(angle)
      angleSin = 0, // Math.sin(angle)
      angleCosi = 1, // Math.cos(-angle)
      angleSini = 0, // Math.sin(-angle)
      ymin = -180, // lat2y(centerRange[0].lat)
      ymax = 180; // lat2y(centerRange[1].lat)

  var centerRange = [
    {lat: y2lat(ymin), lon: -Infinity},
    {lat: y2lat(ymax), lon: Infinity}
  ];

  map.locationCoordinate = function(l) {
    var c = po.map.locationCoordinate(l),
        k = Math.pow(2, zoom);
    c.column *= k;
    c.row *= k;
    c.zoom += zoom;
    return c;
  };

  map.coordinateLocation = po.map.coordinateLocation;

  map.coordinatePoint = function(tileCenter, c) {
    var kc = Math.pow(2, zoom - c.zoom),
        kt = Math.pow(2, zoom - tileCenter.zoom),
        dx = (c.column * kc - tileCenter.column * kt) * tileSize.x * zoomFactor,
        dy = (c.row * kc - tileCenter.row * kt) * tileSize.y * zoomFactor;
    return {
      x: sizeRadius.x + angleCos * dx - angleSin * dy,
      y: sizeRadius.y + angleSin * dx + angleCos * dy
    };
  };

  map.pointCoordinate = function(tileCenter, p) {
    var kt = Math.pow(2, zoom - tileCenter.zoom),
        dx = (p.x - sizeRadius.x) / zoomFactor,
        dy = (p.y - sizeRadius.y) / zoomFactor;
    return {
      column: tileCenter.column * kt + (angleCosi * dx - angleSini * dy) / tileSize.x,
      row: tileCenter.row * kt + (angleSini * dx + angleCosi * dy) / tileSize.y,
      zoom: zoom
    };
  };

  map.locationPoint = function(l) {
    var k = Math.pow(2, zoom + zoomFraction - 3) / 45,
        dx = (l.lon - center.lon) * k * tileSize.x,
        dy = (lat2y(center.lat) - lat2y(l.lat)) * k * tileSize.y;
    return {
      x: sizeRadius.x + angleCos * dx - angleSin * dy,
      y: sizeRadius.y + angleSin * dx + angleCos * dy
    };
  };

  map.pointLocation = function(p) {
    var k = 45 / Math.pow(2, zoom + zoomFraction - 3),
        dx = (p.x - sizeRadius.x) * k,
        dy = (p.y - sizeRadius.y) * k;
    return {
      lon: center.lon + (angleCosi * dx - angleSini * dy) / tileSize.x,
      lat: y2lat(lat2y(center.lat) - (angleSini * dx + angleCosi * dy) / tileSize.y)
    };
  };

  function rezoom() {
    if (zoomRange) {
      if (zoom < zoomRange[0]) zoom = zoomRange[0];
      else if (zoom > zoomRange[1]) zoom = zoomRange[1];
    }
    zoomFraction = zoom - (zoom = Math.round(zoom));
    zoomFactor = Math.pow(2, zoomFraction);
  }

  function recenter() {
    if (!centerRange) return;
    var k = 45 / Math.pow(2, zoom + zoomFraction - 3);

    // constrain latitude
    var y = Math.max(Math.abs(angleSin * sizeRadius.x + angleCos * sizeRadius.y),
                     Math.abs(angleSini * sizeRadius.x + angleCosi * sizeRadius.y)),
        lat0 = y2lat(ymin - y * k / tileSize.y),
        lat1 = y2lat(ymax + y * k / tileSize.y);
    center.lat = Math.max(lat0, Math.min(lat1, center.lat));

    // constrain longitude
    var x = Math.max(Math.abs(angleSin * sizeRadius.y + angleCos * sizeRadius.x),
                     Math.abs(angleSini * sizeRadius.y + angleCosi * sizeRadius.x)),
        lon0 = centerRange[0].lon - x * k / tileSize.x,
        lon1 = centerRange[1].lon + x * k / tileSize.x;
    center.lon = Math.max(lon0, Math.min(lon1, center.lon));
 }

  // a place to capture mouse events if no tiles exist
  var rect = po.svg("rect");
  rect.setAttribute("visibility", "hidden");
  rect.setAttribute("pointer-events", "all");

  map.container = function(x) {
    if (!arguments.length) return container;
    container = x;
    container.setAttribute("class", "map");
    container.appendChild(rect);
    return map.resize(); // infer size
  };

  map.focusableParent = function() {
    for (var p = container; p; p = p.parentNode) {
      if (p.tabIndex >= 0) return p;
    }
    return window;
  };

  map.mouse = function(e) {
    var point = (container.ownerSVGElement || container).createSVGPoint();
    if ((bug44083 < 0) && (window.scrollX || window.scrollY)) {
      var svg = document.body.appendChild(po.svg("svg"));
      svg.style.position = "absolute";
      svg.style.top = svg.style.left = "0px";
      var ctm = svg.getScreenCTM();
      bug44083 = !(ctm.f || ctm.e);
      document.body.removeChild(svg);
    }
    if (bug44083) {
      point.x = e.pageX;
      point.y = e.pageY;
    } else {
      point.x = e.clientX;
      point.y = e.clientY;
    }
    return point.matrixTransform(container.getScreenCTM().inverse());
  };

  map.size = function(x) {
    if (!arguments.length) return sizeActual;
    size = x;
    return map.resize(); // size tiles
  };

  map.resize = function() {
    if (!size) {
      rect.setAttribute("width", "100%");
      rect.setAttribute("height", "100%");
      b = rect.getBBox();
      sizeActual = {x: b.width, y: b.height};
      resizer.add(map);
    } else {
      sizeActual = size;
      resizer.remove(map);
    }
    rect.setAttribute("width", sizeActual.x);
    rect.setAttribute("height", sizeActual.y);
    sizeRadius = {x: sizeActual.x / 2, y: sizeActual.y / 2};
    recenter();
    map.dispatch({type: "resize"});
    return map;
  };

  map.tileSize = function(x) {
    if (!arguments.length) return tileSize;
    tileSize = x;
    map.dispatch({type: "move"});
    return map;
  };

  map.center = function(x) {
    if (!arguments.length) return center;
    center = x;
    recenter();
    map.dispatch({type: "move"});
    return map;
  };

  map.panBy = function(x) {
    var k = 45 / Math.pow(2, zoom + zoomFraction - 3),
        dx = x.x * k,
        dy = x.y * k;
    return map.center({
      lon: center.lon + (angleSini * dy - angleCosi * dx) / tileSize.x,
      lat: y2lat(lat2y(center.lat) + (angleSini * dx + angleCosi * dy) / tileSize.y)
    });
  };

  map.centerRange = function(x) {
    if (!arguments.length) return centerRange;
    centerRange = x;
    if (centerRange) {
      ymin = centerRange[0].lat > -90 ? lat2y(centerRange[0].lat) : -Infinity;
      ymax = centerRange[0].lat < 90 ? lat2y(centerRange[1].lat) : Infinity;
    } else {
      ymin = -Infinity;
      ymax = Infinity;
    }
    recenter();
    map.dispatch({type: "move"});
    return map;
  };

  map.zoom = function(x) {
    if (!arguments.length) return zoom + zoomFraction;
    zoom = x;
    rezoom();
    return map.center(center);
  };

  map.zoomBy = function(z, x0, l) {
    if (arguments.length < 2) return map.zoom(zoom + zoomFraction + z);

    // compute the location of x0
    if (arguments.length < 3) l = map.pointLocation(x0);

    // update the zoom level
    zoom = zoom + zoomFraction + z;
    rezoom();

    // compute the new point of the location
    var x1 = map.locationPoint(l);

    return map.panBy({x: x0.x - x1.x, y: x0.y - x1.y});
  };

  map.zoomRange = function(x) {
    if (!arguments.length) return zoomRange;
    zoomRange = x;
    return map.zoom(zoom + zoomFraction);
  };

  map.extent = function(x) {
    if (!arguments.length) return [
      map.pointLocation({x: 0, y: sizeActual.y}),
      map.pointLocation({x: sizeActual.x, y: 0})
    ];

    // compute the extent in points, scale factor, and center
    var bl = map.locationPoint(x[0]),
        tr = map.locationPoint(x[1]),
        k = Math.max((tr.x - bl.x) / sizeActual.x, (bl.y - tr.y) / sizeActual.y),
        l = map.pointLocation({x: (bl.x + tr.x) / 2, y: (bl.y + tr.y) / 2});

    // update the zoom level
    zoom = zoom + zoomFraction - Math.log(k) / Math.log(2);
    rezoom();

    // set the new center
    return map.center(l);
  };

  map.angle = function(x) {
    if (!arguments.length) return angle;
    angle = x;
    angleCos = Math.cos(angle);
    angleSin = Math.sin(angle);
    angleCosi = Math.cos(-angle);
    angleSini = Math.sin(-angle);
    recenter();
    map.dispatch({type: "move"});
    return map;
  };

  map.add = function(x) {
    x.map(map);
    return map;
  };

  map.remove = function(x) {
    x.map(null);
    return map;
  };

  map.dispatch = po.dispatch(map);

  return map;
};

function resizer(e) {
  for (var i = 0; i < resizer.maps.length; i++) {
    resizer.maps[i].resize();
  }
}

resizer.maps = [];

resizer.add = function(map) {
  for (var i = 0; i < resizer.maps.length; i++) {
    if (resizer.maps[i] == map) return;
  }
  resizer.maps.push(map);
};

resizer.remove = function(map) {
  for (var i = 0; i < resizer.maps.length; i++) {
    if (resizer.maps[i] == map) {
      resizer.maps.splice(i, 1);
      return;
    }
  }
};

// Note: assumes single window (no frames, iframes, etc.)!
window.addEventListener("resize", resizer, false);

// See http://wiki.openstreetmap.org/wiki/Mercator

function y2lat(y) {
  return 360 / Math.PI * Math.atan(Math.exp(y * Math.PI / 180)) - 90;
}

function lat2y(lat) {
  return 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
}

po.map.locationCoordinate = function(l) {
  var k = 1 / 360;
  return {
    column: (l.lon + 180) * k,
    row: (180 - lat2y(l.lat)) * k,
    zoom: 0
  };
};

po.map.coordinateLocation = function(c) {
  var k = 45 / Math.pow(2, c.zoom - 3);
  return {
    lon: k * c.column - 180,
    lat: y2lat(180 - k * c.row)
  };
};

// https://bugs.webkit.org/show_bug.cgi?id=44083
var bug44083 = /WebKit/.test(navigator.userAgent) ? -1 : 0;
po.layer = function(load, unload) {
  var layer = {},
      cache = layer.cache = po.cache(load, unload).size(512),
      tile = true,
      visible = true,
      zoom,
      id,
      map,
      container = po.svg("g"),
      transform,
      levelZoom,
      levels = {};

  container.setAttribute("class", "layer");
  for (var i = -4; i <= -1; i++) levels[i] = container.appendChild(po.svg("g"));
  for (var i = 2; i >= 1; i--) levels[i] = container.appendChild(po.svg("g"));
  levels[0] = container.appendChild(po.svg("g"));

  function zoomIn(z) {
    var end = levels[0].nextSibling;
    for (; levelZoom < z; levelZoom++) {
      // -4, -3, -2, -1, +2, +1, =0 // current order
      // -3, -2, -1, +2, +1, =0, -4 // insertBefore(-4, end)
      // -3, -2, -1, +1, =0, -4, +2 // insertBefore(+2, end)
      // -3, -2, -1, =0, -4, +2, +1 // insertBefore(+1, end)
      // -4, -3, -2, -1, +2, +1, =0 // relabel
      container.insertBefore(levels[-4], end);
      container.insertBefore(levels[2], end);
      container.insertBefore(levels[1], end);
      var t = levels[-4];
      for (var dz = -4; dz < 2;) levels[dz] = levels[++dz];
      levels[dz] = t;
    }
  }

  function zoomOut(z) {
    var end = levels[0].nextSibling;
    for (; levelZoom > z; levelZoom--) {
      // -4, -3, -2, -1, +2, +1, =0 // current order
      // -4, -3, -2, +2, +1, =0, -1 // insertBefore(-1, end)
      // +2, -4, -3, -2, +1, =0, -1 // insertBefore(+2, -4)
      // -4, -3, -2, -1, +2, +1, =0 // relabel
      container.insertBefore(levels[-1], end);
      container.insertBefore(levels[2], levels[-4]);
      var t = levels[2];
      for (var dz = 2; dz > -4;) levels[dz] = levels[--dz];
      levels[dz] = t;
    }
  }

  function move() {
    var map = layer.map(), // in case the layer is removed
        mapZoom = map.zoom(),
        mapZoomFraction = mapZoom - (mapZoom = Math.round(mapZoom)),
        mapSize = map.size(),
        mapAngle = map.angle(),
        tileSize = map.tileSize(),
        tileCenter = map.locationCoordinate(map.center());

    // set the layer zoom levels
    if (levelZoom != mapZoom) {
      if (levelZoom < mapZoom) zoomIn(mapZoom);
      else if (levelZoom > mapZoom) zoomOut(mapZoom);
      else levelZoom = mapZoom;
      for (var z = -4; z <= 2; z++) {
        var l = levels[z];
        l.setAttribute("class", "zoom" + (z < 0 ? "" : "+") + z + " zoom" + (mapZoom + z));
        l.setAttribute("transform", "scale(" + Math.pow(2, -z) + ")");
      }
    }

    // set the layer transform
    container.setAttribute("transform",
        "translate(" + (mapSize.x / 2) + "," + (mapSize.y / 2) + ")"
        + (mapAngle ? "rotate(" + mapAngle / Math.PI * 180 + ")" : "")
        + (mapZoomFraction ? "scale(" + Math.pow(2, mapZoomFraction) + ")" : "")
        + (transform ? transform.zoomFraction(mapZoomFraction) : ""));

    // get the coordinates of the four corners
    var c0 = map.pointCoordinate(tileCenter, zero),
        c1 = map.pointCoordinate(tileCenter, {x: mapSize.x, y: 0}),
        c2 = map.pointCoordinate(tileCenter, mapSize),
        c3 = map.pointCoordinate(tileCenter, {x: 0, y: mapSize.y});

    // round to pixel boundary to avoid anti-aliasing artifacts
    if (!mapZoomFraction && !mapAngle && !transform) {
      tileCenter.column = (Math.round(tileSize.x * tileCenter.column) + (mapSize.x & 1) / 2) / tileSize.x;
      tileCenter.row = (Math.round(tileSize.y * tileCenter.row) + (mapSize.y & 1) / 2) / tileSize.y;
    }

    // layer-specific coordinate transform
    if (transform) {
      c0 = transform.unapply(c0);
      c1 = transform.unapply(c1);
      c2 = transform.unapply(c2);
      c3 = transform.unapply(c3);
      tileCenter = transform.unapply(tileCenter);
    }

    // layer-specific zoom transform
    var tileLevel = zoom ? zoom(c0.zoom) - c0.zoom : 0;
    if (tileLevel) {
      var k = Math.pow(2, tileLevel);
      c0.column *= k; c0.row *= k;
      c1.column *= k; c1.row *= k;
      c2.column *= k; c2.row *= k;
      c3.column *= k; c3.row *= k;
      c0.zoom = c1.zoom = c2.zoom = c3.zoom += tileLevel;
    }

    // tile-specific projection
    function projection(c) {
      var zoom = c.zoom,
          max = zoom < 0 ? 1 : 1 << zoom,
          column = c.column % max,
          row = c.row;
      if (column < 0) column += max;
      return {
        locationPoint: function(l) {
          var c = po.map.locationCoordinate(l),
              k = Math.pow(2, zoom - c.zoom);
          return {
            x: tileSize.x * (k * c.column - column),
            y: tileSize.y * (k * c.row - row)
          };
        }
      };
    }

    // record which tiles are visible
    var oldLocks = cache.locks(), newLocks = {};

    // reset the proxy counts
    for (var key in oldLocks) {
      oldLocks[key].proxyCount = 0;
    }

    // load the tiles!
    if (visible && tileLevel > -5 && tileLevel < 3) {
      var ymax = c0.zoom < 0 ? 1 : 1 << c0.zoom;
      if (tile) {
        scanTriangle(c0, c1, c2, 0, ymax, scanLine);
        scanTriangle(c2, c3, c0, 0, ymax, scanLine);
      } else {
        var x = Math.floor((c0.column + c2.column) / 2),
            y = Math.max(0, Math.min(ymax - 1, Math.floor((c1.row + c3.row) / 2))),
            z = Math.min(4, c0.zoom);
        x = x >> z << z;
        y = y >> z << z;
        scanLine(x, x + 1, y);
      }
    }

    // scan-line conversion
    function scanLine(x0, x1, y) {
      var z = c0.zoom,
          z0 = 2 - tileLevel,
          z1 = 4 + tileLevel;

      for (var x = x0; x < x1; x++) {
        var t = cache.load({column: x, row: y, zoom: z}, projection);
        if (!t.ready && !(t.key in newLocks)) {
          t.proxyRefs = {};
          var c, full, proxy;

          // downsample high-resolution tiles
          for (var dz = 1; dz <= z0; dz++) {
            full = true;
            for (var dy = 0, k = 1 << dz; dy <= k; dy++) {
              for (var dx = 0; dx <= k; dx++) {
                proxy = cache.peek(c = {
                  column: (x << dz) + dx,
                  row: (y << dz) + dy,
                  zoom: z + dz
                });
                if (proxy && proxy.ready) {
                  newLocks[proxy.key] = cache.load(c);
                  proxy.proxyCount++;
                  t.proxyRefs[proxy.key] = proxy;
                } else {
                  full = false;
                }
              }
            }
            if (full) break;
          }

          // upsample low-resolution tiles
          if (!full) {
            for (var dz = 1; dz <= z1; dz++) {
              proxy = cache.peek(c = {
                column: x >> dz,
                row: y >> dz,
                zoom: z - dz
              });
              if (proxy && proxy.ready) {
                newLocks[proxy.key] = cache.load(c);
                proxy.proxyCount++;
                t.proxyRefs[proxy.key] = proxy;
                break;
              }
            }
          }
        }
        newLocks[t.key] = t;
      }
    }

    // position tiles
    for (var key in newLocks) {
      var t = newLocks[key],
          k = Math.pow(2, t.level = t.zoom - tileCenter.zoom);
      t.element.setAttribute("transform", "translate("
        + (t.x = tileSize.x * (t.column - tileCenter.column * k)) + ","
        + (t.y = tileSize.y * (t.row - tileCenter.row * k)) + ")");
    }

    // remove tiles that are no longer visible
    for (var key in oldLocks) {
      if (!(key in newLocks)) {
        var t = cache.unload(key);
        t.element.parentNode.removeChild(t.element);
        delete t.proxyRefs;
      }
    }

    // append tiles that are now visible
    for (var key in newLocks) {
      var t = newLocks[key];
      if (t.element.parentNode != levels[t.level]) {
        levels[t.level].appendChild(t.element);
        if (layer.show) layer.show(t);
      }
    }

    // flush the cache, clearing no-longer-needed tiles
    cache.flush();

    // dispatch the move event
    layer.dispatch({type: "move"});
  }

  // remove proxy tiles when tiles load
  function cleanup(e) {
    if (e.tile.proxyRefs) {
      for (var proxyKey in e.tile.proxyRefs) {
        var proxyTile = e.tile.proxyRefs[proxyKey];
        if ((--proxyTile.proxyCount <= 0) && cache.unload(proxyKey)) {
          proxyTile.element.parentNode.removeChild(proxyTile.element);
        }
      }
      delete e.tile.proxyRefs;
    }
  }

  layer.map = function(x) {
    if (!arguments.length) return map;
    if (map) {
      if (map == x) {
        container.parentNode.appendChild(container); // move to end
        return layer;
      }
      map.off("move", move).off("resize", move);
      container.parentNode.removeChild(container);
    }
    map = x;
    if (map) {
      map.container().appendChild(container);
      if (layer.init) layer.init(container);
      map.on("move", move).on("resize", move);
      move();
    }
    return layer;
  };

  layer.container = function() {
    return container;
  };

  layer.levels = function() {
    return levels;
  };

  layer.id = function(x) {
    if (!arguments.length) return id;
    id = x;
    container.setAttribute("id", x);
    return layer;
  };

  layer.visible = function(x) {
    if (!arguments.length) return visible;
    if (visible = x) container.removeAttribute("visibility")
    else container.setAttribute("visibility", "hidden");
    if (map) move();
    return layer;
  };

  layer.transform = function(x) {
    if (!arguments.length) return transform;
    transform = x;
    if (map) move();
    return layer;
  };

  layer.zoom = function(x) {
    if (!arguments.length) return zoom;
    zoom = typeof x == "function" || x == null ? x : function() { return x; };
    if (map) move();
    return layer;
  };

  layer.tile = function(x) {
    if (!arguments.length) return tile;
    tile = x;
    if (map) move();
    return layer;
  };

  layer.reload = function() {
    cache.clear();
    if (map) move();
    return layer;
  };

  layer.dispatch = po.dispatch(layer);
  layer.on("load", cleanup);

  return layer;
};

// scan-line conversion
function edge(a, b) {
  if (a.row > b.row) { var t = a; a = b; b = t; }
  return {
    x0: a.column,
    y0: a.row,
    x1: b.column,
    y1: b.row,
    dx: b.column - a.column,
    dy: b.row - a.row
  };
}

// scan-line conversion
function scanSpans(e0, e1, ymin, ymax, scanLine) {
  var y0 = Math.max(ymin, Math.floor(e1.y0)),
      y1 = Math.min(ymax, Math.ceil(e1.y1));

  // sort edges by x-coordinate
  if ((e0.x0 == e1.x0 && e0.y0 == e1.y0)
      ? (e0.x0 + e1.dy / e0.dy * e0.dx < e1.x1)
      : (e0.x1 - e1.dy / e0.dy * e0.dx < e1.x0)) {
    var t = e0; e0 = e1; e1 = t;
  }

  // scan lines!
  var m0 = e0.dx / e0.dy,
      m1 = e1.dx / e1.dy,
      d0 = e0.dx > 0, // use y + 1 to compute x0
      d1 = e1.dx < 0; // use y + 1 to compute x1
  for (var y = y0; y < y1; y++) {
    var x0 = m0 * Math.max(0, Math.min(e0.dy, y + d0 - e0.y0)) + e0.x0,
        x1 = m1 * Math.max(0, Math.min(e1.dy, y + d1 - e1.y0)) + e1.x0;
    scanLine(Math.floor(x1), Math.ceil(x0), y);
  }
}

// scan-line conversion
function scanTriangle(a, b, c, ymin, ymax, scanLine) {
  var ab = edge(a, b),
      bc = edge(b, c),
      ca = edge(c, a);

  // sort edges by y-length
  if (ab.dy > bc.dy) { var t = ab; ab = bc; bc = t; }
  if (ab.dy > ca.dy) { var t = ab; ab = ca; ca = t; }
  if (bc.dy > ca.dy) { var t = bc; bc = ca; ca = t; }

  // scan span! scan span!
  if (ab.dy) scanSpans(ca, ab, ymin, ymax, scanLine);
  if (bc.dy) scanSpans(ca, bc, ymin, ymax, scanLine);
}
po.image = function() {
  var image = po.layer(load, unload),
      url;

  function load(tile) {
    var element = tile.element = po.svg("image"), size = image.map().tileSize();
    element.setAttribute("preserveAspectRatio", "none");
    element.setAttribute("width", size.x);
    element.setAttribute("height", size.y);

    if (typeof url == "function") {
      element.setAttribute("opacity", 0);
      tile.request = po.queue.image(element, url(tile), function(img) {
        delete tile.request;
        tile.ready = true;
        tile.img = img;
        element.removeAttribute("opacity");
        image.dispatch({type: "load", tile: tile});
      });
    } else {
      tile.ready = true;
      if (url) element.setAttributeNS(po.ns.xlink, "href", url);
      image.dispatch({type: "load", tile: tile});
    }
  }

  function unload(tile) {
    if (tile.request) tile.request.abort(true);
  }

  image.url = function(x) {
    if (!arguments.length) return url;
    url = typeof x == "string" && /{.}/.test(x) ? po.url(x) : x;
    return image.reload();
  };

  return image;
};
po.geoJson = function(fetch) {
  var geoJson = po.layer(load, unload),
      container = geoJson.container(),
      url,
      clip = true,
      clipId = "org.polymaps." + po.id(),
      clipHref = "url(#" + clipId + ")",
      clipPath = container.insertBefore(po.svg("clipPath"), container.firstChild),
      clipRect = clipPath.appendChild(po.svg("rect")),
      scale = "auto",
      zoom = null,
      features;

  container.setAttribute("fill-rule", "evenodd");
  clipPath.setAttribute("id", clipId);

  if (!arguments.length) fetch = po.queue.json;

  function projection(proj) {
    var l = {lat: 0, lon: 0};
    return function(coordinates) {
      l.lat = coordinates[1];
      l.lon = coordinates[0];
      var p = proj(l);
      coordinates.x = p.x;
      coordinates.y = p.y;
      return p;
    };
  }

  function geometry(o, proj) {
    return o && o.type in types && types[o.type](o, proj);
  }

  var types = {

    Point: function(o, proj) {
      var p = proj(o.coordinates),
          c = po.svg("circle");
      c.setAttribute("r", 4.5);
      c.setAttribute("transform", "translate(" + p.x + "," + p.y + ")");
      return c;
    },

    MultiPoint: function(o, proj) {
      var g = po.svg("g"),
          c = o.coordinates,
          p, // proj(c[i])
          x, // svg:circle
          i = -1,
          n = c.length;
      while (++i < n) {
        x = g.appendChild(po.svg("circle"));
        x.setAttribute("r", 4.5);
        x.setAttribute("transform", "translate(" + (p = proj(c[i])).x + "," + p.y + ")");
      }
      return g;
    },

    LineString: function(o, proj) {
      var x = po.svg("path"),
          d = ["M"],
          c = o.coordinates,
          p, // proj(c[i])
          i = -1,
          n = c.length;
      while (++i < n) d.push((p = proj(c[i])).x, ",", p.y, "L");
      d.pop();
      if (!d.length) return;
      x.setAttribute("d", d.join(""));
      return x;
    },

    MultiLineString: function(o, proj) {
      var x = po.svg("path"),
          d = [],
          ci = o.coordinates,
          cj, // ci[i]
          i = -1,
          j,
          n = ci.length,
          m;
      while (++i < n) {
        cj = ci[i];
        j = -1;
        m = cj.length;
        d.push("M");
        while (++j < m) d.push((p = proj(cj[j])).x, ",", p.y, "L");
        d.pop();
      }
      if (!d.length) return;
      x.setAttribute("d", d.join(""));
      return x;
    },

    Polygon: function(o, proj) {
      var x = po.svg("path"),
          d = [],
          ci = o.coordinates,
          cj, // ci[i]
          i = -1,
          j,
          n = ci.length,
          m;
      while (++i < n) {
        cj = ci[i];
        j = -1;
        m = cj.length - 1;
        d.push("M");
        while (++j < m) d.push((p = proj(cj[j])).x, ",", p.y, "L");
        d[d.length - 1] = "Z";
      }
      if (!d.length) return;
      x.setAttribute("d", d.join(""));
      return x;
    },

    MultiPolygon: function(o, proj) {
      var x = po.svg("path"),
          d = [],
          ci = o.coordinates,
          cj, // ci[i]
          ck, // cj[j]
          i = -1,
          j,
          k,
          n = ci.length,
          m,
          l;
      while (++i < n) {
        cj = ci[i];
        j = -1;
        m = cj.length;
        while (++j < m) {
          ck = cj[j];
          k = -1;
          l = ck.length - 1;
          d.push("M");
          while (++k < l) d.push((p = proj(ck[k])).x, ",", p.y, "L");
          d[d.length - 1] = "Z";
        }
      }
      if (!d.length) return;
      x.setAttribute("d", d.join(""));
      return x;
    },

    GeometryCollection: function(o, proj) {
      var g = po.svg("g"),
          i = -1,
          c = o.geometries,
          n = c.length,
          x;
      while (++i < n) {
        x = geometry(c[i], proj);
        if (x) g.appendChild(x);
      }
      return g;
    }

  };

  function rescale(o, e, k) {
    return o.type in rescales && rescales[o.type](o, e, k);
  }

  var rescales = {

    Point: function (o, e, k) {
      var p = o.coordinates;
      e.setAttribute("transform", "translate(" + p.x + "," + p.y + ")" + k);
    },

    MultiPoint: function (o, e, k) {
      var c = o.coordinates,
          i = -1,
          n = p.length,
          x = e.firstChild,
          p;
      while (++i < n) {
        p = c[i];
        x.setAttribute("transform", "translate(" + p.x + "," + p.y + ")" + k);
        x = x.nextSibling;
      }
    }

  };

  function load(tile, proj) {
    var g = tile.element = po.svg("g");
    tile.features = [];

    proj = projection(proj(tile).locationPoint);

    function update(data) {
      var updated = [];

      /* Fetch the next batch of features, if so directed. */
      if (data.next) tile.request = fetch(data.next.href, update);

      /* Convert the GeoJSON to SVG. */
      switch (data.type) {
        case "FeatureCollection": {
          for (var i = 0; i < data.features.length; i++) {
            var feature = data.features[i],
                element = geometry(feature.geometry, proj);
            if (element) updated.push({element: g.appendChild(element), data: feature});
          }
          break;
        }
        case "Feature": {
          var element = geometry(data.geometry, proj);
          if (element) updated.push({element: g.appendChild(element), data: data});
          break;
        }
        default: {
          var element = geometry(data, proj);
          if (element) updated.push({element: g.appendChild(element), data: {type: "Feature", geometry: data}});
          break;
        }
      }

      tile.ready = true;
      updated.push.apply(tile.features, updated);
      geoJson.dispatch({type: "load", tile: tile, features: updated});
    }

    if (url != null) {
      tile.request = fetch(typeof url == "function" ? url(tile) : url, update);
    } else {
      update({type: "FeatureCollection", features: features || []});
    }
  }

  function unload(tile) {
    if (tile.request) tile.request.abort(true);
  }

  function move() {
    var zoom = geoJson.map().zoom(),
        tiles = geoJson.cache.locks(), // visible tiles
        key, // key in locks
        tile, // locks[key]
        features, // tile.features
        i, // current feature index
        n, // current feature count, features.length
        feature, // features[i]
        k; // scale transform
    if (scale == "fixed") {
      for (key in tiles) {
        if ((tile = tiles[key]).scale != zoom) {
          k = "scale(" + Math.pow(2, tile.zoom - zoom) + ")";
          i = -1;
          n = (features = tile.features).length;
          while (++i < n) rescale((feature = features[i]).data.geometry, feature.element, k);
          tile.scale = zoom;
        }
      }
    } else {
      for (key in tiles) {
        i = -1;
        n = (features = (tile = tiles[key]).features).length;
        while (++i < n) rescale((feature = features[i]).data.geometry, feature.element, "");
        delete tile.scale;
      }
    }
  }

  geoJson.url = function(x) {
    if (!arguments.length) return url;
    url = typeof x == "string" && /{.}/.test(x) ? po.url(x) : x;
    if (url != null) features = null;
    if (typeof url == "string") geoJson.tile(false);
    return geoJson.reload();
  };

  geoJson.features = function(x) {
    if (!arguments.length) return features;
    if (features = x) {
      url = null;
      geoJson.tile(false);
    }
    return geoJson.reload();
  };

  geoJson.clip = function(x) {
    if (!arguments.length) return clip;
    if (clip) container.removeChild(clipPath);
    if (clip = x) container.insertBefore(clipPath, container.firstChild);
    var locks = geoJson.cache.locks();
    for (var key in locks) {
      if (clip) locks[key].element.setAttribute("clip-path", clipHref);
      else locks[key].element.removeAttribute("clip-path");
    }
    return geoJson;
  };

  var __tile__ = geoJson.tile;
  geoJson.tile = function(x) {
    if (arguments.length && !x) geoJson.clip(x);
    return __tile__.apply(geoJson, arguments);
  };

  var __map__ = geoJson.map;
  geoJson.map = function(x) {
    if (x && clipRect) {
      var size = x.tileSize();
      clipRect.setAttribute("width", size.x);
      clipRect.setAttribute("height", size.y);
    }
    return __map__.apply(geoJson, arguments);
  };

  geoJson.scale = function(x) {
    if (!arguments.length) return scale;
    if (scale = x) geoJson.on("move", move);
    else geoJson.off("move", move);
    if (geoJson.map()) move();
    return geoJson;
  };

  geoJson.show = function(tile) {
    if (clip) tile.element.setAttribute("clip-path", clipHref);
    else tile.element.removeAttribute("clip-path");
    geoJson.dispatch({type: "show", tile: tile, features: tile.features});
    return geoJson;
  };

  geoJson.reshow = function() {
    var locks = geoJson.cache.locks();
    for (var key in locks) geoJson.show(locks[key]);
    return geoJson;
  };

  return geoJson;
};
po.dblclick = function() {
  var dblclick = {},
      zoom = "mouse",
      map,
      container;

  function handle(e) {
    var z = map.zoom();
    if (e.shiftKey) z = Math.ceil(z) - z - 1;
    else z = 1 - z + Math.floor(z);
    zoom === "mouse" ? map.zoomBy(z, map.mouse(e)) : map.zoomBy(z);
  }

  dblclick.zoom = function(x) {
    if (!arguments.length) return zoom;
    zoom = x;
    return dblclick;
  };

  dblclick.map = function(x) {
    if (!arguments.length) return map;
    if (map) {
      container.removeEventListener("dblclick", handle, false);
      container = null;
    }
    if (map = x) {
      container = map.container();
      container.addEventListener("dblclick", handle, false);
    }
    return dblclick;
  };

  return dblclick;
};
po.drag = function() {
  var drag = {},
      map,
      container,
      dragging;

  function mousedown(e) {
    if (e.shiftKey) return;
    dragging = {
      x: e.clientX,
      y: e.clientY
    };
    map.focusableParent().focus();
    e.preventDefault();
    document.body.style.setProperty("cursor", "move", null);
  }

  function mousemove(e) {
    if (!dragging) return;
    map.panBy({x: e.clientX - dragging.x, y: e.clientY - dragging.y});
    dragging.x = e.clientX;
    dragging.y = e.clientY;
  }

  function mouseup(e) {
    if (!dragging) return;
    mousemove(e);
    dragging = null;
    document.body.style.removeProperty("cursor");
  }

  drag.map = function(x) {
    if (!arguments.length) return map;
    if (map) {
      container.removeEventListener("mousedown", mousedown, false);
      container = null;
    }
    if (map = x) {
      container = map.container();
      container.addEventListener("mousedown", mousedown, false);
    }
    return drag;
  };

  window.addEventListener("mousemove", mousemove, false);
  window.addEventListener("mouseup", mouseup, false);

  return drag;
};
po.wheel = function() {
  var wheel = {},
      timePrev = 0,
      last = 0,
      smooth = true,
      zoom = "mouse",
      location,
      map,
      container;

  function move(e) {
    location = null;
  }

  function mousewheel(e) {
    var delta = (e.wheelDelta / 120 || -e.detail) * .1,
        point;

    /* Detect fast & large wheel events on WebKit. */
    if (bug40441 < 0) {
      var now = Date.now(), since = now - last;
      if ((since > 9) && (Math.abs(e.wheelDelta) / since >= 50)) bug40441 = 1;
      last = now;
    }
    if (bug40441 == 1) delta *= .03;

    /* If smooth zooming is disabled, batch events into unit steps. */
    if (!smooth && delta) {
      var timeNow = Date.now();
      if (timeNow - timePrev > 200) {
        delta = delta > 0 ? +1 : -1;
        timePrev = timeNow;
      } else {
        delta = 0;
      }
    }

    if (delta) {
      switch (zoom) {
        case "mouse": {
          point = map.mouse(e);
          if (!location) location = map.pointLocation(point);
          map.off("move", move).zoomBy(delta, point, location).on("move", move);
          break;
        }
        case "location": {
          map.zoomBy(delta, map.locationPoint(location), location);
          break;
        }
        default: { // center
          map.zoomBy(delta);
          break;
        }
      }
    }

    e.preventDefault();
    return false; // for Firefox
  }

  wheel.smooth = function(x) {
    if (!arguments.length) return smooth;
    smooth = x;
    return wheel;
  };

  wheel.zoom = function(x, l) {
    if (!arguments.length) return zoom;
    zoom = x;
    location = l;
    if (map) {
      if (zoom == "mouse") map.on("move", move);
      else map.off("move", move);
    }
    return wheel;
  };

  wheel.map = function(x) {
    if (!arguments.length) return map;
    if (map) {
      container.removeEventListener("mousemove", move, false);
      container.removeEventListener("mousewheel", mousewheel, false);
      container.removeEventListener("DOMMouseScroll", mousewheel, false);
      container = null;
      map.off("move", move);
    }
    if (map = x) {
      if (zoom == "mouse") map.on("move", move);
      container = map.container();
      container.addEventListener("mousemove", move, false);
      container.addEventListener("mousewheel", mousewheel, false);
      container.addEventListener("DOMMouseScroll", mousewheel, false);
    }
    return wheel;
  };

  return wheel;
};

// https://bugs.webkit.org/show_bug.cgi?id=40441
var bug40441 = /WebKit\/533/.test(navigator.userAgent) ? -1 : 0;
po.arrow = function() {
  var arrow = {},
      key = {left: 0, right: 0, up: 0, down: 0},
      last = 0,
      repeatTimer,
      repeatDelay = 250,
      repeatInterval = 50,
      speed = 16,
      map,
      parent;

  function keydown(e) {
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var now = Date.now(), dx = 0, dy = 0;
    switch (e.keyCode) {
      case 37: {
        if (!key.left) {
          last = now;
          key.left = 1;
          if (!key.right) dx = speed;
        }
        break;
      }
      case 39: {
        if (!key.right) {
          last = now;
          key.right = 1;
          if (!key.left) dx = -speed;
        }
        break;
      }
      case 38: {
        if (!key.up) {
          last = now;
          key.up = 1;
          if (!key.down) dy = speed;
        }
        break;
      }
      case 40: {
        if (!key.down) {
          last = now;
          key.down = 1;
          if (!key.up) dy = -speed;
        }
        break;
      }
      default: return;
    }
    if (dx || dy) map.panBy({x: dx, y: dy});
    if (!repeatTimer && (key.left | key.right | key.up | key.down)) {
      repeatTimer = setInterval(repeat, repeatInterval);
    }
    e.preventDefault();
  }

  function keyup(e) {
    last = Date.now();
    switch (e.keyCode) {
      case 37: key.left = 0; break;
      case 39: key.right = 0; break;
      case 38: key.up = 0; break;
      case 40: key.down = 0; break;
      default: return;
    }
    if (repeatTimer && !(key.left | key.right | key.up | key.down)) {
      repeatTimer = clearInterval(repeatTimer);
    }
    e.preventDefault();
  }

  function keypress(e) {
    switch (e.charCode) {
      case 45: case 95: map.zoom(Math.ceil(map.zoom()) - 1); break; // - _
      case 43: case 61: map.zoom(Math.floor(map.zoom()) + 1); break; // = +
      default: return;
    }
    e.preventDefault();
  }

  function repeat() {
    if (!map) return;
    if (Date.now() < last + repeatDelay) return;
    var dx = (key.left - key.right) * speed,
        dy = (key.up - key.down) * speed;
    if (dx || dy) map.panBy({x: dx, y: dy});
  }

  arrow.map = function(x) {
    if (!arguments.length) return map;
    if (map) {
      parent.removeEventListener("keypress", keypress, false);
      parent.removeEventListener("keydown", keydown, false);
      parent.removeEventListener("keyup", keyup, false);
      parent = null;
    }
    if (map = x) {
      parent = map.focusableParent();
      parent.addEventListener("keypress", keypress, false);
      parent.addEventListener("keydown", keydown, false);
      parent.addEventListener("keyup", keyup, false);
    }
    return arrow;
  };

  arrow.speed = function(x) {
    if (!arguments.length) return speed;
    speed = x;
    return arrow;
  };

  return arrow;
};
po.hash = function() {
  var hash = {},
      s0, // cached location.hash
      lat = 90 - 1e-8, // allowable latitude range
      map;

  var parser = function(s) {
    var args = s.split("/").map(Number);
    if (args.length < 3 || args.some(isNaN))
      move(); // replace bogus hash
    else {
      var size = map.size();
      map.zoomBy(args[0] - map.zoom(),
          {x: size.x / 2, y: size.y / 2},
          {lat: Math.min(lat, Math.max(-lat, args[1])), lon: args[2]});
    }
  };

  var formatter = function(map) {
    var center = map.center(),
        zoom = map.zoom(),
        precision = Math.max(0, Math.ceil(Math.log(zoom) / Math.LN2));
    return "#" + zoom.toFixed(2)
             + "/" + center.lat.toFixed(precision)
             + "/" + center.lon.toFixed(precision);
  };

  function move() {
    var s1 = formatter(map);
    if (s0 !== s1) location.replace(s0 = s1); // don't recenter the map!
  }

  function hashchange() {
    if (location.hash === s0) return; // ignore spurious hashchange events
    parser((s0 = location.hash).substring(1));
  }

  hash.map = function(x) {
    if (!arguments.length) return map;
    if (map) {
      map.off("move", move);
      window.removeEventListener("hashchange", hashchange, false);
    }
    if (map = x) {
      map.on("move", move);
      window.addEventListener("hashchange", hashchange, false);
      location.hash ? hashchange() : move();
    }
    return hash;
  };

  hash.parser = function(x) {
    if (!arguments.length) return parser;
    parser = x;
    return hash;
  };

  hash.formatter = function(x) {
    if (!arguments.length) return formatter;
    formatter = x;
    return hash;
  };

  return hash;
};
// Default map controls.
po.interact = function() {
  var interact = {},
      drag = po.drag(),
      wheel = po.wheel(),
      dblclick = po.dblclick(),
      arrow = po.arrow();

  interact.map = function(x) {
    drag.map(x);
    wheel.map(x);
    dblclick.map(x);
    arrow.map(x);
    return interact;
  };

  return interact;
};
po.compass = function() {
  var compass = {},
      g = po.svg("g"),
      ticks = {},
      r = 30,
      speed = 16,
      last = 0,
      repeatDelay = 250,
      repeatInterval = 50,
      position = "top-left", // top-left, top-right, bottom-left, bottom-right
      zoomStyle = "small", // none, small, big
      zoomContainer,
      panStyle = "small", // none, small
      panTimer,
      panDirection,
      panContainer,
      drag,
      dragRect = po.svg("rect"),
      map,
      container,
      window;

  g.setAttribute("class", "compass");
  dragRect.setAttribute("class", "back fore");
  dragRect.setAttribute("pointer-events", "none");
  dragRect.setAttribute("display", "none");

  function panStart(e) {
    g.setAttribute("class", "compass active");
    if (!panTimer) panTimer = setInterval(panRepeat, repeatInterval);
    if (panDirection) map.panBy(panDirection);
    last = Date.now();
    return cancel(e);
  }

  function panRepeat() {
    if (panDirection && (Date.now() > last + repeatDelay)) {
      map.panBy(panDirection);
    }
  }

  function mousedown(e) {
    if (e.shiftKey) {
      drag = {x0: map.mouse(e)};
      map.focusableParent().focus();
      return cancel(e);
    }
  }

  function mousemove(e) {
    if (!drag) return;
    drag.x1 = map.mouse(e);
    dragRect.setAttribute("x", Math.min(drag.x0.x, drag.x1.x));
    dragRect.setAttribute("y", Math.min(drag.x0.y, drag.x1.y));
    dragRect.setAttribute("width", Math.abs(drag.x0.x - drag.x1.x));
    dragRect.setAttribute("height", Math.abs(drag.x0.y - drag.x1.y));
    dragRect.removeAttribute("display");
  }

  function mouseup(e) {
    g.setAttribute("class", "compass");
    if (drag) {
      if (drag.x1) {
        map.extent([
          map.pointLocation({
            x: Math.min(drag.x0.x, drag.x1.x),
            y: Math.max(drag.x0.y, drag.x1.y)
          }),
          map.pointLocation({
            x: Math.max(drag.x0.x, drag.x1.x),
            y: Math.min(drag.x0.y, drag.x1.y)
          })
        ]);
        dragRect.setAttribute("display", "none");
      }
      drag = null;
    }
    if (panTimer) {
      clearInterval(panTimer);
      panTimer = 0;
    }
  }

  function panBy(x) {
    return function() {
      x ? this.setAttribute("class", "active") : this.removeAttribute("class");
      panDirection = x;
    };
  }

  function zoomBy(x) {
    return function(e) {
      g.setAttribute("class", "compass active");
      var z = map.zoom();
      map.zoom(x < 0 ? Math.ceil(z) - 1 : Math.floor(z) + 1);
      return cancel(e);
    };
  }

  function zoomTo(x) {
    return function(e) {
      map.zoom(x);
      return cancel(e);
    };
  }

  function zoomOver() {
    this.setAttribute("class", "active");
  }

  function zoomOut() {
    this.removeAttribute("class");
  }

  function cancel(e) {
    e.stopPropagation();
    e.preventDefault();
    return false;
  }

  function pan(by) {
    var x = Math.SQRT1_2 * r,
        y = r * .7,
        z = r * .2,
        g = po.svg("g"),
        dir = g.appendChild(po.svg("path")),
        chv = g.appendChild(po.svg("path"));
    dir.setAttribute("class", "direction");
    dir.setAttribute("pointer-events", "all");
    dir.setAttribute("d", "M0,0L" + x + "," + x + "A" + r + "," + r + " 0 0,1 " + -x + "," + x + "Z");
    chv.setAttribute("class", "chevron");
    chv.setAttribute("d", "M" + z + "," + (y - z) + "L0," + y + " " + -z + "," + (y - z));
    chv.setAttribute("pointer-events", "none");
    g.addEventListener("mousedown", panStart, false);
    g.addEventListener("mouseover", panBy(by), false);
    g.addEventListener("mouseout", panBy(null), false);
    g.addEventListener("dblclick", cancel, false);
    return g;
  }

  function zoom(by) {
    var x = r * .4,
        y = x / 2,
        g = po.svg("g"),
        back = g.appendChild(po.svg("path")),
        dire = g.appendChild(po.svg("path")),
        chev = g.appendChild(po.svg("path")),
        fore = g.appendChild(po.svg("path"));
    back.setAttribute("class", "back");
    back.setAttribute("d", "M" + -x + ",0V" + -x + "A" + x + "," + x + " 0 1,1 " + x + "," + -x + "V0Z");
    dire.setAttribute("class", "direction");
    dire.setAttribute("d", back.getAttribute("d"));
    chev.setAttribute("class", "chevron");
    chev.setAttribute("d", "M" + -y + "," + -x + "H" + y + (by > 0 ? "M0," + (-x - y) + "V" + -y : ""));
    fore.setAttribute("class", "fore");
    fore.setAttribute("fill", "none");
    fore.setAttribute("d", back.getAttribute("d"));
    g.addEventListener("mousedown", zoomBy(by), false);
    g.addEventListener("mouseover", zoomOver, false);
    g.addEventListener("mouseout", zoomOut, false);
    g.addEventListener("dblclick", cancel, false);
    return g;
  }

  function tick(i) {
    var x = r * .2,
        y = r * .4,
        g = po.svg("g"),
        back = g.appendChild(po.svg("rect")),
        chev = g.appendChild(po.svg("path"));
    back.setAttribute("pointer-events", "all");
    back.setAttribute("fill", "none");
    back.setAttribute("x", -y);
    back.setAttribute("y", -.75 * y);
    back.setAttribute("width", 2 * y);
    back.setAttribute("height", 1.5 * y);
    chev.setAttribute("class", "chevron");
    chev.setAttribute("d", "M" + -x + ",0H" + x);
    g.addEventListener("mousedown", zoomTo(i), false);
    g.addEventListener("dblclick", cancel, false);
    return g;
  }

  function move() {
    var x = r + 6, y = x, size = map.size();
    switch (position) {
      case "top-left": break;
      case "top-right": x = size.x - x; break;
      case "bottom-left": y = size.y - y; break;
      case "bottom-right": x = size.x - x; y = size.y - y; break;
    }
    var tx = "translate(" + x + "," + y + ")";
    if (panContainer) panContainer.setAttribute("transform", tx);
    if (zoomContainer) zoomContainer.setAttribute("transform", tx);
    for (var i in ticks) {
      i == map.zoom()
          ? ticks[i].setAttribute("class", "active")
          : ticks[i].removeAttribute("class");
    }
  }

  function draw() {
    while (g.lastChild) g.removeChild(g.lastChild);

    g.appendChild(dragRect);

    if (panStyle != "none") {
      panContainer = g.appendChild(po.svg("g"));
      panContainer.setAttribute("class", "pan");

      var back = panContainer.appendChild(po.svg("circle"));
      back.setAttribute("class", "back");
      back.setAttribute("r", r);

      var s = panContainer.appendChild(pan({x: 0, y: -speed}));
      s.setAttribute("transform", "rotate(0)");

      var w = panContainer.appendChild(pan({x: speed, y: 0}));
      w.setAttribute("transform", "rotate(90)");

      var n = panContainer.appendChild(pan({x: 0, y: speed}));
      n.setAttribute("transform", "rotate(180)");

      var e = panContainer.appendChild(pan({x: -speed, y: 0}));
      e.setAttribute("transform", "rotate(270)");

      var fore = panContainer.appendChild(po.svg("circle"));
      fore.setAttribute("fill", "none");
      fore.setAttribute("class", "fore");
      fore.setAttribute("r", r);
    } else {
      panContainer = null;
    }

    if (zoomStyle != "none") {
      zoomContainer = g.appendChild(po.svg("g"));
      zoomContainer.setAttribute("class", "zoom");

      var j = -.5;
      if (zoomStyle == "big") {
        ticks = {};
        for (var i = map.zoomRange()[0], j = 0; i <= map.zoomRange()[1]; i++, j++) {
          (ticks[i] = zoomContainer.appendChild(tick(i)))
              .setAttribute("transform", "translate(0," + (-(j + .75) * r * .4) + ")");
        }
      }

      var p = panStyle == "none" ? .4 : 2;
      zoomContainer.setAttribute("transform", "translate(0," + r * (/^top-/.test(position) ? (p + (j + .5) * .4) : -p) + ")");
      zoomContainer.appendChild(zoom(+1)).setAttribute("transform", "translate(0," + (-(j + .5) * r * .4) + ")");
      zoomContainer.appendChild(zoom(-1)).setAttribute("transform", "scale(-1)");
    } else {
      zoomContainer = null;
    }

    move();
  }

  compass.radius = function(x) {
    if (!arguments.length) return r;
    r = x;
    if (map) draw();
    return compass;
  };

  compass.speed = function(x) {
    if (!arguments.length) return r;
    speed = x;
    return compass;
  };

  compass.position = function(x) {
    if (!arguments.length) return position;
    position = x;
    if (map) draw();
    return compass;
  };

  compass.pan = function(x) {
    if (!arguments.length) return panStyle;
    panStyle = x;
    if (map) draw();
    return compass;
  };

  compass.zoom = function(x) {
    if (!arguments.length) return zoomStyle;
    zoomStyle = x;
    if (map) draw();
    return compass;
  };

  compass.map = function(x) {
    if (!arguments.length) return map;
    if (map) {
      container.removeEventListener("mousedown", mousedown, false);
      container.removeChild(g);
      container = null;
      window.removeEventListener("mousemove", mousemove, false);
      window.removeEventListener("mouseup", mouseup, false);
      window = null;
      map.off("move", move).off("resize", move);
    }
    if (map = x) {
      container = map.container();
      container.appendChild(g);
      container.addEventListener("mousedown", mousedown, false);
      window = container.ownerDocument.defaultView;
      window.addEventListener("mousemove", mousemove, false);
      window.addEventListener("mouseup", mouseup, false);
      map.on("move", move).on("resize", move);
      draw();
    }
    return compass;
  };

  return compass;
};
po.grid = function() {
  var grid = {},
      map,
      g = po.svg("g");

  g.setAttribute("class", "grid");

  function move(e) {
    var p,
        line = g.firstChild,
        size = map.size(),
        nw = map.pointLocation(zero),
        se = map.pointLocation(size),
        step = Math.pow(2, 4 - Math.round(map.zoom()));

    // Round to step.
    nw.lat = Math.floor(nw.lat / step) * step;
    nw.lon = Math.ceil(nw.lon / step) * step;

    // Longitude ticks.
    for (var x; (x = map.locationPoint(nw).x) <= size.x; nw.lon += step) {
      if (!line) line = g.appendChild(po.svg("line"));
      line.setAttribute("x1", x);
      line.setAttribute("x2", x);
      line.setAttribute("y1", 0);
      line.setAttribute("y2", size.y);
      line = line.nextSibling;
    }

    // Latitude ticks.
    for (var y; (y = map.locationPoint(nw).y) <= size.y; nw.lat -= step) {
      if (!line) line = g.appendChild(po.svg("line"));
      line.setAttribute("y1", y);
      line.setAttribute("y2", y);
      line.setAttribute("x1", 0);
      line.setAttribute("x2", size.x);
      line = line.nextSibling;
    }

    // Remove extra ticks.
    while (line) {
      var next = line.nextSibling;
      g.removeChild(line);
      line = next;
    }
  }

  grid.map = function(x) {
    if (!arguments.length) return map;
    if (map) {
      g.parentNode.removeChild(g);
      map.off("move", move).off("resize", move);
    }
    if (map = x) {
      map.on("move", move).on("resize", move);
      map.container().appendChild(g);
      map.dispatch({type: "move"});
    }
    return grid;
  };

  return grid;
};
po.stylist = function() {
  var attrs = [],
      styles = [],
      title;

  function stylist(e) {
    var ne = e.features.length,
        na = attrs.length,
        ns = styles.length,
        f, // feature
        d, // data
        o, // element
        x, // attr or style or title descriptor
        v, // attr or style or title value
        i,
        j;
    for (i = 0; i < ne; ++i) {
      if (!(o = (f = e.features[i]).element)) continue;
      d = f.data;
      for (j = 0; j < na; ++j) {
        v = (x = attrs[j]).value;
        if (typeof v === "function") v = v.call(null, d);
        v == null ? (x.name.local
            ? o.removeAttributeNS(x.name.space, x.name.local)
            : o.removeAttribute(x.name)) : (x.name.local
            ? o.setAttributeNS(x.name.space, x.name.local, v)
            : o.setAttribute(x.name, v));
      }
      for (j = 0; j < ns; ++j) {
        v = (x = styles[j]).value;
        if (typeof v === "function") v = v.call(null, d);
        v == null
            ? o.style.removeProperty(x.name)
            : o.style.setProperty(x.name, v, x.priority);
      }
      if (v = title) {
        if (typeof v === "function") v = v.call(null, d);
        while (o.lastChild) o.removeChild(o.lastChild);
        if (v != null) o.appendChild(po.svg("title")).appendChild(document.createTextNode(v));
      }
    }
  }

  stylist.attr = function(n, v) {
    attrs.push({name: ns(n), value: v});
    return stylist;
  };

  stylist.style = function(n, v, p) {
    styles.push({name: n, value: v, priority: arguments.length < 3 ? null : p});
    return stylist;
  };

  stylist.title = function(v) {
    title = v;
    return stylist;
  };

  return stylist;
};
})(org.polymaps);
// Wax Header
var wax = wax || {};

// Instantiate objects based on a JSON "record". The record must be a statement
// array in the following form:
//
//     [ "{verb} {subject}", arg0, arg1, arg2, ... argn ]
//
// Each record is processed from a passed `context` which starts from the
// global (ie. `window`) context if unspecified.
//
// - `@literal` Evaluate `subject` and return its value as a scalar. Useful for
//   referencing API constants, object properties or other values.
// - `@new` Call `subject` as a constructor with args `arg0 - argn`. The
//   newly created object will be the new context.
// - `@call` Call `subject` as a function with args `arg0 - argn` in the
//   global namespace. The return value will be the new context.
// - `@chain` Call `subject` as a method of the current context with args `arg0
//   - argn`. The return value will be the new context.
// - `@inject` Call `subject` as a method of the current context with args
//   `arg0 - argn`. The return value will *not* affect the context.
// - `@group` Treat `arg0 - argn` as a series of statement arrays that share a
//   context. Each statement will be called in serial and affect the context
//   for the next statement.
//
// Requirements:
//
// - Underscore.js
// - jQuery @TODO: only used for $.browser check. Could probably be removed.
//
// Usage:
//
//     var gmap = ['@new google.maps.Map',
//         ['@call document.getElementById', 'gmap'],
//         {
//             center: [ '@new google.maps.LatLng', 0, 0 ],
//             zoom: 2,
//             mapTypeId: [ '@literal google.maps.MapTypeId.ROADMAP' ]
//         }
//     ];
//     wax.Wax.reify(gmap);
wax.Wax = {
    getFunction: function(head, cur) {
        var ret = _.reduce(head.split('.'), function(part, segment) {
            return [part[1] || part[0], part[1] ? part[1][segment] : part[0][segment]];
        }, [cur || window, null]);
        return ret;
    },

    makeObject: function(fn_name, args) {
        var fn_obj = this.getFunction(fn_name),
            obj;
        args = args.length ? wax.Wax.reify(args) : [];

        // real browsers
        if (!$.browser.ie) {
            obj = Object.create(fn_obj[1].prototype);
            fn_obj[1].apply(obj, args);
        // lord have mercy on your soul.
        } else {
            switch(args.length) {
                case 0: obj = new fn_obj[1](); break;
                case 1: obj = new fn_obj[1](args[0]); break;
                case 2: obj = new fn_obj[1](args[0], args[1]); break;
                case 3: obj = new fn_obj[1](args[0], args[1], args[3]); break;
                case 4: obj = new fn_obj[1](args[0], args[1], args[3], args[4]); break;
                case 5: obj = new fn_obj[1](args[0], args[1], args[3], args[4], args[5]); break;
                default: break;
            }
        }
        return obj;
    },

    runFunction: function(fn_name, args, cur) {
        var fn_obj = this.getFunction(fn_name, cur);
        var fn_args = args.length ? wax.Wax.reify(args) : [];
        // @TODO: This is currently a stopgap measure that calls methods like
        // `foo.bar()` in the context of `foo`. It will probably be necessary
        // in the future to be able to call `foo.bar()` from other contexts.
        if (cur && fn_name.indexOf('.') === -1) {
            return fn_obj[1].apply(cur, fn_args);
        } else {
            return fn_obj[1].apply(fn_obj[0], fn_args);
        }
    },

    isKeyword: function(string) {
        return _.isString(string) && ([
            '@new',
            '@call',
            '@literal',
            '@chain',
            '@inject',
            '@group'
        ].indexOf(string.split(' ')[0]) !== -1);
    },

    altersContext: function(string) {
        return _.isString(string) && ([
            '@new',
            '@call',
            '@chain'
        ].indexOf(string.split(' ')[0]) !== -1);
    },

    parse: function(obj) {
        if (_.isArray(obj) && obj[0] && this.isKeyword(obj[0])) {
            return {
                verb: obj[0].split(' ')[0],
                subject: obj[0].split(' ')[1],
                object: obj.slice(1)
            };
        }
        return false;
    },

    reify: function(obj, context) {
        var i,
            fn = false,
            ret = null,
            child = null,
            statement = this.parse(obj);
        if (statement) {
            switch (statement.verb) {
            case '@group':
                for (i = 0; i < statement.object.length; i++) {
                    ret = wax.Wax.reify(statement.object[i], context);
                    child = this.parse(statement.object[i]);
                    if (child && this.altersContext(child.verb)) {
                        context = ret;
                    }
                }
                return context;
            case '@new':
                return this.makeObject(statement.subject, statement.object);
            case '@literal':
                fn = this.getFunction(statement.subject);
                return fn ? fn[1] : null;
            case '@inject':
                return this.runFunction(statement.subject, statement.object, context);
            case '@chain':
                return this.runFunction(statement.subject, statement.object, context);
            case '@call':
                return this.runFunction(statement.subject, statement.object, null);
            }
        } else {
            // Reify object/arrays.
            try {
                var keys = _.keys(obj);
                for (i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    obj[key] = wax.Wax.reify(obj[key], context);
                }
                return obj;
            // Unwrapped scalars
            } catch(e) {
                return obj;
            }
        }
    }
};
//     Underscore.js 1.1.4
//     (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore is freely distributable under the MIT license.
//     Portions of Underscore are inspired or borrowed from Prototype,
//     Oliver Steele's Functional, and John Resig's Micro-Templating.
//     For all details and documentation:
//     http://documentcloud.github.com/underscore

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var slice            = ArrayProto.slice,
      unshift          = ArrayProto.unshift,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) { return new wrapper(obj); };

  // Export the Underscore object for **CommonJS**, with backwards-compatibility
  // for the old `require()` API. If we're not in CommonJS, add `_` to the
  // global object.
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = _;
    _._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.1.4';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects implementing `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    var value;
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (_.isNumber(obj.length)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = memo !== void 0;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial && index === 0) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError("Reduce of empty array with no initial value");
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return memo !== void 0 ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var reversed = (_.isArray(obj) ? obj.slice() : _.toArray(obj)).reverse();
    return _.reduce(reversed, iterator, memo, context);
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    each(obj, function(value, index, list) {
      if (!iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator = iterator || _.identity;
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator = iterator || _.identity;
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result = iterator.call(context, value, index, list)) return breaker;
    });
    return result;
  };

  // Determine if a given value is included in the array or object using `===`.
  // Aliased as `contains`.
  _.include = _.contains = function(obj, target) {
    var found = false;
    if (obj == null) return found;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    any(obj, function(value) {
      if (found = value === target) return true;
    });
    return found;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    return _.map(obj, function(value) {
      return (method ? value[method] : value).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Return the maximum element or (element-based computation).
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj)) return Math.max.apply(Math, obj);
    var result = {computed : -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj)) return Math.min.apply(Math, obj);
    var result = {computed : Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria, b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }), 'value');
  };

  // Use a comparator function to figure out at what index an object should
  // be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator) {
    iterator = iterator || _.identity;
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >> 1;
      iterator(array[mid]) < iterator(obj) ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(iterable) {
    if (!iterable)                return [];
    if (iterable.toArray)         return iterable.toArray();
    if (_.isArray(iterable))      return iterable;
    if (_.isArguments(iterable))  return slice.call(iterable);
    return _.values(iterable);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    return _.toArray(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head`. The **guard** check allows it to work
  // with `_.map`.
  _.first = _.head = function(array, n, guard) {
    return n && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the first entry of the array. Aliased as `tail`.
  // Especially useful on the arguments object. Passing an **index** will return
  // the rest of the values in the array from that index onward. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = function(array, index, guard) {
    return slice.call(array, _.isUndefined(index) || guard ? 1 : index);
  };

  // Get the last element of an array.
  _.last = function(array) {
    return array[array.length - 1];
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, function(value){ return !!value; });
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array) {
    return _.reduce(array, function(memo, value) {
      if (_.isArray(value)) return memo.concat(_.flatten(value));
      memo[memo.length] = value;
      return memo;
    }, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    var values = slice.call(arguments, 1);
    return _.filter(array, function(value){ return !_.include(values, value); });
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted) {
    return _.reduce(array, function(memo, el, i) {
      if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el))) memo[memo.length] = el;
      return memo;
    }, []);
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersect = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) results[i] = _.pluck(args, "" + i);
    return results;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    if (isSorted) {
      var i = _.sortedIndex(array, item);
      return array[i] === item ? i : -1;
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);
    for (var i = 0, l = array.length; i < l; i++) if (array[i] === item) return i;
    return -1;
  };


  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item) {
    if (array == null) return -1;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return array.lastIndexOf(item);
    var i = array.length;
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    var args  = slice.call(arguments),
        solo  = args.length <= 1,
        start = solo ? 0 : args[0],
        stop  = solo ? args[0] : args[1],
        step  = args[2] || 1,
        len   = Math.max(Math.ceil((stop - start) / step), 0),
        idx   = 0,
        range = new Array(len);
    while (idx < len) {
      range[idx++] = start;
      start += step;
    }
    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Binding with arguments is also known as `curry`.
  _.bind = function(func, obj) {
    var args = slice.call(arguments, 2);
    return function() {
      return func.apply(obj || {}, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length == 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher = hasher || _.identity;
    return function() {
      var key = hasher.apply(this, arguments);
      return key in memo ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(func, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Internal function used to implement `_.throttle` and `_.debounce`.
  var limit = function(func, wait, debounce) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var throttler = function() {
        timeout = null;
        func.apply(context, args);
      };
      if (debounce) clearTimeout(timeout);
      if (debounce || !timeout) timeout = setTimeout(throttler, wait);
    };
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    return limit(func, wait, false);
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds.
  _.debounce = function(func, wait) {
    return limit(func, wait, true);
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func].concat(slice.call(arguments));
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = slice.call(arguments);
    return function() {
      var args = slice.call(arguments);
      for (var i=funcs.length-1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (_.isArray(obj)) return _.range(0, obj.length);
    var keys = [];
    for (var key in obj) if (hasOwnProperty.call(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    return _.map(obj, _.identity);
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    return _.filter(_.keys(obj), function(key){ return _.isFunction(obj[key]); }).sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) obj[prop] = source[prop];
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    // Check object identity.
    if (a === b) return true;
    // Different types?
    var atype = typeof(a), btype = typeof(b);
    if (atype != btype) return false;
    // Basic equality test (watch out for coercions).
    if (a == b) return true;
    // One is falsy and the other truthy.
    if ((!a && b) || (a && !b)) return false;
    // Unwrap any wrapped objects.
    if (a._chain) a = a._wrapped;
    if (b._chain) b = b._wrapped;
    // One of them implements an isEqual()?
    if (a.isEqual) return a.isEqual(b);
    // Check dates' integer values.
    if (_.isDate(a) && _.isDate(b)) return a.getTime() === b.getTime();
    // Both are NaN?
    if (_.isNaN(a) && _.isNaN(b)) return false;
    // Compare regular expressions.
    if (_.isRegExp(a) && _.isRegExp(b))
      return a.source     === b.source &&
             a.global     === b.global &&
             a.ignoreCase === b.ignoreCase &&
             a.multiline  === b.multiline;
    // If a is not an object by this point, we can't handle it.
    if (atype !== 'object') return false;
    // Check for different array lengths before comparing contents.
    if (a.length && (a.length !== b.length)) return false;
    // Nothing else worked, deep compare the contents.
    var aKeys = _.keys(a), bKeys = _.keys(b);
    // Different object sizes?
    if (aKeys.length != bKeys.length) return false;
    // Recursive comparison of contents.
    for (var key in a) if (!(key in b) || !_.isEqual(a[key], b[key])) return false;
    return true;
  };

  // Is a given array or object empty?
  _.isEmpty = function(obj) {
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (hasOwnProperty.call(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType == 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an arguments object?
  _.isArguments = function(obj) {
    return !!(obj && hasOwnProperty.call(obj, 'callee'));
  };

  // Is a given value a function?
  _.isFunction = function(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  };

  // Is a given value a string?
  _.isString = function(obj) {
    return !!(obj === '' || (obj && obj.charCodeAt && obj.substr));
  };

  // Is a given value a number?
  _.isNumber = function(obj) {
    return !!(obj === 0 || (obj && obj.toExponential && obj.toFixed));
  };

  // Is the given value `NaN`? `NaN` happens to be the only value in JavaScript
  // that does not equal itself.
  _.isNaN = function(obj) {
    return obj !== obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false;
  };

  // Is a given value a date?
  _.isDate = function(obj) {
    return !!(obj && obj.getTimezoneOffset && obj.setUTCFullYear);
  };

  // Is the given value a regular expression?
  _.isRegExp = function(obj) {
    return !!(obj && obj.test && obj.exec && (obj.ignoreCase || obj.ignoreCase === false));
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function (n, iterator, context) {
    for (var i = 0; i < n; i++) iterator.call(context, i);
  };

  // Add your own custom functions to the Underscore object, ensuring that
  // they're correctly added to the OOP wrapper as well.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      addToWrapper(name, _[name] = obj[name]);
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = idCounter++;
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(str, data) {
    var c  = _.templateSettings;
    var tmpl = 'var __p=[],print=function(){__p.push.apply(__p,arguments);};' +
      'with(obj||{}){__p.push(\'' +
      str.replace(/\\/g, '\\\\')
         .replace(/'/g, "\\'")
         .replace(c.interpolate, function(match, code) {
           return "'," + code.replace(/\\'/g, "'") + ",'";
         })
         .replace(c.evaluate || null, function(match, code) {
           return "');" + code.replace(/\\'/g, "'")
                              .replace(/[\r\n\t]/g, ' ') + "__p.push('";
         })
         .replace(/\r/g, '\\r')
         .replace(/\n/g, '\\n')
         .replace(/\t/g, '\\t')
         + "');}return __p.join('');";
    var func = new Function('obj', tmpl);
    return data ? func(data) : func;
  };

  // The OOP Wrapper
  // ---------------

  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.
  var wrapper = function(obj) { this._wrapped = obj; };

  // Expose `wrapper.prototype` as `_.prototype`
  _.prototype = wrapper.prototype;

  // Helper function to continue chaining intermediate results.
  var result = function(obj, chain) {
    return chain ? _(obj).chain() : obj;
  };

  // A method to easily add functions to the OOP wrapper.
  var addToWrapper = function(name, func) {
    wrapper.prototype[name] = function() {
      var args = slice.call(arguments);
      unshift.call(args, this._wrapped);
      return result(func.apply(_, args), this._chain);
    };
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      method.apply(this._wrapped, arguments);
      return result(this._wrapped, this._chain);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      return result(method.apply(this._wrapped, arguments), this._chain);
    };
  });

  // Start chaining a wrapped Underscore object.
  wrapper.prototype.chain = function() {
    this._chain = true;
    return this;
  };

  // Extracts the result from a wrapped and chained object.
  wrapper.prototype.value = function() {
    return this._wrapped;
  };

})();
// Wax GridUtil
// ------------

// Wax header
var wax = wax || {};

// Request
// -------
// Request data cache. `callback(data)` where `data` is the response data.
wax.request = {
    cache: {},
    locks: {},
    promises: {},
    get: function(url, callback) {
        // Cache hit.
        if (this.cache[url]) {
            return callback(this.cache[url]);
        // Cache miss.
        } else {
            this.promises[url] = this.promises[url] || [];
            this.promises[url].push(callback);
            // Lock hit.
            if (this.locks[url]) return;
            // Request.
            var that = this;
            this.locks[url] = true;
            $.jsonp({
                url: url,
                context: this,
                callback: 'grid',
                callbackParameter: 'callback',
                success: function(data) {
                    that.locks[url] = false;
                    that.cache[url] = data;
                    for (var i = 0; i < that.promises[url].length; i++) {
                        that.promises[url][i](that.cache[url]);
                    }
                },
                error: function() {
                    that.locks[url] = false;
                    that.cache[url] = null;
                    for (var i = 0; i < that.promises[url].length; i++) {
                        that.promises[url][i](that.cache[url]);
                    }
                }
            });
        }
    }
}

// GridInstance
// ------------
// GridInstances are queryable, fully-formed
// objects for acquiring features from events.
wax.GridInstance = function (grid_tile, formatter) {
    this.grid_tile = grid_tile;
    this.formatter = formatter;
    this.tileRes = 4;
}

// Resolve the UTF-8 encoding stored in grids to simple
// number values.
// See the [utfgrid section of the mbtiles spec](https://github.com/mapbox/mbtiles-spec/blob/master/1.1/utfgrid.md) 
// for details.
wax.GridInstance.prototype.resolveCode = function(key) {
  (key >= 93) && key--;
  (key >= 35) && key--;
  key -= 32;
  return key;
};

wax.GridInstance.prototype.getFeature = function(x, y, tile_element, options) {
  if (Math.floor((y - $(tile_element).offset().top) / this.tileRes) > 256 ||
    Math.floor((x - $(tile_element).offset().left) / this.tileRes) > 256) return;


  var key = this.grid_tile.grid[
     Math.floor((y - $(tile_element).offset().top) / this.tileRes)
  ].charCodeAt(
     Math.floor((x - $(tile_element).offset().left) / this.tileRes)
  );

  key = this.resolveCode(key);

  // If this layers formatter hasn't been loaded yet,
  // download and load it now.
  if (this.grid_tile.keys[key]) {
    return this.formatter.format(
      options,
      this.grid_tile.data[this.grid_tile.keys[key]]
    );
  }
};

// GridManager
// -----------
// Generally one GridManager will be used per map.
wax.GridManager = function () {
    this.grid_tiles = {};
    this.key_maps = {};
    this.formatters = {};
    this.locks = {};
}

// Get a grid - calls `callback` with either a `GridInstance`
// object or false. Behind the scenes, this calls `getFormatter`
// and gets grid data, and tries to avoid re-downloading either.
wax.GridManager.prototype.getGrid = function(url, callback) {
    var that = this;
    that.getFormatter(that.formatterUrl(url), function(f) {
        if (!f) return callback(false);

        wax.request.get(that.tileDataUrl(url), function(t) {
            callback(new wax.GridInstance(t, f));
        });
    });
};

// Create a cross-browser event object
wax.GridManager.prototype.makeEvent = function(evt) {
  return {
    target: evt.target || evt.srcElement,
    pX: evt.pageX || evt.clientX,
    pY: evt.pageY || evt.clientY,
    evt: evt
  };
};

// Simplistically derive the URL of the grid data endpoint from a tile URL
wax.GridManager.prototype.tileDataUrl = function(url) {
  return url.replace(/(.png|.jpg|.jpeg)(\d*)/, '.grid.json');
};

// Simplistically derive the URL of the formatter function from a tile URL
wax.GridManager.prototype.formatterUrl = function(url) {
  return url.replace(/\d+\/\d+\/\d+\.\w+/, 'layer.json');
};

// Request and save a formatter, passed to `callback()` when finished.
wax.GridManager.prototype.getFormatter = function(url, callback) {
  var that = this;
  // Formatter is cached.
  if (typeof this.formatters[url] !== 'undefined') {
    callback(this.formatters[url]);
    return;
  } else {
    wax.request.get(url, function(data) {
        if (data && data.formatter) {
            that.formatters[url] = new wax.Formatter(data);
        } else {
            that.formatters[url] = false;
        }
        callback(that.formatters[url]);
    });
  }
};

// Formatter
// ---------
wax.Formatter = function(obj) {
    // Prevent against just any input being used.
    if (obj.formatter && typeof obj.formatter === 'string') {
        try {
            // Ugly, dangerous use of eval.
            eval('this.f = ' + obj.formatter);
        } catch (e) {
            // Syntax errors in formatter
            console && console.log(e);
        }
    } else {
        this.f = function() {};
    }
}

// Wrap the given formatter function in order to
// catch exceptions that it may throw.
wax.Formatter.prototype.format = function(options, data) {
    try {
        return this.f(options, data);
    } catch (e) {
        console && console.log(e);
    }
};
// Wax Legend
// ----------

// Wax header
var wax = wax || {};

wax.Legend = function(context, container) {
    (!container) && (container = $('<div class="wax-legends"></div>'));
    this.context = context;
    this.container = container;
    this.legends = {};
    $(this.context).append(this.container);
};

wax.Legend.prototype.render = function(urls) {
    this.container.empty();

    var that = this;
    var render = function(content) {
        if (!content) {
            that.legends[url] = false;
        } else if (that.legends[url]) {
            that.legends[url].show();
        } else {
            that.legends[url] = $("<div class='wax-legend'></div>").append(content);
            that.container.append(that.legends[url]);
        }
    };
    for (var i = 0; i < urls.length; i++) {
        var url = this.legendUrl(urls[i]);
        wax.request.get(url, function(data) {
            (data && data.legend) && (render(data.legend));
        });
    }
};

wax.Legend.prototype.legendUrl = function(url) {
    return url.replace(/\d+\/\d+\/\d+\.\w+/, 'layer.json');
};

// Wax GridUtil
// ------------

// Wax header
var wax = wax || {};
wax.tooltip = {};

// Get the active tooltip for a layer or create a new one if no tooltip exists.
// Hide any tooltips on layers underneath this one.
wax.tooltip.getToolTip = function(feature, context, index) {
    var tooltip = $(context).children('div.wax-tooltip-' +
        index +
        ':not(.removed)');
    if (tooltip.size() === 0) {
        tooltip = $("<div class='wax-tooltip wax-tooltip-" +
            index +
            "'>" +
            "</div>").html(feature);
        $(context).append(tooltip);
    }
    for (var i = (index - 1); i > 0; i--) {
        var fallback = $('div.wax-tooltip-' + i + ':not(.removed)');
        if (fallback.size() > 0) {
            fallback.addClass('hidden').hide();
        }
    }
    return tooltip;
};

// Expand a tooltip to be a "popup". Suspends all other tooltips from being
// shown until this popup is closed or another popup is opened.
wax.tooltip.click = function(feature, context, index) {
    var tooltip = wax.tooltip.getToolTip(feature, context, index);
    var close = $('<a href="#close" class="close">Close</a>');
    close.click(function() {
        tooltip
            .addClass('removed')
            .fadeOut('fast', function() { $(this).remove(); });
        return false;
    });
    tooltip
        .addClass('wax-popup')
        .html(feature)
        .append(close);
};

// Show a tooltip.
wax.tooltip.select = function(feature, context, layer_id) {
    if (!feature) return;

    wax.tooltip.getToolTip(feature, context, layer_id);
    $(context).css('cursor', 'pointer');
    $('div', context).css('cursor', 'pointer');
};

// Hide all tooltips on this layer and show the first hidden tooltip on the
// highest layer underneath if found.
wax.tooltip.unselect = function(feature, context, layer_id) {
    $(context)
        .css('cursor', 'default')
        .children('div.wax-tooltip-' + layer_id + ':not(.wax-popup)')
        .addClass('removed')
        .fadeOut('fast', function() { $(this).remove(); });
    $('div', context).css('cursor', 'default');

    $(context)
        .children('div.wax-tooltip:first')
        .removeClass('hidden')
        .show();
};
// Wax header
var wax = wax || {};
wax.ol = wax.ol || {};

// An interaction toolkit for tiles that implement the
// [MBTiles UTFGrid spec](https://github.com/mapbox/mbtiles-spec)
wax.ol.Interaction =
    OpenLayers.Class(OpenLayers.Control, {
    feature: {},
    handlerOptions: null,
    handlers: null,

    gm: new wax.GridManager(),

    initialize: function(options) {
      options = options || {};
      options.handlerOptions = options.handlerOptions || {};
      OpenLayers.Control.prototype.initialize.apply(this, [options || {}]);

      this.handlers = {
        hover: new OpenLayers.Handler.Hover(
          this, {
            move: this.cancelHover,
            pause: this.getInfoForHover
          },
          // Be nice to IE, making it determine interaction
          // every 40ms instead of 10ms
          OpenLayers.Util.extend(this.handlerOptions.hover || {}, {
            delay: ($.browser.msie) ? 40 : 10
          })
        ),
        click: new OpenLayers.Handler.Click(
          this, {
            click: this.getInfoForClick
        })
      };

      this.callbacks = {
          out:   wax.tooltip.unselect,
          over:  wax.tooltip.select,
          click: wax.tooltip.click
      };
    },

    // Add handlers to the map
    setMap: function(map) {
      this.handlers.hover.setMap(map);
      this.handlers.click.setMap(map);
      OpenLayers.Control.prototype.setMap.apply(this, arguments);
      this.activate();
    },

    // boilerplate
    activate: function() {
      if (!this.active) {
        this.handlers.hover.activate();
        this.handlers.click.activate();
      }
      return OpenLayers.Control.prototype.activate.apply(
        this, arguments
      );
    },

    // boilerplate
    deactivate: function() {
      return OpenLayers.Control.prototype.deactivate.apply(
        this, arguments
      );
    },

    // Get an Array of the stack of tiles under the mouse.
    // This operates with pixels only, since there's no way
    // to bubble through an element which is sitting on the map
    // (like an SVG overlay).
    //
    // If no tiles are under the mouse, returns an empty array.
    getTileStack: function(layers, sevt) {
      var found = false;
      var gridpos = {};
      var tiles = [];
      // All of these loops break once found is made true.
      for (var x = 0; x < layers[0].grid.length && !found; x++) {
        for (var y = 0; y < layers[0].grid[x].length && !found; y++) {
          var divpos = $(layers[0].grid[x][y].imgDiv).offset();
          found = divpos &&
            ((divpos.top < sevt.pY) &&
            ((divpos.top + 256) > sevt.pY) &&
            (divpos.left < sevt.pX) &&
            ((divpos.left + 256) > sevt.pX));
          if (found) {
            gridpos = {
                x: x,
                y: y
            };
          }
        }
      }
      if (found) {
        for (var j = 0; j < layers.length; j++) {
          layers[j].grid[gridpos.x] && layers[j].grid[gridpos.x][gridpos.y] &&
            tiles.push(layers[j].grid[gridpos.x][gridpos.y]);
        }
      }
      return tiles;
    },

    // Get all interactable layers
    viableLayers: function() {
      if (this._viableLayers) return this._viableLayers;
      return this._viableLayers = $(this.map.layers).filter(
        function(i) {
          // TODO: make better indication of whether
          // this is an interactive layer
          return (this.map.layers[i].visibility === true) &&
            (this.map.layers[i].CLASS_NAME === 'OpenLayers.Layer.TMS');
        }
      );
    },

    // React to a click mouse event
    // This is the `pause` handler attached to the map.
    getInfoForClick: function(evt) {
      var options = { format: 'full' };
      var layers = this.viableLayers();
      var sevt = this.gm.makeEvent(evt);
      var tiles = this.getTileStack(this.viableLayers(), sevt);
      var feature = null,
          g = null;
      this.target = sevt.target;
      var that = this;

      for (var t = 0; t < tiles.length; t++) {
        this.gm.getGrid(tiles[t].url, function(g) {
          if (!g) return;
          var feature = g.getFeature(sevt.pX, sevt.pY, tiles[t].imgDiv, options);
          feature && that.callbacks['click'](feature, tiles[t].layer.map.viewPortDiv, t);
        });
      }
    },

    // React to a hover mouse event, by finding all tiles,
    // finding features, and calling `this.callbacks[]`
    // This is the `click` handler attached to the map.
    getInfoForHover: function(evt) {
      var options = { format: 'teaser' };
      var layers = this.viableLayers();
      var sevt = this.gm.makeEvent(evt);
      var tiles = this.getTileStack(this.viableLayers(), sevt);
      var feature = null,
          g = null;
      this.target = sevt.target;
      var that = this;

      for (var t = 0; t < tiles.length; t++) {
        // This features has already been loaded, or
        // is currently being requested.
        this.gm.getGrid(tiles[t].url, function(g) {
            if (g && tiles[t]) {
                var feature = g.getFeature(sevt.pX, sevt.pY, tiles[t].imgDiv, options);
                if (feature) {
                  if (!tiles[t]) return;
                  if (feature && that.feature[t] !== feature) {
                    that.feature[t] = feature;
                    that.callbacks['out'] (feature, tiles[t].layer.map.viewPortDiv, t);
                    that.callbacks['over'](feature, tiles[t].layer.map.viewPortDiv, t);
                  } else if (!feature) {
                    that.feature[t] = null;
                    that.callbacks['out'](feature, tiles[t].layer.map.viewPortDiv, t);
                  }
                } else {
                  // Request this feature
                  // TODO(tmcw) re-add layer
                  that.feature[t] = null;
                  if (tiles[t]) {
                    that.callbacks['out']({}, tiles[t].layer.map.viewPortDiv, t);
                  } else {
                    that.callbacks['out']({}, false, t);
                  }
               }
            }
        });
      }
    },
    CLASS_NAME: 'wax.ol.Interaction'
});
// Wax: Legend Control
// -------------------

// Wax header
var wax = wax || {};
wax.ol = wax.ol || {};

wax.ol.Legend = OpenLayers.Class(OpenLayers.Control, {
    CLASS_NAME: 'wax.ol.Legend',
    legend: null,
    options: null,

    initialize: function(options) {
        this.options = options || {};
        OpenLayers.Control.prototype.initialize.apply(this, [options || {}]);
    },

    activate: function() {
        this.legend = new wax.Legend(this.map.viewPortDiv, this.options.container);
        return OpenLayers.Control.prototype.activate.apply(this, arguments);
    },

    setMap: function(map) {
        OpenLayers.Control.prototype.setMap.apply(this, arguments);
        this.activate();
        this.map.events.on({
            "addlayer": this.setLegend,
            "changelayer": this.setLegend,
            "removelayer": this.setLegend,
            "changebaselayer": this.setLegend,
            scope: this
        });
    },

    setLegend: function() {
        var urls = [];
        for (var i = 0; i < this.map.layers.length; i++) {
            var layer = this.map.layers[i],
                url = layer.getURL(new OpenLayers.Bounds());
            (layer.visibility) && urls.push(url);
        }
        this.legend.render(urls);
    }
});

