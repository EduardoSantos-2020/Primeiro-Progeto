$(function(){
   button=$('#botão--menu');
   sideBar= $(".sidebar")
    
   button.on('click',function btnOn(){
       sideBar.toggleClass("ação-menu")
       ;
    $(function(){
     sideBarOn = button.hasClass('bx-menu-alt-right');

      button.toggleClass('bx-menu bx-menu-alt-right')  
    })
  })
})



          