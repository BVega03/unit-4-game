$(document).ready(function () {

function startGame() {


    var computerRandom = Math.floor(Math.random() * (120 - 19)) + 19;
    var button1 = Math.floor(Math.random() * (13 - 1)) + 1;
    var button2 = Math.floor(Math.random() * (13 - 1)) + 1;
    var button3 = Math.floor(Math.random() * (13 - 1)) + 1;
    var button4 = Math.floor(Math.random() * (13 - 1)) + 1;
    var userTotal = 0;
    var losses = 0;
    var wins = 0;

    $("#button-1").attr("crystalValue", button1);
    $("#button-2").attr("crystalValue", button2);
    $("#button-3").attr("crystalValue", button3);
    $("#button-4").attr("crystalValue", button4);
    $(".random-number").text(computerRandom);
    


    // var lockGame = false;

    console.log(computerRandom);



    $(".button").on("click", function () {
        // userTotal = userTotal + +button1;
        // console.log($(this));
        console.log("Computer Pick: " + computerRandom);
        // console.log("button 1 = " + button1);
        // console.log("userTotal =  " + userTotal);

        var crystalValue = $(this).attr("crystalValue");
        console.log("crystalValue" + crystalValue);

        userTotal = userTotal + parseInt(crystalValue);
        console.log("userTotal = " + userTotal);

        if (userTotal > computerRandom) {
            losses++;
            $("#result").text("Busted!");

            startGame();

        } else if (userTotal === computerRandom) {
            wins++;

            $("#result").text("Winner!");

            startGame();

        } else {

            $("#result").text("Keep Guessing!");
        } 
        
        $(".userTotal").text(userTotal);
    });



    // <!-- Couldn't get these to run  -->

    // document.getElementById("#button-1").value = "userTotal";

    // document.getElementById("#button-2").value = "userTotal";

    // document.getElementById("#button-3").value = "userTotal";

    // document.getElementById("#button-4").value = "userTotal";

    // document.getElementById("userTotal").value = "userTotal";
    // ------------------------------------------------------------------------------------------------------------
    // document.getElementById("#button-1").addEventListener("click", myFunction);

    // function myFunction() {
    //   document.getElementById("userTotal").innerHTML = "userTotal";
    // };

    // document.getElementById("#button-2").addEventListener("click", myFunction);

    // function myFunction() {
    //   document.getElementById("userTotal").innerHTML = "userTotal";
    // };

    // document.getElementById("#button-3").addEventListener("click", myFunction);

    // function myFunction() {
    //   document.getElementById("userTotal").innerHTML = "userTotal";
    // };

    // document.getElementById("#button-4").addEventListener("click", myFunction);

    // function myFunction() {
    //   document.getElementById("userTotal").innerHTML = "userTotal";
    // };

    // Could not figure out the correct If/else statement to get the right logic.

}
startGame();
});