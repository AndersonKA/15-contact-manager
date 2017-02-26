export default class FormView {
  constructor (el, store) {
    this.el = el;
    this.store = store;
  }
  mounted() {
  // Listen for submit events...
  this.el.addEventListener('submit', (event) => {
    // Stop the browser's default behavior (makes it not submit to the server)
    event.preventDefault();


    // Collect the form data
    const data = {
      firstName: this.el.querySelector('.sidebar-first').value,
      lastName: this.el.querySelector('.sidebar-last').value,
      street: this.el.querySelector('.sidebar-street').value,
      city: this.el.querySelector('.sidebar-city').value,
      state: this.el.querySelector('.sidebar-state').value,
    };

    this.store.dispatch({ type: 'CONTACT@CREATE', data });
  });
}
}
