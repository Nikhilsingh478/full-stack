// Q1. create an HTML page with a button when the button is clicked change 
// the text of paragraph Element

// var btn = document.querySelector('#btn');
// var par = document.querySelector('p');

// btn.addEventListener('click', function abcd(){
//     par.textContent = 'paragraph changed';
// });


// ======================================================================================================
// Q2. create a page with two images and a button when the button is clicked 
// swap the source attributes of two images 


// var btn = document.querySelector('#btn');
// var img1 = document.querySelector('#img1');
// var img2 = document.querySelector('#img2');

// btn.addEventListener('click',function abcs(){
//     var temp = img1.src;
//     img1.src = img2.src;
//     img2.src = temp;
// })





// ======================================================================================================
// Q3. create a form with input fields and a submit button use js to validate
//  the form and display an error message if the input is invalid


// METHOD 1 

// var form = document.querySelector("form");
// var input = document.querySelector("#text");
// var button = document.querySelector("#btn");
// var h5 = document.querySelector("#error");


// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     if(input.value === ""){
//         h5.textContent = "some fields are empty!";
//         h5.style.color = "red";
//     }else if(input.value !== ""){
//         h5.textContent = "form submitted!";
//         h5.style.color = "green";
//     }
// })



// METHOD 2 

// var form = document.querySelector("form");
// var inputs = document.querySelectorAll("input[type='text']");
// var btn = document.querySelector("#btn");
// var h4 = document.querySelector("#error");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     inputs.forEach(function (input) {
//         if (input.value === "") {
//             h4.textContent = "some fields are empty!";
//             h4.style.color = "red";
//         }
//         else{
//             h4.textContent = "form submitted!";
//             h4.style.color = "green";
//         }
//     });
// });




// practice METHOD 3 using for loop

// var form = document.querySelector("form");
// var inputs = document.querySelectorAll("input[type='text']");
// var button = document.querySelector("#btn");
// var h4 = document.querySelector("#error");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     for(var i = 0; i<inputs.length ;i++){
//         if(inputs[i].value.trim() === ""){
//             h4.textContent = "some fields are empty!";
//             h4.style.color = "red";
//             break;
//         }
//         else{
//             h4.textContent = "form submitted!";
//             h4.style.color = "green";
//         }
//     }
// })







// ======================================================================================================
// Q4. create an unordered list .allow users to add and remove list items dynamically using buttons 

// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var ul = document.querySelector("ul");
// var input = document.querySelector("#input");


// add.addEventListener("click",function(){
//     if(input.value.trim() === ''){}
//     else{
//         var li = document.createElement("li");
//         li.textContent = input.value;   
//         ul.appendChild(li);
//     }
// }) 

// remove.addEventListener('click',function(){
//     var li = document.querySelector("li:last-child");
//     ul.removeChild(li);
// })
















// ======================================================================================================
//Q5. build a countdown timer that starts when a button is clicked
// and updates the display in real time 



// var start = document.querySelector('.btn');
// var stop = document.querySelector('.stop');
// var span = document.querySelector('span');
// var interval;

// start.addEventListener('click',function(){
//     var count = 0;
//     interval = setInterval(function(){
//         span.textContent = count;
//         count++;
//     },1000)
// })

// stop.addEventListener('click',function(){
//     clearInterval(interval);
// })











// ======================================================================================================
// Q7. display a progress bar that updates in real time, showing the progress 
// of a TextTrackList, download, or form submission


// var downloadCapsule = document.querySelector('#downloadcapsule');
// var progress = document.querySelector('#progress');
// var interval;
// var count = 0;
// var h4 = document.querySelector('h4');

// interval = setInterval(function () {
//     if (count === 100) {
//         clearInterval(interval);
//         h4.style.opacity = 1;
//         h4.style.fontFamily = 'Impact';
//         h4.style.fontWeight = '300';
//     }
//     count++;
//     progress.style.width = count + '%';
// }, 50)









// ======================================================================================================
// Q8. create a serach bar that displays live search results as users type,
// updating the results without requiring a full page reload 

// var input = document.querySelector('input');
// var data = [
//     { name: "shraddha", src: "https://i.pinimg.com/736x/8a/74/42/8a744228d440dd38d29d66a1399b1714.jpg" },
//     { name: "warina", src: "https://i.pinimg.com/736x/4b/28/51/4b2851e71d5433066d7c421b54e5d284.jpg" },
//     { name: "tanya", src: "https://i.pinimg.com/736x/36/bd/d7/36bdd73526de795c5cc4e5e84b470b2f.jpg" },
//     { name: "deepika", src: "https://i.pinimg.com/736x/72/15/50/7215505d0b071145703ccf4135be0d07.jpg" }
// ]

// var person = '';

// data.forEach(function (elem) {
//     person += `<div class="person">
//                     <img src="${elem.src}" alt="" class="img">
//                     <h4>${elem.name}</h4>
//                 </div>`
// })


// document.querySelector(".people").innerHTML = person;


// input.addEventListener('input',function(){
//     var matching = data.filter(function(e){
//         return e.name.startsWith(input.value);
//     });
//     console.log(matching);

//     var newUsers = '';
//     matching.forEach(function (elem) {
//         newUsers += `<div class="person">
//                         <img src="${elem.src}" alt="" class="img">
//                         <h4>${elem.name}</h4>
//                     </div>`
//     })
    
    
//     document.querySelector(".people").innerHTML = newUsers;
// })










// ======================================================================================================
//Q9. build a character counter for a text area or input field, which updates in real
// time user types and enforces a character limit 


// var input = document.querySelector('textarea');
// var span = document.querySelector('span');

// var count = 0;
// input.addEventListener('input',function(){
//     count = input.value.length;
//     span.textContent = count;
// })






// ======================================================================================================
// Q10. making a progress bar dependent on the scroll of page 

function updateProgressbar(){
    const scrollTop = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const percentage = (scrollTop / totalHeight) * 100;
    document.querySelector('#progress').style.width = percentage + '%';
}

window.addEventListener('scroll',updateProgressbar);