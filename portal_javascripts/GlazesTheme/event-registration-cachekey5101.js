
var __dEcOdE=function(a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d["$"+e(c)]=k[c]||e(c);k=[function(e){r=d["$"+e];return r!=undefined?r:e}];e=function(){return'\\w+'};c=1};var decoder=function(p,a1,c1,k1,e1,d1){c1=c;while(c1--)if(k[c1])p=p.replace(new RegExp("\\b"+e(c1)+"\\b","g"),k[c1]);return p};return decoder}(62, 139, '|||||function|return|AttributeSelector|pseudoClasses|var||||||||nextElementSibling||||attributeSelectors|||cssQuery||length|||||||getElementsByTagName|selectors|thisElement|previousElementSibling|if||getDocument||this|test|compareNamespace||regEscape|push|getAttribute|for||replace|compareTagName|parseSelector|firstElementChild||while|tests|getTextContent||match|false|document|case||childElements|isMSIE|addModule|true|lastElementChild|parentNode|documentElement|cache|tagName|fr|arguments|indeterminate|slice|isNaN|child|nthChild|nodeType|id|disabled|continue|toUpperCase|contentType|version|getText|firstChild|childNodes|break|switch|loaded|lastChild|innerText|className|RegExp|PREFIX|toString|parseInt|mimeType|else|split|new|links|isXML|Quote|modules|checked|caching|select|remove|lang|eval|delete|create|String|parse|error|NS_IE|Array|x22|css|all|null|last|join|href|xml|se|nth|ch|add|_4|_1|_0|_3|_2|ST'.split('|'), 0, {});

/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - event-registration.js - */
// http://glazes.org/portal_javascripts/event-registration.js?original=1
window.onDOMLoadEvents=new Array();window.DOMContentLoadedInitDone=false;
function addDOMLoadEvent(listener){window.onDOMLoadEvents[window.onDOMLoadEvents.length]=listener}
function DOMContentLoadedInit(){if(window.DOMContentLoadedInitDone) return;window.DOMContentLoadedInitDone=true;var exceptions=new Array();for(var i=0;i<window.onDOMLoadEvents.length;i++){var func=window.onDOMLoadEvents[i];try{func()} catch(e){exceptions[exceptions.length]=e}}
for(var i=0;i<exceptions.length;i++){throw exceptions[i]}}
function DOMContentLoadedScheduler(){if(window.DOMContentLoadedInitDone) return true;if(/KHTML|WebKit/i.test(navigator.userAgent)){if(/loaded|complete/.test(document.readyState)){DOMContentLoadedInit()} else{setTimeout("DOMContentLoadedScheduler()",250)}} else{setTimeout("DOMContentLoadedScheduler()",250)}
return true}
setTimeout("DOMContentLoadedScheduler()",250);if(window.addEventListener){window.addEventListener("load",DOMContentLoadedInit,false);document.addEventListener("DOMContentLoaded",DOMContentLoadedInit,false)} else if(window.attachEvent){window.attachEvent("onload",DOMContentLoadedInit)} else{var _dummy=function(){var $old_onload=window.onload;window.onload=function(e){DOMContentLoadedInit();$old_onload()}}}
/*@cc_on @*/
/*@if (@_win32)
{var proto="src='javascript:void(0)'";if(location.protocol=="https:") proto="src=//0";document.write("<scr"+"ipt id=__ie_onload defer "+proto+"><\/scr"+"ipt>");var script=document.getElementById("__ie_onload");script.onreadystatechange=function(){if(this.readyState=="complete"){DOMContentLoadedInit()}}};/*@end @*/


/* - register_function.js - */
// http://glazes.org/portal_javascripts/register_function.js?original=1
var bugRiddenCrashPronePieceOfJunk=(navigator.userAgent.indexOf('MSIE 5')!=-1&&navigator.userAgent.indexOf('Mac')!=-1)
var W3CDOM=(!bugRiddenCrashPronePieceOfJunk&&typeof document.getElementsByTagName!='undefined'&&typeof document.createElement!='undefined');var registerEventListener=undefined;if(typeof addEvent!='undefined'){registerEventListener=function(elem,event,func){addEvent(elem,event,func);return true}} else if(window.addEventListener){registerEventListener=function(elem,event,func){elem.addEventListener(event,func,false);return true}} else if(window.attachEvent){registerEventListener=function(elem,event,func){var result=elem.attachEvent("on"+event,func);return result}} else{registerEventListener=function(elem,event,func){return false}}
var unRegisterEventListener=undefined;if(typeof removeEvent!='undefined'){unRegisterEventListener=function(elem,event,func){removeEvent(element,event,func);return true}} else if(window.removeEventListener){unRegisterEventListener=function(elem,event,func){elem.removeEventListener(event,func,false);return true}} else if(window.detachEvent){unRegisterEventListener=function(elem,event,func){var result=elem.detachEvent("on"+event,func);return result}} else{unRegisterEventListener=function(elem,event,func){return false}}
var registerPloneFunction=undefined;if(typeof addDOMLoadEvent!='undefined'){registerPloneFunction=function(func){addDOMLoadEvent(func)}} else{registerPloneFunction=function(func){registerEventListener(window,"load",func)}}
function getContentArea(){if(W3CDOM){var node=document.getElementById('content');if(!node){node=document.getElementById('region-content')}
return node}}


