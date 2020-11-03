window.onload = function(){
    var timer = null;
    var timing = 250;
    var frame = null;

    //START BUTTON
    document.getElementById("start").onclick = function(){
        starting();
        frame = document.getElementById("text-area").value;
        setting(frame.split("=====\n"), 0);
    }

    function starting(){
        document.getElementById("start").disabled = true;
        document.getElementById("animation").disabled = true;
        document.getElementById("stop").disabled = false;
    }

    function setting(video, idx){
        timer = setInterval(function(){
            document.getElementById("text-area").value = video[idx];
            idx++;
            if(idx===video.length) idx = 0;
        }, timing);
    }
    
    //STOP BUTTON
    document.getElementById("stop").onclick = function(){
        stopping();
        document.getElementById("text-area").value = frame;
    }

    function stopping(){
        document.getElementById("start").disabled = false;
        document.getElementById("animation").disabled = false;
        document.getElementById("stop").disabled = true;
        clearInterval(timer);
        timer = null;
    }
    
    //ANIMATION SELECTED
    document.getElementById("animation").onchange = function(){
        console.log(document.getElementById("animation").value);
        if(timer!=null){
            stopping();
        }
        document.getElementById("text-area").value = ANIMATIONS[document.getElementById("animation").value];
    }
    
    //SIZE SELECTED
    document.getElementById("fontsize").onchange = function(){
        document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
    }
    
    //SPEED CHECKBOX
    document.getElementById("turbo").onchange = function(){
        document.getElementById("turbo").checked == true ? timing = 50 : timing = 250;
    }
}