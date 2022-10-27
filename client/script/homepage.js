import { reload, users } from "./functions.js";

console.log();
let Today_create = document.querySelector('.Today_create')
let Tomorrow_create = document.querySelector('.Tomorrow_create')
let Later_create = document.querySelector('.Later_create')
let TodayCount = document.querySelector('.TodayCount')
let TomorrowCount = document.querySelector('.TomorrowCount')
let LaterCount = document.querySelector('.LaterCount')
let ondone = document.querySelector('.ondone')

let today = []
let tomorrow = []
let later = []

ondone.innerHTML = users.length
console.log(users);
for (let item of users) {
    if (item.left === 0) {
        today.push(item)
    } else if (item.left === 1) {
        tomorrow.push(item)
    } else if (item.left > 1) {
        later.push(item)
    }
}

reload(Today_create, today, TodayCount)
reload(Tomorrow_create, tomorrow, TomorrowCount)
reload(Later_create, later, LaterCount)