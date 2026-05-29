$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
	
	$('#fullpage').fullpage({
		anchors: ['home', 'ux/ui', 'graphic', 'about', 'playground'],
		sectionsColor: ['#FFF', '#FFF', '#FFF','#FFF','#FFF'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Hello', 'UX & UI', 'Graphic & Motion', 'About', 'Personal'],
		responsiveWidth: 320,
		continuousVertical: false,
		onLeave: function(index, nextIndex, direction) {
			if (nextIndex === 4) {
				$('.arrow').fadeOut(300);
			} else {
				$('.arrow').fadeIn(300);
			}
			if (nextIndex === 1) {
				$('body').removeClass('dark-sections');
			} else {
				$('body').addClass('dark-sections');
			}
		}
	});
		
});