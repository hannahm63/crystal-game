$(document).ready(function () {

    // VARIABLES
    // ===============

    let score = 0;
    let wins = 0;
    let losses = 0;
    let targetNum;


    // FUNCTIONS
    // ===============

    function generateTargetNum() {

        // Random target number is chosen between 21 and 120
        targetNum = Math.floor(Math.random() * (121 - 21) + 21);

        // targetNum span used to display target number
        $("#targetNum").text(targetNum);
    };

    function gameReset() {

        // random target number generated
        generateTargetNum();

        // new crystals generated with new random values
        crystalValueGenerator();

        // score reset to 0
        score = 0;
        $("#crystalsCollected").text(score);
    };

    function crystalValueGenerator() {

        // four crystals displayed with random value attribute between 1 and 13
        // generate random value
        $("#crystal1").attr("value", Math.floor(Math.random() * (14 - 1) + 1));
        $("#crystal2").attr("value", Math.floor(Math.random() * (14 - 1) + 1));
        $("#crystal3").attr("value", Math.floor(Math.random() * (14 - 1) + 1));
        $("#crystal4").attr("value", Math.floor(Math.random() * (14 - 1) + 1));
    };


    // GAMEPLAY
    // ===============

    generateTargetNum();

    crystalValueGenerator();

    $("#crystalsCollected").text(score);

    $(".crystal").on("click", function (){
        console.log(this.getAttribute("value"));
        let crystalValue = parseInt(this.getAttribute("value"));
        
        // when clicked, value of crystal is added to score
        score = score + crystalValue;
        $("#crystalsCollected").text(score);
        
        
        // if score === target number then wins increase and game resets
        if (score === targetNum) {
            wins++;
            $("#wins").text(wins);
            gameReset();
        }
        
        // if score > target number then losses increases and game resets
        if (score > targetNum) {
            losses++;
            $("#losses").text(losses);
            gameReset();
        }
    });

    // on win/lose, reset game

});
