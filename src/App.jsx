import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('manya-expenses');
    return saved ? JSON.parse(saved) : [];
  });

  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('manya-expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = () => {
    if (!desc || !amount || !date) {
      setError('Please enter description, amount, and date.');
      return;
    }

    if (parseFloat(amount) <= 0) {
      setError('Amount must be greater than zero.');
      return;
    }

    const newExpense = {
      id: Date.now(),
      description: desc,
      amount: parseFloat(amount),
      date: date,
    };

    setExpenses([...expenses, newExpense]);
    setAmount('');
    setDesc('');
    setDate('');
    setError('');
  };

  const handleDeleteExpense = (id) => {
    const updated = expenses.filter((exp) => exp.id !== id);
    setExpenses(updated);
  };

  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="container">
      <h1>💸 Expense Tracker</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleAddExpense}>Add</button>
      </div>

      {error && <div className="error-msg">{error}</div>}

      <div className="expense-list">
        {expenses.map((expense) => (
          <div key={expense.id} className="expense-item">
            <div>
              <strong>{expense.description}</strong><br />
              <small>{expense.date}</small>
            </div>
            <div>
              ₹{expense.amount.toFixed(2)}
              <button className="delete-btn" onClick={() => handleDeleteExpense(expense.id)}>❌</button>
            </div>
          </div>
        ))}
      </div>

      <h2>Total: ₹{total.toFixed(2)}</h2>
    </div>
  );
}

export default App;