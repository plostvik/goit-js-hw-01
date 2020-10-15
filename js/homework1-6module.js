//----------------------------------------- ЗАДАЧА 1-------------------------------------------

// const name = '«Генератор защитного поля»'; // Write code on this line
// let price = 1000; // Write code on this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this lineprice = 2000;

// console.log(firstMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

// console.log(secondMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'

//----------------------------------------- ЗАДАЧА 2-------------------------------------------

// const invoice = 100;
// const stock = 100;
// let message;

// // Write code under this line
// if (stock >= invoice) {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
// } else {
//   message = 'На складе недостаточно товаров!';
// }

// console.log(message);

//----------------------------------------- ЗАДАЧА 2 (вариант 2)-------------------------------------------
// const invoice = 100;
// const stock = 100;

// // Write code under this line
// const message = stock >= invoice ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!'  ;

//----------------------------------------- ЗАДАЧА 3-------------------------------------------

// const userPassword = null;

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// Write code under this line
// if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPassword === null) {
//   message = 'Отменено пользователем!';
// } else {
//   message = ACCESS_DENIED;
// }

// console.log(message);

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'

//----------------------------------------- ЗАДАЧА 4-------------------------------------------

// const orderPieces = 10;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = pricePerDroid * orderPieces; // Write code on this line
// let balanceCredit = credits - totalPrice; // Write code on this line
// let message;

// // вариант логичный и рабочий! СПЕРВА ПРОВЕРКА НА ДУРАКА

// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (balanceCredit >= 0) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else {
//   message = ACCESS_DENIED;
// }

// console.log(message);

// вариант рабочий, но не логичный :)

// Write code under this line
// if (balanceCredit >= 0 && orderPieces !== null) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else {
//   message = ACCESS_DENIED;
// }

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

// let credits = 23580;
// const pricePerDroid = 3000;
// const cancel = 'Отменено пользователем!';
// const insufficientFunds = 'Недостаточно средств на счету!';
// let message;
// const userEror = 'Введите колличество в цифрах!!!!!!!!!';
// let quantity = prompt('Какое колличество дроидов Вы хотите купить?:');
// let totalPrice;
// let balance;
// if (quantity === null) {
//   message = cancel;
// } else if (!isNaN(quantity) && !(quantity === '')) {
//   totalPrice = quantity * pricePerDroid;
//   balance = (credits - totalPrice);
//   if (balance > 0) {
//     message = Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.;
//   } else {
//     message = insufficientFunds;
//   }
// } else {
//   message = userEror;
// }

// alert(message);

//----------------------------------------- ЗАДАЧА 5-------------------------------------------

// const countryName = 'Россия';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line

//   switch (country) {
//     // Write code under this line
//     case 'Китай':
//       price = 100;
//     //   break;

//     case 'Австралия':
//       price = 170;
//     //   break;

//     case 'Индия':
//       price = 80;
//     //   break;

//     case 'Ямайка':
//       price = 120;
//     //   break;

//     default:
//       message = 'В выбранную страну доставка недоступна.';
//     //   break;
//   }
// }
// if (price > 0) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'

// Китай - 100 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

//----------------------------------------- МОДУЛЬ 2-------------------------------------------
//----------------------------------------- ЗАДАЧА 1-------------------------------------------

// const getItemsString = function (array) {
//   // Write code under this line
//   let result = '';
//   for (let i = 0; i < array.length; i += 1) {
//     let orderNumber = i + 1;
//     result += `${orderNumber} - ${array[i]}\n`;
//   }
//   return result;
// };
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
  '1 - Mango
  2 - Poly
  3 - Ajax
  4 - Lux
  5 - Jay
  6 - Kong
  '
  */

// console.log(getItemsString([5, 10, 15]));
/*
  '1 - 5
  2 - 10
  3 - 15
  '
  */

//----------------------------------------- ЗАДАЧА 2-------------------------------------------

// const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
//   pricePerWord * message.split(' ').length; // Write code in this line

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// console.log(calculateEngravingPrice('Uno', 100)); // 100

//----------------------------------------- ЗАДАЧА 3-------------------------------------------

// function findLongestWord(string = '') {
//   // Write code under this line

//   let stringMassive = string.split(' ');
//   let shortestWord;
//   console.log(stringMassive);
//   shortestWord = stringMassive[0];
//   for (let i = 0; i < stringMassive.length; i += 1) {
//     if (shortestWord.length < stringMassive[i].length) {
//       shortestWord = stringMassive[i];
//     }
//   }
//   return shortestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // 'jumped'

