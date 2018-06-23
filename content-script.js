let startSpider;
let stop = false;
const HT = 'hi,请问有计划看看快手机会不？近期急招。标配15寸macbook,4k显示器，包吃，住房补贴，补充商业保险，健身房，全额五险一金，年假病假春节假,按摩椅，台球，乒乓球一一俱全。双休，每日工作8小时的标准工时制。 重要的是16薪+。';
document.addEventListener('DOMContentLoaded', () => {
    startSpider = (data={}) => {
        const lastTime = data.lastTime || '昨天';
        const hiText = data.hiText || HT;
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
    startSpider(data);
  }, false);