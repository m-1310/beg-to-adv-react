import profilePic from "./assets/profile_cards.jpg"

function Card(){
  return(
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile Picture"></img>
      <h2 className="card-title">Chep</h2>
      <p className="card-text">I'm learning React</p>
    </div>
  );
}
export default Card;