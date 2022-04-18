import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import App from './App';

function initializeLocalStorage() {
    localStorage.setItem('users', JSON.stringify([]));
    localStorage.setItem('boards', JSON.stringify([]));
    localStorage.setItem('columns', JSON.stringify([]));
    localStorage.setItem('cards', JSON.stringify([]));
    localStorage.setItem('userID', 0);
    localStorage.setItem('boardID', 0);
    localStorage.setItem('columnID', 0);
    localStorage.setItem('cardID', 0);
    console.log(localStorage)
}

initializeLocalStorage();
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);