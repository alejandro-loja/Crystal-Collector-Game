var wins = 0;
    var losses = 0;
    var genNumber;
    var crystalNumber;
    var totalVal = 0;

$(document).ready(function () {
    //READY TO PLAY
    console.log("ready!");

    $(this).attr('value', crystNumGenerator());

    $('#win').text(wins);
    $('#loss').text(losses);
    $('#total-value').text(totalVal);

    function numberGenerator() {
        genNumber = Math.floor(Math.random() * 102) + 19;
        $('#gen-number').text(genNumber);

    };

    function crystNumGenerator() {
        return Math.floor(Math.random() * 12) + 1;
        
    }

    $('.crystal').on('click', function () {
        // console.log($(this));
        totalVal = totalVal + 3;
        $('#total-value').text(totalVal);
        console.log('totalVal: ' + totalVal + ' and genNumber: ' + genNumber); 

    });

    


    numberGenerator();

    if (totalVal === genNumber) {
        // userWins();
        // resetGame();
        console.log('WON!');
    }
    else if (totalVal > genNumber) {
        // userLosses();
        // resetGame();
        console.log('LOST!');
    }

    



    //    // if clicked on generated number then will generate a new number
    // $('#gen-number').on('click', function(){
    //     numberGenerator();
    // });






});