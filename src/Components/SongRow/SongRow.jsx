import "./songRow.css"
import playIcon from "../../icons/play.png"
import menuIcon from "../../icons/menu.png"
import likeIcon from "../../icons/like.png"
import checkIcon from "../../icons/check.png"
import shareIcon from "../../icons/share.png"
import downIcon from "../../icons/down.png"


const SongRow = ({musicData}) => {

    console.log("MusicData:", musicData)
    return (
        <div>
            <div className="songRow">
                <div className="divPlay">
                    <img src={menuIcon} className="icon" alt="menu"/>
                    <img src={playIcon} className="icon" alt="play"/>
                </div>
                <div className="divName">{musicData.songName}</div>
                <div className="divName">{musicData.artistName}</div>
                <div className="divNum">{musicData.trackNumber}</div>
                <div className="divIcons">
                    <img src={likeIcon} className="icon" alt="menu"/>
                    <img src={checkIcon} className="icon" alt="menu"/>
                    <img src={shareIcon} className="icon" alt="menu"/>
                    <img src={downIcon} className="icon" alt="menu"/>
                </div>
            </div>
            <div className="song"></div>
        </div>
    )
}

export default SongRow