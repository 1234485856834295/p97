function login() {
   window.location="kwitter_room.html" 

   pl1=document.getElementById("user_name").value;
   localStorage.setItem("user",pl1);
}