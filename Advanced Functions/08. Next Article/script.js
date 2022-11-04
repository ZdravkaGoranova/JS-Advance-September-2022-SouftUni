function getArticleGenerator(articles) {
    let array = Array.from(articles);//ИЛИ let arrayS =JSON.parse(JSON.stringify(articles) за да счупим релацията към оригинала
    let content = document.getElementById("content");

    return () => {
        if (!array.length) {// Или array.length===0//Обяснение:array.length ако е правен масив връща нула.Нулата е false тип.С !false става на true;
            return;
        }
        let currentEArticle = array.shift();// for (let el of array) {}Може и с цикъл, но е по-бавно, по удобно е директно с array.shift();
        content.innerHTML += `<article>${currentEArticle}</article>`;
        //Ако ми кажем    content.innerHTML = `<article>${currentEArticle}</article>` ще презаписваме всеки път ,без да пазим предишния ред от масива
    }
}
