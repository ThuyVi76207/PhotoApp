import { createSlice } from '@reduxjs/toolkit'

//createSlice is a helper function
const photo = createSlice({
    name: 'photos',
    initialState: [],
    reducers: { //Tao action
        addPhoto: (state, action) => {
            state.push(action.payload);
        }
    }
})

const { reducer, actions } = photo;
export const { addPhoto } = actions; //export all actions
export default reducer;