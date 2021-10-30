$(function(){
   button=$('#botão--menu');
   sideBar= $(".sidebar")
    
   button.on('click',function(){
       sideBar.toggleClass("ação-menu");
      button.toggleClass('bx-menu bx-menu-alt-right');  
    
  })
})



          