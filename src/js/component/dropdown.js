import React, {useContext} from "react";
import { Context } from "../store/appContext";

const Dropdown =() =>{

    const {store,actions}= useContext(Context)

    


   



return(
<>
            <button className="btn btn-warning dropdown-toggle" type="button" data-bs-auto-close="false" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="badge bg-secondary">{store.favorite.length}</span> 
                        </button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    
					{store.favorite.map((favorite,index)=>{
                       return <li>
                                   
                                   <div className="dropdown-item float-start inline" href="#">{favorite}<i onClick={()=>actions.deleteFavourite(index)} className="fas fa-trash float-end inline cursorpointer"></i></div>
                                   
                                </li>
                    })}
                    
                    
				</ul>
</>

)

};

export default Dropdown