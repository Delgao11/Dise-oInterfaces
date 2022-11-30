

var username;

function login() {
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    username = username.toLowerCase();
    username = username.replace(/\s+/g, '')
    console.log(password);
    if (password == "1234" && username == "alumno") {
        window.location.href = "vistaAlumno/seguimientoAlumno.html";
    } else if (password == "1234" && username == "profesor") {
        window.location.href = "vistaProfesor/alumnosAsignados.html";
    } else if(password == "1234" && username == "empresa"){
        window.location.href = "vistaEmpresa/fichaEmpresa.html";
    }else{
        alert("Usuario o contraseña no válido.");
    }
}

var nombrePerfil = document.getElementById("perfil");
console.log(username2);
switch (username2) {
    case "profesor":
        nombrePerfil.innerHTML = "Profesor";
        break;
    default:
        nombrePerfil.innerHTML = username;
}


