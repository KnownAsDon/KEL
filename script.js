//LogIn Validation
var loginAttempts = 3;
function logInValidation() {
  var username = document.getElementById("uname").value;
  var password = document.getElementById("psw").value;
  var allowedUsername = "kel";
  var allowedPassword = "lek";
  if (username == allowedUsername && password == allowedPassword) {
    $("#mod01").hide(100);
    document.getElementById("overlay").style.display = "none";
    document.getElementById("uname").value = "";
    document.getElementById("psw").value = "";
  }
  else {
    if (loginAttempts == 0) {
      swal("LOL", "OH BOY YOU F***ED UP!!", "error");
    }
    else {
      loginAttempts = loginAttempts - 1;
      swal("Nope", "Try Again!", "error");
      document.getElementById("uname").value = "";
      document.getElementById("psw").value = "";
      if (loginAttempts == 0) {
        document.getElementById("uname").disabled = true;
        document.getElementById("psw").disabled = true;
        document.getElementByID("lifm").disabled = true;
      }
    }
  }
  return false;
}

//Message send
function messageSend() {
  alert("Thank you for your message!")
}

//Loading Progress Skill Bars
$(function(){
  var scrollPos = 0;
  $(function(){
    scrollPos = $(this).scrollTop();
    if (scrollPos > 150) {
      scrollPos = 150;
    };
    $("#photographyPercent").animate({
      width: "+90%"}, 1000
    );
  });
});

$(function(){
  var scrollPos = 0;
  $(function(){
    scrollPos = $(this).scrollTop();
    if (scrollPos > 150) {
      scrollPos = 150;
    };
    $("#instagramPercent").animate({
      width: "+65%"}, 1000
    );
  });
});

$(function(){
  var scrollPos = 0;
  $(function(){
    scrollPos = $(this).scrollTop();
    if (scrollPos > 150) {
      scrollPos = 150;
    };
    $("#schoolPercent").animate({
      width: "+80%"}, 1000
    );
  });
});


















