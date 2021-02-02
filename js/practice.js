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

// const inventors = [
//   {
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955,
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727,
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642,
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934,
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630,
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543,
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947,
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979,
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852,
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905,
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968,
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909,
//   },
// ];
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

// 1) найти объект бади и изменить его стиль. Задать красный бекграунд.

// let body = document.querySelector('body');
// let random = Math.round(Math.random() * 255);
// body.style.backgroundColor = `rgb(${random},${random},${random})`;

// for (let i = 0; i < 3; i++) {
//   let div = document.createElement('div');
//   body.append(div);
//   div.textContent = 'some text';
//   div.style.fontSize = '55px';
//   div.classList.add('container');
// }

// 2) Дан список в штмл. Вставьте в него 3 лишки с текстом
// let list = document.querySelector('ul');
// console.log(list);

// for (let i = 0; i < 3; i++) {
//   let listElement = document.createElement('li');
//   list.append(listElement);
// }

// 3)Создайте 5 красных кругов 100х100 пикселей (стили подключаються в цсс)

// for (let i = 0; i < 5; i++) {
//   let div = document.createElement('div');
//   body.append(div);
//   div.classList.add('redCircle');
//   div.textContent = `${i}`;
// }

// 4)Добавьте всем дивам нумерацию (в свойство текст контент записывается какой это по счёту див)

// let allDivs = document.querySelectorAll('div');
// allDivs.forEach((el, i) => (el.textContent = `${i}`));

// // 5)Создайте 3 картинки с котиками за одно операцию
// for (let i = 0; i < 3; i++) {
//   let cat = document.createElement('img');
//   cat.src =
//     'https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png';
//   body.append(cat);
// }

// 6)Создайте 3 рандомные картинки с котиками за одну операцию

// for (let i = 0; i < 3; i++) {
//   let cat = document.createElement('img');
//   let idRandom = Math.round(Math.random() * 200);
//   cat.src = `https://picsum.photos/id/${idRandom}/200/300`;
//   body.append(cat);
// }

// --------------------------------------------
// Шашличний калькулятор ))
// 1) Створити в HTML розмітку:
// 1.1) Заголовок "Скільки коштує мясо на шашлики?"
// 1.2) Форму з двома інпутами і підписами до них.
// В першому інпуті №1 вказуємо ціну за кілограм мяса (можна і з копійками до другого знаку після коми)
// В другому інпуті №2 вибираємо через range кількість кілограм
// 1.3) Справа внизу відображається загальга вартість мяса.
// 2 ) Написати скрипт який буде рахувати загальну вартість мяса і виводити її на екран
// 3) При змінні данних в інпуті №1 чи №2 автоматично має перераовуватися загальна вартість
// 4) Завжди має відображатися валюта - гривня
// 5) Загальна сума відображається з копійками (2 знаки після коми)
// 6) В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.
// 7) Кольрова підказка має змінювати своє значення при перетягувані повзунка.
// 8) В інпуті №2 мін і мах поріг встановлюєте самостійно.
// 9) При завантаженні сторінки скрип має автоматично розрахувати вартість на основі данних за замовчуванням які ви встановите в розмітці.
// 10) Оформлення на свій смак.
// 1) Отримати доступ до інпутів +
// 2) Розраховуємо вартість +
// 3) Показуємо результат на екрані +
// 4) Перезаписуємо синій квадрат +
// 5) Вартість 2 знака після коми і валюта +
// 6) Подія на Форму +
// 7) Запускати ф-ю при завантаженні сторінки+

// const priceInput = document.querySelector('#price-input');
// const priceOutput = document.querySelector('#price-output');
// const volumeInput = document.querySelector('#volume-input');
// const volumeOutput = document.querySelector('#volume-output');

// priceInput.addEventListener('input', event => {
//   let price = event.target.value * 100;
//   let volume = volumeInput.value * 100;
//   priceInput.value === ''
//     ? (priceOutput.textContent = 'укажите цену в')
//     : (priceOutput.textContent = Math.round((price * volume) / 100) / 100);
// });

