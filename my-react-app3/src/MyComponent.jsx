import React,{useState, useEffect} from "react";

function MyComponent(){
  const[count, setCount] = useState(0)
  const[color, setColor] = useState("Green");

  useEffect(()=>{
    document.title = `Count :${count} ${color}`
  }, [count,color])

  function addCount(){
    setCount(c=>c+1)
  }

  function subCount(){
    setCount(c=>c-1)
  }

  function changeColor(){
    setColor(c=>c==="Green"?"Red":"Green")
  }


  const[width, setWidth] = useState(window.innerWidth);
  const[height, setHeight] = useState(window.innerHeight);
  

  useEffect(()=>{
    window.addEventListener("resize", handleResize);
    console.log("Event Listener");

    return()=>{
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(()=>{
    document.title = `Size: ${width} x ${height}`;
  },[width,height])

  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return(
    <>
      <p style={{color:color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button>
      <br></br>
      <button onClick={changeColor}>Change Color</button>
      <br/><br/>
      <p>Window Widht : {width}</p>
      <p>Window Height : {height}</p>
    </>
  )
}

export default MyComponent; 