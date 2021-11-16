$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

  //check localstorage
if(localStorage.getItem('preferredTheme') == 'dark') {
  setDarkMode(true)
}

function setDarkMode(isDark) {
  var darkBtn = document.getElementById('darkBtn')
  var lightBtn = document.getElementById('lightBtn')

  if(isDark) {
      lightBtn.style.display = "block"
      darkBtn.style.display = "none" 
  //tambahan localstorage
      localStorage.setItem('preferredTheme', 'dark');
  } else {
      lightBtn.style.display = "none"
      darkBtn.style.display = "block"
   //tambahan localstorage
      localStorage.removeItem('preferredTheme');
  }

  document.body.classList.toggle("darkmode");
}


});