// volumeInput.addEventListener('change', event => {
//   volumeOutput.textContent = event.target.value;
//   priceOutput.textContent =
//     Math.round((100 * event.target.value * (priceInput.value * 100)) / 100) /
//     100;
//   volumeOutput.classList.remove(...volumeOutput.classList);
//   if (event.target.value < 30 && event.target.value >= 20) {
//     volumeOutput.classList.add('violet');
//   } else if (event.target.value < 20) {
//     volumeOutput.classList.add('green');
//   } else volumeOutput.classList.add('tomato');
// });

// Crazy button
// 1) Додати подію яка реагує на наведення мишки +
// 2) Змінити координати Кнопки на випадкові +
// 3) Кнопка не повинна залишати межі екрану

// let crasy = document.querySelector('.crasy');
// crasy.style.top = '50%';
// crasy.style.left = '50%';

// crasy.addEventListener('mouseover', e => {
//   let random = Math.round(Math.random() * 90);
//   let random2 = Math.round(Math.random() * 90);
//   let random3 = Math.round(Math.random() * 90);
//   let random4 = Math.round(Math.random() * 90);

//   crasy.style.top = `${random}%`;
//   crasy.style.left = `${random2}%`;
//   crasy.style.right = `${random3}%`;
//   crasy.style.bottom = `${random4}%`;
// });

// window.addEventListener(
//   'scroll',
//   // _.throttle(() => {
//   //   console.log('Scroll event handler invocation every 300ms.');
//   // }, 300),
//   _.debounce(() => {
//     console.log(
//       'Input event handler invocation after 300ms of inactivity past burst.',
//     );
//   }, 300),
// );

// document.querySelector('input').addEventListener(
//   'input',
//   _.debounce(() => {
//     console.log(
//       'Input event handler invocation after 300ms of inactivity past burst.',
//     );
//   }, 300),
// );

// /1) Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'.
// Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'.
// Это должно работать и для вновь добавленных li.
// Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).

// const controlBtn = document.querySelector('.control');
// const list = document.querySelector('.list');

// controlBtn.addEventListener('click', () => {
//   list.insertAdjacentHTML('beforeend', '<li>пункт</li>');
// });

// list.addEventListener('click', event => {
//   console.log(event.target.nodeName);
//   event.target.nodeName === 'LI' ? (event.target.textContent += '!') : '';
// });

//2) Дан список с именами юзеров ul>li>p. Под таблицей сделайте форму form>input+input, с помощью которой можно будет добавить нового юзера в список.
//  Сделайте так, чтобы при клике на любой елемент появлялся prompt, с помощью которого можно изменить текст имени.
//  Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).

// const input = document.querySelector('.input');
// const submitBtn = document.querySelector('.submit');
// const userList = document.querySelector('.user-list');
// console.log(userList);

// submitBtn.addEventListener('click', event => {
//   event.preventDefault();
//   let user = input.value;
//   userList.insertAdjacentHTML('beforeend', `<li><p>${user}</p></li>`);
// });

// userList.addEventListener('click', event => {
//   if (event.target.nodeName === 'P') {
//     let text = prompt(
//       'Введите имя и фамилию пользователя, которого нужно добавить',
//     );
//     event.target.textContent = text;
//   }
// });

// 3) Напишите ф-цию подсчёта количества  нажатий мышки за отрезок времени (используйте throttle),
// выводите в консоль "Вы кликнули N раз за Т милисекунд"

// const calcClicks = function (timeout) {
//   let count = 1;
//   window.addEventListener(
//     'click',
//     _.throttle(() => {
//       window.onclick = () => (count += 1);
//       console.log(`Вы кликнули ${count} раз за ${timeout} ms`);
//       count = 1;
//     }, timeout),
//   );
// };
// calcClicks(1000);

// let n = 0;
// document.addEventListener('click', () => {
//   n++;
// });
// document.addEventListener(
//   'click',
//   _.throttle(() => {
//     console.log(`Вы кликнули ${n} раз за 1000 милисекунд`);
//     n = 0;
//   }, 1000),
// );

// Создайте компонент галлереи изображений следующего вида.

