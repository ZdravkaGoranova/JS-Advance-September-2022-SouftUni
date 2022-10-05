function solve(area, vol, input) {
    let data = JSON.parse(input)
    // console.log(data);
    let result = [];

    // второ решение вместо  for (let entry of data) {
    //return JSON
    //.parse(data)
    //.map(entry=>{
    //  return {
    //      area:area.call(entry),
    //      volume:VideoColorSpace.call(entry)
    //  }
    // });

    for (let entry of data) {
        // console.log(entry);
        let calculateArea = area.call(entry);
        let calculateVolume = vol.call(entry);

        result.push({
            area: calculateArea,
            volume: calculateVolume
        });
    }
    return result;
}

let area = function area() {//слагаме ги преди извикването на функцията solve(area, vol, `[
    return Math.abs(this.x * this.y);
};
let vol = function vol() {//слагаме ги преди извикването на функцията solve(area, vol, `[
    return Math.abs(this.x * this.y * this.z);
};
let result = solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);
console.log(JSON.stringify(result))