$(function(){
   button=$('#botão--menu');
   sideBar= $(".sidebar")
    
   button.on('click',function btnOn(){
       sideBar.toggleClass("ação-menu")
       ;
    $(function(){
     sideBarOn = button.hasClass('bx-menu-alt-right');
      if( sideBarOn){
        button.addClass('bx-menu');
        button.removeClass('bx-menu-alt-right');
         }else{
          button.addClass('bx-menu-alt-right');
          button.removeClass('bx-menu');
        }
    })
  })
})



          