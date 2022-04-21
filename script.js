function compute(){

    //this function compute the interest value given an amount an interest rate and the number of years.
    var principal = document.getElementById("principal");// Get the reference of the amount input 
    var rate = document.getElementById("rate").value;// Get the interest rate value 
    var years = document.getElementById("years").value;// Get number of years
    var interest = principal.value*years*(rate/100);// how the interest is calculated
    var yearToCome = new Date().getFullYear() + parseInt(years);// Get the future year

    if(principal.value =="" || principal.value < 0){
        // When the amount value is wrong
        alert("Enter a valid amount !!!");
        document.getElementById("result").innerHTML = "";
        principal.focus();
    }
    else {
        // When the amount value is ok
        var text = "If you deposit "+ principal.value +", at an interest rate of "+ rate +"%. You will receive an amount of "+ interest +" in the year "+ yearToCome+".";
        document.getElementById("result").innerHTML=text;
    }
    
}

function updateRate(){
    //this function updates the interest rate value inside the span tag 
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval+"%";
}
        