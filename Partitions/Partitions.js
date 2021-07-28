let n = 200
let arrayPartition = [1];
generateArrayPartition(n)
console.log(`P(${n}) = ${arrayPartition[n]}`)

function generateArrayPartition(n) {
    while (arrayPartition.length < n+1) {
        let arrayNaturals = generateArrayNaturals(n);
        let arrayOdds = generateArrayOdds(n);
        let arrayDifferences = generateArrayDifferences(arrayNaturals, arrayOdds);
        let arrayIndexes = generateArrayIndexes(arrayPartition.length + 1, arrayDifferences);
        let arrayPPNN = generateArrayPPNN(n);
        arrayPartition.push(calcPartition(arrayPartition.length + 1, arrayPartition, arrayIndexes, arrayPPNN));
    }
}

function generateArrayNaturals(n) {
    
    let array = [];
    
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    
    return array;
}

function generateArrayOdds(n) {
    
    let array = [];
    
    for (let i = 1; i <= n; i++) {
        array.push(i * 2 + 1);
    }
    
    return array;
}

function generateArrayDifferences(arrNat, arrOdd) {
    
    let array = [];
    
    for (let i = 0; i < arrNat.length; i++) {
        array.push(arrNat[i]);
        array.push(arrOdd[i]);
    }
    
    return array;
}

function generateArrayIndexes(n, arrDiff) {
    
    let array = [1];
    
    for (let i = 0; i < arrDiff.length; i++) {
        array.push(array[i] + arrDiff[i]);
    }
    
    let arraySlice = [];
    
    for (let i = 0; i < n; i++) {
        if (array[i] < n) {
            arraySlice.push(array[i]);
        }
    }
    
    return arraySlice;
}

function generateArrayPPNN(n) {
    let array = [];
    for (let i = 1; i <= n; i += 4) {
        array.push(1, 1, -1, -1);
    }
    return array;
}

function calcPartition(n, arrPart, arrInd, arrPPNN) {
    
    let partition = 0;

    for (let i = 0; i < arrInd.length; i++) {
        partition = partition + arrPart[n - 1 - arrInd[i]] * arrPPNN[i];
    }

    return partition;
}