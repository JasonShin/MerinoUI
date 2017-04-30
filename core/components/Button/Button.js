import Base from '../Base';

class Button extends Base {
  constructor () {
    super();
    // creates a shadow root
    const shadow = this.attachShadow({mode: 'open'});
    // Create a standard img element and set it's attributes.
    const span = document.createElement('button');
    shadow.appendChild(span);
  }
}

export default Button;