>* Trees represent data that makeup websites: A parent branch `<ul>` has many children `<li></li>`.

>* DOCTYPE: Describes the type of HTML. `<!DOCTYPE html>` helps the browser determine what type of HTML document it’s trying to parse and display.

>* Browsers look for this doctype declaration to determine which rendering mode to use to render the site. Generally, newer sites follow standard HTML specifications. The current standard HTML specification is called HTML5.

>* `<head>` Describes meta information about the site, such as the title, and provides links to scripts and stylesheets the site needs to render and behave correctly.

>* `<body>` Describes the actual content of the site that users will see.

>* To open the web development tools on a Mac: Command + Option + i

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

---
  1. What CSS property is used to __italicize__ text? font-style
  2. What CSS property is used to __underline__ text? text-decoration
  3. What CSS property is used to __uppercase__ text? text-transform
  4. What CSS property is used to __bold__ text? font-weight

  5. Which HTML elements match the given CSS statement?

```
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

```
<link href="path-to-stylesheet/stylesheet.css" rel="stylesheet">
```

>- The href attribute specifies the path to the linked resource and the rel attribute names the relationship between the resource and your document.

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
>>- false (the Boolean expresion) === false
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
>>- true (the Boolean expresion) === true
>>- 42 (the number) === true
>>- "0" (the string) === true
>>- "null" (the null string) === true
>>- "undefined" (the string) === true
>>- [] (the expresion) === true
>>- {} (the expresion) === true

### Ternary Operator

>- The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements.

```
conditional ? (if condition is true) : (if condition is false)
```

> To use the ternary operator,

>>- first provide a conditional statement on the left-side of the ?.
>>- Then, between the ? and : write the code that would run if the condition is true
>>- and on the right-hand side of the : write the code that would run if the condition is false.

For example:

```
var isGoing = true;
var color = isGoing ? "green" : "red";
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
var option = 3;

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
var option = 3;

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
var start = 0; // when to start
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
  var sum = x + y;
  return sum; // return statement
}

// 1 and 2 are passed into the function as arguments
var sum = add(1, 2);
```

>- The function body is enclosed inside curly brackets:

```
function add(x, y) {
  // function body!
}
```

>- Return statements explicitly make your function return a value:

```
return sum;
```

>- You invoke or call a function to have it do something:

```
add(1, 2);
Returns: 3
```

### variables

>- If an identifier is declared in global scope, it's available everywhere.
>- If an identifier is declared in function scope, it's available in the function it was declared in (even in functions declared inside the function).
>- When trying to access an identifier, the JavaScript Engine will first look in the current function. If it doesn't find anything, it will continue to the next outer function to see if it can find the identifier there. It will keep doing this until it reaches the global scope.
>- Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names, and messy code.

### Shadowing

```
var x = 1;

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
var x = 1;

function addTwo() {
  var x = x + 2;
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
  var answer = (x + y)/2;
  return answer;
}
```
>- What value will be printed to the console?

```
sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}

>>> undefined Julia

```
### Function Declarations

>- In JavaScript, you can also store functions in variables. When a function is stored inside a variable it's called a function expression.

```
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
```

>- The following is an anonymous function, a function with no name, and you've stored it in a variable called catSays. And, if you try accessing the value of the variable catSays, you'll even see the function returned back to you.

```
var catSays = function(max) {
  // code here
};
```

Then,

```
catSays;
Returns:

function(max) {
  var catMessage = ""
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
}
```








a
