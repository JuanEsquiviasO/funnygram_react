import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';

firebase.initializeApp({
	apiKey: "AIzaSyAAjOZ0qfIQLIH6AEDiDpMye3cLQdfRfbU",
	authDomain: "funnygram-250a7.firebaseapp.com",
	databaseURL: "https://funnygram-250a7.firebaseio.com",
	projectId: "funnygram-250a7",
	storageBucket: "funnygram-250a7.appspot.com",
	messagingSenderId: "87031868739"
});

ReactDOM.render(
		<App/>, document.getElementById('root'));
