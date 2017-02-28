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
    assert.deepEqual(reducer(oldState, actionOne), { contacts: [actionOne.data, actionTwo.data] });
  });

  test('remove the only item', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }] };
    const action = { type: 'CONTACT@REMOVE', data: 1 };
    const expectedState = reducer(oldState, action);

    assert.deepEqual(expectedState, { contacts: [] });
  });

  test('remove one contact when there are multiple', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }, { firstName: 'Brad', lastName: 'Pitt', id: 2 }] };
    const action = { type: 'CONTACT@REMOVE', data: 2 };
    const expectedState = {contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });

  test('remove one when the ID isnt on the list', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }, { firstName: 'Brad', lastName: 'Pitt', id: 2 }] };
    const action = { type: 'CONTACT@REMOVE', data: 3 };
    const expectedState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }, { firstName: 'Brad', lastName: 'Pitt', id: 2 }] };

    assert.deepEqual(reducer(oldState, action), expectedState);
  });
});
