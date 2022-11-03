function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll("input[type=button]"));

    for (let button of buttons) {
        // console.log(button)
        button.addEventListener('click', convert);
    }
    function convert(event) {
        let value = Number(event.target.parentElement.querySelector("input[type=text]").value);
        // console.log(value)
        let unit = event.target.id;

        switch (unit) {
            case "daysBtn": populate(value); break;
            case "hoursBtn" : populate(value / 24); break;
            case "minutesBtn": populate(value / 24 / 60); break;
            case "secondsBtn": populate(value / 24 / 60 / 60); break;
        }
    }
    function populate(valueInDay) {
        let inputs = Array.from(document.querySelectorAll("input[type=text]"));
        inputs.shift().value = valueInDay;
        let currentValue = valueInDay * 24;
        for (let input of inputs) {
            input.value = currentValue;
            currentValue *= 60;
        }
    }
}

