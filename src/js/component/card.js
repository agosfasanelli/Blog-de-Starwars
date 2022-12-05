import React, {useState,useEffect,useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

const Card =(props) =>{


const {actions}= useContext(Context)    
const [type,setType] = useState([])

    
    useEffect(() =>{
        fetch(`https://www.swapi.tech/api/planets/${props.uid}`) 
        

    .then((response) => {
    console.log(response.ok); // will be true if the response is successfull
    console.log(response.status); // the status code = 200 or code = 400 etc.
    return response.json();
        })

    .then((response) => {
    setType(response.result.properties)
        })
    .catch(error => console.error("Error:", error))

        },[])

  

    return (
        <>
             <div className="col-lg-4 col-md-3 col-sm-6"> 
				<div key={props.index} className="card marginrightleft">
					<img src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`}  className="card-img-top"/> 
		  			<div className="card-body cardbody">
						<h5 className="card-title">{props.name}</h5>
                        <p class="card-text">{type.population}</p>
                        <p class="card-text">Terrain: {type.terrain}, {type.climate}</p>
                            <div className="position-absolute bottom-0 start-0">    
                            <Link to={`/planets/${props.uid}`}>
                                <button onClick={props.uid} className="btn btn-outline-primary">Learn more!</button>
                            </Link>
                                <button onClick={()=>actions.addFavourite(props.name)} className="btn btn-outline-warning"><i class="far fa-heart"></i></button>
                            </div>     
                                
					</div>								
			    </div>	
            </div>      
        </>
    )
};

export default Card