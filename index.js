var vheight = $(window).height()
var docHeight = $(document).height()
var progress = 0
var barHeight = 0
var bgN = 0
var images = []
var scrollCounter = 0
var scrollPos
var timer;
var zeros
var zerosI = "0000"

var fadeInTime = 200
var fadeOutTime = 200
var timeOutTime = 400
var tapBool = true

//IMAGE PRELOAD------------------------------------------
if (document.images) {
  for (var i = 0; i < 432; i++) {
    if(i<10){
      zerosI = "0000"
    }
    if(i < 100 && i > 9){
      zerosI = "000"
    }
    if(i > 99){
      zerosI = "00"
    }
    images[i] = new Image();
    images[i].src = 'img/rende_'+ zerosI + i + '.jpg';
    console.log('loading...')
  }
}

//scroll progression------------------------------------------
function scrollFadeOut(){
  console.log("fadeout")
  scrollCounter = 0
  $('#backgroundDiv').animate({opacity: 0.4}, fadeOutTime)
  $('.text').animate({opacity: 1}, fadeOutTime)

}
function scrollFadeIn(){
    $("#backgroundDiv").finish();
    $(".text").finish();
    $('#backgroundDiv').animate({opacity: 1}, fadeInTime)
    $('.text').animate({opacity: 0.4}, fadeInTime)
}
function updateBg(){
  $('#progress').css('height', barHeight)
  bgN = Math.floor(progress * 432)
  if(bgN<10){
    zeros = "0000"
  }
  if(bgN < 100 && bgN > 9){
    zeros = "000"
  }
  if(bgN > 99){
    zeros = "00"
  }
  $('#backgroundDiv').css('background-image', 'url("img/rende_'+ zeros + bgN + '.jpg")');
}

$(window).scroll(function() {
  scrollCounter = scrollCounter + 1
  scrollPos = $(document).scrollTop()
  progress = scrollPos / (docHeight - vheight)
  barHeight = progress * vheight
  updateBg()
  // if(scrollCounter == 1){scrollFadeIn()}
  // clearTimeout(timer)
  // timer = setTimeout(scrollFadeOut, timeOutTime)


});


//TAP INTERACTION ===================================
$('.text').on('click tap', function() {
    if(tapBool == true){
      scrollFadeIn()
      tapBool = false
      console.log("bgON")
    }
    else{
      scrollFadeOut()
      tapBool = true
      console.log("bgOFF")

    }
    console.log("taptap")
});

//sidebars------------------------------------------
$('#navi').click(function() {
  $('#navi').animate({
    left: $(window).width() * -1
  }, 1000)
})
$('#menuButton').click(function() {
  $('#navi').animate({
    left: 0
  }, 1000)
  $('#refs').animate({
    right: $(window).width() * -1
  }, 1000)
})
$('#refs').click(function() {
  $('#refs').animate({
    right: $(window).width() * -1
  }, 1000)
})
$('.ref').click(function() {
  $('#refs').animate({
    right: 0
  }, 1000)
  $('#navi').animate({
    left: $(window).width() * -1
  }, 1000)
})
