import {atom, selector} from "recoil";

interface IToDo {
  id: number;
  text: string;
  category: 'DONE' | 'DOING' | "TO_DO";
}

const categoryState = atom({
  key: 'category',
  default: 'TO_DO',
});

const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({get}) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  }
});

export {
  toDoState,
  categoryState,
  toDoSelector,
};

export type {
  IToDo,
};
