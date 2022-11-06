window.addEventListener("load", solve);

function solve() {
  let inputElements = document.querySelectorAll('fieldset input, select');
  let publishBtnEl = document.getElementById('publish');
  let tableBodyEl = document.getElementById('table-body');
  let soldCarsListEl = document.getElementById('cars-list');
  let totalProfitEl = document.getElementById('profit');

  // let carDetails = {};
  let totalProfit = 0;

  publishBtnEl.addEventListener('click', (e) => {
      e.preventDefault();

      let carDetails = {};

      let hasEmptyInput = Array.from(inputElements).some(x => !x.value || x.value.trim() === '');

      if (hasEmptyInput) {
          return;
      }

      Array.from(inputElements).forEach(x => {
          carDetails[x.id] = x.value;
      });

      if (isNaN(Number(carDetails['original-cost'])) || isNaN(Number(carDetails['selling-price']))) {
          return;
      }

      if (Number(carDetails['original-cost']) > Number(carDetails['selling-price'])) {
          return;
      }

      let trRowEl = document.createElement('tr');
      trRowEl.classList.add('row');

      Object.keys(carDetails).forEach(key => {
          let tdEl = document.createElement('td');
          tdEl.textContent = carDetails[key];
          trRowEl.appendChild(tdEl)
      });

      let tdBtnsEl = document.createElement('td');
      let editBtnEl = document.createElement('button');
      editBtnEl.textContent = 'Edit';
      editBtnEl.classList.add('action-btn')
      editBtnEl.classList.add('edit')
      let sellBtnEl = document.createElement('button');
      sellBtnEl.textContent = 'Sell'
      sellBtnEl.classList.add('action-btn');
      sellBtnEl.classList.add('sell');

      tdBtnsEl.appendChild(editBtnEl);
      tdBtnsEl.appendChild(sellBtnEl);

      trRowEl.appendChild(tdBtnsEl);
      tableBodyEl.appendChild(trRowEl);

      Array.from(inputElements).forEach(x => {
          x.value = '';
      })

      editBtnEl.addEventListener('click', (e) => {
          Array.from(inputElements).forEach(x => {
              // console.log(carDetails);
              x.value = carDetails[x.id];
          })

          tableBodyEl.removeChild(trRowEl);
      })

      sellBtnEl.addEventListener('click', (e) => {
          let liEl = document.createElement('li');
          liEl.classList.add('each-list');

          let carModelAndNameEl = document.createElement('span');
          carModelAndNameEl.textContent = carDetails.make + ' ' + carDetails.model;

          let yearEl = document.createElement('span');
          yearEl.textContent = carDetails.year;

          let profitEl = document.createElement('span');
          profitEl.textContent = Number(carDetails['selling-price']) - Number(carDetails['original-cost']);

          liEl.appendChild(carModelAndNameEl);
          liEl.appendChild(yearEl);
          liEl.appendChild(profitEl);

          soldCarsListEl.appendChild(liEl);
          totalProfit += Number(carDetails['selling-price']) - Number(carDetails['original-cost']);

          totalProfitEl.textContent = Math.round(totalProfit).toFixed(2);
          tableBodyEl.removeChild(trRowEl);
      })
  })
}



// function solve() {
//   let make = document.getElementById("make");//= document.querySelector('#make');
//   let model = document.getElementById("model");
//   let year = document.getElementById("year");
//   let fuel = document.getElementById("fuel");
//   let originalCost = document.getElementById("original-cost");
//   let sellingPrice = document.getElementById("selling-price");
//   let tableBody = document.getElementById("table-body");
//   let publishBtn = document.getElementById("publish");
//   publishBtn.addEventListener('click', publishPost);

//   let makelValue = make.value;
//   let modelValue = model.value;
//   let yearValue = year.value;
//   let fuelValue = fuel.value;
//   let originalCostVl = Number(originalCost.value);
//   let sellingPriceVl = Number(sellingPrice.value);
//   let carList = document.getElementById("cars-list");
//   let totalProfit = document.getElementById("profit");
//   let profitMade = 0;

