document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const toggleRegister = document.getElementById("toggleRegister");
    const toggleLogin = document.getElementById("toggleLogin");
    const content = document.getElementById("content");
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");

    // Recuperar usuarios del localStorage al cargar la página
    const users = JSON.parse(localStorage.getItem("users")) || [];

    toggleRegister.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    toggleLogin.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    signInForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const enteredUsername = document.getElementById("username").value;
        const enteredPassword = document.getElementById("password").value;

        // Verificar las credenciales en la simulación de base de datos (localStorage)
        const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);

        if (user) {
            // Redirigir a la página después de iniciar sesión exitosamente
            window.location.href = "menu.html";
        } else {
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }

        return false; // Evita que el formulario se envíe automáticamente
    });

    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;

        // Verificar si el usuario ya existe
        if (users.some(u => u.username === newUsername)) {
            alert("El usuario ya existe. Por favor, elige otro nombre de usuario.");
        } else {
            // Agregar el nuevo usuario a la simulación de base de datos (localStorage)
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Usuario registrado exitosamente. Ahora puedes iniciar sesión.");
            // Cambiar a la pantalla de inicio de sesión después del registro
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        }

        return false; // Evita que el formulario se envíe automáticamente
    });
});