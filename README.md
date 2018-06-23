```bash
window.postMessage('', "*"); // 开始
window.postMessage('昨天', "*"); // 开始，设置时间参数
window.postMessage('13:08', "*"); // 开始，设置时间参数

window.postMessage('stop', "*"); // 结束执行
```