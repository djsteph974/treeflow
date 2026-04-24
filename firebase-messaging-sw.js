importScripts('https://www.gstatic.com/firebasejs/12.12.0/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/12.12.0/firebase-messaging-sw.js');

firebase.initializeApp({
    apiKey: "AIzaSyA8K0QUGr3xUSra2q_feHGrAjt0qAfrKY8",
    authDomain: "treeflow-music.firebaseapp.com",
    projectId: "treeflow-music",
    messagingSenderId: "330986852150",
    appId: "1:330986852150:web:d57958930fa75b9504ad97"
});

const messaging = firebase.messaging();

// Gère l'affichage quand on reçoit la notif en arrière-plan
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://lh3.googleusercontent.com/d/1vsktKnp28H1JwhJeORR-UJsuaT-UItjI'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
