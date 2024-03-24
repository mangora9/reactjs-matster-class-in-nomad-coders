import React from 'react';
import {IToDo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";

const ToDo = ({text, category}: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget: {name}} = event;
    console.log(`-> newCategory`, name);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== 'TO_DO' && <button name="TO_DO" onClick={onClick}>To Do</button>}
      {category !== 'DOING' && <button name="DOING" onClick={onClick}>Doing</button>}
      {category !== 'DONE' && <button name="DONE" onClick={onClick}>Done</button>}
    </li>);
};

export default ToDo;
