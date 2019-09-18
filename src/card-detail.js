import {LitElement, html, css} from 'lit-element'

export class CardDetail extends LitElement {
  static get styles() {
    return css`
    .card {
      background-color: red
    }
    `;
  } 

  static get properties() {
    return {
      card: Object,
    };
  }

  render() {
    return html`
      <div class="card">
        <h1>detalle ${this.card.title}</h1>
      </div>
    `;
  }
}

customElements.define('card-detail', CardDetail);