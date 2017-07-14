

$( document ).ready(function() {

    // Call on every window resize
     $(window).resize(checkMod);

     // Call once on initial load
     checkMod ();
    
    
    // Show footer menu on click
    $('#footer-menu a').on('click', function(e) {
        e.preventDefault();
        $('.footer-nav').find('ul').slideToggle();
    });
    
});




var checkMod = function() {
    
    var colMedium = $('#bottom').find('.col-md-4').length;
    var panel = $('#bottom').find('.panel-group');
    var panelBody = $('.panel-body');
    var panelTitle = $('.panel-title');
    var checkPanel = $('.panel-heading').length;

   if(Modernizr.mq('(min-width: 992px)')) {
       
       // Check if col-md-4 class applied
       if ( colMedium == 0 ) {
           
           $('.panel.panel-default').wrap( "<div class='col-md-4'></div>" );     
           
       }
       
       
       // Remove Accordion specific style
        panel.removeAttr('id role aria-multiselectable')
            .find('.panel').removeAttr('class')
            .find('.panel-heading').removeAttr('class')
            .find('.panel-title a').removeAttr('data-toggle');
        panelBody.parent().removeClass('collapse');
    
   } else {
       
       if ( checkPanel == 0 ) {
           
           $('.panel-group').attr({
               'id' : 'accordion',
               'role' : 'tablist',
               'aria-multiselectable' : 'true'
            });
       
           panelTitle.parent()
                        .attr('class', 'panel-heading')
                    .parent()
                        .attr('class', 'panel panel-default');
           
           panelBody.parent().addClass('collapse');
           panelTitle.find('a').attr('data-toggle', 'collapse');
       }
       
       
       if ( colMedium > 0 ) {
           
           $('.panel.panel-default').unwrap();
           
       }
       
   }

}