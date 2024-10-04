function moveIt (){
    let cWidth = $('#container').width();
    let cHeight = $('#container').height();

    let bWidth = $('#randomButton').outerWidth();
    let bHeight = $('#randomButton').outerHeight();

    let randomX = Math.random() * (cWidth - bWidth);
    let randomY = Math.random() * (cHeight - bHeight);

    let animateConfig = {
        left: randomX,
        top: randomY
    };

    $('#randomButton').animate(animateConfig, 1000)
};

$('#randomButton').mouseenter(moveIt)
