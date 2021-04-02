import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out our Sponsors!</h1>
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="../images/img-9.jpg"
                    text="Explore the hidden waterfall"
                    label="Sponsor"
                    path='staff'
                    />
                    <CardItem 
                    src="../images/img-2.jpg"
                    text="Explore the hidden waterfall"
                    label="Sponsor"
                    path='staff'
                    />
                    <CardItem 
                    src="../images/img-3.jpg"
                    text="Explore the hidden waterfall"
                    label="Sponsor"
                    path='staff'
                    />
                    <CardItem 
                    src="../images/img-4.jpg"
                    text="Explore the hidden waterfall"
                    label="Sponsor"
                    path='staff'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Cards