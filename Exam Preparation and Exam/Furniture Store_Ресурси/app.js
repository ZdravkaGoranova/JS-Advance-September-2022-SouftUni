window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById("model");
    let year = document.querySelector('#year');
    let description = document.getElementById("description");
    let price = document.getElementById("price");
    let addBtn = document.querySelector('#add');
    let furnitureList = document.querySelector('#furniture-list');

    addBtn.addEventListener('click', validateAndAdd);

    function validateAndAdd(e) {
        if (model.value !== '' && description.value !== '' && Number(year.value) > 0 && year.value !== '' && price.value >= 0  && Number(price.value) > 0) {
            let modelVl = model.value;
            let deslVl = description.value;
            let yearlVl = year.value;
            let pricelVl = Number(price.value);

            add(e, modelVl, yearlVl, deslVl, pricelVl);
            clearInputs();
        }
    };
    function add(e, modelVl, yearlVl, deslVl, pricelVl) {
        e.preventDefault();
       
        let trInfo = htmlGenerator('tr', '', furnitureList);
        trInfo.setAttribute('class', 'info');
        htmlGenerator('td', `${model.value}`, trInfo);
        htmlGenerator('td', `${(pricelVl).toFixed(2)}`, trInfo);
        let td = htmlGenerator('td', '', trInfo);

        let moreBtn = htmlGenerator('button', 'More Info', td);
        moreBtn.setAttribute('class', 'moreBtn');

        moreBtn.addEventListener('click', (e) => {
            debugger;
            // let newName = e.target.textContent;
            e.target.textContent === 'More Info'
                ? e.target.textContent = 'Less Info'
                : e.target.textContent = 'More Info';
            trHiden.style.display = 'none'
                ? trHiden.style.display = 'contents'
                : trHiden.style.display = 'none';
        });

        let buyBtn = htmlGenerator('button', 'Buy it', td);
        buyBtn.setAttribute('class', 'buyBtn');

        buyBtn.addEventListener('click', (e) => {
          debugger;
            let totalPrice = document.getElementsByClassName("total-price")[0];//let totalPrice = document.querySelector('.total-price');
            trInfo .remove();
            trHiden.remove();
           
            totalPrice.textContent = (Number(totalPrice.textContent) + pricelVl).toFixed(2);

            // let currentPrice = Number(e.target.parentElement.parentElement.children[1].textContent);
            // total.textContent = Number(total.textContent)+ currentPrice.toFixed(2);
        });

        let trHiden = htmlGenerator('tr', '', furnitureList);
        trHiden.setAttribute('class', 'hide');
        trHiden.setAttribute('style', 'display:contents');
        htmlGenerator('td', `Year: ${yearlVl}`, trHiden);
        let tdD = htmlGenerator('td', `Description: ${deslVl}`, trHiden);
        tdD.setAttribute('colspan', '3');
    };
    function htmlGenerator(tagName, content, parent) {
        let el = document.createElement(tagName);
        el.textContent = content;
        if (parent) {
            parent.appendChild(el);
        }
        return el;
    };
    function clearInputs() {
        model.value = '';
        description.value = '';
        year.value = '';
        price.value = '';
    }
}
