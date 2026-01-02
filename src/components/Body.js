import resList from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
//  state variable - super powerful variable
    const [List,setList] = useState(resList);
    return (
        
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={ () => {
                    const filteredlist = List.filter(
                        (res) => res.info.avgRating >= 4.5
                
                    );
                    setList(filteredlist);
                }
                }
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    List.map(restaurant => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
};

export default Body;