var firebaseConfig = {
  apiKey: "AIzaSyAuovVWlHbvuC845E-k7LRm3drAHs580z4",
  authDomain: "p95-36850.firebaseapp.com",
  databaseURL: "https://p95-36850-default-rtdb.firebaseio.com",
  projectId: "p95-36850",
  storageBucket: "p95-36850.appspot.com",
  messagingSenderId: "273038313801",
  appId: "1:273038313801:web:fb6343d9c2b6a7da6cf298"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  document.getElementById("welcomesign").innerHTML=localStorage.getItem("user");


   
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML=row;
   //End code
   });});}
getData();

function add_room(){
room=document.getElementById("room_name").value;
firebase.database().ref("/").child(room).update({purpose:" room name "});
localStorage.setItem("room",room);
window.location="kwitter_page.html";
}

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room",name);
   window.location="kwitter_page.html";
}

function logout(){
   window.location="index.html";
   localStorage.removeItem("room");
localStorage.removeItem("pname");
}


  