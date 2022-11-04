function notify(message) {
  let divContent = document.getElementById("notification");
  divContent.innerText = message;//divContent.textContent.textContent
  divContent.style.display = "block"
  // divContent.style.display = divContent.style.display === "none" || currentDisplayState === "" ?
  //"block": "none";

  divContent.addEventListener("click", insedeText);
  function insedeText() {
    divContent.style.display = "none";
  }
  // function insedeText(e) {
  //  e.target.style.display = "none";
  // }
}