class Game {
    constructor(id, title, description, imageUrl, reviews = []) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.reviews = reviews;
    }

    static all() {
        return JSON.parse(localStorage.getItem('games')) || [];
    }

    save() {
        let games = Game.all();
        games.push(this);
        localStorage.setItem('games', JSON.stringify(games));
    }

    static findById(id) {
        const games = Game.all();
        return games.find(game => game.id === id);
    }
}
