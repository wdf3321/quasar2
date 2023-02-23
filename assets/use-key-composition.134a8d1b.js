import{i as re,w as A,o as Y,m as j,aF as ne,g as O,r as m,c as i,O as ue,a6 as ae,al as ie,$ as se,N as de,P as fe,R as ce,aG as ve,h as a,a1 as B,aH as pe,u as me,l as ge,L as Z,G as be,k as E,E as he,aa as Ce}from"./index.2e4e4508.js";function qe({validate:e,resetValidation:o,requiresQForm:t}){const r=re(ne,!1);if(r!==!1){const{props:c,proxy:s}=O();Object.assign(s,{validate:e,resetValidation:o}),A(()=>c.disable,n=>{n===!0?(typeof o=="function"&&o(),r.unbindComponent(s)):r.bindComponent(s)}),Y(()=>{c.disable!==!0&&r.bindComponent(s)}),j(()=>{c.disable!==!0&&r.unbindComponent(s)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const G=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,W=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,J=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,I=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,P=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,D={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>G.test(e),hexaColor:e=>W.test(e),hexOrHexaColor:e=>J.test(e),rgbColor:e=>I.test(e),rgbaColor:e=>P.test(e),rgbOrRgbaColor:e=>I.test(e)||P.test(e),hexOrRgbColor:e=>G.test(e)||I.test(e),hexaOrRgbaColor:e=>W.test(e)||P.test(e),anyColor:e=>J.test(e)||I.test(e)||P.test(e)},ye=[!0,!1,"ondemand"],_e={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>ye.includes(e)}};function xe(e,o){const{props:t,proxy:r}=O(),c=m(!1),s=m(null),n=m(null);qe({validate:C,resetValidation:x});let f=0,h;const V=i(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length>0),g=i(()=>t.disable!==!0&&V.value===!0),_=i(()=>t.error===!0||c.value===!0),M=i(()=>typeof t.errorMessage=="string"&&t.errorMessage.length>0?t.errorMessage:s.value);A(()=>t.modelValue,()=>{k()}),A(()=>t.reactiveRules,b=>{b===!0?h===void 0&&(h=A(()=>t.rules,()=>{k(!0)})):h!==void 0&&(h(),h=void 0)},{immediate:!0}),A(e,b=>{b===!0?n.value===null&&(n.value=!1):n.value===!1&&(n.value=!0,g.value===!0&&t.lazyRules!=="ondemand"&&o.value===!1&&F())});function x(){f++,o.value=!1,n.value=null,c.value=!1,s.value=null,F.cancel()}function C(b=t.modelValue){if(g.value!==!0)return!0;const S=++f,T=o.value!==!0?()=>{n.value=!0}:()=>{},q=(d,v)=>{d===!0&&T(),c.value=d,s.value=v||null,o.value=!1},R=[];for(let d=0;d<t.rules.length;d++){const v=t.rules[d];let p;if(typeof v=="function"?p=v(b,D):typeof v=="string"&&D[v]!==void 0&&(p=D[v](b)),p===!1||typeof p=="string")return q(!0,p),!1;p!==!0&&p!==void 0&&R.push(p)}return R.length===0?(q(!1),!0):(o.value=!0,Promise.all(R).then(d=>{if(d===void 0||Array.isArray(d)===!1||d.length===0)return S===f&&q(!1),!0;const v=d.find(p=>p===!1||typeof p=="string");return S===f&&q(v!==void 0,v),v===void 0},d=>(S===f&&(console.error(d),q(!0)),!1)))}function k(b){g.value===!0&&t.lazyRules!=="ondemand"&&(n.value===!0||t.lazyRules!==!0&&b!==!0)&&F()}const F=ue(C,0);return j(()=>{h!==void 0&&h(),F.cancel()}),Object.assign(r,{resetValidation:x,validate:C}),ae(r,"hasError",()=>_.value),{isDirtyModel:n,hasRules:V,hasError:_,errorMessage:M,validate:C,resetValidation:x}}const X=/^on[A-Z]/;function Fe(e,o){const t={listeners:m({}),attributes:m({})};function r(){const c={},s={};for(const n in e)n!=="class"&&n!=="style"&&X.test(n)===!1&&(c[n]=e[n]);for(const n in o.props)X.test(n)===!0&&(s[n]=o.props[n]);t.attributes.value=c,t.listeners.value=s}return ie(r),r(),t}let y=[],w=[];function ee(e){w=w.filter(o=>o!==e)}function Ee(e){ee(e),w.push(e)}function Ie(e){ee(e),w.length===0&&y.length>0&&(y[y.length-1](),y=[])}function Se(e){w.length===0?e():y.push(e)}function Re(e){y=y.filter(o=>o!==e)}function U(e){return e===void 0?`f_${pe()}`:e}function Ae(e){return e!=null&&(""+e).length>0}const Pe={...me,..._e,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Oe=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Me(){const{props:e,attrs:o,proxy:t,vnode:r}=O();return{isDark:ge(e,t.$q),editable:i(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:m(!1),focused:m(!1),hasPopupOpen:!1,splitAttrs:Fe(o,r),targetUid:m(U(e.for)),rootRef:m(null),targetRef:m(null),controlRef:m(null)}}function Te(e){const{props:o,emit:t,slots:r,attrs:c,proxy:s}=O(),{$q:n}=s;let f=null;e.hasValue===void 0&&(e.hasValue=i(()=>Ae(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{t("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:z,onFocusout:H}),Object.assign(e,{clearValue:L,onControlFocusin:z,onControlFocusout:H,focus:v}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,u=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(u!==void 0?" / "+u:"")}}));const{isDirtyModel:h,hasRules:V,hasError:g,errorMessage:_,resetValidation:M}=xe(e.focused,e.innerLoading),x=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),C=i(()=>o.bottomSlots===!0||o.hint!==void 0||V.value===!0||o.counter===!0||o.error!==null),k=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),F=i(()=>`q-field row no-wrap items-start q-field--${k.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(x.value===!0?" q-field--float":"")+(S.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(g.value===!0?" q-field--error":"")+(g.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&C.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),b=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(g.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length>0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),S=i(()=>o.labelSlot===!0||o.label!==void 0),T=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&g.value!==!0?` text-${o.labelColor}`:"")),q=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:x.value,modelValue:o.modelValue,emitValue:e.emitValue})),R=i(()=>{const l={for:e.targetUid.value};return o.disable===!0?l["aria-disabled"]="true":o.readonly===!0&&(l["aria-readonly"]="true"),l});A(()=>o.for,l=>{e.targetUid.value=U(l)});function d(){const l=document.activeElement;let u=e.targetRef!==void 0&&e.targetRef.value;u&&(l===null||l.id!==e.targetUid.value)&&(u.hasAttribute("tabindex")===!0||(u=u.querySelector("[tabindex]")),u&&u!==l&&u.focus({preventScroll:!0}))}function v(){Se(d)}function p(){Re(d);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function z(l){f!==null&&(clearTimeout(f),f=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",l))}function H(l,u){f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",l)),u!==void 0&&u())})}function L(l){se(l),n.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),t("clear",o.modelValue),de(()=>{M(),n.platform.is.mobile!==!0&&(h.value=!1)})}function oe(){const l=[];return r.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:B},r.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},le())),g.value===!0&&o.noErrorIcon===!1&&l.push($("error",[a(Z,{name:n.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push($("inner-loading-append",r.loading!==void 0?r.loading():[a(be,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push($("inner-clearable-append",[a(Z,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||n.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:L})])),r.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:B},r.append())),e.getInnerAppend!==void 0&&l.push($("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function le(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):r.rawControl!==void 0?l.push(r.rawControl()):r.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(q.value))),S.value===!0&&l.push(a("div",{class:T.value},E(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(E(r.default))}function te(){let l,u;g.value===!0?_.value!==null?(l=[a("div",{role:"alert"},_.value)],u=`q--slot-error-${_.value}`):(l=E(r.error),u="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],u=`q--slot-hint-${o.hint}`):(l=E(r.hint),u="q--slot-hint"));const K=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&K===!1&&l===void 0)return;const Q=a("div",{key:u,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:B},[o.hideBottomSpace===!0?Q:a(he,{name:"q-transition--field-message"},()=>Q),K===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function $(l,u){return u===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},u)}let N=!1;return fe(()=>{N=!0}),ce(()=>{N===!0&&o.autofocus===!0&&s.focus()}),Y(()=>{ve.value===!0&&o.for===void 0&&(e.targetUid.value=U()),o.autofocus===!0&&s.focus()}),j(()=>{f!==null&&clearTimeout(f)}),Object.assign(s,{focus:v,blur:p}),function(){const u=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...R.value}:R.value;return a("label",{ref:e.rootRef,class:[F.value,c.class],style:c.style,...u},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:B},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:b.value,tabindex:-1,...e.controlEvents},oe()),C.value===!0?te():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:B},r.after()):null])}}const De={name:String};function Ue(e){return i(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function je(e={}){return(o,t,r)=>{o[t](a("input",{class:"hidden"+(r||""),...e.value}))}}function ze(e){return i(()=>e.name||e.for)}const Be=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,we=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ve=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ke=/[a-z0-9_ -]$/i;function He(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(Ce.is.firefox===!0?ke.test(t.data)===!1:Be.test(t.data)===!0||we.test(t.data)===!0||Ve.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}export{Oe as a,Te as b,Me as c,Ee as d,Se as e,De as f,ze as g,Ae as h,He as i,je as j,Ue as k,Ie as r,Pe as u};