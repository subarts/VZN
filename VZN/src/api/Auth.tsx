/* const body = {
  login: "work",
  password: "work",
}
let AuthToken = ""
export const response = await fetch(
  "http://92.55.15.91:8225/login.getAuthToken",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      AuthToken: `${AuthToken}`,
    },
    body: JSON.stringify(body),
  }
)
  .then((response) => response.json())
  .then((data) => {
    return (AuthToken = data.authToken)
  }) */
