import "../buttons.css"
import arrowsIcon from "../../../icons/upDown.png"
import downIcon from "../../../icons/down.png"

const TruckNumButton = () => {
    return (
        <div className="buttonDiv">
            <button className="button">
                <img src={arrowsIcon} className="icon" alt="alt"/>
                <span className="text">Truck Nu...</span>
                <img src={downIcon} className="icon" alt="all"/>  
            </button>  
        </div>
    )
}

export default TruckNumButton