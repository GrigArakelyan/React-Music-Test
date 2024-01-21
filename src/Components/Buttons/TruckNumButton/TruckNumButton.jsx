import "../buttons.css"
import arrowsIcon from "../../../icons/upDown.png"
import downIcon from "../../../icons/down.png"

const TruckNumButton = () => {
    return (
        <div className="addButtonDiv">
            <button className="button">
                <img src={arrowsIcon} className="icon" alt="menu"/>
                <span className="text">Truck Nu...</span>
                <img src={downIcon} className="icon" alt="menu"/>  
            </button>  
        </div>
    )
}

export default TruckNumButton