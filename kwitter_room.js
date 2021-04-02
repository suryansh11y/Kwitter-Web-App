var firebaseConfig = {
    apiKey: "AIzaSyDy9t1PJQrAiB0A_ibilaAlhh3EXnnWSpY",
    authDomain: "kwitter-3cc1e.firebaseapp.com",
    databaseURL: "https://kwitter-3cc1e-default-rtdb.firebaseio.com",
    projectId: "kwitter-3cc1e",
    storageBucket: "kwitter-3cc1e.appspot.com",
    messagingSenderId: "347584750664",
    appId: "1:347584750664:web:3ee790e21f40ea8f66e47d",
    measurementId: "G-QCPH35E9DF"
  }; 

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          Room_names = childKey;
         //Start code
   
         //End code
         });});}
   getData();
   