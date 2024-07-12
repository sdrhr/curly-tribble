const first = document.getElementById("first");
const input = document.getElementById("cityname");

const state  = document.getElementById("state");
const currenttime = document.getElementById("time");
const currenttemp = document.getElementById("temp");


async function getdata(cityname){
    const promise =await fetch (     
    `http://api.weatherapi.com/v1/current.json?key=d8587f98ca2b4499ae2105430242906&q=${cityname}&aqi=yes`
);
 return await promise.json();

    }


first.addEventListener('click', async()=>{
const value = input.value;
const result = await getdata(value);
state.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
currenttime.innerText = result.location.localtime;
currenttemp.innerText= result.current.temp_c;

});

 var typed = new Typed(".automatic",{
    strings:["location" ,"current time","temperature"],
    typeSpeed:100,
    looped: true
 })

