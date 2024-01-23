import { createSlice } from "@reduxjs/toolkit";
import { initialMusicData } from "./initialMusicData";

const MusicDataReducer = createSlice({
    name: "musicData",
    initialState: initialMusicData,
    reducers: {
      addMusic(state, {payload}){
        console.log("payload:", payload) /////
        state.data = [...state.data, {
          id: payload.id,
          songName: payload.songName,
          artistName: payload.artistName,
          trackNumber: payload.trackNumber,
          file: payload.file,
          music: payload.music
        }]
      },
      deleteMusic(state, {payload}){
        state.data = state.data.filter(music =>  music.id !== payload.id)
      }
    },
  });
  
  export default MusicDataReducer.reducer;
  export const {addMusic, deleteMusic} = MusicDataReducer.actions;