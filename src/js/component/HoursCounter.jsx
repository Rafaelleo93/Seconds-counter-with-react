import React, { useState, useEffect } from "react";

const HoursCounter = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    let timer

    useEffect(() => {
		 timer = setInterval(() => {
			setSeconds(seconds + 1);

			if (seconds === 59) {setSeconds(0); setMinutes(minutes + 1)}
            if (minutes === 59 && seconds === 59) {setMinutes(0); setSeconds(0); setHours(hours + 1)}
			
		}, 1000);
		return () => clearInterval(timer);
	});

    const restart=()=>{
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    const pause =()=>{
        clearInterval(timer);
    }

  return (
    <div
			className="col-4 text-white bg-dark m-1 rounded">
			<div className="card-body d-flex justify-content-center">
				<h1 className="card-title">{hours < 10 ? "0" + hours:hours}:{minutes < 10 ? "0" + minutes:minutes}:{seconds < 10 ? "0" + seconds:seconds}</h1>
            </div>
            <div className="d-flex pb-2 justify-content-center">
            <button className="restart" onClick={restart}>Restart</button>
            <button className="stop" onClick={pause}>Pause</button>
            </div>
    </div>
  )
}

export default HoursCounter