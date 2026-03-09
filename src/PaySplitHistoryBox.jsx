import { Trash2 } from "lucide-react";

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
                            <div>
                                <p className="text-md font-semibold"> Payday of {payStub.Date} </p>
                            </div>

                            <div className="flex flex-row items-center gap-4 text-gray-300">
                                <p className="text-md font-semibold"> Pay Amount: ${payStub.pay} </p>

                                <div className="h-6 w-px bg-gray-500"></div>

                                <button className="text-gray-400" title="Delete this pay split">
                                    <Trash2 className="cursor-pointer hover:text-red-500" size={20} />
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>   
        </>
    );
}