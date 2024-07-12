$(document).ready(function() {
    // Initialize a Bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip();
  
    // Add an event listener to a button
    $('#myButton').on('click', function() {
      // Show a Bootstrap alert
      $('#myAlert').alert('show');
    });
  
    // Use jQuery to select and manipulate an element
    $('#myDiv').css('background-color', 'ed');
  
    // Example of using a Bootstrap modal
    $('#myModal').on('show.bs.modal', function (e) {
      if (!data) return e.preventDefault() // stops modal from being shown
    });
  
    // Example of using a Bootstrap collapse
    $('#myCollapse').on('shown.bs.collapse', function (e) {
      // Action to execute once the collapsible area is expanded
    });
  
    // Example of using a Bootstrap carousel
    $('#myCarousel').on('slid.bs.carousel', function (e) {
      $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
    });
  });