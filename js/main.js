$(window).resize(function() {
            resize();
        });
        $(function() {
            $('.thome').attr('src', 'http://cdn.com/bg.png').css({
                // 'position' : 'fixed',
                'top' : 0,
                'left' : 0
            });
            resize();             
        });

        function resize() {
            var $img = $('.thome');
            
                $img.css({
                    'width' : '100%',
                    'height' : $(window).height() + "px" 
                });
        }
