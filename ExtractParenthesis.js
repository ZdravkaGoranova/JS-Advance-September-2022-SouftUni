function extract(elementId) {
    let para = document.getElementById(elementId).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(para);
    //второ решение
    // let final=para.matchAll(pattern);
    //for(let text of final){
    //result.push(text[1]);
    //}
    // return result.join('; ');


    while (match) {
        result.push(match[1]);
        match = pattern.exec(para);
    }
    console.log(result.join('; '));
    return result.join('; ');

}
extract("content") 