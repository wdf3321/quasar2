import{v as m,aU as p,x as f,y,z as g,f as s,B as b,aX as h,A as c,Q as w,aY as u}from"./index.738b47e8.js";import{Q as a}from"./QInput.597a13a7.js";import"./use-key-composition.c88f08c3.js";const V={class:"column justify-center items-center q-mt-md"},x=c("img",{src:"https://source.boringavatars.com/beam/256/$%7Baccount.value%7D?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff"},null,-1),_={class:"text-center"},C={__name:"EditPage",setup(U){const r=m(),n=p(),o=f({name:"",account:"",phone:"",password:""}),d=async()=>{try{const{data:t}=await u.get("/users");o.name=t.result.name,o.account=t.result.account,o.phone=t.result.phone,o.password=t.result.password,n._id=t.result._id,r.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u53D6\u5F97\u6210\u529F"})}catch(t){console.log(t)}},i=async()=>{try{console.log(o),await u.patch(`/users/${n._id}`,o),await r.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u4FEE\u6539\u6210\u529F"})}catch(t){r.notify({color:"red-4",textColor:"white",icon:"info",message:t.message})}};return d(),(t,l)=>(y(),g("div",V,[s(h,{size:"200px",color:"secondary","text-color":"white",class:"q-mb-xl"},{default:b(()=>[x]),_:1}),c("section",_,[s(a,{outlined:"",type:"text",modelValue:o.name,"onUpdate:modelValue":l[0]||(l[0]=e=>o.name=e),label:"\u59D3\u540D","lazy-rules":"",rules:[e=>e&&e.length>=2||"\u8ACB\u8F38\u5165\u5168\u540D"]},null,8,["modelValue","rules"]),s(a,{outlined:"",type:"text",modelValue:o.account,"onUpdate:modelValue":l[1]||(l[1]=e=>o.account=e),label:"\u5E33\u865F","lazy-rules":"",rules:[e=>e&&e.length>=4||"\u6700\u5C114\u4F4D\u6578\u4EE5\u4E0A"]},null,8,["modelValue","rules"]),s(a,{outlined:"",type:"password",modelValue:o.password,"onUpdate:modelValue":l[2]||(l[2]=e=>o.password=e),label:"\u5BC6\u78BC","lazy-rules":"",rules:[e=>e&&e.length>=4||"\u6700\u5C114\u4F4D\u6578\u4EE5\u4E0A"]},null,8,["modelValue","rules"]),s(a,{outlined:"",type:"tel",modelValue:o.phone,"onUpdate:modelValue":l[3]||(l[3]=e=>o.phone=e),label:"\u624B\u6A5F","lazy-rules":"",rules:[e=>e&&e.length>9||"\u8ACB\u8F38\u5165\u6B63\u78BA\u624B\u6A5F\u865F\u78BC"]},null,8,["modelValue","rules"]),s(w,{label:"\u5132\u5B58",onClick:i,color:"primary"})])]))}};export{C as default};