

function List(){
   const fruits = [
      {id:1, name: "apple", calories:95},
      {id:2, name: "orange", calories:45},
      {id:3, name: "banana", calories:105},
      {id:4, name: "coconut", calories:159},
      {id:5, name: "pineapple", calories:37}
    ];

  fruits.sort((a,b)=> a.name.localeCompare(b.name));  //alphabatical order
  //fruits.sort((a,b)=> b.name.localeCompare(a.name));   //reverse alphabatical order
  //fruits.sort((a,b)=> a.calories-b.calories);    //numerical order


//map method
   const listItems = 
        fruits.map(fruit => 
          <li key={fruit.id}>
            {fruit.name} : &nbsp;
            <b>{fruit.calories}</b>
          </li> );

//filter method
  const lowCalFruits = fruits.filter(fruit=>fruit.calories <100);
  const listLowCalItems = 
    lowCalFruits.map(lowCalFruit => 
      <li key={lowCalFruit.id}>
        {lowCalFruit.name} : &nbsp;
        <b>{lowCalFruit.calories}</b>
      </li> );

  const highCalFruits = fruits.filter(fruit=>fruit.calories >=100);
  const listHighCalItems = 
   highCalFruits.map(highCalFruit => 
      <li key={highCalFruit.id}>
        {highCalFruit.name} : &nbsp;
        <b>{highCalFruit.calories}</b>
      </li> );


    return(
      <>
      <b>Fruits</b>
      <ol>{listItems}</ol>
      <b>Low Cal Fruits</b>
      <ol>{listLowCalItems}</ol>
      <b>High Cal Fruits</b>
      <ol>{listHighCalItems}</ol>
      </>
    );
}


export default List