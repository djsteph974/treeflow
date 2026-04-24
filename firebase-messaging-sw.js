importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyA8K0QUGr3xUSra2q_feHGrAjt0qAfrKY8",
    authDomain: "treeflow-music.firebaseapp.com",
    projectId: "treeflow-music",
    storageBucket: "treeflow-music.firebasestorage.app",
    messagingSenderId: "330986852150",
    appId: "1:330986852150:web:d57958930fa75b9504ad97"
});

const messaging = firebase.messaging();

// Gère l'affichage quand l'app est fermée
messaging.onBackgroundMessage((payload) => {
  console.log('Notification reçue en arrière-plan:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://googleusercontent.com/profile/picture/0'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
