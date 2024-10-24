export async function BoTypes() {
  const authToken = sessionStorage.getItem("authToken")
  const metod = "so.findOmpObject"

  try {
    const response = await fetch(`http://92.55.15.91:8225/${metod}`, {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          AuthToken: `${authToken}`,
        },
        body: JSON.stringify({
          soNum: "A002277543"
        }),
    })

  const data = await response.json()
  if (data.error.Code !== 0) {
    throw new Error(data.error.String)
  }

  return data

  } catch (error) {
    alert(error)
  }
};
