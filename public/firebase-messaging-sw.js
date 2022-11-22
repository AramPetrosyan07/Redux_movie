importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAG73xROERmeSbdi0G-yXPLV_n3Nz6dF0M",
    authDomain: "authmovie.firebaseapp.com",
    projectId: "authmovie",
    storageBucket: "authmovie.appspot.com",
    messagingSenderId: "813494552363",
    appId: "1:813494552363:web:fd6035edaa6836c678676e"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

    // Customize notification here
    console.log(payload);


});
// messaging.onBackgroundMessage((payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//         body: 'Background Message body.',
//         icon: '/firebase-logo.png'
//     };

//     self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });

messaging.onMessage(function (payload) {
    console.log('Message received. ', payload);

    // регистрируем пустой ServiceWorker каждый раз
    navigator.serviceWorker.register('messaging-sw.js');

    // запрашиваем права на показ уведомлений если еще не получили их
    Notification.requestPermission(function (result) {
        if (result === 'granted') {
            navigator.serviceWorker.ready.then(function (registration) {
                // теперь мы можем показать уведомление
                return registration.showNotification(payload.notification.title, payload.notification);
            }).catch(function (error) {
                console.log('ServiceWorker registration failed', error);
            });
        }
    });
});