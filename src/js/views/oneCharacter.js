import React from "react";

const OneCharacter = (props) => {

    return (

        <div className="container">
            <div className="row pb-3 border-bottom border-warning border-2">
                <div className="col-md-5">
                        <img src={props.image} width="500px" className=""/>
                </div>
                <div className="col-md-7">
                        <h2 className="d-flex justify-content-center textcolor">{props.todo.name}</h2>
                        <p className="text-center textcolor">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                </div>
            </div>
            <div class="row pt-4">
                        <h6 className="col-md-2 textcolor"><p>Eye Color</p><p> {props.todo.eye_color}</p> </h6>
                        <h6 className="col-md-2 textcolor"><p>Gender</p><p> {props.todo.gender}</p> </h6>
                        <h6 className="col-md-2 textcolor"><p>Hair Color</p><p>{props.todo.hair_color}</p> </h6>
                        <h6 className="col-md-2 textcolor"><p>Height</p><p>{props.todo.height}</p> </h6>
                        <h6 className="col-md-2 textcolor"><p>Mass</p><p> {props.todo.mass}</p> </h6>
                        <h6 className="col-md-2 textcolor"><p>Skin Color</p><p> {props.todo.skin_color}</p> </h6>
            </div>
        </div>
    );
};

export default OneCharacter