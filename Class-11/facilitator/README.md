# Class11:

# Class 11 Guide

The "Lecture Main Topics" section for each day can be used as a possible outline for a lecture. They're flows that have worked before but feel free to deviate and do your own thing as fits your class.

## Overview of Today

Today's lecture will teach students the fundamentals they'll use for the rest of the week:

## Main topics 

### Introduction to the Internet

**Internet** is a group of computer systems related from all around the world. The Internet protocol suite is a framework defined through Internet standards. Methods are divided right into a layered set of protocols in this architecture. The Internet gives a huge variety of statistics and communique offerings, which include forums, databases, email, and hypertext. It is made of the neighborhood to global personal, public networks connected through plenty of digital, wireless, and networking technologies.

**Working of the internet:** The internet is a global computer network that connects various devices and sends a lot of information and media. It uses an Internet Protocol (IP) and Transport Control Protocol (TCP)-based packet routing network. TCP and IP work together to ensure that data transmission across the internet is consistent and dependable, regardless of the device or location. Data is delivered across the internet in the form of messages and packets. A message is a piece of data delivered over the internet, but before it is sent, it is broken down into smaller pieces known as packets.

**IP** is a set of rules that control how data is transmitted from one computer to another via the internet. The IP system receives further instructions on how the data should be transferred using a numerical address (IP Address). The TCP is used with IP to ensure that data is transferred securely and reliably. This ensures that no packets are lost, that packets are reassembled in the correct order, and that no delay degrades data quality.

[For More Info ...](https://www.geeksforgeeks.org/introduction-to-internet/)

### Web intro

**Web** consists of billions of clients and servers connected through wires and wireless networks. The web clients make requests to the web server. The web server receives the request, finds the resources, and returns the response to the client. When a server answers a request, it usually sends some type of content to the client. The client uses a web browser to send a request to the server. The server often sends a response to the browser with a set of instructions written in HTML(HyperText Markup Language). All browsers know how to display HTML pages to the client. 

[For More Info ...](https://www.studytonight.com/servlet/introduction-to-web.php)

### Web Protocols Intro

The Internet relies on a number of protocols to function properly. **A protocol** is simply a standard for enabling connection, communication, and data transfer between two places on a network. Here are some of the key protocols that are used for transferring data across the Internet.

The main two protocols that students should know are:

1. HTTP
HTTP stands for Hypertext Transfer Protocol. It is the standard protocol for transferring web pages (and their content) across the Internet.

2. HTTPS
HTTPS stands for Hypertext Transfer Protocol over Secure Socket Layer. Think of it as a secure version of HTTP. HTTPS is used primarily on web pages that ask you to provide personal or sensitive information (such as a password or your credit card details).

[For More Information](https://www.quackit.com/how-websites-work/web-protocols.cfm)

### Intro to web servers

**web server** includes several parts that control how web users access hosted files. At a minimum, this is an HTTP server. An HTTP server is a software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages). An HTTP server can be accessed through the domain names of the websites it stores, and it delivers the content of these hosted websites to the end user's device.

At the most basic level, whenever a browser needs a file that is hosted on a web server, the browser requests the file via HTTP. When the request reaches the correct (hardware) web server, the (software) HTTP server accepts the request, finds the requested document, and sends it back to the browser, also through HTTP. (If the server doesn't find the requested document, it returns a 404 response instead.)

[For More Information](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)

### WRRC (The Request/Response Cycle of the Web)

- In the beginning students should understand what is the client

**A client** is a piece of computer hardware or software that accesses a service made available by a server. Generally, clients are web browsers (like Chrome or Firefox), but clients can also be APIs making requests to another server or the command line (when making cURL requests).

- The students should have to understand what is HTTP requests

**A HTTP request** is a text string generated by the client and sent to the server containing the specifications of the resource the client is asking for. A resource is anything that can be accessed via the web. The HTTP request communicates which resource a client wants to interact with and how the client wants to interact with it, along with some metadata held in the header related to the request.

- Then students should understand the four main HTTP requests.

How the user wants to interact with the resource is communicated through the request method. Four of the most common request methods are GET, POST, PUT, and DELETE.

1.**GET requests** generally ask for the resource to be returned unchanged.

2.**POST requests** are used to submit the resource. This type of request would typically ask the server to store new information, for example by writing it to a database.

3.**PUT requests** are used to update a resource.

4.**DELETE requests** are used to remove a resource.

[For more information](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

- After that students should understand HTTP response.

**An HTTP response** is what is sent by a server to a client in response to an HTTP request. These responses contain a status code and if the request was successful, the requested resource. An example status code for a successful request would be “200” and an example status code for an unsuccessful request would be “404”. Other common status codes include “300” for redirects and “500” for server errors.

[For more information](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### Hello world application

[Using express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

1. Create NodeJS Application: Initialize the NodeJS application using the following command:

```
npm init
```

2. Module Installation: Install the express module which is a web framework for NodeJS using the following command.

```
npm install express
```

3. Implementation: Create an app.js file and write down the following code in it.

```
// Require would make available the
// express package to be used in
// our code
const express = require("express");
  
// Creates an express object
const app = express();
  
// It listens to HTTP get requests. 
// Here it listens to the root i.e '/'
app.get("/", (req, res) => {
  
  // Using send function we send
  // response to the client
  // Here we are sending HTML
  res.send("<h1> Hello World </h1>");
});
  
// It configures the system to listen
// to port 3000. Any number can be 
// given instead of 3000, the only
// condition is that no other server
// should be running at that port
app.listen(3000, () => {
  
  // Print in the console when the
  // servers start to listen on 3000
  console.log("Listening to port 3000");
});
```

4. Step to run the application: Run the app.js file using the following command.

```
node app.js
```




## How do I prep for today?

- Prepare for code review. If you're nervous, find someone's code before a lecture, and you can read it (and know what you'll talk about) before the lecture begins.
- (put here how many demos and their names of them) the discussion of how to initialize a new project using the steps above.
- Prepare a walk-through of the directory structure for this lab
- Prepare a demo of testing.

## Lecture Main Topics

- Introduction to the internet


- Introduction to web

- Introduction to WRRC and IP 

- Implement hello world server


## What might students struggle with today?

Understanding WRRC and IP 

### Code Review Notes

Some basic code review questions:

Does it work?
What part of this is confusing?
What could make it more readable?
What could have more explanation?
What could be broken into smaller pieces?
What would make this easier for others to understand?
How could this be more performant?
Are there 'red flags' (Experience: Things you don't do often. Why did they do that?)
Are 'bad inputs' accounted for?
Are there missing test cases?
Is it documented?

I found the best code reviews consisted of the students describing their code to each other, explaining why they choose those methods and even helping teach the subjects of the labs.