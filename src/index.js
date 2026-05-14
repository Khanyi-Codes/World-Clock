setInterval(function(){

let johannesburgElement = document.querySelector("#johannesburg")
let johannesburgDateElement = johannesburgElement.querySelector(".date");
let johannesburgTimeElement = johannesburgElement.querySelector(".time");
let johannesburgTime = moment().tz("Africa/Johannesburg");

johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
johannesburgTimeElement.innerHTML = johannesburgTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);