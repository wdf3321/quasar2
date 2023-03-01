import{j as pe,u as He,l as Ve,r as F,c,w as le,k as Ae,h as s,g as Ie,a$ as k,b5 as Ke,S as Pe,al as Be,J as Fe,aQ as $e,Q as Te,aW as je}from"./index.8eee5a35.js";import{f as Qe,k as Ne,j as Ye}from"./use-key-composition.273bc876.js";import{u as ze,b as Le,c as We,_ as $,g as Ee,f as Je}from"./QPopupProxy.d8092024.js";function Ue(u,T){if(u.hour!==null){if(u.minute===null)return"minute";if(T===!0&&u.second===null)return"second"}return"hour"}function Xe(){const u=new Date;return{hour:u.getHours(),minute:u.getMinutes(),second:u.getSeconds(),millisecond:u.getMilliseconds()}}var et=pe({name:"QTime",props:{...He,...Qe,...ze,mask:{default:null},format24h:{type:Boolean,default:null},defaultDate:{type:String,validator:u=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(u)},options:Function,hourOptions:Array,minuteOptions:Array,secondOptions:Array,withSeconds:Boolean,nowBtn:Boolean},emits:Le,setup(u,{slots:T,emit:ne}){const j=Ie(),{$q:y}=j.proxy,ae=Ve(u,y),{tabindex:g,headerClass:E,getLocale:ie,getCurrentDate:J}=We(u,y),oe=Ne(u),se=Ye(oe);let M,x;const U=F(null),D=c(()=>me()),S=c(()=>ie()),X=c(()=>he()),O=$(u.modelValue,D.value,S.value,u.calendar,X.value),o=F(Ue(O)),l=F(O),v=F(O.hour===null||O.hour<12),re=c(()=>`q-time q-time--${u.landscape===!0?"landscape":"portrait"}`+(ae.value===!0?" q-time--dark q-dark":"")+(u.disable===!0?" disabled":u.readonly===!0?" q-time--readonly":"")+(u.bordered===!0?" q-time--bordered":"")+(u.square===!0?" q-time--square no-border-radius":"")+(u.flat===!0?" q-time--flat no-shadow":"")),Q=c(()=>{const e=l.value;return{hour:e.hour===null?"--":f.value===!0?k(e.hour):String(v.value===!0?e.hour===0?12:e.hour:e.hour>12?e.hour-12:e.hour),minute:e.minute===null?"--":k(e.minute),second:e.second===null?"--":k(e.second)}}),f=c(()=>u.format24h!==null?u.format24h:y.lang.date.format24h),ce=c(()=>{const e=o.value==="hour",t=e===!0?12:60,n=l.value[o.value];let r=`rotate(${Math.round(n*(360/t))-180}deg) translateX(-50%)`;return e===!0&&f.value===!0&&l.value.hour>=12&&(r+=" scale(.7)"),{transform:r}}),G=c(()=>l.value.hour!==null),ve=c(()=>G.value===!0&&l.value.minute!==null),q=c(()=>u.hourOptions!==void 0?e=>u.hourOptions.includes(e):u.options!==void 0?e=>u.options(e,null,null):null),p=c(()=>u.minuteOptions!==void 0?e=>u.minuteOptions.includes(e):u.options!==void 0?e=>u.options(l.value.hour,e,null):null),H=c(()=>u.secondOptions!==void 0?e=>u.secondOptions.includes(e):u.options!==void 0?e=>u.options(l.value.hour,l.value.minute,e):null),h=c(()=>{if(q.value===null)return null;const e=A(0,11,q.value),t=A(12,11,q.value);return{am:e,pm:t,values:e.values.concat(t.values)}}),w=c(()=>p.value!==null?A(0,59,p.value):null),b=c(()=>H.value!==null?A(0,59,H.value):null),V=c(()=>{switch(o.value){case"hour":return h.value;case"minute":return w.value;case"second":return b.value}}),de=c(()=>{let e,t,n=0,i=1;const r=V.value!==null?V.value.values:void 0;o.value==="hour"?f.value===!0?(e=0,t=23):(e=0,t=11,v.value===!1&&(n=12)):(e=0,t=55,i=5);const m=[];for(let a=e,d=e;a<=t;a+=i,d++){const _=a+n,Se=r!==void 0&&r.includes(_)===!1,Oe=o.value==="hour"&&a===0?f.value===!0?"00":"12":a;m.push({val:_,index:d,disable:Se,label:Oe})}return m}),fe=c(()=>[[Ke,_e,void 0,{stop:!0,prevent:!0,mouse:!0}]]);le(()=>u.modelValue,e=>{const t=$(e,D.value,S.value,u.calendar,X.value);(t.dateHash!==l.value.dateHash||t.timeHash!==l.value.timeHash)&&(l.value=t,t.hour===null?o.value="hour":v.value=t.hour<12)}),le([D,S],()=>{Pe(()=>{W()})});function Z(){const e={...J(),...Xe()};W(e),Object.assign(l.value,e),o.value="hour"}function A(e,t,n){const i=Array.apply(null,{length:t+1}).map((r,m)=>{const a=m+e;return{index:a,val:n(a)===!0}}).filter(r=>r.val===!0).map(r=>r.index);return{min:i[0],max:i[i.length-1],values:i,threshold:t+1}}function R(e,t,n){const i=Math.abs(e-t);return Math.min(i,n-i)}function N(e,{min:t,max:n,values:i,threshold:r}){if(e===t)return t;if(e<t||e>n)return R(e,t,r)<=R(e,n,r)?t:n;const m=i.findIndex(_=>e<=_),a=i[m-1],d=i[m];return e-a<=d-e?a:d}function me(){return u.calendar!=="persian"&&u.mask!==null?u.mask:`HH:mm${u.withSeconds===!0?":ss":""}`}function he(){if(typeof u.defaultDate!="string"){const e=J(!0);return e.dateHash=Ee(e),e}return $(u.defaultDate,"YYYY/MM/DD",void 0,u.calendar)}function Y(){return je(j)===!0||V.value!==null&&(V.value.values.length===0||o.value==="hour"&&f.value!==!0&&h.value[v.value===!0?"am":"pm"].values.length===0)}function z(){const e=U.value,{top:t,left:n,width:i}=e.getBoundingClientRect(),r=i/2;return{top:t+r,left:n+r,dist:r*.7}}function _e(e){if(Y()!==!0){if(e.isFirst===!0){M=z(),x=I(e.evt,M);return}x=I(e.evt,M,x),e.isFinal===!0&&(M=!1,x=null,ee())}}function ee(){o.value==="hour"?o.value="minute":u.withSeconds&&o.value==="minute"&&(o.value="second")}function I(e,t,n){const i=Be(e),r=Math.abs(i.top-t.top),m=Math.sqrt(Math.pow(Math.abs(i.top-t.top),2)+Math.pow(Math.abs(i.left-t.left),2));let a,d=Math.asin(r/m)*(180/Math.PI);if(i.top<t.top?d=t.left<i.left?90-d:270+d:d=t.left<i.left?d+90:270-d,o.value==="hour"){if(a=d/30,h.value!==null){const _=f.value!==!0?v.value===!0:h.value.am.values.length>0&&h.value.pm.values.length>0?m>=t.dist:h.value.am.values.length>0;a=N(a+(_===!0?0:12),h.value[_===!0?"am":"pm"])}else a=Math.round(a),f.value===!0?m<t.dist?a<12&&(a+=12):a===12&&(a=0):v.value===!0&&a===12?a=0:v.value===!1&&a!==12&&(a+=12);f.value===!0&&(v.value=a<12)}else a=Math.round(d/6)%60,o.value==="minute"&&w.value!==null?a=N(a,w.value):o.value==="second"&&b.value!==null&&(a=N(a,b.value));return n!==a&&Me[o.value](a),a}const L={hour(){o.value="hour"},minute(){o.value="minute"},second(){o.value="second"}};function ge(e){e.keyCode===13&&te()}function ke(e){e.keyCode===13&&ue()}function ye(e){Y()!==!0&&(y.platform.is.desktop!==!0&&I(e,z()),ee())}function qe(e){Y()!==!0&&I(e,z())}function we(e){if(e.keyCode===13)o.value="hour";else if([37,39].includes(e.keyCode)){const t=e.keyCode===37?-1:1;if(h.value!==null){const n=f.value===!0?h.value.values:h.value[v.value===!0?"am":"pm"].values;if(n.length===0)return;if(l.value.hour===null)K(n[0]);else{const i=(n.length+n.indexOf(l.value.hour)+t)%n.length;K(n[i])}}else{const n=f.value===!0?24:12,i=f.value!==!0&&v.value===!1?12:0,r=l.value.hour===null?-t:l.value.hour;K(i+(24+r+t)%n)}}}function be(e){if(e.keyCode===13)o.value="minute";else if([37,39].includes(e.keyCode)){const t=e.keyCode===37?-1:1;if(w.value!==null){const n=w.value.values;if(n.length===0)return;if(l.value.minute===null)P(n[0]);else{const i=(n.length+n.indexOf(l.value.minute)+t)%n.length;P(n[i])}}else{const n=l.value.minute===null?-t:l.value.minute;P((60+n+t)%60)}}}function Ce(e){if(e.keyCode===13)o.value="second";else if([37,39].includes(e.keyCode)){const t=e.keyCode===37?-1:1;if(b.value!==null){const n=b.value.values;if(n.length===0)return;if(l.value.seconds===null)B(n[0]);else{const i=(n.length+n.indexOf(l.value.second)+t)%n.length;B(n[i])}}else{const n=l.value.second===null?-t:l.value.second;B((60+n+t)%60)}}}function K(e){l.value.hour!==e&&(l.value.hour=e,C())}function P(e){l.value.minute!==e&&(l.value.minute=e,C())}function B(e){l.value.second!==e&&(l.value.second=e,C())}const Me={hour:K,minute:P,second:B};function te(){v.value===!1&&(v.value=!0,l.value.hour!==null&&(l.value.hour-=12,C()))}function ue(){v.value===!0&&(v.value=!1,l.value.hour!==null&&(l.value.hour+=12,C()))}function C(){if(q.value!==null&&q.value(l.value.hour)!==!0){l.value=$(),o.value="hour";return}if(p.value!==null&&p.value(l.value.minute)!==!0){l.value.minute=null,l.value.second=null,o.value="minute";return}if(u.withSeconds===!0&&H.value!==null&&H.value(l.value.second)!==!0){l.value.second=null,o.value="second";return}l.value.hour===null||l.value.minute===null||u.withSeconds===!0&&l.value.second===null||W()}function W(e){const t=Object.assign({...l.value},e),n=u.calendar==="persian"?k(t.hour)+":"+k(t.minute)+(u.withSeconds===!0?":"+k(t.second):""):Je(new Date(t.year,t.month===null?null:t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),D.value,S.value,t.year,t.timezoneOffset);t.changed=n!==u.modelValue,ne("update:modelValue",n,t)}function xe(){const e=[s("div",{class:"q-time__link "+(o.value==="hour"?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onClick:L.hour,onKeyup:we},Q.value.hour),s("div",":"),s("div",G.value===!0?{class:"q-time__link "+(o.value==="minute"?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onKeyup:be,onClick:L.minute}:{class:"q-time__link"},Q.value.minute)];u.withSeconds===!0&&e.push(s("div",":"),s("div",ve.value===!0?{class:"q-time__link "+(o.value==="second"?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onKeyup:Ce,onClick:L.second}:{class:"q-time__link"},Q.value.second));const t=[s("div",{class:"q-time__header-label row items-center no-wrap",dir:"ltr"},e)];return f.value===!1&&t.push(s("div",{class:"q-time__header-ampm column items-between no-wrap"},[s("div",{class:"q-time__link "+(v.value===!0?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onClick:te,onKeyup:ge},"AM"),s("div",{class:"q-time__link "+(v.value!==!0?"q-time__link--active":"cursor-pointer"),tabindex:g.value,onClick:ue,onKeyup:ke},"PM")])),s("div",{class:"q-time__header flex flex-center no-wrap "+E.value},t)}function De(){const e=l.value[o.value];return s("div",{class:"q-time__content col relative-position"},[s(Fe,{name:"q-transition--scale"},()=>s("div",{key:"clock"+o.value,class:"q-time__container-parent absolute-full"},[s("div",{ref:U,class:"q-time__container-child fit overflow-hidden"},[$e(s("div",{class:"q-time__clock cursor-pointer non-selectable",onClick:ye,onMousedown:qe},[s("div",{class:"q-time__clock-circle fit"},[s("div",{class:"q-time__clock-pointer"+(l.value[o.value]===null?" hidden":u.color!==void 0?` text-${u.color}`:""),style:ce.value}),de.value.map(t=>s("div",{class:`q-time__clock-position row flex-center q-time__clock-pos-${t.index}`+(t.val===e?" q-time__clock-position--active "+E.value:t.disable===!0?" q-time__clock-position--disable":"")},[s("span",t.label)]))])]),fe.value)])])),u.nowBtn===!0?s(Te,{class:"q-time__now-button absolute",icon:y.iconSet.datetime.now,unelevated:!0,size:"sm",round:!0,color:u.color,textColor:u.textColor,tabindex:g.value,onClick:Z}):null])}return j.proxy.setNow=Z,()=>{const e=[De()],t=Ae(T.default);return t!==void 0&&e.push(s("div",{class:"q-time__actions"},t)),u.name!==void 0&&u.disable!==!0&&se(e,"push"),s("div",{class:re.value,tabindex:-1},[xe(),s("div",{class:"q-time__main col overflow-auto"},e)])}}});export{et as Q};