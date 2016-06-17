var main = function(){
  $('.dropdown').click(function(){
    
    $('.dropdown-menu').not($(this).children('ul').toggle()).hide();

  });
  
   
};

$(document).ready(main);