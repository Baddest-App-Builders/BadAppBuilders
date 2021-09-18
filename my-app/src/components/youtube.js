import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDKrGq19zry7GQKdvpL1azzOvPsqTJfLlQ",
  authDomain: "bad-app-builder.firebaseapp.com",
  projectId: "bad-app-builder",
  storageBucket: "bad-app-builder.appspot.com",
  messagingSenderId: "529596374838",
  appId: "1:529596374838:web:f9211df05671c7c90e9d97",
  measurementId: "G-B3Y882CY90",
};

// import axios from "axios";
// const KEY = "AIzaSyBOdVfrwOvCv5zyQNvGsa3hWUzrMRx488E";
// //AIzaSyDahUmm6DW_GwjC3eMhfvRtEAr97qkxWEU';

// export default axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3/",
//   params: {
//     part: "snippet",
//     maxResults: 3,
//     key: KEY,
//   },
// });

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2021, 10, 18);
//     }
//   }
// }
//database rules for 30 day challenge.