// Реализуйте функционал:
//   - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
//   - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
//     создается динамически при загрузке страницы.
//   - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
//     он содержит ссылку на большое изображение. preview и его элементы, также создаются
//     динамически, при загрузке страницы.
//   - При клике в элемент preview, необходимо подменить src тега img внутри fullview
//     на url из data-атрибута выбраного элемента.
//   - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
//   - Изображений может быть произвольное количество.
//   - Используйте делегирование для элементов preview.
//   - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
//   - CSS-оформление и имена классов на свой вкус.
//  Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
//   размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
//   Подберите изображения одинаковых пропорций.

// Массив объектов с данными для создания компонента выглядит следующим образом.
// Замените пути на соотвествующие вашим, или назовите изображения аналогично.

// const galleryItems = [
//   { preview: './img/1s.jpeg', fullview: './img/1L.jpeg', alt: 'alt text 1' },
//   { preview: './img/2s.jpeg', fullview: './img/2L.jpeg', alt: 'alt text 2' },
//   { preview: './img/3s.jpeg', fullview: './img/3L.jpeg', alt: 'alt text 3' },
//   { preview: './img/4s.jpeg', fullview: './img/4L.jpeg', alt: 'alt text 4' },
//   { preview: './img/5s.jpeg', fullview: './img/5L.jpeg', alt: 'alt text 5' },
//   { preview: './img/6s.jpeg', fullview: './img/6L.jpeg', alt: 'alt text 6' },
// ];

// const fullview = document.querySelector('.fullview>img');
// console.log(fullview.src);
// const preview = document.querySelector('.preview');
// const modalOpenBtn = document.querySelector('.modal-open');
// const backdrop = document.querySelector('.backdrop');
// const container = document.querySelector('.container');

// modalOpenBtn.addEventListener('click', () => {
//   backdrop.classList.add('is-open');
//   container.classList.add('is-open');
//   backdrop.addEventListener('click', event => {
//     console.log(event.currentTarget);
//     console.log(event.target);
//     if (event.currentTarget === event.target) {
//       backdrop.classList.remove('is-open');
//       container.classList.remove('is-open');
//     }
//   });
// });

// galleryItems.forEach(image => {
//   preview.insertAdjacentHTML(
//     'beforeend',
//     `<li class=preview-item>
//   <img src="${image.preview}"
//   data-fullview="${image.fullview}"
//   alt="${image.alt}"/></li>`,
//   );
// });

// const previewItem = document.querySelectorAll('.preview-item');

// preview.addEventListener('click', event => {
//   if (event.target.nodeName === 'IMG') {
//     previewItem.forEach(el => {
//       el.classList.remove('active');
//     });
//     fullview.src = event.target.dataset.fullview;
//     event.target.parentNode.classList.toggle('active');
//   }
// });

// добавить элемент. Появляется модалка с импутами и кнопкой. 1-й срси, дата срс, альт и при сабмите добавляется картинка
// _________________________________ Учусь делать экспорт
// import gallery from './gallery.js';
// console.log(gallery);

// import { name, surname } from './gallery.js';
// console.log(name, surname);

// import { test } from './gallery.js';

// console.log(test);

// let date = new Date();

// // формат вывода
// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
// };

// const localeUk = date.toLocaleString('Uk-uk', options);
// console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42

// const date = new Date();

// // проверим количество мс с с начала эпохи Unix
// console.log(`Время в мс с начала эпохи Unix: ${date.getTime()}`);
// // "Время в мс с начала эпохи Unix: ....  значения будут меняться :-)
// // "Время в мс с начала эпохи Unix: 1504721892483"

// let result = 'Date: ';
// result += date.getFullYear() + '/'; // год
// result += date.getMonth() + '/'; // месяц, начиная с 0
// result += date.getDate() + '. Day of week: '; // день недели, начиная с 1
// result += date.getDay() + '.'; // день , начиная с 0

// result += ' Time: ' + date.getHours() + ':'; // часы
// result += date.getMinutes() + ':'; // минуты
// result += date.getSeconds() + ':'; // секунды
// result += date.getMilliseconds() + ''; // милисекунды

// // строка должна показать текущее время и дату
// console.log(result); // "Date: 2017/8/6. Day of week: 3. Time: 21:18:12:483"
// // ...  значения будут меняться :-)

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);

