import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 2, 28),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 28) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 1, 28),
  },
  { id: "e4", title: "New Desk", amount: 450, date: new Date(2022, 6, 28) },
  { id: "e5", title: "New Door", amount: 350, date: new Date(2021, 1, 28) },
  { id: "e6", title: "Paints", amount: 1200, date: new Date(2022, 8, 28) },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
