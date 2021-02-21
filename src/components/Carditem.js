import React from 'react'

function Carditem(props) {
    return (
        <div>
            <li className="card-item" >
                <div className="card-header">
                    <h3>{props.titulo}</h3>
                </div>
                <div className="card-body" >
                    <p>{props.texto}</p>
                </div>
            </li>
        </div>
    )
}

export default Carditem
