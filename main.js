//Напишіть функцію, яка приймає масив чисел і фільтрує лише парні числа. 
//Використовуйте функцію вищого порядку, таку як filter, для розв'язання цієї задачі.

const numbersArray = [1, 2, 7, 9, 10, 12, 15, 16, 17, 20];

function filterArrayNumbers(numbers){
    return numbers.filter(number => number % 2 ===0);
}

const arrayNumbers = filterArrayNumbers(numbersArray);
console.log(arrayNumbers); // [2, 10, 12, 16, 20] 👍

