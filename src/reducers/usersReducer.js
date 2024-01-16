import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addSignedInUser(state, action) {
            return state.concat(action.payload)
        },
        removeSignedInUser(state, action) {
            return state.filter(user => user !== action.payload)
        }
    },
})




export const { addSignedInUser, removeSignedInUser } = usersSlice.actions
export default usersSlice.reducer