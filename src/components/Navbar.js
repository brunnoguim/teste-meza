import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar" >
                <div className="navbar-container" >
                    <img src="/images/panvel-logo.png" className="logo" ></img>
                    <div className="categorias" >
                        <i class="fas fa-bars"></i>
                        <h3>CATEGORIAS</h3>
                    </div>
                    <div className="busca" >
                        <input placeholder="O que você procura?" ></input>
                        <i class="fas fa-search"></i>
                    </div>
                    <div className="entrar" >
                        <i class="fas fa-user"></i>
                        <h3>ENTRAR</h3>
                    </div>
                    <div className="carrinho" >
                        <i class="fas fa-shopping-basket"></i>
                    </div>
                    <div className="menu-mobile" >
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
