import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { PaySplitHistoryBox } from './PaySplitHistoryBox.jsx';
import MoneyRain from './MoneyRain.jsx'
import SplitButton from './NewSplitButton.jsx'






export default function App() {




  return (
    <>
      <MoneyRain />
      <div className="min-h-screen bg-gray-900 text-white p-10 font-sans z-10 relative">
        <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
          <h1 className="text-3xl font-bold text-emerald-400 mb-6">Weekly Budget Tracker</h1>


          <SplitButton />

          <PaySplitHistoryBox />


        </div>

        

      </div>
    </>
  );
}