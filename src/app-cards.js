import { LitElement, html, css } from 'lit-element'
import { CARDS } from './data';
import './card-item'
import './data'

export class AppCards extends LitElement {
  static get styles() {
    return css`
    .wrapper {
      width: 90%;
      margin: 0 auto;
      margin-top: 2rem;
    }
    .grid-odd{
      display: grid;
      grid-gap: 2rem;
      justify-content: center;
      grid-template-columns: repeat(3, 300px);
    }`;
  } 
  
  render() {
    return html`
      <div class="wrapper grid-odd">
        ${CARDS.map(card => html`<card-item .card=${card}></card-item>`)}
      </div>
    `;
  }
}

customElements.define('app-cards', AppCards);