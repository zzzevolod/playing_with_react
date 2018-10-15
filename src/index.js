// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
 import {createStore} from 'redux';

function playlist(state = [], action) {
    if(action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}
const store = createStore(playlist);
const addTrackButton = document.querySelectorAll('.addTrack')[0];
const trackList = document.querySelectorAll('.list')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];

store.subscribe(() =>{
    console.log('subscribe', store.getState());
    trackList.innerHTML = '';
    trackInput.value = '';
    store.getState().forEach(track => {
       const li = document.createElement('li');
       li.textContent = track;
       trackList.appendChild(li);
    });
});




addTrackButton.addEventListener('click', () => {
   const nameTrack = document.querySelectorAll('.trackInput')[0].value;
   if(nameTrack !== ''){
       store.dispatch({type: 'ADD_TRACK', payload: nameTrack});
       console.log('track is', nameTrack);
   } else {
       alert('cant add empty track');
   }

});


