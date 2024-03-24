import {atom, selector} from "recoil";

interface IToDo {
  id: number;
  text: string;
  category: 'DONE' | 'DOING' | "TO_DO";
}

const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({get}) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === 'TO_DO'),
      toDos.filter((toDo) => toDo.category === 'DOING'),
      toDos.filter((toDo) => toDo.category === 'DONE'),
    ];
  }
});

export {
  toDoState,
  toDoSelector,
};

export type {
  IToDo,
};
