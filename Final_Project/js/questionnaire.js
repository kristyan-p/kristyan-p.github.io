// PSEUDOCODE: 
// 1) visitor clicks either option A or B
// 2) .main-question populates with next question and existing divs and replaced with divs with new IDs
// 3) when final divs are clicked, final div IDs are captured 
// 4) results will automatically lead to one spot on Google maps, pop-up will open based on final div ID captured 

// Entry page (quiz starts)
$(document).on('click', '#takequiz', function(){
  $('.main-question').html('Inside Manhattan <br>or outside Manhattan?');
  $('#takequiz').hide();
  $('#inside').show(500);
  $('#outside').show(500);
});

// START of actual quiz 
$(document).on('click', '#inside', function(){
  $('.main-question').html('Surrounded by park <br>or by buildings?');
  $('#inside').replaceWith('<div id="park">' + 'Park' + '</div>');
  $('#outside').replaceWith('<div id="buildings">' + 'Buildings' + '</div>');
});

$(document).on('click', '#park', function(){
  $('.main-question').html('Northern Manhattan <br>or central Manhattan?');
  $('#park').replaceWith('<div id="northern1">' + 'Northern' + '</div>');
  //FINAL: Morningside Park
  $('#buildings').replaceWith('<div id="central">' + 'Central' + '</div>');
  //FINAL: Central Park Reservoir
});

$(document).on('click', '#buildings', function(){
  $('.main-question').html('Nighttime view <br>or daytime view?');
  $('#park').replaceWith('<div id="nighttime">' + 'Nighttime' + '</div>');
  //FINAL: Whitney Museum Free Fridays
  $('#buildings').replaceWith('<div id="daytime">' + 'Daytime' + '</div>');
  //FINAL: Highline 
});

$(document).on('click', '#outside', function(){
  $('.main-question').html('East side view <br>or west side view?');
  $('#inside').replaceWith('<div id="east1">' + 'East' + '</div>');
  $('#outside').replaceWith('<div id="west1">' + 'West' + '</div>');
});

$(document).on('click', '#east1', function(){
  $('.main-question').html('East side view <br>or south side view?');
  $('#east1').replaceWith('<div id="east2">' + 'East' + '</div>');
  $('#west1').replaceWith('<div id="south1">' + 'South' + '</div>');
});

$(document).on('click', '#east2', function(){
  $('.main-question').html('Aerial view <br>or ground-level view?');
  $('#east2').replaceWith('<div id="aerial">' + 'Aerial' + '</div>');
  //FINAL: Roosevelt Island + tram
  $('#south1').replaceWith('<div id="ground">' + 'Ground-level' + '</div>');
});

$(document).on('click', '#ground', function(){
  $('.main-question').html('Closer view <br>or father away?');
  $('#aerial').replaceWith('<div id="closer">' + 'Closer' + '</div>');
  $('#ground').replaceWith('<div id="farther">' + 'Farther' + '</div>');
});

$(document).on('click', '#closer', function(){
  $('.main-question').html('Laid-back <br>or hustle and bustle?');
  $('#closer').replaceWith('<div id="laidback">' + 'Laid-back' + '</div>');
  //FINAL: Astoria Park 
  $('#farther').replaceWith('<div id="hustle">' + 'Hustle and Bustle' + '</div>');
  //FINAL: Brooklyn Bridge Park and Promenade
});

$(document).on('click', '#farther', function(){
  $('.main-question').html('Picnic spot <br>or restaurant options?');
  $('#closer').replaceWith('<div id="picnic">' + 'Picnic' + '</div>');
  //FINAL: Gantry Plaza State Park
  $('#farther').replaceWith('<div id="restaurant">' + 'Restaurant' + '</div>');
  //FINAL: Greenpoint
});

$(document).on('click', '#west1', function(){
  $('.main-question').html('West side view <br>or south side view?');
    $('#east1').replaceWith('<div id="west2">' + 'West' + '</div>');
    $('#west1').replaceWith('<div id="south2">' + 'Southern' + '</div>');
});