// console.log(parsedSettings);

// ___________________________________________________________________
// DATA PRACTICE
// Создать секундомер
// На старт нельзя нажать больше одного раза
// Нажав на стоп - пауза (+текст кнопки меняется на reset), нажав повторно кнопку (reset) - обнуление.
// При паузе можно нажать старт и продолжить с момента остановки
// Добавить к секундам десятые = 0.6s
// 5. Когда таймер доходит до 60-ти секунд - у нас добавляется показатель минут
// 6. Добавляем 3-ую кнопку Lap (круг), при нажатии на которую фиксируется текущее значение секундомера (не останавливая его) и добавляется это значение в список на экране
// 7.Сделайте так, чтоб при перезагрузке страницы сохранялось состояние таймера и сделанные круги

// const startBtn = document.querySelector('button[data-action=start]');
// const stopBtn = document.querySelector('button[data-action=stop]');
// const timerValue = document.querySelector('.timer');
// const lapBtn = document.querySelector('button[data-action=lap]');
// const lapValue = document.querySelector('.laps');

// let timer = +localStorage.getItem('timer') || 550;
// let timerId = null;
// let mins = +localStorage.getItem('mins') || 0;
// let secs = +localStorage.getItem('timer') / 10 || 0;
// lapValue.innerHTML = localStorage.getItem('laps') || '';
// timerValue.textContent = localStorage.getItem('timerValue') || 0;
// stopBtn.disabled = true;

// const updateTime = function () {
//   secs = timer / 10;
//   if (mins === 0) {
//     timerValue.textContent = secs + 's';
//     localStorage.setItem('timerValue', timerValue.textContent);
//   } else {
//     timerValue.textContent = mins + ' min ' + secs + 's';
//     localStorage.setItem('timerValue', timerValue.textContent);
//   }

//   if (timer >= 600) {
//     timer -= 600;
//     mins += 1;
//     localStorage.setItem('mins', mins);
//   }
// };

// startBtn.addEventListener('click', event => {
//   event.target.disabled = true;
//   stopBtn.disabled = false;
//   stopBtn.textContent = 'STOP';
//   timerId = setInterval(() => {
//     timer += 1;
//     localStorage.setItem('timer', timer);
//     updateTime();
//   }, 100);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timerId);
//   if (stopBtn.textContent === 'RESET') {
//     timer = 0;
//     timerValue.textContent = 0;
//     mins = 0;
//     secs = 0;
//     localStorage.clear();
//     lapValue.textContent = '';
//     stopBtn.textContent = 'STOP';
//     stopBtn.disabled = true;
//   } else {
//     stopBtn.textContent = 'RESET';
//   }
//   startBtn.disabled = false;
// });

// lapBtn.addEventListener('click', () => {
//   lapValue.innerHTML += `<li>${timerValue.textContent} круг</li>`;
//   // lapValue.textContent += secs + ' круг ';
//   localStorage.setItem('laps', lapValue.innerHTML);
// });

// ____________________Promise__________________________________

// Напищите ф-цию, которая возвращает промис.
// Имитируете получение данных.
// Есть массив с разными типами данных (берете случайный элемент).
// Первый then возвращает тип данных элемента, второй - его длину (если она есть), третий - возводит в квадрат (если число)
// Catch ловит ошибки(undefined, false, 0, '')
// const array = [{ a: 1 }, [], 'Hello', '', null, true, false, undefined, 5];
// const arr2 = [5, 5, 5, 5, 5, 5, 5, 5];

// const smth = arr => {
//   let index = Math.round(Math.random() * (arr.length - 1));
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(arr[index]);
//       arr[index] ? res(arr[index]) : rej(arr[index]);
//     }, 1000);
//   });
// };

// smth(array)
//   .then(data => {
//     console.log(typeof data);
//     return data;
//   })
//   .then(data => {
//     data.length || data.length === 0 ? console.log(data.length) : '';
//     typeof data === 'object' ? console.log(Object.keys(data).length) : '';
//     return data;
//   })
//   .then(data => {
//     typeof data === 'number' ? console.log(data * data) : '';
//     return data;
//   })
//   .catch(data =>
//     data === ''
//       ? console.error('Пришла пустая строка')
//       : console.error(`Ошибка: ${data}`),
//   );

