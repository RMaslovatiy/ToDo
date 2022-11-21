import { configureStore } from '@reduxjs/toolkit'
import listsReducer from '../features/counter/listsSlice'

export default configureStore({
    reducer: {
        lists: listsReducer
    }
})