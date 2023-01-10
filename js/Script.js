$(function () {

   sideBar = $(".sidebar");
   menuItem=$('.menu--item')
   nameLogo=$('.logo--name')

   
   $('.button-prop').on('click',()=> {
      $('.menu-btn').toggleClass('btn-active');
      $('.nav--menu').toggleClass('mobile-btn')
   });
   
   correntSlider=0;
   totalSlider= $(".slider--item");
   max=totalSlider.length;
   
   
   function showSlider(){
      
      $(totalSlider[correntSlider]).css('opacity','0');

      correntSlider++
      
      $(totalSlider[correntSlider]).css('opacity','.5');

      if(correntSlider >= max){

         correntSlider =0;

      $(totalSlider[correntSlider]).css('opacity','.5');
         
      }
   }
   
   $(document).ready(function(){
      pos=$(this).scrollTop(0);

      if(pos){
         sideBar.removeClass('styleSidebar');
         
      }else{
         sideBar.addClass('styleSidebar');
      }

      setInterval(showSlider,15000)

  });
     

   $(window).scroll(() => {
      position=$(this).scrollTop()

      if (position >0) {
         
         sideBar.removeClass('styleSidebar');
         
      }else{
         sideBar.addClass('styleSidebar');
      }
      
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
   const btnCard=$('.btn-card');
   
   let inpressDown=false;
   let cursorXSpace;

   containerProdutos.on('mousedown',(e)=>{
      inpressDown=true;

      cursorXSpace = e.offsetX-produtosItens[0].offsetLeft;

      containerProdutos.css('cursor',"grabbing");
      produtosItens.css('pointer-events','none')
      btnCard.css('pointer-events','none')
   })

   containerProdutos.on('mouseup',(e)=>{
      inpressDown=false;
      containerProdutos.css('cursor',"grab");
      produtosItens.css('pointer-events','none')
      btnCard.css('pointer-events','visible')
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

      produtosItens.css('pointer-events','none');
      
      if(parseInt(produtosItens.css('left'))>0){

         produtosItens.css('left','0');

      }else if(Produtos_rect.right < container_rect.right){

         produtosItens.css('left',`-${Produtos_rect.width-container_rect.width}px`);

      }
   }
   
})
