import{aR as c,s as n,t as m,v as i,x as a,f as r,y as u,aW as d,M as b}from"./index.d9b7936b.js";import{Q as f}from"./QTable.c8409308.js";import"./use-key-composition.786bfba1.js";import"./QCheckbox.1a78b906.js";const g=a("h4",{class:"text-center"},"\u9810\u7D04\u67E5\u8A62",-1),p={class:"q-pa-md-xl text-center"},k={__name:"SeePage",setup(_){const l=c();(async()=>{try{const{data:e}=await d.get("/users");console.log(e.result.reserve);let t=0;for(t=0;t<e.result.reserve.length;t++)s.push({date:e.result.reserve[t].date,time:e.result.reserve[t].time,name:e.result.reserve[t].name,member:e.result.reserve[t].member,success:"\u6210\u529F"}),l.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u53D6\u5F97\u6210\u529F"})}catch(e){console.log(e)}})();const o=[{name:"name",align:"left",label:"\u59D3\u540D",field:"name",sortable:!0},{name:"date",required:!0,label:"\u65E5\u671F",align:"center",field:"date",sortable:!0},{name:"time",align:"center",label:"\u6642\u9593",field:"time",sortable:!0},{name:"member",align:"center",label:"\u4EBA\u6578",field:"member",sortable:!0},{name:"success",align:"center",label:"\u6210\u529F",field:"success",sortable:!0}],s=n([]);return(e,t)=>(m(),i("section",null,[g,a("div",p,[r(f,{class:"my-sticky-header-table",title:"",rows:s,columns:o,"row-key":"name",flat:"",bordered:"","no-data-label":"\u54ED\u963F\uFF0C\u4F60\u5C1A\u672A\u9810\u7D04\u4EFB\u4F55\u6642\u9593"},{"body-cell-success":u(()=>[r(b,{name:"check",size:"40px",color:"primary"})]),_:1},8,["rows"])])]))}};export{k as default};
