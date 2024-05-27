
function startCountdown() {

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');


    let days = parseInt(daysElement.innerText);
    let hours = parseInt(hoursElement.innerText);
    let minutes = parseInt(minutesElement.innerText);
    let seconds = parseInt(secondsElement.innerText);

    setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;
                if (hours > 0) {
                    hours--;
                } else {
                    hours = 23;
                    if (days > 0) {
                        days--;
                    }
                }
            }
        }

        daysElement.innerText = "0" + String(days);
        hoursElement.innerText = String(hours);
        minutesElement.innerText = String(minutes);
        secondsElement.innerText = String(seconds);

    }, 1000);
}


function dropDown() {

    const faqItems = document.getElementsByClassName('faq-item');
    const dropDownButtons = document.getElementsByClassName('drop-down');

    for (let i = 0; i < dropDownButtons.length; i++) {
        dropDownButtons[i].addEventListener('click', () => {

            let p = faqItems[i].getElementsByTagName('p');

            if (p[0].style.display === 'none' || p[0].style.display === '') {
                p[0].style.display = "block";
            }
            else {
                p[0].style.display = 'none';
            }

        });

    }
}

startCountdown();
dropDown();









