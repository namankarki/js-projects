function countdown(){
    let timer=new Date("Nov 11,2023 00:00:00").getTime();
    let x= setInterval(function() {
        let now= new Date().getTime();
        let timeleft =timer-now;
       
        let days=Math.floor(timeleft/(1000*60*60*24));
        let hours= Math.floor((timeleft%(1000*60*60*24))/(1000*60*60));
        let minutes=Math.floor((timeleft % (1000*60*60)) /(1000*60));
        let seconds=Math.floor ((timeleft % (1000*60) )/1000);
    document.getElementById('Timer').innerHTML=days+"days"+":"+hours+"hours"+":"+minutes+"minutes" + ":" +seconds+"seconds" ;
      
    if(timeleft<0){
        clearInterval(timeleft);
        document.getElementById('Timer').innerHTML="Its your birthday";
    }},1000);

   
}
    
countdown();