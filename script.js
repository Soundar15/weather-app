
const apikey = 'baccafcc1e1319a5c30d5db3d3c02ce0';
const api = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchbox = document.querySelector('.searchbox')
const searchbtn = document.querySelector('.btn')
const error = document.querySelector('.error')
const weathericon=document.querySelector('.weather-icon')
async function weather(city) {

    const response = await fetch(api + city + `&appid=${apikey}`)

    if (response.status == 404) {
        document.querySelector('.weather').style.display = 'none'
        document.querySelector('.error').style.display = 'block'

    }

    else {

        var data = await response.json()
console.log(data)
        const name = document.querySelector('.city')
        const humdity = document.querySelector('.humdity')
        const wind = document.querySelector('.wind')
        const temp = document.querySelector('.temp')

        temp.textContent = data.main.temp + '°c'
        name.textContent = data.name
        humdity.textContent = data.main.humidity + '%'
        wind.textContent = data.wind.speed + 'km/h'
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none'
if(data.weather[0].main=='Clouds'){
    weathericon.src='images/clouds.png'
}
else if(data.weather[0].main=='Clear'){
    weathericon.src='images/clear.png'
}else if(data.weather[0].main=='Drizzle'){
    weathericon.src='images/drizzle.png'
}else if(data.weather[0].main=='Mist'){
    weathericon.src='images/mist.png'
}else if(data.weather[0].main=='Rain'){
    weathericon.src='images/rain.png'
}
else if(data.weather[0].main=='Wind'){
    weathericon.src='images/wind.png'
}
    
}


searchbox.value=''
}

searchbtn.addEventListener('click', () => {
    
    if(
        searchbox.value
    ){    weather(searchbox.value)

    }

else{
    document.querySelector('.error').style.display = 'block'
    

    document.querySelector('.weather').style.display = 'none'

}
})


document.addEventListener('keypress', (e) => {
    
    if(e.key=='Enter'){
        if(
            searchbox.value
        ){    weather(searchbox.value)
    
        }
    
    else{
        document.querySelector('.error').style.display = 'block'
        
    
        document.querySelector('.weather').style.display = 'none'
    
    }
    }
})
