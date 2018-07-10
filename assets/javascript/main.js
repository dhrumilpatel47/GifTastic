var animalsArray = ["Dog", "Cat", "Lion", "Tigar", "Fox","Elephant"];

$(document).ready(function() {
    for (var i = 0; i < animalsArray.length; i++) {
        $("#animalButton").append("<button type='button' onclick='searchGif(\"" + animalsArray[i] + "\")' class='btn btn-primary' value=' " + animalsArray[i] + "'> " + animalsArray[i] + " </button>");
    }
});

function animalButtonClicked() {
    var userInput = $('#animal-input').val();
    searchGif(userInput);
}

function submitButtonClicked() {
    var userInput = $('#animal-input').val();

    if (userInput) {
        $('#animal-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}


function searchGif(gifAnimal) {
    $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + gifAnimal + "&api_key=dc6zaTOxFJmzC&limit=10",
            type: 'GET',
        })
        .done(function(response) {  console.log(response)
            displayGif(response);
        })
}
