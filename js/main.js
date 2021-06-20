// Call Jquery
$(document).ready(function(){
    
    let $btns = $('.gallery .button-group button');
    
    $btns.click(function(e){ 

        $('.main .button-group .button').removeClass('active');

        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.gallery .grid').isotope({
            filter: selector
        });

        return false;

    })

    $('.main .about .owl-carousel').owlCarousel({
        // automatically loop through carousel
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
            // from 0 - 544pixels '1' item, and 2 for '544px' or more
            0: {
                items: 1
            },
            374: { 
                items: 1
            },
            1026: {
                items: 2
            }
        }

    })

});

