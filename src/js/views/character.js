import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"

const Character = (props) => {

    const { store, actions } = useContext(Context);
    const [like, setLike] = useState("btn btn-outline-warning float-end");


    const action = ()=>{
        actions.addFavourite(props.name);
        setLike("btn btn-outline-secondary float-end cursornotallowed") 

    }

    
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
                        <button type="button" className={like} onClick={action}><i class="far fa-heart"></i></button>
                    </div>
            </div>
        </div>
    )
}

export default Character