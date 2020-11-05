$(document).ready(function () {
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


    let counterSection = document.querySelector('.counter__section');
    const options = {
        rootMargin: '0px 0px -200px 0px'
    };
    let done = 0;
    const sectionObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && done !== 1) {
            done = 1;
            runCounter();
        }

    }, options)

    sectionObserver.observe(counterSection);





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

})




