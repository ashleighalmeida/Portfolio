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


// $(function() {
//   $(".nav").click(function() {

//     $(".sidebar").animate({width: 'toggle'});
//     $('.fade').fadeIn();
//     $(".cbp-af-header").animate({left: "-57px"}, 400);

//   })  
// })




$(function() {
  $(".nav").click(function() {
    // Just cacheing the sidebar element so that we don't query it every time
    var sidebar = $(".sidebar");

    if (sidebar.hasClass("visible")) {
        // Do stuff if the sidebar is visible: hide it, remove the .fade and mave the header back
        sidebar.animate({width: 'toggle'});
        $(".fade").fadeOut();
        $(".header h1").animate({left: "50px"}, 400);
       $(".main").show();

        // Remove the .visible class from .sidebar
        sidebar.removeClass("visible");
    }
    else {
        // Do stuff if the sidebar is not visible: show it and the .fade, and move the header
        sidebar.animate({width: 'toggle'});
        $(".fade").fadeIn();

        // Put the initial value of the left property of .cbp-af-header
        $(".header h1").animate({left: "-5px"}, 400);

         $(".main").hide();



        // Tag the .sidebar with the .visible class
        sidebar.addClass("visible");
    }
 })  
    
 
})
