# React Router version 6

## steps to install and use React Router

1. install React router
``npm install react-router@6 react-router-dom@6``
2. import BrowserRouter inside index.js file and Wrap App component with it.

```js
import { BrowserRouter } from 'react-router-dom';

<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</React.StrictMode>
```

3. inside App.js file import Routes and Route then you can add your routes.

```js
import { Routes, Route } from 'react-router-dom';

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
</Routes>

```

4. add your links inside NavBar component

```js
import { Link } from "react-router-dom";


<nav>
      <h1>NavBar</h1>
      <Link to="/">Home</Link><br />
      <Link to="/about">About</Link><br />
      <Link to="/contact">Contact</Link>
    </nav>
```

## Passing Function as props:

1- define the child and the parent.
2- create a function inside the parent component that receives the data from child.
3- pass the function as props from the parent to child component.
4- receive the data as props inside the child component.
5- call the function inside the child component.
