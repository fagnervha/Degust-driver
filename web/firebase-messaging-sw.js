importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyC65OXItWgAtKfioVXWsGD2ReGFycUstR4",
  authDomain: "degust-delivery-1fc62.firebaseapp.com",
  projectId: "degust-delivery-1fc62",
  storageBucket: "degust-delivery-1fc62.appspot.com",
  messagingSenderId: "1087572610631",
  appId: "1:1087572610631:web:de662c3500d6cd02b42b62",
  databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});