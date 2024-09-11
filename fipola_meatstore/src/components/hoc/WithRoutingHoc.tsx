import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const WithRoutingHoc = (OriginalComponent: React.ComponentState) => {
  const ComponentWithRouter = (props: Object) => {
    const navigate = useNavigate();
    const location = useLocation();
    const selector:any= useSelector((state:RootState)=> state.state);

    return (
      <OriginalComponent {...props} navigate={navigate} location={location} selector={selector}/>
    );
  };
  return ComponentWithRouter;
};

export default WithRoutingHoc;
