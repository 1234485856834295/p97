var firebaseConfig = {
    apiKey: "AIzaSyAuovVWlHbvuC845E-k7LRm3drAHs580z4",
    authDomain: "p95-36850.firebaseapp.com",
    databaseURL: "https://p95-36850-default-rtdb.firebaseio.com",
    projectId: "p95-36850",
    storageBucket: "p95-36850.appspot.com",
    messagingSenderId: "273038313801",
    appId: "1:273038313801:web:fb6343d9c2b6a7da6cf298"
  };
  
  firebase.initializeApp(firebaseConfig);

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;

        } });  }); }
  getData();
  
  function logout(){
        window.location="index.html";
        localStorage.removeItem("room1");
        localStorage.removeItem("pname1");
  }
  
  room_name=localStorage.getItem("room1");
  player_name=localStorage.getItem("pname1");
  
  function send(){
        msg=document.getElementById("message").value;
        firebase.database().ref(room_name).push({name:player_name,message:msg,like:0});
        document.getElementById("message").value="";
  }