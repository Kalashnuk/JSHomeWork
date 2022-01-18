var arr = [1, 2, 3, 4];
var sum = 0;

for (let number of arr) {
    if (number % 2 == 0)
        sum += number;
}

console.log(sum);