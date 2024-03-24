import {atom} from "recoil";

interface IToDo {
  id: number;
  text: string;
  category: 'DONE' | 'DOING' | "TO_DO";
}

const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export {
  toDoState,
};

export type {
  IToDo,
};
