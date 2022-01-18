var arr = [6, 5, 4, 3, 2, 1]

for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6 - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j]
            arr[j] = arr[j + 1];
            arr[j + 1] = temp
        }
    }
}

console.log(arr)