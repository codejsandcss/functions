function loadAds(param) {
  let adUrl;

  if (param === 'A') {
    adUrl = "https://codejsandcss.github.io/functions/ads-n1.html";
  } else if (param === 'B') {
    adUrl = "https://codejsandcss.github.io/functions/ads-n2.html";
  } else if (param === 'RANDOM') {
    const ads = [
      "https://codejsandcss.github.io/functions/ads-n1.html",
      "https://codejsandcss.github.io/functions/ads-n1.html"
    ];
    adUrl = ads[Math.floor(Math.random() * ads.length)];
  }

  if (adUrl) {
    const iframe = document.createElement("iframe");
    iframe.src = adUrl;
    iframe.width = "316";
    iframe.height = "273";
    iframe.style.border = "none";
    document.body.appendChild(iframe); 
  }
}
