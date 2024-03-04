//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// function pl(a,b) {
//     return a * b;
// }



// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle(r) {
//     return 3.14 * (r**2);
// }





// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r //2ПRH

// function cilinder(h, r) {
//     return 2 * 3.14 * r * h;
// }






// - створити функцію яка приймає масив та виводить кожен його елемент

// function okArr(array){
//     for (let arr of array){
//         console.log(arr);
//     }
// }
//
//
// okArr(['2', 1, 2, true])


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент



// function newText (addText) {
//     document.write(`<p> ${addText} </p>`);
// }
//
// newText('hello world');
// newText('hi hi');




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(liText){
//     document.write(`<ul>`)
//         document.write(`<li>${liText}</li>`);
//         document.write(`<li>${liText}</li>`);
//         document.write(`<li>${liText}</li>`);
//     document.write(`</ul>`)
// }




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function  list(liText, int) {
//         document.write(`<ul>`);
//
//             for (let i = 0; i < int; i++) {
//                 document.write(`<li>${liText}</li>`);
//             }
//
//         document.write(`</ul>`);
// }
//
// list('hello', 5);
//



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список



// function  listArr(array) {
//         document.write(`<ul>`);
//
//             for (let arr of array) {
//                 document.write(`<li>${arr}</li>`);
//             }
//
//         document.write(`</ul>`);
// }
//
//
// listArr([1,3,'ollo', false]);



//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function userObj(array){
//
//     for (let obj of array) {
//       document.write(`
//       <div>
//
//             id: ${obj.id}
//             name - ${obj.name}
//             age - ${obj.age}
//
//       </div>
//
//       `)
//     }
// }
//
// let userArr = [
//     {id: 1, name: 'Alex', age: 32},
//     {id: 2, name: 'Rob', age: 23},
//     {id: 3, name: 'Kesha', age: 45},
// ];
//
// userObj(userArr);


// - створити функцію яка повертає найменьше число з масиву





// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


// function sum(arr) {
//     let sumArr = 0;
//     for (let num of arr){
//         sumArr +=num;
//     }
//     return sumArr;
// }
//
// let array = [1,2,3,4,5];
// console.log(sum(array));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// function swap(arr,index1,index2){
//         let numArr = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = numArr;
// }
//
// let num = [1,2,3,4,5];
//
// console.log(num);
//
// swap(num, 2,4);
//
// console.log(num);



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

//
//
//     function exchange(sumUAH,currencyValues,exchangeCurrency) {
//     for (const currency of currencyValues) {
//         if (exchangeCurrency==currency.currency) {
// total=sumUAH/currency.value;
//         }
//     }
//     return total;
// }
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));
//
