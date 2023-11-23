import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/Home.module.css";
import Menu from './Menu'
import Resumen from "./Resumen"
import Banner from "./Banner";
import useAppContext from "../control/context";

export default function Home() {
	const [dataSensores, setdataSensores] =  useState("W");
	const [running, setRunning] = useState(false);
	const [color, setColor] = useState("btn btn-danger");

	async function getPageData() {
		setTimeout(async () => {
		const apiUrlEndpoint = `http://localhost:3000/api/data`;
		const response = await fetch(apiUrlEndpoint);
		const res = await response.json();
		console.log("A");
		//console.log(res);
		setdataSensores(res);}, 1000);

	}

	useEffect(() => {
		getPageData();
		document.title = 'WeCare';
	}, []);

	function changeState(){
		setRunning (!running);
		running ? setColor("btn btn-danger") : setColor("btn btn-success");

	}

	return (
		<div>
			{/*<Menu></Menu>*/}
			<div className ="container">
				
				<Banner></Banner>
				<div className="d-flex flex-column align-items-center mt-5">
					{running ? <Resumen data={dataSensores}></Resumen>: <span className="fs-5  text-primaryx">The monitor is off</span>}
					<div className="my-4 "> 
						<button className={color} onClick={changeState}>
							{running ? <span>Turn Off</span>: <span>Turn On</span>}
						</button>
					</div>
				</div>
				
				
			</div>
		</div>
		    
	);
}