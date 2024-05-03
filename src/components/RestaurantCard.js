const RestaurantCard = (props) => {
    const { resData} = props;
    const { name, imageUrl } = resData;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img alt="res-logo" className="res-logo"
                src={imageUrl}></img>
            <h3>{name}</h3>
            {/* <h4>{resData.subtitleData.cuisines.join(", ")}</h4> */}
            <h4>{resData.rating.aggregate_rating} stars</h4>
            {/* <h4>{resData.data.castForTwo/100} FOR TWO</h4>
            <h4>{resData.data.deliveryTime} mintues</h4> */}
        </div>
    )
};

export default RestaurantCard;