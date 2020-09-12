import {BasePageInterface} from '../../../lib';
import {HeaderFragment, IHeaderFragmentReturn, IHeaderFragment} from './fragments';

interface IMainPageEnter {
  header?: IHeaderFragment;
}

interface IMainPageReturn {
  header?: IHeaderFragmentReturn;
}

interface IMainPage {
  click(clickObj: IMainPageEnter): void;
  get(clickObj: IMainPageEnter): Promise<IMainPageReturn>;
}

class MainPage extends BasePageInterface {
  private header: HeaderFragment;

  constructor() {
    super('#main_page', 'Main page');
    this.header = this.initChild(HeaderFragment, '.main_header', 'Main page header');
  }
}

export {
  MainPage,
  IMainPage
}