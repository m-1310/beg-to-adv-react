import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"

function App() {
 return(
  <>
  <Student name="Spongebob" age={30} isStudent={true}></Student>
  <Student name="Patrick" age={42} isStudent={false}></Student>
  <Student name="Squid" age={50} isStudent={false}></Student>
  <Student name="Sandy" age={27} isStudent={true}></Student>
  <Student></Student>
  <Card/>
  <Button/>
  <Header></Header>
  <Food/>
  <Footer/>
  </>
 );
}

export default App
