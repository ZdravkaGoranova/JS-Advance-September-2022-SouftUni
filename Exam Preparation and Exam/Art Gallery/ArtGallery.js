class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        let articleLower = articleModel.toLowerCase();
        if (!this.possibleArticles[articleLower]) {
            throw new Error("This article model is not included in this gallery!");
        }
        if (this.listOfArticles.includes(articleName) && this.possibleArticles[articleLower]) {
            this.possibleArticles[articleLower] += quantity;
        }
        this.listOfArticles.push({ articleLower, articleName, quantity })
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    };
    inviteGuest(guestName, personality) {
        let guest = this.guests.find(x => x.guestName === guestName);
        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        }
        this.guests.push({ guestName, points: 0, purchaseArticle: 0 });
        let find = this.guests.find(x => x.guestName === guestName);
        if (personality === "Vip") {
            find.points = 500;
        } else if (personality === "Middle") {
            find.points = 250;
        } else {
            find.points = 50;
        }
        return `You have successfully invited ${guestName}!`;
    };
    buyArticle(articleModel, articleName, guestName) {
        let findArticles = this.listOfArticles.find(x => x.articleName === articleName);
        let artL = findArticles.articleLower;
        let findModelPoints = this.possibleArticles[articleModel];
        let findGuest = this.guests.find(x => x.guestName === guestName);
//findModelPoints!==findArticles.articleLower)
        if (!findArticles || (findArticles.articleLower!== articleModel) ) {
            throw new Error(`This article is not found.`);
        }
        if (findArticles.quantity === 0) {
            return `The ${articleName} is not available.`
        }
        if (!findGuest) {
            return `This guest is not invited.`;
        }

        if (findGuest.points < findModelPoints) {
            return "You need to more points to purchase the article.";
        } else {
            findGuest.points = findGuest.points - findModelPoints;
            findArticles.quantity--;
            findGuest.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${findModelPoints} points.`
        }
    };
    showGalleryInfo(criteria) {


        
    };
}
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
