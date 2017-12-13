$('.plus').click(showIcons)

function showIcons() {
  $("#extra-icons").slideDown(1000);
  $("#extra-icons").css('display','inline-block').css('margin-left','5%');
  $('.plus').hide();
};