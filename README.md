### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
**Answer :** 
**getElementById** - Select a single element based on its unique id attribute . id must unique.
**getElementsByClassName** - Selects all elements that possess a specific class name.
**querySelector**  - Selects the first element that matches a specified css selector. (#id , .clsss , tag)

2. How do you **create and insert a new element into the DOM**?
**Answer :**  
**Create  new element**
const newDiv = document.createElement("div");
newDiv.innerText = "Hello World";
**Insert into the DOM** 
document.body.appendChild(newDiv);

3. What is **Event Bubbling** and how does it work?
***Answer***

Event Bubbling is the deffult JavaScript mechanism .
Event Bubbling means when an event happens on an element, it first runs on that element and then proopagates upward through its parent elements until it reaches the document.
**Example**
Clicking a button inside a div will tigger the button's event , then the div's the the body's unless stopped with event.stopPropagation().

```javascript

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
```
4. What is **Event Delegation** in JavaScript? Why is it useful?
***Answer***

Event Delegation in JavaScript is a technique where you attach a single event listener to a parent element instead of adding event listenrs to multiple child elements individually. The event listener on the parent uses event bubbling to catch events its children.

Why is it  useful?
Event delegation makes your code more efficient and scalable . Performance , Dynamic Elements , Cleane code .

5. What is the difference between **preventDefault() and stopPropagation()** methods?
***Answer***
The preventDefault() method is used to prevent the browser’s default behavior for an event, such as form submission or link navigation.

The stopPropagation() method is used to stop an event from bubbling up (or capturing down) the DOM tree, preventing parent or ancestor elements from receiving it.

While preventDefault() controls the default action of the browser, stopPropagation() controls the flow of the event through the DOM.