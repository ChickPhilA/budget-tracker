import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SplitButton from './NewSplitButton.jsx'






export default function App() {
  // 1. The "Brain" (React State)
  // This tells React to remember the numbers you type in real-time.
  const [pay, setPay] = useState('');






  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 font-sans">
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
        <h1 className="text-3xl font-bold text-emerald-400 mb-6">Weekly Budget Tracker</h1>


        <SplitButton />
  
        {/* 2. The Input Boxes */}
        <div className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-400 mb-1 text-sm font-semibold">Paycheck for ($)</label>
            <input 
              type="number" 
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-emerald-400 transition-colors"
              placeholder="e.g. 330.50"
              value={pay}
              onChange={(e) => setPay(e.target.value)}
            />
          </div>
{/* 
          <div>
            <label className="block text-gray-400 mb-1 text-sm font-semibold">Hours Worked</label>
            <input 
              type="number" 
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-emerald-400 transition-colors"
              placeholder="e.g. 25"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </div>
        </div> /*}

        {/* 3. The Live Output
        <div className="mt-8 p-5 bg-gray-700 rounded-lg border border-gray-600">
          <p className="text-gray-300 text-sm mb-2">Live React State:</p>
          {/* <p className="text-gray-100">Wage: <span className="text-emerald-400 font-bold">${wage || '0'}</span></p>
          <p className="text-gray-100">Hours: <span className="text-blue-400 font-bold">{hours || '0'}</span></p> */}
        </div>

      </div>
    </div>
  );
}