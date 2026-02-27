export function PaySplitHistoryBox({history}) {

    return (
        <>
            <h2 className="text-2xl font-bold text-emerald-400 my-6">Pay Split History</h2>
            
            <div>
                {history.length === 0 ?
                    <p className="text-2xl font-bold mx-auto"> You have no pay splits available! </p> : 
                    history.map((payStub) =>
                        // here, we create a new box below
                        <div className="transition-all hover:scale-105 duration-300 ease-in-out hover:bg-emerald-700
                        flex flex-row justify-between bg-gray-700 max-w-3xl px-4 py-4 rounded-lg mx-auto mb-4 border border-gray-600" key={payStub.id}>
                            <p className="text-md font-semibold"> Payday of {payStub.Date} </p>
                            <p className="text-md font-semibold"> Pay Amount: ${payStub.pay} </p>
                        </div>
                    )
                }
            </div>   
        </>
    );
}