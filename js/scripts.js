$(document).ready(function(){
    $("form").submit(function(event){
      var name=$("input#name").val();
      var email=$("input#email").val();
      var message=$("input#message").val();
    alert(",Thank you for contacting us.");
    event.preventDefault();
    });
   });
   