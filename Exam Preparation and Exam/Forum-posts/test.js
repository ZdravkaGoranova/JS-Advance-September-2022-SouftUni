function solve() {
    let reviewList = document.getElementById("review-list");
    //Btn Publish
    document.getElementById("publish-btn").addEventListener("click", publishing);
   
    let clesrBtn = document.getElementById("clear-btn");
    clesrBtn.addEventListener("click", onClear);
   
    function publishing() {
      let titleInput = document.getElementById("post-title").value;
      let categoryInput = document.getElementById("post-category").value;
      let contentInput = document.getElementById("post-content").value;
   
      if (titleInput == "" || categoryInput == "" || contentInput == "") {
        return;
      }
   
      let li = document.createElement("li");
      li.className = "rpost";
   
      let article = document.createElement("article");
   
      let title = document.createElement("h4");
      title.textContent = titleInput;
      article.appendChild(title);
   
      let pCategory = document.createElement("p");
      pCategory.textContent = `Category: ${categoryInput}`;
      article.appendChild(pCategory);
   
      let pContent = document.createElement("p");
      pContent.textContent = `Content: ${contentInput}`;
      article.appendChild(pContent);
   
      li.appendChild(article);
   
      let btnApprove = document.createElement("button");
      btnApprove.className = "action-btn approve";
      btnApprove.textContent = "Approve";
      li.appendChild(btnApprove);
   
      let btnEdit = document.createElement("button");
      btnEdit.className = "action-btn edit";
      btnEdit.textContent = "Edit";
      li.appendChild(btnEdit);
   
      reviewList.appendChild(li);
   
      document.getElementById("post-title").value = "";
      document.getElementById("post-category").value = "";
      document.getElementById("post-content").value = "";
   
      btnApprove.addEventListener("click", approve);
      btnEdit.addEventListener("click", edit);
    }
   
    function approve(ev) {
      // let parentLi = document.querySelector("li.rpost");
      // let btnS = Array.from(document.querySelectorAll("li.rpost button"));
      // for (const btn of btnS) {
      //   btn.remove();
      // }
      // document.querySelector("#published-list").append(parentLi);
   
      const parentLi = ev.target.parentElement;
      document.querySelector("#published-list").append(parentLi);
      ev.target.remove();
      parentLi.querySelector("button").remove();
    }
   
    function edit(ev) {
      let titleEdit = document.querySelector(
        "#review-list > li > article > h4"
      ).textContent;
      document.getElementById("post-title").value = titleEdit;
   
      let categoryEdit = Array.from(
        document
          .querySelector("#review-list > li > article > p:nth-child(2)")
          .textContent.split("Category: ")
      )[1];
      document.getElementById("post-category").value = categoryEdit;
   
      let contentEdit = Array.from(
        document
          .querySelector("#review-list > li > article > p:nth-child(3)")
          .textContent.split("Content: ")
      )[1];
      document.getElementById("post-content").value = contentEdit;
   
      document.querySelector("#review-list > li").remove();
    }
   
    function onClear(ev) {
      let articles = Array.from(
        document.querySelector("#published-list").children
      );
      for (const el of articles) {
        el.remove();
      }
    }
  }