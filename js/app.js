document.addEventListener('DOMContentLoaded', () => {
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    })

    const bars = document.querySelectorAll('.progress__bar');
    bars.forEach(bar => {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + "%";
        bar.style.width = percentage + '%';
    });

    ///counter

    const counters = document.querySelectorAll('.counter');

    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;
            let target = +counter.dataset.count;
            let step = target / 100;

            let countIt = function () {
                let displayedCount = +counter.innerText;
                if (displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step);
                    setTimeout(countIt, 1);
                }
                else {
                    counter.innerText = target
                }
            }
            countIt();
        })
    }


    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    document.getElementById("years").innerHTML = getAge("1988-03-25") + " years";


    buttonSendMessage = document.getElementById('sendMessage');

    buttonSendMessage.addEventListener('click', (event) => {
        event.preventDefault();

        sendName = document.getElementById('sendMessageName');
        sendMail = document.getElementById('sendMessageEmail');
        sendMessage = document.getElementById('sendMessageNote');

        let url = new URL('https://api.telegram.org/bot1466541267:AAGcoImiqLFPye5hMMLYde-a800B3kmv-vE/sendMessage');
        url.searchParams.set('chat_id', '185326409');
        url.searchParams.set('parse_mode', 'HTML');
        const textMessage = `Новое сообщение с сайта CV \nName: ${sendName.value} \nEmail: ${sendMail.value} \nMessage: ${sendMessage.value}`;
        url.searchParams.set('text', textMessage);

        fetch(url);

        sendName.value = '';
        sendMail.value = '';
        sendMessage.value = '';
    })

})




