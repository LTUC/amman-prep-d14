# Class 08 Guide

## Overview For Today

Today's lecture will teach students DOM and DOM manipulation, forms, events, and rendering data from the HTML form.

## DOM

### HTML DOM Document Object

- Finding HTML Elements

`document.getElementById(id)` Find an element by element id.

**Note: The instructor will mention other methods to find elements (`document.getElementsByTagName(name)` and `document.getElementsByClassName(name)`).**

### Changing HTML Elements

- Property
  - `element.innerHTML= value`
  - `element.style.color = 'blue'`
  
- Methods

  - `element.setAttribute('src', value)`

## Forms

An HTML form is used to collect user input.

### The `<form>` Element

The `<form>` element is a container for different types of input elements, such as text fields, checkboxes, radio buttons, submit buttons, etc.

### The `<input>` Element

An `<input>` element can be displayed in many ways, depending on the type attribute.

**Note for today's lab we will use text type input and submit input type, but the instructor can mention other types; radio, checkbox, and number.**

### The `<label>` Element

The `for` attribute of `<label>` must be equal to the `id` attribute of the related element to bind them together. A label can also be bound to an element by placing the element inside the `<label>` element.

### The `<fieldset>` Element

The `<fieldset>` tag is used to group related elements in a form.

### The `select` Element

The `<select>` element is used to create a drop-down list.

### The `option` Element

The `<option>` tag defines an option in a select list.
It needs the `value` attribute, which indicates what is sent on form submission.

## Example

```HTML
<form id="add-person">
  <fieldset>
    <legend>Add new person:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br>
    <label for="age">Age</label>
    <input type="number" id="age" name="">
    <input type="submit" value="Submit">
    <select id="gender">
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>
  </fieldset>
</form>
```

## Events

Events triggered by actions inside an HTML form.

- "submit"
- "click"
- "change"
- "focus"

### addEventListener()

- The `addEventListener()` method attaches an event handler to the specified element.

**Note: The instructor might mention that `addEventListener()` to any HTML element, not only forms.**

`element.addEventListener(event, function)`

## Example

``` javascript
let formElement= getElementById('add-person');
formElement.addEventListener(event, handleForm);

function handleForm(e){
    e.preventDefault();
    let firstName = e.target.fname.value;
    let lastName = e.target.lname.value;
    let age = e.target.age.value;
    let gender= e.target.gender.value;
    
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}, Gender: ${gender}`);
}
```

**Note: the instructor should show the students how to compute and render data from the HTML form**

## Code Examples

[demo](./demo/index.html)

## How do I prep for today?

- Prepare for code review. If you're nervous, find someone's code before the lecture, and you can read it (and know what you'll talk about) before the lecture begins.
(put here how many demos and their names of them) the discussion of how to initialize a new project using the steps above.
- Prepare a walk-through of the directory structure for this lab
- Prepare a demo of testing.

## Lecture Main Topics

- DOM
  - How to add HTML elements.
  - How to change the style (CSS) of HTML elements.
  - How to add new HTML elements and attributes.

- Forms and Events
  - `<input>`, `<fieldset>`,and `<label>` tags
  - Events
  - `addEventListener()`
  - How to compute and render data from the HTML form.

## What might students struggle with today?

Today's lab is not hard, but they might have a hard time with the amount of new material and they may spend time in the style in lab time.

## Code Review Notes

Some basic code review questions:

Does it work? What part of this is confusing? What could make it more readable? What could have more explanation? What could be broken into smaller pieces? What would make this easier for others to understand? How could this be more performant? Are there 'red flags' (Experience: Things you don't do often. Why did they do that?) Are 'bad inputs' accounted for? Are there missing test cases? Is it documented?

I found the best code reviews consisted of the students describing their code to each other, explaining why they choose those methods and even helping teach the subjects of the labs.