window.addEventListener("load", solve);

function solve() {
    let title = document.getElementById("post-title");
    let category = document.getElementById("post-category");
    let content = document.getElementById("post-content");

    let review = document.getElementById("review-list");
    let publishButton = document.getElementById("publish-btn");
    publishButton.addEventListener('click', creatPost);
    let approveSection = document.getElementById("published-list");
    let clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener('click', clearPost);

    function creatPost(e) {
        let titelValue = title.value;
        let categoryValue = category.value;
        let contentValue = content.value;

        if (!titelValue || !categoryValue || !contentValue) {
            return;
        }
        creatDOMEl(titelValue, categoryValue, contentValue);
        clearFormField();
    };

    function clearPost(e) {
        let currentPost = e.target.parentElement;//Array.from(document.querySelector("#published-list").children
        Array.from(approveSection.children).forEach(li => li.remove());
    };

    function clearFormField() {
        title.value = "";
        category.value = "";
        content.value = "";
    };

    function creatDOMEl(titelValue, categoryValue, contentValue) {
        let li = document.createElement("li");
        li.classList.add("rpost");// li.className = "rpost";

        let article = creatArticle(titelValue, categoryValue, contentValue);

        let editButton = document.createElement("button");// li.appendChild(editButton);
        editButton.classList.add("action-btn");//бутона има два класа=action-btn и edit
        editButton.classList.add("edit");//.setAttribute('class','classname')
        //editButton.classList.add("action-btn","edit")
        editButton.textContent = "Edit";//

        editButton.addEventListener('click', editPost);

        let approveButton = document.createElement("button");// li.appendChild(approveButton);
        approveButton.classList.add("action-btn");//approveButton.className = "action-btn approve";
        approveButton.classList.add("approve");//approveButton.className = "action-btn approve";
        approveButton.textContent = "Approve";

        approveButton.addEventListener('click', approvePost);

        review.appendChild(li);
        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(approveButton);
    };

    function creatArticle(titelValue, categoryValue, contentValue) {
        let article = document.createElement("article");

        let h = document.createElement("h4");
        h.textContent = titelValue;// article.appendChild(h);

        let categoryP = document.createElement("p");
        categoryP.textContent = `Category: ${categoryValue}`;// h.appendChild(categoryP);

        let contentP = document.createElement("p");
        contentP.textContent = `Content: ${contentValue}`;// h.appendChild(contentP);

        article.appendChild(h);
        article.appendChild(categoryP);
        article.appendChild(contentP);

        return article;
    };

    function editPost(e) {

        let currentPost = e.target.parentElement;//li.rpost
        let articleContent = currentPost.getElementsByTagName("article")[0].children;//взимаме самия article HTMLCollection(3) [h4, p, p] с h4,categoryP,contentP
        //e.target.parentElement.getElementsByTagName("article")[0].children

        let titelValue = articleContent[0].textContent;
        let categoryValue = articleContent[1].textContent;
        let contentValue = articleContent[2].textContent;

        title.value = titelValue.split(": ")[1];
        category.value = categoryValue.split(": ")[1];
        content.value = contentValue.split(": ")[1];
        currentPost.remove();
    };

    function approvePost(e) {
        let currentPost = e.target.parentElement;//li.rpost
        approveSection.appendChild(currentPost);//document.querySelector("#published-list").append(currentPost);
        Array.from(currentPost.querySelectorAll("button")).forEach(btn => btn.remove());
       //Това НЕ Е Вярно currentPost.querySelector("button").remove();
    }
}
solve();