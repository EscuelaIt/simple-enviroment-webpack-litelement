import { LitElement, html } from 'lit-element';

export class LitDemo extends LitElement {

  render() {
    return html`
    <h1>Lit Demo</h1>
    <p>
      Esto es un componente!!!!! <b>lit-element</b>
    </p>
    `;
  }
}
customElements.define('lit-demo', LitDemo);