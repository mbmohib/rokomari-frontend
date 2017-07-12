

$( document ).ready(function() {
    // Call on every window resize

     $(window).resize(checkMod);

     // Call once on initial load

     checkMod ();
});

var checkMod = function() {

   if(Modernizr.mq('(min-width: 992px)')) {
       
       var colMedium = $('#bottom').find('.col-md-4').length;
       console.log(colMedium);
       var panel = $('#bottom').find('.panel-group');
       console.log(panel);
       
       if ( colMedium == 0 ) {
           
           $('.panel.panel-default').wrap( "<div class='col-md-4'></div>" );
           
            
       }
       
        panel.removeAttr('id role aria-multiselectable');
        panel.find('.panel').removeAttr('class');
        panel.find('.panel-heading').removeAttr('class');
       
    
   } else {
       
       var checkPanel = $('.panel-heading').length;
       
       if ( checkPanel == 0 ) {
           
           $('.panel-group').attr({
               'id' : 'accordion',
               'role' : 'tablist',
               'aria-multiselectable' : 'true'
            });
       
            $('.panel-title').parent()
                                .attr('class', 'panel-heading')
                            .parent()
                                .attr('class', 'panel panel-default');
       }
       
       
       
       var colMedium = $('#bottom').find('.col-md-4').length;
       
       if ( colMedium > 0 ) {
           
           $('.panel.panel-default').unwrap();
           
       }
       
   }

}