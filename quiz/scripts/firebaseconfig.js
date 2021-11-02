// import { initializeApp } from "firebase/app";

(function (window){
    'use strict';
    var App = window.App || {};

    
    const FirebaseConfig = {
        apiKey: "AIzaSyBvVJ6cILot15S3JFTMTX8ApYrJOAQFTzY",
        authDomain: "leaguecharacters.firebaseapp.com",
        projectId: "leaguecharacters",
        storageBucket: "leaguecharacters.appspot.com",
        messagingSenderId: "57829940795",
        appId: "1:57829940795:web:944cf75c7de5a5d081461e"
      };

    //App.FirebaseConfig = FirebaseConfig;

    //firebase.initalizeApp(FirebaseConfig);
    
    // const app = initializeApp(firebaseConfig);

    // Initialize Firebase
    App.FirebaseConfig = FirebaseConfig;

    firebase.initializeApp(App.FirebaseConfig);
    
    window.App = App;
})(window);