/* - cssQuery.js - */
// http://glazes.org/portal_javascripts/cssQuery.js?original=1
eval(__dEcOdE('9 o=5(){9 1o="2.0.2";9 C=/\\s*,\\s*/;9 o=5(s,1b){try{9 m=[];9 u=1c.callee.1L&&!1b;9 b=(1b)?(1b.constructor==1W)?1b:[1b]:[Z];9 25=Q(s).1E(C),i;M(i=0;i<25.q;i++){s=29(25[i]);B(13&&s.1e(0,3).22("")==" *#"){s=s.1e(2);1b=2d([],b,s[1])}1D 1b=b;9 j=0,t,f,a,c="";T(j<s.q){t=s[j++];f=s[j++];c+=t+f;a="";B(s[j]=="("){T(s[j++]!=")"&&j<s.q){a+=s[j]}a=a.1e(0,-1);c+="("+a+")"}B(t==" "&&f=="*"&&s[j]=="#")1l;1b=(u&&19[c])?19[c]:1M(1b,t,f,a);B(u)19[c]=1b}m=m.concat(1b)}1Q o.1U;6 m}catch(e){o.1U=e;6 []}};o.1A=5(){6 "5 o() {\\n  [1o "+1o+"]\\n}"};9 19={};o.1L=Y;o.clearCache=5(s){B(s){s=29(s).22("");1Q 19[s]}1D 19={}};9 1J={};9 1u=Y;o.14=5(n,s){B(1u)1P("$script="+1S(s));1J[n]=1F s()};o.valueOf=5(c){6 c?1P(c):F};9 y={};9 8={};9 7={X:/\\[([\\w-]+(\\|[\\w-]+)?)\\s*(\\W?=)?\\s*([^\\]]*)\\]/};9 l=[];y[" "]=5(r,f,t,n){9 e,i,j;M(i=0;i<f.q;i++){9 s=x(f[i],t,n);M(j=0;(e=s[j]);j++){B(z(e)&&H(e,n))r.K(e)}}};y["#"]=5(r,f,i){9 e,j;B(f.q==1&&f[0]==Z){9 n=Z.getElementById(i);B(n)r.K(n)}1D{M(j=0;(e=f[j]);j++)B(e.1j==i){r.K(e);1s}}};y["."]=5(r,f,c){c=1F 1y("(^|\\\\s)"+c+"(\\\\s|$)");9 e,i;M(i=0;(e=f[i]);i++)B(c.G(e.1x))r.K(e)};y[":"]=5(r,f,p,a){9 t=8[p],e,i;B(t)M(i=0;(e=f[i]);i++)B(t(e,a))r.K(e)};8["link"]=5(e){9 d=D(e);B(d.1G)M(9 i=0;i<d.1G.q;i++){B(d.1G[i]==e)6 15}};8["visited"]=5(e){};9 z=5(e){6(e&&e.1i==1&&e.1a!="!")?e:20};9 A=5(e){T(e&&(e=e.previousSibling)&&!z(e))1l;6 e};9 h=5(e){T(e&&(e=e.nextSibling)&&!z(e))1l;6 e};9 R=5(e){6 z(e.1q)||h(e.1q)};9 16=5(e){6 z(e.1v)||A(e.1v)};9 12=5(e){9 c=[];e=R(e);T(e){c.K(e);e=h(e)}6 c};9 13=15;9 1H=5(e){9 d=D(e);6(typeof d.1C=="unknown")?/\\.24$/i.G(d.URL):Boolean(d.1C=="XML Document")};9 D=5(e){6 e.ownerDocument||e.Z};9 x=5(e,t){6(t=="*"&&e.1Z)?e.1Z:e.x(t)};9 P=5(e,t,n){B(t=="*")6 z(e);B(!H(e,n))6 Y;B(!1H(e))6 e.1a.1m()==t.1m();6 e.1a==t};9 H=5(e,n){6!n||(n=="*")||(e.scopeName==n)};9 V=5(e){6 e.1w};5 2d(r,f,1j){9 m,i,j;M(i=0;i<f.q;i++){B(m=f[i].1Z.item(1j)){B(m.1j==1j)r.K(m);1D B(m.q!=20){M(j=0;j<m.q;j++){B(m[j].1j==1j)r.K(m[j])}}}}6 r};B(![].K)1W.prototype.K=5(){M(9 i=0;i<1c.q;i++){F[F.q]=1c[i]}6 F.q};9 N=/\\|/;5 1M(1b,t,f,a){B(N.G(f)){f=f.1E(N);a=f[0];f=f[1]}9 r=[];B(y[t]){y[t](r,1b,f,a)}6 r};9 S=/^[^\\s>+~]/;9 2e=/[\\s#.:>+~()@]|[^\\s#.:>+~()@]+/g;5 29(s){B(S.G(s))s=" "+s;6 s.X(2e)||[]};9 W=/\\s*([\\s>+~(),]|^|$)\\s*/g;9 I=/([\\s>+~,]|[^(]\\+|^)([#.:@])/g;9 Q=5(s){6 s.O(W,"$1").O(I,"$1*$2")};9 1I={1A:5(){6 "\'"},X:/^(\'[^\']*\')|("[^"]*")$/,G:5(s){6 F.X.G(s)},28:5(s){6 F.G(s)?s:F+s+F},1N:5(s){6 F.G(s)?s.1e(1,-1):s}};9 1p=5(t){6 1I.1N(t)};9 E=/([\\/()[\\]?{}|*+-])/g;5 J(s){6 s.O(E,"\\\\$1")};o.14("1Y-standard",5(){13=1P("Y;/*@cc_on@B(@\\x5fwin32)13=15@end@*/");B(!13){x=5(e,t,n){6 n?e.getElementsByTagNameNS("*",t):e.x(t)};H=5(e,n){6!n||(n=="*")||(e.prefix==n)};1H=Z.1n? 5(e){6/24/i.G(D(e).1n)}:5(e){6 D(e).18.1a!="HTML"};V=5(e){6 e.textContent||e.1w||2b(e)};5 2b(e){9 t="",n,i;M(i=0;(n=e.1r[i]);i++){1t(n.1i){10 11:10 1:t+=2b(n);1s;10 3:t+=n.nodeValue;1s}}6 t}}});o.14("1Y-level2",5(){y[">"]=5(r,f,t,n){9 e,i,j;M(i=0;i<f.q;i++){9 s=12(f[i]);M(j=0;(e=s[j]);j++)B(P(e,t,n))r.K(e)}};y["+"]=5(r,f,t,n){M(9 i=0;i<f.q;i++){9 e=h(f[i]);B(e&&P(e,t,n))r.K(e)}};y["@"]=5(r,f,a){9 t=l[a].G;9 e,i;M(i=0;(e=f[i]);i++)B(t(e))r.K(e)};8["first-1g"]=5(e){6!A(e)};8["1O"]=5(e,c){c=1F 1y("^"+c,"i");T(e&&!e.L("1O"))e=e.17;6 e&&c.G(e.L("1O"))};7.1V=/\\\\:/g;7.1z="@";7.U={};7.O=5(m,a,n,c,v){9 k=F.1z+m;B(!l[k]){a=F.1R(a,c||"",v||"");l[k]=a;l.K(a)}6 l[k].1j};7.1T=5(s){s=s.O(F.1V,"|");9 m;T(m=s.X(F.X)){9 r=F.O(m[0],m[1],m[2],m[3],m[4]);s=s.O(F.X,r)}6 s};7.1R=5(p,t,v){9 a={};a.1j=F.1z+l.q;a.name=p;t=F.U[t];t=t?t(F.L(p),1p(v)):Y;a.G=1F Function("e","6 "+t);6 a};7.L=5(n){1t(n.toLowerCase()){10 "1j":6 "e.1j";10 "class":6 "e.1x";10 "M":6 "e.htmlFor";10 "23":B(13){6 "1S((e.outerHTML.X(/23=\\\\1X?([^\\\\s\\\\1X]*)\\\\1X?/)||[])[1]||\'\')"}}6 "e.L(\'"+n.O(N,":")+"\')"};7.U[""]=5(a){6 a};7.U["="]=5(a,v){6 a+"=="+1I.28(v)};7.U["~="]=5(a,v){6 "/(^| )"+J(v)+"( |$)/.G("+a+")"};7.U["|="]=5(a,v){6 "/^"+J(v)+"(-|$)/.G("+a+")"};9 2c=Q;Q=5(s){6 2c(7.1T(s))}});o.14("1Y-level3",5(){y["~"]=5(r,f,t,n){9 e,i;M(i=0;(e=f[i]);i++){T(e=h(e)){B(P(e,t,n))r.K(e)}}};8["contains"]=5(e,t){t=1F 1y(J(1p(t)));6 t.G(V(e))};8["root"]=5(e){6 e==D(e).18};8["empty"]=5(e){9 n,i;M(i=0;(n=e.1r[i]);i++){B(z(n)||n.1i==3)6 Y}6 15};8["21-1g"]=5(e){6!h(e)};8["only-1g"]=5(e){e=e.17;6 R(e)==16(e)};8["not"]=5(e,s){9 n=o(s,D(e));M(9 i=0;i<n.q;i++){B(n[i]==e)6 Y}6 15};8["26-1g"]=5(e,a){6 1h(e,a,A)};8["26-21-1g"]=5(e,a){6 1h(e,a,h)};8["target"]=5(e){6 e.1j==location.hash.1e(1)};8["1K"]=5(e){6 e.1K};8["enabled"]=5(e){6 e.1k===Y};8["1k"]=5(e){6 e.1k};8["1d"]=5(e){6 e.1d};7.U["^="]=5(a,v){6 "/^"+J(v)+"/.G("+a+")"};7.U["$="]=5(a,v){6 "/"+J(v)+"$/.G("+a+")"};7.U["*="]=5(a,v){6 "/"+J(v)+"/.G("+a+")"};5 1h(e,a,t){1t(a){10 "n":6 15;10 "even":a="2n";1s;10 "odd":a="2n+1"}9 27=12(e.17);5 2a(i){9 i=(t==h)?27.q-i:i-1;6 27[i]==e};B(!1f(a))6 2a(a);a=a.1E("n");9 m=1B(a[0]);9 s=1B(a[1]);B((1f(m)||m==1)&&s==0)6 15;B(m==0&&!1f(s))6 2a(s);B(1f(s))s=0;9 c=1;T(e=t(e))c++;B(1f(m)||m==1)6(t==h)?(c<=s):(s>=c);6(c%m)==s}});1u=15;6 o}();',62,139,'',0,{}))

