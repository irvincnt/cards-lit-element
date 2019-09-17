import { LitElement, html } from 'lit-element'
import './card-list'
export class AppCards extends LitElement {
  render() {
    return html`
      <p>Soy My cardss</p>
      <card-list></card-list>
    `;
  }
}

customElements.define('app-cards', AppCards);