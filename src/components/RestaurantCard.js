import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId,name,cuisines,avgRatingString,costForTwo,deliveryTime} = resData?.info;

    return (
        <div className="res-card">
            <img 
            className = "res-logo"
            alt = "res-logo"
            src = {CDN_URL + cloudinaryImageId}
            width = "200px" height = "120px"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};



export default RestaurantCard;