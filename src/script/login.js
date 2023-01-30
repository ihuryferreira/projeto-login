let active = 1;
const login = () => {
    sessionStorage.setItem("usuario", active);
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (login === "" || senha === "") {
        alert("Porfavor digite o seu login e senha.");
    } else {
        if (login === "admin" && senha === "123") {
            window.location.assign("mediaAluno.html");
        } else {
            alert("login e senha não confere!");
        }
    }
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
};

document.getElementById("btnEnter").addEventListener("click", login);

function documento(input) {
    const element = document.getElementById(input).value;
    return element;
}
