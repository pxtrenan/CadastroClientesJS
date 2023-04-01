const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const dataNascimentoInput = document.getElementById('data-nascimento');
const sexoInputs = document.querySelectorAll('input[name="sexo"]');
const telefoneInput = document.getElementById('telefone');
const cpfInput = document.getElementById('cpf');
const form = document.querySelector('form');
const enviarBtn = document.querySelector('.enviar-btn');

// Adiciona evento ao campo de data de nascimento
dataNascimentoInput.addEventListener('keyup', (event) => {
  const value = event.target.value;

  if (value.length === 2) {
    event.target.value += '/';
  } else if (value.length === 5) {
    event.target.value += '/';
  }
});

enviarBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const dataNascimento = dataNascimentoInput.value.trim();
  const sexo = Array.from(sexoInputs).find((input) => input.checked)?.value;
  const telefone = telefoneInput.value.trim();
  const cpf = cpfInput.value.trim();

  // Verifica se o nome é válido
  const nomeRegex = /^[a-zA-Z]{3,}$/;
  if (!nomeRegex.test(nome)) {
    alert('Nome inválido! Por favor, insira um nome válido com pelo menos 3 caracteres e apenas letras.');
    return;
  }

  // Verifica se o email é válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Email inválido! Por favor, insira um email válido.');
    return;
  }

  // Verifica se a data de nascimento é válida
  const dataNascimentoRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dataNascimentoRegex.test(dataNascimento)) {
    alert('Data de nascimento inválida! Por favor, insira uma data de nascimento válida no formato DD/MM/AAAA.');
    return;
  }

  // Verifica se o sexo é válido
  if (!sexo) {
    alert('Sexo inválido! Por favor, selecione uma opção.');
    return;
  }

  // Verifica se o telefone é válido
  const telefoneRegex = /^\d{2}\d{8,9}$/;
  if (!telefoneRegex.test(telefone)) {
    alert('Telefone inválido! Por favor, insira um telefone válido com DDD e apenas números.');
    return;
  }

  // Verifica se o CPF é válido
  const cpfRegex = /^\d{11}$/;
  if (!cpfRegex.test(cpf)) {
    alert('CPF inválido! Por favor, insira um CPF válido com apenas números.');
    return;
  }

  // Informações do cliente
  const cliente = {
    nome,
    email,
    dataNascimento,
    sexo,
    telefone,
    cpf,
  };

  
  console.log(cliente);
});