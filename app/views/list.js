class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('li');
    this.el.classList.add('grid__item');
    this.el.innerHTML = `
    <div class="grid-top">
      <span class="grid-first"></span>
      <span class="grid-last"></span>
      <div class="grid-street"></div>
      <span class="grid-city"></span>
      <span class="grid-state"></span>
    </div>
      <button class="grid-delete">Delete</button>
  `;
  }

  mounted() {}

  render() {
    this.el.querySelector('.grid-last').innerText = this.data.lastName;
    this.el.querySelector('.grid-first').innerText = this.data.firstName;
    this.el.querySelector('.grid-street').innerText = this.data.street;
    this.el.querySelector('.grid-city').innerText = this.data.city;
    this.el.querySelector('.grid-state').innerText = this.data.state;


    // Maybe change the color of the card with MATHS!!!
    const score = (parseInt(this.data.taste) + parseInt(this.data.sweetness) + parseInt(this.data.texture)) / 3;
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
