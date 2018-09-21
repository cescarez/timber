$(document).ready(function() {
  $("form#woods-date").select(function(event) {
    event.preventDefault();

  $("form#woods-date").submit(function(event) {
    event.preventDefault();

    var ambianceInput=$("#ambiance").val();

    if(ambianceInput="blue") {
      $("body").removeClass();
      $("body").addClass("bg-blue");
    } else if (ambianceInput="green") {
      $("body").removeClass();
      $("body").addClass("bg-green");
    } else if (ambianceInput="white") {
      $("body").removeClass();
      $("body").addClass("bg-blue");
      $(".mtn").show();
    } else {
      $("body").removeClass();
    }

    var behavior=parseInt($("#woodsy").val());
    var destination=parseInt($("#outsidey").val());

  });
});
