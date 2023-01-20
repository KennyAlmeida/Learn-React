let formulario = document.getElementById('form-contato');

formulario.addEventListener('submit', function(evento) {
    let name = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('comentario').value;
    
    if (email.includes("@coderhouse.com.br")) {
        alert(`Olá ${name}, seu email foi enviado com sucesso!`);
    } else {
        alert(`Olá ${name}, desculpe, mas você precisa ser um aluno da CoderHouse para utilizar este formulário.`);
    }

});