import "../buttons.css"
import playIcon from "../../../icons/play.png"
import downIcon from "../../../icons/down.png"

const PlayAllButton = ({playButtonClick}) => {
    
    return (
        <div className="buttonDiv" onClick={playButtonClick}>
            <button className="button">
                <img src={playIcon} className="icon" alt="play"/>
                <span className="text">Play All</span>
                <div className="line"></div>
                <img src={downIcon} className="icon" alt="all"/>
            </button>
        </div>

    )
}

export default PlayAllButton