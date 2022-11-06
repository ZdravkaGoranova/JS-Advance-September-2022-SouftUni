//дава 90/100
function solve() {
    let fName = document.getElementById("fname");
    let lName = document.getElementById("lname");
    let email = document.getElementById("email");
    let birth = document.getElementById("birth");
    let position = document.getElementById("position");
    let salary = document.getElementById("salary");

    let tbody = document.getElementById("tbody");
    let addSalary = document.getElementById("sum");
    let salaryValue = Number(salary.value);

    let hireBtn = document.getElementById("add-worker");
    hireBtn.addEventListener('click', addTable);

    function addTable(e) {
        e.preventDefault();

        let fNameValue = fName.value;
        let lNameValue = lName.value;
        let birthValue = birth.value;
        let emailValue = email.value;
        let positionValue = position.value;
        let salaryValue = Number(salary.value);

        if (!fNameValue || !lNameValue || !birthValue || !positionValue || !salaryValue || !emailValue) {
            return;
        };
        creatHuman(e, fNameValue, lNameValue, emailValue, birthValue, positionValue, salaryValue);
        clearInputFileds();
    }
    function creatHuman(e, fNameValue, lNameValue, emailValue, birthValue, positionValue, salaryValue) {
        //debugger;

        // let tr = document.createElement('tr')
        //     tr.innerHTML = `
        //     <td>${firstName}</td>
        //     <td>${lastName}</td>
        //     <td>${email}</td>
        //     <td>${birthDate}</td>
        //     <td>${position}</td>
        //     <td>${salary}</td>
        //     <td><button class='fired'>Fired</button>
        //         <button class='edit'>Edit</button>
        //         </td>`;
        let tr = document.createElement('tr');
        tbody.appendChild(tr);

        let tdName = document.createElement('td');
        tdName.textContent = fNameValue;
        tr.appendChild(tdName);

        let tdlName = document.createElement('td');
        tdlName.textContent = lNameValue;
        tr.appendChild(tdlName);

        let tdemail = document.createElement('td');
        tdemail.textContent = emailValue;
        tr.appendChild(tdemail);

        let tdBirth = document.createElement('td');
        tdBirth.textContent = birthValue;
        tr.appendChild(tdBirth);


        let tdPosi = document.createElement('td');
        tdPosi.textContent = positionValue;
        tr.appendChild(tdPosi);

        let tdsalary = document.createElement('td');
        tdsalary.textContent = salaryValue;
        tr.appendChild(tdsalary);

        let firedBtn = document.createElement("button");
        firedBtn.classList.add("fired");
        firedBtn.textContent = "Fired";
        tr.appendChild(firedBtn);

        firedBtn.addEventListener('click', fireDeleted);

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
        tr.appendChild(editBtn);

        editBtn.addEventListener('click', onEdited);

        let currentSalary = Number(addSalary.textContent);
        addSalary.textContent = (Number(salaryValue) + currentSalary).toFixed(2);
        //  let budgetTotal = 0;
        // budgetTotal += Number(salary);
        // budget.textContent = budgetTotal.toFixed(2);
    };
    function clearInputFileds() {
        fName.value = "";
        lName.value = "";
        email.value = "";
        birth.value = "";
        position.value = "";
        salary.value = "";
    };
    function fireDeleted(e) {
        debugger;
        e.preventDefault();
        let curentButton = e.target;
        let currenS = Number(e.target.parentElement.children[5].textContent);
        e.target.parentElement.remove();

        reduceSalary(currenS);
    };
    function reduceSalary(currenS) {
        const currentSalary = Number(addSalary.textContent);
        addSalary.textContent = Math.abs(currenS - currentSalary).toFixed(2);
    };
    function onEdited(e) {
        e.preventDefault();
        let curentButton = e.target;
        let currenS = Number(e.target.parentElement.children[5].textContent);
        e.target.parentElement.remove();


        fName.value = fName;
        lName.value = lName;
        email.value = email;
        birth.value = birth;
        position.value = position;
        salary.value = salary;
        reduceSalary(currenS);
        // tr.remove();
        //     budgetTotal -= salary;
        //     budget.textContent = budgetTotal.toFixed(2); 
    };
}
solve()

//дава 100/100
// function solve() {
//     let input = {
//         firstName: document.getElementById('fname'),
//         lastName: document.getElementById('lname'),
//         email: document.getElementById('email'),
//         birthDate: document.getElementById('birth'),
//         position: document.getElementById('position'),
//         salary: document.getElementById('salary'),
//     }
//     let tableBody = document.getElementById('tbody');
//     let budget = document.getElementById('sum');
//     let budgetTotal = 0;
//     let hireBtn = document.getElementById('add-worker');
//     hireBtn.addEventListener('click', onHire);
 
//     function onHire(ev){
//         ev.preventDefault()
//         //store date in variables
//         let firstName = input.firstName.value
//         let lastName = input.lastName.value
//         let email = input.email.value
//         let birthDate = input.birthDate.value
//         let position = input.position.value
//         let salary = input.salary.value
 
//          //validate
//          for (const item in input) {
//             if (input[item].value == '') {
//                 return
//             }
 
//             // create TABLEROW element
 
//             let tr = document.createElement('tr')
//             tr.innerHTML = `
//             <td>${firstName}</td>
//             <td>${lastName}</td>
//             <td>${email}</td>
//             <td>${birthDate}</td>
//             <td>${position}</td>
//             <td>${salary}</td>
//             <td><button class='fired'>Fired</button>
//                 <button class='edit'>Edit</button>
//                 </td>
//             `
//             budgetTotal += Number(salary);
//             budget.textContent = budgetTotal.toFixed(2);
//             tableBody.appendChild(tr)
//             //add functionality to buttons
//             let firedBtn = tr.querySelector('button.fired')
//             firedBtn.addEventListener('click',onFired)
//             let editBtn = tr.querySelector('button.edit')
//             editBtn.addEventListener('click',onEdited)
 
 
//             function onEdited(){
//             input.firstName.value = firstName;
//             input.lastName.value = lastName;
//             input.email.value = email;
//             input.birthDate.value = birthDate;
//             input.position.value = position;
//             input.salary.value = salary;
//             tr.remove();
//             budgetTotal -= salary;
//             budget.textContent = budgetTotal.toFixed(2); 
 
//             }
//             function onFired(){
//             tr.remove();
//             budgetTotal -= salary;
//             budget.textContent = budgetTotal.toFixed(2); 
//             }
 
 
 
//             //clear input fields
//         input.firstName.value = ''
//         input.lastName.value =''
//         input.email.value= ''
//         input.birthDate.value= ''
//         input.position.value= ''
//         input.salary.value = ''
 
//     }
 
// }
// }