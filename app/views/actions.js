export function contactFind(find) {
  return { type: 'CONTACT@FIND_ALL', data: find };
}

export function contactCreate(create) {
  create.id = new Date();

  return { type: 'CONTACT@CREATE', data: create };
}

export function contactDelete(remove) {
  return { type: 'CONTACT@REMOVE', data: remove };
}
