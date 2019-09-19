import { LitElement, html, css } from 'lit-element'
import { router, RouterSlot, RouterLink, routerLinkMixin } from 'lit-element-router'
import './card-detail'
import './card-list'
import './card-item'

export class AppCards extends routerLinkMixin(LitElement) {
  static get properties() {
    return {
      itemDetail: { type: Object },
      route: { type: String },
      params: { type: Object },
    }
  }

  constructor() {
    super()
    router([{
        name: 'home',
        pattern: ''
    }, {
        name: 'detail',
        pattern: '/detail/:id'
    }, {
        name: 'not-found',
        pattern: '*'
    }], (route, params, query) => {
        this.route = route
        this.params = params
    })
  }
  
  render() {
    return html`
    <router-slot route='${this.route}'>
      <card-list slot='home' .getItemCard=${this.getItemCard.bind(this)}></card-list>
      <card-detail slot='detail' .card=${this.itemDetail}></card-detail>
      <div slot='not-found'>Not Found</div>
    </router-slot>
    <nav>
      <router-link href='/'>Home</router-link>
    </nav>
  `;
  }

  getItemCard (currenCard) {
    this.itemDetail = currenCard;
    this.navigate('/detail/'+currenCard.id);
  }
}

customElements.define('app-cards', AppCards);