import {atom} from "recoil";

interface IToDo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: IToDo[];
}

const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To Do': [],
    'Doing': [],
    'Done': [],
  }
});

export {
  toDoState,
};

export type {
  IToDo,
};
