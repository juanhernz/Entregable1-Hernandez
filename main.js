
const usuarios = [
    { usuario: "juan", contraseña: "1234" },
    { usuario: "julieta", contraseña: "5678" },
    { usuario: "lucas", contraseña: "4321" }
];

let estaLogueado = false;
let intentosFallidos = 0;
const MAX_INTENTOS = 3;

function pedirCredenciales() {
    let usuario = prompt("Ingresa tu usuario");
    let contraseña = prompt("Ingresa tu contraseña");
    return { usuario, contraseña };
};

function validarCredenciales(usuario, contraseña) {
    if (usuario === "" || contraseña === "") {
        return "camposVacios";
    }
    const usuarioValido = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);
    return usuarioValido ? "exito" : "error";
};

function mostrarMensaje(resultado, usuario = "") {
    switch (resultado) {
        case "camposVacios":
            alert("⚠️ Debes completar todos los campos.");
            break;
        case "exito":
            alert(`✅ Login exitoso. Bienvenido, ${usuario}`);
            break;
        case "error":
            alert("❌ Usuario o contraseña inválidos.");
            break;
    }
    if (resultado !== "exito") {
        console.log("Intentos fallidos: " + intentosFallidos);
    }
};

function simularLogin() {
    alert("Bienvenido al sistema de inicio de sesión.");
    while (!estaLogueado && intentosFallidos < MAX_INTENTOS) {
        const { usuario, contraseña } = pedirCredenciales();
        const resultado = validarCredenciales(usuario, contraseña);

        if (resultado === "exito") {
            estaLogueado = true;
        } else {
            intentosFallidos++;
        }

        mostrarMensaje(resultado, usuario);
    }

    if (!estaLogueado) {
        alert("🚫 Has superado el número máximo de intentos. Acceso bloqueado.");
    }
}

simularLogin();