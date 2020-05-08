// alert("AAA");
import { getUsers } from "./users.js";
import login from "./login.js";
import "jquery";
import loggedIn from "./loggedIn.js";

// Check if logged in
loggedIn();

document.getElementById("loginButton")!.addEventListener("click", function (e) {
  e.preventDefault();
  let username: string = (<HTMLInputElement>document.getElementById("username"))
    .value;
  let password: string = (<HTMLInputElement>document.getElementById("password"))
    .value;

  login(getUsers()[0], { username, password });
});

console.log($("#loginButton"));
