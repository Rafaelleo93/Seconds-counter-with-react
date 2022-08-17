import React, { useState, useEffect } from "react";
import SecondsCounter from "../component/SecondsCounter.jsx";
import HoursCounter from "./HoursCounter.jsx";



//create your first component
const Home = () => {
	let reloj = <i className="fas fa-clock"></i>;
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);
	const [count4, setCount4] = useState(0);
	const [count5, setCount5] = useState(0);
	const [count6, setCount6] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(count + 1);

			if (count == 9) {setCount(0); setCount2(count2 + 1)}
			
			if (count2 == 9 && count == 9) { setCount2(0); setCount3(count3 + 1);
			}
			if (count3 == 9 && count2 == 9 && count == 9) { setCount3(0); setCount4(count4 + 1);
			}
			if (count4 == 9 && count3 == 9 && count2 == 9 && count == 9) { setCount4(0); setCount5(count5 + 1);
			}
			if (
				count5 == 9 &&
				count4 == 9 &&
				count3 == 9 &&
				count2 == 9 &&
				count == 9
			) {
				setCount5(0);
				setCount6(count6 + 1);
			}
			if (
				count6 == 9 &&
				count5 == 9 &&
				count4 == 9 &&
				count3 == 9 &&
				count2 == 9 &&
				count == 9
			) {
				setCount6(0);
				setCount(0);
			}
		}, 1000);
		return () => clearInterval(interval);
	});
	const comienzo=()=>{
        setCount(0);
        setCount2(0);
        setCount3(0);
        setCount4(0);
        setCount5(0);
        setCount6(0);
    }

	return (
		<div className="p-3">
			<div className="row d-flex">
				<SecondsCounter icono={reloj} />
				<SecondsCounter numero={count6} />
				<SecondsCounter numero={count5} />
				<SecondsCounter numero={count4} />
				<SecondsCounter numero={count3} />
				<SecondsCounter numero={count2} />
				<SecondsCounter numero={count} />
			<div className="col p-3 bg-dark m-1 rounded d-flex justify-content-center">
			<button className="restart" onClick={comienzo}>Restart</button>
			</div>
			</div>
			
			<div className="d-flex justify-content-center"> 
				<HoursCounter/>
			</div>
				
		</div>
	);
};

export default Home;