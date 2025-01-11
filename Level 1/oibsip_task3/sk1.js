document.getElementById("convertButton").addEventListener("click", () => {
    const tempInput = document.getElementById("temperatureInput").value;
    const unit = document.getElementById("unitSelect").value;
    const output = document.getElementById("output");

    if (isNaN(tempInput) || tempInput === "") {
        output.textContent = "Please enter a valid number!";
        return;
    }

    const temp = parseFloat(tempInput);
    let convertedTemp = "";
    let resultUnit = "";

    if (unit === "celsius") {
        convertedTemp = `${(temp * 9/5 + 32).toFixed(2)} °F, ${(temp + 273.15).toFixed(2)} K`;
        resultUnit = "Fahrenheit, Kelvin";
    } else if (unit === "fahrenheit") {
        convertedTemp = `${((temp - 32) * 5/9).toFixed(2)} °C, ${((temp - 32) * 5/9 + 273.15).toFixed(2)} K`;
        resultUnit = "Celsius, Kelvin";
    } else if (unit === "kelvin") {
        convertedTemp = `${(temp - 273.15).toFixed(2)} °C, ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
        resultUnit = "Celsius, Fahrenheit";
    }

    output.textContent = `${convertedTemp}`;
});
