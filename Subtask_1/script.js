let apiKey = "577b3bd2eec54e5a84a1ae825e746783";
let photosApiKey = "";


let search = document.getElementById('search').onclick = writeDownCity;

async function writeDownCity() {

    let city = document.querySelector('.entryField').value;
    try {
        let weather = await fetch(encodeURI(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`
        ));
        let data = await weather.json();
        document.querySelector('.current__city').textContent = data.name;
        document.querySelector('.current__description').textContent = data.weather[0]['description'];
        document.querySelector('.current__temperature').innerHTML = Math.round(data.main.temp) + '&deg;';
        let photoQ = data.weather[0]['main'];
        try {
            let photo = await fetch(encodeURI(
                `https://api.unsplash.com/photos/random?client_id=${photosApiKey}&query=${photoQ} weather`
            ));
            let photoData = await photo.json();
            document.querySelector('#img').setAttribute('src', photoData.urls.small);
        } catch { }
    } catch {
        alert("Возникла ошибка с загрузкой погоды!");
    }
}
