import{r as u,R as W,c as ve,a as ye}from"./react-f0d12c14.js";import{r as xe,P as _e,d as Pe,a as be,m as Ee,C as Ce}from"./antd-59c365fd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var p={},Re={get exports(){return p},set exports(e){p=e}},Y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se=u,we=Symbol.for("react.element"),$e=Symbol.for("react.fragment"),Le=Object.prototype.hasOwnProperty,Oe=Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,je={key:!0,ref:!0,__self:!0,__source:!0};function oe(e,t,n){var a,r={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(a in t)Le.call(t,a)&&!je.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)r[a]===void 0&&(r[a]=t[a]);return{$$typeof:we,type:e,key:o,ref:l,props:r,_owner:Oe.current}}Y.Fragment=$e;Y.jsx=oe;Y.jsxs=oe;(function(e){e.exports=Y})(Re);var N={},V=xe;N.createRoot=V.createRoot,N.hydrateRoot=V.hydrateRoot;var ke={locale:"zh_CN",today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"};const Ye={placeholder:"请选择时间",rangePlaceholder:["开始时间","结束时间"]},le=Ye,ie={lang:Object.assign({placeholder:"请选择日期",yearPlaceholder:"请选择年份",quarterPlaceholder:"请选择季度",monthPlaceholder:"请选择月份",weekPlaceholder:"请选择周",rangePlaceholder:["开始日期","结束日期"],rangeYearPlaceholder:["开始年份","结束年份"],rangeMonthPlaceholder:["开始月份","结束月份"],rangeQuarterPlaceholder:["开始季度","结束季度"],rangeWeekPlaceholder:["开始周","结束周"]},ke),timePickerLocale:Object.assign({},le)};ie.lang.ok="确定";const J=ie,_="${label}不是一个有效的${type}",Ie={locale:"zh-cn",Pagination:_e,DatePicker:J,TimePicker:le,Calendar:J,global:{placeholder:"请选择"},Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",filterEmptyText:"无筛选项",filterCheckall:"全选",filterSearchPlaceholder:"在筛选项中搜索",selectAll:"全选当页",selectInvert:"反选当页",selectNone:"清空所有",selectionAll:"全选所有",sortTitle:"排序",expand:"展开行",collapse:"关闭行",triggerDesc:"点击降序",triggerAsc:"点击升序",cancelSort:"取消排序"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Tour:{Next:"下一步",Previous:"上一步",Finish:"结束导览"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{titles:["",""],searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项",remove:"删除",selectCurrent:"全选当页",removeCurrent:"删除当页",selectAll:"全选所有",removeAll:"删除全部",selectInvert:"反选当页"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件",downloadFile:"下载文件"},Empty:{description:"暂无数据"},Icon:{icon:"图标"},Text:{edit:"编辑",copy:"复制",copied:"复制成功",expand:"展开"},PageHeader:{back:"返回"},Form:{optional:"（可选）",defaultValidateMessages:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:_,method:_,array:_,object:_,number:_,date:_,boolean:_,integer:_,float:_,regexp:_,email:_,url:_,hex:_},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},Image:{preview:"预览"},QRCode:{expired:"二维码过期",refresh:"点击刷新"}},De=Ie;/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},$.apply(this,arguments)}var E;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(E||(E={}));const K="popstate";function Ue(e){e===void 0&&(e={});function t(r,o){let{pathname:l="/",search:i="",hash:s=""}=R(r.location.hash.substr(1));return F("",{pathname:l,search:i,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){let l=r.document.querySelector("base"),i="";if(l&&l.getAttribute("href")){let s=r.location.href,c=s.indexOf("#");i=c===-1?s:s.slice(0,c)}return i+"#"+(typeof o=="string"?o:j(o))}function a(r,o){Te(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Be(t,n,a,e)}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Te(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Me(){return Math.random().toString(36).substr(2,8)}function q(e,t){return{usr:e.state,key:e.key,idx:t}}function F(e,t,n,a){return n===void 0&&(n=null),$({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?R(t):t,{state:n,key:t&&t.key||a||Me()})}function j(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function R(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function Be(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:o=!1}=a,l=r.history,i=E.Pop,s=null,c=d();c==null&&(c=0,l.replaceState($({},l.state,{idx:c}),""));function d(){return(l.state||{idx:null}).idx}function h(){i=E.Pop;let m=d(),g=m==null?null:m-c;c=m,s&&s({action:i,location:f.location,delta:g})}function y(m,g){i=E.Push;let x=F(f.location,m,g);n&&n(x,m),c=d()+1;let T=q(x,c),O=f.createHref(x);try{l.pushState(T,"",O)}catch{r.location.assign(O)}o&&s&&s({action:i,location:f.location,delta:1})}function b(m,g){i=E.Replace;let x=F(f.location,m,g);n&&n(x,m),c=d();let T=q(x,c),O=f.createHref(x);l.replaceState(T,"",O),o&&s&&s({action:i,location:f.location,delta:0})}function P(m){let g=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof m=="string"?m:j(m);return v(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let f={get action(){return i},get location(){return e(r,l)},listen(m){if(s)throw new Error("A history only accepts one active listener");return r.addEventListener(K,h),s=m,()=>{r.removeEventListener(K,h),s=null}},createHref(m){return t(r,m)},createURL:P,encodeLocation(m){let g=P(m);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:y,replace:b,go(m){return l.go(m)}};return f}var G;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(G||(G={}));function We(e,t,n){n===void 0&&(n="/");let a=typeof t=="string"?R(t):t,r=ue(a.pathname||"/",n);if(r==null)return null;let o=se(e);Ne(o);let l=null;for(let i=0;l==null&&i<o.length;++i)l=Ge(o[i],Ze(r));return l}function se(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let r=(o,l,i)=>{let s={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(v(s.relativePath.startsWith(a),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(a.length));let c=C([a,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(v(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),se(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Ke(c,o.index),routesMeta:d})};return e.forEach((o,l)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))r(o,l);else for(let s of ce(o.path))r(o,l,s)}),t}function ce(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(a.length===0)return r?[o,""]:[o];let l=ce(a.join("/")),i=[];return i.push(...l.map(s=>s===""?o:[o,s].join("/"))),r&&i.push(...l),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function Ne(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qe(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const Fe=/^:\w+$/,He=3,ze=2,Ae=1,Ve=10,Je=-2,Q=e=>e==="*";function Ke(e,t){let n=e.split("/"),a=n.length;return n.some(Q)&&(a+=Je),t&&(a+=ze),n.filter(r=>!Q(r)).reduce((r,o)=>r+(Fe.test(o)?He:o===""?Ae:Ve),a)}function qe(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function Ge(e,t){let{routesMeta:n}=e,a={},r="/",o=[];for(let l=0;l<n.length;++l){let i=n[l],s=l===n.length-1,c=r==="/"?t:t.slice(r.length)||"/",d=Qe({path:i.relativePath,caseSensitive:i.caseSensitive,end:s},c);if(!d)return null;Object.assign(a,d.params);let h=i.route;o.push({params:a,pathname:C([r,d.pathname]),pathnameBase:rt(C([r,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(r=C([r,d.pathnameBase]))}return o}function Qe(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=Xe(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let o=r[0],l=o.replace(/(.)\/+$/,"$1"),i=r.slice(1);return{params:a.reduce((c,d,h)=>{if(d==="*"){let y=i[h]||"";l=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return c[d]=et(i[h]||"",d),c},{}),pathname:o,pathnameBase:l,pattern:e}}function Xe(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),A(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,i)=>(a.push(i),"/([^\\/]+)"));return e.endsWith("*")?(a.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function Ze(e){try{return decodeURI(e)}catch(t){return A(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function et(e,t){try{return decodeURIComponent(e)}catch(n){return A(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ue(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function A(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function tt(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?R(e):e;return{pathname:n?n.startsWith("/")?n:nt(n,t):t,search:at(a),hash:ot(r)}}function nt(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function M(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function de(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function he(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=R(e):(r=$({},e),v(!r.pathname||!r.pathname.includes("?"),M("?","pathname","search",r)),v(!r.pathname||!r.pathname.includes("#"),M("#","pathname","hash",r)),v(!r.search||!r.search.includes("#"),M("#","search","hash",r)));let o=e===""||r.pathname==="",l=o?"/":r.pathname,i;if(a||l==null)i=n;else{let h=t.length-1;if(l.startsWith("..")){let y=l.split("/");for(;y[0]==="..";)y.shift(),h-=1;r.pathname=y.join("/")}i=h>=0?t[h]:"/"}let s=tt(r,i),c=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const C=e=>e.join("/").replace(/\/\/+/g,"/"),rt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),at=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ot=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lt(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const it=["post","put","patch","delete"];[...it];/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},H.apply(this,arguments)}function st(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const ct=typeof Object.is=="function"?Object.is:st,{useState:ut,useEffect:dt,useLayoutEffect:ht,useDebugValue:ft}=W;function mt(e,t,n){const a=t(),[{inst:r},o]=ut({inst:{value:a,getSnapshot:t}});return ht(()=>{r.value=a,r.getSnapshot=t,B(r)&&o({inst:r})},[e,a,t]),dt(()=>(B(r)&&o({inst:r}),e(()=>{B(r)&&o({inst:r})})),[e]),ft(a),a}function B(e){const t=e.getSnapshot,n=e.value;try{const a=t();return!ct(n,a)}catch{return!0}}function pt(e,t,n){return t()}const gt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vt=!gt,yt=vt?pt:mt;"useSyncExternalStore"in W&&(e=>e.useSyncExternalStore)(W);const xt=u.createContext(null),fe=u.createContext(null),I=u.createContext(null),D=u.createContext(null),S=u.createContext({outlet:null,matches:[]}),me=u.createContext(null);function _t(e,t){let{relative:n}=t===void 0?{}:t;L()||v(!1);let{basename:a,navigator:r}=u.useContext(I),{hash:o,pathname:l,search:i}=ge(e,{relative:n}),s=l;return a!=="/"&&(s=l==="/"?a:C([a,l])),r.createHref({pathname:s,search:i,hash:o})}function L(){return u.useContext(D)!=null}function U(){return L()||v(!1),u.useContext(D).location}function Pt(){L()||v(!1);let{basename:e,navigator:t}=u.useContext(I),{matches:n}=u.useContext(S),{pathname:a}=U(),r=JSON.stringify(de(n).map(i=>i.pathnameBase)),o=u.useRef(!1);return u.useEffect(()=>{o.current=!0}),u.useCallback(function(i,s){if(s===void 0&&(s={}),!o.current)return;if(typeof i=="number"){t.go(i);return}let c=he(i,JSON.parse(r),a,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:C([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,r,a])}const bt=u.createContext(null);function pe(e){let t=u.useContext(S).outlet;return t&&u.createElement(bt.Provider,{value:e},t)}function ge(e,t){let{relative:n}=t===void 0?{}:t,{matches:a}=u.useContext(S),{pathname:r}=U(),o=JSON.stringify(de(a).map(l=>l.pathnameBase));return u.useMemo(()=>he(e,JSON.parse(o),r,n==="path"),[e,o,r,n])}function Et(e,t){L()||v(!1);let{navigator:n}=u.useContext(I),a=u.useContext(fe),{matches:r}=u.useContext(S),o=r[r.length-1],l=o?o.params:{};o&&o.pathname;let i=o?o.pathnameBase:"/";o&&o.route;let s=U(),c;if(t){var d;let f=typeof t=="string"?R(t):t;i==="/"||(d=f.pathname)!=null&&d.startsWith(i)||v(!1),c=f}else c=s;let h=c.pathname||"/",y=i==="/"?h:h.slice(i.length)||"/",b=We(e,{pathname:y}),P=wt(b&&b.map(f=>Object.assign({},f,{params:Object.assign({},l,f.params),pathname:C([i,n.encodeLocation?n.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?i:C([i,n.encodeLocation?n.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),r,a||void 0);return t&&P?u.createElement(D.Provider,{value:{location:H({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:E.Pop}},P):P}function Ct(){let e=jt(),t=lt(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:r},n):null,o)}class Rt extends u.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?u.createElement(S.Provider,{value:this.props.routeContext},u.createElement(me.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function St(e){let{routeContext:t,match:n,children:a}=e,r=u.useContext(xt);return r&&r.static&&r.staticContext&&n.route.errorElement&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement(S.Provider,{value:t},a)}function wt(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let a=e,r=n==null?void 0:n.errors;if(r!=null){let o=a.findIndex(l=>l.route.id&&(r==null?void 0:r[l.route.id]));o>=0||v(!1),a=a.slice(0,Math.min(a.length,o+1))}return a.reduceRight((o,l,i)=>{let s=l.route.id?r==null?void 0:r[l.route.id]:null,c=n?l.route.errorElement||u.createElement(Ct,null):null,d=t.concat(a.slice(0,i+1)),h=()=>u.createElement(St,{match:l,routeContext:{outlet:o,matches:d}},s?c:l.route.element!==void 0?l.route.element:o);return n&&(l.route.errorElement||i===0)?u.createElement(Rt,{location:n.location,component:c,error:s,children:h(),routeContext:{outlet:null,matches:d}}):h()},null)}var X;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(X||(X={}));var k;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(k||(k={}));function $t(e){let t=u.useContext(fe);return t||v(!1),t}function Lt(e){let t=u.useContext(S);return t||v(!1),t}function Ot(e){let t=Lt(),n=t.matches[t.matches.length-1];return n.route.id||v(!1),n.route.id}function jt(){var e;let t=u.useContext(me),n=$t(k.UseRouteError),a=Ot(k.UseRouteError);return t||((e=n.errors)==null?void 0:e[a])}function an(e){return pe(e.context)}function kt(e){let{basename:t="/",children:n=null,location:a,navigationType:r=E.Pop,navigator:o,static:l=!1}=e;L()&&v(!1);let i=t.replace(/^\/*/,"/"),s=u.useMemo(()=>({basename:i,navigator:o,static:l}),[i,o,l]);typeof a=="string"&&(a=R(a));let{pathname:c="/",search:d="",hash:h="",state:y=null,key:b="default"}=a,P=u.useMemo(()=>{let f=ue(c,i);return f==null?null:{pathname:f,search:d,hash:h,state:y,key:b}},[i,c,d,h,y,b]);return P==null?null:u.createElement(I.Provider,{value:s},u.createElement(D.Provider,{children:n,value:{location:P,navigationType:r}}))}var Z;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Z||(Z={}));new Promise(()=>{});/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},z.apply(this,arguments)}function Yt(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function It(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dt(e,t){return e.button===0&&(!t||t==="_self")&&!It(e)}const Ut=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Tt(e){let{basename:t,children:n,window:a}=e,r=u.useRef();r.current==null&&(r.current=Ue({window:a,v5Compat:!0}));let o=r.current,[l,i]=u.useState({action:o.action,location:o.location});return u.useLayoutEffect(()=>o.listen(i),[o]),u.createElement(kt,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const Mt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",on=u.forwardRef(function(t,n){let{onClick:a,relative:r,reloadDocument:o,replace:l,state:i,target:s,to:c,preventScrollReset:d}=t,h=Yt(t,Ut),y,b=!1;if(Mt&&typeof c=="string"&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(c)){y=c;let g=new URL(window.location.href),x=c.startsWith("//")?new URL(g.protocol+c):new URL(c);x.origin===g.origin?c=x.pathname+x.search+x.hash:b=!0}let P=_t(c,{relative:r}),f=Bt(c,{replace:l,state:i,target:s,preventScrollReset:d,relative:r});function m(g){a&&a(g),g.defaultPrevented||f(g)}return u.createElement("a",z({},h,{href:y||P,onClick:b||o?a:m,ref:n,target:s}))});var ee;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(ee||(ee={}));var te;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(te||(te={}));function Bt(e,t){let{target:n,replace:a,state:r,preventScrollReset:o,relative:l}=t===void 0?{}:t,i=Pt(),s=U(),c=ge(e,{relative:l});return u.useCallback(d=>{if(Dt(d,n)){d.preventDefault();let h=a!==void 0?a:j(s)===j(c);i(e,{replace:h,state:r,preventScrollReset:o,relative:l})}},[s,i,c,a,r,n,e,o,l])}var ne={},Wt={get exports(){return ne},set exports(e){ne=e}};(function(e,t){(function(n,a){e.exports=a(Pe)})(ve,function(n){function a(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var r=a(n),o={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(l,i){return i==="W"?l+"周":l+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(l,i){var s=100*l+i;return s<600?"凌晨":s<900?"早上":s<1100?"上午":s<1300?"中午":s<1800?"下午":"晚上"}};return r.default.locale(o,null,!0),o})})(Wt);const Nt="modulepreload",Ft=function(e){return"/"+e},re={},w=function(t,n,a){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Ft(o),o in re)return;re[o]=!0;const l=o.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!a)for(let d=r.length-1;d>=0;d--){const h=r[d];if(h.href===o&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Nt,l||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),l)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function Ht({freeze:e,children:t}){var a;const n=u.useRef({}).current;if(e&&!n.promise)throw n.promise=new Promise(r=>{n.resolve=r}),n.promise;if(e)throw n.promise;return n.promise&&((a=n.resolve)==null||a.call(n),n.promise=void 0),p.jsx(u.Fragment,{children:t})}function zt({freeze:e,children:t,placeholder:n=null}){return p.jsx(u.Suspense,{fallback:n,children:p.jsx(Ht,{freeze:e,children:t})})}const ae=({children:e})=>{const t=pe(),n=!!t;return p.jsxs(p.Fragment,{children:[p.jsx(zt,{freeze:n,children:e}),t]})},At=u.lazy(()=>w(()=>import("./WebLayout-e489fb3c.js"),["assets/WebLayout-e489fb3c.js","assets/react-f0d12c14.js","assets/styled-components.browser.esm-3a1d7e2e.js","assets/antd-59c365fd.js"])),Vt=u.lazy(()=>w(()=>import("./Home-fa5d65ee.js"),["assets/Home-fa5d65ee.js","assets/antd-59c365fd.js","assets/react-f0d12c14.js","assets/dynamics-ef1ed27a.js","assets/styles-881e83dd.js","assets/styled-components.browser.esm-3a1d7e2e.js"])),Jt=u.lazy(()=>w(()=>import("./Achievements-d80b961c.js"),["assets/Achievements-d80b961c.js","assets/react-f0d12c14.js","assets/antd-59c365fd.js"])),Kt=u.lazy(()=>w(()=>import("./Introduction-97c390d7.js"),["assets/Introduction-97c390d7.js","assets/CommonPage-16ca0553.js","assets/styles-881e83dd.js","assets/styled-components.browser.esm-3a1d7e2e.js","assets/antd-59c365fd.js","assets/react-f0d12c14.js"])),qt=u.lazy(()=>w(()=>import("./Subjects-c6390083.js"),["assets/Subjects-c6390083.js","assets/react-f0d12c14.js","assets/antd-59c365fd.js"])),Gt=u.lazy(()=>w(()=>import("./Dynamics-0c2be239.js"),["assets/Dynamics-0c2be239.js","assets/react-f0d12c14.js","assets/antd-59c365fd.js","assets/dynamics-ef1ed27a.js","assets/CommonPage-16ca0553.js","assets/styles-881e83dd.js","assets/styled-components.browser.esm-3a1d7e2e.js"])),Qt=u.lazy(()=>w(()=>import("./CommonDetail-b3ec40e2.js"),["assets/CommonDetail-b3ec40e2.js","assets/CommonPage-16ca0553.js","assets/styles-881e83dd.js","assets/styled-components.browser.esm-3a1d7e2e.js","assets/antd-59c365fd.js","assets/react-f0d12c14.js"])),ln={home:"主页",introduction:"项目介绍",dynamics:"项目动态",subjects:"课程设置",achievements:"成果展示"},Xt=[{path:"/",id:"layout",element:p.jsx(At,{}),children:[{index:!0,id:"home",path:"/",element:p.jsx(Vt,{})},{id:"introduction",path:"/introduction",element:p.jsx(Kt,{})},{id:"dynamics",path:"/dynamics",element:p.jsx(ae,{children:p.jsx(Gt,{})}),children:[{id:"commonDetail",path:"/dynamics/:id",element:p.jsx(Qt,{})}]},{id:"subjects",path:"/subjects",element:p.jsx(qt,{})},{id:"achievements",path:"/achievements",element:p.jsx(ae,{children:p.jsx(Jt,{})})}]}];be.locale("zh-cn");Ee.config({maxCount:1});function Zt(){return Et(Xt)}const en=()=>p.jsx(Ce,{locale:De,autoInsertSpaceInButton:!1,getPopupContainer:e=>e?e.parentNode:document.body,children:p.jsx(Tt,{basename:"/",children:p.jsx(Zt,{})})});N.createRoot(document.getElementById("root")).render(p.jsx(ye.StrictMode,{children:p.jsx(en,{})}));export{on as L,an as O,Xt as W,U as a,p as j,ln as p,Pt as u};