class Handler {
  constructor(ui) {
    this.ui = ui;
  }
  budgetFormHandler(event) {
    event.preventDefault();
    log.push({
      handler: "budgetForm",
      object: JSON.parse(JSON.stringify(this.ui)),
    });
  }
  expenseFormHandler(event) {
    event.preventDefault();
    log.push({
      handler: "expenseForm",
      object: JSON.parse(JSON.stringify(this.ui)),
    });
  }
  expenseListHandler(event) {
    log.push({
      handler: "expenseList",
      object: JSON.parse(JSON.stringify(this.ui)),
    });
  }
}
