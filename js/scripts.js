$(document).ready(function(){
    $("form").submit(function(event){
      var name=$("input#name").val();
    alert("Thank you for contacting us");
    event.preventDefault();
    });
   });
   