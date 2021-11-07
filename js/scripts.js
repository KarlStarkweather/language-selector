$(document).ready(function() {
  $("#begin").click(function() {
    let selection;
    $("#begin").hide();
    $("#user-name").show();
    $("#mobile").hide();
    $("#objectify").hide();
    $("#coffee").hide();
    $("#music").hide();
    $("#reptiles").hide();
    $("#people").hide();
    

    if (animal === "Moose") {
      $("#Moose").show();  
    } else if (animal === "Iguana") {
      $("#Iguana").show();
    } else if (animal === "Turkey") {
      $("#Turkey").show();
    } else if (animal === "Aardvark") {
      $("#Aardvark").show();
    }
  });
});

$(document).ready(function() {
  $("#user-name").change(function() {
    const userName = $("#user-name").val();
    
    $("#user-name").hide();
    $("#mobile").hide();
  
});
});
