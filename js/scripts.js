$(document).ready(function() {
  var userName;
  var mobileVal;
  var objectifyVal;
  var coffeeVal;
  var musicVal;
  var reptilesVal;
  var peopleVal;
  var langVal;

 
  $("#begin").click(function() {
    $("#begin").hide();
    $("#user-name").show();
  });
  $("#user-name-input").change(function() {
    userName = $("#user-name").val();
    $("#user-name").hide();
    $("#mobile").show();
  });
  // first question
  $("#mobile-select").change(function() {
    mobileVal = $("#mobile-select").val(); 
    $("#mobile").hide();
    
  });    
  if (mobileVal === "Yes") {
    $("#objectify").show();
    $("#objectify-select").change(function() {
    objectifyVal = $("#objectify-select").val();
    $("#objectify").hide();
    
  });
  $("#coffee").show();
  $("#coffee-select").change(function() {
    coffeeVal = $("#coffee-select").val();
    $("#coffee").hide();
  });
  $("#music").show();
  $("#music-select").change(function() {
    musicVal = $("#music-select").val();
    $("#music").hide();
  });
  $("#reptiles").show();
    $("#reptiles-select").change(function() {
    reptilesVal = $("#reptiles-select").val();
    $("#reptiles").hide();
    $("#people").show();
  });
  $("#people-select").change(function() {
    peopleVal = $("#people-select").val();
    $("#people").hide();

    
    if (mobileVal === "Yes") {
      if (musicVal === "Yes") {
        langVal = "C#";
      } else {
        if (coffeeVal === "coffee") {
          langVal = "Javascript";
        } else {
          langVal = "English";
        }
      }
    } else { //Not mobile app
      if (reptilesVal === "Yes") {
        langVal = "Python";
      } else {
        if (peopleVal === "Yes") {
          langVal = "React";
        } else {
          langVal = "German";
        }
      }
    }
    $("#result").show();
    // alert(langVal);
    $("p").text("You should study " + langVal + "!");
      // event.preventDefault();
      // alert(langVal);
  });
});

