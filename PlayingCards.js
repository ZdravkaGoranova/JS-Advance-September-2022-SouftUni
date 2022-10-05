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
   let result= {
        face: face,
        suit: suit,// ако е обект  suit: suit[suit],
        toString() {
            return this.face + this.suit;
        }
    }
    return result;
}
console.log(creatCard('A', 'S').toString());//слагаме .toString() за да уеднаквим всики стойности с тези на масива
console.log(creatCard('1', 'C').toString());