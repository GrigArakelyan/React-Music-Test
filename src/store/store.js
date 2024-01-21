import { configureStore } from "@reduxjs/toolkit";
import musicDataSlice from "./slices/musicData/musicDataSlice";

const store = configureStore({
    reducer: {
        musicData: musicDataSlice
    },
  });
  
  
  export default store