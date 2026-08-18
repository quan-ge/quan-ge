// 来自网络
// 作用：让链接支持端口

// 例如：
// :8080/ui
// :7080./apl

// delegate event for performance, and save attaching a million events to each anchor
document.addEventListener('click', function(event) {
  var target = event.target.closest('a');  // 处理嵌套元素
  if (!target) return;
  
  var href = target.getAttribute('href');
  var match = href.match(/^:(\d+)(.*)/);
  if (match) {
    event.preventDefault();  // 阻止默认跳转
    var newUrl = window.location.protocol + '//' + 
                 window.location.hostname + ':' + match[1] + match[2];
    window.location.href = newUrl;  // 跳转到新端口
  }
});
