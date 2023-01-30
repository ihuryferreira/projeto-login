const ativo = sessionStorage.getItem("usuario");

if (ativo == 1) {
    alert("Seja Bem vindo ao app.");
    try {
        const somaCalc = (nota1, nota2, nota3) =>
            `${parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)}`;
        const formElement = (ev) => {
            ev.preventDefault();
            const valor1 = document.getElementById("input1").value;
            const valor2 = document.getElementById("input2").value;
            const valor3 = document.getElementById("input3").value;
            const soma = somaCalc(valor1, valor2, valor3);
            const result = soma / 3;

            if (result >= 6) {
                alert(`O Aluno foi Aprovado com a media de ${result}.`);
            } else {
                alert(`O Aluno foi Reprovado com a media de ${result}.`);
            }
            document.getElementById("input1").value = "";
            document.getElementById("input2").value = "";
            document.getElementById("input3").value = "";
        };

        document.getElementById("form").addEventListener("submit", formElement);
    } catch (error) {
        console.log(error);
    }
} else if (ativo == 0 || ativo == null) {
    location.assign("form.html");
}

document.getElementById("voltar").addEventListener("click", function () {
    sessionStorage.clear();
    sessionStorage.removeItem("usuario");
    alert("Usuário deslogado.");
    window.location.assign("index.html");
});
