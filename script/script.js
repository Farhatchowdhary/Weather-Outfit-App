const weatherHeader = document.getElementById("weather-outfit");
const weatherSuggestions = document.getElementById("suggestions-Outfit");
const weatherDetails = document.getElementById("weather__details");
const cityInput = document.getElementById("city_info");
const inputField = document.querySelector("#city_input");
const checkButton = document.querySelector("#check_btn");

checkButton.addEventListener("click", () => {
    const city = inputField.value.trim();
    console.log("City entered:", city);

    if(!city) {
        alert("Please enter a city name!");
        return;
    }

    console.log("City entered:", city);

 const weatherData = {
        London: { temp: 12, condition: "Cloudy" },
        Paris: { temp: 18, condition: "Sunny" },
        Tokyo: { temp: 25, condition: "Clear" },
        Delhi: { temp: 30, condition: "Hot" },
        "New York": { temp: 10, condition: "Rainy" },
    };

    const data = weatherData[city] || {temp: 22, condition: "Partly Cloudy"};
    const temperature = data.temp;
    const condition = data.condition;
    let clothes;



if(temperature <= 22) {
    console.log("Today's weather is cold");
    clothes = "Jacket &Jeans";
}  else {
    console.log("Today's weather is hot");
    clothes = "T-shirt & Shorts";
}
console.log(`Weather in ${city}: ${temperature}°C`)
weatherDetails.textContent = `🌦️ Weather: ${temperature}°C`;
weatherSuggestions.textContent = `👕 suggested Outfit: ${clothes}`;
});
