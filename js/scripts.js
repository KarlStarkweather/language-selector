$(document).ready(function () {
  var mobileVal;
  var coffeeVal;
  var musicVal;
  var reptilesVal;
  var peopleVal;

  function showLanguage(lang) {
     $("p").text("You should study " + lang + "!");
  }

  $("#begin").click(function () {
    $("#begin").fadeOut();
    $("#mobile").fadeIn();
  });
  
  // first branch
  $("#mobile-select").change(function () {
    mobileVal = $("#mobile-select").val();
    $("#mobile").fadeOut();
    if (mobileVal === "Web") {
      $("#reptiles").fadeIn(); //reptile question
      $("#reptiles-select").change(function () {
        reptilesVal = $("#reptiles-select").val();
        $("#reptiles").fadeOut();
        if (reptilesVal === "Yes") {
          showLanguage("Python") ;
        } else { // not reptiles, people?
          $("#people").fadeIn();
          $("#people-select").change(function () {
            peopleVal = $("#people-select").val();
            $("#people").fadeOut();
            if (peopleVal === "Yes") {
              showLanguage("React") ;
            } else {
              showLanguage("CSS") ;
            }
          });
        };
      });
    } else { // Mobile apps
      $("#coffee").fadeIn();
      $("#coffee-select").change(function () {
        coffeeVal = $("#coffee-select").val();
        $("#coffee").fadeOut();
        debugger
        if (coffeeVal === "Coffee") {
          showLanguage("JavaScript") 
        } else {
          $("#music").fadeIn();
          $("#music-select").change(function () {
            musicVal = $("#music-select").val();
            $("#music").fadeOut();
            if (musicVal === "Yes") {
              showLanguage("C#") ;
            } else {
              showLanguage("HTML") ;
            }
          });
        }
      });
    }
  });
  $("#result").show();
});