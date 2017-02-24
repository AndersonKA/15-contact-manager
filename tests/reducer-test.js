import reducer from '../app/reducer';

module('reducer', () => {
  test('default state', (assert) => {
    assert.deepEqual(reducer(null, {}), { contacts: [] }, 'default state');
  });


  test('load all contacts', (assert) => {
    const emptyState = { contacts: [] };
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const actionOne = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    assert.deepEqual(reducer(emptyState, actionOne), { contacts: actionOne.data });
  });

  test('add a contact', (assert) => {
    const emptyState = { contacts: [] };
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const actionOne = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };
    const actionTwo = { type: 'CONTACT@CREATE', data: { firstName: 'Angelina', lastName: 'Jolie' } };
    assert.deepEqual(reducer(emptyState, actionOne), { contacts: [actionOne.data] });
    assert.deepEqual(reducer(oldState, actionOne), { contacts: [actionTwo.data, { firstName: 'Johnny', lastName: 'Depp' }] });
  });
});
