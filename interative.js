$(function(){
button=$('#botão--menu');
sideBar= $(".sidebar");
action=$('.ação-menu');
sliderWidth=$('.slider-type').innerWidth();
totalSlider=$(".slider--item").length;

correntSlider=0


   button.on('click',function(){
      sideBar.toggleClass("ação-menu");
      button.toggleClass('bx-menu bx-x');
      })


    $(".slider_width").width(`${sliderWidth*totalSlider}px`);

    $(".slider--controls").width(`${sliderWidth}px`);

    $(".slider--controls").height(`${ $(".slider-type").innerHeight()}px`);

   goPrev=function(){

       correntSlider--

       if(correntSlider < 0){
          correntSlider=totalSlider-1
       }

       updateMargin();
    };

     goNext=function(){

       correntSlider++

       if(correntSlider > (totalSlider-1)){
          correntSlider=0
       }
       updateMargin()
      };

    function updateMargin(){

       sliderWidth=$(".slider--item").innerWidth();

      let newMargin=(correntSlider * sliderWidth);

       $(".slider_width").css("margin-left",`-${newMargin}px`)

      }

     setInterval(goNext,5000);


   })
  

$(window).scroll(() =>{ 
   position=$(this).scrollTop()
   
   sectionHeight=$('section > div').height()

   $('section').each(function() {
      target=$(this).offset().top ;
         id=$(this).attr('id');

         if(position >= (target && target-sectionHeight/2)){
               $('.navegação--menu > ul > div > a').removeClass('active');
               $('.navegação--menu > ul > div > a[href=\\#' + id + ']').addClass('active');    
         }
      });
   });
