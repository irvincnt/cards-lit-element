import {LitElement, html, css} from 'lit-element'

export class CardDetailDOs extends LitElement {
  static get styles() {
    return css`
    .card {
      background-color: green
    }
    `;
  } 

  render() {
    return html`
      <div class="card">
        <h1>detalle dos</h1>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('card-detail-dos', CardDetailDOs);