// console.log(findLongestWord('Google do a roll'));
// // 'Google'

// console.log(findLongestWord('May the force be with you'));
// // 'force'

//----------------------------------------- ЗАДАЧА 4-------------------------------------------

// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   let newString;
//   if (string.length <= maxLength) {
//     newString = string;
//     console.log('прошли условие');
//     return newString;
//   }
//   newString = string.slice(0, maxLength) + '...';
//   return newString;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );
// // 'Vestibulum facilisis, purus ne...'

//----------------------------------------- ЗАДАЧА 5-------------------------------------------

// function checkForSpam(str) {
//   // Write code under this line
//   return (
//     str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')
//   );
// }

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//----------------------------------------- ЗАДАЧА 6-------------------------------------------

// function mapArray(array) {
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     console.log(array[i]);
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20];

// console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25];

// Конструкция new Array(10) создаст массив, длинной в 10 элементов. Значения в таком массиве будут отсутствовать, т.е. не будет даже undefined. Поэтому такой массив нужно заполнить значениями для дальнейшего использования.

// Есть еще способ создания и заполнения массива - можно создать пустой массив [] и заполнять его методом push()

// Быстрая обработка массива
// Преимущество создания массива заданной длины перед добавлением в пустой массив в том, что метод push() медленнее обрабатывается.

// Если `new Array()` будет содержать более одного аргумента, то будет создан массив с элементами из аргументов.
// Пример:

// new Array(3);
// // [,,]

// new Array(1, 2, 3);
// // [1, 2, 3]
// Быстрое создание массива
// Пустой массив. Вызов new Array() создаст пустой массив []. Но это более медленный способ создания массива по сравнению с использованием литерала. Если нужен пустой массив, то рекомендуется использовать литерал массива.

// const arrFast = []; // быстрее
// const arrSlow = new Array(); // медленнее
// Создание нового массива на основе преобразования данных из старого массива
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел. Функция создает новый массив numbers размером в длину массива array и заполняет его числами из массива array умноженными на 10. Для перебора массива и добавления новых значений используй цикл for. По завершению перебора массива array возвращается массив numbers.

//----------------------------------------- ЗАДАЧА 7-------------------------------------------

// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

//console.log(filterArray([undefined, false, null, [], 1]));
// [1]

//console.log(filterArray([{}, () => {}, 2]));
// [2]

//----------------------------------------- ЗАДАЧА 8------------------------------------------- (СПРОСИТЬ!!!!!!!!!!!!!!!!!)

// function reduceArray(array) {
//   let total = 0;
//   for (let el of array) {
//     total = array.length > 0 ? (total += el) : 0;
//     //   if (el !== '') {
//     //     total = el + total;
//     //   }
//   }
//   return total;
// }

// console.log(reduceArray(['', '', '']));
// // // 6;

// console.log(reduceArray([-3, 0, 2]));
// // // 0;

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5;

//----------------------------------------- ЗАДАЧА 9-------------------------------------------

// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   if (login.length >= min && login.length <= max) {
//     return true;
//   }
//   return false;
// }

// // console.log(isLoginValid('Ajax'));

// function isLoginUnique(allLogins, login) {
//   // Write code under this line
//   if (!allLogins.includes(login)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// console.log(isLoginValid(logins, 'Mango'));
// console.log(logins.includes('Mango'));

// function addLogin(allLogins, login) {
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;

//   if (isLoginValid(login) === false) {
//     return (message = ERROR);
//   }

//   if (isLoginUnique(allLogins, login) === false) {
//     return (message = REFUSAL);
//   }

//   allLogins.push(login);
//   return (message = SUCCESS);
// }

// // const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax'));
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles'));
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

//----------------------------------------- МОДУЛЬ 3-------------------------------------------
//----------------------------------------- ЗАДАЧА 1-------------------------------------------

// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

// //Write code under this line
// user.mood = 'happy';
// user['full time'] = true;
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(user);

// const keys = Object.keys(user);
// console.log(keys);
// // Write code under this line
// for (const el of keys) {
//   message += `${el}:${user[el]}\n`;
// }

// console.log(message);
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */

//----------------------------------------- ЗАДАЧА 2-------------------------------------------

// const countProps = function (obj) {
//   'use strict';
//   // Write code under this line
//   const a = Object.keys(obj).length;
//   return a;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

