import { useSelector } from "react-redux"
import SongRow from "./SongRow/SongRow"
import { selectMusicData } from "../../store/selectores/musicData.js/musicData"
import SongListHeader from "./SongListHeader/SongListHeader"
import Loading from "../Loading/Loading"
import Error from "../Error/Error"

const SongList = () => {
    
    const {data, loading, error} = useSelector(selectMusicData)

    return (
        <div>
            <SongListHeader/>
            {error && <Error />}
            {loading && <Loading />}
            {data && data.map(musicData => (
                <SongRow key={musicData.trackNumber} musicData={musicData}/>
            ))}
        </div>
    )
}

export default SongList