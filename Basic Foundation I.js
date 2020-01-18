// Get 1 to 255
var arr = [];
function returnArr() {
    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }
    console.log(arr);
}

// Get even 1000
var sum = 0;
function sumEven() {
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
    console.log(sum);
}

// Sum odd 5000
var sum = 0;
function sumOdd() {
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    return sum;
    console.log(sum);
}

// Iterate an Array
var sum = 0;
function sumOfArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}

// Find max
function returnMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

// Find average
function findAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum / arr.length);
}

// Array odd
function returnOddArray() {
    var arr = [];
    for (var i = 1; i <= 50; i++) {
        if (i % 2 == 1) {
            arr.push(i);
        }
    }
    console.log(arr);
}

// Greater than Y
function greaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count = count + 1;
        }
    }
    console.log(count);
}

// Squares
function squareArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}

// Negatives
function replaceNeg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}

// Max/Min/Avg
function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    newArr.push(max, min, sum / arr.length)
    console.log(newArr);
}

// Swap Values
function swapFirstLast(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    console.log(arr);
}

// Swap values (another method)
function swapFirstLast(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    console.log(arr);
}

// Number to String
function negToString(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
}