// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

 // document.addEventListener("DOMContentLoaded", function(event) {
 //    console.log("DOM fully loaded and parsed");
 

(function() {
  
  var Menu = (function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu__list');
    var brand = document.querySelector('.menu__brand');
    var menuItems = document.querySelectorAll('.menu__item');
    
    var active = false;
    
    var toggleMenu = function() {
      if (!active) {
        menu.classList.add('menu--active');
        menuList.classList.add('menu__list--active');
        brand.classList.add('menu__brand--active');
        burger.classList.add('burger--close');
        $(".main").hide();
        $(".header background:url").hide();
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.add('menu__item--active');
        }
        
        active = true;
      } else {
        menu.classList.remove('menu--active');
        menuList.classList.remove('menu__list--active');
        brand.classList.remove('menu__brand--active');
        burger.classList.remove('burger--close');
         $(".main").show();

        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove('menu__item--active');
        }
        
        active = false;
      }
    };
    
    var bindActions = function() {
      burger.addEventListener('click', toggleMenu, false);
    };
    
    var init = function() {
      bindActions();
    };
    
    return {
      init: init
    };
    
  }());
  
  Menu.init();
  
}());

 // });


// $(function() {
//   $(".nav").click(function() {
//     var sidebar = $(".sidebar");
//      if (sidebar.hasClass("visible")) {
        
//         sidebar.animate({width: 'toggle'});
//         $(".fade").fadeOut();
//         $(".header h1").animate({left: "50px"}, 400);
//        $(".main").show();

        
//         sidebar.removeClass("visible");
//     }
//     else {
      
//         sidebar.animate({width: 'toggle'});
//         $(".fade").fadeIn();

        
//         $(".header h1").animate({left: "-5px"}, 400);

//          $(".main").hide();



        
//         sidebar.addClass("visible");
//     }
//  })  



 
// });




// // $(function(){
// //       if (window.location.pathname == "/index.html.erb") {
// //             $('.main').hide();
// //       } else {
// //             $(".main").css({"background":"none"});
// //       }
// //  });