import { atom, selector } from 'recoil';

const sideBarstate = atom({
  key: `sideBarState`,
  default: false,
});

export { sideBarstate };
