export async function InfoCardsVzn() {
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
        flt: {
          WsInplantCode: 0,
        } /* пока 0 тк других все равно не находит  !поиск карточек, в ответе нас интересует LeaveCardCode- номер карточки*/,
      }),
    })

    const data = await response.json()

    if (data.error.Code !== 0) {
      throw new Error(data.error.String)
    }
    return data.wsInplantContents
  } catch (err) {
    alert(err)
  }
}
