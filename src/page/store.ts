import { observable } from 'mobx';

class PageStore {
  @observable content = '';

  constructor() { }
}

export default new PageStore();
