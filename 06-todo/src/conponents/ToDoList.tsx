import React from "react";
import {useForm} from "react-hook-form";
import {atom, useRecoilState} from "recoil";

interface IToDo {
  id: number;
  text: string;
  category: 'DONE' | 'DOING' | "TO_DO";
}

interface IForm {
  toDo: string;
}

const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    setValue
  } = useForm<IForm>();

  const handleValid = ({toDo}: IForm) => {
    setToDos((prev) => [{id: Date.now(), text: toDo, category: "TO_DO"}, ...prev]);
    setValue('toDo', '');
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr/>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('toDo', {
            required: 'Please write a To Do'
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => <li key={toDo.id}>{toDo.text}</li>)}
      </ul>
    </div>
  );
};

export default ToDoList;
