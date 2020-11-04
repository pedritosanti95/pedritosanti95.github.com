//ASSIGNMENT 8 PART B: RE-IMPLEMENTATION OF FUNCTIONS
// sum
function sum(arr){
    return arr.reduce((accum, i) => accum+=i);
}
console.log(" Expected output of sum([7,2,3,4]) is 16  " + myFunctionTest(16, function () {
    return sum([7,2,3,4]);
}));
console.assert(sum([7,2,3,4])===16,"error in sum");

// multiply
function multiply(arr){
    return arr.reduce((accum, i) => accum*=i);
}
console.log(" Expected output of multiply([7,2,3,4]) is 168 " + myFunctionTest(168, function () {
    return multiply([7,2,3,4]);
}));
console.assert(multiply([7,2,3,4])===168,"error in multiply");

// reverse
function reverse(str){
    return [...str].map( (_, i, arr) => arr[arr.length-1-i] ).join("");
}
console.log(" Expected output of reverse('nada de nada') is 'adan ed adan' " + myFunctionTest("adan ed adan", function () {
    return reverse('nada de nada');
}));
console.assert(reverse('hello world')==='dlrow olleh',"error in reverse");

// findLongWords
function filterLongWords(arr, i){
    return arr.filter( w => w.length > i);
}
console.log(" Expected output of filterLongWords(['dog','elephant','jack','house'], 4) is elephant,house " + myFunctionTest('elephant,house', function(){
    return filterLongWords(['dog','elephant','jack','house'],4);
}));
console.assert(filterLongWords(['dog','elephant','jack','house'], 4).toString()===["elephant","house"].toString(),"error in filterLongWords");