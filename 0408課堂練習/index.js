import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

ReactDOM.render(<App/>,document.getElementById('root'));


