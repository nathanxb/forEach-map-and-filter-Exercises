//forEach functions
function doubleValues(arr) {
    let dblValues = []
    arr.forEach(function (val) {
        dblValues.push(val * 2);
    });
    return dblValues;
}


function onlyEvenValues(arr) {
    let evenArray = [];
    arr.forEach(function (val) {
        if (val % 2 === 0) {
            evenArray.push(val);
        }
    });
    return evenArray;
}

function showFirstAndLast(arr) {
    let alphaOmega = [];
    arr.forEach(function (val) {
        alphaOmega.push(val[0] + val[val.length - 1])
    });
    return alphaOmega;
}

function addKeyAndValue(arr, key, value) {
    arr.forEach(function (val) {
        val[key] = value;
    });
    return arr;
}

function vowelCount(str) {
    let obj = {};
    const vowels = 'aeiou';
    //split string into letter array
    splitArr = str.split("");

    splitArr.forEach(function (char) {
        //make string lowercase
        let lowerCaseChar = char.toLowerCase()
        if (vowels.indexOf(lowerCaseChar) !== -1) {
            if (obj[lowerCaseChar]) {
                obj[lowerCaseChar]++;
            } else {
                obj[lowerCaseChar] = 1;
            }
        }
    });

    return obj;
}

function doubleValuesWithMap(arr) {
    return arr.map(function (val) {
        return val * 2;
    });
}

function valTimesIndex(arr) {
    return arr.map(function (val, index) {
        return val * (index);
    });
}

function extractKey(arr, key) {
    return arr.map(function (val) {
        return val[key];
    });
}

function extractFullName(arr) {
    return arr.map(function (val) {
        return val.first + " " + val.last;
    });
}

//filter
function filterByValue(arr, key) {
    return arr.filter(function (val) {
        return val[key] !== undefined;
    });
}


function find(arr, searchValue) {
    return arr.filter(function (val) {
        return val === searchValue
    })[0];//returns undefined if not present because this returns the first value of the array, which is undefined
}

function findInObj(arr, key, searchValue) {
    return arr.filter(function (val) {
        return val[key] === searchValue;
    })[0];//[0] returns just the first result, [1] would return just the second result
}


function removeVowels(str) {
    const vowels = "aeiou";
    //turn string to lowercase array
    return str.toLowerCase().split("").filter(function (val) {
        return vowels.indexOf(val) === -1;
    })
        //returns new lowercased string
        .join("");
}


function doubleOddNumbers(arr) {
    return arr
        // filter out odd numbers
        .filter(function (val) {
            return val % 2 !== 0;
        })
        //create new array that doubles values
        .map(function (val) {
            return val * 2;
        });
}
