import { reload, users } from "./functions.js"

let today = []
let Today_create = document.querySelector('.Today_create')
let TodayCount = document.querySelector('.TodayCount')

for (let item of users) {
    if (item.left === 0) {
        today.push(item)
    }
}
reload(Today_create, today, TodayCount)
