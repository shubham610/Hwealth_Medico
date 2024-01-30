import React from 'react'
import { Link } from 'react-router-dom'

const Searchresult = ({ searchResults }) => {
    return (
        searchResults.map((item, id) => {

            const src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg";
            return (
                <Link to="/product" state={{ data:item.item, src }}>
                <div className='p-4 rounded-lg bg-cyan-50 -mt-6  '>
                  <div>{item.item.name}</div>
                    <hr />
                </div>
                </Link> 
            )
        })
    )
}

export default Searchresult