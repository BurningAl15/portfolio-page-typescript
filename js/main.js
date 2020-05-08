"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// alert("AAA");
var users_js_1 = require("./users.js");
var login_js_1 = __importDefault(require("./login.js"));
require("jquery");
var loggedIn_js_1 = __importDefault(require("./loggedIn.js"));
// Check if logged in
loggedIn_js_1.default();
document.getElementById("loginButton").addEventListener("click", function (e) {
    e.preventDefault();
    var username = document.getElementById("username")
        .value;
    var password = document.getElementById("password")
        .value;
    login_js_1.default(users_js_1.getUsers()[0], { username: username, password: password });
});
console.log($("#loginButton"));
