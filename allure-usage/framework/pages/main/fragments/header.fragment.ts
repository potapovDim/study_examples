import {ButtonElement,  BaseFragmentInterface} from '../../../../lib';

interface IHeaderFragmentReturn {
  isDisplayed?: boolean;
  login?: string;
  register?: string;
}

interface IHeaderFragment {
  login?: null;
  register?: null;
}

class HeaderFragment extends BaseFragmentInterface {
  private login: ButtonElement;
  private register: ButtonElement;

  constructor(rootEl, name = HeaderFragment.name) {
    super(rootEl, name);
    this.login = this.initChild(ButtonElement, '.user_buttons button:nth-child(1)', 'Login button');
    this.register = this.initChild(ButtonElement, '.user_buttons button:nth-child(2)', 'Register button');
  }
}

export {
  HeaderFragment,
  IHeaderFragmentReturn,
  IHeaderFragment
}