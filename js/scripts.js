$(document).ready(function(){
    $("form").submit(function(event){
      var name=$("input#name").val();
    alert("Hello "+name+" Thank you for contacting us");
    event.preventDefault();
    });
   });
   