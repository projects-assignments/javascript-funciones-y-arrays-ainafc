export function maxOfTwoNumbers(numero1, numero2) {
    return (Math.max(numero1, numero2));
}

export function findLongestWord(array) {
    if (array.length === 0) {
        return undefined;
    }
    let longestWord = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
        }
    }
    return longestWord;
}

export function sumArray(array) {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}

export function averageNumbers(array) {
    if (array.length === 0) {
        return undefined;
    }
    let sum = array.reduce((accumulator, element) => accumulator + element, 0);
    let average = sum / array.length;
    return average;
}

export function averageWordLength(words) {
    if (words.length === 0) {
        return undefined;
    }
    let totalLength = words.reduce((accum, word) => accum + word.length, 0);
    let average = totalLength / words.length;
    return average;
}

export function uniquifyArray(array) {
    if (array.length === 0) {
        return undefined;
    }
    const uniqueArray = array.filter((item, index) => {
        return array.indexOf(item) === index;
    });
    return uniqueArray;
}

export function doesWordExist(array, palabra) {
    return array.includes(palabra);
}

export function howManyTimes(array, element) {
    if (array.length === 0) {
        return undefined;
    }
    const occurrences = array.filter(item => item === element);
    return occurrences.length;
}

export function greatestProduct() { }