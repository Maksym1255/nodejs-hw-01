import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
    console.log('All contacts have been removed.');
  } catch (error) {
    console.log('Error removing contacts: ', error.message);
  }
};

removeAllContacts();
