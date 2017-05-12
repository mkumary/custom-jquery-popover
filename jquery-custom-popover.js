;(function ( $, window, document, undefined ) {
    'use strict';
   $.fn.custompopover = function(options){

       return this.each(function(index, element){
        var $element = $(element);
    $element.data('content', options.template);
    $element.popover({ trigger: "manual" , html: true, animation:false})
    .on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide");
            }
        },0);
});
           
       });
   }
})( jQuery, window, document );


