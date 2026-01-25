$("h1").css("color", "blue");
$("button").css("backgroundColor", "yellow");

// manipulate styles 
$("h1").addClass("big-title margin-50");
$("h1").removeClass("margin-50");
$("h1").hasClass("big-title"); // returns true or false 

// manipulate text 
$("h1").text("World");
$("button").html("<em>Click</em>");

// manipulate attributes 
$("a").attr("href"); // get attribute 
$("a").attr("href", "https://www.instagram.com"); // set attribute 

// 