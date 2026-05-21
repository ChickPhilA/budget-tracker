import Button from './Button.jsx'

function NewSplitButton({paySplitScreenOpen}) {
    const label = "Start a new pay split"

    return (
        <>
            <h1 className="text-2xl text-[rgb(221,222,223)] my-4"> {"Did you recently get paid?"} </h1>
            <Button text= {label} onClick={paySplitScreenOpen} />
        </>
    );
}

export default NewSplitButton