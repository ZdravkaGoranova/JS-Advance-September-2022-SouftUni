function solve() {
    let recipientName = document.getElementById("recipientName");
    let title = document.getElementById("title");
    let message = document.getElementById("message");
    let ulList = document.getElementById("list");
    let ulSendList = document.getElementsByClassName("sent-list")[0];
   ;

    let addBtn = document.getElementById("add");
    addBtn.addEventListener('click', addList);

    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener('click', clearList);

    function addList(e) {
        e.preventDefault();

        let recipientNameVl = recipientName.value;
        let titleVl = title.value;
        let messageVl = message.value;

        if (!recipientNameVl || !titleVl || !messageVl) {
            return;
        };
        creadList(recipientNameVl, titleVl, messageVl);
        cleared();
    };

    function creadList(recipientNameVl, titleVl, messageVl) {
        let li = document.createElement("li");
        ulList.appendChild(li);

        let h4T = document.createElement("h4");
        h4T.textContent = `Title: ${title.value}`
        li.appendChild(h4T);

        let h4R = document.createElement("h4");
        h4R.textContent = `Recipient Name: ${recipientName.value}`
        li.appendChild(h4R);

        let span = document.createElement("span");
        span.textContent = message.value;
        li.appendChild(span);


        let div = document.createElement("div");
        div.setAttribute('id', 'list-action');
        li.appendChild(div);

        let sendBtn = document.createElement("button");
        sendBtn.setAttribute('type', 'submit');
        sendBtn.setAttribute('id', 'send');
        sendBtn.textContent = "Send";
        div.appendChild(sendBtn);
        sendBtn.addEventListener('click', sentMails);

        function sentMails(e) {
            let li = document.createElement("li");
            ulSendList.appendChild(li);

            let span = document.createElement("span");
            span.textContent = `To: ${h4R.textContent.split('Recipient Name: ')[1]}`;
            li.appendChild(span);
            let spanT = document.createElement("span");
            spanT.textContent = `Title:${h4T.textContent.split('Title: ')[1]}`;
            li.appendChild(spanT);

            let div = document.createElement("div");
            div.setAttribute('class', 'btn');
            li.appendChild(div);

            let deleteBtnS = htmlElementsGenerator('button', 'Delete');
            deleteBtnS.setAttribute('type', 'submit');
            deleteBtnS.setAttribute('class', 'delete');
            deleteBtnS.textContent = "Delete";
            div.appendChild(deleteBtnS);
            deleteBtnS.addEventListener('click', delMails);
            e.target.parentElement.parentElement.remove();////////////

            function delMails(e) {
                let ulDeleteList = document.querySelector('.delete-list')///////!!!!!.querySelector('.delete-list'
                let li = document.createElement("li");
                ulDeleteList.appendChild(li);

                let span = document.createElement("span");
                span.textContent = `To: ${h4R.textContent.split('Recipient Name: ')[1]}`;
                li.appendChild(span);
                let spanT = document.createElement("span");
                spanT.textContent = `Title:${h4T.textContent.split('Title: ')[1]}`;
                li.appendChild(spanT);
                e.target.parentElement.parentElement.remove();
            };

        };
        let deleteBtn = htmlElementsGenerator('button', 'Delete');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.textContent = "Delete";
        div.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', deletedMails);
        
        function deletedMails(e) {
            let ulDeleteList = document.querySelector('.delete-list')
            let li = document.createElement("li");
            ulDeleteList.appendChild(li);

            let span = document.createElement("span");
            span.textContent = `To: ${h4R.textContent.split('Recipient Name: ')[1]}`;
            li.appendChild(span);
            let spanT = document.createElement("span");
            spanT.textContent = `Title:${h4T.textContent.split('Title: ')[1]}`;
            li.appendChild(spanT);
            e.target.parentElement.parentElement.remove();
        };
    };
    function clearList(e) {
        e.preventDefault();
        recipientName.value = "";
        title.value = "";
        message.value = "";
    }
    function cleared() {
        recipientName.value = "";
        title.value = "";
        message.value = "";
    };
    function htmlElementsGenerator(tagName, content) {
        let el = document.createElement(tagName);
        if (content) {
            el.textContent = content;
        }
        return el;
    };
}
solve()

