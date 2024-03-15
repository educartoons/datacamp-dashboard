import { createSlice } from "@reduxjs/toolkit";

const userDefault = {
  name: "Guess",
  address: "NN",
};

const userSlice = createSlice({
  name: "user",
  initialState: userDefault,
  reducers: {
    setUser: (state, action) => {
      console.log("user");
      state.name = action.payload.name;
    },
    setAddress: (state, action) => {
      console.log("adress");
      console.log(action);
      state.address = action.payload.address;
    },
  },
});

export const { setUser, setAddress } = userSlice.actions;
export default userSlice.reducer;