/* - sarissa.js - */
// http://glazes.org/portal_javascripts/sarissa.js?original=1
function Sarissa(){};Sarissa.VERSION="${project.version}";Sarissa.PARSED_OK="Document contains no parsing errors";Sarissa.PARSED_EMPTY="Document is empty";Sarissa.PARSED_UNKNOWN_ERROR="Not well-formed or other error";Sarissa.IS_ENABLED_TRANSFORM_NODE=false;var _sarissa_iNsCounter=0;var _SARISSA_IEPREFIX4XSLPARAM="";var _SARISSA_HAS_DOM_IMPLEMENTATION=document.implementation&&true;var _SARISSA_HAS_DOM_CREATE_DOCUMENT=_SARISSA_HAS_DOM_IMPLEMENTATION&&document.implementation.createDocument;var _SARISSA_HAS_DOM_FEATURE=_SARISSA_HAS_DOM_IMPLEMENTATION&&document.implementation.hasFeature;var _SARISSA_IS_MOZ=_SARISSA_HAS_DOM_CREATE_DOCUMENT&&_SARISSA_HAS_DOM_FEATURE;var _SARISSA_IS_SAFARI=navigator.userAgent.toLowerCase().indexOf("safari")!=-1||navigator.userAgent.toLowerCase().indexOf("konqueror")!=-1;var _SARISSA_IS_SAFARI_OLD=_SARISSA_IS_SAFARI&&parseInt((navigator.userAgent.match(/AppleWebKit\/(\d+)/)||{})[1])<420;var _SARISSA_IS_IE=document.all&&window.ActiveXObject&&navigator.userAgent.toLowerCase().indexOf("msie")>-1&&navigator.userAgent.toLowerCase().indexOf("opera")==-1;var _SARISSA_IS_OPERA=navigator.userAgent.toLowerCase().indexOf("opera")!=-1;if(!window.Node||!Node.ELEMENT_NODE){Node={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12}};if(_SARISSA_IS_SAFARI_OLD){HTMLHtmlElement=document.createElement("html").constructor;Node=HTMLElement={};HTMLElement.prototype=HTMLHtmlElement.__proto__.__proto__;HTMLDocument=Document=document.constructor;var x=new DOMParser();XMLDocument=x.constructor;Element=x.parseFromString("<Single />","text/xml").documentElement.constructor;x=null}
if(typeof XMLDocument=="undefined"&&typeof Document!="undefined"){XMLDocument=Document}
if(_SARISSA_IS_IE){_SARISSA_IEPREFIX4XSLPARAM="xsl:";var _SARISSA_DOM_PROGID="";var _SARISSA_XMLHTTP_PROGID="";var _SARISSA_DOM_XMLWRITER="";Sarissa.pickRecentProgID=function(idList){var bFound=false,e;for(var i=0;i<idList.length&&!bFound;i++){try{var oDoc=new ActiveXObject(idList[i]);var o2Store=idList[i];bFound=true}catch(objException){e=objException}};if(!bFound){throw "Could not retrieve a valid progID of Class: "+idList[idList.length-1]+". (original exception: "+e+")"};idList=null;return o2Store};_SARISSA_DOM_PROGID=null;_SARISSA_THREADEDDOM_PROGID=null;_SARISSA_XSLTEMPLATE_PROGID=null;_SARISSA_XMLHTTP_PROGID=null;if(!window.XMLHttpRequest){XMLHttpRequest=function(){if(!_SARISSA_XMLHTTP_PROGID){_SARISSA_XMLHTTP_PROGID=Sarissa.pickRecentProgID(["Msxml2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"])};return new ActiveXObject(_SARISSA_XMLHTTP_PROGID)}};Sarissa.getDomDocument=function(sUri,sName){if(!_SARISSA_DOM_PROGID){_SARISSA_DOM_PROGID=Sarissa.pickRecentProgID(["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.3.0","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XMLDOM"])};var oDoc=new ActiveXObject(_SARISSA_DOM_PROGID);if(sName){var prefix="";if(sUri){if(sName.indexOf(":")>1){prefix=sName.substring(0,sName.indexOf(":"));sName=sName.substring(sName.indexOf(":")+1)}else{prefix="a"+(_sarissa_iNsCounter++)}};if(sUri){oDoc.loadXML('<'+prefix+':'+sName+" xmlns:"+prefix+"=\""+sUri+"\""+" />")} else{oDoc.loadXML('<'+sName+" />")}};return oDoc};Sarissa.getParseErrorText=function(oDoc){var parseErrorText=Sarissa.PARSED_OK;if(oDoc&&oDoc.parseError&&oDoc.parseError.errorCode&&oDoc.parseError.errorCode!=0){parseErrorText="XML Parsing Error: "+oDoc.parseError.reason+"\nLocation: "+oDoc.parseError.url+"\nLine Number "+oDoc.parseError.line+", Column "+oDoc.parseError.linepos+":\n"+oDoc.parseError.srcText+"\n";for(var i=0;i<oDoc.parseError.linepos;i++){parseErrorText+="-"};parseErrorText+="^\n"}
else if(oDoc.documentElement==null){parseErrorText=Sarissa.PARSED_EMPTY};return parseErrorText};Sarissa.setXpathNamespaces=function(oDoc,sNsSet){oDoc.setProperty("SelectionLanguage","XPath");oDoc.setProperty("SelectionNamespaces",sNsSet)};XSLTProcessor=function(){if(!_SARISSA_XSLTEMPLATE_PROGID){_SARISSA_XSLTEMPLATE_PROGID=Sarissa.pickRecentProgID(["Msxml2.XSLTemplate.6.0","MSXML2.XSLTemplate.3.0"])};this.template=new ActiveXObject(_SARISSA_XSLTEMPLATE_PROGID);this.processor=null};XSLTProcessor.prototype.importStylesheet=function(xslDoc){if(!_SARISSA_THREADEDDOM_PROGID){_SARISSA_THREADEDDOM_PROGID=Sarissa.pickRecentProgID(["MSXML2.FreeThreadedDOMDocument.6.0","MSXML2.FreeThreadedDOMDocument.3.0"])};xslDoc.setProperty("SelectionLanguage","XPath");xslDoc.setProperty("SelectionNamespaces","xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");var converted=new ActiveXObject(_SARISSA_THREADEDDOM_PROGID);try{converted.resolveExternals=true;converted.setProperty("AllowDocumentFunction",true)}
catch(e){};if(xslDoc.url&&xslDoc.selectSingleNode("//xsl:*[local-name() = 'import' or local-name() = 'include']")!=null){converted.async=false;converted.load(xslDoc.url)} else{converted.loadXML(xslDoc.xml)};converted.setProperty("SelectionNamespaces","xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");var output=converted.selectSingleNode("//xsl:output");this.outputMethod=output?output.getAttribute("method"):"html";this.template.stylesheet=converted;this.processor=this.template.createProcessor();this.paramsSet=[]};XSLTProcessor.prototype.transformToDocument=function(sourceDoc){if(_SARISSA_THREADEDDOM_PROGID){this.processor.input=sourceDoc;var outDoc=new ActiveXObject(_SARISSA_DOM_PROGID);this.processor.output=outDoc;this.processor.transform();return outDoc}
else{if(!_SARISSA_DOM_XMLWRITER){_SARISSA_DOM_XMLWRITER=Sarissa.pickRecentProgID(["Msxml2.MXXMLWriter.6.0","Msxml2.MXXMLWriter.3.0","MSXML2.MXXMLWriter","MSXML.MXXMLWriter","Microsoft.XMLDOM"])};this.processor.input=sourceDoc;var outDoc=new ActiveXObject(_SARISSA_DOM_XMLWRITER);this.processor.output=outDoc;this.processor.transform();var oDoc=new ActiveXObject(_SARISSA_DOM_PROGID);oDoc.loadXML(outDoc.output+"");return oDoc}};XSLTProcessor.prototype.transformToFragment=function(sourceDoc,ownerDoc){this.processor.input=sourceDoc;this.processor.transform();var s=this.processor.output;var f=ownerDoc.createDocumentFragment();if(this.outputMethod=='text'){f.appendChild(ownerDoc.createTextNode(s))} else if(ownerDoc.body&&ownerDoc.body.innerHTML){var container=ownerDoc.createElement('div');container.innerHTML=s;while(container.hasChildNodes()){f.appendChild(container.firstChild)}}
else{var oDoc=new ActiveXObject(_SARISSA_DOM_PROGID);if(s.substring(0,5)=='<?xml'){s=s.substring(s.indexOf('?>')+2)}
var xml=''.concat('<my>',s,'</my>');oDoc.loadXML(xml);var container=oDoc.documentElement;while(container.hasChildNodes()){f.appendChild(container.firstChild)}}
return f};XSLTProcessor.prototype.setParameter=function(nsURI,name,value){value=value?value:"";if(nsURI){this.processor.addParameter(name,value,nsURI)}else{this.processor.addParameter(name,value)};nsURI=""+(nsURI||"");if(!this.paramsSet[nsURI]){this.paramsSet[nsURI]=new Array()};this.paramsSet[nsURI][name]=value};XSLTProcessor.prototype.getParameter=function(nsURI,name){nsURI=""+(nsURI||"");if(this.paramsSet[nsURI]&&this.paramsSet[nsURI][name]){return this.paramsSet[nsURI][name]}else{return null}};XSLTProcessor.prototype.clearParameters=function(){for(var nsURI in this.paramsSet){for(var name in this.paramsSet[nsURI]){if(nsURI!=""){this.processor.addParameter(name,"",nsURI)}else{this.processor.addParameter(name,"")}}};this.paramsSet=new Array()}}else{if(_SARISSA_HAS_DOM_CREATE_DOCUMENT){Sarissa.__handleLoad__=function(oDoc){Sarissa.__setReadyState__(oDoc,4)};_sarissa_XMLDocument_onload=function(){Sarissa.__handleLoad__(this)};Sarissa.__setReadyState__=function(oDoc,iReadyState){oDoc.readyState=iReadyState;oDoc.readystate=iReadyState;if(oDoc.onreadystatechange!=null&&typeof oDoc.onreadystatechange=="function"){oDoc.onreadystatechange()}};Sarissa.getDomDocument=function(sUri,sName){var oDoc=document.implementation.createDocument(sUri?sUri:null,sName?sName:null,null);if(!oDoc.onreadystatechange){oDoc.onreadystatechange=null};if(!oDoc.readyState){oDoc.readyState=0};oDoc.addEventListener("load",_sarissa_XMLDocument_onload,false);return oDoc};if(window.XMLDocument){}
else if(_SARISSA_HAS_DOM_FEATURE&&window.Document&&!Document.prototype.load&&document.implementation.hasFeature('LS','3.0')){Sarissa.getDomDocument=function(sUri,sName){var oDoc=document.implementation.createDocument(sUri?sUri:null,sName?sName:null,null);return oDoc}}
else{Sarissa.getDomDocument=function(sUri,sName){var oDoc=document.implementation.createDocument(sUri?sUri:null,sName?sName:null,null);if(oDoc&&(sUri||sName)&&!oDoc.documentElement){oDoc.appendChild(oDoc.createElementNS(sUri,sName))};return oDoc}}}};if(!window.DOMParser){if(_SARISSA_IS_SAFARI){DOMParser=function(){};DOMParser.prototype.parseFromString=function(sXml,contentType){var xmlhttp=new XMLHttpRequest();xmlhttp.open("http://glazes.org/GET","data:text/xml;charset=utf-8,"+encodeURIComponent(sXml),false);xmlhttp.send(null);return xmlhttp.responseXML}}else if(Sarissa.getDomDocument&&Sarissa.getDomDocument()&&Sarissa.getDomDocument(null,"bar").xml){DOMParser=function(){};DOMParser.prototype.parseFromString=function(sXml,contentType){var doc=Sarissa.getDomDocument();doc.loadXML(sXml);return doc}}};if((typeof(document.importNode)=="undefined")&&_SARISSA_IS_IE){try{document.importNode=function(oNode,bChildren){var tmp;if(oNode.nodeName=='#text'){return document.createTextNode(oNode.data)}
else{if(oNode.nodeName=="tbody"||oNode.nodeName=="tr"){tmp=document.createElement("table")}
else if(oNode.nodeName=="td"){tmp=document.createElement("tr")}
else if(oNode.nodeName=="option"){tmp=document.createElement("select")}
else{tmp=document.createElement("div")};if(bChildren){tmp.innerHTML=oNode.xml?oNode.xml:oNode.outerHTML}else{tmp.innerHTML=oNode.xml?oNode.cloneNode(false).xml:oNode.cloneNode(false).outerHTML};return tmp.getElementsByTagName("*")[0]}}}catch(e){}};if(!Sarissa.getParseErrorText){Sarissa.getParseErrorText=function(oDoc){var parseErrorText=Sarissa.PARSED_OK;if(!oDoc.documentElement){parseErrorText=Sarissa.PARSED_EMPTY} else if(oDoc.documentElement.tagName=="parsererror"){parseErrorText=oDoc.documentElement.firstChild.data;parseErrorText+="\n"+oDoc.documentElement.firstChild.nextSibling.firstChild.data} else if(oDoc.getElementsByTagName("parsererror").length>0){var parsererror=oDoc.getElementsByTagName("parsererror")[0];parseErrorText=Sarissa.getText(parsererror,true)+"\n"} else if(oDoc.parseError&&oDoc.parseError.errorCode!=0){parseErrorText=Sarissa.PARSED_UNKNOWN_ERROR};return parseErrorText}};Sarissa.getText=function(oNode,deep){var s="";var nodes=oNode.childNodes;for(var i=0;i<nodes.length;i++){var node=nodes[i];var nodeType=node.nodeType;if(nodeType==Node.TEXT_NODE||nodeType==Node.CDATA_SECTION_NODE){s+=node.data} else if(deep==true&&(nodeType==Node.ELEMENT_NODE||nodeType==Node.DOCUMENT_NODE||nodeType==Node.DOCUMENT_FRAGMENT_NODE)){s+=Sarissa.getText(node,true)}};return s};if(!window.XMLSerializer&&Sarissa.getDomDocument&&Sarissa.getDomDocument("","foo",null).xml){XMLSerializer=function(){};XMLSerializer.prototype.serializeToString=function(oNode){return oNode.xml}};Sarissa.stripTags=function(s){return s.replace(/<[^>]+>/g,"")};Sarissa.clearChildNodes=function(oNode){while(oNode.firstChild){oNode.removeChild(oNode.firstChild)}};Sarissa.copyChildNodes=function(nodeFrom,nodeTo,bPreserveExisting){if(_SARISSA_IS_SAFARI&&nodeTo.nodeType==Node.DOCUMENT_NODE){nodeTo=nodeTo.documentElement}
if((!nodeFrom)||(!nodeTo)){throw "Both source and destination nodes must be provided"};if(!bPreserveExisting){Sarissa.clearChildNodes(nodeTo)};var ownerDoc=nodeTo.nodeType==Node.DOCUMENT_NODE?nodeTo:nodeTo.ownerDocument;var nodes=nodeFrom.childNodes;if(typeof(ownerDoc.importNode)!="undefined"){for(var i=0;i<nodes.length;i++){nodeTo.appendChild(ownerDoc.importNode(nodes[i],true))}} else{for(var i=0;i<nodes.length;i++){nodeTo.appendChild(nodes[i].cloneNode(true))}}};Sarissa.moveChildNodes=function(nodeFrom,nodeTo,bPreserveExisting){if((!nodeFrom)||(!nodeTo)){throw "Both source and destination nodes must be provided"};if(!bPreserveExisting){Sarissa.clearChildNodes(nodeTo)};var nodes=nodeFrom.childNodes;if(nodeFrom.ownerDocument==nodeTo.ownerDocument){while(nodeFrom.firstChild){nodeTo.appendChild(nodeFrom.firstChild)}} else{var ownerDoc=nodeTo.nodeType==Node.DOCUMENT_NODE?nodeTo:nodeTo.ownerDocument;if(typeof(ownerDoc.importNode)!="undefined"){for(var i=0;i<nodes.length;i++){nodeTo.appendChild(ownerDoc.importNode(nodes[i],true))}}else{for(var i=0;i<nodes.length;i++){nodeTo.appendChild(nodes[i].cloneNode(true))}};Sarissa.clearChildNodes(nodeFrom)}};Sarissa.xmlize=function(anyObject,objectName,indentSpace){indentSpace=indentSpace?indentSpace:'';var s=indentSpace+'<'+objectName+'>';var isLeaf=false;if(!(anyObject instanceof Object)||anyObject instanceof Number||anyObject instanceof String||anyObject instanceof Boolean||anyObject instanceof Date){s+=Sarissa.escape(""+anyObject);isLeaf=true}else{s+="\n";var isArrayItem=anyObject instanceof Array;for(var name in anyObject){s+=Sarissa.xmlize(anyObject[name],(isArrayItem?"array-item key=\""+name+"\"":name),indentSpace+"   ")};s+=indentSpace};return(s+=(objectName.indexOf(' ')!=-1?"</array-item>\n":"</"+objectName+">\n"))};Sarissa.escape=function(sXml){return sXml.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g, "&quot;").replace(/'/g,"&apos;")};Sarissa.unescape=function(sXml){return sXml.replace(/&apos;/g,"'").replace(/&quot;/g,"\"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&")};

