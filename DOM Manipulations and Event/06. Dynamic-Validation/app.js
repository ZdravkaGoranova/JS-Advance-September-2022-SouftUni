function validate() {
    let inputEmail = document.getElementById("email");
    let value = inputEmail.value;
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    inputEmail.addEventListener('change', changeInput)
    debugger;

    function changeInput(event) {
        if (reg.test(event.target.value)) {
            event.target.removeAttribute('class');
            return;
        }
        event.target.className = 'error';
    }
}