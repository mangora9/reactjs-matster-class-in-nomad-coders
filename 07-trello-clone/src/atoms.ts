import {atom} from "recoil";

interface IToDoState {
  [key: string]: string[];
}

const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    toDo: ['a', 'b', 'c', 'd', 'e', 'f'],
    doing: [],
    done: [],
  }
});

export {
  toDoState,
};
