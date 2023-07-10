import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

  return (
    <div className="Item">
      <div className="Date">
        <ExpenseDate date={ props.date } />
      </div>
      <div className="ExpenseBookEntry">
        <div className="Title">
          <p>{props.title}</p>
        </div>
        <div className="Expenses">
          <p>₹{props.expenses}</p>
        </div>
      </div>
    </div>
  );

}

export default ExpenseItem;