class ReviewController {
    static addReview(reviewContent) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        let user = JSON.parse(localStorage.getItem('currentUser')) || [];
        reviews.push({
            content: reviewContent,
            user: user.username,
            date: new Date().toLocaleDateString(),
            gameId: 'bf2042' // This should match the game
        });
        localStorage.setItem('reviews', JSON.stringify(reviews));
        alert('Review added successfully!');
        // redirect to game page
        window.location.href = 'game.html';
    }

    static getReviewsForGame(gameId) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        return reviews;
    }
}
