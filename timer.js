// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет 
// до предварительно определенной даты.Такой плагин может использоваться 
// в блогах и интернет - магазинах, страницах регистрации событий, 
// во время технического обслуживания и т.д.



// Плагин ожидает следующую HTML - разметку и показывает четыре цифры: 
// дни, часы, минуты и секунды в формате XX: XX: XX: XX.
// Количество дней может состоять из более чем двух цифр.


// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2021'),
// });
// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */


// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
* Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
*/
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
* Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
*/
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
* миллисекунд в одной секунде (1000)
*/
// const secs = Math.floor((time % (1000 * 60)) / 1000);

// `    <div class="timer" id="timer-1">
// <div class="field">
// <span class="value" data-value="days">${days}</span>
// <span class="label">Days</span>
// </div>

// <div class="field">
// <span class="value" data-value="hours">${hours}</span>
// <span class="label">Hours</span>
// </div>

// <div class="field">
// <span class="value" data-value="mins">${mins}</span>
// <span class="label">Minutes</span>
// </div>

// <div class="field">
// <span class="value" data-value="secs">${secs}</span>
// <span class="label">Seconds</span>
// </div>
// </div>`

const refs = {
    timer: document.querySelector('#timer-1'),
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}

console.log(refs.timer);
console.log(refs.days.textContent);
console.log(refs.hours.textContent);
console.log(refs.mins.textContent);
console.log(refs.secs.textContent);

// сколько осталось полных дней до целевой даты?

// сколько осталось полных часов до целевой даты?

//  сколько осталось минут до целевой даты?

// сколько осталось секунд до целевой даты?


function getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return {days, hours, mins, secs}
}

const countdownTimer = {
    targetDate: new Date('Jul 17, 2021'),
    start() {
        setInterval(() => {
            const currentTime = Date.now();
            console.log(currentTime);
            const deltaTime = this.targetDate - currentTime;
            console.log(getTimeComponents(deltaTime));
            return getTimeComponents(deltaTime);
        }, 1000);
        
    },
}



countdownTimer.start();