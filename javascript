// 1. Crie a lista (array) de palavras
const palavras = ['Curitiba', 'Cascavel', 'Python', 'Dev', 'Ninja'];

// 2. Mapeie o elemento do checkbox
const chkPalavras = document.querySelector('#chk-palavras');

function geraSenha() {
  let senha = '';
  
  // Seu código atual de geração de caracteres aleatórios vem aqui...

  // 3. Verifique com o `if` se a opção está marcada
  if (chkPalavras.checked) {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    senha = palavraAleatoria + '-' + senha;
  }

  // 4. Exiba a senha no campo correspondente
  document.querySelector('#campo-senha').value = senha;
}