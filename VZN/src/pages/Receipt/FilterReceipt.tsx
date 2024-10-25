import { useEffect, useState } from "react"
import { DateOfAcceptance } from "../../components/dateOfAcceptance/DateOfAcceptance"
import Footer from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import Input from "../../components/input/Input"
import { THeaderStyle } from "../../types"

const FilterReceipt: React.FC = () => {
  const headerProps: THeaderStyle = { style: ["border", "backgroundColor"] }
  function headerRenderProps(): React.ReactNode {
    return <h1>Меню</h1>
  }
  const [filter, setFilter] = useState({
    numberVzn: "",
    startDate: "",
    endDate: "",
  })
  function selectStartDate(start: string) {
    setFilter({ ...filter, startDate: start })
  }
  function selectEndDate(end: string) {
    setFilter({ ...filter, endDate: end })
  }
  /* получение списка подразделений */
  const [list, setList] = useState<Array<{ code: string; name: "string" }>>()
  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken")
    fetch("http://92.55.15.91:8225/divisions/storeDivisions.avDivisions", {
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
      .then((response) => response.json())
      .then((data) => {
        if (data.error.Code !== 0) {
          alert(data.error.String)
        } else {
          setList(data.divisions)
        }
      })
      .catch((err) => alert(err))
  }, [])
  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />
      <main className="main">
        <Input
          legendText={"Номер ВЗН"}
          type={"number"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilter({ ...filter, numberVzn: e.target.value })
          }
        />
        <fieldset>
          <legend>Отправитель</legend>
          <select>
            <option value=""></option>
            {list?.map((el, index) => {
              return (
                <option value={el.code} key={index}>
                  {el.name}
                </option>
              )
            })}
          </select>
        </fieldset>
        <DateOfAcceptance
          selectStartDate={selectStartDate}
          selectEndDate={selectEndDate}
        />
        <button>Поиск</button>
      </main>
      <Footer />
    </>
  )
}

export default FilterReceipt