$(document).on('click', '#west2', function(){
  $('.main-question').html('Northern Manhattan view <br>or southern Manhattan view?');
    $('#west2').replaceWith('<div id="northern2">' + 'Northern' + '</div>');
  //FINAL: George Washington Bridge + Fort Lee
    $('#south2').replaceWith('<div id="south3">' + 'Southern' + '</div>');
  //FINAL: Pier C Park
});

$(document).on('click', '#south1', function(){
  $('.main-question').html('All day adventure <br>or short excursion?');
    $('#east2').replaceWith('<div id="allday">' + 'All day' + '</div>');
  //FINAL: Governors Island
    $('#south1').replaceWith('<div id="short">' + 'Short Excursion' + '</div>');
  //FINAL: Staten Island Ferry
});

$(document).on('click', '#south2', function(){
  $('.main-question').html('All day adventure <br>or short excursion?');
    $('#west2').replaceWith('<div id="allday">' + 'All day' + '</div>');
  //FINAL: Governors Island
    $('#south2').replaceWith('<div id="short">' + 'Short Excursion' + '</div>');
  //FINAL: Staten Island Ferry
});

$(document).on('click', '#south2', function(){
  $('.main-question').html('All day adventure <br>or short excursion?');
    $('#northern2').replaceWith('<div id="allday">' + 'All day' + '</div>');
  //FINAL: Governors Island
    $('#south2').replaceWith('<div id="short">' + 'Short Excursion' + '</div>');
  //FINAL: Staten Island Ferry
});

// RESULTS
//Morningside Park
$(document).on('click', '#northern1', function(){
    $('#central').hide();
    $('#northern1').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked<br> Morningside Park!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});
//Central Park Reservoir
$(document).on('click', '#central', function(){
    $('#central').hide();
    $('#northern1').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked <br>the Central Park <br>Reservoir!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});
//The Whitney Museum Free Fridays
$(document).on('click', '#nighttime', function(){
    $('#nighttime').hide();
    $('#daytime').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked <br>the Whitney Museum <br>Free Fridays!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});
//The Highline
$(document).on('click', '#daytime', function(){
    $('#nighttime').hide();
    $('#daytime').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked <br>the Highline!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});
//Roosevelt Island and tram
$(document).on('click', '#aerial', function(){
    $('#aerial').hide();
    $('#ground').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked <br>Roosevelt Island <br>and Tram!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});
//Astoria Park
$(document).on('click', '#laidback', function(){
    $('#hustle').hide();
    $('#laidback').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked <br>Astoria Park!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});
//Brooklyn Bridge Park and Promenade
$(document).on('click', '#hustle', function(){
    $('#hustle').hide();
    $('#laidback').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked <br>Brooklyn Bridge Park <br>and Promenade!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});
//Gantry Plaza State Park
$(document).on('click', '#picnic', function(){
    $('#picnic').hide();
    $('#restaurant').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked <br>Gantry Plaza State Park!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});
//Greenpoint
$(document).on('click', '#restaurant', function(){
    $('#picnic').hide();
    $('#restaurant').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked <br>Greenpoint!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});
//GWB and Fort Lee
$(document).on('click', '#northern2', function(){
    $('#northern2').hide();
    $('#south3').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked <br>the George Washington Bridge <br>and Fort Lee!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});
//Pier C Park
$(document).on('click', '#south3', function(){
    $('#northern2').hide();
    $('#south3').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked <br>Pier C Park!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});
//Governors Island
$(document).on('click', '#allday', function(){
    $('#allday').hide();
    $('#short').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked <br>Governors Island!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});
//Staten Island Ferry
$(document).on('click', '#short', function(){
    $('#allday').hide();
    $('#short').hide();
    $('#letsgo').show(500);
    $('#bottom-image').css('opacity','0');
    $('.footer-text').css('color','#f6c9cc');
    $('.footer-text a').css('color','#f6c9cc');
    $('body').addClass('bkg'); 
    $('.main-question').html('<span style="color:#962f39">You picked <br>the Staten Island Ferry!</span>');
    $('#letsgo').html('<a href="https://kristyan-p.github.io/Final_Project/map.html">Let\'s Go!</a>');
});