import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl, endpoints } from "../environment/Paths";
import { singleProductCategoryWise } from "../environment/Data";
export interface IState {
  data: [];
  loginPhoneNumber: string;
  otpRequestFulfilled: boolean;
  newuserRegisterd: boolean;
  loginUserToken: string;
  currentActiveTab: string;
  singleCategoryChickens: { image: string; name: string; quantity: number }[];
  cart: { image: string; name: string; quantity: number }[];
  addresses: { name: string; city: string; pin: string }[];
}

const initialState: IState = {
  loginPhoneNumber: "",
  newuserRegisterd: false,
  otpRequestFulfilled: false,
  addresses: [],
  loginUserToken: "",
  currentActiveTab: "home",
  data: [],
  singleCategoryChickens: singleProductCategoryWise,
  cart: [],
};
export const requestOtp = createAsyncThunk(
  "requesting the otp",
  async (number: string, thunkAPI) => {
    try {
      const response = await fetch(
        `${baseUrl + endpoints.requestLoginOtp}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify({ mobile_number: `91${number}` }),
        }
      );
      const data = await response.json();
    

      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const registerNewUser = createAsyncThunk(
  "register the new user",
  async (
    obj: {
      first_name: string;
      last_name: string;
      email: string;
      password: string;
      mobile_number: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await fetch(
        `${baseUrl + endpoints.registerNewUser}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token:
              "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNzE3ODMxMzM3fQ.kWPFEDBzJ1ftgE27o_I4aPHZ9dV-q9JDV7iYmKJd4j4",
          },
          body: JSON.stringify({
            user: obj,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      console.log(data, "rtytui");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const validateOTP = createAsyncThunk(
  "validate OTP",
  async (obj: { mobile: string; otp: string }, thunkAPI) => {
    console.log("validating here", obj);

    try {
      const response = await fetch(
        `${baseUrl}${endpoints.validateOTP}?mobile_number=91${obj.mobile}&otp_number=${obj.otp}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const mainReducer = createSlice({
  name: "fipola",
  initialState,
  reducers: {
    setPhoneNumber: (state, action) => {
      state.loginPhoneNumber = action.payload;
    },
    reducerAction: (state) => {
      state.singleCategoryChickens[1].quantity++;
    },
    addNewAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    changeQnty: (state, action) => {
      const index = state.singleCategoryChickens.findIndex(
        (each) => each.name == action.payload.name
      );

      if (action.payload.action === "increment") {
        state.singleCategoryChickens[index].quantity++;
      } else {
        if (state.singleCategoryChickens[index].quantity > 0) {
          state.singleCategoryChickens[index].quantity--;
        }
      }

      state.cart = state.singleCategoryChickens.filter(
        (each) => each.quantity > 0
      );
    },
    setCurrentTab: (state, action) => {
      state.currentActiveTab = action.payload;
    },
    deleteAddress: (state, action) => {
      state.addresses = state.addresses.filter(
        (each, index) => index !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(requestOtp.pending, (state, action) => {})
      .addCase(requestOtp.fulfilled, (state, action) => {
        console.log(action.payload, "jshdh");
        state.otpRequestFulfilled = true;
      })
      .addCase(requestOtp.rejected, (state, action) => {
        console.log(action, "iuiu");
      })
      .addCase(registerNewUser.pending, (state, action) => {})
      .addCase(registerNewUser.fulfilled, (state, action) => {
        console.log(action.payload, "jshdh");

        if (action.payload.data.status) {
          state.newuserRegisterd = true;
        }
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        console.log(action, "iuiu");
      })
      .addCase(validateOTP.pending, (state, actions) => {
        console.log("sfjsdf")
      })

      .addCase(validateOTP.fulfilled, (state, actions) => {
        state.loginUserToken = actions.payload;
        console.log(actions.payload);
      })
      .addCase(validateOTP.rejected, (state, actions) => {
        console.log(actions.payload, "rejected");
      });
  },
});

export default mainReducer.reducer;

export const {
  reducerAction,
  setPhoneNumber,
  changeQnty,
  setCurrentTab,
  deleteAddress,
  addNewAddress,
} = mainReducer.actions;
