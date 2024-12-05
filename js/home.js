var welcome = document.getElementById("welcome");

var storageName = localStorage.getItem("loggedInUser");
welcome.innerHTML = `Welcome ${storageName}`;

function logout() {
  localStorage.removeItem("loggedInUser");
}
