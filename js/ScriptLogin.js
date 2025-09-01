
const destino = sessionStorage.getItem('page', window.location.href)
const Title = document.querySelector(".titulo-login")
const btnGoogle = document.getElementById("btn-entrar-google");
const btnBack = document.getElementById('btn-Back')
const btnCreate = document.getElementById('btn-create')
const btnEnter = document.getElementById('btn-entrar');
const btnRecovery = document.getElementById('recovery')
const InputEmail = document.getElementById('Email')
const InputPassword = document.getElementById('password')
const LabelPassword = document.querySelector('.namePassword')
const btnCancelRecovery = document.getElementById('btn-cancel-recovery')
const containerCadastro = document.querySelector('.containerMenu');
const link = document.querySelector('#link')
const linkSenha=document.querySelector('.linkSenha')
const fileImg = document.querySelector('#upFile')
const nome = document.getElementById('Name')
const email = document.getElementById('Email')
const imgPhoto = document.getElementById('Photo')

if (!containerCadastro.classList.contains('recovery')||!containerCadastro.classList.contains('cadastrar')&& window.location.reload) {
  location.hash='login';
}  

fileImg.addEventListener('change', (item) => {

  let file = item.target.files[0];

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onload = function (e) {
      imgPhoto.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
})

btnEnter.addEventListener('click', function () {

  sessionStorage.setItem('data', JSON.stringify({ 'name': nome.value, 'email': email.value, 'picture': imgPhoto.src }))

  window.location.href = `http://localhost:5500/${destino}`
})



btnRecovery.addEventListener('click', function () {
  containerCadastro.classList.add('recovery')
  LabelPassword.innerHTML = 'Confirme o codigo'
  InputEmail.placeholder = 'Digite seu e-mail cadastrado'
  btnRecovery.style.display = 'none'
  InputPassword.placeholder = 'Digite  o codigo'
  Title.innerHTML = 'Esqueceu a sua senha'
  btnEnter.innerHTML = 'Enviar código'
  btnCreate.innerHTML = 'Confirmar código'
  btnCancelRecovery.style.display = 'block'
  btnGoogle.style.display = 'none'
  link.setAttribute('href', '#password')

})

btnCreate.addEventListener('click', (event) => {
  containerCadastro.classList.toggle('cadastrar');


  if (containerCadastro.classList.contains('recovery')) {
  containerCadastro.classList.remove('recovery')
  containerCadastro.classList.remove('cadastrar')
  Title.innerHTML = 'Fazer login infortec'
  btnEnter.innerHTML = 'Entrar'
  btnCreate.innerHTML = 'Criar Conta';

  btnGoogle.style.display = 'flex';
  btnRecovery.style.display = 'block';

  LabelPassword.innerHTML = 'Senha';
  InputEmail.placeholder = 'Digite seu Email';
  InputPassword.placeholder = "Digite sua Senha";
  btnCancelRecovery.style.display = 'none'
  link.setAttribute('href', '#login')

  }

  if (containerCadastro.classList.contains('cadastrar')) {
    Title.innerHTML = 'Criar sua conta'
    btnEnter.innerHTML = 'Confirmar' //botao enter
    btnCreate.style.display = 'none' //botao criar conta
    btnCancelRecovery.style.display = 'block'//botao cancelar
    btnRecovery.style.display = 'none'//botao esqueceu a senha
    btnGoogle.style.display = 'flex' //botao Google

    link.setAttribute('href', '#registrar-se')
  }
})

btnCancelRecovery.addEventListener('click', function () {
  containerCadastro.classList.remove('recovery')
  containerCadastro.classList.remove('cadastrar')
  Title.innerHTML = 'Fazer login infortec'
  btnEnter.innerHTML = 'Entrar'
  btnCreate.innerHTML = 'Criar Conta';

  btnGoogle.style.display = 'flex';
  btnRecovery.style.display = 'block';

  LabelPassword.innerHTML = 'Senha';
  InputEmail.placeholder = 'Digite seu Email';
  InputPassword.placeholder = "Digite sua Senha";
  link.setAttribute('href', '#login')


  if (!containerCadastro.classList.contains('cadastrar')) {
    btnRecovery.style.display = 'block'
    btnCancelRecovery.style.display = 'none'
    btnCreate.style.display = 'block'

    link.setAttribute('href', '#login')
  }
})

const authEndpoint = "https://accounts.google.com/o/oauth2/v2/auth";

btnGoogle.addEventListener('click', function () {

  // Caso for ver no Mobile  mude a URL redirect_uri;


  const urlVerified = `http://localhost:5500/${destino}`;
  //const urlVerified = `https://d25a-138-118-58-221.ngrok-free.app/${destino}`;

  //const state = encodeURIComponent(urlVerified);

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=112123801593-t7p4obmhr3qpgsss44qsrlioqsht149q.apps.googleusercontent.com&` +
    `redirect_uri=${urlVerified}&` +
    `response_type=token&` +
    `scope=openid%20email%20profile&` +
    `prompt=consent&`;
  //`state=?`;

  window.location.href = authUrl;
  //window.location.hash = state;
})















