import { contactDelete } from './actions';

class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('div');
    this.el.classList.add('grid-item');
    this.el.innerHTML = `
    <div class="grid-top">
      <span class="grid-name"></span>
      <div class="grid-street"></div>
      <span class="grid-address"></span>
    </div>
      <button class="grid-delete">Delete</button>
  `;
  }

  mounted() {
    this.el.querySelector('.grid-delete').addEventListener('click', () => {
      this.store.dispatch(contactDelete(this.data.id));
    });
  }

  render() {
    this.el.querySelector('.grid-name').innerText = `${this.data.lastName}, ${this.data.firstName}`;
    this.el.querySelector('.grid-street').innerText = this.data.street;
    this.el.querySelector('.grid-address').innerText = `${this.data.city}, ${this.data.state}`;
  }
}

export default class ListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    // Listen for the contacts list to change...
    this.store.subscribe(() => {
      // Re-Render
      this.render();
    });
  }

  // How do we translate data into UI?
  render() {
    // Clear the grid
    this.el.innerHTML = '';
    const contacts = this.store.getState().contacts;

    // Loop through contacts array
    contacts.forEach((current) => {
      // Create a new item view...
      const view = new ItemView(current, this.store);
      view.mounted();
      view.render();

      // Add the view's element into the list element
      this.el.appendChild(view.el);
    });
  }
}
