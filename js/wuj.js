/*jshint devel:true */

$(document).ready(function() {

// tween snippet
//   var menuTween = TweenLite.to($menu, 0.3, {height:60, paused:true}); //tween constructor
	// menuTween.play(); // play tween
	// menuTween.reverse(); // reverse tween
var $gallery = $('.main-gallery');

$gallery.flickity({
	// options
 	cellAlign: 'center',
 	contain: true,
 	prevNextButtons: false,
 	percentPosition: false,
 	pageDots: true,
 // 	selectedAttraction: 0.2,
	// friction: 1
});


// flickty events
// get instance
var flkty = $gallery.data('flickity');

// $gallery.on( 'settle', function() {
//   console.log( 'Flickity settled at ' + flkty.selectedIndex )
// })

var galleryData = {
	currentPage: 0,
	pageColors: ["#fff","#E0F5FF", "#B1E5FD", "#7DD3FC", "#00A7F7", "#0086D4"]
};



function changeColor(pageIndex){
	console.log('run function');
	// change colors
	switch (pageIndex) { 
	    case 0: 
	        galleryBG.css('background', galleryData.pageColors[pageIndex] );
	        break;
	    case 1: 
	        galleryBG.css('background', galleryData.pageColors[pageIndex] );
	        break;
	    case 2: 
	        galleryBG.css('background', galleryData.pageColors[pageIndex] );
	        break;      
	    case 3: 
	        galleryBG.css('background', galleryData.pageColors[pageIndex] );
	        break;
	    case 4: 
	        galleryBG.css('background', galleryData.pageColors[pageIndex] );
	        break;
	    case 5: 
	        galleryBG.css('background', galleryData.pageColors[pageIndex] );
	        break;        
	    default:
	        alert('Nobody Wins!');
}
}

var galleryBG = $('.main-gallery');

$gallery.on( 'cellSelect', function() {
	var pageIndex = flkty.selectedIndex;

	// change in
  	if (galleryData.currentPage !== pageIndex){
  		changeColor(pageIndex) // change color function
  		galleryData.currentPage = pageIndex;
  	}

  	
  	
});

}); // end of ready