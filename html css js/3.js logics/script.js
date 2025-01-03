// // map example 

// var names = ['nikhil','harsh'];
// var newArr = names.map(function(val){
//     return val + " ji";
// })    






// filter example 
// var moreNames = [
//     'alice', 'Bob', 'Charlie', 'David', 'Eve', 
//     'Frank', 'Grace', 'ana', 'ava', 'Jack', 
//     'Kathy', 'Leo', 'Mona', 'Nina', 'Oscar', 
//     'Paul', 'Quincy', 'Rachel', 'Steve', 'Tina'
// ];

// var newArr1 = moreNames.filter(function(val){
//     if(val.startsWith('B')){
//         return true;
//     }
// })

// console.log(newArr1);







// destructuring

// var user = {
//     name: 'John Doe',
//     age: 30,
//     address: {
//         street: '123 Main St',
//         city: 'Anytown',
//         state: 'CA',
//         zip: '12345'
//     },
//     hobbies: ['reading', 'traveling', 'swimming']
// };

// let [first, second, third] = user.hobbies;

// console.log(first,second,third);

// let {city} = user.address;

// console.log(city);




// // spread and rest operator 

// // use of rest operator in arrays
// const nameOfPeople = ['nikhil', 'harsh', 'sahil', 'vedant'];

// const newArr2 = [...nameOfPeople]; 

// // use of rest operator in objects 
// const obj = {
//     name:'john',
//     age: 20,
// }

// const newObj = {...obj};
// //use of rest operator in functions 
// function sum(...chacha){
//     console.log(chacha);      //sum ke params ek array banke chacha me store hojayenge 
// }

// sum(1,2,3,4,5,5,6,7)























// questions 

// -----------------------------------------------------------------------------------------
//Q1. merging two arrays of data fetched from separate API's into a single list  



// const names = ['nikhil', 'harsh', 'sahil', 'vedant'];
// const lastNames = ['sharma', 'gupta', 'jain', 'shah'];

// const fullName = [...names, ...lastNames];
// console.log(fullName);


// -----------------------------------------------------------------------------------------
//Q2. filtering an array of objects to display items based on a search query 
// ex :- filtering products by type

// const products = [
//     { id: 1, name: 'Laptop', type: 'Electronics' },
//     { id: 2, name: 'Shirt', type: 'Clothing' },
//     { id: 3, name: 'Coffee Maker', type: 'Appliances' },
//     { id: 4, name: 'Headphones', type: 'Electronics' },
//     { id: 5, name: 'Pants', type: 'Clothing' }
// ];

// products.filter(function(product){
//     if(product.type === 'Electronics'){
//         console.log(product);
//     }
// })



// -----------------------------------------------------------------------------------------
//Q3. mapping over an array of user data to create a list of user cards 
// const users = [
//     { id: 1, name: 'John Doe', age: 30 },
//     { id: 2, name: 'Jane Smith', age: 25 },
//     { id: 3, name: 'Sam Johnson', age: 35 }
// ];

// let newArr = users.map(function(user){
//     return `<div><h1>${user.name}</h1><h5>${user.age}</h5></div>`
// });

// console.log(newArr);




// -----------------------------------------------------------------------------------------
//Q4. grouping an array of objects by a specific property
// const users = [
//     { role:"admin", name: 'John Doe', age: 30 },
//     { role:"user", name: 'Jane Smith', age: 25 },
//     { role:"admin", name: 'Sam Johnson', age: 35 }
// ];


// let obj = {};

// users.forEach(function(user){
//     if(obj[user.role]){
//         obj[user.role].push(user); 
//     }
//     else {
//         obj[user.role] = [];
//         obj[user.role].push(user);
//     }
// })

// console.log(obj);
// ye wale question me simply hamko foreach loop lagake ek nay object me users ko unke roles ke 
// basis pe separate karna hai 

// -pehle hamne check kiya ki obj[user.role] me kuch hai ya nahi ...... ab kyuki hamara obj rmpty
//  hai pehli baar to if nahi chalega else chalega aur abhi ham ek array banadenge aur wo user ki 
//  value us array me push kardenge

// -second object ki jab baari aayegi tabi user naam se koi bhi array exist nai karta hamare naye 
//  object me therefore hamara yaha bhi if nahi chalega else hi chalega ek naya array banega user 
//  naam se aur usme wo user push hoga 

// -last time jab third object aayega toh pehle hi dikh jayega ki admin naam se ek array exist
//  karta hai hamare naye object me to simple wo user wo array me push hojayega 












// -----------------------------------------------------------------------------------------
// removing or updating a specific object in an array of data based on a unique ID
// const users = [
//     { id: 1, name: 'John Doe', age: 30 },
//     { id: 2, name: 'Jane Smith', age: 25 },
//     { id: 3, name: 'Sam Johnson', age: 35 }
// ];

// var newArr4 = users.filter(function(user){
//     return user.id !== 3;
// });

// console.log(newArr4);