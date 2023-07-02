let arrNames = ['amir', 'zokir', 'ravshan', 'jamshud', 'alex']

let evenNames = []
let oddNames = []

arrNames.filter((name) => {
    if(name.length % 2 === 0) {
        evenNames.push(name)
    } else {
        oddNames.push(name)
    }
})

console.log(evenNames, oddNames);

let evenLenght = evenNames.length
let oddLength = oddNames.length

if(evenLenght === oddLength) {
    console.log('они равны');
} else if(evenLenght > oddLength) {
    console.log('четных больше');
} else {
    console.log('нечетных больше');
}


// Отфильтровать задачи в переменные а и b
// Сохранить количество в ключе count
// Сохранить сами задачи в массиве-ключе arr
let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",

        "completed":
            true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,

        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]

let a = {
    count: 0,
    arr: []
}

let b = {
    count: 0,
    arr: []
}

let firstFiltered = arr.filter((profiles) => profiles.completed === true)
a.count = a.count + firstFiltered.length
a.arr.push(firstFiltered)
console.log(a);

let secondFilter = arr.filter((profiles) => profiles.completed === false)
b.count = b.count + secondFilter.length
b.arr.push(secondFilter)
console.log(b);