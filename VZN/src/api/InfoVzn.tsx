export async function InfoVzn(body) {
  const metod = "stock/wsInplants/contents.loadByFilter"
  const authToken = sessionStorage.getItem("authToken")

  try {
    const response = await fetch(`http://92.55.15.91:8225/${metod}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        AuthToken: `${authToken}`,
      },
      body: JSON.stringify({
        flt: 50022300,
      }),
    })

    const data = await response.json()

    if (data.error.Code !== 0) {
      throw new Error(data.error.String)
    }
    console.log(data)
  } catch (err) {
    alert(err)
  }
}
