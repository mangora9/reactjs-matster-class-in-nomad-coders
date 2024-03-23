import {atom} from "recoil";

const isDarkAtom = atom({
  key: 'isDark',
  default: true,
})

export {
  isDarkAtom,
}
