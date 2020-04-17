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

## 2. User Story: `Budget form`

- A user can add a budget to the application, the amount must be greater or equal to 0, the user will be notified in case of an input error, if successful the amount will be loaded to the screen and the final balance will be calculated
- I wrote the code in `js/ui.js` and `js/handler.js`
- The handler calls the function responsible of adding a budget and process the form inputs, the handler is called using the `submit` event of the `budgetForm` HTML element.

---

## 3. User Story: `Expense form`

- A user can add an expense to the application, the expense title must not be empty and the amount must be greater or equal to 0, the user will be notified in case of an input error, if successful the new expense will be put on screen and the balance is updated
- I wrote the code in `js/ui.js` and `js/handler.js`
- The handler calls the function responsible of adding an expense and process the form inputs, the handler is called using the `submit` event of the `expenseForm` HTML element.

---

## 4. User Story: `Edit expense`

- A user can edit an expense from the expenses list, it must remove the expense form the list and fill the expenseForm with the selected expense title and amount and finally update the balance
- I wrote the code in `js/ui.js` and `js/handler.js`
- The handler calls the function responsible of editing an expense from the list, the handler is called using the `click` event of the `expenseList` HTML element.

---

## 5. User Story: `Delete expense`

- A user can delete an expense from the expenses list, it must delete the expense form the list and update the balance
- I wrote the code in `js/ui.js` and `js/handler.js`
- The handler calls the function responsible of editing an expense from the list, the handler is called using the `click` event of the `expenseList` HTML element.

---