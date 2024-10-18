import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { TasksMenu } from "../components/main/tasksMenu/TasksMenu"

const Tasks = () => {
  const headerProps = {
    title: "Задачи",
    style: ["header", "border", "backgroundColor"],
  }
  return (
    <>
      <Header {...headerProps} />
      <TasksMenu />
      <Footer />
    </>
  )
}

export default Tasks
