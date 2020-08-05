import React from "react"
import { NavLink } from "react-router-dom"

const Card =(props)=>
{
    return (
        <>
        <div className="col-md-4 col-10 mx-auto">
            < div className="card">
                <img src={props.imgsrc} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and also show the cards content
                    </p>
                    <NavLink to="" class="btn btn-primary">
                        Go somewhere
                    </NavLink>
                </div>
        </div>
        </div>
        </>
    )

}

export default Card