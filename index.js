// console.log(`Hello how you doin?`)
// //window.alert(`you can't do that buddy`)
document.getElementById(`All rights reserved`).textContent="2025 Manchester City All copyright rights reserved.";

// let emailid;
// emailid = window.prompt(`Enter`);
// console.log(emailid);
document.getElementById("mybutton").onclick= function()
{
    emailid = document.getElementById("emailid").value;
    // console.log(emailid);
    document.getElementById("contactid").textContent=`We'll contact you at ${emailid}. Thanks for visiting`

}

let length = window.prompt(`Enter length of rectangle:`)
let breadth = window.prompt(`ENter breadth`);
let perimeter = 2*(length+breadth);
window.alert(`Perimeter: ${perimeter}`);
let area = length*breadth;
window.alert(`Area: ${area}`);
 
let age = Number(window.prompt(`Enter element:`));
age+=1;
console.log(age);

let yearcount = 2000;
let increasebtn = document.getElementById(`increasebtn`);
let decreasebtn = document.getElementById(`decreasebtn`);
increasebtn.onclick = function()
{
    yearcount++;
    document.getElementById(`yearinput`).textContent = yearcount;
}
decreasebtn.onclick = function()
{
    yearcount--;
    document.getElementById(`yearinput`).textContent = yearcount;
}
document.getElementById(`resetbtn`).onclick = function()
{
    yearcount = 2000;
    document.getElementById(`yearinput`).textContent = yearcount;
}

