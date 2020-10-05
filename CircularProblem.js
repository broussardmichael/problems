//Create an algorithm that takes a series of number in a circle. Given a starting point, move around the circle given a number x. When you come to the xth number
//remove it from the list and continue on, removing the xth number until one number remains.
const circularLinkedList = require("circularlinkedlist")();

module.exports = (function () {
    let circularProblem = {}

    circularProblem.run = function (listOfNumbers, numberToSkip) {
        let cList = Object.create(circularLinkedList);
        let numberOfNodesToSkip = numberToSkip;
        let list = cList.createCircularLinkedListFromDataArray(listOfNumbers);
        if(list.getNodeCountFromList() === 1)
            return this.head.data;

        let currentNode = list.head;
        let nodeToDelete;
        while(list.getNodeCountFromList() !== 1) {
            for (let i = 0; i < numberOfNodesToSkip; i++) {
                currentNode = currentNode.nextNode;
            }
            nodeToDelete = currentNode;
            currentNode = currentNode.nextNode;
            list.deleteNode(nodeToDelete);
        }
        console.log("The final number is: " + currentNode.data);
    }
    return circularProblem;
})();

