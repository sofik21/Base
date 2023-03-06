jQuery( document ).ready(function(){

    // scroll to top

	$('body').prepend('<div class="scroll-top"><div id="top"><i class="fa fa-angle-up"></i></div></div>')
	$(window).scroll(function(){
		if( $(window).scrollTop() > 500 ){
			$(".scroll-top").fadeIn();
		} else{
			$(".scroll-top").fadeOut();
		}
	});

	$('#top').click(function(){
		$("body, html").animate({scrollTop: 0});
	});



    // ------------------dark-theme------------------------

    // function to set a given theme/color-scheme
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

    // function to toggle between light and dark theme
    $("#icon").click( function(){
        if ( localStorage.getItem('theme') === 'theme-dark' ) {
            setTheme('theme-light');
            document.querySelector('.darklight-icon').classList = "darklight-icon fa-solid fa-moon";
        } else {
            setTheme('theme-dark');
            document.querySelector('.darklight-icon').classList = "darklight-icon fa-solid fa-sun";
        }
    });

    // Immediately invoked function to set the theme on initial load
    (function () {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-dark');
            document.querySelector('body').classList = 'theme-dark';
        } else {
            setTheme('theme-light');
            document.querySelector('body').classList = 'theme-light';
        }
    })();
	

	$("#icon").click(function(){
		document.body.classList.toggle("theme-dark");
		
		// if(document.body.classList.contains("theme-dark")){
		// 	document.getElementsByClassName('fa-sun')[0].className = 'fa-solid fa-moon';
		// }
        // else{
		// 	document.getElementsByClassName('fa-moon')[0].className = 'fa-solid fa-sun';
            
		// };

        if(document.body.classList.contains("theme-dark")){
			icons.src = "assets/img/logo.svg"
		}
        else{
			icons.src = "assets/img/logo-dark.svg"
            
		}

	});



    // ------------header-sec----------------

    $(".header-menu-items > ul > li").children("ul").parent('li').addClass("has-children").prepend('<svg class="trigger-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 180a3.9 3.9 0 0 1-2.8-1.2l-80-80a4 4 0 0 1 5.6-5.6l77.2 77.1l77.2-77.1a4 4 0 1 1 5.6 5.6l-80 80a3.9 3.9 0 0 1-2.8 1.2Z"/></svg>');


    $(".header-menu-items").clone().prependTo(".mobile-menu");

    $(".menu-trigger").on('click', function(){
        $(this).toggleClass("active");
        $(".mobile-menu").slideToggle();
       
    })
    
    //trigger-icon for mobile menu

    $(".mobile-menu .trigger-icon").on('click',function(){
        $(this).siblings('ul').slideToggle();
    });
    
    
    $(".trigger-icon").on('click',function(){
        $(this).toggleClass("active");
    })
    

    // for -button
    
    $(".header-menu-button div").on('click', function(){
        $(this).addClass("active").siblings().removeClass("active");
       
    })
    
    //for window scroll
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 50){
          $('.header-menu').addClass('scrolled')
        }
        else{
          $('.header-menu').removeClass('scrolled')
        }
      })
    
    $('.top').click(function(){
        $("body, html").animate({scrollTop: 0});
    });

// ---------------------price-button-------------------------

$(".button-sec-items").on('click',function(){
    $(this).toggleClass("active");
    $(".per-month").toggleClass("active")
    $(".per-year").toggleClass("active")
})










//premium-prices-sec-button---------------------

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry:{
        columnWidth: '.col-lg-4'
    }
});

$('.button-group span').on( 'click', function() {
    var filterValue = $(this).attr('data-name');
    $grid.isotope({ filter: filterValue });
    $(this).addClass( 'active' ).siblings().removeClass( 'active' );
});


//slider-scetion-poortfoli----------------------------

const portfolio = $('.portfolio-carousel')

portfolio.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    // autoplay:true,
    autoplaySpeed: 1500,
    infinite: true,
    loop:true,
    centerPadding: '200px',
    
});


$('.fa-arrow-left').on('click', function(){
    portfolio.slick('slickPrev');
});
$('.fa-arrow-right').on('click', function(){
     portfolio.slick('slickNext');
});


//---------------our-brands-sec--------------------

const brands = $('.brands-name')

brands.slick({

    slidesToShow: 5,
    slidesToScroll: 2,
    // arrows:true,
    autoplay:true,
    autoplaySpeed: 2000,
    infinite: true,
    loop:true,
    centerPadding: '200px',
    responsive: [

        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },

        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },

        {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }


     ]
    
});

//----------------------counter-up-sec-----------------------------------

    //Check if an element was in a screen
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom));
    }
    //Count up code
    function countUp() {
        $('.counter').each(function() {
          var $this = $(this), // <- Don't touch this variable. It's pure magic.
              countTo = $this.attr('data-count');
              ended = $this.attr('ended');

        if ( ended != "true" && isScrolledIntoView($this) ) {
            $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 2500, //duration of counting
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
        $this.attr('ended', 'true');
        }
        });
    }
    //Start animation on page-load
    if ( isScrolledIntoView(".counter") ) {
        countUp();
    }
    //Start animation on screen
    $(document).scroll(function() {
        if ( isScrolledIntoView(".counter") ) {
            countUp();
        }
    });





});
