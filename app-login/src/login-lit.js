import {LitElement, html, css} from 'lit';
import style from './styles/style';

export class LoginLit extends LitElement {

    static get styles() {
        return [style]
      }

    render() {
        return html`
        <div class="container">
            <h2>Login LitElement</h2>
            <img src="">
            <input id="email" type="email" placeholder="Escribe tu Email">
            <input id="pass" type="password" placeholder="Escribe tu Password">

            <button @click="${ this._login}" > Sing in</button>

        </div>
        
        `;
    }

    _login() {
        const email = this.shadowRoot.querySelector("#email").value;
        const pass = this.shadowRoot.querySelector("#pass").value;

       if (!!email && !!pass) {
           this.dispatchEvent(new CustomEvent('sign' , {
               detail: {login: true},
               bubbles: true, composed: true
           }));
       }
    }
}

customElements.define('login-lit' , LoginLit);