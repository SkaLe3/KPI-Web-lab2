class GameController {
    static displayGames() {
        const games = Game.all();
        const gamesContainer = document.getElementById('games-container');
        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.innerHTML = `
                <img src="${game.imageUrl}" alt="${game.title}" style="width:100px; height:100px;">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <button onclick="GameController.showGameDetails('${game.id}')">Details</button>
            `;
            gamesContainer.appendChild(gameElement);
        });
    }

    static showGameDetails(id) {
        const game = Game.findById(id);
        if (!game) {
            alert('Game not found!');
            return;
        }
        const detailsContainer = document.getElementById('game-details');
        detailsContainer.innerHTML = `
            <img src="${game.imageUrl}" alt="${game.title}" style="width:200px; height:200px;">
            <h1>${game.title}</h1>
            <p>${game.description}</p>
            <div>${game.reviews.map(review => `<p>${review}</p>`).join('')}</div>
        `;
    }
}
