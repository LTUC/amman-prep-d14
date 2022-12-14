import PropsExample from './components/propsExample'
import Memes from './components/memsList';

const data = require("./data.json");

// First add the h1 and p to explain what is a component before diving in more details
// Then, introduce props using "PropsExample" component
// Then, reading data from a JSON file and displaying it

function App() {
  return (
    <>
      <h1 style={{color:"green"}}>Hello World!</h1>
      <p>This is my first React Component!</p>
      <PropsExample name="Boshra" color="blue"/>
      <Memes  memsData={data}/>
    </>
  );
}

export default App;