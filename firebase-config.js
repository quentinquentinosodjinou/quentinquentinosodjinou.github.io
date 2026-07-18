// firebase-config.js
// Configuration Firebase de ton projet (portfolio-quentin-0163203367)
// Ce fichier est importé à la fois par le formulaire de contact (index.html)
// et par le tableau de bord admin (admin.html).

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-jM7s94YpbM8Ylr4ED0HcZkhGBH5jra4",
  authDomain: "portfolio-quentin-0163203367.firebaseapp.com",
  projectId: "portfolio-quentin-0163203367",
  storageBucket: "portfolio-quentin-0163203367.firebasestorage.app",
  messagingSenderId: "972851807156",
  appId: "1:972851807156:web:cc8fc5adc2a70ab05fa8e1"
};

export const app = initializeApp(firebaseConfig);
