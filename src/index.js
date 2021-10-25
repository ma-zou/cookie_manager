class CookieManager extends HTMLElement {
  constructor() {
    super();
  }

  accept(key) {
    localStorage.setItem(key, true)
  }
  decline(key) {
    localStorage.setItem(key, false)
  }
}
class CookieAcceptButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick() {
    console.dir(this.getAttribute('cookie-group'));
    let accepted = document.querySelector('cookie-placeholder[cookie-group="google-maps"]');

    console.log(accepted.attributes);
  }
}
class CookieInformations extends HTMLElement {
  constructor() {
    super();
  }
}

class CookiePlaceholder extends HTMLElement {
  constructor() {
    super();
    this.accepted = false;
  }

  transformToIframe() {

  }

  transformToScript() {

  }

  transformToPlaceholder() {

  }

  accept() {
    this.accepted = true;
  }
}

customElements.define('cookie-manager', CookieManager);
customElements.define('cookie-accept-button', CookieAcceptButton);
customElements.define('cookie-informations', CookieInformations);
customElements.define('cookie-placeholder', CookiePlaceholder);