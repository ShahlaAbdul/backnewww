import React, { useContext, useEffect, useState } from 'react'
import "./flowerPricingCards.scss"
import { SearchContext } from '../../Context/searchContext'

function FlowerPricingCards({ sortedProperty }) {
    const [fetchData, setFetchData] = useState([])
    const { searchdata } = useContext(SearchContext)

    useEffect(() => {
        fetchProducts()
    }, [])

    function fetchProducts() {
        fetch("http://localhost:3400/")
            .then((res) => res.json())
            .then((data) => setFetchData(data))
    }

    function handleDelete(id) {
        fetch("http://localhost:3400/" + id,{ method:"Delete"})
            .then((res) => res.json())
            .then((data) =>{
                fetchProducts()
            })
    }


    return (
        <div id='flowersPricing'>

            <div className="flowersPricingContainer">
                {fetchData
                    .filter((x) => x.name.toLowerCase().includes(searchdata.toLowerCase()))
                    .sort((a, b) => {
                        if (sortedProperty && sortedProperty.asc === false) {
                            return (a[sortedProperty.property] > b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] > a[sortedProperty.property]) ? -1 : 0)
                        }
                        else if (sortedProperty && sortedProperty.asc === "") {
                            return (a[sortedProperty.property] > b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] < a[sortedProperty.property]) ? -1 : 0)
                        }
                        else {

                            return 0
                        }
                    })
                    .map((x) => (
                        <div className='flowerCard'>
                            <ul>
                                <img src={`${x.image}`}></img>
                                <li>{x.name}</li>
                                <li>${x.price}</li>
                                <p className='delete' onClick={(x) => handleDelete(x._id)}>Delete</p>
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default FlowerPricingCards