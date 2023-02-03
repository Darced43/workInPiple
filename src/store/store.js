import { configureStore } from "@reduxjs/toolkit";
import personRedus from './personsSlice'

export default configureStore({
    reducer: {
        persons: personRedus
    }
})