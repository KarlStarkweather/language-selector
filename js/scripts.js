// $(document).ready(function() {
  // $("#begin").click(function() {
  //   let selection;
  //   $("#begin").hide();
  //   $("#user-name").show();

      //  $("#mobile").hide();
    // $("#objectify").hide();
    // $("#coffee").hide();
    // $("#music").hide();
    // $("#reptiles").hide();
    // $("#people").hide();
    

    // if (animal === "Moose") {
    //   $("#Moose").show();  
    // } else if (animal === "Iguana") {
    //   $("#Iguana").show();
    // } else if (animal === "Turkey") {
    //   $("#Turkey").show();
    // } else if (animal === "Aardvark") {
    //   $("#Aardvark").show();
    // }
//   });
// });

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
});

// $(document).ready(function() {
//   $("#mobile-select").change(function() {
//     const mobileVal = 
//     $("#mobile").hide();
//     $("#objectify").show();
//   });
// });

// $(document).ready(function() {
//   $("#objectify-select").change(function() {
//     $("#objectify").hide();
//     $("#coffee").show();
//   });
// });

// $(document).ready(function() {
//   $("#coffee-select").change(function() {
//     $("#coffee").hide();
//     $("#music").show();
//   });
// });