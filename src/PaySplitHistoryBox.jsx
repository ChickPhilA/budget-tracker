import { useState } from 'react'

const fakePaySplits = [ 
  {id: 1, Date: '(02/06/2026)', pay: 660.36},
  {id: 2, Date: '(02/13/2026)', pay: 734.92},
  {id: 3, Date: '(02/20/2026)', pay: 553.18}
] // these are to display within the history cotainer below. REMINDER: JS DOES MONTHS 0 TO 11



export function PaySplitHistoryBox() {

  const [history, changeHistory] = useState(fakePaySplits)

    return (
        <>
            <h2 className="text-2xl font-bold text-emerald-400 my-6">Pay Split History</h2>
            
            <div>
                {history.length === 0 ?
                    <p className="text-2xl font-bold mx-auto"> You have no pay splits available! </p> : 
                    history.map((payStub) =>
                        // here, we create a new box below
                        <div className="flex flex-row justify-between bg-gray-700 max-w-3xl px-4 py-4 rounded-lg mb-4 border border-gray-600" key={payStub.id}>
                            <p className="text-md font-semibold"> Payday of {payStub.Date} </p>
                            <p className="text-md font-semibold"> Pay Amount: ${payStub.pay} </p>
                        </div>
                    )
                }
            </div>   
        </>
    );
}