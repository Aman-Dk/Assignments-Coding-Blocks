const city = document.getElementById('city');
// const search = document.getElementById('search');
const weather = document.getElementById('Weather');
// $('#search').click(function(e){
//     fetch('http://api.openweathermap.org/data/2.5/weather?q=city&appid=2bcbbe2e8dd5015ea8386934becec6b7')
//     .then(data => {
//         console.log(data);
//         return data.json();
//     })
//     .then(parsedData => {
//         console.log(parsedData.weather);
//     })
    // .catch(err => {
    //     console.log("Error");
    //     console.log(err);
    // })
// } )
// search.click(function(e){
//     window.alert("as");
// })
// $('#search').click(function (e) {
//     window.alert("as");
//     })
function createli(name){
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

const getWeatherData = async(searchText)=>{
    //remove li's for next search
    $('ul li').remove();
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ searchText + '&units=metric&appid=2bcbbe2e8dd5015ea8386934becec6b7';
    const response = await fetch(url);
    const data = await response.json(); 
    console.log(data);
    const li = document.createElement('li');
    // li.innerText=searchText + ',' + data.sys.country;
    
    weather.appendChild(createli(searchText + ',' + data.sys.country));
    weather.appendChild(createli(new Date().toDateString()));
    weather.appendChild(createli(data.main.temp + '°C'));
    weather.appendChild(createli(data.weather[0].main));
    
    // weather.appendChild(createli(searchText));
    // weather.appendChild(createli('1'));
    // weather.appendChild(createli('2'));
    // weather.appendChild(createli('3'));

    // weather.append('<li>'+ data.dt + '</li>');
    // response.then(data=>{
    //     console.log(data);
    //     return data.json();
    // })
    // .then(parsedData=>{
    //     console.log(parsedData.weather);
    // })
}
$('input[type="text"]').keypress((e) => {
    if(clear==1){
        weather.remove();
        clear = 0;
    }
    if (e.which == 13) {
        e.preventDefault();
        const searchText=city.value;
        getWeatherData(searchText);
        city.value="";
        var clear =1;
        }
        
})

