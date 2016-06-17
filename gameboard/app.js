var main = function() {
  $('.more-btn').click(function(){
    $(this).next().toggle();
  });
  $('.share').click(function(){
    $(this).next().toggle();
  });
  $('.glyphicon-bell').click(function(){
    $(this).toggleClass('active');
  });
};

$(document).ready(main);