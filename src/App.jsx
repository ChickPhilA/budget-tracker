import { useState } from 'react'
import './App.css'
import { PaySplitHistoryBox } from './PaySplitHistoryBox.jsx';
import MoneyRain from './MoneyRain.jsx'
import SplitButton from './NewSplitButton.jsx'
import { MoveLeft } from 'lucide-react';

export default function App() {

const fakePaySplits = [ 
  {id: 1, Date: '(02/06/2026)', pay: 660.36},
  {id: 2, Date: '(02/13/2026)', pay: 734.92},
  {id: 3, Date: '(02/20/2026)', pay: 553.18}
] // these are to display within the history cotainer below. REMINDER: JS DOES MONTHS 0 TO 11


  // State variables for the app
  const [pay, setPay] = useState()
  const [categories, setCategories] = useState(['Savings', 'Coffee', 'Gas'])
  const [date, setDate] = useState(new Date().toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'}))
  // this will be used to label the pay split with a date. We can default it to today's date, but ideally we would let the user select the date of their payday in the Step 1 of the wizard (will be implemented later)
  const [newPayClicked, setNewPayActivity] = useState(false) // for the SplitButton when we want to initate a new pay split
  const [history, changeHistory] = useState(fakePaySplits) // this is the state for the history container. We will update this when we add a new pay split to the history
  const [wizardStep, changeWizardStep] = useState(0) // this is for the 3-step state wizard in our splitting process. 1 is total pay, 2 is categories, and 3 is the splitting among categories
  const [shake, setShake] = useState(false) // this is for the shake animation on input field(s) if user tries to proceed without entering valid input)]

// Regex for pay input field in Step 1; ensures a valid and clean currency input format for the user
const handlePayChange = (e) => {
  const val = e.target.value
  const regex = /^\d*\.?\d{0,2}$/ // allows numbers with up to 2 decimal places
  if(val === ' ' || regex.test(val)) {
    setPay(val)
  }
}

const handleNext = () => {
  if(wizardStep === 1 && (!pay || parseFloat(pay) <= 0)) {
    // if user tries to proceed without entering a valid pay amount, we trigger the shake animation and return early to prevent moving to the next step
    setShake(true)
  } else {
    changeWizardStep(wizardStep + 1)
  }
}

  return (
    <>
      <MoneyRain />
      <div className="min-h-scree n bg-gray-900 text-white p-10 font-sans z-10 relative">
        <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
          <h1 className="text-3xl font-bold text-emerald-400 mb-6">Weekly Budget Tracker</h1>

          <SplitButton paySplitScreenOpen={() => { setNewPayActivity(true); changeWizardStep(1); } } />
        </div>

        {newPayClicked && (
          <div className="flex justify-center items-center fixed inset-0 z-50 bg-black/60 backdrop-blur-md p-4">
            <div className={`bg-gray-800 border border-emerald-500/30 w-full max-w-lg p-8 rounded-2xl relative ${shake ? `animate-shake` : ''}`}>
              
            {/* The back and close buttons */}
              {wizardStep > 1 && (
                <MoveLeft onClick={() => changeWizardStep(wizardStep - 1)}
                className="absolute top-3 left-4 text-gray-400 hover:text-emerald-500 hover:cursor-pointer hover:transition-colors">
                </MoveLeft>
              )}

              <button
                onClick={() => {setNewPayActivity(false); changeWizardStep(0); setPay('');}}
                className="absolute top-3 right-4 text-gray-400 hover:text-red-500 hover:cursor-pointer hover:transition-colors">
                  X
              </button>

              {/* Step 1: Input the total pay */}
              {wizardStep === 1 && (
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-emerald-600 mb-6 underline "> New Pay Split of {date} </h1>
                  <h2 className="text-2xl font-bold text-emerald-400 mb-4"> How much did you get paid? (after tax and deductions)</h2>

                  <div
                    className={`relative mt-4 ${shake ? 'animate-shake' : ''}`}
                    onAnimationEnd={() => setShake(false)}
                  >
                    <div className="absolute inset-y-0 left-0 pl-3 pb-6 flex items-center pointer-events-none">
                      <span className="text-white text-3xl">$</span>
                    </div>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={pay}
                      step="0.01"
                      className={`bg-gray-700 border-b-2 ${shake ? 'border-red-500' : 'border-emerald-500'} text-white text-3xl w-full outline-none p-2 pl-8 mb-6
                      appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                      placeholder="0.00"
                      onChange={handlePayChange}
                    />
                  </div>

                  <button 
                    onClick={handleNext}
                    className="w-full bg-emerald-600 py-3 rounded-2xl font-bold transition-all hover:bg-emerald-500 hover:cursor-pointer"
                    >
                      Next
                  </button>
                </div>     
              )}

              {/* Step 2: Adding the categories */}
              {/* i want to finish this step before moving on to the next one, so I can have the categories state ready to be passed into the pie chart component in Step 3 */}
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