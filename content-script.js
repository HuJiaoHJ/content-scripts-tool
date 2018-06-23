let startSpider;
let stop = false;
document.addEventListener('DOMContentLoaded', () => {
    startSpider = (data='昨天') => {
        const mainList = document.querySelector('.main-list');
        if (!mainList) {
            console.log('页面错误');
            return;
        }
        const todayLiList =[];
        let chatMessage = '';
        let btnSend = '';
        const sendMessage = () => {
            todayLiList.forEach((item, index) => {
                const a = item.getElementsByTagName('a')[0];
                setTimeout(() => {
                    if (!stop) {
                        a.click();
                        setTimeout(() => {
                            chatMessage = document.getElementsByClassName('chat-message')[0];
                            chatMessage.innerText = 'hi';
                            setTimeout(() => {
                                btnSend = document.getElementsByClassName('btn-send')[0];
                                btnSend.click();
                            }, 2000);
                        }, 2000);
                    }
                }, index * 6000);
            })
        };
        setTimeout(() => {
            const liList = mainList.getElementsByTagName('li');
            for (var i = 0; i < liList.length; i++) {
                const item = liList[i];
                const time = item.getElementsByClassName('time')[0];
                if (time.innerText === data) {
                    break;
                }
                todayLiList.push(item);
            }
            console.log('----------');
            sendMessage();
        }, 5000);
    };
});

const start = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(stop);
            if (!stop) {
                console.log(i);
            }
        }, i * 5000);
    }
}

window.addEventListener("message", function(event) {
    console.log(event.data);
    const data = event.data;
    if (data === 'start') {
        start();
        return;
    }
    if (data === 'stop') {
        stop = true;
        return;
    }
    startSpider(data);
  }, false);