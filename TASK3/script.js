function convert() {
    var temperatureInput = document.getElementById("temperature").value.trim();
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    if (!isNaN(temperatureInput) && temperatureInput !== "") {
        var temperature = parseFloat(temperatureInput);

        var convertedTemperature = convertTemperature(temperature, fromUnit, toUnit);
        document.getElementById("result").innerHTML = `
            ${convertedTemperature.toFixed(2)} ${toUnit}.
        `;
    } else {
        alert("Please enter a valid temperature.");
    }
}

function convertTemperature(temperature, fromUnit, toUnit) {
    switch (fromUnit) {
        case "celsius":
            return convertFromCelsius(temperature, toUnit);
        case "fahrenheit":
            return convertFromFahrenheit(temperature, toUnit);
        case "kelvin":
            return convertFromKelvin(temperature, toUnit);
        default:
            return 0;
    }
}

function convertFromCelsius(temperature, toUnit) {
    switch (toUnit) {
        case "celsius":
            return temperature;
        case "fahrenheit":
            return (temperature * 9/5) + 32;
        case "kelvin":
            return temperature + 273.15;
        default:
            return 0;
    }
}

function convertFromFahrenheit(temperature, toUnit) {
    switch (toUnit) {
        case "celsius":
            return (temperature - 32) * 5/9;
        case "fahrenheit":
            return temperature;
        case "kelvin":
            return (temperature - 32) * 5/9 + 273.15;
        default:
            return 0;
    }
}

function convertFromKelvin(temperature, toUnit) {
    switch (toUnit) {
        case "celsius":
            return temperature - 273.15;
        case "fahrenheit":
            return (temperature - 273.15) * 9/5 + 32;
        case "kelvin":
            return temperature;
        default:
            return 0;
    }
}
