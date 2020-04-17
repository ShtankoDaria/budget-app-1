class Handler {
  constructor(ui) {
    this.ui = ui;
  }
  budgetFormHandler(event) {
    event.preventDefault();
    this.ui.submitBudgetForm();
    log.push({
      handler: "budgetForm",
      object: JSON.parse(JSON.stringify(this.ui)),
    });
  }
  expenseFormHandler(event) {
    event.preventDefault();
    this.ui.submitExpenseForm();
    log.push({
      handler: "expenseForm",
      object: JSON.parse(JSON.stringify(this.ui)),
    });
  }
  expenseListHandler(event) {
    if (event.target.parentElement.classList.contains("edit-icon")) {
      this.ui.editExpense(event.target.parentElement);
    } else if (event.target.parentElement.classList.contains("delete-icon")) {
      this.ui.deleteExpense(event.target.parentElement);
    }
    log.push({
      handler: "expenseList",
      object: JSON.parse(JSON.stringify(this.ui)),
    });
  }
}
