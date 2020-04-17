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
      setTimeout(() => this.budgetFeedback.classList.remove("showItem"), 4000)
        .bind;
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
        this.balance.classList.remove("showBlack","showRed");
        this.balance.classList.add("showGreen");
    } else if (total < 0) {
        this.balance.classList.remove("showBlack","showGreen");
        this.balance.classList.add("showRed");
    } else {
        this.balance.classList.remove("showRed","showGreen");
        this.balance.classList.add("showBlack");
    }
  }
  totalExpense() {
    //let total = this.totalExpense();
    let total = 400; 
    return total;
  }
}
