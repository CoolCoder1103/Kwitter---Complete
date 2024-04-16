
var firebaseConfig = {
      apiKey: "AIzaSyDmSIDgAsKr3ypF4Ia2kpcBN1KO7_vmLeQ",
      authDomain: "kwitter-page-93a10.firebaseapp.com",
      databaseURL: "https://kwitter-page-93a10-default-rtdb.firebaseio.com",
      projectId: "kwitter-page-93a10",
      storageBucket: "kwitter-page-93a10.appspot.com",
      messagingSenderId: "292293317316",
      appId: "1:292293317316:web:9391776498eda625612f91"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
  }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }
