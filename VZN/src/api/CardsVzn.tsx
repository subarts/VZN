export async function CardsVzn() {
  const metod = "stock/stockDepotcards.loadByFilter"
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
        flt: { Num: "2%" } /* пока существуют одна карточка  */,
      }),
    })

    const data = await response.json()
    if (data.error.Code !== 0) {
      throw new Error(data.error.String)
    }
    return data
  } catch (err) {
    alert(err)
  }
}