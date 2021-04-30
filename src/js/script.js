function validarForm() {
  var nome = document.getElementById("username");
  var email = document.getElementById("email");
  var form = document.getElementById("formulario");

  if (nome.value == "") {
    alert("Campo Nome precisa ser preenchido");
    nome.focus();
    return;
  }

  if (email.value == "") {
    alert("Campo E-mail precisa ser preenchido");
    email.focus();
    return;
  }

  alert("Formulário preenchido com os dados abaixo: \nNome: " + nome.value + "\nE-mail: " + email.value);

  form.reset();
}