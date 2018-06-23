```bash
window.postMessage({
    lastTime: '昨天',
    hiText: 'hello。。。。'
}, '*'); // 开始工作！！！

window.postMessage('', "*"); // 开始，lastTime默认“昨天”，hiText默认那一段！！！

window.postMessage({
    lastTime: '13:08',
}, '*'); // 开始，可以只设置其中一个参数，比如只设置时间，hiText则使用默认的文案

window.postMessage('stop', '*'); // 提前结束
```