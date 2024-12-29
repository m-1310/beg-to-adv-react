import profilePic from "./assets/profile_cards.jpg"

function Card(){
  return(
    <div className="card">
      <img src={profilePic} alt="Profile Picture"></img>
      <h2>Chep</h2>
      <p>I'm learning React</p>
    </div>
  );
}
export default Card;