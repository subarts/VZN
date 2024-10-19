import Footer from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { TasksMenu } from "../components/main/tasksMenu/TasksMenu"

const Tasks = () => {
  const headerProps = { style: ["border", "backgroundColor"] }
  function headerRenderProps() {
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
