import Button from './Button.jsx'

function NewSplitButton() {
    const label = "Start a new pay split"

    return (
        <>
            <h1 className="text-2xl text-[rgb(173,216,230)] my-4"> {"Did you recently get paid?"} </h1>
            <Button text= {label} />
        </>
    );
}

export default NewSplitButton