// console.log(typeof array[8]);
// console.log(typeof []);

// задача
// поведение
// объект с телефоном
// в объекте есть юрл картинки на телефон
// в одном из зенов делали рендер картинки если получили
// в кетче писали, сори не сегодня

// const phone = {
//   name: 'nokia',
//   model: '7210',
//   src:
//     'https://rarephones.ru/image/cache/catalog/products/nokia/nokia7210supernova/nokia7210supernova-600x600.jpg',
// };
// const body = document.querySelector('body');

// const giftPhone = obj => {
//   let random = Math.random();
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       random > 0.3 ? res(obj) : rej('Не повезло тебе с телефоном, друг!');
//     }, 1000);
//   });
// };

// giftPhone(phone)
//   .then(data => {
//     setTimeout(() => {
//       body.innerHTML = `<h1>Это же НОКИИИЯ СЕМЬДЕСЯТ ДВА ДЕСЯТЬ!!!</h1> <img src=${data.src}>`;
//     }, 2000);
//   })
//   .catch(err => {
//     setTimeout(() => {
//       body.innerHTML += `<h1>${err}</h1>`;
//     }, 2000);
//   })
//   .finally(() => {
//     body.innerHTML = ` <img
//     src="https://www.onlygfx.com/wp-content/uploads/2017/11/grunge-circle-frame-4.png"
//     class="loader"
//   />`;
//   });
// ____________________________________________________________

// имя, логин, аватарка, тип (юзер, админ)
// 1. Карточки юзеров (Аватар, id, логин, тип)
// 2. В карточке кнопки (followers & following)
// 3. При нажатии на кнопку - открывается модалка со списком людей (имя и маленькая аватарка)

// const userList = document.querySelector('.user-cards');
// const followersList = document.querySelector('.followers-list');
// const followingList = document.querySelector('.following-list');
// const modal = document.querySelector('.modal-window');
// let usersArr = [];
// // console.log(userList);
// const api = 'https://api.github.com/users';

// const getUsers = function (api) {
//   fetch(api)
//     .then(data => data.json())
//     .then(data => {
//       data.forEach(el => {
//         userList.innerHTML += `<li><img src=${el.avatar_url}><h2>${el.login}</h2><p>id: ${el.id}</p><p>type: ${el.type}</p><button data-index="${el.id}" class="followers" type="button">Followers</button> <button data-index="${el.id}" class="following" type="button">Following</button></li>`;
//         usersArr.push(el);
//       });

//       return data;
//     });
// };

// getUsers(api);
// let index;

// userList.addEventListener('click', event => {
//   event.path.forEach(el => {
//     if (el.nodeName === 'BUTTON' && el.className === 'followers') {
//       index = el.dataset.index;
//       let fetchApi = usersArr[index - 1].followers_url;
//       fetch(fetchApi)
//         .then(data => data.json())
//         .then(data => {
//           data.forEach(el => {
//             followersList.innerHTML += `<li><img src=${el.avatar_url}><h2>${el.login}</h2></li>`;
//             modal.classList.add('is-open');
//           });
//         });
//     } else if (el.nodeName === 'BUTTON' && el.className === 'following') {
//       index = el.dataset.index;
//       let fetchApi = usersArr[index - 1].subscriptions_url;
//       fetch(fetchApi)
//         .then(data => data.json())
//         .then(data => {
//           data.forEach(el => {
//             followersList.innerHTML += `<li><img src=${el.owner.avatar_url}><h2>${el.name}</h2></li>`;
//             modal.classList.add('is-open');
//           });
//         });
//     }
//   });
//   modal.addEventListener('click', event => {
//     if (event.currentTarget === event.target) {
//       modal.classList.remove('is-open');
//       followersList.innerHTML = '';
//     }
//   });
//   window.addEventListener('keydown', event => {
//     if (event.code === 'Escape') {
//       modal.classList.remove('is-open');
//       followersList.innerHTML = '';
//     }
//   });
// });

// console.log(usersArr);

