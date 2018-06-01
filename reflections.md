The following content is the compilation of the entire UDACITY SCHOLARSHIP PRE-SELECTION FACE learning notes that I decided to keep as a reminder... I hope you can make good use of this information... (By Julie Hutchinson 01/2018)

>* Trees represent data that makeup websites: A parent branch `<ul>` has many children `<li></li>`.

>* DOCTYPE: Describes the type of HTML. `<!DOCTYPE html>` helps the browser determine what type of HTML document it’s trying to parse and display.

>* Browsers look for this doctype declaration to determine which rendering mode to use to render the site. Generally, newer sites follow standard HTML specifications. The current standard HTML specification is called HTML5.

>* `<head>` Describes meta information about the site, such as the title, and provides links to scripts and stylesheets the site needs to render and behave correctly. This tag is responsible for:

>>* the document’s title (the text that shows up in browser tabs when a user visits the page): `<title>About Me</title>`.
>>* associated CSS files (for style): `<link rel="stylesheet" type="text/css" href="style.css">`.
>>* associated JavaScript files (multipurpose scripts to change rendering and behavior): `<script src="animations.js"></script>`.
>>* the charset being used (the text's encoding): `<meta charset="utf-8">`. It will allow your website to display any Unicode character.
>>* keywords, authors, and descriptions (often useful for SEO): `<meta name="description" content="This is what my website is all about!">`.
>>* ... and more!

>* `<body>` Describes the actual content of the site that users will see.

>* To open the web development tools on a Mac: __Command + Option + i__

>* apply `<style>` tag to apply css to a page.

>* apply `<script type="text/javascript">` tag to apply javascript to a page.
>* CSS measurement units can be: _absolute-_ (100px/in/cm/mm) fixed units of measurement. _relative-_ (100%/em/vw -viewport width-/vh -viewport height-) units that are a comparison to another linked property.

## HTML5 Semantic Elements

>- `<header>` - Defines a header for a document or a section
>- `<nav>` - Defines a container for navigation links
>- `<section>` - Defines a section in a document
>- `<article>` - Defines an independent self-contained article
>- `<aside>` - Defines content aside from the content (like a sidebar)
>- `<footer>` - Defines a footer for a document or a section
>- `<details>` - Defines additional details
>- `<summary>` - Defines a heading for the `<details>` element

1. The outermost sectioning element is always the `<body></body>` tag.

2. Sections in HTML5 can be nested.

3. Each section has its own heading hierarchy. Each of them (even the innermost nested section) can have an h1 tag.

4. While the document outline is primarily defined by the 5 sectioning elements, it also needs proper headings for each section.

5. It’s always the first heading element (let it be h1 or a lower rank heading tag) that defines the heading of the given section. The following heading tags inside the same section need to be relative to this. (If the first heading is an h3 inside a sectioning element, don’t put an h3 after that.)

6. The sections defined by the `<nav></nav>`, and the `<aside></aside>` tags don’t belong to the main outline of the HTML document, they are usually not rendered initially by assistive technologies.

7. Each section (body, section, article, aside, nav) can have their own `<header></header>` and `<footer></footer>` tags, that defines the header (such as logo, author’s name, dates, meta info, etc.) and the footer (copyright, notes, links, etc.) of that section.

---
  1. What CSS property is used to __italicize__ text? font-style
  2. What CSS property is used to __underline__ text? text-decoration
  3. What CSS property is used to __uppercase__ text? text-transform
  4. What CSS property is used to __bold__ text? font-weight

  5. Which HTML elements match the given CSS statement?

```html
  .right {
       text-align: right;
  }

<div class="right"></div>
<p class="highlight module right"></p>
```

6. The `font-family` property is used to _change the font_ to Helvetica, Arial, or the default sans-serif font installed on the operating system.

7. The `font-size` property is used to increase the _size of the font_ to be larger

8. The `text-transform` and `text-decoration` properties are used to _capitalize_ and _underline_ the text.

9. Color is used to change the color.
10. Every CSS statement is made up of a selector and a declaration block. The __selector__ tells the browser what HTML element we want to style and the __declaration block__ tells the browser what styles need to be applied to that HTML.

---
>- A stylesheet is a file containing the code that describes how elements on your webpage should be displayed.

>- To link your stylesheet to your html file, you'll need to create a `<link>` to your stylesheet in your HTML.

```html
<link href="path-to-stylesheet/stylesheet.css" rel="stylesheet">
```

>- The __href attribute__ specifies the path to the linked resource and the rel attribute names the relationship between the resource and your document.

```
<head>
  <title>My Webpage</title>
  <!-- ... -->
  <link href="path-to-stylesheet/stylesheet.css" rel="stylesheet">
  <!-- ... -->
</head>
```

## Sublime and Atom Keyboard shortcuts

<table>
    <tr>
        <td>Mac</td>
        <td>Windows/Linux</td>
    </tr>
    <tr>
        <td>
          <ul>
            <li>Undo: command + Z</li>
            <li>Redo: command + shift + Z</li>
            <li>Redo: command + Y</li>
            <li>Delete line: Ctrl + shift + K</li>
            <li>Delete line (from any location within that line): command + X</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Undo: Ctrl + Z</li>
            <li>Redo: Ctrl + shift + Z</li>
            <li>Redo: Ctrl + Y</li>
            <li>Delete line: Ctrl + shift + K</li>
            <li>Delete line (from any location within that line): Ctrl + X</li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>
          <ul>
            <li>Move Line Up: Ctrl + command + up</li>
            <li>Move Line Down: Ctrl + command + down</li>
            <li>Go to line #: Ctrl + G</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Move Line Up: Ctrl + up</li>
            <li>Move Line Down: Ctrl + down</li>
            <li>Go to line #: Ctrl + G</li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>Duplicate (w/w.o selection): command + shift + D</td>
        <td>Duplicate (w/w.o selection): Ctrl + shift + D</td>
    </tr>
    <tr>
        <td>
          <ul>
            <li>Select Word: command + D</li>
            <li>Select Line: command + L</li>
            <li>Select All: command + A</li>
            <li>Select Every Instance: command + control + G</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Select Word: Ctrl + D</li>
            <li>Select Line: Ctrl + L</li>
            <li>Select All: Ctrl + A</li>
            <li>Select Every Instance: Alt + F3</li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>
          <ul>
            <li>Move Cursor to previous word: option + left_arrow</li>
            <li>Move Cursor to next word: option + right_arrow</li>
            <li>Move Cursor to start of line: command + left_arrow</li>
            <li>Move Cursor to end of line: command + right_arrow</li>
            <li>Move Cursor to start of document: command + upward_arrow</li>
            <li>Move Cursor to end of document: command + downward_arrow</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Move Cursor to previous word: Ctrl + left_arrow</li>
            <li>Move Cursor to next word: Ctrl + right_arrow</li>
            <li>Move Cursor to start of line: Home</li>
            <li>Move Cursor to end of line: End</li>
            <li>Move Cursor to start of document: Ctrl + Home</li>
            <li>Move Cursor to end of document: Ctrl + End</li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>
          <ul>
            <li>Jump to open/close ()[]{}: command + M</li>
            <li>Jump to definition: command + R</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Jump to open/close ()[]{}: Ctrl + M</li>
            <li>Jump to Definition: Ctrl + R</li>
          </ul>
        </td>
    </tr>
    <tr>
      <td>
        <ul>
          <li>Cut: command + X</li>
          <li>Copy: command + C</li>
          <li>Paste: command + V</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Cut: Ctrl + X</li>
          <li>Copy: Ctrl + C</li>
          <li>Paste: Ctrl + V</li>
        </ul>
      </td>
    </tr>
    <tr>
        <td>
          <ul>
            <li>Indent: command + ]</li>
            <li>Unindent: command + [</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Indent: Ctrl + ]</li>
            <li>Unindent: Ctrl + [</li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>
          <ul>
            <li>Toggle comment: command + /</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Toggle comment: Ctrl + /</li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>
          <ul>
            <li>New Tab: command + N</li>
            <li>Switch Tab Left: command + shift + [</li>
            <li>Switch Tab Right: command + shift + ]</li>
            <li>Close Tab: command + W</li>
            <li>Reopen Tab: command + shift + T</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>New Tab: Ctrl + N</li>
            <li>Switch Tab Left: Ctrl + PgUp</li>
            <li>Switch Tab Right: Ctrl + PgDn</li>
            <li>Close Tab: Ctrl + W</li>
            <li>Reopen Tab: Ctrl + shift + T</li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>
          <ul>
            <li>Quick Open: command + P</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Quick Open: Ctrl + P</li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>
          <ul>
            <li>Find: command + F</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Find: Ctrl + F</li>
          </ul>
        </td>
    </tr>
</table>

## A guide to paths

### Local Paths

>- Computers have folders (also called "directories"). Operating systems like Windows, Mac and Linux organize all of your files into a tree of directories called a file system. There's a top-most directory, often called the root, that contains all of the other directories. Within the root, there are files and directories. Within those directories are more files and more directories. And within those directories are even more files and directories, and so on.
>- Every file has an address, which we call the "path." An absolute path is written in relation to the computer's root directory. 

### External Paths

>- The process of loading a website from a URL like https://www.udacity.com mimics opening an HTML file that you've written and saved to your computer. Every website starts with an HTML file. It just so happens that when you want to visit a website, the HTML file that you want to open lives on a different computer. The computer responsible for giving you a website's files is called a server.
>- Pointing your browser to https://www.udacity.com sends a request to Udacity's server for the HTML file (and others) that your computer needs to load the Udacity website. You can think of udacity.com as the root path of Udacity's server (computer) that anyone can access (the reality of the situation is actually much more complicated but the general idea is true). Unlike your personal computer (for now!), Udacity's servers run software that expose files to the web, which means that they make them available to anyone who wants them. Servers have an external path that anyone can access and is the reason why the web works.
>- Different websites are just different collections of files. Every website is really just a server (or many servers) with an external address, which we call a URL. Servers store files and send them to computers who request them (the requesting computers are called clients).
>- There are different protocols for serving files, the most common of which on the web are HTTP and HTTPS. When you open a file on your own computer, you're using the file protocol. You don't need to know much more about protocols for now, but if you're interested in learning (a lot!) more about HTTP, check out Networking for Web Developers.

### Relative Paths

>- The relative path is similar to the absolute path, but it describes how to find a path to a file from a directory that is not the root directory. Like using the phrase "next door" to tell someone how to find the White House from the Eisenhower Executive Office, a relative path takes advantage of the location of one file to describe where another file can be found.
>- Relative paths work the same for both local and external paths. Let's break down two examples of absolute paths to see how relative paths work.

# Responsive Design

## Setting the viewport

>- The viewport defines the area of the screen that the browser can render content to. Display's pixel density is calculated by dividing the width against the pixel ratio. The browser reports the width in the number of DIPS (Device Independent Pixels) as opposed to the number of hardware pixels.

>- DIP is a unit of measurement that relates pixels to real distance. The idea being that a device independent pixel will take up the same amount of space on a display regardless of the pixel density of the display. For example, if there are twice as many hardware pixels accross as there are pixels reported by the browser, the device's pixel must have a device pixel ratio of 2.

>- By adding the meta viewport tag to the head element of the html document, we tell the site to match the screen's width in device independent pixels. This allows the page to reflow content to match the screen sizes, whether rendered on a small mobile device or on the laptop.

>- the content property of the meta tag will first contain a width of the viewport that I want this page to be viewed 

```html

<meta name="viewport" content="width=device-width,initial-scale=1">

```

>- CSS allows content to overflow its container. By setting relative measurements instead of absolute ones, this won't be a problem:

```css
<tag> #id .class img, embed, video, object{
  max-width: 100%;
}
```

# Responsive Design

>- __Responsive design__ is a design strategy that is centered on designing your content so that it responds to the environment it's encountered in. The term was first coined by Ethan Marcotte who identifies three fundamental techniques for responsive design: fluid grids for flexible layouts, media queries to help you adapt content to specific screen sizes, and flexible images and media that respond to changes in screen sizes as well.
>- A reference pixel, sometimes referred to as a __CSS pixel__, is a unit of measurement that establishes an optical standard for the length of a pixel and is totally independent of hardware pixels.
>- The @viewport CSS at-rule lets you configure the viewport through which the document is viewed. It's primarily used for mobile devices, but is also used by desktop browsers that support features like "snap to edge" (such as Microsoft Edge).
>- Lengths specified as percentages are calculated relative to the initial viewport, which is the viewport before any user agent or authored styles have had an opportunity to adjust the viewport. This is typically based on the size of the window on desktop browsers that aren't in full screen mode.
>- __media queries__ are css rules that help us include css code (referred as __media features__) only when certain conditions are met. width is the most common media features, but there are others like orientation, which it is pretty useful when dealing with mobile devices because you can determine the landscape or portrait form of the device.
>- The following example is a stylesheet with a media query that applies only when the viewport is wider than 300px.

```html

<link rel="stylesheet" media="screen and (min-width: 300px)" href="pattern.css">

```

>- So in addition to the meta tag with the viewport, we add a link tag of a css stylesheet so that it only applies to viewports with those dimensions

## Media Queries Syntax

>- Below you'll find the different structures to utilize media queries:

```css
/* A rule that will be used on all devices */
h1 {
  font-size: 2em;
  color: white;
  background-color: black;
}

/* change the h1 to use less ink on a printer */
@media print {
  h1 {
    color: black;
    background-color: white;
  }
}

/* make the font bigger when shown on a screen at least 480px wide */
@media [only/not] <type> [screen, print, TV] and (min-width: 480px) {
  h1 {
    font-size: 3em;
    font-weight: normal;
  }
}
```

>- Media queries can include these features: width, height, device-width, device-height, orientation, aspect-ratio, device-aspect-ratio, color, color-index, monochrome, resolution, scan, grid. Most of these features can be prefixed with min- or max-.
>- The resolution feature is not supported by older devices, instead use device-pixel-ratio.
>- Many smartphones and tablets will attempt to render the page as if it were on a desktop unless you provide a viewport meta-tag.
>- The point at which the page changes layout is a __break point__.
>- In computer programming, two common boolean operators are "and" and "or". Media queries use the keyword "and", but to express an "or" it is used a comma to separate two different media queries. If any one of the expressions returns true, then the whole media query is true. Here is an example:

```css

@media only screen and (min-width: 768px), only screen and (min-width: 700px) and (orientation: landscape)

```

## Design patterns

>- __Flexbox__ facilitates the position of elements left or right without floats. You can also change the order of elements without changing the HTML.
>- By default, flex items orient themselves in a row, so elements contained in a flexbox container will fit in a single line, hence no matter what I set the width of the elements to be, they won't wrap; instead, the browser will size them to fit within the viewport:

```html

<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Flexbox explained</title>
    <style type="text/css">

      .title {
        font-size: 2.5em;
        text-align: center;
      }
    
      .container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }

      .box { width: 150px; }
    
    </style>
  </head>
  <body>
    <div class="title"> "Flex Item: "
      <code>order</code>
    </div>
    <div class="container">
      <div class="box dark_blue"></div>
      <div class="box light_blue"></div>
      <div class="box green"></div>
      <div class="box orange"></div>
      <div class="box red"></div>
    </div>
  </body>
</html>


```

>- Using floats or inline-block display for layout can be impractical. when the elements run out of space, they will break to the next line.
>- The `justify-content` property lets you control the position and  alignment of flex items on the main axis and how space should be distributed in a flex container. This property can only be applied to the parent container. The default value is flex-start, which places the items towards the start of each flex line.
>- By adding `flex-wrap: wrap` to the container element, the browser will know that it's okay for the elements inside to wrap to the next line.
>- The same wrapping behavior applies to the container when the direction is set to column.

```css

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 280px;
}

```

>- Another useful feature of flexbox is the ability to change the order of elements, using the CSS order attribute.
>- To set the order, I just need to add an order attribute to each element, like this:

```css

@media screen and (min-width: 700px) {
  .dark_blue {order: 4; }
  .light_blue {order: 5; }
  .green {order: 2; }
  .orange {order: 3; }
  .red {order: 1; }
}

```

# Common responsive patterns
>- The used ones are the following, but sometimes developers use the combination of two, to display the website:

>>- Mostly Fluid
>>- Layout Shifter
>>- Column Drop
>>- Off Canvas

>- 

## Flexbox CSS Layout

>- Before flexbox came along, using floats were meant to wrap text around images. Floats require clear fixes to prevent containing elements from collapsing. With inline-block display you're always fighting with the default display created by the browser.
>- Flexbox - Flexible Box Layout is a set of css properties that proved a flexible way to layout page content. The most important terms used in flexbox are:

>>- Flex Containers
>>- Flex Items

>- __Flex Containers__ sets the context for flexbox layout. It contains __flex items__, the actual elements you layout using flexbox. It can be any block-level or inline element (like a div, ul, header, span).
>- __Flex Items__ are every direct child of a flex container. There can be any number of flex items inside a __flex container__.
>- Flexbox follows two axis that determine the layout direction of Flex Items. Each axis has a start side and an end side:

>>- Main Axis (x-axis)
>>- Cross Axis (y-axis)

>- The __Main Axis__ is the primary axis along which flex items are laid out. It defines the direction of the flex items in the flex container.
>- The __Cross Axis__ runs perpendicular to the main axis. 
>- Margins with the value auto specially, have a significant effect on flex items. A margin set to auto will absorb any extra space around a flex item and push other flex items into different positions.
>- 
>- 
>- 
>- 
>- 


















## Conditionals

### Logical Operators

<table>
    <tr>
        <td>Operator</td>
        <td>Meaning</td>
        <td>Example</td>
        <td>How it works</td>
    </tr>
    <tr>
        <td> && </td>
        <td>Logical AND</td>
        <td>condition1 && condition2</td>
        <td>Returns true if both condition1 and condition2 evaluate to true</td>
    </tr>
    <tr>
        <td> || </td>
        <td>Logical OR</td>
        <td>condition1 || condition2</td>
        <td>Returns true if either condition1 or condition2 (or even both) evaluates to true</td>
    </tr>
    <tr>
        <td> ! </td>
        <td>Logical NOT</td>
        <td>!condition1</td>
        <td>Returns the opposite of condition1. If condition1 is true, then !condition1 is false</td>
    </tr>
</table>

### Truthy and Falsy

>- A value is falsy if it converts to false when evaluated in a boolean context. For example, an empty String "" is falsy because, "" evaluates to false.

```
if ("") {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}

>>> the value is falsy
```

>- The list of all of __falsy__ values is:
>>- false (the Boolean expression) === false
>>- null (the type) === false
>>- 0 (the number) === false
>>- 0.0 (the number) === false
>>- "" (the empty string) === false
>>- NaN (the odd value) === false

>- A value is truthy if it converts to true when evaluated in a boolean context. For example, the number 1 is truthy because, 1 evaluates to true.

```
if (1) {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}

>>> the value is truthy
```

>- The list of some of __truthy__ values is:
>>- true (the Boolean expression) === true
>>- 42 (the number) === true
>>- "0" (the string) === true
>>- "null" (the null string) === true
>>- "undefined" (the string) === true
>>- [] (the expression) === true
>>- {} (the expression) === true

### Ternary Operator

>- The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements.

```javascript
conditional ? (if condition is true) : (if condition is false)
```

> To use the ternary operator,

>>- first provide a conditional statement on the left-side of the ?.
>>- Then, between the ? and : write the code that would run if the condition is true
>>- and on the right-hand side of the : write the code that would run if the condition is false.

For example:

```
let isGoing = true;
let color = isGoing ? "green" : "red";
console.log(color);

>>> green
```

### Switch statement
>- A switch statement is an another way to chain multiple else if statements that are based on the same value without using conditional statements. Instead, you just switch which piece of code is executed based on a value.

```
switch (option) {
  case 1:
    console.log("You selected option 1.");
  case 2:
    console.log("You selected option 2.");
  case 3:
    console.log("You selected option 3.");
  case 4:
    console.log("You selected option 4.");
  case 5:
    console.log("You selected option 5.");
  case 6:
    console.log("You selected option 6.");
}
```

>- Here, each else if statement (option === [value]) has been replaced with a case clause (case: [value]) and those clauses have been wrapped inside the switch statement.

>- When the switch statement first evaluates, it looks for the first case clause whose expression evaluates to the same value as the result of the expression passed to the switch statement. Then, it transfers control to that case clause, executing the associated statements. So, if you set option equal to 3...

```
let option = 3;

switch (option) {
  ...
}

>>> You selected option 3.
>>> You selected option 4.
>>> You selected option 5.
>>> You selected option 6.
```

>- ...then the switch statement prints out options 3, 4, 5, and 6.

### Break statement
>- The break statement can be used to terminate a switch statement and transfer control to the code following the terminated statement. By adding a break to each case clause, you fix the issue of the switch statement falling-through to other case clauses.

```
let option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
  }
```
## Parts of a While Loop

>- When to start: The code that sets up the loop — defining the starting value of a variable for instance.
>- When to stop: The logical condition to test whether the loop should continue.
>- How to get to the next item: The incrementing or decrementing step — for example, x = x * 3 or x = x - 1

```
let start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}

>>> 0 2 4 6 8
```

## Functions

>- Functions package up code so you can easily use (and reuse) a block of code. Parameters are variables that are used to store the data that's passed into a function for the function to use. Arguments are the actual data that's passed into a function when it is invoked:

```
// x and y are parameters in this function declaration

function add(x, y) {
  // function body
  let sum = x + y;
  return sum; // return statement
}

// 1 and 2 are passed into the function as arguments
let sum = add(1, 2);
```

>- The function body is enclosed inside curly brackets:

```
function add(x, y) {
  // function body!
}
```

>- Return statements explicitly make your function return a value:

```
>>> sum;
```

>- You invoke or call a function to have it do something:

```
add(1, 2);

>>> 3
```

### variables

>- If an identifier is declared in global scope, it's available everywhere.
>- If an identifier is declared in function scope, it's available in the function it was declared in (even in functions declared inside the function).
>- When trying to access an identifier, the JavaScript Engine will first look in the current function. If it doesn't find anything, it will continue to the next outer function to see if it can find the identifier there. It will keep doing this until it reaches the global scope.
>- Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names, and messy code.

### Shadowing

```
let x = 1;

function addTwo() {
  x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);

>>> 4

```

versus

```
let x = 1;

function addTwo() {
  let x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);

>>> 2

```

### Hoisting

>- Before any JavaScript gets executed, all function declarations are "hoisted" to the top of their current scope.

```
findAverage(5,9);

function findAverage(x, y) {
  let answer = (x + y)/2;
  return answer;
}
```
>- What value will be printed to the console?

```
sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  let greeting;
}

>>> undefined Julia

```

### Function Declarations

>- In JavaScript, when a function is stored inside a variable it's called a __function expression__.

```
let catSays = function(max) {
  let catMessage = "";
  for (let i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
```

>- The following is an __anonymous function__, a function with no name that is stored in a variable called catSays.

```
let catSays = function(max) {
  // code here
};

catSays;

>>> {
  function(max) {
    let catMessage = ""
    for (let i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  }
}

```

### Function expressions and hoisting

>- All function declarations are hoisted and loaded before the script is actually run. Function expressions are not hoisted, since they involve variable assignment, and only variable declarations are hoisted. The function expression will not be loaded until the interpreter reaches it in the script.

```
function cat() {
  function purr() {
    return "purrrr!";
  }
  console.log(meow());

  let meow = function(max) {
    for(let i = 0 ; i < max ; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  }

}

>>> Uncaught TypeError: meow is not a function(...)
```

versus

```
console.log(cat());

function cat() {
  function purr() {
    return "purrrr!";
  }

  let meow = function(max) {
    for(let i = 0 ; i < max ; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  }

}

>>> purrrr!
```

## Functions as parameters

>- Being able to store a function in a variable makes it really simple to pass the function into another function. A function that is passed into another function is called a callback.

>- Let's say you had a helloCat() function, and you wanted it to return "Hello" followed by a string of "meows" like you had with catSays. Well, rather than redoing all of your hard work, you can make helloCat() accept a callback function, and pass in catSays.

```
// function expression catSays
let catSays = function(max) {
  let catMessage = "";
  for (let i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);
```

## Functions as parameters

>- A function that is passed into another function is called a __callback__.
>- Let's say you had a helloCat() function, and you wanted it to return "Hello" followed by a string of "meows" like you had with catSays. Well, rather than redoing all of your hard work, you can make helloCat() accept a callback function, and pass in catSays.

```
// function expression catSays
let catSays = function(max) {
  let catMessage = "";
  for (let i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);
```

### Inline function expressions
>- A __function expression__ is when a function is assigned to a variable. In JavaScript, this can also happen when you pass a function inline as an argument to another function. Take the favoriteMovie example for instance:

```
// Function expression that assigns the function displayFavorite
// to the variable favoriteMovie
let favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies func, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");


>>> My favorite movie is Finding Nemo
```

But you could have bypassed the first assignment of the function, by passing the function to the movies() function inline.

```
// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");


>>> My favorite movie is Finding Nemo
```

### Why use anonymous inline function expressions?

>- Using an anonymous inline function expression might seem like a very not-useful thing at first. Why define a function that can only be used once and you can't even call it by name?

>- Anonymous inline function expressions are often used with function callbacks that are probably not going to be reused elsewhere. When you know the function is not going to be reused, it could save you many lines of code to just define it inline.

# Arrays

>- Array is a data structure that has the ability to store data more efficiently
>- The two most common methods for modifying an array are push() and pop().

## Push

>- You can use the push() method to add elements to the end of an array.

```
let donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
```

>- you can push donuts onto the end of the array using the push() method.

```
donuts.push("powdered"); // pushes "powdered" onto the end of the `donuts` array

>>> 7

console.log(donuts);

>>> ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];
```

>- Notice, with the push() method you need to pass the value of the element you want to add to the end of the array. Also, the push() method returns the length of the array after an element has been added.

## Pop

>- you can use the pop() method to remove elements from the end of an array.
>- Also, pop() returns the element that has been removed in case you need to use it.

```
let donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];

donuts.pop(); // pops "powdered" off the end of the `donuts` array
donuts.pop(); // pops "sprinkled" off the end of the `donuts` array
donuts.pop(); // pops "cinnamon sugar" off the end of the `donuts` array

>>> "cinnamon sugar"

console.log(donuts);

>>> ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];

```

## Splice

>- splice() method allows you to add and remove elements from anywhere within an array.
>- splice() lets you specify the index location to add new elements, as well as the number of elements you'd like to delete (if any).

```
let donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];

donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1

>>> ["chocolate frosted"]

console.log(donuts);

>>> ["glazed", "chocolate cruller", "creme de leche", "Boston creme", "glazed cruller"]
```

>- The _first argument_ represents the __starting index__ from where you want to change the array.
>- the _second argument_ represents the __numbers of elements to remove__.
>- the _remaining arguments_ represent the __elements to add__.

>- `shift()` will remove the first element from an array.
>- `splice()` can be used if you specify the index of the first element, and indicate that you want to delete 1 element.
>- You can combine the elements in an array to form a string using the `join()` method.

## Array Loops

>- Once the data is in the array, you want to be able to efficiently access and manipulate each element in the array without writing repetitive code for each element.

```
let donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts[0] += " hole";
donuts[1] += " hole";
donuts[2] += " hole";

console.log(donuts);

>>> ["jelly donut hole", "chocolate donut hole", "glazed donut hole"]
```

>- To loop through an array, you can use a variable to represent the index in the array, and then loop over that index to perform manipulations.

```
let donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (let i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

console.log(donuts);

>>> ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]
```

>- In this example, the variable i is being used to represent the index of the array. As i is incremented, you are stepping over each element in the array starting from 0 until donuts.length - 1 (donuts.length is out of bounds).

### The forEach loop

>- The forEach() method gives you an alternative way to iterate over an array, and manipulate each element in the array with an inline function expression.
>- Using forEach() will not be useful if you want to permanently modify the original array.

```
let donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

>>> JELLY DONUT HOLE
    CHOCOLATE DONUT HOLE
    GLAZED DONUT HOLE
```

>- the forEach() method iterates over the array without the need of an explicitly defined index.
>- In the example above, donut corresponds to the element in the array itself. This is different from a for or while loop where an index is used to access each element in the array:

```
for (let i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donuts[i]);
}
```

#### Parameters

>- The function that you pass to the forEach() method can take up to three parameters that can be called element, index, and array.
>- The forEach() method will call this function once for each element in the array (hence the name forEach.)
>- Each time, it will call the function with different arguments.

>>- The __index parameter__ is the positions within the array (starting with zero).
>>- The __element parameter__ is the values found within the array when index is called.
>>- The __array parameter__ is the entire structure (data structure). It will get a reference to the whole array, if you wanted to modify the elements.

```
words = ["cat", "in", "hat"];
words.forEach(function(word, num, arr) {
  console.log("Word " + num + " in " + arr.toString() + " is " + word);
});

>>> Word 0 in cat,in,hat is cat
    Word 1 in cat,in,hat is in
    Word 2 in cat,in,hat is hat
```    

### map Loop

>- creating a new array from an existing array is simple with the map() method.
>- With the map() method, you can take an array, perform some operation on each element of the array, and return a new array.

```
let donuts = ["jelly donut", "chocolate donut", "glazed donut"];

let improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

console.log(donuts);

>>> ["jelly donut", "chocolate donut", "glazed donut"]

console.log(improvedDonuts);
>>> ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]
```

>- The map() method accepts one argument, a function that will be used to manipulate each element in the array.
>- In the above example, we used a function expression to pass that function into map(). This function is taking in one argument, donut which corresponds to each element in the donuts array.

## 2D Arrays
>- A box of donuts can resemble a two dimensional grid with rows and columns. You could use an array of arrays that has the name of each donut associated with its position in the box.

```
let donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];
```

>- If you wanted to loop over the donut box and display each donut (along with its position in the box!) you would start with writing a for loop to loop over each row of the box of donuts:

```
let donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

// here, donutBox.length refers to the number of rows of donuts
for (let row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}

>>> ["glazed", "chocolate glazed", "cinnamon"]
["powdered", "sprinkled", "glazed cruller"]
["chocolate cruller", "Boston creme", "creme de leche"]
```

>- Since each row is an array of donuts, you next need to set up an inner-loop to loop over each cell in the arrays.

```
for (let row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (let column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}

>>>
"glazed"
"chocolate glazed"
"cinnamon"
"powdered"
"sprinkled"
"glazed cruller"
"chocolate cruller"
"Boston creme"
"creme de leche"
```

# Objects

>- objects are a data structure in javascript that lets you store data about a particular thing, and helps you keep track of data by using a "key".
>- One way to create an object is to create a variable and assign it to a pair
   of curly brackets

```
let umbrella = {

};
```

>- objects have properties and things they can do, to add this information, you can define key value pairs for each piece of data, like defining a key property called color and its value is pink:

```                                         
let umbrella = {                           /\
  color: "gray",                          /  \
  is_open: false                         /____\  
}                                          ||
```

>- Opening the umbrella is a task you want the umbrella to be able to do, it's not a property which is an attribute that describes the umbrella.
>- Something the object can do is a method. A __method__ is just a function that is associated with an object.

```
let umbrella = {
  color: "gray",
  is_open: false,
  open: function() {
    if(umbrella.isOpen === true) {
      return "The umbrella is already open!";
    } else {
      return "Julie opens the umbrella";
    }
  }
}
```

>- typeof is an operator that returns the name of the data type that follows it in the form of a string:

>>- typeof "hello" // returns "string"
>>- typeof true // returns "boolean"
>>- typeof [1, 2, 3] // returns "object" (Arrays are a type of object)
>>- typeof function hello() { } // returns "function"

## Object-literal notation

```
let sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};
```

>- The syntax you see above is called object-literal notation.
>- The "key" (representing a property or method name) and its "value" are separated from each other by a colon
>- The key: value pairs are separated from each other by commas
>- The entire object is wrapped inside curly braces { }.
>- The key in a key:value pair allows you to look up a piece of information about an object. Here's are a couple examples of how you can retrieve information about my Julia's sister's parents using the object you created.

```
// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]
```

>- `sister["parents"]` is called __bracket notation__ (because of the brackets!)
>- `sister.parents` is called __dot notation__ (because of the dot!).

## What about methods?

```
let sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture();
>>> "Sarah paints!"
```

>- you can access the name of my sister by accessing the name property:

```
sister.name
>>> "Sarah"
```

## Object literals, methods, and properties
>- You can define objects using object-literal notation:

```
let myObj = {
  color: "orange",
  shape: "sphere",
  type: "food",
  eat: function() { return "yummy" }
};

myObj.eat(); // method
myObj.color; // property
```

## Naming conventions

>- Feel free to use upper and lowercase numbers and letters, but don't start your property name with a number.
>- You don't need to wrap the string in quotes! If it's a multi-word property, use camel case. Don't use hyphens in your property names

```
let richard = {
  "1stSon": true;
  "loves-snow": true;
};

richard.1stSon // error
richard.loves-snow // error
```

# Why does jQuery exists

>- By using Vanilla JavaScript to insert an element into the DOM, extra steps need to be taken:

  1. Creating an element:
`let div = document.createNode('div');
`

  2. Setting attributes and content of the new node:
`
div.innerHTML = "Hello Julie";
`

  3. Select the soon-to-be parent of the new node:
`
let parent = document.querySelector('#parent');
`

  4. and then finally, inserting the new node as a child of the parent node:
`
parent.appendChild(div);
`

>- The DOM consists of every element on the page, laid out in a hierarchical way that reflects the way the HTML document is ordered. Just as with an HTML document, elements in the DOM can have parents, children, and siblings.
>- An HTML document is structured according to the Document Object Model, or DOM. It's by interacting with the DOM that jQuery is able to access and modify HTML.
>- But with jQuery, all of those steps are simplified to a one line of code:
`
$('#parent').append("<div>Hello Julie</div>");
`

## What is the $ sign?

>- With jQuery, the dollar sign is just a pointer to the JavaScript object that represents jQuery:

```
//Head over to the javascript developer tools in your browser (chrome in this):
//go to udacity.com, and type in jQuery in the console:

>>> function (e, t) { return new x.fn.init(e, t, r)}
```

>- the previous code means that jQuery is an object (or a function) of JavaScript.
>- If I type in the dollar sign ('$'):

```
> $
>>> function (e, t) { return new x.fn.init(e, t, r)}
```

>- With jQuery, the dollar sign is just a pointer to the same JavaScript object
>- jQuery returns an array-like object called __jQuery collection__, but this object has additional special methods.

```
$(string);        $(function);          $(DOM element);           $.ajax()

$("#foo");
>>> []
```

>- a string, function, DOM element can be passed (this passed arguments are called jQuery __selectors__) and a jQuery collection of DOM elements will be returned; you can call methods directly on the jQuery object like `$.ajax()` which subtracts away all the annoying nuances of ajax into a simple method called on the jQuery object
>- you can use jQuery to select a collection of DOM elements based on tag name, class, or ID:

```
$('tag');
$('.class');
$('#id');
```

>- Unlike tag and classes selectors, id's selectors are specific to a single element in the DOM, so we should expect a jQuery collection with only one DOM element returned.

### Important jQuery Selectors

<table>
    <tr>
        <td>Selector</td>
        <td>Sample</td>
        <td>Description</td>
    </tr>
    <tr>
        <td> (wild card \* ) </td>
        <td> $(' * ') </td>
        <td>all elements</td>
    </tr>
    <tr>
        <td>#id</td>
        <td>$('#div')</td>
        <td>element with id="div"</td>
    </tr>
    <tr>
        <td>.class</td>
        <td>$('.div')</td>
        <td>all elements with class="div"</td>
    </tr>
    <tr>
        <td>element</td>
        <td>$("p")</td>
        <td>all < 'p' > elements</td>
    </tr>
    <tr>
        <td>el1, el2, el3</td>
        <td>$("h1,h2,h3")</td>
        <td>all ```< "h1" >, < "h2" >, < "h3" >``` elements</td>
    </tr>
    <tr>
        <td>:first</td>
        <td>$("h1:first")</td>
        <td>first < "h1" > element</td>
    </tr>
    <tr>
        <td>:first-child</td>
        <td>$("b:first-child")</td>
        <td>all < 'b' > that are the 1st child of their parent</td>
    </tr>
    <tr>
        <td>:last</td>
        <td>$("h1:last")</td>
        <td>last < "h1" > element</td>
    </tr>
    <tr>
        <td>:last-child</td>
        <td>$("b:last-child")</td>
        <td>all < 'b' > elements that are the last child of their parent</td>
    </tr>
    <tr>
        <td>:nth-child(n)</td>
        <td>$("div:nth-child(2)")</td>
        <td>all < "div" > elements that are 2nd child of their parent</td>
    </tr>
    <tr>
        <td>parent > child</td>
        <td>$("div > p")</td>
        <td>all < "p" > elements that are a direct child of a < "div" > element</td>
    </tr>
    <tr>
        <td>parent descendant</td>
        <td>$("span p")</td>
        <td>all < "p" > elements that are descendants of a < "span" > element</td>
    </tr>
    <tr>
        <td>:eq(index)</td>
        <td>$("ul li:eq(2)")</td>
        <td>the 3rd element in a list (index starts at 0)</td>
    </tr>
    <tr>
        <td>:contains(text)</td>
        <td>$(":contains('solo')")</td>
        <td>all elements which contain the text 'solo'</td>
    </tr>
    <tr>
        <td>[attribute]</td>
        <td>$("[src]")</td>
        <td>all elements with a src attribute</td>
    </tr>
    <tr>
        <td>:input</td>
        <td>$(":input")</td>
        <td>all input elements</td>
    </tr>
    <tr>
        <td>:text</td>
        <td>$(":text")</td>
        <td>all input elements with 'type="text"'</td>
    </tr>
</table>

## Hosting jQuery

>- You can add jQuery to any website using the `<script></script>` tag:
>- Local:

```
<script src="js/jquery.min.js"></script>
```

>- You can host this file on your own server with a path like the previous one.
>- jQuery official:

```
<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>

```

>- but it is recommended to use a version of jQuery hosted on a Content Delivery Network or CDN
>- Content Delivery Network (like Google):

```
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

```

>- CDN's are usually much faster than your own server.
>- it allows you to take advantage of the browser's caching feature.
>- the minify version of jQuery is smaller, so it is much faster on page loads (production)

## Family Tree Revisited

>- Follow the next example to explain a few more selectors:

```
[John Audrey]
      |
[Jerry Judy]
      |
[Mark Suzanne]
    /         \
 [Max]       [Cameron]
   |           /     \
[Kagure]  [Taylor] [Grant]
```

>- If I select a node with an id "#Cameron", I can select my immediate parent by calling __.parent()__.
>- __.parent()__ goes up the DOM one level, so now I am selecting the element with the id "#MarkSuzanne":

```
let idSelector = $("#Cameron").parent();

>>> ['#MarkSuzanne'];
```

>- I can use __.parents()__ to select the parents, grandparents and great grandparents (many elements all the way up to the top of the DOM tree):

```
let idSelector = $("#Cameron").parents();

>>> ['#MarkSuzanne', '#JerryJudy', '#JohnAudrey];
```

>- I could also filter a specific parent by passing another selector to the parents method:

```
let idSelector = $("#Cameron").parents('#JerryJudy');

>>> ['#JerryJudy'];
```

>- I could go down the DOM too by using __.children()__ and select my children
>- __.children()__ creates a jQuery collection of all of my immediate children, only one level down to the DOM:

```
let idSelector = $("#Cameron").children();

>>> ['#Taylor', '#Grant'];
```

>- If I wanted to select my children's children, or any other children of '#Taylor' or '#Grant', I would use __.find()__.
>- __.find()__ goes down the DOM more than one level.

```
let idSelector = $("#Cameron").find();

>>> ['#Taylor', '#Grant', ..., '#...'];
```

>- Finally, there is a __.siblings()__. I am also able to pass a selector in the siblings method if I needed to get more specific.
>- __.siblings()__ returns a jQuery collection of all of my siblings that have the same parent:

```
let idSelector = $("#Cameron").siblings();

>>> ['#Max'];
```

# jQuery documentation to perform DOM Manipulation

>- Let's guide our way through the jQuery API Documentation by looking at the following images.
>- On the left, you can see the main types of jQuery methods.
---

![jQueryAPIMainPage.jpg](https://github.com/juliehutchinson001/udacity_google_scholarship/blob/master/fend-animal-trading-cards-master/jQueryMethods.jpg?raw=true)

---
>- To modify the class attribute of an element, I'll select the methods pertaining Attributes, and the addClass() method seems appropriate.
>- This is the information of a method called __addClass()__. This method adds a specified class to a DOM element.
>- The black box shows the _main function signature_, which tells you what to pass in as an argument to this method to get it to work properly.
>- Inside the black box, you can find a description of the method and different ways of using it.
>- And then further below, you can find examples that utilize this method.
---

![jQueryAPI.jpg](https://github.com/juliehutchinson001/udacity_google_scholarship/blob/master/fend-animal-trading-cards-master/jQueryAPI.jpg?raw=true)

---
>- An example of the __.addClass()__ method:

```
$("#item").addClass('blue');
```

>- By performing the previous example, you have added a class named blue to the element with the id="item".
>- Another example of a method's _main function signature_ shows the following notation:

```
.parents([selector])
```

>- Square brackets in the parameter mean that the parameter is optional for the method to work properly.

>- __side-effect:__ be careful though, because modifying css with Javascript, therefore jQuery as well, means adding inline css to the html document, or in other words, jQuery modifies the element's style property. So this isn't the best way to modify/create a website, but sometimes it is needed.

## Pulling html and text

>- But not everything is bad news! with jQuery you are able to pull data in between the html tags.
>- So, if you desire to change the content of an html tag that contains text, you can do so with the methods `.html()` or `.text()`.
>- In the following example, I am selecting the `id="flyup-homepage"` from the udacity website, if you run the `.html()` on the selected element, you'll notice on the console that the html inside of the id gets rendered including the html tags, classes, and attributes:

```
$('#flyup-homepage').html()

>>> <div style="display:inline-block;">
      <div class="h4 text-inverse"  style="margin: 2px 5px;">Nanodegrees</div>
      <span>Credentials by industry to advance your career. <a> Learn more!</a></span>
    </div>
```

>- But if you run `.text()` on a selection, you'll see that jQuery has stripped out all of the html tags, and only return the text contained within 

```
$('#flyup-homepage').text()

>>> Nanodegrees
    Credentials by industry to advance your career. Learn more!
```

## Adding DOM Elements

>- Adding elements to the DOM using vanilla Javascript can be confusing. First, you have to create a DOM node, add data to it, find a parent for it, and then finally add that node as a child to that parent. Each step happens independently. For example:

```
let div = document.createNode('div');

div.innerHTML = "Hello You!";

let parent = document.querySelector('#parent');

parent appendChild(div);

```

With jQuery, you can create new DOM nodes and simultaneously add them to the document with one simple method. The methods `.append()`, `.prepend()`, `.insertBefore()` and `.insertAfter()` give you 4 unique posibilities to insert a DOM element in different places.

## Appending Child Elements

>- `.append()`, `.prepend()`, these add children to an element.

```
let firstArticleItem;

firstArticleItem = $('.article-item').first();

firstArticleItem.append('<img src="http://placepuppy.it">');

firstArticleItem.prepend('<img src="http://placepuppy.it">');
```

>- `.append()` adds a new element as the last child of the selected item, while `.prepend()` adds the new element as the first child of the selected item.

>- To insert a sibling of an element, `.insertBefore()` or `.insertAfter()`, where the first one adds an element before the selected oneand the second one adds it after.

## $(function)

>- A function passed into the jQuery object runs on document.ready, which occurs after the DOM has been loaded.

>- External JavaScript files in the `<head>` of a document are generally downloaded earlier than JavaScript files included in the `<body>`. JavaScript files are also executed immediately at their location in the document, which means they can't access any DOM elements that come after their `<script>` tag in the DOM. This leads to some interesting situations.

>- For example, you're building a website and you've got a script you want to run against some DOM elements in the page. If you include your script in the `<head>` normally, it will run as soon as it's downloaded, which will occur before the DOM has built the elements you want your script to run against. So your script wouldn't be able to do anything.

>- You could include your script at the bottom of the <body>, but that would mean that the download could potentially start later in the load process, slowing down the initial page render.

>- To solve this problem, we pass your function into the jQuery object, like so:

```
function someFunction() {
    // Do interesting things
}
$(someFunction)
```

or

```
$(function() {
    $('img').attr('src', 'http://placekitten.it/350/150');
});
```

>- Now, you can include your script in the `<head>` and it won't run until the DOM has been built and the elements that you want to manipulate are on the page.

>- The anonymous function changes the src of the one img on the page to the URL provided. (Remember, $('img') grabs all of the images on the page, so this is a very bad selector. It works in this case because there's only one <img>, but normally you should use a much more specific selector.)

# Event Listening with jQuery

>- Events give you the power to setup automatic responses based on what your users do when they're on your page

>- Google Chrome devTools has a built-in function, the __monitorEvents__ function, that allow you to take a peek of the events that are running on the background as they are taking place.

```
monitorEvents(elementToWatch);

>>> keydown > KeyboardEvent {}
    keyup > KeyboardEvent {}
    keypress > KeyboardEvent {}
    textInput > TextEvent {}
```

>- You pass to the function the element on the page that you want it to watch for events and log them out on the console. As you can see, using the monitorEvents function, you can observe what the browser is doing when you interact with the page elements in different ways.

>- To stop getting this data just write this to console:

```
unmonitorEvents(elementToWatch);
```

## Anatomy of a jQuery Event Listener

>- There are three items you need in order to listen for events and react to them.

>>- the target element to listen to
>>- the event we want to react to
>>- the actions to take in response

>- In the following example, you can see how the steps are applied, the `$('#my-input')` is the target element, the `.on()` method is the primary way jQuery uses to set up event listeners. The 1st argument to the on method is the event I want to listen for. Events such as keypress, click, change, mouseover and so on. An finally, a comma separates the event from a callback function with the actions I want to happen in response.

```
$('#my-input').on('keypress', () => {
  $('body').css('background-color', '#2727FF');
});
```

## The Event Object

>- Reacting to events often requires knowledge about the event itself, so this is a quick breakdown of the event object which gets passed to an event listener’s callback.

>- Remember that the target element calls the callback function when the event occurs. When this function is called, jQuery passes an event object to it containing information about the event. This object holds a ton of useful information that can be used in the body of the function. This object, which is usually referenced in JavaScript as e, evt, or event, has several properties that you can use to determine the flow of your code. Try logging the object to see what's available:

```
$('article').on('click', (evt) => {
    console.log(evt);
});

>>> MouseEvent {isTrusted: true, screenX: 898, screenY: 146, clientX: 43, clientY: 26, …}
```

>- You should notice a target property. The target property holds the page element that is the target of the event. This can be extremely useful if an event listener has been set up for a number of elements:

```
$('article').on('click', (evt) => {
    $(evt.target).css('background', 'red');
});
```

>- In the example above, an event listener is set up for every article element on the page. When an article is clicked an object containing information about the event is passed to the callback. The `evt.target` property can be used to access just the clicked on element! jQuery is used to select just that one element from the DOM and update its background to red.

>- The event object also comes in handy when you want to prevent the default action that the browser would perform. For example, setting up a click event listener on an anchor link:

```
$('#myAnchor').on('click', (evt) => {
    console.log('You clicked a link!');
});
```

>- Clicking on the `#myAnchor` link will log the message to the console, but it will also navigate to that element's href attribute - potentially redirecting to a new page. The event object can be used to prevent the default action:

```
$('#myAnchor').on( 'click', (evt) => {
    evt.preventDefault();
    console.log('You clicked a link!');
});
```

>- In the code above, the `evt.preventDefault();` line instructs the browser not to perform the default action.
>- jQuery has a convenience method that allows in some of the event listeners, to skip the on method by just using the event itself. Other uses include:

>>- event.keyCode to learn what key was pressed - invaluable if you need to listen for a specific key
>>- event.pageX and event.pageY to know where on the page the click occurred - helpful for analytics tracking
>>- event.type to find what event happened - useful if listening to a target for multiple events

```
$('input').keypress(() => { //... });
```

## Event Delegation

>- What about when the target doesn't exist yet? This can happen in a lot of situations. For example, if you have a list of items, and you want to listen to clicks on any of them, what happens if you add an extra list item after your page is done?

>- Be careful when setting up an event listener and then creating the target item afterwards. For example:

```
$( 'article' ).on( 'click', function() {
    $( 'body' ).addClass( 'selected' );   
});

$( 'body' ).append( '<article> <h1>Appended Article</h1> <p>Content for the new article </p> </article>' );
```

>- Clicking on the "appended" article will not add a class to the body because the "appended" article was created after the event listeners were set up. When we targeted the 'article', it didn't exist yet, so jQuery added the click listener to all ZERO of our articles!

>- Event Delegation with jQuery uses the same code we've been using, but passes an additional argument to the "on" method.

```
$( '.container' ).on( 'click', 'article', function() { … });
```

>- this code tells jQuery to watch the .container element for clicks, and then if there are any, check if the click event's target is an article element.

>- Another advantage in using Event Delegation is that you can use it to consolidate the number of event listeners. For example, what if you had 1,000 list items on a page:

```
<ul id="rooms">
    <li>Room 1</li>
    <li>Room 2</li>
            .
            .
            .
    <li>Room 999</li>
    <li>Room 1000</li>
</ul>
```

>- The following code would set up an event listener for each 1,000 event listeners - one for each list item...that's 1,000 event listeners!

```
$( '#rooms li' ).on( 'click', function() {
    ...
});
```

>- Alternatively, we can use jQuery's event delegation to set the event listener on just one element (the ul#rooms) and check if the target element is a list item;

```
$( '#rooms' ).on( 'click', 'li', function() {
    ...
});
```

# Links of interest!

### Career Webinars Offered by Udacity
>- <p>Webinar by Trinh: <a href="http://youtu.be/c9N-kxUVWbA">Roadmapping and Career Support</a></p>
>- <p>Webinar by Kathleen: <a href="http://youtu.be/7qDo3l_WMJQ">Crafting a Killer resume</a></p>
>- <p>Webinar by Lyla Fujiwara: <a href="http://youtu.be/5GivsxeVq1g">A Day in the Life of a Developer with a Googler</a></p>

### Learning Courses
>- <p>Web deployment platform: <a href="https://www.udacity.com/course/deploying-applications-with-heroku--ud272">Deploying apps with Heroku | Udacity</a></p>
>- <p>ECMAScript 6, or ES6's updates to JS language: <a href="https://www.udacity.com/course/es6-javascript-improved--ud356">ES6 - JavaScript Improved | Udacity</a></p>
>- <p> Collection of JS utilities for the intermediate to advanced JS developer: <a href="https://mootools.net/">Mootools</a></p>
>- <p> Make asynchronous requests in JavaScript: <a href="https://www.udacity.com/course/intro-to-ajax--ud110">Intro to Ajax | Udacity</a></p>
>- <p> Learn how to handle asynchronous work in JavaScript: <a href="https://www.udacity.com/course/javascript-promises--ud898">Javascript promises | Udacity</a></p>
>- <p> Full Stack Curriculum: <a href="https://www.theodinproject.com/">The Odin Project</a></p>

### jQuery
>- <p> A fast, small, and feature-rich JavaScript library: <a href="http://api.jquery.com/">jQuery</a></p>
>- <p> List of methods to modify DOM's elements's attributes: <a href="http://api.jquery.com/category/attributes/">jQuery API documentation | Attributes</a></p>
>- <p> List of Traversing the DOM Tree methods: <a href="http://api.jquery.com/category/traversing/">jQuery API documentation | Traversing</a></p>
>- <p> List of filtering elements in the DOM Tree methods: <a href="http://api.jquery.com/category/traversing/filtering/">jQuery API documentation | Filtering</a></p>
>- <p> List of selectors methods: <a href="http://api.jquery.com/category/selectors/">jQuery API documentation | Selectors</a></p>

### Quiz informational links

>- <p> Toggle a Class selector method: <a href="http://api.jquery.com/toggleclass/">jQuery API documentation | .toggleClass()</a></p>
>- <p> Attribute selector method: <a href="http://api.jquery.com/attr/">jQuery API documentation | .attr()</a></p>
>- <p> CSS selector method: <a href="http://api.jquery.com/css/">jQuery API documentation | .css()</a></p>
>- <p> HTML selector method: <a href="http://api.jquery.com/html/">jQuery API documentation | .html()</a></p>
>- <p> text selector method: <a href="http://api.jquery.com/text/">jQuery API documentation | .text()</a></p>
>- <p> value selector method: <a href="http://api.jquery.com/css/">jQuery API documentation | .val()</a></p>
>- <p> Event methods used with jQuery: <a href="http://api.jquery.com/category/events/">jQuery API documentation | Events</a></p>
>- <p> Next selector method: <a href="http://api.jquery.com/next/">jQuery API documentation | .next()</a></p>
>- <p> Prepend selector method: <a href="http://api.jquery.com/prepend/">jQuery API documentation | .prepend()</a></p>
>- <p> Append selector method: <a href="http://api.jquery.com/append/">jQuery API documentation | .append()</a></p>
>- <p> Insert after selector method: <a href="http://api.jquery.com/insertAfter/">jQuery API documentation | .insertAfter()</a></p>
>- <p> Insert before selector method: <a href="http://api.jquery.com/insertBefore/">jQuery API documentation | .insertBefore()</a></p>
>- <p> remove selector method: <a href="http://api.jquery.com/remove/">jQuery API documentation | .remove()</a></p>
>- <p> Each selector method: <a href="http://api.jquery.com/each/">jQuery API documentation | .each()</a></p>
>- <p> event.target property: <a href="https://api.jquery.com/event.target/">jQuery API documentation | event.target</a></p>
>- <p> To create a new event object: <a href="https://api.jquery.com/category/events/event-object/">jQuery API documentation | Event Object</a></p>
>- <p> Definition of the UI Events (W3C spec UI Events): <a href="https://www.w3.org/TR/DOM-Level-3-Events/">DOM Level 3 Events</a></p>
>- <p> Understanding Event Delegations: <a href="https://learn.jquery.com/events/event-delegation/">jQuery API documentation | Event Delegation</a></p>

>- <p> How to monitor events on web browser tools for web developers: <a href="https://developers.google.com/web/tools/chrome-devtools/console/events?hl=en#monitor-events">Monitor Events</a></p>

### Game your way to understanding this topics

>- <p>Great Flexbox game for free: <a href="https://geddski.teachable.com/p/flexbox-zombies">Flexbox Zombie's game</a></p>
>- <p>Learn Regular expressions by playing: <a href="http://darevay.com/regenemies/">Regenemies game</a></p>
>- <p>Practice CSS Grid for free: <a href="https://cssgridgarden.com/">CSS GridGarden</a></p>
>- <p>Improve your Flexbox skills for free: <a href="http://flexboxfroggy.com/">Flexbox Froggy's game</a></p>
>- <p>More Flexbox practice for free: <a href="http://www.flexboxdefense.com/">Flexbox Defense</a></p>
>- <p>This site provide samples of how to do css: <a href="http://enjoycss.com/">Enjoy CSS</a></p>
>- <p>Unfolding the box model: <a href="https://rupl.github.io/unfold/">CSS 3D Transforms</a></p>
>- <p>practice writing Sass code in your browser: <a href="https://www.sassmeister.com/">SassMeister</a></p>
>- <p>postcss-cssnext features (the future of css): <a href="http://cssnext.io/playground/">CSSNext</a></p>
>- <p>Learn how to CSS selectors: <a href="http://flukeout.github.io/">CSS Diner</a></p>
>- <p>How many CSS3 properties can you type in 5 minutes?: <a href="https://codepen.io/lonekorean/pen/bfAjD">Codepen | CSS property Game</a></p>
>- <p>Guess the CSS property: <a href="https://codepen.io/goranp/pen/gLoZzE?q=css%20property&order=popularity&depth=everything&show_forks=false">Codepen | Hangman CSS Properties</a></p>
>- <p>Test of Writing Mode + CSS Grid: <a href="https://codepen.io/juliehutchinson001/pen/NYeRRB">Text orientation + Grid | Codepen</a></p>
>- <p>Practice your knowledge in a language (supports diff languages Python3, Go, Javascript, Java ...): <a href="https://www.codingame.com/start">CodinGame</a></p>

# To the Author

None of the content expressed in this summary belongs to me, it was originally provided by Udacity and instructors. I want to thank the Udacity and Google staffing for being able to share such a vast range of knowledge with us students. 

Sincerely, JH