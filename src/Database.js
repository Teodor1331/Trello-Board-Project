import Dexie from 'dexie';

export const dataBase = new Dexie('TrelloDatabase');

// https://dexie.org/docs/Version/Version.stores()

dataBase.version(1).stores({
    users: '++id, &username, &password',
    boards: '++id, &title, user_id',
    columns: '++id, &title, index, board_id',
    cards: '++id, &title, description, user_id, column_id, board_id'
})