// let index;
//   event.path.forEach(el => {
//     if (el.nodeName === 'LI') {
//       index = el.dataset.index;
//       document.querySelector('.show-product').src = products[index - 1].link;
//       document.querySelector('.modal-product-desc').textContent =
//         products[index - 1].desc;
//       document.querySelector('.modal-product-price').textContent =
//         products[index - 1].price;
//     }
//   });

// const token = '1355597204:AAGPu4YeV8fif43aztGsMWr7XeKpQhJTuBg';
// const chat_id = -1001136944219;

// const renderMsg = function (data) {
//   data.forEach(({ message }) => {
//     if (message.text) {
//       document.querySelector('.chat').innerHTML += `<div>
//       <h2>${message.from.first_name} ${message.from.last_name || ''}</h2>
//       <p>${message.text}</p>
//       <h4>time:${new Date(message.date * 1000).toLocaleTimeString()}</h4>
//       </div>`;
//     } else if (message.sticker) {
//       fetch(
//         `https://api.telegram.org/bot${token}/getFile?file_id=${message.sticker.file_id}`,
//       )
//         .then(data => data.json())
//         .then(({ result }) => {
//           document.querySelector('.chat').innerHTML += `<h2>${
//             message.from.first_name
//           } ${message.from.last_name || ''}</h2>
//       <img src="https://api.telegram.org/file/bot${token}/${result.file_path}">
//       <h4>time:${new Date(message.date * 1000).toLocaleTimeString()}</h4>`;
//         });
//     } else if (message.photo) {
//       fetch(
//         `https://api.telegram.org/bot${token}/getFile?file_id=${message.photo[0].file_id}`,
//       )
//         .then(data => data.json())
//         .then(({ result }) => {
//           document.querySelector(
//             '.chat',
//           ).innerHTML += `<img src=https://api.telegram.org/file/bot${token}/${result.file_path}></img>`;
//         });
//     } else if (message.animation) {
//       fetch(
//         `https://api.telegram.org/bot${token}/getFile?file_id=${message.animation.file_id}`,
//       )
//         .then(data => data.json())
//         .then(({ result }) => {
//           document.querySelector(
//             '.chat',
//           ).innerHTML += `<video type="video/mp4" muted autoplay loop src=https://api.telegram.org/file/bot${token}/${result.file_path}></video>`;
//         });
//     }
//   });
// };

// const getChat = function () {
//   fetch(`https://api.telegram.org/bot${token}/getUpdates`)
//     .then(resp => resp.json())
//     .then(({ result }) => {
//       console.log(result);
//       return result;
//     })
//     .then(renderMsg);
// };

// getChat();

// const sendMsg = function (event) {
//   event.preventDefault();
//   let dataObj = {};
//   [...event.target.children].forEach(el =>
//     el.name ? (dataObj[el.name] = el.value) : '',
//   );

//   fetch(
//     `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=NAME:
//     ${dataObj.name},
//     PHONE: ${dataObj.phone},
//     FEEDBACK: ${dataObj.feedback}`,
//   ).then();
// };

// // fetch(
// //   `https://api.telegram.org/bot${token}/sendMessage?chat_id=136028109&text=hi`,
// // );

// document.querySelector('form').addEventListener('submit', sendMsg);

// fetch(
//   `https://api.telegram.org/bot${token}/getfile?file_id=CAACAgIAAx0CQ8RkWwADC1-cBk3-UuKgXRcGUw5n_I80miybAAK7AgACNnYgDtmgMuGbYT2PGwQ`,
// )
//   .then(data => data.json())
//   .then(data => console.log(data));

// https://api.telegram.org/file/bot1355597204:AAGPu4YeV8fif43aztGsMWr7XeKpQhJTuBg/stickers/file_0.webp

// const fn = async function () {
//   let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

//   return response;
// };

// console.log(fn());

// async function loadJson(url) {
//   let result = await fetch(url);
//   console.log(result);
//   if (result.status == 200) {
//     return await result.json();
//   } else {
//     return new Error(result.status);
//   }
// }

// // loadJson('no-such-user.json') // (3)
// //   .catch(alert); // Error: 404
// console.log(loadJson('https://pokeapi.co/api/v2/pokemon/ditto'));

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }
// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new HttpError(response);
//   }

