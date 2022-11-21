import { createSlice } from '@reduxjs/toolkit'

export const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        value: 0
    },
    reducers: {
        alert: state => {
            console.log(state.value)
        }
    }
})
export const { alert } = listsSlice.actions

export default listsSlice.reducer