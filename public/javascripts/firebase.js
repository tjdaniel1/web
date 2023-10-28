  // firebase - 프로젝트 설정 - 내 앱 - SDK 설정 및 구성 - CDN 내용 복사
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDnvTIYE90L888Vw4mSXYhll7d6j1OdOx4",
    authDomain: "book-d620d.firebaseapp.com",
    projectId: "book-d620d",
    storageBucket: "book-d620d.appspot.com",
    messagingSenderId: "231371894704",
    appId: "1:231371894704:web:7f1040bf129a09866a7075",
    measurementId: "G-09C0T211PV"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);