//   // return fetch(url).then(response => {
//   //   if (response.status == 200) {
//   //     return response.json();
//   //   } else {
//   //     throw new HttpError(response);
//   //   }
//   // });
// }
// Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {
//   let data;
//   try {
//     let name = prompt('Введите логин?', 'iliakan');
//     data = await loadJson(`https://api.github.com/users/${name}`);
//     alert(`Полное имя: ${data.name}.`);
//     return data;
//   } catch (err) {
//     if (err instanceof HttpError && err.response.status == 404) {
//       alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
//       return demoGithubUser();
//     } else {
//       throw err;
//     }
//   }
//   // return loadJson(`https://api.github.com/users/${name}`)
//   //   .then(user => {
//   //     alert(`Полное имя: ${user.name}.`);
//   //     return user;
//   //   })
//   //   .catch(err => {
//   //     if (err instanceof HttpError && err.response.status == 404) {
//   //       alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
//   //       return demoGithubUser();
//   //     } else {
//   //       throw err;
//   //     }
//   //   });
// }
// demoGithubUser();

// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   return 10;
// }
// function f() {
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
//   wait().then(data => console.log(data));
// }

// f();

// let url = 'https://pokeapi.co/api/v2/pokemon';

// const getImage = async function (url) {
//   let pokeImage = await fetch(url)
//     .then(result => result.json())
//     .then(({ sprites }) => sprites.front_default);
//   console.log(pokeImage);
//   return pokeImage;
// };

// const observePoke = async function () {
//   let images = [];
//   let pokeData = await fetch(url)
//     .then(response => response.json())
//     .then(({ results }) => results);
//   console.log(pokeData);

//   pokeData.forEach(el => {
//     images.push(getImage(el.url));
//     console.log(images);
//   });
//   return Promise.all(images);
// };

// let arr = observePoke();

// arr.then(response => render(response));

// const render = async function (arr) {};

// const url = 'https://pokeapi.co/api/v2/pokemon';
// const fn = async () => {
//   const pokes = await fetch(url)
//     .then(res => res.json())
//     .then(({ results }) => results);
//   console.log(pokes); //тут получил уже готовый массив ендпоинтов покемонов
//   const imgUrlsPromises = pokes.map(async poke => {
//     let img = await fetch(poke.url)
//       .then(res => res.json())
//       .then(res => res.sprites.front_default);
//     console.log(img);
//     return img;
//   });
//   console.log(imgUrlsPromises); //Тут получил массив промисов с адресами картинок
//   render(imgUrlsPromises); //тут ждем пока нарисует
// };
// async function render(arr) {
//   let images = await Promise.all(arr); //тут получаю уже все адреса всех картинок из промисов
//   images.forEach(el => {
//     const imgUrl = el;
//     document.body.insertAdjacentHTML('beforeend', `<img src=${imgUrl}>`);
//   });
//   const imgArr = document.querySelectorAll('img');
//   console.log(imgArr);
// }
// fn();

// let a = new (Date.bind.apply(Date, [null].concat([1993, 3, 24])))();
// console.log(a);

// const songs = [
//   { id: 1, name: 'fdsfaa', artist: 'Mastodon' },
//   { id: 2, name: 'blabla', artist: 'kaka' },
//   { id: 3, name: 'blabafsdla', artist: 'kaka' },
// ];

// console.log(songs[0]);

// // ES6
// const obj = songs.reduce((acc, currValue) => {
//   const artist = currValue.artist;
//   const artistCount = acc[artist] ? acc[artist] + 1 : 1;
//   console.log(acc);

//   return {
//     ...acc,
//     [artist]: artistCount,
//   };
// }, {});

// console.log(obj); // {Mastodon: 2, Gojira: 2}

// const test = { Mastodon: 1, kaka: 1 };
// console.log(test[1]);

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

// const obj = {
//   a: 1,
//   b: 2,
//   c() {
//     console.log(this);
//   },
// };
// const objCopy = JSON.parse(JSON.stringify(obj));
// console.log(objCopy);

