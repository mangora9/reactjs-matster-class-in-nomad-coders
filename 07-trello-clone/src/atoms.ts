import {atom, selector} from "recoil";

const minuteState = atom({
  key: "minutes",
  default: 0,
});

const hourSelector = selector({
  key: "hours",
  get: ({get}) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
});

export {
  minuteState,
  hourSelector,
};

