function loadAds(p){
  let u;
  if(p==='A'){
    u="https://codejsandcss.github.io/functions/ads-n1.html";
  }else if(p==='B'){
    u="https://codejsandcss.github.io/functions/ads-n2.html";
  }else if(p==='RANDOM'){
    const a=[
      "https://codejsandcss.github.io/functions/ads-n1.html",
      "https://codejsandcss.github.io/functions/ads-n2.html"
    ];
    u=a[Math.floor(Math.random()*a.length)];
  }
  if(u){
    const iframe=document.createElement("iframe");
    iframe.src=u;
    iframe.width="100%";
    iframe.height="280";
    iframe.style.border="none";
    document.getElementById("ads-container").appendChild(iframe);
  }
}

window.addEventListener("DOMContentLoaded",function(){
  loadAds("A");
});
