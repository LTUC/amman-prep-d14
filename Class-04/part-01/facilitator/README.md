# Class04:

### what is CSS?

- CSS is a language that describes how HTML elements should be displayed.
- CSS is a style sheet.
- CSS files are the files that contain the CSS code.
- CSS files have the extension `.css`
- CSS files are used to style HTML elements.
- CSS saves a lot of work. It can control the layout of multiple web pages all at once

### what is CSS stand for?

- Cascading Style Sheets

### CSS rule contains:

- selector
- property
- value

### what are CSS selectors?

- CSS selectors are used for selecting HTML elements.
  > Example:

```css
CSS selectors are used for selecting HTML elements.
Example:
.class-name
#id-name
h1
p
a
ul
ol
li
table
tr
td
th
form
input
select
option
textarea
button
label
link
meta
style
script
img
br
hr
```

### example of CSS properties:

- `color`
- `background-color`
- `font-size`
- `font-family`
- `font-weight`
- `font-style`
- `text-decoration`
- `text-align`

### example of CSS values:

- `red`
- `blue`
- `green`
- `150px`
- `1.5em`

### what are external CSS and internal CSS and inline CSS?

- External CSS is a CSS file that is linked to the HTML file.
- Internal CSS is a CSS file embedded in the HTML file but in a `style` tag.
- Inline CSS is a CSS code that is embedded in the HTML file but in the element that we want to style.

> Example:

```css
// inline CSS

<p style="color: red;">Hello, world!</p>

// internal CSS

<style>
  p {
    color: red;
  }
</style>

// external CSS
// we link the external CSS file to the HTML file and wrote CSS code in the external CSS file.
<link rel="stylesheet" href="style.css">


```

### what are block and inline elements?

- A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

  - Example:
    - `<p>`
    - `<h1>`- `<h6>`
    - `<div>`
    - `<form>`
    - `<section>`
    - `<footer>`

- An inline element does not start on a new line and only takes up as much width as necessary. - Example: - `<a>` - `<img>` - `<span>`

### what is a box model?

- Box model is the method used to calculate the dimensions of an element.
- The box model is composed of the following properties:
  - `margin`
  - `border`
  - `padding`
  - `content`

### example of basic styling:

```css
// color
p {
  color: red;
}

// background color
div {
  background-color: blue;
}
// background img
body {
  background-image: url(img/background.jpg);
}

// font size && font family

h3 {
  font-size: 1.5em;
  font-family: "Arial";
}

// align text
article {
  text-align: center;
}

// floating element
img {
  float: right;
}
```

### what is position property?

- `position` is used to specify the type of positioning method used for an element.
- `static` is the default value for position.
- `absolute` is used to position an element absolutely.
- `fixed` is used to position an element absolutely, but the element is fixed to the viewport.
- `relative` is used to position an element relatively.

- Example:

```css
p {
  position: absolute;
}
```

### what is the absolute and relative position?

- Absolute position means the element is positioned relative to the document.
- Relative position means the element is positioned relative to its parent element.

- Example:

```css
p {
  position: absolute;
}

p {
  position: relative;
}
```

### what is top, right, bottom, left position?

- Top position means the element is positioned above the parent element.
- Right position means the element is positioned to the right of the parent element.
- Bottom position means the element is positioned below the parent element.
- Left position means the element is positioned to the left of the parent element.

- Example:

```css
p {
  position: absolute;
}

p {
  position: relative;
}
```

### what is padding property?

- The padding property is used to set the padding of an element.

### example of padding property:

```css
// padding property

div {
  padding: 10px;
}

// padding property with all values

div {
  padding: 10px 20px 30px 40px;
}

// padding property with different values

div {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}

// padding property with different values

div {
  padding: 10px 20px 30px 40px;
}

// padding property with different values

div {
  padding: 10px 20px 30px 40px;

```

### what is display flex property?

- - The display flex property is used to display an element as a flex container.
- Example:

```css
div {
  display: flex;
}
```

### what is a grid system?

- Grid system is a system of dividing the available space into equal-sized columns.

- A grid system is composed of the following properties:
  - `grid-template-columns`
  - `grid-template-rows`
  - `grid-template-areas`
  - `grid-auto-columns`
  - `grid-auto-rows`
  - `grid-auto-flow`
  - `grid-column-gap`
  - `grid-row-gap`
  - `grid-template`
  - `grid`
  - `grid-row`
  - `grid-column`
  - `grid-template-areas`
  - `grid-template-rows`
  - `grid-template-columns`
  - `grid-auto-flow`
  - `grid-auto-columns`
  - `grid-auto-rows`

### what is responsive design?

- Responsive design is a technique that allows us to design websites for different screen sizes.

### pseudo-classes?

- Pseudo-classes are used to select elements based on certain conditions.
- Example:
  - `:hover`
  - `:focus`
  - `:active`
  - `:before`
  - `:after`