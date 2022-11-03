function focused() {
    let inputs = document.getElementsByTagName("input");
debugger;
    for (let input of inputs) {
        input.addEventListener('focus', inputFocus);
        input.addEventListener('blur', inputBluerd);
    }

    function inputFocus(event) {
        event.target.parentElement.classList.add('focused')
    }
    function inputBluerd(event) {
        event.target.parentElement.classList.remove('focused')
    }
}