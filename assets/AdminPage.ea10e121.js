import{b1 as r,x as d,y as i,z as c,A as u,f as a,B as m,b4 as p}from"./index.ca575b8f.js";import{Q as s}from"./QInput.b1f0fa3c.js";import{Q as b}from"./QForm.1116011e.js";import"./use-key-composition.ecca5b10.js";const f={class:"column justify-center items-center q-mt-md"},V=u("img",{src:"https://source.boringavatars.com/beam/256/{{user.name}}colors=ffabab,ffdaab,ddffab,abe4ff,d9abff"},null,-1),y=u("div",null,null,-1),Q={__name:"AdminPage",setup(h){const n=r(),e=d({name:n.name,account:n.account,phone:n.phone});return(o,t)=>(i(),c("section",null,[u("div",f,[a(p,{size:"200px",color:"secondary","text-color":"white",class:"q-mb-xl"},{default:m(()=>[V]),_:1}),a(b,{onSubmit:o.onSubmit,class:"q-gutter-md text-center"},{default:m(()=>[a(s,{outlined:"",type:"text",modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.name=l),label:o.$t("name"),"lazy-rules":""},null,8,["modelValue","label"]),a(s,{outlined:"",type:"text",modelValue:e.account,"onUpdate:modelValue":t[1]||(t[1]=l=>e.account=l),label:o.$t("account"),"lazy-rules":""},null,8,["modelValue","label"]),a(s,{outlined:"",type:"tel",modelValue:e.phone,"onUpdate:modelValue":t[2]||(t[2]=l=>e.phone=l),label:o.$t("phone"),"lazy-rules":""},null,8,["modelValue","label"]),y]),_:1},8,["onSubmit"])])]))}};export{Q as default};