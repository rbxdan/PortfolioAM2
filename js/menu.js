$(document).ready(function () {
    var $myCanvas = $('#myCanvas')
    // $myCanvas.css("width", $('#homeMenu').width())
    // $myCanvas.css("height", $('#homeMenu').height())
    // $myCanvas.css("margin-left", ($(window).width()-$myCanvas.width())/2)
    // $myCanvas.css("margin-right", ($(window).width()-$myCanvas.width())/2)
    // $myCanvas.css("margin", 'auto')  

    //Circles

    $myCanvas.drawArc({
        layer: true,
        fillStyle: 'black',
        x: $myCanvas.width()/2,
        y: $myCanvas.height()/2,
        radius: 20,
        mouseover: function(layer) {
            $(this).animateLayer(layer, {
                scale: 1.2
            })
        }, 
        mouseout: function(layer) {
            $(this).animateLayer(layer, {
                scale: 1
            })
        }
    })
    .drawArc({
        layer: true,
        name: 'skills',
        start: 15,
        end: 80,    
        x: $myCanvas.width()/2,
        y: $myCanvas.height()/2,
        radius: 120,
        strokeStyle: 'black',
        strokeWidth: 8,
        mouseover: function(layer) {

            $myCanvas.drawArc({
                layer: true,
                name: 'circle1',
                x: $myCanvas.width()/2,
                y: $myCanvas.height()/2,
                radius: 0,
                strokeStyle: 'black',
                strokeWidth: 2,
            })
            .animateLayer('circle1', {
                radius: 120
            }, 700, function(layer) {
                $myCanvas.removeLayer('circle1')
            })

            $myCanvas.drawArc({
                layer: true,
                name: 'circle2',
                x: $myCanvas.width()/2,
                y: $myCanvas.height()/2,
                radius: 0,
                strokeStyle: 'black',
                strokeWidth: 2,
                delay: function(layer) {
                    $(this).animateLayer('circle2', {
                        radius: 120
                    }, 900, function(layer) {
                        $myCanvas.removeLayer('circle2')
                    })
                }
            })

            $myCanvas.delayLayer('circle2', 400)
            

            $(this).animateLayer(layer, {
                strokeWidth: 15
            }, 300)
        }, 
        mouseout: function(layer) {
            $(this).animateLayer(layer, {
                strokeWidth: 8
            }, 300)
        }
    })
    .drawArc({
        layer: true,
        name: 'contact',
        start: 100,
        end: 165,    
        x: $myCanvas.width()/2,
        y: $myCanvas.height()/2,
        radius: 120,
        strokeStyle: 'black',
        strokeWidth: 8
    })
    .drawArc({
        layer: true,
        name: 'about',
        start: 195,
        end: 260,    
        x: $myCanvas.width()/2,
        y: $myCanvas.height()/2,
        radius: 120,
        strokeStyle: 'black',
        strokeWidth: 8
    })
    .drawArc({
        layer: true,
        name: 'projects',
        start: 280,
        end: 345,    
        x: $myCanvas.width()/2,
        y: $myCanvas.height()/2,
        radius: 120,
        strokeStyle: 'black',
        strokeWidth: 8
    })

    //Button texts

    $myCanvas.drawText({
        layer: true,
        fromCenter: false,
        fillStyle: 'black',
        x: $myCanvas.width()/2+120,
        y: $myCanvas.height()/2-140,
        fontSize: 30,
        fontFamily: 'Raleway-Medium',
        maxWidth: 105,
        align: 'left',
        text: 'my skills'
    })

    $myCanvas.drawText({
        layer: true,
        fromCenter: false,
        fillStyle: 'black',
        x: $myCanvas.width()/2+120,
        y: $myCanvas.height()/2+60,
        fontSize: 30,
        fontFamily: 'Raleway-Medium',
        maxWidth: 105,
        align: 'left',
        text: 'contact me'
    })

    $myCanvas.drawText({
        layer: true,
        fromCenter: false,
        fillStyle: 'black',
        x: $myCanvas.width()/2-210,
        y: $myCanvas.height()/2+60,
        fontSize: 30,
        fontFamily: 'Raleway-Medium',
        maxWidth: 105,
        align: 'right',
        text: 'about me'
    })

    $myCanvas.drawText({
        layer: true,
        fromCenter: false,
        fillStyle: 'black',
        x: $myCanvas.width()/2-230,
        y: $myCanvas.height()/2-140,
        fontSize: 30,
        fontFamily: 'Raleway-Medium',
        maxWidth: 105,
        align: 'right',
        text: 'my projects'
    })
})