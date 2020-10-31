alert("Hello, world!");

var value = null;
var timer = null;
function bigger(){
    //document.getElementById("ta").style.fontSize = "24pt"; //First exercise
    if(timer==null){
        timer = setInterval(function(){
            if(value==null){
                value = parseFloat(getComputedStyle(document.getElementById("ta")).fontSize);
                value *= 0.75;
            }
            console.log("size before change: "+value);
            value += 2;
            document.getElementById("ta").style.fontSize = value + "pt";
            console.log("New Size: "+document.getElementById("ta").style.fontSize);
        }, 500);
    }
    else{
        clearInterval(timer);
        timer = null;
    }
}

function bling(){
    if(document.getElementById("cb").checked===true){
        document.getElementById("ta").style.fontWeight = "bold";
        document.getElementById("ta").style.color = "#008800";
        document.getElementById("ta").style.textDecoration = "underline";
    }
    else{
        document.getElementById("ta").style.fontWeight = "normal";
        document.getElementById("ta").style.color = "#000000";
        document.getElementById("ta").style.textDecoration = "none";
    }
}

function malkovich(){
    let str = document.getElementById("ta").value;
    words = str.split(" ");
    console.log(words);
    for(let i=0; i<words.length; i++){
        if(words[i].length>=5) words[i] = "Malkovich";
    }
    str = "";
    for(let i=0; i<words.length; i++){
        str += words[i];
        if(i!=words.length-1) str += " ";
    }
    document.getElementById("ta").value = str;
}
