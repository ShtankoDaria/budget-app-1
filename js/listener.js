function eventListeners() {
  const ui = new UI();
  const handler = new Handler(ui);
  ui.budgetForm.addEventListener("submit", (event) => handler.budgetFormHandler(event));
  ui.expenseForm.addEventListener("submit", (event) => handler.expenseFormHandler(event));
  ui.expenseList.addEventListener("click", (event) => handler.expenseListHandler(event));
}
debugger;
document.addEventListener("DOMContentLoaded", eventListeners());
