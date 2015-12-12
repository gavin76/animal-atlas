// Animal Atlas Javascript Code

var all_template, group_template;

var current_group = animals_data.category[0],
	current_group_id = animals_data.category[0].name;

// Helper function to instantiate a template and display it in the content div
function showTemplate(template, data) {
	var html = template(data);
	$('#content').html(html);
}

$(document).ready(function() {

	// Register Helper
	Handlebars.registerHelper('parseId', function(text) {
  		return new Handlebars.SafeString("click-" + text.toLowerCase());
	});

	// Compile templates for use
	var source = $("#all-template").html();
	all_template = Handlebars.compile(source);

	source = $("#group-template").html();
	group_template = Handlebars.compile(source);

	
	// Clicking Categories tab shows animals from all the categories

	$("#all-tab").click(function() {

		showTemplate(all_template, animals_data);

		$(".nav-tabs .active").removeClass("active");
		$("#all-tab").addClass("active");

		console.log("Currently in all-tab");

	}); // end all-tab.click

	// Default view
	$("#all-tab").click();
	
	// Clicking Animals by Group tab shows animals of each group
	$("#reptiles-tab").click(function() {

		$(".nav-tabs .active").removeClass("active");
		$("#reptiles-tab").addClass("active");

		showTemplate(group_template, animals_data.category[0]);
	});
		// Clicking Animals by Group tab shows animals of each group
	$("#mammals-tab").click(function() {

		$(".nav-tabs .active").removeClass("active");
		$("#mammals-tab").addClass("active");

		showTemplate(group_template, animals_data.category[1]);
	});
		// Clicking Animals by Group tab shows animals of each group
	$("#birds-tab").click(function() {

		$(".nav-tabs .active").removeClass("active");
		$("#birds-tab").addClass("active");

		showTemplate(group_template, animals_data.category[2]);
	});
}); // end ready function