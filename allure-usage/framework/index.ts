import {MainPage, IMainPage} from './pages';
import {browserInterace} from '../lib/browser'
import {wrapperIt} from '../lib/test_runner';

const provider = {
  pages: {
    main(): IMainPage {
      return new MainPage();
    }
  },
  get browser() {
    return browserInterace;
  },
  get it() {
    return wrapperIt;
  }
}

export {
  provider
}
