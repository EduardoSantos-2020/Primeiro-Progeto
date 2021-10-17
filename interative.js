$(function(){
   button=$('#botão--menu');
   sideBar= $(".sidebar")
    
   button.on('click',function btnOn(){
       sideBar.toggleClass("ação-menu")
       ;
    $(function(){
     sideBarOn = $("#botão--menu").hasClass('bx-menu-alt-right');
      if( sideBarOn){
        $("#botão--menu").addClass('bx-menu');
        $("#botão--menu").removeClass('bx-menu-alt-right');
         }else{
          $("#botão--menu").addClass('bx-menu-alt-right');
          $("#botão--menu").removeClass('bx-menu');
        }
    })
  })
})



          