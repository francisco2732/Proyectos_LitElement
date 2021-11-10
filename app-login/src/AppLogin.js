import { LitElement, html } from 'lit';
import './login-lit.js';
import style from './styles/style';

export class AppLogin extends LitElement {

  static get styles() {
    return [style]
  }

  static get properties() {
    return {
      success: {type: Boolean}
    };
  }

  
  render() {
    return html`
    ${ this.success 
      ? html`<h1>Welcome !!</h1>` 
      : html`<login-lit @sign="${ this._hiddenLogin }"></login-lit>`}


    `;
  }

  _hiddenLogin() {
    this.success = true;
  }
}
