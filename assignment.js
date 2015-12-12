// Animal Atlas Javascript Code

var all_template;

var current_category = animals_data.category[0];
var current_animal = current_category.animals[0];

// Helper function to instantiate a template and display it in the content div
function showTemplate(template, data) {
	var html = template(data);
	$('#content').html(html);
}

$(document).ready(function() {

	// Compile templates for use
	var source = $("#all-template").html();
	categories_template = Handlebars.compile(source);

	
	// Clicking Categories tab shows thumbnails of all the categories

	$("#all-tab").click(function() {

		showTemplate(categories_template, animals_data);

		$(".nav-tabs .active").removeClass("active");
		$("#all-tab").addClass("active");

		console.log("Currently in all-tab");

	}); // end all-tab.click

	// Default view
	$("#all-tab").click();

}); // end ready function