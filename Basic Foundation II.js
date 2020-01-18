// Biggie Size
function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    console.log(arr);
}

// Print Low, Return High
function lowHigh(arr) {
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(min);
    return max;
}

// Print One, Return Another
function printReturn(arr) {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            return arr[i];
        }
    }
}

// Double Vision
function doubleValue(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

// Count Positives
function countPositives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count = count + 1;
        }
    }
    arr[arr.length - 1] = count;
    console.log(arr);
    return arr;
}

// Evens and Odds
function evenAndOdds(arr) {
    var oddCount = 0;
    var evenCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            oddCount++;
            if (oddCount == 3) {
                console.log("That's odd!");
            }
        } else if (arr[i] % 2 == 0) {
            evenCount++;
            if (evenCount == 3) {
                console.log("Even more so!");
            }
        }
    }
}

// Increment the Seconds
function incrementSeconds(arr) {
    for (var i = 1; i < arr.length; i = i + 2) {
        arr[i] = arr[i] + 1;
    }
    console.log(arr);
    return arr;
}

// Previous Lengths
function previousLengths(arr) {
    for (var i = arr.length -1; i > 0; i--) {
        var string = arr[i-1]; 
        arr[i]=string.length;
    }
    console.log(arr);
    return arr;
}

// Add Seven
function addSeven(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 7;
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

// Reverse Array
function reverseArray(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = temp;
    }
    console.log(arr);
}

// Outlook: Negative
function outlookNegative(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * -1;
        }
    }
    console.log(arr);
    return arr;
}

// Always Hungry 
function alwaysHungry(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            count = count + 1;
        }
        if (i == arr.length - 1 && count === 0){
            console.log("I'm hungry");
        }
    }
}

// Swap Toward the Center
function swapTowardCenter(arr) {
    for (var i = 0; i < arr.length / 2; i = i + 2) {
        var temp = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = temp;
    }
    console.log(arr);
}

// Scale the Array
function scaleArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    console.log(arr);
}