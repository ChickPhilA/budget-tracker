# Paycheck Allocation Tool

A React web app that helps variable-income workers (part-time, hourly, tipped) decide where each paycheck goes the moment it lands.

**Status: work in progress.** The first two steps of the pay-split wizard work; the final allocation step is not built yet. See [What's built](#whats-built) and [Roadmap](#roadmap).

## The Problem

Many workers have a fixed 9-to-5 salary. Others earn income that changes every pay period with hours and tips. When your paycheck fluctuates, budgeting isn't "set and forget": one hour cut can turn a "want" into a "necessity" trade-off.

I'm a variable-income barista myself, and I built this to reduce the mental load of splitting each paycheck between savings and necessities.

## What's built

- **Step 1 – Enter your pay:** a currency input that only accepts valid amounts (digits, up to 2 decimal places) and shows an error plus a shake animation if you try to continue with an empty or zero value.
- **Step 2 – Choose categories:** add and delete spending categories (defaults: Savings, Checkings, Entertainment). Each category gets a UUID so add/delete stays reliable even with duplicate or renamed names. Empty names are rejected.
- **Pay split history:** a list of previous paydays (currently sample data) with a delete control.
- Dark UI built with Tailwind CSS and a falling-money background animation.

## Roadmap

- [ ] Step 3: allocate the paycheck across categories by percentage, with a pie chart of the split
- [ ] Finish category renaming (the edit field is wired up; saving the new name is not)
- [ ] Save splits to the history list and persist them (localStorage first)
- [ ] Let the user pick the payday date
- [ ] AI-generated spending insights using the Claude API
- [ ] Deploy to Vercel

## Tech stack

React 19, Vite, Tailwind CSS 4, lucide-react, uuid

## Run it locally

Requires Node.js 18+.

```bash
git clone https://github.com/ChickPhilA/budget-tracker.git
cd budget-tracker
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## How I built it

I'm building this to deepen my React fundamentals: state with `useState`, controlled inputs, conditional rendering for the multi-step wizard, and component composition. I use AI tools (Claude) as a learning aid for hints and code review, and I write and understand the code myself.

## Asset credits

Money-falling background animation by FlorinPop17 on CodePen: https://codepen.io/FlorinPop17/pen/OGaMLb****
