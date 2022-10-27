
// export let url = "http://localhost:3001/users"

import { arr } from "./arr.js"

// axios.get(url)
//     .then(res => {
//         localStorage.setItem('users', JSON.stringify(res.data))
//     })

localStorage.setItem('users_a', JSON.stringify(arr))
export let users = JSON.parse(localStorage.getItem('users_a'))
if (!JSON.parse(localStorage.getItem('users_b'))) {
    users = JSON.parse(localStorage.getItem('users_a'))
}else{
    users = JSON.parse(localStorage.getItem('users_b'))
}



export function reload(place, arr, count) {
    place.innerHTML = ''
    count.innerHTML = arr.length


    for (let item of arr) {
        let box = document.createElement('div')
        let checkbox = document.createElement('div')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let p_date = document.createElement('p')

        box.classList.add('box')
        p_date.classList.add('activetext')
        checkbox.classList.add('checkbox')
        h1.innerHTML = item.title
        p.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae.'


        let str = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        if (item.left === 0) {
            p_date.innerHTML = 'Today'
        } else if (item.left === 1) {
            p_date.innerHTML = 'Tomorrow'

        } else if (item.left > 1) {
            let day = new Date().getDate()
            let month = new Date().getMonth()
            let year = new Date().getFullYear()
            let date = new Date(year, month, day + item.left)
            p_date.innerHTML = str[date.getMonth()] + ' ' + date.getDate()
        }


        place.append(box)
        box.append(h1, p, p_date, checkbox)
        if (item.completed === true) {
            checkbox.classList.add('activeBox')
        } else if (item.completed === false) {
            checkbox.classList.remove('activeBox')
        }
        checkbox.onclick = () => {
            // let id = item.id
            if (item.completed === false) {
                checkbox.classList.add('activeBox')
                item.completed = true
                // axios.patch(url + '/' + id, {
                //     completed: true
                // })
            } else if (item.completed === true) {
                checkbox.classList.remove('activeBox')
                item.completed = false
                // axios.patch(url + '/' + id, {
                //     completed: false
                // })
            }
            localStorage.setItem('users_b', JSON.stringify(users))

        }
    }
}