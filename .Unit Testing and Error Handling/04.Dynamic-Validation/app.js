function validate() {
    let input = document.getElementById("email");
    input.addEventListener("change", onChange);
    function onChange(e) {
        let email = e.target.value;// // let email = e.target.value;// не може textContent
        //let pattern = /[A-Za-z0_9]+@[A-Za-z0_9]+\.[A-Za-z]/g;
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        if (pattern.test(email)) {//test връща true или False
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }
}