import { connect } from "react-redux";
import React from "react";
import { buyCake } from "../redux/cakes/cakeAction";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number Of Cake:{props.numberOfCake} </h2>
      <button onClick={props.buyCake}>BuyCake</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numberOfCake: state.numberOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
