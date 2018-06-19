$(document).ready(function () {
    var $myCanvas = $('#myCanvas')

    //Circles

    $myCanvas.drawArc({
        layer: true,
        name: 'centerCircle',
        fillStyle: 'black',
        x: $myCanvas.width() / 2,
        y: $myCanvas.height() / 2,
        radius: 20,
        mouseover: function (layer) {
            $(this).animateLayer(layer, {
                scale: 1.2
            })
        },
        mouseout: function (layer) {
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
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 120,
            strokeStyle: 'black',
            strokeWidth: 8
    })
    .drawArc({
        layer: true,
        name: 'contact',
        start: 100,
        end: 165,
        x: $myCanvas.width() / 2,
        y: $myCanvas.height() / 2,
        radius: 120,
        strokeStyle: 'black',
        strokeWidth: 8
    })
    .drawArc({
        layer: true,
        name: 'about',
        start: 195,
        end: 260,
        x: $myCanvas.width() / 2,
        y: $myCanvas.height() / 2,
        radius: 120,
        strokeStyle: 'black',
        strokeWidth: 8
    })
    .drawArc({
        layer: true,
        name: 'projects',
        start: 280,
        end: 345,
        x: $myCanvas.width() / 2,
        y: $myCanvas.height() / 2,
        radius: 120,
        strokeStyle: 'black',
        strokeWidth: 8
    })

//Button texts

$myCanvas.drawText({
    layer: true,
    name: 'skillsButton',
    fromCenter: false,
    fillStyle: 'black',
    x: $myCanvas.width() / 2 + 120,
    y: $myCanvas.height() / 2 - 140,
    fontSize: 30,
    fontFamily: 'Raleway-Medium',
    maxWidth: 105,
    align: 'left',
    cursors: {
        mouseover: 'pointer'
    },
    click: function () {
        window.location = 'skills.html'
    },
    mouseover: function (layer) {
        $myCanvas.drawArc({
            layer: true,
            name: 'circle1',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 2,
        })
            .animateLayer('circle1', {
                radius: 120
            }, 700, function (layer) {
                $myCanvas.removeLayer('circle1')
            })

        $myCanvas.drawArc({
            layer: true,
            name: 'circle2',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 2,
            delay: function (layer) {
                $(this).animateLayer('circle2', {
                    radius: 120
                }, 900, function (layer) {
                    $myCanvas.removeLayer('circle2')
                })
            }
        })

        $myCanvas.delayLayer('circle2', 400)

        $myCanvas.drawArc({
            layer: true,
            name: 'circle3',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 3,
            delay: function (layer) {
                $(this).animateLayer('circle3', {
                    radius: 120
                }, 700, function (layer) {
                    $myCanvas.removeLayer('circle3')
                })
            }
        })

        $myCanvas.delayLayer('circle3', 200)

        $myCanvas.drawArc({
            layer: true,
            name: 'circle4',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 3,
            delay: function (layer) {
                $(this).animateLayer('circle4', {
                    radius: 120
                }, 1000, function (layer) {
                    $myCanvas.removeLayer('circle4')
                })
            }
        })

        $myCanvas.delayLayer('circle4', 100)

        $myCanvas.animateLayer('skills', {
            strokeWidth: 15,
            start: 0,
            end: 360
        }, 500)
    },
    mouseout: function(layer) {
        $(this).animateLayer('skills', {
            strokeWidth: 8,
            start: 15,
            end: 80
        }, 500)
    },
    text: 'my skills'
})

$myCanvas.drawText({
    layer: true,
    name: 'contactButton',
    fromCenter: false,
    fillStyle: 'black',
    x: $myCanvas.width() / 2 + 120,
    y: $myCanvas.height() / 2 + 60,
    fontSize: 30,
    fontFamily: 'Raleway-Medium',
    maxWidth: 105,
    align: 'left',
    cursors: {
        mouseover: 'pointer'
    },
    click: function () {
        window.location = 'contact.html'
    },
    mouseover: function (layer) {
        $myCanvas.drawArc({
            layer: true,
            name: 'circle1',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 2,
        })
            .animateLayer('circle1', {
                radius: 120,
                start: 0,
                end: 360
            }, 700, function (layer) {
                $myCanvas.removeLayer('circle1')
            })

        $myCanvas.drawArc({
            layer: true,
            name: 'circle2',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 2,
            delay: function (layer) {
                $(this).animateLayer('circle2', {
                    radius: 120
                }, 900, function (layer) {
                    $myCanvas.removeLayer('circle2')
                })
            }
        })

        $myCanvas.delayLayer('circle2', 400)

        $myCanvas.drawArc({
            layer: true,
            name: 'circle3',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 3,
            delay: function (layer) {
                $(this).animateLayer('circle3', {
                    radius: 120
                }, 700, function (layer) {
                    $myCanvas.removeLayer('circle3')
                })
            }
        })

        $myCanvas.delayLayer('circle3', 200)

        $myCanvas.drawArc({
            layer: true,
            name: 'circle4',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 3,
            delay: function (layer) {
                $(this).animateLayer('circle4', {
                    radius: 120
                }, 1000, function (layer) {
                    $myCanvas.removeLayer('circle4')
                })
            }
        })

        $myCanvas.delayLayer('circle4', 100)

        $myCanvas.animateLayer('contact', {
            strokeWidth: 15,
            start: 0,
            end: 360
        }, 500)
    },
    mouseout: function(layer) {
        $(this).animateLayer('contact', {
            strokeWidth: 8,
            start: 100,
            end: 165
        }, 500)
    },
    text: 'contact me'
})

$myCanvas.drawText({
    layer: true,
    name: 'aboutButton',
    fromCenter: false,
    fillStyle: 'black',
    x: $myCanvas.width() / 2 - 210,
    y: $myCanvas.height() / 2 + 60,
    fontSize: 30,
    fontFamily: 'Raleway-Medium',
    maxWidth: 105,
    align: 'right',
    cursors: {
        mouseover: 'pointer'
    },
    click: function () {
        window.location = 'aboutme.html'
    },
    mouseover: function (layer) {
        $myCanvas.drawArc({
            layer: true,
            name: 'circle1',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 2,
        })
            .animateLayer('circle1', {
                radius: 120
            }, 700, function (layer) {
                $myCanvas.removeLayer('circle1')
            })

        $myCanvas.drawArc({
            layer: true,
            name: 'circle2',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 2,
            delay: function (layer) {
                $(this).animateLayer('circle2', {
                    radius: 120
                }, 900, function (layer) {
                    $myCanvas.removeLayer('circle2')
                })
            }
        })

        $myCanvas.delayLayer('circle2', 400)

        $myCanvas.drawArc({
            layer: true,
            name: 'circle3',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 3,
            delay: function (layer) {
                $(this).animateLayer('circle3', {
                    radius: 120
                }, 700, function (layer) {
                    $myCanvas.removeLayer('circle3')
                })
            }
        })

        $myCanvas.delayLayer('circle3', 200)

        $myCanvas.drawArc({
            layer: true,
            name: 'circle4',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 3,
            delay: function (layer) {
                $(this).animateLayer('circle4', {
                    radius: 120
                }, 1000, function (layer) {
                    $myCanvas.removeLayer('circle4')
                })
            }
        })

        $myCanvas.delayLayer('circle4', 100)

        $myCanvas.animateLayer('about', {
            strokeWidth: 15,
            start: 0,
            end: 360
        }, 500)
    },
    mouseout: function(layer) {
        $(this).animateLayer('about', {
            strokeWidth: 8,
            start: 195,
            end: 260
        }, 500)
    },
    text: 'about me'
})

$myCanvas.drawText({
    layer: true,
    name: 'projectsButton',
    fromCenter: false,
    fillStyle: 'black',
    x: $myCanvas.width() / 2 - 230,
    y: $myCanvas.height() / 2 - 140,
    fontSize: 30,
    fontFamily: 'Raleway-Medium',
    maxWidth: 105,
    align: 'right',
    cursors: {
        mouseover: 'pointer'
    },
    click: function () {
        window.location = 'projects.html'
    },
    mouseover: function (layer) {
        $myCanvas.drawArc({
            layer: true,
            name: 'circle1',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 2,
        })
            .animateLayer('circle1', {
                radius: 120
            }, 700, function (layer) {
                $myCanvas.removeLayer('circle1')
            })

        $myCanvas.drawArc({
            layer: true,
            name: 'circle2',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 2,
            delay: function (layer) {
                $(this).animateLayer('circle2', {
                    radius: 120
                }, 900, function (layer) {
                    $myCanvas.removeLayer('circle2')
                })
            }
        })

        $myCanvas.delayLayer('circle2', 400)

        $myCanvas.drawArc({
            layer: true,
            name: 'circle3',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 3,
            delay: function (layer) {
                $(this).animateLayer('circle3', {
                    radius: 120
                }, 700, function (layer) {
                    $myCanvas.removeLayer('circle3')
                })
            }
        })

        $myCanvas.delayLayer('circle3', 200)

        $myCanvas.drawArc({
            layer: true,
            name: 'circle4',
            x: $myCanvas.width() / 2,
            y: $myCanvas.height() / 2,
            radius: 0,
            strokeStyle: 'black',
            strokeWidth: 3,
            delay: function (layer) {
                $(this).animateLayer('circle4', {
                    radius: 120
                }, 1000, function (layer) {
                    $myCanvas.removeLayer('circle4')
                })
            }
        })

        $myCanvas.delayLayer('circle4', 100)

        $myCanvas.animateLayer('projects', {
            strokeWidth: 15,
            start: 0,
            end: 360
        }, 500)
    },
    mouseout: function(layer) {
        $(this).animateLayer('projects', {
            strokeWidth: 8,
            start: 280,
            end: 345
        }, 500)
    },
    text: 'my projects'
})

})