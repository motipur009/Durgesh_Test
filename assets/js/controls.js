// JavaScript Document

//Document Ready functions
$(document).ready(function(){
	"use strict";
	//Slide Panel Start shere
	$('html').click(function() {
   		//$('.panel-flyout').hide(); 
	});

	$('.panel-trigger').click(function(event){
		 event.stopPropagation();
	});
    $(".panel-trigger").click(function(){
		$(this).toggleClass("active");
		$(this).parents(".panel-box").find(".panel-flyout").slideToggle();
    });
	
	// Hero Banner height
	$(".hero-banner").css("min-height", $(window).height());
	
	//Trip Selection
	 var clicks = 0;
	 $(".increase").click(function() {clicks++; $(this).parents(".passenger-count").find('.passengerfield').val(clicks);});
	$(".decrease").click(function() {if (clicks > 0) {clicks--; $(this).parents(".passenger-count").find('.passengerfield').val(clicks);}});
	$(".add-city").hide();
	$(".round-trip").click(function(){
		$(".dynamic-booking-form").find(".dynamic-field").remove();
		$(".depart-date, .return-date").show();
		$("div.depart-date").removeClass("col-md-4").addClass("col-md-2");
    });
	$(".one-way").click(function(){
		$(".dynamic-booking-form").find(".dynamic-field").remove();
		$(".return-date").hide();
		$("div.depart-date").removeClass("col-md-2").addClass("col-md-4");
		$(".add-city").hide();
    });
	//$(".multiple-cities").click(function(){
//			$(".dynamic-booking-form").find(".dynamic-field").remove();
//			var formStr = '<div class="row dynamic-field">'+
//                      '<div class="col-md-2">'+
//                        '<div class="f-block"> <small>From</small>'+
//                          '<input type="text" class="ic-loation">'+
//                        '</div>'+
//                      '</div>'+
//                      '<div class="col-md-2">'+
//                        '<div class="f-block"> <small>To</small>'+
//                          '<input type="text" class="ic-loation">'+
//                        '</div>'+
//                      '</div>'+
//                      '<div class="col-md-4 depart-date">'+
//                        '<div class="f-block"> <small>Depart</small>'+
//                          '<input type="date" data-provide="datepicker" class="ic-calendar">'+
//                        '</div>'+
//                      '</div>'+
//                    '</div>';
//			$(".dynamic-booking-form").append(formStr)
//			$(".return-date").hide();
//			$(".add-city").show();
//			$("div.depart-date").removeClass("col-md-2").addClass("col-md-4");
//    });
//	$(".add-city").click(function(){
//			var formStr = '<div class="row dynamic-field">'+
//                      '<div class="col-md-2">'+
//                        '<div class="f-block"> <small>From</small>'+
//                          '<input type="text" class="ic-loation">'+
//                        '</div>'+
//                      '</div>'+
//                      '<div class="col-md-2">'+
//                        '<div class="f-block"> <small>To</small>'+
//                          '<input type="text" class="ic-loation">'+
//                        '</div>'+
//                      '</div>'+
//                      '<div class="col-md-4 depart-date">'+
//                        '<div class="f-block"> <small>Depart</small>'+
//                          '<input type="date" data-provide="datepicker" class="ic-calendar">'+
//                        '</div>'+
//                      '</div>'+
//                    '</div>';
			//$(".dynamic-booking-form").append(formStr)
			//$(".return-date").hide();
			//$("div.depart-date").removeClass("col-md-2").addClass("col-md-4");
    //});
	
	// Responsive Menu
	$(".menu").click(function(){
		$(this).toggleClass("active");
		$(".menu-items").slideToggle();
		
    });

	if ($(window).width() <= 640){	
		$(".hero-banner").css("min-height", "auto");
	}

    
});