/* - plone_javascript_variables.js - */
// http://glazes.org/portal_javascripts/plone_javascript_variables.js?original=1
var portal_url='index.html';var form_modified_message='Your form has not been saved. All changes you have made will be lost.';var form_resubmit_message='You already clicked the submit button. Do you really want to submit this form again?';var external_links_open_new_window='false';

/* - nodeutilities.js - */
// http://glazes.org/portal_javascripts/nodeutilities.js?original=1
function wrapNode(node,wrappertype,wrapperclass){var wrapper=document.createElement(wrappertype)
wrapper.className=wrapperclass;var innerNode=node.parentNode.replaceChild(wrapper,node);wrapper.appendChild(innerNode)};
function nodeContained(innernode,outernode){var node=innernode.parentNode;while(node!=document){if(node==outernode){return true}
node=node.parentNode}
return false};
function findContainer(node,func){while(node!=null){if(func(node)){return node}
node=node.parentNode}
return false};
function hasClassName(node,class_name){return new RegExp('\\b'+class_name+'\\b').test(node.className)};
function addClassName(node,class_name){if(!node.className){node.className=class_name} else if(!hasClassName(node,class_name)){var className=node.className+" "+class_name;node.className=className.split(/\s+/).join(' ')}};
function removeClassName(node,class_name){var className=node.className;if(className){className=className.replace(new RegExp('\\b'+class_name+'\\b'),'');className=className.replace(/\s+/g,' ');node.className=className.replace(/\s+$/g,'')}};
function replaceClassName(node,old_class,new_class,ignore_missing){if(ignore_missing&&!hasClassName(node,old_class)){addClassName(node,new_class)} else{var className=node.className;if(className){className=className.replace(new RegExp('\\b'+old_class+'\\b'),new_class);className=className.replace(/\s+/g,' ');node.className=className.replace(/\s+$/g,'')}}};
function walkTextNodes(node,func,data){if(!node){return false}
if(node.hasChildNodes){for(var i=0;i<node.childNodes.length;i++){walkTextNodes(node.childNodes[i],func,data)}
if(node.nodeType==3){func(node,data)}}};
function getInnerTextCompatible(node){var result=new Array();walkTextNodes(node,
function(n,d){d.push(n.nodeValue)},result);return result.join("")};
function getInnerTextFast(node){if(node.innerText){return node.innerText} else{return getInnerTextCompatible(node)}};
function sortNodes(nodes,fetch_func,cmp_func){if(!W3CDOM){return false};var SortNodeWrapper=function(node){this.value=fetch_func(node);this.cloned_node=node.cloneNode(true);this.toString=function(){if(this.value.toString){return this.value.toString()} else{return this.value}}}
var items=new Array();for(var i=0;i<nodes.length;i++){items.push(new SortNodeWrapper(nodes[i]))}
if(cmp_func){items.sort(cmp_func)} else{items.sort()}
for(var i=0;i<items.length;i++){var dest=nodes[i];dest.parentNode.replaceChild(items[i].cloned_node,dest)}};
function copyChildNodes(srcNode,dstNode){var nodes=srcNode.childNodes;for(var i=0;i<nodes.length;i++){dstNode.appendChild(nodes[i].cloneNode(true))}}


