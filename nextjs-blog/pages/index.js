import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/Home.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './Menu'
import Resumen from "./Resumen"
import Banner from "./Banner";
import useAppContext from "../control/context";

export default function Home() {
	const [dataSensores, setdataSensores] =  useState("W");
	const [dataAmbient, setAmbient] = useState("W");
	const [running, setRunning] = useState(false);
	const [color, setColor] = useState("rounded-circle position-fixed top-0 end-0  m-5 fs-3 btn btn-success");

	async function getPageData() {
		setTimeout(async () => {
		const apiUrlEndpoint = `http://localhost:3000/api/data`;
		const response = await fetch(apiUrlEndpoint);
		const res = await response.json();
		console.log("A");
		//console.log(res);
		setdataSensores(res);

		const apiUrlEndpoint2 = `http://localhost:3000/api/data2`;
		const response2 = await fetch(apiUrlEndpoint2);
		const res2 = await response2.json();
		console.log("B");
		//console.log(res);
		setAmbient(res2);
	
	}, 1000);



	}

	useEffect(() => {
		getPageData();
		document.title = 'WeCare';
	}, []);

	function changeState(){
		setRunning (!running);
		running ? setColor("rounded-circle position-fixed top-0 end-0  m-5 fs-3 btn btn-success") : setColor("rounded-circle position-fixed top-0 end-0  m-5 fs-3 btn btn-danger");

	}

	return (
		<div>
			<button className={color} onClick={changeState}>
							{running ? <i class="bi bi-record-circle"></i>:<i class="bi bi-record-circle-fill"></i>}
			</button>
			{/*<Menu></Menu>*/}
			<div className ="container">
				
				<Banner></Banner>
				<div className="d-flex flex-column align-items-center mt-5">
					{running ? <Resumen data={dataSensores} ambient={dataAmbient}></Resumen>: <span className="fs-5  text-primaryx">The monitor is off</span>}
					<div className="my-4 "> 
						
					</div>
				</div>
				
				
			</div>
		</div>
		    
	);
}