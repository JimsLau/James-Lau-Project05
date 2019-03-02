// Initialize Firebase
import firebase from 'firebase';

var config = {
	apiKey: 'AIzaSyBkSM6ftMzC8OLPUMZigwXQbVf4jAFWb0M',
	authDomain: 'what-we-bringing.firebaseapp.com',
	databaseURL: 'https://what-we-bringing.firebaseio.com',
	projectId: 'what-we-bringing',
	storageBucket: '',
	messagingSenderId: '606079203278'
};
firebase.initializeApp(config);

export default firebase;
