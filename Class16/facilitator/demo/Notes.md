# Class16:

## Commands you might need:

* to create react app if you have Yarn installed run:
```bash
npx create-react-app my-app --use-npm
```
* use the following command to show them the file structure without node modules:
```bash
tree -I node_modules
```


## Components:
* Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 
* Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
* Example: ![](https://static.javatpoint.com/tutorial/reactjs/images/reactjs-components.png)
* An Example of how a page can be split into components:
![](https://blog.logrocket.com/wp-content/uploads/2021/05/basic-react-component-tree.png)

## Props:
* Props are arguments passed into React components. Props are passed to components via HTML attributes
* Props stands for properties.
* Props are Read-Only, a component never modify its own props.
* ![](https://scriptverse.academy/img/tutorials/reactjs-components-props.png)

### Stateless Components vs Stateful Component:
* Also known as: **Container vs Presentational components** or **Smart vs Dumb components**.
*  Stateful components keeps track of changing data, while stateless components print out what is given to them via props, or they always render the same thing.

## Component VS State:
![](https://miro.medium.com/max/1838/1*gJHmiQDd61_hRG23Nk8-VA.png)
![](https://www.techdiagonal.com/wp-content/uploads/2019/09/react-props-blog-image-design-2.jpg)


## Key in map():
*  Why is there a need for using keys in map?
* Keys are very important in lists for the following reasons:
* A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists
* It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered.

## Concepts Cheat Sheet:
| concept        | meaning                                                                                                                                                                              | resource                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| npx            | an npm package runner tool                                                                                                                                                           | [npx doc](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) |
| SPA            | single page application                                                                                                                                                              | [What is SPA](https://reactjs.org/docs/glossary.html#single-page-application)               |
| Virtual DOM    | The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. | [what is VDOM](https://reactjs.org/docs/faq-internals.html)                                 |
| Reconciliation | The algorithm React uses to diff one tree with another to determine which parts need to be changed.                                                                                  | [Reconciliation](https://reactjs.org/docs/reconciliation.html)                              |
| update         | A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.                                                                |
| Fragments | A common pattern in React is for a component to return multiple elements. | [what is Fragment](https://reactjs.org/docs/fragments.html) | 
|JSX| a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.|