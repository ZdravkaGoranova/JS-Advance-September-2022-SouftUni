function create(words) {
   for (let word of words) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.style.display = "none";
      // p.textContent = word;
      p.innerText = word;
      div.appendChild(p);
      div.addEventListener('click', showP);

      document.getElementById("content").appendChild(div);

      debugger;
      function showP(event) {
         if (event.target.nodeName === "P") {
            event.target.style.display = "none";//или return;
         }
         let p = event.target.children[0];
         p.style.display = "block";
      }
   }
}