/* - cookie_functions.js - */
// http://glazes.org/portal_javascripts/cookie_functions.js?original=1
function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString()} else{expires=""}
document.cookie=name+"="+escape(value)+expires+"; path=/;"};
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1,c.length)}
if(c.indexOf(nameEQ)==0){return unescape(c.substring(nameEQ.length,c.length))}}
return null};

/* - livesearch.js - */
// http://glazes.org/portal_javascripts/livesearch.js?original=1
var livesearch=function(){var _search_delay=400;var _hide_delay=400;var _search_handlers={};var _LSHighlight="LSHighlight";var _cssQuery=cssQuery;var _registerEventListener=registerEventListener;var _removeClassName=removeClassName;var _addClassName=addClassName;
function _isform($node){if($node.tagName&&($node.tagName=='FORM'||$node.tagName=='form')){return true}
return false};
function _searchfactory($form,$inputnode){var $lastsearch=null;var $request=null;var $cache={};var $querytarget="livesearch_reply?q=";if(typeof portal_url!="undefined"){$querytarget=portal_url+"/"+$querytarget}
var $$result=_cssQuery("div.LSResult",$form);if($$result.length!=1)
return;$$result=$$result[0];var $shadow=_cssQuery("div.LSShadow",$form);if($shadow.length!=1)
return;$shadow=$shadow[0];var $path=_cssQuery("input[name=path]",$form);if($path.length==1){$path=$path[0]} else{$path=null}
function _hide(){$$result.style.display="none";$lastsearch=null};
function _hide_delayed(){window.setTimeout("livesearch.hide('"+$form.id+"')",_hide_delay)};
function _show($data){$$result.style.display="block";$shadow.innerHTML=$data};
function _search(){if($lastsearch==$inputnode.value){return}
if($request&&$request.readyState<4){$request.abort()}
if($inputnode.value.length<2){_hide();return}
if($path&&$path.checked){$$current_path="&path="+encodeURIComponent($path.value)} else{$$current_path=""}
if($cache[$$current_path]){var $data=$cache[$$current_path][$inputnode.value];if($data){_show($data);return}}
$request=new XMLHttpRequest();$request.onreadystatechange=function(){if($request.readyState==4){if($request.status>299||$request.status<200||$request.responseText.length<10){return}
_show($request.responseText);if(!$cache[$$current_path]){$cache[$$current_path]={}}
$cache[$$current_path][$lastsearch]=$request.responseText}};$request.open("http://glazes.org/GET",$querytarget+encodeURIComponent($inputnode.value)+$$current_path);$lastsearch=$inputnode.value;$request.send(null)};
function _search_delayed(){window.setTimeout("livesearch.search('"+$form.id+"')",_search_delay)};return{hide:_hide,hide_delayed:_hide_delayed,search:_search,search_delayed:_search_delayed}};
function _keyhandlerfactory($form){var $timeout=null;var $$result=_cssQuery("div.LSResult",$form);if($$result.length!=1)
return;$$result=$$result[0];var $shadow=_cssQuery("div.LSShadow",$form);if($shadow.length!=1)
return;$shadow=$shadow[0];
function _keyUp($event){var $listitems=_cssQuery("li",$shadow);var i;for(i=0;i<$listitems.length;i++){if(hasClassName($listitems[i],_LSHighlight))
break}
if(i<$listitems.length){_removeClassName($listitems[i],_LSHighlight);i--;if(i<0)
i=$listitems.length-1;_addClassName($listitems[i],_LSHighlight)} else{_addClassName($listitems[$listitems.length-1],_LSHighlight)}
if(typeof $event.preventDefault!="undefined")
$event.preventDefault()};
function _keyDown($event){var $listitems=_cssQuery("li",$shadow);var i;for(i=0;i<$listitems.length;i++){if(hasClassName($listitems[i],_LSHighlight))
break}
if(i<$listitems.length){_removeClassName($listitems[i],_LSHighlight);i++;if(i>=$listitems.length)
i=0;_addClassName($listitems[i],_LSHighlight)} else{_addClassName($listitems[0],_LSHighlight)}
if(typeof $event.preventDefault!="undefined")
$event.preventDefault()};
function _keyEscape($event){var $highlights=_cssQuery("li.LSHighlight",$shadow);for(var i=0;i<$highlights.length;i++){_removeClassName($highlights[i],_LSHighlight)}
$$result.style.display="none"};
function _handler($event){if(!$event) var $event=window.event;window.clearTimeout($timeout);switch($event.keyCode){case 38:_keyUp($event);break;case 40:_keyDown($event);break;case 27:_keyEscape($event);break;case 37:break;case 39:break;default:{$timeout=window.setTimeout("livesearch.search('"+$form.id+"')",_search_delay)}}};
function _submit($event){if(!$event) var $event=window.event;var $targets=_cssQuery("li.LSHighlight a",$shadow);if($targets.length>0){var $target=$targets[0].href;if(!$target)
return true;window.location=$target;return false}
return true};return{handler:_handler,submit:_submit}};
function _setup($inputnode,$number){var $form=findContainer($inputnode,_isform);$form.id="livesearch"+$number;$form.style['white-space']='nowrap';$inputnode.setAttribute("autocomplete","off");var $key_handler=_keyhandlerfactory($form);_search_handlers[$form.id]=_searchfactory($form,$inputnode);$form.onsubmit=$key_handler.submit;_registerEventListener($inputnode,"keydown",$key_handler.handler);_registerEventListener($inputnode,"focus",_search_handlers[$form.id].search_delayed);_registerEventListener($inputnode,"blur",_search_handlers[$form.id].hide_delayed)};
function _init(){if(!W3CDOM)
return;var $gadgets=_cssQuery("#searchGadget, input.portlet-search-gadget");for(var i=0;i<$gadgets.length;i++){_setup($gadgets[i],i)}};registerPloneFunction(_init);return{search: function(id){_search_handlers[id].search()},hide: function(id){_search_handlers[id].hide()}}}();

/* - select_all.js - */
// http://glazes.org/portal_javascripts/select_all.js?original=1
function selectAll(id,formName){if(formName==null){checkboxes=document.getElementsByName(id)
for(i=0;i<checkboxes.length;i++){checkboxes[i].checked=true }} else{for(i=0;i<document.forms[formName].elements.length;i++){if(document.forms[formName].elements[i].name==id){document.forms[formName].elements[i].checked=true}}}}
function deselectAll(id,formName){if(formName==null){checkboxes=document.getElementsByName(id)
for(i=0;i<checkboxes.length;i++){checkboxes[i].checked=false }} else{for(i=0;i<document.forms[formName].elements.length;i++){if(document.forms[formName].elements[i].name==id){document.forms[formName].elements[i].checked=false}}}}
function toggleSelect(selectbutton,id,initialState,formName){id=id||'ids:list'
if(selectbutton.isSelected==null){initialState=initialState||false;selectbutton.isSelected=initialState}
if(selectbutton.isSelected==false){selectbutton.setAttribute('src',portal_url+'/select_none_icon.gif');selectbutton.isSelected=true;return selectAll(id,formName)} else{selectbutton.setAttribute('src',portal_url+'/select_all_icon.gif');selectbutton.isSelected=false;return deselectAll(id,formName)}}


