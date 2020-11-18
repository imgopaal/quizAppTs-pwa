importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyCnZL8qexQjgc6xTrlZxpUmZshyTpnZkeg",
    authDomain: "pwa-app-1f93e.firebaseapp.com",
    databaseURL: "https://pwa-app-1f93e.firebaseio.com",
    projectId: "pwa-app-1f93e",
    storageBucket: "pwa-app-1f93e.appspot.com",
    messagingSenderId: "551518793045",
    appId: "1:551518793045:web:3b1c3d0f8ca99a2636d3dc"
});
firebase.messaging();