
let battery_level = document.getElementById("status");
let charging_icon = document.getElementById("charging");
let battery_txt = document.getElementById("battery_txt");
let timer = document.getElementById("timer");
// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;


setInterval(()=>{
    navigator.getBattery().then(battery =>{
        // console.log("Battery Level:", battery.level * 100 + '%');
        let level = battery.level * 100;
        battery_level.style.width =  level + '%';
        battery_txt.innerHTML = level.toFixed(0) + "%";
        if(battery.charging){
            if(level<=19){
                battery_level.style.backgroundColor = "red";
            }else{
                battery_level.style.backgroundColor = "rgb(33, 182, 33)";
            }
            charging_icon.style.display = "block";
                battery_level.style.width = level+ "%";
        }else{
            charging_icon.style.display = "none";
            battery_level.style.width = level + "%";
            battery_level.style.backgroundColor = "white";
        }
        let d = new Date();
        let period = "";
        if(d.getHours() > 12){
            period = "PM";
        }else{
            period = "AM";
        }
        timer.innerHTML = `${d.getHours()>12?d.getHours()-12:d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${period}`;
    })
},1000)