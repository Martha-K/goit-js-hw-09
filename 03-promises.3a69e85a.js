function e(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o([e,t]):r([e,t])}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{elements:{delay:n="",step:o="",amount:r=""}}=t.currentTarget||{},u=Number(n.value),l=Number(o.value),m=Number(r.value);for(let t=1;t<=m;t++){e(t,l*t+u).then((([e,t])=>{console.log(`✅ Fulfilled promise ${e} in ${t} ms`)})).catch((([e,t])=>{console.log(`❌ Rejected promise ${e} in ${t} ms`)}))}}));
//# sourceMappingURL=03-promises.3a69e85a.js.map
