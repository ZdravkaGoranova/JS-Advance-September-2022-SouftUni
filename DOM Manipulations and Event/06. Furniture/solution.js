function solve() {
  let buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", generate);
  buttons[1].addEventListener("click", buy);

  function generate() {
    let currentJsonItems = JSON.parse(document.querySelectorAll("textarea")[0].value);//JSON чупи релацията към DOM дървото
    let tableBody = document.getElementsByTagName("tbody")[0];

    //Второ решение за създаване на нов ред за продукт:for (let item of currentJsonItems) {
    // let tbody = document.querySelector('tbody');
    //let input = JSON.parse(textarea[0].value);
    //  input.forEach(furniture => {
    //   tbody.innerHTML += `<tr>//tableRow = .innerHTML += `<tr>`+
    //    `<td><img src=${furniture.img}></td>`+
    //   `<td><p>${furniture.name}</p></td>`+
    //   `<td><p>${furniture.price}</p></td>`+
    //  `<td><p>${furniture.decFactor}</p></td>`+
    //  `<td><input type="checkbox"/></td>`+
    //  `</tr>`
    // })

    for (let item of currentJsonItems) {   //създаваме самия продукт в таблицата
      let tableRow = document.createElement("tr");
      let td = document.createElement("td");
      let img = document.createElement("img");
      img.setAttribute("src", item.img);
      td.appendChild(img);
      tableRow.appendChild(td);

      //name
      let furniture = document.createElement("td");
      let nameFurniture = document.createElement("p");
      nameFurniture.innerText = item.name;
      furniture.appendChild(nameFurniture);
      tableRow.appendChild(furniture);
      tableBody.appendChild(tableRow);

      //price
      let furPrice = document.createElement("td");
      let furPricep = document.createElement("p");
      furPricep.innerText = item.price;
      furPrice.appendChild(furPricep);
      tableRow.appendChild(furPrice);
      tableBody.appendChild(tableRow);

      // decoration factor
      let decTd = document.createElement("td");
      let decP = document.createElement("p");
      decP.innerText = item.decFactor;
      decTd.appendChild(decP);
      tableRow.appendChild(decTd);
      tableBody.appendChild(tableRow);
      //checkbox
      let inputTd = document.createElement("td");
      inputTd.innerHTML = '<input type ="checkbox">';
      tableRow.appendChild(inputTd);
      tableBody.appendChild(tableRow);
    }

  }

  function buy() {
    let finalResult = document.querySelectorAll("textarea")[1];
    let totalPrice = 0;
    let decF = 0;
   // let result = [];
    let totalName = [];
    let count = 0
    let table = Array.from(document.querySelectorAll("tbody tr"));

    for (let el of table) {
      if (el.querySelector("input[type=checkbox]:checked")) {
        let tableData = Array.from(el.querySelectorAll("td"));
       // let info = {};
        count++;
        let nameFur = el.querySelectorAll("td")[1].children[0].textContent;
        let priceFur = Number(el.querySelectorAll("td")[2].children[0].textContent);
        let decFur = Number(el.querySelectorAll("td")[3].children[0].textContent);
        // info = {
        //  name: nameFur,
        //  price: priceFur,
        //  decFactor: decFur
        //};
        //result.push(info);
        totalPrice += priceFur;
        decF += decFur;
        totalName.push(nameFur)
      }
    }
  //  console.log(result);
    //console.log(totalPrice);
   //console.log(decF);
    finalResult.value = `Bought furniture: ${totalName.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${( decF/ count)}`
  }
}