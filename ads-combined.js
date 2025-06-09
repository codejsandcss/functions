function loadAds(p){let u;if(p==='A'){u="https://codejsandcss.github.io/functions/ads-n1.html";}else if(p==='B'){u="https://codejsandcss.github.io/functions/ads-n2.html";}else if(p==='RANDOM'){const a=["https://codejsandcss.github.io/functions/ads-n1.html","https://codejsandcss.github.io/functions/ads-n2.html"];u=a[Math.floor(Math.random()*a.length)];}if(u){const i=document.createElement("iframe");i.src=u;i.width="100%";i.height="280";i.style.border="none";document.body.appendChild(i);}}

(function(){const c=document.getElementById('ads-container'),o=document.body.appendChild;document.body.appendChild=function(e){if(e.tagName==='IFRAME'){e.style.height='100%';e.style.width='100%';e.style.border='none';c.appendChild(e);}else{o.call(document.body,e);}};loadAds('A');})();


