$(document).ready(function() {
  $(".radio").click(function() {
    var ambianceInput = $("input:radio[name=ambiance]:checked").val();

    if (ambianceInput === "ocean") {
      $(".forest").hide();
      $(".mtn").hide();
      $(".ocean").show();
      $("body").removeClass();
      $("body").addClass("bg-blue");
    } else if (ambianceInput === "forest") {
      $(".ocean").hide();
      $(".mtn").hide();
      $(".forest").show();
      $("body").removeClass();
      $("body").addClass("bg-green");
    } else if (ambianceInput === "mountain") {
      $(".ocean").hide();
      $(".forest").hide();
      $("body").removeClass();
      $("body").addClass("bg-blue");
      $(".mtn").show();
    }
  });

  $("form#woods-date").submit(function(event) {
    event.preventDefault();
    $("form").hide();
    $(".question").hide();
    // $(".four").hide();
    // $(".five").hide();


    var behavior = parseInt($("#woodsy").val());
    var duration = parseInt($("#duration").val());
    var distance = parseInt($("#distance").val());
    var access = parseInt($("#gear").val());
    var priority = $("#priority").val();
    var destination = behavior + duration + distance + access

    if (destination <= 6 && priority === "water" && priority !== "pedestrian") {
      $("#cannon").show();
      $("#multnomah").hide();
      $("#hood").hide();
      $("#mind").hide();
    } else if (destination <= 6 && priority !== "water" || priority === "pedestrian") {
    $("#cannon").hide();
    $("#multnomah").hide();
    $("#hood").hide();
    $("#mind").show();
    } else if (destination > 6 && destination <= 9) {
      $("#cannon").hide();
      $("#multnomah").show();
      $("#hood").hide();
      $("#mind").hide();
    } else if (destination > 9) {
      $("#cannon").hide();
      $("#multnomah").hide();
      $("#hood").show();
      $("#mind").hide();
    }

  });
});