//----------------------------------------- ЗАДАЧА 3-------------------------------------------

// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line
//   let mvp = 0;
//   let worker = '';
//   for (const key in employees) {
//     if (mvp < employees[key]) {
//       mvp = employees[key];
//       worker = key;
//     }
//   }
//   return worker;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// // 'lux'

//----------------------------------------- ЗАДАЧА 4-------------------------------------------
// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников и возвращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// const countTotalSalary = function (employees) {
//   let totalSum = 0;

//   for (const key in employees) {
//     totalSum += employees[key];
//   }

//   return totalSum;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// // 500

//----------------------------------------- ЗАДАЧА 5 ------------------------------------------
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// function getAllPropValues(array, prop) {
//   const pro = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // if (array[i][prop]) 1-й вариант
//     if (prop in array[i]) {
//       pro.push(array[i][prop]);
//     }
//   }

//   return pro;
// }

// // Write code under this line

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(products[0]);
// console.log(products[0].name);

// console.log(getAllPropValues(products, 'name'));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// //console.log(getAllPropValues(products, 'quantity'));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, 'category'));
//  []

//----------------------------------------- ЗАДАЧА 6 ------------------------------------------

// function calculateTotalPrice(array, prop) {
//   let totalSum = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (prop === array[i].name) totalSum += array[i].price * array[i].quantity;
//   }
//   return totalSum;
// }
// function calculateTotalPrice(array, prop) {
//   let totalPrice = 0;
//   for (let eachProduct of array) {
//     let item = eachProduct.name;
//     console.log(item);
//     if (prop === item) {
//       totalPrice += eachProduct.price * eachProduct.quantity;
//     }
//   }
//   return totalPrice;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, 'Радар'));
// // // 9080

// console.log(calculateTotalPrice(products, 'Сканер'));
// // 10200

// //console.log(calculateTotalPrice(products, 'Захват'));
// // 2400

// console.log(calculateTotalPrice(products, 'Дроид'));
// // 2800

// function calculateTotalPrice(array, prop) {
//   const newValues = [];
//   const newKeys = [];
//   let totalSum = 0;
//   for (const el of array) {
//     newValues.push(Object.values(el));
//     newKeys.push(Object.keys(el));
//     // console.log(newValues);
//     // console.log(newKeys);
//   }

//   for (let i = 0; i < newValues.length; i++) {
//     console.log(newValues[i]);
//     let index = newValues[i].indexOf(prop);
//     let priceIndex = newKeys[i].indexOf('price');
//     let quantityIndex = newKeys[i].indexOf('quantity');
//     console.log(index);
//     if (index !== -1) {
//       totalSum += newValues[i][priceIndex] * newValues[i][quantityIndex];
//     }
//     //   for (let j = 0; j < newValues[i].length; j++) {}
//   }
//   return totalSum;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// function calculateTotalPrice(array, prop) {
//   'use strict';
//   let sum = 0;
//   let total = 0;
//   for (const el of array) {
//     const values = Object.values(el);
//     const [name, ...args] = values;
//     total = args[0] * args[1];
//     if (prop === name) {
//       sum += total;
//     }
//   }
//   return sum;
// }

// console.log(calculateTotalPrice(products, 'Радар'));
// console.log(calculateTotalPrice(products, 'Захват'));

// function calculateTotalPrice(array, prop) {
//   'use strict';
//   let sum = 0;
//   let total = 0;
//   for (const el of array) {
//     const values = Object.values(el);
//     const [name, ...args] = values;
//     total = args[0] * args[1];
//     if (prop === name) {
//       sum += total;
//     }
//   }
//   return sum;
// }

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, 'Радар'));
// console.log(calculateTotalPrice(products, 'Захват'));

// arr = console.log(++1++);

// const greeting() =

// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line
//   // const values = Object.values(employees)
//   let res = 0;
//   //   for (let i = 0; i<values.lenth; i++) {
//   //     if (res > values[i]) {
//   //       console.log(values[i]);
//   //     }
//   //   }
//   //   // for (let value of Object.values(user)) {
//   //   //   alert(value);
//   //   // }
// };
// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// // console.log(findBestEmployee(developers));
// // 'lorence'
// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// //console.log(findBestEmployee(supports));
// // 'mango'
// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// //console.log(findBestEmployee(sellers));
// // 'lux'
// // findBestEmployee()

// const values = Object.values(developers);
// const keys = Object.keys(developers);
// let max = values.indexOf(Math.max(...values));
// let workerTop = keys[max];

