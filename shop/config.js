// Configuración de Firebase con tus datos reales
const firebaseConfig = {
    apiKey: "AIzaSyARrsVZ2LboEe5MblE8GKXVnas-zHB4k5I",
    authDomain: "et-accounts.firebaseapp.com",
    databaseURL: "https://et-accounts-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "et-accounts",
    storageBucket: "et-accounts.firebasestorage.app",
    messagingSenderId: "1006439185867",
    appId: "1:1006439185867:web:ca0ddbe47c0570380e4a4e"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();