// Animal Atlas Javascript Code

var about_template, all_template, group_template, slideshow_template,slide_nav_template;

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

	source = $("#about-template").html();
	about_template = Handlebars.compile(source);

	source = $("#slide-nav-template").html();
	slide_nav_template = Handlebars.compile(source);
	
	// About Page

	$("#about").click(function() {
		$("#slide-nav").html("");
		showTemplate(about_template, animals_data);

		$(".navbar-nav .active").removeClass("active");

	});

	// Default view
	$("#about").click();
	
	// All Animals Tab

	$("#all-tab").click(function() {
		$("#slide-nav").html("");
		showTemplate(all_template, animals_data);

		$(".navbar-nav .active").removeClass("active");
		$("#all-tab").addClass("active");

		console.log("Currently in all-tab");

	});

	// Reptiles Category tab
	$("#reptiles-tab").click(function() {
		$("#slide-nav").html("");
		$(".navbar-nav .active").removeClass("active");
		$("#reptiles-tab").addClass("active");

		current_index = 0;
		showTemplate(group_template, animals_data.category[current_index]);
	});
	// Mammals Category tab
	$("#mammals-tab").click(function() {
		$("#slide-nav").html("");
		$(".navbar-nav .active").removeClass("active");
		$("#mammals-tab").addClass("active");

		current_index = 1;
		showTemplate(group_template, animals_data.category[current_index]);
	});
	// Birds Category tab
	$("#birds-tab").click(function() {
		$("#slide-nav").html("");
		$(".navbar-nav .active").removeClass("active");
		$("#birds-tab").addClass("active");

		current_index = 2;
		showTemplate(group_template, animals_data.category[current_index]);
	});
	
	// Slideshow tab and nav
	

	$("#slideshow-tab").click(function() {
		$(".navbar-nav .active").removeClass("active");
		$("#slideshow-tab").addClass("active");

		$("#slide-nav").html(slide_nav_template);

		$("#slide-reptiles").click(function() {
			$(".nav-tabs .active").removeClass("active");
			$("#slide-reptiles").addClass("active");

			current_index = 0;

			showTemplate(slideshow_template, animals_data.category[current_index]);
			$('.carousel').carousel({
				interval: 2000
			});
		});

		$("#slide-mammals").click(function() {
			$(".nav-tabs .active").removeClass("active");
			$("#slide-mammals").addClass("active");

			current_index = 1;

			showTemplate(slideshow_template, animals_data.category[current_index]);
			$('.carousel').carousel({
				interval: 2000
			});
		});

		$("#slide-birds").click(function() {
			$(".nav-tabs .active").removeClass("active");
			$("#slide-birds").addClass("active");

			current_index = 2;

			showTemplate(slideshow_template, animals_data.category[current_index]);
			$('.carousel').carousel({
				interval: 2000
			});
		});

		// Change slide show according to current animal category
		switch(current_index) {
			case 0: 
				$("#slide-reptiles").click();
				break;
			case 1: 
				$("#slide-mammals").click();
				break;
			case 2: 
				$("#slide-birds").click();
				break;
			default: console.log("Error");
		}
	});
	
}); // end ready function