import React, {useEffect, useState} from "react";
import "../../styles/home.css";
import Characters from "./characters";
import Card from "../component/card";


export const Home = () => {

	const [planets,setPlanets] = useState([])

	useEffect(() =>{
		fetch("https://www.swapi.tech/api/planets") 
		

		.then((response) => {
		console.log(response.ok); // will be true if the response is successfull
		console.log(response.status); // the status code = 200 or code = 400 etc.
		return response.json();
		})

		.then((response) => {
		setPlanets(response.results)
		})
		.catch(error => console.error("Error:", error))

		},[])


	return (
		<div className="container">
			
			<Characters />
			
			<div className="marginclass"><h2 className="text-warning">Planets</h2></div>
					<div className="divoverflow">
						
						{planets.slice(1).map(((planet,index) => {
								return( 		
							<Card index={index} name={planet.name} uid={planet.uid} />		
								)
						})) 
						}
		
					</div>
					</div>
	
	
	
)};

export default Home