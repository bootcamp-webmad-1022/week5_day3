
document.querySelector('#countryName').onkeyup = e => {

    const countryName = e.target.value
    document.querySelector('#countryResult').innerText = 'Esperando respuesta de la API...'

    requestCountryInfo(countryName)
}


function requestCountryInfo(countryName) {

    axios
        .get(`https://restcountries.com/v2/name/${countryName}`)
        .then(response => showCountryInfo(response))
        .catch(err => console.log(err))
}


function showCountryInfo(response) {

    console.log('ESTE ES EL OBJETO DE AXIOS', response)

    const { population, capital, nativeName } = response.data[0]

    const text = `El país ${nativeName} tiene una población de ${population} habitantes y su capital es ${capital}`
    document.querySelector('#countryResult').innerText = text
}