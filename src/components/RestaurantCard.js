import { IMG_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const { resData} = props;
    const { name, cloudinaryImageId } = resData.info;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img alt="res-logo" className="res-logo"
                src={IMG_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} mintues</h4>
        </div>
    )
}

export default RestaurantCard