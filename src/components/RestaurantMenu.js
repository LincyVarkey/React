import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const fetchMenu = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.4870451&lng=76.9527248&restaurantId=376716&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await response?.json();
        console.log(jsonData);
    }
    useEffect(() => {
        fetchMenu();
    }, [])
    return (
        <div className="res-menu"></div>
    );
}

export default RestaurantMenu;