
function printDeckOfCards(cards) {
    let sequence = [];
    let array = cards;

    array.forEach(card => {//for of цикъл
        let face = card.slice(0, -1);//брой от ляво на дясно -1 и връща останалите символи
        let suit = card.slice(-1);//с -1 взима последния символ

        try {//обграждаме кода ,които може да хвърли exception
            let catd = creatCard(face, suit);
            sequence.push(catd);//ако хвърли грешка спираме изпълнението на push и спираме да отпечатваме
        }
        catch (err) {
            sequence = ['Invalid card: ' + face + suit];// sequence = ['Invalid card: ' + card ];
            //трием всикчи елементи и пишем 'Invalid card: ' + face + suit за да заменим масива и да отпечатаме съобщението в     console.log(sequence.join(" "));
        }
    });

    console.log(sequence.join(" "));

    function creatCard(face, suit) {
        const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const validSuit = ["S", "H", "D", "C"];

        if (validFaces.indexOf(face.toString()) === -1) {//слагаме .toString() за да уеднаквим всики стойности  тези на масива с получените.Може и с includes метода
            throw new Error('Error');
        }
        if (validSuit.indexOf(suit) === -1) {//   if (validSuit.indexOf(suit.toString()) === -1) {
            throw new Error('Error');
        }
        switch (suit) {// може и с обект 
            case "S": suit = "\u2660"; break;
            case "H": suit = "\u2665"; break;
            case "D": suit = "\u2666"; break;
            case "C": suit = "\u2663"; break;
        }
        let result = {
            face: face,
            suit: suit,// ако е обект  suit: suit[suit],
            toString() {
                return this.face + this.suit;
            }
        }
        return result;
    }
    return;
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
console.log("-------------------");
printDeckOfCards(['5S', '3D', 'QD', '1C']);