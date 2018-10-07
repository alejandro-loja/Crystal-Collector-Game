$(document).ready(function () {
    //READY TO PLAY
    console.log("ready!");
    var wins = 0;
    var losses = 0;
    var genNumber;
    var totalVal = 0;



    $('#win').text(wins);
    $('#loss').text(losses);
    $('#total-value').text(totalVal);


    for (var i = 0; i < 4; i++) {
        var crystValNumber = crystNumGenerator();
        console.log('value of ' + i + 'th image: ' + crystValNumber);
        $('.img-crystals').append('<img class="crystal" value=' + crystValNumber + ' src="assets/images/crystal-' + i + '.jpg">');
    };


    function numberGenerator() {
        genNumber = Math.floor(Math.random() * 102) + 19;
        $('#gen-number').text(genNumber);

    };


    function crystNumGenerator() {
        return Math.floor(Math.random() * 12) + 1;

    }

    $('.crystal').on('click', function () {
        console.log($(this));
        var crystValue = $(this).attr("value");
        var crystIntValue = parseInt(crystValue);
        totalVal = totalVal + crystIntValue;
        $('#total-value').text(totalVal);
        console.log('totalVal: ' + totalVal + ' and genNumber: ' + genNumber);
        winnerORloser();
    });




    numberGenerator();

    function winnerORloser() {
        if (totalVal === genNumber) {
            wins++;
            $('#win').text(wins);
            setTimeout(function () {
                wins++;
                $('#win').text(wins);
                $('#did-i-win').text('.')
            }, 2000);
            $('#did-i-win').text('You Won!!');
        }
        else if (totalVal > genNumber) {
            losses++;
            $('#loss').text(losses);
            // userLosses();
            // resetGame();
            console.log('LOST!');
            setTimeout(function () {
                $('#did-i-win').text('.')
            }, 1000);
            $('#did-i-win').text('You Lost.');
        }
    };

    // resetO

    //    // if clicked on generated number then will generate a new number
    // $('#gen-number').on('click', function(){
    //     numberGenerator();
    // });






});