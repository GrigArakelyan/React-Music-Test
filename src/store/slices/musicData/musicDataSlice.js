import { createSlice } from "@reduxjs/toolkit";
import { initialMusicData } from "./initialMusicData";

const MusicDataReducer = createSlice({
    name: "musicData",
    initialState: initialMusicData,
    reducers: {
      addMusic(state, {payload}){
        state.data = [...state.data, {
          songName: payload.songName,
          artistName: payload.artistName,
          trackNumber: state.data.length + 1,
          file: payload.file,
        }]
      }
    },
  });
  
  export default MusicDataReducer.reducer;
  export const {addMusic} = MusicDataReducer.actions;