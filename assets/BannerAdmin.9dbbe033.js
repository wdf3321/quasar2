import{Q as L}from"./QInput.f73e3455.js";import{Q as q}from"./QForm.17fac549.js";import{Q as B}from"./QCardSection.82343ad3.js";import{b6 as O,t as m,v as g,x as o,b7 as C,b8 as D,b9 as y,aW as F,ba as A,bb as M,aR as N,s as S,r as _,f as d,y as p,Q as f,D as U,C as j,F as R,aX as w,b3 as $,aM as H}from"./index.259f3f0b.js";import{Q as E}from"./QCardActions.c3f46b4f.js";import{Q as G}from"./QCard.e6910790.js";import{e as P,Q as W}from"./QTable.da1cfe8f.js";import{Q as X}from"./QImg.82d36c25.js";import{C as J}from"./ClosePopup.2e0ec6a6.js";import"./use-key-composition.f7cc742c.js";import"./QCheckbox.bda9ead0.js";let I=0;const K={name:"VImageInput",emits:["update:modelValue","error:fileSize","error:fileType"],props:{modelValue:{type:[Object,String,null]},removable:{type:Boolean,required:!1,default:!1},maxFileSize:{type:Number,required:!1,default:10},acceptedTypes:{type:Array,required:!1,default:()=>["png","svg","jpg","jpeg"]}},data(){return I+=1,{uid:`image-input${I}`,isDragOver:!1,imgSrc:null}},computed:{acceptedTypesString(){return this.acceptedTypes.map(t=>`.${t}`).join(", ")}},watch:{modelValue:{immediate:!0,handler(t){if(!t||typeof this.modelValue=="string")this.imgSrc=t;else{const e=new FileReader;e.onload=r=>{this.imgSrc=r.target.result},e.readAsDataURL(t)}}}},methods:{isValidFileType(t){const e=t.name.toLowerCase().split("."),r=e[e.length-1];return this.acceptedTypes.map(n=>n.toLowerCase()).includes(r)},isValidFileSize(t){const e=t.size/1024/1024;return this.maxFileSize>e},handleFileDrop(t){const e=t.dataTransfer.files[0];if(!!e){if(!this.isValidFileType(e))return this.$emit("error:fileType");if(!this.isValidFileSize(e))return this.$emit("error:fileSize");this.$emit("update:modelValue",e),this.isDragOver=!1}},handleFileInput(t){const e=t.target.files[0];if(!!e){if(!this.isValidFileType(e))return this.$emit("error:fileType");if(!this.isValidFileSize(e))return this.$emit("error:fileSize");this.$emit("update:modelValue",e)}},removeImage(){this.$emit("update:modelValue",null)},onDragOver(){this.isDragOver=!0},onDragLeave(){this.isDragOver=!1}}},Q=t=>(A("data-v-2b68f94a"),t=t(),M(),t),Y={key:0,class:"wrapper"},Z=["for"],ee=Q(()=>o("svg",{class:"input-icon",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",fill:"currentColor",viewBox:"0 0 460.002 460.002","xml:space":"preserve"},[o("path",{d:`M427.137,0H32.865C14.743,0,0,14.743,0,32.865v408.543c0,10.253,8.341,18.594,18.594,18.594h408.543
            c18.122,0,32.865-14.743,32.865-32.865V32.865C460.002,14.743,445.259,0,427.137,0z M139.001,56.001c39.149,0,71,31.851,71,71
            s-31.851,71-71,71c-39.149,0-71-31.851-71-71C68.001,87.852,99.852,56.001,139.001,56.001z M405.24,393.215
            c-2.634,4.801-7.675,7.786-13.151,7.786H67.913c-5.477,0-10.518-2.984-13.151-7.786c-2.634-4.802-2.442-10.657,0.501-15.275
            l77.092-120.984c2.754-4.322,7.524-6.939,12.65-6.939s9.896,2.617,12.65,6.939l37.029,58.111l72.346-113.536
            c2.754-4.323,7.524-6.939,12.65-6.939c5.125,0,9.896,2.617,12.65,6.939L404.739,377.94
            C407.682,382.559,407.874,388.414,405.24,393.215z`})],-1)),te={key:1,class:"wrapper"},le=["for"],ae=["src"],ie=Q(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor"},[o("path",{d:"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"})],-1)),re=["id","value","accept"];function se(t,e,r,c,n,a){return m(),g("div",{class:"image-input",onDragleave:e[2]||(e[2]=(...i)=>a.onDragLeave&&a.onDragLeave(...i)),onDragover:e[3]||(e[3]=y((...i)=>a.onDragOver&&a.onDragOver(...i),["prevent"])),onDrop:e[4]||(e[4]=y((...i)=>a.handleFileDrop&&a.handleFileDrop(...i),["prevent"]))},[r.modelValue?(m(),g("div",te,[o("label",{for:n.uid,class:D([{"is-drag-over":n.isDragOver},"input-label hover-label pointer"])},[o("img",{class:"selected-image",alt:"",src:n.imgSrc},null,8,ae)],10,le),r.removable?(m(),g("div",{key:0,onClick:e[0]||(e[0]=y((...i)=>a.removeImage&&a.removeImage(...i),["prevent"])),class:"remove-icon"},[C(t.$slots,"remove-icon",{},()=>[ie],!0)])):F("",!0)])):(m(),g("div",Y,[o("label",{for:n.uid,class:D(["input-label empty-layout",{"is-drag-over":n.isDragOver}])},[C(t.$slots,"empty-layout",{},()=>[ee],!0)],10,Z)])),o("input",{type:"file",class:"input",id:n.uid,value:r.modelValue?null:r.modelValue,onChange:e[1]||(e[1]=(...i)=>a.handleFileInput&&a.handleFileInput(...i)),accept:a.acceptedTypesString},null,40,re)],32)}var T=O(K,[["render",se],["__scopeId","data-v-2b68f94a"]]);function b(t){b.installed||(b.installed=!0,t.component("VImageInput",T))}const oe={install:b};let v=null;typeof window!="undefined"?v=window.Vue:typeof global!="undefined"&&(v=global.Vue);v&&v.use(oe);const ne={class:"text-center"},de={class:"q-pa-md text-center"},ue={class:"text-center",id:"btns"},ce={class:"q-mt-md",id:"pic"},Ve={__name:"BannerAdmin",setup(t){const e=N(),r=S([]),c=_([]),n=_(!1),a=_(!1),i=S({id:"",image:void 0}),h=async()=>{const s=await w.get("/banner");console.log(s.data.result);let l=0;for(l=0;l<s.data.result.length;l++)r.push({_id:s.data.result[l]._id,id:s.data.result[l].id,image:s.data.result[l].image});e.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u53D6\u5F97\u6210\u529F"})};h();const x=async()=>{try{n.value=!0;const s=new FormData;s.append("image",i.image),s.append("id",i.id);const l=await w.post("/banner",s);for(console.log(l),e.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u4E0A\u50B3\u6210\u529F"}),n.value=!1,a.value=!1;r.length;)r.pop();h()}catch{e.notify({color:"red-4",textColor:"white",icon:"cloud_off",message:"\u4E0A\u50B3\u5931\u6557"}),n.value=!1}},z=async()=>{const s=await w.delete(`/banner/${c.value[0]._id}`);for(console.log(s),e.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u522A\u9664\u6210\u529F"});r.length;)r.pop();h()},k=[{name:"_id",align:"center",label:"_id",field:"_id",sortable:!0},{name:"id",align:"center",label:"id",field:"id",sortable:!0},{name:"image",label:"image",align:"center",field:"image",sortable:!0}];return(s,l)=>{var V;return m(),g(R,null,[o("div",ne,[d(P,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=u=>a.value=u),persistent:""},{default:p(()=>[d(G,{style:{"min-width":"350px"}},{default:p(()=>[d(B,null,{default:p(()=>[d(q,{onSubmit:x},{default:p(()=>[d($(T),{modelValue:i.image,"onUpdate:modelValue":l[0]||(l[0]=u=>i.image=u),width:300,height:200},null,8,["modelValue"]),d(L,{outlined:"",modelValue:i.id,"onUpdate:modelValue":l[1]||(l[1]=u=>i.id=u),label:"\u7B2C\u5E7E\u5F35",class:"q-mt-xl"},null,8,["modelValue"])]),_:1})]),_:1}),d(E,{align:"right",class:"text-primary"},{default:p(()=>[H(d(f,{flat:"",label:"\u53D6\u6D88"},null,512),[[J]]),d(f,{type:"submit",icon:"upload",color:"teal",label:"\u4E0A\u50B3",onClick:x,loading:n.value},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),o("section",null,[o("div",de,[d(W,{title:s.$t("banneradmin"),rows:r,columns:k,"row-key":"id",selection:"single",selected:c.value,"onUpdate:selected":l[3]||(l[3]=u=>c.value=u)},null,8,["title","rows","selected"])])]),o("section",null,[o("div",ue,[d(f,{label:"\u65B0\u589E\u5716\u7247",icon:"add",color:"primary",onClick:l[4]||(l[4]=u=>a.value=!0),class:"q-mr-md-xl q-my-xs-xs"}),c.value[0]?(m(),U(f,{key:0,onClick:z,label:"\u522A\u9664\u5716\u7247",icon:"delete",color:"teal",class:"q-mr-md-xl q-my-xs-xs"})):F("",!0)])]),o("div",ce,[j(" \u9810\u89BD\uFF1B "),d(X,{src:(V=c.value[0])==null?void 0:V.image},null,8,["src"])])],64)}}};export{Ve as default};
