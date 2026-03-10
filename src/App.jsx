import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { PaySplitHistoryBox } from './PaySplitHistoryBox.jsx';
import MoneyRain from './MoneyRain.jsx'
import SplitButton from './NewSplitButton.jsx'






export default function App() {

const fakePaySplits = [ 
  {id: 1, Date: '(02/06/2026)', pay: 660.36},
  {id: 2, Date: '(02/13/2026)', pay: 734.92},
  {id: 3, Date: '(02/20/2026)', pay: 553.18}
] // these are to display within the history cotainer below. REMINDER: JS DOES MONTHS 0 TO 11


  const [pay, setPay] = useState(0)
  const [date, setDate] = useState('')
  const [newPayClicked, setNewPayActivity] = useState(false) // for the SplitButton when we want to initate a new pay split
  const [history, changeHistory] = useState(fakePaySplits) // this is the state for the history container. We will update this when we add a new pay split to the history
  const [wizardStep, changeWizardStep] = useState(0) // this is for the 3-step state wizard in our splitting process. 1 is total pay, 2 is categories, and 3 is the splitting among categories

  

  return (
    <>
      <MoneyRain />
      <div className="min-h-screen bg-gray-900 text-white p-10 font-sans z-10 relative">
        <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
          <h1 className="text-3xl font-bold text-emerald-400 mb-6">Weekly Budget Tracker</h1>

          <SplitButton paySplitScreenOpen={() => setNewPayActivity(true)} />
        </div>

        {newPayClicked && (
          <div className="flex justify-center items-center fixed inset-0 z-50 bg-black/60 backdrop-blur-md p-4">
            <div className="bg-gray-800 border border-emerald-500/30 w-full max-w-lg p-8 rounded-2xl relative">
              
            {/* The close button */}
              <button
                onClick={() => {setNewPayActivity(false); changeWizardStep(1);}}
                className="absolute top-4 right-4 text-gray-400 hover:text-white">
                  x
              </button>

              {/* Step 1: Input the total pay */}
              {wizardStep === 1 && (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-emerald-400 mb-4"> How much did you get paid? (after tax and deductions)</h2>
                  <input
                    type="number"
                    className="bg-gray-700 border-b-2 border-emerald-500 text-white text-3xl w-full outline-none py-2 mb-6"
                    placeholder="$0.00"
                    onChange={(e) => setPay(e.target.value)}
                  />

                  <button 
                    onClick={() => changeWizardStep(2)}
                    className="w-full bg-emerald-600 py-3 rounded-2xl font-bold transition-all hover:bg-emerald-500"
                    >
                      Next
                  </button>
                </div>     
              )}

              {/* Step 2: Adding the categories */}
              {wizardStep === 2 && (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-emerald-400 mb-4"> What categories would you like to split your pay into? Add them below! </h2>
                    {/* logic will need to be implemented here */}
                  <button
                    onClick={()=> changeWizardStep(3)}
                    className="w-full bg-emerald-600 py-3 rounded-2x font-bold mt-4"
                  >
                    Next
                  </button>
                </div>
              )}

              {wizardStep === 3 && (
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-4 text-emerald-400"> Pay Split for {date || 'Today' } </h2>
                  <div className="aspect-square w-32 border-4 border-dashed border-gray-600 rounded-full flex items-center justify-center">
                    Pie Chart of Split
                    {/* a pie chart will go here to visually display the split among categories */}
                  </div>

                  {/* submit button logic will go here as well */}
                </div>
              )}

            </div>
          </div>
        )}

        <PaySplitHistoryBox history={history} />


        

      </div>
    </>
  );
}