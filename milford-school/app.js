var main = function(){
  $('img').click(function(){
    $('.dropdown-menu').toggle();

  }),

  $('form').submit(function(){

    var email = $('#email').val();
    var password = $('#password').val();
    console.log(password);

    if(email === "") {
      $('.email-error').text("Please enter your email.");

    }else if (password === "") {
      $('.password-error').text("Please enter your password.");

    }
    return false;
  });
};

$(document).ready(main);