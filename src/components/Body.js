import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Simmer from "./Simmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/api/seo/getListing?lat=12.960059122809971&lng=77.57337538383284"
        );

        const jsonData = await data.json();
        setListOfRestaurants(jsonData?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //conditional rendering
    return listOfRestaurants.length == 0 ? (<Simmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e)=> {
                        setSearchText(e.target.value)
                    }}
                    />
                    <button onClick={()=>{
                        const filteredData = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredData);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(res => res.info.aggregate_rating > 4)
                        setFilteredRestaurants(filteredList);
                    }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body