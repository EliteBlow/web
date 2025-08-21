// auth.js
// === CONFIGURACIÓN FIREBASE ===
const firebaseConfig = {
  apiKey: "AIzaSyARrsVZ2LboEe5MblE8GKXVnas-zHB4k5I",
  authDomain: "et-accounts.firebaseapp.com",
  databaseURL: "https://et-accounts-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "et-accounts",
  storageBucket: "et-accounts.firebasestorage.app",
  messagingSenderId: "1006439185867",
  appId: "1:1006439185867:web:ee9221150be923340e4a4e"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const usersRef = database.ref('users');

// === VERIFICACIÓN DE USUARIO ===
(function(){
    const currentUser = localStorage.getItem("currentUser");
    if(!currentUser){
        alert("Debes iniciar sesión para acceder a esta página.");
        window.location.href = "index.html";
        return;
    }
    const currentPage = window.location.pathname.split("/").pop(); // nombre del HTML actual
    usersRef.child(currentUser).once('value', snapshot => {
        if(!snapshot.exists()){ 
            alert("Usuario no encontrado."); 
            window.location.href = "index.html"; 
        } else {
            const userData = snapshot.val();
            if(!userData.pages.includes(currentPage)){
                alert("No tienes permiso para acceder a esta página.");
                window.location.href = "index.html";
            }
        }
    });
})();
