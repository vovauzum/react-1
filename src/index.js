import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "Hi, how are you?", likeCounts: "20" },
  { id: 2, message: "It's my first post", likeCounts: "30" }
]

let dialogs = [
  { id: 1, name: "Eduard" },
  { id: 2, name: "Igor" },
  { id: 3, name: "Vova" },
  { id: 4, name: "Olya" },
  { id: 5, name: "Yulya" },
  { id: 6, name: "Igor" }
]

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How is your it-kamasutra?" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
  { id: 6, message: "Yo" }
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
