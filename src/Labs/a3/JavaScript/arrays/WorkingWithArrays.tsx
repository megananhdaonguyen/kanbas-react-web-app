import arrayIndexAndIndex from "./ArrayIndexAndLength";
import addingAndRemoving from "./AddingAndRemovingDataToFromArrays";
import forLoops from "./ForLoops"
import mapFunction from "./MapFunction"
import findIndex from "./FindIndex"
import filterFunction from "./FilterFunction"
import findFunction from "./FindFunction"

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
   functionScoped,   blockScoped,
   constant1,        numberArray1,   stringArray1
];

function WorkingWithArrays() {
   return (
     <>
       <h2>Working with Arrays</h2>
       numberArray1 = {numberArray1}<br />
       stringArray1 = {stringArray1}<br />
       variableArray1 = {variableArray1}<br />

       {arrayIndexAndIndex()}
       {addingAndRemoving()}
       {forLoops()}
       {mapFunction()}
       {findIndex()}
       {filterFunction()}
       {findFunction()}
     </>
   )
 }
 export default WorkingWithArrays;
