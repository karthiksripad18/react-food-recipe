import { createSlice } from '@reduxjs/toolkit'

interface userState {
    userName: string | null,
    userEmail: string | null
}

const initialState: userState = {
    userName: null,
    userEmail: null
}

// Slice in redux is a piece of state
// "createSlice" function takes in an "initial state", "an Object full of reducers", "a slice name"
// and automatically generates "action creators" and "action types"
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
        },
        setUserLogOutState: (state) => {
            state.userName = null;
            state.userEmail = null;
        }
    }
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;
export const selectUserName = (state: any) => state.user.userName;
export const selectUserEmail = (state: any) => state.user.userEmail;
export default userSlice.reducer;