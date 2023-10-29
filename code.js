// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB90rXGrYRXjrgc0cuYDlyePl62cgeLBU0",
  authDomain: "druckwelle-ddf12.firebaseapp.com",
  databaseURL: "https://druckwelle-ddf12-default-rtdb.firebaseio.com",
  projectId: "druckwelle-ddf12",
  storageBucket: "druckwelle-ddf12.appspot.com",
  messagingSenderId: "463864394623",
  appId: "1:463864394623:web:b51c87fccc6e93dee0e04a",
  measurementId: "G-5TS8KSX7S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Button_Click()
{ 
  var Username = document.getElementById('Username').value;
  var Password = document.getElementById('Password').value;
  console.log("Username = " + Username);
  console.log("Password = " + Password);

  getAnalytics(app);
}