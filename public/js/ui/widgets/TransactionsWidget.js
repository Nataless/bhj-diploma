/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error('Переданный элемент не существует');
    }

    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    // доход
    const incomeButton = document.querySelector('.create-income-button');
    incomeButton.addEventListener('click', (event) => {
      event.preventDefault();
      App.getModal("newIncome").open();
    })
    // расход
    const expenseButton = document.querySelector('.create-expense-button');
    expenseButton.addEventListener('click', (event) => {
      event.preventDefault();
      App.getModal("newExpense").open();
    })
  }
}