// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const numberInCub = number => number ** 3;
console.log(numberInCub(2) + numberInCub(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const number = prompt('Введите число');

const verification = number => isNaN(Number(number)) ? alert(`${number} не число`) : alert("Введено число");

verification(number);

const salaryWithOutTax = salary => console.log(`Размер заработной платы за вычетом налогов равен ${salary *= .87}`);

salaryWithOutTax(number);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const number1 = prompt('Введите число');
const number2 = prompt('Введите число');
const number3 = prompt('Введите число');

function max(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        return number1;
    } else if (number2 > number1 && number2 > number3) {
        return number2;
    } else {
        return number3;
    }
}
console.log(max(number1, number2, number3));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const addition = (a, b) => { return a + b }
const subtract = (a, b) => { return Math.abs(a - b) }
const multiplication = (a, b) => { return a * b }
const division = (a, b) => { return a / b }
console.log(addition(2, 6));
console.log(subtract(2, 6));
console.log(multiplication(2, 6));
console.log(division(2, 6));