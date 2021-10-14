$(function(){
    $('#botão--menu').on('click',function(){
        $(".sidebar").toggleClass("ação-menu");
        $(".menu-botao").toggleClass("onseta");
        
    });
    $('.menu-botao').on('click',function(){
        $(".menu-botao").remove(".item--cat--js");
    })


    

    $("#boton-1").on('click',function(){
        $("#1").toggleClass("lista")
    });
})



                        