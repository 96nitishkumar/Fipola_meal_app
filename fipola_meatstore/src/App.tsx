import "./App.css";
import LoginOrRegister from "./components/loginAndRegister/LoginAndRegister";
import OtpScreen from "./components/otpScreen/OtpScreen";
import OurCategory from "./components/ourCategory/OurCategory";
import SingleProduct from "./components/singleProduct/SingleProduct";
import { Box } from "@mui/material";
import SingleCategoryProducts from "./components/productsCategoryawise/SingleCategoryProducts";
import CartPage from "./components/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";
import HomeScreen from "./components/homeScreen/HomeScreen";
import ProfileScreen from "./components/profile/ProfileComponent";
import RegisterPage from "./components/registerPage/RegisterPage";
import UPIPayment from "./components/paymentPages/UPIPayment";
import CardPayment from "./components/cardPay/CardPayment";
import OrderHistory from "./components/orderHistory/OrderHistory";
import SingleOrderHistory from "./components/paymentPages/SingleOrderHistory";
import OrderSuccess from "./components/orderSuccess/OrderSuccess";
import AddNewAddress from "./components/addAddress/AddAddress";
import MessagesScreen from "./components/message/MessagePage";
import PageUnderConstruction from "./components/pageUnderConstruction/PageUnderConstruction";
import PaymentMethod from "./components/differentPaymentGateways/MultipleOptionsPayment";
import loadingGif from "../src/assets/loading/loading.gif";
import { Suspense } from "react";
import DeliveryAddress from "./components/deliveryAddresses/DeliveryAddresses";

function App() {
  return (
    <Provider store={store}>
      <Box sx={{ width: "99.8%", margin: "auto" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginOrRegister />} />
            <Route path="/otpPage" element={<OtpScreen />} />
            <Route path="/ourcategory" element={<OurCategory />} />
            <Route path="/singleProduct" element={<SingleProduct />} />
            <Route
              path="/SingleCategoryProduct"
              element={<SingleCategoryProducts />}
            />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/upiPayment" element={<UPIPayment />} />
            <Route path="choosepaymentMode" element={<PaymentMethod />} />
            <Route path="/cardPayment" element={<CardPayment />} />
            <Route path="/orderHistory" element={<OrderHistory />} />
            <Route path="/currentorder" element={<SingleOrderHistory />} />
            <Route path="/OrderSuccess" element={<OrderSuccess />} />
            <Route path="/message" element={<MessagesScreen />} />
            <Route path="/deliveryAddress" element={<DeliveryAddress />} />
            <Route path="/addNewAddress" element={<AddNewAddress />} />
            <Route path="*" element={<PageUnderConstruction />} />{" "}
          </Routes>
        </BrowserRouter>
      </Box>
    </Provider>
  );
}

export default App;
