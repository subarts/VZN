export async function consignmentsVzn(body) {
  const metod = "stock/wsInplants.loadByFilter"
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
        flt: body,
      }),
    })

    const data = await response.json()

    if (data.error.Code !== 0) {
      throw new Error(data.error.String)
    }
    return data.wsInplants
  } catch (err) {
    alert(err)
  }
}
