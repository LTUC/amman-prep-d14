# Travel Destination

## **Lab 17**

### **Overview**

You will continue building on what you achieved in the **Lab 16**.

### **Requirements**


- Create new branch called class-17 then start your work by using this command **git checkout -b class17**

- Your yo organize your file structure to be as below - it just related to src folder the rest folder should not be Edited .

```
.
├── App.css
├── App.js
├── components
│   ├── Navbar
│   │   ├── Navbar.css
│   │   └── Navbar.js
│   ├── TourDetails
│   │   ├── TourDetails.css
│   │   └── TourDetails.js
│   ├── home
│   │   ├── Home.css
│   │   └── Home.js
│   └── tours
│       ├── Tours.css
│       ├── Tours.js
│       └── tour
│           ├── Tour.css
│           └── Tour.js
├── data
│   └── db.json
├── index.css
└── index.js
```

- You have to create two new components.
    - Tour
    - TourDetail

- Your project should looking good so you have to create css file for each components and give each component style 
- Follow this link to learn how to design your react project by using css [Link 1](https://reactjs.org/docs/faq-styling.html) | [Link 2](https://www.w3schools.com/react/react_css.asp)

- Update Tours component:

   - So in the previous lab you was use `div` to render tours as card , but in this lab and as you learn in today demo and instead of returning a `<div>` each time. you must return and render a `<Tour/>`.
    - After that, you have to pass the data as props to the `<Tour/  tour={tour} >`.and don’t forget to add the id as a key.


- Tour component:

    - In the tour component you have to display the same data that you have displayed before which are [ image, name ].

- Routing:
   - your will have two routes as the following: 
      1. To navigate back to the home page, path="/"
      2. in order to show more details about the city, path=`”/city/:id”`
  - Update your `<Header/>` to be containing a link that navigates to home.
  
         

- Tour Details:
     - Once the user clicks on any of the cities cards that you created, it should show details about that city (Note :- You can handle this feature by wrapping each card by `Link` and pass the `id` of the card of tour that you clicked as props and then receive the `id` of these tour by using hook that called [useParams](https://www.codecademy.com/courses/learn-react-router/lessons/intermediate-react-react-router/exercises/useparams) and then after you log of id and you insure it was received you have to render only the whole information of this tour include description).

    - You have to create function to get information of the clicked tour by passing of the id to this function and filter then to return on the information of this tour .
       
    - **Hint:** 
        - You may use the filter method for Tour Details.
        - You may use Link from react-route-dom.

- Tour Description :
    - The user should not have see the whole description once he/she reach to detail page he just have to see the first three lines and then he should see `see more` and once he click on it he have to see the rest of description and also he have see `see less` to shrink and description to be as he was see before in three lines .

    - **Hint:**
       -You may use useState hooks to create state of the view of the description. 

                                      

    

