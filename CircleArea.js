function circle(argument) {
    let typeArg = typeof argument;
    let result;
    if (typeArg !== "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeArg}.`);
    } else {
        //result = argument * argument * Math.PI;
        result = Math.pow(argument, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
}
circle(5);
circle('name');