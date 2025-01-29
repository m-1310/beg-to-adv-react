import React, { useState } from "react";

function UpdateObject(){
  const [car, setCar]=useState({year:2024,
                                make:"Ford", 
                                model:"Mustang"});

    function handleYearChange(event){
      setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event){
      setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event){
      setCar(c => ({...c, model: event.target.value}));
    }

////////////////////////////////////////////////////
    const [foods, setFoods]=useState(["Apple","Orange","Banana"]);
    function handleAddFood(){
      const newFood = document.getElementById("foodInput").value;
      document.getElementById("foodInput").value="";
      setFoods(f=> [...f, newFood]);
    }
    function handleRemoveFood(index){
      setFoods(foods.filter((_, i)=> i !==index))
    }

 return(<><div>
  <p>Your Favourite Car is: {car.year} {car.make} {car.model}</p>
  <input type="number" value={car.year} onChange={handleYearChange}></input><br/>
  <input type="text" value={car.make} onChange={handleMakeChange}></input><br/>
  <input type="text" value={car.model} onChange={handleModelChange}></input><br/>
 </div><br/>
 ///////////////////////////////////////////////////////////////////////////////////////////////////////
 <div>
    <h2>List of Food</h2>
    <ul>{foods.map((food,index)=>
        <li key={index} onClick={()=>handleRemoveFood(index)}>
        {food}
        </li>)}
    </ul>
    <input type="text" id="foodInput" placeholder="Enter Food Name"></input>
    <br></br>
    <button onClick={handleAddFood}>Add Food</button>
 </div>
 
 </>)
}

export default UpdateObject;