import FirstComponent from'./components/FirstComponent'
import SecondComponent from './components/SecondComponent';
import Student from './components/Student';
import Memes from './components/Memes';
import db from './data/db.json';
// const db1 = require('./data/db.json');
import "./App.css";
//JSX
//Ahmad blue Pizza
//Rahaf purple burger
//Omar green mskhian
function App() {
  const studentData = [
    {name: 'Ahmad', favColor: 'blue', favFood: 'Pizza'},
    {name: 'Rahaf', favColor: 'purple', favFood: 'Burger'},
    {name: 'Omar', favColor: 'Green', favFood: 'Mskhan'}
  ]
  console.log(db);
  return (
    <div className="App" style={{color: 'red'}}>
      <h1>Welcome</h1>
      <FirstComponent />
      <SecondComponent />
      {studentData.map((obj, i) => {
        // console.log(obj, i);
        return(
          <Student key={i} name={obj.name} favColor={obj.favColor} favFood={obj.favFood} />
        )
      })}
      {
        db.map((obj, i) => (
          <Memes  name={obj.name} image={obj.image} tags={obj.tags} />
        ))
      }
      
    </div>
  );
}

export default App;
