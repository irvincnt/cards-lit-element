import {LitElement, html, css} from 'lit-element'

export class CardDetail extends LitElement {
  static get styles() {
    return css`
    .hero-image {
      height: 270px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
    }
    .hero-text {
      margin: 0;
      color: white;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
    }
    .card {
      margin-top: 2rem;
      display: flex;
      justify-content:space-evenly;
    }
    .card-bullets {
      width: 45%;
    }
    .accordion {
      margin-bottom: 1rem;
      background: hsla(153, 48%, 49%, .1);
      padding: 1em;
      border: 1px solid hsla(162, 76%, 32%, .3);
      color: hsl(162, 76%, 32%);
      border-radius: 5px;
    }
    .show-content {
      display: block
    }
    .hide-content {
      display: none
    }`
  } 

  static get properties() {
    return {
      card: Object,
      currentAccordion: Number
    };
  }

  constructor() {
    super()
    this.currentAccordion = -1
  }

  openAccordionDetail(key) {
    this.currentAccordion = key
  }

  render() {
    return html`

      <div class="hero-image" style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${this.card.image}">
        <h1 class="hero-text">${this.card.title}</h1>
      </div>

      <div class="card">
        <div class="card-bullets">
          ${this.card.CoveragesAndExclusions.map((item, key) => {
            return html`
            <div class="accordion" @click=${() => this.openAccordionDetail(key)}>
              <h3>${item.title}</h3>
              <div class=${this.currentAccordion === key ? 'show-content' : 'hide-content'}>
                ${item.bullets.map(bullet => {
                  return html`<p> - ${bullet}</p>`
                })}
              </div>
            </div>`
          })}
        </div>
        <div class="card-info">
          <h1>${this.card.title}</h1>
        </div>
      </div>
    `;
  }
}

customElements.define('card-detail', CardDetail);