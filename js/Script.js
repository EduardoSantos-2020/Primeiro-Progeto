$(function () {

   sideBar = $(".sidebar");
   sliderWidth = $('.slider-type').innerWidth();
   totalSlider = $(".slider--item").length;

   $('.button-prop').on('click',()=> {
      $('.menu-btn').toggleClass('btn-active');
      $('.nav--menu').toggleClass('mobile-btn')
    });

   correntSlider =0;

   $(".slider_width").width(`${sliderWidth * totalSlider}px`);

   $(".slider--controls").width(`${sliderWidth}px`);

   $(".slider--controls").height(`${$(".slider-type").innerHeight()}px`);



   setInterval(function () {
      correntSlider++
      if (correntSlider > (totalSlider - 1)) {
         correntSlider = 0;
      }
      updateMargin()
   }, 10000)

   function updateMargin() {
      sliderWidth = $(".slider--item").innerWidth();
      let newMargin = (correntSlider * sliderWidth);
      $(".slider_width").css({ "margin-left": `-${newMargin}px`, 'transition': 'all ease 2.5s' })
   }
   
   $(window).scroll(() => {
    
      position=$(this).scrollTop()

      sectionHeight = $('section').height()

      $('section').each(function(){

         target = $(this).offset().top;
         id = $(this).attr('id');

         if (position > target - sectionHeight) {
            $('.navegação--menu > ul > a').removeClass('active');
            $('.navegação--menu > ul > a[href=\\#' + id + ']').addClass('active');
         }
      });
      
   })
   
   const containerProdutos=$(".conteudo--produtos");
   const produtosItens=$('.produtos--items');
   
   let inpressDown=false;
   let cursorXSpace;

   containerProdutos.on('mousedown',(e)=>{
      inpressDown=true;

      cursorXSpace = e.offsetX-produtosItens[0].offsetLeft;

      containerProdutos.css('cursor',"grabbing");
      produtosItens.css('pointer-events','none')
   })

   containerProdutos.on('mouseup',(e)=>{
      inpressDown=false;
      containerProdutos.css('cursor',"grab");
      produtosItens.css('pointer-events','visible')
   })


   containerProdutos.on('mousemove',(e)=>{
      if(!inpressDown) return;

      e.preventDefault()
      produtosItens.css({'left':`${e.offsetX-cursorXSpace}px`});
      bondCards()
   })

   function bondCards(){

      let container_rect=containerProdutos[0].getBoundingClientRect();
      let Produtos_rect=produtosItens[0].getBoundingClientRect();


      if(parseInt(produtosItens.css('left'))>0){

         produtosItens.css('left','0');

      }else if(Produtos_rect.right < container_rect.right){

         produtosItens.css('left',`-${Produtos_rect.width-container_rect.width}px`);

      }
   }
   
})
