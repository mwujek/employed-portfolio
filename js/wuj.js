/*jshint devel:true */

$(document).ready(function() {

// tween snippet
//   var menuTween = TweenLite.to($menu, 0.3, {height:60, paused:true}); //tween constructor
	// menuTween.play(); // play tween
	// menuTween.reverse(); // reverse tween


var filterBtn = $('.filter-btn');
var bodyWrapper = $('.body-wrapper');
filterBtn.click(function() {
	bodyWrapper.toggleClass('filter-active');
});

}); // end of ready