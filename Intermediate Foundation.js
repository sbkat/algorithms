// Sigma
function sigma(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum);
    return sum;
}

// Factorial
function factorial(num) {
    var sum = 1;
    for (var i = 1; i <= num; i++) {
        sum = sum * i;
    }
    console.log(sum);
}

// Fibonacci
function fibonacci(value) {
    var num = 0;
    var num1 = 1;
    var arr = [num, num1];
    
    if(value == 0) {
      console.log("0");
    }
    if (value == 1) {
      console.log("1");
    }
  
    for (var i = 1; i < value; i++) {
      arr[i+1] = arr[i]+arr[i-1];
      arr.push(arr[i]);
    }
      console.log(arr[value]);
}


// Array: Second-to-Last
function secondToLast(arr) {
    if (arr.length < 1) {
        return null;
    }
    var secondLast = arr[arr.length - 2];
    console.log(secondLast);
}

// Array: Nth-to-Last
function nthToLast(arr, n) {
    if (arr.length < 1) {
        return null;
    }
    var nthLast = arr[arr.length - n];
    console.log(nthLast);
}

// Array: Second-Largest
function secondLargest(arr) {
    if (arr.length < 1) {
        return null;
    }
    var max = arr[0];
    var secondMax = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }
    console.log(secondMax);
}

// Double Trouble
function doubleTrouble(arr) {
    for (var i = arr.length * 2; i > 0; i = i - 2) {
        arr[i - 1] = arr[i / 2 - 1];
        arr[i - 2] = arr[i / 2 - 1];
    }
    console.log(arr);
    return arr;
}