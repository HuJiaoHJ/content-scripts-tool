```bash
window.postMessage({
    lastTime: '昨天',
    hiText: 'hello。。。。'
}, '*'); // 开始工作！！！

window.postMessage('', "*"); // 开始，lastTime默认“昨天”，hiText默认那一段！！！

window.postMessage({
    lastTime: '13:08',
    hiText: '。。。。'
}, '*'); // 开始工作！！！

window.postMessage('stop', "*"); // 提前结束
```