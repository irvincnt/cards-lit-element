import {LitElement, html, css} from 'lit-element'

export class Bullets extends LitElement{
  static get properties() {
    return {
      label: String
    };
  }

  render() {
    return html`
    <li>${this.label}</li>
    `
  }
}

customElements.define('item-bullets', Bullets);