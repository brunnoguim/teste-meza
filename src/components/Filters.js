import React from 'react'
import './Filters.css'

function Filters() {
    return (
        <div className="filters-container" >
            <div className="quantidade" className="filtros" >
                <i class="fas fa-th"></i>
                <p>Quantidade</p>
            </div>
            <div className="ordenar" className="filtros" >
                <i class="fas fa-sort-amount-down-alt"></i>
                <p>Ordenar</p>
            </div>
        </div>
    )
}

export default Filters
