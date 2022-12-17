# Class03:


### What is Web and what is Internet?


- `Web` is a collection of webpages found on this network of computers. Your web browser uses the internet to access the web.
- `The internet` is a huge network of computers all connected together.

### What is a protocol and what is the URL?

- URL is the path to a resource on the web server.
  > examples:
- `https://www.google.com`
- `https://www.google.com/search?q=hello`

- Protocol is the set of rules that a web server follows to send a request to a web server.
  > examples:
- `http`
- `https`


### What is documentation?


- A documentation is a document that describes the purpose of a program.
- we read the documentation to know what the program does and how to use it.

---


### What is HTML and HTML files extention?

- HTML is a Markup language that is used to create web pages.
- HTML files are the files that contain the HTML code.
- HTML files have the extension `.html`

### What does HTML stand for?

- Hyper Text Markup Language

---

### HTML tags

- HTML tags are the pieces of code that tell the browser how to display the content.
- HTML tags are surrounded by `<` and `>`
- HTML tags are used to create web pages.
- type of HTML tags:
  -self-closing tags: `<br>`, `<hr>`, `<img>`
  -opening tags: `<a>`, `<p>`, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<tr>`, `<td>`, `<th>`, `<form>`, `<input>`, `<select>`, `<option>`, `<textarea>`, `<button>`, `<label>`, `<link>`, `<meta>`, `<style>`, `<script>`.

  note:opening tags need to be closed.

### What is meta tag and its uses?

- Meta tag defines metadata (information) about the HTML document such as the document author, page description, keywords and etc. 
- Meta data is used by the browsers and search engines and it will NOT be displayed on the rendered page.

### What is HTML tag and its uses?


- HTML tag is the root for your web page (base or start),
  it is where all of your other tags resides


...etc...

### What are semantic tags?

- A semantic element clearly describes its meaning to both the browser and the developer.
- like `<form>`, `<table>`, you can clearly know whats is going to be inside

### What are non-semantic tags?

- Non-semantic tags are tags that Tells nothing about its content.
- like the `<div>`, `<span>`, you can't really tell what's inside before you check it

### Example for HTML tags:

```html
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first web page.</p>
  </body>
</html>
```


### Some HTML examples:


> HTML code:

```html

// ordered list

<ol>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ol>
```

> result:

<ol>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ol>

---

```html

// unordered list

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

> result:

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

---

```html
// table
<table>
  <tr>
    <th>header 1</th>
    <th>header 2</th>
    <th>header 3</th>
  </tr>
  <tr>
    <td>data 1</td>
    <td>data 2</td>
    <td>data 3</td>
  </tr>
</table>
```

> result:

<table>
  <tr>
    <th>header 1</th>
    <th>header 2</th>
    <th>header 3</th>
  </tr>
  <tr>
    <td>data 1</td>
    <td>data 2</td>
    <td>data 3</td>
  </tr>
</table>

---

```html
// form
<form>
  <label>Name:</label>
  <input type="text" name="name" />
  <label>Email:</label>
  <input type="email" name="email" />
  <button type="submit">Submit</button>
</form>
```

> result:

<form>
  <label>Name:</label>
  <input type="text" name="name">
  <label>Email:</label>
  <input type="email" name="email">
  <button type="submit">Submit</button>
</form>

---

```html
// button: <button>Click me</button>
```

> result:

<button>Click me</button>

---

```html
// image
<img
  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
/>
```

> result:

<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />

---

### Html links and Hyperlinks

- Hyperlinks are links that tell the browser to go to another page.
- HTML links are used to create web pages.
- HTML links are surrounded by `<a>` and `</a>`

> Example for HTML links:

```html
<a href="https://www.google.com">Google</a>
```

### What is attribute in HTML?

- Attribute is a property of an HTML tag.
- Attribute is a piece of information that tells the browser how to display the content.
- All HTML elements can have attributes
- Attributes provide additional information about elements
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"

### What is id and what is the id for?

- id is a unique identifier for an element.
- id is used to identify an element in a document.

> Example:

```html
<h1 id="hello">Hello, world!</h1>
```


### What is class and its uses?


- class is a set of elements that have the same characteristics.
- class is used to identify a group of elements in a document.

> Example:

```html
<p class="para">orem ipsum dolor sit amet consectetur adipisicing elit</p>

<p class="para">
  Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi
  expedita sint?
</p>
```

## Resources:

* [The Internet in Simple Words](https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/x2d2f703b37b450a3:web-protocols/a/the-world-wide-web)
* [URL](https://www.techtarget.com/searchnetworking/definition/URL)
* [Network Protocol](https://www.comptia.org/content/guides/what-is-a-network-protocol)
* [What is HTML](https://www.w3schools.com/html/html_intro.asp)
* [HTML Cheatsheet](https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/cheatsheet)
* [HTML tutorial](https://www.w3schools.com/html)

### Keywords to Search for: 
* Internet
* URL and IP addresses
* HTTP
* HTML


### Understand the principles of creating an effective web page:
  It is mean how to use semantic tags, the structure of page itself, styling, content that gives meaning, names of the id/classes and the importance of meta tags in the head
- planning before writing code
- to make it simple and easy to use
- understand there are best practices to write HTML with(header main body )
- Also, use `section` and `article` elements instead of `div`, although `div` is wildely used, it is a non-semantic element.


