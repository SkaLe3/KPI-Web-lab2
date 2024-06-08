class Router {
    constructor(routes) {
        this.routes = routes;
        this.init();
    }

    init() {
        window.addEventListener('hashchange', this.hashChanged.bind(this));
        this.hashChanged();
    }

    async hashChanged(ev) {
        if (window.location.hash.length > 0) {
            const pageName = window.location.hash.substr(1);
            this.loadPage(pageName);
        } else if (this.routes['#default']) {
            this.loadPage(this.routes['#default']);
        }
    }

    async loadPage(name) {
        const page = this.routes[name] || this.routes['#default'];
        fetch(page)
            .then(response => response.text())
            .then(html => {
                document.getElementById('app').innerHTML = html;
            })
            .catch(err => {
                document.getElementById('app').innerHTML = '<p>Error loading the page.</p>';
            });
    }
}

const routes = {
    '#default': 'index.html',
    '#home': 'index.html',
    '#login': 'login.html',
    '#register': 'register.html',
    '#profile': 'profile.html',
    '#about': 'about.html',
    '#browse': 'browse.html',
    '#game': 'game.html'
};

document.addEventListener('DOMContentLoaded', () => new Router(routes));
