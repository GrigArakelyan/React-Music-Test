import "../buttons.css"
import playIcon from "../../../icons/play.png"
import downIcon from "../../../icons/down.png"

const PlayAllButton = () => {
    return (
        <div className="addButtonDiv">
            <button className="button">
                <img src={playIcon} className="icon" alt="menu"/>
                <span className="text">Play All</span>
                <div className="line"></div>
                <img src={downIcon} className="icon" alt="menu"/>
            </button>
        </div>

    )
}

export default PlayAllButton