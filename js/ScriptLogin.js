
const destino = sessionStorage.getItem('page', window.location.href)
const Title = document.querySelector(".titulo-login")
const btnGoogle = document.getElementById("btn-entrar-google");
const btnBack = document.getElementById('btn-Back')
const btnCreate = document.getElementById('btn-create')
const btnEnter = document.getElementById('btn-entrar');
const btnRecovery = document.getElementById('recovery')
const InputName = document.getElementById('Name')
const InputEmail = document.getElementById('Email')
const InputPassword = document.getElementById('password')
const LabelPassword = document.querySelector('.namePassword')
const btnCreateUser = document.querySelector('.btn-cadastrar')
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

window.addEventListener("hashchange", function(event) {

  if(this.location.hash=='#login') {
    loginFunction()
  }
  else if (this.location.hash=='#registrar-se') 
    {
      registerFunction()
  } 
  else if(this.location.hash=='#password') 
    {
    recoveryPassFunction()
  }

})

btnEnter.addEventListener('click', function () {

  sessionStorage.setItem('data', JSON.stringify({ 'name': nome.value, 'email': email.value, 'picture': imgPhoto.src }))

  if (location.protocol=='https:') {
  
   window.location.href = location.protocol+'//'+ location.host +'/Primeiro-Progeto/'+ destino;
  
}else if (location.protocol=='http:') {

  window.location.href = location.protocol+'//'+ location.host +'/'+ destino;
  
}

})

btnRecovery.addEventListener('click', function () {
  //link.setAttribute('href', '#password') // não precisa esta no html
})


btnCreateUser.addEventListener('click',function () {
  link.setAttribute('href','#registrar-se')
})

btnCancelRecovery.addEventListener('click', function () {
  removeCadastro()
})


function recoveryFunction(){
  containerCadastro.classList.add('recovery')
  btnCreate.classList.remove('btn-cadastrar')
  btnCreate.classList.add('btn-confirmar')
  LabelPassword.innerHTML = 'Confirme o codigo'
  InputEmail.placeholder = 'Digite seu e-mail cadastrado'
  btnRecovery.style.display = 'none'
  InputPassword.placeholder = 'Digite  o codigo'
  Title.innerHTML = 'Esqueceu a sua senha'
  btnEnter.innerHTML = 'Enviar código'
  btnCreate.innerHTML = 'Confirmar código'
  btnCancelRecovery.style.display = 'block'
  btnGoogle.style.display = 'none'
}

function registerFunction(){

  containerCadastro.classList.add('cadastrar');
  btnCreate.classList.add('btn-cadastrar')
  btnCreate.classList.remove('btn-confirmar')

  Title.innerHTML = 'Criar sua conta'
  InputName.focus()
  btnEnter.innerHTML = 'Confirmar' //botao enter
  btnCreate.style.display = 'none' //botao criar conta
  btnCancelRecovery.style.display = 'block'//botao cancelar
  btnRecovery.style.display = 'none'//botao esqueceu a senha
  btnGoogle.style.display = 'flex' //botao Google
  
  link.setAttribute('href', '#registrar-se')
}

function recoveryPassFunction(){
link.setAttribute('href', '#password')

containerCadastro.classList.add('recovery')
btnCreate.classList.remove('btn-cadastrar')
btnCreate.classList.add('btn-confirmar')

btnConfirm()

  LabelPassword.innerHTML = 'Confirme o codigo'
  InputEmail.placeholder = 'Digite seu e-mail cadastrado'
  InputEmail.focus()
  btnRecovery.style.display = 'none'
  InputPassword.placeholder = 'Digite  o codigo'
  Title.innerHTML = 'Esqueceu a sua senha ?'
  btnEnter.innerHTML = 'Enviar código'
  btnCreate.innerHTML = 'Confirmar código'
  btnCancelRecovery.style.display = 'block'
  btnGoogle.style.display = 'none'
}

function loginFunction(){
  containerCadastro.classList.remove('cadastrar')
  containerCadastro.classList.remove('recovery')
  btnCreate.classList.remove('btn-confirmar')
  btnCreate.classList.add('btn-cadastrar')
  Title.innerHTML = 'Fazer login infortec'
  btnEnter.innerHTML = 'Entrar'
  btnCreate.innerHTML = 'Criar Conta';
  btnGoogle.style.display = 'flex';
  btnRecovery.style.display = 'block';
  btnCreate.style.display = 'block'
  LabelPassword.innerHTML = 'Senha';
  InputEmail.placeholder = 'Digite seu Email';
  InputEmail.focus()
  InputPassword.placeholder = "Digite sua Senha";
  btnCancelRecovery.style.display = 'none'
  link.setAttribute('href','#login')
}

function removeCadastro(){
  containerCadastro.classList.remove('cadastrar')
  containerCadastro.classList.remove('recovery')
  btnRecovery.style.display = 'block'
  btnCancelRecovery.style.display = 'none'
  btnCreate.style.display = 'block'
  btnCreate.classList.remove('btn-confirmar')
  btnCreate.classList.add('btn-cadastrar')
  link.setAttribute('href', '#login')
}

function btnConfirm() {

const btnConfirmCode = document.querySelector('.btn-confirmar')
    btnConfirmCode.addEventListener('click',function () {
      
      if (containerCadastro.classList.contains('recovery')) {
        link.setAttribute('href', '#login')
      }
    })
}

if (location.protocol=='https:') {
 
 urlVerified = location.protocol+'//'+ location.host +'/Primeiro-Progeto/'+ destino;
 
}
if (location.protocol=='http:') {

  urlVerified = location.protocol+'//'+ location.host +'/'+ destino;
 
}
console.log(urlVerified);
const authEndpoint = "https://accounts.google.com/o/oauth2/v2/auth";

btnGoogle.addEventListener('click', function () {

  // Caso for ver no Mobile  mude a URL redirect_uri;

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















