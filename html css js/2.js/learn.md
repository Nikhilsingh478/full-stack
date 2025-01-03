// array of objects 

var arr = [
    {name: 'Nikhil', age:20},
    {name: 'Harsh', age:20}
]

console.log("name :",arr[0].name);
console.log("age :",arr[0].age);
console.log("name :",arr[1].name);
console.log("age :",arr[1].age);



// dom 

// selection       ✅
// changing html   ✅ 
// changing css    ✅
// event listeners ✅ 


// selection 

// document.querySelector();
// document.querySelectorAll();
// document.getElementById();
// document.getElementsByClassName();


// changing html 

var a = document.getElementById('name');
// a.innerHTML = "nvs";


a.addEventListener("click", function c(){
    a.innerText = "single click";
    a.style.color = 'lightblue';
    a.style.fontFamily = 'Impact';
})

a.addEventListener("dblclick", function b(){
    a.innerHTML = "<i>double click</i>";
    a.style.fontFamily = 'monospace';
    a.style.color = 'yellow';
})


// if we want to change the attribute of a tag 
element.attribute = new value

// adding something into the html






<!-- ===============some more imp concepts================== -->
