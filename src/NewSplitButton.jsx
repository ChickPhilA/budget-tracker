import Button from './Button.jsx'

function NewSplitButton({paySplitScreenOpen}) {
    const label = "Start a new pay split"

    return (
        <>
            <h1 className="text-2xl text-[rgb(100,110,113)] my-4"> {"Did you recently get paid?"} </h1>
            <Button text= {label} onclick={paySplitScreenOpen} />
        </>
    );
}

export default NewSplitButton