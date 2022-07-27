function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
    return true;
};

// two different ways to show a solution

function isValidPassword(password, username) {
    if (password.includes(' ') && (password.indexOf(username)) && (password.length < 8)) {
        
        return false
    }
    return true;
}