// console.log(values);
// console.log(workerTop);
// console.log(max);

//----------------------------------------- МОДУЛЬ 4-------------------------------------------
//----------------------------------------- ЗАДАЧА 1 ------------------------------------------

// const addIndex = (element, index) => element + index;
// const subIndex = (element, index) => element - index;

// function mapArray(array, cb) {
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(mapArray(arr, addIndex));
// // [1, 3, 5, 7, 9]

// console.log(mapArray(arr, subIndex));
// // [1, 1, 1, 1, 1]

//----------------------------------------- ЗАДАЧА 2 ------------------------------------------

// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = element => element % 2 === 0;

// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line
//     const passed = cb(element, index, array);
//     if (passed) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5, 1, 2, 5];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));

//----------------------------------------- ЗАДАЧА 3 ------------------------------------------
// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   'use strict';
//   let i;
//   let accum;
//   if (arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if (arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for (i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
//     accum = cb(accum, element);
//   }
//   return accum;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

//----------------------------------------- ЗАДАЧА 4 ------------------------------------------

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value; // Write code in this line
//   },
//   showOrders() {
//     return this.orders; // Write code in this line
//   },
//   addOrder(cost, order) {
//     this.balance -= cost; // Write code in this line
//     this.orders.push(order); // Write code in this line
//   },
// };
// const copyAccount = Object.assign({}, account);
// copyAccount.orders = [...account.orders];
// // копируем для автотестов ссылочные типы

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000

//console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3', 'order-4']

//----------------------------------------- ЗАДАЧА 5 ------------------------------------------

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     this.items.push(itemName);
//     return `Adding ${itemName} to inventory`;
//   },
//   remove(itemName) {
//     this.items = this.items.filter(item => item !== itemName);
//     return `Removing ${itemName} from inventory`;
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   const act = action(itemName);
//   const msg = `Invoking action on ${itemName}`;
//   return { act, msg };
// };

// const invokeAdd = invokeInventoryAction(
//   'Medkit',
//   inventory.add.bind(inventory), // Write code in this line
// );
// const arrayAdd = [...inventory.items];

// console.log(invokeAdd);
// // { act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// console.log(arrayAdd);
// // ['Knife', 'Gas mask', 'Medkit']

// const invokeRemove = invokeInventoryAction(
//   'Gas mask',
//   inventory.remove.bind(inventory), // Write code in this line
// );

// const arrayRemove = [...inventory.items];

// console.log(invokeRemove);
// //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

// console.log(arrayRemove);
// ['Knife', 'Medkit']

//----------------------------------------- МОДУЛЬ 5-------------------------------------------
//----------------------------------------- ЗАДАЧА 1 ------------------------------------------
// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   return `login: ${this.login}, email: ${this.email}`;
// };
// // console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account('Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

//----------------------------------------- ЗАДАЧА 2 ------------------------------------------
// class User {
//   constructor(name, age, follower) {
//     this.name = name;
//     this.age = age;
//     this.followers = follower;
//   }
//   getInfo() {
//     return `${this.name} is ${this.age} years old and has ${this.followers} followers`;
//   }
// }

// console.log(typeof User);
// // 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo());
// // 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo);
// // 'function'

// const poly = new User('Poly', 3, 17);
// console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'

// console.log(mango);

//----------------------------------------- ЗАДАЧА 3 ------------------------------------------

// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     for (let el of this.items) {
//       el === item ? this.items.splice(this.items.indexOf(el), 1) : '';
//     }
//   }
// }

// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];
// console.log(goods.indexOf('Пролонгер'));

// console.log(typeof Storage);
// // 'function'

// const storage = new Storage(goods);

// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

//----------------------------------------- ЗАДАЧА 4 ------------------------------------------

// переиспользование методов класса
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

// class StringBuilder {
//   constructor(string) {
//     this._value = string;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     return (this._value += str);
//   }
//   prepend(str) {
//     return (this._value = str + this._value);
//   }
//   pad(str) {
//     this.append(str);
//     this.prepend(str);
//   }
// }

// console.log(typeof StringBuilder);
// // 'function'

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

//----------------------------------------- ЗАДАЧА 5 ------------------------------------------

// class Car {
//   // Write code under this line
//   constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//     this.speed = speed;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = isOn;
//     this.distance = distance;
//   }

//   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
//   }

//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     this._price = value;
//   }

//   turnOn() {
//     this.isOn = true;
//   }

