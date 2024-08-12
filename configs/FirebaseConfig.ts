// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import {
  getAnalytics,
  isSupported as isAnalyticsSupported,
} from "firebase/analytics";
import { getAuth, initializeAuth, inMemoryPersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwmznmfXSw-E4P4FC5W232tBq9nStktVw",
  authDomain: "ai-travel-planner-ef2d4.firebaseapp.com",
  projectId: "ai-travel-planner-ef2d4",
  storageBucket: "ai-travel-planner-ef2d4.appspot.com",
  messagingSenderId: "2646410636",
  appId: "1:2646410636:web:5fa86dbcaeb678c50142a9",
  measurementId: "G-WQHMCR29H5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// // export const auth = getAuth(app);

// Initialize Auth with AsyncStorage
const auth = initializeAuth(app, {
  // persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  persistence: inMemoryPersistence,
});

// const analytics = getAnalytics(app);

if (process.env.NODE_ENV === "production") {
  isAnalyticsSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
      console.log("Analytics initialized.");
    } else {
      console.log("Analytics is not supported in this environment.");
    }
  });
} else {
  console.log("Skipping Analytics initialization in development.");
}

export { app, auth };
