// const mySalary = 1;

// let
// a=1,
// b=2,
// c=3,
// d=10;

// console.log (a,b,c,d);

// a="hello";
// b="HELLO";
// console.log(a===b);

// const aqua = null;
// console.log(typeof a);

// console.log(1 && 2);

// let led = 1;
// let electricity = 1;

// if (led && electricity) {
//   console.log('light');
// } else {
//   console.log('no light');
// }

// console.log(object.of(NaN));

// const person = {
//     name: 'Ostap',
//     licence: true,
//     car: false,
//     age: 29,
//   };

//   if (person.age >= 18 && person.licence && person.car) {
//     console.log('Поехали');
//   } else {
//     console.log('Нельзя!');
//   }

// let data = 3;

// if (data === 2) {
//   console.log('2');
// } else if (data < 5) {
//   console.log('3');
// } else {
//   console.log('else');
// }

// data === 2
//   ? console.log('2')
//   : data < 5
//   ? console.log('3')
//   : console.log('else');

// let msg;
// msg = data === 2 ? 2 : data < 5 ? 3 : 'else';
// console.log(msg);

// let exp;
// const lvl = 61;

// switch (true) {
//   case lvl >= 1 && lvl < 60:
//     exp = 'noob';
//     break;

//   case lvl >= 60 && lvl < 90:
//     exp = 'middle';
//     break;

//   case 99:
//     exp = 'pro';
//     break;

//   default:
//     exp = 'zero';
// }

// console.log(exp);

// console.log();

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }

// Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Щыеф';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.lenght === 0);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const arr2 = [];
// for (let i = 0; i < 10; i++) {
//   arr2[i] = i + 1;
// }
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let el of arr) {
//   if (el === 5) {
//     console.log(el);
//     break;
//   }
//   // console.log(el);
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let newArr = [];
// let sum = 0;

// for (let el of matrix) {
//   for (let j of el) {
//     console.log(j);
//     sum += j;
//   }
// }
// console.log(sum);

// split and join
// let str = "Hello world, I'm Johny";
// let res = str.split(' ');
// console.log(res);
// res = str.split(' ').join(' ');
// console.log(res);

// const str = 'aBbA';
// const res = str.split('').reverse().join('');

// console.log(res.toUpperCase() === str.toUpperCase());

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let a = 11;

// if (arr.includes(a)) {
//   console.log('includes');
// } else {
//   console.log('not');
// }

// let arr = [];
// arr.push('1');
// arr.push('2');
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.unshift('0');
// console.log(arr);
// arr.shift();
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = arr.slice(3);

// console.log(newArr);

// // МЕНЯЕТ МАССИВ
// let arr = [1, 2, 3];
// arr.splice(1, 1, 'hello');
// console.log(arr);

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let arr3 = [9, 10];

// const arr4 = arr1.concat(arr2).concat(arr3);
// console.log(arr4);

// -------------- Функции -------------------

// const fn = function (n) {
//   return n;
// };
// const res = fn(1);
// console.log(res);
// _________________________________________
// const fn = function (a = 0, b = 0) {
//   return a ** b;
// };
// const res = fn(2, 2);
// console.log(res);
// _________________________________________
// const newPerson = function (name, age, sex, education, occupation) {
//   return {
//     name: name,
//     age: age,
//     sex: sex,
//     education: education,
//     occupation: occupation,
//   };
// };

// let ostap = newPerson('Ostap', 29, 'Male', 'Economist', 'Kyiv');
// console.log(ostap);
// _________________________________________

// const niceTry = function () {
//   for (let item of arguments) {
//     console.log(item);
//   }
// };

// niceTry('nice', 'try');

// _________________________________________

// const mass = function (...arg) {
//   console.log(arg);
// };
// mass(1, 2, 3, 4, 5, 6, 7, 8, 9);
// _________________________________________

// const fn = function (n, ...arg) {
//   //   console.log(n, arg);
//   for (let el of arg) {
//     el = n * el;
//     console.log(el);
//   }
// };
// fn(2, 3, 3, 4, 5, 6, 78);

// const fn = function (n, ...arg) {
//   for (let i = 0; i < arg.length; i++) {
//     arg[i] = arg[i] * n;
//   }
//   return arg;
// };

// console.log(fn(2, 3, 3, 4, 5, 6));
// ________________________________________________
// let total = 1000;
// const withdraw = function (amount, balance) {
//   /*
//    * Проверяется условие. Если оно выполняется, происходит
//    * console.log и выход из функции. Код идущий после тела if
//    * не выполнится.
//    */
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.');
//     return;
//   }

//   /*
//    * Если условие первого if не выполнилось, его тело пропускается
//    * и интерпретатор доходит до этого if.
//    * Проверяется условие. Если оно выполняется, происходит
//    * console.log и выход из функции. Код идущий после тела if
//    * не выполнится.
//    */
//   if (amount > balance) {
//     console.log('Недостаточно средств на счету.');
//     return;
//   }

//   /*
//    * Если ни один из предыдущих if не выполнился,
//    * интерпретатор доходит до этого кода и выполняет его.
//    */
//   console.log('Операция снятия средств проведена.');
//   total = balance - amount;
//   console.log(`balance now: ${total}`);
// };

// withdraw(0, total); // Для проведения операции введите сумму больше нуля.
// withdraw(10000, total); // Недостаточно средств на счету.
// withdraw(300, total); // Операция снятия средств проведена.
// let a = 1,
//   b = 5;

// let result = a + b < 4 ? 'мало' : 'много';
// console.log(result);

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// let arr = ['Mango', 'Poly', 'Ajax'];
// const changeArr = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = `${array[i]} is a pet`;
//   }
//   return array;
// };

// console.log(changeArr(arr));

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}

