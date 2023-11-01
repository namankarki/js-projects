function Calc(){
    let a=document.getElementById('height').value;
    let b=document.getElementById('weight').value;
    let cm=a*0.01;
    let bmi=(b/(cm*cm));

 
    // console.log(bmi);

    document.getElementById('display').innerHTML=bmi.toFixed(2)+"kg/m2";

  

}

function Reset(){
    document.getElementById('height').value="";
    document.getElementById('weight').value="";
    document.getElementById('display').innerHTML="";
}
