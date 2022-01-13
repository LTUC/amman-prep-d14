# Class 14:
The "Lecture Main Topics" section for each day can be used as a possible outline for a lecture. They're flows that have worked before, but feel free to deviate and do your own thing as fits your class.

## Overview of Today
We will take today about `PUT`, `DELETE` requests, params and queries.

## Main topics:

- **PUT:** The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload.
  - Responses:
    - If the target resource does not have a current representation and the PUT request successfully creates one, then the origin server must inform the user agent by sending a 201 (Created) response.
    - If the target resource does have a current representation and that representation is successfully modified in accordance with the state of the enclosed representation, then the origin server must send either a 200 (OK) or a 204 (No Content) response to indicate successful completion of the request.

- **DELETE:** The HTTP DELETE request method deletes the specified resource.
  - If a DELETE method is successfully applied, there are several response status codes possible::
    - A 202 (Accepted) status code if the action will likely succeed but has not yet been enacted.
    - A 204 (No Content) status code if the action has been enacted and no further information is to be supplied.
    - A 200 (OK) status code if the action has been enacted and the response message includes a representation describing the status.

- **Review UPDATE and DELETE in SQL language.**
- **Query Params:**
  - URL parameters (also known as “query strings”) are a way to structure additional information for a given URL. Parameters are added to the end of a URL after a ‘?’ symbol, and multiple parameters can be included when separated by the ‘&’ symbol. 

  - Query parameters are primarily used to specify and sort content on a web page, but they’re also often used for traffic tracking.
  - Example:
    > `https://www.google.com/search?q=URL+params&rlz=1C1YEIU_en-GBJO975JO975&sxsrf=AOaemvJpDsBfx8UM6ed4QBc85g5Vs7QQWw%3A1641739944120&ei=qPbaYePmBs2sa7Krv6AO&ved=0ahUKEwjj2rrx9aT1AhVN1hoKHbLVD-QQ4dUDCA4&uact=5&oq=URL+params&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEJECMgUIABCRAjIKCAAQgAQQhwIQFDIFCAAQkQIyBQgAEIAEMgUIABCABDIFCAAQgAQyBAgAEEMyBQgAEIAEMgQIABBDOgcIABBHELADOgcIABCwAxBDOgQIIxAnOgUIABCxAzoOCC4QgAQQsQMQxwEQ0QM6CwguELEDEMcBEKMCOgsIABCABBCxAxCDAUoECEEYAEoECEYYAFCDCVjPHmC6IGgDcAJ4AIABoQGIAdAKkgEEMC4xMJgBAKABAcgBCsABAQ&sclient=gws-wiz`

  - In the node.js you can get the query params from the request object inside query instance.

- **Params:** URL parameters are a way to structure additional information for a given URL. Parameters are added to the end of a URL after a ‘/’ symbol
- In the node.js you can get the params from the request object inside params instance.

## How do I prep for today?
- Prepare for code review. If you're nervous, find someone's code before lecture, and you can read it (and know what you'll talk about) before lecture begins.
- Prepare a walkthrough of the directory structure for this lab
- Prepare a demo of testing.

## What might students struggle with today?

The difference between query param and params.

## Code Review Notes
Some basic code review questions:

Does it work? What part of this is confusing? What could make it more readable? What could have more explanation? What could be broken into smaller pieces? What would make this easier for others to understand. How could this be more performant? Are there 'red flags' (Experience: Things you don't do often. Why did they do that?) Are 'bad inputs' accounted for? Are there missing test cases? Is it documented?

I found the best code reviews consisted of the students describing their code to each other, explaining why they choose those methods, and even helping teach the subjects of the labs.

## Resources:
* [HTTP response status codes](https://thecontentworks.uk/http-status-codes-cheat-sheet/)
* [Status Code to Use for Every CRUD App](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)
* [req.params, req.query and req.body](https://dev.to/gathoni/express-req-params-req-query-and-req-body-4lpc)

### Keywords to search for:
* HTTP Status Codes
* Update and Delete in CRUD