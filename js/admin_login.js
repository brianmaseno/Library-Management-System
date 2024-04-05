//admin@123

$(document).ready(function(){    
    var firebaseConfig = {
        apiKey: "AIzaSyBKgjXJzc_90E0LR7DO_pVpOpKkJyds8xk",
        authDomain: "library-dcf25.firebaseapp.com",
        databaseURL: "https://console.firebase.google.com/u/0/project/library-dcf25/database/library-dcf25-default-rtdb/data/~2F",
       
        projectId: "library-dcf25",
        storageBucket: "library-dcf25.appspot.com",
        messagingSenderId: "832069169242",
        appId: "1:832069169242:web:82668049500b7e35d46863"
        // apiKey: "AIzaSyBin1evT-H6jfR49WIhtVPsGMLzbEklIQY",
        // authDomain: "library-management-syste-f2a85.firebaseapp.com",
        // databaseURL: "https://library-management-syste-f2a85.firebaseio.com",
        // projectId: "library-management-syste-f2a85",
        // storageBucket: "library-management-syste-f2a85.appspot.com",
        // messagingSenderId: "914416876417",
        // appId: "1:914416876417:web:bf9e7762c1c283ba"
      };
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    $("#login-form").submit(function(e) {
        e.preventDefault();
    });

    $('#submit_data').click(function() {
      login();
    });

    $('#back_button').click(function()
    {
        logout();
    });

    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            window.location = 'admin_portal.html'; //After successful login, user will be redirected to home.html     
            }
        });

  });
  
function login(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(email === "admin@gmail.com")
    {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(errorMessage);
        });
    }
    
}
function logout()
{
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }).catch(function(error) {
    // An error happened.
    });
}
