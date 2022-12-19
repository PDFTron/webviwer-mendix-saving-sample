/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[16],{440:function(Aa,ua,r){function pa(){var z={promise:null,resolve:null,reject:null,state:0,result:null,request:null,Ys:function(){return 1===(z.state&1)},Kda:function(){return 2===(z.state&2)},Ki:function(){return!z.Kda()&&!z.Ys()},lda:function(){return 4===(z.state&4)},mY:function(){z.state|=4}};z.promise=new Promise(function(w,ea){z.resolve=function(){if(0===z.state||4===z.state)z.state=1,z.result=arguments[0],w.apply(null,
arguments)};z.reject=function(){if(0===z.state||4===z.state)z.state=2,ea.apply(null,arguments)}});return z}function ka(){return!1}function ma(z,w,ea){if(!(w in n))return!0;w=n[w];for(var ja=0;ja<w.length;ja++){var ca=z;var ba=w[ja];var fa=ea;if(ba.name in ca){var ia="",la=!1;ca=ca[ba.name];switch(ba.type){case "s":ia="String";la=Object(da.isString)(ca);break;case "a":ia="Array";la=Object(da.isArray)(ca);break;case "n":ia="Number";la=Object(da.isNumber)(ca)&&Object(da.isFinite)(ca);break;case "o":ia=
"Object",la=Object(da.isObject)(ca)&&!Object(da.isArray)(ca)}la||fa.reject('Expected response field "'+ba.name+'" to have type '+ia);ba=la}else fa.reject('Response missing field "'+ba.name+'"'),ba=!1;if(!ba)return!1}return!0}r.r(ua);var ha=r(1),da=r(0);r.n(da);var aa=r(2);Aa=r(51);var x=r(32),y=r(458),h=r(94),e=r(372),b=r(40),a=r(165),f=function(){function z(){this.Is={};this.Eb=[]}z.prototype.pop=function(){var w=this.Eb.pop();this.Is[w.key]=void 0;return w};z.prototype.push=function(w,ea){ea={key:w,
data:ea};this.Eb.push(ea);this.Is[w]=ea.data};z.prototype.contains=function(w){return!!this.Is[w]};z.prototype.get=function(w){return this.Is[w]};z.prototype.set=function(w,ea){var ja=this;this.Is[w]=ea;this.Eb.forEach(function(ca,ba){ca.key===w&&(ja.Eb[ba]=ca)})};z.prototype.remove=function(w){var ea=this;this.Is[w]=void 0;this.Eb.forEach(function(ja,ca){ja.key===w&&ea.Eb.splice(ca,1)})};z.prototype.length=function(){return this.Eb.length};return z}(),n={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",
type:"s"}],docmod:[{name:"url",type:"s"},{name:"rID",type:"s"}],health:[],tiles:[{name:"z",type:"n"},{name:"rID",type:"n"},{name:"tiles",type:"a"},{name:"size",type:"n"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],ApString2Xod:[{name:"url",type:"s"},{name:"rID",type:"s"}]};r=function(){function z(w,ea,ja){var ca=this;this.AM=this.SR=!1;this.ah=
this.hu=this.BK=this.kH=this.qm=null;this.Vl=pa();this.np=pa();this.jB=!1;this.Gg=this.ze=this.Ae=this.lf=null;this.If=[];this.UB=[];this.cache={};this.timeStamp=0;this.Wg=[];this.Ui=[];this.lI=null;this.GR=!1;this.dY=this.id=null;this.pK=this.fU=ka;this.Xh=0;this.tJ=!1;this.KV=1;this.Pi={};this.Er=0;this.At=new f;ea.endsWith("/")||(ea+="/");ja=ja||{};this.SR=ja.disableWebsockets||!1;this.AM=ja.singleServerMode||!1;null!=ja.customQueryParameters&&Object(b.b)("wvsQueryParameters",ja.customQueryParameters);
ea.endsWith("blackbox/")||(ea+="blackbox/");this.qm=ja.uploadData||null;this.hu=ja.uriData||null;this.kH=ja.cacheKey||null;this.BK=ja.officeOptions||null;this.mf=ea;this.OH=w;this.Oq(!0);this.Tr=(new y.a(ea,null,this.Wj())).D$(!this.SR,function(ba){ca.dfa(ba)},function(){return null},function(){ca.jB=!1},function(){ca.hia()})}z.prototype.l7=function(){var w=this;return new Promise(function(ea,ja){var ca=new XMLHttpRequest;ca.open("GET",w.mf+"ck");ca.withCredentials=w.Wj();ca.onreadystatechange=function(){ca.readyState===
XMLHttpRequest.DONE&&(200===ca.status?ea():ja())};ca.send()})};z.prototype.Ija=function(w){this.fU=w||ka;this.pK=ka};z.prototype.T5=function(){this.IX();return this.Tr.yp(!0)};z.prototype.IX=function(){Object(ha.b)(this,void 0,void 0,function(){return Object(ha.d)(this,function(w){switch(w.label){case 0:return this.np=pa(),this.Vl=pa(),this.jB=!1,this.id=null,this.GR=!1,[4,this.l7()];case 1:return w.ea(),[2]}})})};z.prototype.hia=function(){this.fU();this.IX();this.lf&&(this.lf.Ki()?this.jh(this.lf.request):
this.lf.Ys()&&this.pK(this.lf.result.url,"pdf")&&(this.lf=null,this.HX()));this.Gg&&this.Gg.Ki()&&this.jh(this.Gg.request);this.Ae&&this.Ae.Ki()?this.jh(this.Ae.request):this.ze&&this.ze.Ki()&&this.TT();var w;for(w=0;w<this.Wg.length;w++)this.Wg[w]&&(this.Wg[w].Ki()?this.jh(this.Wg[w].request):this.Wg[w].Ys()&&this.pK(this.Wg[w].result.url,"image")&&(this.Wg[w]=null,this.eE(Object(da.uniqueId)(),w)));for(w=0;w<this.Ui.length;w++)this.Ui[w]&&this.Ui[w].Ki()&&!this.Ui[w].lda()&&this.jh(this.Ui[w].request);
for(w=0;w<this.If.length;w++)this.If[w]&&this.If[w].Ki()&&this.jh(this.If[w].request)};z.prototype.Xca=function(){return this.jB?Promise.resolve():(this.jB=!0,this.timeStamp=Date.now(),this.Tr.QC())};z.prototype.dma=function(){var w=this,ea,ja,ca,ba,fa;return new Promise(function(ia,la){if(w.qm)ea=new FormData,ea.append("file",w.qm.fileHandle,w.qm.fileHandle.name),ja=w.qm.loadCallback,ba="upload",ca=w.qm.extension;else if(w.hu)ea={uri:w.hu.uri,Ppa:w.hu.shareId},ea=Object.keys(ea).map(function(qa){return qa+
"="+(ea[qa]?encodeURIComponent(ea[qa]):"")}).join("&"),fa="application/x-www-form-urlencoded; charset=UTF-8",ja=w.hu.loadCallback,ba="url",ca=w.hu.extension;else{ia();return}var na=new XMLHttpRequest,ra=Object(x.j)(w.mf,"AuxUpload");ra=Object(a.a)(ra,{type:ba,ext:ca});na.open("POST",ra);na.withCredentials=w.Wj();fa&&na.setRequestHeader("Content-Type",fa);na.addEventListener("load",function(){if(na.readyState===na.DONE&&200===na.status){var qa=JSON.parse(na.response);w.OH=qa.uri;ja(qa);ia(qa)}});na.addEventListener("error",
function(){la(na.statusText+" "+JSON.stringify(na))});w.qm&&null!=w.qm.onProgress&&(na.upload.onprogress=function(qa){w.qm.onProgress(qa)});na.send(ea)})};z.prototype.Zha=function(w){this.password=w||null;this.Vl.Ys()||(this.Vl=pa(),this.jh({t:"pages"}));return this.Vl.promise};z.prototype.Qx=function(w){this.lI=w||null;this.Vl.Ys()||this.jh({t:"pages"});return this.Vl.promise};z.prototype.Dv=function(w){w=Object.assign(w,{uri:encodeURIComponent(this.OH)});this.lI&&(w.ext=this.lI);this.ah&&(w.c=this.ah);
this.password&&(w.pswd=this.password);this.kH&&(w.cacheKey=this.kH);this.BK&&(w.officeOptions=this.BK);return w};z.prototype.Fia=function(){0<this.At.length()&&10>=this.Er&&this.Gia(this.At.pop().data)};z.prototype.u5=function(w){0<this.At.length()&&this.At.contains(w)&&this.At.remove(w)};z.prototype.jh=function(w){w=this.Dv(w);this.Tr.send(w)};z.prototype.$X=function(w,ea){10<this.Er?this.At.push(w,ea):(this.Er++,w=this.Dv(ea),this.Tr.send(w))};z.prototype.Gia=function(w){this.Er++;w=this.Dv(w);
this.Tr.send(w)};z.prototype.gl=function(w){return w};z.prototype.eU=function(w){this.AM&&w?Object(aa.j)("Server failed health check. Single server mode ignoring check."):!this.soa&&w&&3>=this.Xh?(this.tJ=!0,this.Tr.yp()):3<this.Xh&&(this.AM=!0)};z.prototype.dfa=function(w){var ea=this,ja=w.data,ca=w.err,ba=w.t;switch(ba){case "upload":ca?this.ema.reject(ca):this.ema.resolve("Success");break;case "pages":ca?this.Vl.reject(ca):ma(ja,ba,this.Vl)&&this.Vl.resolve(ja);break;case "config":if(ca)this.np.reject(ca);
else if(ma(ja,ba,this.np)){this.eU(ja.unhealthy);ja.id&&(this.id=ja.id);if(ja.auth){var fa=Object(b.a)("wvsQueryParameters");fa.auth=ja.auth;Object(b.b)("wvsQueryParameters",fa)}ja.serverVersion&&(this.XZ=ja.serverVersion,Object(aa.h)("[WebViewer Server] server version: "+this.XZ));ja.serverID?(this.Xh=ja.serverID===this.dY&&this.tJ?this.Xh+1:0,this.dY=ja.serverID):this.Xh=0;this.tJ=!1;this.np.resolve(ja)}break;case "health":ca?this.np.reject(ca):ma(ja,ba,this.np)&&this.eU(ja.unhealthy);break;case "pdf":ja.url=
Object(a.a)(this.mf+"../"+encodeURI(ja.url));ca?this.lf.reject(ca):ma(ja,ba,this.lf)&&this.lf.resolve(ja);break;case "ApString2Xod":ja.url=Object(a.a)(this.mf+"../data/"+encodeURI(ja.url));ca?this.Pi[ja.rID].reject(ca):ma(ja,ba,this.Pi[ja.rID])&&this.Pi[ja.rID].resolve(ja);break;case "docmod":ja.url=Object(a.a)(this.mf+"../"+encodeURI(ja.url));ca?this.Pi[ja.rID].reject(ca):ma(ja,ba,this.lf)&&this.Pi[ja.rID].resolve(ja);break;case "xod":if(ca)this.Ae&&this.Ae.Ki()&&this.Ae.reject(ca),this.ze&&this.ze.Ki()&&
this.ze.reject(ca);else if(ja.notFound)ja.noCreate||this.Ae&&this.Ae.Ki()&&this.Ae.resolve(ja),this.ze&&this.ze.Ki()&&this.ze.resolve(ja);else{ja.url&&(ja.url=Object(a.a)(this.mf+"../"+encodeURI(ja.url)));if(!this.ze||this.ze.Ys())this.ze=pa(),this.ze.request={t:"xod",noCreate:!0};this.Ae||(this.Ae=pa(),this.Ae.request={t:"xod"});this.ze.resolve(ja);this.Ae.resolve(ja)}break;case "annots":if(ca)this.Gg.reject(ca);else if(ma(ja,ba,this.Gg)){this.Gg.mY();var ia=new XMLHttpRequest;fa=this.mf+"../"+encodeURI(ja.url);
var la=ja.hasAppearance?Object(a.a)(fa+".xodapp"):null;ia.open("GET",Object(a.a)(fa));ia.responseType="text";ia.withCredentials=this.Wj();ia.addEventListener("load",function(){ia.readyState===ia.DONE&&200===ia.status&&ea.Gg.resolve({eN:ia.response,MA:la})});ia.addEventListener("error",function(){ea.Gg.reject(ia.statusText+" "+JSON.stringify(ia))});ia.send()}break;case "image":this.Er--;var na=this.Wg[ja.p];ca?na.promise.reject(ca):ma(ja,ba,na)&&(na.result=ja,na.result.url=Object(a.a)(this.mf+"../"+
encodeURI(na.result.url)),na.resolve(na.result));break;case "tiles":this.Er--;na=ja.rID;fa=this.If[na];this.If[na]=null;this.UB.push(na);if(ca)fa.reject(ca);else if(ma(ja,ba,fa)){for(ca=0;ca<ja.tiles.length;ca++)ja.tiles[ca]=Object(a.a)(this.mf+"../"+encodeURI(ja.tiles[ca]));fa.resolve(ja)}break;case "text":na=this.Ui[ja.p];if(ca)na.reject(ca);else if(ma(ja,ba,na)){na.mY();var ra=new XMLHttpRequest;ja=Object(a.a)(this.mf+"../"+encodeURI(ja.url));ra.open("GET",ja);ra.withCredentials=this.Wj();ra.addEventListener("load",
function(){ra.readyState===ra.DONE&&200===ra.status&&(na.result=JSON.parse(ra.response),na.resolve(na.result))});ra.addEventListener("error",function(qa){na.reject(ra.statusText+" "+JSON.stringify(qa))});ra.send()}break;case "progress":"loading"===ja.t&&this.trigger(h.a.Events.DOCUMENT_LOADING_PROGRESS,[ja.bytes,ja.total])}this.Fia();!ba&&w.echo&&w&&"apstring2xod"===w.echo.t&&(w=w.echo.reqID)&&(2<=parseInt(this.XZ,10)?this.Pi[w].reject("Message unhandled by server"):this.Pi[w].reject())};z.prototype.iaa=
function(){return Object(ha.b)(this,void 0,void 0,function(){return Object(ha.d)(this,function(w){switch(w.label){case 0:return[4,this.Xca()];case 1:return w.ea(),[2,this.np.promise]}})})};z.prototype.T$=function(w){for(var ea=this,ja=new XMLHttpRequest,ca=Object(a.a)(this.mf+"aul",{id:this.id}),ba=new FormData,fa={},ia=0;ia<w.body.length;ia++){var la=w.body[ia];fa[la.id]=la.YG.w+";"+la.YG.h;ba.append(la.id,la.YG.dataString)}w={t:"apstring2xod",reqID:this.KV++,parts:fa};var na=this.Dv(w);ba.append("msg",
JSON.stringify(na));this.Pi[na.reqID]=pa();ja.open("POST",ca);ja.withCredentials=this.Wj;ca=new Promise(function(ra,qa){ja.onreadystatechange=function(){4===ja.readyState&&(200===ja.status?ra():qa("An error occurred while sending down appearance strings to the server"))}});ja.send(ba);return ca.then(function(){return ea.Pi[na.reqID].promise})};z.prototype.S$=function(){this.Gg||(this.Gg=pa(),this.Gg.request={t:"annots"},this.jh(this.Gg.request));return this.Gg.promise};z.prototype.eE=function(w,ea){this.Wg[ea]||
(this.Wg[ea]=pa(),this.Wg[ea].request={t:"image",p:ea},this.$X(w,this.Wg[ea].request));return this.Wg[ea].promise};z.prototype.$ha=function(w){this.Ui[w]||(this.Ui[w]=pa(),this.Ui[w].request={t:"text",p:w},this.jh(this.Ui[w].request));return this.Ui[w].promise};z.prototype.aia=function(w,ea,ja,ca,ba){var fa=this.If.length;this.UB.length&&(fa=this.UB.pop());this.If[fa]=pa();this.If[fa].request={t:"tiles",p:ea,z:ja,r:ca,size:ba,rID:fa};this.$X(w,this.If[fa].request);return this.If[fa].promise};z.prototype.HX=
function(){this.lf||(this.lf=pa(),this.lf.request={t:"pdf"},this.GR?this.lf.resolve({url:this.OH}):this.jh(this.lf.request));return this.lf.promise};z.prototype.oT=function(w){var ea=this,ja=new XMLHttpRequest,ca=Object(a.a)(this.mf+"aul",{id:this.id}),ba=new FormData,fa={};w.annots&&(fa.annots="xfdf");w.watermark&&(fa.watermark="png");w.redactions&&(fa.redactions="redact");fa={t:"docmod",reqID:this.KV++,parts:fa};w.print&&(fa.print=!0);var ia=this.Dv(fa);ba.append("msg",JSON.stringify(ia));return Promise.all([w.annots,
w.watermark,w.redactions].map(function(la){return Promise.resolve(la)})).then(function(la){var na=la[0],ra=la[1];la=la[2];na&&ba.append("annots",na);ra&&ba.append("watermark",ra);la&&ba.append("redactions",la);ea.Pi[ia.reqID]=pa();ja.open("POST",ca);ja.withCredentials=ea.Wj;na=new Promise(function(qa,ta){ja.onreadystatechange=function(){4===ja.readyState&&(200===ja.status?qa():ta("An error occurred while sending down annotation data to the server"))}});ja.send(ba);return na.then(function(){return ea.Pi[ia.reqID].promise})})};
z.prototype.TT=function(){this.ze||(this.ze=pa(),this.ze.request={t:"xod",noCreate:!0},this.jh(this.ze.request));return this.ze.promise};z.prototype.bia=function(){this.Ae||(this.Ae=pa(),this.Ae.request={t:"xod"},this.jh(this.Ae.request));return this.Ae.promise};z.prototype.bo=function(){return!0};z.prototype.request=function(){};z.prototype.bX=function(){};z.prototype.abort=function(){for(var w=0;w<this.If.length;w++)this.If[w]&&(this.If[w].resolve(null),this.If[w]=null,this.UB.push(w));this.close()};
z.prototype.rE=function(w){this.ah=this.ah||{};this.ah.headers=w};z.prototype.Oq=function(w){this.ah=this.ah||{};this.ah.internal=this.ah.internal||{};this.ah.internal.withCredentials=w};z.prototype.Wj=function(){return this.ah&&this.ah.internal?this.ah.internal.withCredentials:null};z.prototype.getFileData=function(){return Promise.reject()};return z}();Object(Aa.a)(r);Object(e.a)(r);Object(e.b)(r);ua["default"]=r},458:function(Aa,ua,r){var pa=r(1),ka=r(2),ma=r(32),ha=r(40),da=r(165),aa=r(112),x=
function(){function h(e,b,a,f,n,z){void 0===a&&(a=null);void 0===f&&(f=null);void 0===n&&(n=null);void 0===z&&(z=null);this.rV=!1;this.Xh=0;this.MQ=this.zma(e);this.url=b?this.MQ+"/"+b:this.MQ+"/ws";this.GH=a;this.tx=f;this.Bv=n;this.FL=z}h.prototype.zma=function(e){var b=e.indexOf("://"),a="ws://";0>b?b=0:(5===b&&(a="wss://"),b+=3);var f=e.lastIndexOf("/");0>f&&(f=e.length);return a+e.slice(b,f)};h.prototype.send=function(e){this.xo.readyState===WebSocket.CLOSED||this.rV||this.xo.send(JSON.stringify(e))};
h.prototype.QC=function(){return Object(pa.b)(this,void 0,void 0,function(){var e,b=this;return Object(pa.d)(this,function(){e=Object(ha.a)("wvsQueryParameters");e.bcid=Object(ma.k)(8);Object(ha.b)("wvsQueryParameters",e);return[2,new Promise(function(a,f){var n=Object(da.a)(b.url);b.xo=new WebSocket(n);b.xo.onopen=function(){b.tx&&b.tx();a()};b.xo.onerror=function(z){b.rV=!0;f(z)};b.xo.onclose=function(z){var w=z.code;return Object(pa.b)(b,void 0,void 0,function(){var ea=this;return Object(pa.d)(this,
function(ja){switch(ja.label){case 0:return this.Bv&&this.Bv(),3E3===w?[3,3]:8>this.Xh++?[4,new Promise(function(ca){return setTimeout(function(){return Object(pa.b)(ea,void 0,void 0,function(){return Object(pa.d)(this,function(ba){switch(ba.label){case 0:return this.FL(),[4,this.QC()];case 1:return ba.ea(),ca(),[2]}})})},3E3)})]:[3,2];case 1:return ja.ea(),[3,3];case 2:f(aa.a),ja.label=3;case 3:return[2]}})})};b.xo.onmessage=function(z){z&&z.data&&(z=JSON.parse(z.data),z.hb?b.send({hb:!0}):z.end?
close():b.GH(z))}})]})})};h.prototype.yp=function(e){void 0===e&&(e=!1);this.Xh=0;e?this.xo.close(3E3):this.xo.close();return Promise.resolve()};return h}(),y=function(){function h(e,b,a,f,n,z,w){void 0===f&&(f=null);void 0===n&&(n=null);void 0===z&&(z=null);void 0===w&&(w=null);this.Xh=this.dE=this.id=0;this.Gw=!1;this.request=null;e=this.zga(e);this.url=b?e+"/"+b+"pf":e+"/pf";this.ZE=a;this.GH=f;this.tx=n;this.Bv=z;this.FL=w}h.prototype.zga=function(e){var b=e.lastIndexOf("/");0>b&&(b=e.length);
return e.slice(0,b)};h.prototype.U6=function(e){e=e.split("\n");for(e[e.length-1]&&e.pop();0<e.length&&3>e[e.length-1].length;)"]"===e.pop()&&(this.id=0);0<e.length&&3>e[0].length&&e.shift();for(var b=0;b<e.length;++b)e[b].endsWith(",")&&(e[b]=e[b].substr(0,e[b].length-1));return e};h.prototype.RX=function(){return Object(pa.b)(this,void 0,void 0,function(){var e=this;return Object(pa.d)(this,function(b){switch(b.label){case 0:return 8>this.Xh++?[4,new Promise(function(a){return setTimeout(function(){e.FL();
e.QC();a()},3E3)})]:[3,2];case 1:b.ea(),b.label=2;case 2:return[2]}})})};h.prototype.Bga=function(e){Object(pa.b)(this,void 0,void 0,function(){var b,a;return Object(pa.d)(this,function(f){switch(f.label){case 0:b=null,a=0,f.label=1;case 1:if(!(a<e.length))return[3,6];b=JSON.parse(e[a]);if(!b)return[3,5];if(!b.end)return[3,2];close();return[3,5];case 2:if(!b.id||Number(b.id)===this.id)return[3,4];Object(ka.j)("Reconnecting, new server detected");this.yp();return[4,this.RX()];case 3:return f.ea(),
[3,5];case 4:b.hb&&Number(b.id)===this.id?this.send({hb:!0}):this.Gw||this.GH(b),f.label=5;case 5:return++a,[3,1];case 6:return[2]}})})};h.prototype.afa=function(e){Object(pa.b)(this,void 0,void 0,function(){var b,a,f;return Object(pa.d)(this,function(n){switch(n.label){case 0:if(!(3<=e.readyState))return[3,2];try{b=e.responseText.length}catch(z){return Object(ka.h)("caught exception"),[2]}if(0<b)try{a=this.U6(e.responseText),0===this.id&&0<a.length&&(f=JSON.parse(a.shift()),this.id=f.id,this.Xh=
0),this.Bga(a)}catch(z){}return this.Gw?[3,2]:[4,this.vS()];case 1:n.ea(),n.label=2;case 2:return[2]}})})};h.prototype.vS=function(){return Object(pa.b)(this,void 0,void 0,function(){var e=this;return Object(pa.d)(this,function(){return[2,new Promise(function(b,a){function f(){return Object(pa.b)(e,void 0,void 0,function(){return Object(pa.d)(this,function(z){switch(z.label){case 0:a(),this.yp(),z.label=1;case 1:return this.Gw&&8>this.Xh?[4,this.RX()]:[3,3];case 2:return z.ea(),[3,1];case 3:return[2]}})})}
e.request=new XMLHttpRequest;e.request.withCredentials=e.ZE;var n=Object(da.a)(e.url,0!==e.id?{id:String(e.id),uc:String(e.dE)}:{uc:String(e.dE)});e.dE++;e.request.open("GET",n,!0);e.request.setRequestHeader("Cache-Control","no-cache");e.request.setRequestHeader("X-Requested-With","XMLHttpRequest");e.request.onreadystatechange=function(){e.afa(e.request)};e.request.addEventListener("error",f);e.request.addEventListener("timeout",f);e.request.addEventListener("load",function(){e.tx&&e.tx();b()});e.request.send()})]})})};
h.prototype.QC=function(){var e=Object(ha.a)("wvsQueryParameters");e.bcid=Object(ma.k)(8);Object(ha.b)("wvsQueryParameters",e);this.dE=this.id=0;this.Gw=!1;return this.vS()};h.prototype.send=function(e){var b=this,a=new XMLHttpRequest;a.withCredentials=this.ZE;var f=Object(da.a)(this.url,{id:String(this.id)}),n=new FormData;n.append("data",JSON.stringify(e));a.addEventListener("error",function(){b.yp()});a.open("POST",f);a.setRequestHeader("X-Requested-With","XMLHttpRequest");a.send(n)};h.prototype.yp=
function(){this.id=0;this.Gw=!0;this.Bv&&this.Bv();this.request.abort();return Promise.resolve()};return h}();Aa=function(){function h(e,b,a){this.jR=e;this.target=b;this.ZE=a}h.prototype.D$=function(e,b,a,f,n){void 0===e&&(e=!0);void 0===b&&(b=null);void 0===a&&(a=null);void 0===f&&(f=null);void 0===n&&(n=null);return e?new x(this.jR,this.target,b,a,f,n):new y(this.jR,this.target,this.ZE,b,a,f,n)};return h}();ua.a=Aa}}]);}).call(this || window)