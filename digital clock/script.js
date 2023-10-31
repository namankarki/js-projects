function showtime(){
    let time= new Date();
    let hour= time.getHours();
    let min = time.getMinutes();
    let sec= time.getSeconds();
    am_pm="AM";

    if(hour==0){
        hour=12;
    }
    else if(hour>12){
        hour-=12;
        am_pm="PM";
    }

    hour=(hour<10)?"0"+hour:hour;
    min=(min<10)?"0"+min:min;
    sec=(sec<10)?"0"+sec:sec;

    let newtime= hour+":" +min+ ":" +sec + "" +am_pm;

    document.getElementById("clock").innerHTML=newtime;

    setInterval(showtime, 1000);


}

showtime();

