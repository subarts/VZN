import "./App.css"
import "./reset.css"
import "./reset.css"
import Auth from "./pages/Auth"
import Select from "./components/select/Select"
import Input from "./components/input/Input"

function App() {
  return (
    <>
      <Select legend='Метка'/>
      <Input legendText="Номер ВЗН" />
    </>
  )
}
export default App
