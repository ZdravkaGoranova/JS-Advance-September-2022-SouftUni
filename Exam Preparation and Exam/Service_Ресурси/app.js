window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById("type-product");
    let description = document.getElementById("description");
    let name = document.getElementById("client-name");
    let phone = document.getElementById("client-phone");
    let sectionReceive = document.getElementById("received-orders");
    let completedOrders = document.getElementById("completed-orders");

    let clearBtn = completedOrders.children[2]// completedOrders.querySelector("button")
    clearBtn.addEventListener("click", clearOrders);

    document.querySelector("button[type='submit']").addEventListener("click", creatTask);

    function creatTask(e) {
        e.preventDefault();//за да не се презарежда !!!!
        let nameVl = name.value;
        let phoneVl = phone.value;
        let dsVl = description.value;
        let typeVl = productType.value;

        if (!nameVl || !phoneVl || !dsVl) {
            return;
        };
        description.value = "";
        name.value = "";
        phone.value = "";

        creatOrder(nameVl, phoneVl, dsVl, typeVl);
    };
    function creatOrder(nameVl, phoneVl, dsVl, typeVl) {

        let div = document.createElement("div");
        div.classList.add("container")

        let prType = document.createElement("h2");
        prType.textContent = `Product type for repair: ${productType.value}`;
        div.appendChild(prType);

        let clyInf = document.createElement("h3");
        clyInf.textContent = `Client information: ${nameVl}, ${phoneVl}`;
        div.appendChild(clyInf);

        let prDes = document.createElement("h4");
        prDes.textContent = `Description of the problem: ${dsVl}`;
        div.appendChild(prDes);

        let startBtn = document.createElement("button");
        startBtn.classList.add("start-btn");
        startBtn.textContent = "Start repair";
        div.appendChild(startBtn);

        startBtn.addEventListener("click", startRepair);

        function startRepair(e) {
            //e.preventDefault();
            startBtn.setAttribute("disabled", true);// e.target.setAttribute("disabled", true);
            e.target.parentElement.getElementsByClassName("finish-btn")[0].disabled = false;
        };

        let finishBtn = document.createElement("button");
        finishBtn.classList.add("finish-btn");
        finishBtn.textContent = "Finish repair";
        finishBtn.setAttribute("disabled", true);
        div.appendChild(finishBtn);

        sectionReceive.appendChild(div);
        finishBtn.addEventListener("click", finishRepair);

        function finishRepair(e) {
            let result = document.getElementById("received-orders").children[2];//e.target.parentElement;
            //debugger;
            let add = document.getElementById("completed-orders").appendChild(result);
            document.getElementById("completed-orders").querySelectorAll("button")[1].remove();
            document.getElementById("completed-orders").querySelectorAll("button")[1].remove();
        };

    };
    function clearOrders(e) {
        debugger;
        //let containers= document.getElementById("completed-orders").querySelectorAll(".container")
        let containers = completedOrders.querySelectorAll(".container")
        Array.from(containers).forEach(container=>container.remove());
    }
}