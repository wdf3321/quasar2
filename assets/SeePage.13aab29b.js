import{Q as o}from"./QTable.cf97879d.js";import{aR as n,s as c,v as m,x as i,y as s,d as u,aW as d}from"./index.b246874e.js";import"./use-key-composition.96d766e2.js";import"./QCheckbox.d5dcbd39.js";const _=s("h4",{class:"text-center"},"\u9810\u7D04\u67E5\u8A62",-1),b={class:"q-pa-xl text-center"},x={__name:"SeePage",setup(g){const a=n();(async()=>{try{const{data:e}=await d.get("/users");console.log(e.result.reserve);let t=0;for(t=0;t<e.result.reserve.length;t++)r.push({date:e.result.reserve[t].date,time:e.result.reserve[t].time,name:e.result.reserve[t].name,member:e.result.reserve[t].member,success:"\u6210\u529F"}),a.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u53D6\u5F97\u6210\u529F"})}catch(e){console.log(e)}})();const l=[{name:"name",align:"left",label:"\u59D3\u540D",field:"name",sortable:!0},{name:"date",required:!0,label:"\u65E5\u671F",align:"center",field:"date",sortable:!0},{name:"time",align:"center",label:"\u6642\u9593",field:"time",sortable:!0},{name:"member",align:"center",label:"\u4EBA\u6578",field:"member",sortable:!0},{name:"success",align:"center",label:"\u6210\u529F",field:"success",sortable:!0}],r=c([]);return(e,t)=>(m(),i("section",null,[_,s("div",b,[u(o,{class:"my-sticky-header-table",title:"",rows:r,columns:l,"row-key":"name",flat:"",bordered:"","no-data-label":"\u54ED\u963F\uFF0C\u4F60\u5C1A\u672A\u9810\u7D04\u4EFB\u4F55\u6642\u9593"},null,8,["rows"])])]))}};export{x as default};