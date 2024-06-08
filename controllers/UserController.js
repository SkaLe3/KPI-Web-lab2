class UserController {
    static updateProfile(email, newUsername, newEmail, newPassword, newDob, newGender) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = users.find(user => user.email === email);
        if (!user) {
            alert('User not found.');
            return;
        }

        user.username = newUsername;
        user.email = newEmail;
        user.password = newPassword; // Remember, storing plaintext passwords is not secure.
        user.dob = newDob;
        user.gender = newGender;

        localStorage.setItem('users', JSON.stringify(users));
        alert('Profile updated successfully!');
    }

    static getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
}
