function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className ==="topnav") {
        x.className += " responsive"; 
    } else {
        x.className = "topnav";
    }
}

function contact_send() {
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    window.alert("sent thanks");
    phone.value = "";
    email.value = "";
}

function login() {
    var phone = document.getElementById("user");
    var email = document.getElementById("password");
    window.alert("sent thanks");
    phone.value = "";
    email.value = "";
}