// // То же самое используя операцию spread
// const d = { ...a, ...b };

// console.log(d); // {x: 0, y: 2, z: 3}

//! FizzBuzz
// Одна из самых популярных на собеседованиях задач.
// Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// _____________________________________________

// const fizzBuzz = function (n) {
//   for (let i = 1; i <= n; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// };
// fizzBuzz(99);

// ________________________________________________

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// // порахувати за допомогою for ... in суму зарплат
// let sum = 0;
// for (const key in salaries) {
//   sum = salaries[key] + sum;
// }
// console.log(sum);

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
//   a: 1,
// };

// const multiplyNumeric = function (obj) {
//   for (const key in obj) {
//     if (isNaN(menu[key])) {
//       menu[key] = menu[key];
//     } else {
//       menu[key] = menu[key] * 2;
//     }
//     console.log(menu);
//   }
// };

// multiplyNumeric(menu);

// const multiplyNumeric = function (obj) {
//   for (const key in obj) {
//     if (isNaN(menu[key])) {
//       menu[key] = menu[key];
//     } else {
//       menu[key] = menu[key] * 2;
//     }
//     console.log(menu);
//   }
// };

// multiplyNumeric(menu);

// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало
//  следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.

// const newObject = { name: 'Петр', surname: 'Петров' };
// const { name = 'Аноним', surname = 'Анонимович', age = '? лет' } = newObject;
// console.log(name, surname, age);

// const arr = {
//   ru: ['голубой', 'красный', 'зеленый'],
//   en: ['blue', 'red', 'green'],
// };

// console.log(arr['ru'][0]);

// Создать объект машины, у которой будут свойства

// const car = {
//   color: 'black',
//   speed: 0,
//   isEngineOn: false,
//   isLightsOn: false,

//   Enginetoggle(toggle) {
//     if (toggle === 'ON') {
//       this.isEngineOn = true;
//       this.speed += 10;
//     } else {
//       this.isEngineOn = false;
//     }
//     console.log(
//       `Cостояние двигателя - ${toggle}, Текущая скорость - ${this.speed}`,
//     );
//   },

//   LightsToggle(toggle) {
//     if (this.isEngineOn === false) {
//       return console.log('Я не могу включить фары, пока двигатель выключен');
//     }

//     toggle === 'ON' ? (this.isLightsOn = true) : (this.isLightsOn = false);
//     console.log(`Cостояние фар - ${toggle}`);
//   },
// };

// const car = {
//   color: 'black',
//   speed: 0,
//   isEngineOn: false,
//   isLightsOn: false,

//   EngineToggle() {
//     this.isEngineOn = !this.isEngineOn;
//     console.log(`Cостояние двигателя - ${this.isEngineOn}`);
//   },

//   SpeedOn(n) {
//     if (this.isEngineOn === false) {
//       return console.log('Я не могу ехать, пока двигатель выключен');
//     }
//     this.speed += n;
//     console.log(
//       `Ваша скорость увеличилась на ${n} и составлят ${this.speed} км/ч`,
//     );
//   },

//   SpeedOff(n) {
//     if (this.isEngineOn === false) {
//       return console.log('Я не могу снизить скорость, пока двигатель выключен');
//     }

//     if (this.speed >= n) {
//       this.speed -= n;
//       return console.log(
//         `Ваша скорость уменьшилась на ${n} и составлят ${this.speed} км/ч`,
//       );
//     }

//     console.log('Я не могу опустить скорость ниже 0');
//   },

//   LightsToggle() {
//     if (this.isEngineOn === false) {
//       return console.log('Я не могу включить фары, пока двигатель выключен');
//     }
//     this.isLightsOn = true;
//     console.log(`Cостояние фар - ${this.isLightsOn}`);
//   },
// };

// // car.Enginetoggle('ON');
// car.EngineToggle();
// car.SpeedOn(10);
// car.SpeedOff(20);
// car.LightsToggle();

// "Увольте" сотрудника если он неактивен И(!) его зп больше 100
// const workers = [
//   { name: 'Alex', salary: 200, isActive: false },
//   { name: 'Rita', salary: 800, isActive: false },
//   { name: 'John', salary: 100, isActive: true },
//   { name: 'Derek', salary: 200, isActive: false },
// ];

