(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-258412ab"],{"0cb2":function(e,t,o){var r=o("7b0b"),n=Math.floor,l="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,o,s,c,u){var d=o+e.length,f=s.length,p=i;return void 0!==c&&(c=r(c),p=a),l.call(u,p,(function(r,l){var a;switch(l.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,o);case"'":return t.slice(d);case"<":a=c[l.slice(1,-1)];break;default:var i=+l;if(0===i)return r;if(i>f){var u=n(i/10);return 0===u?r:u<=f?void 0===s[u-1]?l.charAt(1):s[u-1]+l.charAt(1):r}a=s[i-1]}return void 0===a?"":a}))}},"14c3":function(e,t,o){var r=o("c6b6"),n=o("9263");e.exports=function(e,t){var o=e.exec;if("function"===typeof o){var l=o.call(e,t);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"25f0":function(e,t,o){"use strict";var r=o("6eeb"),n=o("825a"),l=o("d039"),a=o("ad6d"),i="toString",s=RegExp.prototype,c=s[i],u=l((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=i;(u||d)&&r(RegExp.prototype,i,(function(){var e=n(this),t=String(e.source),o=e.flags,r=String(void 0===o&&e instanceof RegExp&&!("flags"in s)?a.call(e):o);return"/"+t+"/"+r}),{unsafe:!0})},"4de4":function(e,t,o){"use strict";var r=o("23e7"),n=o("b727").filter,l=o("1dde"),a=l("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,o){"use strict";var r=o("d784"),n=o("825a"),l=o("50c4"),a=o("a691"),i=o("1d80"),s=o("8aa5"),c=o("0cb2"),u=o("14c3"),d=Math.max,f=Math.min,p=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,o,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=r.REPLACE_KEEPS_$0,g=m?"$":"$0";return[function(o,r){var n=i(this),l=void 0==o?void 0:o[e];return void 0!==l?l.call(o,n,r):t.call(String(n),o,r)},function(e,r){if(!m&&h||"string"===typeof r&&-1===r.indexOf(g)){var i=o(t,e,this,r);if(i.done)return i.value}var b=n(e),v=String(this),x="function"===typeof r;x||(r=String(r));var S=b.global;if(S){var y=b.unicode;b.lastIndex=0}var k=[];while(1){var U=u(b,v);if(null===U)break;if(k.push(U),!S)break;var w=String(U[0]);""===w&&(b.lastIndex=s(v,l(b.lastIndex),y))}for(var C="",$=0,R=0;R<k.length;R++){U=k[R];for(var _=String(U[0]),E=d(f(a(U.index),v.length),0),T=[],I=1;I<U.length;I++)T.push(p(U[I]));var j=U.groups;if(x){var A=[_].concat(T,E,v);void 0!==j&&A.push(j);var N=String(r.apply(void 0,A))}else N=c(_,v,E,T,j,r);E>=$&&(C+=v.slice($,E)+N,$=E+_.length)}return C+v.slice($)}]}))},6547:function(e,t,o){var r=o("a691"),n=o("1d80"),l=function(e){return function(t,o){var l,a,i=String(n(t)),s=r(o),c=i.length;return s<0||s>=c?e?"":void 0:(l=i.charCodeAt(s),l<55296||l>56319||s+1===c||(a=i.charCodeAt(s+1))<56320||a>57343?e?i.charAt(s):l:e?i.slice(s,s+2):a-56320+(l-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"8aa5":function(e,t,o){"use strict";var r=o("6547").charAt;e.exports=function(e,t,o){return t+(o?r(e,t).length:1)}},9263:function(e,t,o){"use strict";var r=o("ad6d"),n=o("9f7f"),l=o("5692"),a=RegExp.prototype.exec,i=l("native-string-replace",String.prototype.replace),s=a,c=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=n.UNSUPPORTED_Y||n.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],f=c||d||u;f&&(s=function(e){var t,o,n,l,s=this,f=u&&s.sticky,p=r.call(s),m=s.source,h=0,g=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==e[s.lastIndex-1])&&(m="(?: "+m+")",g=" "+g,h++),o=new RegExp("^(?:"+m+")",p)),d&&(o=new RegExp("^"+m+"$(?!\\s)",p)),c&&(t=s.lastIndex),n=a.call(f?o:s,g),f?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=s.lastIndex,s.lastIndex+=n[0].length):s.lastIndex=0:c&&n&&(s.lastIndex=s.global?n.index+n[0].length:t),d&&n&&n.length>1&&i.call(n[0],o,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(n[l]=void 0)})),n}),e.exports=s},"9f7f":function(e,t,o){"use strict";var r=o("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a640:function(e,t,o){"use strict";var r=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&r((function(){o.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[e._v(" Subscription Converter "),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),o("div",{staticStyle:{display:"inline-block",position:"absolute",right:"20px"}},[e._v(e._s(e.backendVersion))])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"80px","label-position":"left"}},[o("el-form-item",{attrs:{label:"模式设置:"}},[o("el-radio",{attrs:{label:"1"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("基础模式")]),o("el-radio",{attrs:{label:"2"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("进阶模式")])],1),o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持订阅或ss/ssr/vmess链接，多个链接每行一个或用 | 分隔"},on:{blur:e.saveSubUrl},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"客户端:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),"2"===e.advanced?o("div",[o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-autocomplete",{staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.backendSearch,placeholder:"动动小手，（建议）自行搭建后端服务。例：http://127.0.0.1:25500/sub?"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},[o("el-button",{attrs:{slot:"append",icon:"el-icon-link"},on:{click:e.gotoGayhub},slot:"append"},[e._v("前往项目仓库")])],1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},[e._l(e.options.remoteConfig,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),o("el-button",{attrs:{slot:"append",icon:"el-icon-link"},on:{click:e.gotoRemoteConfig},slot:"append"},[e._v("配置示例")])],2)],1),o("el-form-item",{attrs:{label:"Include:"}},[o("el-input",{attrs:{placeholder:"节点名包含的关键字，支持正则"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"Exclude:"}},[o("el-input",{attrs:{placeholder:"节点名不包含的关键字，支持正则"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"FileName:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"输出为 Node List",border:""},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),o("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[o("el-row",[o("el-checkbox",{attrs:{label:"Emoji"},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Clash New Field"},model:{value:e.form.new_name,callback:function(t){e.$set(e.form,"new_name",t)},expression:"form.new_name"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"启用 UDP"},on:{change:function(t){e.needUdp=!0}},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"节点类型"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"排序节点"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"过滤非法节点"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("更多选项")])],1),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{placement:"bottom"}},[o("el-row",[o("el-checkbox",{attrs:{label:"Surge.DoH"},model:{value:e.form.tpl.surge.doh,callback:function(t){e.$set(e.form.tpl.surge,"doh",t)},expression:"form.tpl.surge.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Clash.DoH"},model:{value:e.form.tpl.clash.doh,callback:function(t){e.$set(e.form.tpl.clash,"doh",t)},expression:"form.tpl.clash.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"网易云"},model:{value:e.form.insert,callback:function(t){e.$set(e.form,"insert",t)},expression:"form.insert"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("定制功能")])],1)],1)],1)],1):e._e(),o("div",{staticStyle:{"margin-top":"50px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("i",{staticClass:"el-icon-magic-stick"})]),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{attrs:{label:"订阅短链:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.curtomShortSubUrl,callback:function(t){e.curtomShortSubUrl=t},expression:"curtomShortSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.curtomShortSubUrl,expression:"curtomShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("生成订阅链接")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",loading:e.loading,disabled:0===e.customSubUrl.length},on:{click:e.makeShortUrl}},[e._v("生成短链接")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-upload",loading:e.loading},on:{click:function(t){e.dialogUploadConfigVisible=!0}}},[e._v("上传配置")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("一键导入Clash")])],1)],1)],1)],1)],1)],1),o("el-dialog",{attrs:{visible:e.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"700px"},on:{"update:visible":function(t){e.dialogUploadConfigVisible=t}}},[o("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Remote config upload "),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"hover",placement:"right"}},[o("el-link",{attrs:{type:"primary",href:e.sampleConfig,target:"_blank",icon:"el-icon-info"}},[e._v("参考配置")]),o("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})],1)],1),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadConfig"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"5000","show-word-limit":""},model:{value:e.uploadConfig,callback:function(t){e.uploadConfig=t},expression:"uploadConfig"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.uploadConfig="",e.dialogUploadConfigVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===e.uploadConfig.length},on:{click:e.confirmUploadConfig}},[e._v("确 定")])],1)],1)],1)},n=[],l=(o("4de4"),o("c975"),o("d3b7"),o("ac1f"),o("25f0"),o("5319"),"https://github.com/Soroke/sub-web"),a="https://raw.githubusercontent.com/tindy2013/subconverter/master/base/config/example_external_config.ini",i="https://github.com/tindy2013/subconverter/releases",s="https://sub.soroke.top/sub?",c="https://suo.yt/short",u="https://api.wcc.best/config/upload",d="https://t.me/CareyWong_bot",f={data:function(){return{backendVersion:"",advanced:"2",isPC:!0,options:{clientTypes:{Clash:"clash",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan",QuantumultX:"quanx",Surfboard:"surfboard",Loon:"loon",SSAndroid:"sssub",V2Ray:"v2ray",ss:"ss",ssr:"ssr",ssd:"ssd",ClashR:"clashr",Surge2:"surge&ver=2"},backendOptions:[{value:"http://127.0.0.1:25500/sub?"}],remoteConfig:[{label:"universal",options:[{label:"No-Urltest",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini"},{label:"Urltest",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini"}]},{label:"customized",options:[{label:"Maying",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini"},{label:"Ytoo",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini"},{label:"FlowerCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini"},{label:"NyanCAT",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nyancat.ini"},{label:"Nexitally",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini"},{label:"SoCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini"},{label:"ARK",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini"},{label:"ssrCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini"}]},{label:"Special",options:[{label:"NeteaseUnblock(仅规则，No-Urltest)",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini"},{label:"Basic(仅GEOIP CN + Final)",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"",remoteConfig:"",excludeRemarks:"",includeRemarks:"",filename:"",emoji:!0,nodeList:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,scv:!1,fdn:!1,appendType:!1,insert:!1,new_name:!0,tpl:{surge:{doh:!1},clash:{doh:!1}}},loading:!1,customSubUrl:"",curtomShortSubUrl:"",dialogUploadConfigVisible:!1,uploadConfig:"",uploadPassword:"",myBot:d,sampleConfig:a,needUdp:!1}},created:function(){document.title="Subscription Converter",this.isPC=this.$getOS().isPc,this.form.sourceSubUrl=this.getLocalStorageItem("sourceSubUrl")},mounted:function(){this.form.clientType="clash",this.notify(),this.getBackendVersion()},methods:{onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(l)},gotoGayhub:function(){window.open(i)},gotoRemoteConfig:function(){window.open(a)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},makeUrl:function(){if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;var e=""===this.form.customBackend?s:this.form.customBackend,t=this.form.sourceSubUrl;t=t.replace(/(\n|\r|\n\r)/g,"|"),this.customSubUrl=e+"target="+this.form.clientType+"&url="+encodeURIComponent(t)+"&insert="+this.form.insert,"2"===this.advanced&&(""!==this.form.remoteConfig&&(this.customSubUrl+="&config="+encodeURIComponent(this.form.remoteConfig)),""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&tfo="+this.form.tfo.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString(),this.needUdp&&(this.customSubUrl+="&udp="+this.form.udp.toString()),!0===this.form.tpl.surge.doh&&(this.customSubUrl+="&surge.doh=true"),"clash"===this.form.clientType&&(!0===this.form.tpl.clash.doh&&(this.customSubUrl+="&clash.doh=true"),this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},makeShortUrl:function(){var e=this;if(""===this.customSubUrl)return this.$message.warning("请先生成订阅链接，再获取对应短链接"),!1;this.loading=!0;var t=new FormData;t.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(c,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.ShortUrl?(e.curtomShortSubUrl=t.data.ShortUrl,e.$copyText(t.data.ShortUrl),e.$message.success("短链接已复制到剪贴板")):e.$message.error("短链接获取失败："+t.data.Message)})).catch((function(){e.$message.error("短链接获取失败")})).finally((function(){e.loading=!1}))},notify:function(){var e=this.$createElement;this.$notify({title:"隐私提示",type:"warning",message:e("i",{style:"color: teal"},"各种订阅链接（短链接服务除外）生成纯前端实现，无隐私问题。默认提供后端转换服务，隐私担忧者请自行搭建后端服务。")})},confirmUploadConfig:function(){var e=this;if(""===this.uploadConfig)return this.$message.warning("远程配置不能为空"),!1;this.loading=!0;var t=new FormData;t.append("password",this.uploadPassword),t.append("config",this.uploadConfig),this.$axios.post(u,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.url?(e.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"),e.form.remoteConfig=t.data.Url,e.$copyText(e.form.remoteConfig),e.dialogUploadConfigVisible=!1):e.$message.error("远程配置上传失败："+t.data.Message)})).catch((function(){e.$message.error("远程配置上传失败")})).finally((function(){e.loading=!1}))},backendSearch:function(e,t){var o=this.options.backendOptions,r=e?o.filter(this.createFilter(e)):o;t(r)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(s.substring(0,s.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))},saveSubUrl:function(){""!==this.form.sourceSubUrl&&this.setLocalStorageItem("sourceSubUrl",this.form.sourceSubUrl)},getLocalStorageItem:function(e){var t=+new Date,o=localStorage.getItem(e),r="";if(null!==o){var n=JSON.parse(o);n.expire>t?r=n.value:localStorage.removeItem(e)}return r},setLocalStorageItem:function(e,t){var o="86400",r=+new Date,n={setTime:r,ttl:parseInt(o),expire:r+1e3*o,value:t};localStorage.setItem(e,JSON.stringify(n))}}},p=f,m=o("2877"),h=Object(m["a"])(p,r,n,!1,null,null,null);t["default"]=h.exports},ac1f:function(e,t,o){"use strict";var r=o("23e7"),n=o("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,o){"use strict";var r=o("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c975:function(e,t,o){"use strict";var r=o("23e7"),n=o("4d64").indexOf,l=o("a640"),a=[].indexOf,i=!!a&&1/[1].indexOf(1,-0)<0,s=l("indexOf");r({target:"Array",proto:!0,forced:i||!s},{indexOf:function(e){return i?a.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,o){"use strict";o("ac1f");var r=o("6eeb"),n=o("9263"),l=o("d039"),a=o("b622"),i=o("9112"),s=a("species"),c=RegExp.prototype,u=!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),m=!l((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var o="ab".split(e);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}));e.exports=function(e,t,o,f){var h=a(e),g=!l((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),b=g&&!l((function(){var t=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[s]=function(){return o},o.flags="",o[h]=/./[h]),o.exec=function(){return t=!0,null},o[h](""),!t}));if(!g||!b||"replace"===e&&(!u||!d||p)||"split"===e&&!m){var v=/./[h],x=o(h,""[e],(function(e,t,o,r,l){var a=t.exec;return a===n||a===c.exec?g&&!l?{done:!0,value:v.call(t,o,r)}:{done:!0,value:e.call(o,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),S=x[0],y=x[1];r(String.prototype,e,S),r(c,h,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}f&&i(c[h],"sham",!0)}}}]);
//# sourceMappingURL=chunk-258412ab.ed0ef504.js.map