import React,{useEffect, useState} from 'react'
import Cards from './Cards'

export default function Home() {
    // const [users, setUsers] = useState([]);
   const [data, setData] = useState([]);
    async function getAllReceipes(){
        const url = process.env.REACT_APP_SERVER_URL;
        console.log(url);
        const response = await fetch(`${url}/recipes`);
        const recipes = await response.json();
       setData(recipes)
    }
    useEffect(() => {
        getAllReceipes()
        console.log('insdie useEffect',data);
    }, []);
    // const user = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then((res=> setUsers(res)));
    // console.log(user);
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
    {data.map((obj, i) => (
        <Cards data={obj} key={i}/>
    ))}
      
    </div>
  )
}
