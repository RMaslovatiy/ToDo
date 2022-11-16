import React from 'react';
import ReactDOM from 'react-dom/client';
import BuildToDo from './buildToDo';
import './index.css';

// const apiRoot = "https://todolist-ruslan.azurewebsites.net";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BuildToDo />
  </React.StrictMode>
);

