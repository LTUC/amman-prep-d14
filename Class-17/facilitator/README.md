# Class17:

## Resources:
* [React Router](https://reactrouter.com/)
* [What is new in RouterV6](https://enlear.academy/whats-new-in-react-router-6-e34e451e5285)
* [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
* [useState hook](https://reactjs.org/docs/hooks-state.html)


# Class 17 Guide


The "Lecture Main Topics" section for each day can be used as a possible outline for a lecture. They're flows that have worked before, but feel free to deviate and do your own thing as fits your class.

## Overview of Today

Today's lecture will teach students the fundamentals they'll use for the rest of the week:

## Routing 

- installation :

```bash
npm install react-router-dom@6
```

- Configuring Routes

```
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
```

- Navigation

Use Link to let the user change the URL or useNavigate to do it yourself (like after form submissions):



```
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}

```
## conditional rendering

You can build Single Page Applications (SPA) that are dynamic and highly interactive with React. One feature that allows for this is conditional rendering.

- Using an if…else Statement

Example 
```
class App extends Component {
  // ...

  render() {
    let {isLoggedIn} = this.state;

    return (
      <div className="App">
        <h1>
          This is a Demo showing several ways to implement Conditional Rendering in React.
        </h1>
        {
          if(isLoggedIn){
            return <button>Logout</button>
          } else{
            return <button>Login</button>
          }
        }
      </div>
    );
  }
}

```

- Using a switch Statement

- Using Element Variables

- Using Ternary Operators


## passing props as function 

In a function component, components receive props exactly like an ordinary function argument. A function component will receive the props object with properties you described in the component call:

```
function App() {
  return <Greeting name="Nathan" age={27} occupation="Software Developer" />;
}

function Greeting(props) {
  return (
    <p>
      Hello! I'm {props.name}, a {props.age} years old {props.occupation}.
      Pleased to meet you!
    </p>
  );
}
```

## handling events

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.

```
<button onClick={activateLasers}>
  Activate Lasers
</button>

```
another example submitting the form its slightly different than vanilla js :

```
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## introduce state and life-cycle (useState)

### useState Hook

“useState” hooks is implemented as a useful feature combining state and “setState”. When we use states in class based components in React, we first need to declare a state variable in the class and then when we want to change state, we would need to use “setState” to alter it. The most important part is also that we could not use state in functional components before React 16.8. However, with hooks we can declare state in functional components with “useState” hook.
Example Hooks Usage:

```

import React, {useState} from "react";

const ExampleComponent = props => {
    const [exampleState, setExampleState] = useState({name: "Berk"});
    
    const changeName = () => {
        // setExampleState will provide us with changing state;
        // setExampleState will also provide previous state if we want to use it.
        setExampleState(prev => ({name: "Changed..."}));
    }
    
    return (
        <>
        {/* exampleState will give us {name: "Berk"} */
        <div>{exampleState.name}</div>
        <button onClick={changeName}>Change Name</button>
        </>
    )
}

```

## How do I prep for today?

- Prepare for code review. If you're nervous, find someone's code before lecture, and you can read it (and know what you'll talk about) before lecture begins.
- (put here how many demos and the names of them) the discussion of how to initialize a new project using the steps above.
- Prepare a walk through of the directory structure for this lab
- Prepare a demo of testing.

## Lecture Main Topics

- What is Routing and how to use it?


- conditional rendering , when and how to use it .

- when do we need passing props as function , and how to it correctly .

- handling events in a correct wat and the students should know that the way of doing events in react different than vanilla js 

  explain what is state and life-cycle (useState) and how to use it.


## What might students struggle with today?

Students are going to have a hard time with the amount of new material. Some will continue to discover later.

### Code Review Notes

Some basic code review questions:

Does it work?
What part of this is confusing?
What could make it more readable?
What could have more explanation?
What could be broken into smaller pieces?
What would make this easier for others to understand.
How could this be more performant?
Are there 'red flags' (Experience: Things you don't do often. Why did they do that?)
Are 'bad inputs' accounted for?
Are there missing test cases?
Is it documented?


I found the best code reviews consisted of the students describing their code to each other, explaining why they choose those methods, and even helping teach the subjects of the labs.

