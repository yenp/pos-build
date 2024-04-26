// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup

importScripts(
  "https://www.gstatic.com/firebasejs/10.7.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.2/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "%REACT_APP_PUBLIC_FIREBASE_APIKEY%",
  authDomain: "%REACT_APP_PUBLIC_FIREBASE_AUTHDOMAIN%",
  projectId: "%REACT_APP_PUBLIC_FIREBASE_PROJECTID%",
  storageBucket: "%REACT_APP_PUBLIC_FIREBASE_STORAGEBUCKET%",
  messagingSenderId: "%REACT_APP_PUBLIC_FIREBASE_MESSAGINGSENDERID%",
  appId: "%REACT_APP_PUBLIC_FIREBASE_APPID%",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "http://localhost:3006/logoWeb192.png",
    image: "http://localhost:3006/logoWeb192.png",
    data: payload.data,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.onnotificationclick = (event) => {
  console.log("event", event);
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
        includeUncontrolled: true,
      })
      .then(function (clientList) {
        for (const client of clientList) {
          if ("focus" in client) {
            client.focus();
            client.postMessage(event.notification.data);
            return;
          }
        }
        if (clients.openWindow) {
          return clients.openWindow("/#/");
        }
      })
  );
  event.notification.close();
};
