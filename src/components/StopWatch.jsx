import { useRef, useState } from "react"

const StopWatch = () => {
    const [start, setStart] = useState(null)
    const [now, setNow] = useState(null)
    const intervalRef = useRef(null)

    const handleStart = () => {
        setStart(Date.now())
        setNow(Date.now())

        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10)
    }

    const handleStop = () => {
        console.log(intervalRef.current)
        clearInterval(intervalRef.current)

    }

    let timePassed = 0
    if(start != null && now != null){
        timePassed = (now - start) / 1000
    }
     return (
        <div>
            <h1>Time Elapsed: {timePassed}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default StopWatch