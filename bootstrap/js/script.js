
response("tenkasi")
let main_img=document.querySelector(".main-img")
let search_btn=document.querySelector(".search")

search_btn.addEventListener("click",(e)=>{
  e.preventDefault()
  let place=document.querySelector(".location")
  if(place.value==""){
    alert("Please Enter Valid Place")
  }
  else{
    response(place.value)
  }
})
const d = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



// --------------------------------data fetching------------------------------------- 


function response(city){
  
  let apikey="c94afd9f90bda3adc26cac08109f742c"
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    .then((res)=>res.json())
    .then((data)=>{
      let vid;
      console.log(data)
      let weathercondition=data.weather[0].main;
      let weatherdesc=data.weather[0].description;
      if(weathercondition=="Clear"){
        vid="./assert/clearsky.svg"
      }
      else if(weathercondition=="Clouds"){
        if(weatherdesc=="scattered clouds"){
          vid=""
        }
        else if(weatherdesc=="overcast clouds"){
         vid="./assert/overcastcloud.svg"
        }
        else{
         vid="./assert/fewclouds.svg"
        }
       }
       else if(weathercondition=="Rain"){
        if(weatherdesc=="light rain"){
          vid="./assert/lightrain.svg"
        }
        else{
          vid="./assert/heavyrain.svg"
        }
       }
       else if(weathercondition=="Snow"){
        vid="./assert/snowflake.svg"
       }
       else{
        vid="./assert/wind.svg"
       }
       main_img.setAttribute("src",vid)
       console.log(city)
       document.querySelector(".showlocation").innerHTML=" "+data.name
       document.querySelector(".temp").innerHTML=data.main.temp
       document.querySelector(".humidity").innerHTML=data.main.humidity
       document.querySelector(".pressure").innerHTML=data.main.pressure
       document.querySelector(".windspeed").innerHTML=data.wind.speed
       document.querySelector(".day").innerHTML=" "+weekday[d.getDay()]
  })
}