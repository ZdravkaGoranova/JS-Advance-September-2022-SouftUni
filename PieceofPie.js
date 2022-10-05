function pieceofPie(array, targetFlavors1, targetFlavors2) {
    let start = array.indexOf(targetFlavors1);
    let end = array.indexOf(targetFlavors2);
    let newArray = array.slice(start, end +1);
    //console.log(newArray);
    return newArray;
}
pieceofPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
console.log("-----");
pieceofPie(['Apple Crisp',
'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
'Pot Pie',
    'Smoked Fish Pie'
);