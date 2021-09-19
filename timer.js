// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет 
// до предварительно определенной даты.Такой плагин может использоваться 
// в блогах и интернет - магазинах, страницах регистрации событий, 
// во время технического обслуживания и т.д.



// Плагин ожидает следующую HTML - разметку и показывает четыре цифры: 
// дни, часы, минуты и секунды в формате XX: XX: XX: XX.
// Количество дней может состоять из более чем двух цифр.


// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.



const plagin = document.querySelector('.plagin');
const timerFace = document.querySelector('.timerFace')


class CountdownTimer {

    constructor({ selector, targetDate }) {

        this.selector = selector;
        this.targetDate = targetDate;
    }
    start() {
        const timer = document.getElementById(this.selector);
        if ((Date.now()) > this.targetDate) {
            timer.innerHTML = `Выберите дату больше текущей!`;
            return;
        };
        setInterval(() => {

            const currentTime = Date.now();
            
            const deltaTime = this.targetDate - currentTime;
            const timeComponents = this.getTimeComponents(deltaTime);

            const string = this.renderTimerFace(timeComponents);

            timer.innerHTML = string;
           
        }, 1000);        
        
    }
    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        return { days, hours, mins, secs }
    }
    renderTimerFace({ days, hours, mins, secs }) {
        return `<li class="field">
        <span class="value" data-value="days">${days}</span>
        <span class="label">Days</span>
    </li>

    <li class="field">
        <span class="value" data-value="hours">${hours}</span>
        <span class="label">Hours</span>
    </li>

    <li class="field">
        <span class="value" data-value="mins">${mins}</span>
        <span class="label">Minutes</span>
    </li>

    <li class="field">
        <span class="value" data-value="secs">${secs}</span>
        <span class="label">Seconds</span>
    </li>`}

}


const renderNewTimer = (event) => {

    if (event.target.id !== 'startBtn') return;
    const insertData = event.target.previousElementSibling.valueAsNumber;
    if (!insertData) return;
    
    const timerId = Math.random() * 10;

    timerFace.insertAdjacentHTML('beforeend', `<ul class="timer" id="timer-${timerId}"></ul>`);


    const timer1 = new CountdownTimer({
        selector: `timer-${timerId}`,
        targetDate: new Date(insertData),
    });

    timer1.start();

}



plagin.addEventListener('click', renderNewTimer);