// for (let el of workers) {
//   if (el.isActive === false && el.salary > 100) {
//     console.log(`${workers[workers.indexOf(el)].name} - УВОЛЕН(A)!`);
//     workers.splice(workers.indexOf(el), 1);
//   } else {

//     el.status = 'КРАСАВЧИК';
//   }
// }

// console.log(workers);

// Напишите ф-цию, которая принимает аргументом массив обьектов и строку с названием камня.
// Ф-ция считает сколько будет стоить то к-во камней, которой записано в объекте
// Ф-ция принимает массив строк и считает сумму всех камней из массива. С учетом кол-ва и цены.

// const stonesSum = function (array, stoneArray) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     for (let el of stoneArray) {
//       if (el === array[i].name) {
//         sum += array[i].price * array[i].quantity;
//       }
//     }
//   }
//   return sum;
// };

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// console.log(stonesSum(stones, ['Изумруд', 'Сапфир', 'Бриллиант']));

// task ------------------------
// Создайте объект cart. Добавьте в объект поля со следующими данными:
//     продукты - массив;
//     общее количество - число;
//     общая цена - число;

// const cart = {
//   products: [],
//   totalQuantity: 10,
//   totalPrice: 12,
// };
// console.log(cart);

// task ------------------------
// const user = {
//   id: '132ghghj4234ghg34',
//   name: 'Alex',
//   age: 25,
//   status: 'student',
//   isOnline: true,
// };
// // // Выведите в консоль элементы с ключами 'name', 'age', 'status' двумя способами:
// // //     через квадратные скобки;
// // //     как свойство объекта.
// // //  Если пользователь активный (isOnline) выведите в консоль
// // // "Пользователь находится в сети" иначе "Пользователь не в сети"

// console.log(user.name, user.age, user.status);
// console.log(user['name'], user['age'], user['status']);

// user.isOnline ? console.log('User is online') : console.log('User is offline');

// task ------------------------
// Удалите єлементы "status" и "isOnline"
// const user = {
//   id: '132ghghj4234ghg34',
//   name: 'Alex',
//   age: 25,
//   status: 'student',
//   isOnline: true,
// };

// delete user.status;
// delete user.isOnline;
// console.log(user);

// const obj = {
//   name: 'John Doe',
//   age: 25,
//   location: {
//     country: 'Canada',
//     city: 'Vancouver',
//     coordinates: [49.2827, -123.1207],
//   },
// };

// // Погляньте, як тут використовується комбінація деструктуризації об'єкта та масиву
// //Ми визначаємо 5 змінних: name, country, city, lat, lng
// const {
//   name,
//   location: {
//     country,
//     city,
//     coordinates: [lat, lng],
//   },
// } = person;

// console.log(person);

// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);
// let arr1 = [1, 2, 3],
//   arr2 = [4, 5];

// let arr3 = arr1.concat('hello-world', arr2);
// console.log(arr3);

// const askName = function (helloMsg) {
//   let name = prompt("What's your name?");
//   console.log(helloMsg + name);
// };

// const askCountry = function (countryMsg) {
//   let country = prompt("Where're you from?");
//   console.log(countryMsg + country);
// };

// const greeting = function (callback, callback2) {
//   let helloMsg = 'Hello, my name is: ';
//   let countryMsg = "I'm from: ";

//   callback(helloMsg);
//   callback2(countryMsg);
// };

// greeting(askName, askCountry);

// Напишите функцию которая принимает 3 параметра: название, цена, колбек
// Колбек создаёт объект с товаром и выводит его в консоль
// нужно чтобы коллбек пушил объект в массив. Столько раз сколько был формат ордер - столько и было в массиве объектов

// const array = [];

// const formatOrder = function (a, b, callback) {
//   callback(a, b);
// };

// const callback = function (name, price) {
//   let obj = { name, price };
//   console.log(obj);
//   console.log(array);
//   return array.push(obj);
// };

// formatOrder('skovoroda', 1, callback);
// formatOrder('phone', 2, callback);

// Напиши function let me see your name, которая в коллбеке принимает шаблонную строку и отправляет её из промпта

// const letMeSeeYourName = function (callback) {
//   let hello = `Welcome`;
//   callback(hello);
// };

// const callback = function (hiMessage) {
//   let name = prompt("What's your name?");
//   console.log(`${hiMessage}, ${name}! How was your day?`);
// };

// letMeSeeYourName(callback);

// Если стоимость машины меньше money вывести массив машин которые вы можете приобрести

// let money = 85;

// let cars = [
//   { name: 'ferrari', cost: 100 },
//   { name: 'lambo', cost: 90 },
//   { name: 'bmw', cost: 80 },
//   { name: 'subaru', cost: 60 },
// ];

