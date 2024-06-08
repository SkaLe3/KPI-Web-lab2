class AuthController {
    static register(username, email, password, dob, gender) {
        if (!username || !email || !password || !dob || !gender) {
            alert('Please fill in all fields.');
            return;
        }
        if (User.findByEmail(email)) {
            alert('Email already registered.');
            return;
        }
        const newUser = new User(username, email, password, dob, gender);
        newUser.save();
        alert('Registration successful!');
        window.location.href = 'login.html'; // Redirect to login page after registration
    }

    static login(email, password) {
        const user = User.findByEmail(email);
        if (!user) {
            alert('User not found.');
            return;
        }
        if (user.password !== password) {
            alert('Incorrect password.');
            return;
        }
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to home page after login
    }
}
