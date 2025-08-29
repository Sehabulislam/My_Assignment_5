
### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans : getElementById, getElementsByClassName, and querySelector / querySelectorAll are all used to select elements from the DOM. For example:- 
--> getElementById is used to select a specific element in the DOM that has an Id. 

--> getElementByClassName is used to select all elements in the DOM that have a class.

--> querySelector is used to find the first matching element after searching with any CSS selector.

---> querySelectorAll is used to find all the same type of elements with any CSS Selector.

2. How do you **create and insert a new element into the DOM**?
Ans: To create and insert a new element in the DOM, first take a variable and call document.createElement('div'). Then add the content to the variable, then add it by calling document.append.

3. What is **Event Bubbling** and how does it work?
Ans: Event Bubbling is when an Element triggers an event. Then the event is not limited to that Element. The event goes up step by step to the parentNode of that Element, its parentNode, its parentNode, and so on up to the document. That process above the event is called Event Bubbling.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: Event Delegation is a JavaScript technique that allows you to handle all children by setting an event listener on the parent element, rather than setting up separate event listeners for many child elements.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: Using the preventDefault() method stops the default behavior of the event. For example: clicking on a button causes a reload. Stop it by using preventDefault(). stopPropagation() This method is used to stop the bubbling of the event.


---

# Let's Code and Achieve your Dream 🎯

