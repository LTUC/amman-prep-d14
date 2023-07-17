import React,{useEffect, useState} from 'react'
import Cards from './Cards'

export default function Home() {
    // const [users, setUsers] = useState([]);
   const [data, setData] = useState([]);
    async function getAllReceipes(){
        const url = process.env.REACT_APP_SERVER_URL;
        // console.log(url);
        const response = await fetch(`${url}/recipes`);
        const recipes = await response.json();
       setData(recipes)
    }
    //recive the id and new object from modal
    function commentHandler(newRecipe,id){
      console.log(newRecipe, id, 'from home component');
      data.map((recipe) => {
        if(recipe.id === id){
          recipe.comment = newRecipe.userComment;
          return recipe;
        }else{
          return recipe;
        }
      })
      console.log('Comment Handler',data);
    }
    useEffect(() => {
        getAllReceipes()
        
    }, []);
    
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
    {data.map((obj, i) => (
        <Cards commentHandler={commentHandler} data={obj} key={i}/>
    ))}
      
    </div>
  )
}
