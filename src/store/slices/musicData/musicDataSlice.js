import { createSlice } from "@reduxjs/toolkit";
import { initialMusicData } from "./initialMusicData";

const MusicDataReducer = createSlice({
    name: "musicData",
    initialState: initialMusicData,
    reducers: {
      addMusic(state, {payload}){
        state.data = [...state, {
          songName: payload.songName,
          artistName: payload.artistName,
          trackNumber: 1,
          file: payload.fileName
        }]
      }
    },
  });
  
  export default MusicDataReducer.reducer;
  export const {addMusic} = MusicDataReducer.actions;