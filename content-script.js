let startSpider;
let stop = true;
const HT = 'hi%2C%E8%AF%B7%E9%97%AE%E6%9C%89%E8%AE%A1%E5%88%92%E7%9C%8B%E7%9C%8B%E5%BF%AB%E6%89%8B%E6%9C%BA%E4%BC%9A%E4%B8%8D%EF%BC%9F%E8%BF%91%E6%9C%9F%E6%80%A5%E6%8B%9B%E3%80%82%E6%A0%87%E9%85%8D15%E5%AF%B8macbook%2C4k%E6%98%BE%E7%A4%BA%E5%99%A8%EF%BC%8C%E5%8C%85%E5%90%83%EF%BC%8C%E4%BD%8F%E6%88%BF%E8%A1%A5%E8%B4%B4%EF%BC%8C%E8%A1%A5%E5%85%85%E5%95%86%E4%B8%9A%E4%BF%9D%E9%99%A9%EF%BC%8C%E5%81%A5%E8%BA%AB%E6%88%BF%EF%BC%8C%E5%85%A8%E9%A2%9D%E4%BA%94%E9%99%A9%E4%B8%80%E9%87%91%EF%BC%8C%E5%B9%B4%E5%81%87%E7%97%85%E5%81%87%E6%98%A5%E8%8A%82%E5%81%87%2C%E6%8C%89%E6%91%A9%E6%A4%85%EF%BC%8C%E5%8F%B0%E7%90%83%EF%BC%8C%E4%B9%92%E4%B9%93%E7%90%83%E4%B8%80%E4%B8%80%E4%BF%B1%E5%85%A8%E3%80%82%E5%8F%8C%E4%BC%91%EF%BC%8C%E6%AF%8F%E6%97%A5%E5%B7%A5%E4%BD%9C8%E5%B0%8F%E6%97%B6%E7%9A%84%E6%A0%87%E5%87%86%E5%B7%A5%E6%97%B6%E5%88%B6%E3%80%82%20%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF16%E8%96%AA%2B%E3%80%82';
document.addEventListener('DOMContentLoaded', () => {
    startSpider = (data={}) => {
        const lastTime = data.lastTime || '昨天';
        const hiText = data.hiText || decodeURIComponent(HT);
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
                            chatMessage.innerText = hiText;
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
                if (time.innerText === lastTime) {
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
        }, i * 3000);
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
    if (data.type === 'spider') {
        stop = false;
        startSpider(data);
    }
  }, false);