alert("CONNECTED!");

// Give all divs a purple background.
$("div").css("backgroundColor","purple");

// Give the divs with class "highlight" and make them 200px wide.
$(".highlight").css("width","200px");

// Give the div with id "third" a orange border
$("#third").css({
	border: "2px solid orange"
});

// Give the first div a font color of pink
console.log($("div")[0])
$("div").eq(0).css("color","pink");