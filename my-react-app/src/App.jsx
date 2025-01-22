import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./userGreeting.jsx"
import List from "./List.jsx"
import ProfilePicture from "./Profile.jsx"
import MyComponent from "./MyComponent.jsx"

function App() {

 return(
  <>
  <MyComponent></MyComponent>
  <ProfilePicture/>
  <Button/>
  
  <List></List>
  <UserGreeting isLoggedIn={true} username="Manish"></UserGreeting>
  <UserGreeting isLoggedIn={false} username="Manish"></UserGreeting>
  <Student name="Spongebob" age={30} isStudent={true}></Student>
  <Student name="Patrick" age={42} isStudent={false}></Student>
  <Student name="Squid" age={50} isStudent={false}></Student>
  <Student name="Sandy" age={27} isStudent={true}></Student>
  <Student></Student>
  <Card/>
  
  <Header></Header>
  <Food/>
  <Footer/>
  </>
 );
}

export default App
