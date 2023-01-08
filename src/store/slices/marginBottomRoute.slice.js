import { createSlice } from "@reduxjs/toolkit";

const marginBottomRoute = createSlice({
  name: 'marginBottomRoute',
  initialState: true,
  reducers: {
    marginActive: state => true,
    marginOff: state => false
  }
})


export const { marginActive, marginOff } = marginBottomRoute.actions
export default marginBottomRoute.reducer