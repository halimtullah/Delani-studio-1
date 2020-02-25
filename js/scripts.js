$(document).ready(function(){
    $(".icon1").click(function(){
      $(".show1").toggle();
    });
  });
  $(document).ready(function(){
    $(".icon2").click(function(){
      $(".show2").toggle();
    });
  });
  $(document).ready(function(){
    $(".icon3").click(function(){
      $(".show3").toggle();
    });
  });
 $(document).ready(function(){
    $("form").submit(function(event){
      var name=$("input#name").val();
      var email=$("input#email").val();
      var message=$("input#message").val();
    alert(",Thank you for contacting us.");
    event.preventDefault();
    });
   });
   