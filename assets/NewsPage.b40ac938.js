import{Q as x,c as f}from"./QTable.68509b41.js";import{j as y,c as b,h as k,k as Q,s as B,t as n,v as u,x as d,f as s,y as a,A as C,F as h,B as v,Q as N,aM as T,aN as q,aO as _,D as w,C as g}from"./index.2e4e4508.js";import{Q as m}from"./QTd.579ad8a2.js";import"./use-key-composition.134a8d1b.js";import"./QCheckbox.e5f91381.js";var p=y({name:"QTr",props:{props:Object,noHover:Boolean},setup(l,{slots:i}){const c=b(()=>"q-tr"+(l.props===void 0||l.props.header===!0?"":" "+l.props.__trClass)+(l.noHover===!0?" q-tr--no-hover":""));return()=>k("tr",{class:c.value},Q(i.default))}});const j={"data-aos":"fade-down"},A=d("h3",null,"\u6700\u65B0\u6D88\u606F",-1),D={class:"row items-center justify-center"},S={id:"table1",class:"q-ma-md-xl"},V={class:"text-center"},E={__name:"NewsPage",setup(l){const i=B([]),c=[{name:"time",required:!0,label:"\u6642\u9593",align:"left",field:t=>t.time,format:t=>`${t}`,sortable:!0},{name:"title",align:"center",label:"\u6A19\u984C",field:"title",sortable:!0}];return(async()=>{const t=await C.get("/articles");console.log(t);let r=0;for(r=0;r<t.data.result.length;r++)i.push({title:t.data.result[r].title,time:t.data.result[r].date,inside:t.data.result[r].inside})})(),(t,r)=>(n(),u("section",j,[A,d("div",D,[d("div",S,[s(x,{rows:i,columns:c,"row-key":"name","virtual-scroll":""},{header:a(e=>[s(p,{props:e},{default:a(()=>[s(f,{"auto-width":""}),(n(!0),u(h,null,v(e.cols,o=>(n(),w(f,{key:o.name,props:e},{default:a(()=>[g(_(o.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:a(e=>[s(p,{props:e},{default:a(()=>[s(m,{"auto-width":""},{default:a(()=>[s(N,{size:"md",color:"accent",round:"",dense:"",onClick:o=>e.row.expand=!e.row.expand,icon:e.row.expand?"remove":"add"},null,8,["onClick","icon"])]),_:2},1024),(n(!0),u(h,null,v(e.cols,o=>(n(),w(m,{key:o.name,props:e},{default:a(()=>[g(_(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"]),T(s(p,{props:e},{default:a(()=>[s(m,{"auto-width":"true",colspan:"100%"},{default:a(()=>[d("div",V,_(e.row.inside),1)]),_:2},1024)]),_:2},1032,["props"]),[[q,e.row.expand]])]),_:1},8,["rows"])])])]))}};export{E as default};