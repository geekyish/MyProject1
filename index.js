//console.log("HELLO WORLD");
//console.warn("This is warning");
//console.error("This is an error");
//alert("me");
//document.write("this is document write")

//var number1=23;
//var number2=34;
//console.log(number1+number2);

//DATA TYPES IN JAVASCRIPT:
//var str1 = "This is a string";
//var str2 = 'THis is also a string';
// var num = 2;
//OBJECTS:
/*var marks = {
    ravi:34,
    rahul:34,
    sahil:33
    }
*/
//var a = true;
        //var b = false;
        //console.log(a, b);

        //var n = null;
        //console.log(n);

        //var und;
        //console.log(und);

        //DATA TYPES IN JS:
        /*
        1. Primitive Data type: undefined, null, number, string, boolean, undefined, null;
        2. Reference data types: arrays, objects
        Arrays:
        var arr =[1,2,"hello", 4,5];
        console.log(arr);
        */
        // Operators in JavaScript
        // Arithmetic Operators
        var a = 100;
        var b = 10;
        // console.log("The value of a + b is ", a+b);
        // console.log("The value of a - b is ", a-b);
        // console.log("The value of a * b is ", a*b);
        // console.log("The value of a / b is ", a/b);

        // Assignment Operators
        var c = b;
        // c += 2;
        // c -= 2; // c = c - 2;
        // c *= 2;
        // c /= 2;
        // console.log(c);
        // Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);
// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

/*function avg(a, b){
    return (a+b)/2;
}
c1= avg(4, 6);
c2= avg(24, 43);
console.log(c1, c2);
*/
//string is displayed in black colour on console
//number is displayed in blue colour on console

// Conditions in Javascript
/*
var age = 34;
if (age>8){
    console.log("You are not a kid");
}
else{
    console.log("You are a kid");
}
*/

//age = 25;
// if-else Ladder
/*
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }
// arr.forEach(function(element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }
// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.shift()
// const newLen = myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr);
// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)
let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
 
// DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);
let elemClass = document.getElementsByClassName('container');
console.log(elemClass);
//elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success")
//console.log(elem.innerHTML);
//console.log(elem.innerText);

//console.log(elemClass[0].innerHTML);
//console.log(elemClass[0].innerText);
tn = document.getElementsByTagName('div')
console.log(tn)
createdElement=document.createElement('p');
createdElement.innerText = "This is a created para";
createdElement2=document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].appendChild(createdElement);
tn[0].replaceChild(createdElement2, createdElement);
//removeChild(element); --> removes an element

//Selecting using Query
sel = document.querySelector('.container')
console.log(sel)
sel = document.querySelectorAll(".container")
console.log(sel)


function clicked(){
    console.log("The button was clicked")
}
window.onload=function(){
    console.log('The document was loaded')
}
//Events in Javascript
/*firstContainer.addEventListener('click', function(){
   document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
       console.log("Clicked on Container")
})
firstContainer.addEventListener('mouseover', function(){
    console.log("Mouse on Container")
    })
   
firstContainer.addEventListener('mouseout', function(){
        console.log("Mouse out of Container")
    })
    */
//     let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
//  })

//  firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })
        // Arrow Functions
function summ(a, b){
         return a+b;
}
summ = (a,b)=>{
    return a+b;
}

// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
//     console.log("I am your log")
// }
// SetTimeout and setinterval
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)