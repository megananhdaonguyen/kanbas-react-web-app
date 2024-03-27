import VariablesAndConstants from "./variables/VariablesAndConstants";
import React from 'react';
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperators from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import FunctionDestructing from "./functions/FunctionDesctructing";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import JsonStringify from "./json/JsonStringify";
import ConditionalOutput from "../ConditionalOutput";
import Add from "../Add"
import TodoList from "../todos/TodoList";

function JavaScript() {
   console.log('Hello World!');
   return (
    <div>
       <h1>JavaScript</h1>
       <VariablesAndConstants/>
       <VariableTypes/>
       <BooleanVariables/>

       <IfElse />
       <TernaryOperators/>

       <ES5Functions/>
       <FunctionDestructing/>

       <WorkingWithArrays/>
       <TemplateLiterals/>

       <House/>
       <Spreading/>
       <Destructing/>
       <JsonStringify/>

       <ConditionalOutput/>
       <Add a={3} b={4} />
       <TodoList/>
    </div>
   );
}
export default JavaScript
