(function () {
  const container = document.getElementById('ads-container');
  const originalAppend = document.body.appendChild;

  document.body.appendChild = function (el) {
    if (el.tagName === 'IFRAME') {
      el.style.height = '100%';
      el.style.width = '100%';
      el.style.border = 'none';
      container.appendChild(el);
    } else {
      originalAppend.call(document.body, el);
    }
  };

  loadAds('A');
})();
