const apiNyckel = 'b145baa6f3f75a96d9e6d88ac27a7d08';


function hamtaVader(stadId, elementId, stadNamn) {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${stadId}&units=metric&appid=${apiNyckel}&lang=sv`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            
            let temperatur = Math.round(data.main.temp) + "°C";
            let temperaturF = Math.round((data.main.temp * 9/5) + 32) + "°F";
            let beskrivning = data.weather[0].description;

            document
            .getElementById(elementId)
            .querySelector('h3').innerText = stadNamn;

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


document.getElementById('vaderJamforelse').addEventListener('click', () => {
    
    const sverigeStadId = document.getElementById('sverigeStad').value;
    const rwandaStadId = document.getElementById('rwandaStad').value;

    const sverigeStadNamn = document.getElementById('sverigeStad').selectedOptions[0].text;
    const rwandaStadNamn = document.getElementById('rwandaStad').selectedOptions[0].text;
    
    hamtaVader(sverigeStadId, 'sverigeVader', sverigeStadNamn);
    hamtaVader(rwandaStadId, 'rwandaVader', rwandaStadNamn);
});
