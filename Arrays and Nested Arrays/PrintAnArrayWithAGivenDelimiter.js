function printAnArrayWithAGivenDelimiter(array, string) {
    let text = '';
    array.forEach((element, i) => {
        if (i === array.length - 1) {
            text += element;
        } else {
            text += element + string;
        }
    });
    console.log(text);
}
printAnArrayWithAGivenDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);
console.log("-----------")
printAnArrayWithAGivenDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
);