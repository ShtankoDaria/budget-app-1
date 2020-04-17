# Budget-app: development strategy

Building this site one step at a time

---

## 0. Setup

- `index.html`: basic HTML layout and references to external files
- `/css/bootstrap.min.css`: Bootstrap v4.1.1
- `/webfonts/*`: folder with bootstrap fonts
- `/js/jquery-3.3.1.min.js`: jQuery library to use jquery syntax
- `/js/bootstrap.bundle.min.js`: Bootstrap javascript library
- `/img/*`: Assets of the webpage image elements
- `/css/all.css`: Font Awesome Free 5.3.1
- `/css/main.css`: CSS stylesheet for styling the HTML elements

---

## 1. User interface class, Handler class, log array and event listeners function

- `js/ui.js`, `js/handler.js`, `js/listener.js` & `log.js`
- Initial UI class with properties and methods to interact with the user, handler class with methods to execute when the user submit a new budget, expense or interacts with the expenses list, event listeners for the HTML elements the user is interacting and the log array to store the user events history

---
