import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/Home.module.css";
import Menu from './Menu'
import Resumen from "./Resumen"
import Banner from "./Banner";
import useAppContext from "../control/context";

export default function Home() {
	const [dataSensores, setdataSensores] =  useState("W");

	async function getPageData() {
		const apiUrlEndpoint = `http://localhost:3000/api/data`;
		const response = await fetch(apiUrlEndpoint);
		const res = await response.json();
		//console.log("A");
		//console.log(res);
		setdataSensores(res);
	}

	useEffect(() => {
		getPageData();
		document.title = 'WeCare';
	}, []);

	return (
		<div>
			{/*<Menu></Menu>*/}
			<div className ="container">
				<Banner></Banner>
				<Resumen data={dataSensores}></Resumen>
				{/*<Grafica></Grafica>*/}
			</div>
		</div>
		    
	);
}