// ####Задача 7

// Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой). Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.

// ```js
// getDivisors(12); // [1, 2, 3, 4, 6, 12]
// getDivisors('Content'); // Error: parameter type is not a Number
// getDivisors(0); // Error: parameter can't be a 0
// ```
function getDivisors(x) {
    if (!(typeof x === 'number')) {
        throw new Error('parameter type is not a Number');
    } else if (!Number.isInteger(x)) {
        throw new Error('parameter should be a Integer');
    } else if (x === 0) {
        throw new Error('parameter can\'t be a 0');
    }

    let result = [1];

    if (x === 1) {
        return result;
    }

    for (let i = 2; i <= x / 2; i++) {
        if (x % i === 0) {
            result.push(i);
        }
    }
    result.push(x);

    return result;
}

console.log(getDivisors(12));
//console.log(getDivisors('Content'));
console.log(getDivisors(0));