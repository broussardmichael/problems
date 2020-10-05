const hashTable = require("hashtable")();

module.exports = (function () {
    let hashTableProblem = {}

    hashTableProblem.run = function (listOfNumbersToCompare, low, high) {
        let listOfNumbersNotIncluded = [];
        table = Object.create(hashTable);
        let constructedTable = table.createHashTable(listOfNumbersToCompare.length);
        constructedTable.populateHashTableWithArrayOfKeys(listOfNumbersToCompare);
        
        for(let i = low; i <= high; i++) {
            if(!constructedTable.searchTableWithLinearProbing(i))
                listOfNumbersNotIncluded.push(i);
        }
        
        console.log(listOfNumbersNotIncluded.join(", "));
    }
    return hashTableProblem;
})();