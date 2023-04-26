import { useState } from "react";

function Card({id, name, info, price, image, removeTour}) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    function clickHandler() {
        if(likedTour.includes(id)) {
            
        }
    }

    
    return (
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-deatils">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`};
                    </span>
                </div>
            </div>
            
            <div className="btn">
                <button className="btn-red" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
                <button className="btn-green" onClick={clickHandler}>
                    {
                        likedTour.includes(id) ? 
                        (<FcLike fontSize="1.75rem" />) :
                        (<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>
    );
}

export default Card;