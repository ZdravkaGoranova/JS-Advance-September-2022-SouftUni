function lockedProfile() {
    const btns = [...document.getElementsByTagName('button')];
    // const btns =Array.from(document.getElementsByTagName('button'))
    btns.forEach(btn => btn.addEventListener('click', showHide));

    //let classA = document.getElementsByClassName("profile ");

    function showHide(event) {

        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if (lockStatus === "unlock") {
            if (button.textContent === 'Show more') {
                
                 moreInformation.style.display = 'inline-block';//moreInformation.style.display = "block";
                button.textContent = 'Hide it';//трябва да е = , а не ===
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = "none";//moreInformation.style.display = "";
                button.textContent = 'Show more';//трябва да е = , а не ===
            }
        }
    }
}