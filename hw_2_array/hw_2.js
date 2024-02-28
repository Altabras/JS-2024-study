// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль //

// let arr = ['car', 123, -44, true, 'house', 'flowers', false, 3.14, 'Earth', 'any'];

// console.log(arr[0], arr[1], arr[2], arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]);





// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre. //

/* let book1 = {

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


 */


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age. //

/* let book4 = {

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

 */


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача //


/* let users = [

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

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

 */


// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3 //

/* let x = 8;
if (x!==0){
    console.log("Вірно");
} else {
    console.log("Неаврно");
}

 */


//  Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години). //

/* let time = 17;

if (time >= 0 && time <=14) {
    console.log('Перша четверть');
} else if (time >= 15 && time <=29) {
    console.log('Друга четверть');
} else if (time >= 30 && time <=44) {
    console.log('Третя четверть');
} else if (time >= 45 && time <=59) {
    console.log('Четверта четверть');
} else {
    console.log('Невірний час');
}

 */


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю). //

/* let day = 15;

if (day >= 1 && day <= 10) {
    console.log('перша декада місяця');
} else if (day >= 11 && day <= 20) {
    console.log('друга декада місяця');
} else if (day >= 21 && day <= 31) {
    console.log('третя декада місяця');
} else {
    console.log('Неправильне значення');
}


 */

// Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською). //

/*

let dayPlan = +prompt('Enter day number');

switch (dayPlan) {
    case 1:
        console.log('Monday')
        break;

    case 2:
        console.log('Tuesday')
        break;

    case 3:
        console.log('Wednesday')
        break;


    case 4:
        console.log('Thursday')
        break;


        case 5:
        console.log('Friday')
        break;


    case 6:
        console.log('Saturday')
        break;


    case 7:
        console.log('Sunday')
        break;

    default:
        console.log('Error day')
        break;
}
*/




// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.


/*

let num1 = +prompt('Введіть число');
let num2 = +prompt('Введіть число');

if (num1>num2){
    console.log('Більше число' + " " +num1);
} else if (num2>num1) {
    console.log('Більше число' + " " +num2);
} else if (num1===num2) {
    console.log('Введені рівні числа');
} else {
    console.log('Error');
}

 */


// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


// x = x || "default";


//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

/*  if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}

 */