//второ решение
// function solve() {
//     document.querySelector('#add').addEventListener('click', addMail);
//     document.querySelector('#reset').addEventListener('click', () => {
//         document.querySelector('#recipientName').value = '';
//         document.querySelector('#title').value = '';
//         document.querySelector('#message').value = '';
//     })

//     function addMail(e) {
//         e.preventDefault();

//         toInputElement = document.querySelector('#recipientName');
//         titleInputElement = document.querySelector('#title');
//         messageInputElement = document.querySelector('#message');

//         // validation
//         if (!toInputElement.value || !titleInputElement.value || !messageInputElement.value) {
//             return;
//         }

//         // generate elements
//         let ulElement = document.querySelector('#list');

//         let liElement = htmlElementsGenerator('li');
//         let h4TitleElement = htmlElementsGenerator('h4', `Title: ${titleInputElement.value}`);
//         let h4ToElement = htmlElementsGenerator('h4', `Recipient Name: ${toInputElement.value}`);
//         let spanElement = htmlElementsGenerator('span', messageInputElement.value);

//         let divElement = htmlElementsGenerator('div');
//         divElement.setAttribute('id', 'list-action');

//         let sendBtn = htmlElementsGenerator('button', 'Send');
//         sendBtn.setAttribute('type', 'submit');
//         sendBtn.setAttribute('id', 'send');
//         sendBtn.addEventListener('click', sentMails);

//         let deleteBtn = htmlElementsGenerator('button', 'Delete');
//         deleteBtn.setAttribute('type', 'submit');
//         deleteBtn.setAttribute('id', 'delete');
//         deleteBtn.addEventListener('click', deleteMail);


//         //append
//         divElement.appendChild(sendBtn);
//         divElement.appendChild(deleteBtn);

//         liElement.appendChild(h4TitleElement);
//         liElement.appendChild(h4ToElement);
//         liElement.appendChild(spanElement);
//         liElement.appendChild(divElement);

//         ulElement.appendChild(liElement);


//         // clearing inputs
//         toInputElement.value = '';
//         titleInputElement.value = '';
//         messageInputElement.value = '';

//         // added send button functionality
//         function sentMails(e) {
//             let ulSendList = document.querySelector('.sent-list');
//             let liSent = htmlElementsGenerator('li');
//             let spanToSent = htmlElementsGenerator('span', `To: ${h4ToElement.textContent.split('Recipient Name: ')[1]}`);
//             let spanTitleSent = htmlElementsGenerator('span', `Title: ${h4TitleElement.textContent.split('Title: ')[1]}`);
//             let divSent = htmlElementsGenerator('div');
//             divSent.setAttribute('class', 'btn');
//             let deleteSent = htmlElementsGenerator('button', 'Delete');
//             deleteSent.setAttribute('type', 'submit');
//             deleteSent.setAttribute('class', 'delete');
//             deleteSent.addEventListener('click', () => {
//                 let ulDeleteList = document.querySelector('.delete-list');
//                 liSent.removeChild(divSent);
//                 ulDeleteList.appendChild(liSent);

//                 // ulSendList.removeChild(liSent)
//             })

//             ulElement.removeChild(liElement)

//             divSent.appendChild(deleteSent);
//             liSent.appendChild(spanToSent);
//             liSent.appendChild(spanTitleSent);
//             liSent.appendChild(divSent);
//             ulSendList.appendChild(liSent);

//         }

//         //
//         function deleteMail(e) {
//             let ulDeleteList = document.querySelector('.delete-list');

//             let liDeleted = htmlElementsGenerator('li');
//             let spanToDeleted = htmlElementsGenerator('span', `To: ${h4ToElement.textContent.split('Recipient Name: ')[1]}`);
//             let spanTitleDeleted = htmlElementsGenerator('span', `Title: ${h4TitleElement.textContent.split('Title: ')[1]}`);

//             liDeleted.appendChild(spanToDeleted);
//             liDeleted.appendChild(spanTitleDeleted);
//             ulDeleteList.appendChild(liDeleted);

//             ulElement.removeChild(liElement);

//         }




//         function htmlElementsGenerator(tagName, content) {
//             let el = document.createElement(tagName);
//             if (content) {
//                 el.textContent = content;
//             }
//             return el;
//         }
//     }
// }
// solve()