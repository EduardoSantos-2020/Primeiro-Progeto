$(function(){
button=$('#botão--menu');
sideBar= $(".sidebar");
action=$('.ação-menu');

   button.on('click',function(){
      sideBar.toggleClass("ação-menu");
      button.toggleClass('bx-menu bx-x');
      
      })
  })



          