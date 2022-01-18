var arr = [1, 2, 3, 4, 5, 6]
var i = 0
var j = arr.length-1
var temp

while (j > i) {
    temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
    i--
    j++
}

console.log(arr)