document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("botaoMensagem");
  const mensagem = document.getElementById("mensagem");

  botao.addEventListener("click", function () {
    mensagem.textContent = "“Se você fizer o que sempre fez, vai conseguir o que sempre conseguiu - Tony Robbins”";
  });
});