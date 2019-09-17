import {LitElement, html} from 'lit-element'

export class CardList extends LitElement {
  render() {
    return html`
      <p>Soy My Element</p>
    `;
  }
}

customElements.define('card-list', CardList);