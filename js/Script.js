$(function () {
   $('.button-prop').on('click', clicked);
    $('.busca-btn ').on('click',clicked)
   btnchave = $('.menu-btn');
   sideBar = $(".sidebar");
   setas = $('.slider__control > div > i')
   sliderWidth = $('.slider-type').innerWidth();
   totalSlider = $(".slider--item").length;

   correntSlider = 0

   function clicked() {
      sideBar.toggleClass("ação-menu");
      btnchave.toggleClass('btn-active');
   }

   $(document).ready(function () {

      $('.container-log').each((number, index) => {

         const NumberId = index.firstChild.nextSibling.id = number;
         const Icons = index.firstChild.nextSibling;
         const span = document.createElement('span');
         const Names = index.children[1].innerText;
         span.classList.add('tooltip-body');
         span.innerText = Names;
         $(span).attr('data-key', NumberId)

         const Item = index.append(span)

         $(Icons).hover((event) => {
            const Fort = event.target.id

            if (sideBar.hasClass('ação-menu')) {
               $(`.container-log > .tooltip-body[data-key=${Fort}]`).css({
                  "opacity": "1",
                  "left": "12em",
                  'z-index':'1',
                  "transition": " all 1s ease"
               })
            }

         }, function () {
            $(`.container-log > .tooltip-body`).css({
               "opacity": "0",
               "left": "3em",
               "transition": " all 1s ease"
            })
         })
      })
   })


   $(".slider_width").width(`${sliderWidth * totalSlider}px`);

   $(".slider--controls").width(`${sliderWidth}px`);

   $(".slider--controls").height(`${$(".slider-type").innerHeight()}px`);

   $('.slider__control').hover((event) => {
   
      const color=event.target.className

     if(color=='left'){
      
        $('.left').css({'background-image':'linear-gradient(to right,#000,#000,transparent','transition':'all ease 3s'})
         $('.left > #contleft').css({'color':'#a8a3a3'});

         }else if(color=='right'){
               
               $('.right').css({'background-image':'linear-gradient(to left,#000,#000,transparent','transition':'all ease 3s'})
               $('.right > #contright').css({'color':'#a8a3a3'});
               
            }
      
   },function(){
      
      $('.left').css({'background':'none'})
      $('.right').css({'background':'none'})
      $('.left > #contleft').css({'color':'#fff'})
      $('.right > #contright').css({'color':'#fff'})
   })

   setas.each(function () {
      setInterval(function () {
         correntSlider++

         if (correntSlider > (totalSlider - 1)) {
            correntSlider = 0;
         }

         updateMargin()
      }, 3000)

      $(this).on('click', function () {

         const control = this.id

         if (control == "contleft") {

            correntSlider--

            if (correntSlider < 0) {
               correntSlider = totalSlider - 1
            }

            updateMargin()
         }
         if (control == "contright") {

            correntSlider++

            if (correntSlider > (totalSlider - 1)) {
               correntSlider = 0;
            }

            updateMargin()
         }

      })

      function updateMargin() {
         sliderWidth = $(".slider--item").innerWidth();

         let newMargin = (correntSlider * sliderWidth);

         $(".slider_width").css("margin-left", `-${newMargin}px`)
      }

   })


   $(window).scroll(() => {

      position = $(this).scrollTop()

      sectionHeight = $('section > div').offset().top

      $('section').each(function () {
         target = $(this).offset().top;
         id = $(this).attr('id');
         if (position >= (target && target - sectionHeight / 1)) {
            $('.navegação--menu > ul > a').removeClass('active');
            $('.navegação--menu > ul > a[href=\\#' + id + ']').addClass('active');
         }
      });
   })
})
