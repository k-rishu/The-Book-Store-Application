import React from "react";

function StopWatch() {
    const [time, setTime] = React.useState(0)
    const [timerOn, setTimeOn] = React.useState(false)
    setTimeOn(true);
    React.useEffect(()=>{
        let interval = null;

        if(timerOn) {
            interval = setInterval(()=>{
                setTime(prevTime => prevTime + 1000)
            }, 1000)}
    else{
        clearInterval(interval)
        }
    return() => clearInterval(interval)        
    }, [timerOn])

    return(
        <div>{time }</div>
        
    )

}

export default StopWatch;