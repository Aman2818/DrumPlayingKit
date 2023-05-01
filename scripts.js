var numOfButtons = document.querySelectorAll("button").length;

for(var i=0; i < numOfButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
        // alert("I got clicked");
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();

        var buttonInnerHTML= this.innerHTML;
        playSound(buttonInnerHTML);
        animation(buttonInnerHTML);

        // switch(buttonInnerHTML){
        //     case "w" :
        //         var audio = new Audio('sounds/crash.mp3');
        //         audio.play();
        //         break;

        //     case "a" :
        //         var audio = new Audio('sounds/kick-bass.mp3');
        //         audio.play();
        //         break;
            
        //     case "s" :
        //         var audio = new Audio('sounds/snare.mp3');
        //         audio.play();
        //         break;
            
        //     case "d" :
        //         var audio = new Audio('sounds/tom-1.mp3');
        //         audio.play();
        //         break;

        //     case "j" :
        //         var audio = new Audio('sounds/tom-2.mp3');
        //         audio.play();
        //         break;
            
        //     case "k" :
        //         var audio = new Audio('sounds/tom-3.mp3');
        //         audio.play();
        //         break;
            
        //     case "l" :
        //         var audio = new Audio('sounds/tom-4.mp3');
        //         audio.play();
        //         break;
            
        //     default:
        //         console.log("Wrong Button Clicked");
        // }
    })  

    document.addEventListener("keydown", function(e){
        // alert("The key is pressed");
        // console.log(e);
        playSound(e.key);
        animation(e.key);
    })


    function playSound(event){
        switch(event){
            case "w" :
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;

            case "a" :
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            
            case "s" :
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            
            case "d" :
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;

            case "j" :
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            
            case "k" :
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            
            case "l" :
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            
            default:
                console.log("Wrong Button Clicked");
        }
    }
    function animation(whatclicked){
        var whatClicked=document.querySelector("."+whatclicked);
        whatClicked.classList.add("button-pressed");
        setTimeout(function(){
            whatClicked.classList.remove("button-pressed");
        },100);
    }
}