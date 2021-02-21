import React from 'react'
import Carditem from './Carditem'
import Cardimage from './Cardimage'
import './Cards.css'

function Cards() {
    return (
        <div>
            <div className="cards-container" >
                <ul className="cards-ul" >
                    <Carditem 
                        titulo='COMO ESCOLHER O MELHOR SHAMPOO?' 
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis efficitur libero at pretium. Donec sodales mi nibh, lobortis malesuada leo finibus quis. Aliquam tincidunt ac mauris vitae iaculis. Proin aliquam, mi et viverra molestie, ex diam sagittis tellus, sed pellentesque elit eros vitae diam. Curabitur semper sem quis hendrerit imperdiet. Fusce vel urna odio. Duis accumsan urna eget bibendum varius. Praesent dictum efficitur elit vel tempor. Etiam id ipsum nunc. Praesent tortor ligula, pretium in eleifend at, sollicitudin sit amet urna. Praesent a est efficitur, fermentum eros vitae, iaculis eros. Phasellus non diam finibus.'
                    />
                    <Carditem 
                        titulo='QUEDA DE CABELO NUNCA MAIS' 
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis efficitur libero at pretium. Donec sodales mi nibh, lobortis malesuada leo finibus quis. Aliquam tincidunt ac mauris vitae iaculis. Proin aliquam, mi et viverra molestie, ex diam sagittis tellus, sed pellentesque elit eros vitae diam. Curabitur semper sem quis hendrerit imperdiet. Fusce vel urna odio. Duis accumsan urna eget bibendum varius. Praesent dictum efficitur elit vel tempor. Etiam id ipsum nunc. Praesent tortor ligula, pretium in eleifend at, sollicitudin sit amet urna.'
                    />
                </ul>
                <ul className="cards-ul" >
                    <Cardimage
                        tituloreg="CONHEÇA NOSSOS " 
                        titulo='SHAMPOOS'
                        imagem='./Images/card-img.jpg'
                    />
                </ul>
            </div>
            <div>
            <ul className="cards-ul" >
                    <Carditem 
                        titulo='ANTICASPA' 
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis efficitur libero at pretium. Donec sodales mi nibh, lobortis malesuada leo finibus quis. Aliquam tincidunt ac mauris vitae iaculis. Proin aliquam, mi et viverra molestie, ex diam sagittis tellus, sed pellentesque elit eros vitae diam. Curabitur semper sem quis hendrerit imperdiet. Fusce vel urna odio. Duis accumsan urna eget bibendum varius. Praesent dictum efficitur elit vel tempor. Etiam id ipsum nunc. Praesent tortor ligula, pretium in eleifend at, sollicitudin sit amet urna. Praesent a est efficitur, fermentum eros vitae, iaculis eros. Phasellus non diam finibus.'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Cards
