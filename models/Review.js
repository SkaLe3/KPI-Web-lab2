class Review {
    constructor(userId, gameId, content) {
        this.userId = userId;
        this.gameId = gameId;
        this.content = content;
    }

    save() {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(this);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    static findByGameId(gameId) {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        return reviews.filter(review => review.gameId === gameId);
    }
}
