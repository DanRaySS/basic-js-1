// 'use strict';

// // let id = Symbol("id");

// const obj = {
//     'name': 'Test',
//     [Symbol("id")]: 1,
//     getId: function () {
//         return this[id];
//     }
// };

// // let id = Symbol();
// // let id2 = Symbol();

// // console.log(id == id2);

// // obj[id] = 1;



// // console.log(obj[id]);
// // console.log(obj.getId());
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (let value in obj) console.log(value);

'use strict';

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123
};

//Сторонний код библиотеки

myAwesomeDB.id = '32323232';

console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);