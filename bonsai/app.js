var main = function() {
  $('#top-text').keyup(function(){
    var topValue = $(this).val();
    $('.top-caption').text(topValue);
    
  });
  $('#bottom-text').keyup(function(){
    var bottomValue = $(this).val();
    $('.bottom-caption').text(bottomValue);
  });
  $('#image-url').keyup(function(){
    var imageValue = $(this).val();
    $(this).attr('src', 'imageValue');
  });
};
 
$(document).ready(main);