// const buyCar = function (carsArray, toFilter) {
//   const canBuy = [];
//   for (let i = 0; i < carsArray.length; i++) {
//     const passed = toFilter(carsArray[i]);
//     if (passed) {
//       canBuy.push(carsArray[i].name);
//     }
//   }
//   console.log(canBuy);
//   console.log(`За ваши деньги вам доступны следующие марки авто: ${canBuy}`);
// };

// const filter = arrayToFilter => money > arrayToFilter.cost;

// buyCar(cars, filter);

// Область видимости функции определяется местом её создания

// const func = function () {
//   let a = 1;
//   let v = 2;

//   const func2 = function () {
//     console.log(a, v);
//   };

//   func2();
// };
// func();

// const a = function () {
//   console.log('a');
//   b();
// };

// const b = function () {
//   console.log('b');
//   c();
// };

// const c = function () {
//   console.log('c');
//   e();
// };

// const d = function () {
//   console.log('d');
// };

// const e = function () {
//   console.log('e');
//   d();
// };

// a();

// const shopMechanism = function () {
//   let state = [];

//   const addItem = function (name, price, color) {
//     state.push({ name, price, color });
//   };

//   const discount = function () {
//     for (let el of state) {
//       el.price = el.price * 0.9;
//     }
//   };

//   const showCart = function () {
//     console.log(state);
//   };

//   const clearCart = function () {
//     state = [];
//   };

//   return { addItem, discount, showCart, clearCart };
// };

// let customerA = shopMechanism();
// console.log(customerA);

// customerA.addItem('Guittar', 100, 'black');
// customerA.addItem('T-shirt', 30, 'black');
// customerA.addItem('Car', 1000, 'black');
// customerA.discount();

// customerA.clearCart();
// customerA.showCart();
// ______________________________________

// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:

// const sum = function (a) {
//   return function (b) {
//     console.log(a + b);
//   };
// };

// sum(5)(-1);

// похоже на корзину, но операция с машинами. Когда в state будет добавлено 5 машин их нужно отправить на экспорт (массив в глобальной видимости).
// добавить на усмотрение раличные операции, типа дисконт, добавить год выпуска к названию авто и т.д.

// let exportCar = [];

// const carShop = function () {
//   let chart = [];

//   const addCar = function (name, price, color) {
//     chart.push({ name, price, color });
//     if (chart.length >= 5) {
//       exportCar = [...exportCar, ...chart.splice(0)];
//       console.log(exportCar);
//     }
//   };

//   const priceDiscount = function (discount) {
//     for (let el of chart) {
//       el.price = el.price * (1 - discount / 100);
//     }
//   };

//   const addYear = function (name, year) {
//     for (let el of chart) {
//       if (el.name === name) {
//         el.year = year;
//       }
//     }
//   };

//   const showProducedCars = function () {
//     console.table(chart);
//   };

//   const clearProducedCars = function () {
//     chart = [];
//   };

//   return {
//     addCar,
//     priceDiscount,
//     showProducedCars,
//     clearProducedCars,
//     addYear,
//   };
// };

// let user = carShop();
// user.addCar('bmw', 100, 'black');
// user.priceDiscount(10);
// user.showProducedCars();
// // user.showCart();
// user.addCar('bmw', 100, 'black');
// user.addCar('bmw', 100, 'black');
// user.addCar('bmw', 100, 'black');

// user.addYear('bmw', '2010');
// user.showProducedCars();
// user.addCar('bmw', 100, 'black');
// user.addCar('mazda', 90, 'black');
// user.showProducedCars();
// user.addCar('bmw', 100, 'black');
// user.addCar('bmw', 100, 'black');
// user.addCar('bmw', 100, 'black');
// user.addCar('bmw', 100, 'black');
// user.addCar('bmw', 100, 'black');
// user.addCar('bmw', 100, 'black');
// _______________________________________________
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//   step: 0,
//   up: function () {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     console.log(this.step);
//     return this;
//   },
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().up().showStep().up().showStep();

// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// ________________________________________

// function askPassword(ok, fail) {
//   let password = prompt('Password?', '');
//   if (password == 'rockstar') ok();
//   else fail();
// }
// let user = {
//   name: 'Вася',
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// ________________________________________

// Дан массив с числами(Написать самим). Ваша ф-я возвращает среднее арифметическое его элементов

// let arr = [1, 2, 3, 4, 5];

// function average(array) {
//   let total = 0;
//   for (let el of arr) {
//     total += el;
//   }
//   return console.log(total / array.length);
// }

// average(arr);

// Напишите функцию f, которая будет обёрткой вокруг другой функции g. Функция f обрабатывает первый аргумент сама, а остальные аргументы передаёт в функцию g, сколько бы их ни было.
// Например:

// function f(text, ...arr) {
//   /* ваш код */
//   console.log(`${text}`, g(arr));
// }
// function g(array) {
//   let sum = 0;
//   for (let el of array) {
//     sum += el;
//   }
//   return sum;
// }
// второй вариант ф-ция в фунции
// function f(text, ...rest) {
//   function g(rest) {
//     let total = 0;
//     for (let el of rest) {
//       total += el;
//     }
//     return total;
//   }
//   console.log(text, g(rest));
// }

