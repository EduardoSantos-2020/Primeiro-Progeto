$(function(){
$('.button-prop').on('click',clicked);
$('.busca-btn ').on('click',clicked)
btnchave=$('.menu-btn') ;
sideBar= $(".sidebar");
setas=$('.slider__control > div > i')
sliderWidth=$('.slider-type').innerWidth();
totalSlider=$(".slider--item").length;

correntSlider=0

function clicked() {
   sideBar.toggleClass("ação-menu");
   btnchave.toggleClass('btn-active');
}

$(document).ready(function() {

$('.container-log').each((number,index) => {

   const NumberId =index.firstChild.nextSibling.id=number
   const Icons=index.firstChild.nextSibling;
   const span =document.createElement('span');
   const Names=index.children[1].innerText
   span.classList.add('tooltip-body');
   span.innerText=Names
  
   $(span).attr('data-key',NumberId)
   
   const Item=index.append(span)
   
   $(Icons).hover((event)=>{
      const Fort=event.target.id

      if(Fort==Item){
            $('.tooltip-body').css(
              {
               "opacity":"1",
               "left":"8em",

               }
               )
      }



   })

});

})


    $(".slider_width").width(`${sliderWidth*totalSlider}px`);

    $(".slider--controls").width(`${sliderWidth}px`);

    $(".slider--controls").height(`${ $(".slider-type").innerHeight()}px`);



   setas.each(function(){
      $(this).on('click',function(){
         ids=$(this).attr('id');

      if(ids==="contleft"){

         correntSlider--
         if(correntSlider < 0){
            correntSlider=totalSlider-1
            }
            updateMargin()
            }else{
               correntSlider++
               if(correntSlider > (totalSlider-1)){
                  correntSlider=0 ;
                  }
               updateMargin()
               }
         })
      })
      function updateMargin(){
         sliderWidth=$(".slider--item").innerWidth();

         let newMargin=(correntSlider * sliderWidth);

         $(".slider_width").css("margin-left",`-${newMargin}px`)
      }

      setInterval(()=>{
         correntSlider++
         if(correntSlider > (totalSlider-1)){
            correntSlider=0 ;
            }
         updateMargin()
      },5000)

})

$(window).scroll(() =>{

   position=$(this).scrollTop()

   sectionHeight=$('section > div').height()

   $('section').each(function() {
      target=$(this).offset().top ;
         id=$(this).attr('id');
         if(position >= (target && target-sectionHeight/2)){
               $('.navegação--menu > ul > a').removeClass('active');
               $('.navegação--menu > ul > a[href=\\#' + id + ']').addClass('active');
         }
      });
   });
