class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  submitBudgetForm() {
    const val = this.budgetInput.value;
    if (val === "" || val < 0) {
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML =
        "<p>value cannot be empty or negative</p>";
      setTimeout(() => this.budgetFeedback.classList.remove("showItem"), 4000);
    } else {
      this.budgetAmount.textContent = val;
      this.budgetInput.value = "";
      this.showBalance();
    }
  }
  showBalance() {
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;
    if (total > 0) {
      this.balance.classList.remove("showBlack", "showRed");
      this.balance.classList.add("showGreen");
    } else if (total < 0) {
      this.balance.classList.remove("showBlack", "showGreen");
      this.balance.classList.add("showRed");
    } else {
      this.balance.classList.remove("showRed", "showGreen");
      this.balance.classList.add("showBlack");
    }
  }
  submitExpenseForm() {
    const expenseval = this.expenseInput.value;
    const amountval = this.amountInput.value;
    if (expenseval === "" || amountval === "" || amountval < 0) {
      this.expenseFeedback.classList.add("showItem");
      this.expenseFeedback.innerHTML =
        "<p>value cannot be empty or negative</p>";
      setTimeout(() => this.expenseFeedback.classList.remove("showItem"), 4000);
    } else {
      const amount = parseInt(amountval);
      this.expenseInput.value = "";
      this.amountInput.value = "";
      const expense = {
        id: this.itemID,
        title: expenseval,
        amount: amount,
      };
      this.itemID++;
      this.itemList.push(expense);
      this.addExpense(expense);
      this.showBalance();
    }
  }
  addExpense(expense) {
    const div = document.createElement("div");
    div.classList.add("expense");
    div.innerHTML = `
      <div class="expense-item d-flex justify-content-between align-items-baseline">

      <h6 class="expense-title mb-0 text-uppercase list-item">- ${expense.title}</h6>
      <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

      <div class="expense-icons d-flex justify-content-center list-item">

       <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
        <i class="fas fa-edit"></i>
       </a>
       <a href="#" class="delete-icon" data-id="${expense.id}">
        <i class="fas fa-trash"></i>
       </a>
      </div>
     </div>      
      `;
    this.expenseList.appendChild(div);
  }
  editExpense(element) {
    const id = parseInt(element.dataset.id);
    const expense = this.itemList.filter((item) => item.id === id);
    this.expenseInput.value = expense[0].title;
    this.amountInput.value = expense[0].amount;
    this.deleteExpense(element);
  }
  deleteExpense(element) {
    const id = parseInt(element.dataset.id);
    const parent = element.parentElement.parentElement.parentElement;
    this.expenseList.removeChild(parent);      
    this.itemList = this.itemList.filter((item) => item.id !== id);
    this.showBalance();
}
  totalExpense() {
    let total = 0;
    if (this.itemList.length > 0) {
      total = this.itemList.reduce((sum, item) => sum + item.amount, 0);
    }
    this.expenseAmount.textContent = total;
    return total;
  }
}
