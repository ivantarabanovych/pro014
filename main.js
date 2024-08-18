//Напишіть функцію, яка приймає масив чисел і використовує функцію вищого порядку,
//наприклад reduce, для обчислення суми всіх чисел у масиві.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8 , 9];

function sumArray(numbers){
    return numbers.reduce((sum, numbers) => sum + numbers, 0)
}

const sum = sumArray(numbersArray);
console.log(sum); // 4️⃣5️⃣
