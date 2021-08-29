import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('s5SnmDqJh2AW8RdkTyUc').collection('cartItems').doc('vWmbOdOIQ5BTLxIPwvNJ')
firestore.doc('/users/s5SnmDqJh2AW8RdkTyUc/cartItems/vWmbOdOIQ5BTLxIPwvNJ');
firestore.collection('/users/s5SnmDqJh2AW8RdkTyUc/cartItems');