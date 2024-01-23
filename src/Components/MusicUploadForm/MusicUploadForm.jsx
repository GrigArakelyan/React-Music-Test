import { useDispatch } from "react-redux"
import "./musicForm.css"
import { useRef, useState } from "react"
import { Button } from "@mui/material"
import { addMusic } from "../../store/slices/musicData/musicDataSlice"

const MusicUploadForm = ({handleClose}) => {
    const dispatch = useDispatch()
    const [songName, setSongName] = useState('')
    const [artistName, setArtistName] = useState('')
    const [audioFile, setAudioFile] = useState(null);
    const fileRef = useRef()

    const openFiles = () => {
        fileRef.current.click()
      }
      const uploadAudio = (e) => {
        setAudioFile(e.target.files[0])
      }
    
      const addedNewMusic = () => {
        if(songName && artistName && audioFile){
          const newMusicData = {
            id: Math.random(),
            songName,
            artistName,
            trackNumber: 1,
            file: audioFile,
            music: ""
          }
          dispatch(addMusic(newMusicData))
          console.log("New Music Data:", newMusicData)  /////
          handleClose()
        }
      }

    return (
        <div>
            <h2 className='modalTitle'>Added New Music</h2>
            <div className="inputs">
                <input type='text' name='songName' placeholder='Song Name' className='input'
                    value={songName}
                    onChange={e => setSongName(e.target.value)}/>
                <input type='text' name='artistName' placeholder='Artist Name' className='input'
                    value={artistName}
                    onChange={e => setArtistName(e.target.value)}/>
                <Button className='button' onClick={openFiles}> Choose File
                    <input hidden type="file" name='file' accept="audio/*, .mp3, .wav" className="addButton" ref={fileRef}
                        onChange={uploadAudio}/> 
                </Button>
                {songName && artistName && audioFile && 
                <Button className='button' onClick={addedNewMusic}>Add music</Button>}
            </div>
        </div>
    )
}

export default MusicUploadForm