import { User } from "./users.js";
import loggedIn from "./loggedIn.js";

export default function (
  dbUser: User,
  formInfo: { username: string; password: string }
) {
  //   console.log(formInfo);
  if (formInfo.username === dbUser.username) {
    if (formInfo.password === dbUser.password) {
      localStorage.setItem("username", formInfo.username);

      loggedIn();
    } else {
      return;
    }
  } else {
    return;
  }
}
