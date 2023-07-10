import ExpenseItem from "./Components/ExpenseItem";

import "./App.css";

function App() {
  const expenseItems = [
    {
      id: "e1",
      title: "Pens, Notebooks and Books",
      expenses: 7584.99,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e3",
      title: "New Chair (Office Chair)",
      expenses: 7000.0,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      expenses: 14999.5,
      date: new Date(2021, 5, 12),
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem
          title={expenseItems[1].title}
          expenses={expenseItems[1].expenses}
          date={expenseItems[1].date}
        />
        <ExpenseItem
          title={expenseItems[2].title}
          expenses={expenseItems[2].expenses}
          date={expenseItems[2].date}
        />
      </header>
    </div>
  );
}

export default App;