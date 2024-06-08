class User {
    constructor(username, email, password, dob, gender) {
        this.username = username;
        this.email = email;
        this.password = password; // In a real application, never store plaintext passwords!
        this.dob = dob;
        this.gender = gender;
    }

    save() {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(this);
        localStorage.setItem('users', JSON.stringify(users));
    }

    static findByEmail(email) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        return users.find(user => user.email === email);
    }
}
