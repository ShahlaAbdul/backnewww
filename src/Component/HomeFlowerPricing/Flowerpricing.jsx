import React, { useContext, useState } from 'react'
import "./flowerpricing.scss"
import FlowerPricingCards from '../FlowerPricingCards/FlowerPricingCards'
import { SearchContext } from '../../Context/searchContext'

function Flowerpricing() {
    const { searchbyFilter } = useContext(SearchContext)
    const [sortedProperty, setSortedProperty] = useState(null)
    return (
        <section id='flowersPricing'>
            <div className='flowersPricing'>
                <div className='flowerPricingText'>
                    <p>Devoted to wonderful beauty</p>
                    <h1>Flowers Pricing</h1>
                </div>
                <div className="flowerPricingSearch">
                    <div className='input'>
                        <input type="text" onChange={(e) => searchbyFilter(e)} placeholder='enter name' />
                    </div>
                    <div className='priceSort'>
                        <p onClick={() => setSortedProperty({ property: 'name', asc: true })}>Price To Up</p>
                        <p onClick={() => setSortedProperty({ property: 'name', asc: false })}>Price To Low</p>
                        <p onClick={() => setSortedProperty({ property: 'name', asc: true })}>Default</p>
                    </div>
                </div>
                <div>
                    <FlowerPricingCards sortedProperty={sortedProperty}></FlowerPricingCards>
                </div>

            </div>
        </section>
    )
}

export default Flowerpricing