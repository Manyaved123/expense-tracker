# 💸 Expense Tracker

A simple personal expense tracker built with **React**. Add expenses with a description, amount and date, see the running total in rupees, and delete entries. Data is saved in the browser, so it survives page refreshes.

## Features

- Add an expense with **description, amount (₹) and date**
- Input validation: all fields are required and the amount must be greater than zero
- Delete any expense with one click
- **Live total** of all expenses
- **Persistent storage** with the browser's `localStorage`: no account or backend needed

## How it works

- React `useState` holds the list of expenses and the form fields.
- A `useEffect` hook writes the list to `localStorage` whenever it changes.
- The list is read back on first load, so data survives refreshes.
- The total is computed with `Array.reduce`.

## Run it

```bash
npm install
npm run dev
# open the local URL Vite prints (usually http://localhost:5173)
```

## Project structure

```
src/
  App.jsx    all app logic and UI
  App.css    styles
  main.jsx   entry point
```

## Possible next steps

- Categories (food, travel, rent) with a pie chart of spending
- Monthly filter and summary
- Export to CSV

## Tech

React 19 · Vite · JavaScript · localStorage
