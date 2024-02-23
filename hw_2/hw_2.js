// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль //

let arr = ['car', 123, -44, true, 'house', 'flowers', false, 3.14, 'Earth', 'any'];

console.log(arr[0], arr[1], arr[2], arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]);





// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre. //

let book1 = {

    title: 'Harry-Potter',
    pageCount: 800,
    genre: 'Fantastic'

};

let book2 = {

    title: 'Harry-Potter-2',
    pageCount: 756,
    genre: 'Fantastic'

};

let book3 = {

    title: 'Harry-Potter-3',
    pageCount: 590,
    genre: 'Fantastic'

};


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age. //

let book4 = {

    title: 'Harry-Potter',
    pageCount: 800,
    genre: 'Fantastic',
    authors: [
        {name: 'Avada-Kedavra', age: 59}
    ]

};

let book5 = {

    title: 'Harry-Potter-2',
    pageCount: 756,
    genre: 'Fantastic',
    authors: [
        {name: 'Avada-Kedavra', age: 61}
    ]
};

let book6 = {

    title: 'Harry-Potter-3',
    pageCount: 590,
    genre: 'Fantastic',
    authors: [
        {name: 'Avada-Kedavra', age: 63}
    ]

};


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача //


let users = [

    {name: 'vasya', username: 'bombila', password: 123},
    {name: 'sasha', username: 'koks12', password: 321},
    {name: 'stepa', username: 'bomba', password: 555},
    {name: 'tolik', username: 'bila', password: 89213},
    {name: 'dima', username: 'ila', password: 'qwerty'},
    {name: 'olya', username: 'boma', password: 'qwe123'},
    {name: 'mariya', username: 'bbla', password: 4567},
    {name: 'lesya', username: 'bomla', password: 13131},
    {name: 'lola', username: 'bila', password: 'lolo12'},
    {name: 'katya', username: 'boba', password: 1234567},

];
