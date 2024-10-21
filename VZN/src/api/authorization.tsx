import { LogPass } from "../types"
export async function Authorization(body: LogPass) {
  fetch("http://92.55.15.91:8225/login.getAuthToken", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      /* AuthToken: `${authToken}`, не нужон при авторизации*/
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error.Code !== 0) {
        alert("Не верный логин/пароль")
      } else {
        sessionStorage.setItem("authToken", data.authToken)
        window.location.href = "/menu"
      }
    })
    .catch((err) => alert(err))
}
