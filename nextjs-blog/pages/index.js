import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Menu from './Menu'
import Resumen from "./Resumen"
import 'bootstrap/dist/css/bootstrap.css'
import Banner from "./Banner";
import useAppContext from "../control/context";

export default function Home() {
	const [dataSensores, setdataSensores] =  useAppContext();

	async function getPageData() {
		const apiUrlEndpoint = `http://localhost:3000/api/bpm`;
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
			</div>
		</div>
		    
	);
}