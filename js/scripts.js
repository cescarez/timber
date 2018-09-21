$(document).ready(function() {
  $(".radio").click(function() {
    var ambianceInput = $("input:radio[name=ambiance]:checked").val();

    if (ambianceInput === "ocean") {
      $(".mtn").hide();
      $("body").removeClass();
      $("body").addClass("bg-blue");
    } else if (ambianceInput === "forest") {
      $(".mtn").hide();
      $("body").removeClass();
      $("body").addClass("bg-green");
    } else if (ambianceInput === "mountain") {
      $("body").removeClass();
      $("body").addClass("bg-blue");
      $(".mtn").show();
    } else {
      $(".mtn").hide();
      $("body").removeClass();
    }
  });

  $("form#woods-date").submit(function(event) {
    event.preventDefault();

    var behavior=parseInt($("#woodsy").val());
    var duration=parseInt($("#duration").val());
    var distance=parseInt($("#distance").val());
    var access=parseInt($("#gear").val());
    var destination= behavior + duration + distance + access



  });
});
