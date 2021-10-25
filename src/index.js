class CookieManager extends HTMLElement {
  constructor() {
    super();
  }
}

class CookiePlaceholder extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('cookie-manager', CookieManager);
customElements.define('cookie-placeholder', CookiePlaceholder);