import{aU as m,aQ as p,y as l,H as f,B as a,f as e,C as i,aR as d,x as g,E as y,z as c,A as u,F as x,G as h,aV as v,aW as w}from"./index.ca575b8f.js";import{Q}from"./QImg.b6bc774d.js";import{Q as n}from"./QCardSection.87362a47.js";import{Q as S}from"./QCard.4ea68e96.js";const k={__name:"ArticlesView",props:{_id:{type:String,default:""},date:{type:String,default:""},title:{type:String,default:""},inside:{type:String,default:""}},setup(s){return m().getArticles(),(r,_)=>{const o=p("router-link");return l(),f(S,{class:"my-card",flat:"",bordered:""},{default:a(()=>[e(n,null,{default:a(()=>[e(Q,{class:"col-5",src:"https://cdn.quasar.dev/img/parallax2.jpg"})]),_:1}),e(n,null,{default:a(()=>[i(d(s.date),1)]),_:1}),e(n,null,{default:a(()=>[e(o,{class:"text",to:"/articles/"+s._id},{default:a(()=>[i(d(s.title),1)]),_:1},8,["to"])]),_:1})]),_:1})}}},V={id:"indexsection"},A=u("h3",null,"\u6700\u65B0\u6D88\u606F",-1),B={class:"row justify-center"},z={__name:"NewsNews",setup(s){const t=g([]);return(async()=>{try{const{data:r}=await y.get("/articles");t.push(...r.result),t.reverse(),console.log(t)}catch{console.log("asd")}})(),(r,_)=>(l(),c("section",V,[A,u("div",B,[(l(!0),c(x,null,h(t,o=>(l(),c("div",{class:"col-md-3 col-xs-12 q-ma-md",key:o._id},[e(k,v(w(o)),null,16)]))),128))])]))}};export{z as default};