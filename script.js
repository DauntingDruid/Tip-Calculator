//CUSTOM FUNCTION 

function calculateTip () {
    //store the data in inputs

    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    //Validation to check errors in inputs
    if(billAmount === "" || serviceQuality == 0){
        window.alert("please enter some values"); 
        return;//PREVENTS THE FUNCTION FROM CONTINUING
    }
    //to check if the input is empty or it is leass than equal to 1
    if( numPeople === ""  || numPeople <= 1){
        numPeople = 1;
    
        document.getElementById("each").style.display = "none";

    } else{ //if more than 1 person is dining it will show "each" / the amount required to be paid by each person
        document.getElementById("each").style.display = "block";
    }

    //TIP calculation
    var total = ( billAmount * serviceQuality ) / numPeople;
    total = Math.round(total * 1000) / 1000;
    //display of tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}




//Hide the tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


//clicking the button calls our custom function ok?

document.getElementById("calculate").onclick = function () {calculateTip ();}