// f('тест', 1, 2); // f выведет "тест", дальше g посчитает сумму "3"
// f('тест2', 1, 2, 3); // f выведет "тест2", дальше g посчитает сумму "6"
// f('тест2', 1, 2, 3, 4);
// Код функции f не должен зависеть от количества аргументов.

// Напишите ф-цию которая принимает массив чисел  и возвращает массив в котором останутся только уникальные числа

// let arrNumber = [1, 2, 3, 4, 5, 3, 5, 4, 3, 10, 21, 21, 3, 10, 1];
// let newArr = [];
// const unique = function (array) {
//   for (let el of array) {
//     if (!newArr.includes(el)) {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// };

// const unique = function (array) {
//   //   let test = 0;
//   for (let i = array.length; (i = i - 1); ) {
//     //
//     let test = Number(array.splice(i, 1));
//     console.log(array);
//     if (array.includes(test)) {
//       //   i--;
//     } else {
//       array.push(test);
//     }
//   }
//   return array;
// };

// console.log(unique(arrNumber));

// ________________________________________________________
// Как в функции отличить отсутствующий аргумент от undefined?
// function f(x) {
//   console.log(arguments);
//   arguments.length ? console.log(1) : console.log(0);
// }

// f(undefined); // 1
// f(); // 0

// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// Анаграмма - слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.

// let first = 'кабан';
// let second = 'казан';

// const anagramma = function (first, second) {
//   let firstArr = first.toLowerCase().split('').sort();
//   let secondArr = second.toLowerCase().split('').sort();
//   console.log(firstArr);
//   console.log(secondArr);
//   for (let i = 0; i < firstArr.length; i++) {
//     if (firstArr[i] !== secondArr[i]) {
//       return console.log('слова не являются анаграммой');
//     }
//   }

//   return console.log('слова прошли проверку');
// };

// anagramma(first, second);
// ________________________________________________________

// Cоздайте ф-ю конструктор, ItemToSale принимающую параметрами (size, type, color)
//  и содержащую метод для ведения статистики продаж saveToSatatistics.
// let statstics = {
//   soldGenaral: 0,
//   soldTshirts: 0,
//   soldJackets: 0,
// };

// const ItemToSale = function (size, type, color) {
//   this.size = size;
//   this.type = type;
//   this.color = color;

//   this.saveToSatatistics = function (sold) {
//     statstics.soldGenaral += sold;
//     this.type === 'Футболка'
//       ? (statstics.soldTshirts += sold)
//       : (statstics.soldJackets += sold);
//   };
// };

// let a = new ItemToSale('M', 'Футболка', 'Red');
// console.log(a);
// a.saveToSatatistics(10);
// console.log(statstics);

// let b = new ItemToSale('M', 'Куртка', 'black');
// console.log(b);
// b.saveToSatatistics(10);
// console.log(statstics);
// _______________________________________

// Напишите ф-цию конструктор, которая будет создавать избирателя (name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
//  статистики голосов и добавлять туда ключ (имя избирателя) и значение (имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы

// let voteStats = {
//   allVotes: 0,
//   obamaVotes: 0,
//   trumpVotes: 0,
//   showResults: function () {
//     if (this.obamaVotes === this.trumpVotes) {
//       console.log('Ждём перевыборов!');
//     } else if (this.obamaVotes > this.trumpVotes) {
//       console.log('На выборах победил Обама');
//     } else console.log('На выборах победил Трамп');
//   },
// };

// const CreateVoter = function (name) {
//   this.name = name;
//   this.presidentName = function (president) {
//     if (!voteStats.hasOwnProperty(`${this.name}`)) {
//       voteStats[`${this.name}`] = president;
//       voteStats.allVotes += 1;
//       if (president === 'Trump') {
//         voteStats.trumpVotes += 1;
//       } else {
//         voteStats.obamaVotes += 1;
//       }
//     } else console.log('Повторно голосовать нельзя!');
//   };
// };

// let ostapObj = new CreateVoter('ostap');
// console.log(ostapObj);
// ostapObj.presidentName('Obama');
// console.log(voteStats);
// let ostapObj2 = new CreateVoter('ostap');
// console.log(ostapObj2);
// ostapObj2.presidentName('Obama');
// console.log(voteStats);
// let valeraObj = new CreateVoter('valera');
// console.log(valeraObj);
// valeraObj.presidentName('Trump');
// console.log(voteStats);
// let iraObj = new CreateVoter('ira');
// console.log(iraObj);
// iraObj.presidentName('Trump');
// console.log(voteStats);
// voteStats.showResults();
// let alexObj = new CreateVoter('alex');
// alexObj.presidentName('Trump');
// console.log(voteStats);
// voteStats.showResults();

// const results = Object.values(voteStats);
// let trumpCount = 0;
// let obamaCount = 0;
// const result = function (array) {
//   for (let el of array) {
//     if (el === 'Trump') {
//       trumpCount += 1;
//     } else obamaCount += 1;
//   }
//   console.log(`${trumpCount}`, `${obamaCount}`);
// };

