const apiNyckel = 'b145baa6f3f75a96d9e6d88ac27a7d08';


function hamtaVader(stadId, elementId) {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${stadId}&units=metric&appid=${apiNyckel}`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            
            let temperatur = Math.round(data.main.temp) + "°C";
            let beskrivning = data.weather[0].description;

            
            document
                .getElementById(elementId)
                .querySelector('.temperatur').innerText = `Temperatur: ${temperatur}`;
            
            document
                .getElementById(elementId)
                .querySelector('.beskrivning').innerText = `Beskrivning: ${beskrivning}`;
        })
        .catch((error) => {
            
            document
                .getElementById(elementId)
                .querySelector('.temperatur').innerText = "något blev fel";
            
            console.error("Fel vid hämtning av väderdata:", error);
        });
}


hamtaVader('2673730', 'Stockholm-ruta');
hamtaVader('2711537', 'Goteborg-ruta');