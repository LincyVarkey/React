import React, { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import ShimmerUI from "../components/ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [resInfo, setResInfo] = useState([]);
    const [filteredList, setFilteredList] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await response.json();

        setResInfo(jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (resInfo.length === 0) return <ShimmerUI />;

    return (
        <div className="body-container">
            <div className="search">
                <input type='text' onChange={(e) => {
                    setSearchText(e.target.value)
                }} />
                <button className="search-button" onClick={() => {
                    const filteredData = resInfo.filter((resItem) =>
                        resItem.info.name.includes(searchText)
                    )
                    setFilteredList(filteredData);
                }}>Search</button>
            </div>
            <div className="res-container">
                {filteredList.map((resItem) => (
                    <Link to={`/restaurant/${resItem.info.id}`} key={resItem?.info?.id}><RestaurantCard resItem={resItem?.info} key={resItem?.info?.id} /></Link>
                )
                )}
            </div>
        </div>
    )
}

export default Body;