var button = document.querySelector("#searchBtn");
var input = doucment.querySelector("#search");
var form = document.querySelector("#list");
var cityInput = document.querySelector("#city");
var cityList = document.querySelector("#city-list")

var city = ["New York", "Los Angeles", "Tokyo", "San Francisco", "Las Vegas"];

var d = new Date;
setInterval(function() {
    document.getElementById("date").innerHTML = new Date()}, 1000);



function displayCity() {
    var city = $("#city-list").val()
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d2fc1a7ecf30ed799284cd252c70d7ad;"
    

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var city = $("<div class='city'>");
});
}

function renderButtons() {
    $(".searchBtn").empty();

    for (var i = 0; i < city.length; i++) {
        var fa = $("<button>");

        fa.addClass("city-btn");

        fa.attr("data-name", city[i]);
        fa.text(city[i]);
        $(".searchBtn").append(fa);
    }
}

$("#add-city").on("click", function(event) {
    event.preventDefault();
    var city = $("city-input").val();

    city.push(city);

    renderButton();
});

$(document).on("click", "city-btn", displayCityInfo);

renderButtons();
