$(document).ready(function() {
  $("#begin").click(function() {
    $("#begin").hide();
    $("#user-name").show();
  });
  $("#user-name-input").change(function() {
    const userName = $("#user-name").val();
    $("#user-name").hide();
    $("#mobile").show();
  });
  $("#mobile-select").change(function() {
    const mobileVal = $("#mobile-select").val(); 
    $("#mobile").hide();
    $("#objectify").show();
  });    
  $("#objectify-select").change(function() {
    const objectifyVal = $("#objectify-select").val();
    $("#objectify").hide();
    $("#coffee").show();
  });
  $("#coffee-select").change(function() {
    const coffeeVal = $("#coffee-select").val();
    $("#coffee").hide();
    $("#music").show();
  });
  $("#music-select").change(function() {
    const musicVal = $("#music-select").val();
    $("#music").hide();
    $("#reptiles").show();
  });
  $("#reptiles-select").change(function() {
    const reptilesVal = $("#reptiles-select").val();
    $("#reptiles").hide();
    $("#people").show();
  });
  $("#people-select").change(function() {
    const reptilesVal = $("#people-select").val();
    $("#people").hide();
  });

    let language
    if (mobileVal === "Yes") {
      if (musicVal === "Yes") {
        language = "C#";
      } else {
        if (coffeeVal === "coffee") {
          language = "Javascript";
        }
      }
    } else { //Not mobile app
      if (reptilesVal === "Yes") {
        language = "Python";
      } else {
        if (peopleVal === "Yes") {
          language = "React";
        }
      }
    }

    $("#result").show();
});