// result(results);

// console.log(results);

// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// const Calculator = function () {
//   this.read = function () {
//     this.a = prompt('Введите первое число');
//     this.b = prompt('Введите второе число');
//   };
//   this.sum = function () {
//     return Number(this.a) + Number(this.b);
//   };
//   this.mul = function () {
//     return Number(this.a) * Number(this.b);
//   };
// };

// let calculator = new Calculator();
// calculator.read();
// alert('Sum=' + calculator.sum());
// alert('Mul=' + calculator.mul());

// Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
// Ниже вы можете посмотреть работу кода:

// const Accumulator = function (startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     return (this.value += Number(prompt('Введите число')));
//   };
// };

// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений

// _______________________________________

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:

// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator();
// powerCalc.addMethod('*', (a, b) => a * b);
// powerCalc.addMethod('/', (a, b) => a / b);
// powerCalc.addMethod('**', (a, b) => a ** b);
// let result = powerCalc.calculate('2 ** 3');
// alert(result); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// let str = '';
// let array = [];

// const Calculator = function () {
//   this.calculate = function () {
//     this.str = prompt('Введите операцию в формате «ЧИСЛО оператор ЧИСЛО»');
//     this.array = this.str.split(' ');
//     if (this.array[1] === '+') {
//       return Number(this.array[0]) + Number(this.array[2]);
//     } else if (this.array[1] === '-') {
//       return Number(this.array[0]) - Number(this.array[2]);
//     }
//   };

//   this.addMethod = function (name, func) {};
// };

// let calc = new Calculator();
// alert(calc.calculate('3 + 7')); // 10

// _______________________________________

// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

