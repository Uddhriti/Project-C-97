// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAvGNKO4UUUeiL-ahwN0O0T80t_geox9jU",
      databaseURL: "https://kwitter-277d2-default-rtdb.firebaseio.com/",
      authDomain: "kwitter-277d2.firebaseapp.com",
      projectId: "kwitter-277d2",
      storageBucket: "kwitter-277d2.appspot.com",
      messagingSenderId: "683070005634",
      appId: "1:683070005634:web:5a202fa50a9ddc2521af9b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome : " + user_name;
function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "Kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");  
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }
function addroom(){
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            use : "add room name"      });
            localStorage.setItem("room_name" , room_name);
            window.location = "Kwitter_page.html";
}
