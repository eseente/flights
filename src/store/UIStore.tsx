import { makeAutoObservable } from 'mobx';

class UIStore {
  blurVisible: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setBlurVisible(visible: boolean) {
    this.blurVisible = visible;
  }

  toggleBlur() {
    this.blurVisible = !this.blurVisible;
  }
}

export default new UIStore();
