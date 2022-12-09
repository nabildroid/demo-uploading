import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTVJ6Q6ZgbzDIYdOdWwu4fxEvFI9c8DQs",
  authDomain: "supernabil-86c2b.firebaseapp.com",
  projectId: "supernabil-86c2b",
  storageBucket: "supernabil-86c2b.appspot.com",
  messagingSenderId: "807390357158",
  appId: "1:807390357158:web:d5b4a1238a5cee9f52b667",
};

export const FirebaseApp = initializeApp(firebaseConfig);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App firebase={FirebaseApp} />
  </React.StrictMode>
);
