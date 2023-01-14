import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyCAF_uTLFu_nCpgJlvmShql2pSrQWmzQxA",
        authDomain: "havenlibrary-29327.firebaseapp.com",
        databaseURL: "https://havenlibrary-29327-default-rtdb.firebaseio.com",
        projectId: "havenlibrary-29327",
        storageBucket: "havenlibrary-29327.appspot.com",
        messagingSenderId: "883759908787",
        appId: "1:883759908787:web:dc68395f6a11a96c43edc6",
        measurementId: "G-S43VC9CNC8"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

      return getDatabase(app);
}

export default StartFirebase;