import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Menu from './Menu'
import Resumen from "./Resumen"
import Grafica from "./Grafica"
import 'bootstrap/dist/css/bootstrap.css'
import Banner from "./Banner";

export default function Home() {
	const [dataSensores, setdataSensores] = useState([]);

	async function getPageData() {
		const apiUrlEndpoint = `http://localhost:3000/api/sensores`;
		const response = await fetch(apiUrlEndpoint);
		const res = await response.json();
		console.log(res);
		setdataSensores(res);
	}

	useEffect(() => {
		getPageData();
		document.title = 'WeCare';
	}, []);

	return (
		<div>
			<Menu></Menu>
			<div className ="container">
				<Banner></Banner>
				<Resumen></Resumen>
				<Grafica></Grafica>
			</div>
		</div>
		    
	);
}