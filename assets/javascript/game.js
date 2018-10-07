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


    function changeCrystals() {
        for (var i = 0; i < 4; i++) {
            var crystValNumber = crystNumGenerator();
            console.log('value of ' + i + 'th image: ' + crystValNumber);
            $('.img-crystals').append('<img class="crystal" value=' + crystValNumber + ' src="assets/images/crystal-' + i + '.jpg">');
        };
    }
    function reset() {
        $('.img-crystals').empty();
        changeCrystals();
        numberGenerator();
        clickCrystal();
        $('#total-value').text('0');
        totalVal = 0;
    };
    reset();

    function numberGenerator() {
        genNumber = Math.floor(Math.random() * 102) + 19;
        $('#gen-number').text(genNumber);

    };


    function crystNumGenerator() {
        return Math.floor(Math.random() * 12) + 1;

    }

    function clickCrystal() {
        $('.crystal').on('click', function () {
            var crystValue = $(this).attr("value");
            var crystIntValue = parseInt(crystValue);
            totalVal = totalVal + crystIntValue;
            $('#total-value').text(totalVal);
            console.log('totalVal: ' + totalVal + ' and genNumber: ' + genNumber);
            winnerORloser();
        });
    };

    function winnerORloser() {
        if (totalVal === genNumber) {
            wins++;
            $('#win').text(wins);
            reset();
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
            reset();
            setTimeout(function () {
                $('#did-i-win').text('.')
            }, 600);
            $('#did-i-win').text('You Lost.');
        }
    };

    // resetO

    //    // if clicked on generated number then will generate a new number
    // $('#gen-number').on('click', function(){
    //     numberGenerator();
    // });






});