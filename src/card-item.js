import {LitElement, html, css} from 'lit-element'
import {RouterLink} from 'lit-element-router'
import './components/bullets'

export class CardItem extends LitElement {
  static get styles() {
    return css`
    :host {
      display: flex;
      justify-content: space-around;
      align-items: stretch;
    }
    .card {
      width: 300px;
      max-width: 100%;
      background: #ffffff;
      display: flex;
      flex-direction: column;
    }
    .card-photo {
      position: relative;
    }
    .photo {
      width: 100%;
    }
    .photo-overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .photo-overlay:hover {
      opacity: 0.8;
      background: rgba(0, 0, 0, .6);
      transition: .5s ease;
    }
    .title {
      font-size: 27px;
      font-family: sans-serif;
      margin: 11px 0 0 22px;
    }
    .card-list {
      font-size: 14px;
      padding-left: 31px;
      font-family: sans-serif;
    }
    .card-info {
      display: flex;
      margin-top: auto;
      margin-left: 25px;
      align-items: center;
    }
    .card-info .label {
      color: #22468a;
      font-size: 15px;
      font-weight: bold;
      text-decoration: none;
    }
    .icon::before {
      margin-right: 7px;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      display: inline-block;
      -webkit-font-smoothing: antialiased;
    }
    .eye::before {
      font-weight: 900;
      content: "\f06e";
      color: #22468a;
      font-family: "Font Awesome 5 Free";
    }`;
  } 

  static get properties() {
    return {
      card: Object,
      getItemCard: {type: Function},
    };
  }

  render() {
    return html`
      <div class="card">
        <div class="card-photo">
          <img class="photo" src="${this.card.image}" alt="">
          <div class="photo-overlay"></div>
        </div>
        <h1 class="title">${this.card.title}</h1>
        <ul>
          ${this.card.bullets.map(bullet => html`<item-bullets .label=${bullet}></item-bullets>`)}
        </ul>
        <div class="card-info">
          <p class="icon eye"></p>
          <span
            @click=${() => this.getItemCard(this.card)}>
            Quiero más información ${this.card.id}
          </span>
        </div>
      </div>
    `;
  }
}

customElements.define('card-item', CardItem);