//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   accelerate(value) {
//     this.speed += value;
//     this.speed > this.maxSpeed ? (this.speed = this.maxSpeed) : '';
//   }

//   decelerate(value) {
//     this.speed -= value;
//     this.speed < 0 ? (this.speed = 0) : '';
//   }

//   drive(hours) {
//     this.isOn ? (this.distance += this.speed * hours) : '';
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(mustang);

// console.log(Car.getSpecs(mustang));
// // // // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// // // // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

// console.dir(Car);

//----------------------------------------- МОДУЛЬ 6-------------------------------------------
//----------------------------------------- ЗАДАЧА 1 ------------------------------------------

//  ДЕСТРУКТУРИРУЮЩЕЕ ПРИСВАИВАНИЕ В ОБЪЕКТЕ НА ПРИМЕРЕ
// const users2 = {
//   id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//   name: 'Blackburn Dotson',
//   email: 'blackburndotson@furnigeer.com',
//   eyeColor: 'brown',
//   friends: ['Jacklyn Lucas', 'Linda Chapman'],
//   isActive: false,
//   balance: 1498,
//   skills: ['non', 'amet', 'ipsum'],
//   gender: 'male',
//   age: 38,
// };

// const { isActive } = users2;
// console.log(isActive);
// console.log(users2.isActive === isActive);

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// const getUserNames = array => array.map(({ name }) => name);

// console.log(getUserNames(users));

//----------------------------------------- ЗАДАЧА 2 ------------------------------------------

// Write code under this line
// const getUsersWithEyeColor = (array, color) =>
//   array.filter(({ eyeColor }) => eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));

//----------------------------------------- ЗАДАЧА 3 ------------------------------------------
// Write code under this line

// const getUsersWithGender = (array, gender) =>
//   array.filter(el => el.gender === gender).map(({ name }) => name);

// второй способ
// const getUsersWithGender = (array, genders) =>
//   array
//     .map(({ name, gender }) => {
//       const obj = {};
//       obj.name = name;
//       obj.gender = gender;
//       console.log(gender);
//       return obj;
//     })
//     .filter(({ gender }) => gender === genders);
// console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */

//----------------------------------------- ЗАДАЧА 4 ------------------------------------------

// Write code under this line
// const getInactiveUsers = array => array.filter(({isActive}) => !isActive);
// console.log(getInactiveUsers(users));

/* [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  }     
]; */

//----------------------------------------- ЗАДАЧА 5 ------------------------------------------

// Write code under this line
// const getUserWithEmail = (array, mail) =>
//   array.find(({ email }) => email === mail);

// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

/* {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
} */

// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

/* {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
} */

//----------------------------------------- ЗАДАЧА 6 ------------------------------------------

// Write code under this line
// const getUsersWithAge = (array, min, max) =>
// array.filter(({ age }) => min < age && age < max);
//     .map(({ name, email }) => ({ name, email }));

// console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */

// console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */

//----------------------------------------- ЗАДАЧА 7 ------------------------------------------

// // Write code under this line
// const calculateTotalBalance = array =>
//   array.reduce((acc, { balance }) => acc + balance, 0);

// console.log(calculateTotalBalance(users));
// // 20916

//----------------------------------------- ЗАДАЧА 8 ------------------------------------------

// const getUsersWithFriend = (array, friendName) =>
//   array
//     .filter(({ friends }) => friends.includes(friendName))
//     .map(({ name }) => name);

// console.dir(getUsersWithFriend(users, 'Briana Decker'));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// // [ 'Elma Head', 'Sheree Anthony' ]

//----------------------------------------- ЗАДАЧА 9 ------------------------------------------

// Write code under this line
// const getNamesSortedByFriendsCount = array =>
//   array
//     .slice()
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//----------------------------------------- ЗАДАЧА 10 ------------------------------------------

// Write code under this line
// const getSortedUniqueSkills = array =>
//   array
//     .reduce((acc, { skills }) => [...acc, ...skills], [])
//     .filter((el, index, array) => array.indexOf(el) === index)
//     .sort((a, b) => {
//       if (a < b) {
//         return -1;
//       }
//       if (a > b) {
//         return 1;
//       }
//       return 0;
//     });

// второй способ
// const getSortedUniqueSkills = array =>
//   array
//     .reduce((allSkills, { skills }) => [...allSkills, ...skills], [])
//     .filter((el, index, allSkills) => allSkills.indexOf(el) === index)
//     .sort();

// console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
