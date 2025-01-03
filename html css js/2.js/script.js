var bulb = document.querySelector("#bulb");
var btn = document.querySelector(".btn");

// var a = 1;

// btn.addEventListener("click", function abcd() {
//     if (a % 2 != 0) {
//         bulb.style.backgroundColor = "yellow";
//         a++;
//     }
//     else if(a % 2 == 0){
//         bulb.style.backgroundColor = "white";
//         a++;
//     }
// })


var isTrue = true;

btn.addEventListener("click",function(){
    if(isTrue == true){
        bulb.style.backgroundColor = "yellow";
        isTrue = false;
    }
    else if(isTrue == false){
        bulb.style.backgroundColor = "white";
        isTrue = true;
    }
})




