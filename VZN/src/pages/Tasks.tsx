import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { TasksMenu } from "../components/main/tasksMenu/TasksMenu"

const Tasks = () => {
  return (
    <>
      <Header title={"Задачи"} isBorder={true} isBackgroundColor={true} />
      <TasksMenu />
      <Footer />
    </>
  )
}

export default Tasks
