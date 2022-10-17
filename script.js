let interval;

//event listener

//bind this event listener to the start button
$('#start').bind('click', function () {
    var count = 1;
    interval = setInterval(function () {
        count = ($(".slideshow :nth-child(" + count + ")").fadeOut().next().length == 0) ? 1 : count + 1;
        $(".slideshow :nth-child(" + count + ")").fadeIn();
    }, 4000);
    
});

//stop button clears the interval
$('#stop').bind('click', function () {
    clearInterval(interval)
});
