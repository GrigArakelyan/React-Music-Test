import "./songListHeader.css"

const SongListHeader = () => {
    return(
        <div className="listHeader">
            <div className="divLeft"></div>
            <div className="divTitle">Song Name</div>
            <div className="divTitle">Artist Name</div>
            <div className="divTrack"> Track</div>
            <div className="divRight"></div>
        </div>
    )
}

export default SongListHeader