// Вот так должен работать наш класс:

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   getSalary() {
//     let salary = 0;
//     salary = this.rate * this.days;
//     return salary;
//   }
// }

// let worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:

// class Worker {
//   constructor(name, surname, rate, days) {
//     this._name = name;
//     this._surname = surname;
//     this._rate = rate;
//     this._days = days;
//   }

//   get getName() {
//     return this._name;
//   }
//   get getSurname() {
//     return this._surname;
//   }
//   get getRate() {
//     return this._rate;
//   }
//   get getDays() {
//     return this._days;
//   }
//   get getSalary() {
//     return this._rate * this._days;
//   }
// }

// const worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.getName); //выведет 'Иван'
// console.log(worker.getSurname); //выведет 'Иванов'
// console.log(worker.getRate); //выведет 10
// console.log(worker.getDays); //выведет 31
// console.log(worker.getSalary); //выведет 310 - то есть 10*31

// Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:

// class Worker {
//   constructor(name, surname, rate, days) {
//     this._name = name;
//     this._surname = surname;
//     this._rate = rate;
//     this._days = days;
//   }

//   getSalaryFn() {
//     return this._rate * this._days;
//   }

//   get getName() {
//     return this._name;
//   }
//   get getSurname() {
//     return this._surname;
//   }
//   get getRate() {
//     return this._rate;
//   }
//   get getDays() {
//     return this._days;
//   }
//   get getSalary() {
//     return this._rate * this._days;
//   }
//   set setRate(rate) {
//     this._rate = rate;
//   }
//   set setDays(days) {
//     this._days = days;
//   }
// }

// const worker = new Worker('Иван', 'Иванов', 10, 31);
// worker.getRate; //выведет 10
// worker.getDays; //выведет 31
// worker.getSalary; //выведет 310 - то есть 10*31
// //Теперь используем сеттер:
// worker.setRate = 20; //увеличим ставку
// worker.setDays = 10; //уменьшим дни
// console.log(worker.getSalaryFn()); //выведет 200 - то есть 20*10
// console.log(worker);

// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
// Наш класс должен работать так:

// class MyString {
//   reverse(str) {
//     return str.split('').reverse().join('');
//   }
//   ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
//   ucWords(str) {
//     let words = '';
//     words = str.split(' ');
//     let newWords = [];
//     for (let el of words) {
//       el = el[0].toUpperCase() + el.slice(1);
//       newWords.push(el);
//     }
//     return newWords.join(' ');
//   }
// }

// const str = new MyString();
// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// let words = 'abcde abcde abcde';
// words = words.split(' ');
// console.log(words);
// for (let el of words) {
//   console.log(el);
//   el = el.charAt(0).toUpperCase() + el.slice(1);
//   console.log(el);
// }

// Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail (@,.,не пустая строка) параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain (только окнчание точка нейм, точка. ком) для проверки домена, метод isDate (10 символов, если разделить по точке - все числа) для проверки даты и метод isPhone для проверки телефона (был плюс, разделить по пробелам и проверить всё ли числа(). Есть метод убирает скобки и оставляет число):

// class Validator {
//   isEmail(str) {
//     if (str.length < 4) {
//       return 'Введенный email слишком короткий!';
//     }
//     if (str === '' || str.includes(' ')) {
//       return 'Ошибка. Строка с Email - пустая!';
//     }
//     if (str.includes('@') && str.includes('.')) {
//       return 'Email прошёл проверку';
//     }
//     return 'Введенный email не валиден!';
//   }

//   isDomain(str) {
//     if (str === '') {
//       return 'Ошибка. Строка с Domain - пустая!';
//     }
//     str = str.split('.')[1];
//     if (str === 'net' || str === 'com') {
//       return 'Domain прошёл проверку';
//     }
//     return 'Введенный domain не валиден!';
//   }

//   isDate(str) {
//     if (str === '') {
//       return 'Ошибка. Строка с датой - пустая!';
//     }
//     str = str.split('.');
//     if (str.length > 3) {
//       return 'Ошибка. неверный формат даты!';
//     }
//     for (let el of str) {
//       console.log();
//       if (isNaN(el) || el < 1) {
//         return 'Ошибка. Дата содержит лишние символы/буквы!';
//       }
//     }
//     return 'Введённая дата прошла проверку';
//   }

//   isPhone(str) {
//     if (str === '') {
//       return 'Ошибка. Строка с телефоном - пустая!';
//     }

//     if (!str.includes('+')) {
//       return 'Ошибка. Телефон указан в неверном формате. отсутствует +';
//     }
//     str = str
//       .split('+')
//       .join('')
//       .split(' ')
//       .join('')
//       .split('(')
//       .join('')
//       .split(')')
//       .join('')
//       .split('-')
//       .join('');
//     console.log(str);
//     console.log(isNaN(str));
//     // if (!Number.isNaN(+str)) {
//     //   return 'Ошибка. Телефон указан в неверном формате.';
//     // }
//   }
// }

// var validator = new Validator();
// console.log(validator.isEmail('@mail.ru'));
// console.log(validator.isDomain('phphtml.com'));
// console.log(validator.isDate('1205.2020'));
// console.log(validator.isPhone('+3 7)5(298 176892')); //тут можете формат своей страны

// let str = 'phphtml.net';

// console.log(str.split('.')[1]);

// let str = '12.05.2020';
// str = str.split('.');
// console.log(str);

// let obj = Object.create(null);
// obj.__proto__ = Object;
// console.log(obj);

// let users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
// ];

// const friends = users.reduce((acc, el, i) => {
//   if (!acc.includes(...el.friends)) {
//     console.log(acc);
//     acc.push(...el.friends);
//   }
//   return acc;
// }, []);

// console.log(friends);
// ___________________________________________________________

// TASKS
// I)
// 1) Написати ф-ю яка приймає рік
// 2) Повертає століття.

// console.log(getCentury(1000));

// II)
// 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// 2) Всі роки які вводить користувач записується в масив years
//  3) Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис
// 1952 рік - 20 століття
// 1440 рік - 15 століття
// const getCentury = function (year) {
//   let century = 0;
//   century = Math.floor(year / 100 + 1);
//   return century;
// };

// const getCenturyData = function () {
//   let years = [];
//   let year;
//   do {
//     year = prompt('Введите года');
//     year !== null ? years.push(year) : '';
//   } while (year !== null);
//   console.log(years);

//   years.forEach(el => {
//     console.log(`year: ${el} - ${getCentury(el)}`);
//   });
// };

// getCenturyData();

// III)
// 1) Написати ф-ю showYear що приймає рік і перевіряє чи він є високосний
// 2) Функція повертає true якщо рік високосний і false якщо ні

// const checkCentury = function (year) {
//   return year % 4 === 0;
// };
// console.log(checkCentury(1997));

const inventors = [
  {
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955,
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727,
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642,
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934,
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630,
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543,
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947,
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979,
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852,
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905,
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968,
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909,
  },
];
// - Вывести массив имён учёных/изобретателей
// - Вывести массив тех кто родился в 19-ом веке
// - Вывести массив тех, кто прожил больше 50-ти лет
// - Найти того, кто работал с радиацией и добавить ей свойство "замужем", в значение запистаь имя мужа
// - Вывести фамилии тех, в чьём имени есть буква "е"
// - Получить массив объектов отсортированный по имени (по алфавиту).
// - Найти сумму лет жизни всех учёных

// const findNames = array => array.map(el => el.first);
// const findCentury = array =>
//   array.filter(el => 1799 < el.year && el.year < 1900);
// const longLiver = array => array.filter(el => el.passed - el.year > 50);
// const radiation = array =>
//   array.find(el => (el.last === 'Curie' ? (el.married = 'Pierre') : ''));
// const nameIncludes = array =>
//   array
//     .filter(array => array.first.includes('e'))
//     .forEach(el => console.log(el.last));
// const sortNames = array =>
//   array.sort((a, b) => {
//     let nameA = a.first;
//     let nameB = b.first;
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     return 0;
//   });
// const yearsSum = array =>
//   array.reduce((acc, years) => acc + (years.passed - years.year), 0);
// console.log(findNames(inventors));
// console.log(findCentury(inventors));
// console.log(longLiver(inventors));
// console.log(radiation(inventors));
// console.log(nameIncludes(inventors));
// console.log(sortNames(inventors));
// console.log(yearsSum(inventors));
// ________________________________________________________________________________

// написати ф-ю getSalary(worker, rate) яка приймає аргументами обєкт робітника і погодинну ставку.
// Ф-я вертає зарплату робітника за тиждень з урахуванням штрафів і премій
// hours - години роботи
// value - сума штрафу
// premium - премія

// let worker = {
//   workSchedule: [
//     { day: 'M', hours: 9 },
//     { day: 'T', hours: 10 },
//     { day: 'W', hours: 11 },
//     { day: 'T', hours: 5 },
//     { day: 'F', hours: 12 },
//   ],
//   penalty: [
//     { day: 'M', value: 0 },
//     { day: 'T', value: 120 },
//     { day: 'W', value: 50 },
//     { day: 'T', value: 0 },
//     { day: 'F', value: 35 },
//   ],
//   premium: 500,
// };

// function getSalary(worker, rate) {
//   let salary = 0;
//   let hours = worker.workSchedule.reduce((acc, el) => {
//     return acc + el.hours;
//   }, 0);

//   let penaltyTotal = worker.penalty.reduce((acc, el) => {
//     return acc + el.value;
//   }, 0);
//   salary = hours * rate - penaltyTotal + worker.premium;
//   return salary;
// }

// console.log(getSalary(worker, 20)); // 1235
// console.log(getSalary(worker, 8)); // 671

// Напишите ф-ю которая принимает строку и возвращает объект с количеством каждого символа в строке

// const countLetter = function (str) {
//   str = str.split('').reduce((acc, el) => {
//     if (!acc.hasOwnProperty(el)) {
//       acc[el] = 0;
//     }
//     acc[el] += 1;
//     return acc;
//   }, {});
//   return str;
// };
// console.log(countLetter('W3sc chool.com'));

// Напишите ф-ю которая принемает строку и возвращает количество гласных букв в строке

// let vowels = ['a', 'e', 'i', 'o', 'u'];
// const countOfVowels = function (str) {
//   str = str
//     .toLowerCase()
//     .split('')
//     .reduce((acc, el) => {
//       vowels.includes(el) ? (acc += 1) : '';
//       return acc;
//     }, 0);
//   return str;
// };

// console.log(countOfVowels('The quick brown fox')); // 5
// console.log(countOfVowels('Example string')); // 4
// console.log(countOfVowels('Go to the editor')); // 6

// Дан непустой массив целых чисел (X). В этой задаче вам нужно вернуть массив, состоящий только из неуникальных элементов данного массива. Для этого необходимо удалить все уникальные элементы (которые присутствуют в данном массиве только один раз). Для решения этой задачи не меняйте оригинальный порядок элементов. Пример: [1, 2, 3, 1, 3], где 1 и 3 неуникальные элементы и результат будет [1, 3, 1, 3].

// первый способ
// const nonUniqueElements = function (arr) {
//   return arr.filter(
//     (el, idx, arr) => arr.lastIndexOf(el) !== idx || arr.indexOf(el) !== idx,
//   );
// };

// второй способ
// const nonUniqueElements = function (array) {
//   let res = array.filter(el => {
//     let tmp = array.slice();
//     console.log(tmp);
//     let a = tmp.splice(tmp.indexOf(el), 1);
//     console.log(a);
//     return tmp.includes(...a);
//   });
//   return res;
// };

// const nonUniqueElements = function (arr) {};
// let arr = [1, 2, 3, 1, 3];
// let a = arr.filter((item, index) => arr.indexOf(item) !== index);
// console.log(a);

// console.log(nonUniqueElements([1, 2, 2, 1, 3])); // [1, 3, 1, 3]
// console.log(nonUniqueElements([1, 2, 3, 4, 5])); // []
// console.log(nonUniqueElements([5, 5, 5, 5, 5])); // [5, 5, 5, 5, 5]
// console.log(nonUniqueElements([10, 9, 10, 10, 9, 8, 1, 2, 3])); // [10, 9, 10, 10, 9]

// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

// let user = { name: 'John', years: 30 };
// let { name, years: age, isAdmin = false } = user;

// // ваш код должен быть с левой стороны:
// // ... = user

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false
// -----------------------------
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// const topSalary = function (salaries) {
//   let salary = Object.entries(salaries);
//   console.log(salary);
//   let maxSalary = null;
//   let worker = '';
//   salary.forEach(([key, value]) => {
//     value > maxSalary ? ((maxSalary = value), (worker = key)) : '';
//   });
//   console.log(maxSalary);
//   console.log(worker);
//   return `Самый крутой работник: ${worker} его З/П - ${maxSalary}`;
// };
// console.log(topSalary(salaries));
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
// ___________________________________________
