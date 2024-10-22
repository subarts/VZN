export async function Divisions(/* metod,body */) {
  const metod = "divisions/storeDivisions.avDivisions"
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
        params: {
          CurrentDivCode: 0,
          CurrentDivType: 0,
          IsFilter: false,
        },
      }),
    })
    const data = await response.json()
    if (data.error.Code !== 0) {
      throw new Error(data.error.String)
    }
    console.log(data)
    return data.divisions
  } catch (err) {
    alert(err)
  }
}
