function RotateArray(array, number) {
    let res = [];
    let coppy = array.slice();

    while (number > 0) {
        let elementToMove = coppy.pop();
        coppy.unshift(elementToMove)
        number--;
    }
    console.log(coppy.join(" "));
}
RotateArray(['1',
    '2',
    '3',
    '4'],
    2
);
RotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
);