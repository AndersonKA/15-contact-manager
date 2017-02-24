export default function reducer(state, action) {
  switch (action.type) {
    // CREATE: Add a new contact
    case 'CONTACT@CREATE':
      return { contacts: [action.data, ...state.contacts] };
    // READ: Loading all contacts
    case 'CONTACT@FIND_ALL':
      return { contacts: action.data };
    default:
      return state || { contacts: [] };
  }
}
