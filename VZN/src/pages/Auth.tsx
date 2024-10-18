import Footer from "../components/footer/Footer"
import logo from "../assets/logo/Frame (5).svg"
const Auth = () => {
  return (
    <>
      <div className="Title">
        <img src={logo} width={"50px"} height={"50px"} />
        <h1>OmpMobile</h1>
      </div>

      <Footer />
    </>
  )
}

export default Auth
