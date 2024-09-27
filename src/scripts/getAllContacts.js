import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    return await readContacts();
  } catch (error) {
    console.log('Error fetching contacts: ', error.message);
  }
};

console.log(await getAllContacts());
