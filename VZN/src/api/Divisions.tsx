export async function Divisions(/* metod,body */) {
  const metod = "stock/wsDepotcards.loadByFilter"
  const authToken = sessionStorage.getItem("authToken")
  fetch(`http://92.55.15.91:8225/${metod}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      AuthToken: `${authToken}`,
    },
    body: JSON.stringify({}),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error.Code !== 0) {
        alert(data.error.String)
      } else {
        console.log(data, "data")
        /*    return data */
      }
    })
    .catch((err) => alert(err))
}
