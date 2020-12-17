/*--- 

Author: YasirKareem
Channel: Design & Code
Link: https://www.youtube.com/DesignCodeY
Date: Feb 2, 2019
If you like the lesson please subscribe to the channel

---*/

/*global $*/

$(function () {
    'use strict';
    var view = $(window).height();
    $('.part')
        .height(view)
        .scrollie({
            scrollOffset: -50,
            scrollingInView: function (elem) {
                var bgColor = elem.data('background');
                $('body').css('background-color', bgColor);
            }
        });
});