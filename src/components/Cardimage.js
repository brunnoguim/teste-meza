import React from 'react'
import imageCard from '../Images/card-img.jpg'

function Cardimage(props) {
    return (
        <div className="wrapper" >
            <li className="card-image" >
                <div className="card-header-image" >
                    <h3><span>{props.tituloreg}</span>{props.titulo}</h3>
                </div>
                <div className="card-body" >
                    <img src={imageCard} ></img>
                </div>
            </li>
        </div>
    )
}

export default Cardimage
