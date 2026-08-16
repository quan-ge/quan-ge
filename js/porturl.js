// 来自网络
// 作用：让链接支持端口

// 例如：
// :8080/ui
// :7080./apl

// delegate event for performance, and save attaching a million events to each anchor
document.addEventListener('click', function(event) {
  var target = event.target;
  if (target.tagName.toLowerCase() == 'a')
  {
      var port = target.getAttribute('href').match(/^:(\d+)(.*)/);
      if (port)
      {
         target.href = window.location.origin;
         target.port = port[1];
      }
  }
}, false);
