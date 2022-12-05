function clock () {

    let  date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let period = "AM";
    if (hours === 0) {
      hours = 12;
    } else if (hours >= 12) {
      hours -= 12;
      period = "PM";
    }
  
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
  
    let clockHours = `${hours}`;
    let clockMinutes = `${minutes}`;
    let clockSeconds = `${seconds}`;
    let clockPeriod = `${period}`;
  
    document.getElementById("hour").innerHTML = clockHours;
    document.getElementById("minutes").innerHTML = clockMinutes;
    document.getElementById("seconds").innerHTML = clockSeconds;
    document.getElementById("ampm").innerHTML = clockPeriod;


    let morningMessage = "GRAB SOME HEALTHY BREAKFAST!!!";
    let afternoonMessage = "LET'S HAVE SOME LUNCH!!";
    let eveningMessage = "STOP YAWNING, GET SOME TEA..!";
    let nightMessage = "GO TO SLEEP AND CLOSE YOUR EYES.";

    let morningText = "GOOD MORNING!! WAKE UP !!";
    let afternoonText = "GOOD AFTERNOON !! TAKE BREAK";
    let eveningText = "GOOD EVENING !!";
    let nightText = "GOOD NIGHT !!";

    if(period === "AM" && 1 <= hours && hours <= 12){
    document.getElementById("greeting--message").innerHTML = morningMessage;
    document.getElementById("greeting--text").innerHTML = morningText;
    
    } else if (period === "PM"){
    if (period === "PM" && (hours === 12 || (1 <= hours && hours <= 3))) {
    document.getElementById("greeting--message").innerHTML = afternoonMessage;
    document.getElementById("greeting--text").innerHTML = afternoonText;
    image.src = "./pngtree-people-eating-food-at-each-meal-with-health-benefits-png-image_4663046.jpeg";
    } else if (period === "PM" && 4 <= hours && hours <= 8){
    document.getElementById("greeting--message").innerHTML = eveningMessage;
    document.getElementById("greeting--text").innerHTML = eveningText;
    image.src = "./two-male-colleagues-chatting-during-coffee-break-vector-21008291.jpeg";
    } else {
    document.getElementById("greeting--message").innerHTML = nightMessage;
    document.getElementById("greeting--text").innerHTML = nightText;
    image.src = "./insomnia-concept-illustration_114360-3566.webp";
    }
  }
};
setInterval(clock, 10);

const ShowAlarmTime=()=>{
  let wt=document.getElementById('schedule-wakeup').value;
  let lt=document.getElementById('schedule-lunchtime').value;
  let nt=document.getElementById('schedule-naptime').value;
  let nnt=document.getElementById('schedule-sleep').value;
  let image=document.getElementById("photo");
  if(wt==="Select Time"){
    document.getElementById('setWT').innerText="---------------";
  }
  else{
    document.getElementById('setWT').innerText=wt;
    image.src = "./man-waking-up-bed-stretching-his-arms-concept-illustration_199628-70.webp";
  }
  if(lt==="Select Time"){
    document.getElementById('setLT').innerText="---------------";
  }
  else{
    document.getElementById('setLT').innerText=lt;
    image.src = "./pngtree-people-eating-food-at-each-meal-with-health-benefits-png-image_4663046.jpeg";
  }
  if(nt==="Select Time"){
    document.getElementById('setNT').innerText="---------------";
  }
  else{
    document.getElementById('setNT').innerText=nt;
    image.src = "./two-male-colleagues-chatting-during-coffee-break-vector-21008291.jpeg";
  }
  if(nnt==="Select Time"){
    document.getElementById('setNi8T').innerText="---------------";
  }
  else{
    document.getElementById('setNi8T').innerText=nnt;
    image.src = "./insomnia-concept-illustration_114360-3566.webp";
  }
}
let btn=document.getElementById('setAlarm');
btn.addEventListener("click", ShowAlarmTime , );