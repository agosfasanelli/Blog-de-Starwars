import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"

const Character = (props) => {

    const { store, actions } = useContext(Context);
  
   
    
    
    return (
        <div className="row">
            <div className="card bg-dark border border-secondary p-0">
                <img src= {props.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text text-secondary">
                            {props.gender}
                            {props.height}
                            {props.birth_year}
                        </p>
                        <Link 
                            to={`/info/${props.uid}`} 
                            className="btn btn-warning float-start">
                            Learn More!
                        </Link>
                        {store.favourites.includes(props.name) ?
                            <button className={"btn btn-dark float-end cursornotallowed"}><i class="far fa-heart"></i></button>    
                            :                            
                            <button onClick={()=>actions.addFavourite(props.name)} className={"btn btn-warning float-end"}><i class="far fa-heart"></i></button>
                        }
                    </div>
            </div>
        </div>
    )
}

export default Character