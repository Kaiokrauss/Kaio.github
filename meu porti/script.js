// Exemplo de interatividade: Validação simples do formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso!');
        // Aqui você pode adicionar o código para enviar o formulário
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});