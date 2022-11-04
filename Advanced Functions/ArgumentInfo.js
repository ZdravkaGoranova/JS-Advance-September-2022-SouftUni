function solve(...params) {
    //console.log(params);
    let result = {};
    params.forEach(element => {
        let type = typeof (element)
        console.log(`${type}: ${element}`);
        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }
        result[type] = result[type] + 1;

    });
    //console.log(result);
    //let numbers = [];
    let buff="";
    for (let [k, v] of Object.entries(result)) {
       // console.log(`${k} = ${v}`);
       // numbers.push({[k]:v});
        buff +=`${k} = ${v}\n`
    }
console.log(buff)
}

solve('cat', 42, function () { console.log('Hello world!'); });