// const matrix = [
//   [1, 2],
//   [4, 3],
// ];

// const spiral = function (matrix) {
//   let colStart = 0;
//   let rowStart = 0;
//   let rowEnd = matrix.length;
//   let colEnd = matrix[0].length;

//   let result = [];

//   while (rowStart <= rowEnd && colStart <= colEnd) {
//     for (let i = colStart; i < colEnd; i++) {
//       result.push(matrix[rowStart][i]);
//     }
//     rowStart++;

//     for (let i = rowStart; i < rowEnd; i++) {
//       result.push(matrix[i][colEnd - 1]);
//     }
//     colEnd--;

//     if (rowStart < rowEnd) {
//       for (let i = colEnd - 1; i >= colStart; i--) {
//         console.log(i);
//         result.push(matrix[rowEnd - 1][i]);
//       }
//       rowEnd--;
//     }

//     if (colStart < colEnd) {
//       for (let i = rowEnd - 1; i >= rowStart; i--) {
//         result.push(matrix[i][colStart]);
//       }
//       colStart++;
//     }
//   }

//   console.log(result);
// };

// spiral(matrix);

// const randomFunc = () => {
//   let randomNumber;
//   let generatedNumbers = [];
//   let arrBeforeRepeate = [];

//   const generateNumber = () => {
//     randomNumber = Math.floor(1 + Math.random() * 20);
//     if (generatedNumbers.includes(randomNumber)) {
//       console.log('randomNumber is ', randomNumber);
//       arrBeforeRepeate = [...generatedNumbers];
//       generatedNumbers = [];
//       return arrBeforeRepeate;
//     }
//     generatedNumbers.push(randomNumber);
//     console.table(generatedNumbers);
//     return randomNumber;
//   };
//   return generateNumber;
// };

// let test = randomFunc();
// let test2 = randomFunc();
// console.log(test());
// console.log(test());
// console.log('test2: ', test2());
// console.log('test2: ', test2());
// console.log('test2: ', test2());
// console.log('test2: ', test2());
// console.log(test());

// console.log(test());

// console.log(test());
// console.log(test());
// console.log(test());
// console.log(test());
// console.log(test());
// console.log(test());

// console.log('test2: ', test2());
// console.log('test2: ', test2());
// console.log('test2: ', test2());
// console.log('test2: ', test2());
// console.log('test2: ', test2());
// console.log('test2: ', test2());
// console.log('test2: ', test2());

// let someFn = number => {
//   let first = new Promise(res => {
//     setTimeout(() => {
//       console.log(number * number);
//       res(number * number);
//     }, 3000);
//   });
// }

//   first.then(data =>
//     setTimeout(() => {
//       console.log(data * data);
//     }, 3000),
//   );

// doSomething(function(result) {
//     doSomethingElse(result, function(newResult) {
//       doThirdThing(newResult, function(finalResult) {
//         console.log('Ось фінальний результат: ' + finalResult);
//       }, failureCallback);
//     }, failureCallback);
//   }, failureCallback);

// const group = {
//   users: ['one', 'two'],
//   sayHi: function (user) {
//     console.log(`Hi ${user}`);
//   },
//   sayHiToAll: function () {
//     this.users.forEach(function (user) {
//       group.sayHi(user);
//     });
//   },
// };

// group.sayHiToAll();

// const books = [
//   { amount: 2, price: 120 },
//   { amount: 1, price: 150 },
// ];

// const totalFn = books => {
//   return books.reduce((total, book) => {
//     total += book.amount * book.price;
//     return total;
//   }, 0);
// };

// console.log('totalFn', totalFn(books));

// document
//   .getElementById('board')
//   .addEventListener(
//     'click',
//     ({ target }) => target.id % 2 === 0 && alert(target.id),
//   );

const arr = [8, 1, 3, 1, 176, 3, 4, 5, 8, 8, 8, 9, 5, 5];
const result = {};

const calculateFn = arr => {
  let result = {};

  arr.forEach((el, i, arr) => {
    if (result.hasOwnProperty(el)) {
      result[el] += 1;
    } else result[el] = 1;
  });
  console.log(result);
  return result;
};

calculateFn(arr);
