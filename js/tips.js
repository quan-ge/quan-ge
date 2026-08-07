document.write('<script src="https://quan-ge.github.io/quan-ge/js/tipsjs.js"></script>')

var main = `温馨提示 \n\n
网址目前有较多BUG，暂未解决
并且兼容性可能一般
仅应急使用！
-------
文件下载或拉库请用专用服务：
<a href="https://fgp.120322.dpdns.org">https://fgp.120322.dpdns.org/</a>
-------
公共导航页：
<a href="http://nas.120322.xyz/">http://nas.120322.xyz//</a>
`

swal(main, 'success'); function AddFavorite(title, url) {
  try {
      window.external.addFavorite(url, title);
  }
catch (e) {
     try {
       window.sidebar.addPanel(title, url,);
    }
     catch (e) {
         alert(`温馨提示 \n\n
网址目前有较多BUG，暂未解决
并且兼容性可能一般
仅应急使用！
-------
文件下载或拉库请用专用服务：
<a href="https://fgp.120322.dpdns.org">https://fgp.120322.dpdns.org/</a>
-------
公共导航页：
<a href="http://nas.120322.xyz/">http://nas.120322.xyz//</a>`);
     }
  }
}
