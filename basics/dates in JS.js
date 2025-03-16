// Dates

let myDate = new Date()
console.log(myDate.toString()) // output=> Sun Feb 23 2025 22:26:41 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //output=> Sun Feb 23 2025
console.log(typeof myDate) //object

let myCreatedDate = new Date(2025, 0, 23, 5, 3) 
// basic format => (year, month, date, hour, min, ...)
// months start from 0
console.log(myCreatedDate.toLocaleString()) // 23/1/2023, 5:03:00 am
console.log(myCreatedDate.getMonth()) //0
console.log(myCreatedDate.getDay()) //4


let TimeStamp = Date.now() //abhi ki date
console.log(TimeStamp) //1740330761049

// if we want this in seconds, divide by 1000
console.log(Math.floor(TimeStamp/1000)) // 1740330761
// Math.floor is used to remove decimal digits 

