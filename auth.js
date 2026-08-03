import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import {
GoogleAuthProvider,
signInWithPopup,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
getFirestore,
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyAiOD3u18STH0hwMMytH9BrRtWHsefOkKs",
authDomain: "master-calculator-harsheet.firebaseapp.com",
projectId: "master-calculator-harsheet",
storageBucket: "master-calculator-harsheet.firebasestorage.app",
messagingSenderId: "184254951947",
appId: "1:184254951947:web:1d94ea35af6c44ee298d0e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();

const loginScreen = document.getElementById("loginScreen");

const appScreen = document.getElementById("app");

const loginBtn = document.getElementById("googleLoginBtn");

// Google Login
loginBtn.addEventListener("click", async () => {

try {

await signInWithPopup(auth, provider);

} catch (e) {

console.error(e);

alert(e.code + "\n\n" + e.message);

}

});

// Auth State
onAuthStateChanged(auth, async (user) => {

if (!user) {

loginScreen.style.display = "flex";

appScreen.style.display = "none";

return;

}

const email = user.email.toLowerCase();

try {

const userRef = doc(db, "allowedUsers", email);

const snap = await getDoc(userRef);

if (snap.exists()) {

loginScreen.style.display = "none";

appScreen.style.display = "block";

} else {

alert("Access Denied");

await signOut(auth);

}

} catch (err) {

console.log(err);

alert("Server Error");

}

});
