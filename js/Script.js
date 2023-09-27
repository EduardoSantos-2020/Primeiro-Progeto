$(function () {
   sideBar = $(".sidebar");
   menuItem = $('.menu--secao');
   nameLogo = $('.logo--name');
   correntSlider = 0;
console.log(sideBar);
   $('.button-prop').on('click',mobileEvent)

   function mobileEvent(){
      $('.menu-btn').toggleClass('btn-active');
      $('.nav--menu').toggleClass('mobile-btn');

      !$('.nav--menu').hasClass('mobile-btn')&& $('body').width()<992?$('body').css('overflow','hidden'):$('body').css('overflow','visible');    
   }



  
   function showSlider() {
      totalSlider = $(".slider--item");
      
      max = totalSlider.length;

      $(totalSlider[correntSlider]).css('opacity', '0');

      correntSlider++

      $(totalSlider[correntSlider]).css('opacity', '.5');

      if (correntSlider >= max) {
         correntSlider = 0;
         $(totalSlider[correntSlider]).css('opacity', '.5');

      }
   }


   function Section() {
      $(window).scroll(() => {
         let pos = $(this).scrollTop();
         pos ? sideBar.addClass('styleSidebar') : sideBar.removeClass('styleSidebar');

         sect = $(this).scrollTop();

         sectionHeight = $('section').height()

         if (sect > 0) {
            sideBar.removeClass('styleSidebar');

            nameLogo.css('color', '#000');

         } else {
            sideBar.addClass('styleSidebar');

            if ($(this).width() <= 992) {
               nameLogo.css('color', '#000');
            } else {
               nameLogo.css('color', '#fff');
            }
         }

         $('section').each(function () {
            let target = $(this).offset().top;
            let id = $(this).attr('id');

            if (sect > target  - sectionHeight) {
               $('.nav--menu > a').removeClass('active');
               $('.nav--menu > a[href=\\#' + id + ']').addClass('active');
            }
         });
         
      })
   }
   $('.menu--secao').each(function(i,section) {
      $(section).click((e)=>{
         if(e.type=='click'){
            mobileEvent()
         };
      })
   })

   $('body').ready(function () {
      $(document).scrollTop(0)
      Section()
      $(window).on('resize', (e) => {
         e.currentTarget.innerWidth <= 992 ? nameLogo.css('color', '#000') : nameLogo.css('color', '#fff');

      });


      const arrayProdutos = [
         {
            title: 'Adiquira Agora !',
            name: 'Headset Gamer Havit, Drivers 53mm, Microfone Plugável, P2, PC, PS4, XBOX ONE, Preto - HV-H2002D',
            price: '221,00',
            image: 'imagens/Conteudo/headset-gamer.png'
         },
         {
            title: 'Adiquira Agora !',
            name: 'Teclado Gamer Redragon Mecânico Kumara K552 RGB ABNT2 Switch Blue c/ Led RGB',
            price: '320,00',
            image: 'imagens/Conteudo/teclado.png'
         },
         {
            title: 'Adiquira Agora !',
            name: 'Mouse Gamer Razer Deathadder V2 Mini Chroma',
            price: '123,20',
            image: 'imagens/Conteudo/mouse.png'
         },
         {
            title: 'Adiquira Agora !',
            name: 'Mouse Pad Gamer Speed MPG-101 Vermelho Fortrek',
            price: '34,00',
            image: 'imagens/Conteudo/mousePad.png'
         },
         {
            title: 'Adiquira Agora !',
            name: 'Repetidor Sinal Wifi Expansor wifi Wireless aumenta sinal wi-fi',
            price: '39,00',
            image: 'imagens/Conteudo/amplificador.png'
         },
         {
            title: 'Adiquira Agora !',
            name: 'Placa Wi-Fi Fenvi Dual Band Wireless AC 9260 Gigabit PC PCIe 2030Mbps BT5.0 802.11ac',
            price: '370,00',
            image: 'imagens/Conteudo/adaptadorWifi.png'
         },
         {
            title: 'Adiquira Agora !',
            name: 'Caixa de som 12w, Preta, DHS-2101, 8CA76AA, HP - CX 1 UN',
            price: '170,00',
            image: 'imagens/Conteudo/caixinha.png'
         },
         {
            title: 'Adiquira Agora !',
            name: 'Monitor Gamer Bluecase 27 Pol, Full HD, 144Hz, 2ms, HDMI /DP, BM2710GWH1',
            price: '800,00',
            image: 'imagens/Conteudo/monitor.png'
         },
         {
            title: 'Adiquira Agora !',
            name: 'PLACA DE VIDEO AMD RX580 8GB PCYES RADEON 8GB DDR5 256 BITS DUAL-FAN GRAFFITI SERIES - PJ580RX25608G5DF',
            price: '983,90',
            image: 'imagens/Conteudo/placa_de_video_amd_rx580_8gb.png'
         },
      ];

      console.log(arrayProdutos);

      arrayProdutos.map((produts, i) => {
         objCard = $('<div></div>').addClass('produto--item');
         h2 = $('<h2></h2>').text(produts.title);
         img = $('<div></div>').addClass('produto--img').append($('<img>').attr('src', produts.image));
         p = $(`<p></p>`).attr('title', produts.name).text(produts.name);
         button = $('<button></button>').addClass('btn-card').attr('data-indice', i).text('Detalhes')
         $('.produtos--items').append(objCard.append(h2, img, p, button));

         btnCard = objCard.children('.btn-card')[0];

         $(btnCard).each((i, obj) => {
            $(obj).click(() => {
               sessionStorage.setItem('produts', JSON.stringify(produts));
               window.open('pedidos.html', '_blank');
            })
         });
      })

      $('.produtos--items').slick({
         dots: false,
         infinite: false,
         speed: 1300,
         slidesToShow: 3,
         slidesToScroll: 3,
         arrows: true,
         responsive: [
            {
               breakpoint: 1024,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: false,
                  arrows: false,
               }
            },
            {
               breakpoint: 600,
               settings: {
                  slidesToShow: 1,
                  infinite: true,
                  slidesToScroll: 1,
                  arrows: false,
               }
            }
         ]
      });
   });
   setInterval(showSlider, 15000)
})

