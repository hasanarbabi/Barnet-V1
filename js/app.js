$(function() {
    var ul = $(".ul_menu");
  
    $(document).click(function() {
      ul.slideUp(400);
    });
  
    $(".slide_down_menu").on("click", function(e) {
      e.stopPropagation();
      ul.slideToggle(400);
    });
  
  });