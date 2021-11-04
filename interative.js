$(function(){
   button=$('#botão--menu');
   sideBar= $(".sidebar");
   action=$('.ação-menu')
   login=$('.blog')
    
   button.on('click',function(){
       sideBar.toggleClass("ação-menu");
      button.toggleClass('bx-menu bx-menu-alt-right');
      login.toggleClass(' bx-log-out bx-log-in')
  });

})



          