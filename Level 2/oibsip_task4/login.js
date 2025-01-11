// Check if the user is already logged in
if (localStorage.getItem("loggedIn") === "true") {
    showSecuredPage();
} else {
    showLogin();
}

// Show the login form
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("securedPage").style.display = "none";
    document.getElementById("loginError").innerText = '';
}

// Show the register form
function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("securedPage").style.display = "none";
    document.getElementById("registerError").innerText = '';
}

// Show the secured page after successful login
function showSecuredPage() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("securedPage").style.display = "block";
}

// Register a new user
function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerConfirmPassword").value;
    const errorMessage = document.getElementById("registerError");

    if (!username || !password || !confirmPassword) {
        errorMessage.innerText = "Please fill in all fields.";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.innerText = "Passwords do not match!";
        return;
    }

    // Save user to localStorage
    const user = { username, password };
    localStorage.setItem(username, JSON.stringify(user));

    // Success message and redirect to login
    alert("Registration successful! You can now login.");
    showLogin();
}

// Login the user
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const errorMessage = document.getElementById("loginError");

    if (!username || !password) {
        errorMessage.innerText = "Please fill in both fields.";
        return;
    }

    const storedUser = localStorage.getItem(username);

    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            localStorage.setItem("loggedIn", "true");
            showSecuredPage();
        } else {
            errorMessage.innerText = "Incorrect password!";
        }
    } else {
        errorMessage.innerText = "User does not exist!";
    }
}

// Logout the user
function logout() {
    localStorage.setItem("loggedIn", "false");
    alert("You have logged out.");
    showLogin();
}
