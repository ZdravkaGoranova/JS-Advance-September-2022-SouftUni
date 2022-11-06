class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error("Not enough space in the collection.");
        } else {
            let currentBook = { bookName, bookAuthor, payed: false }
            this.books.push(currentBook);

            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    };
    payBook(bookName) {
        let currentBook = this.books.find(book => book.bookName === bookName);
        if (!currentBook) {
            throw new Error(`${bookName} is not in the collection.`);
        } if (currentBook.payed) {
            throw new Error(`${currentBook.bookName} has already been paid.`);
        } else {
            currentBook.payed = true;
            return `${currentBook.bookName} has been successfully paid.`;
        }
    };
    removeBook(bookName) {
        let currentBook = this.books.find(book => book.bookName === bookName);
        if (!currentBook) {
            throw new Error(`The book, you're looking for, is not found.`);
        } if (!currentBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        } else {
            let index = this.books.indexOf(currentBook)
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`
        }
    };
    getStatistics(bookAuthor) {

        if (!bookAuthor) {
            let result =  [];
            let emptySlots = this.capacity - this.books.length;
            result.push(`The book collection has ${emptySlots} empty spots left.`);
            let sortedBook = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            sortedBook.map((b) => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`);
            });
            return result.join('\n').trim();
        } else {
            let findBook = this.books.find(b => b.bookAuthor == bookAuthor);
            if (findBook) {
                let paid = findBook.payed ? `Has Paid` : `Not Paid`;
                return `${findBook.bookName} == ${findBook.bookAuthor} - ${paid}.`;
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
        }
    };
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