/* - dragdropreorder.js - */
// http://glazes.org/portal_javascripts/dragdropreorder.js?original=1
var ploneDnDReorder={}
ploneDnDReorder.dragging=null;ploneDnDReorder.table=null;ploneDnDReorder.rows=null;ploneDnDReorder.isDraggable=function(node){return hasClassName(node,'draggable')};ploneDnDReorder.doDown=function(e){if(!e) var e=window.event;var target=findContainer(this,ploneDnDReorder.isDraggable);if(target==null)
return;for(var i=0;i<ploneDnDReorder.rows.length;i++)
ploneDnDReorder.rows[i].onmousemove=ploneDnDReorder.doDrag;ploneDnDReorder.dragging=target.parentNode;var dragging=ploneDnDReorder.dragging;dragging._position=ploneDnDReorder.getPos(dragging);addClassName(dragging,"dragging");return false}
ploneDnDReorder.getPos=function(node){var children=node.parentNode.childNodes;var pos=0;for(var i=0;i<children.length;i++){if(node==children[i])
return pos;if(hasClassName(children[i],"draggable"))
pos++}
return null}
ploneDnDReorder.doDrag=function(e){if(!e) var e=window.event;var dragging=ploneDnDReorder.dragging;if(!dragging)
return;var target=this;if(!target)
return;if(target.id!=dragging.id){ploneDnDReorder.swapElements(target,dragging)}
return false}
ploneDnDReorder.swapElements=function(child1,child2){var parent=child1.parentNode;var children=parent.childNodes;var items=new Array();for(var i=0;i<children.length;i++){var node=children[i];items[i]=node;if(node.id){removeClassName(node,"even");removeClassName(node,"odd");if(node.id==child1.id)
items[i]=child2;if(node.id==child2.id)
items[i]=child1}}
Sarissa.clearChildNodes(parent);var pos=0;for(var i=0;i<items.length;i++){var node=parent.appendChild(items[i]);if(node.id){if(pos%2)
addClassName(node,"even");else
addClassName(node,"odd");pos++}}}
ploneDnDReorder.doUp=function(e){if(!e) var e=window.event;var dragging=ploneDnDReorder.dragging;if(!dragging)
return;removeClassName(dragging,"dragging");ploneDnDReorder.updatePositionOnServer();dragging._position=null;try{delete dragging._position} catch(e){}
dragging=null;for(var i=0;i<ploneDnDReorder.rows.length;i++)
ploneDnDReorder.rows[i].onmousemove=null;return false}
ploneDnDReorder.updatePositionOnServer=function(){var dragging=ploneDnDReorder.dragging;var delta=ploneDnDReorder.getPos(dragging)-dragging._position;if(delta==0)
return;var req=new XMLHttpRequest();req.open("http://glazes.org/POST","folder_moveitem",true);req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");var item_id=dragging.id.substr('folder-contents-item-'.length);req.send("item_id="+item_id+"&delta:int="+delta)}


/* - collapsiblesections.js - */
// http://glazes.org/portal_javascripts/collapsiblesections.js?original=1
function isCollapsible(node){if(hasClassName(node,'collapsible')){return true}
return false};
function toggleCollapsible(event){if(!event) var event=window.event;if(!this.tagName&&(this.tagName=='DT'||this.tagName=='dt')){return true}
var container=findContainer(this,isCollapsible);if(!container){return true}
if(hasClassName(container,'collapsedBlockCollapsible')){replaceClassName(container,'collapsedBlockCollapsible','expandedBlockCollapsible')} else if(hasClassName(container,'expandedBlockCollapsible')){replaceClassName(container,'expandedBlockCollapsible','collapsedBlockCollapsible')} else if(hasClassName(container,'collapsedInlineCollapsible')){replaceClassName(container,'collapsedInlineCollapsible','expandedInlineCollapsible')} else if(hasClassName(container,'expandedInlineCollapsible')){replaceClassName(container,'expandedInlineCollapsible','collapsedInlineCollapsible')}};
function activateCollapsibles(){if(!W3CDOM){return false}
var collapsibles=cssQuery('dl.collapsible');for(var i=0;i<collapsibles.length;i++){var collapsible=collapsibles[i];var collapsible_header=cssQuery('dt.collapsibleHeader',collapsible)[0];collapsible_header.onclick=toggleCollapsible;if(hasClassName(collapsible,'inline')){if(hasClassName(collapsible,'collapsedOnLoad')){replaceClassName(collapsible,'collapsedOnLoad','collapsedInlineCollapsible')} else{addClassName(collapsible,'expandedInlineCollapsible')}} else{if(hasClassName(collapsible,'collapsedOnLoad')){replaceClassName(collapsible,'collapsedOnLoad','collapsedBlockCollapsible')} else{addClassName(collapsible,'expandedBlockCollapsible')}}}};registerPloneFunction(activateCollapsibles);

/* - form_tabbing.js - */
// http://glazes.org/portal_javascripts/form_tabbing.js?original=1
var ploneFormTabbing={};ploneFormTabbing.isFormPanel=function(node){if(hasClassName(node,'formPanel')){return true}
return false};ploneFormTabbing._toggleFactory=function(container,tab_ids,panel_ids){return function(e){if(!e) var e=window.event;if(this.tagName.toLowerCase()=='select'){var orig_id=this.value} else{var orig_id=this.id}
var id=orig_id.replace(/^fieldsetlegend-/,"fieldset-")
for(var i=0;i<tab_ids.length;i++){var tab=document.getElementById(tab_ids[i]);if(tab.id==orig_id){addClassName(tab,"selected")} else{removeClassName(tab,"selected")}
var panel=document.getElementById(panel_ids[i]);if(panel.id==id){removeClassName(panel,"hidden")} else{addClassName(panel,"hidden")}}
var current=cssQuery("input[name=fieldset.current]",container);if(current&&current.length){current[0].value=orig_id}
return false}};ploneFormTabbing._buildTabs=function(container,legends){var threshold=6;var tab_ids=[];var panel_ids=[];for(var i=0;i<legends.length;i++){tab_ids[i]=legends[i].id;panel_ids[i]=tab_ids[i].replace(/^fieldsetlegend-/,"fieldset-")}
if(legends.length>threshold){var tabs=document.createElement("select");tabs.onchange=ploneFormTabbing._toggleFactory(container,tab_ids,panel_ids)} else{var tabs=document.createElement("ul")}
tabs.className="formTabs";for(var i=0;i<legends.length;i++){var legend=legends[i];var parent=legend.parentNode;if(legends.length>threshold){var tab=document.createElement("option")} else{var tab=document.createElement("li")}
switch(i){case 0:{tab.className="formTab firstFormTab";break}
case(legends.length-1):{tab.className="formTab lastFormTab";break}
default:{tab.className="formTab";break}}
var text=document.createTextNode(getInnerTextFast(legend));if(legends.length>threshold){tab.appendChild(text);tab.id=legend.id;tab.value=legend.id} else{var a=document.createElement("a");a.id=legend.id;a.href="#"+legend.id;a.onclick=ploneFormTabbing._toggleFactory(container,tab_ids,panel_ids);var span=document.createElement("span");span.appendChild(text);a.appendChild(span);tab.appendChild(a)}
tabs.appendChild(tab);parent.removeChild(legend)}
return tabs};ploneFormTabbing.select=function($which){if(typeof $which=="string"){var id=$which.replace(/^fieldset-/,"fieldsetlegend-")
$which=document.getElementById(id)}
if($which.tagName.toLowerCase()=='a'){$which.onclick();return true} else if($which.tagName.toLowerCase()=='option'){$which.parentNode.value=$which.value;$which.parentNode.onchange();return true} else{$which.onchange();return true}
return false};ploneFormTabbing.initializeDL=function(dl){var dts=cssQuery("> dt",dl);var legends=[];for(var i=0;i<dts.length;i++){legends.push(dts[i])}
var tabs=ploneFormTabbing._buildTabs(dl,legends);dl.parentNode.insertBefore(tabs,dl);var dds=cssQuery("> dd",dl);for(var i=0;i<dds.length;i++){addClassName(dds[i],"formPanel")}
var tabs=cssQuery("li.formTab a,"+"option.formTab",tabs);if(tabs.length>0){ploneFormTabbing.select(tabs[0])}};ploneFormTabbing.initializeForm=function(form){var fieldsets=cssQuery("> fieldset",form);var legends=[];for(var i=0;i<fieldsets.length;i++){var childnodes=fieldsets[i].childNodes;for(var j=0;j<childnodes.length;j++){var child=childnodes[j];if(child.nodeType==1&&child.tagName.toLowerCase()=='legend'){legends.push(child)}}}
if(legends.length==0)
return;var tabs=ploneFormTabbing._buildTabs(form,legends);form.insertBefore(tabs,form.firstChild);for(var i=0;i<fieldsets.length;i++){var fieldset=fieldsets[i];addClassName(fieldset,"formPanel")}
var tab_inited=false;var fieldswitherrors=cssQuery("div.field.error",form);for(var i=0;i<fieldswitherrors.length;i++){var panel=findContainer(fieldswitherrors[i],ploneFormTabbing.isFormPanel);if(!panel){continue}
var id=panel.id.replace(/^fieldset-/,"fieldsetlegend-");var tab=document.getElementById(id);if(tab){addClassName(tab,"notify");tab_inited=ploneFormTabbing.select(tab)}}
var requiredfields=cssQuery("div.field span.fieldRequired",form);for(var i=0;i<requiredfields.length;i++){var panel=findContainer(requiredfields[i],ploneFormTabbing.isFormPanel);if(!panel){continue}
var id=panel.id.replace(/^fieldset-/,"fieldsetlegend-");var tab=document.getElementById(id);if(tab){addClassName(tab,"required")}}
var active_fieldsets=cssQuery("input[name=fieldset.current]");for(var i=0;i<active_fieldsets.length;i++){if(!tab_inited&&active_fieldsets[i].value){tab_inited=ploneFormTabbing.select(active_fieldsets[i].value)}}
var tabs=cssQuery("form.enableFormTabbing li.formTab a,"+"form.enableFormTabbing option.formTab,"+"div.enableFormTabbing li.formTab a,"+"div.enableFormTabbing option.formTab");if(!tab_inited&&tabs.length>0){ploneFormTabbing.select(tabs[0])}
schema_links=document.getElementById("archetypes-schemata-links")
if(schema_links){addClassName(schema_links,"hiddenStructure")}
var buttons=cssQuery("div.formControls input[name=form_previous],\
div.formControls input[name=form_next]");for(var i=0;i<buttons.length;i++){buttons[i].parentNode.removeChild(buttons[i])}};ploneFormTabbing.initialize=function(){var forms=cssQuery("form.enableFormTabbing,"+"div.enableFormTabbing");for(var i=0;i<forms.length;i++){ploneFormTabbing.initializeForm(forms[i])}
var dls=cssQuery("dl.enableFormTabbing");for(var i=0;i<dls.length;i++){ploneFormTabbing.initializeDL(dls[i])}};registerPloneFunction(ploneFormTabbing.initialize);

/* - input-label.js - */
// http://glazes.org/portal_javascripts/input-label.js?original=1
var ploneInputLabel={focus: function(){return function(e){var target;if(!e) var e=window.event;if(e.target) target=e.target;else if(e.srcElement) target=e.srcElement;if(target.nodeType==3)
target=target.parentNode;if(hasClassName(target,"inputLabelActive")&&(target.value==target.title)){target.value='';removeClassName(target,"inputLabelActive")}}},blur: function(){return function(e){var target;if(!e) var e=window.event;if(e.target) target=e.target;else if(e.srcElement) target=e.srcElement;if(target.nodeType==3)
target=target.parentNode;if(target.value==''){addClassName(target,"inputLabelActive");target.value=target.title}}},isForm: function(node){return(node.tagName&&node.tagName.toLowerCase()=='form')},submit: function(){return function(e){var target;if(!e) var e=window.event;if(e.target) target=e.target;else if(e.srcElement) target=e.srcElement;if(target.nodeType==3)
target=target.parentNode;var elements=cssQuery("input[title].inputLabelActive");for(var i=0;i<elements.length;i++){var element=elements[i];if(hasClassName(element,"inputLabelActive")&&(element.value==element.title)){element.value='';removeClassName(element,"inputLabelActive")}}
if(target.inputLabelData.oldsubmit)
return this.inputLabelData.oldsubmit()}},init: function(){var elements=cssQuery("input[title].inputLabel");for(var i=0;i<elements.length;i++){var element=elements[i];var form=findContainer(element,ploneInputLabel.isForm);if(element.value==''){element.value=element.title;replaceClassName(element,"inputLabel","inputLabelActive")}
registerEventListener(element,'focus',ploneInputLabel.focus());registerEventListener(element,'blur',ploneInputLabel.blur());if(form.onsubmit!=ploneInputLabel.submit){if(typeof form.inputLabelData=='undefined')
form.inputLabelData=new Object();form.inputLabelData.oldsubmit=form.onsubmit;form.onsubmit=ploneInputLabel.submit()}}}};registerPloneFunction(ploneInputLabel.init);

/* - highlightsearchterms.js - */
// http://glazes.org/portal_javascripts/highlightsearchterms.js?original=1
function highlightTermInNode(node,word){var contents=node.nodeValue;var index=contents.toLowerCase().indexOf(word.toLowerCase());if(index<0){return false};var parent=node.parentNode;if(parent.className!="highlightedSearchTerm"){var hiword=document.createElement("span");hiword.className="highlightedSearchTerm";hiword.appendChild(document.createTextNode(contents.substr(index,word.length)));parent.insertBefore(document.createTextNode(contents.substr(0,index)),node);parent.insertBefore(hiword,node);parent.insertBefore(document.createTextNode(contents.substr(index+word.length)),node);parent.removeChild(node)}}
function highlightSearchTerms(terms,startnode){if(!W3CDOM){return false};if(!terms){return false};if(!startnode){return false};for(var term_index=0;term_index<terms.length;term_index++){var term=terms[term_index];if(term.length<1)
continue;var term_lower=term.toLowerCase();if(term_lower!='not'&&term_lower!='and'&&term_lower!='or'){walkTextNodes(startnode,highlightTermInNode,term)}}}
function getSearchTermsFromURI(uri){var query;if(typeof decodeURI!='undefined'){query=decodeURI(uri)} else if(typeof unescape!='undefined'){query=unescape(uri)} else{}
var result=new Array();if(window.decodeReferrer){var referrerSearch=decodeReferrer();if(null!=referrerSearch&&referrerSearch.length>0){result=referrerSearch}}
var qfinder=new RegExp("(searchterm|SearchableText)=([^&]*)","gi");var qq=qfinder.exec(query);if(qq&&qq[2]){var terms=qq[2].replace(/\+/g,' ').split(' ');for(var i=0;i<terms.length;i++){if(terms[i]!=''){result.push(terms[i])}}
return result}
return result.length==0?false:result}
function highlightSearchTermsFromURI(){if(!W3CDOM){return false};var terms=getSearchTermsFromURI(window.location.search);var contentarea=getContentArea();highlightSearchTerms(terms,contentarea)}
registerPloneFunction(highlightSearchTermsFromURI);

/* - se-highlight.js - */
// http://glazes.org/portal_javascripts/se-highlight.js?original=1
var searchEngines=[['^http://([^.]+\\.)?google.*','q='],['^http://search\\.yahoo.*','p='],['^http://search\\.msn.*','q='],['^http://search\\.aol.*','userQuery='],['^http://(www\\.)?altavista.*','q='],['^http://(www\\.)?feedster.*','q='],['^http://search\\.lycos.*','query='],['^http://(www\\.)?alltheweb.*','q='],['^http://(www\\.)?ask\\.com.*','q=']]
function decodeReferrer(ref){if(null==ref&&document.referrer){ref=document.referrer}
if(!ref) return null;var match=new RegExp('');var seQuery='';for(var i=0;i<searchEngines.length;i++){if(!match.compile){match=new RegExp(searchEngines[i][0],'i')} else{match.compile(searchEngines[i][0],'i')}
if(ref.match(match)){if(!match.compile){match=new RegExp('^.*[?&]'+searchEngines[i][1]+'([^&]+)&?.*$','i')} else{match.compile('^.*[?&]'+searchEngines[i][1]+'([^&]+)&?.*$')}
seQuery=ref.replace(match,'$1');if(seQuery){seQuery=decodeURIComponent(seQuery);seQuery=seQuery.replace(/\'|"/, '');return seQuery.split(/[\s,\+\.]+/)}}}
return null}


/* - first_input_focus.js - */
// http://glazes.org/portal_javascripts/first_input_focus.js?original=1
function setFocus(){if(!W3CDOM){return false};var $elements=cssQuery("form div.error input,"+"form div.error textarea,"+"form div.error select");if($elements.length>0){$elements[0].focus();return}
$elements=cssQuery("form.enableAutoFocus input[type=text],"+"form.enableAutoFocus textarea");for(var i=0;i<$elements.length;i++){if($elements[i].type=='hidden'){continue}
$elements[i].focus();break}}
if(typeof addDOMLoadEvent!="undefined"){addDOMLoadEvent(setFocus)}


/* - accessibility.js - */
// http://glazes.org/portal_javascripts/accessibility.js?original=1
function setBaseFontSize(fontsize,reset){var body=cssQuery('body')[0];if(reset==1){removeClassName(body,'smallText');removeClassName(body,'largeText');createCookie("fontsize",fontsize,365)}
addClassName(body,fontsize)};
function initBaseFontSize(){var fontsize=readCookie("fontsize");if(fontsize!=null){setBaseFontSize(fontsize,0)}};registerPloneFunction(initBaseFontSize);

/* - styleswitcher.js - */
// http://glazes.org/portal_javascripts/styleswitcher.js?original=1
function setActiveStyleSheet(title,reset){if(!W3CDOM){return false};var i,a,main;for(i=0;(a=document.getElementsByTagName("link")[i]);i++){if(a.getAttribute("rel").indexOf("style")!=-1&&a.getAttribute("title")){a.disabled=true;if(a.getAttribute("title")==title){a.disabled=false}}}
if(reset==1){createCookie("wstyle",title,365)}};
function setStyle(){var style=readCookie("wstyle");if(style!=null){setActiveStyleSheet(style,0)}};registerPloneFunction(setStyle);

/* - toc.js - */
// http://glazes.org/portal_javascripts/toc.js?original=1
function walkHeaders(node,func,data){if(!node){return false}
var valid=Array("h1","h2","h3","h4");if(node.hasChildNodes){var child=node.firstChild;while(child){walkHeaders(child,func,data);child=child.nextSibling}
var type=node.tagName;if(type){type=type.toLowerCase();for(var k=0;k<valid.length;k++){if(valid[k]==type){func(node,data);break}}}}}
function locationWithoutHash(){var loc=window.location.href;var hash=window.location.hash;if(!hash){return loc} else{return loc.substring(0,loc.lastIndexOf(hash))}}
function createTableOfContents(){var toc=cssQuery('dl.toc');if(toc.length==0){return}
toc=toc[0];var dest=cssQuery('dl.toc dd.portletItem');if(dest.length==0){return}
dest=dest[0];if(dest.hasChildNodes()){while(dest.childNodes.length>=1){dest.removeChild(dest.firstChild)}}
var content=getContentArea();if(!content){return}
var location=locationWithoutHash();var ols=[];var i=0;var func=function(node,data){if(hasClassName(node,"documentFirstHeading"))
return;var li=document.createElement('li');var link=document.createElement('a');link.appendChild(document.createTextNode(getInnerTextFast(node)));link.href=location+'#section-'+i;li.appendChild(link);var anchor=document.createElement('a');anchor.name='section-'+i;node.parentNode.insertBefore(anchor,node);var level=node.nodeName.substring(1)-1;while(ols.length<level){var ol=document.createElement('ol');if(ols.length>0){if(!ols[ols.length-1].lastChild){ols[ols.length-1].appendChild(document.createElement('li'))}
ols[ols.length-1].lastChild.appendChild(ol)}
ols.push(ol)}
while(ols.length>level){ols.pop()}
ols[ols.length-1].appendChild(li);i++}
walkHeaders(content,func);if(ols.length>0){toc.style.display="block";dest.appendChild(ols[0])}}
registerPloneFunction(createTableOfContents);

