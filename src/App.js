import React, {useState} from 'react';

//import EventPractice from './example/EventPractice';
//import IterationSample from './example/IterationSample'
//import Counter from "./example/Counter";
//import Info from "./example/Info";
//import Average from "./example/Average";
import TodoTemplate from './todo/TodoTemplate'
import TodoInsert from './todo/TodoInsert'

const App = () => {
  return (
    <>
        <TodoTemplate> <TodoInsert/></TodoTemplate>
    </>
  );
};

export default App;
