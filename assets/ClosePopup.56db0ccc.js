import{j as n,aY as c,aZ as p,c as i,h as d,k as l,ax as u,a0 as h}from"./index.de8cf485.js";import{g as m,e as v}from"./QTable.467684ee.js";var y=n({name:"QCardActions",props:{...c,vertical:Boolean},setup(e,{slots:t}){const o=p(e),r=i(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>d("div",{class:r.value},l(t.default))}});function a(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var C=u({name:"close-popup",beforeMount(e,{value:t}){const o={depth:a(t),handler(r){o.depth!==0&&setTimeout(()=>{const s=m(e);s!==void 0&&v(s,r,o.depth)})},handlerKey(r){h(r,13)===!0&&o.handler(r)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=a(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{C,y as Q};
