//Задание 1
//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

let arr = [1, 2, 3, 4, 5];
for(let i=0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Задание 2
//Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] > -10 && arr1[i] < -3)
    console.log(arr1[i]);
}

//Задание 3
//Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите.

let arr2 = [];
let result = 0;
for(let i = 23; i < 57; i++) {
    arr2.push(i);
    result += i;
}
console.log(result);
console.log(arr2);

//Задание 4
//Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr3 = ['10', '20', '30', '50', '235', '3000'];

for(let i = 0; i < arr3.length; i++) {
    let num = arr3[i];
    let number =  num[0];
    if (number == 1 || number == 2 || number == 5) {
        console.log(arr3[i]);
    }
}
//Задание 5
//Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let arr4 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс', 'пн', 'вт', 'ср'];

for(let i = 0; i < arr4.length; i++) {
    if (arr4[i] == 'сб' || arr4[i] == 'вс') {
        document.write( '<b>' + arr4[i]  + '</b>'+ ' ');
    } else {
        document.write(arr4[i]+ ' ')
    }
}

//Задание 6
//Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,и получите последний элемент массива, используя свойство length.

let fruits = ['apple', 'charry', 'banana'];
console.log(fruits);
fruits.push('lemon');
console.log(fruits);
console.log (fruits[fruits.length-1]);

//Задание 7
//Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.
/*let arr7 = [];

while (true) {
    let num7 = prompt("Введите число");
    if (num7 == "" || num7 == null) break;
    arr7.push(+num7);
}
console.log(arr7);
arr7.sort((a, b) => a - b);
console.log(arr7);
*/

//Задание 8
//Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),используя цикл while и метод reverse.
    
let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
let i = 0;

arr8.reverse();

while (i < arr8.length) {
    console.log (arr8[i]);
    i++;
}
console.log(arr8);

//Задание 9
//Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6]

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let num = 0;

for (let i = 0; i < arr9.length; i++) {
        if (arr9[i] == null) {
            num++;
        } else {
            continue;
        }
    }
console.log(num);

//Задание 10
//Найдите сумму элементов массива между двумя нулями (первым и последним нулями  в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть     более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].

let arr10 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
let first = arr10.indexOf(0),
    last = arr10.lastIndexOf(0);
console.log(first, last);

let sum = 0;

for (let i = first; i <= last; i++) {
    sum += arr10[i];
}
if (first == -1 && last == -1) sum = 0;

console.log(sum);
