export function contactFind(find) {
  return { type: 'CONTACT@FIND_ALL', data: find }
};

export function createContact(create) {
  create.id = new Date();
  return { type: 'CONTACT@CREATE', data: contact }
};

export function contactDelete(delete) {
  return { type: 'CONTACT@REMOVE', data: delete }
};
