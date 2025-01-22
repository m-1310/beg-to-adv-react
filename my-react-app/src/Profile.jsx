function ProfilePicture(){
  const imageUrl = './src/assets/profile_cards.jpg';
  const handleClick =(e) => e.target.style.display="none";
  return(
    <>

    <img onClick={(e)=>handleClick(e)} src={imageUrl}></img>
    <br></br>

    </>
  )
}
export default ProfilePicture;