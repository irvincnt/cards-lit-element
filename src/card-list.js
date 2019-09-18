import {LitElement, html, css} from 'lit-element'
import {RouterLink} from 'lit-element-router'
import { CARDS } from './data';
import './card-item'

export class CardList extends LitElement {
  static get styles() {
    return css`
    .wrapper {
      width: 90%;
      margin: 0 auto;
      margin-top: 2rem;
    }
    .grid-odd {
      display: grid;
      grid-gap: 2rem;
      justify-content: center;
      grid-template-columns: repeat(3, 300px);
    }`;
  }

  static get properties() {
    return {
      card: Object,
      getItemCard: {type: Function}
    };
  }


  render() {
    return html`
    <div class="wrapper grid-odd">
      ${CARDS.map(card => html`<card-item .card=${card} .getItemCard=${this.getItemCard}></card-item>`)}
    </div>
    `;
  }
}

customElements.define('card-list', CardList);