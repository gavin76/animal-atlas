// Animal Atlas Javascript Code

var all_template, group_template, slideshow_template;

var current_index = 0;

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

	source = $("#slideshow-template").html();
	slideshow_template = Handlebars.compile(source);

	
	// Clicking Categories tab shows animals from all the categories

	$("#all-tab").click(function() {

		showTemplate(all_template, animals_data);

		$(".nav-tabs .active").removeClass("active");
		$("#all-tab").addClass("active");

		console.log("Currently in all-tab");

	}); // end all-tab.click

	// Default view
	$("#all-tab").click();
	
	// Clicking Reptiles tab shows animals of each group
	$("#reptiles-tab").click(function() {

		$(".nav-tabs .active").removeClass("active");
		$("#reptiles-tab").addClass("active");

		current_index = 0;
		showTemplate(group_template, animals_data.category[current_index]);
	});
	// Clicking Mammals tab shows animals of each group
	$("#mammals-tab").click(function() {

		$(".nav-tabs .active").removeClass("active");
		$("#mammals-tab").addClass("active");

		current_index = 1;
		showTemplate(group_template, animals_data.category[current_index]);
	});
	// Clicking Birds tab shows animals of each group
	$("#birds-tab").click(function() {

		$(".nav-tabs .active").removeClass("active");
		$("#birds-tab").addClass("active");

		current_index = 2;
		showTemplate(group_template, animals_data.category[current_index]);
	});
	// Clicking Slideshow tab displays all the images

	$("#slideshow-tab").click(function() {
		$(".nav-tabs .active").removeClass("active");
		$("#slideshow-tab").addClass("active");

		showTemplate(slideshow_template, animals_data.category[current_index]);
		$('.carousel').carousel({
			interval: 2000
		});
	});
}); // end ready function