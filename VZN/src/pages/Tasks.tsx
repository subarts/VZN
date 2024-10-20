import Footer from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { TasksMenu } from "../components/main/tasksMenu/TasksMenu"
import { THeaderStyle } from "../types"
const Tasks = () => {
  const headerProps: THeaderStyle = { style: ["border", "backgroundColor"] }
  function headerRenderProps(): React.ReactNode {
    return <h1>Меню</h1>
  }
  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />
      <TasksMenu />
      <Footer />
    </>
  )
}

export default Tasks
