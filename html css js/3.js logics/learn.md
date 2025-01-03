<!-- forEach
  -can't break out through it
  -it is not exactly a loop
map
  - jabhi hame lage ki hame ek array se dusra array banana hai
   conditions :- naye array me pehle wala array jitne hi elements
   hai tab ham map use kar sakte hai  -->

var names = ['nikhil','harsh'];
var newArr = names.map(function(val){
return val + " ji";
})

<!-- filter
  - filter me naye array me jaruri nai hai ki utne hi elements aaye jitne pichle array me the
    kam bhi ho sakte hai
  - jab return true hoga tab hi jo value return hoga false hua to nai hoga  -->

var moreNames = [
'alice', 'Bob', 'Charlie', 'David', 'Eve',
'Frank', 'Grace', 'ana', 'ava', 'Jack',
'Kathy', 'Leo', 'Mona', 'Nina', 'Oscar',
'Paul', 'Quincy', 'Rachel', 'Steve', 'Tina'
];

var newArr1 = moreNames.filter(function(val){
if(val.startsWith('a')){
return true;
}
})

<!-- destructuring
  -jab koi detailed object ho hamare pass aur hame wo object me kisi object ki property
   access karni ho tab ham destructuring ka use karte hai 
  - agar koi normal property ko access karna hai to {} use karna aur agar array hoga
   to [] use karna hai 
  - aur agar kisi array me koi index ka element choddna ho to [_,_] use karna hai-->

var user = {
name: 'John Doe',
age: 30,
address: {
street: '123 Main St',
city: 'Anytown',
state: 'CA',
zip: '12345'
},
hobbies: ['reading', 'traveling', 'swimming']
};

let [first, second, third] = user.hobbies;
console.log(first,second,third);

let {city} = user.address;
console.log(city);






<!-- spread and rest operator 

  -jab ham bina directly koi array ko dusre array ko copy karte hai to wo copy nai hota
   hai refer hota hai 
  - agar hame copy karna hai tab ham ... operator use karte hai (spread)
  - jab koi function banate hai tab hame parameters chahiye hote hai tab ham rest operator use karte hai -->

  <!-- // spread and rest operator  -->

<!-- // use of rest operator in arrays -->
const nameOfPeople = ['nikhil', 'harsh', 'sahil', 'vedant'];

const newArr2 = [...nameOfPeople]; 

<!-- // use of rest operator in objects  -->
const obj = {
    name:'john',
    age: 20,
}

const newObj = {...obj};
<!-- //use of rest operator in functions  -->
function sum(...chacha){
    console.log(chacha);      //sum ke params ek array banke chacha me store hojayenge 
}

sum(1,2,3,4,5,5,6,7)