//   function publishPost(e) {
//     e.preventDefault();//ЗАДЪЛЖИТЕЛНО
//     if (make.value !== "" && model.value !== "" && year.value !== "" && fuel.value !== "" && Number(originalCost.value) < Number(sellingPrice.value)) {
//       creatDOMEl();
//       clearFormField();
//     } else {
//       return;
//     }

//   };

//   function creatDOMEl() {
//     let tr = document.createElement("tr");//elGenerator("tr");//
//     tr.setAttribute("class", "row");//tr.classList.add("row");// li.className = "row";

//     let maketd = document.createElement("td"); // или без да се създава нова функция  elGenerator
//     maketd.textContent = make.value; //elGenerator("td", `${make}`, tr);

//     let modeTd = document.createElement("td");   // elGenerator("td", `${model}`, tr);
//     modeTd.textContent = model.value;

//     let yearTd = document.createElement("td");// elGenerator("td", `${year}`, tr);
//     yearTd.textContent = year.value;

//     let fuelTd = document.createElement("td");  //elGenerator("td", `${fuel}`, tr);
//     fuelTd.textContent = fuelValue;

//     let costTd = document.createElement("td"); //elGenerator("td", `${originalCost}`, tr);
//     costTd.textContent = Number(originalCost.value);

//     let selltd = document.createElement("td");  //elGenerator("td", `${sellingPrice}`, tr);
//     selltd.textContent = Number(sellingPrice.value);

//     let editButton = document.createElement("button");// li.appendChild(editButton);
//     editButton.classList.add("action-btn");//бутона има два класа=action-btn и edit
//     editButton.classList.add("edit");//.setAttribute('class','classname');//editButton.classList.add("action-btn","edit")
//     editButton.textContent = "Edit";//

//     editButton.addEventListener('click', editPost);
//     function editPost(e) {
//       e.preventDefault();
//       e.target.parentNode.remove();

//       makelValue = make;
//       modelValue = model;
//       yearValue = year;
//       fuelValue = _uel;
//       originalCostVl = originalCost;
//       sellingPriceVl = sellingPrice;
//     };

//     let sellButton = document.createElement("button");
//     sellButton.setAttribute("class", "action-btn");
//     sellButton.textContent = "Sell";//
//     sellButton.addEventListener('click', sellPost);

//     function sellPost(e) {
 
//       e.preventDefault()
     
//       let profitForCurrentCar = Number(sellingPrice.value) - Number(originalCost.value)
//       let li = document.createElement("li");
//       li.classList.add('each-list');

//       let car = document.createElement("span");
//       car.textContent = `${makelValue} ${modelValue}`;
//       li.appendChild(car);

//       let prYear = document.createElement("span");
//       prYear.textContent = `${yearValue}`;
//       li.appendChild(prYear);

//       let difference = document.createElement("span");
//       difference.textContent = profitForCurrentCar
//       li.appendChild(difference);

//       carList.appendChild(li);
//       profitMade += profitForCurrentCar;
//       totalProfit.textContent = profitMade.toFixed(2);
//     };
//     tableBody.appendChild(tr);
//     tr.appendChild(maketd);
//     tr.appendChild(modeTd);
//     tr.appendChild(yearTd);
//     tr.appendChild(fuelTd);
//     tr.appendChild(costTd);
//     tr.appendChild(selltd);
//     tableBody.appendChild(editButton);
//     tableBody.appendChild(sellButton);
//   };

//   function clearFormField() {
//     make.value = "";
//     model.value = "";
//     year.value = "";
//     fuel.value = "";
//     originalCost.value = "";
//     sellingPrice.value = "";
//   };
//   //   function elGenerator(type, content, parent) {
//   //     const element = document.createElement(type);
//   //     element.textContent = content;
//   //     if (parent) {
//   //       parent.appendChild(element);
//   //     }
//   //     return element;
//   //   };

//   // let totalProfitVL= totalProfit.textContent;
// }
