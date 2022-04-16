import Dexie from 'dexie';

export const dataBase = new Dexie('TrelloDatabase');

// https://dexie.org/docs/Version/Version.stores()

dataBase.version(3).stores({
    users: '++id, &username, password',
    boards: '++id, &title, user_id',
    columns: '++id, title, index, board_id',
    cards: '++id, &title, description, user_id, column_id, board_id',
    recent: '++id, [user_id+board_id]'
})