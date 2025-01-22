function Button(){
  

  const handleClick = ()=>{
    console.log("OUCH");
  }


  let count = 0;
  const handleClick2 = (name) =>{
    if(count<3){
      count++;
      console.log(`${name} clicked me ${count} times`)
    }else{
      console.log(`${name} stop clking`)
    }
  }


  const handleClick3 =(e)=>{
    e.target.textContent = "OUCH! 😒"
  }

  
  return(
    <>
    <button className="button" onClick={()=>handleClick2("Bro")}>
      Click Me</button>
    <br></br>
    <br></br>
    <button onClick={handleClick}>
      Click Me</button>
    <br></br>
    <br></br>
    <button onDoubleClick={(e) => handleClick3(e)}>
      Click Me 😁</button>
    <br></br>
    <br></br>
    </>
  )
}
export default Button;