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
   
   $('.container-log > i').hover(function() {
      icon=$(this).attr('id')
   
      time=setTimeout(()=>{
          $('.ação-menu .active .tooltip-body[data-text=\\' + icon + ']').css(
         {'opacity':'1',
         'left':'85px',
         'transition':'all ease 0.5s'
         })
      } ,3000)
   
      },function(){

      $('.ação-menu .tooltip-body').css(
         {'opacity': '0',
         'left':'50px',
         "transition": "all ease 0.5s"
         }) 

   })
   
         setInterval(()=>{
         
            $('.ação-menu .tooltip-body').css(
               {'opacity': '0',
               'left':'50px',
               "transition": "all ease 0.5s"
               
               }) 
            clearTimeout(time)
         },8000)
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
