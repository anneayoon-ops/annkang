$(document).ready(function() {

  // init Isotope
  var $grid = $('.grid').isotope({
    layoutMode: 'fitRows',
    transitionDuration: '0.8s',
  });

  $grid.isotope({ filter: '*' });

  // filter functions
  var filterFns = {};

  // bind filter button click
  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

});
